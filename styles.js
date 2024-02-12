import {StyleSheet} from "react-native";
import Constants from "expo-constants";

export const YELLOW = "#FFE50D";
export const BOLDYELLOW = "#FFD600";
export const LIGHTYELLOW = "#FFFD86";
export const GRAY = "#BDBDBD";
export const BOLDGRAY = "#666666";
export const LIGHTGRAY = "#E8E8E8";

export const components = StyleSheet.create({
	screen: {
		paddingHorizontal: 20,
		paddingTop: (Constants.statusBarHeight || 0) + 20,
	},
});
