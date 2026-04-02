module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }], 
      'nativewind/babel'
    ],
    plugins: [
  ['react-native-iconify/babel', { 
    icons: [
      'mdi:plus', 
      'mdi:chevron-right', 
      'mdi:home', 
      'mdi:dumbbell', 
      'mdi:weight', 
      'mdi:chart-line', 
      'mdi:account'
    ] 
  }], 
  'react-native-reanimated/plugin',
],
  };
};