import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import StyledText from '../../components/Text';

import logo from '../../../assets/logo.png';
import Banner from './components/Banner';

export function Box() {
    return <>
        <Banner/>

        <View style={styles.box}>
            <StyledText style={styles.name}>Cesta de Verduras</StyledText>
            <View style={styles.farmGroup}>
                <Image source={logo} style={styles.farmLogo}/>
                <StyledText style={styles.farm}>Jenny Jack Farm</StyledText>
            </View>
            <StyledText style={styles.description}>
                Uma cesta com produtos selecionados cuidadosamente da fazenda para a sua cozinha
            </StyledText>
            <StyledText style={styles.price}>R$ 40,00</StyledText>
        </View>
    </>
}

const styles = StyleSheet.create({
    box: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold',
    },
    farmGroup: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    farm: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    farmLogo: {
        width: 32,
        height: 32,
    },
    description: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        fontSize: 26,
        lineHeight: 42,
        color: '#2A9F85',
        fontWeight: 'bold',
        marginTop: 8,
    },
})