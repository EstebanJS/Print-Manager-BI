import Api from '../../Services/RestApi'
export default {
    namespaced: true,
    state: () => ({
        ModelosDispositivo: []
    }),
    mutations: {
        mtaSetModelosDispositivo(state, data) {
            state.ModelosDispositivo = data
        }
    },
    actions: {
        async actGetModeloDispositivo(context) {
            const { status, data } = await Api().get('/modelo_dispositivo')
            if (status === 200) {
                context.commit('mtaSetModelosDispositivo', data)
                return true
            }
            return false
        },
        async actCreateNewModeloDispositivo(context, data) {
            const { status } = await Api().post('/modelo_dispositivo', data)
            if (status === 200) {
                return true
            }
            return false
        },
        async actUpdateModeloDispositivo(context, data) {
            const { status } = await Api().put(`/modelo_dispositivo/${data.id_Modelo_Dispositivo}`, data)
            if (status === 200) {
                return true
            }
            return false
        },
        async actValidarModelo(context, modelo) {
            const { status, data } = await Api().get(`/validar_modelo/${modelo}`)
            if (status === 200 && Array.isArray(data) && data.length === 0) {
                return true
            }
            return false
        }
    },
    getters: {
        getModelosDispositivo: state => {
            return state.ModelosDispositivo
        }
    }
}