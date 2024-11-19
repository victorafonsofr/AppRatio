import { View, Image } from 'react-native'
export default function BotaoMat() {
  return (
    <View>
      <Image source={require('../../assets/imageBotaoMat.png')} 
        style={{width: 25,
        height: 25,
        marginLeft: 10,
        }}
      />
    </View>
  );
}
