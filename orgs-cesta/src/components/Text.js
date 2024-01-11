import React from 'react'

import { Text, StyleSheet } from 'react-native'

export default function StyledText({ children, style }) {
    let defaultStyle = styles.regular;

    if (style?.fontWeight === 'bold') {
        defaultStyle = styles.bold;
    }

    return <Text style={[style, defaultStyle]}>{ children }</Text>
}

const styles = StyleSheet.create({
    regular: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal'
    },
    bold: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
})