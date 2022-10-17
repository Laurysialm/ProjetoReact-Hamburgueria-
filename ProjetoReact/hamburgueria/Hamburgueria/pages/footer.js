import * as React from 'react';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Tab, Text, TabView } from '@rneui/themed';

export default function Footer() {
  
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,Montserrat_700Bold
  })
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary">
        <Tab.Item
          title="Pedidos"
          titleStyle={{ fontSize: 14,fontFamily:'Montserrat_400Regular' }}
          icon={{ name: 'receipt-long', type: 'material', color: 'white' }}
          containerStyle={(active) => ({
            backgroundColor: active ? '#de5454' : '#d62f2f',
          })}
        />
        <Tab.Item
          title="Pagamento"
          titleStyle={{ fontSize: 14,fontFamily:'Montserrat_400Regular' }}
          icon={{ name: 'payments', type: 'material', color: 'white' }}
          containerStyle={(active) => ({
            backgroundColor: active ? '#de5454' : '#d62f2f',
          })}
        />

        <Tab.Item
          title="Favoritos"
          titleStyle={{ fontSize: 14,fontFamily:'Montserrat_400Regular' }}
          icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
          containerStyle={(active) => ({
            backgroundColor: active ? '#de5454' : '#d62f2f',
          })}
        />
      </Tab>
    </>
  );
}
