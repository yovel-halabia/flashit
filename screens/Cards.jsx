import {Text} from "react-native";

export default function Cards({route}) {
	const {item = {name: ""}} = route.params;
	return <Text>{item.name}</Text>;
}
