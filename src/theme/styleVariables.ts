import {
  Appearance,
  Dimensions,
  PixelRatio,
  Platform,
  StyleSheet,
} from "react-native";

export const colors = {
  primaryDark: Appearance.getColorScheme() === "dark" ? "#81b9bf" : "#000030",
  primary: Appearance.getColorScheme() === "dark" ? "#b2ebf2" : "#101a59",
  primaryLight: Appearance.getColorScheme() === "dark" ? "#e5ffff" : "#434187",
  secondaryDark: Appearance.getColorScheme() === "dark" ? "#9e97b2" : "#26002f",
  secondary: Appearance.getColorScheme() === "dark" ? "#cfc8e4" : "#4e1059",
  secondaryLight:
    Appearance.getColorScheme() === "dark" ? "#fffbff" : "#7c3e86",
  textColor: Appearance.getColorScheme() === "dark" ? "#FFFFFF" : "#000000",
  white: Appearance.getColorScheme() === "dark" ? "#1F1F1F" : "#FFFFFF",
  gray: Appearance.getColorScheme() === "dark" ? "#dddddd" : "#9b9b9b",
  textColorLight:
    Appearance.getColorScheme() === "dark" ? "#dddddd" : "#9b9b9b",
};

const fontFamily = { fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto" };

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
    fontSize: normalize(14),
    color: colors.textColor,
  },
  subTitle: {
    ...fontFamily,
    fontSize: normalize(13),
    color: colors.textColor,
  },
  paragraph: {
    ...fontFamily,
    fontSize: normalize(12),
    color: colors.textColorLight,
  },
});

export const borderRadius = 5;
