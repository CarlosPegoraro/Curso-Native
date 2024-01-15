import React from 'react'

import { Text } from 'react-native';
import Banner from './components/Banner';
import Manufactories from './components/Manufactories';

export default function Home() {
    return <Manufactories banner={Banner}/>
}