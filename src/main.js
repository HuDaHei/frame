import Vue from 'vue';
import App from "./pages/App.vue"
import Router from "./router";



// 创造vue实例
new Vue({
  el: "#app",
  router: Router,
  template: '<App/>',
  render: h => h(App)
  // components: { App }
})