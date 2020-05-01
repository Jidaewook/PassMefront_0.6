import React, { useEffect, useLayoutEffect } from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from "../screens/Home";
import Post from "../screens/Post";
import Search from "../screens/Search";
import Activity from "../screens/Activity";
import Mypage from "../screens/Mypage";

const Tabs = createBottomTabNavigator();

const getHeaderName = route => 
    route?.state?.routeNames[route.state.index] || "Home";

export default ({navigation, route}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: getHeaderName(route)
        });
    }, [route])
    return(
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home}/>
            <Tabs.Screen name="Post" component={Post}/>
            <Tabs.Screen name="Search" component={Search}/>
            <Tabs.Screen name="Activity" component={Activity}/>
            <Tabs.Screen name="Mypage" component={Mypage}/>
        </Tabs.Navigator>
    );
};