import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import {
  ShoppingBag,
  Car,
  Coffee,
  Wifi,
  TrendingUp,
  Tv,
  ShoppingCart,
  Heart,
  Zap,
  Book,
  Film,
  Droplets,
  Music,
  Wrench,
  Gift,
  CreditCard,
  Stethoscope,
  Smartphone,
  Shield,
  Laptop,
  Scissors,
  Bus,
  Briefcase,
  Phone,
  Flower,
  Chrome as Home,
  Pill,
  Brain as Train,
  Monitor,
  DollarSign,
  UtensilsCrossed,
  Dumbbell,
  GraduationCap,
  Pizza,
  Shirt,
  Fuel,
} from 'lucide-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import transactionsData from './transactions.json';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

interface Transaction {
  id: number;
  title: string;
  subtitle: string;
  amount: string;
  isExpense: boolean;
  category: string;
  icon: string;
  bgColor: string;
}

interface TransactionItemProps {
  item: Transaction;
}

const iconMap: { [key: string]: React.ComponentType<any> } = {
  ShoppingBag,
  Car,
  Coffee,
  Wifi,
  TrendingUp,
  Tv,
  ShoppingCart,
  Heart,
  Zap,
  Book,
  Film,
  Droplets,
  Music,
  Wrench,
  Gift,
  CreditCard,
  Stethoscope,
  Smartphone,
  Shield,
  Laptop,
  Scissors,
  Bus,
  Briefcase,
  Phone,
  Flower,
  Home,
  Pill,
  Train,
  Monitor,
  DollarSign,
  UtensilsCrossed,
  Dumbbell,
  GraduationCap,
  Pizza,
  Shirt,
  Fuel,
};

function TransactionItem({ item }: TransactionItemProps) {
  const scale = useSharedValue(1);
  const IconComponent = iconMap[item.icon] || ShoppingBag;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    scale.value = withSpring(0.98, { duration: 100 }, () => {
      scale.value = withSpring(1);
    });
  };

  return (
    <AnimatedTouchableOpacity
      style={animatedStyle}
      onPress={handlePress}
      activeOpacity={0.8}
      className="bg-white rounded-2xl p-4 flex-row items-center justify-between shadow-sm border border-gray-100 mb-3 mx-6"
    >
      <View className="flex-row items-center flex-1">
        <View className={`${item.bgColor} rounded-2xl p-3 mr-4`}>
          <IconComponent size={20} color="white" />
        </View>
        <View className="flex-1">
          <Text className="text-gray-900 font-semibold text-base">
            {item.title}
          </Text>
          <Text className="text-gray-500 text-sm mt-1">{item.subtitle}</Text>
        </View>
      </View>
      <Text
        className={`font-bold text-lg ${
          item.isExpense ? 'text-danger-500' : 'text-success-500'
        }`}
      >
        {item.isExpense ? '-' : '+'}${item.amount}
      </Text>
    </AnimatedTouchableOpacity>
  );
}

export default function RecentTransactions() {
  const transactions = transactionsData as Transaction[];

  const renderItem = ({ item }: { item: Transaction }) => (
    <TransactionItem item={item} />
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50 pt-10">
    <View className="flex-1">
      <View className="flex-row justify-between items-center mb-4 px-6">
        <Text className="text-gray-900 text-xl font-bold">
          Recent Transactions
        </Text>
        {/* <TouchableOpacity>
          <Text className="text-primary-500 text-sm font-medium">See all</Text>
        </TouchableOpacity> */}
      </View>
      <View className="flex-1 min-h-[400px]">
        <FlashList
          data={transactions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          estimatedItemSize={10}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </View>
    </SafeAreaView>
  );
}
