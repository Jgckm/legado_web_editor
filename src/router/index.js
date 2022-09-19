import { createRouter, createWebHashHistory } from "vue-router";

import bookSource from "../views/bookSource/bookSource";
import bookBase from "../views/bookSource/bookBase";
import bookSearch from "../views/bookSource/bookSearch";
import bookDirectory from "../views/bookSource/bookDirectory";
import bookContent from "../views/bookSource/bookContent";
import bookDetail from "../views/bookSource/bookDetail";
import bookOther from "../views/bookSource/bookOther";
import bookFind from "../views/bookSource/bookFind";
import bookReview from "../views/bookSource/bookReview";

import rssSource from "../views/rssSource/rssSource";
import rssBase from "../views/rssSource/rssBase";
import rssList from "../views/rssSource/rssList";
import rssWebView from "../views/rssSource/rssWebView";
import rssOther from "../views/rssSource/rssOther";

const routes = [
  {
    path: "/bookSource",
    name: "book-home",
    component: bookSource,
    redirect: { name: "book-base" },
    children: [
      {
        path: "/bookSource/base",
        name: "book-base",
        component: bookBase,
      },
      {
        path: "/bookSource/search",
        name: "book-search",
        component: bookSearch,
      },
      {
        path: "/bookSource/find",
        name: "book-find",
        component: bookFind,
      },
      {
        path: "/bookSource/detail",
        name: "book-detail",
        component: bookDetail,
      },
      {
        path: "/bookSource/directory",
        name: "book-directory",
        component: bookDirectory,
      },
      {
        path: "/bookSource/content",
        name: "book-content",
        component: bookContent,
      },
      {
        path: "/bookSource/review",
        name: "book-review",
        component: bookReview,
      },
      {
        path: "/bookSource/other",
        name: "book-other",
        component: bookOther,
      },
    ],
  },
  {
    path: "/rssSource",
    name: "rss-home",
    component: rssSource,
    redirect: { name: "rss-base" },
    children: [
      {
        path: "/rssSource/base",
        name: "rss-base",
        component: rssBase,
      },
      {
        path: "/rssSource/list",
        name: "rss-list",
        component: rssList,
      },
      {
        path: "/rssSource/webView",
        name: "rss-webView",
        component: rssWebView,
      },
      {
        path: "/rssSource/other",
        name: "rss-other",
        component: rssOther,
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
