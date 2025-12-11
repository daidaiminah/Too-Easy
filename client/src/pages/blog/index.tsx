

// pages/blog/index.tsx
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { BlogPost } from '@/types';
import { formatDate } from '@/lib/utils';
import { blogPosts } from '@/data/blogPosts';

interface BlogPageProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogPage({ posts, categories }: BlogPageProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = !activeCategory || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      <Head>
        <title>Blog | Too Easy</title>
        <meta name="description" content="Read our latest articles and fashion tips" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Learn about the latest fashion trends, styling tips, and industry insights.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Search and filter */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="relative w-full sm:w-96">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="flex-shrink-0">
                  <label htmlFor="category" className="sr-only">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={activeCategory || ''}
                    onChange={(e) => setActiveCategory(e.target.value || null)}
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Blog posts */}
            <div className="space-y-12">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <article key={post.id} className="flex flex-col">
                    <div className="flex-1 bg-white rounded-lg shadow overflow-hidden">
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-indigo-600">
                            <span className="hover:underline">{post.category}</span>
                          </p>
                          <Link href={`/blog/${post.id}`} className="block mt-2">
                            <h3 className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
                              {post.title}
                            </h3>
                            <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                          </Link>
                        </div>
                        <div className="mt-6 flex items-center">
                          <div className="flex-shrink-0">
                            <span className="sr-only">{post.author}</span>
                            <img
                              className="h-10 w-10 rounded-full"
                              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                                post.author
                              )}&background=indigo&color=fff`}
                              alt={post.author}
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              {post.author}
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                              <time dateTime={post.date}>
                                {formatDate(new Date(post.date))}
                              </time>
                              <span aria-hidden="true">&middot;</span>
                              <span>5 min read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="text-center py-12">
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
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No posts found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Categories</h2>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`flex items-center w-full text-left px-3 py-2 rounded-md ${
                    !activeCategory ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span>All Categories</span>
                  <span className="ml-auto bg-gray-200 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">
                    {posts.length}
                  </span>
                </button>
                {categories.map((category) => {
                  const count = posts.filter((post) => post.category === category).length;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`flex items-center w-full text-left px-3 py-2 rounded-md ${
                        activeCategory === category ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category}</span>
                      <span className="ml-auto bg-gray-200 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Popular Posts</h2>
                <div className="space-y-4">
                  {posts
                    .sort((a, b) => b.id - a.id)
                    .slice(0, 3)
                    .map((post) => (
                      <div key={post.id} className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            className="h-16 w-16 rounded object-cover"
                            src={post.image}
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-sm font-medium text-gray-900 hover:text-indigo-600"
                          >
                            {post.title}
                          </Link>
                          <p className="text-sm text-gray-500">
                            {formatDate(new Date(post.date))}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Subscribe</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Get the latest posts delivered right to your inbox.
                </p>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  return {
    props: {
      posts: blogPosts,
      categories,
    },
  };
};