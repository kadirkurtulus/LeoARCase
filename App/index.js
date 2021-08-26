import React from 'react'
import { View, StyleSheet } from 'react-native'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Header from './Header'
const App = () => {
  // const insets = useSafeAreaInsets()
  return (
    <View style={{ ...styles.container, paddingTop: 40 }}>

      <Header />


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  }
})

export default App