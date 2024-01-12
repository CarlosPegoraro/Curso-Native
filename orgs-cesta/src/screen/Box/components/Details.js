import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

import StyledText from '../../../components/Text';
import StyledButton from '../../../components/Button';

export default function Details({ name, farmLogo, farm, description, price, button}) {
    return <>
        <StyledText style={styles.name}>{name}</StyledText>
        <View style={styles.farmGroup}>
            <Image source={farmLogo} style={styles.farmLogo}/>
            <StyledText style={styles.farm}>{farm}</StyledText>
        </View>
        <StyledText style={styles.description}>
            {description}
        </StyledText>
        <StyledText style={styles.price}>{price}</StyledText>

        <StyledButton text={button}/>
    </>
}

const styles = StyleSheet.create({
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
    }
})