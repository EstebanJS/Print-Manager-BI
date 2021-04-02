import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Modules
import users from './users'
import dispositivos from './dispositivos'
import empresa from './empresa'
//API
import Api from '../Services/RestApi'

export default new Vuex.Store({
    state: {
        EmpresaSelect: [],
        GeneroSelect: [],
        CiudadSelect: [],
        TipDocSelect: [],
        RollSelect: [],
        ModeloDispositivoSelect: [],
        EstadoDispositivoSelect: []
    },
    mutations: {
        mtaSetEmpresaSelect(state, value) {
            state.EmpresaSelect = value
        },
        mtaSetGeneroSelect(state, value) {
            state.GeneroSelect = value
        },
        mtaSetCiudadSelect(state, value) {
            state.CiudadSelect = value
        },
        mtaSetTipDocSelect(state, value) {
            state.TipDocSelect = value
        },
        mtaSetRollSelect(state, value) {
            state.RollSelect = value
        },
        mtaSetModeloDispositivoSelect(state, value) {
            state.ModeloDispositivoSelect = value
        },
        mtaSetEstadoDispositivoSelect(state, value) {
            state.EstadoDispositivoSelect = value
        }

    },
    actions: {
        async actLoadEmpresaSelect(context) {
            const { status, data } = await Api().get("/empresa")
            if (status === 200) {
                context.commit('mtaSetEmpresaSelect', data)
                return true
            } else {
                return false
            }
        },
        async actLoadGeneroSelect(context) {
            const { status, data } = await Api().get("/genero")
            if (status === 200) {
                context.commit('mtaSetGeneroSelect', data)
                return true
            } else {
                return false
            }
        },
        async actLoadCiudadSelect(context) {
            const { status, data } = await Api().get("/ciudad")
            if (status === 200) {
                context.commit('mtaSetCiudadSelect', data)
                return true
            } else {
                return false
            }
        },
        async actLoadTipDocSelect(context) {
            const { status, data } = await Api().get("/tipo_doc")
            if (status === 200) {
                context.commit('mtaSetTipDocSelect', data)
                return true
            } else {
                return false
            }
        },
        async actLoadRollSelect(context) {
            const { status, data } = await Api().get("/rol")
            if (status === 200) {
                context.commit('mtaSetRollSelect', data)
                return true
            } else {
                return false
            }
        },
        async actLoadModeloDispositivoSelect(context) {
            const { status, data } = await Api().get("/modelo_dispositivo")
            if (status === 200) {
                context.commit('mtaSetModeloDispositivoSelect', data)
                return true
            } else {
                return false
            }
        },
        async actLoadEstadoDispositivoSelect(context) {
            const { status, data } = await Api().get("/estado_dispositivo")
            if (status === 200) {
                context.commit('mtaSetEstadoDispositivoSelect', data)
                return true
            } else {
                return false
            }
        }
    },
    getters: {
        getEmpresaSelect: state => {
            return state.EmpresaSelect
        },
        getGeneroSelect: state => {
            return state.GeneroSelect
        },
        getCiudadSelect: state => {
            return state.CiudadSelect
        },
        getTipDocSelect: state => {
            return state.TipDocSelect
        },
        getRollSelect: state => {
            return state.RollSelect
        },
        getModeloDispositivoSelect: state => {
            return state.ModeloDispositivoSelect
        },
        getEstadoDispositivoSelect: state => {
            return state.EstadoDispositivoSelect
        }
    },
    modules: {
        users, 
        dispositivos,
        empresa
    }
})