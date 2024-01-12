import { TouchableOpacity, StyleSheet } from 'react-native';
import StyledText from './Text';
import React from 'react';

export default function StyledButton({ text }) {
    return <>
        <TouchableOpacity style={styles.button}>
            <StyledText style={styles.buttonText}>{text}</StyledText>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        backgroundColor: '#2A9F85',
        borderRadius: 6,
        paddingVertical: 16,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
    }
})