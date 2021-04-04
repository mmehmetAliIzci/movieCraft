import { Modal, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../stores/RootStore";

const Loading = observer(() => {
  const rootStore = useContext(RootStoreContext);
  return (
    <Modal
      animationType={"fade"}
      transparent={true}
      visible={rootStore.loadingStore.loading}>
      <View style={styles.centeredView}>
        <View style={styles.modalWrapper}>
          <Text style={styles.textStyle}>Please wait...</Text>
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalWrapper: {
    alignSelf: "center",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Loading;
