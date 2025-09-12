import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Eye, EyeOff } from 'lucide-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

export default function BalanceCard() {
  const [isBalanceVisible, setIsBalanceVisible] = React.useState(true);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    scale.value = withSpring(0.95, { duration: 150 }, () => {
      scale.value = withSpring(1);
    });
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <AnimatedTouchableOpacity
      style={animatedStyle}
      activeOpacity={0.9}
      onPress={handlePress}
    >
      <LinearGradient
        colors={['#3b82f6', '#1d4ed8', '#1e40af']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="rounded-3xl p-6 shadow-lg"
      >
        <View className="flex-row justify-between items-start mb-4">
          <View>
            <Text className="text-blue-100 text-sm font-medium">
              Total Balance
            </Text>
            <Text className="text-white text-3xl font-bold mt-1">
              {isBalanceVisible ? '$12,458.32' : '••••••'}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setIsBalanceVisible(!isBalanceVisible)}
            className="bg-white/20 rounded-full p-2"
          >
            {isBalanceVisible ? (
              <Eye size={20} color="white" />
            ) : (
              <EyeOff size={20} color="white" />
            )}
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between">
          <View className="flex-1">
            <Text className="text-blue-100 text-xs font-medium">Income</Text>
            <Text className="text-white text-lg font-semibold">+$3,248.00</Text>
          </View>
          <View className="flex-1">
            <Text className="text-blue-100 text-xs font-medium">Expenses</Text>
            <Text className="text-white text-lg font-semibold">-$1,892.45</Text>
          </View>
        </View>
      </LinearGradient>
    </AnimatedTouchableOpacity>
  );
}
