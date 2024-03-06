import {Component, createRef, useRef, useImperativeHandle, forwardRef} from "react";
import {Text, View, StyleSheet} from "react-native";
import BottomSheet, {BottomSheetScrollView, BottomSheetView} from "@gorhom/bottom-sheet";
import {useForm, Controller} from "react-hook-form";
import Portal from "./Portal";
import Button from "./Button";
import Input from "./Input";

class BottomSheetBase extends Component {
	constructor() {
		super();
		this.showBottomSheet = this.showBottomSheet.bind(this);
		this.renderBase = this.renderBase.bind(this);
	}

	bottomSheetRef = createRef();
	state = {
		isOpen: false,
	};

	showBottomSheet() {
		this.setState({isOpen: true});
		this.bottomSheetRef.current.expand();
	}

	closeBottomSheet() {
		this.bottomSheetRef.current.close();
		this.setState({isOpen: false});
	}

	renderBase(children) {
		const {isOpen} = this.state;
		return (
			<Portal.Gate gateName="bottomSheet">
				<View style={[styles.container, isOpen ? {width: "100%", height: "100%"} : {}]}></View>
				<BottomSheet enableDynamicSizing={true} index={-1} ref={this.bottomSheetRef}>
					<BottomSheetScrollView>{children}</BottomSheetScrollView>
				</BottomSheet>
			</Portal.Gate>
		);
	}
}

class Dialog extends BottomSheetBase {
	constructor() {
		super();
		this.renderDialog = this.renderDialog.bind(this);
	}

	renderDialog() {
		const {title, children, confirmLabel, cancelLabel, onConfirm, onCancel} = this.props;
		return (
			<View style={styles.contentContainer}>
				<Text style={styles.title}>{title}</Text>
				{children}
				<View style={styles.footerContainer}>
					<Button
						label={confirmLabel || "Confirm"}
						onPress={async () => {
							const res = onConfirm ? onConfirm() : true;
							res === true && this.closeBottomSheet();
						}}
						primary
					/>
					<Button
						label={cancelLabel || "Cancel"}
						onPress={async () => {
							const res = onCancel ? await onCancel() : true;
							res === true && this.closeBottomSheet();
						}}
					/>
				</View>
			</View>
		);
	}

	render() {
		return <>{this.renderBase(this.renderDialog())}</>;
	}
}

const Form = forwardRef(function ({title, fields, onSubmit}, ref) {
	const dialogRef = useRef(null);
	const {control, handleSubmit, reset} = useForm();

	useImperativeHandle(
		ref,
		() => {
			return dialogRef.current;
		},
		[],
	);

	function checkSubmit(data) {
		if (!data) return;
		onSubmit(data);
		reset();
		dialogRef.current.closeBottomSheet();
	}

	return (
		<Dialog
			ref={dialogRef}
			title={title}
			confirmLabel="Add"
			preventAutoClose
			onConfirm={handleSubmit(checkSubmit)}
			onCancel={() => {
				reset();
				return true;
			}}
		>
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
		</Dialog>
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

export default {Form, Dialog};
