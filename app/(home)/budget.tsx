import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import { StatusBar } from 'expo-status-bar';

export default function BudgetScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar style="dark" />
      <View className="flex-1 justify-center items-center px-6">
        <Text className="text-gray-900 text-2xl font-bold mb-4">Budget</Text>
        <Text className="text-gray-500 text-center">
          Budget management features will be implemented here. Users will be
          able to set budgets for different categories and track their progress.
        </Text>
      </View>
    </SafeAreaView>
  );
}
