import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {BOLDYELLOW} from "./styles";
import {CustomIcon} from "./components";
import {Dashboard, Decks, Learn, Settings, Login} from "./screens";

const Tab = createBottomTabNavigator();

const tabs = [
	{
		name: "Decks",
		component: Decks,
		icon: "copy",
	},
	{
		name: "Dashboard",
		component: Dashboard,
		icon: "barChart",
	},
	{
		name: "Learn",
		component: Learn,
		icon: "write",
	},
	{
		name: "Settings",
		component: Settings,
		icon: "setting",
	},
];

function BottomTab() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: BOLDYELLOW,
				tabBarStyle: {
					height: 80,
					paddingBottom: 20,
					paddingTop: 10,
					alignContent: "center",
					alignItems: "center",
					backgroundColor: "#FAFAFA",
					border: "0px",
				},
				tabBarLabelStyle: {
					fontSize: 12,
				},
			}}
			initialRouteName="Dashboard"
		>
			{tabs.map(({name, component, icon}) => (
				<Tab.Screen
					name={name}
					component={component}
					options={{
						tabBarIcon: ({color, size}) => <CustomIcon name={icon} color={color} size={30} />,
					}}
				/>
			))}
		</Tab.Navigator>
	);
}

const Stack = createStackNavigator();

export default function Navigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Home" component={BottomTab} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
