import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {lectureApi} from '../../api';

export default () => {
    const [lecures, setLectures] = useState({
        ncs: [],
        psat: [],
        ncsError: null,
        psatError: null

    });

    const getData = async () => {
        const [ncs, ncsError] = await lectureApi.ncs();
        const [psat, psatError] = await lectureApi.psat();

        setLectures({
            ncs,
            ncsError,
            psat,
            psatError
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
        </View>
    )
};



