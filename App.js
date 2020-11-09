import React, {Fragment, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Formulario from './src/components/form';
import Cotizacion from './src/components/cotizacion';
import Boton from './src/components/footer';

export default function App() {
  const [nombreCliente, setNombreCliente] = useState(null);
  const [ciCliente, setCiCliente] = useState(null);
  const [nombreProducto, setNombreProducto] = useState(null);
  const [descripcion, setDescripcion] = useState(null);
  const [cantidad, setCantidad] = useState(null);
  const [formaPago, setFormaPago] = useState(null);
  const [metodoPago, setMetodoPago] = useState(null);
  const [precioUnitario, setPrecioUnitario] = useState(null);
  const [subTotal, setSubTotal] = useState(null);
  const [impuesto, setImpuesto] = useState(null);
  const [total, setTotal] = useState(null);

  const getNombreCliente = nombreCliente;
  const getCiCliente = ciCliente;
  const getNombreProducto = nombreProducto;
  const getDescripcion = descripcion;
  const getCantidad = cantidad;
  const getFormaPago = formaPago;
  const getMetodoPago = metodoPago;
  const getPrecioUnitario = precioUnitario;
  const getSubTotal = subTotal;
  const getImpuesto = impuesto;
  const getTotal = total;

  const calcular = () => {
    const iva = 13 / 100;
    const subTotalCalc = (precioUnitario * cantidad);
    const impuestoCalc = (subTotalCalc * iva);
    const totalCalc = (subTotalCalc + impuestoCalc);
    
    setSubTotal(subTotalCalc);
    setImpuesto(impuestoCalc);
    setTotal(totalCalc);
  }
  const [isCotizado, setIsCotizado] = useState(false);
  const cambiosForm = () => {
      setIsCotizado(!isCotizado);
  }
  return (
    <>
      <View style={styles.contenedor}>
        { isCotizado ? <Cotizacion cambiosForm={cambiosForm} getNombreCliente={getNombreCliente} getCiCliente={getCiCliente} getNombreProducto={getNombreProducto} getDescripcion={getDescripcion} getCantidad={getCantidad} getFormaPago={getFormaPago} getMetodoPago={getMetodoPago} getPrecioUnitario={getPrecioUnitario} getSubTotal={getSubTotal} getImpuesto={getImpuesto} getTotal={getTotal}/> 
                  : <Formulario cambiosForm={cambiosForm} setNombreCliente={setNombreCliente} setCiCliente={setCiCliente} setNombreProducto={setNombreProducto} setDescripcion={setDescripcion} setCantidad={setCantidad} setFormaPago={setFormaPago} setMetodoPago={setMetodoPago} setPrecioUnitario={setPrecioUnitario}/> }
      </View>
      <View style={styles.contenedorFooter}>
        <Boton calcular={calcular} isCotizado={isCotizado} setIsCotizado={setIsCotizado}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#FFF",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  contenedorFooter: {
    backgroundColor: "#FFF",
    width: "100%",
    alignItems: "center"
  }
});
