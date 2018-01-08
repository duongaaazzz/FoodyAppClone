import React, { Component } from 'react';
import {
        Image, View, Text, TouchableOpacity, StyleSheet
} from 'react-native';

import QuickFunction from './QuickFunction';

class QuickSearch extends Component {
        state = {}
        render() {
                const {
                        content
                } = styles;
                return (
                        <View style={content}>
                                <QuickFunction nameSearch={'Discovery'} />
                                <QuickFunction nameSearch={'Delivery'} />
                                <QuickFunction nameSearch={'Reservation'} />
                                <QuickFunction nameSearch={'Self-Order'} />
                        </View>
                );
        }
}

const styles = StyleSheet.create({
        content: {
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 25,
                marginBottom: 10,
                marginLeft: 5,
                marginRight: 5,
                flex: 1,
        }
});

export default QuickSearch;
