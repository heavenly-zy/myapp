const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');
const { resolve } = require('metro-resolver');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = mergeConfig(getDefaultConfig(__dirname), {
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      if (moduleName.startsWith('@/')) {
        const redirectedPath = path.resolve(
          __dirname,
          'src',
          moduleName.slice(2)
        );
        return resolve(context, redirectedPath, platform);
      }

      return resolve(context, moduleName, platform);
    },
  },
});

module.exports = withNativeWind(config, {
  input: './global.css',
});