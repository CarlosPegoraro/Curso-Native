import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

import enzo from '../../assets/enzo.jpg'
import sf90 from '../../assets/sf90.webp'
import f40 from '../../assets/f40.webp'
import puroSangue from '../../assets/puroSangue.webp'
import pallet from '../styles/pallet';
import global from '../styles/global';

const data = [
  {
    title: 'Ferrari Enzo',
    img: enzo,
    description: "A Enzo, nomeada em homenagem ao fundador da Ferrari, é uma obra-prima da engenharia. Lançada no início dos anos 2000, ela incorpora tecnologia de ponta, com um motor V12 de 6.0 litros, capaz de atingir velocidades impressionantes. Seu design aerodinâmico e linhas elegantes destacam o compromisso da Ferrari com a excelência."
  },
  {
    title: 'Ferrari F40',
    img: f40,
    description: "A F40 é um ícone dos anos 80, uma verdadeira máquina de performance. Com um design angular e agressivo, é impulsionada por um motor V8 biturbo de 2.9 litros. Sua leveza e potência a tornaram uma das supercarros mais icônicas de todos os tempos, celebrando os 40 anos da Ferrari."
  },
  {
    title: 'Ferrari SF90',
    img: sf90,
    description: "A SF90 Stradale representa a fusão entre o desempenho de pista e a sustentabilidade. É a primeira Ferrari plug-in hybrid, com um motor V8 turbo e três motores elétricos. Capaz de atingir altas velocidades em modo totalmente elétrico, é uma inovação que respeita os desafios ambientais contemporâneos."
  },
  {
    title: 'Ferrari Puro Sangue',
    img: puroSangue,
    description: "O Puro Sangue é um vislumbre do futuro, com um design que incorpora elementos de SUV e coupe esportivo. A Ferrari busca unir versatilidade e desempenho, prometendo uma experiência de condução única. Poucos detalhes foram revelados, mas a expectativa é alta para este modelo inovador."
  },
];

const Item = ({ title, img, description }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate('CarDetail', { title, description, img });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.card}>
        <Image source={img} style={styles.img} />
        <View style={styles.overlay}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Car() {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Text style={[global.title, {marginBottom: 10}]}>Principais Modelos</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FAFAFA',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    overflow: 'hidden',
    
  },
  img: {
    width: '100%',
    height: 200,  // Adjust the height as needed
    borderRadius: 10,
    elevation: 5
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',  // Semi-transparent black overlay
    padding: 20,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: pallet.red,
  },
  description: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});
