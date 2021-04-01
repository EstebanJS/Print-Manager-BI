import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { API_URL } from '@/Config/config.js'
Vue.use(VueAxios, axios)

export default () => {
    return axios.create({
        baseURL: API_URL,
        withCredentials: false,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}




