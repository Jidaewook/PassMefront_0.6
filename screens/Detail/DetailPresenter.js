import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components/native";
import ScrollContainer from '../../components/ScrollContainer';


const BG = styled.Image`
    
`;

const Header = styled.View``;

const Container = styled.View``;

const Title = styled.Text`
    color: white;    
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 10px;
`;

const Info = styled.View`
    width: 50%;
    margin-left: 40px;
`;

const Data = styled.Text`
    margin-top: 80px;
    padding: 0px 30px;
    color: white;
`;

const DetailPresenter = ({title, id, desc, createdAt, comments, likes}) => (
    
    <ScrollContainer loading={false}>
        <Header>
            <Container>
                <Info>
                    <Title>{title}</Title>
                    <Data>
                        {desc}
                        {/* <Likes likes={likes.length}/>
                        <Comments comments={comments}/> */}
                        {createdAt}
                    </Data>
                    
                </Info>
            </Container>
        </Header>
    </ScrollContainer>
);


export default DetailPresenter;