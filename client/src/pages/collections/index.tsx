// pages/collections/index.tsx
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { categories } from '@/data/products';

export default function CollectionsPage({ collections }: { collections: typeof categories }) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Collections
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base text-gray-500">
            Browse through our curated collections of premium products.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.slug}`}
              className="group"
            >
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={`/images/collections/${collection.slug}.jpg`}
                  alt={collection.name}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{collection.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {collection.productCount} items
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      collections: categories,
    },
  };
};