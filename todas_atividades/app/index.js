import { Button, View, ScrollView } from "react-native";
import { router } from "expo-router";

export default function Index() {
    return (
        <ScrollView>
            <Button title="Ir para Despesas Diárias(SQLite)" onPress={() => router.replace("/sqlite")} />
        </ScrollView>
    )
}