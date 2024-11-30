import { Dimensions, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles';
import YoutubeIframe from 'react-native-youtube-iframe';

export default function VideoScreen({ navigation }) {
  const width = Dimensions.get('window').width - 30;
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {/* Área para o primeiro vídeo com espaço acima */}
      <View style={[styles.videoSection, { marginTop: 30 }]}>  {/* Aqui adicionamos marginTop diretamente */}
        <YoutubeIframe
          key={'ZKtvpeIMHqk'} // Add this line
          width={width}
          height={200}
          videoId={'ZKtvpeIMHqk'}
        />
        <Text style={styles.videoTitle}>Razão - Parte 1</Text>

        {/* Botão para praticar, que leva para a tela de Exercícios */}
        <TouchableOpacity
          style={styles.button} // Estilo do botão
          onPress={() => navigation.navigate('ex1')} // Navegação para a tela de Exercícios
        >
          <Text style={styles.buttonText}>Praticar</Text>
        </TouchableOpacity>
      </View>

      {/* Área para o segundo vídeo */}
      <View style={styles.videoSection}>
      <YoutubeIframe
          key={'PA2_dxD7h9w'} // Add this line
          width={width}
          height={200}
          videoId={'PA2_dxD7h9w'}
        />        <Text style={styles.videoTitle}>Razão - Parte 2</Text>

        {/* Botão para praticar, que leva para a tela de Exercícios */}
        <TouchableOpacity
          style={styles.button} // Estilo do botão
          onPress={() => navigation.navigate('ex2')} // Navegação para a tela de Exercícios
        >
          <Text style={styles.buttonText}>Praticar</Text>
        </TouchableOpacity>
      </View>

      {/* Área para o terceiro vídeo */}
      <View style={styles.videoSection}>
      <YoutubeIframe
          key={'yZRuZThVIas'} // Add this line
          width={width}
          height={200}
          videoId={'yZRuZThVIas'}
        />
        <Text style={styles.videoTitle}>Proporção</Text>

        {/* Botão para praticar, que leva para a tela de Exercícios */}
        <TouchableOpacity
          style={styles.button} // Estilo do botão
          onPress={() => navigation.navigate('ex3')} // Navegação para a tela de Exercícios
        >
          <Text style={styles.buttonText}>Praticar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
