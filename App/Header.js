import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const App = () => {
 
  return (
    <View style={styles.container}>
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
    padding: 20
  },
  text: {
    fontSize: 16,
    fontWeight: '700'
  }
})

export default App