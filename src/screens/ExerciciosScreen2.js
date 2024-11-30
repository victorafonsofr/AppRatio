import { useState, useEffect, useRef } from "react";
import { View, Text, FlatList, Alert, Dimensions, StyleSheet } from "react-native";
import { getExercicios2 } from "../api/exerciciosApi2";
import { CardQuestion } from "../components/CardQuestion";

export default function ExerciciosScreen2() {
  const [exercicios, setExercicios] = useState([]);
  const flatListRef = useRef(null); // Referência para o FlatList
  const [screenWidth, setScreenWidth] = useState(Dimensions.get("window").width); // Armazenando a largura da tela

  useEffect(() => {
    // Atualiza a largura da tela sempre que o tamanho da janela mudar
    const updateLayout = () => {
      setScreenWidth(Dimensions.get("window").width);
    };

    // Escuta mudanças na largura da tela (como rotação ou redimensionamento)
    Dimensions.addEventListener("change", updateLayout);

    // Simulando consulta ao servidor para obter os exercícios
    const fetchedExercicios = getExercicios2().map(exercicio => ({
      ...exercicio,
      feito: false,
      acertou: null,
    }));
    setExercicios(fetchedExercicios);

    // Limpeza do listener quando o componente for desmontado
    return () => {
      // Dimensions.removeEventListener("change", updateLayout);
    };
  }, []);

  const handlePress = (resposta, item) => {
    const updatedExercicios = exercicios.map(exercicio => {
      if (exercicio.id === item.id) {
        return {
          ...exercicio,
          feito: true,
          acertou: resposta.correta,
        };
      }
      return exercicio;
    });
    setExercicios(updatedExercicios);

    if (resposta.correta) {
      Alert.alert("Resposta Correta", item.feedback.mensagens.acerto);
      // Avança para o próximo exercício automaticamente após acertar
      const nextIndex = exercicios.findIndex(exercicio => exercicio.id === item.id) + 1;
      if (nextIndex < exercicios.length) {
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      }
    } else {
      Alert.alert("Resposta Errada", item.feedback.mensagens.erro);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Exercícios</Text>
      <FlatList
        ref={flatListRef} // Atribuindo a referência
        data={exercicios}
        renderItem={({ item }) => (
          <View style={[styles.cardContainer, { width: screenWidth * 0.9 }]}>
            {/* Enunciado do exercício ajustado ao tamanho da tela */}
            <Text style={[styles.enunciado, { maxWidth: screenWidth * 0.85 }]}>
              {item.enunciado}
            </Text>
            <CardQuestion handlePress={handlePress} item={item} />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        pagingEnabled
        horizontal
        snapToAlignment="center" // Alinha o centro do item com o centro da tela
        contentContainerStyle={{ alignItems: "center" }} // Centraliza os itens dentro do FlatList
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />} // Adiciona um separador entre os itens
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardContainer: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
    alignItems: "center",
  },
  enunciado: {
    fontSize: 18,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 15,
    flexWrap: "wrap",
  },
});
