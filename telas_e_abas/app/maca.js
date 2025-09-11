import { router, Link } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Index() {
    return (
        <View>
            <Text>Maçã</Text>
            <Button title="Voltar" onPress={() => router.back()} />
            <Link href="/" asChild>
                <Button title="Voltar para Index"/>
            </Link>
        </View>
    )
}