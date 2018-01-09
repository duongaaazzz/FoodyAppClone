import React, { Component } from 'react';
import {
        View, Text, ScrollView
} from 'react-native';

import { HeaderHome, Top } from './';

class HomeView extends Component {
        state = {}
        render() {
                return (
                        <ScrollView>
                                <HeaderHome />
                                <Top />
                        </ScrollView>
                );
        }
}

export default HomeView;
