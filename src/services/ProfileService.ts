import Keychain from "react-native-keychain";

export function login(email: string, password: string): Promise<any> {
  if (email === "ivaldi" && password === "testtest") {
    return Promise.resolve({
      error: {},
      profile: { name: "Jack" },
      token: "123123",
    });
  } else {
    return Promise.reject({ error: "Please check your credentials" });
  }
}

export async function fetchCurrentProfile(): Promise<any> {
  const token = await getToken();
  if (token) {
    return Promise.resolve({
      error: {},
      profile: { name: "Jack" },
      token: "123123",
    });
  } else {
    return Promise.reject({ error: "Please log in again" });
  }
}

export async function getToken() {
  try {
    // Retrieve the credentials
    const credentials = await Keychain.getGenericPassword();
    // Keychain returns 1 if its unset. Check issue: https://github.com/oblador/react-native-keychain/issues/363
    if (credentials && credentials.password !== "1") {
      return credentials.password;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
