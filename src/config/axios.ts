import axios from "axios";
const instance = axios.create({

    baseURL: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/v1`,
    withCredentials: true,

});

export default instance;