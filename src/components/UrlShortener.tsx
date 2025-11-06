import { useState } from 'react';
import { Link2, Copy, Check, Loader2, TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { generateSlug, isValidUrl, getShortUrl } from '../utils/shortener';

export default function UrlShortener() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [slug, setSlug] = useState('');
  const [clicks, setClicks] = useState(0);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleShorten = async () => {
    setError('');

    if (!longUrl.trim()) {
      setError('Please enter a URL');
      return;
    }

    if (!isValidUrl(longUrl)) {
      setError('Please enter a valid URL (must start with http:// or https://)');
      return;
    }

    setLoading(true);

    try {
      const newSlug = generateSlug(6);

      const { error: insertError } = await supabase
        .from('links')
        .insert({
          slug: newSlug,
          long_url: longUrl,
        });

      if (insertError) throw insertError;

      const shortUrlGenerated = getShortUrl(newSlug);
      setShortUrl(shortUrlGenerated);
      setSlug(newSlug);
      setClicks(0);
    } catch (err) {
      console.error('Error creating short link:', err);
      setError('Failed to create short link. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleReset = () => {
    setLongUrl('');
    setShortUrl('');
    setSlug('');
    setClicks(0);
    setError('');
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        {!shortUrl ? (
          <div>
            <div className="mb-6">
              <label htmlFor="url-input" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your long URL
              </label>
              <div className="relative">
                <input
                  id="url-input"
                  type="text"
                  value={longUrl}
                  onChange={(e) => setLongUrl(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleShorten()}
                  placeholder="https://example.com/very/long/url/that/needs/shortening"
                  className="w-full px-4 py-4 pr-12 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  disabled={loading}
                />
                <Link2 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>

            <button
              onClick={handleShorten}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Shortening...
                </>
              ) : (
                <>
                  <Link2 className="w-5 h-5 mr-2" />
                  Shorten URL
                </>
              )}
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-8">
              <div className="inline-block bg-green-100 rounded-full p-3 mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Your short link is ready!
              </h3>
              <p className="text-gray-600">
                Share it anywhere and track its performance
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Short URL
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={shortUrl}
                  readOnly
                  className="flex-1 px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-lg font-mono"
                />
                <button
                  onClick={handleCopy}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors flex items-center gap-2 font-semibold"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span className="hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 text-blue-900">
                <TrendingUp className="w-5 h-5" />
                <div>
                  <p className="text-sm font-medium">Total Clicks</p>
                  <p className="text-2xl font-bold">{clicks}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="text-sm font-medium text-gray-700 mb-1">Original URL</p>
              <p className="text-gray-600 break-all">{longUrl}</p>
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Shorten Another URL
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
