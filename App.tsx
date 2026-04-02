// @@iconify-code-gen
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Iconify } from "react-native-iconify";
import { View, Text } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

// This ensures your NativeWind styles load
import './global.css';

// Import your Home screen
import Index from './app/index';

// --- Placeholder Screens ---
const WorkoutScreen = () => (
  <View className="flex-1 bg-black items-center justify-center">
    <Text className="text-white text-xl">Workout Screen</Text>
  </View>
);

const ExercisesScreen = () => (
  <View className="flex-1 bg-black items-center justify-center">
    <Text className="text-white text-xl">Exercises Screen</Text>
  </View>
);

const ProgressScreen = () => (
  <View className="flex-1 bg-black items-center justify-center">
    <Text className="text-white text-xl">Progress Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View className="flex-1 bg-black items-center justify-center">
    <Text className="text-white text-xl">Profile Screen</Text>
  </View>
);

// 1. Define the screen names for TypeScript
type TabParamList = {
  Home: undefined;
  Workout: undefined;
  Exercises: undefined;
  Progress: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#111827', // gray-900
              borderTopColor: '#1F2937',  // gray-800
              paddingBottom: 5,
              height: 65,
            },
            tabBarActiveTintColor: '#3B82F6', // blue-500
            tabBarInactiveTintColor: '#9CA3AF', // gray-400
            
            // 2. Added explicit types (: { color: string; size: number }) to fix your error
            tabBarIcon: ({ color, size }: { color: string; size: number }) => {
              let iconName = 'mdi:home';

              if (route.name === 'Home') iconName = 'mdi:home';
              else if (route.name === 'Workout') iconName = 'mdi:dumbbell';
              else if (route.name === 'Exercises') iconName = 'mdi:weight';
              else if (route.name === 'Progress') iconName = 'mdi:chart-line';
              else if (route.name === 'Profile') iconName = 'mdi:account';

              return <Iconify icon={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={Index} />
          <Tab.Screen name="Workout" component={WorkoutScreen} />
          <Tab.Screen name="Exercises" component={ExercisesScreen} />
          <Tab.Screen name="Progress" component={ProgressScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}