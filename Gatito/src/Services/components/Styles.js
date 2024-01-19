import { StyleSheet } from "react-native";

import { colors } from "../../Styles";

export default StyleSheet.create({
    card: {
        padding: 16
    },
    name: {
        fontSize: 20,
        lineHeight: 32,
        color: colors.orange
    },
    price: {
        fontSize: 16,
        lineHeight: 32,
        color: colors.dark,
        justifyContent: "end",
        textAlign: "end",
        alignItems: "end"
    },
    shopCar: {
        padding:16,
        flexDirection: "row",
    }
})

