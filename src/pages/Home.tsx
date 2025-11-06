import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, BarChart3 } from 'lucide-react';
import UrlShortener from '../components/UrlShortener';

export default function Home() {
  return (
    <div className="pt-16">
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Shorten Your Links, Amplify Your Reach
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12">
              Transform long URLs into short, beautiful, and trackable links. Perfect for marketing, social media, and sharing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors inline-flex items-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </Link>
              <Link
                to="/features"
                className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-xl border-2 border-gray-200 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-gradient-to-b from-blue-50 to-white rounded-3xl shadow-lg p-8 md:p-12">
              <UrlShortener />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Why Choose Linky?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Generate and share short links instantly. No delays, no complications.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">
                Your links are protected with enterprise-grade security and reliability.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics</h3>
              <p className="text-gray-600">
                Track clicks, analyze performance, and understand your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to shorten your links?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who are already using Linky
          </p>
          <Link
            to="/dashboard"
            className="inline-block bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Start Free Today
          </Link>
        </div>
      </section>
    </div>
  );
}
