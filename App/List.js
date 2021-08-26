import React from 'react'
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'

const App = () => {

  const data = [
    { id: 1, title: 'Deck the Halls', subTitle: 'Be Still the Earh', type: 'Cinematic' },
    { id: 2, title: 'Rapture', subTitle: 'Ethan Rock', type: 'Rock' },
    { id: 3, title: 'The Wedding Song', subTitle: 'Kalby Knickerbocker', type: 'Pop' },
    { id: 4, title: 'Runways', subTitle: 'Stanley Gurvich', type: 'Electronic' },
    { id: 5, title: '8 Bit Samba', subTitle: 'lan Post', type: 'Electronic' },
    { id: 6, title: 'Five to One', subTitle: 'Steve Poloni', type: 'Acoustic' },
    { id: 7, title: 'Use in Wondering-Alternative Version', subTitle: 'Ziv Moran', type: 'Cinematic' },
    { id: 8, title: 'Deck the Halls', subTitle: 'Be Still the Earh', type: 'Cinematic' },
    { id: 9, title: 'Deck the Halls', subTitle: 'Be Still the Earh', type: 'Cinematic' },
    { id: 10, title: 'Deck the Halls', subTitle: 'Be Still the Earh', type: 'Cinematic' },
  ]

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row' }}>
      <View style={styles.border}>
        <Image style={styles.img}
        />
      </View>
      <View style={{ marginLeft: 10, alignSelf: 'center' }}>
        <Text style={styles.txtTitle}>{item.title}</Text>
        <Text style={styles.txt}>{item.subTitle}</Text>
        <Text style={styles.txt}>#{item.type}</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: 20 }}>
        <TouchableOpacity style={{ backgroundColor: '#f3f3f3', width: 80, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
          <Text style={{ color: '#535353', fontWeight: '600' }}>Choose</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <FlatList
      style={{ padding: 10 }}
      keyExtractor={item => item.id.toString()}
      data={data}
      extraData={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={{ marginTop: 10 }} />}
    />
  )
}

const styles = StyleSheet.create({
  img: {
    width: 70,
    height: 65,
    // borderRadius: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    resizeMode: 'center',
    backgroundColor: 'red',
  },
  border: {
    width: 78,
    height: 72,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // borderRadius: 31,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#d5d5d5'
  },
  txtTitle: {
    fontWeight: '700',
    fontSize: 14,
    color: '#575757', 
    width:150, 
  },
  txt: {
    fontWeight: '500',
    fontSize: 12,
    color: '#757575'
  }
})

export default App