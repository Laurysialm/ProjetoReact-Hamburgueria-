import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Menu() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
  return (
    <>
      <HeaderRNE
        backgroundColor={'#d62f2f'}
        centerComponent={{
          text: 'Burguers',
          style: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: 'Montserrat_700Bold',
          },
        }}
        containerStyle={{ borderRadius: 4 }}
      />
    </>
  );
}
