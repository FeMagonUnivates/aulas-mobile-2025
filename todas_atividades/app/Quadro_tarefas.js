import { ScrollView, View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView style={estilos.areaSegura}>
      <ScrollView>
        <View style={estilos.cabecalho}>
          <View>
            <Text style={estilos.titulo}>Quadro de Tarefas</Text>
            <Text style={estilos.subTitulo}>Kanban estático</Text>
          </View>
        </View>
        <Text style={estilos.quadroTitulo}>Quadro</Text>
        <ScrollView horizontal style={estilos.lista} showsHorizontalScrollIndicator={false}>
          <View style={estilos.cartoes}>
            <View style={estilos.listaTitulo}>
              <Text style={[estilos.negrito, { fontSize: 15 }]}>A Fazer</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <View style={estilos.listaTarefas}>
                <Text style={estilos.negrito}>Configurar ambiente</Text>
              </View>
              <View style={[estilos.listaTarefas, estilos.tarefaImportante]}>
                <Text style={estilos.negrito}>Entregar layout (Importante)</Text>
              </View>
              <View style={estilos.listaTarefas}>
                <Text style={estilos.negrito}>Revisar textos</Text>
              </View>
            </View>
          </View>
          <View style={estilos.cartoes}>
            <View style={estilos.listaTitulo}>
              <Text style={[estilos.negrito, { fontSize: 15 }]}>Em Progresso</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <View style={estilos.listaTarefas}>
                <Text style={estilos.negrito}>Tela inicial</Text>
              </View>
              <View style={[estilos.listaTarefas]}>
                <Text style={estilos.negrito}>API de login</Text>
              </View>
              <View style={estilos.listaTarefas}>
                <Text style={estilos.negrito}>Documento</Text>
              </View>
            </View>
          </View>
          <View style={estilos.cartoes}>
            <View style={estilos.listaTitulo}>
              <Text style={[estilos.negrito, { fontSize: 15 }]}>Concluído</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <View style={estilos.listaTarefas}>
                <Text style={estilos.negrito}>Setup projeto</Text>
              </View>
              <View style={[estilos.listaTarefas]}>
                <Text style={estilos.negrito}>Componentes base</Text>
              </View>
              <View style={estilos.listaTarefas}>
                <Text style={estilos.negrito}>README</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={estilos.doisBotoes}>
          <View style={[estilos.botao, { backgroundColor: '#6795ffff' }]}>
            <Button title="Adicionar" color={'white'}></Button>
          </View>
          <View style={[estilos.botao, { backgroundColor: '#4f8a61ff' }]}>
            <Button title="Filtrar" color={'white'}></Button>
          </View>
        </View>
        <View>
          <Button
            title="Voltar para tela inicial"
            onPress={() => router.replace("/")}
          />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  areaSegura: {
    margin: 10
  },
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
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
  quadroTitulo: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10
  },
  listaTitulo: {
    alignItems: 'center'
  },
  listaTarefas: {
    marginBottom: 5,
    padding: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#ffffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#c5c5c5ff',
    width: '100%',
    height: 40
  },
  tarefaImportante: {
    backgroundColor: '#c9d8ffff',
    borderColor: 'blue'
  },
  cartoes: {
    height: 580,
    width: 300,
    marginRight: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#c5c5c5ff",
    backgroundColor: "#eeeeeeff",
    marginBottom: 10,
    padding: 10
  },
  lista: {
    height: 580
  },
  doisBotoes: {
    marginTop: 20,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  botao: {
    width: 150,
    borderRadius: 4
  }
});