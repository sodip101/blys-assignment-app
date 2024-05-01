import { useState } from "react";
import { LockedScreen, UnlockedScreen } from "./src/screens";

export default function App() {
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const handleVerification = (verified: boolean) => {
    setIsVerified(verified);
  };

  return isVerified ? (
    <UnlockedScreen handleVerification={handleVerification} />
  ) : (
    <LockedScreen handleVerification={handleVerification} />
  );
}
