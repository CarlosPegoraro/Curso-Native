import React from "react";
import { Image, Text, ScrollView, StyleSheet, View } from "react-native";

import logo from '../../assets/logoFerrari.png';
import pallet from "../styles/pallet";

const Home = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.title}>A Elegância Veloz da Ferrari</Text>
            </View>
            <Text style={styles.text}>
                No universo automobilístico, poucas marcas conseguem evocar a paixão e o prestígio que a Ferrari ostenta. Desde sua fundação em 1939 por Enzo
                Ferrari, a empresa italiana se estabeleceu como sinônimo de luxo, performance e design inigualáveis.
            </Text>
            <Text style={styles.text}>
                A Ferrari não é apenas uma montadora de carros; é uma verdadeira expressão de arte sobre rodas. Seus veículos não são apenas máquinas de alta
                potência, mas esculturas meticulosamente projetadas, criadas com um compromisso inabalável com a excelência. Cada detalhe, desde a linha
                aerodinâmica até o rugido característico do motor, é uma celebração da engenharia refinada.
            </Text>
            <Text style={styles.text}>
                Os carros da Ferrari encantam não apenas pela sua velocidade deslumbrante, mas também pela sua estética única. O distintivo cavalo empinado sobre
                um fundo amarelo, conhecido como "Cavallino Rampante", tornou-se um ícone reconhecido em todo o mundo, simbolizando o espírito indomável e a
                elegância que a marca incorpora.
            </Text>
            <Text style={styles.text}>
                A marca Ferrari também é uma figura proeminente no cenário das corridas de automóveis, acumulando um impressionante histórico de vitórias nas
                pistas mais desafiadoras do planeta. Cada modelo produzido é uma manifestação da experiência adquirida nas competições, garantindo que a paixão
                pela velocidade seja incorporada em cada carro de rua.
            </Text>
            <Text style={styles.text}>
                A condução de um veículo Ferrari transcende a experiência comum de dirigir. É uma fusão de precisão, potência e emoção, criando uma ligação única entre o condutor e a máquina. Cada curva da estrada se torna uma dança, e cada aceleração é uma sinfonia de desempenho.
            </Text>
            <Text style={styles.text}>
                Em resumo, a Ferrari é mais do que uma marca de carros de luxo. É um ícone cultural, um símbolo de status e uma obra-prima móvel que continua a inspirar entusiastas automotivos em todo o mundo. Experimentar a condução de uma Ferrari é mergulhar em um mundo onde a elegância se encontra com a velocidade, criando uma experiência incomparável que transcende as fronteiras do ordinário.
            </Text>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },  
    logo: {
        width: 200,
        height: 200,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: pallet.red,
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        color: pallet.black,
        marginTop: 10,
        textAlign: 'justify',
    }
});

export default Home;
