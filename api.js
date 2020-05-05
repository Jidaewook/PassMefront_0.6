import axios from "axios";

const makeRequest = (path) => 
    axios.get(`http://localhost:7000${path}`);

const getAnything = async (path, params = {}) => {
    try{
        const {
            data: { results },
            data
        } = await makeRequest(path, params);
        return [results || data, null];
    } catch (e) {
        console.log(e);
        return [null, e];
    }
};

export const lectureApi = {
    ncs: () => getAnything("/lecture/ncs"),
    psat: () => getAnything("/lecture/psat"),
    ncsDetail: id => getAnything(`/lecture/ncs/${id}`),
    psatDetail: id => getAnything(`/lecture/psat/${id}`)
};

export const noticeApi = {
    notice: () => getAnything("/notice"),
    noticeDetail: id => getAnything(`/notice/${id}`)
};

