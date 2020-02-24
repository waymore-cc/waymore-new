const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-case-study-js": hot(preferDefault(require("/Users/Shared/Previously Relocated Items/Security/WORK/2020/waymore/src/templates/case-study.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Shared/Previously Relocated Items/Security/WORK/2020/waymore/.cache/dev-404-page.js"))),
  "component---src-pages-case-studies-js": hot(preferDefault(require("/Users/Shared/Previously Relocated Items/Security/WORK/2020/waymore/src/pages/case-studies.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Shared/Previously Relocated Items/Security/WORK/2020/waymore/src/pages/index.js"))),
  "component---src-pages-kontakt-js": hot(preferDefault(require("/Users/Shared/Previously Relocated Items/Security/WORK/2020/waymore/src/pages/kontakt.js"))),
  "component---src-pages-o-nas-js": hot(preferDefault(require("/Users/Shared/Previously Relocated Items/Security/WORK/2020/waymore/src/pages/o-nas.js"))),
  "component---src-pages-oferta-js": hot(preferDefault(require("/Users/Shared/Previously Relocated Items/Security/WORK/2020/waymore/src/pages/oferta.js")))
}

