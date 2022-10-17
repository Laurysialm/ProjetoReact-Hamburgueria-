import * as React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Header from './Hamburgueria/pages/header';
import Footer from './Hamburgueria/pages/footer';
import Menu from './Hamburgueria/pages/menu';
import Banner from './Hamburgueria/pages/banner';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,Montserrat_700Bold
  })
  return (
    <SafeAreaProvider>
      <Banner />
      <Header />
      <Menu />
      <Footer />
    </SafeAreaProvider>
  );
}
