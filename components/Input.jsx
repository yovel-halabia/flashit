import {useState} from "react";
import {YELLOW, GRAY, BOLDGRAY, LIGHTGRAY} from "../styles";
import {Text, TextInput, StyleSheet, SafeAreaView, Pressable} from "react-native";

const ERRCOLOR = "#FF2C20";

export default function Input(props) {
	const [toggleHideValue, setToggleHideValue] = useState(true);

	return (
		<SafeAreaView>
			<SafeAreaView style={styles.container}>
				<TextInput
					{...props}
					style={[styles.input, props.inputStyle, {color: props.err ? ERRCOLOR : BOLDGRAY}]}
					secureTextEntry={props.hideValue && toggleHideValue ? true : false}
				/>
				{props.hideValue && (
					<Pressable style={styles.button} onPress={() => setToggleHideValue(!toggleHideValue)}>
						<Text style={styles.HidetText}>{toggleHideValue ? "Show" : "Hide"}</Text>
					</Pressable>
				)}
			</SafeAreaView>
			{props.err && <Text style={styles.errText}>{props.err}</Text>}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	input: {
		flex: 1,
		backgroundColor: LIGHTGRAY,
		borderColor: GRAY,
		borderWidth: 1,
		borderRadius: 8,
		paddingLeft: 10,
		fontFamily: "Poppins-Regular",
		fontSize: 16,
		height: 50,
	},
	button: {
		flex: 1,
		position: "absolute",
		right: 0,
		paddingRight: 10,
	},
	HidetText: {
		color: YELLOW,
	},
	errText: {
		color: ERRCOLOR,
		fontSize: 14,
		paddingLeft: 5,
		paddingTop: 5,
	},
});
