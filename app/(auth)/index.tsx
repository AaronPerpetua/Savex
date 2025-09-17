import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


 const handleLogin = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const { data, error, } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      Alert.alert("Login failed", error.message);
      setLoading(false);
    } else {


      router.navigate("/(home)")
    }
  };
 

  return (
    <SafeAreaView className="flex-1 bg-white px-6 justify-center">
      <Text className="text-3xl font-semibold mb-6 text-black">
        Welcome back
      </Text>

      <Text className="text-sm text-gray-500 mb-2">Email</Text>
      <TextInput
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        placeholder="you@example.com"
        className="border border-gray-200 rounded-xl p-3 mb-4"
      />

      <Text className="text-sm text-gray-500 mb-2">Password</Text>
      <TextInput
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholder="••••••••"
        className="border border-gray-200 rounded-xl p-3 mb-6"
      />

      <TouchableOpacity
          onPress={handleLogin}
        activeOpacity={0.8}
        className="bg-black rounded-xl py-3 items-center mb-4"
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-white font-medium">Sign in</Text>
        )}
      </TouchableOpacity>

      <View className="flex-row justify-between items-center">
        <Text className="text-gray-500">New here?</Text>
        <TouchableOpacity>
          <Text className="text-black font-medium">Create account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
