import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { HStack, Center, NativeBaseProvider, VStack } from 'native-base';
import Logo from '../assets/logo.jpg';

export default function Banner(){

return(

<Image source={Logo} style={{width:'100%', height:450}} resizeMode="cover"/>

)}