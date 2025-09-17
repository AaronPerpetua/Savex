import { Link } from "expo-router";
import {
    Car,
    Coffee,
    ShoppingBag
} from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

interface TransactionItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  amount: string;
  isExpense: boolean;
  bgColor: string;
}

function TransactionItem({
  icon,
  title,
  subtitle,
  amount,
  isExpense,
  bgColor,
}: TransactionItemProps) {
  const scale = useSharedValue(1);

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
      className="bg-white rounded-2xl p-4 flex-row items-center justify-between shadow-sm border border-gray-100 mb-3"
    >
      <View className="flex-row items-center flex-1">
        <View className={`${bgColor} rounded-2xl p-3 mr-4`}>{icon}</View>
        <View className="flex-1">
          <Text className="text-gray-900 font-semibold text-base">{title}</Text>
          <Text className="text-gray-500 text-sm mt-1">{subtitle}</Text>
        </View>
      </View>
      <Text
        className={`font-bold text-lg ${
          isExpense ? "text-danger-500" : "text-success-500"
        }`}
      >
        {isExpense ? "-" : "+"}${amount}
      </Text>
    </AnimatedTouchableOpacity>
  );
}

export default function RecentTransactions() {
  const transactions = [
    {
      icon: <ShoppingBag size={20} color="white" />,
      title: "Amazon Purchase",
      subtitle: "Today, 2:30 PM",
      amount: "89.99",
      isExpense: true,
      bgColor: "bg-purple-500",
    },
    {
      icon: <Coffee size={20} color="white" />,
      title: "Starbucks Coffee",
      subtitle: "Today, 11:20 AM",
      amount: "12.50",
      isExpense: true,
      bgColor: "bg-orange-500",
    },
    {
      icon: <Car size={20} color="white" />,
      title: "Uber Ride",
      subtitle: "Yesterday, 6:45 PM",
      amount: "24.80",
      isExpense: true,
      bgColor: "bg-blue-500",
    },
  ];

  return (
    <View>
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-gray-900 text-xl font-bold">
          Recent Transactions
        </Text>
        <TouchableOpacity>
          <Text className="text-primary-500 text-sm font-medium">
            <Link href="./transactions">See All</Link>
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {transactions.map((transaction, index) => (
          <TransactionItem key={index} {...transaction} />
        ))}
      </View>
    </View>
  );
}
