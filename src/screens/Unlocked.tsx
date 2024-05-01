import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { Images } from "../../assets";

export default function UnlockedScreen() {
  return (
    <ImageBackground
      source={Images.unlockedBackground}
      style={styles.container}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>Code Verified</Text>

        <Text style={styles.description}>You may proceed.</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    gap: 34,
  },
  textContainer: {
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  description: {
    fontSize: 14,
    color: "white",
  },
});
