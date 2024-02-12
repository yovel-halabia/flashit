import {Pressable, Text, StyleSheet} from "react-native";
import {YELLOW} from "../styles";

export default function Button({label, Icon, onPress, primary, customTheme}) {
	return (
		<Pressable onPress={onPress} style={primary ? styles.primaryButton : customTheme ? customTheme.button : {}}>
			{label && <Text style={[styles.text, primary ? styles.primaryText : customTheme ? customTheme.text : {}]}>{label}</Text>}
			{Icon && <Icon />}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	primaryButton: {
		color: "white",
		backgroundColor: YELLOW,
		padding: 10,
		borderRadius: 100,
		height: 55,
		justifyContent: "center",
	},
	text: {
		textAlign: "center",
		fontFamily: "Poppins-Regular",
		fontSize: 16,
		color: YELLOW,
	},
	primaryText: {
		color: "white",
		fontFamily: "Poppins-Bold",
		fontWeight: "bold",
	},
});
