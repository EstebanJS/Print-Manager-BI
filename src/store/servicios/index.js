import Api from '../../Services/RestApi'
import { formatDate } from '../../lib/until'

export default {
    namespaced: true,
    state: () => ({
        ReporteServicios: []
    }),
    mutations: {
        mtaSetReporteServicos(state, data) {
            return state.ReporteServicios = data
        }
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
        async actSearchService({rootState}, id) {
            const { status, data } = await Api().get(`/servicios/${id}`)
            if (status === 200 && Array.isArray(data) && data.length > 0) {
                return {status:200,data:data[0]}
            }
            let Query = {
                "id_Empresa": rootState.users.sesion.UserData.id_Empresa,
                "id_Rol": rootState.users.sesion.UserData.id_Rol,
                "id_Usuario": rootState.users.sesion.UserData.id_Usuario,
                "Columna_Filtro": "null",
                "Valor_Filtro": "null"
            }
            const { status: sta, data: dta } = await Api().post('/listar_servicios',Query)
            if (sta === 200) {
                let target = dta.find(item => item.id_Servicio == id) 
                if(target !== undefined && target.estado_Servicio === "Cerrado") return {status:204,data:undefined}
            }
            return {status:404,data:undefined}
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
            const { status: stsEstado } = await Api().get(`/cambiar_estado_servicio_cerrado/${data.id_Servicio}`)
            if (stsEstado === 200) {
                const { status: sts } = await Api().post('/seguimientoservicio', data)
                if (sts === 200) {
                    return true
                }
            }
        },
        async actReporteServicio(context, data) {
            const { status, data: rest } = await Api().post("/listar_servicios", data)
            if (status === 200) {
                let fixdate = rest.map(item => {
                    item.fecha_Solicitud = formatDate(item.fecha_Solicitud)
                    item.fecha_Cierre = formatDate(item.fecha_Cierre)
                    return item
                })
                context.commit("mtaSetReporteServicos", fixdate)
                return true
            }
            return false
        }
    },
    getters: {
        getReporteServicios: state => {
            return state.ReporteServicios
        }
    }
}