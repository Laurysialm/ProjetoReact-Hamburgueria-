import React from 'react';
import { Text, View, StyleSheet, Image, FlatList,ScrollView } from 'react-native';
import { HStack, Center, NativeBaseProvider, VStack } from 'native-base';

import BCrispy from '../assets/BCrispy.jpg';
import Veg from '../assets/veg.jpg';
import Bmayo from '../assets/bMayo.jpg';
import Cocota from '../assets/cocota.jpg';

export default function Menu() {
  const imagens = [
    { imagens: BCrispy, title: 'Crispy-Burguer', preco: 'R$30,90' },
    { imagens: Veg, title: 'Tofu-Burguer', preco: 'R$34,90' },
    { imagens: Bmayo, title: 'Mayo-Burguer', preco: 'R$24,90' },
    { imagens: Cocota, title: 'Chicken-Burguer', preco: 'R$26,90' },
  ];

  return (
    <ScrollView>
    <NativeBaseProvider>
    
      <FlatList
        horizontal
        data={imagens}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              source={item.imagens}
              style={styles.foto}
              resizeMode="cover"
            />
            <View style={{ display: 'flex', alignItems: 'center' }}>
              <Text style={styles.legenda}>{item.title}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        style={styles.burguers}
      />
    </NativeBaseProvider>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  item: {
    margin: 10,
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  burguers: {
    padding: 10,
    backgroundColor: '#fff',
  },
  legenda: {
    color: '#000000',
    fontSize: 16,
    alignContent: 'center',
    fontFamily: 'MontserratBold',
    fontWeight: 'normal',
  },
  preco: {
    color: '#000000',
    fontSize: 13,
    display: 'flex',
    alignContent: 'center',
    fontFamily: 'MontserratBold',
    fontWeight: 'normal',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
});
