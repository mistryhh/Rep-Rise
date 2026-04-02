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
      // Your tab bar icons
      'mdi:home', 'mdi:dumbbell', 'mdi:weight', 'mdi:chart-line', 'mdi:account',
      // Your new Solar icons
      'solar:play-bold',
      'solar:arrow-right-linear',
      'solar:calendar-linear',
      'solar:medal-star-bold',
      'solar:menu-dots-bold',
      'solar:clock-circle-linear',
      'solar:dumbbell-linear',
      'solar:running-bold',
      'solar:flame-linear'
    ]
  }], 
  'react-native-reanimated/plugin',
],
  };
};