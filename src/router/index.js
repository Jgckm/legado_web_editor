import {
  createRouter,
  createWebHashHistory,
  //   createWebHistory,
} from "vue-router";

import bookSource from "@/views/bookSource";
import bookBase from "@/views/bookBase";
import bookSearch from "@/views/bookSearch";
import bookDirectory from "@/views/bookDirectory";
import bookContent from "@/views/bookContent";
import bookDetail from "@/views/bookDetail";
import bookOther from "@/views/bookOther";
import bookFind from "@/views/bookFind";

const routes = [
  {
    path: "/",
    redirect: { name: "home" },
  },
  {
    path: "/bookSource",
    name: "home",
    component: bookSource,
    redirect: { name: "base" },
    children: [
      {
        path: "/bookSource/base",
        name: "base",
        component: bookBase,
      },
      {
        path: "/bookSource/search",
        name: "search",
        component: bookSearch,
      },
      {
        path: "/bookSource/find",
        name: "find",
        component: bookFind,
      },
      {
        path: "/bookSource/detail",
        name: "detail",
        component: bookDetail,
      },
      {
        path: "/bookSource/directory",
        name: "directory",
        component: bookDirectory,
      },
      {
        path: "/bookSource/content",
        name: "content",
        component: bookContent,
      },
      {
        path: "/bookSource/other",
        name: "other",
        component: bookOther,
      },
    ],
  },
];

const router = createRouter({
  //   history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
});

export default router;
