import path from 'path';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const __dirname = new URL('.', import.meta.url).pathname;

const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };

    config.optimization.minimizer = [
      config.optimization.minimizer[0],
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              colormin: false,
            },
          ],
        },
      }),
    ];

    return config;
  },
};

export default nextConfig;
