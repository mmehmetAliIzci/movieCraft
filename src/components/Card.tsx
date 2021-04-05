import React, { ReactElement } from "react";
import { Appearance, Platform, StyleSheet, View } from "react-native";
import { colors } from "../theme/styleVariables";

export function Card(props: any): ReactElement {
  return <View style={styles.cardContainer}>{props.children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 0,
    margin: 10,
    flex: 1,
    marginBottom: 0,
    borderRadius: 10,
    borderColor:
      Appearance.getColorScheme() === "dark" ? "transparent" : colors.gray,
    ...Platform.select({
      android: {
        elevation: 1,
      },
      default: {
        shadowColor: "rgba(0,0,0, .2)",
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 2,
      },
    }),
  },
});
