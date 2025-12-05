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
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  // Remove output: 'export' if you want to use ISR
  // Or keep it and modify your dynamic routes to work with static export
  output: 'export',
  
  // Add this if you want to keep output: 'export'
  trailingSlash: true,
  
  // If you need to use dynamic routes with export, you'll need to define them here
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/products': { page: '/products' },
      // Add other static paths here
    };
  }
}

export default nextConfig;