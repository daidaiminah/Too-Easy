import Head from 'next/head';
import Link from 'next/link';

const shippingOptions = [
  {
    name: 'Standard Shipping',
    price: 'Free',
    deliveryTime: '3-5 business days',
    description: 'Free standard shipping on all orders over $50. Orders are processed within 1-2 business days.',
    icon: (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    name: 'Express Shipping',
    price: '$9.99',
    deliveryTime: '1-2 business days',
    description: 'Get your order faster with our express shipping option. Orders placed before 12 PM EST will be processed the same day.',
    icon: (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Overnight Shipping',
    price: '$19.99',
    deliveryTime: 'Next business day',
    description: 'Need it tomorrow? Choose overnight shipping for next business day delivery. Orders must be placed before 2 PM EST.',
    icon: (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  }
];

const returnPolicy = [
  {
    step: '1',
    title: 'Initiate Return',
    description: 'Contact our customer service within 30 days of receiving your order to initiate a return.',
    icon: (
      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    )
  },
  {
    step: '2',
    title: 'Package Items',
    description: 'Pack the items in their original packaging with all tags attached. Include the original packing slip.',
    icon: (
      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    step: '3',
    title: 'Ship Back',
    description: 'Ship the package back to us using a trackable shipping service. Return shipping is the customer\'s responsibility.',
    icon: (
      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    )
  },
  {
    step: '4',
    title: 'Receive Refund',
    description: 'Once we receive and process your return, we\'ll issue a refund to your original payment method within 5-7 business days.',
    icon: (
      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const ShippingPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Shipping & Returns | Too Easy</title>
        <meta name="description" content="Information about our shipping options and return policy" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Shipping & Returns
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to know about shipping and returns
          </p>
        </div>

        {/* Shipping Options */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Shipping Options</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {shippingOptions.map((option, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto mb-4">
                  {option.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center mb-2">{option.name}</h3>
                <p className="text-2xl font-bold text-indigo-600 text-center mb-4">{option.price} {option.price !== 'Free' && <span className="text-sm font-normal text-gray-500">+ Free on orders over $50</span>}</p>
                <p className="text-gray-500 text-center mb-4">
                  <span className="font-medium">Delivery:</span> {option.deliveryTime}
                </p>
                <p className="text-sm text-gray-600 text-center">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Order Processing */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Processing</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                When will my order ship?
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Most orders are processed and shipped within 1-2 business days. Orders placed on weekends or holidays will be processed the next business day.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Processing Time</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    1-2 business days
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Shipping Time</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Varies by shipping method selected at checkout
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Tracking Information</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    You will receive a shipping confirmation email with tracking information once your order has shipped.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* International Shipping */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">International Shipping</h2>
          <div className="bg-indigo-50 rounded-lg p-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-indigo-800">Shipping to Your Country</h3>
                <div className="mt-2 text-sm text-indigo-700">
                  <p>
                    We ship to most countries worldwide. Shipping costs and delivery times vary by destination. 
                    Additional customs and import duties may apply and are the responsibility of the customer.
                  </p>
                  <p className="mt-2">
                    For more information about international shipping, please contact our <Link href="/contact" className="font-medium text-indigo-600 hover:text-indigo-500">customer service team</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Returns & Exchanges */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Returns & Exchanges</h2>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Our Return Policy
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                We want you to be completely satisfied with your purchase. If you're not, we're here to help.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Return Window</dt>
                  <dd className="mt-1 text-sm text-gray-900">30 days from delivery date</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Condition of Items</dt>
                  <dd className="mt-1 text-sm text-gray-900">Must be unworn, unwashed, and in original condition with tags attached</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Return Shipping</dt>
                  <dd className="mt-1 text-sm text-gray-900">Customer is responsible for return shipping costs</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Refund Method</dt>
                  <dd className="mt-1 text-sm text-gray-900">Original payment method (processing may take 5-7 business days)</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Return Process */}
          <h3 className="text-lg font-medium text-gray-900 mb-4">How to Return an Item</h3>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {returnPolicy.map((step) => (
                <li key={step.step} className="p-4 hover:bg-gray-100">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-600 font-medium">{step.step}</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-gray-900">{step.title}</h4>
                      <p className="text-sm text-gray-500">{step.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Final sale items, swimwear, and undergarments are not eligible for return or exchange unless defective.
                  For hygiene reasons, earrings and other body jewelry cannot be returned or exchanged.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Need Help?</span>
                <span className="block">We're Here For You</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                Have questions about shipping or need assistance with a return? Our customer service team is ready to help.
              </p>
              <Link
                href="/contact"
                className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Customer support team"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
