import axios from "axios";

const instance = axios.create({
    // development
    // baseURL: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/v1`,
    baseURL: `http://localhost:8000`,
    withCredentials: true,

});

export default instance;