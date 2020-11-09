import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function Form(props){
    const {cambiosForm, setNombreCliente, setCiCliente, setNombreProducto, setDescripcion, setCantidad, setFormaPago, setMetodoPago, setPrecioUnitario} = props;
    return (
        <>
            <View style={estilo.formulario}>
                <Text style={estilo.titulo}>COTIZADOR DE PRODUCTOS</Text>
                <View style={estilo.rowInput}>
                <TextInput 
                    style={estilo.input} 
                    placeholder="Nombre del cliente" 
                    onChange={(e) => setNombreCliente(e.nativeEvent.text)}
                />
                <TextInput 
                    style={[estilo.input, estilo.input2]}
                    placeholder="CI/NIT"
                    onChange={(e) => setCiCliente(e.nativeEvent.text)}
                />
                </View>
                <View style={estilo.rowInput}>
                    <TextInput 
                        style={estilo.input} 
                        placeholder="Nombre del producto" 
                        onChange={(e) => setNombreProducto(e.nativeEvent.text)}
                    />
                    <TextInput 
                        style={[estilo.input, estilo.input2]}
                        placeholder="Cantidad"
                        onChange={(e) => setCantidad(e.nativeEvent.text)}
                    />
                    </View>
                <View style={estilo.rowInput}>
                    <TextInput 
                        style={estilo.input} 
                        placeholder="Descripcion del producto" 
                        onChange={(e) => setDescripcion(e.nativeEvent.text)}
                    />
                    <TextInput 
                        style={[estilo.input, estilo.input2]}
                        placeholder="Precio"
                        onChange={(e) => setPrecioUnitario(e.nativeEvent.text)}
                    />
                </View>
                <View style={estilo.rowInput}>
                    <View style={[estilo.input, estilo.select]}>
                        <RNPickerSelect
                            onValueChange={(value) => setFormaPago(value)}
                            items={[
                                { label: 'Al contado', value: 'Al contado' },
                                { label: 'En 2 cuotas', value: '2 cuotas' },
                                { label: 'En 3 cuotas', value: '3 cuotas' },
                                { label: 'En 4 cuotas', value: '4 cuotas' },
                            ]}
                        />
                    </View>
                    <View style={[estilo.input, estilo.select]}>
                        <RNPickerSelect
                            onValueChange={(value) => setMetodoPago(value)}
                            items={[
                                { label: 'Efectivo', value: 'Efectivo' },
                                { label: 'Cheque', value: 'Cheque' },
                                { label: 'Transferencia', value: 'Transferencia' },
                            ]}
                        />
                    </View>
                </View>
            </View>
        </>
    )
}

const estilo = StyleSheet.create({
    formulario: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingHorizontal: 50,
        backgroundColor: "#FFF",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: 50,
        backgroundColor: "#FFF",
        borderBottomWidth: 1,
        width: "70%",
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 25,
        color: "#000",
        paddingHorizontal: 20
    },
    input2: {
        width: "30%"
    },
    rowInput: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    titulo: {
        fontSize: 30,
        top: -150,
        alignSelf: "center",
        fontWeight: "bold",
        color: "#000",
        justifyContent: "center",
        textAlign: "center"
    },
    select: {
        width: "50%"
    }
})