import Head from 'next/head';

const SustainabilityPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Sustainability | Too Easy</title>
        <meta name="description" content="Our commitment to sustainability and ethical practices" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Commitment to Sustainability
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Building a better future through responsible fashion
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {/* Our Approach */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Our Approach</h2>
              <p className="mt-4 text-lg text-gray-500">
                At Too Easy, we believe fashion should be both stylish and sustainable. We're committed to reducing our environmental impact and promoting ethical practices throughout our supply chain.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Sustainable Materials</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    We prioritize organic, recycled, and eco-friendly materials in all our products to minimize environmental impact.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Longevity</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    We design timeless pieces made to last, reducing the need for frequent replacements.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Fair Labor</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    We ensure fair wages and safe working conditions for everyone in our supply chain.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Carbon Neutral</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    We offset our carbon emissions through verified environmental projects.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Materials Section */}
          <div className="mt-20">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-extrabold text-gray-900">Our Materials</h2>
                <p className="mt-4 text-lg text-gray-500">
                  We carefully select materials that are kind to both people and the planet.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-2">
                <div className="space-y-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <span className="text-lg font-medium">1</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Organic Cotton</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Grown without harmful pesticides and using less water than conventional cotton, our organic cotton is soft, breathable, and better for the environment.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <span className="text-lg font-medium">2</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Recycled Polyester</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Made from post-consumer plastic bottles, our recycled polyester reduces waste and requires fewer resources to produce than virgin polyester.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <span className="text-lg font-medium">3</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Tencel™ Lyocell</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Sourced from sustainably managed forests, Tencel™ is produced in a closed-loop process that recycles water and reuses solvents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Impact */}
          <div className="bg-gray-50 rounded-lg p-8 mt-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Our Impact
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                We're proud of the progress we've made, but we know there's still more to do. Here's how we're making a difference:
              </p>
              
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg text-white">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900">Reduced Waste</h3>
                      <p className="mt-2 text-base text-gray-500">
                        45% less fabric waste through efficient pattern making and recycling programs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg text-white">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900">Clean Energy</h3>
                      <p className="mt-2 text-base text-gray-500">
                        100% of our facilities powered by renewable energy sources.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg text-white">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900">Community Impact</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Supporting local communities through education and job creation programs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Join Us on Our Journey
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              We're committed to continuous improvement and transparency. Sign up for our newsletter to stay updated on our sustainability initiatives.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-full max-w-md">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-sm text-gray-500">
                  We care about your data. Read our{' '}
                  <a href="/privacy" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityPage;
