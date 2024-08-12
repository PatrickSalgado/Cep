import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';
import Estilo from './App.Style';

export default function App() {
  const [cep, setCep] = useState('');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
 
  const buscarCep = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setResultado(response.data);
    } catch (error) {
      console.error(error);
      setResultado(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={Estilo.container}>
      <Text style={Estilo.title}>Consulta CEP</Text>   
      <TextInput 
        style={Estilo.inputText}
        placeholder='Digite aqui o CEP'
        value={cep}
        onChangeText={setCep}
        keyboardType='numeric'
      /> 
      <Button title="Buscar" onPress={buscarCep} />
      {loading && <Text style={Estilo.loading}>Carregando...</Text>}
      {resultado && (
        <View style={Estilo.resultado}>
          <Text>CEP: {resultado.cep}</Text>
          <Text>Logradouro: {resultado.logradouro}</Text>
          <Text>Bairro: {resultado.bairro}</Text>
          <Text>Cidade: {resultado.localidade}</Text>
          <Text>UF: {resultado.uf}</Text>
        </View>
      )}
      {resultado === null && !loading && (
        <Text style={Estilo.error}>Nenhum resultado encontrado</Text>
      )}
    </View>
  )
}
