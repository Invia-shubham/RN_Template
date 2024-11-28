const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);


// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
// const path = require('path');

// // Custom aliases from tsconfig
// const alias = {
// //   '@context': path.resolve(__dirname, 'src/appcontext'),
//   '@assets': path.resolve(__dirname, 'src/assets'),
// };

// // Extend Metro's default config to include alias resolution
// const config = {
//   resolver: {
//     alias,  // Adding alias mappings here
//   },
// };

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);
