import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {lectureApi, noticeApi} from '../../api';

export default () => {
    // const lectures는 빈공간이고, setLectures로 그 안을 채우는 것
    // const notices를 추가하려면, setNotices로 별도 작업으로 그 안을 채우면 된다. 
    const [lecures, setLectures] = useState({
        ncs: [],
        psat: [],
        notice: [],
        ncsError: null,
        psatError: null,
        noticeError: null
    });

    const getData = async () => {
        const [ncs, ncsError] = await lectureApi.ncs();
        const [psat, psatError] = await lectureApi.psat();
        const [notice, noticeError] = await noticeApi.notice();

        setLectures({
            ncs,
            ncsError,
            psat,
            psatError,
            notice,
            noticeError
        });
        
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={{flex: 1, backgroundColor: "black"}}>
            <Text style={{color: "white"}}>
                ncsCount is : {lecures.ncs?.length}
            </Text>
            <Text style={{color: "white"}}>
                psatCount is : {lecures.psat?.length}
            </Text>
            <Text style={{color: "white"}}>
                noticeCount is : {lecures.notice?.length}
            </Text>
        </View>
    )
};



