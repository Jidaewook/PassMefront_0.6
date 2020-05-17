import React from 'react'
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Home/Poster";
import { apiImage } from "../api";
import {TouchableOpacity} from "react-native";
import Likes from "./Likes";
import Comments from "./Comments";
import {trimText, formDate} from '../Utils';

const Container = styled.View`
    align-items: center;
    margin-right: 20px;
`;

const Title = styled.Text`
    color: white;
    font-weight: 500;
    margin: 10px 0px 5px 0px;
`;

const LikesContainer = styled.Text`
    color: white;
    margin: 10px 0px 5px 0px;
`;

const Data = styled.View`
    margin-top: 5px;
    width: 60%;
    align-items: center;
    flex-direction: row;

`;

// const LikeCount = styled.Text`
//     color: white;
// `;

const Vertical = ({id, thumbnail, title, likes, comments}) => (
    <Container>
        <Poster url={apiImage(thumbnail)}/>
        <Title>{trimText(title, 10)}</Title>
        <Data>
            <Likes likes={likes.length}/>
            <Comments comments={comments.length}/>
        </Data>
    </Container>
);

Vertical.propTypes = {
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    likes: PropTypes.array,
    comments: PropTypes.array
}

export default Vertical;