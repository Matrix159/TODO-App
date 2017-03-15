import React, {Component} from 'react';
import {AppRegistry, ScrollView, Image, Text, StyleSheet} from 'react-native';
import { Provider } from 'react-redux'
import store from './app/util/store.js'
import App from './app/components/App.js';


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }


}

AppRegistry.registerComponent('AwesomeProject', () => Main);