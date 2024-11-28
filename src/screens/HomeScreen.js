import { Button, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import { useAuth } from '../api/AuthContext';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      {/* Área de vídeo destacada */}
      <View style={styles.videoSection}>
        <Image
          source={{
            uri: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg', // Substitua pela thumbnail do vídeo
          }}
          style={styles.videoThumbnail}
        />
        <Text style={styles.videoTitle}>Razão e Proporção - Parte 1</Text>
      </View>

      {/* Botões hexagonais */}
      <View style={styles.hexagonGrid}>
        {/* Primeira linha com 2 hexágonos */}
        <View style={styles.hexagonRow}>
          <TouchableOpacity
            style={styles.hexagonWrapper}
            onPress={() => navigation.navigate('Resumos')}
          >
            <View style={styles.hexagon}>
              <Text style={styles.hexagonText}>RESUMOS</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.hexagonWrapper}
            onPress={() => navigation.navigate('Quiz')}
          >
            <View style={styles.hexagon}>
              <Text style={styles.hexagonText}>QUIZ</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Segunda linha com 2 hexágonos */}
        <View style={styles.hexagonRow}>
          <TouchableOpacity
            style={styles.hexagonWrapper}
            onPress={() => navigation.navigate('Questões')}
          >
            <View style={styles.hexagon}>
              <Text style={styles.hexagonText}>QUESTÕES</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.hexagonWrapper}
            onPress={() => navigation.navigate('Aulas')}
          >
            <View style={styles.hexagon}>
              <Text style={styles.hexagonText}>AULAS</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Terceira linha com 1 hexágono centralizado */}
        <View style={styles.hexagonRow}>
          <TouchableOpacity
            style={styles.hexagonWrapper}
            onPress={() => navigation.navigate('Estatísticas')}
          >
            <View style={styles.hexagon}>
              <Text style={styles.hexagonText}>ESTATÍSTICAS</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}