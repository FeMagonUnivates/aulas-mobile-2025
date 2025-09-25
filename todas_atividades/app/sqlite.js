import { View, Text, Button, StyleSheet, FlatList, TextInput } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('despesas.db');
db.execSync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS despesas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        descricao TEXT NOT NULL,
        valor REAL NOT NULL
    );
`);

function getDespesas() {
    return db.getAllSync('SELECT * FROM DESPESAS');
}

function insertDespesa() {
    db.runSync('INSERT INTO despesas (descricao, valor) VALUES (?, ?)', [descricao, valor]);
}

export default function sqlite() {
    const [texto, setTexto] = useState("");
    const [valor, setValor] = useState("");
    const [despesas, setDespesas] = useState([]);

    function salvarDespesa() {
        const descricao = texto.trim();
        if (!descricao) return;
        insertDespesa(descricao);
        setTexto("");
    }

    function carregarDespesas() {
        setDespesas(getDespesas());
    }

    return (
        <SafeAreaView>
            <Text>Despesas Diárias</Text>
            <View>
                <View>
                    <Text>Despesa</Text>
                    <TextInput
                        value={texto}
                        onChangeText={setTexto}
                        placeholder="Nova despesa..."
                    />
                </View>
                <View>
                    <Text>Valor</Text>
                    <TextInput
                        value={texto}
                        onChangeText={setValor}
                        placeholder="Valor..."
                    />
                </View>

                <Button title="Salvar" onPress={salvarDespesa} />

            </View>

            <FlatList
                data={despesas}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <Text>- {item}</Text>}
            />

            <View>
                <Button title="Voltar para tela inicial" onPress={() => router.replace("/")} />
            </View>

        </SafeAreaView>
    );
}