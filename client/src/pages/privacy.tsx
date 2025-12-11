// pages/privacy.tsx
import Head from 'next/head';

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <Head>
        <title>Privacy Policy | Too Easy</title>
        <meta
          name="description"
          content="Learn how we collect, use, and protect your personal information."
        />
      </Head>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Last updated: January 1, 2023
          </p>
        </div>

        <div className="mt-12 prose prose-indigo prose-lg text-gray-500 mx-auto max-w-4xl">
          <p>
            At Too Easy, we are committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when
            you visit our website or make a purchase from us.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            1. Information We Collect
          </h2>
          <p>We collect several types of information from and about users of our website, including:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Personal information such as name, email address, phone number, and shipping/billing address</li>
            <li>Payment information (processed securely through our payment processor)</li>
            <li>Order history and purchase details</li>
            <li>Browsing behavior and website usage data</li>
            <li>Device and connection information</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            2. How We Use Your Information
          </h2>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and account</li>
            <li>Provide customer support</li>
            <li>Improve our products and services</li>
            <li>Send promotional emails (with your consent)</li>
            <li>Prevent fraud and enhance security</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            3. How We Share Your Information
          </h2>
          <p>We may share your information with:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Service providers who assist with our business operations</li>
            <li>Payment processors to complete transactions</li>
            <li>Shipping carriers to deliver your orders</li>
            <li>Law enforcement or government agencies when required by law</li>
            <li>Business partners with your consent</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            4. Data Security
          </h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the Internet or
            electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            5. Your Rights and Choices
          </h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Access, update, or delete your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Request a copy of your data</li>
            <li>Withdraw consent where applicable</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            6. Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience
            on our website. You can set your browser to refuse all or some browser
            cookies, but this may limit your ability to use certain features.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            7. Children's Privacy
          </h2>
          <p>
            Our website is not intended for children under 13. We do not knowingly
            collect personal information from children under 13.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            8. Changes to This Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any
            changes by posting the new Privacy Policy on this page.
          </p>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              Email: privacy@tooeasy.com
              <br />
              Phone: (555) 123-4567
              <br />
              Address: 123 Fashion St., New York, NY 10001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}