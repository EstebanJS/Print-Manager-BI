import Api from '../../Services/RestApi'
export default {
    namespaced: true,
    state: () => ({
        users: []
    }),
    mutations: {
        mtdAddNewUser(state, data) {
            state.users.unshift(data)
        }
    },
    actions: {
        async actCreateNewUser(context, data) {
            console.log(data);
            const { status } = await Api().post("/usuario", data)
            if (status === 200) {
                return true
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
        }

    },
    getters: {

    }
}