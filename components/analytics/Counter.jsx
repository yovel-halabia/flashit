import {View, Text, StyleSheet} from "react-native";
import {components, YELLOW, BOLDGRAY} from "../../styles";

export default function Counter({label, data}) {
	if (!label || !data) return;
	return (
		<View style={[components.card, styles.container]}>
			<Text style={styles.number}>{data}</Text>
			<Text style={styles.label}>{label}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: 5,
		padding: 10,
	},
	number: {
		fontSize: 25,
		fontFamily: "Poppins-Regular",
		color: YELLOW,
	},
	label: {
		fontFamily: "Poppins-Regular",
		color: BOLDGRAY,
		textAlign: "center",
	},
});
