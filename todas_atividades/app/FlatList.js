import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { View, TextInput, Button, FlatList, Text, StyleSheet } from "react-native";

export default function App() {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);
  const [proximoId, setProximoId] = useState(1);

  function adicionarItem() {
    const novoItem = { id: proximoId, value: texto };

    const listaAtualizada = lista.concat(novoItem);
    setLista(listaAtualizada);

    setProximoId(proximoId + 1);

    setTexto("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite algo"
          value={texto}
          onChangeText={setTexto}
        />
        <Button title="Adicionar" onPress={adicionarItem} />
      </View>

      <FlatList
        data={lista}
        renderItem={({ item }) => (
          <Text>{item.value}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});