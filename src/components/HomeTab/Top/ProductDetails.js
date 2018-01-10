import React, { Component } from 'react';
import {
        View, Text, StyleSheet
} from 'react-native';

import { positionDefault } from '../../../common';

class ProductDetails extends Component {

        render() {
                const {
                        content, image, circelActive, textProductName,
                        textProductAddress, textDiscount
                } = styles;

                const ProductActiveNow = this.props.isActive ?
                        <View style={circelActive} /> : null;

                return (
                        <View style={content}>
                                <View>
                                        <View style={image} >
                                                <View />
                                                <Text
                                                        numberOfLines={1}
                                                        style={textDiscount}
                                                >
                                                        giam ??? tong bill (toi da)
                                                </Text>
                                        </View>

                                        {ProductActiveNow}

                                        <Text
                                                style={textProductName}
                                                numberOfLines={1}
                                        >
                                                {this.props.nameProduct}
                                        </Text>
                                        <Text
                                                style={textProductAddress}
                                                numberOfLines={1}
                                        >
                                                {this.props.addressProduct}
                                        </Text>
                                </View>
                        </View>
                );
        }
}

const { widthProductDetails, margindefault } = positionDefault;
const margindefaultProduct = margindefault / 2;

const styles = StyleSheet.create({
        content: {
                width: widthProductDetails,
                height: widthProductDetails,
        },
        image: {
                justifyContent: 'space-between',
                width: widthProductDetails - margindefault,
                height: (widthProductDetails * 0.65) - margindefault,
                backgroundColor: 'gray',
                margin: margindefaultProduct,
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
                top: margindefaultProduct,
                left: margindefaultProduct,
                borderRadius: widthProductDetails * 0.05,
                backgroundColor: 'green',
                borderWidth: 1,
                borderColor: 'white'
        },
        textProductName: {
                fontSize: 15,
                fontWeight: 'bold',
                margin: margindefaultProduct,
        },
        textProductAddress: {
                fontSize: 12,
                margin: margindefaultProduct,
                marginTop: -margindefaultProduct,
                color: 'gray'
        },
        textDiscount: {
                margin: margindefaultProduct,
                fontSize: 12,
                color: '#ff3333'
        }
});

export default ProductDetails;
