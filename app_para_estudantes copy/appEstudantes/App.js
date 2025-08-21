import { ScrollView, View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View style={estilos.cabecalho}>
        <View style={estilos.avatar}>
        </View>
        <View>
          <Text style={estilos.titulo}>Olá Estudante</Text>
          <Text style={estilos.subTitulo}>O Grêmio será eliminado</Text>
        </View>
      </View>
      <View>
        <Text style={[estilos.menuTitulo,]}>Menu</Text>
        <View style={estilos.menuBotao}>
          <Button title="Butão 1" />
          <Button title="Butão 2" />
          <Button title="Butão 3" />
        </View>
      </View>
      <ScrollView style={estilos.lista}>
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
        <View style={estilos.cartoes}>
          <Text style={estilos.negrito}>Card 1</Text>
          <Text>Card 1</Text>
        </View>
        <View style={estilos.cartoes}>
          <Text style={estilos.negrito}>Card 1</Text>
          <Text>Card 1</Text>
        </View>
      </ScrollView>
      <Text style={estilos.negrito}>Chamada para ação</Text>
      <View style={estilos.chamadaAcao}>
        <Text>Compre o curso</Text>
        <Button color={'green'} title="Comprar"></Button>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  areaSegura: {
    margin: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: 'lightblue',
    borderRadius: '50%'
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
  menuTitulo: {
    fontWeight: "bold",
    margin: 10,
    marginLeft: 15
  },
  menuBotao: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20
  },
  bordaBotao: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: '10%'
  },
  cartoes: {
    justifyContent: "center",
    height: 80,
    borderRadius: 20,
    backgroundColor: "#f1b1b1ff",
    marginBottom: 10,
    padding: 20
  },
  lista: {
    height: 300
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