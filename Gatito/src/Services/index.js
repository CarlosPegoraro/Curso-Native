import React from "react";

import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, FlatList } from "react-native";
import Item from "./components/Item";

const services = [
    {
        id: 1,
        name: "Banho",
        price: 79.9,
        description: "Não dê banho no seu gato! Mas se precisar nós damos."
    },
    {
        id:2,
        name: "Vacina V4",
        price: 89.9,
        description: "Uma dose da vacina V4. Seu gato precisa de duas."
    },
    {
        id:3,
        name: "Vacina Antirrábica",
        price: 99.9,
        description: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano."
    }

]

export default function Services() {
    return <SafeAreaView>
        <StatusBar/>
        <Text>Alo</Text>
        <FlatList data={services}
            renderItem={({item}) => {
                return <Item {...item}/>
            }}
            keyExtractor={({id}) => String(id)}
        />
    </SafeAreaView>
}