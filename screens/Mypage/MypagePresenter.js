// import React, { Profiler } from 'react';
// import styled from "styled-components/native";
// import Swiper from "react-native-web-swiper";
// import {ActivityIndicator, ScrollView, Dimensions, Text, View} from "react-native";

// const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

// const Container = styled.View`

// `;

// const SliderContainer = styled.View`
//     width: 100%;
//     height: ${HEIGHT/4}px;
//     margin-bottom: 30px;
// `;

// const CardContainer = styled.View`
//     align-items: center;
//     flex-direction: row;
//     background-Color: white;
// `;


// export default ({loading, page}) => (
  
//     {loading ? (
//         <ActivityIndicator color="white" size="large" />
//     ) : (
//         <>
//         <Title title={"마이페이지"}/>
        
//         {page.map(item => (
//             <CardContainer>
//                 <Card 
//                     key={item.id}
//                     id={item.id}
//                     bio={item.bio}
//                     major={item.major}
//                     location={item.location}
//                     testname={item.testname}
//                     preference={item.preference}
//                     task={item.task}
//                 />
//             </CardContainer>
//         ))}
//         </>
//     )}
    

    

// )