import { Button, View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Index() {
    return (
        <SafeAreaView>
            <ScrollView>
                <Button title="Ir para FlatList" onPress={() => router.replace("/FlatList")} />
                <Button title="Ir para App Estudantes" onPress={() => router.replace("/App_estudantes")} />
                <Button title="Ir para Avaliação 01" onPress={() => router.replace("/Avaliacao01")} />
                <Button title="Ir para Calculadora" onPress={() => router.replace("/Calculadora")} />
                <Button title="Ir para Quadro de tarefas" onPress={() => router.replace("/Quadro_tarefas")} />
                <Button title="Ir para Despesas Diárias(SQLite)" onPress={() => router.replace("/sqlite")} />
                <Button title="Ir para Consultar CEP" onPress={() => router.replace("/cep")} />
            </ScrollView>
        </SafeAreaView>
    )
}