import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

const App = () => {

  const insets = useSafeAreaInsets()

  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <Text>Cancel</Text>
      <Text style={styles.text}>Choose Music</Text>
      <Text>Done</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#f6f6f6',
    // paddingTop: 60
    // borderBottomColor: 'darkgray',
    // borderBottomWidth: 1
  },
  text: {
    fontSize: 16,
    fontWeight: '700'
  }
})

export default App