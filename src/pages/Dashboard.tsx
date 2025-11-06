import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Link as LinkType } from '../lib/supabase';
import UrlShortener from '../components/UrlShortener';
import { Copy, Trash2, Eye, ExternalLink, Search, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const [links, setLinks] = useState<LinkType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const { data, error } = await supabase
        .from('links')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLinks(data || []);
    } catch (err) {
      console.error('Error fetching links:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this link?')) return;

    try {
      const { error } = await supabase
        .from('links')
        .delete()
        .eq('slug', slug);

      if (error) throw error;
      setLinks(links.filter((link) => link.slug !== slug));
    } catch (err) {
      console.error('Error deleting link:', err);
    }
  };

  const handleCopy = (slug: string) => {
    const url = `${window.location.origin}/${slug}`;
    navigator.clipboard.writeText(url);
    setCopied(slug);
    setTimeout(() => setCopied(null), 2000);
  };

  const filteredLinks = links.filter(
    (link) =>
      link.slug.includes(searchTerm) ||
      link.long_url.includes(searchTerm)
  );

  const totalClicks = links.reduce((sum, link) => sum + link.clicks, 0);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Manage and track all your links</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Links</p>
                <p className="text-3xl font-bold text-gray-900">{links.length}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Eye className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Clicks</p>
                <p className="text-3xl font-bold text-gray-900">{totalClicks.toLocaleString()}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Avg. Clicks/Link</p>
                <p className="text-3xl font-bold text-gray-900">
                  {links.length > 0 ? Math.round(totalClicks / links.length) : 0}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="text-purple-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Link</h2>
          <UrlShortener />
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <div className="flex items-center gap-2">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search by slug or URL..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 outline-none text-gray-900"
              />
            </div>
          </div>

          {loading ? (
            <div className="p-12 text-center text-gray-600">Loading...</div>
          ) : filteredLinks.length === 0 ? (
            <div className="p-12 text-center text-gray-600">
              {links.length === 0
                ? 'No links yet. Create your first short link above!'
                : 'No links match your search.'}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Short Link
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Original URL
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Clicks
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Created
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredLinks.map((link) => (
                    <tr key={link.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-blue-600">
                            {link.slug}
                          </code>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={link.long_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 truncate text-sm flex items-center gap-1"
                        >
                          {link.long_url.substring(0, 40)}...
                          <ExternalLink size={14} />
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-gray-900">
                          {link.clicks}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(link.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleCopy(link.slug)}
                            className="p-2 hover:bg-gray-100 rounded text-gray-600 hover:text-blue-600 transition-colors"
                            title="Copy link"
                          >
                            {copied === link.slug ? (
                              <span className="text-xs font-semibold text-green-600">Copied!</span>
                            ) : (
                              <Copy size={18} />
                            )}
                          </button>
                          <button
                            onClick={() => handleDelete(link.slug)}
                            className="p-2 hover:bg-gray-100 rounded text-gray-600 hover:text-red-600 transition-colors"
                            title="Delete link"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
