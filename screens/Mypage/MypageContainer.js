import React, { useState } from 'react'
import { View, Text} from 'react-native';
import {pageApi} from '../../api';
import MypagePresenter from "./MypagePresenter";

export default () => {
    // const [page, setPage] = useState({
    //     page: [],
    //     pageError: null
    // }); 

    // const getData = async () => {
    //     const [page, pageError] = await pageApi.page();

    //     setPage({
    //         page,
    //         pageError
    //     });
    // };

    // useEffect(() => {
    //     getData ();
    // }, [])

    return (
        <View>
            <Text>
                Page test
            </Text>
        </View>
    );
    
};
