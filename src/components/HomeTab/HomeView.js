import React, { Component } from 'react';
import {
        View, Text
} from 'react-native';

import { HeaderHome } from './';

class HomeView extends Component {
        state = {}
        render() {
                return (
                        <View>
                                <HeaderHome />
                        </View>
                );
        }
}

export default HomeView;
