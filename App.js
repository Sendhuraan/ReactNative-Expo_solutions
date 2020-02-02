import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import TodoForm from './src/components/TodoForm';
import TodoItems from './src/components/TodoItems';
import store from './src/state/store';

export default function App() {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<TodoForm />
				<TodoItems />
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 100,
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
