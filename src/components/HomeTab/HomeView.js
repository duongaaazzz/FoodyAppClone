import React, { Component } from 'react';
import {
        View, Text, ScrollView
} from 'react-native';

import { HeaderHome, Top, LastActivity } from './';

class HomeView extends Component {
        state = {}
        render() {
                return (
                        <ScrollView>
                                <HeaderHome />
                                <Top topName='Delivery' />
                                <Top topName='Reservation' />
                                <Top topName='Self-Order' />
                                <LastActivity />
                        </ScrollView>
                );
        }
}

export default HomeView;
