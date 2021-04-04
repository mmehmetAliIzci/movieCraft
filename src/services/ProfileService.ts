export function login(email: string, password: string): Promise<any> {
  if (email === "ivaldi" && password === "testtest") {
    return Promise.resolve({ error: {}, profile: { name: "Jack" } });
  } else {
    return Promise.reject();
  }
}
