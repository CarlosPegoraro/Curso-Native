import React from 'react';

import { Image, StyleSheet, Dimensions } from 'react-native';

import StyledText from '../../../components/Text';

import banner from '../../../../assets/banner.png';

const width = Dimensions.get('screen').width;

export default function Banner({ title}) {
    return <>
        <Image source={banner} style={styles.banner}/>
        <StyledText style={styles.title}>{title}</StyledText>
    </>
}

const styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: 578 / 768 * width,
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: '#FAFAFA',
        fontWeight: 'bold',
        padding: 16,
    }
})