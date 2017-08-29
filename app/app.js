import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import CounterContainer from './components/containers/counter-container'

const App = () => (
    <View style={styles.container}>
        <Text>Hello World</Text>
        <CounterContainer />
    </View>
);

export default App;