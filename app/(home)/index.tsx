import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import BalanceCard from '@/components/BalanceCard';
import { StatusBar } from 'expo-status-bar';
import QuickActions from '@/components/QuickActions';
import React, { useEffect, useState } from "react";
import RecentTransactions from '@/components/RecentTransaction';
import SpendingCategories from '@/components/SpendingCategories';
import { supabase } from "../../utils/supabase";
 
import { useRouter } from 'expo-router';
export default function Index() {
 
   const router = useRouter();
   const [email, setEmail] = useState('');
    useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
          console.log(error.message, "this is from home page")
      } else if (user) {
        setEmail(user.email);
      
      }
    };

    getUser();
  }, []);

 

  return (
    <SafeAreaView className="flex-1 bg-gray-50 py-10">
      <StatusBar style="dark" />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-4 pb-2">
          <Text className="text-gray-500 text-base">Good morning,</Text>
          <Text className="text-gray-900 text-2xl font-bold">{email}</Text>
          
        </View>
         {/* Balance Card */}
         <View className="px-6 mb-6">
          <BalanceCard />
        </View>

        {/* Quick Actions */}
        <View className="px-6 mb-6">
          <QuickActions />
        </View>

       {/* Spending Categories */}
       <View className="px-6 mb-6">
          <SpendingCategories />
        </View>

        {/* Recent Transactions */}
        <View className="px-6 mb-6">
          <RecentTransactions />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
