import {
  Appearance,
  Dimensions,
  PixelRatio,
  Platform,
  StyleSheet,
} from "react-native";

export const colors = {
  primaryDark: Appearance.getColorScheme() === "dark" ? "#000030" : "#81b9bf",
  primary: Appearance.getColorScheme() === "dark" ? "#101a59" : "#b2ebf2",
  primaryLight: Appearance.getColorScheme() === "dark" ? "#434187" : "#e5ffff",
  secondaryDark: Appearance.getColorScheme() === "dark" ? "#26002f" : "#9e97b2",
  secondary: Appearance.getColorScheme() === "dark" ? "#4e1059" : "#cfc8e4",
  secondaryLight:
    Appearance.getColorScheme() === "dark" ? "#7c3e86" : "#fffbff",
  textColor: Appearance.getColorScheme() === "dark" ? "#FFFFFF" : "#000000",
  white: Appearance.getColorScheme() === "dark" ? "#1F1F1F" : "#FFFFFF",
  gray: Appearance.getColorScheme() === "dark" ? "#dddddd" : "#9b9b9b",
  textColorLight:
    Appearance.getColorScheme() === "dark" ? "#dddddd" : "#9b9b9b",
};

const fontFamily = { fontFamily: "Cochin" };

// SO solution seems good enough
const { width: SCREEN_WIDTH } = Dimensions.get("window");

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size: number): number {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const font = StyleSheet.create({
  title: {
    ...fontFamily,
    fontSize: normalize(24),
    color: colors.textColor,
  },
  subTitle: {
    ...fontFamily,
    fontSize: normalize(18),
    color: colors.textColor,
  },
  paragraph: {
    ...fontFamily,
    fontSize: normalize(12),
    color: colors.textColorLight,
  },
});
