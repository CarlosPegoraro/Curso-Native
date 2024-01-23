// CarDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import global from '../styles/global';

const CarDetailScreen = ({ route }) => {
    const { title, description, img } = route.params;

    return (
        <View style={[global.container, {gap: 10}]}>
            <Text style={global.title}>{title}</Text>
            <Text style={styles.text}>{description}</Text>
            <Image source={img} style={styles.img} />
        </View>
    );
};

export default CarDetailScreen;

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 200,  // Adjust the height as needed
        borderRadius: 10,
        elevation: 5
    },
})
