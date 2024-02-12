import {useState} from "react";
import {Text, View, StyleSheet} from "react-native";
import {useForm, Controller} from "react-hook-form";
import {YELLOW, GRAY, components} from "../styles";
import {Input, Button, CustomIcon} from "../components";

export default function Login({navigation}) {
	const [isLogin, setIsLogin] = useState(true);
	const {control, handleSubmit} = useForm();
	const onSubmit = (data) => {
		// write here what going to happend after login button clicked
	};
	return (
		<View style={components.screen}>
			<Text style={styles.title}>Flashit</Text>
			<View style={styles.formContainer}>
				{!isLogin && (
					<Controller
						control={control}
						rules={{
							required: "This field is required",
						}}
						render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
							<Input placeholder="Name" onBlur={onBlur} onChangeText={onChange} value={value} err={error?.message} />
						)}
						name="name"
					/>
				)}
				<Controller
					control={control}
					rules={{
						required: "This field is required",
					}}
					render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
						<Input placeholder="Email" onBlur={onBlur} onChangeText={onChange} value={value} err={error?.message} />
					)}
					name="email"
				/>
				<Controller
					control={control}
					rules={{
						required: "This field is required",
					}}
					render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
						<Input placeholder="Password" onBlur={onBlur} onChangeText={onChange} value={value} err={error?.message} hideValue />
					)}
					name="password"
				/>
				<View style={styles.buttonsContainer}>
					<Button label={isLogin ? "Log in" : "Sign up"} onPress={handleSubmit(onSubmit)} primary />
					<Button label={isLogin ? "Create new account" : "Back to log in"} onPress={() => navigation.navigate("Home") /*setIsLogin(!isLogin)*/} />
				</View>
			</View>
			<View style={styles.border} />
			{/* dont forget to add google icon */}
			<Button
				label={
					<>
						<CustomIcon name="meatballs" />
						Continue with google
					</>
				}
				customTheme={{button: styles.googleButton, text: styles.googleButtonText}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		color: YELLOW,
		fontSize: 48,
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 75,
		marginBottom: 50,
		fontFamily: "Poppins-Bold",
	},
	formContainer: {
		gap: 20,
		flexDirection: "column",
	},
	buttonsContainer: {
		gap: 5,
		flexDirection: "column",
	},
	border: {
		borderBottomColor: GRAY,
		borderBottomWidth: 1.5,
		marginTop: 30,
		marginBottom: 30,
	},
	googleButton: {
		backgroundColor: "#4285F4",
		height: 45,
		borderRadius: 5,
		justifyContent: "center",
	},
	googleButtonText: {
		textAlign: "center",
		color: "white",
		fontFamily: "Poppins-Regular",
		fontSize: 16,
	},
});
