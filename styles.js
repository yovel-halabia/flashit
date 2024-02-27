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
	screenTitle: {
		fontSize: 24,
		fontFamily: "Poppins-Regular",
	},
	headerLayout: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	card: {
		width: "100%",
		height: "100%",
		borderRadius: 15,
		backgroundColor: "white",
		shadowColor: "#31208a",
		shadowOffset: {width: 0, height: 8},
		shadowOpacity: 0.05,
		shadowRadius: 40,
		elevation: 3,
	},
});
