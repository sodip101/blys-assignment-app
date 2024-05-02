const baseUrl: string = process.env.EXPO_PUBLIC_API_URL ?? "";

export const API = {
  verifyCode: async (
    code: string
  ): Promise<{
    success?: boolean;
    error?: {
      message: string;
    };
  }> => {
    const url = `${baseUrl}verifyCode`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otpCode: code }),
    });
    const parsedRes = await res.json();

    return parsedRes;
  },
};
