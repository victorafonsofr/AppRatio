import { View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator'; // Certifique-se de que AppNavigator está configurado corretamente
import LoginScreen from './src/screens/LoginScreen'; // Importando a tela de Login
import { AuthProvider, useAuth } from './src/api/AuthContext'; // Importando o contexto de autenticação

export default function App() {
  return (
    <AuthProvider> {/* Contexto de autenticação fornecido para a aplicação */}
      <Main /> {/* Componente principal */}
    </AuthProvider>
  );
}

const Main = () => {
  const { isAuthenticated } = useAuth(); // Verifica se o usuário está autenticado

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f8ff' }}>
      {/* Se o usuário estiver autenticado, exibe o AppNavigator (navegação) */}
      {isAuthenticated ? <AppNavigator /> : <LoginScreen />} 
    </View>
  );
};
