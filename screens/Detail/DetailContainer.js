import React, {useState, useEffect, useLayoutEffect} from 'react'
import DetailPresenter from "./DetailPresenter";
import {ncsApi} from "../../api";

export default ({
    navigation,
    route: {
        params: {id, title, likes, comments, desc}
    }
}) => {
    const [result, setResult] = useState({
        id,
        title,
        desc,
        comments,
        likes
    });

    const getData = async () => {
        const [getResult, getResultError] = await ncsApi.ncsDetail(id);
        
        console.log("AAA", await ncsApi.ncsDetail(id));

        setResult({
            ...getResult,
            title: getResult.title,
            desc: getResult.desc,
            comments: getResult.comments,
            likes: getResult.likes
        });
        console.log('result is', getResult);

    };

    useEffect(() => {
        getData();
    }, [id]);

    useLayoutEffect(() => {
        navigation.setOptions({title});
    })

    
    return <DetailPresenter {...result}/>
};