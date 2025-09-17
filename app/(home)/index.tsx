import BalanceCard from "@/components/BalanceCard";
import QuickActions from "@/components/QuickActions";
import RecentTransactions from "@/components/RecentTransactions";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function index() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50 pt-10">
      <StatusBar style="dark" />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-4 pb-2">
          <Text className="text-gray-500 text-base">Good morning,</Text>
          <Text className="text-gray-900 text-2xl font-bold">aaron</Text>
        </View>
        {/* Balance Card */}
        <View className="px-6 mb-6">
          <BalanceCard />
        </View>
         <View className="px-6 mb-6">
          <QuickActions />
        </View>
        <View className="px-6 mb-6">
          <RecentTransactions />
        </View>
      </ScrollView>
     <Toast />
    </SafeAreaView>
  );
}
