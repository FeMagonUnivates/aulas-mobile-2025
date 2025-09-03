import { ScrollView, View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { VirtualizedList } from "react-native-web";

export default function App() {
  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View style={{ marginBottom: 2 }}>
        <Text style={estilos.titulo}>React Native</Text>
        <Text>Avaliação dia 27/08</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={[estilos.centralizar, { height: 700 }]}>
          <View style={estilos.textoBatatas}>
            <Text style={estilos.negrito}>Batatas são macias.</Text>
          </View>
          <View style={estilos.botao}>
            <Button title="Enviar" color={'white'}></Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  areaSegura: {
    padding: 8
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 25
  },
  negrito: {
    fontWeight: "bold",
  },
  centralizar: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoBatatas: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddddddff',
    width: 150,
    height: 30,
    fontSize: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#c7c7c7ff',
    margin: 10
  },
  botao: {
    backgroundColor: '#7582ffff',
    borderRadius: 3
  }
}); 