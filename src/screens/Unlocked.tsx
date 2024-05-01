import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
    fontSize: 20,
    color: "white",
  },
  description: {
    fontSize: 14,
    color: "white",
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
