import React, { useState } from 'react';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Layout from '@/components/layout/Layout';
import { CreditCard, CheckCircle, Truck, ShieldCheck } from 'lucide-react';

const CheckoutPage: NextPage = () => {
  const { items, totalItems, totalPrice } = useSelector((state: RootState) => state.cart);
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
    phone: '',
    sameAsBilling: true,
    shippingMethod: 'standard',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    } else {
      // Here you would submit the order to your backend API
      // For now, we'll just simulate order completion
      setOrderPlaced(true);
    }
  };

  if (orderPlaced) {
    return (
      <Layout title="Order Confirmation | Too Easy">
        <div className="container-custom py-16 max-w-3xl mx-auto">
          <div className="text-center bg-white p-8 rounded-lg shadow-sm">
            <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
            <h1 className="text-3xl font-montserrat font-bold mb-4">Thank You for Your Order!</h1>
            <p className="text-gray-600 mb-8">
              Your order has been placed successfully. We'll send you a confirmation email shortly.
            </p>
            <div className="bg-gray-50 p-6 rounded-md mb-8">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Order Number:</span>
                <span className="font-medium">TE-{Math.floor(Math.random() * 100000).toString().padStart(6, '0')}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Items:</span>
                <span className="font-medium">{totalItems}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Total:</span>
                <span className="font-medium">${(totalPrice + totalPrice * 0.08).toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/'}
              className="btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  if (totalItems === 0) {
    // Redirect to cart if there are no items
    if (typeof window !== 'undefined') {
      window.location.href = '/cart';
    }
    return null;
  }

  return (
    <Layout title="Checkout | Too Easy">
      <div className="container-custom py-12">
        <h1 className="text-3xl font-montserrat font-bold mb-8">Checkout</h1>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                activeStep >= 1 ? 'bg-electric-blue text-white' : 'bg-gray-200 text-gray-700'
              }`}>
                1
              </div>
              <span className="mt-2 text-sm font-medium">Information</span>
            </div>
            <div className={`flex-1 h-1 mx-2 ${activeStep >= 2 ? 'bg-electric-blue' : 'bg-gray-200'}`}></div>
            <div className="flex flex-col items-center">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                activeStep >= 2 ? 'bg-electric-blue text-white' : 'bg-gray-200 text-gray-700'
              }`}>
                2
              </div>
              <span className="mt-2 text-sm font-medium">Shipping</span>
            </div>
            <div className={`flex-1 h-1 mx-2 ${activeStep >= 3 ? 'bg-electric-blue' : 'bg-gray-200'}`}></div>
            <div className="flex flex-col items-center">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                activeStep >= 3 ? 'bg-electric-blue text-white' : 'bg-gray-200 text-gray-700'
              }`}>
                3
              </div>
              <span className="mt-2 text-sm font-medium">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Customer Information */}
                {activeStep === 1 && (
                  <div>
                    <h2 className="text-lg font-medium mb-6">Contact Information</h2>
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
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

                    <h2 className="text-lg font-medium mb-6">Billing Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">
                        Apartment, suite, etc. (optional)
                      </label>
                      <input
                        type="text"
                        id="apartment"
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                          State / Province
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                        />
                      </div>
                      <div>
                        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="sameAsBilling"
                          checked={formData.sameAsBilling}
                          onChange={handleChange}
                          className="h-4 w-4 text-electric-blue focus:ring-electric-blue rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Shipping address same as billing address
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Step 2: Shipping Options */}
                {activeStep === 2 && (
                  <div>
                    <h2 className="text-lg font-medium mb-6">Shipping Method</h2>
                    <div className="space-y-4 mb-8">
                      <label className="flex items-start p-4 border border-gray-300 rounded-md cursor-pointer hover:border-electric-blue">
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="standard"
                          checked={formData.shippingMethod === 'standard'}
                          onChange={handleChange}
                          className="h-4 w-4 mt-1 text-electric-blue focus:ring-electric-blue"
                        />
                        <div className="ml-3 flex-1">
                          <div className="flex justify-between">
                            <span className="font-medium">Standard Shipping</span>
                            <span className="font-medium">Free</span>
                          </div>
                          <p className="text-sm text-gray-500">
                            Delivery in 3-5 business days
                          </p>
                        </div>
                      </label>

                      <label className="flex items-start p-4 border border-gray-300 rounded-md cursor-pointer hover:border-electric-blue">
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="express"
                          checked={formData.shippingMethod === 'express'}
                          onChange={handleChange}
                          className="h-4 w-4 mt-1 text-electric-blue focus:ring-electric-blue"
                        />
                        <div className="ml-3 flex-1">
                          <div className="flex justify-between">
                            <span className="font-medium">Express Shipping</span>
                            <span className="font-medium">$9.99</span>
                          </div>
                          <p className="text-sm text-gray-500">
                            Delivery in 1-2 business days
                          </p>
                        </div>
                      </label>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 rounded-md">
                      <div className="flex items-center mb-4 md:mb-0">
                        <Truck className="h-5 w-5 text-electric-blue mr-2" />
                        <span className="text-sm text-gray-700">
                          Shipping to: {formData.address}, {formData.city}, {formData.state} {formData.postalCode}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveStep(1)}
                        className="text-sm text-electric-blue hover:underline"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment Information */}
                {activeStep === 3 && (
                  <div>
                    <h2 className="text-lg font-medium mb-6">Payment Method</h2>
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <CreditCard className="h-5 w-5 text-electric-blue mr-2" />
                        <span className="font-medium">Credit Card</span>
                      </div>

                      <div className="mb-4">
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="•••• •••• •••• ••••"
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                            Expiration Date (MM/YY)
                          </label>
                          <input
                            type="text"
                            id="cardExpiry"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                          />
                        </div>
                        <div>
                          <label htmlFor="cardCvc" className="block text-sm font-medium text-gray-700 mb-1">
                            CVC
                          </label>
                          <input
                            type="text"
                            id="cardCvc"
                            name="cardCvc"
                            value={formData.cardCvc}
                            onChange={handleChange}
                            placeholder="•••"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-blue-50 rounded-md mb-6">
                      <ShieldCheck className="h-5 w-5 text-electric-blue mr-2" />
                      <p className="text-sm text-gray-700">
                        Your payment information is encrypted and secure. We never store your full card details.
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 rounded-md">
                      <div className="flex items-center mb-4 md:mb-0">
                        <Truck className="h-5 w-5 text-electric-blue mr-2" />
                        <span className="text-sm text-gray-700">
                          {formData.shippingMethod === 'standard' ? 'Standard Shipping (3-5 days)' : 'Express Shipping (1-2 days)'}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="text-sm text-electric-blue hover:underline"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  {activeStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setActiveStep(activeStep - 1)}
                      className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className="btn-primary ml-auto"
                  >
                    {activeStep < 3 ? 'Continue' : 'Place Order'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-medium mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <p className="text-gray-600">Subtotal ({totalItems} items)</p>
                  <p className="font-medium">${totalPrice.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Shipping</p>
                  <p className="font-medium">
                    {formData.shippingMethod === 'standard' ? 'Free' : '$9.99'}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Tax</p>
                  <p className="font-medium">${(totalPrice * 0.08).toFixed(2)}</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between">
                    <p className="font-semibold">Total</p>
                    <p className="font-semibold text-electric-blue">
                      ${(
                        totalPrice + 
                        totalPrice * 0.08 + 
                        (formData.shippingMethod === 'express' ? 9.99 : 0)
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
