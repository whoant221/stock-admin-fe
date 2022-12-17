import axios from "./axiosConfig";

//post 
const postLogin =(body) => {
    return axios.post(`/api/v1/internal_users/login`, body)
};

const postAddStock =(body) => {
    return axios.post(`/api/v1/stocks`, body)
};

const postAddAdmin =(body) => {
    return axios.post(`/api/v1/internal_users/create`, body)
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

const getListUser = () => {
    return axios.get(`/api/v1/users`)
};

const getListStock = () => {
    return axios.get(`/api/v1/stocks`)
};

const getListStockNow = (id) => {
    return axios.get(`/api/v1/sessions/currentReport?symbol=${id}`)
};


export default {
    //post
    postLogin,
    postAddStock,
    postAddAdmin,

    //get
    getListAssets,
    getReport,
    getChart,
    getListUser,
    getListStock,
    getListStockNow,
};