import React, {useState} from 'react';
import {AppLoading} from 'expo';
import { Text, Image } from 'react-native';
import {Asset} from 'expo-asset';

//무조건 초기 설정에서 해줘야 하는 사항
const cacheImage = images => 
  images.map(image => {
    if(typeof image === "string"){
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });


export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAsset = async() => {
    const images = cacheImage([
      "https://images.unsplash.com/photo-1584486188544-dc2e1417aff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      require("./assets/splash.png")
    ]);
      console.log(images);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <Text>Ready!</Text>
  ) : (
    <AppLoading
      startAsync={loadAsset}
      onFinish={onFinish}
      onError={console.error}
    />
  );
};