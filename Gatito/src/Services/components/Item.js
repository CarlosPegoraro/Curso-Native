import React from "react";

import { Button, Text, TextInput, View } from "react-native";

import Styles from "./Styles";
import FullField from "../../components/fullField";

export default function Item({name, price, description}) {
    return <>
        <View style={Styles.card}>
            <Text style={Styles.name}>{name}</Text>
            <Text style={Styles.text}>{description}</Text>
            <Text style={Styles.price}>{price}</Text>
        </View>
        <View styles={Styles.shopCar}>
            <View>
                <View style={Styles.value}>
                    <Text style={Styles.quantity}>Quantidade: 0</Text>
                    <FullField value="0"/>
                </View>
                <View style={Styles.value}>
                    <Text style={Styles.quantity}>Preço: 0</Text>
                    <Text style={Styles.price}>0</Text>
                </View>
            </View>
            <Button title="Adicionar"/>
        </View>    
    </>
}