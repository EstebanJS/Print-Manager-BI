<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul>
          <li>
            <router-link :to="{path:'/admin'}">Print Manager BI</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright d-flex flex-wrap">
        &copy; Coded by
        <a target="_blank"> &nbsp; Miguel garnica.</a>&nbsp;
        and <a target="_blank">&nbsp; Sebastián Pérez.</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
</style>
