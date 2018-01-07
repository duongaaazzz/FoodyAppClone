import React, { Component } from 'react';
import {
        Image, View, Text, TouchableOpacity, StyleSheet
} from 'react-native';

import { positionCommon } from '../../../common';

class QuickFunction extends Component {
        state = {}
        render() {
                const {
                        content, image, textNameFunction
                } = styles;

                return (
                        <View style={content}>
                                <View style={image} />
                                <Text style={textNameFunction}>Function</Text>
                        </View>
                );
        }
}


const styles = StyleSheet.create({
        content: {
                marginLeft: 2,
                marginRight: 2,
                flex: 1,
        },
        image: {
                width: positionCommon.Header.widthImgQuickFunction,
                height: positionCommon.Header.widthImgQuickFunction,
                backgroundColor: '#99e6e6'
        },
        textNameFunction: {
                fontSize: 13,
                fontWeight: 'bold',
                alignSelf: 'center'
        }

});

export default QuickFunction;
