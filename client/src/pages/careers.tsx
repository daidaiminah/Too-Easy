import Head from 'next/head';
import Link from 'next/link';

const CareersPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Careers | Too Easy</title>
        <meta name="description" content="Join our team at Too Easy and be part of something great" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Join Our Team
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Be part of something great at Too Easy
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Why Work With Us
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                We're building the future of fashion and we'd love for you to be part of it.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Our Culture
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    At Too Easy, we value creativity, innovation, and collaboration. We're a diverse team that's passionate about making great products.
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Benefits
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Competitive salary and equity</li>
                      <li>Health, dental, and vision insurance</li>
                      <li>Flexible work hours and remote work options</li>
                      <li>Generous vacation policy</li>
                      <li>Professional development budget</li>
                    </ul>
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Current Openings
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium">Senior Frontend Developer</h3>
                      <p className="text-gray-500 text-sm mt-1">Full-time • Remote</p>
                      <p className="mt-2 text-sm">We're looking for an experienced frontend developer to help us build amazing user experiences.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium">UX/UI Designer</h3>
                      <p className="text-gray-500 text-sm mt-1">Full-time • On-site</p>
                      <p className="mt-2 text-sm">Help us design beautiful and intuitive interfaces for our customers.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium">Customer Support Specialist</h3>
                      <p className="text-gray-500 text-sm mt-1">Part-time • Remote</p>
                      <p className="mt-2 text-sm">Join our support team and help our customers have the best experience possible.</p>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Don't see a role that fits? We're always looking for talented people to join our team.
            </p>
            <a
              href="mailto:careers@tooeasy.com"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
