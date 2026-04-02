module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }], 
      'nativewind/babel'
    ],
    plugins: [
      'react-native-iconify/babel', 
      
      // We removed the worklets plugin and only kept reanimated
      'react-native-reanimated/plugin',
    ],
  };
};