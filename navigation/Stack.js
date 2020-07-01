import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Tabs from "../navigation/Tabs";
import Detail from "../screens/Detail";
import Icon from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

const DrawerIcon = ({ navigate }) => {

    return(
            <Icon
                name = "md-menu"
                size = {38}
                color = "black"
                style = {{paddingLeft : 20}}
                onPress = {() => navigate('DrawerOpen')}
    />
    
        );
    };

export default () => (


    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "black",
                borderBottomColor: "black",
                shadowColor: "black"
            },
            headerTintColor: "white",
            headerBackTitleVisible: false
        }}
    >
   
        <Stack.Screen 
            name="Tabs" 
            component={Tabs}
            options={{
                title: "Hamburger", 
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#9AC4F8" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
            }}
        />
        <Stack.Screen name="Detail" component={Detail}/>
    </Stack.Navigator>
);