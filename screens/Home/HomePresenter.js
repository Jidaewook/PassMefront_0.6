import React from 'react'
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, ScrollView, Dimensions } from "react-native";
import Slide from '../../components/Home/Slide';
import Title from '../../components/Home/Title';

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

const Container = styled.View`

`;

const SliderContainer = styled.View`
    width: ${WIDTH}px;
    height: ${HEIGHT / 4}px;
    margin-bottom: 30px;
`;


export default ({loading, psat}) => (
    <ScrollView
        style={{
            backgroundColor: "black"
        }}

        contentContainerStyle={{
            flex: 1,
            justifyContent: loading ? "center" : "flex-start"
        }}
    >
        {loading ? (
            <ActivityIndicator color="white" size="large" />
        ): (
            <>
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
                <Container>
                    <Title title={"PSAT LIST"}/>
                </Container>
            </>
        )}

    </ScrollView>

);