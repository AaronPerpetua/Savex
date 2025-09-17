import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function AnalyticsScreen() {
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const createTransaction = async () => {
    const { error } = await supabase.from("transactions").insert({
      user_id: "22cfd727-2e19-4b27-b20f-3ebb71f35708",
      description: description,
      type: "Expense",
      amount: amount,
      name: itemName,
    });

    if (error) {
      Toast.show({
        type: "error", // "success" | "error" | "info"
        text1: "Transaction Error !",
        text2: "Please try again",
        position: "bottom",
      });
    } else {
      Toast.show({
        type: "success", // "success" | "error" | "info"
        text1: "Transaction Complete !",
        text2: "Your data has been sent 🚀",
        position: "bottom",
      });

      setItemName("");
      setAmount("");
      setDescription("");
      router.replace("/(home)");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 justify-center items-center ">
        <View className="w-11/12 bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-lg">
          <Text className="text-xl font-semibold text-center text-neutral-800 dark:text-white mb-4">
            Add Transaction
          </Text>

          <TextInput
            placeholder="Item name"
            value={itemName}
            onChangeText={setItemName}
            className="border border-neutral-300 dark:border-neutral-700 rounded-xl p-3 mb-3 text-neutral-900 dark:text-white"
            placeholderTextColor="#9ca3af"
          />

          <TextInput
            placeholder="Amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            className="border border-neutral-300 dark:border-neutral-700 rounded-xl p-3 mb-3 text-neutral-900 dark:text-white"
            placeholderTextColor="#9ca3af"
          />

          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            multiline
            className="border border-neutral-300 dark:border-neutral-700 rounded-xl p-3 mb-4 text-neutral-900 dark:text-white h-20"
            placeholderTextColor="#9ca3af"
          />

          <View className="flex-row justify-between">
            <TouchableOpacity
              onPress={createTransaction}
              className="flex-1 ml-2 py-3 rounded-xl bg-indigo-600"
            >
              <Text className="text-center text-white font-semibold">Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
