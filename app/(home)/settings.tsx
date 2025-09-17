import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../../utils/supabase";

export default function SettingsScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(true);
    await supabase.auth.signOut();
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar style="dark" />
      <View className="flex-1 justify-center items-center px-6">
        <Text className="text-gray-900 text-2xl font-bold mb-4">Settings</Text>
        <Text className="text-gray-500 text-center">
          Settings and profile management features will be implemented here.
          Users will be able to customize their preferences and manage their
          account.
        </Text>
        <Button  title="Logout" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
}
