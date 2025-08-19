import { ScrollView, View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={estilos.tela}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={estilos.centralizado}>
          <Text>Universal React with Expo</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
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