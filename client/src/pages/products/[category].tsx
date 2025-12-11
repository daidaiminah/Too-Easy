import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';
import { products } from '@/data/products';

interface CategoryPageProps {
  products: Product[];
  category: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ products, category }) => {
  const router = useRouter();
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const categoryName = category.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {categoryName}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base text-gray-500">
            Browse our collection of {categoryName.toLowerCase()}.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get all unique categories from products
  const categories = [...new Set(products.map(product => product.category.toLowerCase().replace(/\s+/g, '-')))];
  
  // Add the specific category pages from the footer
  const additionalCategories = ['mens', 'womens', 'accessories', 'new-arrivals'];
  const allCategories = [...new Set([...categories, ...additionalCategories])];
  
  const paths = allCategories.map((category) => ({
    params: { category },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as string;
  
  // Filter products by category (convert to lowercase and replace spaces with hyphens for matching)
  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase().replace(/\s+/g, '-') === category
  );

  return {
    props: {
      products: categoryProducts.length > 0 ? categoryProducts : products, // Fallback to all products if no match
      category,
    },
    revalidate: 60, // Re-generate page at most once every 60 seconds
  };
};

export default CategoryPage;
