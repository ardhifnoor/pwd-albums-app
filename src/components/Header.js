import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const headerStyle = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
})

class Header extends Component {
  render(){
    return(
      <View style={ headerStyle.viewStyle }>
        <Text style={ headerStyle.textStyle }>
            Albums
        </Text>
      </View>
    )
  }
}

export default Header