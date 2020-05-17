import React from 'react';
import styled from "styled-components";

const Container = styled.Text`
    color: rgb(220, 220, 220);
    margin-bottom: 7px;
    font-weight: 500;
    font-size: 12px;
`;

const Likes = ({likes}) => 
    <Container>
        🔥 {likes}
    </Container>;

export default Likes;
