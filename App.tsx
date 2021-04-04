import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { RootStoreContext } from "./src/stores/RootStore";
import { Dashboard } from "./src/screens/Dashboard";
import { Login } from "./src/screens/Login";
import { observer } from "mobx-react-lite";
import Loading from "./src/components/Loading";

const App = observer(() => {
  const rootStore = useContext(RootStoreContext);

  useEffect(() => {
    async function initApp() {
      await rootStore.profileStore.fetchProfile();
    }
    initApp();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {rootStore.profileStore.profile ? <Dashboard /> : <Login />}
      <Loading />
    </SafeAreaView>
  );
});

export default App;
