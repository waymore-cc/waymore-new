// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-case-study-js": () => import("../src/templates/case-study.js" /* webpackChunkName: "component---src-templates-case-study-js" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-case-studies-js": () => import("../src/pages/case-studies.js" /* webpackChunkName: "component---src-pages-case-studies-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-kontakt-js": () => import("../src/pages/kontakt.js" /* webpackChunkName: "component---src-pages-kontakt-js" */),
  "component---src-pages-o-nas-js": () => import("../src/pages/o-nas.js" /* webpackChunkName: "component---src-pages-o-nas-js" */),
  "component---src-pages-oferta-js": () => import("../src/pages/oferta.js" /* webpackChunkName: "component---src-pages-oferta-js" */)
}

