import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './Header';


const Home = ({navigation}) => (
    <View style={styles.container}>
        <Header name="Home" openDrawer={navigation.openDrawer}/>
        {/* <Image source ={require("../assets/banner.png")} style={{width:"80%", height:"30%"}} resizeMode="contain"/> */}
        <Text style={{padding:20}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dictum sapien, nec viverra orci. Morbi sed maximus purus. Phasellus quis justo mi. Nunc ut tellus lectus. 
        </Text>
        <Text style={{padding:20}}>
        In eleifend, turpis sit amet suscipit tincidunt, felis ex tempor tellus, at commodo nunc massa rhoncus dui. Vestibulum at malesuada elit.
        </Text>
    
    </View>
)

export default Home;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      paddingTop:40,
      alignItems:"center",
      flex:1
  
    }
  });
  