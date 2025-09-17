import { ArrowDownLeft, ArrowUpRight, Plus } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

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

export default function QuickActions() {

  return (
    <View>
      <Text className="text-gray-900 text-xl font-bold mb-4">
        Quick Actions
      </Text>
      <View className="flex-row justify-around">
        <ActionButton
          icon={<Plus size={24} color="white" />}
          label="Add Money"
          bgColor="bg-orange-500"
         onPress={() => console.log("Add Money")}
        />
        <ActionButton
          icon={<ArrowUpRight size={24} color="white" />}
          label="Send Money"
          bgColor="bg-blue-500"
          onPress={() => console.log("Transfer Money")}
        />
        <ActionButton
          icon={<ArrowDownLeft size={24} color="white" />}
          label="Save Money"
          bgColor="bg-green-500"
          onPress={() => console.log("Request Money")}
        />
      </View>
    </View>
  );
}
