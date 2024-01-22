import React from 'react';

import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import pallet from '../styles/pallet';

export default function Layout({ children }) {
  return <>
    <SafeAreaView style={styles.topBar}>
        <StatusBar backgroundColor={pallet.black} />
        <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        >
            {children}
        </KeyboardAvoidingView>
    </SafeAreaView>
    <SafeAreaView style={styles.bottomBar} />
  </>
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: pallet.red,
        flex: 1
    },
    bottomBar: {
        flex: 0,
        backgroundColor: pallet.red,
    }
})