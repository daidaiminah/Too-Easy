import React, { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Package, ShoppingBag, CreditCard, Heart, User, Bell, Settings, LogOut, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/router';

const ClientDashboard: NextPage = () => {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [activeTab, setActiveTab] = useState('orders');

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated && typeof window !== 'undefined') {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  // Mock data for orders
  const orders = [
    { id: 'ORD-1234', date: '2025-05-10', status: 'Delivered', total: 125.99, items: 2 },
    { id: 'ORD-1235', date: '2025-04-28', status: 'Processing', total: 89.50, items: 1 },
    { id: 'ORD-1236', date: '2025-04-15', status: 'Delivered', total: 210.45, items: 3 },
  ];

  // Mock data for wishlist
  const wishlist = [
    { id: '1', name: 'Minimal Logo Tee', price: 35, image: '/IMG-20250521-WA0024.jpg' },
    { id: '5', name: 'Classic Bomber Jacket', price: 95, image: '/IMG-20250521-WA0014.jpg' },
    { id: '9', name: 'Signature Sneakers', price: 90, image: '/IMG-20250521-WA0026.jpg' },
  ];

  // Dashboard navigation items
  const navigation = [
    { id: 'orders', label: 'My Orders', icon: <Package className="h-5 w-5" /> },
    { id: 'wishlist', label: 'Wishlist', icon: <Heart className="h-5 w-5" /> },
    { id: 'profile', label: 'Profile', icon: <User className="h-5 w-5" /> },
    { id: 'addresses', label: 'Addresses', icon: <CreditCard className="h-5 w-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="h-5 w-5" /> },
    { id: 'settings', label: 'Account Settings', icon: <Settings className="h-5 w-5" /> },
  ];

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return (
          <div>
            <h2 className="text-2xl font-montserrat font-bold mb-6">My Orders</h2>
            {orders.length > 0 ? (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {orders.map((order) => (
                  <div key={order.id} className="border-b border-gray-200 last:border-0">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-gray-500">Placed on {order.date}</p>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className={`inline-block px-3 py-1 text-xs rounded-full ${
                            order.status === 'Delivered' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">{order.items} {order.items === 1 ? 'item' : 'items'}</p>
                          <p className="font-medium">${order.total.toFixed(2)}</p>
                        </div>
                        <button className="mt-3 md:mt-0 flex items-center text-electric-blue hover:underline text-sm">
                          View Order Details <ChevronRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <ShoppingBag className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
                <button 
                  onClick={() => router.push('/products')}
                  className="btn-primary"
                >
                  Start Shopping
                </button>
              </div>
            )}
          </div>
        );
      case 'wishlist':
        return (
          <div>
            <h2 className="text-2xl font-montserrat font-bold mb-6">My Wishlist</h2>
            {wishlist.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-1">{item.name}</h3>
                      <p className="text-electric-blue font-medium mb-4">${item.price.toFixed(2)}</p>
                      <div className="flex space-x-2">
                        <button className="flex-1 btn-primary text-sm py-2">Add to Cart</button>
                        <button className="btn-secondary text-sm py-2 px-3">
                          <Heart className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <Heart className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
                <p className="text-gray-600 mb-6">Save items you love to your wishlist.</p>
                <button 
                  onClick={() => router.push('/products')}
                  className="btn-primary"
                >
                  Browse Products
                </button>
              </div>
            )}
          </div>
        );
      case 'profile':
        return (
          <div>
            <h2 className="text-2xl font-montserrat font-bold mb-6">My Profile</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="relative h-48 w-48 mx-auto">
                    <Image
                      src="/IMG-20250521-WA0038.jpg"
                      alt="Profile"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <button className="text-electric-blue hover:underline text-sm">
                      Change Photo
                    </button>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          defaultValue={user?.name?.split(' ')[0] || 'John'}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          defaultValue={user?.name?.split(' ')[1] || 'Doe'}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue={user?.email || 'johndoe@example.com'}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                      />
                    </div>
                    <button type="submit" className="btn-primary">
                      Save Changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-medium mb-2">Coming Soon</h3>
            <p className="text-gray-600">This feature is currently under development.</p>
          </div>
        );
    }
  };

  // If not authenticated, don't render the dashboard
  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout title="My Account | Too Easy" description="Manage your Too Easy account, orders, and preferences.">
      <div className="container-custom py-12">
        <h1 className="text-3xl font-montserrat font-bold mb-8">My Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="relative h-12 w-12">
                    <Image
                      src="/IMG-20250521-WA0038.jpg"
                      alt="Profile"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">{user?.name || 'John Doe'}</p>
                    <p className="text-sm text-gray-500">{user?.email || 'johndoe@example.com'}</p>
                  </div>
                </div>
              </div>
              <nav className="p-2">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center p-3 rounded-md text-left ${
                      activeTab === item.id
                        ? 'bg-electric-blue text-white'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
                <button
                  className="w-full flex items-center p-3 rounded-md text-left text-red-600 hover:bg-gray-50"
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  Logout
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ClientDashboard;
