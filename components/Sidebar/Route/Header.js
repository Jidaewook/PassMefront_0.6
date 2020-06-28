import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Header =({name, openDrawer})=> (
    <View style={styles.header}>
      <TouchableOpacity onPress={()=>openDrawer()}>
        <Ionicons name="ios-menu" size={32} />
      </TouchableOpacity>
      <Text>{name}</Text>
      <Text style={{width:50}}></Text>
    </View>
  )

export default Header;


const styles = StyleSheet.create({
    
    header:{
      width:"100%",
      height:80,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      paddingHorizontal:20,
      backgroundColor: "black"
    }
  });
  