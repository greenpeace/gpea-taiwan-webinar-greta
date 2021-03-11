const CracoLessPlugin = require("craco-less");
const CompressionPlugin = require("compression-webpack-plugin"); //gzip
const BrotliPlugin = require("brotli-webpack-plugin"); //brotli
const imageOptimizer = require("craco-image-optimizer-plugin");

module.exports = {
  plugins: [
    {
      plugin: CompressionPlugin,
      options: {
        //gzip plugin
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.(js|css|html|svg)$/,
        threshold: 8192,
        minRatio: 0.8,
      },
    },
    {
      plugin: BrotliPlugin,
      options: {
        //brotli plugin
        asset: "[path].br[query]",
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8,
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
        sourceMap: true,
      },
    },
    {
      plugin: imageOptimizer,
      // image-webpack-plugin options
      options: {
        mozjpeg: {
          progressive: true,
          quality: 65,
        },
        // optipng.enabled: false will disable optipng
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.65, 0.9],
          speed: 4,
        },
        gifsicle: {
          interlaced: false,
        },
        // the webp option will enable WEBP
        webp: {
          quality: 75,
        },
      },
    },
  ],
};
