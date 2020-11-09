import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Boton(props){
    const {calcular, isCotizado, setIsCotizado,} = props;
    return (
        <View style={estilo.footer}>
            <TouchableOpacity style={estilo.boton} onPressIn={calcular} onPress={() => setIsCotizado(!isCotizado)}>
                <Text style={estilo.texto}>
                    { isCotizado ? "VOLVER" : "CALCULAR" }
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const estilo = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 0,
        width: "90%",
        paddingHorizontal: 50,
        backgroundColor: "#FFF",
        height: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    texto: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        color: "#FFF"
    },
    boton: {
        width: "50%",
        height: 35,
        padding: 5,
        borderRadius: 10,
        color: "#FFF",
        backgroundColor: "#FF606E",
        fontWeight: "bold",
        textAlign: "center"
    }
})