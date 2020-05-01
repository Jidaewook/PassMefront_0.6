import React from 'react'
import {View, Text, Button} from 'react-native';

export default ({navigation}) => (
    <View style={{flex: 1, backgroundColor: "black"}}>
        <Text>Home</Text>
        <Button 
            onPress={() => navigation.navigate("Detail")}
            title="Go to Detail"
        />
    </View>

)
