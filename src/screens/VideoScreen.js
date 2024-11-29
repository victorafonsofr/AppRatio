import { Alert, Button, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles';

export default function VideoScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {/* Área para o primeiro vídeo com espaço acima */}
      <View style={[styles.videoSection, { marginTop: 30 }]}>  {/* Aqui adicionamos marginTop diretamente */}
        <Image
          source={{
            uri: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg', // Substitua pela thumbnail do primeiro vídeo
          }}
          style={styles.videoThumbnail}
        />
        <Text style={styles.videoTitle}>Razão - Parte 1</Text>
        
        {/* Botão para praticar, que leva para a tela de Exercícios */}
        <TouchableOpacity
          style={styles.button} // Estilo do botão
          onPress={() => navigation.navigate('Exercícios')} // Navegação para a tela de Exercícios
        >
          <Text style={styles.buttonText}>Praticar</Text>
        </TouchableOpacity>
      </View>

      {/* Área para o segundo vídeo */}
      <View style={styles.videoSection}>
        <Image
          source={{
            uri: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg', // Substitua pela thumbnail do segundo vídeo
          }}
          style={styles.videoThumbnail}
        />
        <Text style={styles.videoTitle}>Razão - Parte 2</Text>
        
        {/* Botão para praticar, que leva para a tela de Exercícios */}
        <TouchableOpacity
          style={styles.button} // Estilo do botão
          onPress={() => navigation.navigate('Exercícios')} // Navegação para a tela de Exercícios
        >
          <Text style={styles.buttonText}>Praticar</Text>
        </TouchableOpacity>
      </View>

      {/* Área para o terceiro vídeo */}
      <View style={styles.videoSection}>
        <Image
          source={{
            uri: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg', // Substitua pela thumbnail do terceiro vídeo
          }}
          style={styles.videoThumbnail}
        />
        <Text style={styles.videoTitle}>Proporção</Text>
        
        {/* Botão para praticar, que leva para a tela de Exercícios */}
        <TouchableOpacity
          style={styles.button} // Estilo do botão
          onPress={() => navigation.navigate('Exercícios')} // Navegação para a tela de Exercícios
        >
          <Text style={styles.buttonText}>Praticar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
