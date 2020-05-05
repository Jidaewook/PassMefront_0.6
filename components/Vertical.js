import React from 'react'
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Home/Poster";
import { apiImage } from "../api";

const Container = styled.View`

`;

const Title = styled.Text`
    color: white;
`;


const Vertical = ({thumbnail, title}) => (
    <Container>
        <Poster url={apiImage(thumbnail)}/>
        <Title>{title}</Title>
    </Container>
);

Vertical.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Vertical;