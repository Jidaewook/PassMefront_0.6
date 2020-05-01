import React, { useLayoutEffect } from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";

import Home from "../screens/Home";
import Post from "../screens/Post";
import Search from "../screens/Search";
import Activity from "../screens/Activity";
import Mypage from "../screens/Mypage";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();

const getHeaderName = route => 
    route?.state?.routeNames[route.state.index] || "Home";

export default ({navigation, route}) => {

    useLayoutEffect(() => {
        const name = getHeaderName(route);
        navigation.setOptions({
            title: name
        });
    }, [route])

    return(
        
        <Tabs.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    let iconName = Platform.OS === "ios" ? "ios-" : "md-";
                    if(route.name === "Home"){
                        iconName += "home"
                    } else if (route.name === "Post") {
                        iconName += "add"
                    } else if (route.name === "Search") {
                        iconName += "search"
                    } else if (route.name === "Activity") {
                        iconName += "barcode"
                    } else if (route.name === "Mypage") {
                        iconName += "person"
                    }
                    return (
                        <Ionicons 
                            name={iconName}
                            color={focused ? "white" : "grey"}
                            size={26}
                        />
                    );
                }
            })}  
            tabBarOptions={{
                showLabel: true,
                style: {
                    backgroundColor: "black",
                    borderTopColor: "black"
                }
            }}
        >
            <Tabs.Screen name="Home" component={Home}/>
            <Tabs.Screen name="Post" component={Post}/>
            <Tabs.Screen name="Search" component={Search}/>
            <Tabs.Screen name="Activity" component={Activity}/>
            <Tabs.Screen name="Mypage" component={Mypage}/>
        </Tabs.Navigator>
    );
};