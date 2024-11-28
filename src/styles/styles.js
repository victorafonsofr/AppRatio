import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FA', // Fundo branco-acinzentado
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  videoSection: {
    backgroundColor: '#F25F5C', // Fundo vermelho claro
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  videoThumbnail: {
    width: '100%',
    height: Dimensions.get('window').width * 0.5, // Proporção 16:9
    borderRadius: 10,
    marginBottom: 10,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  hexagonGrid: {
    flexDirection: 'column',
    alignItems: 'center', // Centraliza os botões
    marginTop: 20,
  },
  hexagonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 320, // Limita a largura para evitar que os hexágonos fiquem grandes demais
    marginBottom: 10, // Espaço entre as linhas
    paddingHorizontal: 20, // Espaçamento nas extremidades da linha
  },
  hexagonWrapper: {
    alignItems: 'center',
    margin: 8, // Pequeno espaço entre os botões
    width: 90, // Largura dos hexágonos
    aspectRatio: 1, // Mantém a proporção 1:1 para o hexágono
    justifyContent: 'center',
  },
  hexagon: {
    width: 120,
    height: 120,
    backgroundColor: '#6CC551', // Cor interna do hexágono (verde)
    transform: [{ rotate: '45deg' }], // Rotação para criar o hexágono
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  hexagonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    transform: [{ rotate: '-30deg' }], // Ajusta o texto para a rotação do hexágono
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center', // Centraliza o conteúdo
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  // Estilo do enunciado da pergunta
  highlightedQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15, // Espaço entre o enunciado e as opções
  },
  // Contêiner das opções
  optionsContainer: {
    width: '100%',
  },
  // Estilo para o botão das opções
  optionButton: {
    backgroundColor: '#6CC551', // Cor de fundo das opções
    padding: 15,
    marginVertical: 8, // Espaço entre as opções
    borderRadius: 8,
    alignItems: 'center',
  },
  // Estilo do texto das opções
  optionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
