import React from 'react'
import styled from "styled-components/native";
import PropTypes from "prop-types";
import {Dimensions, Image} from "react-native";
import {apiImage} from "../../api";

const {width: WIDTH, height: HEIGHT} = Dimensions.get("screen");

const Container = styled.View`
    width: ${WIDTH}px;
    height: ${HEIGHT / 4}px;
`;

const BG = styled.Image`
    width: 100%;
    height: 100%;
`;

const Slide = ({id, title, desc, url, thumbnail, uploadDate}) => (
    <Container>
        <BG source={{ uri: apiImage(thumbnail) }} />
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