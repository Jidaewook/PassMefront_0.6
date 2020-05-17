import React, {useState} from 'react';
import {AppLoading} from 'expo';
import * as Font from "expo-font";
import { Image, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {Asset} from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import Stack from './navigation/Stack';
import Sidebar from './screens/sidebar';
// import './App.css';

//무조건 초기 설정에서 해줘야 하는 사항
const cacheImage = images => 
  images.map(image => {
    if(typeof image === "string"){
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = fonts => 
  fonts.map(font => [Font.loadAsync(font), Font.loadAsync(font)]);


//  sidebarmenu
// export default function App() {
//   return(
//     <div id="App">
//       <sidebar />
//       <div id="page-wrap">
//         <h1>AppDividend</h1>
//         <h2>Check out our tutorials the side menubar</h2>
//       </div>
//     </div>
//   );
// }

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAsset = async() => {
    const images = cacheImage([
      "https://images.unsplash.com/photo-1584486188544-dc2e1417aff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      require("./assets/splash.png")
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  ) : (
    <AppLoading
      startAsync={loadAsset}
      onFinish={onFinish}
      onError={console.error}
    />
  );
};

