import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {lectureApi, noticeApi, bbsApi} from '../../api';
import HomePresenter from "./HomePresenter";
import Header from '../../components/Sidebar/Route/Header';

export default () => {
    // const lectures는 빈공간이고, setLectures로 그 안을 채우는 것
    // const notices를 추가하려면, setNotices로 별도 작업으로 그 안을 채우면 된다. 
    const [lectures, setLectures] = useState({
        ncs: [],
        psat: [],
        notice: [],
        bbs: [],
        ncsError: null,
        psatError: null,
        noticeError: null,
        bbsError: null,
        loading: true
    });

    const getData = async () => {
        const [ncs, ncsError] = await lectureApi.ncs();
        const [psat, psatError] = await lectureApi.psat();
        const [notice, noticeError] = await noticeApi.notice();
        const [bbs, bbsError] = await bbsApi.bbs();

        setLectures({
            ncs,
            ncsError,
            psat,
            psatError,
            notice,
            noticeError,
            bbs,
            bbsError,
            loading: false
        });
    };

    useEffect(() => {
        getData();
    }, []);

    return <HomePresenter {...lectures} />;
};



