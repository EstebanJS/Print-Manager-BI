import Api from '../../Services/RestApi'
export default {
    namespaced: true,
    state: () => ({

    }),
    mutations: {

    },
    actions: {
        async actCreateNewEmpresa(context, data) {
            const { status: stsValidarNit, data: dtaValidarNit } = await Api().get(`/validar_empresa/${data.nit_Empresa}`)
            const { status: stsValidarCorreo, data: dtaValidarCorreo } = await Api().get(`/validar_empresa/${data.correo_Empresa}`)
            if (stsValidarNit === 200 && Array.isArray(dtaValidarNit) && dtaValidarNit.length === 0 && stsValidarCorreo === 200 && Array.isArray(dtaValidarCorreo) && dtaValidarCorreo.length === 0) {
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