<template>
  <section
    class="login-block"
    style="font-family: Arial, Helvetica, sans-serif"
  >
    <div class="container">
      <div class="row">
        <FormLoginVue v-if="isLogin" v-on:Handler="handler" />
        <FormRecuperarContrasenaVue v-if="!isLogin" v-on:Handler="handler" />
        <div class="col-md-8 banner-sec px-0">
          <div
            id="carouselExampleIndicators"
            class="carousel slide h-100"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="@/assets/img/Img1.jpg"
                  alt="First slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <div class="banner-text">
                    <h2>Print Manager BI</h2>
                    <p>
                      Aplicación WEB para la gestión de servicios de impresión
                      usando inteligencia de negocios
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FormLoginVue from "./FormLogin.vue";
import FormRecuperarContrasenaVue from "./FormRecuperarContraseña.vue";
export default {
  components: {
    FormLoginVue,
    FormRecuperarContrasenaVue,
  },
  data: () => ({
    isLogin: true,
  }),
  methods: {
    handler() {
      this.isLogin = !this.isLogin;
    },
  },
};
</script>

<style>
.login-block {
  background: #7dc2ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #ffcd7d,
    #7dc2ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #ffcd7d,
    #7dc2ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  float: left;
  width: 100%;
  height: 100vh;
  padding: 10% 0;
}
.container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1);
}
.carousel-inner {
  border-radius: 0 10px 10px 0;
}
.carousel-caption {
  text-align: left;
  left: 5%;
}
.login-sec {
  padding: 50px 30px;
  position: relative;
}
.login-sec .copy-text {
  position: absolute;
  width: 80%;
  bottom: 20px;
  font-size: 13px;
  text-align: center;
  bottom: auto;
}
.login-sec .copy-text i {
  color: #7dc2ff;
}
.login-sec .copy-text a {
  color: #7dc2ff;
}
.login-sec h2 {
  margin-bottom: 30px;
  font-weight: 800;
  font-size: 30px;
  color: #7dc2ff;
}
.login-sec h2:after {
  content: " ";
  width: 100px;
  height: 5px;
  background: #ffcd7d;
  display: block;
  margin-top: 20px;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
}
.btn-login {
  background: #7dc2ff;
  color: #fff;
  font-weight: 600;
}
.btn-restore {
  background: #4680b3;
  color: #fff;
  font-weight: 600;
}
.banner-text {
  width: 70%;
  position: absolute;
  bottom: 40px;
  padding-left: 20px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), #ffcd7daf);
  border-radius: 10px 10px 10px 10px;
}
.banner-text h2 {
  color: #3e6180;
  font-weight: 500;
}
.banner-text h2:after {
  content: " ";
  width: 100px;
  height: 5px;
  background: #3e6180;
  display: block;
  margin-top: 20px;
  border-radius: 3px;
}
.banner-text p {
  color: #3e6180;
  font-weight: 600;
}
</style>