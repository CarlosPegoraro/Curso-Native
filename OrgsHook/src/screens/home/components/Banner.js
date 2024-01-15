import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

import logo from '../../../../assets/logo.png';

import { getBanner } from '../../../services/loadingData';

class Banner extends React.Component {
    state = {
        banner: {
            welcome: '',
            legend: ''
        }
    }
    updateBanner() {
        const texts = getBanner();
        this.setState({ banner: texts });
    }
    componentDidMount() {
        this.updateBanner()
    }
    render() {
        return <View style={styles.container}>
            <Image source={logo} style={styles.image}/>
            <Text style={styles.welcome}>{this.state.banner.welcome}</Text>
            <Text style={styles.legend}>{this.state.banner.legend}</Text>
            </View>

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        padding: 16
    },
    image: {
        height: 28,
        width: 70
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: "#464646"
    },
    legend: {
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3"
    }
})

export default Banner;