// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['localhost'],
//     unoptimized: true
//   },
//   output: 'export',
// }

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports
  output: 'export',
  
  // Image optimization configuration
  images: {
    domains: ['localhost'],
    unoptimized: true, // Required for static exports
  },
  
  // Add trailing slash for static exports
  trailingSlash: true,
  
  // React Strict Mode
  reactStrictMode: true,
  
  // Define the export path map for static generation
  exportPathMap: async function() {
    // Define your static paths here
    const paths = {
      '/': { page: '/' },
      '/products': { page: '/products' },
      // Add more static paths as needed
    };
    
    // Add dynamic product pages
    const products = [
      'urban-hoodie',
      'minimal-logo-tee',
      'street-smart-cap',
      'comfort-track-pants'
    ];
    
    products.forEach(product => {
      paths[`/products/${product}`] = { 
        page: '/products/[slug]',
        query: { slug: product }
      };
    });
    
    return paths;
  },
  
  // Webpack configuration (optional)
  webpack: (config) => {
    return config;
  }
}

export default nextConfig;