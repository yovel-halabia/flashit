import {useFonts} from "expo-font";
import Navigator from "./Navigator";

export default function App() {
	const [fontsLoaded] = useFonts({
		"Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
		"Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
		"Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
		icomoon: require("./assets/fonts/icomoon.ttf"),
	});

	return <>{fontsLoaded && <Navigator />}</>;
}
