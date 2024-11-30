import React, { useState } from "react";
import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function EstatisticasScreen({ totalExercicios, acertos }) {
  const [progresso] = useState(new Animated.Value(0)); // Valor inicial do progresso (0%)

  // Calcula o progresso baseado nos acertos
  const calcularProgresso = () => {
    if (totalExercicios === 0) return 0;
    return Math.max(0, Math.min(1, acertos / totalExercicios)); // Garante que o valor fique entre 0 e 1
  };

  // Atualiza o progresso animado
  const atualizarProgresso = () => {
    Animated.timing(progresso, {
      toValue: calcularProgresso(),
      duration: 500, // Duração da animação (em ms)
      useNativeDriver: false, // Para animar o width da barra
    }).start();
  };

  // Atualiza o progresso sempre que `acertos` ou `totalExercicios` mudar
  React.useEffect(() => {
    atualizarProgresso();
  }, [acertos, totalExercicios]);

  const larguraAnimada = progresso.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width * 0.9], // Largura animada proporcional ao tamanho da tela
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estatísticas</Text>

      {/* Barra de Progresso */}
      <View style={styles.progressContainer}>
        <Animated.View style={[styles.progressBar, { width: larguraAnimada }]} />
      </View>

      <Text style={styles.progressText}>
        {Math.round(calcularProgresso() * 100)}% concluído
      </Text>

      {/* Estatísticas Gerais */}
      <View style={styles.statsContainer}>
        <Text style={styles.statText}>Total de Exercícios: {totalExercicios}</Text>
        <Text style={styles.statText}>Acertos: {acertos}</Text>
        <Text style={styles.statText}>Erros: {totalExercicios - acertos}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f0f4f7",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  progressContainer: {
    width: "90%",
    height: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#4caf50",
    borderRadius: 10,
  },
  progressText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 30,
  },
  statsContainer: {
    alignItems: "flex-start",
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  statText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
});
