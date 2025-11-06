import { Check, Zap, BarChart3, Globe, Lock, Share2 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Instant Link Shortening',
      description: 'Generate short, memorable links in seconds. No complex setup required.',
      color: 'blue',
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Track every click with detailed analytics. Understand your audience better.',
      color: 'green',
    },
    {
      icon: Globe,
      title: 'Global Availability',
      description: 'Your links work anywhere in the world with lightning-fast redirects.',
      color: 'purple',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols to protect your data.',
      color: 'red',
    },
    {
      icon: Share2,
      title: 'Easy Sharing',
      description: 'One-click copy to clipboard. Share on any platform instantly.',
      color: 'yellow',
    },
    {
      icon: Check,
      title: 'Reliable Redirects',
      description: '99.99% uptime guarantee. Your links always work when you need them.',
      color: 'teal',
    },
  ];

  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    red: 'bg-red-100 text-red-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    teal: 'bg-teal-100 text-teal-600',
  };

  return (
    <div className="pt-16">
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Powerful Features
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to manage, track, and optimize your links
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorClass = colorClasses[feature.color] || colorClasses.blue;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${colorClass}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              How It Works
            </h2>

            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Paste Your URL
                  </h3>
                  <p className="text-gray-600">
                    Simply paste any long URL into Linky. We support any valid link.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Your Short Link
                  </h3>
                  <p className="text-gray-600">
                    Instantly receive a unique short link. Copy it with one click.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Share Everywhere
                  </h3>
                  <p className="text-gray-600">
                    Share on social media, email, messages, or anywhere else.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Track Analytics
                  </h3>
                  <p className="text-gray-600">
                    Monitor clicks in real-time from your dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
