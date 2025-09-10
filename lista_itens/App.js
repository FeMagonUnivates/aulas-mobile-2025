import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, TextInput, Button, FlatList, Text, StyleSheet } from "react-native";

export default function App() {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);
  const [proximoId, setProximoId] = useState(1);

  function handleAdicionarItem() {
    const novoItem = { id: proximoId, value: texto };

    // adiciona ao final da lista
    const listaAtualizada = lista.concat(novoItem);
    setLista(listaAtualizada);

    // prepara o próximo id
    setProximoId(proximoId + 1);

    // limpa o campo
    setTexto("");
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite um item..."
          value={texto}
          onChangeText={setTexto} // atualiza o estado texto a cada letra digitada
        />
        <Button title="Adicionar" onPress={handleAdicionarItem} />
      </View>

      {/* lista que mostra os itens adicionados */}
      <FlatList
        data={lista}
        renderItem={({ item }) => (
          <Text>{item.value}</Text>
        )}
      />
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