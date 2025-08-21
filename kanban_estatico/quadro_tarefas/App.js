import { ScrollView, View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View style={estilos.cabecalho}>
        <View>
          <Text style={estilos.titulo}>Quadro de Tarefas</Text>
          <Text style={estilos.subTitulo}>Kanban estático</Text>
        </View>
      </View>
      <Text style={[estilos.listaTitulo,]}>Quadro</Text>
      <ScrollView horizontal style={estilos.lista}>
        <View style={estilos.cartoes}>
          <Text style={estilos.negrito}>Card 1</Text>
          <Text>Card 1</Text>
        </View>
        <View style={estilos.cartoes}>
          <Text style={estilos.negrito}>Card 1</Text>
          <Text>Card 1</Text>
        </View>
        <View style={estilos.cartoes}>
          <Text style={estilos.negrito}>Card 1</Text>
          <Text>Card 1</Text>
        </View>
      </ScrollView>
      <View style={estilos.chamadaAcao}>
        <Button title="Adicionar"></Button>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  areaSegura: {
    margin: 5,
  },
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    gap: 12
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 18
  },
  subTitulo: {
    fontSize: 15
  },
  negrito: {
    fontWeight: "bold",
  },
  listaTitulo: {
    fontWeight: "bold",
    margin: 10,
    marginLeft: 15
  },
  cartoes: {
    justifyContent: "center",
    height: 300,
    width: 300,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "#ffacacff",
    marginBottom: 10,
    padding: 20
  },
  lista: {
    height: 500
  },
  chamadaAcao: {
    marginTop: 10,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 100
  }
});