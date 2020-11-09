import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Cotizacion(props){
    const {cambiosForm, getNombreCliente, getCiCliente, getNombreProducto, getDescripcion, getCantidad, getFormaPago, getMetodoPago, getPrecioUnitario, getSubTotal, getImpuesto, getTotal} = props;
    return (
        <>
            <View style={estilo.cotizacion}>
                <View style={estilo.contTitulo}>
                    <Text style={estilo.titulo}>COTIZACION</Text>
                </View>
                    <Image style={estilo.logo} source={require('../assets/img/logo.png')}/>
                <View style={estilo.row}>
                    <View style={estilo.ancho}>
                    <Text style={[estilo.text, estilo.empresa]}>Empresa Coti S.A.</Text>
                    <Text style={[estilo.text, estilo.empresa]}>coti@gmail.com</Text>
                    <Text style={estilo.text}>Fecha de emision:</Text>
                    <Text style={estilo.text}>Nombre del cliente:</Text>
                    <Text style={estilo.text}>No CI/NIT del cliente:</Text>
                    <Text style={estilo.text}>Nombre del producto:</Text>
                    <Text style={estilo.text}>Descripcion:</Text>
                    <Text style={estilo.text}>Cantidad:</Text>
                    <Text style={estilo.text}>Forma de Pago:</Text>
                    <Text style={estilo.text}>Metodo de pago:</Text>
                    <Text style={estilo.text}>Precio Unitario:</Text>
                    <Text style={estilo.text}>Sub-Total:</Text>
                    <Text style={estilo.text}>Impuesto IVA:</Text>
                    <Text style={estilo.text}>Total:</Text>
                    </View>
                    <View style={estilo.ancho}>
                    <Text style={[estilo.text, estilo.empresa]}>+591 74678952</Text>
                    <Text style={[estilo.text, estilo.empresa]}>Av. Pairumani Km. 1</Text>
                    <Text style={estilo.text}>{new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</Text>
                    <Text style={estilo.text}>{getNombreCliente}</Text>
                    <Text style={estilo.text}>{getCiCliente}</Text>
                    <Text style={estilo.text}>{getNombreProducto}</Text>
                    <Text style={estilo.text}>{getDescripcion}</Text>
                    <Text style={estilo.text}>{getCantidad} u.</Text>
                    <Text style={estilo.text}>{getFormaPago}</Text>
                    <Text style={estilo.text}>{getMetodoPago}</Text>
                    <Text style={estilo.text}>{getPrecioUnitario} Bs.</Text>
                    <Text style={estilo.text}>{getSubTotal} Bs.</Text>
                    <Text style={estilo.text}>{getImpuesto} Bs.</Text>
                    <Text style={estilo.text}>{getTotal} Bs.</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const estilo = StyleSheet.create({
    cotizacion: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingHorizontal: 20,
        backgroundColor: "#FFF",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    ancho: {
        width: "50%"
    },
    text: {
        height: 30,
        backgroundColor: "#FFF",
        width: "100%",
        margin: 5,
        color: "#000",
        paddingHorizontal: 20
    },
    textPersonalizado: {
        color: "#999"
    },
    row: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    titulo: {
        position: "absolute",
        fontSize: 30,
        top: 0,
        fontWeight: "bold",
        color: "#000",
        justifyContent: "center",
        textAlign: "center"
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginTop: '10%',
        marginBottom: '5%'
    },
    empresa: {
        fontWeight: "bold",
        fontSize: 16
    },
    contTitulo: {
        alignItems: "center",
        justifyContent: "center"
    }
})