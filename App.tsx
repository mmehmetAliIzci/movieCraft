import React, { useContext } from "react";
import { SafeAreaView, Text } from "react-native";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "./src/stores/RootStore";
import { Dashboard } from "./src/screens/Dashboard";
import { Login } from "./src/screens/Login";

const App = observer(() => {
  const rootStore = useContext(RootStoreContext);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {rootStore.profileStore.profile ? <Dashboard /> : <Login />}
    </SafeAreaView>
  );
});

export default App;
