/** @type {import('next').NextConfig} */

module.exports = {
  // experimental: {
  //   esmExternals: "loose",
  //   serverComponentsExternalPackages: ["mongoose"] 
  // },
  // // and the following to enable top-level await support for Webpack
  // webpack: (config) => {
  //   config.experiments = {
  //     topLevelAwait: true
  //   };
  //   return config;
  // },
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'occ-0-3933-116.1.nflxso.net',
          port: '',
          pathname: '**',
        },
      ],
    },

    
  }

// module.exports = nextConfig
