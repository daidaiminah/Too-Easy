import React, { useState } from 'react';
import { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactPage: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <Layout 
      title="Contact Us | Too Easy" 
      description="Get in touch with the Too Easy team. We're here to help with your questions, feedback, or concerns."
    >
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-montserrat font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-10">
            We're here to help with any questions, feedback, or concerns you may have.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-electric-blue bg-opacity-10 p-3 rounded-full mb-4">
                <Mail className="h-6 w-6 text-electric-blue" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">For general inquiries:</p>
              <a
                href="mailto:info@tooeasy.com"
                className="text-electric-blue hover:underline"
              >
                info@tooeasy.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-electric-blue bg-opacity-10 p-3 rounded-full mb-4">
                <Phone className="h-6 w-6 text-electric-blue" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Customer Support:</p>
              <a
                href="tel:+18005551234"
                className="text-electric-blue hover:underline"
              >
                +1 (800) 555-1234
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-electric-blue bg-opacity-10 p-3 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-electric-blue" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Fashion Street<br />
                Los Angeles, CA 90210<br />
                United States
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-montserrat font-semibold mb-6">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-center mb-6">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="return">Returns & Exchanges</option>
                    <option value="product">Product Information</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⚪</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-96 w-full bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500">Interactive map would go here</p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
