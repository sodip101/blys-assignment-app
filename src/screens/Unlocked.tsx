import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { Images } from "../../assets";

export default function UnlockedScreen({
  handleVerification,
}: {
  handleVerification: (isVerified: boolean) => void;
}) {
  const onPressBack = () => {
    handleVerification(false);
  };
  return (
    <ImageBackground
      source={Images.unlockedBackground}
      style={styles.container}
    >
      <StatusBar backgroundColor="transparent" style="dark" />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Code Verified</Text>

        <Text style={styles.description}>You may enter.</Text>
      </View>

      <TouchableOpacity style={styles.verifyBtn} onPress={onPressBack}>
        <Text style={styles.verifyBtnTitle}>I'll go back</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 34,
  },
  textContainer: {
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  verifyBtn: {
    backgroundColor: "white",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  verifyBtnTitle: {
    color: "blue",
    fontSize: 16,
  },
});
