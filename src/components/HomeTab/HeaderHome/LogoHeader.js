import React, { Component } from 'react';
import {
        View, Text, Image, StyleSheet
} from 'react-native';

class LogoHeader extends Component {
        state = {}
        render() {
                const {
                        content, imageStyle, textUserName, textStartus
                } = styles;

                return (
                        <View style={content}>
                                <View />
                                <View style={imageStyle} />
                                <Text style={textUserName}>Hello 'NameUser'</Text>
                                <Text style={textStartus}>
                                        Login account to have better experience
                                </Text>
                                <View />
                        </View >
                );
        }
}

const styles = StyleSheet.create({
        content: {
                marginTop: 30,
                alignItems: 'center',
        },
        imageStyle: {
                margin: 10,
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: '#ff0000'
        },
        textUserName: {
                fontSize: 14,
                marginBottom: 20
        },
        textStartus: {
                fontSize: 12,
                marginBottom: 30,

        }
});

export default LogoHeader;
