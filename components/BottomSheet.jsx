import {useState, useRef, useImperativeHandle, forwardRef} from "react";
import {Text, View, StyleSheet} from "react-native";
import BottomSheet, {BottomSheetScrollView} from "@gorhom/bottom-sheet";
import {useForm, Controller} from "react-hook-form";
import Portal from "./Portal";
import Button from "./Button";
import Input from "./Input";

const Form = forwardRef(function ({title, fields, onSubmit}, ref) {
	const bottomSheetRef = useRef(null);
	const [modalOpen, setModalOpen] = useState(false);
	const {control, handleSubmit, reset} = useForm();

	useImperativeHandle(
		ref,
		() => {
			return {
				open() {
					setModalOpen(true);
					bottomSheetRef.current.expand();
				},
			};
		},
		[],
	);

	function close() {
		reset();
		bottomSheetRef.current.close();
		setModalOpen(false);
	}

	function checkSubmit(data) {
		if (!data) return;
		onSubmit(data);
		close();
	}

	return (
		<Portal.Gate gateName="bottomSheet">
			<View style={[styles.container, modalOpen ? {width: "100%", height: "100%"} : {}]}></View>
			<BottomSheet enableDynamicSizing={true} index={-1} ref={bottomSheetRef}>
				<BottomSheetScrollView>
					<View style={styles.contentContainer}>
						<Text style={styles.title}>{title}</Text>
						<View style={styles.inputs}>
							{fields.length &&
								fields.map((field, i) => (
									<Controller
										key={i}
										control={control}
										rules={field.rules || {}}
										render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
											<Input placeholder={field.placeholder} onBlur={onBlur} onChangeText={onChange} value={value} err={error?.message} />
										)}
										name={field.name}
									/>
								))}
						</View>
						<View style={styles.footerContainer}>
							<Button label="Add" onPress={handleSubmit(checkSubmit)} primary />
							<Button label="Cancel" onPress={close} />
						</View>
					</View>
				</BottomSheetScrollView>
			</BottomSheet>
		</Portal.Gate>
	);
});

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 0,
	},
	contentContainer: {
		flex: 1,
		flexDirection: "column",
		paddingHorizontal: 20,
		paddingVertical: 30,
		gap: 20,
	},
	title: {
		fontSize: 24,
		fontFamily: "Poppins-Regular",
		textAlign: "center",
	},
	inputs: {
		flex: 1,
		flexDirection: "column",
		gap: 15,
		marginBottom: 20,
	},
	footerContainer: {
		flex: 1,
		flexDirection: "column",
		gap: 5,
	},
});

export default {Form};
