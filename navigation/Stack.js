import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Tabs from "../navigation/Tabs";
import Detail from "../screens/Detail";


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
                drawerIcon: () => (
                <Image source={require("../assets/icon.png")} size={32} />
          )
            }}
        />
        <Stack.Screen name="Detail" component={Detail}/>
    </Stack.Navigator>
);