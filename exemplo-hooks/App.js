import { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [resultado, setResultado] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function somar(n1, n2) {
    const n1Convertido = parseFloat(n1);
    const n2Convertido = parseFloat(n2);
    const soma = n1Convertido + n2Convertido;
    return soma;
  }
  function subtrair(n1, n2) {
    const n1Convertido = parseFloat(n1);
    const n2Convertido = parseFloat(n2);
    const subtrair = n1Convertido - n2Convertido;
    return subtrair;
  }
  function multiplicar(n1, n2) {
    const n1Convertido = parseFloat(n1);
    const n2Convertido = parseFloat(n2);
    const multiplicar = n1Convertido * n2Convertido;
    return multiplicar;
  }
  function dividir(n1, n2) {
    const n1Convertido = parseFloat(n1);
    const n2Convertido = parseFloat(n2);
    if (n2Convertido == 0) {
      return "Divisão por 0"
    }
    const dividir = n1Convertido / n2Convertido;
    return dividir;
  }
  function zerar() {
    setNum1(0)
    setNum2(0)
  }

  return (
    <SafeAreaView style={estilos.areaSegura}>

      <View style={estilos.cabecalho}>
        <Text style={estilos.textoNum}>Número 1</Text>
        <TextInput
          style={estilos.campo}
          placeholder="Digite um número"
          keyboardType="numeric"
          onChangeText={setNum1}
          value={num1}
        />
        <Text style={[estilos.textoNum, { marginTop: 5 }]}>Número 2</Text>
        <TextInput
          style={estilos.campo}
          placeholder="Digite um número"
          keyboardType="numeric"
          onChangeText={setNum2}
          value={num2}
        />
      </View>

      <View style={estilos.margemBotoes}>
        <View style={estilos.botao}>
          <Button
            title="+"
            onPress={() => setResultado(somar(num1, num2))} />
        </View>
        <View style={estilos.botao}>
          <Button
            title="-"
            onPress={() => setResultado(subtrair(num1, num2))} />
        </View>
        <View style={estilos.botao}>
          <Button
            title="x"
            onPress={() => setResultado(multiplicar(num1, num2))} />
        </View>
        <View style={estilos.botao}>
          <Button
            title="/"
            onPress={() => setResultado(dividir(num1, num2))} />
        </View>
      </View>
      <View style={estilos.botaoZerar}>
        <Button
          title="Zerar campos"
          onPress={() => setResultado(zerar())} />
      </View>

      <View>
        <Text style={estilos.resultado}>Resultado: {resultado}</Text>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  areaSegura: {
    flex: 1,
    margin: 10
  },
  cabecalho: {
    marginBottom: 40
  },
  campo: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10
  },
  margemBotoes: {
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  botao: {
    width: 70,
    height: 70,
    backgroundColor: '#e4e4e4ff',
    borderRadius: 5,
    justifyContent: 'center',
  },
  botaoZerar: {
    width: 300,
    height: 50,
    backgroundColor: '#e4e4e4ff',
    borderRadius: 5,
    justifyContent: 'center',
    width: '100%',
    marginBottom: 40
  },
  textoNum: {
    fontWeight: 'bold',
    fontSize: 20
  },
  resultado: {
    fontWeight: 'bold',
    fontSize: 30
  }
});