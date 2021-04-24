import Api from '../../Services/RestApi'
export default {
    namespaced: true,
    state: () => ({
        sesion: {},
        usersForRoll: [],
        ReporteUsuarios: []
    }),
    mutations: {
        mtdUsersForRoll(state, data) {
            state.usersForRoll = data
        },
        mtaSetDataUserSesion(state, data) {
            state.sesion = data
        },
        mtaSetReporteUsuarios(state, data) {
            state.ReporteUsuarios = data
        }
    },
    actions: {
        async actCreateNewUser(_, data) {

            const { status } = await Api().post("/usuario", data)
            if (status === 200) {
                return true
            }
            return false
        },
        async actValidacionCorreoDocumento(_, data) {
            const { numero_Doc, correo } = data
            const { status: stsDocumento, data: dtaDocumento } = await Api().get(`/validar_correo/${numero_Doc}`)
            if (stsDocumento === 200 && Array.isArray(dtaDocumento) && dtaDocumento.length === 0) {
                // console.log('Rest Documento', stsDocumento);
                const { status: stsCorreo, data: dtaCorreo } = await Api().get(`/validar_correo/${correo}`)
                if (stsCorreo === 200 && Array.isArray(dtaDocumento) && dtaCorreo.length === 0) {
                    // console.log('Rest Correo', stsCorreo);
                    return true
                }

            }
            return false
        },
        async actSearchUser(_, doc) {
            const { status, data } = await Api().get(`/num_doc/${doc}`)
            if (status === 200) {
                return data
            }
            return false
        },
        async actUpdateUser(_, data) {
            const { status } = await Api().put(`/usuario/${data.id_usuario}/`, data)
            if (status === 200) {
                return true
            }
            return false
        },
        async actUsersForRoll(context, data) {
            const { status, data: dataRol } = await Api().post(`/usuario_x_rol`, data)
            if (status === 200) {
                return dataRol
            }
            return []
        },
        async actLogin(context, data) {

            const { status, data: UserData } = await Api().post('/validacion_usuario_login', data)

            if (status === 200 && Array.isArray(UserData) && UserData.length > 0) {

                const { status: sts, data: permisos } = await Api().get(`/permisos/${UserData[0].id_Rol}`)
                if (sts === 200) {
                    context.commit('mtaSetDataUserSesion', { UserData: UserData[0], Permisos: permisos })
                    localStorage.setItem('sesion', JSON.stringify({ UserData: UserData[0], Permisos: permisos }))
                    return true
                }
            }
            return false
        },
        async actCheckUserLogin(context) {
            if (localStorage.getItem('sesion')) {
                context.commit('mtaSetDataUserSesion', JSON.parse(localStorage.getItem('sesion')))
                return true
            }
            return false
        },
        async actLogout(context) {
            localStorage.removeItem('sesion')
            context.commit('mtaSetDataUserSesion', {})
            if (localStorage.getItem('sesion')) {
                return false
            }
            location.reload()
            return true
        },
        async actChangePass(_, data) {
            const { status, data: rest } = await Api().post('/cambiar_password', data)
            if (status === 200 && Array.isArray(rest) && rest.length > 0) {
                return true
            }
            return false
        },
        async actReporte(context, data) {
            const { status, data: rest } = await Api().post("/listar_usuarios", data)
            if (status === 200) {
                context.commit("mtaSetReporteUsuarios", rest)
                return true
            }
            return false
        }

    },
    getters: {
        getUsersForRoll: state => {
            return state.usersForRoll
        },
        getValidPermises: state => (id) => {
            if (state.sesion.Permisos) {
                let rest = state.sesion.Permisos.findIndex(item => item.id_Permiso === id)
                return rest > -1 ? true : false
            }
            return false
        },
        getValidSection: state => permisos => {
            for (let permiso of permisos) {
                if (state.sesion.Permisos) {
                    let rest = state.sesion.Permisos.findIndex(item => item.id_Permiso === permiso.id)
                    if (rest > -1) {
                        return true
                    }
                } else {
                    return false
                }
            }
            return false
        },
        getDataUser: state => {
            return state.sesion.UserData
        },
        getReporteUsuarios: state => {
            return state.ReporteUsuarios
        }
    }
}