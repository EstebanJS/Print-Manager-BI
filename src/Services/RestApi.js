import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

const API_URL = "http://printmanager-001-site1.itempurl.com"

export default() => {
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




