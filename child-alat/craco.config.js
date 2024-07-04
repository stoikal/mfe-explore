const path = require("path");
const webpack = require("webpack");

module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  webpack: {
    configure: (webpackConfig, { paths, env }) => {
      const isEnvProduction = env === "production";
      const isEnvDevelopment = env === "development";
      
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        "@": path.resolve(__dirname, "./src"),
      };

      webpackConfig.plugins = [
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        }),
        ...webpackConfig.plugins,
      ];

      webpackConfig.optimization = {
        runtimeChunk: false,
        splitChunks: {
          cacheGroups: {
            default: false,
          },
        }
      }

      webpackConfig.output = {
        path: isEnvProduction ? paths.appBuild : undefined,
        pathinfo: isEnvDevelopment,
        filename: "static/js/[name].[hash:8].js",
        chunkFilename: "static/js/[name].[hash:8].chunk.js",
        publicPath: paths.publicUrlOrPath,
        globalObject: "this",
      }

      return webpackConfig;
    },
  }
}