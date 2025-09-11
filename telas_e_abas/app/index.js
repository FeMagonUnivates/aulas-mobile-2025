import { Button, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
    return (
        <View>
            <Link href="/batata" asChild>
                <Button title="Clique para ver uma batata" />
            </Link>
            <Link href="/maca" asChild>
                <Button title="Clique para ver uma maçã" />
            </Link>
        </View>
    )
}