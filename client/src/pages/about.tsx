import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import Hero from "/public/images/IMG-20250521-WA0011.jpg"
import DesignProcess from "/public/images/IMG-20250521-WA0007.jpg"
import Collection from "/public/images/IMG-20250521-WA0014.jpg"
import Team from "/public/images/IMG-20250521-WA0041.jpg"
import Alex from "/public/images/founder2.png"
import Jordan from "/public/images/founder3.png"
import Morgan from "/public/images/founder1.png"

const AboutPage: NextPage = () => {
  return (
    <Layout 
      title="About Us | Too Easy" 
      description="Learn about Too Easy - a minimalist-meets-streetwear fashion brand aiming to deliver clean, bold, and comfortable looks."
    >
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <Image 
            src={Hero}
            alt="About Too Easy"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container-custom h-full flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-4"
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-montserrat font-bold mb-6">About Too Easy</h2>
            <p className="text-gray-700 mb-6">
              Too Easy was born from a simple yet powerful idea: style shouldn't be complicated. In a world of fast fashion and ever-changing trends, we wanted to create something timeless, comfortable, and effortlessly cool.
            </p>
            <p className="text-gray-700 mb-6">
              Our brand merges minimalist aesthetics with street-inspired energy, creating versatile pieces that transition seamlessly from day to night, weekday to weekend. We believe that when you look good, you feel good — and it should be Too Easy.
            </p>
            <p className="text-gray-700 mb-10">
              Every piece in our collection is thoughtfully designed with clean lines, premium materials, and attention to detail. We're not just selling clothes; we're offering a lifestyle built on confidence, comfort, and self-expression.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="relative h-80">
                <Image
                  src={DesignProcess}
                  alt="Too Easy Design Process"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />
              </div>
              <div className="relative h-80">
                <Image
                  src={Collection}
                  alt="Too Easy Collection"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-montserrat font-bold mb-4">Quality Over Quantity</h3>
              <p className="text-gray-700">
                We believe in creating pieces that last. That's why we focus on premium materials, expert craftsmanship, and timeless designs that transcend seasonal trends.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-montserrat font-bold mb-4">Sustainable Practices</h3>
              <p className="text-gray-700">
                We're committed to reducing our environmental footprint through responsible sourcing, ethical manufacturing, and minimizing waste in our production process.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-montserrat font-bold mb-4">Inclusive Style</h3>
              <p className="text-gray-700">
                Fashion should be for everyone. We design with diversity in mind, creating versatile pieces that can be styled and enjoyed by people of all backgrounds and identities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mt-6">
                <Image
                  src={Jordan}
                  alt="Alex Chen - Founder & Creative Director"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-1">Alex Chen</h3>
              <p className="text-electric-blue mb-4">Founder & Creative Director</p>
              <p className="text-gray-700 px-4">
                With a background in fashion design and a passion for streetwear, Alex founded Too Easy with a vision to create clothing that's both stylish and accessible.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6">
                <Image
                  src={Alex}
                  alt="Jordan Taylor - Head of Design"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-1">Jordan Taylor</h3>
              <p className="text-electric-blue mb-4">Head of Design</p>
              <p className="text-gray-700 px-4">
                Jordan brings a minimalist perspective to our collections, focusing on clean lines, perfect proportions, and thoughtful details that elevate each piece.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6">
                <Image
                  src={Morgan}
                  alt="Morgan Lee - Sustainability Lead"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-1">Morgan Lee</h3>
              <p className="text-electric-blue mb-4">Sustainability Lead</p>
              <p className="text-gray-700 px-4">
                Morgan ensures that our commitment to the environment is reflected in everything we do, from material sourcing to packaging and shipping practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-6">Join the Too Easy Movement</h2>
          <p className="max-w-2xl mx-auto mb-8 text-light-gray">
            We're more than just a clothing brand — we're building a community of like-minded individuals who value quality, style, and authenticity.
          </p>
          <button className="btn-primary">
            Shop the Collection
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
