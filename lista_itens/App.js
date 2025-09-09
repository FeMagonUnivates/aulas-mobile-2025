import { View, Text, StyleSheet, Button, TextInput, FlatList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from "react";

export default function App() {

  const [texto, setTexto] = useState("");
  const [id, setId] = useState("");
  const [lista, setLista] = useState([]);

  const adicionarNaLista = () => {
    if (texto.trim() === "") return;
    if (id.trim() === "") return;
    setLista([...lista, { id: id, valor: texto }]);
    setTexto("");
    setId("");
  };

  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View>
        <TextInput
          style={estilos.campo}
          placeholder="Digite o ID"
          value={id}
          onChangeText={setId}
        />
        <TextInput
          style={estilos.campo}
          placeholder="Digite algo"
          value={texto}
          onChangeText={setTexto}
        />

        <View style={estilos.margemBotoes}>
          <View style={estilos.botao}>
            <Button title="Adicionar" onPress={adicionarNaLista} />
          </View>
        </View>

        <FlatList
          data={lista}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text>ID: {item.id}, Algo: {item.texto}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
}


const estilos = StyleSheet.create({
  areaSegura: {
    flex: 1,
    margin: 10
  },
  campo: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 20
  },
  botao: {
    width: 'auto',
    height: 70,
    backgroundColor: '#e4e4e4ff',
    borderRadius: 5,
    justifyContent: 'center',
  },
  margemBotoes: {
    width:'100%',
    marginTop: 10,
    alignItems: 'center'
  },
});
