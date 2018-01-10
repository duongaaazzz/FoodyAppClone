import React, { Component } from 'react';
import {
        View, Text, StyleSheet, Image
} from 'react-native';

import { positionDefault, icons } from '../../../common';
import ProductDetails from './ProductDetails';

class Coment extends Component {

        render() {
                const {
                         textComent, viewComent, imgCustomer
                } = styles;

                return (
                        <View>
                                <ProductDetails
                                        nameProduct={this.props.nameProduct}
                                        addressProduct={this.props.addressProduct}
                                        isActive={this.props.isActive}
                                />
                                <View style={viewComent}>
                                        <Image
                                                style={imgCustomer}
                                                source={icons.ic_customer}
                                        />
                                        <Text
                                                style={textComent}
                                                numberOfLines={2}
                                        >
                                                abc aa bb acb cc bca ccbb cbb</Text>
                                </View>
                        </View >
                );
        }
}

const { widthProductDetails, margindefault } = positionDefault;
const margindefaultProduct = margindefault / 2;

const styles = StyleSheet.create({

        imgCustomer: {
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: '#cccccc',
                margin: 3,
        },
        textComent: {
                width: widthProductDetails - 40
        },
        viewComent: {
                flexDirection: 'row',
                margin: margindefaultProduct,
                borderTopWidth: 1,
                borderColor: '#d9d9d9'
        }
});

export default Coment;
