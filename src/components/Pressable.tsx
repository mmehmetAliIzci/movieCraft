import React, { ReactElement } from "react";
import {
  PressableProps,
  Pressable as NativePressable,
  StyleSheet,
} from "react-native";
import { borderRadius, colors } from "../theme/styleVariables";

export function Pressable(props: PressableProps): ReactElement {
  const { style, children, ...rest } = props;
  return (
    <NativePressable
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      // @ts-ignore
      style={({ pressed }) =>
        StyleSheet.flatten([
          {
            backgroundColor: pressed ? colors.primaryLight : colors.primary,
            minHeight: 30,
            margin: 10,
            marginHorizontal: 10,
            borderRadius,
            alignItems: "center",
            justifyContent: "center",
          },
          style,
        ])
      }
      {...rest}>
      {children}
    </NativePressable>
  );
}
