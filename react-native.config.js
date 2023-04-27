module.exports = {
  dependency: {
    platforms: {
      android: {
        packageInstance:
          'new DynamicChangeIconPackage(BuildConfig.APPLICATION_ID)',
      },
    },
  },
};
