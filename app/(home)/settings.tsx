import React, { useState } from 'react';
import { View, Text, SafeAreaView,Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter,useFocusEffect  } from 'expo-router';
import { supabase } from '../../utils/supabase';
import SplashScreen from '@/components/SplashScreen';




export default function SettingsScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  
  const handleLogout = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(true)
    await supabase.auth.signOut();
  };

  if (loading) {
    return <SplashScreen />; // or splash/loading screen
  }

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
           <Button title="Logout" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
}
