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

      {/* Botões principais */}
      <View style={styles.buttonGrid}>
        <TouchableOpacity
          style={[styles.menuButton, { backgroundColor: '#FF595E' }]}
          onPress={() => navigation.navigate('Resumos')}
        >
          <Text style={styles.buttonText}>RESUMOS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, { backgroundColor: '#8AC926' }]}
          onPress={() => navigation.navigate('Quiz')}
        >
          <Text style={styles.buttonText}>QUIZ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, { backgroundColor: '#FF595E' }]}
          onPress={() => navigation.navigate('Questões')}
        >
          <Text style={styles.buttonText}>QUESTÕES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, { backgroundColor: '#8AC926' }]}
          onPress={() => navigation.navigate('Aulas')}
        >
          <Text style={styles.buttonText}>AULAS</Text>
        </TouchableOpacity>
      </View>

      {/* Botão para estatísticas */}
      <TouchableOpacity
        style={styles.statsButton}
        onPress={() => navigation.navigate('Estatísticas')}
      >
        <Text style={styles.statsText}>VEJA SUAS ESTATÍSTICAS</Text>
      </TouchableOpacity>
    </View>
  );
}
