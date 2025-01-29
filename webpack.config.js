module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /mode_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // Match .css files
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader // Extract CSS into separate files in production
            : "style-loader", // Inject CSS into the DOM in development
          "css-loader", // Resolve @import and url() in CSS
        ],
      },
    ],
  },
};
