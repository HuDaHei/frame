import Vue from "vue";
import VueRouter from "vue-router";
import RouterConig from "./routeconfig/config";
Vue.use(VueRouter);
let router = new VueRouter(RouterConig);


export default router;