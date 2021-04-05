import Api from '../../Services/RestApi'
export default {
    namespaced: true,
    state: () => ({
    }),
    mutations: {
    },
    actions: {
        async actCreateNewServices(context, data) {
            const { status, } = await Api().post("/servicios", data)
            if (status === 200) {
                const { status: stsServicios, data: dtaServicios } = await Api().get("/servicios")
                if (stsServicios === 200) {
                    return dtaServicios[dtaServicios.length - 1].id_Servicio
                }
            }
            return undefined
        }
    },
    getters: {}
}