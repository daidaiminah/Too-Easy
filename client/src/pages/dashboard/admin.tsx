import React, { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import { 
  Package, ShoppingBag, Users, Tag, 
  BarChart2, Settings, LogOut, Plus, Edit, Trash2 
} from 'lucide-react';

const AdminDashboard: NextPage = () => {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [activeTab, setActiveTab] = useState('products');

  // Redirect if not authenticated or not admin
  React.useEffect(() => {
    if ((!isAuthenticated || user?.role !== 'admin') && typeof window !== 'undefined') {
      router.push('/login');
    }
  }, [isAuthenticated, router, user]);

  // Mock data for products
  const products = [
    { id: '1', name: 'Minimal Logo Tee', price: 35, stock: 42, category: 'T-Shirts', image: '/IMG-20250521-WA0024.jpg' },
    { id: '2', name: 'Urban Hoodie', price: 65, stock: 27, category: 'Hoodies', image: '/IMG-20250521-WA0023.jpg' },
    { id: '3', name: 'Street Smart Cap', price: 25, stock: 18, category: 'Accessories', image: '/IMG-20250521-WA0018.jpg' },
    { id: '4', name: 'Comfort Track Pants', price: 55, stock: 31, category: 'Pants', image: '/IMG-20250521-WA0020.jpg' },
  ];

  // Mock data for orders
  const orders = [
    { id: 'ORD-1234', customer: 'John Smith', date: '2025-05-10', status: 'Delivered', total: 125.99 },
    { id: 'ORD-1235', customer: 'Emma Johnson', date: '2025-05-12', status: 'Processing', total: 89.50 },
    { id: 'ORD-1236', customer: 'Michael Brown', date: '2025-05-15', status: 'Pending', total: 210.45 },
  ];

  // Mock data for users
  const users = [
    { id: '1', name: 'John Smith', email: 'john@example.com', role: 'user', joined: '2025-01-15' },
    { id: '2', name: 'Emma Johnson', email: 'emma@example.com', role: 'user', joined: '2025-02-22' },
    { id: '3', name: 'Admin User', email: 'admin@tooeasy.com', role: 'admin', joined: '2024-12-01' },
  ];

  // Dashboard navigation items
  const navigation = [
    { id: 'products', label: 'Products', icon: <Tag className="h-5 w-5" /> },
    { id: 'orders', label: 'Orders', icon: <Package className="h-5 w-5" /> },
    { id: 'users', label: 'Users', icon: <Users className="h-5 w-5" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart2 className="h-5 w-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
  ];

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'products':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-montserrat font-bold">Products</h2>
              <button className="btn-primary flex items-center">
                <Plus className="h-4 w-4 mr-2" /> Add Product
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Stock
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 relative">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                style={{ objectFit: 'cover' }}
                                className="rounded-md"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{product.name}</div>
                              <div className="text-sm text-gray-500">ID: {product.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {product.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ${product.price.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            product.stock > 30 ? 'bg-green-100 text-green-800' : 
                            product.stock > 10 ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'
                          }`}>
                            {product.stock} in stock
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-electric-blue hover:text-electric-blue mr-3">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-red-500 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'orders':
        return (
          <div>
            <h2 className="text-2xl font-montserrat font-bold mb-6">Orders</h2>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-electric-blue">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {order.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                              order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-blue-100 text-blue-800'}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ${order.total.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-electric-blue hover:text-electric-blue">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'users':
        return (
          <div>
            <h2 className="text-2xl font-montserrat font-bold mb-6">Users</h2>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Joined
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.joined}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-electric-blue hover:text-electric-blue mr-3">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-red-500 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

  // If not authenticated or not admin, don't render the dashboard
  if (!isAuthenticated || user?.role !== 'admin') {
    return null;
  }

  return (
    <Layout title="Admin Dashboard | Too Easy" description="Manage your Too Easy store.">
      <div className="container-custom py-12">
        <h1 className="text-3xl font-montserrat font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="relative h-12 w-12 bg-electric-blue rounded-full flex items-center justify-center text-white">
                    {user?.name?.charAt(0) || 'A'}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">{user?.name || 'Admin'}</p>
                    <p className="text-sm text-gray-500">Administrator</p>
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
          <div className="md:col-span-4">
            {renderContent()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
