import React, {useEffect, useState} from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import manufactories from '../../../../mocks/manufactories';
import { getManufactories } from '../../../services/loadingData';

export default function Manufactories({banner: Banner}) {
    const [title, setTitle] = useState('');
    const [list, setList] = useState({});

    useEffect(() => {
        const texts = getManufactories();
        setTitle(texts.title);
        setList(texts.list);
        console.log(texts)
    }, [])

    const Title = () => {
        return <>
            <Banner />
            <Text style={styles.title}>{title}</Text>
        </>
    }
    return <FlatList data={list} 
                ListHeaderComponent={Title} 
                renderItem={({ item: { name } }) => <Text>{name}</Text>}
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