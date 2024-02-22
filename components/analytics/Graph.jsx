import {View, Text, StyleSheet} from "react-native";
import {components, YELLOW, BOLDGRAY, LIGHTGRAY} from "../../styles";

function GraphColumn({label, data}) {
	if (!label || !data) return;
	return (
		<View style={styles.graphColumn}>
			<View style={styles.precentContainer}>
				<View style={styles.precent}>
					<View style={{...styles.backgorund, height: `${data}%`}}></View>
				</View>
			</View>
			<Text numberOfLines={1} style={{...styles.label, transform: [{rotate: "-35deg"}]}}>
				{label}
			</Text>
		</View>
	);
}

export default function Graph({label, data}) {
	if (!label || !data || !Array.isArray(data)) return;

	return (
		<View style={[components.card, styles.container]}>
			<View style={styles.graph}>
				{data.slice(0, 5).map((column) => (
					<GraphColumn label={column.label} data={column.data} />
				))}
				{data.length > 5 && <Text>....</Text>}
			</View>
			<Text style={styles.label}>{label}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: 15,
		padding: 10,
	},
	graph: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-end",
		paddingHorizontal: 10,
		gap: 20,
	},
	label: {
		fontFamily: "Poppins-regular",
		color: BOLDGRAY,
		textAlign: "center",
	},
	graphColumn: {
		flex: 1,
		height: "100%",
		flexDirection: "column",
		gap: 10,
	},
	precentContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
	},
	precent: {
		width: 30,
		height: "100%",
		borderRadius: "100%",
		backgroundColor: LIGHTGRAY,
	},
	backgorund: {
		position: "absolute",
		width: "100%",
		backgroundColor: YELLOW,
		bottom: 0,
		borderRadius: "100%",
	},
});
