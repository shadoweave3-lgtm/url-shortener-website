import { Users, Target, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Linky
            </h1>
            <p className="text-xl text-gray-600">
              Making the web a better place, one short link at a time
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Linky was born from a simple observation: sharing long, complicated URLs is frustrating. Whether you're marketing a product, sharing research, or just trying to fit a link in a social media post, the existing solutions felt clunky and impersonal.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              In 2023, our team decided to build something better. We created Linky with three core principles: simplicity, reliability, and transparency. No complicated pricing tiers. No hidden features. Just a clean, fast tool that works.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, Linky powers thousands of links across the globe, helping businesses, marketers, and individuals share their message effectively.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Simplicity</h3>
              <p className="text-gray-600">
                We believe powerful tools should be simple to use. No complexity, no learning curve. Just click, shorten, share.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Award className="text-green-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reliability</h3>
              <p className="text-gray-600">
                Your links are critical. We maintain 99.99% uptime and use enterprise-grade infrastructure.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Heart className="text-purple-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">User-Centric</h3>
              <p className="text-gray-600">
                Every decision is made with users in mind. Your feedback shapes our roadmap.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-red-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600">
                No hidden fees, no surprise changes. We're honest about what you get.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            By The Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100K+</div>
              <p className="text-gray-600">Links Created</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
              <p className="text-gray-600">Monthly Clicks</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <p className="text-gray-600">Countries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
