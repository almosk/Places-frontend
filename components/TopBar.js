import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ImageBackground } from 'react-native';
import { typo, color, COLOR } from '../styles'
import IconArrowLeft from '../assets/icons/arrow-left.svg';
import IconSearch from '../assets/icons/search.svg';
import IconSettings from '../assets/icons/settings.svg';

// Props:
// props.onPress
// props.text
// props.type

// <TouchableOpacity
//   style={styles.backButton}
//   onPress={() => props.navigation.goBack(null)}>
//   <IconArrowLeft width={24} height={24} />
// </TouchableOpacity>


const TopBar = (props) => {
return (
  <View style={styles.topBarContainer}>
    <View style={styles.topBar}>
      <View style={styles.horizontalContainer}>
        <View style={styles.search}>
          <IconSearch style={styles.icon24} width={24} height={24} />
          <Text style = {[styles.postTitle, typo.t16, color.black30]}>Поиск</Text>
        </View>
      </View>
      <View style={styles.horizontalContainer}>
        <Text style = {[styles.city, typo.t16, color.black80]}>MSK</Text>
        {props.type == 'profile' &&
          <IconSettings
            width={24}
            height={24}
            onPress={() => {
              props.navigation.navigate('Settings', {
                // id: props.post.id,
              })
            }}
          />
        }
      </View>
    </View>
  </View>
)}

const styles = StyleSheet.create({
  topBarContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    flex: 1,
    alignSelf: 'stretch',
    right: 0,
    left: 0,
    marginTop: 48,
    padding: 16,
    width: '100%',
    // height: 48,
  },
  topBar: {
    height: 56,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    // backgroundColor: "#F2F2F2",
    marginRight: 8,
    justifyContent: "center",
    alignItems: 'center'
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon24: {
    width: 24,
    height: 24,
    marginRight: 8
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  city: {
    marginRight: 16
  }
})

export default TopBar
