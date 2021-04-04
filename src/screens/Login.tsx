import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, ScrollView, StyleSheet, TextInput } from "react-native";
import { RootStoreContext } from "../stores/RootStore";

export const Login = observer(() => {
  const rootStore = useContext(RootStoreContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  return (
    <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps={"handled"}>
      <TextInput
        style={style.input}
        autoCapitalize={"none"}
        placeholder={"Here's Johnny !"}
        onChangeText={text => {
          setCredentials({ ...credentials, username: text });
        }}
      />
      <TextInput
        style={style.input}
        autoCapitalize={"none"}
        secureTextEntry={true}
        placeholder={"********"}
        onChangeText={text =>
          setCredentials({ ...credentials, password: text })
        }
      />
      <Button
        onPress={async () => {
          await rootStore.profileStore.login(
            credentials.username,
            credentials.password,
          );
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
