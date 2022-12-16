import axios from "./axiosConfig";

//post
const postAddStock =(body) => {
    return axios.post(`/api/v1/stocks`, body)
};

//get
const getListAssets = () => {
    return axios.get(`/api/v1/assets/`)
};

const getReport = () => {
    return axios.get(`/api/v1/reports/reportDashboard`)
};

const getChart = () => {
    return axios.get(`/api/v1/reports/reportVolumeByDay`)
};


export default {
    //post
    postAddStock,

    //get
    getListAssets,
    getReport,
    getChart,
};