module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/sass/abstract/_variable.scss";',
      },
    },
  },
};
