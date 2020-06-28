import React from 'react';
import {Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../components/Sidebar/Route/Home';
import Profile from '../components/Sidebar/Route/Profile';
// import Settings from '../Route/Setting';
// import Sidebar from '../Sidebar';

import Stack from './Stack';
import Tabs from './Tabs';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Stack} options={{
        title: "Home", 
          drawerIcon: () => (
            <Image source={require("../assets/icon.png")} size={32} />
          )
      }}/>
      <Drawer.Screen name="Profile" component={Profile}/>
    </Drawer.Navigator>
  )
}

// const Drawer = createDrawerNavigator(
//     {
//       Home:{ screen: Home},
//       Profile:{ screen: Profile},
//       Settings:{ screen: Settings}
  
//     },
//     {
//       initialRouteName: "Home",
//       unmountInactiveRoutes: true,
//       headerMode: "none",
//       contentComponent: props => <Sidebar {...props} />
//     }
//   )

export default DrawerNavigator;