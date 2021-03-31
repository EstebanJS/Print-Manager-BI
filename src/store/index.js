import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Modules
import users from './users'
//API
import Api from '../Services/RestApi'

export default new Vuex.Store({
    state: {
        EmpresaSelect: []
    },
    mutations: {
        mtaSetEmpresaSelect(state, value) {
            state.EmpresaSelect = value
        }
    },
    actions: {
        async actLoadEmpresaSelect(context) {
            const rest = await Api().get("/empresa")
            console.log(rest);
        }
    },
    getters: {

    },
    modules: {
        users
    }
})