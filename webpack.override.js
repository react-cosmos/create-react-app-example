module.exports = config => {
  return {
    ...config,
    experiments: {
      topLevelAwait: true,
    },
  };
};
