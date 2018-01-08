import React, { Component } from 'react';
import {
        TouchableOpacity, View, Text, StyleSheet
} from 'react-native';

import { positionDefault } from '../../../common';

class Search extends Component {
        state = {}
        render() {
                const {
                        content, textStyle, textCity, circle, touchSearch
                } = styles;
                return (
                        <View style={content}>
                                <TouchableOpacity style={touchSearch}>
                                        <Text style={textStyle} >
                                                Search for cuisine, name, address...
                                        </Text>
                                </TouchableOpacity>

                                <View style={{ flexDirection: 'row' }}>
                                        <View
                                                style={{
                                                        justifyContent: 'center',
                                                        borderRightColor: '#cccccc',
                                                        borderRightWidth: 0.5,
                                                        height: 25
                                                }}
                                        >
                                                <TouchableOpacity
                                                        numberOfLines={1}
                                                        style={{
                                                                alignItems: 'center',
                                                                width: 55,
                                                        }}
                                                >
                                                        <Text style={textCity}>
                                                                HCM City
                                                </Text>
                                                </TouchableOpacity>
                                        </View>

                                        <TouchableOpacity style={{ width: 20, alignItems: 'center', justifyContent: 'center' }}>
                                                <View style={circle} />
                                        </TouchableOpacity>
                                </View>

                        </View>
                );
        }
}

const styles = StyleSheet.create({
        content: {
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginLeft: positionDefault.Header.paddingdefaulf,
                marginRight: positionDefault.Header.paddingdefaulf,
                height: 40,
                shadowColor: 'black',
                shadowOffset: {
                        width: 1,
                        height: 2
                },
                shadowOpacity: 0.1
        },
        textStyle: {
                width: 200,
                fontSize: 11,
                color: 'gray'
        },
        textCity: {
                fontSize: 11,
                color: 'gray',
                fontWeight: 'bold',
                textAlign: 'left',
        },
        circle: {
                width: 14,
                height: 14,
                borderRadius: 7,
                borderColor: 'gray',
                borderWidth: 1,

        },
        touchSearch: {
                paddingRight: 20,
                paddingLeft: 5,
                paddingTop: 10,
                paddingBottom: 10
        }
});

export default Search;
