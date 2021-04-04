import React, { useContext } from "react";
import { Button, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../stores/RootStore";

export const Dashboard = observer(() => {
  const rootStore = useContext(RootStoreContext);
  return (
    <ScrollView>
      <Button
        title={"Logout"}
        onPress={() => rootStore.profileStore.logout()}
      />
    </ScrollView>
  );
});
