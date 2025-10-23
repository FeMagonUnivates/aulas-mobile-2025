import { SafeAreaView } from "react-native-safe-area-context";
import { Button, StyleSheet, Text, TextInput, Image, Keyboard } from "react-native";
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
            <TextInput
                value={cepPesquisar}
                onChangeText={setCepPesquisar}
                style={estilos.caixaInput}
            />

            <Button title="Pesquisar" onPress={carregarCep} />

            <Text>CEP: {cep}</Text>
            <Text>Estado: {estado}</Text>
            <Text>Cidade: {cidade}</Text>
            <Text>Bairro: {bairro}</Text>
            <Text>Rua: {rua}</Text>

        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({

    container: {
        margin: 10,
        flex: 1
    },

    caixaInput: {
        backgroundColor: '#fff',
        width: '90%',
        height: 35,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 5,
        marginVertical: 8,
    },

})