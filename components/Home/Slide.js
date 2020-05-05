import React from 'react'
import styled from "styled-components/native";
import PropTypes from "prop-types";
import {apiImage} from "../../api";


const Container = styled.View`
    width: 100%;
    height: 100%;
`;

const BG = styled.Image`
    width: 100%;
    height: 100%;
    opacity: 0.6;
    position: absolute;
`;

const Content = styled.View`
    flex-direction: row;
`;

const Data = styled.View`
    width: 50%;
`;

const Title = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 18px;
`;

const Desc = styled.Text`
    color: white;
    opacity: 0.7;
`;

const Slide = ({id, title, desc, url, thumbnail, uploadDate}) => (
    <Container>
        <BG source={{ url: apiImage(thumbnail) }} />
        <Content>
            <Data>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
            </Data>
        </Content>
    </Container>
);

Slide.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    uploadDate: PropTypes.string.isRequired
};

export default Slide;