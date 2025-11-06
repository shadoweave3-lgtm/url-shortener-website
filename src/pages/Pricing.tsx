import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for individuals',
      features: [
        'Unlimited link shortening',
        'Basic analytics',
        'Standard support',
        '7-day click history',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$9',
      period: '/month',
      description: 'For small teams',
      features: [
        'Everything in Starter',
        'Advanced analytics',
        'Custom branding',
        '90-day click history',
        'Priority support',
        'API access',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Unlimited custom domains',
        'Team management',
        'Unlimited click history',
        'Dedicated support',
        'SLA guarantee',
        'White-label options',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your needs. Always flexible, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl transition-all ${
                  plan.popular
                    ? 'bg-blue-600 text-white shadow-2xl md:scale-105'
                    : 'bg-white text-gray-900 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="p-8">
                  {plan.popular && (
                    <div className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={plan.popular ? 'text-blue-100' : 'text-gray-600'}>
                    {plan.description}
                  </p>

                  <div className="my-8">
                    <div className="text-5xl font-bold">{plan.price}</div>
                    {plan.period && (
                      <span className={plan.popular ? 'text-blue-100' : 'text-gray-600'}>
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <Link
                    to="/dashboard"
                    className={`w-full inline-flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-lg transition-colors mb-8 ${
                      plan.popular
                        ? 'bg-white text-blue-600 hover:bg-gray-50'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={18} />
                  </Link>

                  <div className="space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex gap-3">
                        <Check size={20} className={plan.popular ? 'text-blue-100' : 'text-blue-600'} />
                        <span className={plan.popular ? 'text-blue-50' : 'text-gray-600'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-md">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I change plans anytime?
                  </h4>
                  <p className="text-gray-600">
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Is there a free trial?
                  </h4>
                  <p className="text-gray-600">
                    Yes! Start with our Starter plan for free. Professional plan includes a 14-day free trial.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    What payment methods do you accept?
                  </h4>
                  <p className="text-gray-600">
                    We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
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
