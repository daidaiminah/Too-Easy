// pages/compare.tsx
import { GetStaticProps } from 'next';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';

interface ComparePageProps {
  products: Product[];
}

export default function ComparePage({ products }: ComparePageProps) {
  const features = [
    'Price',
    'Brand',
    'Color',
    'Size',
    'Material',
    'Warranty',
    'Rating',
    'In Stock',
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Compare Products
          </h1>

          {products.length === 0 ? (
            <div className="mt-12 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No products to compare</h3>
              <p className="mt-1 text-sm text-gray-500">
                Add products to compare their features and specifications.
              </p>
              <div className="mt-6">
                <a
                  href="/products"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Browse Products
                </a>
              </div>
            </div>
          ) : (
            <div className="mt-8 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Features
                    </th>
                    {products.map((product) => (
                      <th
                        key={product.id}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <div className="relative">
                          <button
                            type="button"
                            className="absolute top-0 right-0 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Remove</span>
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="mt-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-32 object-cover"
                          />
                          <h3 className="mt-2 text-sm font-medium text-gray-900">
                            {product.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {formatPrice(product.price)}
                          </p>
                          <button
                            type="button"
                            className="mt-2 w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {features.map((feature) => (
                    <tr key={feature}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {feature}
                      </td>
                      {products.map((product) => (
                        <td
                          key={`${product.id}-${feature}`}
                          className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                        >
                          {feature === 'Price' && formatPrice(product.price)}
                          {feature === 'Brand' && 'Too Easy'}
                          {feature === 'Color' && 'Black'}
                          {feature === 'Size' && 'M, L, XL'}
                          {feature === 'Material' && 'Cotton'}
                          {feature === 'Warranty' && '1 Year'}
                          {feature === 'Rating' && `${product.rating}/5 (${product.reviews})`}
                          {feature === 'In Stock' && (product.inStock ? 'Yes' : 'No')}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // In a real app, you would fetch the products to compare from an API
  const products: Product[] = []; // Empty array for now

  return {
    props: {
      products,
    },
  };
};