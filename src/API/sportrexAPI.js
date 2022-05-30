import axios from 'axios';

const baseUrl = "https://sportrex-be.herokuapp.com/api/";

export const postAirdrop = (data) => {
    return axios.post(baseUrl + "airdrop", data);
}
export const influencers = (data) => {
    return axios.post(baseUrl + "influencers", data);
}
 export const subscribe = (data) => {
    return axios.post(baseUrl + "subscribe", data);
}
export const presale = (data) => {
    return axios.post(baseUrl + "presale", data);
}

