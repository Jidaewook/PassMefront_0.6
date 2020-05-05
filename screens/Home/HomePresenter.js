import React from 'react'
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, View, Dimensions } from "react-native";
import Slide from '../../components/Home/Slide';

const {width: WIDTH, height: HEIGHT} = Dimensions.get("screen");

const Container = styled.View`
    flex:1;
    background-color: black;
    justify-content: center;
`;

const SliderContainer = styled.View`
    width: ${WIDTH}px;
    height: ${HEIGHT / 4}px;
`;


export default ({loading, psat}) => (
    <Container>
        {loading ? (
            <ActivityIndicator color="white" size="large" />
        ): (
            <SliderContainer>
                <Swiper controlsEnabled={false} loop timeout={3}>
                    {psat.map(item => (
                        <Slide
                            key={item._id}
                            id={item._id}
                            title={item.title}
                            desc={item.desc}
                            thumbnail={item.thumbnail}
                            uploadDate={item.createdAt}
                        />
                    ))}
                </Swiper>
            </SliderContainer>      
        )}

    </Container>

);