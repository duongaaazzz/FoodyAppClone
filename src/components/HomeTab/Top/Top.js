import React, { Component } from 'react';
import {
        View, Text, StyleSheet
} from 'react-native';

import Swiper from 'react-native-swiper';

import { ProductDetails } from '.././';
import { positionDefault } from '../../../common';

class Top extends Component {
        state = {}
        render() {
                const {
                        content, textTitle
                } = styles;
                return (
                        <View style={content} >
                                <View>
                                        <Text style={textTitle}>
                                                Top Delivery
                                        </Text>
                                </View>

                                <View style={{ flex: 1 }}>
                                        <Swiper
                                                showsPagination={false}
                                                loadMinimal={true}
                                        >
                                                <ProductDetails />
                                                <ProductDetails />
                                                <ProductDetails />
                                                <ProductDetails />
                                        </Swiper>
                                </View>
                        </View>
                );
        }
}

const styles = StyleSheet.create({
        content: {
                marginTop: positionDefault.margindefault,
                backgroundColor: 'white',
                height: 163
        },
        textTitle: {
                fontSize: 16,
                fontWeight: 'bold',
                margin: 5,

        }

});

export default Top;
