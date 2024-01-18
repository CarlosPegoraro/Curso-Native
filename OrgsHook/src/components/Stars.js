import React from 'react';
import { StyleSheet, View } from 'react-native';
import Star from './Star';


export default function Stars({ 
    quantity: oldQuantity,
    editable = false,
    isBig = false}) {

    const [ quantity, setQuantity ] = React.useState(oldQuantity);
    
    const RenderStars = () => {
        const starsList = [];
        for(let i =0; i < 5; i++) {
            starsList.push(
                <Star onPress={() => {setQuantity(i + 1)}}
                    filled={i < quantity}
                    disabled={!editable}
                    isBig={isBig}
                    key={i}/>
            )

        }
        return starsList;
    }
    return <View style={styles.box}>
        <RenderStars/>

    </View>
}

const styles =  StyleSheet.create({
    box: {
        flexDirection: 'row',
        gap: 2,
    }
})