
// RouteConfig = {
//   path: string;
//   component?: Component;
//   name?: string; // 命名路由
//   components?: { [name: string]: Component }; // 命名视图组件
//   redirect?: string | Location | Function;
//   props?: boolean | Object | Function;
//   alias?: string | Array<string>;
//   children?: Array<RouteConfig>; // 嵌套路由
//   beforeEnter?: (to: Route, from: Route, next: Function) => void;
//   meta?: any;

//   // 2.6.0+
//   caseSensitive?: boolean; // 匹配规则是否大小写敏感？(默认值：false)
//   pathToRegexpOptions?: Object; // 编译正则的选项
// }
const routeConfig = [
  {
    path: "/homePage",
    // redirect: "/homePage",
    component: (resolve) => require(['@/pages/layout/head.vue'], resolve)
  },
  {
    path: "/",
    // redirect: "/homePage",
    component: (resolve) => require(['@/pages/layout/article.vue'], resolve)
  }
]
export default { routes: routeConfig };