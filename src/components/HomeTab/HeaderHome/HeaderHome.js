import React, { Component } from 'react';
import {
        View, Text, Image, StyleSheet, Dimensions
} from 'react-native';

import { LogoHeader, Search, QuickSearch } from './';

class HeaderHome extends Component {
        state = {}
        render() {
                const {
                        content, logoHeaderStyle
                } = styles;
                return (
                        <View style={content}>
                                <LogoHeader style={logoHeaderStyle} />
                                <Search />
                                <QuickSearch />
                        </View>
                );
        }
}
const { width } = Dimensions.get('window');

const heightHeaderConst = width * 1.1;

const styles = StyleSheet.create({
        content: {
                alignItems: 'center',
                backgroundColor: 'white',
                height: heightHeaderConst
        },
        logoHeaderStyle: {

        }

});

export default HeaderHome;
