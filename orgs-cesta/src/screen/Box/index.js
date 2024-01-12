import React from 'react';
import { ScrollView, StyleSheet, View, FlatList } from 'react-native';

import StyledText from '../../components/Text';


import Banner from './components/Banner';
import Details from './components/Details';
import Item from './components/Item';

export function Box({ banner, details, items }) {
    return <>
        <FlatList data={items.list}
            renderItem={Item}
            keyExtractor={({ name }) => name}
            ListHeaderComponent={() => {
                return <>
                    <Banner {...banner} />
                    <View style={styles.box}>
                        <Details {...details} />
                        <StyledText style={styles.title}>{items.title}</StyledText>
                    </View>
                </>
            }} />


    </>
}

const styles = StyleSheet.create({
    box: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    title: {
        color: "#464646",
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
})