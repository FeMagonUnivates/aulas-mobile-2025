import { Button, View } from "react-native";
import { router } from "expo-router";

export default function Index() {
    return (
        <View>
            <Button title="Ir para Despesas Diárias(SQLite)" onPress={() => router.replace("/sqlite")} />
        </View>
    )
}