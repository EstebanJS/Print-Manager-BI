import Api from '../../Services/RestApi'
export default {
    namespaced: true,
    state: () => ({
        usersForRoll: []
    }),
    mutations: {
        mtdUsersForRoll(state, data) {
            state.usersForRoll = data
        }
    },
    actions: {
        async actCreateNewUser(context, data) {

            const { status } = await Api().post("/usuario", data)
            if (status === 200) {
                return true
            }
            return false
        },
        async actValidacionCorreoDocumento(context, data) {
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
        async actSearchUser(context, doc) {
            const { status, data } = await Api().get(`/num_doc/${doc}`)
            if (status === 200) {
                return data
            }
            return false
        },
        async actUpdateUser(context, data) {
            const { status } = await Api().put(`/usuario/${data.id_usuario}/`, data)
            if (status === 200) {
                return true
            }
            return false
        },
        async actUsersForRoll(context, id_rol) {
            const { status, data } = await Api().get(`/usuario_x_rol/${id_rol}`)
            if (status === 200) {
                context.commit('mtdUsersForRoll', data)
                return true
            }
            return false
        }

    },
    getters: {
        getUsersForRoll: state => {
            return state.usersForRoll
        }
    }
}