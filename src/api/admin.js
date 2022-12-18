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

const postEnable =(body) => {
    return axios.post(`/api/v1/stocks/stock_2/mark_as_enable`, body)
};

const postDisable =(body) => {
    return axios.post(`/api/v1/stocks/sto1ck_2/mark_as_disable`, body)
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

const getAssets= () => {
    return axios.get(`/api/v1/assets`)
};

const getDetailStock = (id) => {
    return axios.get(`/api/v1/sessions/currentReport?symbol=${id}`)
};

export default {
    //post
    postLogin,
    postAddStock,
    postAddAdmin,
    postEnable,
    postDisable,

    //get
    getListAssets,
    getReport,
    getChart,
    getListUser,
    getListStock,
    getAssets,
    getDetailStock,
};