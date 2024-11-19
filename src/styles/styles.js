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
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuButton: {
    width: '48%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statsButton: {
    backgroundColor: '#FFCA3A', // Fundo amarelo
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  statsText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
