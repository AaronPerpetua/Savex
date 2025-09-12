import React from "react";
import { SafeAreaView, Text, Image,StyleSheet,View  } from "react-native";
import { Riple } from "react-loading-indicators";
import LottieView from "lottie-react-native";

export default function SplashScreen() {

  const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
});

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <View style={styles.container}>
      <LottieView
        source={require("../assets/loading_animation.json")}
        autoPlay
        loop
        style={{ width: 120, height: 120 }}
      />
    </View>
    </SafeAreaView>
  );
}
