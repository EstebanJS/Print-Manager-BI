import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Modules
import users from './users'
import dispositivos from './dispositivos'
import empresa from './empresa'
import modeloDispositivo from './modeloDispositivo'
import servicios from './servicios'
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
        EstadoDispositivoSelect: [],
        EstadoServicioSelect: [],
        TonerSelected: [],
        TipoFallaSelect: [],
        TipoServicioSelect: [],
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
        },
        mtaSetEstadoServicioSelect(state, value) {
            state.EstadoServicioSelect = value
        },
        mtaSetTonerSelected(state, value) {
            state.TonerSelected = value
        },
        mtaSetTipoFallaSelect(state, value) {
            state.TipoFallaSelect = value
        },
        mtaSetTipoServicioSelect(state, value) {
            state.TipoServicioSelect = value
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
        },
        async actLoadEstadoServicioSelect(context) {
            const { status, data } = await Api().get("/estado_servicio")
            if (status === 200) {
                context.commit('mtaSetEstadoServicioSelect', data)
                return true
            } else {
                return false
            }
        },
        async actLoadTonerSelected(context) {
            const { status, data } = await Api().get("/toner")
            if (status === 200) {
                context.commit('mtaSetTonerSelected', data)
                return true
            } else {
                return false
            }
        },
        async actGetUltimaFechaServicio(context, id) {
            const { status, data } = await Api().get(`/ultimo_servicio/${id}`)
            if (status === 200) {
                return data[0].fecha_Solicitud
            }
            return undefined
        },
        async actLoadTipoFallaSelect(context) {
            const { status, data } = await Api().get("/tipo_falla")
            if (status === 200) {
                context.commit('mtaSetTipoFallaSelect', data)
                return true
            }
            return false
        },
        async actLoadTipoServicioSelect(context) {
            const { status, data } = await Api().get("/tipo_servicio")
            if (status === 200) {
                context.commit('mtaSetTipoServicioSelect', data)
                return true
            }
            return false
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
        },
        getEstadoServicioSelect: state => {
            return state.EstadoServicioSelect
        },
        getTonerSelected: state => {
            return state.TonerSelected
        },
        getTipoFallaSelect: state => {
            return state.TipoFallaSelect
        },
        getTipoServicioSelect: state => {
            return state.TipoServicioSelect
        }
    },
    modules: {
        users,
        dispositivos,
        empresa,
        modeloDispositivo,
        servicios
    }
})