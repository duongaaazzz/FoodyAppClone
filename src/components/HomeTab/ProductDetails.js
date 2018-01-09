import React, { Component } from 'react';
import {
        View, Text, StyleSheet
} from 'react-native';

import { positionDefault } from '../../common';

class ProductDetails extends Component {
        state = {}
        render() {
                const {
                        content, image, circelActive, textProductName, textProductAddress
                } = styles;
                return (
                        <View style={content}>
                                <View>
                                        <View style={image} />
                                        <View style={circelActive} />
                                        <Text
                                                style={textProductName}
                                                numberOfLines={1}
                                        >
                                                An dem SG - Giao Duong
                                        </Text>
                                        <Text
                                                style={textProductAddress}
                                                numberOfLines={1}
                                        >
                                                An dem SG - Giao Duong
                                        </Text>
                                </View>
                        </View>
                );
        }
}

const { widthProductDetails, margindefault } = positionDefault;

const styles = StyleSheet.create({
        content: {
                width: widthProductDetails,
                height: widthProductDetails,
        },
        image: {
                width: widthProductDetails - margindefault,
                height: (widthProductDetails * 0.65) - margindefault,
                backgroundColor: 'gray',
                margin: margindefault / 2,
                borderRadius: 8
        },
        contentImg: {

        },
        circelActive: {
                justifyContent: 'center',
                alignItems: 'center',
                height: widthProductDetails * 0.1,
                width: widthProductDetails * 0.1,
                position: 'absolute',
                top: margindefault / 2,
                left: margindefault / 2,
                borderRadius: widthProductDetails * 0.05,
                backgroundColor: 'green',
                borderWidth: 1,
                borderColor: 'white'
        },
        textProductName: {
                fontSize: 15,
                fontWeight: 'bold',
                margin: margindefault / 2,
        },
        textProductAddress: {
                fontSize: 12,
                margin: margindefault / 2,
                marginTop: -margindefault / 2,
                color: 'gray'
        }
});

export default ProductDetails;
