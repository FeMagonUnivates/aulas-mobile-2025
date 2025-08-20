import { ScrollView, View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={estilos.tela}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[estilos.centralizado, 
        {
          width: '100%',
          height: 80
        }]}>
          <Text style= {{ width: '80%', alignItems: "flex-start"}}>Menu</Text>
          <View style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: "space-between"
          }}>
            <View style={{
              backgroundColor: 'black',
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{
                fontSize: 18, 
                width: 100,  
                padding: 6, 
                backgroundColor: 'lightblue'}}>Notas</Text>
            </View>
            <Text style={{backgroundColor: 'lightblue'}}>Aulas</Text>
            <Text style={{backgroundColor: 'lightblue'}}>Avisos</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff"
  },
  titulo: {
    fontWeight: "1000",
  },
  texto: {
    fontWeight: "600",
  },
  subTitulo: {
    fontWeight: "800",
  },
  caixa: {
    width: "100%",
    backgroundColor: "#e2e8f0",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    marginBottom: 12,
  },
  caixaPequena: {
    width: "100%",
    backgroundColor: "#e2e8f0",
    borderRadius: 10,
    padding: 8,
    marginBottom: 12,
  },
  caixaDestaque: {
    borderWidth: 1,
    borderColor: "#60a5fa",
    backgroundColor: "#dbeafe",
  },
  blocoFlex: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
    height: 100,
  },
  quadrado: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
  centralizado: {
    width: "100%",
    height: 120,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    justifyContent: "center", // eixo principal (padrão column)
    alignItems: "center", // eixo cruzado (padrão row)
  },
});