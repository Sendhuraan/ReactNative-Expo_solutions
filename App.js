import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import TodoForm from './src/components/TodoForm';
import TodoItems from './src/components/TodoItems';

export default function App() {
	const [displayText, setDisplayText] = useState('Yuck');

	return (
		<View style={styles.container}>
			<Text>{displayText}</Text>
			<Button
				title="Click to change Text"
				onPress={() => setDisplayText('Changed Text!')}
			/>
			<TodoForm />
			<TodoItems />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
