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
          <Button color={"black"} title="Butão 1" />
          <Button title="Butão 2" />
          <Button title="Butão 3" />
        </View>
      </View>
      <ScrollView>
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
        <Text style={estilos.negrito}>Chamada para ação</Text>
        <View>
          <Text>Adquira um novo curso aqui</Text>
          <Button title="Comprar"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  areaSegura: {
    margin: 5,
    flex: 1
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
    justifyContent: "space-around"
  },
  cartoes: {
    height: 80,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    marginBottom: 10,
    padding: 20
  },
});