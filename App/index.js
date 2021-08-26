import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Header from './Header'
import FloatingMenu from './FloatingMenu'
import List from './List'

const App = () => {
  return (
    <SafeAreaProvider>
    <View style={{ ...styles.container }}>

      <Header />
      <FloatingMenu />
      <List />

    </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#e8e8e8',
  }
})

export default App