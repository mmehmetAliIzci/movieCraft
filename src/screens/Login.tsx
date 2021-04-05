import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { RootStoreContext } from "../stores/RootStore";
import { Pressable } from "../components/Pressable";
import { borderRadius, colors } from "../theme/styleVariables";

export const Login = observer(() => {
  const rootStore = useContext(RootStoreContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  return (
    <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps={"handled"}>
      <ImageBackground
        resizeMode={"cover"}
        source={require("../assets/loginBackground.jpg")}
        style={style.imageBackground}>
        <TextInput
          style={style.input}
          autoCapitalize={"none"}
          placeholder={"Username"}
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
        <Pressable
          onPress={async () => {
            await rootStore.profileStore.login(
              credentials.username,
              credentials.password,
            );
          }}>
          <Text style={{ color: colors.white }}>Login</Text>
        </Pressable>
      </ImageBackground>
    </ScrollView>
  );
});

const style = StyleSheet.create({
  imageBackground: {
    height: Dimensions.get("window").height,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  input: {
    height: 30,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 5,
    margin: 10,
    borderColor: "black",
    borderRadius,
    color: "black",
  },
});
