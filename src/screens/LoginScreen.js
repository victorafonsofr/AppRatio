import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useAuth } from '../api/AuthContext';

const LoginScreen = () => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Entre para continuar</Text>
      {isSigninInProgress && <ActivityIndicator color="#fff" />}
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#ffabab"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#ffabab"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={async () => {
          setIsSigninInProgress(true);
          try {
            await login(username, password);
          } catch (e) {
            // Handle error
          } finally {
            setIsSigninInProgress(false);
          }
        }}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4d4d',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#ff7575',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: '#fff',
    marginBottom: 12,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#ff4d4d',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
