import React from 'react';

import StyledText from '../../../components/Text';
import { Image, View, StyleSheet } from 'react-native';
export default function Item({ item: { name, image } }) {
    return <View style={styles.item}>
            <Image source={image} style={styles.image} />
            <StyledText key={name} style={styles.text}>{name}</StyledText>
        </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        padding: 16,
        alignItems: 'center'
    },
    image: {
        width: 46,
        height: 46,
    },
    text: {
        fontSize: 16,
        lineHeight: 26,
        color: "#464646",
        marginVertical: 8,
        marginLeft: 11
    }
})