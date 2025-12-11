// pages/terms.tsx
import Head from 'next/head';

export default function TermsPage() {
  return (
    <div className="bg-white">
      <Head>
        <title>Terms & Conditions | Too Easy</title>
        <meta
          name="description"
          content="Review our terms and conditions for using our website and services."
        />
      </Head>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Last updated: January 1, 2023
          </p>
        </div>

        <div className="mt-12 prose prose-indigo prose-lg text-gray-500 mx-auto max-w-4xl">
          <p>
            Welcome to Too Easy! These terms and conditions outline the rules and
            regulations for the use of our website and services.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">1. Introduction</h2>
          <p>
            By accessing this website, you are agreeing to be bound by these terms of
            service, all applicable laws, and regulations, and agree that you are
            responsible for compliance with any applicable local laws. If you do not
            agree with any of these terms, you are prohibited from using or accessing
            this site.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on
            Too Easy's website for personal, non-commercial transitory viewing only.
            This is the grant of a license, not a transfer of title, and under this
            license you may not:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Modify or copy the materials</li>
            <li>
              Use the materials for any commercial purpose, or for any public display
              (commercial or non-commercial)
            </li>
            <li>
              Attempt to decompile or reverse engineer any software contained on Too
              Easy's website
            </li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>
              Transfer the materials to another person or "mirror" the materials on any
              other server
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">3. User Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate and complete
            information. You are solely responsible for the activity that occurs on
            your account, and you must keep your account password secure.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">4. Products and Services</h2>
          <p>
            All products and services are subject to availability. We reserve the right
            to discontinue any products at any time. Prices for our products are subject
            to change without notice.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">5. Privacy Policy</h2>
          <p>
            Your use of our website is also governed by our Privacy Policy. Please review
            our Privacy Policy, which also governs the website and informs users of our
            data collection practices.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">6. Limitation of Liability</h2>
          <p>
            In no event shall Too Easy or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit, or due to
            business interruption) arising out of the use or inability to use the
            materials on Too Easy's website, even if Too Easy or a Too Easy authorized
            representative has been notified orally or in writing of the possibility of
            such damage.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">7. Revisions and Errata</h2>
          <p>
            The materials appearing on Too Easy's website could include technical,
            typographical, or photographic errors. Too Easy does not warrant that any of
            the materials on its website are accurate, complete, or current.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">8. Changes to Terms</h2>
          <p>
            Too Easy may revise these terms of service for its website at any time
            without notice. By using this website you are agreeing to be bound by the
            then current version of these terms of service.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">9. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with
            the laws of the State of California and you irrevocably submit to the
            exclusive jurisdiction of the courts in that State or location.
          </p>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4">
              If you have any questions about these Terms & Conditions, please contact
              us at:
            </p>
            <p className="mt-2">
              Email: legal@tooeasy.com
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