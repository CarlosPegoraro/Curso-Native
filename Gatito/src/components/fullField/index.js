import React from "react";
import { TextInput } from "react-native";

export default function FullField({value}) {
    return <TextInput keyboardType="number-pad" selectTextOnFocus value={value}/>
}   