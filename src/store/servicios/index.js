import Api from '../../Services/RestApi'

export default {
    namespaced: true,
    state: () => ({
    }),
    mutations: {
    },
    actions: {
        async actCreateNewServices(_, data) {
            const { status, } = await Api().post("/servicios", data)
            if (status === 200) {
                const { status: stsServicios, data: dtaServicios } = await Api().get("/servicios")
                if (stsServicios === 200) {
                    return dtaServicios[dtaServicios.length - 1].id_Servicio
                }
            }
            return undefined
        },
        async actSearchService(_, id) {
            const { status, data } = await Api().get(`/servicios/${id}`)
            if (status === 200 && Array.isArray(data) && data.length > 0) {
                return data[0]
            }
            return undefined
        },
        async actCreateNewSeguimiento(_, data) {
            const { status: stsEstado } = await Api().get(`/cambiar_estado_servicio_en_proceso/${data.id_Servicio}`)
            if (stsEstado === 200) {
                const { status: sts } = await Api().post('/seguimientoservicio', data)
                if (sts === 200) {
                    return true
                }
            }
            return false
        },
        async actListarSeguimientoServicio(_, id) {
            const { status, data } = await Api().get(`/listar_seguimiento_x_servicio/${id}`)
            if (status === 200) {
                return data
            }
            return undefined
        },
        async actFinalizarServicio(_, data) {
            const { seguimiento, checkList } = data
            const { status: stsEstado } = await Api().get(`/cambiar_estado_servicio_cerrado/${seguimiento.id_Servicio}`)
            if (stsEstado === 200) {
                const { status: sts } = await Api().post('/seguimientoservicio', seguimiento)
                if (sts === 200) {
                    const { status: sts } = await Api().post('/encuesta_servicio', checkList)
                    if (sts === 200) {
                        return true
                    }
                }
            }
        }
    },
    getters: {}
}