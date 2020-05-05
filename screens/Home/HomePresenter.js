import React from 'react'
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions, ActivityIndicator } from "react-native";

const {width, height} = Dimensions.get("screen");

const Container = styled.View`
    flex: 1;
    background-color: black;
    justify-content: center;
`;

const Header = styled.View`
    width: 100%;
    height: ${height / 3}px;
`;

const Section = styled.View`
    background-color: red;
    height: 100%;
`;

const Text = styled.Text``;

export default ({loading, psat}) => (
    <Container>
        {loading ? (
            <ActivityIndicator color="white" size="large" />
        ): (
            <Header>
                <Swiper controlsEnabled={false} loop timeout={3}>
                    {psat.map(item => (
                        // item은 psatInfo의 하위항목을 받아야 한다. 
                        <Section key={item._id}>
                            <Text>{item.title}</Text>
                        </Section>
                    ))}
                </Swiper>
            </Header>
        )}

    </Container>

);