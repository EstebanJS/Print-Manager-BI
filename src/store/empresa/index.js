import Api from '../../Services/RestApi'
export default {
    namespaced: true,
    state: () => ({

    }),
    mutations: {

    },
    actions: {
        async actCreateNewEmpresa(context, data) {
            const { status: stsValidar, data: dtaValidar } = await Api().get(`/validar_empresa/${data.nit_Empresa}`)
            if (stsValidar === 200 && Array.isArray(dtaValidar) && dtaValidar.length === 0) {
                const { status } = await Api().post('/empresa', data)
                if (status === 200) {
                    return true
                }
            }
            return false
        },
        async actSearchEmpresa(context, nit) {
            const { status, data } = await Api().get(`/validar_empresa/${nit}`)
            if (status === 200 && Array.isArray(data) && data.length > 0) {
                return data[0]
            }
            return undefined
        },
        async actUpdateEmpresa(context, data) {
            const { status } = await Api().put(`/empresa/${data.id_Empresa}`, data)
            if (status === 200) {
                return true
            }
            return false
        }
    },
    getters: {

    }
}