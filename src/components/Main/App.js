import React, { Component } from 'react';
import {
        StatusBar, View, StyleSheet
} from 'react-native';

import { HomeTab } from '../HomeTab';

export default class App extends Component {
        render() {
                return (
                        <View style={{ backgroundColor: 'gray', flex: 1 }}>
                                <StatusBar barStyle="light-content" />
                                <HomeTab />
                        </View>
                );
        }
}

