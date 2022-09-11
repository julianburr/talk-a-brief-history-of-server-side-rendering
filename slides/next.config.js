/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    config.module.rules = config.module.rules.concat([
      // Add SVGR loader to import SVGs as react components
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [{ name: "removeViewBox", active: false }],
              },
            },
          },
        ],
      },
    ]);
    return config;
  },
};

module.exports = nextConfig;
