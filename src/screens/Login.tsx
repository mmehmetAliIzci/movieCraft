import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, ScrollView, StyleSheet, TextInput } from "react-native";

export const Login = observer(() => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  return (
    <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps={"handled"}>
      <TextInput
        style={style.input}
        placeholder={"john@jansen.com"}
        onChangeText={text => {
          setCredentials({ ...credentials, email: text });
        }}
      />
      <TextInput
        style={style.input}
        secureTextEntry={true}
        placeholder={"********"}
        onChangeText={text =>
          setCredentials({ ...credentials, password: text })
        }
      />
      <Button
        onPress={() => {
          console.warn("log in");
        }}
        title={"Login"}
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
