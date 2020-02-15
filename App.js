import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

function Login(props) {
	const { navigation } = props;

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button
				title="Go to Dashboard"
				onPress={() => {
					navigation.navigate('AppTabs');
				}}
			/>
		</View>
	);
}

function Dashboard() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Dashboard Screen</Text>
		</View>
	);
}

function Profile(props) {
	const { navigation } = props;

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Profile Screen</Text>
			<Button
				title="Go to Login"
				onPress={() => {
					navigation.navigate('Login');
				}}
			/>
		</View>
	);
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Dashboard" component={Dashboard} />
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	);
}

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="AppTabs" component={AppTabs} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
