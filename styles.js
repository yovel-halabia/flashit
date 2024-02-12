import {StyleSheet} from "react-native";
import Constants from "expo-constants";

export const YELLOW = "#FFE50D";
export const BOLDYELLOW = "#FFD600";
export const LIGHTYELLOW = "#FFFD86";
export const GRAY = "#E8E8E8";
export const BOLDGRAY = "#BDBDBD";
export const LIGHTGRAY = "#F6F6F6";

export const components = StyleSheet.create({
	screen: {
		paddingHorizontal: 20,
		paddingTop: (Constants.statusBarHeight || 0) + 20,
	},
});
