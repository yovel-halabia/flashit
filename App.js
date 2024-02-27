import {GestureHandlerRootView} from "react-native-gesture-handler";
import {useFonts} from "expo-font";
import Navigator from "./Navigator";
import {Portal} from "./components";

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
				<GestureHandlerRootView style={{flex: 1}}>
					<Portal.Provider>
						<Navigator />
					</Portal.Provider>
				</GestureHandlerRootView>
			)}
		</>
	);
}
