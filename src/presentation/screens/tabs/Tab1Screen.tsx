
import { Text, View } from 'react-native'
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';
import { IonIcon } from '../../components/shared/IonIcon';


export const Tab1Screen = () => {



  return (
    <View>
      <HamburguerMenu />
      <Text>Tab1Screen</Text>
      <IonIcon 
        name="rocket-outline"
        color = "red"
        size= {40}
      />
    </View>
  )
}
