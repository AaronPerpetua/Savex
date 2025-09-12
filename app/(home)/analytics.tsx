import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function AnalyticsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar style="dark" />
      <View className="flex-1 justify-center items-center px-6">
        <Text className="text-gray-900 text-2xl font-bold mb-4">Analytics</Text>
        <Text className="text-gray-500 text-center">
          Analytics features will be implemented here. This will include
          spending charts, income vs expense analysis, and financial insights.
        </Text>
      </View>
    </SafeAreaView>
  );
}
