import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";

import { Images } from "../../assets";

export default function LockedScreen({
  handleVerification,
}: {
  handleVerification: () => void;
}) {
  return (
    <ImageBackground source={Images.lockedBackground} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Verification</Text>

        <Text style={styles.description}>
          Please enter the passcode to proceed.
        </Text>
      </View>

      <OtpInput
        numberOfDigits={6}
        focusColor="blue"
        focusStickBlinkingDuration={500}
        onTextChange={(text) => console.log(text)}
        onFilled={(text) => console.log(`OTP is ${text}`)}
        textInputProps={{
          accessibilityLabel: "One-Time Password",
        }}
        theme={{
          containerStyle: styles.otpContainer,
          pinCodeContainerStyle: styles.otpInput,
          pinCodeTextStyle: { color: "blue" },
          focusedPinCodeContainerStyle: { borderColor: "blue" },
        }}
      />

      <TouchableOpacity style={styles.verifyBtn} onPress={handleVerification}>
        <Text style={styles.verifyBtnTitle}>Verify</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 24,
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
  otpContainer: {
    width: "100%",
    paddingHorizontal: 24,
  },
  otpInput: { backgroundColor: "white" },
  verifyBtn: {
    backgroundColor: "blue",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  verifyBtnTitle: {
    color: "white",
    fontSize: 16,
  },
});
