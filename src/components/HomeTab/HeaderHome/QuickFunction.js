import React, { Component } from 'react';
import {
        Image, View, Text, TouchableOpacity, StyleSheet, Dimensions
} from 'react-native';

class QuickFunction extends Component {
        state = {}
        render() {
                const {
                        content, image, textNameFunction
                } = styles;

                return (
                        <View style={content}>
                                <View style={image} />
                                <Text style={textNameFunction}>{this.props.nameSearch}</Text>
                        </View>
                );
        }
}

const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
        content: {
                marginLeft: 2,
                marginRight: 2,
                flex: 1,
        },
        image: {
                width: width / 4.45,
                height: width / 4.45,
                backgroundColor: '#99e6e6',
                marginBottom: 3
        },
        textNameFunction: {
                fontSize: 12,
                fontWeight: 'bold',
                alignSelf: 'center'
        }

});

export default QuickFunction;
