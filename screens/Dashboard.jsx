import {Text, View, ScrollView, StyleSheet} from "react-native";
import {components} from "../styles";
import {Counter, Graph} from "../components";
import analytics from "../__mock__/analytics";

export default function Dashboard() {
	return (
		<View style={components.screen}>
			<Text style={components.screenTitle}>Hello User,</Text>
			<ScrollView contentContainerStyle={styles.list}>
				{analytics.map(({type, label, data}) => {
					switch (type) {
						case "counter":
							return (
								<View style={styles.counterWrapper}>
									<Counter label={label} data={data} />
								</View>
							);
						case "graph":
							return (
								<View style={styles.graphWrapper}>
									<Graph label={label} data={data} />
								</View>
							);
						default:
							return;
					}
				})}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	list: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	counterWrapper: {
		width: "50%",
		aspectRatio: "150/100",
		padding: 10,
	},
	graphWrapper: {
		padding: 10,
		width: "100%",
		aspectRatio: "150/100",
	},
});
