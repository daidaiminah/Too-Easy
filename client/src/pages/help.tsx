import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const faqs = [
  {
    question: 'How can I track my order?',
    answer: 'Once your order has shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the shipping carrier\'s website.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for all items. Items must be unworn, unwashed, and in their original condition with tags attached. Please contact our customer service team to initiate a return.'
  },
  {
    question: 'How do I change or cancel my order?',
    answer: 'If you need to change or cancel your order, please contact us immediately. We process orders quickly, so we can only make changes if your order hasn\'t been shipped yet.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also accept payments through PayPal and Apple Pay.'
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by destination. You can calculate shipping costs during checkout before placing your order.'
  },
  {
    question: 'How do I contact customer service?',
    answer: 'You can reach our customer service team by email at support@tooeasy.com or by phone at (555) 123-4567. Our team is available Monday through Friday, 9am to 5pm EST.'
  }
];

const HelpPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <Head>
        <title>Help & FAQ | Too Easy</title>
        <meta name="description" content="Frequently asked questions and customer support" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Help Center
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Find answers to common questions or contact our support team
          </p>
        </div>

        <div className="mt-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Frequently Asked Questions
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Can't find what you're looking for? <Link href="/contact" className="text-indigo-600 hover:text-indigo-500">Contact our support team</Link>.
              </p>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {faqs.map((faq, index) => (
                  <li key={index}>
                    <div className="px-4 py-4 sm:px-6">
                      <button
                        type="button"
                        className="w-full flex justify-between items-center text-left"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={activeIndex === index}
                        aria-controls={`faq-${index}`}
                      >
                        <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex items-center">
                          {activeIndex === index ? (
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                          )}
                        </span>
                      </button>
                      {activeIndex === index && (
                        <div className="mt-2 text-gray-600" id={`faq-${index}`}>
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-indigo-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900">Still need help?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our customer service team is here to help you with any questions or concerns.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contact Support
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Email Us</h3>
                <p className="mt-1 text-sm text-gray-500">
                  support@tooeasy.com
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  We'll respond within 24 hours
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Call Us</h3>
                <p className="mt-1 text-sm text-gray-500">
                  (555) 123-4567
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Mon-Fri, 9am-5pm EST
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Live Chat</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Chat with us online
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
