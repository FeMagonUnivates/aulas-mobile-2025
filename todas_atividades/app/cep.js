import { SafeAreaView} from "react-native-safe-area-context";
import {  View, Button, StyleSheet, Text, TextInput, Image, Keyboard } from "react-native";
import { useState, useEffect } from "react";

async function getCep(cepBusca) {
    const resposta = await fetch(`https://brasilapi.com.br/api/cep/v1/${cepBusca}`);
    if (resposta.ok) {
        const payload = await resposta.json();
        return payload;
    }
}

export default function Cep() {
    const [cep, setCep] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [cepPesquisar, setCepPesquisar] = useState('');

    async function carregarCep() {
        const cepTemp = await getCep(cepPesquisar);
        console.log(cepTemp)
        setCep(cepTemp.cep)
        setEstado(cepTemp.state)
        setCidade(cepTemp.city)
        setBairro(cepTemp.neighborhood || null)
        setRua(cepTemp.street || null)
    }

    return (
        <SafeAreaView style={estilos.container}>
            <View style={estilos.caixaTitulo}>
                <Text style={estilos.titulo}>Escreva um CEP na caixa abaixo</Text>
            </View>
            <TextInput
                value={cepPesquisar}
                onChangeText={setCepPesquisar}
                style={estilos.caixaInput}
                keyboardType="numeric"
                maxLength={8}
                placeholder="Digite o CEP (ex: 12345678)"
            />

            <Button 
                title="Pesquisar" 
                onPress={carregarCep}
            />

            <View style={estilos.caixaResposta}>
                <Text style={estilos.resposta}>CEP: {cep}</Text>
                <Text style={estilos.resposta}>Estado: {estado}</Text>
                <Text style={estilos.resposta}>Cidade: {cidade}</Text>
                <Text style={estilos.resposta}>Bairro: {bairro}</Text>
                <Text style={estilos.resposta}>Rua: {rua}</Text>
            </View>

        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({

    container: {
        margin: 10,
        flex: 1
    },

    caixaTitulo: {
        alignItems: 'center',
        marginVertical: 10,
    },      
    
    caixaResposta: {
        height: 150,
        justifyContent: 'space-around'
    },

    resposta: {
        borderColor: '#000',
        borderBottomWidth: 1,
        borderRadius: 4,
        paddingLeft: 5,
    },
    
    titulo: {
        fontSize: 22,
        fontWeight: 'bold'
    },      

    caixaInput: {
        backgroundColor: '#fff',
        width: '100%',
        height: 35,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 5,
        marginVertical: 8,

    },

})