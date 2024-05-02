import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { StatusBar } from "expo-status-bar";

import { API } from "../api";
import { Images } from "../../assets";
import { useState } from "react";

export default function LockedScreen({
  handleVerification,
}: {
  handleVerification: (isVerified: boolean) => void;
}) {
  const [otpText, setOtpText] = useState<string>("");
  const [isVerifying, setVerifying] = useState<boolean>(false);

  const onVerifyPress = async () => {
    setVerifying(true);
    const resp = await API.verifyCode(otpText);
    setVerifying(false);

    if (resp?.success === true) {
      handleVerification(resp.success);
    } else {
      Alert.alert("Error", resp?.error?.message ?? "Your code is invalid");
    }
  };

  return (
    <ImageBackground
      source={Images.lockedBackground}
      style={{ height: "100%", width: "100%" }}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
      >
        <StatusBar backgroundColor="transparent" style="dark" />

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
          onTextChange={(text) => {
            setOtpText(text);
          }}
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

        <TouchableOpacity
          disabled={otpText.length < 6 || isVerifying}
          style={{
            ...styles.verifyBtn,
            opacity: otpText.length < 6 || isVerifying ? 0.8 : 1,
          }}
          onPress={onVerifyPress}
        >
          {isVerifying ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.verifyBtnTitle}>Let me enter</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
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
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  verifyBtnTitle: {
    color: "white",
    fontSize: 16,
  },
});
