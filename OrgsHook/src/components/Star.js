import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import star from '../../assets/star.png'
import grayStar from '../../assets/grayStar.png'
export default function Star({onPress, disabled = false, filled, isBig = false }) {

    const styles = functionStyles(isBig);

    const getStar = () => {
        if(filled) {
            return star;
        }
        return grayStar;
    }
    return <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Image source={getStar()} style={styles.star}/>
    </TouchableOpacity>
}

const functionStyles = (isBig) => StyleSheet.create({
    star: {
        width: isBig ? 36 : 12,
        height: isBig ? 36 : 12
    }
})