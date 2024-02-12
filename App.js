import {Text, View, StyleSheet} from "react-native";
import {useFonts} from "expo-font";

export default function App() {
	const [fontsLoaded] = useFonts({
		"Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
		"Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
		"Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
		icomoon: require("./assets/fonts/icomoon.ttf"),
	});

	return (
		<>
			{fontsLoaded && (
				<View>
					<Text style={styles.title}>Flashit</Text>
				</View>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		textAlign: "center",
		padding: 50,
		fontFamily: "Poppins-Regular",
	},
});
