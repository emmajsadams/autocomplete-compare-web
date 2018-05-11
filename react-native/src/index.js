import React, { Component } from 'react';
import { AppRegistry, Platform, View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default class App extends Component {
    render() {
        return (
        	<View style={styles.wrapper}>
                <Image 
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} 
                    style={{width: 100, height: 100}}
                />
                <Text>Hello World!!!!!</Text>
            </View>
        );
    }
}

if (Platform.OS === 'web') {
    AppRegistry.registerComponent('App', () => App);

    AppRegistry.runApplication('App', {
		rootTag: document.getElementById('root')
	});
}