import React, { useReducer, useMemo } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Stars from '../../../components/Stars';

const distanceInMeters = (distance) => {
    console.log('Calculando distancia');
    return `${distance} metros`;
}
export default function Manufactor({ name, image, distance, stars}) {

    const [selected, invSelected] = useReducer((selected) => !selected, false);

    const distanceMeters = useMemo(() => distanceInMeters(distance), [distance]);
    return <TouchableOpacity style={styles.card}
            onPress={invSelected}>
        <Image source={image} accessibilityLabel={name} style={styles.image}/>
        <View style={styles.information}>
            <View>
                <Text style={styles.name}>{name}</Text>
                <Stars quantity={stars} editable={selected} isBig={selected}/>
            </View>
            <Text>{distanceMeters}</Text>

        </View>
        

    </TouchableOpacity>
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F6f6f6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        paddingHorizontal: 16,
        flexDirection: 'row',
        //Ios
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        //Android
        elevation: 4
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
    },
    information: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
    },
    name: {
        fontSize:14,
        lineHeight:22,
        fontWeight: 'bold',
    },
    distance: {
        fontSize:12,
        lineHeight:19,
    }
})