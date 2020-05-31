import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Poster from "./Poster";
import {apiImage} from "../../api";
import trimText from "../../Utils";

const Container = styled.View`
    align-items: flex-start;
    margin-left: 15px;
    flex-direction: column;

`;

const Title = styled.Text`
    color: black;
    font-weight: 500;
    margin: 10px 0px 5px 0px;
`;

const Data = styled.View`
    margin-top: 5px;
    width: 30px;
    align-items: center;
    flex-direction: row;
`;

const Comments = styled.Text`
    color: white;

`;

const Likes = styled.Text`
    color: white;
`;

const Card = ({id, title, likes, comments}) => (
    <Container>
        {/* <Poster url={apiImage(thumbnail)}/> */}
        <Title>{title}</Title>
        <Data>
            <Likes likes={likes.length}/>
            <Comments comments={comments.length}/>
        </Data>
    </Container>
);

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    likes: PropTypes.string,
    comments: PropTypes.string
};

export default Card;