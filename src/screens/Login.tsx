import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";

export const Login = observer(() => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  return (
    <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps={"handled"}>
      <TextInput
        style={style.input}
        onChangeText={text => {
          setCredentials({ ...credentials, email: text });
        }}
      />
      <TextInput
        style={style.input}
        onChangeText={text =>
          setCredentials({ ...credentials, password: text })
        }
      />
    </ScrollView>
  );
});

const style = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 4,
    borderColor: "gray",
    borderRadius: 5,
  },
});
