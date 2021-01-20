const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          },
        },
        sourceMap: true,
      },
      lessOptions: (loaderContext) => {
        // More information about available properties https://webpack.js.org/api/loaders/
        // const { resourcePath, rootContext } = loaderContext;
        // const relativePath = path.relative(rootContext, resourcePath);
    
        // if (relativePath === "styles/foo.less") {
        //   return {
        //     paths: ["absolute/path/c", "absolute/path/d"],
        //   };
        // }
    
        // return {
        //   paths: ["absolute/path/a", "absolute/path/b"],
        // };
      }
    },
  ],
};