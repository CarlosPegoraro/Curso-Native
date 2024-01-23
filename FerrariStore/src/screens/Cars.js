import React from "react";
import { Text, View } from "react-native";
import Car from "../components/Car";
import global from "../styles/global";

export default function Cars() {
    return <View style={global.container}>
        
        <Car />
    </View>
}