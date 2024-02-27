import {useRef} from "react";
import {View, Text, FlatList, StyleSheet, Pressable} from "react-native";
import {Button, Input, CustomIcon, BottomSheet} from "../components";
import {BOLDGRAY, GRAY, YELLOW, components} from "../styles";
import decks from "../__mock__/decks";

export default function Decks({navigation}) {
	const bottomSheetRef = useRef(null);

	return (
		<View style={components.screen}>
			<View style={components.headerLayout}>
				<Text style={components.screenTitle}>Decks</Text>
				<Button
					onPress={() => bottomSheetRef.current.open()}
					icon={<CustomIcon name="add" color="white" size={30} />}
					customTheme={{button: styles.button}}
				/>
			</View>
			<Input placeholder="Search" inputStyle={styles.input} />

			<FlatList
				style={styles.list}
				data={decks}
				renderItem={({item}) => (
					<Pressable
						style={styles.deck}
						onPress={() => {
							navigation.navigate("Cards", {item});
						}}
					>
						<Text style={styles.text}>{item.name}</Text>
					</Pressable>
				)}
				ListEmptyComponent={() => (
					<Text style={styles.emptyText}>
						Click
						<View style={styles.emptyButtonContainer}>
							<View style={[styles.button, styles.emptyButton]}>
								<CustomIcon name="add" color="white" size={15} />
							</View>
						</View>
						to add new Deck
					</Text>
				)}
			/>
			<BottomSheet.Form
				ref={bottomSheetRef}
				title="Add a new deck"
				fields={[{name: "deckName", placeholder: "Deck Name", rules: {required: "This field is required"}}]}
				onSubmit={(data) => {
					//hendle result here
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 40,
		height: 40,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: YELLOW,
		borderRadius: 100,
	},
	input: {
		borderRadius: 100,
		marginVertical: 10,
	},
	list: {
		height: "100%",
	},
	deck: {
		padding: 15,
		borderBottomColor: GRAY,
		borderBottomWidth: 1,
	},
	text: {
		fontSize: 20,
	},
	emptyText: {
		color: BOLDGRAY,
		fontSize: 22,
		textAlign: "center",
		marginTop: 10,
	},
	emptyButtonContainer: {
		paddingHorizontal: 7,
	},
	emptyButton: {
		width: 22,
		height: 22,
	},
});
