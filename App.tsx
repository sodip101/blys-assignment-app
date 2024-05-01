import { useState } from "react";
import { LockedScreen, UnlockedScreen } from "./src/screens";

export default function App() {
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const handleVerification = () => {
    setIsVerified((prev) => !prev);
  };

  return isVerified ? (
    <UnlockedScreen />
  ) : (
    <LockedScreen handleVerification={handleVerification} />
  );
}
