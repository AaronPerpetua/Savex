import { Tabs } from 'expo-router';
import React from 'react';
 
 
import { Chrome as Home, TrendingUp, ChartPie as PieChart, Settings } from 'lucide-react-native';
export default function HomeLayout() {
 

  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#3b82f6',
      tabBarInactiveTintColor: '#9ca3af',
      tabBarStyle: {
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#f3f4f6',
        paddingBottom: 8,
        paddingTop: 4,
        height: 80,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '500',
        marginTop: 4,
      },
    }}
  >
    <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ size, color }) => (
          <Home size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="analytics"
      options={{
        title: 'Analytics',
        tabBarIcon: ({ size, color }) => (
          <TrendingUp size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="budget"
      options={{
        title: 'Budget',
        tabBarIcon: ({ size, color }) => (
          <PieChart size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="settings"
      options={{
        title: 'Settings',
        tabBarIcon: ({ size, color }) => (
          <Settings size={size} color={color} />
        ),
      }}
    />
  </Tabs>
  );
}
