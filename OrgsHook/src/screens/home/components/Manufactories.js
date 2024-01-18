import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import useManufactories from '../../../hooks/UseManufactories';

import Manufactor from './Manufactor';

export default function Manufactories({banner: Banner}) {

    const [title, list] = useManufactories();
    const Title = () => {
        return <>
            <Banner />
            <Text style={styles.title}>{title}</Text>
        </>
    }
    return <FlatList data={list} 
                ListHeaderComponent={Title} 
                renderItem={({ item }) => <Manufactor {...item} />}
                    keyExtractor={({name}) => name }
                />;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: "#464646"
    }
})