import React from 'react';
import { Text, View, StyleSheet, FlatList, Alert } from 'react-native';

const Header = ({ title }) => {
  return(
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header;

Header.defaultProps = {
  title: 'Shopping List'
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue'
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center'
  }
})