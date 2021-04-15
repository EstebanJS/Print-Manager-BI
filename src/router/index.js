import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: "active"
});

router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.getItem("sesion") 
  if (to.name === "encuesta") next()
  if (to.name === "restablecer") next()
  else if ( to.name === 'login' && isAuthenticated) next({ path: '/' })
  else if ( to.name !== 'login' && !isAuthenticated) next({ name: 'login' })
  else next()
})

export default router;
