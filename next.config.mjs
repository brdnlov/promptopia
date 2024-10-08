/** @type {import('next').NextConfig} */
// module.exports = {
//   experimental: {
//     missingSuspenseWithCSRBailout: false,
//   },
// };

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
        topLevelAwait: true,
    };
  return config;
  },
  };
  
  export default nextConfig