import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components/native";

const Image = styled.Image`
    width: 100px;
    height: 160px;
    border-radius: 4px;
`;

const Poster = ({url}) => <Image source={require('../../assets/emptyimage.png')} />;

Poster.propTypes = {
    url: PropTypes.string.isRequired
};

export default Poster;