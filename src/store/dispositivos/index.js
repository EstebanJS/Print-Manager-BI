
import Api from '../../Services/RestApi'
export default {
    namespaced: true,
    state: () => ({
        dispositivos:[]
    }),
    mutations: {
        mtaSetDispositivos(state,data){
            state.dispositivos = data
        }   
    },
    actions: {
        async actCreateNewDevice(context, data) {
            /*
                Funsion de crear un nuevo dispositivo larga y con muchos llamados al
                REST API por que Don Miguel es muy mk 🤣😂🤣😂
            */
            const { device, checklist } = data

            const { status } = await Api().post("/checklist", checklist)
            if (status === 200) {
                // console.log(" Create Checklist OK");
                const { status: stsGetLastIdCheckList, data: dtaCheckList } = await Api().get("/checklist_id_mayor ")
                if (stsGetLastIdCheckList === 200) {
                    // console.log(" Get Checklist OK");
                    device.id_Check_List = dtaCheckList[dtaCheckList.length - 1].id_CheckList
                    // console.log("id checklist recuperado", device.id_Check_List);
                    const { status: stsDevice } = await Api().post("/dispositivo", device)
                    if (stsDevice === 200) {
                        // console.log(" Create Device OK");
                        return true
                    }
                }
            }
            return false
        },
        async actSearchDivice(context, serie) {
            const { status, data } = await Api().get(`/dispositivo_x_serie/${serie}`)
            if (status === 200 && Array.isArray(data)) {
                // console.log("Search Divice OK");
                if (data.length > 0) {
                    const { id_Check_List } = data[0]
                    // console.log(id_Check_List);
                    const { status: stsCheckList, data: dtaCheckList } = await Api().get(`/CheckList/${id_Check_List}`)
                    if (stsCheckList === 200 && Array.isArray(dtaCheckList)) {
                        // console.log("Search CheckList");
                        return { status: true, data: { device: { ...data[0] }, checklist: { ...dtaCheckList[0] } } }
                    }
                }
            }
            return { status: false, data: undefined }
        },
        async actEditDevice(context, data) {
            const { device, checklist } = data
            const { status } = await Api().put(`/checklist/${checklist.id_CheckList}`, checklist)
            if (status === 200) {
                // console.log("Update CheckList OK");
                const { status: stsDispositivos } = await Api().put(`/dispositivo/${device.id_Dispositivo}`, device)
                if (stsDispositivos === 200) {
                    // console.log("Update Dispositivo OK");
                    return true
                }
            }
            return false
        },
        async actValidateSerial(context,serie){
            const { status, data } = await Api().get(`/dispositivo_x_serie/${serie}`)
            if(status === 200 && Array.isArray(data) && data.length === 0){
                return true
            }
            return false
        },
        async actGetDispositivos(context){
            const {status,data} = await Api().get("/dispositivo")
            if(status === 200){
                context.commit('mtaSetDispositivos',data)
                return true
            }
            return false
        }
    },
    getters: {
        getDispositivos:state=>{
            return state.dispositivos
        },
        getDispositivo:state => (id) => {
            return state.dispositivos.find(item => item.id_Dispositivo === id)
        }
    }
}