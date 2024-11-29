import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FA',
    padding: 20,
    alignItems: "center", // Centraliza os itens no eixo horizontal
    justifyContent: "center", // Centraliza os itens no eixo vertical
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    width: '100%',
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
    backgroundColor: '#F25F5C',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  videoThumbnail: {
    width: '100%',
    height: Dimensions.get('window').width * 0.5,
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
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40,
  },

  hexagonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 130,
  },

  hexagonWrapper: {
    alignItems: 'center',
    marginHorizontal: 60,
    width: 80,
    aspectRatio: 1,
    justifyContent: 'center',
  },

  hexagon: {
    width: 130,
    height: 130,
    backgroundColor: '#6CC551',
    transform: [{ rotate: '45deg' }],
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 5,
    borderColor: '#DCDCDC',
  },

  hexagonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    transform: [{ rotate: '-45deg' }],
    textAlign: 'center',
  },

  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  highlightedQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },

  optionsContainer: {
    width: '100%',
    alignItems: 'center', // Centraliza os botões no eixo horizontal
    justifyContent: 'center', // Garante que os botões fiquem centralizados no eixo vertical
  },

  optionButton: {
    backgroundColor: '#6CC551',
    paddingVertical: 12, 
    paddingHorizontal: 30,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%', // Ajusta o tamanho do botão com base na largura da tela
    justifyContent: 'center', // Centraliza o conteúdo dentro do botão
  },

  optionText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#7FFF00',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#556B2F',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
