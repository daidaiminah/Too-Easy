// pages/faq.tsx
import { useState } from 'react';
import Head from 'next/head';

const faqs = [
  {
    id: 1,
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also accept payments through PayPal and Apple Pay for your convenience.',
  },
  {
    id: 2,
    question: 'How long does shipping take?',
    answer:
      'Standard shipping typically takes 3-5 business days within the continental US. For international orders, delivery times may vary between 7-14 business days depending on the destination.',
  },
  {
    id: 3,
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day return policy for all items. Items must be unworn, unwashed, and in their original condition with tags attached. Please contact our customer service team to initiate a return.',
  },
  {
    id: 4,
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by destination. You can calculate shipping costs during checkout before placing your order.',
  },
  {
    id: 5,
    question: 'How can I track my order?',
    answer:
      'Once your order has shipped, you will receive a confirmation email with a tracking number and a link to track your package. You can also log in to your account to view your order status and tracking information.',
  },
  {
    id: 6,
    question: 'What should I do if I receive a damaged or incorrect item?',
    answer:
      'We apologize for any inconvenience. Please contact our customer service team within 7 days of receiving your order, and we will be happy to assist you with a replacement or refund.',
  },
  {
    id: 7,
    question: 'How do I change or cancel my order?',
    answer:
      'If you need to change or cancel your order, please contact us immediately. We process orders quickly, so we can only make changes if your order hasn\'t been shipped yet. You can reach our customer service team via email at support@tooeasy.com or by phone at (555) 123-4567 during business hours.',
  },
  {
    id: 8,
    question: 'Do you offer gift wrapping?',
    answer:
      'Yes, we offer gift wrapping services for an additional fee. You can select this option during checkout and include a personalized message with your gift.',
  },
  {
    id: 9,
    question: 'What sizes do your clothes come in?',
    answer:
      'Our clothing is available in sizes XS to XXL. Each product page includes a detailed size guide to help you find the perfect fit. If you need assistance with sizing, our customer service team is happy to help.',
  },
  {
    id: 10,
    question: 'How do I care for my items?',
    answer:
      'Care instructions vary by item and are listed on the product page. In general, we recommend washing similar colors together in cold water and laying flat to dry to maintain the quality and longevity of your garments.',
  },
];

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="bg-white">
      <Head>
        <title>Frequently Asked Questions | Too Easy</title>
        <meta
          name="description"
          content="Find answers to common questions about our products, shipping, returns, and more."
        />
      </Head>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Can't find the answer you're looking for?{' '}
            <a
              href="/contact"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Contact our customer support
            </a>
            .
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <div key={faq.id} className="pt-6">
                <dt className="text-lg">
                  <button
                    type="button"
                    className="text-left w-full flex justify-between items-start text-gray-400"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={openFaq === faq.id}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                      {openFaq === faq.id ? (
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                </dt>
                {openFaq === faq.id && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 bg-indigo-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Still have questions?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can't find the answer you're looking for? Our customer support team is
              here to help.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}