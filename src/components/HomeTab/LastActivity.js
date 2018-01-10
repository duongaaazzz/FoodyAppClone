import React, { Component } from 'react';
import {
        View, Text, StyleSheet, ScrollView, Image, TouchableOpacity
} from 'react-native';

import { Coment } from './';
import { positionDefault, icons } from '../../common';


const isHorizontalScrollView = true;

class LastActivity extends Component {
        state = {}
        render() {
                const {
                        content, textTitle, imgMoreStyle
                } = styles;
                return (
                        <View style={content} >
                                <View
                                        style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between'
                                        }}
                                >
                                        <Text style={textTitle}>Top {this.props.topName} </Text>
                                        <TouchableOpacity
                                                style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center'
                                                }}
                                        >
                                                <Text
                                                        style={{
                                                                margin: 5,
                                                                marginRight: 2
                                                        }}
                                                >More</Text>
                                                <Image
                                                        style={imgMoreStyle}
                                                        source={icons.ic_more_than}
                                                />
                                        </TouchableOpacity>
                                </View>

                                <View style={{ flex: 1 }}>
                                        <ScrollView
                                                horizontal={isHorizontalScrollView}
                                                style={{ paddingLeft: positionDefault.margindefault }}
                                        >
                                                <Coment
                                                        nameProduct='Tra sua Gong Cha'
                                                        addressProduct='noi nao do 1'
                                                        isActive={true}
                                                />
                                                <Coment
                                                        nameProduct='The Ally - Tra Sua'
                                                        addressProduct='noi nao do 2'
                                                        isActive={false}
                                                />
                                                <Coment
                                                        nameProduct='Com Trua Bento'
                                                        addressProduct='noi nao do 3'
                                                        isActive={true}
                                                />
                                                <Coment
                                                        nameProduct='Royyaltea Vietname'
                                                        addressProduct='noi nao do 4'
                                                        isActive={false}
                                                />
                                                <Coment
                                                        nameProduct='Tra sua Gong Cha'
                                                        addressProduct='noi nao do 5'
                                                        isActive={false}
                                                />
                                                <Coment
                                                        nameProduct='Koi Cafe'
                                                        addressProduct='noi nao do 6'
                                                        isActive={true}
                                                />
                                                <Coment
                                                        nameProduct='A Hoai - My Y'
                                                        addressProduct='noi nao do 7'
                                                        isActive={false}
                                                />
                                                <Coment
                                                        nameProduct='Tra sua Chamichi'
                                                        addressProduct='noi nao do 8'
                                                        isActive={false}
                                                />
                                        </ScrollView>
                                </View>
                        </View>
                );
        }
}

const styles = StyleSheet.create({
        content: {
                marginTop: positionDefault.margindefault,
                backgroundColor: 'white',
                height: 230
        },
        textTitle: {
                fontSize: 16,
                fontWeight: 'bold',
                margin: positionDefault.margindefault,
        },
        imgMoreStyle: {
                width: 15,
                height: 15,
                marginLeft: -positionDefault.margindefault,
        }

});

export default LastActivity;
