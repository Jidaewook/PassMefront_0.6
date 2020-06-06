import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import {TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Poster from './Home/Poster';
import Likes from './Likes';
import Comments from './Comments';
import { apiImage } from '../api';
import { trimText, formDate } from "../Utils";

const Container = styled.View`
    padding: 0px 30px;
    margin-bottom: 30px;
    flex-direction: row;
    align-items: flex-start;
`;

const Data = styled.View`
    align-items: flex-start;
    width: 60%;
    margin-left: 25px;
`;

const Title = styled.Text`
    color: white;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Desc = styled.Text`
    margin-top: 10px;
    color: white;
`;

const Data2 = styled.View`
    margin-top: 5px;
    width: 60%;
    align-items: center;
    flex-direction: row;
`;

const ReleaseDate = styled.Text`
    color: white;
    font-size: 12px;
`;

const Horizontal = ({id, releaseDate, thumbnail, title, desc, likes, comments}) => {

    const navigation = useNavigation();
    const goToDetail = () => 
        navigation.navigate("Detail", {
            id, 
            releaseDate, 
            thumbnail,
            title,
            desc,
            likes,
            comments
        });

    return (
        <TouchableOpacity onPress={goToDetail}>
            <Container>
                <Poster url={require('../assets/emptyimage.png')}/>
                <Data>
                    <Title>{trimText(title, 15)}</Title>
                    {releaseDate ? (
                        <ReleaseDate>등록일: {formDate(releaseDate)}</ReleaseDate>
                    ) : null }
                    <Desc>{trimText(desc, 50)}</Desc>
                    <Data2>
                        <Likes likes={likes.length}/>
                        <Comments comments={comments.length}/>
                    </Data2>
                </Data>
                
            </Container>
        </TouchableOpacity>
    );

    
};

Horizontal.propTypes = {
    id: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired
};

export default Horizontal;