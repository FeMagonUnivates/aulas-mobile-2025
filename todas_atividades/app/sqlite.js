import { View, Text, Button, StyleSheet, FlatList, TextInput, Keyboard } from "react-native";
import { useState, useEffect } from "react";
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
    return db.getAllSync('SELECT * FROM despesas ORDER BY id DESC');
}

function insertDespesas(descricao, valor) {
    const valorNum = parseFloat(valor.replace(',', '.')) || 0;
    db.runSync('INSERT INTO despesas (descricao, valor) VALUES (?, ?)', [descricao, valorNum]);
}

export default function Sqlite() {
    const [texto, setTexto] = useState("");
    const [num, setNum] = useState("");
    const [despesas, setDespesas] = useState([]);

    useEffect(() => {
        carregarDespesas();
    }, []);

    function carregarDespesas() {
        setDespesas(getDespesas());
    }

    function salvarDespesas() {
        const desc = texto.trim();
        const val = num.trim();

        if (!desc || !val) {
            alert("Por favor, preencha a descrição e o valor.");
            return;
        }

        insertDespesas(desc, val);

        setTexto("");
        setNum("");

        Keyboard.dismiss();

        carregarDespesas();
    }

    return (
        <SafeAreaView>
            <Text>Despesas Diárias</Text>
            <View>
                <View>
                    <TextInput
                        value={texto}
                        onChangeText={setTexto}
                        placeholder="Nova despesa..."
                    />
                </View>
                <View>
                    <TextInput
                        value={num}
                        onChangeText={setNum}
                        keyboardType="numeric"
                        placeholder="Valor..."
                    />
                </View>

                <Button
                    title="Salvar"
                    onPress={salvarDespesas} 
                />

            </View>

            <FlatList
                data={despesas}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.descricao}</Text>
                        <Text>R$ {item.valor.toFixed(2)}</Text>
                    </View>
                )}
            />

            <View>
                <Button 
                    title="Voltar para tela inicial" 
                    onPress={() => router.replace("/")} 
                />
            </View>

        </SafeAreaView>
    );
}