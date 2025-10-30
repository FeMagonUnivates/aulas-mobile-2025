import { SafeAreaView } from "react-native-safe-area-context";
import { View, Button, StyleSheet, Text, TextInput, Image, Keyboard, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { router } from "expo-router";

async function buscaCadastros() {
    const resposta = await fetch(`http://177.44.248.50:8080/items`);
    if (resposta.ok) {
        const payload = await resposta.json();
        return payload;
    }
    return [];
}

async function cadastra(name, description, price) {
    const resposta = await fetch(`http://177.44.248.50:8080/items`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price })
    });
}

export default function cadastroApi() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [cadastros, setCadastros] = useState([]);

    async function carregarCadastros() {
        const lista = await buscaCadastros();
        setCadastros(lista);
    }

    async function salvar() {
        const nameTemp = name.trim();
        const descriptionTemp = description.trim();
        const priceTemp = price.trim();

        if (!name || !price) {
            alert("Por favor, preencha o nome e/ou valor.");
            return;
        }

        await cadastra(nameTemp, descriptionTemp, priceTemp);

        setName("");
        setDescription("");
        setPrice("");
        carregarCadastros();

        Keyboard.dismiss();
    }

    useEffect(() => {
        carregarCadastros();
    }, []);

    return (
        <SafeAreaView style={estilos.container}>

            <Text style={estilos.titulo}>Cadastro de Itens</Text>

            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Ex: bola, machado..."
                style={estilos.input}
            />

            <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder="Ex: quadrada, afiado..."
                style={estilos.input}
            />

            <TextInput
                value={price}
                onChangeText={setPrice}
                placeholder="Ex: 10, 300..."
                keyboardType="numeric"
                style={estilos.input}
            />

            <Button title="Salvar" onPress={salvar} />

            <Button title="Voltar para tela inicial" onPress={() => router.replace("/")} />

            <FlatList
                data={cadastros}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <View style={estilos.item}>
                        <Text style={estilos.textoItem}>Nome: {item.name}</Text>
                        <Text>Descrição: {item.description}</Text>
                        <Text>Preço: R$ {item.price}</Text>
                    </View>
                )}
            />

        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 8,
        marginBottom: 8,
    },
    botoes: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10,
    },
    item: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        padding: 10,
        marginBottom: 8,
    },
    textoItem: {
        fontWeight: "bold",
    },
});