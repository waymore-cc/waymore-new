module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Waymore Creative Collective","short_name":"Waymore CC","start_url":"/","background_color":"#fff","theme_color":"#fff","display":"standalone","icon":"src/components/assets/images/favicon.png","crossOrigin":"use-credentials"},
    },{
      plugin: require('../node_modules/gatsby-plugin-transition-link/gatsby-browser.js'),
      options: {"plugins":[],"layout":"/Users/Shared/Previously Relocated Items/Security/WORK/2020/waymore/src/components/Layout/Layout.js"},
    },{
      plugin: require('../node_modules/gatsby-plugin-breadcrumb/gatsby-browser.js'),
      options: {"plugins":[],"useAutoGen":true,"autoGenHomeLabel":"home","useClassNames":true,"crumbWrapperStyle":{"display":"flex"}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
