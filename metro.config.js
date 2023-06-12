const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    resolver: {
      sourceExts: [...sourceExts, "jsx", "js", "ts", "tsx"], // Add any other extensions you are using
      resolverMainFields: ["react-native", "browser", "main"],
      extraNodeModules: {
        src: `${__dirname}/src`,
      },
    },
    transformer: {
      assetPlugins: ["expo-asset/tools/hashAssetFiles"],
    },
    watchFolders: [`${__dirname}/src`],
  };
})();
