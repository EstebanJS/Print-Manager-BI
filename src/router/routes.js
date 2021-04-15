// Admin Layout
import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// Technical Layout

//Validacion de permisos
import { ValidatePermissions } from '@/lib/guards.js'

// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import AddDevices from "@/pages/Devices/AddDevices"
import EditDevices from "@/pages/Devices/EditDevices"
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";
import EditUser from "@/pages/UserProfile/EditUser.vue"
import AddNewUser from "@/pages/UserProfile/AddNewUser.vue"
import AddNewEmpresa from "@/pages/Empresas/AddNewEmpresa.vue"
import EditEmpresa from "@/pages/Empresas/EditEmpresa.vue"
import AddModelDevices from "@/pages/ModelDevices/AddModelDevices.vue"
import EditModelDevices from "@/pages/ModelDevices/EditModelDevices.vue"
import AddServicio from "@/pages/Servicios/AddServicio.vue"
import AddSeguimiento from '@/pages/Servicios/AddSeguimiento.vue'
import CloseServicio from '@/pages/Servicios/CloseServicio.vue'
import LoginPage from '@/pages/Login/LoginPage.vue'
import Perfil from '@/pages/Perfil/Perfil.vue'
import Encuesta from '@/pages/Encuesta/Encuesta.vue'
import Restablecer from '@/pages/Restablecer/Restablecer.vue'
import ReporteDispositivos from '@/pages/Reportes/ReporteDispositivos.vue'
import ReporteUsuarios from '@/pages/Reportes/ReporteUsuarios.vue'
import ReporteServicios from '@/pages/Reportes/ReporteServicios.vue'

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
        // beforeEnter:(to,from,next)=>{
        //   if(ValidatePermissions(24)) next()
        //   else next({path:'/'})
        // }
      },
      {
        path: "devices/add",
        name: "Agregar Dispositivos",
        component: AddDevices,
        beforeEnter: (to, from, next) => {
          if (ValidatePermissions(9)) next()
          else next({ path: '/' })
        }
      },
      {
        path: "devices/edit",
        name: "Editar Dispositivos",
        component: EditDevices,
        beforeEnter: (to, from, next) => {
          if (ValidatePermissions(10)) next()
          else next({ path: '/' })
        }
      },
      {
        path: "model_devices/add",
        name: "Agregar Modelo Dispositivos",
        component: AddModelDevices,
        beforeEnter: (to, from, next) => {
          if (ValidatePermissions(19)) next()
          else next({ path: '/' })
        }
      },
      {
        path: "model_devices/edit",
        name: "Editar Modelo Dispositivos",
        component: EditModelDevices,
        beforeEnter: (to, from, next) => {
          if (ValidatePermissions(21)) next()
          else next({ path: '/' })
        }
      },
      {
        path: "users",
        name: "users",
        component: UserProfile,
        children: [
          {
            path: "edit",
            name: "Editar Usuario",
            component: EditUser,
            beforeEnter: (to, from, next) => {
              if (ValidatePermissions(6)) next()
              else next({ path: '/' })
            }

          }, {
            path: "add",
            name: "Agregar Usuario",
            component: AddNewUser,
            beforeEnter: (to, from, next) => {
              if (ValidatePermissions(1)) next()
              else next({ path: '/' })
            }
          }
        ]
      },
      {
        path: "servicios/add",
        name: "Agregar Servicio",
        component: AddServicio,
        beforeEnter: (to, from, next) => {
          if (ValidatePermissions(15)) next()
          else next({ path: '/' })
        }
      },
      {
        path: "servicios/add_seguimiento",
        name: "Agregar Seguimiento",
        component: AddSeguimiento,
        beforeEnter: (to, from, next) => {
          if (ValidatePermissions(16)) next()
          else next({ path: '/' })
        }
      },
      {
        path: "servicios/close",
        name: "Finalizar servicio",
        component: CloseServicio,
        beforeEnter: (to, from, next) => {
          if (ValidatePermissions(17)) next()
          else next({ path: '/' })
        }
      },
      {
        path: "empresas/edit",
        name: "Editar Empresa",
        component: EditEmpresa,
        beforeEnter: (to, from, next) => {
          if (ValidatePermissions(23)) next()
          else next({ path: '/' })
        }
      },
      {
        path: "empresas/add",
        name: "Agregar Empresa",
        component: AddNewEmpresa,
        beforeEnter: (to, from, next) => {
          if (ValidatePermissions(22)) next()
          else next({ path: '/' })
        }
      },
      {
        path: "reportes/dispositivos",
        name: "Reporte dispositivos",
        component: ReporteDispositivos,
        beforeEnter: (to, from, next) => {
          if (ValidatePermissions(26)) next()
          else next({ path: '/' })
        }
      },
      {
        path: "reportes/usuarios",
        name: "Reporte usuarios",
        component: ReporteUsuarios,
        beforeEnter: (to, from, next) => {
          if (ValidatePermissions(25)) next()
          else next({ path: '/' })
        }
      },
      {
        path: "reportes/servicios",
        name: "Reporte servicios",
        component: ReporteServicios,
        beforeEnter: (to, from, next) => {
          if (ValidatePermissions(27)) next()
          else next({ path: '/' })
        }
      },
      {
        path: "perfil",
        name: "Perfil",
        component: Perfil,
      },
      // {
      //   path: "notifications",
      //   name: "notifications",
      //   component: Notifications
      // },
      // {
      //   path: "icons",
      //   name: "icons",
      //   component: Icons
      // },
      // {
      //   path: "maps",
      //   name: "maps",
      //   component: Maps
      // },
      // {
      //   path: "typography",
      //   name: "typography",
      //   component: Typography
      // },
      // {
      //   path: "table-list",
      //   name: "table-list",
      //   component: TableList
      // }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage
  },
  {
    path: "/encuesta/:id",
    name: "encuesta",
    component: Encuesta
  },
  {
    path: "/restablecer/:id",
    name: "restablecer",
    component: Restablecer
  },
  { path: "*", component: NotFound }
];



/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
