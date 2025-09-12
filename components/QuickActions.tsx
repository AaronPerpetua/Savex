import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Plus, ArrowUpRight, ArrowDownLeft } from 'lucide-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { supabase } from '../utils/supabase';


const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  bgColor: string;
  onPress: () => void;
}

function ActionButton({ icon, label, bgColor, onPress }: ActionButtonProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    scale.value = withSpring(0.9, { duration: 100 }, () => {
      scale.value = withSpring(1);
    });
    onPress();
  };

  return (
    <AnimatedTouchableOpacity
      style={animatedStyle}
      onPress={handlePress}
      activeOpacity={0.8}
      className="items-center"
    >
      <View className={`${bgColor} rounded-2xl p-4 mb-2 shadow-sm`}>
        {icon}
      </View>
      <Text className="text-gray-600 text-sm font-medium">{label}</Text>
    </AnimatedTouchableOpacity>
  );
}

const createTransaction = async ()=> {

  const { error } = await supabase
  .from('transactions')
  .insert({ user_id: "22cfd727-2e19-4b27-b20f-3ebb71f35708", 
    description: 'brought from sm MOA',
  type: 'Expense',
amount:'5000',
name: 'PC' })
console.log(error?.message)
 
};

export default function QuickActions() {
  const router = useRouter();

  return (
    <View>
      <Text className="text-gray-900 text-xl font-bold mb-4">
        Quick Actions
      </Text>
      <View className="flex-row justify-around">
        <ActionButton
          icon={<Plus size={24} color="white" />}
          label="Add Transaction"
          bgColor="bg-primary-500"
          onPress={() => console.log('Add Transaction')}
        />
        <ActionButton
          icon={<ArrowUpRight size={24} color="white" />}
          label="Send Money"
          bgColor="bg-success-500"
          onPress={createTransaction}
        />
        <ActionButton
          icon={<ArrowDownLeft size={24} color="white" />}
          label="Request Money"
          bgColor="bg-orange-500"
          onPress={() => console.log('Request Money')}
        />
      </View>
    </View>
  );
}
