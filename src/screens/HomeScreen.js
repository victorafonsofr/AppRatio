import { Button, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../styles/styles';
import { useAuth } from '../api/AuthContext';  // Supondo que use o contexto de autenticação
import YoutubeIframe from 'react-native-youtube-iframe';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useAuth();  // Exemplo de uso do contexto de autenticação
  const width = Dimensions.get('window').width - 30;
  return (
    <View style={styles.container}>
      {/* Área de vídeo destacada */}
      <View style={styles.videoSection}>
      <YoutubeIframe
          key={'ZKtvpeIMHqk'} // Add this line
          width={width}
          height={200}
          videoId={'ZKtvpeIMHqk'}
        />
        <Text style={styles.videoTitle}>Razão e Proporção - Parte 1</Text>
      </View>

      {/* Botões hexagonais */}
      <View style={styles.hexagonGrid}>
        {/* Primeira linha com 2 hexágonos */}
        <View style={styles.hexagonRow}>
          <TouchableOpacity
            style={styles.hexagonWrapper}
            onPress={() => navigation.navigate('Resumos')} // Navegação para a tela Resumos
          >
            <View style={styles.hexagon}>
              <Text style={styles.hexagonText}>RESUMOS</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.hexagonWrapper}
            onPress={() => navigation.navigate('Estatísticas')} // Navegação para a tela Estatísticas
          >
            <View style={styles.hexagon}>
              <Text style={styles.hexagonText}>ESTATÍSTICAS</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Segunda linha com 2 hexágonos */}
        <View style={styles.hexagonRow}>
          <TouchableOpacity
            style={styles.hexagonWrapper}
            onPress={() => navigation.navigate('Exercícios')} // Navegação para a tela de Exercícios
          >
            <View style={styles.hexagon}>
              <Text style={styles.hexagonText}>QUESTÕES</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.hexagonWrapper}
            onPress={() => navigation.navigate('Aulas')} // Navegação para a tela Aulas
          >
            <View style={styles.hexagon}>
              <Text style={styles.hexagonText}>AULAS</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
