import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  ShoppingBag,
  Car,
  Coffee,
  Chrome as HomeIcon,
  MoveHorizontal as MoreHorizontal,
} from 'lucide-react-native';

interface CategoryItemProps {
  icon: React.ReactNode;
  label: string;
  amount: string;
  percentage: number;
  color: string;
}

function CategoryItem({
  icon,
  label,
  amount,
  percentage,
  color,
}: CategoryItemProps) {
  return (
    <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mr-4 min-w-[140px]">
      <View className={`${color} rounded-full p-3 self-start mb-3`}>
        {icon}
      </View>
      <Text className="text-gray-900 font-semibold text-base mb-1">
        {amount}
      </Text>
      <Text className="text-gray-500 text-sm mb-2">{label}</Text>
      <View className="bg-gray-100 rounded-full h-2 mb-1">
        <View
          className={`${color
            .replace('bg-', 'bg-')
            .replace('/10', '')} rounded-full h-2`}
          style={{ width: `${percentage}%` }}
        />
      </View>
      <Text className="text-gray-400 text-xs">{percentage}% of budget</Text>
    </View>
  );
}

export default function SpendingCategories() {
  const categories = [
    {
      icon: <ShoppingBag size={20} color="white" />,
      label: 'Shopping',
      amount: '$483.20',
      percentage: 65,
      color: 'bg-purple-500/10',
    },
    {
      icon: <Car size={20} color="white" />,
      label: 'Transport',
      amount: '$156.80',
      percentage: 35,
      color: 'bg-blue-500/10',
    },
    {
      icon: <Coffee size={20} color="white" />,
      label: 'Food',
      amount: '$284.50',
      percentage: 80,
      color: 'bg-orange-500/10',
    },
    {
      icon: <HomeIcon size={20} color="white" />,
      label: 'Bills',
      amount: '$592.30',
      percentage: 45,
      color: 'bg-green-500/10',
    },
  ];

  return (
    <View>
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-gray-900 text-xl font-bold">Spending</Text>
        <Text className="text-primary-500 text-sm font-medium">See all</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row"
      >
        {categories.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </ScrollView>
    </View>
  );
}
