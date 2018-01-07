import React, { Component } from 'react';
import {
        View, Text, Image, StyleSheet
} from 'react-native';

import { LogoHeader, Search, QuickSearch } from './';

import { positionCommon } from '../../../common';

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

const styles = StyleSheet.create({
        content: {
                alignItems: 'center',
                backgroundColor: 'white',
                height: positionCommon.Header.heightHeader
        },
        logoHeaderStyle: {

        }

});

export default HeaderHome;
