export const ValidatePermissions = (idPermissions) => {
    const sesion = JSON.parse(localStorage.getItem('sesion')) || undefined
    if (sesion) {
        const { Permisos } = sesion
        if (Array.isArray(Permisos)) {
            let rest = Permisos.findIndex(item => item.id_Permiso == idPermissions)
            return rest !== -1 ? true : false
        }
    }
    return false
}