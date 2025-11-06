import { Link2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-blue-600 p-4 rounded-2xl">
          <Link2 className="w-12 h-12 text-white" />
        </div>
      </div>
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Shorten Your Links
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Transform long, complex URLs into short, shareable links in seconds.
        Track clicks and share with ease.
      </p>
    </div>
  );
}
