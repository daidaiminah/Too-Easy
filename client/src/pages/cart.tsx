import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { updateQuantity, removeFromCart, clearCart } from '@/redux/features/cart/cartSlice';
import Layout from '@/components/layout/Layout';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

const CartPage: NextPage = () => {
  const { items, totalItems, totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleUpdateQuantity = (id: string, size: string, color: string, quantity: number) => {
    dispatch(updateQuantity({ id, size, color, quantity }));
  };

  const handleRemoveItem = (id: string, size: string, color: string) => {
    dispatch(removeFromCart({ id, size, color }));
  };

  if (totalItems === 0) {
    return (
      <Layout title="Your Cart | Too Easy">
        <div className="container-custom py-16">
          <div className="text-center">
            <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h1 className="text-3xl font-montserrat font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link href="/products" className="btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Your Cart | Too Easy">
      <div className="container-custom py-12">
        <h1 className="text-3xl font-montserrat font-bold mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="p-6 flex flex-col sm:flex-row">
                    {/* Product Image */}
                    <div className="sm:w-24 sm:h-24 w-full h-40 flex-shrink-0 mb-4 sm:mb-0">
                      <div className="relative h-full w-full">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-md"
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="sm:ml-6 flex-1 flex flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-lg font-medium">{item.name}</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Size: {item.size} | Color: {item.color}
                          </p>
                        </div>
                        <p className="text-base font-medium text-electric-blue">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            onClick={() => 
                              handleUpdateQuantity(item.id, item.size, item.color, Math.max(1, item.quantity - 1))
                            }
                            className="px-3 py-1 text-gray-500 hover:text-electric-blue"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-3">{item.quantity}</span>
                          <button
                            onClick={() => 
                              handleUpdateQuantity(item.id, item.size, item.color, item.quantity + 1)
                            }
                            className="px-3 py-1 text-gray-500 hover:text-electric-blue"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemoveItem(item.id, item.size, item.color)}
                          className="text-gray-500 hover:text-red-500"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
                  <p className="font-medium">Free</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Tax</p>
                  <p className="font-medium">${(totalPrice * 0.08).toFixed(2)}</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between">
                    <p className="font-semibold">Total</p>
                    <p className="font-semibold text-electric-blue">
                      ${(totalPrice + totalPrice * 0.08).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/checkout" className="btn-primary w-full text-center mb-4">
                Proceed to Checkout
              </Link>

              <Link href="/products" className="text-sm text-electric-blue hover:underline flex justify-center">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
