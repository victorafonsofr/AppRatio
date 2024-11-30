import { createStackNavigator } from '@react-navigation/stack';
import VideoScreen from '../screens/VideoScreen';
import ExerciciosScreen1 from '../screens/ExerciciosScreen1';
import ExerciciosScreen2 from '../screens/ExerciciosScreen2';
import ExerciciosScreen3 from '../screens/ExerciciosScreen3';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Video aulas" component={VideoScreen} />
        <Stack.Screen options={{headerShown:false}} name="ex1" component={ExerciciosScreen1} />
        <Stack.Screen options={{headerShown:false}} name="ex2" component={ExerciciosScreen2} />
        <Stack.Screen options={{headerShown:false}} name="ex3" component={ExerciciosScreen3} />
      </Stack.Navigator>
  );
}
export default StackNavigator;