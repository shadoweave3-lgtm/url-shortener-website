import { useEffect, useState } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface RedirectHandlerProps {
  slug: string;
}

export default function RedirectHandler({ slug }: RedirectHandlerProps) {
  const [error, setError] = useState(false);

  useEffect(() => {
    const redirect = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('links')
          .select('long_url, clicks')
          .eq('slug', slug)
          .maybeSingle();

        if (fetchError) throw fetchError;

        if (!data) {
          setError(true);
          return;
        }

        await supabase
          .from('links')
          .update({
            clicks: data.clicks + 1,
            last_clicked_at: new Date().toISOString(),
          })
          .eq('slug', slug);

        window.location.href = data.long_url;
      } catch (err) {
        console.error('Redirect error:', err);
        setError(true);
      }
    };

    redirect();
  }, [slug]);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center max-w-md">
          <div className="inline-block bg-red-100 rounded-full p-4 mb-6">
            <AlertCircle className="w-12 h-12 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Link Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            This short link doesn't exist or may have expired.
          </p>
          <a
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
          >
            Create a New Link
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-16 h-16 text-blue-600 animate-spin mx-auto mb-4" />
        <p className="text-xl text-gray-700 font-medium">Redirecting...</p>
      </div>
    </div>
  );
}
