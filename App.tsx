import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';

import Index from './app/index'; 
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#111827',
              borderTopWidth: 0,
              paddingBottom: 5,
              height: 60,
            },
            tabBarActiveTintColor: '#3B82F6',
            tabBarInactiveTintColor: '#9CA3AF',
          }}
        >
          {/* Dashboard Tab */}
          <Tab.Screen 
            name="Home" 
            component={Index}
           />
           {/* Workout Tab */}
           <Tab.Screen 
            name="Workout" 
            component={Index}
           />
           {/* Exercises Tab */}
           <Tab.Screen 
            name="Exercises" 
            component={Index}
           />
           {/* Progress Tab */}
           <Tab.Screen 
            name="Progress" 
            component={Index}
           />
           {/* Profile Tab  */}
           <Tab.Screen 
            name="Profile" 
            component={Index}
           />
        </Tab.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}