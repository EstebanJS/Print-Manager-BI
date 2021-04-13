// Admin Layout
import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// Technical Layout

// Client Layout

// Manager Layout

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
import ReporteDispositivos from '@/pages/Reportes/ReporteDispositivos.vue'
import ReporteUsuarios from '@/pages/Reportes/ReporteUsuarios.vue'

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [

      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "devices/add",
        name: "Agregar Dispositivos",
        component: AddDevices
      },
      {
        path: "devices/edit",
        name: "Editar Dispositivos",
        component: EditDevices
      },
      {
        path: "model_devices/add",
        name: "Agregar Modelo Dispositivos",
        component: AddModelDevices
      },
      {
        path: "model_devices/edit",
        name: "Editar Modelo Dispositivos",
        component: EditModelDevices
      },
      {
        path: "users",
        name: "users",
        component: UserProfile,
        children: [
          {
            path: "edit",
            name: "Editar Usuario",
            component: EditUser

          }, {
            path: "add",
            name: "Agregar Usuario",
            component: AddNewUser
          }
        ]
      },
      {
        path: "servicios/add",
        name: "Agregar Servicio",
        component: AddServicio
      },
      {
        path: "servicios/add_seguimiento",
        name: "Agregar Seguimiento",
        component: AddSeguimiento
      },
      {
        path: "servicios/close",
        name: "Finalizar servicio",
        component: CloseServicio
      },
      {
        path: "empresas/edit",
        name: "Editar Empresa",
        component: EditEmpresa
      },
      {
        path: "empresas/add",
        name: "Agregar Empresa",
        component: AddNewEmpresa
      },
      {
        path: "reportes/dispositivos",
        name: "Reporte dispositivos",
        component: ReporteDispositivos
      },
      {
        path: "reportes/usuarios",
        name: "Reporte usuarios",
        component: ReporteUsuarios
      },
      {
        path: "perfil",
        name: "Perfil",
        component: Perfil
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
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
