import axios from "./axiosConfig";

//post
const postRegister =(body) => {
    return axios.post(`/api/v1/auth/register`, body)
};

const postLogin =(body) => {
    return axios.post(`/api/v1/auth/login`, body)
};

const postRefills =(body) => {
    return axios.post(`/api/v1/assets/deposit`, body)
};

const postWithdraw =(body) => {
    return axios.post(`/api/v1/assets/withdraw`, body)
};

const postCommand =(body) => {
    return axios.post(`/api/v1/orders`, body)
};


//get
const getListAssets = () => {
    return axios.get(`/api/v1/assets/`)
};


export default {
    //post
    postRegister,
    postLogin,
    postRefills,
    postWithdraw,
    postCommand,

    //get
    getListAssets,
};