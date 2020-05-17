import React from 'react'
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, ScrollView, Dimensions } from "react-native";
import Slide from '../../components/Home/Slide';
import Title from '../../components/Home/Title';
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

const Container = styled.View`

`;

const SliderContainer = styled.View`
    width: 100%;
    height: ${HEIGHT / 4}px;
    margin-bottom: 30px;
`;


export default ({loading, psat, ncs}) => (
    <ScrollView
        style={{ backgroundColor: "black" }}
        contentContainerStyle={{
            flex: loading ? 1 : "auto",
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
                <Title title={"NCS LIST"} />
                    <ScrollView 
                        style={{marginTop: 20}}
                        contentContainerStyle={{ paddingLeft: 30}}
                        horizontal 
                        showsHorizontalScrollIndicator={false}  
                            
                    >
                        {ncs.map(item => (
                            <Vertical 
                                key={item._id}
                                thumbnail={item.thumbnail}
                                title={item.title}
                                likes={item.likes}
                                comments={item.comments}
                            />
                        ))}
                    </ScrollView>
                    <Title title={"PSAT LIST"}/>
                    <ScrollView
                        style={{ marginTop: 20, marginBottom: 40 }}
                        contentContainerStyle={{ paddingLeft: 30 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {psat.map(item => (
                            <Vertical 
                                key={item._id}
                                thumbnail={item.thumbnail}
                                title={item.title}
                                likes={item.likes}
                                comments={item.comments}
                            />
                        ))}
                    </ScrollView>
                    <Title title={"NOTICE"}/>
                    {psat.map(item => (
                        <Horizontal 
                            key={item._id}
                            releaseDate={item.createdAt}
                            thumbnail={item.thumbnail}
                            title={item.title}
                            desc={item.desc}
                            likes={item.likes}
                            comments={item.comments}
                        />
                    ))}
                    
                </Container>
                
            </>
        )}

    </ScrollView>
    
);