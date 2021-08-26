import React from 'react'
import { View, StyleSheet } from 'react-native'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Header from './Header'
import FloatingMenu from './FloatingMenu'

const App = () => {
  // const insets = useSafeAreaInsets()
  return (
    <View style={{ ...styles.container }}>

      <Header />
      <FloatingMenu />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#e8e8e8',
  }
})

export default App