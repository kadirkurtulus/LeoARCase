import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'


const App = () => {

  const [selectedItem, setSelectedItem] = React.useState(0)

  const data = [
    { id: 1, label: 'All' },
    { id: 2, label: 'Acoustic' },
    { id: 3, label: 'Ambient' },
    { id: 4, label: 'Blues' },
    { id: 5, label: 'Children' },
    { id: 6, label: 'Holiday' },
    { id: 7, label: 'Jazz' },
    { id: 8, label: 'Latin' },
    { id: 9, label: 'Hip Hop' },
    { id: 10, label: 'Rock' },
    { id: 11, label: 'Pop' },
  ]

  const renderItem = ({ item, index }) => {
    let isSelected = index === selectedItem
    return (
      <TouchableOpacity onPress={() => setSelectedItem(index)}>
        <Text style={{ fontSize: 16, fontWeight: '500', color: isSelected ? '#4c4c4c' : '#c0c0c0' }}>
          {item.label}
        </Text>
        {isSelected &&
          <View style={{ height: 1, backgroundColor: 'black', marginTop: 15 }} />
        }
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ ...styles.container, backgroundColor: '#f5f5f5' }}>
      <FlatList
        // style={{ padding: 15 }}
        style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 15, paddingBottom: 1 }}
        keyExtractor={item => item.id.toString()}
        data={data}
        extraData={data}
        renderItem={renderItem}
        horizontal
        ItemSeparatorComponent={() => <View style={{ marginLeft: 10 }} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.89,

    elevation: 5,
  }
})

export default App;