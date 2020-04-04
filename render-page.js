(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\@reach\\router\\index.js"), require("D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\array\\from.js"), require("D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\map.js"), require("D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\object\\assign.js"), require("D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\set.js"), require("D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\weak-map.js"), require("D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\modules\\web.dom.iterable.js"), require("crypto"), require("fs"), require("D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\lodash\\lodash.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\@reach\\router\\index.js", "D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\array\\from.js", "D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\map.js", "D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\object\\assign.js", "D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\set.js", "D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\weak-map.js", "D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\modules\\web.dom.iterable.js", "crypto", "fs", "D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\lodash\\lodash.js", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\@reach\\router\\index.js"), require("D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\array\\from.js"), require("D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\map.js"), require("D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\object\\assign.js"), require("D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\set.js"), require("D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\weak-map.js"), require("D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\modules\\web.dom.iterable.js"), require("crypto"), require("fs"), require("D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\lodash\\lodash.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\@reach\\router\\index.js"], root["D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\array\\from.js"], root["D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\map.js"], root["D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\object\\assign.js"], root["D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\set.js"], root["D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\weak-map.js"], root["D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\modules\\web.dom.iterable.js"], root["crypto"], root["fs"], root["D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\lodash\\lodash.js"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_fn_array_from__, __WEBPACK_EXTERNAL_MODULE_core_js_fn_map__, __WEBPACK_EXTERNAL_MODULE_core_js_fn_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_fn_set__, __WEBPACK_EXTERNAL_MODULE_core_js_fn_weak_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_crypto__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins=[{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),options:{"plugins":[]}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-manifest/gatsby-ssr */ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js"),options:{"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/gatsby-icon.png"}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-layout/gatsby-ssr */ "./node_modules/gatsby-plugin-layout/gatsby-ssr.js"),options:{"plugins":[]}}];// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]
const apis=__webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js");// Run the specified API in any plugins that have implemented it
module.exports=(api,args,defaultReturn,argTransform)=>{if(!apis[api]){console.log(`This API doesn't exist`,api);}// Run each plugin in series.
// eslint-disable-next-line no-undef
let results=plugins.map(plugin=>{if(!plugin.plugin[api]){return undefined;}const result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args,result});}return result;});// Filter out undefined results.
results=results.filter(result=>typeof result!==`undefined`);if(results.length>0){return results;}else{return[defaultReturn];}};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */ /**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */exports.replaceRenderer=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */exports.onRenderBody=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */exports.onPreRenderHTML=true;/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting Provider components, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */exports.wrapPageElement=true;/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to set up any Provider components that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */exports.wrapRootElement=true;

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function HTML(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html",props.htmlAttributes,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{charSet:"utf-8"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),props.headComponents),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body",props.bodyAttributes,props.preBodyComponents,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:`body`,id:"___gatsby",dangerouslySetInnerHTML:{__html:props.body}}),props.postBodyComponents));}HTML.propTypes={htmlAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,headComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,bodyAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,preBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,body:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,postBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array};

/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");
const emitter=Object(mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();/* harmony default export */ __webpack_exports__["default"] = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/*! exports provided: setMatchPaths, findMatchPath, findPath, cleanPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatchPaths", function() { return setMatchPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findMatchPath", function() { return findMatchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPath", function() { return findPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanPath", function() { return cleanPath; });
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/router/lib/utils */ "./node_modules/@reach/router/lib/utils.js");
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
const pathCache=new Map();let matchPaths=[];const trimPathname=rawPathname=>{const pathname=decodeURIComponent(rawPathname);// Remove the pathPrefix from the pathname.
const trimmedPathname=Object(_strip_prefix__WEBPACK_IMPORTED_MODULE_1__["default"])(pathname,"")// Remove any hashfragment
.split(`#`)[0]// Remove search query
.split(`?`)[0];return trimmedPathname;};/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */const setMatchPaths=value=>{matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */const findMatchPath=rawPathname=>{const trimmedPathname=cleanPath(rawPathname);for(const{matchPath,path}of matchPaths){if(Object(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__["match"])(matchPath,trimmedPathname)){return Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path);}}return null;};// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
const findPath=rawPathname=>{const trimmedPathname=trimPathname(rawPathname);if(pathCache.has(trimmedPathname)){return pathCache.get(trimmedPathname);}let foundPath=findMatchPath(trimmedPathname);if(!foundPath){foundPath=cleanPath(rawPathname);}pathCache.set(trimmedPathname,foundPath);return foundPath;};/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */const cleanPath=rawPathname=>{const trimmedPathname=trimPathname(rawPathname);let foundPath=trimmedPathname;if(foundPath===`/index.html`){foundPath=`/`;}foundPath=Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(foundPath);return foundPath;};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withAssetPrefix, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery, prefetchPathname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetchPathname", function() { return prefetchPathname; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAssetPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withAssetPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
const prefetchPathname=_loader__WEBPACK_IMPORTED_MODULE_4__["default"].enqueue;const StaticQueryContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});function StaticQueryDataRenderer({staticQueryData,data,query,render}){const finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,finalData&&render(finalData),!finalData&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Loading (StaticQuery)"));}const StaticQuery=props=>{const{data,query,render,children}=props;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer,null,staticQueryData=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData}));};const useStaticQuery=query=>{if(typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext!==`function`&&"production"===`development`){throw new Error(`You're likely using a version of React that doesn't support Hooks\n`+`Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);}const context=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);if(context[query]&&context[query].data){return context[query].data;}else{throw new Error(`The result of this StaticQuery could not be fetched.\n\n`+`This is likely a bug in Gatsby and if refreshing the page does not fix it, `+`please open an issue in https://github.com/gatsbyjs/gatsby/issues`);}};StaticQuery.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,query:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,render:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func};function graphql(){throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls `+`are supposed to only be evaluated at compile time, and then compiled away. `+`Unfortunately, something went wrong and the query was left in the compiled code.\n\n`+`Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);}

/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/*! exports provided: BaseLoader, ProdLoader, setLoader, publicLoader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoader", function() { return BaseLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdLoader", function() { return ProdLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoader", function() { return setLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2;}}const preferDefault=m=>m&&m.default||m;const stripSurroundingSlashes=s=>{s=s[0]===`/`?s.slice(1):s;s=s.endsWith(`/`)?s.slice(0,-1):s;return s;};const createPageDataUrl=path=>{const fixedPath=path===`/`?`index`:stripSurroundingSlashes(path);return`${""}/page-data/${fixedPath}/page-data.json`;};const doFetch=(url,method=`GET`)=>new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(method,url,true);req.onreadystatechange=()=>{if(req.readyState==4){resolve(req);}};req.send(null);});const loadPageDataJson=loadObj=>{const{pagePath,retries=0}=loadObj;const url=createPageDataUrl(pagePath);return doFetch(url).then(req=>{const{status,responseText}=req;// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.path===undefined){throw new Error(`not a valid pageData response`);}return Object.assign(loadObj,{status:`success`,payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404 page and it doesn't exist, we're done
if(pagePath===`/404.html`){return Object.assign(loadObj,{status:`failure`});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return loadPageDataJson(Object.assign(loadObj,{pagePath:`/404.html`,notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return Object.assign(loadObj,{status:`error`});}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return loadPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is a failure.
return Object.assign(loadObj,{status:`error`});});};const doesConnectionSupportPrefetch=()=>{if(`connection`in navigator&&typeof navigator.connection!==`undefined`){if((navigator.connection.effectiveType||``).includes(`2g`)){return false;}if(navigator.connection.saveData){return false;}}return true;};const toPageResources=(pageData,component=null)=>{const page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath};return{component,json:pageData.result,page};};class BaseLoader{constructor(loadComponent,matchPaths){// Map of pagePath -> Page. Where Page is an object with: {
//   status: `success` || `error`,
//   payload: PageResources, // undefined if `error`
// }
// PageResources is {
//   component,
//   json: pageData.result,
//   page: {
//     componentChunkName,
//     path,
//     webpackCompilationHash,
//   }
// }
this.pageDb=new Map();this.inFlightDb=new Map();this.pageDataDb=new Map();this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["setMatchPaths"])(matchPaths);}setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner(`disableCorePrefetching`).some(a=>a);}loadPageDataJson(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDataDb.has(pagePath)){return Promise.resolve(this.pageDataDb.get(pagePath));}return loadPageDataJson({pagePath}).then(pageData=>{this.pageDataDb.set(pagePath,pageData);return pageData;});}findMatchPath(rawPath){return Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findMatchPath"])(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
loadPage(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDb.has(pagePath)){const page=this.pageDb.get(pagePath);return Promise.resolve(page.payload);}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}const inFlight=Promise.all([this.loadAppData(),this.loadPageDataJson(pagePath)]).then(allData=>{const result=allData[1];if(result.status===`error`){return{status:`error`};}if(result.status===`failure`){// throw an error so error trackers can pick this up
throw new Error(`404 page could not be found. Checkout https://www.gatsbyjs.org/docs/add-404-page/`);}let pageData=result.payload;const{componentChunkName}=pageData;return this.loadComponent(componentChunkName).then(component=>{const finalResult={createdAt:new Date()};let pageResources;if(!component){finalResult.status=`error`;}else{finalResult.status=`success`;if(result.notFound===true){finalResult.notFound=true;}pageData=Object.assign(pageData,{webpackCompilationHash:allData[0]?allData[0].webpackCompilationHash:``});pageResources=toPageResources(pageData,component);finalResult.payload=pageResources;_emitter__WEBPACK_IMPORTED_MODULE_2__["default"].emit(`onPostLoadPageResources`,{page:pageResources,pageResources});}this.pageDb.set(pagePath,finalResult);// undefined if final result is an error
return pageResources;});})// prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
.then(response=>{this.inFlightDb.delete(pagePath);return response;}).catch(err=>{this.inFlightDb.delete(pagePath);throw err;});this.inFlightDb.set(pagePath,inFlight);return inFlight;}// returns undefined if loading page ran into errors
loadPageSync(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDb.has(pagePath)){return this.pageDb.get(pagePath).payload;}return undefined;}shouldPrefetch(pagePath){// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;}prefetch(pagePath){if(!this.shouldPrefetch(pagePath)){return false;}// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!this.prefetchTriggered.has(pagePath)){this.apiRunner(`onPrefetchPathname`,{pathname:pagePath});this.prefetchTriggered.add(pagePath);}// If a plugin has disabled core prefetching, stop now.
if(this.prefetchDisabled){return false;}const realPath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(pagePath);// Todo make doPrefetch logic cacheable
// eslint-disable-next-line consistent-return
this.doPrefetch(realPath).then(()=>{if(!this.prefetchCompleted.has(pagePath)){this.apiRunner(`onPostPrefetchPathname`,{pathname:pagePath});this.prefetchCompleted.add(pagePath);}});return true;}doPrefetch(pagePath){throw new Error(`doPrefetch not implemented`);}hovering(rawPath){this.loadPage(rawPath);}getResourceURLsForPathname(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);const page=this.pageDataDb.get(pagePath);if(page){const pageResources=toPageResources(page.payload);return[].concat(_toConsumableArray(createComponentUrls(pageResources.page.componentChunkName)),[createPageDataUrl(pagePath)]);}else{return null;}}isPageNotFound(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);const page=this.pageDb.get(pagePath);return page&&page.notFound===true;}loadAppData(retries=0){return doFetch(`${""}/page-data/app-data.json`).then(req=>{const{status,responseText}=req;let appData;if(status!==200&&retries<3){// Retry 3 times incase of failures
return this.loadAppData(retries+1);}// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error(`not a valid app-data response`);}appData=jsonPayload;}catch(err){// continue regardless of error
}}return appData;});}}const createComponentUrls=componentChunkName=>window.___chunkMapping[componentChunkName].map(chunk=>""+chunk);class ProdLoader extends BaseLoader{constructor(asyncRequires,matchPaths){const loadComponent=chunkName=>asyncRequires.components[chunkName]().then(preferDefault);super(loadComponent,matchPaths);}doPrefetch(pagePath){const pageDataUrl=createPageDataUrl(pagePath);return Object(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])(pageDataUrl,{crossOrigin:`anonymous`,as:`fetch`}).then(()=>// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
this.loadPageDataJson(pagePath)).then(result=>{if(result.status!==`success`){return Promise.resolve();}const pageData=result.payload;const chunkName=pageData.componentChunkName;const componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])).then(()=>pageData);});}}let instance;const setLoader=_loader=>{instance=_loader;};const publicLoader={// Deprecated methods. As far as we're aware, these are only used by
// core gatsby and the offline plugin, however there's a very small
// chance they're called by others.
getResourcesForPathname:rawPath=>{console.warn(`Warning: getResourcesForPathname is deprecated. Use loadPage instead`);return instance.i.loadPage(rawPath);},getResourcesForPathnameSync:rawPath=>{console.warn(`Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead`);return instance.i.loadPageSync(rawPath);},enqueue:rawPath=>instance.prefetch(rawPath),// Real methods
getResourceURLsForPathname:rawPath=>instance.getResourceURLsForPathname(rawPath),loadPage:rawPath=>instance.loadPage(rawPath),loadPageSync:rawPath=>instance.loadPageSync(rawPath),prefetch:rawPath=>instance.prefetch(rawPath),isPageNotFound:rawPath=>instance.isPageNotFound(rawPath),hovering:rawPath=>instance.hovering(rawPath),loadAppData:()=>instance.loadAppData()};/* harmony default export */ __webpack_exports__["default"] = (publicLoader);

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (path=>{if(path===undefined){return path;}if(path===`/`){return`/`;}if(path.charAt(path.length-1)===`/`){return path.slice(0,-1);}return path;});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const support=function(feature){if(typeof document===`undefined`){return false;}const fakeLink=document.createElement(`link`);try{if(fakeLink.relList&&typeof fakeLink.relList.supports===`function`){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};const linkPrefetchStrategy=function(url,options){return new Promise((resolve,reject)=>{if(typeof document===`undefined`){reject();return;}const link=document.createElement(`link`);link.setAttribute(`rel`,`prefetch`);link.setAttribute(`href`,url);Object.keys(options).forEach(key=>{link.setAttribute(key,options[key]);});link.onload=resolve;link.onerror=reject;const parentElement=document.getElementsByTagName(`head`)[0]||document.getElementsByName(`script`)[0].parentNode;parentElement.appendChild(link);});};const xhrPrefetchStrategy=function(url){return new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(`GET`,url,true);req.onload=()=>{if(req.status===200){resolve();}else{reject();}};req.send(null);});};const supportedPrefetchStrategy=support(`prefetch`)?linkPrefetchStrategy:xhrPrefetchStrategy;const preFetched={};const prefetch=function(url,options){return new Promise(resolve=>{if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url,options).then(()=>{resolve();preFetched[url]=true;}).catch(()=>{});// 404s are logged to the console anyway
});};/* harmony default export */ __webpack_exports__["default"] = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const preferDefault=m=>m&&m.default||m;if(false){}else if(false){}else{module.exports=()=>null;}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: sanitizeComponents, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeComponents", function() { return sanitizeComponents; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2;}}const React=__webpack_require__(/*! react */ "react");const fs=__webpack_require__(/*! fs */ "fs");const{join}=__webpack_require__(/*! path */ "path");const{renderToString,renderToStaticMarkup}=__webpack_require__(/*! react-dom/server */ "react-dom/server");const{ServerLocation,Router,isRedirect}=__webpack_require__(/*! @reach/router */ "@reach/router");const{get,merge,isObject,flatten,uniqBy,flattenDeep,replace,concat}=__webpack_require__(/*! lodash */ "lodash");const apiRunner=__webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");const syncRequires=__webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");const{version:gatsbyVersion}=__webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json");const stats=JSON.parse(fs.readFileSync(`${process.cwd()}/public/webpack.stats.json`,`utf-8`));const chunkMapping=JSON.parse(fs.readFileSync(`${process.cwd()}/public/chunk-map.json`,`utf-8`));// const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.
const testRequireError=(moduleName,err)=>{const regex=new RegExp(`Error: Cannot find module\\s.${moduleName}`);const firstLine=err.toString().split(`\n`)[0];return regex.test(firstLine);};let Html;try{Html=__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));}catch(err){if(testRequireError(`../src/html`,err)){Html=__webpack_require__(/*! ./default-html */ "./.cache/default-html.js");}else{throw err;}}Html=Html&&Html.__esModule?Html.default:Html;const getPageDataPath=path=>{const fixedPagePath=path===`/`?`index`:path;return join(`page-data`,fixedPagePath,`page-data.json`);};const getPageDataUrl=pagePath=>{const pageDataPath=getPageDataPath(pagePath);return`${""}/${pageDataPath}`;};const getPageDataFile=pagePath=>{const pageDataPath=getPageDataPath(pagePath);return join(process.cwd(),`public`,pageDataPath);};const loadPageDataSync=pagePath=>{const pageDataPath=getPageDataPath(pagePath);const pageDataFile=join(process.cwd(),`public`,pageDataPath);try{const pageDataJson=fs.readFileSync(pageDataFile);return JSON.parse(pageDataJson);}catch(error){// not an error if file is not found. There's just no page data
return null;}};const createElement=React.createElement;const sanitizeComponents=components=>{const componentsArray=ensureArray(components);return componentsArray.map(component=>{// Ensure manifest is always loaded from content server
// And not asset server when an assetPrefix is used
if(false){}return component;});};const ensureArray=components=>{if(Array.isArray(components)){// remove falsy items and flatten
return flattenDeep(components.filter(val=>Array.isArray(val)?val.length>0:val));}else{// we also accept single components, so we need to handle this case as well
return components?[components]:[];}};/* harmony default export */ __webpack_exports__["default"] = ((pagePath,callback)=>{var _postBodyComponents;let bodyHtml=``;let headComponents=[React.createElement("meta",{name:"generator",content:`Gatsby ${gatsbyVersion}`,key:`generator-${gatsbyVersion}`})];let htmlAttributes={};let bodyAttributes={};let preBodyComponents=[];let postBodyComponents=[];let bodyProps={};const replaceBodyHTMLString=body=>{bodyHtml=body;};const setHeadComponents=components=>{headComponents=headComponents.concat(sanitizeComponents(components));};const setHtmlAttributes=attributes=>{htmlAttributes=merge(htmlAttributes,attributes);};const setBodyAttributes=attributes=>{bodyAttributes=merge(bodyAttributes,attributes);};const setPreBodyComponents=components=>{preBodyComponents=preBodyComponents.concat(sanitizeComponents(components));};const setPostBodyComponents=components=>{postBodyComponents=postBodyComponents.concat(sanitizeComponents(components));};const setBodyProps=props=>{bodyProps=merge({},bodyProps,props);};const getHeadComponents=()=>headComponents;const replaceHeadComponents=components=>{headComponents=sanitizeComponents(components);};const getPreBodyComponents=()=>preBodyComponents;const replacePreBodyComponents=components=>{preBodyComponents=sanitizeComponents(components);};const getPostBodyComponents=()=>postBodyComponents;const replacePostBodyComponents=components=>{postBodyComponents=sanitizeComponents(components);};const pageDataRaw=fs.readFileSync(getPageDataFile(pagePath));const pageData=JSON.parse(pageDataRaw);const pageDataUrl=getPageDataUrl(pagePath);const{componentChunkName}=pageData;class RouteHandler extends React.Component{render(){const props={...this.props,...pageData.result,// pathContext was deprecated in v2. Renamed to pageContext
pathContext:pageData.result?pageData.result.pageContext:undefined};const pageElement=createElement(syncRequires.components[componentChunkName],props);const wrappedPage=apiRunner(`wrapPageElement`,{element:pageElement,props},pageElement,({result})=>{return{element:result,props};}).pop();return wrappedPage;}}const routerElement=createElement(ServerLocation,{url:`${""}${pagePath}`},createElement(Router,{id:`gatsby-focus-wrapper`,baseuri:`${""}`},createElement(RouteHandler,{path:`/*`})));const bodyComponent=apiRunner(`wrapRootElement`,{element:routerElement,pathname:pagePath},routerElement,({result})=>{return{element:result,pathname:pagePath};}).pop();// Let the site or plugin render the page component.
apiRunner(`replaceRenderer`,{bodyComponent,replaceBodyHTMLString,setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,pathPrefix:""});// If no one stepped up, we'll handle it.
if(!bodyHtml){try{bodyHtml=renderToString(bodyComponent);}catch(e){// ignore @reach/router redirect errors
if(!isRedirect(e))throw e;}}// Create paths to scripts
let scriptsAndStyles=flatten([`app`,componentChunkName].map(s=>{const fetchKey=`assetsByChunkName[${s}]`;let chunks=get(stats,fetchKey);let namedChunkGroups=get(stats,`namedChunkGroups`);if(!chunks){return null;}chunks=chunks.map(chunk=>{if(chunk===`/`){return null;}return{rel:`preload`,name:chunk};});namedChunkGroups[s].assets.forEach(asset=>chunks.push({rel:`preload`,name:asset}));const childAssets=namedChunkGroups[s].childAssets;for(const rel in childAssets){chunks=concat(chunks,childAssets[rel].map(chunk=>{return{rel,name:chunk};}));}return chunks;})).filter(s=>isObject(s)).sort((s1,s2)=>s1.rel==`preload`?-1:1);// given priority to preload
scriptsAndStyles=uniqBy(scriptsAndStyles,item=>item.name);const scripts=scriptsAndStyles.filter(script=>script.name&&script.name.endsWith(`.js`));const styles=scriptsAndStyles.filter(style=>style.name&&style.name.endsWith(`.css`));apiRunner(`onRenderBody`,{setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,loadPageDataSync,bodyHtml,scripts,styles,pathPrefix:""});scripts.slice(0).reverse().forEach(script=>{// Add preload/prefetch <link>s for scripts.
headComponents.push(React.createElement("link",{as:"script",rel:script.rel,key:script.name,href:`${""}/${script.name}`}));});if(pageData){headComponents.push(React.createElement("link",{as:"fetch",rel:"preload",key:pageDataUrl,href:pageDataUrl,crossOrigin:"anonymous"}));}styles.slice(0).reverse().forEach(style=>{// Add <link>s for styles that should be prefetched
// otherwise, inline as a <style> tag
if(style.rel===`prefetch`){headComponents.push(React.createElement("link",{as:"style",rel:style.rel,key:style.name,href:`${""}/${style.name}`}));}else{headComponents.unshift(React.createElement("style",{"data-href":`${""}/${style.name}`,dangerouslySetInnerHTML:{__html:fs.readFileSync(join(process.cwd(),`public`,style.name),`utf-8`)}}));}});// Add page metadata for the current page
const windowPageData=`/*<![CDATA[*/window.pagePath="${pagePath}";/*]]>*/`;postBodyComponents.push(React.createElement("script",{key:`script-loader`,id:`gatsby-script-loader`,dangerouslySetInnerHTML:{__html:windowPageData}}));// Add chunk mapping metadata
const scriptChunkMapping=`/*<![CDATA[*/window.___chunkMapping=${JSON.stringify(chunkMapping)};/*]]>*/`;postBodyComponents.push(React.createElement("script",{key:`chunk-mapping`,id:`gatsby-chunk-mapping`,dangerouslySetInnerHTML:{__html:scriptChunkMapping}}));// Filter out prefetched bundles as adding them as a script tag
// would force high priority fetching.
const bodyScripts=scripts.filter(s=>s.rel!==`prefetch`).map(s=>{const scriptPath=`${""}/${JSON.stringify(s.name).slice(1,-1)}`;return React.createElement("script",{key:scriptPath,src:scriptPath,async:true});});(_postBodyComponents=postBodyComponents).push.apply(_postBodyComponents,_toConsumableArray(bodyScripts));apiRunner(`onPreRenderHTML`,{getHeadComponents,replaceHeadComponents,getPreBodyComponents,replacePreBodyComponents,getPostBodyComponents,replacePostBodyComponents,pathname:pagePath,pathPrefix:""});const html=`<!DOCTYPE html>${renderToStaticMarkup(React.createElement(Html,Object.assign({},bodyProps,{headComponents:headComponents,htmlAttributes:htmlAttributes,bodyAttributes:bodyAttributes,preBodyComponents:preBodyComponents,postBodyComponents:postBodyComponents,body:bodyHtml,path:pagePath})))}`;callback(null,html);});

/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 *//* harmony default export */ __webpack_exports__["default"] = ((str,prefix=``)=>{if(!prefix){return str;}prefix+=`/`;if(str.substr(0,prefix.length)===prefix){return str.slice(prefix.length-1);}return str;});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const{hot}=__webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");// prefer default export if available
const preferDefault=m=>m&&m.default||m;exports.components={"component---src-pages-404-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/404.js */ "./src/pages/404.js"))),"component---src-pages-about-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/about.js */ "./src/pages/about.js"))),"component---src-pages-contact-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/contact.js */ "./src/pages/contact.js"))),"component---src-pages-home-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/home.js */ "./src/pages/home.js"))),"component---src-pages-index-copy-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/index copy.js */ "./src/pages/index copy.js"))),"component---src-pages-index-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js"))),"component---src-pages-page-2-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/page-2.js */ "./src/pages/page-2.js"))),"component---src-pages-work-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/work.js */ "./src/pages/work.js")))};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@reach/router/lib/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/@reach/router/lib/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      var _isSplat = routeSegment === "*";
      if (_isSplat) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        params["*"] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : (0, _invariant2.default)(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)
var insertParams = function insertParams(path, params) {
  var segments = segmentize(path);
  return "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname, query) {
  return pathname + (query ? "?" + query : "");
};

var reservedNames = ["uri", "path"];

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;

/***/ }),

/***/ "./node_modules/@react-spring/animated/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@react-spring/animated/index.js ***!
  \******************************************************/
/*! exports provided: to, Animated, AnimatedArray, AnimatedInterpolation, AnimatedObject, AnimatedProps, AnimatedStyle, AnimatedValue, addChild, animatedTag, extendAnimated, interpolate, isAnimated, removeChild, toPayload, withAnimated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animated", function() { return Animated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedArray", function() { return AnimatedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedInterpolation", function() { return AnimatedInterpolation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedObject", function() { return AnimatedObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedProps", function() { return AnimatedProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedStyle", function() { return AnimatedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedValue", function() { return AnimatedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addChild", function() { return addChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animatedTag", function() { return animatedTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendAnimated", function() { return extendAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnimated", function() { return isAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChild", function() { return removeChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPayload", function() { return toPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAnimated", function() { return withAnimated; });
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/shared */ "./node_modules/@react-spring/shared/index.js");
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/shared/globals */ "./node_modules/@react-spring/shared/globals.js");
/* harmony import */ var _react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "to", function() { return _react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_2__["createAnimatedInterpolation"]; });

/* harmony import */ var _react_spring_shared_deprecations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-spring/shared/deprecations */ "./node_modules/@react-spring/shared/deprecations.js");
/* harmony import */ var _react_spring_shared_deprecations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_spring_shared_deprecations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);








var _a;

const animatedTag = Symbol.for('isAnimated');
const isAnimated = val => !!(val && val[animatedTag]);
class Animated {
  constructor() {
    this[_a] = true;
    this.children = new Set();
  }
  /** Returns the set of `AnimatedValue` nodes contained by this node. */


  getPayload() {
    return this.payload;
  }
  /** Returns the set of animated nodes that depend on this node. */


  getChildren() {
    return this.children;
  }

  addChild(child) {
    this.children.size || this._attach();
    this.children.add(child);
  }

  removeChild(child) {
    this.children.delete(child);
    this.children.size || this._detach();
  }

}
_a = animatedTag;

class AnimatedObject extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.payload = toPayload(source);
  }

  getValue(animated) {
    const obj = {};
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(this.source, (val, key) => {
      if (isAnimated(val)) {
        obj[key] = val.getValue(animated);
      } else if (!animated) {
        obj[key] = val;
      }
    });
    return obj;
  }

  updatePayload(prev, next) {
    const source = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.source);

    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(source, (val, key) => {
      if (val === prev) source[key] = next;
    });
    this.source = source;
    this.payload = toPayload(source);
  }

  _attach() {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(this.source, addChild, this);
  }

  _detach() {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(this.source, removeChild, this);
  }

}
/** Convert an array or object to a flat payload */

function toPayload(source) {
  const payload = new Set();
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(source, val => {
    if (isAnimated(val)) {
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(val.getPayload(), node => payload.add(node));
    }
  });
  return payload;
}
function addChild(parent) {
  if (isAnimated(parent)) parent.addChild(this);
}
function removeChild(parent) {
  if (isAnimated(parent)) parent.removeChild(this);
}

class AnimatedStyle extends AnimatedObject {
  constructor(style) {
    if (style === void 0) {
      style = {};
    }

    super(style.transform && _react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_2__["createAnimatedTransform"] ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, style, {
      transform: Object(_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_2__["createAnimatedTransform"])(style.transform)
    }) : style);
  }

}

class AnimatedInterpolation extends Animated {
  constructor(source, args) {
    super();
    this.source = source;
    this.calc = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["createInterpolator"])(...args);
  }

  getValue(animated) {
    const args = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].arr(this.source) ? this.source.map(node => node.getValue(animated)) : Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this.source.getValue(animated));
    return this.calc(...args);
  }

  to() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new AnimatedInterpolation(this, args);
  }

  interpolate() {
    Object(_react_spring_shared_deprecations__WEBPACK_IMPORTED_MODULE_3__["deprecateInterpolate"])();
    return this.to(...arguments);
  }

  getPayload() {
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].arr(this.source) ? this.payload || (this.payload = toPayload(this.source)) : this.source.getPayload();
  }

  updatePayload(prev, next) {
    this.payload = void 0;

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].arr(this.source)) {
      const source = [...this.source];
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(source, (val, index) => {
        if (val === prev) source[index] = next;
      });
      this.source = source;
    } else {
      this.source = next;
    }
  }

  _attach() {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this.source), addChild, this);
  }

  _detach() {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this.source), removeChild, this);
  }

}

_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["Globals"].assign({
  createAnimatedStyle: style => new AnimatedStyle(style),
  createAnimatedInterpolation: function createAnimatedInterpolation(parents) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return new AnimatedInterpolation(parents, args);
  }
});

const interpolate = function interpolate() {
  Object(_react_spring_shared_deprecations__WEBPACK_IMPORTED_MODULE_3__["deprecateInterpolate"])();
  return Object(_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_2__["createAnimatedInterpolation"])(...arguments);
};

/** An animated number or a native attribute value */

class AnimatedValue extends Animated {
  constructor(value) {
    super();
    this.views = new Set();
    this.done = false;
    this.value = value;
    this.payload = new Set([this]);

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].num(value)) {
      this.startPosition = value;
      this.lastPosition = value;
    }
  }

  getValue() {
    return this.value;
  }

  setValue(value, flush) {
    this.value = value;

    if (flush !== false) {
      if (!this.views.size) {
        collectViews(this, this.views);
      }

      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(this.views, view => view.update());
    }
  }

  to() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Object(_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_2__["createAnimatedInterpolation"])(this, ...args);
  }

  interpolate() {
    Object(_react_spring_shared_deprecations__WEBPACK_IMPORTED_MODULE_3__["deprecateInterpolate"])();
    return this.to(...arguments);
  }

  reset(isActive) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].num(this.value)) {
      this.startPosition = this.value;
      this.lastPosition = this.value;
      this.lastVelocity = isActive ? this.lastVelocity : undefined;
      this.lastTime = isActive ? this.lastTime : undefined;
      this.startTime = Object(_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_2__["now"])();
    }

    this.done = false;
    this.views.clear();
  } // Do nothing for either of these.


  _attach() {}

  _detach() {}

}
/**
 * This library works by building a directed acyclic graph of dependencies
 * transparently whenever you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the components that depend on our value.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new props that it needs. This two-phase process is
 * necessary because some props (eg: "transform") can have multiple parents.
 */

function collectViews(node, views) {
  if ('update' in node) {
    views.add(node);
  } else {
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(node.getChildren(), child => collectViews(child, views));
  }
}

/** An array of animated nodes */

class AnimatedArray extends AnimatedObject {
  constructor(source) {
    super(source);
  }

  getValue(animated) {
    return this.source.map(node => node.getValue(animated));
  }

  setValue(value, flush) {
    const nodes = this.payload;

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].arr(value)) {
      Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(value.length == nodes.size);
      let i = 0;
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(nodes, node => node.setValue(value[i++], flush));
    } else {
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(nodes, node => node.setValue(value, flush));
    }
  }

  to() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Object(_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_2__["createAnimatedInterpolation"])(this, ...args);
  }

  interpolate() {
    Object(_react_spring_shared_deprecations__WEBPACK_IMPORTED_MODULE_3__["deprecateInterpolate"])();
    return this.to(...arguments);
  }

  updatePayload(prev, next) {
    const source = [...this.source];
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["each"])(source, (val, index) => {
      if (val === prev) source[index] = next;
    });
    this.source = source;
    this.payload = toPayload(source);
  }

}

class AnimatedProps extends AnimatedObject {
  constructor(props, update) {
    super(props.style && _react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_2__["createAnimatedStyle"] ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      style: Object(_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_2__["createAnimatedStyle"])(props.style)
    }) : props);
    this.update = update;
  }

}

const cacheKey = Symbol.for('AnimatedComponent');
const withAnimated = Component => _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].str(Component) ? createAnimatedComponent(Component) : Component[cacheKey] || (Component[cacheKey] = createAnimatedComponent(Component));

const createAnimatedComponent = Component => Object(react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])((rawProps, ref) => {
  const node = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  const props = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  const forceUpdate = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["useForceUpdate"])();
  const nextProps = new AnimatedProps(rawProps, () => {
    if (!node.current) return;
    const didUpdate = Object(_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_2__["applyAnimatedValues"])(node.current, nextProps.getValue(true)); // Re-render the component when native updates fail.

    if (didUpdate === false) {
      forceUpdate();
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    const prevProps = props.current;
    props.current = nextProps; // To avoid causing a cascade of detachment, we must detach
    // the old props only *after* the new props are attached.

    nextProps._attach();

    if (prevProps) {
      prevProps._detach();
    }
  }); // Ensure the latest props are detached on unmount.

  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["useOnce"])(() => () => {
    props.current._detach();
  }); // Functions cannot have refs (see #569)

  const refFn = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(Component) || Component.prototype.isReactComponent ? value => node.current = updateRef(ref, value) : void 0;
  rawProps = Object(_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_2__["getComponentProps"])(nextProps.getValue());
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, Object.assign({}, rawProps, {
    ref: refFn
  }));
});

function updateRef(ref, value) {
  if (ref) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(ref)) ref(value);else ref.current = value;
  }

  return value;
}
/**
 * Pass the given components to `withAnimated` and add the newly animated
 * components to `withAnimated` as properties.
 */


const extendAnimated = (withAnimated, components, lowercase) => {
  components.forEach(Component => {
    let key = getDisplayName(Component);

    if (lowercase) {
      key = key[0].toLowerCase() + key.slice(1);
    }

    withAnimated[key] = withAnimated(Component);
  });
  return withAnimated;
};

const getDisplayName = arg => _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].str(arg) ? arg : arg && _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].str(arg.displayName) ? arg.displayName : _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__["is"].fun(arg) && arg.name || null;


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@react-spring/core/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@react-spring/core/index.js ***!
  \**************************************************/
/*! exports provided: Globals, createInterpolator, interpolate, isAnimated, to, Controller, FrameLoop, Spring, Trail, Transition, config, update, useChain, useSpring, useSprings, useTrail, useTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameLoop", function() { return FrameLoop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spring", function() { return Spring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trail", function() { return Trail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChain", function() { return useChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSprings", function() { return useSprings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTrail", function() { return useTrail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return useTransition; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/shared */ "./node_modules/@react-spring/shared/index.js");
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["Globals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInterpolator", function() { return _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["createInterpolator"]; });

/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var use_memo_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-memo-one */ "./node_modules/use-memo-one/dist/use-memo-one.esm.js");
/* harmony import */ var _react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-spring/shared/globals */ "./node_modules/@react-spring/shared/globals.js");
/* harmony import */ var _react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _react_spring_animated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-spring/animated */ "./node_modules/@react-spring/animated/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _react_spring_animated__WEBPACK_IMPORTED_MODULE_6__["interpolate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAnimated", function() { return _react_spring_animated__WEBPACK_IMPORTED_MODULE_6__["isAnimated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "to", function() { return _react_spring_animated__WEBPACK_IMPORTED_MODULE_6__["to"]; });

/* harmony import */ var _react_spring_shared_stringInterpolation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-spring/shared/stringInterpolation */ "./node_modules/@react-spring/shared/stringInterpolation.js");
/* harmony import */ var _react_spring_shared_stringInterpolation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_react_spring_shared_stringInterpolation__WEBPACK_IMPORTED_MODULE_7__);











/** API
 *  useChain(references, timeSteps, timeFrame)
 */

function useChain(refs, timeSteps, timeFrame) {
  if (timeFrame === void 0) {
    timeFrame = 1000;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (timeSteps) {
      let prevDelay = 0;
      refs.forEach((ref, i) => {
        if (!ref.current) return;
        const controllers = ref.current.controllers;

        if (controllers.length) {
          let delay = timeFrame * timeSteps[i]; // Use the previous delay if none exists.

          if (isNaN(delay)) delay = prevDelay;else prevDelay = delay;
          controllers.forEach(ctrl => {
            ctrl.queue.forEach(props => props.delay += delay);
            ctrl.start();
          });
        }
      });
    } else {
      let p = Promise.resolve();
      refs.forEach(ref => {
        const _ref = ref.current || {},
              controllers = _ref.controllers,
              start = _ref.start;

        if (controllers && controllers.length) {
          // Take the queue of each controller
          const updates = controllers.map(ctrl => {
            const q = ctrl.queue;
            ctrl.queue = [];
            return q;
          }); // Apply the queue when the previous ref stops animating

          p = p.then(() => {
            controllers.forEach((ctrl, i) => ctrl.queue.push(...updates[i]));
            return start();
          });
        } else {
          console.warn('useChain ref has no animations:', ref);
        }
      });
    }
  });
}

function fillArray(length, mapIndex) {
  const arr = [];

  for (let i = 0; i < length; i++) arr.push(mapIndex(i));

  return arr;
}
function withDefault(value, defaultValue) {
  return value == null ? defaultValue : value;
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(obj) ? obj(...args) : obj;
}
/**
 * Extract any properties whose keys are *not* reserved for customizing your
 * animations. All hooks use this function, which means `useTransition` props
 * are reserved for `useSpring` calls, etc.
 */

function getForwardProps(props) {
  const children = props.children,
        config = props.config,
        from = props.from,
        to = props.to,
        ref = props.ref,
        reset = props.reset,
        cancel = props.cancel,
        reverse = props.reverse,
        immediate = props.immediate,
        delay = props.delay,
        lazy = props.lazy,
        items = props.items,
        trail = props.trail,
        unique = props.unique,
        initial = props.initial,
        enter = props.enter,
        leave = props.leave,
        update = props.update,
        onAnimate = props.onAnimate,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        onDestroyed = props.onDestroyed,
        timestamp = props.timestamp,
        attach = props.attach,
        forward = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["children", "config", "from", "to", "ref", "reset", "cancel", "reverse", "immediate", "delay", "lazy", "items", "trail", "unique", "initial", "enter", "leave", "update", "onAnimate", "onStart", "onRest", "onFrame", "onDestroyed", "timestamp", "attach"]);

  return forward;
}

function interpolateTo(props) {
  const to = getForwardProps(props);
  const out = {
    to
  };
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["each"])(props, (val, key) => key in to || (out[key] = val));
  return out;
}
/**
 * This tries to put deleted items back into the given `out` list in correct
 * order. Deleted items must have a `left` and `right` property with key of
 * their sibling which is used to find the correct placement.
 */

function reconcileDeleted(deleted, current) {
  // Copy as we will be mutating the arrays
  deleted = [...deleted];
  current = [...current]; // Used to detect deadlock (when a pass finds 0 siblings)

  let failedTries = 0; // Track where the current pass start/ends

  let passIndex = 0;
  let nextPassIndex = deleted.length; // Insert all deleted items into `current`

  for (let i = 0; i < deleted.length; i++) {
    if (i === nextPassIndex) {
      // Sanity test: Push to end if somehow no siblings were found
      if (passIndex + failedTries === nextPassIndex) {
        for (let j = i; j < deleted.length; j++) {
          const _deleted$j = deleted[j],
                left = _deleted$j.left,
                right = _deleted$j.right,
                deletedItem = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_deleted$j, ["left", "right"]);

          current.push(deletedItem);
        }

        break;
      } // Update local state at the end of each pass


      passIndex = nextPassIndex;
      nextPassIndex = deleted.length;
      failedTries = 0;
    } // The index of the deleted item in `current`


    let index = -1; // Look for the left or right sibling in `current`

    const _deleted$i = deleted[i],
          left = _deleted$i.left,
          right = _deleted$i.right,
          deletedItem = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_deleted$i, ["left", "right"]);

    for (let j = current.length; --j >= 0;) {
      const key = current[j].originalKey;

      if (key === right) {
        index = j;
        break;
      }

      if (key === left) {
        index = j + 1;
        break;
      }
    } // Items with no index are revisited in the next pass


    if (index < 0) {
      failedTries++;
      deleted.push(deleted[i]);
    } else {
      current.splice(index, 0, deletedItem);
    }
  }

  return current;
}
function freeze(obj) {
  if (typeof process !== 'undefined' && "production" === 'development') {
    return Object.freeze(obj);
  }

  return obj;
}

const linear = t => t;

const emptyObj = Object.freeze({});
let nextId = 1;
class Controller {
  constructor(props) {
    this.id = nextId++;
    this.idle = true;
    this.runCount = 0;
    this.destroyed = false;
    this.props = {};
    this.queue = [];
    this.timestamps = {};
    this.values = {};
    this.merged = {};
    this.animated = {};
    this.animations = {};
    this.configs = [];
    this.children = [];
    this.onEndQueue = [];
    this.cancelledAt = 0;
    if (props) this.update(props).start();
  }
  /**
   * Push props into the update queue. The props are used after `start` is
   * called and any delay is over. The props are intelligently diffed to ensure
   * that later calls to this method properly override any delayed props.
   * The `propsArg` argument is always copied before mutations are made.
   */


  update(propsArg) {
    if (!propsArg || this.destroyed) return this;
    const props = interpolateTo(propsArg); // For async animations, the `from` prop must be defined for
    // the Animated nodes to exist before animations have started.

    this._ensureAnimated(props.from, true);

    this._ensureAnimated(props.to);

    props.timestamp = Object(_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_5__["now"])(); // The `delay` prop of every update must be a number >= 0

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(props.delay) && _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].obj(props.to)) {
      const from = props.from || emptyObj;

      for (const key in props.to) {
        this.queue.push(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
          to: {
            [key]: props.to[key]
          },
          from: key in from ? {
            [key]: from[key]
          } : void 0,
          delay: Math.max(0, Math.round(props.delay(key)))
        }));
      }
    } else {
      props.delay = _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].num(props.delay) ? Math.max(0, Math.round(props.delay)) : 0; // Coerce falsy values to undefined for these props

      if (!props.to) props.to = void 0;
      if (!props.from) props.from = void 0;
      this.queue.push(props);
    }

    return this;
  }
  /**
   * Flush the update queue, and call `onEnd` when they have settled.
   *
   * The `onEnd` callback does **not** wait for unsettled updates from previous `start` calls.
   */


  start(onEnd) {
    if (this.queue.length) this._flush(onEnd);else if (onEnd) onEnd();
    return this;
  }
  /** Stop one animation or all animations */


  stop() {
    for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
      keys[_key] = arguments[_key];
    }

    // Stop animations by key
    if (keys.length) {
      for (const key of keys) {
        const index = this.configs.findIndex(config => key === config.key);

        this._stopAnimation(key);

        this.configs[index] = this.animations[key];
      }
    } // Stop all animations
    else if (this.runCount) {
        this.cancelledAt = Object(_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_5__["now"])(); // Update the animation configs

        Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["each"])(this.configs, config => this._stopAnimation(config.key));
        this.configs = Object.values(this.animations); // Exit the frameloop

        if (!this.idle) {
          this._stop();
        }
      }

    return this;
  }
  /** Revert the controller to its initial state */


  reset() {
    // Stop all current animations
    this.stop(); // Revert the internal state

    this.destroyed = false;
    this.props = {};
    this.queue = [];
    this.timestamps = {};
    this.values = {};
    this.merged = {};
    this.animated = {};
    this.animations = {};
    this.configs = [];
    return this;
  }
  /** Prevent all current and future animation */


  destroy() {
    if (!this.destroyed) {
      this.stop();
      this.destroyed = true;
    }
  }
  /** @internal Called by the frameloop */


  onFrame(_ref) {
    let id = _ref[0],
        idle = _ref[1],
        changes = _ref[2];
    if (id !== this.id) return;

    if (changes && changes.length) {
      for (const _ref2 of changes) {
        const key = _ref2[0];
        const value = _ref2[1];
        this.values[key] = value;
      } // The `onFrame` prop always exists when `changes` exists.


      this.props.onFrame(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.values));
    }

    if (idle) {
      this._stop();
    }
  }
  /**
   * Set a prop for the next animations where the prop is undefined. The given
   * value is overridden by the next update where the prop is defined.
   *
   * Ongoing animations are not changed.
   */


  setProp(key, value) {
    this.props[key] = value;
    this.timestamps[key] = Object(_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_5__["now"])();
    return this;
  }
  /** @internal Get the `AnimatedValue` nodes for the given key */


  getPayload(key) {
    const anim = this.animations[key];
    return anim && anim.animatedValues;
  } // Create an Animated node if none exists.


  _ensureAnimated(values, shouldUpdate) {
    if (shouldUpdate === void 0) {
      shouldUpdate = false;
    }

    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].obj(values)) return;

    for (const key in values) {
      const value = values[key];
      let animated = this.animated[key];

      if (animated && shouldUpdate && this.animations[key].isNew) {
        // Ensure the initial value is up-to-date.
        if (animated.setValue) {
          animated.setValue(computeGoalValue(value));
        } else {
          // Derived nodes need to be swapped out.
          animated = null;
        }
      }

      if (!animated) {
        animated = createAnimated(value);

        if (this.animated[key]) {
          // Swap out the old node with the new node.
          moveChildren(this.animated[key], animated);
        }

        this.animated[key] = animated;

        this._stopAnimation(key, true);
      }
    }
  } // Add this controller to the frameloop.


  _start(onEnd) {
    if (this.idle) {
      if (this.configs.some(config => !config.idle)) {
        this.idle = false;
        _react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_5__["frameLoop"].start(this);
      } else if (onEnd) {
        return onEnd();
      }
    }

    if (onEnd) {
      this.onEndQueue.push(onEnd);
    }
  } // Attach our children to the given keys if possible.


  _attach(keys, visited) {
    if (visited === void 0) {
      visited = {};
    }

    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["each"])(this.children, c => {
      if (visited[this.id]) return;
      visited[this.id] = true;
      const attached = keys.filter(key => {
        const payload = c.getPayload(key);

        if (payload) {
          Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["each"])(payload, node => node.done && node.reset(true));
          return true;
        }
      });

      if (attached.length) {
        c._attach(attached, visited);

        c._start();
      }
    });
  } // Remove this controller from the frameloop, and notify any listeners.


  _stop() {
    this.idle = true;
    _react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_5__["frameLoop"].stop(this);
    const onRest = this.props.onRest;

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(onRest)) {
      onRest(this.merged);
    }

    const onEndQueue = this.onEndQueue;

    if (onEndQueue.length) {
      this.onEndQueue = [];
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["each"])(onEndQueue, onEnd => onEnd());
    }
  } // Execute the current queue of prop updates.


  _flush(onEnd) {
    const queue = this.queue.reduce(reduceDelays, []);
    this.queue.length = 0; // Track the number of unsettled updates.

    let runsLeft = Object.keys(queue).length;
    this.runCount += runsLeft; // Any run can finish last.

    const onRunEnd = () => {
      this.runCount--;

      if (! --runsLeft && onEnd) {
        onEnd();
      }
    };

    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["each"])(queue, (props, delay) => {
      if (delay) {
        setTimeout(() => {
          // Cancelling methods touch the `cancelledAt` property
          if (props.timestamp < this.cancelledAt) return;

          this._run(props, onRunEnd);
        }, delay);
      } else {
        this._run(props, onRunEnd);
      }
    });
  } // Update the props and animations


  _run(props, onEnd) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].arr(props.to) || _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(props.to)) {
      this._runAsync(props, onEnd);
    } else if (this._diff(props)) {
      this._animate(props)._start(onEnd);
    } else {
      onEnd();
    }
  } // Start an async chain or an async script.


  _runAsync(_ref3, onEnd) {
    let to = _ref3.to,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref3, ["to"]);

    // Merge other props immediately.
    if (this._diff(props)) {
      this._animate(props);
    } // Async scripts can be declaratively cancelled.


    if (props.cancel === true) {
      this.props.asyncTo = void 0;
      return onEnd();
    } // Never run more than one script at a time


    const timestamp = props.timestamp;

    if (!this._diff({
      asyncTo: to,
      timestamp
    })) {
      return onEnd();
    }

    const isCancelled = () => // Cancelling methods touch the `cancelledAt` property
    timestamp < this.cancelledAt || // Async scripts are also cancelled when a new chain/script begins
    _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(to) && to !== this.props.asyncTo;

    let last;

    const next = props => {
      if (isCancelled()) throw this;
      return (last = new Promise(done => {
        this.update(props).start(done);
      })).then(() => {
        if (isCancelled()) throw this;
      });
    };

    let queue = Promise.resolve();

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].arr(to)) {
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["each"])(to, props => {
        queue = queue.then(() => next(props));
      });
    } else if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(to)) {
      queue = queue.then(() => to(next, this.stop.bind(this)) // Always wait for the last update.
      .then(() => last));
    }

    queue.catch(err => err !== this && console.error(err)).then(onEnd);
  } // Merge every fresh prop. Returns true if one or more props changed.
  // These props cannot trigger an update by themselves:
  //   [delay, config, immediate, reverse, attach]


  _diff(_ref4) {
    let timestamp = _ref4.timestamp,
        delay = _ref4.delay,
        config = _ref4.config,
        immediate = _ref4.immediate,
        reverse = _ref4.reverse,
        attach = _ref4.attach,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref4, ["timestamp", "delay", "config", "immediate", "reverse", "attach"]);

    let changed = false; // Generalized diffing algorithm

    const diffProp = (keys, value, owner) => {
      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].und(value)) return;
      const lastKey = keys[keys.length - 1];

      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].obj(value)) {
        if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].obj(owner[lastKey])) owner[lastKey] = {};

        for (const key in value) {
          diffProp(keys.concat(key), value[key], owner[lastKey]);
        }
      } else {
        const keyPath = keys.join('.');
        const oldTimestamp = this.timestamps[keyPath];

        if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].und(oldTimestamp) || timestamp >= oldTimestamp) {
          this.timestamps[keyPath] = timestamp;
          const oldValue = owner[lastKey];

          if (!isEqual(value, oldValue)) {
            changed = true;
            owner[lastKey] = value;
          }
        }
      }
    };

    if (reverse) {
      const to = props.to;
      props.to = props.from;
      props.from = _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].obj(to) ? to : void 0;
    } // The "attach" prop is called on every diff. It overwrites the "parent" prop.


    props.parent = (attach ? attach(this) : props.parent) || null;
    const oldParent = this.props.parent || null;

    if (props.parent !== oldParent) {
      if (oldParent) oldParent.children.splice(oldParent.children.indexOf(this), 1);
      if (props.parent) props.parent.children.push(this);
    }

    for (const key in props) {
      diffProp([key], props[key], this.props);
    } // These props only affect one update


    if ('reset' in props) this.props.reset = false;
    if ('cancel' in props) this.props.cancel = void 0;
    return changed;
  } // Return true if the given prop was changed by this update


  _isModified(props, prop) {
    return this.timestamps[prop] === props.timestamp;
  } // Update the animation configs. The given props override any default props.


  _animate(props) {
    const _this$props = this.props,
          _this$props$from = _this$props.from,
          from = _this$props$from === void 0 ? emptyObj : _this$props$from,
          _this$props$to = _this$props.to,
          to = _this$props$to === void 0 ? emptyObj : _this$props$to,
          parent = _this$props.parent,
          onAnimate = _this$props.onAnimate,
          onStart = _this$props.onStart;

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(onAnimate)) {
      onAnimate(props, this);
    }

    let isPrevented = _ => false;

    if (props.cancel && this._isModified(props, 'cancel')) {
      // Stop all animations when `cancel` is true
      if (props.cancel === true) {
        this.stop(); // Prevent pending updates from *before* this update only!
        // (This must come after the `stop` call above)

        this.cancelledAt = props.timestamp;
        return this;
      } // Prevent matching properties from animating when
      // `cancel` is a string or array of strings


      const keys = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["toArray"])(props.cancel);

      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].arr(keys) && keys.length) {
        isPrevented = key => keys.indexOf(key) >= 0;

        this.stop(...keys);
      }
    } // Merge `from` values with `to` values


    this.merged = freeze(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, from, to)); // True if any animation was updated

    let changed = false; // The animations that are starting or restarting

    const started = []; // Attach when a new "parent" controller exists.

    const isAttaching = parent && this._isModified(props, 'parent'); // Reduces input { key: value } pairs into animation objects


    for (const key in this.merged) {
      if (isPrevented(key)) continue;
      const state = this.animations[key];

      if (!state) {
        console.warn(`Failed to animate key: "${key}"\n` + `Did you forget to define "from.${key}" for an async animation?`);
        continue;
      } // Reuse the Animated nodes whenever possible


      let animated = state.animated,
          animatedValues = state.animatedValues;
      const value = this.merged[key];
      const goalValue = computeGoalValue(value);
      const currValue = animated.getValue(); // Stop animations with a goal value equal to its current value.

      if (!props.reset && !isAttaching && isEqual(goalValue, currValue)) {
        // The animation might be stopped already.
        if (!state.idle) {
          changed = true;

          this._stopAnimation(key);
        }

        continue;
      } // Replace an animation when its goal value is changed (or it's been reset)


      if (props.reset || isAttaching || !isEqual(goalValue, state.isNew ? currValue : state.goalValue)) {
        const immediate = !!callProp((_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].und(props.immediate) ? this.props : props).immediate, key);
        const isActive = animatedValues.some(node => !node.done);
        const fromValue = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].und(from[key]) ? computeGoalValue(from[key]) : goalValue; // Animatable strings use interpolation

        const isInterpolated = isAnimatableString(value);

        if (isInterpolated) {
          const output = [props.reset ? fromValue : currValue, goalValue];
          let input = animatedValues[0];

          if (input) {
            input.setValue(0, false);
            input.reset(isActive);
          } else {
            input = new _react_spring_animated__WEBPACK_IMPORTED_MODULE_6__["AnimatedValue"](0);
          }

          try {
            const prev = animated;
            animated = input.to({
              output
            });
            moveChildren(prev, animated);
          } catch (err) {
            console.warn('Failed to interpolate string from "%s" to "%s"', output[0], output[1]);
            console.error(err);
            continue;
          }

          if (_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_5__["skipAnimation"]) {
            input.setValue(1);

            this._stopAnimation(key);

            continue;
          }

          if (immediate) {
            input.setValue(1, false);
          }
        } else {
          // Convert values into Animated nodes (reusing nodes whenever possible)
          if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].arr(value)) {
            if (animated instanceof _react_spring_animated__WEBPACK_IMPORTED_MODULE_6__["AnimatedArray"]) {
              if (props.reset) animated.setValue(fromValue, false);
              Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["each"])(animatedValues, node => node.reset(isActive));
            } else {
              const prev = animated;
              animated = createAnimated(fromValue);
              moveChildren(prev, animated);
            }
          } else {
            if (animated instanceof _react_spring_animated__WEBPACK_IMPORTED_MODULE_6__["AnimatedValue"]) {
              if (props.reset) animated.setValue(fromValue, false);
              animated.reset(isActive);
            } else {
              const prev = animated;
              animated = new _react_spring_animated__WEBPACK_IMPORTED_MODULE_6__["AnimatedValue"](fromValue);
              moveChildren(prev, animated);
            }
          }

          if (_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_5__["skipAnimation"]) {
            animated.setValue(goalValue);

            this._stopAnimation(key);

            continue;
          }

          if (immediate) {
            animated.setValue(goalValue, false);
          }
        } // Only change the "config" of updated animations.


        const config = callProp(props.config, key) || callProp(this.props.config, key) || emptyObj;

        if (!(immediate || _react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_5__["skipAnimation"])) {
          started.push(key);
        }

        const fromValues = animatedValues.map(v => v.getValue());
        const toValues = parent && parent.getPayload(key) || Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["toArray"])(isInterpolated ? 1 : goalValue);
        changed = true;
        this.animations[key] = {
          key,
          idle: false,
          goalValue,
          toValues,
          fromValues,
          animated,
          animatedValues: Array.from(animated.getPayload()),
          immediate,
          duration: config.duration,
          easing: withDefault(config.easing, linear),
          decay: config.decay,
          mass: withDefault(config.mass, 1),
          tension: withDefault(config.tension, 170),
          friction: withDefault(config.friction, 26),
          initialVelocity: withDefault(config.velocity, 0),
          clamp: withDefault(config.clamp, false),
          precision: withDefault(config.precision, 0.005),
          config
        };
      }
    }

    if (changed) {
      if (started.length) {
        this._attach(started);

        if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(onStart)) Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["each"])(started, key => {
          onStart(this.animations[key]);
        });
      } // Make animations available to the frameloop


      const keys = Object.keys(this.animations);
      this.configs.length = keys.length;
      Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["each"])(keys, (key, i) => {
        const config = this.animations[key];
        this.configs[i] = config;
        this.values[key] = config.animated.getValue();
        this.animated[key] = config.animated;
      });
    }

    return this;
  }
  /**
   * Stop an animation by its key.
   *
   * This mutates the `timestamps.to[key]`, `props.to[key]`, and `animations[key]` properties.
   * Notably, it does *not* mutate the `configs[key]` or `animated[key]` properties.
   */


  _stopAnimation(key, isNew) {
    const animated = this.animated[key];

    if (!animated) {
      return console.warn(`Cannot stop an animation for a key that isn't animated: "${key}"`);
    } // Prevent any pending updates to this key


    this.timestamps['to.' + key] = Object(_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_5__["now"])(); // Idle animations are skipped unless their Animated node changed

    const state = this.animations[key] || emptyObj;
    if (state.idle && animated === state.animated) return; // Use the previous `isNew` value if nothing was passed

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].und(isNew)) {
      isNew = !!state.isNew;
    } // Tell the frameloop to skip animating these values


    const animatedValues = Array.from(animated.getPayload());
    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["each"])(animatedValues, node => {
      node.done = true;
    }); // The current value becomes the goal value,
    // which ensures the integrity of the diffing algorithm.

    const goalValue = animated.getValue();

    if (this.props.to) {
      this.props.to[key] = goalValue;
    } // Remove unused data from this key's animation config


    this.animations[key] = {
      key,
      idle: true,
      isNew,
      goalValue,
      animated,
      animatedValues
    };
  }

}
/** Wrap any value with an `Animated` node */

function createAnimated(value) {
  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].arr(value) ? new _react_spring_animated__WEBPACK_IMPORTED_MODULE_6__["AnimatedArray"](value.map(createAnimated)) : isAnimatableString(value) ? // Convert "red" into "rgba(255, 0, 0, 1)" etc
  new _react_spring_animated__WEBPACK_IMPORTED_MODULE_6__["AnimatedValue"](0).to({
    output: [value, value]
  }) : // The `AnimatedValue` class supports any type, but only numbers are
  // interpolated by the frameloop.
  new _react_spring_animated__WEBPACK_IMPORTED_MODULE_6__["AnimatedValue"](value);
}
/**
 * Replace an `Animated` node in the graph.
 * This is most useful for async updates, which don't cause a re-render.
 */


function moveChildren(prev, next) {
  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["each"])(Array.from(prev.getChildren()), child => {
    child.updatePayload(prev, next);
    prev.removeChild(child);
    next.addChild(child);
  });
} // Merge updates with the same delay.
// NOTE: Mutation of `props` may occur!


function reduceDelays(merged, props) {
  const prev = merged[props.delay];

  if (prev) {
    props.to = merge(prev.to, props.to);
    props.from = merge(prev.from, props.from);
    Object.assign(prev, props);
  } else {
    merged[props.delay] = props;
  }

  return merged;
}

function merge(dest, src) {
  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].obj(dest) && _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].obj(src) ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dest, src) : src || dest;
} // Not all strings can be animated (eg: {display: "none"})


function isAnimatableString(value) {
  if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].str(value)) return false;
  return value.startsWith('#') || /\d/.test(value) || !!(_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_5__["colorNames"] && _react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_5__["colorNames"][value]);
} // Compute the goal value, converting "red" to "rgba(255, 0, 0, 1)" in the process


function computeGoalValue(value) {
  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].arr(value) ? value.map(computeGoalValue) : isAnimatableString(value) ? Object(_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_5__["createStringInterpolator"])({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
} // Compare animatable values


function isEqual(a, b) {
  if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].arr(a)) {
    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].arr(b) || a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }

    return true;
  }

  return a === b;
}

/** API
 * const props = useSprings(number, [{ ... }, { ... }, ...])
 * const [props, set] = useSprings(number, (i, controller) => ({ ... }))
 */

const useSprings = (length, propsArg, deps) => {
  const hasNewSprings = length !== Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["usePrev"])(length);
  const isFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(propsArg);
  const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    springs: [],
    ref: null
  }).current; // The `propsArg` coerced into an array

  const props = isFn ? [] : propsArg; // Recreate the controllers whenever `length` changes

  const springs = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_4__["useMemoOne"])(() => fillArray(length, i => {
    const s = new Controller();
    const p = props[i] || (props[i] = callProp(propsArg, i, s));
    return s.update(p);
  }), [length]);

  const _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    /** Apply any pending updates */
    start: () => Promise.all(state.springs.map(s => new Promise(done => s.start(done)))),

    /** Update the spring controllers */
    update: props => {
      const isFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(props);
      const isArr = _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].arr(props);
      state.springs.forEach((spring, i) => {
        spring.update(isFn ? callProp(props, i, spring) : isArr ? props[i] : props);
        if (!state.ref) spring.start();
      });
    },

    /** Stop one key or all keys from animating */
    stop: function stop() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return state.springs.forEach(s => s.stop(...args));
    }
  }), []),
        start = _useMemo.start,
        update = _useMemo.update,
        stop = _useMemo.stop;

  const ref = props[0] ? props[0].ref : isFn ? state.ref : null;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, () => ({
    start,
    stop,

    get controllers() {
      return state.springs;
    }

  })); // Once mounted, update the local state and start any animations.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isFn || hasNewSprings) {
      props.forEach((p, i) => {
        // Set default props for async updates
        springs[i].setProp('config', p.config);
        springs[i].setProp('immediate', p.immediate);
      });
    }

    if (hasNewSprings) {
      state.springs.forEach(s => s.destroy());
      state.springs = springs;
      state.ref = ref;

      if (!ref) {
        springs.forEach(s => s.start());
      }
    } else if (!isFn) {
      update(props);
    }
  }, deps); // Destroy the controllers on unmount

  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["useOnce"])(() => () => {
    state.springs.forEach(s => s.destroy());
  });
  const values = springs.map(s => Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, s.animated));
  return isFn ? [values, update, stop] : values;
};

/** API
 * const props = useSpring({ ... })
 * const [props, set] = useSpring(() => ({ ... }))
 */

const useSpring = (props, deps) => {
  const isFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(props);

  const _useSprings = useSprings(1, isFn ? props : [props], deps),
        result = _useSprings[0],
        set = _useSprings[1],
        stop = _useSprings[2];

  return isFn ? [result[0], set, stop] : result;
};

/** API
 * const trails = useTrail(number, { ... })
 * const [trails, set] = useTrail(number, () => ({ ... }))
 */

const useTrail = (length, propsArg) => {
  const hasNewSprings = length !== Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["usePrev"])(length);
  const isFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(propsArg); // The `propsArg` coerced into an object

  let props = isFn ? null : propsArg; // Retain the controllers so we can update them.

  const springsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
  const springs = springsRef.current;
  if (hasNewSprings) springs.length = length; // The controllers are recreated whenever `length` changes.

  const _useSprings = useSprings(length, (i, spring) => {
    if (isFn && !props) {
      props = callProp(propsArg, spring) || {};
    }

    springs[i] = spring;
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, i > 0 && {
      attach: () => springs[i - 1],
      onStart: withArgument(props.onStart, i),
      onFrame: withArgument(props.onFrame, i),
      onRest: withArgument(props.onRest, i)
    }, {
      config: callProp(props.config, i)
    });
  }),
        values = _useSprings[0],
        animate = _useSprings[1],
        stop = _useSprings[2];
  /** For imperative updates to the props of all springs in the trail */


  const update = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_4__["useCallbackOne"])(propsArg => animate((i, spring) => {
    const props = callProp(propsArg, i, spring) || {};
    const parent = springsRef.current[props.reverse ? i + 1 : i - 1];
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      attach: () => parent,
      config: callProp(props.config, i)
    });
  }), []); // Update the animations on re-render when `propsArg` is an object
  // and the controllers were *not* created in the current render.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isFn && !hasNewSprings) {
      update(propsArg);
    }
  }); // Return the update/stop functions when the `propsArg` is a function.

  return isFn ? [values, update, stop] : values;
};

function withArgument(fn, arg) {
  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(fn) ? function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return fn(...args, arg);
  } : fn;
}

/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */

let guid = 0;
const INITIAL = 'initial';
const ENTER = 'enter';
const UPDATE = 'update';
const LEAVE = 'leave';

const makeKeys = (items, keys) => (typeof keys === 'function' ? items.map(keys) : Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["toArray"])(keys)).map(String);

const makeConfig = props => {
  let items = props.items,
      keys = props.keys,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["items", "keys"]);

  items = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["toArray"])(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].und(items) ? null : items);
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    items,
    keys: makeKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, props) {
  props = makeConfig(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    items: input,
    keys: keyTransform || (i => i)
  }));

  const _props = props,
        _props$lazy = _props.lazy,
        lazy = _props$lazy === void 0 ? false : _props$lazy,
        _props$unique = _props.unique,
        from = _props.from,
        enter = _props.enter,
        leave = _props.leave,
        update = _props.update,
        onDestroyed = _props.onDestroyed,
        keys = _props.keys,
        items = _props.items,
        onFrame = _props.onFrame,
        _onRest = _props.onRest,
        onStart = _props.onStart,
        ref = _props.ref,
        extra = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_props, ["lazy", "unique", "from", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  const forceUpdate = Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["useForceUpdate"])();
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!ref,
    instances: !mounted.current && new Map(),
    forceUpdate
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, () => ({
    start: () => Promise.all(Array.from(state.current.instances).map((_ref) => {
      let c = _ref[1];
      return new Promise(r => c.start(r));
    })),
    stop: finished => Array.from(state.current.instances).forEach((_ref2) => {
      let c = _ref2[1];
      return c.stop(finished);
    }),

    get controllers() {
      return Array.from(state.current.instances).map((_ref3) => {
        let c = _ref3[1];
        return c;
      });
    }

  })); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(transition => {
      const phase = transition.phase,
            key = transition.key,
            item = transition.item,
            props = transition.props;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // Avoid calling `onStart` more than once per transition.

      let started = false; // update the map object

      const ctrl = state.current.instances.get(key);

      const itemProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, extra, props, {
        onRest: values => {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            const curInstances = Array.from(state.current.instances);
            const active = curInstances.some((_ref4) => {
              let c = _ref4[1];
              return !c.idle;
            });

            if (!active && (ref || lazy) && state.current.deleted.length > 0) {
              cleanUp(state);
            }

            if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(_onRest)) {
              _onRest(item, phase, values);
            }
          }
        },
        onFrame: _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(onFrame) && (values => onFrame(item, phase, values)),
        onStart: _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(onStart) && (animation => started || (started = (onStart(item, phase, animation), true))) // Update controller

      });

      ctrl.update(itemProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["useOnce"])(() => {
    state.current.mounted = mounted.current = true;
    return () => {
      state.current.mounted = mounted.current = false;
      Array.from(state.current.instances).map((_ref5) => {
        let c = _ref5[1];
        return c.destroy();
      });
      state.current.instances.clear();
    };
  });
  return state.current.transitions.map((_ref6) => {
    let item = _ref6.item,
        phase = _ref6.phase,
        key = _ref6.key;
    return {
      item,
      key,
      phase,
      props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.current.instances.get(key).animated)
    };
  });
}

function cleanUp(_ref7, filterKey) {
  let state = _ref7.current;
  const deleted = state.deleted;

  for (let _ref8 of deleted) {
    let key = _ref8.key;

    const filter = t => t.key !== key;

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].und(filterKey) || filterKey === key) {
      state.instances.delete(key);
      state.transitions = state.transitions.filter(filter);
      state.deleted = state.deleted.filter(filter);
    }
  }

  state.forceUpdate();
}

function diffItems(_ref9, props) {
  let first = _ref9.first,
      current = _ref9.current,
      deleted = _ref9.deleted,
      prevProps = _ref9.prevProps,
      state = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref9, ["first", "current", "deleted", "prevProps"]);

  let items = props.items,
      keys = props.keys,
      initial = props.initial,
      from = props.from,
      enter = props.enter,
      leave = props.leave,
      update = props.update,
      _props$trail = props.trail,
      trail = _props$trail === void 0 ? 0 : _props$trail,
      unique = props.unique,
      config = props.config,
      _props$order = props.order,
      order = _props$order === void 0 ? [ENTER, LEAVE, UPDATE] : _props$order;

  let _makeConfig = makeConfig(prevProps),
      _keys = _makeConfig.keys,
      _items = _makeConfig.items;

  if (props.reset) {
    current = {};
    state.transitions = [];
  } // Compare next keys with current keys


  const currentKeys = Object.keys(current);
  const currentSet = new Set(currentKeys);
  const nextSet = new Set(keys);
  const addedKeys = keys.filter(key => !currentSet.has(key));
  const updatedKeys = update ? keys.filter(key => currentSet.has(key)) : [];
  const deletedKeys = state.transitions.filter(t => !t.destroyed && !nextSet.has(t.originalKey)).map(t => t.originalKey);
  let delay = -trail;

  while (order.length) {
    let phase = order.shift();

    if (phase === ENTER) {
      if (first && !_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].und(initial)) {
        phase = INITIAL;
        from = initial;
      }

      addedKeys.forEach(key => {
        // In unique mode, remove fading out transitions if their key comes in again
        if (unique && deleted.find(d => d.originalKey === key)) {
          deleted = deleted.filter(t => t.originalKey !== key);
        }

        const i = keys.indexOf(key);
        const item = items[i];
        const enterProps = callProp(enter, item, i);
        current[key] = {
          phase,
          originalKey: key,
          key: unique ? String(key) : guid++,
          item,
          props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            delay: delay += trail,
            config: callProp(config, item, phase),
            from: callProp(from, item, i),
            to: enterProps
          }, _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].obj(enterProps) && interpolateTo(enterProps))
        };
      });
    } else if (phase === LEAVE) {
      deletedKeys.forEach(key => {
        const i = _keys.indexOf(key);

        const item = _items[i];
        const leaveProps = callProp(leave, item, i);
        deleted.push(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, current[key], {
          phase,
          destroyed: true,
          left: _keys[i - 1],
          right: _keys[i + 1],
          props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            delay: delay += trail,
            config: callProp(config, item, phase),
            to: leaveProps
          }, _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].obj(leaveProps) && interpolateTo(leaveProps))
        }));
        delete current[key];
      });
    } else if (phase === UPDATE) {
      updatedKeys.forEach(key => {
        const i = keys.indexOf(key);
        const item = items[i];
        const updateProps = callProp(update, item, i);
        current[key] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, current[key], {
          phase,
          props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            delay: delay += trail,
            config: callProp(config, item, phase),
            to: updateProps
          }, _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].obj(updateProps) && interpolateTo(updateProps))
        });
      });
    }
  }

  let out = keys.map(key => current[key]);
  out = reconcileDeleted(deleted, out);
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
    first: first && !addedKeys.length,
    changed: !!(addedKeys.length || deletedKeys.length || updatedKeys.length),
    transitions: out,
    current,
    deleted,
    prevProps: props
  });
}

function Spring(_ref) {
  let children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["children"]);

  return children(useSpring(props));
}
function Trail(_ref2) {
  let items = _ref2.items,
      children = _ref2.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref2, ["items", "children"]);

  const trails = useTrail(items.length, props);
  return items.map((item, index) => {
    const result = children(item, index);
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(result) ? result(trails[index]) : result;
  });
}
function Transition(_ref3) {
  let items = _ref3.items,
      _ref3$keys = _ref3.keys,
      keys = _ref3$keys === void 0 ? null : _ref3$keys,
      children = _ref3.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref3, ["items", "keys", "children"]);

  const transitions = useTransition(items, keys, props);
  return transitions.map((_ref4, index) => {
    let item = _ref4.item,
        key = _ref4.key,
        props = _ref4.props,
        phase = _ref4.phase;
    const result = children(item, phase, index);
    const element = _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["is"].fun(result) ? result(props) : result;
    return element && element.type ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(element.type, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, element.props, {
      key: key,
      ref: element.ref
    })) : element;
  });
}

class FrameLoop {
  constructor(_temp) {
    let _ref = _temp === void 0 ? {} : _temp,
        update = _ref.update,
        onFrame = _ref.onFrame,
        requestFrame = _ref.requestFrame;

    /**
     * On each frame, these controllers are searched for values to animate.
     */
    this.controllers = new Map();
    /**
     * True when no controllers are animating.
     */

    this.idle = true;

    this.requestFrame = // The global `requestAnimationFrame` must be dereferenced to avoid "Illegal invocation" errors
    requestFrame || (fn => (0, _react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_5__["requestAnimationFrame"])(fn));

    this.onFrame = onFrame && onFrame.bind(this) || (updates => {
      updates.forEach(update => {
        const ctrl = this.controllers.get(update[0]);
        if (ctrl) ctrl.onFrame(update);
      });
    });

    this.update = update && update.bind(this) || (() => {
      if (this.idle) {
        return false;
      } // Update the animations.


      const updates = [];

      for (const id of Array.from(this.controllers.keys())) {
        let idle = true;
        const ctrl = this.controllers.get(id);
        const changes = ctrl.props.onFrame ? [] : null;

        for (const config of ctrl.configs) {
          if (config.idle) continue;

          if (this.advance(config, changes)) {
            idle = false;
          }
        }

        updates.push([id, idle, changes]);
      } // Notify the controllers!


      this.onFrame(updates); // Are we done yet?

      if (!this.controllers.size) {
        return !(this.idle = true);
      } // Keep going.


      this.requestFrame(this.update);
      return true;
    });
  }

  start(ctrl) {
    this.controllers.set(ctrl.id, ctrl);

    if (this.idle) {
      this.idle = false;
      this.requestFrame(this.update);
    }
  }

  stop(ctrl) {
    this.controllers.delete(ctrl.id);
  }
  /** Advance an animation forward one frame. */


  advance(config, changes) {
    const time = Object(_react_spring_shared_globals__WEBPACK_IMPORTED_MODULE_5__["now"])();
    let active = false;
    let changed = false;

    for (let i = 0; i < config.animatedValues.length; i++) {
      const animated = config.animatedValues[i];
      if (animated.done) continue;
      changed = true;
      let to = config.toValues[i];
      const target = to instanceof _react_spring_animated__WEBPACK_IMPORTED_MODULE_6__["Animated"] ? to : null;
      if (target) to = target.getValue(); // Jump to end value for immediate animations

      if (config.immediate) {
        animated.setValue(to);
        animated.done = true;
        continue;
      }

      const from = config.fromValues[i];
      const startTime = animated.startTime; // Break animation when string values are involved

      if (typeof from === 'string' || typeof to === 'string') {
        animated.setValue(to);
        animated.done = true;
        continue;
      }

      let finished = false;
      let position = animated.lastPosition;
      let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[i] : config.initialVelocity; // Duration easing

      if (config.duration !== void 0) {
        position = from + config.easing((time - startTime) / config.duration) * (to - from);
        finished = time >= startTime + config.duration;
      } // Decay easing
      else if (config.decay) {
          const decay = config.decay === true ? 0.998 : config.decay;
          position = from + velocity / (1 - decay) * (1 - Math.exp(-(1 - decay) * (time - startTime)));
          finished = Math.abs(animated.lastPosition - position) < 0.1;
          if (finished) to = position;
        } // Spring easing
        else {
            let lastTime = animated.lastTime !== void 0 ? animated.lastTime : time;

            if (animated.lastVelocity !== void 0) {
              velocity = animated.lastVelocity;
            } // If we lost a lot of frames just jump to the end.


            if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

            const numSteps = Math.floor(time - lastTime);

            for (let n = 0; n < numSteps; ++n) {
              const force = -config.tension * (position - to);
              const damping = -config.friction * velocity;
              const acceleration = (force + damping) / config.mass;
              velocity = velocity + acceleration * 1 / 1000;
              position = position + velocity * 1 / 1000;
            }

            animated.lastTime = time;
            animated.lastVelocity = velocity; // Conditions for stopping the spring animation

            const isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
            const isVelocity = Math.abs(velocity) <= config.precision;
            const isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
            finished = isOvershooting || isVelocity && isDisplacement;
          } // Trails aren't done until their parents conclude


      if (finished && !(target && !target.done)) {
        // Ensure that we end up with a round value
        if (animated.value !== to) position = to;
        animated.done = true;
      } else {
        active = true;
      }

      animated.setValue(position);
      animated.lastPosition = position;
    }

    if (changes && changed) {
      changes.push([config.key, config.animated.getValue()]);
    }

    return active;
  }

}

_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["Globals"].assign({
  frameLoop: new FrameLoop(),
  createStringInterpolator: _react_spring_shared_stringInterpolation__WEBPACK_IMPORTED_MODULE_7__["createStringInterpolator"],
  applyAnimatedValues: () => false
});
/** Advance all animations forward one frame */

const update = () => _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__["Globals"].frameLoop.update();

// The `mass` prop defaults to 1
const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@react-spring/shared/colorMatchers.js":
/*!************************************************************!*\
  !*** ./node_modules/@react-spring/shared/colorMatchers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// const INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';
function call() {
    var parts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parts[_i] = arguments[_i];
    }
    return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}
exports.rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
exports.rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
exports.hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
exports.hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
exports.hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
exports.hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
exports.hex6 = /^#([0-9a-fA-F]{6})$/;
exports.hex8 = /^#([0-9a-fA-F]{8})$/;
//# sourceMappingURL=colorMatchers.js.map

/***/ }),

/***/ "./node_modules/@react-spring/shared/colorToRgba.js":
/*!**********************************************************!*\
  !*** ./node_modules/@react-spring/shared/colorToRgba.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var normalizeColor_1 = __webpack_require__(/*! ./normalizeColor */ "./node_modules/@react-spring/shared/normalizeColor.js");
function colorToRgba(input) {
    var int32Color = normalizeColor_1.normalizeColor(input);
    if (int32Color === null)
        return input;
    int32Color = int32Color || 0;
    var r = (int32Color & 0xff000000) >>> 24;
    var g = (int32Color & 0x00ff0000) >>> 16;
    var b = (int32Color & 0x0000ff00) >>> 8;
    var a = (int32Color & 0x000000ff) / 255;
    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
}
exports.colorToRgba = colorToRgba;
//# sourceMappingURL=colorToRgba.js.map

/***/ }),

/***/ "./node_modules/@react-spring/shared/colors.js":
/*!*****************************************************!*\
  !*** ./node_modules/@react-spring/shared/colors.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// http://www.w3.org/TR/css3-color/#svg-color
var colors = {
    transparent: 0x00000000,
    aliceblue: 0xf0f8ffff,
    antiquewhite: 0xfaebd7ff,
    aqua: 0x00ffffff,
    aquamarine: 0x7fffd4ff,
    azure: 0xf0ffffff,
    beige: 0xf5f5dcff,
    bisque: 0xffe4c4ff,
    black: 0x000000ff,
    blanchedalmond: 0xffebcdff,
    blue: 0x0000ffff,
    blueviolet: 0x8a2be2ff,
    brown: 0xa52a2aff,
    burlywood: 0xdeb887ff,
    burntsienna: 0xea7e5dff,
    cadetblue: 0x5f9ea0ff,
    chartreuse: 0x7fff00ff,
    chocolate: 0xd2691eff,
    coral: 0xff7f50ff,
    cornflowerblue: 0x6495edff,
    cornsilk: 0xfff8dcff,
    crimson: 0xdc143cff,
    cyan: 0x00ffffff,
    darkblue: 0x00008bff,
    darkcyan: 0x008b8bff,
    darkgoldenrod: 0xb8860bff,
    darkgray: 0xa9a9a9ff,
    darkgreen: 0x006400ff,
    darkgrey: 0xa9a9a9ff,
    darkkhaki: 0xbdb76bff,
    darkmagenta: 0x8b008bff,
    darkolivegreen: 0x556b2fff,
    darkorange: 0xff8c00ff,
    darkorchid: 0x9932ccff,
    darkred: 0x8b0000ff,
    darksalmon: 0xe9967aff,
    darkseagreen: 0x8fbc8fff,
    darkslateblue: 0x483d8bff,
    darkslategray: 0x2f4f4fff,
    darkslategrey: 0x2f4f4fff,
    darkturquoise: 0x00ced1ff,
    darkviolet: 0x9400d3ff,
    deeppink: 0xff1493ff,
    deepskyblue: 0x00bfffff,
    dimgray: 0x696969ff,
    dimgrey: 0x696969ff,
    dodgerblue: 0x1e90ffff,
    firebrick: 0xb22222ff,
    floralwhite: 0xfffaf0ff,
    forestgreen: 0x228b22ff,
    fuchsia: 0xff00ffff,
    gainsboro: 0xdcdcdcff,
    ghostwhite: 0xf8f8ffff,
    gold: 0xffd700ff,
    goldenrod: 0xdaa520ff,
    gray: 0x808080ff,
    green: 0x008000ff,
    greenyellow: 0xadff2fff,
    grey: 0x808080ff,
    honeydew: 0xf0fff0ff,
    hotpink: 0xff69b4ff,
    indianred: 0xcd5c5cff,
    indigo: 0x4b0082ff,
    ivory: 0xfffff0ff,
    khaki: 0xf0e68cff,
    lavender: 0xe6e6faff,
    lavenderblush: 0xfff0f5ff,
    lawngreen: 0x7cfc00ff,
    lemonchiffon: 0xfffacdff,
    lightblue: 0xadd8e6ff,
    lightcoral: 0xf08080ff,
    lightcyan: 0xe0ffffff,
    lightgoldenrodyellow: 0xfafad2ff,
    lightgray: 0xd3d3d3ff,
    lightgreen: 0x90ee90ff,
    lightgrey: 0xd3d3d3ff,
    lightpink: 0xffb6c1ff,
    lightsalmon: 0xffa07aff,
    lightseagreen: 0x20b2aaff,
    lightskyblue: 0x87cefaff,
    lightslategray: 0x778899ff,
    lightslategrey: 0x778899ff,
    lightsteelblue: 0xb0c4deff,
    lightyellow: 0xffffe0ff,
    lime: 0x00ff00ff,
    limegreen: 0x32cd32ff,
    linen: 0xfaf0e6ff,
    magenta: 0xff00ffff,
    maroon: 0x800000ff,
    mediumaquamarine: 0x66cdaaff,
    mediumblue: 0x0000cdff,
    mediumorchid: 0xba55d3ff,
    mediumpurple: 0x9370dbff,
    mediumseagreen: 0x3cb371ff,
    mediumslateblue: 0x7b68eeff,
    mediumspringgreen: 0x00fa9aff,
    mediumturquoise: 0x48d1ccff,
    mediumvioletred: 0xc71585ff,
    midnightblue: 0x191970ff,
    mintcream: 0xf5fffaff,
    mistyrose: 0xffe4e1ff,
    moccasin: 0xffe4b5ff,
    navajowhite: 0xffdeadff,
    navy: 0x000080ff,
    oldlace: 0xfdf5e6ff,
    olive: 0x808000ff,
    olivedrab: 0x6b8e23ff,
    orange: 0xffa500ff,
    orangered: 0xff4500ff,
    orchid: 0xda70d6ff,
    palegoldenrod: 0xeee8aaff,
    palegreen: 0x98fb98ff,
    paleturquoise: 0xafeeeeff,
    palevioletred: 0xdb7093ff,
    papayawhip: 0xffefd5ff,
    peachpuff: 0xffdab9ff,
    peru: 0xcd853fff,
    pink: 0xffc0cbff,
    plum: 0xdda0ddff,
    powderblue: 0xb0e0e6ff,
    purple: 0x800080ff,
    rebeccapurple: 0x663399ff,
    red: 0xff0000ff,
    rosybrown: 0xbc8f8fff,
    royalblue: 0x4169e1ff,
    saddlebrown: 0x8b4513ff,
    salmon: 0xfa8072ff,
    sandybrown: 0xf4a460ff,
    seagreen: 0x2e8b57ff,
    seashell: 0xfff5eeff,
    sienna: 0xa0522dff,
    silver: 0xc0c0c0ff,
    skyblue: 0x87ceebff,
    slateblue: 0x6a5acdff,
    slategray: 0x708090ff,
    slategrey: 0x708090ff,
    snow: 0xfffafaff,
    springgreen: 0x00ff7fff,
    steelblue: 0x4682b4ff,
    tan: 0xd2b48cff,
    teal: 0x008080ff,
    thistle: 0xd8bfd8ff,
    tomato: 0xff6347ff,
    turquoise: 0x40e0d0ff,
    violet: 0xee82eeff,
    wheat: 0xf5deb3ff,
    white: 0xffffffff,
    whitesmoke: 0xf5f5f5ff,
    yellow: 0xffff00ff,
    yellowgreen: 0x9acd32ff,
};
exports.default = colors;
//# sourceMappingURL=colors.js.map

/***/ }),

/***/ "./node_modules/@react-spring/shared/createInterpolator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@react-spring/shared/createInterpolator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var G = __importStar(__webpack_require__(/*! ./globals */ "./node_modules/@react-spring/shared/globals.js"));
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/@react-spring/shared/helpers.js");
exports.createInterpolator = function (range, output, extrapolate) {
    if (helpers_1.is.fun(range)) {
        return range;
    }
    if (helpers_1.is.arr(range)) {
        return exports.createInterpolator({
            range: range,
            output: output,
            extrapolate: extrapolate,
        });
    }
    if (helpers_1.is.str(range.output[0])) {
        return G.createStringInterpolator(range);
    }
    var config = range;
    var outputRange = config.output;
    var inputRange = config.range || [0, 1];
    var extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
    var extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';
    var easing = config.easing || (function (t) { return t; });
    return function (input) {
        var range = findRange(input, inputRange);
        return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
    };
};
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
    var result = map ? map(input) : input;
    // Extrapolate
    if (result < inputMin) {
        if (extrapolateLeft === 'identity')
            return result;
        else if (extrapolateLeft === 'clamp')
            result = inputMin;
    }
    if (result > inputMax) {
        if (extrapolateRight === 'identity')
            return result;
        else if (extrapolateRight === 'clamp')
            result = inputMax;
    }
    if (outputMin === outputMax)
        return outputMin;
    if (inputMin === inputMax)
        return input <= inputMin ? outputMin : outputMax;
    // Input Range
    if (inputMin === -Infinity)
        result = -result;
    else if (inputMax === Infinity)
        result = result - inputMin;
    else
        result = (result - inputMin) / (inputMax - inputMin);
    // Easing
    result = easing(result);
    // Output Range
    if (outputMin === -Infinity)
        result = -result;
    else if (outputMax === Infinity)
        result = result + outputMin;
    else
        result = result * (outputMax - outputMin) + outputMin;
    return result;
}
function findRange(input, inputRange) {
    for (var i = 1; i < inputRange.length - 1; ++i)
        if (inputRange[i] >= input)
            break;
    return i - 1;
}
//# sourceMappingURL=createInterpolator.js.map

/***/ }),

/***/ "./node_modules/@react-spring/shared/deprecations.js":
/*!***********************************************************!*\
  !*** ./node_modules/@react-spring/shared/deprecations.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var prefix = 'react-spring: ';
var flagInterpolate = false;
function deprecateInterpolate() {
    if (!flagInterpolate) {
        flagInterpolate = true;
        console.warn(prefix + 'interpolate() will be deprecated in v10, use .to()');
    }
}
exports.deprecateInterpolate = deprecateInterpolate;
//# sourceMappingURL=deprecations.js.map

/***/ }),

/***/ "./node_modules/@react-spring/shared/globals.js":
/*!******************************************************!*\
  !*** ./node_modules/@react-spring/shared/globals.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//
// Optional
//
exports.now = function () { return Date.now(); };
/** Provide custom color names for interpolation */
exports.colorNames = null;
/** Make all animations instant and skip the frameloop entirely */
exports.skipAnimation = false;
/** Intercept props before they're passed to an animated component */
exports.getComponentProps = function (props) { return props; };
/** Wrap the `style` prop with an animated node */
exports.createAnimatedStyle = null;
/** Wrap the `transform` prop with an animated node */
exports.createAnimatedTransform = null;
exports.requestAnimationFrame = typeof window !== 'undefined' ? window.requestAnimationFrame : function () { return -1; };
exports.cancelAnimationFrame = typeof window !== 'undefined' ? window.cancelAnimationFrame : function () { };
exports.assign = function (globals) {
    var _a;
    return (_a = Object.assign({
        now: exports.now,
        frameLoop: exports.frameLoop,
        colorNames: exports.colorNames,
        skipAnimation: exports.skipAnimation,
        defaultElement: exports.defaultElement,
        getComponentProps: exports.getComponentProps,
        applyAnimatedValues: exports.applyAnimatedValues,
        createStringInterpolator: exports.createStringInterpolator,
        createAnimatedInterpolation: exports.createAnimatedInterpolation,
        createAnimatedTransform: exports.createAnimatedTransform,
        createAnimatedStyle: exports.createAnimatedStyle,
        requestAnimationFrame: exports.requestAnimationFrame,
        cancelAnimationFrame: exports.cancelAnimationFrame,
    }, pluckDefined(globals)), exports.now = _a.now, exports.frameLoop = _a.frameLoop, exports.colorNames = _a.colorNames, exports.skipAnimation = _a.skipAnimation, exports.defaultElement = _a.defaultElement, exports.getComponentProps = _a.getComponentProps, exports.applyAnimatedValues = _a.applyAnimatedValues, exports.createStringInterpolator = _a.createStringInterpolator, exports.createAnimatedInterpolation = _a.createAnimatedInterpolation, exports.createAnimatedTransform = _a.createAnimatedTransform, exports.createAnimatedStyle = _a.createAnimatedStyle, exports.requestAnimationFrame = _a.requestAnimationFrame, exports.cancelAnimationFrame = _a.cancelAnimationFrame, _a);
};
// Ignore undefined values
function pluckDefined(globals) {
    var defined = {};
    for (var key in globals) {
        if (globals[key] !== void 0)
            defined[key] = globals[key];
    }
    return defined;
}
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "./node_modules/@react-spring/shared/helpers.js":
/*!******************************************************!*\
  !*** ./node_modules/@react-spring/shared/helpers.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
exports.is = {
    arr: Array.isArray,
    obj: function (a) {
        return !!a && a.constructor.name === 'Object';
    },
    fun: function (a) { return typeof a === 'function'; },
    str: function (a) { return typeof a === 'string'; },
    num: function (a) { return typeof a === 'number'; },
    und: function (a) { return a === void 0; },
};
/** An unsafe object/array/set iterator that allows for better minification */
exports.each = function (obj, cb, ctx) {
    if (exports.is.fun(obj.forEach)) {
        obj.forEach(cb, ctx);
    }
    else {
        Object.keys(obj).forEach(function (key) { return cb.call(ctx, obj[key], key); });
    }
};
exports.toArray = function (a) {
    return exports.is.und(a) ? [] : Array.isArray(a) ? a : [a];
};
exports.useOnce = function (effect) { return react_1.useEffect(effect, []); };
exports.useForceUpdate = function () { return react_1.useReducer(function () { return ({}); }, 0)[1]; };
/** Use a value from the previous render */
function usePrev(value) {
    var prevRef = react_1.useRef(undefined);
    react_1.useEffect(function () {
        prevRef.current = value;
    });
    return prevRef.current;
}
exports.usePrev = usePrev;
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@react-spring/shared/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@react-spring/shared/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Globals = __importStar(__webpack_require__(/*! ./globals */ "./node_modules/@react-spring/shared/globals.js"));
exports.Globals = Globals;
__export(__webpack_require__(/*! ./helpers */ "./node_modules/@react-spring/shared/helpers.js"));
__export(__webpack_require__(/*! ./createInterpolator */ "./node_modules/@react-spring/shared/createInterpolator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@react-spring/shared/normalizeColor.js":
/*!*************************************************************!*\
  !*** ./node_modules/@react-spring/shared/normalizeColor.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var matchers = __importStar(__webpack_require__(/*! ./colorMatchers */ "./node_modules/@react-spring/shared/colorMatchers.js"));
var G = __importStar(__webpack_require__(/*! ./globals */ "./node_modules/@react-spring/shared/globals.js"));
function normalizeColor(color) {
    var match;
    if (typeof color === 'number') {
        return color >>> 0 === color && color >= 0 && color <= 0xffffffff
            ? color
            : null;
    }
    // Ordered based on occurrences on Facebook codebase
    if ((match = matchers.hex6.exec(color)))
        return parseInt(match[1] + 'ff', 16) >>> 0;
    if (G.colorNames && G.colorNames[color] !== void 0) {
        return G.colorNames[color];
    }
    if ((match = matchers.rgb.exec(color))) {
        return (((parse255(match[1]) << 24) | // r
            (parse255(match[2]) << 16) | // g
            (parse255(match[3]) << 8) | // b
            0x000000ff) >>> // a
            0);
    }
    if ((match = matchers.rgba.exec(color))) {
        return (((parse255(match[1]) << 24) | // r
            (parse255(match[2]) << 16) | // g
            (parse255(match[3]) << 8) | // b
            parse1(match[4])) >>> // a
            0);
    }
    if ((match = matchers.hex3.exec(color))) {
        return (parseInt(match[1] +
            match[1] + // r
            match[2] +
            match[2] + // g
            match[3] +
            match[3] + // b
            'ff', // a
        16) >>> 0);
    }
    // https://drafts.csswg.org/css-color-4/#hex-notation
    if ((match = matchers.hex8.exec(color)))
        return parseInt(match[1], 16) >>> 0;
    if ((match = matchers.hex4.exec(color))) {
        return (parseInt(match[1] +
            match[1] + // r
            match[2] +
            match[2] + // g
            match[3] +
            match[3] + // b
            match[4] +
            match[4], // a
        16) >>> 0);
    }
    if ((match = matchers.hsl.exec(color))) {
        return ((hslToRgb(parse360(match[1]), // h
        parsePercentage(match[2]), // s
        parsePercentage(match[3]) // l
        ) |
            0x000000ff) >>> // a
            0);
    }
    if ((match = matchers.hsla.exec(color))) {
        return ((hslToRgb(parse360(match[1]), // h
        parsePercentage(match[2]), // s
        parsePercentage(match[3]) // l
        ) |
            parse1(match[4])) >>> // a
            0);
    }
    return null;
}
exports.normalizeColor = normalizeColor;
function hue2rgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslToRgb(h, s, l) {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    var r = hue2rgb(p, q, h + 1 / 3);
    var g = hue2rgb(p, q, h);
    var b = hue2rgb(p, q, h - 1 / 3);
    return ((Math.round(r * 255) << 24) |
        (Math.round(g * 255) << 16) |
        (Math.round(b * 255) << 8));
}
function parse255(str) {
    var int = parseInt(str, 10);
    if (int < 0)
        return 0;
    if (int > 255)
        return 255;
    return int;
}
function parse360(str) {
    var int = parseFloat(str);
    return (((int % 360) + 360) % 360) / 360;
}
function parse1(str) {
    var num = parseFloat(str);
    if (num < 0)
        return 0;
    if (num > 1)
        return 255;
    return Math.round(num * 255);
}
function parsePercentage(str) {
    // parseFloat conveniently ignores the final %
    var int = parseFloat(str);
    if (int < 0)
        return 0;
    if (int > 100)
        return 1;
    return int / 100;
}
//# sourceMappingURL=normalizeColor.js.map

/***/ }),

/***/ "./node_modules/@react-spring/shared/stringInterpolation.js":
/*!******************************************************************!*\
  !*** ./node_modules/@react-spring/shared/stringInterpolation.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var createInterpolator_1 = __webpack_require__(/*! ./createInterpolator */ "./node_modules/@react-spring/shared/createInterpolator.js");
var colorToRgba_1 = __webpack_require__(/*! ./colorToRgba */ "./node_modules/@react-spring/shared/colorToRgba.js");
var tiny_invariant_1 = __importDefault(__webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js"));
var G = __importStar(__webpack_require__(/*! ./globals */ "./node_modules/@react-spring/shared/globals.js"));
// Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662
var numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
// Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e
var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
// Covers color names (transparent, blue, etc.)
var colorNamesRegex;
// rgba requires that the r,g,b are integers.... so we want to round them,
// but we *dont* want to round the opacity (4th column).
var rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
var rgbaRound = function (_, p1, p2, p3, p4) {
    return "rgba(" + Math.round(p1) + ", " + Math.round(p2) + ", " + Math.round(p3) + ", " + p4 + ")";
};
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *     "rgba(123, 42, 99, 0.36)"           // colors
 *     "-45deg"                            // values with units
 *     "0 2px 2px 0px rgba(0, 0, 0, 0.12)" // CSS box-shadows
 *     "rotate(0deg) translate(2px, 3px)"  // CSS transforms
 */
exports.createStringInterpolator = function (config) {
    if (!colorNamesRegex)
        colorNamesRegex = G.colorNames
            ? new RegExp("(" + Object.keys(G.colorNames).join('|') + ")", 'g')
            : /^\b$/; // never match
    // Convert colors to rgba(...)
    var output = config.output.map(function (value) {
        return value.replace(colorRegex, colorToRgba_1.colorToRgba).replace(colorNamesRegex, colorToRgba_1.colorToRgba);
    });
    // Convert ["1px 2px", "0px 0px"] into [[1, 2], [0, 0]]
    var keyframes = output.map(function (value) { return value.match(numberRegex).map(Number); });
    // Convert ["1px 2px", "0px 0px"] into [[1, 0], [2, 0]]
    var outputRanges = keyframes[0].map(function (_, i) {
        return keyframes.map(function (values) {
            tiny_invariant_1.default(i in values, 'The arity of each "output" value must be equal');
            return values[i];
        });
    });
    // Create an interpolator for each animated number
    var interpolators = outputRanges.map(function (output) {
        return createInterpolator_1.createInterpolator(__assign({}, config, { output: output }));
    });
    // Use the first `output` as a template for each call
    return function (input) {
        var i = 0;
        return output[0]
            .replace(numberRegex, function () { return String(interpolators[i++](input)); })
            .replace(rgbaRegex, rgbaRound);
    };
};
//# sourceMappingURL=stringInterpolation.js.map

/***/ }),

/***/ "./node_modules/@react-spring/web/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@react-spring/web/index.js ***!
  \*************************************************/
/*! exports provided: Globals, createInterpolator, interpolate, isAnimated, to, Controller, FrameLoop, Spring, Trail, Transition, config, update, useChain, useSpring, useSprings, useTrail, useTransition, a, animated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return animated; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _react_spring_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-spring/core */ "./node_modules/@react-spring/core/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_1__["Globals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInterpolator", function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_1__["createInterpolator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_1__["interpolate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAnimated", function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_1__["isAnimated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "to", function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_1__["to"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_1__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrameLoop", function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_1__["FrameLoop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spring", function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_1__["Spring"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trail", function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_1__["Trail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_1__["Transition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_1__["config"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_1__["update"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useChain", function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_1__["useChain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_1__["useSpring"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSprings", function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_1__["useSprings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTrail", function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_1__["useTrail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return _react_spring_core__WEBPACK_IMPORTED_MODULE_1__["useTransition"]; });

/* harmony import */ var _react_spring_shared_stringInterpolation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/shared/stringInterpolation */ "./node_modules/@react-spring/shared/stringInterpolation.js");
/* harmony import */ var _react_spring_shared_stringInterpolation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_spring_shared_stringInterpolation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-spring/shared */ "./node_modules/@react-spring/shared/index.js");
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_spring_shared__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_spring_animated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-spring/animated */ "./node_modules/@react-spring/animated/index.js");
/* harmony import */ var _react_spring_shared_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-spring/shared/colors */ "./node_modules/@react-spring/shared/colors.js");
/* harmony import */ var _react_spring_shared_colors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_react_spring_shared_colors__WEBPACK_IMPORTED_MODULE_5__);








let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false;
  }

  const style = props.style,
        children = props.children,
        scrollTop = props.scrollTop,
        scrollLeft = props.scrollLeft,
        attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["style", "children", "scrollTop", "scrollLeft"]);

  if (scrollTop !== void 0) instance.scrollTop = scrollTop;
  if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

  if (children !== void 0) instance.textContent = children; // Apply CSS styles

  for (let styleName in style) {
    if (!style.hasOwnProperty(styleName)) continue;
    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
    if (styleName === 'float') styleName = 'cssFloat';
    if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
  }

  const isFilterElement = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter'; // Apply DOM attributes

  for (let name in attributes) {
    // Attributes are written in dash case
    const attributeName = isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
    instance.setAttribute(attributeName, attributes[name]);
  }
}

/** The transform-functions
 * (https://developer.mozilla.org/fr/docs/Web/CSS/transform-function)
 * that you can pass as keys to your animated component style and that will be
 * animated. Perspective has been left out as it would conflict with the
 * non-transform perspective style.
 */

const domTransforms = ['matrix', 'translate', 'scale', 'rotate', 'skew']; // x, y, z and translate will get 'px' as unit default

const pxDefaults = ['x', 'y', 'z', 'translate']; // rotate and skew will get 'deg' as unit default

const dgDefaults = ['rotate', 'skew']; // adds a unit to the value when the value is unit-less (ie a number)

const mergeUnit = (value, unit) => _react_spring_shared__WEBPACK_IMPORTED_MODULE_3__["is"].num(value) && value !== 0 ? value + unit : value; // gets the default unit for a key


const getUnit = key => pxDefaults.some(name => key.startsWith(name)) ? 'px' : dgDefaults.some(name => key.startsWith(name)) ? 'deg' : '';
/**
 * Returns the right Animated object based on the value type.
 *
 * x: AnimatedValue         --> x
 * 40px                     --> AnimatedValue(40px)
 * [40, 30]                 --> AnimatedValue([40,30])
 * [40, y: AnimatedValue]   --> AnimatedArray([AnimatedValue(40), y])
 *
 * @param value
 */


const ensureAnimated = function ensureAnimated(value) {
  if (value === void 0) {
    value = 0;
  }

  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_3__["is"].arr(value) && value.some(_react_spring_animated__WEBPACK_IMPORTED_MODULE_4__["isAnimated"]) ? new _react_spring_animated__WEBPACK_IMPORTED_MODULE_4__["AnimatedArray"](value.map(ensureAnimated)) : Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_4__["isAnimated"])(value) ? value : new _react_spring_animated__WEBPACK_IMPORTED_MODULE_4__["AnimatedValue"](value);
};
/**
 * Checks if the input value matches the identity value.
 *
 * isValueIdentity(0, 0)              --> true
 * isValueIdentity('0px', 0)          --> true
 * isValueIdentity([0, '0px', 0], 0)  --> true
 *
 * @param styleValue
 * @param id
 */


const isValueIdentity = (styleValue, id) => _react_spring_shared__WEBPACK_IMPORTED_MODULE_3__["is"].arr(styleValue) ? styleValue.every(v => isValueIdentity(v, id)) : _react_spring_shared__WEBPACK_IMPORTED_MODULE_3__["is"].num(styleValue) ? styleValue === id : parseFloat(styleValue) === id;
/**
 * Checks if the style value is the identity for a given key.
 *
 * isTransformIdentity('scale', 1)               --> true
 * isTransformIdentity('scale', [1,1])
 * isTransformIdentity('rotate3d', [1,1,1,0])    --> true
 * isTransformIdentity('x', 0)                   --> true
 *
 * @param key
 * @param styleValue
 */


const isTransformIdentity = (key, styleValue) => key === 'rotate3d' ? isValueIdentity(_react_spring_shared__WEBPACK_IMPORTED_MODULE_3__["is"].arr(styleValue) ? styleValue[3] : styleValue, 0) : key.startsWith('scale') ? isValueIdentity(styleValue, 1) : isValueIdentity(styleValue, 0);
/**
 * This AnimatedStyle will simplify animated components transforms by
 * interpolating all transform function passed as keys in the style object
 * including shortcuts such as x, y and z for translateX/Y/Z
 */


class AnimatedStyle extends _react_spring_animated__WEBPACK_IMPORTED_MODULE_4__["AnimatedObject"] {
  constructor(_ref) {
    if (_ref === void 0) {
      _ref = {};
    }

    let _ref2 = _ref,
        x = _ref2.x,
        y = _ref2.y,
        z = _ref2.z,
        style = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["x", "y", "z"]);

    const props = []; // transforms will be an array of functions applied to the props. Each function
    // will return the interpolated transformed string, and a flag indicating if the
    // interpolation result is an identity transform of its own

    const transforms = []; // first we deal with x, y, z to group them into a single translate3d

    if (x || y || z) {
      // xyz should be an AnimatedValue or AnimatedArray
      const xyz = ensureAnimated([x || 0, y || 0, z || 0]); // we add it to the array of Animated objects that will be interpolated

      props.push(xyz); // we add the interpolation function to our transform array

      transforms.push((_ref3) => {
        let vx = _ref3[0],
            vy = _ref3[1],
            vz = _ref3[2];
        return [`translate3d(${mergeUnit(vx, getUnit('x'))},${mergeUnit(vy, getUnit('y'))},${mergeUnit(vz, getUnit('z'))})`, isValueIdentity([vx, vy, vz], 0)];
      });
    } // then for each style key that matches the supported transform functions,
    // we add the input value to the props and the interpolation transform
    // function


    Object(_react_spring_shared__WEBPACK_IMPORTED_MODULE_3__["each"])(style, (value, key) => {
      if (key === 'transform') {
        props.push(ensureAnimated(value));
        transforms.push(transform => [transform, transform === '']);
      } else if (domTransforms.some(transform => key.startsWith(transform))) {
        const unit = getUnit(key);
        props.push(ensureAnimated(value));
        transforms.push(key === 'rotate3d' ? (_ref4) => {
          let x = _ref4[0],
              y = _ref4[1],
              z = _ref4[2],
              deg = _ref4[3];
          return [`rotate3d(${x},${y},${z},${mergeUnit(deg, unit)})`, isTransformIdentity(key, deg)];
        } : arg => [_react_spring_shared__WEBPACK_IMPORTED_MODULE_3__["is"].arr(arg) ? `${key}(${arg.map(v => mergeUnit(v, unit)).join(',')})` : `${key}(${mergeUnit(arg, unit)})`, isTransformIdentity(key, arg)]);
        delete style[key];
      }
    }); // finally, we set the transform key of the animated style to the
    // interpolation of all the props, using the transform functions we defined
    // above

    if (props.length > 0) {
      style.transform = Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_4__["to"])(props, function () {
        let transform = '';
        let identity = true;

        for (let i = 0; i < arguments.length; i++) {
          const _transforms$i = transforms[i](i < 0 || arguments.length <= i ? undefined : arguments[i]),
                t = _transforms$i[0],
                id = _transforms$i[1];

          transform += ' ' + t;
          identity = identity && id;
        } // if the identity flag was true for all transforms, we set the transform
        // to none, otherwise we return the concatenated transform string


        return identity ? 'none' : transform;
      });
    }

    super(style);
  }

}

const elements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

const animated = Object(_react_spring_animated__WEBPACK_IMPORTED_MODULE_4__["extendAnimated"])(_react_spring_animated__WEBPACK_IMPORTED_MODULE_4__["withAnimated"], elements);

_react_spring_core__WEBPACK_IMPORTED_MODULE_1__["Globals"].assign({
  defaultElement: 'div',
  colorNames: (_react_spring_shared_colors__WEBPACK_IMPORTED_MODULE_5___default()),
  applyAnimatedValues,
  createStringInterpolator: _react_spring_shared_stringInterpolation__WEBPACK_IMPORTED_MODULE_2__["createStringInterpolator"],
  createAnimatedStyle: style => new AnimatedStyle(style),
  getComponentProps: (_ref) => {
    let scrollTop = _ref.scrollTop,
        scrollLeft = _ref.scrollLeft,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["scrollTop", "scrollLeft"]);

    return props;
  }
});


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/animejs/lib/anime.es.js":
/*!**********************************************!*\
  !*** ./node_modules/animejs/lib/anime.es.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * anime.js v3.1.0
 * (c) 2019 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

// Defaults

var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};

var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};

var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective'];

// Caching

var cache = {
  CSS: {},
  springs: {}
};

// Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function (a) { return Array.isArray(a); },
  obj: function (a) { return stringContains(Object.prototype.toString.call(a), 'Object'); },
  pth: function (a) { return is.obj(a) && a.hasOwnProperty('totalLength'); },
  svg: function (a) { return a instanceof SVGElement; },
  inp: function (a) { return a instanceof HTMLInputElement; },
  dom: function (a) { return a.nodeType || is.svg(a); },
  str: function (a) { return typeof a === 'string'; },
  fnc: function (a) { return typeof a === 'function'; },
  und: function (a) { return typeof a === 'undefined'; },
  hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a); },
  rgb: function (a) { return /^rgb/.test(a); },
  hsl: function (a) { return /^hsl/.test(a); },
  col: function (a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)); },
  key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; }
};

// Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];
}

// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

function spring(string, duration) {

  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity =  minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? (duration * t) / 1000 : t;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }
    if (t === 0 || t === 1) { return t; }
    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];
    if (cached) { return cached; }
    var frame = 1/6;
    var elapsed = 0;
    var rest = 0;
    while(true) {
      elapsed += frame;
      if (solver(elapsed) === 1) {
        rest++;
        if (rest >= 16) { break; }
      } else {
        rest = 0;
      }
    }
    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;

}

// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

function steps(steps) {
  if ( steps === void 0 ) steps = 10;

  return function (t) { return Math.round(t * steps) * (1 / steps); };
}

// BezierEasing https://github.com/gre/bezier-easing

var bezier = (function () {

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }
  function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }
  function C(aA1)      { return 3.0 * aA1 }

  function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }
  function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0.0) { return aGuessT; }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {

    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) { return; }
    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {

      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;

      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }

    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) { return x; }
      if (x === 0 || x === 1) { return x; }
      return calcBezier(getTForX(x), mY1, mY2);
    }

  }

  return bezier;

})();

var penner = (function () {

  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)

  var eases = { linear: function () { return function (t) { return t; }; } };

  var functionEasings = {
    Sine: function () { return function (t) { return 1 - Math.cos(t * Math.PI / 2); }; },
    Circ: function () { return function (t) { return 1 - Math.sqrt(1 - t * t); }; },
    Back: function () { return function (t) { return t * t * (3 * t - 2); }; },
    Bounce: function () { return function (t) {
      var pow2, b = 4;
      while (t < (( pow2 = Math.pow(2, --b)) - 1) / 11) {}
      return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow(( pow2 * 3 - 2 ) / 22 - t, 2)
    }; },
    Elastic: function (amplitude, period) {
      if ( amplitude === void 0 ) amplitude = 1;
      if ( period === void 0 ) period = .5;

      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return (t === 0 || t === 1) ? t : 
          -a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2) * Math.asin(1 / a))) * (Math.PI * 2)) / p);
      }
    }
  };

  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];

  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () { return function (t) { return Math.pow(t, i + 2); }; };
  });

  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;
    eases['easeOut' + name] = function (a, b) { return function (t) { return 1 - easeIn(a, b)(1 - t); }; };
    eases['easeInOut' + name] = function (a, b) { return function (t) { return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 
      1 - easeIn(a, b)(t * -2 + 2) / 2; }; };
  });

  return eases;

})();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) { return easing; }
  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);
  switch (name) {
    case 'spring' : return spring(easing, duration);
    case 'cubicBezier' : return applyArguments(bezier, args);
    case 'steps' : return applyArguments(steps, args);
    default : return applyArguments(ease, args);
  }
}

// Strings

function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch(e) {
    return;
  }
}

// Arrays

function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];
  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];
      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) { return a.concat(is.arr(b) ? flattenArray(b) : b); }, []);
}

function toArray(o) {
  if (is.arr(o)) { return o; }
  if (is.str(o)) { o = selectString(o) || o; }
  if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }
  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) { return a === val; });
}

// Objects

function cloneObject(o) {
  var clone = {};
  for (var p in o) { clone[p] = o[p]; }
  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o1) { o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p]; }
  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o2) { o[p] = is.und(o1[p]) ? o2[p] : o1[p]; }
  return o;
}

// Colors

function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? ("rgba(" + (rgb[1]) + ",1)") : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return ("rgba(" + r + "," + g + "," + b + ",1)");
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;
  function hue2rgb(p, q, t) {
    if (t < 0) { t += 1; }
    if (t > 1) { t -= 1; }
    if (t < 1/6) { return p + (q - p) * 6 * t; }
    if (t < 1/2) { return q; }
    if (t < 2/3) { return p + (q - p) * (2/3 - t) * 6; }
    return p;
  }
  var r, g, b;
  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return ("rgba(" + (r * 255) + "," + (g * 255) + "," + (b * 255) + "," + a + ")");
}

function colorToRgb(val) {
  if (is.rgb(val)) { return rgbToRgba(val); }
  if (is.hex(val)) { return hexToRgba(val); }
  if (is.hsl(val)) { return hslToRgba(val); }
}

// Units

function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  if (split) { return split[1]; }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }
  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }
}

// Values

function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) { return val; }
  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) { return cached; }
  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || (is.svg(el) && el[prop]))) { return 'attribute'; }
  if (is.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }
  if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }
  if (el[prop] != null) { return 'object'; }
}

function getElementTransforms(el) {
  if (!is.dom(el)) { return; }
  var str = el.style.transform || '';
  var reg  = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m; while (m = reg.exec(str)) { transforms.set(m[1], m[2]); }
  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }
  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform': return getTransformValue(target, propName, animatable, unit);
    case 'css': return getCSSValue(target, propName, unit);
    case 'attribute': return getAttribute(target, propName);
    default: return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);
  if (!operator) { return to; }
  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));
  switch (operator[0][0]) {
    case '+': return x + y + u;
    case '-': return x - y + u;
    case '*': return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) { return colorToRgb(val); }
  if (/\s/g.test(val)) { return val; }
  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  if (unit) { return unitLess + unit; }
  return unitLess;
}

// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return (getAttribute(el, 'width') * 2) + (getAttribute(el, 'height') * 2);
}

function getLineLength(el) {
  return getDistance(
    {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, 
    {x: getAttribute(el, 'x2'), y: getAttribute(el, 'y2')}
  );
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;
  for (var i = 0 ; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);
    if (i > 0) { totalLength += getDistance(previousPos, currentPos); }
    previousPos = currentPos;
  }
  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}

// Path animation

function getTotalLength(el) {
  if (el.getTotalLength) { return el.getTotalLength(); }
  switch(el.tagName.toLowerCase()) {
    case 'circle': return getCircleLength(el);
    case 'rect': return getRectLength(el);
    case 'line': return getLineLength(el);
    case 'polyline': return getPolylineLength(el);
    case 'polygon': return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
}

// Motion path

function getParentSvgEl(el) {
  var parentEl = el.parentNode;
  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) { break; }
    parentEl = parentEl.parentNode;
  }
  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width / viewBox[2],
    h: height / viewBox[3]
  }
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function(property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    }
  }
}

function getPathProgress(path, progress) {
  function point(offset) {
    if ( offset === void 0 ) offset = 0;

    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  switch (path.property) {
    case 'x': return (p.x - svg.x) * svg.w;
    case 'y': return (p.y - svg.y) * svg.h;
    case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
}

// Decompose value

function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: (is.str(val) || unit) ? value.split(rgx) : []
  }
}

// Animatables

function parseTargets(targets) {
  var targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
  return filterArray(targetsArray, function (item, pos, self) { return self.indexOf(item) === pos; });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
  });
}

// Properties

function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  // Override duration if easing is a spring
  if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }
  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = (l === 2 && !is.obj(prop[0]));
    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {value: prop};
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = (is.obj(v) && !is.pth(v)) ? v : {value: v};
    // Default delay value should only be applied to the first tween
    if (is.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : 0; }
    // Default endDelay value should only be applied to the last tween
    if (is.und(obj.endDelay)) { obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0; }
    return obj;
  }).map(function (k) { return mergeObjects(k, settings); });
}


function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is.key(p); })
  .reduce(function (a,b) { if (a.indexOf(b) < 0) { a.push(b); } return a; }, []);
  var properties = {};
  var loop = function ( i ) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};
      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) { newKey.value = key[p]; }
        } else {
          newKey[p] = key[p];
        }
      }
      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) loop( i );
  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;
  if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }
  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }
  return properties;
}

// Tweens

function normalizeTweenValues(tween, animatable) {
  var t = {};
  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);
    if (is.arr(value)) {
      value = value.map(function (v) { return getFunctionValue(v, animatable); });
      if (value.length === 1) { value = value[0]; }
    }
    t[p] = value;
  }
  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to)) { to = previousValue; }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isColor = is.col(tween.from.original);
    if (tween.isColor) { tween.round = 1; }
    previousTween = tween;
    return tween;
  });
}

// Tween progress

var setProgressValue = {
  css: function (t, p, v) { return t.style[p] = v; },
  attribute: function (t, p, v) { return t.setAttribute(p, v); },
  object: function (t, p, v) { return t[p] = v; },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);
    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) { str += prop + "(" + value + ") "; });
      t.style.transform = str;
    }
  }
};

// Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
}

// Animations

function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);
  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    }
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) { return !is.und(a); });
}

// Create Instance

function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : 0; };
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
}

// Core

var activeInstances = [];
var pausedInstances = [];
var raf;

var engine = (function () {
  function play() { 
    raf = requestAnimationFrame(step);
  }
  function step(t) {
    var activeInstancesLength = activeInstances.length;
    if (activeInstancesLength) {
      var i = 0;
      while (i < activeInstancesLength) {
        var activeInstance = activeInstances[i];
        if (!activeInstance.paused) {
          activeInstance.tick(t);
        } else {
          var instanceIndex = activeInstances.indexOf(activeInstance);
          if (instanceIndex > -1) {
            activeInstances.splice(instanceIndex, 1);
            activeInstancesLength = activeInstances.length;
          }
        }
        i++;
      }
      play();
    } else {
      raf = cancelAnimationFrame(raf);
    }
  }
  return play;
})();

function handleVisibilityChange() {
  if (document.hidden) {
    activeInstances.forEach(function (ins) { return ins.pause(); });
    pausedInstances = activeInstances.slice(0);
    anime.running = activeInstances = [];
  } else {
    pausedInstances.forEach(function (ins) { return ins.play(); });
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', handleVisibilityChange);
}

// Public Instance

function anime(params) {
  if ( params === void 0 ) params = {};


  var startTime = 0, lastTime = 0, now = 0;
  var children, childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) { return resolve = _resolve; });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;
    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }
    instance.reversed = !instance.reversed;
    children.forEach(function (child) { return child.reversed = instance.reversed; });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) { child.seek(time - child.timelineOffset); }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) { seekChild(time, children[i]); }
    } else {
      for (var i$1 = childrenLength; i$1--;) { seekChild(time, children[i$1]); }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      // Only check for keyframes if there is more than one tween
      if (tweenLength) { tween = filterArray(tweens, function (t) { return (insTime < t.end); })[0] || tween; }
      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = (void 0);
      for (var n = 0; n < toNumbersLength; n++) {
        var value = (void 0);
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        if (!tween.isPath) {
          value = fromNumber + (eased * (toNumber - fromNumber));
        } else {
          value = getPathProgress(tween.value, eased * toNumber);
        }
        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }
        numbers.push(value);
      }
      // Manual Array.reduce for better performances
      var stringsLength = strings.length;
      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];
        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];
          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) { instance[cb](instance); }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax((insTime / insDuration) * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;
    if (children) { syncInstanceChildren(insTime); }
    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }
    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }
    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }
    if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {
      setAnimationsProgress(insDuration);
    }
    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }
      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }
    instance.currentTime = minMax(insTime, 0, insDuration);
    if (instance.began) { setCallback('update'); }
    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();
      if (!instance.remaining) {
        instance.paused = true;
        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');
          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;
        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function() {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;
    for (var i = childrenLength; i--;) { instance.children[i].reset(); }
    if (instance.reversed && instance.loop !== true || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }
    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  };

  // Set Value helper

  instance.set = function(targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function(t) {
    now = t;
    if (!startTime) { startTime = now; }
    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function(time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function() {
    instance.paused = true;
    resetTime();
  };

  instance.play = function() {
    if (!instance.paused) { return; }
    if (instance.completed) { instance.reset(); }
    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    if (!raf) { engine(); }
  };

  instance.reverse = function() {
    toggleInstanceDirection();
    resetTime();
  };

  instance.restart = function() {
    instance.reset();
    instance.play();
  };

  instance.reset();

  if (instance.autoplay) { instance.play(); }

  return instance;

}

// Remove targets from animation

function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargets(targets) {
  var targetsArray = parseTargets(targets);
  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);
    for (var c = children.length; c--;) {
      var child = children[c];
      var childAnimations = child.animations;
      removeTargetsFromAnimations(targetsArray, childAnimations);
      if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }
    }
    if (!animations.length && !children.length) { instance.pause(); }
  }
}

// Stagger helpers

function stagger(val, params) {
  if ( params === void 0 ) params = {};

  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) { fromIndex = 0; }
    if (fromCenter) { fromIndex = (t - 1) / 2; }
    if (fromLast) { fromIndex = t - 1; }
    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex%grid[0] : (grid[0]-1)/2;
          var fromY = !fromCenter ? Math.floor(fromIndex/grid[0]) : (grid[1]-1)/2;
          var toX = index%grid[0];
          var toY = Math.floor(index/grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === 'x') { value = -distanceX; }
          if (axis === 'y') { value = -distanceY; }
          values.push(value);
        }
        maxValue = Math.max.apply(Math, values);
      }
      if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }
      if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < 0) ? val * -1 : -val : Math.abs(maxValue - val); }); }
    }
    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + (spacing * (Math.round(values[i] * 100) / 100)) + unit;
  }
}

// Timeline

function timeline(params) {
  if ( params === void 0 ) params = {};

  var tl = anime(params);
  tl.duration = 0;
  tl.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;
    if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }
    function passThrough(ins) { ins.passThrough = true; }
    for (var i = 0; i < children.length; i++) { passThrough(children[i]); }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();
    if (tl.autoplay) { tl.play(); }
    return tl;
  };
  return tl;
}

anime.version = '3.1.0';
anime.speed = 1;
anime.running = activeInstances;
anime.remove = removeTargets;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };

/* harmony default export */ __webpack_exports__["default"] = (anime);


/***/ }),

/***/ "./node_modules/ci-info/index.js":
/*!***************************************!*\
  !*** ./node_modules/ci-info/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vendors = __webpack_require__(/*! ./vendors.json */ "./node_modules/ci-info/vendors.json")

var env = {}

// Used for testing only
Object.defineProperty(exports, '_vendors', {
  value: vendors.map(function (v) { return v.constant })
})

exports.name = null
exports.isPR = null

vendors.forEach(function (vendor) {
  var envs = Array.isArray(vendor.env) ? vendor.env : [vendor.env]
  var isCI = envs.every(function (obj) {
    return checkEnv(obj)
  })

  exports[vendor.constant] = isCI

  if (isCI) {
    exports.name = vendor.name

    switch (typeof vendor.pr) {
      case 'string':
        // "pr": "CIRRUS_PR"
        exports.isPR = !!env[vendor.pr]
        break
      case 'object':
        if ('env' in vendor.pr) {
          // "pr": { "env": "BUILDKITE_PULL_REQUEST", "ne": "false" }
          exports.isPR = vendor.pr.env in env && env[vendor.pr.env] !== vendor.pr.ne
        } else if ('any' in vendor.pr) {
          // "pr": { "any": ["ghprbPullId", "CHANGE_ID"] }
          exports.isPR = vendor.pr.any.some(function (key) {
            return !!env[key]
          })
        } else {
          // "pr": { "DRONE_BUILD_EVENT": "pull_request" }
          exports.isPR = checkEnv(vendor.pr)
        }
        break
      default:
        // PR detection not supported for this vendor
        exports.isPR = null
    }
  }
})

exports.isCI = !!(
  env.CI || // Travis CI, CircleCI, Cirrus CI, Gitlab CI, Appveyor, CodeShip, dsari
  env.CONTINUOUS_INTEGRATION || // Travis CI, Cirrus CI
  env.BUILD_NUMBER || // Jenkins, TeamCity
  env.RUN_ID || // TaskCluster, dsari
  exports.name ||
  false
)

function checkEnv (obj) {
  if (typeof obj === 'string') return !!env[obj]
  return Object.keys(obj).every(function (k) {
    return env[k] === obj[k]
  })
}


/***/ }),

/***/ "./node_modules/ci-info/vendors.json":
/*!*******************************************!*\
  !*** ./node_modules/ci-info/vendors.json ***!
  \*******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"AppVeyor\",\"constant\":\"APPVEYOR\",\"env\":\"APPVEYOR\",\"pr\":\"APPVEYOR_PULL_REQUEST_NUMBER\"},{\"name\":\"Azure Pipelines\",\"constant\":\"AZURE_PIPELINES\",\"env\":\"SYSTEM_TEAMFOUNDATIONCOLLECTIONURI\",\"pr\":\"SYSTEM_PULLREQUEST_PULLREQUESTID\"},{\"name\":\"Bamboo\",\"constant\":\"BAMBOO\",\"env\":\"bamboo_planKey\"},{\"name\":\"Bitbucket Pipelines\",\"constant\":\"BITBUCKET\",\"env\":\"BITBUCKET_COMMIT\",\"pr\":\"BITBUCKET_PR_ID\"},{\"name\":\"Bitrise\",\"constant\":\"BITRISE\",\"env\":\"BITRISE_IO\",\"pr\":\"BITRISE_PULL_REQUEST\"},{\"name\":\"Buddy\",\"constant\":\"BUDDY\",\"env\":\"BUDDY_WORKSPACE_ID\",\"pr\":\"BUDDY_EXECUTION_PULL_REQUEST_ID\"},{\"name\":\"Buildkite\",\"constant\":\"BUILDKITE\",\"env\":\"BUILDKITE\",\"pr\":{\"env\":\"BUILDKITE_PULL_REQUEST\",\"ne\":\"false\"}},{\"name\":\"CircleCI\",\"constant\":\"CIRCLE\",\"env\":\"CIRCLECI\",\"pr\":\"CIRCLE_PULL_REQUEST\"},{\"name\":\"Cirrus CI\",\"constant\":\"CIRRUS\",\"env\":\"CIRRUS_CI\",\"pr\":\"CIRRUS_PR\"},{\"name\":\"AWS CodeBuild\",\"constant\":\"CODEBUILD\",\"env\":\"CODEBUILD_BUILD_ARN\"},{\"name\":\"Codeship\",\"constant\":\"CODESHIP\",\"env\":{\"CI_NAME\":\"codeship\"}},{\"name\":\"Drone\",\"constant\":\"DRONE\",\"env\":\"DRONE\",\"pr\":{\"DRONE_BUILD_EVENT\":\"pull_request\"}},{\"name\":\"dsari\",\"constant\":\"DSARI\",\"env\":\"DSARI\"},{\"name\":\"GitLab CI\",\"constant\":\"GITLAB\",\"env\":\"GITLAB_CI\"},{\"name\":\"GoCD\",\"constant\":\"GOCD\",\"env\":\"GO_PIPELINE_LABEL\"},{\"name\":\"Hudson\",\"constant\":\"HUDSON\",\"env\":\"HUDSON_URL\"},{\"name\":\"Jenkins\",\"constant\":\"JENKINS\",\"env\":[\"JENKINS_URL\",\"BUILD_ID\"],\"pr\":{\"any\":[\"ghprbPullId\",\"CHANGE_ID\"]}},{\"name\":\"Magnum CI\",\"constant\":\"MAGNUM\",\"env\":\"MAGNUM\"},{\"name\":\"Netlify CI\",\"constant\":\"NETLIFY\",\"env\":\"NETLIFY_BUILD_BASE\",\"pr\":{\"env\":\"PULL_REQUEST\",\"ne\":\"false\"}},{\"name\":\"Sail CI\",\"constant\":\"SAIL\",\"env\":\"SAILCI\",\"pr\":\"SAIL_PULL_REQUEST_NUMBER\"},{\"name\":\"Semaphore\",\"constant\":\"SEMAPHORE\",\"env\":\"SEMAPHORE\",\"pr\":\"PULL_REQUEST_NUMBER\"},{\"name\":\"Shippable\",\"constant\":\"SHIPPABLE\",\"env\":\"SHIPPABLE\",\"pr\":{\"IS_PULL_REQUEST\":\"true\"}},{\"name\":\"Solano CI\",\"constant\":\"SOLANO\",\"env\":\"TDDIUM\",\"pr\":\"TDDIUM_PR_ID\"},{\"name\":\"Strider CD\",\"constant\":\"STRIDER\",\"env\":\"STRIDER\"},{\"name\":\"TaskCluster\",\"constant\":\"TASKCLUSTER\",\"env\":[\"TASK_ID\",\"RUN_ID\"]},{\"name\":\"TeamCity\",\"constant\":\"TEAMCITY\",\"env\":\"TEAMCITY_VERSION\"},{\"name\":\"Travis CI\",\"constant\":\"TRAVIS\",\"env\":\"TRAVIS\",\"pr\":{\"env\":\"TRAVIS_PULL_REQUEST\",\"ne\":\"false\"}}]");

/***/ }),

/***/ "./node_modules/gatsby-core-utils/dist/ci.js":
/*!***************************************************!*\
  !*** ./node_modules/gatsby-core-utils/dist/ci.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const ci=__webpack_require__(/*! ci-info */ "./node_modules/ci-info/index.js");const CI_DEFINITIONS=[envFromCIandCIName,getEnvDetect({key:`NOW_BUILDER_ANNOTATE`,name:`ZEIT Now`}),getEnvDetect({key:`NOW_REGION`,name:`ZEIT Now v1`}),herokuDetect,getEnvFromCIInfo,envFromCIWithNoName];function lookupCI(){for(const fn of CI_DEFINITIONS){try{const res=fn();if(res){return res;}}catch(e){// ignore
}}return null;}const CIName=lookupCI();function isCI(){return!!CIName;}function getCIName(){if(!isCI()){return null;}return CIName;}module.exports={isCI,getCIName};function getEnvFromCIInfo(){if(ci.isCI)return ci.name||`ci-info detected w/o name`;return null;}function getEnvDetect({key,name}){return function(){if({}[key]){return name;}return null;};}function herokuDetect(){return /\.heroku\/node\/bin\/node/.test({}.NODE)&&`Heroku`;}function envFromCIandCIName(){if({}.CI_NAME&&{}.CI){return {}.CI_NAME;}return null;}function envFromCIWithNoName(){if({}.CI){return`CI detected without name`;}return null;}

/***/ }),

/***/ "./node_modules/gatsby-core-utils/dist/cpu-core-count.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-core-utils/dist/cpu-core-count.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @type {import('../index').cpuCoreCount}
 */const cpuCoreCount=ignoreEnvVar=>{try{let coreCount=__webpack_require__(/*! ./physical-cpu-count */ "./node_modules/gatsby-core-utils/dist/physical-cpu-count.js")||1;if(ignoreEnvVar){// Return the physical CPU count,
// or default to 1 if we can't detect
return coreCount;}if(typeof {}.GATSBY_CPU_COUNT!==`undefined`){const coreCountArg=Number({}.GATSBY_CPU_COUNT)||{}.GATSBY_CPU_COUNT;switch(typeof coreCountArg){case`string`:// Leave at Default CPU count if coreCountArg === `physical_cores`
// CPU count === logical CPU count
// throw error if we have a problem counting logical cores
if(coreCountArg===`logical_cores`){coreCount=__webpack_require__(/*! os */ "os").cpus().length;if(typeof coreCount!==`number`){throw new Error(`process.env.GATSBY_CPU_COUNT is set to 'logical_cores' but there was a problem finding the number of logical cores`);}}break;case`number`:// CPU count === passed in count
coreCount=coreCountArg;break;default:break;}}return coreCount;}catch(err){throw new Error(`There has been a problem counting the number of CPU cores`);}};module.exports=cpuCoreCount;

/***/ }),

/***/ "./node_modules/gatsby-core-utils/dist/create-content-digest.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-core-utils/dist/create-content-digest.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const crypto=__webpack_require__(/*! crypto */ "crypto");const objectHash=__webpack_require__(/*! node-object-hash */ "./node_modules/node-object-hash/dist/hasher.js");const hasher=objectHash({coerce:false,alg:`md5`,enc:`hex`,sort:{map:true,object:true,array:false,set:false}});const hashPrimitive=input=>crypto.createHash(`md5`).update(input).digest(`hex`);/**
 * @type {import('../index').createContentDigest}
 */const createContentDigest=input=>{if(typeof input===`object`){return hasher.hash(input);}return hashPrimitive(input);};module.exports=createContentDigest;

/***/ }),

/***/ "./node_modules/gatsby-core-utils/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/gatsby-core-utils/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.createContentDigest=__webpack_require__(/*! ./create-content-digest */ "./node_modules/gatsby-core-utils/dist/create-content-digest.js");exports.joinPath=__webpack_require__(/*! ./path */ "./node_modules/gatsby-core-utils/dist/path.js").joinPath;exports.isNodeInternalModulePath=__webpack_require__(/*! ./path */ "./node_modules/gatsby-core-utils/dist/path.js").isNodeInternalModulePath;exports.slash=__webpack_require__(/*! ./path */ "./node_modules/gatsby-core-utils/dist/path.js").slash;exports.cpuCoreCount=__webpack_require__(/*! ./cpu-core-count */ "./node_modules/gatsby-core-utils/dist/cpu-core-count.js");exports.urlResolve=__webpack_require__(/*! ./url */ "./node_modules/gatsby-core-utils/dist/url.js").resolve;exports.isCI=__webpack_require__(/*! ./ci */ "./node_modules/gatsby-core-utils/dist/ci.js").isCI;exports.getCIName=__webpack_require__(/*! ./ci */ "./node_modules/gatsby-core-utils/dist/ci.js").getCIName;

/***/ }),

/***/ "./node_modules/gatsby-core-utils/dist/path.js":
/*!*****************************************************!*\
  !*** ./node_modules/gatsby-core-utils/dist/path.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.joinPath=joinPath;exports.slash=slash;exports.isNodeInternalModulePath=void 0;const path=__webpack_require__(/*! path */ "path");const os=__webpack_require__(/*! os */ "os");/**
 * @type {import('../index').joinPath}
 */function joinPath(...paths){const joinedPath=path.join.apply(path,paths);if(os.platform()===`win32`){return joinedPath.replace(/\\/g,`\\\\`);}return joinedPath;}// copied from https://runpkg.com/?pretty-error@2.1.1/lib/nodePaths.js
// and added `^internal/` test
const nodePaths=[/^_debugger.js$/,/^_http_agent.js$/,/^_http_client.js$/,/^_http_common.js$/,/^_http_incoming.js$/,/^_http_outgoing.js$/,/^_http_server.js$/,/^_linklist.js$/,/^_stream_duplex.js$/,/^_stream_passthrough.js$/,/^_stream_readable.js$/,/^_stream_transform.js$/,/^_stream_writable.js$/,/^_tls_legacy.js$/,/^_tls_wrap.js$/,/^assert.js$/,/^buffer.js$/,/^child_process.js$/,/^cluster.js$/,/^console.js$/,/^constants.js$/,/^crypto.js$/,/^dgram.js$/,/^dns.js$/,/^domain.js$/,/^events.js$/,/^freelist.js$/,/^fs.js$/,/^http.js$/,/^https.js$/,/^module.js$/,/^net.js$/,/^os.js$/,/^path.js$/,/^punycode.js$/,/^querystring.js$/,/^readline.js$/,/^repl.js$/,/^smalloc.js$/,/^stream.js$/,/^string_decoder.js$/,/^sys.js$/,/^timers.js$/,/^tls.js$/,/^tty.js$/,/^url.js$/,/^util.js$/,/^vm.js$/,/^zlib.js$/,/^node.js$/,/^internal[/\\]/];/**
 * @type {import('../index').isNodeInternalModulePath}
 */const isNodeInternalModulePath=fileName=>nodePaths.some(regTest=>regTest.test(fileName));/**
 * slash
 * --
 * Convert Windows backslash paths to slash paths: foo\\bar ➔ foo/bar
 *
 *
 * @param  {String}          path
 * @return {String}          slashed path
 */exports.isNodeInternalModulePath=isNodeInternalModulePath;function slash(path){const isExtendedLengthPath=/^\\\\\?\\/.test(path);if(isExtendedLengthPath){return path;}return path.replace(/\\/g,`/`);}

/***/ }),

/***/ "./node_modules/gatsby-core-utils/dist/physical-cpu-count.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-core-utils/dist/physical-cpu-count.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Forked from physical-cpu-count package from npm
const os=__webpack_require__(/*! os */ "os");const childProcess=__webpack_require__(/*! child_process */ "child_process");function exec(command){const output=childProcess.execSync(command,{encoding:`utf8`});return output;}/*
 * Fallback if child process fails to receive CPU count
 */function fallbackToNodeJSCheck(){const cores=os.cpus().filter(function(cpu,index){const hasHyperthreading=cpu.model.includes(`Intel`);const isOdd=index%2===1;return!hasHyperthreading||isOdd;});return cores.length;}const platform=os.platform();function getPhysicalCpuCount(){try{if(platform===`linux`){const output=exec(`lscpu -p | egrep -v "^#" | sort -u -t, -k 2,4 | wc -l`);return Number(output.trim());}if(platform===`darwin`){const output=exec(`sysctl -n hw.physicalcpu_max`);return Number(output.trim());}if(platform===`win32`){const output=exec(`WMIC CPU Get NumberOfCores`);return output.replace(/\r/g,``).split(`\n`).map(line=>Number(line)).filter(value=>!isNaN(value)).reduce((sum,number)=>sum+number,0);}}catch(err){// carry on
}return fallbackToNodeJSCheck();}module.exports=getPhysicalCpuCount();

/***/ }),

/***/ "./node_modules/gatsby-core-utils/dist/url.js":
/*!****************************************************!*\
  !*** ./node_modules/gatsby-core-utils/dist/url.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.resolve=resolve;const path=__webpack_require__(/*! path */ "path");const os=__webpack_require__(/*! os */ "os");/**
 * @type {import('../index').urlResolve}
 */function resolve(...segments){const joinedPath=path.join.apply(path,segments);if(os.platform()===`win32`){return joinedPath.replace(/\\/g,`/`);}return joinedPath;}

/***/ }),

/***/ "./node_modules/gatsby-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/gatsby-image/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.default=void 0;var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));var _inheritsLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));var logDeprecationNotice=function logDeprecationNotice(prop,replacement){if(true){return;}console.log("\n    The \""+prop+"\" prop is now deprecated and will be removed in the next major version\n    of \"gatsby-image\".\n    ");if(replacement){console.log("Please use "+replacement+" instead of \""+prop+"\".");}};// Handle legacy props during their deprecation phase
var convertProps=function convertProps(props){var convertedProps=(0,_extends2.default)({},props);var resolutions=convertedProps.resolutions,sizes=convertedProps.sizes,critical=convertedProps.critical;if(resolutions){convertedProps.fixed=resolutions;delete convertedProps.resolutions;}if(sizes){convertedProps.fluid=sizes;delete convertedProps.sizes;}if(critical){logDeprecationNotice("critical","the native \"loading\" attribute");convertedProps.loading="eager";}// convert fluid & fixed to arrays so we only have to work with arrays
if(convertedProps.fluid){convertedProps.fluid=groupByMedia([].concat(convertedProps.fluid));}if(convertedProps.fixed){convertedProps.fixed=groupByMedia([].concat(convertedProps.fixed));}return convertedProps;};/**
 * Checks if fluid or fixed are art-direction arrays.
 *
 * @param currentData  {{media?: string}[]}   The props to check for images.
 * @return {boolean}
 */var hasArtDirectionSupport=function hasArtDirectionSupport(currentData){return!!currentData&&Array.isArray(currentData)&&currentData.some(function(image){return typeof image.media!=="undefined";});};/**
 * Tries to detect if a media query matches the current viewport.
 * @property media   {{media?: string}}  A media query string.
 * @return {boolean}
 */var matchesMedia=function matchesMedia(_ref){var media=_ref.media;return media?isBrowser&&!!window.matchMedia(media).matches:false;};/**
 * Find the source of an image to use as a key in the image cache.
 * Use `the first image in either `fixed` or `fluid`
 * @param {{fluid: {src: string, media?: string}[], fixed: {src: string, media?: string}[]}} args
 * @return {string}
 */var getImageSrcKey=function getImageSrcKey(_ref2){var fluid=_ref2.fluid,fixed=_ref2.fixed;var data=fluid?getCurrentSrcData(fluid):getCurrentSrcData(fixed);return data.src;};/**
 * Returns the current src - Preferably with art-direction support.
 * @param currentData  {{media?: string}[]}   The fluid or fixed image array.
 * @return {{src: string, media?: string}}
 */var getCurrentSrcData=function getCurrentSrcData(currentData){if(isBrowser&&hasArtDirectionSupport(currentData)){// Do we have an image for the current Viewport?
var foundMedia=currentData.findIndex(matchesMedia);if(foundMedia!==-1){return currentData[foundMedia];}}// Else return the first image.
return currentData[0];};// Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.
var imageCache=Object.create({});var inImageCache=function inImageCache(props){var convertedProps=convertProps(props);// Find src
var src=getImageSrcKey(convertedProps);return imageCache[src]||false;};var activateCacheForImage=function activateCacheForImage(props){var convertedProps=convertProps(props);// Find src
var src=getImageSrcKey(convertedProps);imageCache[src]=true;};// Native lazy-loading support: https://addyosmani.com/blog/lazy-loading/
var hasNativeLazyLoadSupport=typeof HTMLImageElement!=="undefined"&&"loading"in HTMLImageElement.prototype;var isBrowser=typeof window!=="undefined";var hasIOSupport=isBrowser&&window.IntersectionObserver;var io;var listeners=new WeakMap();function getIO(){if(typeof io==="undefined"&&typeof window!=="undefined"&&window.IntersectionObserver){io=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(listeners.has(entry.target)){var cb=listeners.get(entry.target);// Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(entry.target);listeners.delete(entry.target);cb();}}});},{rootMargin:"200px"});}return io;}function generateImageSources(imageVariants){return imageVariants.map(function(_ref3){var src=_ref3.src,srcSet=_ref3.srcSet,srcSetWebp=_ref3.srcSetWebp,media=_ref3.media,sizes=_ref3.sizes;return _react.default.createElement(_react.default.Fragment,{key:src},srcSetWebp&&_react.default.createElement("source",{type:"image/webp",media:media,srcSet:srcSetWebp,sizes:sizes}),_react.default.createElement("source",{media:media,srcSet:srcSet,sizes:sizes}));});}// Return an array ordered by elements having a media prop, does not use
// native sort, as a stable sort is not guaranteed by all browsers/versions
function groupByMedia(imageVariants){var withMedia=[];var without=[];imageVariants.forEach(function(variant){return(variant.media?withMedia:without).push(variant);});if(without.length>1&&"production"!=="production"){console.warn("We've found "+without.length+" sources without a media property. They might be ignored by the browser, see: https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images");}return[].concat(withMedia,without);}function generateTracedSVGSources(imageVariants){return imageVariants.map(function(_ref4){var src=_ref4.src,media=_ref4.media,tracedSVG=_ref4.tracedSVG;return _react.default.createElement("source",{key:src,media:media,srcSet:tracedSVG});});}function generateBase64Sources(imageVariants){return imageVariants.map(function(_ref5){var src=_ref5.src,media=_ref5.media,base64=_ref5.base64;return _react.default.createElement("source",{key:src,media:media,srcSet:base64});});}function generateNoscriptSource(_ref6,isWebp){var srcSet=_ref6.srcSet,srcSetWebp=_ref6.srcSetWebp,media=_ref6.media,sizes=_ref6.sizes;var src=isWebp?srcSetWebp:srcSet;var mediaAttr=media?"media=\""+media+"\" ":"";var typeAttr=isWebp?"type='image/webp' ":"";var sizesAttr=sizes?"sizes=\""+sizes+"\" ":"";return"<source "+typeAttr+mediaAttr+"srcset=\""+src+"\" "+sizesAttr+"/>";}function generateNoscriptSources(imageVariants){return imageVariants.map(function(variant){return(variant.srcSetWebp?generateNoscriptSource(variant,true):"")+generateNoscriptSource(variant);}).join("");}var listenToIntersections=function listenToIntersections(el,cb){var observer=getIO();if(observer){observer.observe(el);listeners.set(el,cb);}return function(){observer.unobserve(el);listeners.delete(el);};};var noscriptImg=function noscriptImg(props){// Check if prop exists before adding each attribute to the string output below to prevent
// HTML validation issues caused by empty values like width="" and height=""
var src=props.src?"src=\""+props.src+"\" ":"src=\"\" ";// required attribute
var sizes=props.sizes?"sizes=\""+props.sizes+"\" ":"";var srcSet=props.srcSet?"srcset=\""+props.srcSet+"\" ":"";var title=props.title?"title=\""+props.title+"\" ":"";var alt=props.alt?"alt=\""+props.alt+"\" ":"alt=\"\" ";// required attribute
var width=props.width?"width=\""+props.width+"\" ":"";var height=props.height?"height=\""+props.height+"\" ":"";var crossOrigin=props.crossOrigin?"crossorigin=\""+props.crossOrigin+"\" ":"";var loading=props.loading?"loading=\""+props.loading+"\" ":"";var draggable=props.draggable?"draggable=\""+props.draggable+"\" ":"";var sources=generateNoscriptSources(props.imageVariants);return"<picture>"+sources+"<img "+loading+width+height+sizes+srcSet+src+alt+title+crossOrigin+draggable+"style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";};// Earlier versions of gatsby-image during the 2.x cycle did not wrap
// the `Img` component in a `picture` element. This maintains compatibility
// until a breaking change can be introduced in the next major release
var Placeholder=function Placeholder(_ref7){var src=_ref7.src,imageVariants=_ref7.imageVariants,generateSources=_ref7.generateSources,spreadProps=_ref7.spreadProps,ariaHidden=_ref7.ariaHidden;var baseImage=_react.default.createElement(Img,(0,_extends2.default)({src:src},spreadProps,{ariaHidden:ariaHidden}));return imageVariants.length>1?_react.default.createElement("picture",null,generateSources(imageVariants),baseImage):baseImage;};var Img=_react.default.forwardRef(function(props,ref){var sizes=props.sizes,srcSet=props.srcSet,src=props.src,style=props.style,onLoad=props.onLoad,onError=props.onError,loading=props.loading,draggable=props.draggable,ariaHidden=props.ariaHidden,otherProps=(0,_objectWithoutPropertiesLoose2.default)(props,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return _react.default.createElement("img",(0,_extends2.default)({"aria-hidden":ariaHidden,sizes:sizes,srcSet:srcSet,src:src},otherProps,{onLoad:onLoad,onError:onError,ref:ref,loading:loading,draggable:draggable,style:(0,_extends2.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},style)}));});Img.propTypes={style:_propTypes.default.object,onError:_propTypes.default.func,onLoad:_propTypes.default.func};var Image=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2.default)(Image,_React$Component);function Image(props){var _this;_this=_React$Component.call(this,props)||this;// If this image has already been loaded before then we can assume it's
// already in the browser cache so it's cheap to just show directly.
_this.seenBefore=isBrowser&&inImageCache(props);_this.isCritical=props.loading==="eager"||props.critical;_this.addNoScript=!(_this.isCritical&&!props.fadeIn);_this.useIOSupport=!hasNativeLazyLoadSupport&&hasIOSupport&&!_this.isCritical&&!_this.seenBefore;var isVisible=_this.isCritical||isBrowser&&(hasNativeLazyLoadSupport||!_this.useIOSupport);_this.state={isVisible:isVisible,imgLoaded:false,imgCached:false,fadeIn:!_this.seenBefore&&props.fadeIn};_this.imageRef=_react.default.createRef();_this.handleImageLoaded=_this.handleImageLoaded.bind((0,_assertThisInitialized2.default)(_this));_this.handleRef=_this.handleRef.bind((0,_assertThisInitialized2.default)(_this));return _this;}var _proto=Image.prototype;_proto.componentDidMount=function componentDidMount(){if(this.state.isVisible&&typeof this.props.onStartLoad==="function"){this.props.onStartLoad({wasCached:inImageCache(this.props)});}if(this.isCritical){var img=this.imageRef.current;if(img&&img.complete){this.handleImageLoaded();}}};_proto.componentWillUnmount=function componentWillUnmount(){if(this.cleanUpListeners){this.cleanUpListeners();}}// Specific to IntersectionObserver based lazy-load support
;_proto.handleRef=function handleRef(ref){var _this2=this;if(this.useIOSupport&&ref){this.cleanUpListeners=listenToIntersections(ref,function(){var imageInCache=inImageCache(_this2.props);if(!_this2.state.isVisible&&typeof _this2.props.onStartLoad==="function"){_this2.props.onStartLoad({wasCached:imageInCache});}// imgCached and imgLoaded must update after isVisible,
// Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
// imgLoaded and imgCached are in a 2nd setState call to be changed together,
// avoiding initiating unnecessary animation frames from style changes.
_this2.setState({isVisible:true},function(){return _this2.setState({imgLoaded:imageInCache,// `currentSrc` should be a string, but can be `undefined` in IE,
// !! operator validates the value is not undefined/null/""
imgCached:!!_this2.imageRef.current.currentSrc});});});}};_proto.handleImageLoaded=function handleImageLoaded(){activateCacheForImage(this.props);this.setState({imgLoaded:true});if(this.props.onLoad){this.props.onLoad();}};_proto.render=function render(){var _convertProps=convertProps(this.props),title=_convertProps.title,alt=_convertProps.alt,className=_convertProps.className,_convertProps$style=_convertProps.style,style=_convertProps$style===void 0?{}:_convertProps$style,_convertProps$imgStyl=_convertProps.imgStyle,imgStyle=_convertProps$imgStyl===void 0?{}:_convertProps$imgStyl,_convertProps$placeho=_convertProps.placeholderStyle,placeholderStyle=_convertProps$placeho===void 0?{}:_convertProps$placeho,placeholderClassName=_convertProps.placeholderClassName,fluid=_convertProps.fluid,fixed=_convertProps.fixed,backgroundColor=_convertProps.backgroundColor,durationFadeIn=_convertProps.durationFadeIn,Tag=_convertProps.Tag,itemProp=_convertProps.itemProp,loading=_convertProps.loading,draggable=_convertProps.draggable;var shouldReveal=this.state.fadeIn===false||this.state.imgLoaded;var shouldFadeIn=this.state.fadeIn===true&&!this.state.imgCached;var imageStyle=(0,_extends2.default)({opacity:shouldReveal?1:0,transition:shouldFadeIn?"opacity "+durationFadeIn+"ms":"none"},imgStyle);var bgColor=typeof backgroundColor==="boolean"?"lightgray":backgroundColor;var delayHideStyle={transitionDelay:durationFadeIn+"ms"};var imagePlaceholderStyle=(0,_extends2.default)({opacity:this.state.imgLoaded?0:1},shouldFadeIn&&delayHideStyle,{},imgStyle,{},placeholderStyle);var placeholderImageProps={title:title,alt:!this.state.isVisible?alt:"",style:imagePlaceholderStyle,className:placeholderClassName,itemProp:itemProp};if(fluid){var imageVariants=fluid;var image=getCurrentSrcData(fluid);return _react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:(0,_extends2.default)({position:"relative",overflow:"hidden"},style),ref:this.handleRef,key:"fluid-"+JSON.stringify(image.srcSet)},_react.default.createElement(Tag,{"aria-hidden":true,style:{width:"100%",paddingBottom:100/image.aspectRatio+"%"}}),bgColor&&_react.default.createElement(Tag,{"aria-hidden":true,title:title,style:(0,_extends2.default)({backgroundColor:bgColor,position:"absolute",top:0,bottom:0,opacity:!this.state.imgLoaded?1:0,right:0,left:0},shouldFadeIn&&delayHideStyle)}),image.base64&&_react.default.createElement(Placeholder,{ariaHidden:true,src:image.base64,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateBase64Sources}),image.tracedSVG&&_react.default.createElement(Placeholder,{ariaHidden:true,src:image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&_react.default.createElement("picture",null,generateImageSources(imageVariants),_react.default.createElement(Img,{alt:alt,title:title,sizes:image.sizes,src:image.src,crossOrigin:this.props.crossOrigin,srcSet:image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},image,{imageVariants:imageVariants}))}}));}if(fixed){var _imageVariants=fixed;var _image=getCurrentSrcData(fixed);var divStyle=(0,_extends2.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_image.width,height:_image.height},style);if(style.display==="inherit"){delete divStyle.display;}return _react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:divStyle,ref:this.handleRef,key:"fixed-"+JSON.stringify(_image.srcSet)},bgColor&&_react.default.createElement(Tag,{"aria-hidden":true,title:title,style:(0,_extends2.default)({backgroundColor:bgColor,width:_image.width,opacity:!this.state.imgLoaded?1:0,height:_image.height},shouldFadeIn&&delayHideStyle)}),_image.base64&&_react.default.createElement(Placeholder,{ariaHidden:true,src:_image.base64,spreadProps:placeholderImageProps,imageVariants:_imageVariants,generateSources:generateBase64Sources}),_image.tracedSVG&&_react.default.createElement(Placeholder,{ariaHidden:true,src:_image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:_imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&_react.default.createElement("picture",null,generateImageSources(_imageVariants),_react.default.createElement(Img,{alt:alt,title:title,width:_image.width,height:_image.height,sizes:_image.sizes,src:_image.src,crossOrigin:this.props.crossOrigin,srcSet:_image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},_image,{imageVariants:_imageVariants}))}}));}return null;};return Image;}(_react.default.Component);Image.defaultProps={fadeIn:true,durationFadeIn:500,alt:"",Tag:"div",// We set it to `lazy` by default because it's best to default to a performant
// setting and let the user "opt out" to `eager`
loading:"lazy"};var fixedObject=_propTypes.default.shape({width:_propTypes.default.number.isRequired,height:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string});var fluidObject=_propTypes.default.shape({aspectRatio:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,sizes:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string});// If you modify these propTypes, please don't forget to update following files as well:
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/index.d.ts
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/README.md#gatsby-image-props
// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/gatsby-image.md#gatsby-image-props
Image.propTypes={resolutions:fixedObject,sizes:fluidObject,fixed:_propTypes.default.oneOfType([fixedObject,_propTypes.default.arrayOf(fixedObject)]),fluid:_propTypes.default.oneOfType([fluidObject,_propTypes.default.arrayOf(fluidObject)]),fadeIn:_propTypes.default.bool,durationFadeIn:_propTypes.default.number,title:_propTypes.default.string,alt:_propTypes.default.string,className:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.object]),// Support Glamor's css prop.
critical:_propTypes.default.bool,crossOrigin:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),style:_propTypes.default.object,imgStyle:_propTypes.default.object,placeholderStyle:_propTypes.default.object,placeholderClassName:_propTypes.default.string,backgroundColor:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),onLoad:_propTypes.default.func,onError:_propTypes.default.func,onStartLoad:_propTypes.default.func,Tag:_propTypes.default.string,itemProp:_propTypes.default.string,loading:_propTypes.default.oneOf(["auto","lazy","eager"]),draggable:_propTypes.default.bool};var _default=Image;exports.default=_default;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.withAssetPrefix = withAssetPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

function withPrefix(path) {
  return normalizePath([ true ? "" : undefined, path].join("/"));
}

function withAssetPrefix(path) {
  return [""].concat([path.replace(/^\//, "")]).join("/");
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool
}; // Set up IntersectionObserver

var createIntersectionObserver = function createIntersectionObserver(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
  return {
    instance: io,
    el: el
  };
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, {}, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.io) {
      return;
    }

    var _this$io = this.io,
        instance = _this$io.instance,
        el = _this$io.el;
    instance.unobserve(el);
    instance.disconnect();
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      this.io = createIntersectionObserver(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});

var showDeprecationWarning = function showDeprecationWarning(functionName, altFunctionName, version) {
  return console.warn("The \"" + functionName + "\" method is now deprecated and will be removed in Gatsby v" + version + ". Please use \"" + altFunctionName + "\" instead.");
};

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  showDeprecationWarning("push", "navigate", 3);

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  showDeprecationWarning("replace", "navigate", 3);

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  showDeprecationWarning("navigateTo", "navigate", 3);
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-layout/gatsby-ssr.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-layout/gatsby-ssr.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.wrapPageElement=__webpack_require__(/*! ./wrap-page */ "./node_modules/gatsby-plugin-layout/wrap-page.js");

/***/ }),

/***/ "./node_modules/gatsby-plugin-layout/wrap-page.js":
/*!********************************************************!*\
  !*** ./node_modules/gatsby-plugin-layout/wrap-page.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var React=__webpack_require__(/*! react */ "react");var preferDefault=function preferDefault(m){return m&&m.default||m;};var Layout;try{Layout=preferDefault(__webpack_require__(/*! ./src/layouts/index */ "./src/layouts/index.js"));}catch(e){if(e.toString().indexOf("Error: Cannot find module")!==-1){throw new Error("Couldn't find layout component at \""+"D:\\Projets\\Git\\gatsby\\gatsby-app\\src\\layouts\\index"+".\n\n"+"Please create layout component in that location or specify path to layout component in gatsby-config.js");}else{// Logging the error for debugging older browsers as there is no way
// to wrap the thrown error in a try/catch.
console.error(e);throw e;}}// eslint-disable-next-line react/prop-types,react/display-name
module.exports=function(_ref){var element=_ref.element,props=_ref.props;return React.createElement(Layout,props,element);};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/common.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/common.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _fs=_interopRequireDefault(__webpack_require__(/*! fs */ "fs"));var _path=_interopRequireDefault(__webpack_require__(/*! path */ "path"));// default icons for generating icons
exports.defaultIcons=[{src:"icons/icon-48x48.png",sizes:"48x48",type:"image/png"},{src:"icons/icon-72x72.png",sizes:"72x72",type:"image/png"},{src:"icons/icon-96x96.png",sizes:"96x96",type:"image/png"},{src:"icons/icon-144x144.png",sizes:"144x144",type:"image/png"},{src:"icons/icon-192x192.png",sizes:"192x192",type:"image/png"},{src:"icons/icon-256x256.png",sizes:"256x256",type:"image/png"},{src:"icons/icon-384x384.png",sizes:"384x384",type:"image/png"},{src:"icons/icon-512x512.png",sizes:"512x512",type:"image/png"}];/**
 * Check if the icon exists on the filesystem
 *
 * @param {String} srcIcon Path of the icon
 */exports.doesIconExist=function doesIconExist(srcIcon){try{return _fs.default.statSync(srcIcon).isFile();}catch(e){if(e.code!=="ENOENT"){throw e;}return false;}};/**
 * @param {string} path The generic path to an icon
 * @param {string} digest The digest of the icon provided in the plugin's options.
 */exports.addDigestToPath=function(path,digest,method){if(method==="name"){var parsedPath=_path.default.parse(path);return parsedPath.dir+"/"+parsedPath.name+"-"+digest+parsedPath.ext;}if(method==="query"){return path+"?v="+digest;}return path;};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/gatsby-ssr.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _gatsby=__webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");var _fs=_interopRequireDefault(__webpack_require__(/*! fs */ "fs"));var _gatsbyCoreUtils=__webpack_require__(/*! gatsby-core-utils */ "./node_modules/gatsby-core-utils/dist/index.js");var _common=__webpack_require__(/*! ./common.js */ "./node_modules/gatsby-plugin-manifest/common.js");var _getManifestPathname=_interopRequireDefault(__webpack_require__(/*! ./get-manifest-pathname */ "./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js"));// TODO: remove for v3
var withPrefix=_gatsby.withAssetPrefix||_gatsby.withPrefix;var iconDigest=null;exports.onRenderBody=function(_ref,_ref2){var setHeadComponents=_ref.setHeadComponents,_ref$pathname=_ref.pathname,pathname=_ref$pathname===void 0?"/":_ref$pathname;var localize=_ref2.localize,pluginOptions=(0,_objectWithoutPropertiesLoose2.default)(_ref2,["localize"]);// We use this to build a final array to pass as the argument to setHeadComponents at the end of onRenderBody.
var headComponents=[];var srcIconExists=!!pluginOptions.icon;var icons=pluginOptions.icons||_common.defaultIcons;var legacy=typeof pluginOptions.legacy!=="undefined"?pluginOptions.legacy:true;var cacheBusting=typeof pluginOptions.cache_busting_mode!=="undefined"?pluginOptions.cache_busting_mode:"query";// If icons were generated, also add a favicon link.
if(srcIconExists){var favicon=icons&&icons.length?icons[0].src:null;if(cacheBusting!=="none"){iconDigest=(0,_gatsbyCoreUtils.createContentDigest)(_fs.default.readFileSync(pluginOptions.icon));}var insertFaviconLinkTag=typeof pluginOptions.include_favicon!=="undefined"?pluginOptions.include_favicon:true;if(favicon&&insertFaviconLinkTag){headComponents.push(_react.default.createElement("link",{key:"gatsby-plugin-manifest-icon-link",rel:"icon",href:withPrefix((0,_common.addDigestToPath)(favicon,iconDigest,cacheBusting))}));}}var manifestFileName=(0,_getManifestPathname.default)(pathname,localize);// Add manifest link tag.
headComponents.push(_react.default.createElement("link",{key:"gatsby-plugin-manifest-link",rel:"manifest",href:withPrefix("/"+manifestFileName),crossOrigin:pluginOptions.crossOrigin}));// The user has an option to opt out of the theme_color meta tag being inserted into the head.
if(pluginOptions.theme_color){var insertMetaTag=typeof pluginOptions.theme_color_in_head!=="undefined"?pluginOptions.theme_color_in_head:true;if(insertMetaTag){headComponents.push(_react.default.createElement("meta",{key:"gatsby-plugin-manifest-meta",name:"theme-color",content:pluginOptions.theme_color}));}}if(legacy){var iconLinkTags=icons.map(function(icon){return _react.default.createElement("link",{key:"gatsby-plugin-manifest-apple-touch-icon-"+icon.sizes,rel:"apple-touch-icon",sizes:icon.sizes,href:withPrefix((0,_common.addDigestToPath)(icon.src,iconDigest,srcIconExists?cacheBusting:"none"))});});headComponents=[].concat(headComponents,iconLinkTags);}setHeadComponents(headComponents);return true;};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.default=void 0;/**
 * Get a manifest filename depending on localized pathname
 *
 * @param {string} pathname
 * @param {Array<{start_url: string, lang: string}>} localizedManifests
 * @return string
 */var _default=function _default(pathname,localizedManifests){var defaultFilename="manifest.webmanifest";if(!Array.isArray(localizedManifests)){return defaultFilename;}var localizedManifest=localizedManifests.find(function(app){return pathname.startsWith(app.start_url);});if(!localizedManifest){return defaultFilename;}return"manifest_"+localizedManifest.lang+".webmanifest";};exports.default=_default;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.onRenderBody=void 0;var _reactHelmet=__webpack_require__(/*! react-helmet */ "react-helmet");var onRenderBody=function onRenderBody(_ref){var setHeadComponents=_ref.setHeadComponents,setHtmlAttributes=_ref.setHtmlAttributes,setBodyAttributes=_ref.setBodyAttributes;var helmet=_reactHelmet.Helmet.renderStatic();// These action functions were added partway through the Gatsby 1.x cycle.
if(setHtmlAttributes){setHtmlAttributes(helmet.htmlAttributes.toComponent());}if(setBodyAttributes){setBodyAttributes(helmet.bodyAttributes.toComponent());}setHeadComponents([helmet.title.toComponent(),helmet.link.toComponent(),helmet.meta.toComponent(),helmet.noscript.toComponent(),helmet.script.toComponent(),helmet.style.toComponent(),helmet.base.toComponent()]);};exports.onRenderBody=onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby-plugin-transitions/dist/index.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/gatsby-plugin-transitions/dist/index.es.js ***!
  \*****************************************************************/
/*! exports provided: TransitionLink, TransitionProvider, TransitionViews, useTransitionStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionLink", function() { return TransitionLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionProvider", function() { return TransitionProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionViews", function() { return TransitionViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransitionStore", function() { return useTransitionStore; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2;}}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||Object.prototype.toString.call(arr)==="[object Arguments]")){return;}var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function unwrapExports(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,'default')?x['default']:x;}function createCommonjsModule(fn,module){return module={exports:{}},fn(module,module.exports),module.exports;}var reactIs_production_min=createCommonjsModule(function(module,exports){Object.defineProperty(exports,"__esModule",{value:!0});var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u;}}case d:return u;}}}function z(a){return y(a)===m;}exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x);};exports.isAsyncMode=function(a){return z(a)||y(a)===l;};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k;};exports.isContextProvider=function(a){return y(a)===h;};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c;};exports.isForwardRef=function(a){return y(a)===n;};exports.isFragment=function(a){return y(a)===e;};exports.isLazy=function(a){return y(a)===t;};exports.isMemo=function(a){return y(a)===r;};exports.isPortal=function(a){return y(a)===d;};exports.isProfiler=function(a){return y(a)===g;};exports.isStrictMode=function(a){return y(a)===f;};exports.isSuspense=function(a){return y(a)===p;};});unwrapExports(reactIs_production_min);var reactIs_production_min_1=reactIs_production_min.typeOf;var reactIs_production_min_2=reactIs_production_min.AsyncMode;var reactIs_production_min_3=reactIs_production_min.ConcurrentMode;var reactIs_production_min_4=reactIs_production_min.ContextConsumer;var reactIs_production_min_5=reactIs_production_min.ContextProvider;var reactIs_production_min_6=reactIs_production_min.Element;var reactIs_production_min_7=reactIs_production_min.ForwardRef;var reactIs_production_min_8=reactIs_production_min.Fragment;var reactIs_production_min_9=reactIs_production_min.Lazy;var reactIs_production_min_10=reactIs_production_min.Memo;var reactIs_production_min_11=reactIs_production_min.Portal;var reactIs_production_min_12=reactIs_production_min.Profiler;var reactIs_production_min_13=reactIs_production_min.StrictMode;var reactIs_production_min_14=reactIs_production_min.Suspense;var reactIs_production_min_15=reactIs_production_min.isValidElementType;var reactIs_production_min_16=reactIs_production_min.isAsyncMode;var reactIs_production_min_17=reactIs_production_min.isConcurrentMode;var reactIs_production_min_18=reactIs_production_min.isContextConsumer;var reactIs_production_min_19=reactIs_production_min.isContextProvider;var reactIs_production_min_20=reactIs_production_min.isElement;var reactIs_production_min_21=reactIs_production_min.isForwardRef;var reactIs_production_min_22=reactIs_production_min.isFragment;var reactIs_production_min_23=reactIs_production_min.isLazy;var reactIs_production_min_24=reactIs_production_min.isMemo;var reactIs_production_min_25=reactIs_production_min.isPortal;var reactIs_production_min_26=reactIs_production_min.isProfiler;var reactIs_production_min_27=reactIs_production_min.isStrictMode;var reactIs_production_min_28=reactIs_production_min.isSuspense;var reactIs_development=createCommonjsModule(function(module,exports){if(false){}});unwrapExports(reactIs_development);var reactIs_development_1=reactIs_development.typeOf;var reactIs_development_2=reactIs_development.AsyncMode;var reactIs_development_3=reactIs_development.ConcurrentMode;var reactIs_development_4=reactIs_development.ContextConsumer;var reactIs_development_5=reactIs_development.ContextProvider;var reactIs_development_6=reactIs_development.Element;var reactIs_development_7=reactIs_development.ForwardRef;var reactIs_development_8=reactIs_development.Fragment;var reactIs_development_9=reactIs_development.Lazy;var reactIs_development_10=reactIs_development.Memo;var reactIs_development_11=reactIs_development.Portal;var reactIs_development_12=reactIs_development.Profiler;var reactIs_development_13=reactIs_development.StrictMode;var reactIs_development_14=reactIs_development.Suspense;var reactIs_development_15=reactIs_development.isValidElementType;var reactIs_development_16=reactIs_development.isAsyncMode;var reactIs_development_17=reactIs_development.isConcurrentMode;var reactIs_development_18=reactIs_development.isContextConsumer;var reactIs_development_19=reactIs_development.isContextProvider;var reactIs_development_20=reactIs_development.isElement;var reactIs_development_21=reactIs_development.isForwardRef;var reactIs_development_22=reactIs_development.isFragment;var reactIs_development_23=reactIs_development.isLazy;var reactIs_development_24=reactIs_development.isMemo;var reactIs_development_25=reactIs_development.isPortal;var reactIs_development_26=reactIs_development.isProfiler;var reactIs_development_27=reactIs_development.isStrictMode;var reactIs_development_28=reactIs_development.isSuspense;var reactIs=createCommonjsModule(function(module){if(true){module.exports=reactIs_production_min;}else{}});/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ /* eslint-disable no-unused-vars */var getOwnPropertySymbols=Object.getOwnPropertySymbols;var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val===null||val===undefined){throw new TypeError('Object.assign cannot be called with null or undefined');}return Object(val);}function shouldUseNative(){try{if(!Object.assign){return false;}// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var test1=new String('abc');// eslint-disable-line no-new-wrappers
test1[5]='de';if(Object.getOwnPropertyNames(test1)[0]==='5'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test2={};for(var i=0;i<10;i++){test2['_'+String.fromCharCode(i)]=i;}var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n];});if(order2.join('')!=='0123456789'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test3={};'abcdefghijklmnopqrst'.split('').forEach(function(letter){test3[letter]=letter;});if(Object.keys(Object.assign({},test3)).join('')!=='abcdefghijklmnopqrst'){return false;}return true;}catch(err){// We don't expect any of the above to throw, but better to be safe.
return false;}}var objectAssign=shouldUseNative()?Object.assign:function(target,source){var from;var to=toObject(target);var symbols;for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){to[symbols[i]]=from[symbols[i]];}}}}return to;};/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';var ReactPropTypesSecret_1=ReactPropTypesSecret;var printWarning=function(){};if(false){ var has, loggedTypeFailures, ReactPropTypesSecret$1; }/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */function checkPropTypes(typeSpecs,values,location,componentName,getStack){if(false){ var stack, err, error, typeSpecName; }}/**
 * Resets warning cache when testing.
 *
 * @private
 */checkPropTypes.resetWarningCache=function(){if(false){}};var checkPropTypes_1=checkPropTypes;var has$1=Function.call.bind(Object.prototype.hasOwnProperty);var printWarning$1=function(){};if(false){}function emptyFunctionThatReturnsNull(){return null;}var factoryWithTypeCheckers=function(isValidElement,throwOnDirectAccess){/* global Symbol */var ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';// Before Symbol spec.
/**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */function getIteratorFn(maybeIterable){var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);if(typeof iteratorFn==='function'){return iteratorFn;}}/**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */var ANONYMOUS='<<anonymous>>';// Important!
// Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
var ReactPropTypes={array:createPrimitiveTypeChecker('array'),bool:createPrimitiveTypeChecker('boolean'),func:createPrimitiveTypeChecker('function'),number:createPrimitiveTypeChecker('number'),object:createPrimitiveTypeChecker('object'),string:createPrimitiveTypeChecker('string'),symbol:createPrimitiveTypeChecker('symbol'),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:createElementTypeChecker(),elementType:createElementTypeTypeChecker(),instanceOf:createInstanceTypeChecker,node:createNodeChecker(),objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker,exact:createStrictShapeTypeChecker};/**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/function is(x,y){// SameValue algorithm
if(x===y){// Steps 1-5, 7-10
// Steps 6.b-6.e: +0 != -0
return x!==0||1/x===1/y;}else{// Step 6.a: NaN == NaN
return x!==x&&y!==y;}}/*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */function PropTypeError(message){this.message=message;this.stack='';}// Make `instanceof Error` still work for returned errors.
PropTypeError.prototype=Error.prototype;function createChainableTypeChecker(validate){if(false){ var manualPropTypeWarningCount, manualPropTypeCallCache; }function checkType(isRequired,props,propName,componentName,location,propFullName,secret){componentName=componentName||ANONYMOUS;propFullName=propFullName||propName;if(secret!==ReactPropTypesSecret_1){if(throwOnDirectAccess){// New behavior only for users of `prop-types` package
var err=new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. '+'Use `PropTypes.checkPropTypes()` to call them. '+'Read more at http://fb.me/use-check-prop-types');err.name='Invariant Violation';throw err;}else if(false){ var cacheKey; }}if(props[propName]==null){if(isRequired){if(props[propName]===null){return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required '+('in `'+componentName+'`, but its value is `null`.'));}return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required in '+('`'+componentName+'`, but its value is `undefined`.'));}return null;}else{return validate(props,propName,componentName,location,propFullName);}}var chainedCheckType=checkType.bind(null,false);chainedCheckType.isRequired=checkType.bind(null,true);return chainedCheckType;}function createPrimitiveTypeChecker(expectedType){function validate(props,propName,componentName,location,propFullName,secret){var propValue=props[propName];var propType=getPropType(propValue);if(propType!==expectedType){// `propValue` being instance of, say, date/regexp, pass the 'object'
// check, but we can offer a more precise error message here rather than
// 'of type `object`'.
var preciseType=getPreciseType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+preciseType+'` supplied to `'+componentName+'`, expected ')+('`'+expectedType+'`.'));}return null;}return createChainableTypeChecker(validate);}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunctionThatReturnsNull);}function createArrayOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside arrayOf.');}var propValue=props[propName];if(!Array.isArray(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an array.'));}for(var i=0;i<propValue.length;i++){var error=typeChecker(propValue,i,componentName,location,propFullName+'['+i+']',ReactPropTypesSecret_1);if(error instanceof Error){return error;}}return null;}return createChainableTypeChecker(validate);}function createElementTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!isValidElement(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement.'));}return null;}return createChainableTypeChecker(validate);}function createElementTypeTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!reactIs.isValidElementType(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement type.'));}return null;}return createChainableTypeChecker(validate);}function createInstanceTypeChecker(expectedClass){function validate(props,propName,componentName,location,propFullName){if(!(props[propName]instanceof expectedClass)){var expectedClassName=expectedClass.name||ANONYMOUS;var actualClassName=getClassName(props[propName]);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+actualClassName+'` supplied to `'+componentName+'`, expected ')+('instance of `'+expectedClassName+'`.'));}return null;}return createChainableTypeChecker(validate);}function createEnumTypeChecker(expectedValues){if(!Array.isArray(expectedValues)){if(false){}return emptyFunctionThatReturnsNull;}function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];for(var i=0;i<expectedValues.length;i++){if(is(propValue,expectedValues[i])){return null;}}var valuesString=JSON.stringify(expectedValues,function replacer(key,value){var type=getPreciseType(value);if(type==='symbol'){return String(value);}return value;});return new PropTypeError('Invalid '+location+' `'+propFullName+'` of value `'+String(propValue)+'` '+('supplied to `'+componentName+'`, expected one of '+valuesString+'.'));}return createChainableTypeChecker(validate);}function createObjectOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside objectOf.');}var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an object.'));}for(var key in propValue){if(has$1(propValue,key)){var error=typeChecker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret_1);if(error instanceof Error){return error;}}}return null;}return createChainableTypeChecker(validate);}function createUnionTypeChecker(arrayOfTypeCheckers){if(!Array.isArray(arrayOfTypeCheckers)){ false?undefined:void 0;return emptyFunctionThatReturnsNull;}for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(typeof checker!=='function'){printWarning$1('Invalid argument supplied to oneOfType. Expected an array of check functions, but '+'received '+getPostfixForTypeWarning(checker)+' at index '+i+'.');return emptyFunctionThatReturnsNull;}}function validate(props,propName,componentName,location,propFullName){for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(checker(props,propName,componentName,location,propFullName,ReactPropTypesSecret_1)==null){return null;}}return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`.'));}return createChainableTypeChecker(validate);}function createNodeChecker(){function validate(props,propName,componentName,location,propFullName){if(!isNode(props[propName])){return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a ReactNode.'));}return null;}return createChainableTypeChecker(validate);}function createShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}for(var key in shapeTypes){var checker=shapeTypes[key];if(!checker){continue;}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret_1);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function createStrictShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}// We need to check all keys in case some are required but missing from
// props.
var allKeys=objectAssign({},props[propName],shapeTypes);for(var key in allKeys){var checker=shapeTypes[key];if(!checker){return new PropTypeError('Invalid '+location+' `'+propFullName+'` key `'+key+'` supplied to `'+componentName+'`.'+'\nBad object: '+JSON.stringify(props[propName],null,'  ')+'\nValid keys: '+JSON.stringify(Object.keys(shapeTypes),null,'  '));}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret_1);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function isNode(propValue){switch(typeof propValue){case'number':case'string':case'undefined':return true;case'boolean':return!propValue;case'object':if(Array.isArray(propValue)){return propValue.every(isNode);}if(propValue===null||isValidElement(propValue)){return true;}var iteratorFn=getIteratorFn(propValue);if(iteratorFn){var iterator=iteratorFn.call(propValue);var step;if(iteratorFn!==propValue.entries){while(!(step=iterator.next()).done){if(!isNode(step.value)){return false;}}}else{// Iterator will provide entry [k,v] tuples rather than values.
while(!(step=iterator.next()).done){var entry=step.value;if(entry){if(!isNode(entry[1])){return false;}}}}}else{return false;}return true;default:return false;}}function isSymbol(propType,propValue){// Native Symbol.
if(propType==='symbol'){return true;}// falsy value can't be a Symbol
if(!propValue){return false;}// 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
if(propValue['@@toStringTag']==='Symbol'){return true;}// Fallback for non-spec compliant Symbols which are polyfilled.
if(typeof Symbol==='function'&&propValue instanceof Symbol){return true;}return false;}// Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(propValue){var propType=typeof propValue;if(Array.isArray(propValue)){return'array';}if(propValue instanceof RegExp){// Old webkits (at least until Android 4.0) return 'function' rather than
// 'object' for typeof a RegExp. We'll normalize this here so that /bla/
// passes PropTypes.object.
return'object';}if(isSymbol(propType,propValue)){return'symbol';}return propType;}// This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function getPreciseType(propValue){if(typeof propValue==='undefined'||propValue===null){return''+propValue;}var propType=getPropType(propValue);if(propType==='object'){if(propValue instanceof Date){return'date';}else if(propValue instanceof RegExp){return'regexp';}}return propType;}// Returns a string that is postfixed to a warning about an invalid type.
// For example, "undefined" or "of type array"
function getPostfixForTypeWarning(value){var type=getPreciseType(value);switch(type){case'array':case'object':return'an '+type;case'boolean':case'date':case'regexp':return'a '+type;default:return type;}}// Returns class name of the object, if any.
function getClassName(propValue){if(!propValue.constructor||!propValue.constructor.name){return ANONYMOUS;}return propValue.constructor.name;}ReactPropTypes.checkPropTypes=checkPropTypes_1;ReactPropTypes.resetWarningCache=checkPropTypes_1.resetWarningCache;ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes;};function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction;var factoryWithThrowingShims=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret===ReactPropTypesSecret_1){// It is still safe when called from React.
return;}var err=new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. '+'Use PropTypes.checkPropTypes() to call them. '+'Read more at http://fb.me/use-check-prop-types');err.name='Invariant Violation';throw err;}shim.isRequired=shim;function getShim(){return shim;}// Important!
// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes;};var propTypes=createCommonjsModule(function(module){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */if(false){ var throwOnDirectAccess, ReactIs; }else{// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
module.exports=factoryWithThrowingShims();}});function getConfig(springConfig){if(typeof react_spring__WEBPACK_IMPORTED_MODULE_2__["config"]==='string'){return react_spring__WEBPACK_IMPORTED_MODULE_2__["config"].springConfig||{};}return springConfig||{};}function getCallback(callback){if(typeof callback==='function')return callback;return null;}function getOpacity(opacity){if(typeof opacity==='number'&&opacity>=0)return opacity;return 1;}function getTransform(transform){if(transform&&typeof transform==='string')return transform;return'none';}function validateSpring(spring){return{opacity:getOpacity(spring.opacity),transform:getTransform(spring.transform),config:getConfig(spring.config),onStart:getCallback(spring.onStart),onFrame:getCallback(spring.onFrame),onRest:getCallback(spring.onRest)};}function getY(key){var scroll=window.sessionStorage.getItem("@@scroll|".concat(key));var scrollArray=JSON.parse(scroll);if(!scrollArray)return 0;return scrollArray[1];}function filterViews(views){return views.filter(function(view){return view;});}var reducer=function(state,action){switch(action.type){case'NAVIGATE':return _objectSpread2({},state,{to:action.to,enterInterim:action.enter&&validateSpring(action.enter),usualInterim:action.usual&&validateSpring(action.usual),leaveInterim:action.leave&&validateSpring(action.leave),modeInterim:action.mode,keepInterim:action.keep,y:action.y});case'UPDATE_LOCATION':var locationScrollY=getY(action.location.key);return _objectSpread2({},state,{to:undefined,y:undefined,enterInterim:null,usualInterim:null,leaveInterim:null,modeInterim:'',currentLocation:_objectSpread2({},action.location,{skipAnimations:locationScrollY&&window.safari,enter:state.enterInterim,usual:state.usualInterim,leave:state.leaveInterim,y:state.y||locationScrollY||0,mode:state.modeInterim}),prevLocation:_objectSpread2({},state.currentLocation,{y:state.currentLocation&&getY(state.currentLocation.key)}),views:[null].concat(_toConsumableArray(filterViews(state.views))),keep:state.keepInterim?_objectSpread2({},state.views[0],{y:state.currentLocation&&getY(state.currentLocation.key)}):state.keep,keepInterim:false,hasEntered:false});case'ADD_QUEUE':return _objectSpread2({},state,{queue:action.view});case'REMOVE_VIEW':return _objectSpread2({},state,{views:state.views.filter(function(view){if(view&&view.props.location.key===action.locationKey)return false;return true;})});case'ADD_VIEW_FROM_QUEUE':return _objectSpread2({},state,{views:[state.queue].concat(_toConsumableArray(filterViews(state.views))),queue:null});case'ADD_VIEW_DIRECTLY':return _objectSpread2({},state,{views:[action.view].concat(_toConsumableArray(filterViews(state.views))),queue:null});case'UPDATE_MODE':return _objectSpread2({},state,{mode:action.mode});case'HAS_ENTERED':return _objectSpread2({},state,{hasEntered:true});case'REMOVE_KEEP':return _objectSpread2({},state,{keep:null});default:return state;}};var TransitionContext=Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();var TransitionProvider=function TransitionProvider(props){var _useReducer=Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer,{currentLocation:{key:undefined},prevLocation:null,views:[],queue:null,mode:props.mode,enter:validateSpring(props.enter),usual:validateSpring(props.usual),leave:validateSpring(props.leave),hasEntered:false}),_useReducer2=_slicedToArray(_useReducer,2),state=_useReducer2[0],dispatch=_useReducer2[1];Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){dispatch({type:'UPDATE_MODE',mode:props.mode});},[props.mode]);Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){dispatch({type:'UPDATE_LOCATION',location:props.location});},[props.location.pathname]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TransitionContext.Provider,{value:[state,dispatch]},props.children);};TransitionProvider.propTypes={location:propTypes.object,mode:propTypes.oneOf(['successive','immediate']),children:propTypes.node,enter:propTypes.object,usual:propTypes.object,leave:propTypes.object,style:propTypes.object};TransitionProvider.defaultProps={mode:'successive',location:{},children:null,enter:{opacity:0,config:'stiff'},usual:{opacity:1,config:'stiff'},leave:{opacity:0,config:'stiff'},style:null};var useTransitionStore=function useTransitionStore(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(TransitionContext);};var TransitionLink=function TransitionLink(_ref){var to=_ref.to,enter=_ref.enter,usual=_ref.usual,leave=_ref.leave,y=_ref.y,mode=_ref.mode,className=_ref.className,style=_ref.style,children=_ref.children;var _useTransitionStore=useTransitionStore(),_useTransitionStore2=_slicedToArray(_useTransitionStore,2),dispatch=_useTransitionStore2[1];function onClick(event){event.preventDefault();var scrollY=typeof y==='function'?y():y;dispatch({type:'NAVIGATE',to:to,enter:enter,usual:usual,leave:leave,y:scrollY,mode:mode});}return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:to,onClick:onClick,className:className,style:style},children);};TransitionLink.propTypes={to:propTypes.string.isRequired,enter:propTypes.object,usual:propTypes.object,leave:propTypes.object,y:propTypes.oneOfType([propTypes.number,propTypes.func]),mode:propTypes.string,className:propTypes.string,style:propTypes.object,children:propTypes.node};TransitionLink.defaultProps={enter:null,usual:null,leave:null,y:undefined,mode:'',className:'',style:{},children:null};var TransitionView=function TransitionView(_ref){var view=_ref.view,mode=_ref.mode,action=_ref.action,enter=_ref.enter,leave=_ref.leave,usual=_ref.usual,y=_ref.y,isKeep=_ref.isKeep,skipAnimations=_ref.skipAnimations,skipEnterAnimation=_ref.skipEnterAnimation,skipLeaveAnimation=_ref.skipLeaveAnimation;var _useTransitionStore=useTransitionStore(),_useTransitionStore2=_slicedToArray(_useTransitionStore,2),hasEntered=_useTransitionStore2[0].hasEntered,dispatch=_useTransitionStore2[1];var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(function(){if(mode==='immediate'){return{position:'fixed',transform:"translate3d(0,-".concat(y,"px,0)")};}if(isKeep){return{opacity:0};}return{};}),_useState2=_slicedToArray(_useState,2),styles=_useState2[0],setStyles=_useState2[1];var _useSpring=Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])(function(){return skipEnterAnimation?usual// because start-callback would be called if spread-operator (spring-bug?)
:{opacity:enter.opacity,transform:enter.transform};}),_useSpring2=_slicedToArray(_useSpring,2),props=_useSpring2[0],set=_useSpring2[1];Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){switch(action){case'enter':set(_objectSpread2({},usual,{config:enter.config,onStart:function onStart(props){if(mode==='successive'||isKeep){window.scrollTo(0,y);}if(typeof enter.onStart==='function')enter.onStart(props);},onFrame:function onFrame(props){if(typeof enter.onFrame==='function')enter.onFrame(props);},onRest:function onRest(props){if(isKeep){dispatch({type:'REMOVE_KEEP'});setStyles({opacity:1});}dispatch({type:'HAS_ENTERED'});}}));break;case'leave':if(skipLeaveAnimation){dispatch({type:'REMOVE_VIEW',locationKey:view.props.location.key});if(mode==='successive'){window.scrollTo(0,0);dispatch({type:'ADD_VIEW_FROM_QUEUE'});}return;}set(_objectSpread2({},leave,{config:leave.config,onStart:function onStart(props){if(typeof leave.onStart==='function')leave.onStart(props);},onFrame:function onFrame(props){if(typeof leave.onFrame==='function')leave.onFrame(props);},onRest:function onRest(props){dispatch({type:'REMOVE_VIEW',locationKey:view.props.location.key});if(mode==='successive'){window.scrollTo(0,0);dispatch({type:'ADD_VIEW_FROM_QUEUE'});}if(typeof leave.onRest==='function')leave.onRest(props);}}));break;}},[action]);Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){if(!hasEntered)return;if(mode==='immediate'){setStyles({position:'relative',transform:'translate3d(0, 0px, 0)',willChange:''});}if(typeof enter.onRest==='function')enter.onRest(props);},[hasEntered]);Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){if(styles.position==='relative'){window.scrollTo(0,y);}},[styles.position]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"view-container",style:_objectSpread2({width:'100%',willChange:mode==='immediate'&&'transform',top:0},styles)},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div,{style:{width:'100%',willChange:"opacity".concat(enter.transform!=='none'||usual.transform!=='none'?', transform':''),opacity:props.opacity,transform:props.transform},className:"view"},view));};var TransitionKeep=function TransitionKeep(_ref){var view=_ref.view;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"view-container",style:{width:'100%',gridArea:'View',top:0,position:'fixed',transform:"translate3d(0,-".concat(view.y,"px,0)"),zIndex:-1}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"view view--keep"},view));};function getY$1(_ref){var view=_ref.view,keep=_ref.keep,currentLocation=_ref.currentLocation;var isKeep=keep&&keep.props.location.pathname===view.props.location.pathname;if(isKeep)return keep.y;if(currentLocation&&currentLocation.y){return currentLocation.y;}return 0;}var TransitionViews=function TransitionViews(_ref2){var children=_ref2.children,style=_ref2.style;var _useTransitionStore=useTransitionStore(),_useTransitionStore2=_slicedToArray(_useTransitionStore,2),_useTransitionStore2$=_useTransitionStore2[0],enter=_useTransitionStore2$.enter,usual=_useTransitionStore2$.usual,leave=_useTransitionStore2$.leave,to=_useTransitionStore2$.to,currentLocation=_useTransitionStore2$.currentLocation,views=_useTransitionStore2$.views,keep=_useTransitionStore2$.keep,mode=_useTransitionStore2$.mode,dispatch=_useTransitionStore2[1];Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){if(to)Object(gatsby__WEBPACK_IMPORTED_MODULE_3__["navigate"])(to);},[to]);Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){if(!currentLocation.key)return;var currentMode=currentLocation.mode||mode;if(currentMode==='successive'){if(views.filter(function(view){return view;}).length){dispatch({type:'ADD_QUEUE',view:children});}else{dispatch({type:'ADD_VIEW_DIRECTLY',view:children});}}if(currentMode==='immediate'){dispatch({type:'ADD_VIEW_DIRECTLY',view:children});}},[currentLocation.key]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"views",style:style},views.map(function(view,index){if(!view)return null;var isKeep=keep&&keep.props.location.pathname===view.props.location.pathname;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TransitionView,{key:view.props.location.key,view:view,leave:currentLocation.leave||leave,usual:view.props.location.pathname===currentLocation.pathname&&currentLocation.usual||usual,enter:view.props.location.pathname===currentLocation.pathname&&currentLocation.enter||enter,mode:currentLocation.mode||mode,isKeep:isKeep,skipAnimations:currentLocation.skipAnimations,skipEnterAnimation:isKeep,skipLeaveAnimation:isKeep,y:getY$1({keep:keep,view:view,currentLocation:currentLocation}),action:!index?'enter':'leave'});}),keep&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TransitionKeep,{key:keep.props.location.key,view:keep}));};

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, bin, bugs, dependencies, description, devDependencies, engines, files, gitHead, homepage, keywords, license, main, module, name, peerDependencies, repository, resolutions, scripts, types, version, yargs, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"gatsby@2.19.7\",\"C:\\\\Users\\\\Nouamane\\\\WebstormProjects\\\\gatsby\\\\my-default-starter\"]],\"_from\":\"gatsby@2.19.7\",\"_id\":\"gatsby@2.19.7\",\"_inBundle\":false,\"_integrity\":\"sha512-pdCXdzH7Ht0KcpGJPV//WIWgZ10vxO5Gqs4N3NvfAAAKnhZotJ8W5pbSfbw+7ec5zxNw57SWPE5hV6Unm9rIYA==\",\"_location\":\"/gatsby\",\"_phantomChildren\":{\"@babel/code-frame\":\"7.8.3\",\"@babel/runtime\":\"7.8.3\",\"@hapi/joi\":\"15.1.1\",\"better-opn\":\"1.0.0\",\"bluebird\":\"3.7.2\",\"camelcase\":\"5.3.1\",\"chalk\":\"2.4.2\",\"clipboardy\":\"2.1.0\",\"code-point-at\":\"1.1.0\",\"common-tags\":\"1.8.0\",\"convert-hrtime\":\"3.0.0\",\"core-js\":\"2.6.11\",\"decamelize\":\"1.2.0\",\"envinfo\":\"7.5.0\",\"execa\":\"3.4.0\",\"find-up\":\"3.0.0\",\"fs-exists-cached\":\"1.0.0\",\"fs-extra\":\"8.1.0\",\"gatsby-core-utils\":\"1.0.26\",\"gatsby-telemetry\":\"1.1.47\",\"graceful-fs\":\"4.2.3\",\"imurmurhash\":\"0.1.4\",\"ink\":\"2.6.0\",\"ink-spinner\":\"3.0.1\",\"is-typedarray\":\"1.0.0\",\"is-valid-path\":\"0.1.1\",\"lodash\":\"4.17.15\",\"meant\":\"1.0.1\",\"number-is-nan\":\"1.0.1\",\"object.entries\":\"1.1.1\",\"opentracing\":\"0.14.4\",\"os-locale\":\"3.1.0\",\"pretty-error\":\"2.1.1\",\"progress\":\"2.0.3\",\"prompts\":\"2.3.0\",\"react\":\"16.12.0\",\"redux\":\"4.0.5\",\"require-directory\":\"2.1.1\",\"resolve-cwd\":\"2.0.0\",\"set-blocking\":\"2.0.0\",\"signal-exit\":\"3.0.2\",\"stack-trace\":\"0.0.10\",\"string-width\":\"2.1.1\",\"typedarray-to-buffer\":\"3.1.5\",\"update-notifier\":\"3.0.1\",\"which-module\":\"2.0.0\",\"y18n\":\"4.0.0\",\"yurnalist\":\"1.1.2\"},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"gatsby@2.19.7\",\"name\":\"gatsby\",\"escapedName\":\"gatsby\",\"rawSpec\":\"2.19.7\",\"saveSpec\":null,\"fetchSpec\":\"2.19.7\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/gatsby/-/gatsby-2.19.7.tgz\",\"_spec\":\"2.19.7\",\"_where\":\"C:\\\\Users\\\\Nouamane\\\\WebstormProjects\\\\gatsby\\\\my-default-starter\",\"author\":{\"name\":\"Kyle Mathews\",\"email\":\"mathews.kyle@gmail.com\"},\"bin\":{\"gatsby\":\"./dist/bin/gatsby.js\"},\"bugs\":{\"url\":\"https://github.com/gatsbyjs/gatsby/issues\"},\"dependencies\":{\"@babel/code-frame\":\"^7.5.5\",\"@babel/core\":\"^7.7.5\",\"@babel/parser\":\"^7.7.5\",\"@babel/polyfill\":\"^7.7.0\",\"@babel/runtime\":\"^7.7.6\",\"@babel/traverse\":\"^7.7.4\",\"@hapi/joi\":\"^15.1.1\",\"@mikaelkristiansson/domready\":\"^1.0.10\",\"@pieh/friendly-errors-webpack-plugin\":\"1.7.0-chalk-2\",\"@reach/router\":\"^1.2.1\",\"@typescript-eslint/eslint-plugin\":\"^2.11.0\",\"@typescript-eslint/parser\":\"^2.11.0\",\"address\":\"1.1.2\",\"autoprefixer\":\"^9.7.3\",\"axios\":\"^0.19.0\",\"babel-core\":\"7.0.0-bridge.0\",\"babel-eslint\":\"^10.0.3\",\"babel-loader\":\"^8.0.6\",\"babel-plugin-add-module-exports\":\"^0.3.3\",\"babel-plugin-dynamic-import-node\":\"^2.3.0\",\"babel-plugin-remove-graphql-queries\":\"^2.7.22\",\"babel-preset-gatsby\":\"^0.2.27\",\"better-opn\":\"1.0.0\",\"better-queue\":\"^3.8.10\",\"bluebird\":\"^3.7.2\",\"browserslist\":\"3.2.8\",\"cache-manager\":\"^2.10.1\",\"cache-manager-fs-hash\":\"^0.0.7\",\"chalk\":\"^2.4.2\",\"chokidar\":\"3.3.0\",\"common-tags\":\"^1.8.0\",\"compression\":\"^1.7.4\",\"convert-hrtime\":\"^3.0.0\",\"copyfiles\":\"^2.1.1\",\"core-js\":\"^2.6.11\",\"cors\":\"^2.8.5\",\"css-loader\":\"^1.0.1\",\"debug\":\"^3.2.6\",\"del\":\"^5.1.0\",\"detect-port\":\"^1.3.0\",\"devcert-san\":\"^0.3.3\",\"dotenv\":\"^8.2.0\",\"eslint\":\"^6.7.2\",\"eslint-config-react-app\":\"^5.1.0\",\"eslint-loader\":\"^2.2.1\",\"eslint-plugin-flowtype\":\"^3.13.0\",\"eslint-plugin-graphql\":\"^3.1.0\",\"eslint-plugin-import\":\"^2.19.1\",\"eslint-plugin-jsx-a11y\":\"^6.2.3\",\"eslint-plugin-react\":\"^7.17.0\",\"eslint-plugin-react-hooks\":\"^1.7.0\",\"event-source-polyfill\":\"^1.0.11\",\"express\":\"^4.17.1\",\"express-graphql\":\"^0.9.0\",\"fast-levenshtein\":\"^2.0.6\",\"file-loader\":\"^1.1.11\",\"flat\":\"^4.1.0\",\"fs-exists-cached\":\"1.0.0\",\"fs-extra\":\"^8.1.0\",\"gatsby-cli\":\"^2.8.27\",\"gatsby-core-utils\":\"^1.0.26\",\"gatsby-graphiql-explorer\":\"^0.2.32\",\"gatsby-link\":\"^2.2.28\",\"gatsby-plugin-page-creator\":\"^2.1.38\",\"gatsby-react-router-scroll\":\"^2.1.20\",\"gatsby-telemetry\":\"^1.1.47\",\"glob\":\"^7.1.6\",\"got\":\"8.3.2\",\"graphql\":\"^14.5.8\",\"graphql-compose\":\"^6.3.7\",\"graphql-playground-middleware-express\":\"^1.7.12\",\"hasha\":\"^5.1.0\",\"invariant\":\"^2.2.4\",\"is-relative\":\"^1.0.0\",\"is-relative-url\":\"^3.0.0\",\"is-wsl\":\"^2.1.1\",\"jest-worker\":\"^24.9.0\",\"json-loader\":\"^0.5.7\",\"json-stringify-safe\":\"^5.0.1\",\"lodash\":\"^4.17.15\",\"lokijs\":\"^1.5.8\",\"md5\":\"^2.2.1\",\"md5-file\":\"^3.2.3\",\"micromatch\":\"^3.1.10\",\"mime\":\"^2.4.4\",\"mini-css-extract-plugin\":\"^0.8.0\",\"mitt\":\"^1.2.0\",\"mkdirp\":\"^0.5.1\",\"moment\":\"^2.24.0\",\"name-all-modules-plugin\":\"^1.0.1\",\"normalize-path\":\"^2.1.1\",\"null-loader\":\"^0.1.1\",\"opentracing\":\"^0.14.4\",\"optimize-css-assets-webpack-plugin\":\"^5.0.3\",\"p-defer\":\"^3.0.0\",\"parseurl\":\"^1.3.3\",\"physical-cpu-count\":\"^2.0.0\",\"pnp-webpack-plugin\":\"^1.5.0\",\"postcss-flexbugs-fixes\":\"^3.3.1\",\"postcss-loader\":\"^2.1.6\",\"prompts\":\"^2.3.0\",\"prop-types\":\"^15.7.2\",\"raw-loader\":\"^0.5.1\",\"react-dev-utils\":\"^4.2.3\",\"react-error-overlay\":\"^3.0.0\",\"react-hot-loader\":\"^4.12.18\",\"redux\":\"^4.0.4\",\"redux-thunk\":\"^2.3.0\",\"semver\":\"^5.7.1\",\"shallow-compare\":\"^1.2.2\",\"sift\":\"^5.1.0\",\"signal-exit\":\"^3.0.2\",\"slugify\":\"^1.3.6\",\"socket.io\":\"^2.3.0\",\"stack-trace\":\"^0.0.10\",\"string-similarity\":\"^1.2.2\",\"style-loader\":\"^0.23.1\",\"terser-webpack-plugin\":\"^1.4.2\",\"true-case-path\":\"^2.2.1\",\"type-of\":\"^2.0.1\",\"url-loader\":\"^1.1.2\",\"util.promisify\":\"^1.0.0\",\"uuid\":\"^3.3.3\",\"v8-compile-cache\":\"^1.1.2\",\"webpack\":\"~4.41.2\",\"webpack-dev-middleware\":\"^3.7.2\",\"webpack-dev-server\":\"^3.9.0\",\"webpack-hot-middleware\":\"^2.25.0\",\"webpack-merge\":\"^4.2.2\",\"webpack-stats-plugin\":\"^0.3.0\",\"xstate\":\"^4.7.2\",\"yaml-loader\":\"^0.5.0\"},\"description\":\"Blazing fast modern site generator for React\",\"devDependencies\":{\"@babel/cli\":\"^7.7.5\",\"@babel/runtime\":\"^7.7.6\",\"babel-preset-gatsby-package\":\"^0.2.15\",\"cross-env\":\"^5.2.1\",\"documentation\":\"^12.1.4\",\"eslint-plugin-jsx-a11y\":\"^6.2.3\",\"react\":\"^16.12.0\",\"react-dom\":\"^16.12.0\",\"rimraf\":\"^3.0.0\",\"xhr-mock\":\"^2.5.1\"},\"engines\":{\"node\":\">=8.0.0\"},\"files\":[\"apis.json\",\"ipc.json\",\"cache-dir\",\"dist\",\"graphql.js\",\"index.d.ts\",\"scripts/postinstall.js\",\"utils.js\"],\"gitHead\":\"b42a3e1bd1113d17d71a7817d4b68cf30c38b1e9\",\"homepage\":\"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme\",\"keywords\":[\"blog\",\"generator\",\"jekyll\",\"markdown\",\"react\",\"ssg\",\"website\"],\"license\":\"MIT\",\"main\":\"cache-dir/commonjs/gatsby-browser-entry.js\",\"module\":\"cache-dir/gatsby-browser-entry.js\",\"name\":\"gatsby\",\"peerDependencies\":{\"react\":\"^16.4.2\",\"react-dom\":\"^16.4.2\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/gatsbyjs/gatsby.git\"},\"resolutions\":{\"graphql\":\"^14.5.8\"},\"scripts\":{\"build\":\"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs\",\"build:cjs\":\"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__\",\"build:internal-plugins\":\"copyfiles -u 1 src/internal-plugins/**/package.json dist\",\"build:rawfiles\":\"copyfiles -u 1 src/internal-plugins/**/raw_* dist\",\"build:src\":\"babel src --out-dir dist --source-maps --verbose --ignore **/gatsby-cli.js,src/internal-plugins/dev-404-page/raw_dev-404-page.js,**/__tests__ --extensions \\\".ts,.js\\\"\",\"clean-test-bundles\":\"find test/ -type f -name bundle.js* -exec rm -rf {} +\",\"postbuild\":\"node scripts/output-api-file.js\",\"postinstall\":\"node scripts/postinstall.js\",\"prebuild\":\"rimraf dist && rimraf cache-dir/commonjs\",\"prepare\":\"cross-env NODE_ENV=production npm run build\",\"watch\":\"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch\"},\"types\":\"index.d.ts\",\"version\":\"2.19.7\",\"yargs\":{\"boolean-negation\":false}}");

/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ __webpack_exports__["default"] = (Symbol);


/***/ }),

/***/ "./node_modules/lodash-es/_baseClamp.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseClamp.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

/* harmony default export */ __webpack_exports__["default"] = (baseClamp);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : Object(_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetTag);


/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["default"] = (freeGlobal);


/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (getRawTag);


/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["default"] = (objectToString);


/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["default"] = (root);


/***/ }),

/***/ "./node_modules/lodash-es/clamp.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/clamp.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseClamp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseClamp.js */ "./node_modules/lodash-es/_baseClamp.js");
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toNumber.js */ "./node_modules/lodash-es/toNumber.js");



/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(lower);
    lower = lower === lower ? lower : 0;
  }
  return Object(_baseClamp_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(number), lower, upper);
}

/* harmony default export */ __webpack_exports__["default"] = (clamp);


/***/ }),

/***/ "./node_modules/lodash-es/debounce.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/debounce.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./now.js */ "./node_modules/lodash-es/now.js");
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toNumber.js */ "./node_modules/lodash-es/toNumber.js");




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(wait) || 0;
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  }

  function debounced() {
    var time = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ __webpack_exports__["default"] = (debounce);


/***/ }),

/***/ "./node_modules/lodash-es/isObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ __webpack_exports__["default"] = (isObject);


/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["default"] = (isObjectLike);


/***/ }),

/***/ "./node_modules/lodash-es/isSymbol.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == symbolTag);
}

/* harmony default export */ __webpack_exports__["default"] = (isSymbol);


/***/ }),

/***/ "./node_modules/lodash-es/now.js":
/*!***************************************!*\
  !*** ./node_modules/lodash-es/now.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Date.now();
};

/* harmony default export */ __webpack_exports__["default"] = (now);


/***/ }),

/***/ "./node_modules/lodash-es/toNumber.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toNumber.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");



/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return NAN;
  }
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ __webpack_exports__["default"] = (toNumber);


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/node-object-hash/dist/hasher.js":
/*!******************************************************!*\
  !*** ./node_modules/node-object-hash/dist/hasher.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var objectSorter = __webpack_require__(/*! ./objectSorter */ "./node_modules/node-object-hash/dist/objectSorter.js");
var crypto_1 = __importDefault(__webpack_require__(/*! crypto */ "crypto"));
/**
 * Default hash algorithm
 */
var DEFAULT_ALG = 'sha256';
/**
 * Default hash string enoding
 */
var DEFAULT_ENV = 'hex';
/**
 * Hasher constructor
 * @param options hasher options
 */
function hasher(options) {
    if (options === void 0) { options = {}; }
    var sortObject = objectSorter(options);
    function hashObject(obj, opts) {
        if (opts === void 0) { opts = {}; }
        var alg = opts.alg || options.alg || DEFAULT_ALG;
        var enc = opts.enc || options.enc || DEFAULT_ENV;
        var sorted = sortObject(obj);
        return crypto_1.default
            .createHash(alg)
            .update(sorted)
            .digest(enc);
    }
    return {
        hash: hashObject,
        sort: sortObject,
        sortObject: sortObject,
    };
}
module.exports = hasher;
//# sourceMappingURL=hasher.js.map

/***/ }),

/***/ "./node_modules/node-object-hash/dist/objectSorter.js":
/*!************************************************************!*\
  !*** ./node_modules/node-object-hash/dist/objectSorter.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var typeGuess_1 = __webpack_require__(/*! ./typeGuess */ "./node_modules/node-object-hash/dist/typeGuess.js");
var str = __importStar(__webpack_require__(/*! ./stringifiers */ "./node_modules/node-object-hash/dist/stringifiers.js"));
/**
 * Object sorter consturctor
 * @param options object transformation options
 * @returns function that transforms object to strings
 */
function objectSorter(options) {
    if (options === void 0) { options = {}; }
    var _a = __assign({ sort: true, coerce: true, trim: false }, options), sort = _a.sort, coerce = _a.coerce, trim = _a.trim;
    var stringifiers = {
        unknown: function _unknown(obj) {
            // `unknonw` - is a typo, saved for backward compatibility
            var constructorName = obj.constructor
                ? obj.constructor.name
                : 'unknonw';
            var objectName = typeof obj.toString === 'function' ? obj.toString() : 'unknown';
            return '<:' + constructorName + '>:' + objectName;
        },
    };
    var sortOptions = {
        array: typeof sort === 'boolean' ? sort : sort.array,
        object: typeof sort === 'boolean' ? sort : sort.object,
        set: typeof sort === 'boolean' ? sort : sort.set,
        map: typeof sort === 'boolean' ? sort : sort.map,
    };
    var coerceOptions = {
        boolean: typeof coerce === 'boolean' ? coerce : coerce.boolean,
        number: typeof coerce === 'boolean' ? coerce : coerce.number,
        string: typeof coerce === 'boolean' ? coerce : coerce.string,
        undefined: typeof coerce === 'boolean' ? coerce : coerce.undefined,
        null: typeof coerce === 'boolean' ? coerce : coerce.null,
        symbol: typeof coerce === 'boolean' ? coerce : coerce.symbol,
        function: typeof coerce === 'boolean' ? coerce : coerce.function,
        date: typeof coerce === 'boolean' ? coerce : coerce.date,
        set: typeof coerce === 'boolean' ? coerce : coerce.set,
    };
    var trimOptions = {
        string: typeof trim === 'boolean' ? trim : trim.string,
        function: typeof trim === 'boolean' ? trim : trim.function,
    };
    if (trimOptions.string) {
        stringifiers.string = coerceOptions.string
            ? str._stringTrimCoerce.bind(stringifiers)
            : str._stringTrim.bind(stringifiers);
    }
    else {
        stringifiers.string = coerceOptions.string
            ? str._stringCoerce.bind(stringifiers)
            : str._string.bind(stringifiers);
    }
    stringifiers.number = coerceOptions.number
        ? str._numberCoerce.bind(stringifiers)
        : str._number.bind(stringifiers);
    stringifiers.boolean = coerceOptions.boolean
        ? str._booleanCoerce.bind(stringifiers)
        : str._boolean.bind(stringifiers);
    stringifiers.symbol = coerceOptions.symbol
        ? str._symbolCoerce.bind(stringifiers)
        : str._symbol.bind(stringifiers);
    stringifiers.undefined = coerceOptions.undefined
        ? str._undefinedCoerce.bind(stringifiers)
        : str._undefined.bind(stringifiers);
    stringifiers.null = coerceOptions.null
        ? str._nullCoerce.bind(stringifiers)
        : str._null.bind(stringifiers);
    if (trimOptions.function) {
        stringifiers.function = coerceOptions.function
            ? str._functionTrimCoerce.bind(stringifiers)
            : str._functionTrim.bind(stringifiers);
    }
    else {
        stringifiers.function = coerceOptions.function
            ? str._functionCoerce.bind(stringifiers)
            : str._function.bind(stringifiers);
    }
    stringifiers.date = coerceOptions.date
        ? str._dateCoerce.bind(stringifiers)
        : str._date.bind(stringifiers);
    stringifiers.array = sortOptions.array
        ? str._arraySort.bind(stringifiers)
        : str._array.bind(stringifiers);
    if (sortOptions.set) {
        stringifiers.set = coerceOptions.set
            ? str._setSortCoerce.bind(stringifiers)
            : str._setSort.bind(stringifiers);
    }
    else {
        stringifiers.set = coerceOptions.set
            ? str._setCoerce.bind(stringifiers)
            : str._set.bind(stringifiers);
    }
    stringifiers.object = sortOptions.object
        ? str._objectSort.bind(stringifiers)
        : str._object.bind(stringifiers);
    stringifiers.map = sortOptions.map
        ? str._mapSort.bind(stringifiers)
        : str._map.bind(stringifiers);
    function objectToString(obj) {
        return stringifiers[typeGuess_1.guessType(obj)](obj);
    }
    return objectToString;
}
module.exports = objectSorter;
//# sourceMappingURL=objectSorter.js.map

/***/ }),

/***/ "./node_modules/node-object-hash/dist/stringifiers.js":
/*!************************************************************!*\
  !*** ./node_modules/node-object-hash/dist/stringifiers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @private
 * @inner
 */
Object.defineProperty(exports, "__esModule", { value: true });
var typeGuess_1 = __webpack_require__(/*! ./typeGuess */ "./node_modules/node-object-hash/dist/typeGuess.js");
/**
 * Prefixes that used when type coercion is disabled
 */
exports.PREFIX = {
    string: '<:s>',
    number: '<:n>',
    boolean: '<:b>',
    symbol: '<:smbl>',
    undefined: '<:undf>',
    null: '<:null>',
    function: '<:func>',
    array: '',
    date: '<:date>',
    set: '<:set>',
    map: '<:map>',
};
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _stringCoerce(obj) {
    return obj;
}
exports._stringCoerce = _stringCoerce;
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _string(obj) {
    return exports.PREFIX.string + ':' + obj;
}
exports._string = _string;
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _stringTrimCoerce(obj) {
    return obj.replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ').trim();
}
exports._stringTrimCoerce = _stringTrimCoerce;
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _stringTrim(obj) {
    return exports.PREFIX.string + ':' + obj.replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ').trim();
}
exports._stringTrim = _stringTrim;
/**
 * Converts number to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _numberCoerce(obj) {
    return obj.toString();
}
exports._numberCoerce = _numberCoerce;
/**
 * Converts number to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _number(obj) {
    return exports.PREFIX.number + ':' + obj;
}
exports._number = _number;
/**
 * Converts boolean to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _booleanCoerce(obj) {
    return obj ? '1' : '0';
}
exports._booleanCoerce = _booleanCoerce;
/**
 * Converts boolean to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _boolean(obj) {
    return exports.PREFIX.boolean + ':' + obj.toString();
}
exports._boolean = _boolean;
/**
 * Converts symbol to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _symbolCoerce() {
    return exports.PREFIX.symbol;
}
exports._symbolCoerce = _symbolCoerce;
/**
 * Converts symbol to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _symbol(obj) {
    return exports.PREFIX.symbol + ':' + obj.toString();
}
exports._symbol = _symbol;
/**
 * Converts undefined to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _undefinedCoerce() {
    return '';
}
exports._undefinedCoerce = _undefinedCoerce;
/**
 * Converts undefined to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _undefined() {
    return exports.PREFIX.undefined;
}
exports._undefined = _undefined;
/**
 * Converts null to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _nullCoerce() {
    return '';
}
exports._nullCoerce = _nullCoerce;
/**
 * Converts null to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _null() {
    return exports.PREFIX.null;
}
exports._null = _null;
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _functionCoerce(obj) {
    return obj.name + '=>' + obj.toString();
}
exports._functionCoerce = _functionCoerce;
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _function(obj) {
    return exports.PREFIX.function + ':' + obj.name + '=>' + obj.toString();
}
exports._function = _function;
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _functionTrimCoerce(obj) {
    return (obj.name +
        '=>' +
        obj
            .toString()
            .replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ')
            .trim());
}
exports._functionTrimCoerce = _functionTrimCoerce;
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _functionTrim(obj) {
    return (exports.PREFIX.function +
        ':' +
        obj.name +
        '=>' +
        obj
            .toString()
            .replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ')
            .trim());
}
exports._functionTrim = _functionTrim;
/**
 * Converts date to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _dateCoerce(obj) {
    return obj.toISOString();
}
exports._dateCoerce = _dateCoerce;
/**
 * Converts date to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _date(obj) {
    return exports.PREFIX.date + ':' + obj.toISOString();
}
exports._date = _date;
/**
 * Converts array to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _arraySort(obj) {
    var stringifiers = this;
    return ('[' +
        obj
            .map(function (item) {
            return stringifiers[typeGuess_1.guessType(item)](item);
        })
            .sort()
            .toString() +
        ']');
}
exports._arraySort = _arraySort;
/**
 * Converts array to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _array(obj) {
    var stringifiers = this;
    return ('[' +
        obj
            .map(function (item) {
            return stringifiers[typeGuess_1.guessType(item)](item);
        })
            .toString() +
        ']');
}
exports._array = _array;
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _setSortCoerce(obj) {
    return _arraySort.call(this, Array.from(obj));
}
exports._setSortCoerce = _setSortCoerce;
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _setSort(obj) {
    return exports.PREFIX.set + ':' + _arraySort.call(this, Array.from(obj));
}
exports._setSort = _setSort;
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _set(obj) {
    return exports.PREFIX.set + ':' + _array.call(this, Array.from(obj));
}
exports._set = _set;
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _setCoerce(obj) {
    return _array.call(this, Array.from(obj));
}
exports._setCoerce = _setCoerce;
/**
 * Converts object to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _object(obj) {
    var stringifiers = this;
    var keys = Object.keys(obj);
    var objArray = [];
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var val = obj[key];
        var valT = typeGuess_1.guessType(val);
        objArray.push(key + ':' + stringifiers[valT](val));
    }
    return '{' + objArray.toString() + '}';
}
exports._object = _object;
/**
 * Converts object to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _objectSort(obj) {
    var stringifiers = this;
    var keys = Object.keys(obj).sort();
    var objArray = [];
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        var val = obj[key];
        var valT = typeGuess_1.guessType(val);
        objArray.push(key + ':' + stringifiers[valT](val));
    }
    return '{' + objArray.toString() + '}';
}
exports._objectSort = _objectSort;
/**
 * Converts map to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _map(obj) {
    var stringifiers = this;
    var arr = Array.from(obj);
    var mapped = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        var key = item[0], value = item[1];
        mapped.push([
            stringifiers[typeGuess_1.guessType(key)](key),
            stringifiers[typeGuess_1.guessType(value)](value),
        ]);
    }
    return '[' + mapped.join(';') + ']';
}
exports._map = _map;
/**
 * Converts map to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _mapSort(obj) {
    var stringifiers = this;
    var arr = Array.from(obj);
    var mapped = [];
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var item = arr_2[_i];
        var key = item[0], value = item[1];
        mapped.push([
            stringifiers[typeGuess_1.guessType(key)](key),
            stringifiers[typeGuess_1.guessType(value)](value),
        ]);
    }
    return '[' + mapped.sort().join(';') + ']';
}
exports._mapSort = _mapSort;
//# sourceMappingURL=stringifiers.js.map

/***/ }),

/***/ "./node_modules/node-object-hash/dist/typeGuess.js":
/*!*********************************************************!*\
  !*** ./node_modules/node-object-hash/dist/typeGuess.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Type mapping rules.
 */
exports.TYPE_MAP = {
    Array: 'array',
    Int8Array: 'array',
    Uint8Array: 'array',
    Uint8ClampedArray: 'array',
    Int16Array: 'array',
    Uint16Array: 'array',
    Int32Array: 'array',
    Uint32Array: 'array',
    Float32Array: 'array',
    Float64Array: 'array',
    Buffer: 'array',
    Map: 'map',
    Set: 'set',
    Date: 'date',
    String: 'string',
    Number: 'number',
    Boolean: 'boolean',
    Object: 'object',
};
/**
 * Guess object type
 * @param obj analyzed object
 * @returns object type
 */
function guessObjectType(obj) {
    if (obj === null) {
        return 'null';
    }
    var type = obj.constructor ? obj.constructor.name : 'unknown';
    return exports.TYPE_MAP[type] || 'unknown';
}
exports.guessObjectType = guessObjectType;
/**
 * Guess variable type
 * @param obj analyzed variable
 * @returns variable type
 */
function guessType(obj) {
    var type = typeof obj;
    return type !== 'object' ? type : guessObjectType(obj);
}
exports.guessType = guessType;
//# sourceMappingURL=typeGuess.js.map

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function (a) {
    return a;
  };
}


/***/ }),

/***/ "./node_modules/react-spring/web.js":
/*!******************************************!*\
  !*** ./node_modules/react-spring/web.js ***!
  \******************************************/
/*! exports provided: Globals, createInterpolator, interpolate, isAnimated, to, Controller, FrameLoop, Spring, Trail, Transition, config, update, useChain, useSpring, useSprings, useTrail, useTransition, a, animated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/web */ "./node_modules/@react-spring/web/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["Globals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInterpolator", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["createInterpolator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["interpolate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAnimated", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["isAnimated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "to", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["to"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrameLoop", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["FrameLoop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spring", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["Spring"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trail", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["Trail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["Transition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["config"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["update"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useChain", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["useChain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["useSpring"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSprings", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["useSprings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTrail", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["useTrail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["useTransition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["animated"]; });




/***/ }),

/***/ "./node_modules/react-typist/dist/Typist.css":
/*!***************************************************!*\
  !*** ./node_modules/react-typist/dist/Typist.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./node_modules/react-typist/dist/Typist.js":
/*!**************************************************!*\
  !*** ./node_modules/react-typist/dist/Typist.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _Cursor = __webpack_require__(10);

	var _Cursor2 = _interopRequireDefault(_Cursor);

	var _Backspace = __webpack_require__(12);

	var _Backspace2 = _interopRequireDefault(_Backspace);

	var _Delay = __webpack_require__(13);

	var _Delay2 = _interopRequireDefault(_Delay);

	var _utils = __webpack_require__(14);

	var utils = _interopRequireWildcard(_utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ACTION_CHARS = ['🔙', '⏰'];

	var Typist = function (_Component) {
	  _inherits(Typist, _Component);

	  function Typist(props) {
	    _classCallCheck(this, Typist);

	    var _this = _possibleConstructorReturn(this, (Typist.__proto__ || Object.getPrototypeOf(Typist)).call(this, props));

	    _this.state = {
	      textLines: [],
	      isDone: false
	    };

	    _this.onTypingDone = function () {
	      if (!_this.mounted) {
	        return;
	      }
	      _this.setState({ isDone: true });
	      _this.props.onTypingDone();
	    };

	    _this.delayGenerator = function (line, lineIdx, character, charIdx) {
	      var mean = _this.props.avgTypingDelay;
	      var std = _this.props.stdTypingDelay;

	      return _this.props.delayGenerator(mean, std, {
	        line: line,
	        lineIdx: lineIdx,
	        character: character,
	        charIdx: charIdx,
	        defDelayGenerator: function defDelayGenerator() {
	          var mn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mean;
	          var st = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : std;
	          return utils.gaussianRnd(mn, st);
	        }
	      });
	    };

	    _this.typeLine = function (line, lineIdx) {
	      if (!_this.mounted) {
	        return Promise.resolve();
	      }

	      var decoratedLine = line;
	      var onLineTyped = _this.props.onLineTyped;


	      if (utils.isBackspaceElement(line)) {
	        if (line.props.delay > 0) {
	          _this.introducedDelay = line.props.delay;
	        }
	        decoratedLine = String('🔙').repeat(line.props.count);
	      } else if (utils.isDelayElement(line)) {
	        _this.introducedDelay = line.props.ms;
	        decoratedLine = '⏰';
	      }

	      return new Promise(function (resolve, reject) {
	        _this.setState({ textLines: _this.state.textLines.concat(['']) }, function () {
	          utils.eachPromise(decoratedLine, _this.typeCharacter, decoratedLine, lineIdx).then(function () {
	            return onLineTyped(decoratedLine, lineIdx);
	          }).then(resolve).catch(reject);
	        });
	      });
	    };

	    _this.typeCharacter = function (character, charIdx, line, lineIdx) {
	      if (!_this.mounted) {
	        return Promise.resolve();
	      }
	      var onCharacterTyped = _this.props.onCharacterTyped;


	      return new Promise(function (resolve) {
	        var textLines = _this.state.textLines.slice();

	        utils.sleep(_this.introducedDelay).then(function () {
	          _this.introducedDelay = null;

	          var isBackspace = character === '🔙';
	          var isDelay = character === '⏰';
	          if (isDelay) {
	            resolve();
	            return;
	          }

	          if (isBackspace && lineIdx > 0) {
	            var prevLineIdx = lineIdx - 1;
	            var prevLine = textLines[prevLineIdx];

	            for (var idx = prevLineIdx; idx >= 0; idx--) {
	              if (prevLine.length > 0 && !ACTION_CHARS.includes(prevLine[0])) {
	                break;
	              }
	              prevLineIdx = idx;
	              prevLine = textLines[prevLineIdx];
	            }

	            textLines[prevLineIdx] = prevLine.substr(0, prevLine.length - 1);
	          } else {
	            textLines[lineIdx] += character;
	          }

	          _this.setState({ textLines: textLines }, function () {
	            var delay = _this.delayGenerator(line, lineIdx, character, charIdx);
	            onCharacterTyped(character, charIdx);
	            setTimeout(resolve, delay);
	          });
	        });
	      });
	    };

	    _this.mounted = false;
	    _this.linesToType = [];
	    _this.introducedDelay = null;

	    if (props.children) {
	      _this.linesToType = utils.extractTextFromElement(props.children);
	    }
	    return _this;
	  }

	  _createClass(Typist, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.mounted = true;
	      var _props = this.props,
	          children = _props.children,
	          startDelay = _props.startDelay;

	      if (children) {
	        if (startDelay > 0 && typeof window !== 'undefined') {
	          setTimeout(this.typeAllLines.bind(this), startDelay);
	        } else {
	          this.typeAllLines();
	        }
	      } else {
	        this.onTypingDone();
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (nextState.textLines.length !== this.state.textLines.length) {
	        return true;
	      }
	      for (var idx = 0; idx < nextState.textLines.length; idx++) {
	        var line = this.state.textLines[idx];
	        var nextLine = nextState.textLines[idx];
	        if (line !== nextLine) {
	          return true;
	        }
	      }
	      return this.state.isDone !== nextState.isDone;
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.mounted = false;
	    }
	  }, {
	    key: 'typeAllLines',
	    value: function typeAllLines() {
	      var _this2 = this;

	      var lines = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.linesToType;

	      return utils.eachPromise(lines, this.typeLine).then(function () {
	        return _this2.onTypingDone();
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          className = _props2.className,
	          cursor = _props2.cursor;
	      var isDone = this.state.isDone;

	      var innerTree = utils.cloneElementWithSpecifiedText({
	        element: this.props.children,
	        textLines: this.state.textLines
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: 'Typist ' + className },
	        innerTree,
	        _react2.default.createElement(_Cursor2.default, _extends({ isDone: isDone }, cursor))
	      );
	    }
	  }]);

	  return Typist;
	}(_react.Component);

	Typist.propTypes = {
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  avgTypingDelay: _propTypes2.default.number,
	  stdTypingDelay: _propTypes2.default.number,
	  startDelay: _propTypes2.default.number,
	  cursor: _propTypes2.default.object,
	  onCharacterTyped: _propTypes2.default.func,
	  onLineTyped: _propTypes2.default.func,
	  onTypingDone: _propTypes2.default.func,
	  delayGenerator: _propTypes2.default.func
	};
	Typist.defaultProps = {
	  className: '',
	  avgTypingDelay: 70,
	  stdTypingDelay: 25,
	  startDelay: 0,
	  cursor: {},
	  onCharacterTyped: function onCharacterTyped() {},
	  onLineTyped: function onLineTyped() {},
	  onTypingDone: function onTypingDone() {},
	  delayGenerator: utils.gaussianRnd
	};
	exports.default = Typist;


	Typist.Backspace = _Backspace2.default;
	Typist.Delay = _Delay2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __webpack_require__(/*! react */ "react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(9)();
	}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(4);
	var invariant = __webpack_require__(5);
	var warning = __webpack_require__(6);

	var ReactPropTypesSecret = __webpack_require__(7);
	var checkPropTypes = __webpack_require__(8);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (false) { var manualPropTypeWarningCount, manualPropTypeCallCache; }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (false) { var cacheKey; }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	       false ? undefined : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       false ? undefined : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (false) {}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(4);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (false) {}

	module.exports = warning;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	if (false) { var loggedTypeFailures, ReactPropTypesSecret, warning, invariant; }

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (false) { var stack, error, typeSpecName; }
	}

	module.exports = checkPropTypes;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(4);
	var invariant = __webpack_require__(5);
	var ReactPropTypesSecret = __webpack_require__(7);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	__webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Cursor = function (_Component) {
	  _inherits(Cursor, _Component);

	  function Cursor(props) {
	    _classCallCheck(this, Cursor);

	    var _this = _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).call(this, props));

	    _this._isReRenderingCursor = false;
	    _this.state = {
	      shouldRender: _this.props.show
	    };
	    return _this;
	  }

	  _createClass(Cursor, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;

	      var shouldHide = !this.props.isDone && nextProps.isDone && this.props.hideWhenDone;
	      if (shouldHide) {
	        setTimeout(function () {
	          return _this2.setState({ shouldRender: false });
	        }, this.props.hideWhenDoneDelay);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var _props = this.props,
	          show = _props.show,
	          isDone = _props.isDone;

	      if (!show) {
	        return;
	      }
	      if (isDone) {
	        return;
	      }
	      if (this._isReRenderingCursor) {
	        return;
	      }

	      // In webkit and blink, rendering the cursor alongside the text as it
	      // animates sometimes causes the text to stop rendering when it reaches
	      // a new line break, even though the underlying DOM /does/ contain
	      // the text. This seems to happen when the space available for the text is
	      // at a specific width that makes it so the line break happens within a
	      // word.
	      // Using dev tools, when in this state, if you modify the dom or any style,
	      // it immediately renders all of the text in its correct position.
	      // Given that observation, this is a hackish solutions that re-renders the
	      // cursor every time a character is rendered, just to ensure that the text
	      // is rendered correctly.
	      // See #13 and #15 for more details
	      this._reRenderCursor();
	    }
	  }, {
	    key: '_reRenderCursor',
	    value: function _reRenderCursor() {
	      var _this3 = this;

	      this._isReRenderingCursor = true;
	      this.setState({ shouldRender: false }, function () {
	        _this3.setState({ shouldRender: true }, function () {
	          _this3._isReRenderingCursor = false;
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.state.shouldRender) {
	        var className = this.props.blink ? ' Cursor--blinking' : '';
	        return _react2.default.createElement(
	          'span',
	          { className: 'Cursor' + className },
	          this.props.element
	        );
	      }
	      return null;
	    }
	  }]);

	  return Cursor;
	}(_react.Component);

	Cursor.propTypes = {
	  blink: _propTypes2.default.bool,
	  show: _propTypes2.default.bool,
	  element: _propTypes2.default.node,
	  hideWhenDone: _propTypes2.default.bool,
	  hideWhenDoneDelay: _propTypes2.default.number,
	  isDone: _propTypes2.default.bool
	};
	Cursor.defaultProps = {
	  blink: true,
	  show: true,
	  element: '|',
	  hideWhenDone: false,
	  hideWhenDoneDelay: 1000,
	  isDone: false
	};
	exports.default = Cursor;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Backspace = function Backspace() {
	  return _react2.default.createElement('noscript', null);
	};

	Backspace.componentName = 'Backspace';

	Backspace.propTypes = {
	  count: _propTypes2.default.number,
	  delay: _propTypes2.default.number
	};

	Backspace.defaultProps = {
	  count: 1,
	  delay: 0
	};

	exports.default = Backspace;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Delay = function Delay() {
	  return _react2.default.createElement('noscript', null);
	};

	Delay.componentName = 'Delay';

	Delay.propTypes = {
	  ms: _propTypes2.default.number.isRequired
	};

	exports.default = Delay;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sleep = undefined;

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	exports.gaussianRnd = gaussianRnd;
	exports.eachPromise = eachPromise;
	exports.exclude = exclude;
	exports.isBackspaceElement = isBackspaceElement;
	exports.isDelayElement = isDelayElement;
	exports.extractTextFromElement = extractTextFromElement;
	exports.cloneElement = cloneElement;
	exports.cloneElementWithSpecifiedText = cloneElementWithSpecifiedText;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var sleep = exports.sleep = function sleep(val) {
	  return new Promise(function (resolve) {
	    return val != null ? setTimeout(resolve, val) : resolve();
	  });
	};

	function gaussianRnd(mean, std) {
	  var times = 12;
	  var sum = 0;
	  for (var idx = 0; idx < times; idx++) {
	    sum += Math.random();
	  }
	  sum -= times / 2;
	  return Math.round(sum * std) + mean;
	}

	function eachPromise(arr, iterator) {
	  for (var _len = arguments.length, extraArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    extraArgs[_key - 2] = arguments[_key];
	  }

	  var promiseReducer = function promiseReducer(prev, current, idx) {
	    return prev.then(function () {
	      return iterator.apply(undefined, [current, idx].concat(extraArgs));
	    });
	  };
	  return Array.from(arr).reduce(promiseReducer, Promise.resolve());
	}

	function exclude(obj, keys) {
	  var res = {};
	  for (var key in obj) {
	    if (keys.indexOf(key) === -1) {
	      res[key] = obj[key];
	    }
	  }
	  return res;
	}

	function isBackspaceElement(element) {
	  return element && element.type && element.type.componentName === 'Backspace';
	}

	function isDelayElement(element) {
	  return element && element.type && element.type.componentName === 'Delay';
	}

	function extractTextFromElement(element) {
	  var stack = element ? [element] : [];
	  var lines = [];

	  while (stack.length > 0) {
	    var current = stack.pop();
	    if (_react2.default.isValidElement(current)) {
	      if (isBackspaceElement(current) || isDelayElement(current)) {
	        // If it is a `Backspace` or `Delay` element, we want to keep it in our
	        // `textLines` state. These will serve as markers when updating the
	        // state of the text
	        lines.unshift(current);
	      } else {
	        _react2.default.Children.forEach(current.props.children, function (child) {
	          stack.push(child);
	        });
	      }
	    } else if (Array.isArray(current)) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = current[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var el = _step.value;

	          stack.push(el);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    } else {
	      lines.unshift(current);
	    }
	  }

	  return lines;
	}

	function cloneElement(element, children) {
	  var tag = element.type;
	  var props = exclude(element.props, ['children']);
	  var getMilliseconds = new Date().getUTCMilliseconds();
	  var randomStamp = getMilliseconds + Math.random() + Math.random();
	  // eslint-disable-next-line
	  props.key = 'Typist-element-' + tag + '-' + randomStamp;
	  return _react2.default.createElement.apply(_react2.default, [tag, props].concat(_toConsumableArray(children)));
	}

	function cloneElementWithSpecifiedTextAtIndex(element, textLines, textIdx) {
	  if (textIdx >= textLines.length) {
	    return [null, textIdx];
	  }

	  var idx = textIdx;
	  var recurse = function recurse(el) {
	    var _cloneElementWithSpec = cloneElementWithSpecifiedTextAtIndex(el, textLines, idx),
	        _cloneElementWithSpec2 = _slicedToArray(_cloneElementWithSpec, 2),
	        child = _cloneElementWithSpec2[0],
	        advIdx = _cloneElementWithSpec2[1];

	    idx = advIdx;
	    return child;
	  };

	  var isNonTypistElement = _react2.default.isValidElement(element) && !(isBackspaceElement(element) || isDelayElement(element));

	  if (isNonTypistElement) {
	    var clonedChildren = _react2.default.Children.map(element.props.children, recurse) || [];
	    return [cloneElement(element, clonedChildren), idx];
	  }

	  if (Array.isArray(element)) {
	    var children = element.map(recurse);
	    return [children, idx];
	  }

	  // Anything that isn't a React element or an Array is interpreted as text
	  return [textLines[idx], idx + 1];
	}

	function cloneElementWithSpecifiedText(_ref) {
	  var element = _ref.element,
	      textLines = _ref.textLines;

	  if (!element) {
	    return undefined;
	  }

	  return cloneElementWithSpecifiedTextAtIndex(element, textLines, 0)[0];
	}

/***/ })
/******/ ]);

/***/ }),

/***/ "./node_modules/react-use-gesture/dist/react-use-gesture.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-use-gesture/dist/react-use-gesture.esm.js ***!
  \**********************************************************************/
/*! exports provided: addV, rubberbandIfOutOfBounds, subV, useDrag, useGesture, useHover, useMove, usePinch, useScroll, useWheel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addV", function() { return addV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rubberbandIfOutOfBounds", function() { return rubberbandIfOutOfBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subV", function() { return subV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDrag", function() { return useDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGesture", function() { return useGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHover", function() { return useHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMove", function() { return useMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePinch", function() { return usePinch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScroll", function() { return useScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWheel", function() { return useWheel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// vector add
function addV(v1, v2) {
  return v1.map(function (v, i) {
    return v + v2[i];
  });
} // vector substract

function subV(v1, v2) {
  return v1.map(function (v, i) {
    return v - v2[i];
  });
}
/**
 * Calculates velocity
 * @param delta the difference between current and previous vectors
 * @param delta_t the time offset
 * @param len the length of the delta vector
 * @returns velocity
 */

function calculateVelocity(delta, delta_t, len) {
  len = len || Math.hypot.apply(Math, delta);
  return delta_t ? len / delta_t : 0;
}
/**
 * Calculates velocities vector
 * @template T the expected vector type
 * @param delta the difference between current and previous vectors
 * @param delta_t the time offset
 * @returns velocities vector
 */

function calculateVelocities(delta, delta_t) {
  return delta_t ? delta.map(function (v) {
    return v / delta_t;
  }) : Array(delta.length).fill(0);
}
/**
 * Calculates distance
 * @param movement the difference between current and initial vectors
 * @returns distance
 */

function calculateDistance(movement) {
  return Math.hypot.apply(Math, movement);
}
/**
 * Calculates direction
 * @template T the expected vector type
 * @param delta
 * @param len
 * @returns direction
 */

function calculateDirection(delta, len) {
  len = len || Math.hypot.apply(Math, delta) || 1;
  return delta.map(function (v) {
    return v / len;
  });
}
/**
 * Calculates all kinematics
 * @template T the expected vector type
 * @param movement the difference between current and initial vectors
 * @param delta the difference between current and previous vectors
 * @param delta_t the time difference between current and previous timestamps
 * @returns all kinematics
 */

function calculateAllKinematics(movement, delta, delta_t) {
  var len = Math.hypot.apply(Math, delta);
  return {
    velocities: calculateVelocities(delta, delta_t),
    velocity: calculateVelocity(delta, delta_t, len),
    distance: calculateDistance(movement),
    direction: calculateDirection(delta, len)
  };
}
function getIntentional(movement, threshold) {
  var abs = Math.abs(movement);
  return abs >= threshold ? Math.sign(movement) * threshold : false;
}

function minMax(value, min, max) {
  return Math.max(min, Math.min(value, max));
} // Based on @aholachek ;)
// https://twitter.com/chpwn/status/285540192096497664
// iOS constant = 0.55
// https://medium.com/@nathangitter/building-fluid-interfaces-ios-swift-9732bb934bf5


function rubberband2(distance, constant) {
  // default constant from the article is 0.7
  return Math.pow(distance, constant * 5);
}

function rubberband(distance, dimension, constant) {
  if (dimension === 0 || Math.abs(dimension) === Infinity) return rubberband2(distance, constant);
  return distance * dimension * constant / (dimension + constant * distance);
}

function rubberbandIfOutOfBounds(position, min, max, constant) {
  if (constant === void 0) {
    constant = 0.15;
  }

  if (constant === 0) return minMax(position, min, max);

  if (position < min) {
    return -rubberband(min - position, max - min, constant) + min;
  }

  if (position > max) {
    return rubberband(position - max, max - min, constant) + max;
  }

  return position;
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

// blank function
function noop() {} // returns a function that chains all functions given as parameters

var chainFns = function chainFns() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fns.forEach(function (fn) {
      return fn.apply(void 0, args);
    });
  };
};
var def = {
  array: function array(value) {
    return Array.isArray(value) ? value : [value, value];
  },
  withDefault: function withDefault(value, defaultIfUndefined) {
    return value !== void 0 ? value : defaultIfUndefined;
  }
};
function matchKeysFromObject(obj, matchingObject) {
  var o = {};
  Object.entries(obj).forEach(function (_ref) {
    var key = _ref[0],
        value = _ref[1];
    return (value !== void 0 || key in matchingObject) && (o[key] = value);
  });
  return o;
}
function valueFn(v) {
  return typeof v === 'function' ? v() : v;
}

function getInitialState() {
  // common initial state for all gestures
  var initialCommon = {
    _active: false,
    _blocked: false,
    _intentional: [false, false],
    _movement: [0, 0],
    _initial: [0, 0],
    event: undefined,
    // currentTarget: undefined,
    // pointerId: undefined,
    values: [0, 0],
    velocities: [0, 0],
    delta: [0, 0],
    movement: [0, 0],
    offset: [0, 0],
    lastOffset: [0, 0],
    direction: [0, 0],
    initial: [0, 0],
    previous: [0, 0],
    first: false,
    last: false,
    active: false,
    timeStamp: 0,
    startTime: 0,
    elapsedTime: 0,
    cancel: noop,
    canceled: false,
    memo: undefined,
    args: undefined
  }; // initial state for coordinates-based gestures

  var initialCoordinates = {
    axis: undefined,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0
  }; // initial state for distance and angle-based gestures (pinch)

  var initialDistanceAngle = {
    da: [0, 0],
    vdva: [0, 0],
    origin: undefined,
    turns: 0
  }; // initial state object (used by the gesture controller)

  return {
    shared: {
      hovering: false,
      scrolling: false,
      wheeling: false,
      dragging: false,
      moving: false,
      pinching: false,
      touches: 0,
      buttons: 0,
      down: false,
      shiftKey: false,
      altKey: false,
      metaKey: false,
      ctrlKey: false
    },
    drag: _extends({}, initialCommon, {}, initialCoordinates, {
      _isTap: true,
      _delayedEvent: false,
      tap: false,
      swipe: [0, 0]
    }),
    pinch: _extends({}, initialCommon, {}, initialDistanceAngle),
    wheel: _extends({}, initialCommon, {}, initialCoordinates),
    move: _extends({}, initialCommon, {}, initialCoordinates),
    scroll: _extends({}, initialCommon, {}, initialCoordinates)
  };
}

var setListeners = function setListeners(add) {
  return function (el, listeners, options) {
    var action = add ? 'addEventListener' : 'removeEventListener';
    listeners.forEach(function (_ref) {
      var eventName = _ref[0],
          fn = _ref[1];
      return el[action](eventName, fn, options);
    });
  };
};
/**
 * Whether the browser supports GestureEvent (ie Safari)
 * @returns true if the browser supports gesture event
 */


function supportsGestureEvents() {
  try {
    // TODO [TS] possibly find GestureEvent definitions?
    // @ts-ignore: no type definitions for webkit GestureEvents
    return 'constructor' in GestureEvent;
  } catch (e) {
    return false;
  }
}
var addListeners =
/*#__PURE__*/
setListeners(true);
var removeListeners =
/*#__PURE__*/
setListeners(false);
/**
 * Gets modifier keys from event
 * @param event
 * @returns modifier keys
 */

function getModifierKeys(event) {
  var shiftKey = event.shiftKey,
      altKey = event.altKey,
      metaKey = event.metaKey,
      ctrlKey = event.ctrlKey;
  return {
    shiftKey: shiftKey,
    altKey: altKey,
    metaKey: metaKey,
    ctrlKey: ctrlKey
  };
}

function getTouchEvents(event) {
  if ('touches' in event) {
    var touches = event.touches,
        changedTouches = event.changedTouches;
    return touches.length > 0 ? touches : changedTouches;
  }

  return null;
}

function getGenericEventData(event) {
  var buttons = 'buttons' in event ? event.buttons : 0;
  var touchEvents = getTouchEvents(event);
  var touches = touchEvents && touchEvents.length || 0;
  var down = touches > 0 || buttons > 0;
  return _extends({
    touches: touches,
    down: down,
    buttons: buttons
  }, getModifierKeys(event));
}
/**
 * Gets scroll event values
 * @param event
 * @returns scroll event values
 */

function getScrollEventValues(event) {
  // If the currentTarget is the window then we return the scrollX/Y position.
  // If not (ie the currentTarget is a DOM element), then we return scrollLeft/Top
  var _event$currentTarget = event.currentTarget,
      scrollX = _event$currentTarget.scrollX,
      scrollY = _event$currentTarget.scrollY,
      scrollLeft = _event$currentTarget.scrollLeft,
      scrollTop = _event$currentTarget.scrollTop;
  return {
    values: [scrollX || scrollLeft || 0, scrollY || scrollTop || 0]
  };
}
/**
 * Gets wheel event values.
 * @param event
 * @returns wheel event values
 */

function getWheelEventValues(event) {
  var deltaX = event.deltaX,
      deltaY = event.deltaY; //TODO implement polyfill ?
  // https://developer.mozilla.org/en-US/docs/Web/Events/wheel#Polyfill

  return {
    values: [deltaX, deltaY]
  };
}
/**
 * Gets pointer event values.
 * @param event
 * @returns pointer event values
 */

function getPointerEventValues(event) {
  var touchEvents = getTouchEvents(event);

  var _ref2 = touchEvents ? touchEvents[0] : event,
      clientX = _ref2.clientX,
      clientY = _ref2.clientY;

  return {
    values: [clientX, clientY]
  };
}
var WEBKIT_DISTANCE_SCALE_FACTOR = 260;
/**
 * Gets webkit gesture event values.
 * @param event
 * @returns webkit gesture event values
 */

function getWebkitGestureEventValues(event) {
  return {
    values: [event.scale * WEBKIT_DISTANCE_SCALE_FACTOR, event.rotation]
  };
}
/**
 * Gets two touches event data
 * @param event
 * @returns two touches event data
 */

function getTwoTouchesEventData(event) {
  var touches = event.touches;
  var dx = touches[1].clientX - touches[0].clientX;
  var dy = touches[1].clientY - touches[0].clientY;
  var values = [Math.hypot(dx, dy), -(Math.atan2(dx, dy) * 180) / Math.PI];
  var origin = [(touches[1].clientX + touches[0].clientX) / 2, (touches[1].clientY + touches[0].clientY) / 2];
  return {
    values: values,
    origin: origin
  };
}

/**
 * The controller will keep track of the state for all gestures and also keep
 * track of timeouts, and window listeners.
 *
 * @template BinderType the type the bind function should return
 */

var Controller = function Controller() {
  var _this = this;

  this.state = getInitialState(); // state for all gestures

  this.timeouts = {}; // keeping track of timeouts for debounced gestures (such as move, scroll, wheel)

  this.domListeners = []; // when config.domTarget is set, we attach events directly to the dom

  this.windowListeners = {}; // keeps track of window listeners added by gestures (drag only at the moment)

  this.bindings = {}; // an object holding the handlers associated to the gestures

  /**
   * Function ran on component unmount: cleans timeouts and removes dom listeners set by the bind function.
   */

  this.clean = function () {
    _this.resetBindings();

    Object.values(_this.timeouts).forEach(clearTimeout);
    Object.keys(_this.windowListeners).forEach(function (stateKey) {
      return _this.removeWindowListeners(stateKey);
    });
  };
  /**
   * Function run every time the bind function is run (ie on every render).
   * Resets the binding object and remove dom listeners attached to config.domTarget
   */


  this.resetBindings = function () {
    _this.bindings = {};

    var domTarget = _this.getDomTarget();

    if (domTarget) {
      removeListeners(domTarget, _this.domListeners, _this.config.eventOptions);
      _this.domListeners = [];
    }
  };
  /**
   * Returns the domTarget element and parses a ref if needed.
   */


  this.getDomTarget = function () {
    var domTarget = _this.config.domTarget;
    return domTarget && 'current' in domTarget ? domTarget.current : domTarget;
  };
  /**
   * Commodity function to let recognizers simply add listeners to config.window.
   */


  this.addWindowListeners = function (stateKey, listeners) {
    if (!_this.config.window) return; // we use this.windowListeners to keep track of the listeners we add

    _this.windowListeners[stateKey] = listeners;
    addListeners(_this.config.window, listeners, _this.config.eventOptions);
  };
  /**
   * Commodity function to let recognizers simply remove listeners to config.window.
   */


  this.removeWindowListeners = function (stateKey) {
    if (!_this.config.window) return;
    var listeners = _this.windowListeners[stateKey];

    if (listeners) {
      removeListeners(_this.config.window, listeners, _this.config.eventOptions);
      delete _this.windowListeners[stateKey];
    }
  };
  /**
   * When config.domTarget is set, this function will add dom listeners to it
   */


  this.addDomTargetListeners = function (target) {
    /** We iterate on the entries of this.binding for each event, then we chain
     * the array of functions mapped to it and push them to this.domListeners
     */
    Object.entries(_this.bindings).forEach(function (_ref) {
      var event = _ref[0],
          fns = _ref[1];

      _this.domListeners.push([event.substr(2).toLowerCase(), chainFns.apply(void 0, fns)]);
    });
    addListeners(target, _this.domListeners, _this.config.eventOptions);
  };
  /**
   * this.bindings is an object which keys match ReactEventHandlerKeys.
   * Since a recognizer might want to bind a handler function to an event key already used by a previously
   * added recognizer, we need to make sure that each event key is an array of all the functions mapped for
   * that key.
   */


  this.addBindings = function (eventNames, fn) {
    var eventNamesArray = !Array.isArray(eventNames) ? [eventNames] : eventNames;
    eventNamesArray.forEach(function (eventName) {
      if (_this.bindings[eventName]) _this.bindings[eventName].push(fn);else _this.bindings[eventName] = [fn];
    });
  };
  /**
   * getBindings will return an object that will be bound by users
   * to the react component they want to interact with.
   */


  this.getBindings = function () {
    var bindings = {};
    var captureString = _this.config.captureString;
    Object.entries(_this.bindings).forEach(function (_ref2) {
      var event = _ref2[0],
          fns = _ref2[1];
      var fnsArray = Array.isArray(fns) ? fns : [fns];
      var key = event + captureString;
      bindings[key] = chainFns.apply(void 0, fnsArray);
    });
    return bindings;
  };

  this.getBind = function () {
    // If config.domTarget is set we add event listeners to it and return the clean function.
    if (_this.config.domTarget) {
      var domTarget = _this.getDomTarget();

      domTarget && _this.addDomTargetListeners(domTarget);
      return _this.clean;
    } // If not, we return an object that contains gesture handlers mapped to react handler event keys.


    return _this.getBindings();
  };
};

/**
 * @private
 *
 * Utility hook called by all gesture hooks and that will be responsible for the internals.
 *
 * @param {Partial<InternalHandlers>} handlers
 * @param {RecognizerClasses} classes
 * @param {InternalConfig} config
 * @param {NativeHandlersPartial} nativeHandlers - native handlers such as onClick, onMouseDown, etc.
 * @returns {(...args: any[]) => HookReturnType<Config>}
 */

function useRecognizers(handlers, classes, config, nativeHandlers) {
  var controller = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(); // The gesture controller keeping track of all gesture states

  var nativeRefs = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();

  if (!controller.current) {
    // We only initialize the gesture controller once
    controller.current = new Controller();
  } // We reassign the config and handlers to the controller on every render.


  controller.current.config = config;
  controller.current.handlers = handlers;
  /**
   * We also assign nativeHandlers to a ref, otherwise it they won't be refreshed
   * on the next render.
   */

  nativeRefs.current = nativeHandlers;
  /**
   * When the component unmounts, we run the controller clean functions that will be responsible
   * for removing listeners, clearing timeouts etc.
   */

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    return controller.current.clean;
  }, []);
  /**
   * The bind function will create gesture recognizers and return the right
   * bind object depending on whether `domTarget` was specified in the config object.
   */

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(function () {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      controller.current.resetBindings();
      classes.forEach(function (RecognizerClass) {
        var recognizer = new RecognizerClass(controller.current, args);
        recognizer.addBindings();
      });

      if (nativeRefs.current) {
        // we also add event bindings for native handlers
        Object.entries(nativeRefs.current).forEach(function (_ref) {
          var eventName = _ref[0],
              fn = _ref[1];
          // we're cheating when it comes to event type :(
          controller.current.addBindings(eventName, fn);
        });
      }

      return controller.current.getBind();
    };
  }),
      bind = _React$useState[0];

  return bind;
}

/**
 * @private
 * Recognizer abstract class.
 *
 * @protected
 * @abstract
 * @type {StateKey<T>} whether the Recognizer should deal with coordinates or distance / angle
 */

var Recognizer =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of a gesture recognizer.
   * @param stateKey drag, move, pinch, etc.
   * @param controller the controller attached to the gesture
   * @param [args] the args that should be passed to the gesture handler
   */
  function Recognizer(stateKey, controller, args) {
    var _this = this;

    if (args === void 0) {
      args = [];
    }

    this.stateKey = stateKey;
    this.controller = controller;
    this.args = args; // Convenience method to set a timeout for a given gesture

    this.setTimeout = function (callback, ms) {
      var _window;

      if (ms === void 0) {
        ms = 140;
      }

      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      _this.controller.timeouts[_this.stateKey] = (_window = window).setTimeout.apply(_window, [callback, ms].concat(args));
    }; // Convenience method to clear a timeout for a given gesture


    this.clearTimeout = function () {
      clearTimeout(_this.controller.timeouts[_this.stateKey]);
    }; // Convenience method to add window listeners for a given gesture


    this.addWindowListeners = function (listeners) {
      _this.controller.addWindowListeners(_this.stateKey, listeners);
    }; // Convenience method to remove window listeners for a given gesture


    this.removeWindowListeners = function () {
      _this.controller.removeWindowListeners(_this.stateKey);
    };
    /**
     * Returns the reinitialized start state for the gesture.
     * Should be common to all gestures.
     *
     * @param {Vector2} values
     * @param {UseGestureEvent} event
     * @returns - the start state for the gesture
     */


    this.getStartGestureState = function (values, event) {
      return _extends({}, getInitialState()[_this.stateKey], {
        _active: true,
        values: values,
        initial: values,
        offset: _this.state.offset,
        lastOffset: _this.state.offset,
        startTime: event.timeStamp
      });
    }; // Runs rubberband on a vector


    this.rubberband = function (vector, rubberband) {
      var bounds = _this.config.bounds;
      /**
       * [x, y]: [rubberband(x, min, max), rubberband(y, min, max)]
       */

      return vector.map(function (v, i) {
        return rubberbandIfOutOfBounds(v, bounds[i][0], bounds[i][1], rubberband[i]);
      });
    };
    /**
     * Fires the gesture handler
     *
     * @param {boolean} [forceFlag] - if true, then the handler will fire even if the gesture is not intentional
     */


    this.fireGestureHandler = function (forceFlag) {
      /**
       * If the gesture has been blocked (this can happen when the gesture has started in an unwanted direction),
       * clean everything and don't do anything.
       */
      if (_this.state._blocked) {
        _this.state._active = false;

        _this.clean();

        return null;
      } // If the gesture has no intentional dimension, don't do fire the handler.


      var _this$state$_intentio = _this.state._intentional,
          intentionalX = _this$state$_intentio[0],
          intentionalY = _this$state$_intentio[1];
      if (!forceFlag && intentionalX === false && intentionalY === false) return null;
      var _this$state = _this.state,
          _active = _this$state._active,
          active = _this$state.active;
      _this.state.active = _active;
      _this.state.first = _active && !active; // `first` is true when the gesture becomes active

      _this.state.last = !_active; // `last` is true when the gesture becomes inactive

      _this.controller.state.shared[_this.ingKey] = _active; // Sets dragging, pinching, etc. to the gesture active state

      var state = _extends({}, _this.controller.state.shared, {}, _this.state, {}, _this.mapStateValues(_this.state)); // @ts-ignore


      var newMemo = _this.handler(state); // Sets memo to the returned value of the handler (unless it's not undefined)


      _this.state.memo = newMemo !== void 0 ? newMemo : _this.state.memo; // Cleans the gesture when the gesture is no longer active.

      if (!_active) _this.clean();
      return state;
    };
  } // Returns the gesture config


  var _proto = Recognizer.prototype;

  // Conveninence method to update the shared state
  _proto.updateSharedState = function updateSharedState(sharedState) {
    Object.assign(this.controller.state.shared, sharedState);
  } // Conveninence method to update the gesture state
  ;

  _proto.updateGestureState = function updateGestureState(gestureState) {
    Object.assign(this.state, gestureState);
  }
  /**
   * Returns a generic, common payload for all gestures from an event.
   *
   * @param {UseGestureEvent} event
   * @param {boolean} [isStartEvent]
   * @returns - the generic gesture payload
   */
  ;

  _proto.getGenericPayload = function getGenericPayload(event, isStartEvent) {
    var timeStamp = event.timeStamp;
    var _this$state2 = this.state,
        values = _this$state2.values,
        startTime = _this$state2.startTime;
    return {
      event: event,
      timeStamp: timeStamp,
      elapsedTime: isStartEvent ? 0 : timeStamp - startTime,
      args: this.args,
      previous: values
    };
  }
  /**
   * Returns state properties depending on the movement and state.
   *
   * Should be overriden for custom behavior, doesn't do anything in the implementation
   * below.
   */
  ;

  _proto.checkIntentionality = function checkIntentionality(_intentional, _movement, _state) {
    return {
      _intentional: _intentional,
      _blocked: false
    };
  }
  /**
   * Returns basic movement properties for the gesture based on the next values and current state.
   */
  ;

  _proto.getMovement = function getMovement(values, state) {
    if (state === void 0) {
      state = this.state;
    }

    var _this$config = this.config,
        initial = _this$config.initial,
        threshold = _this$config.threshold,
        rubberband = _this$config.rubberband;
    var t0 = threshold[0],
        t1 = threshold[1];
    var _state2 = state,
        _initial = _state2._initial,
        _active = _state2._active,
        intentional = _state2._intentional,
        lastOffset = _state2.lastOffset,
        prevMovement = _state2.movement;
    var i0 = intentional[0],
        i1 = intentional[1];

    var _this$getInternalMove = this.getInternalMovement(values, state),
        _m0 = _this$getInternalMove[0],
        _m1 = _this$getInternalMove[1];
    /**
     * For both dimensions of the gesture, check its intentionality on each frame.
     */


    if (i0 === false) {
      i0 = getIntentional(_m0, t0);
    }

    if (i1 === false) {
      i1 = getIntentional(_m1, t1);
    } // Get gesture specific state properties based on intentionality and movement.


    var intentionalityCheck = this.checkIntentionality([i0, i1], [_m0, _m1], state);
    var _intentional = intentionalityCheck._intentional,
        _blocked = intentionalityCheck._blocked;
    var _i0 = _intentional[0],
        _i1 = _intentional[1];
    var _movement = [_m0, _m1];
    if (_i0 !== false && intentional[0] === false) _initial[0] = valueFn(initial)[0];
    if (_i1 !== false && intentional[1] === false) _initial[1] = valueFn(initial)[1];
    /**
     * If the gesture has been blocked (from gesture specific checkIntentionality),
     * stop right there.
     */

    if (_blocked) return _extends({}, intentionalityCheck, {
      _movement: _movement
    });
    /**
     * The movement sent to the handler has 0 in its dimensions when intentionality is false.
     * It is calculated from the actual movement minus the threshold.
     */

    var movement = [_i0 !== false ? _m0 - _i0 : valueFn(initial)[0], _i1 !== false ? _m1 - _i1 : valueFn(initial)[1]];
    var offset = addV(movement, lastOffset);
    /**
     * Rubberband should be 0 when the gesture is no longer active, so that movement
     * and offset can return within their bounds.
     */

    var _rubberband = _active ? rubberband : [0, 0];

    movement = this.rubberband(addV(movement, _initial), _rubberband); // rubberbanded movement

    return _extends({}, intentionalityCheck, {
      _initial: _initial,
      _movement: _movement,
      movement: movement,
      offset: this.rubberband(offset, _rubberband),
      delta: subV(movement, prevMovement)
    });
  } // Cleans the gesture. Can be overriden by gestures.
  ;

  _proto.clean = function clean() {
    this.clearTimeout();
    this.removeWindowListeners();
  };

  _createClass(Recognizer, [{
    key: "config",
    get: function get() {
      return this.controller.config[this.stateKey];
    } // Is the gesture enabled

  }, {
    key: "enabled",
    get: function get() {
      return this.controller.config.enabled && this.config.enabled;
    } // Returns the controller state for a given gesture

  }, {
    key: "state",
    get: function get() {
      return this.controller.state[this.stateKey];
    } // Returns the gesture handler

  }, {
    key: "handler",
    get: function get() {
      return this.controller.handlers[this.stateKey];
    }
  }]);

  return Recognizer;
}();

/**
 * @private
 * Abstract class for coordinates-based gesture recongizers
 * @abstract
 * @class CoordinatesRecognizer
 * @extends {Recognizer<T>}
 * @template T
 */

var CoordinatesRecognizer =
/*#__PURE__*/
function (_Recognizer) {
  _inheritsLoose(CoordinatesRecognizer, _Recognizer);

  function CoordinatesRecognizer() {
    return _Recognizer.apply(this, arguments) || this;
  }

  var _proto = CoordinatesRecognizer.prototype;

  /**
   * Returns the real movement (without taking intentionality into acount)
   */
  _proto.getInternalMovement = function getInternalMovement(values, state) {
    return subV(values, state.initial);
  }
  /**
   * In coordinates-based gesture, this function will detect the first intentional axis,
   * lock the gesture axis if lockDirection is specified in the config, block the gesture
   * if the first intentional axis doesn't match the specified axis in config.
   *
   * @param {[FalseOrNumber, FalseOrNumber]} _intentional
   * @param {Vector2} _movement
   * @param {PartialGestureState<T>} state
   */
  ;

  _proto.checkIntentionality = function checkIntentionality(_intentional, _movement, state) {
    var _intentional2 = _intentional,
        _ix = _intentional2[0],
        _iy = _intentional2[1];
    var intentionalMovement = _ix !== false || _iy !== false;
    var axis = state.axis;
    var _blocked = false; // If the movement is intentional, we can compute axis.

    if (intentionalMovement) {
      var _movement$map = _movement.map(Math.abs),
          absX = _movement$map[0],
          absY = _movement$map[1];

      var _this$config = this.config,
          configAxis = _this$config.axis,
          lockDirection = _this$config.lockDirection; // We make sure we only set axis value if it hadn't been detected before.

      axis = axis || (absX > absY ? 'x' : absX < absY ? 'y' : undefined);

      if (!!configAxis || lockDirection) {
        if (!!axis) {
          // If the detected axis doesn't match the config axis we block the gesture
          if (!!configAxis && axis !== configAxis) _blocked = true;else {
            // Otherwise we prevent the gesture from updating the unwanted axis.
            var lockedIndex = axis === 'x' ? 1 : 0;
            _intentional[lockedIndex] = false;
          }
        } else {
          // Until we've detected the axis, we prevent the hnadler from updating.
          _intentional = [false, false];
        }
      }
    }

    return {
      _intentional: _intentional,
      _blocked: _blocked,
      axis: axis
    };
  };

  _proto.getKinematics = function getKinematics(values, event) {
    var timeStamp = this.state.timeStamp;
    var movementDetection = this.getMovement(values, this.state);
    var _blocked = movementDetection._blocked,
        delta = movementDetection.delta,
        movement = movementDetection.movement;
    if (_blocked) return movementDetection;
    var delta_t = event.timeStamp - timeStamp;
    var kinematics = calculateAllKinematics(movement, delta, delta_t);
    return _extends({
      values: values,
      delta: delta
    }, movementDetection, {}, kinematics);
  };

  _proto.mapStateValues = function mapStateValues(state) {
    return {
      xy: state.values,
      vxvy: state.velocities
    };
  };

  return CoordinatesRecognizer;
}(Recognizer);

var TAP_DISTANCE_THRESHOLD = 3;
var SWIPE_MAX_ELAPSED_TIME = 220;

var DragRecognizer =
/*#__PURE__*/
function (_CoordinatesRecognize) {
  _inheritsLoose(DragRecognizer, _CoordinatesRecognize);

  function DragRecognizer(controller, args) {
    var _this;

    _this = _CoordinatesRecognize.call(this, 'drag', controller, args) || this;
    _this.ingKey = 'dragging';

    _this.dragShouldStart = function (event) {
      var _getGenericEventData = getGenericEventData(event),
          touches = _getGenericEventData.touches;

      return _this.enabled && touches < 2;
    };

    _this.setPointers = function (event) {
      var currentTarget = event.currentTarget,
          pointerId = event.pointerId; // @ts-ignore

      if (currentTarget) currentTarget.setPointerCapture(pointerId);

      _this.updateGestureState({
        currentTarget: currentTarget,
        pointerId: pointerId
      });
    };

    _this.removePointers = function () {
      var _this$state = _this.state,
          currentTarget = _this$state.currentTarget,
          pointerId = _this$state.pointerId; // @ts-ignore

      if (currentTarget) currentTarget.releasePointerCapture(pointerId);
    };

    _this.setListeners = function () {
      _this.removeWindowListeners();

      var dragListeners = [['touchmove', _this.onDragChange], ['touchend', _this.onDragEnd], ['touchcancel', _this.onDragEnd], ['mousemove', _this.onDragChange], ['mouseup', _this.onDragEnd]];

      _this.addWindowListeners(dragListeners);
    };

    _this.onDragStart = function (event) {
      if (!_this.dragShouldStart(event)) return; // if pointers events

      if (_this.controller.config.pointer) _this.setPointers(event);else _this.setListeners();

      if (_this.config.delay > 0) {
        _this.state._delayedEvent = true;
        if (typeof event.persist === 'function') event.persist();

        _this.setTimeout(function () {
          return _this.startDrag(event);
        }, _this.config.delay);
      } else {
        _this.startDrag(event);
      }
    };

    _this.onDragChange = function (event) {
      var canceled = _this.state.canceled;
      if (canceled) return;

      if (!_this.state._active) {
        if (_this.state._delayedEvent) {
          _this.clearTimeout();

          _this.startDrag(event);
        }

        return;
      }

      var genericEventData = getGenericEventData(event);

      if (!genericEventData.down) {
        _this.onDragEnd(event);

        return;
      }

      _this.updateSharedState(genericEventData);

      var _getPointerEventValue = getPointerEventValues(event),
          values = _getPointerEventValue.values;

      var kinematics = _this.getKinematics(values, event);

      var _isTap = _this.state._isTap;
      if (_isTap && calculateDistance(kinematics._movement) >= TAP_DISTANCE_THRESHOLD) _isTap = false;

      _this.updateGestureState(_extends({}, _this.getGenericPayload(event), {}, kinematics, {
        _isTap: _isTap,
        cancel: function cancel() {
          return _this.onCancel();
        }
      }));

      _this.fireGestureHandler();
    };

    _this.onDragEnd = function (event) {
      _this.state._active = false;

      _this.updateSharedState({
        down: false,
        buttons: 0,
        touches: 0
      });

      var _this$state2 = _this.state,
          _isTap = _this$state2._isTap,
          values = _this$state2.values,
          _this$state2$velociti = _this$state2.velocities,
          vx = _this$state2$velociti[0],
          vy = _this$state2$velociti[1],
          _this$state2$movement = _this$state2.movement,
          mx = _this$state2$movement[0],
          my = _this$state2$movement[1],
          _this$state2$_intenti = _this$state2._intentional,
          ix = _this$state2$_intenti[0],
          iy = _this$state2$_intenti[1];

      var endState = _extends({}, _this.getGenericPayload(event), {}, _this.getMovement(values));

      var elapsedTime = endState.elapsedTime;
      var _this$config = _this.config,
          _this$config$swipeVel = _this$config.swipeVelocity,
          svx = _this$config$swipeVel[0],
          svy = _this$config$swipeVel[1],
          _this$config$swipeDis = _this$config.swipeDistance,
          sx = _this$config$swipeDis[0],
          sy = _this$config$swipeDis[1];
      var swipe = [0, 0];

      if (elapsedTime < SWIPE_MAX_ELAPSED_TIME) {
        if (ix !== false && Math.abs(vx) > svx && Math.abs(mx) > sx) swipe[0] = Math.sign(vx);
        if (iy !== false && Math.abs(vy) > svy && Math.abs(my) > sy) swipe[1] = Math.sign(vy);
      }

      _this.updateGestureState(_extends({
        event: event
      }, endState, {
        tap: _isTap,
        swipe: swipe
      }));

      _this.fireGestureHandler(_this.config.filterTaps && _this.state._isTap);
    };

    _this.clean = function () {
      _CoordinatesRecognize.prototype.clean.call(_assertThisInitialized(_this));

      _this.state._delayedEvent = false;
      if (_this.controller.config.pointer) _this.removePointers();
    };

    _this.onCancel = function () {
      _this.updateGestureState({
        canceled: true,
        cancel: noop
      });

      _this.state._active = false;

      _this.updateSharedState({
        down: false,
        buttons: 0,
        touches: 0
      });

      requestAnimationFrame(function () {
        return _this.fireGestureHandler();
      });
    };

    return _this;
  }

  var _proto = DragRecognizer.prototype;

  _proto.startDrag = function startDrag(event) {
    var _this2 = this;

    var _getPointerEventValue2 = getPointerEventValues(event),
        values = _getPointerEventValue2.values;

    this.updateSharedState(getGenericEventData(event));

    var startState = _extends({}, this.getStartGestureState(values, event), {}, this.getGenericPayload(event, true));

    this.updateGestureState(_extends({}, startState, {}, this.getMovement(values, startState), {
      cancel: function cancel() {
        return _this2.onCancel();
      }
    }));
    this.fireGestureHandler();
  };

  _proto.addBindings = function addBindings() {
    if (this.controller.config.pointer) {
      this.controller.addBindings('onPointerDown', this.onDragStart);
      this.controller.addBindings('onPointerMove', this.onDragChange);
      this.controller.addBindings(['onPointerUp', 'onPointerCancel'], this.onDragEnd);
    } else {
      this.controller.addBindings(['onTouchStart', 'onMouseDown'], this.onDragStart);
    }
  };

  return DragRecognizer;
}(CoordinatesRecognizer);

var DEFAULT_DRAG_DELAY = 180;
var DEFAULT_RUBBERBAND = 0.15;

function getWindow() {
  return typeof window !== 'undefined' ? window : undefined;
}
/**
 * @private
 *
 * Returns the internal generic option object.
 *
 * @param {Partial<GenericOptions>} [config={}]
 * @returns {InternalGenericOptions}
 */


function getInternalGenericOptions(config) {
  if (config === void 0) {
    config = {};
  }

  var defaultOptions = {
    domTarget: undefined,
    eventOptions: {
      passive: true,
      capture: false,
      pointer: false
    },
    window: getWindow(),
    enabled: true
  };

  var defaultEventOptions = defaultOptions.eventOptions,
      defaultWindow = defaultOptions.window,
      restDefault = _objectWithoutPropertiesLoose(defaultOptions, ["eventOptions", "window"]);

  var _config = config,
      eventOptions = _config.eventOptions,
      window = _config.window,
      restConfig = _objectWithoutPropertiesLoose(_config, ["eventOptions", "window"]);

  var _defaultEventOptions$ = _extends({}, defaultEventOptions, {}, eventOptions),
      passive = _defaultEventOptions$.passive,
      capture = _defaultEventOptions$.capture,
      pointer = _defaultEventOptions$.pointer;

  return _extends({}, restDefault, {}, restConfig, {
    window: window || defaultWindow,
    // passive is always true if there's no domTarget
    eventOptions: {
      passive: !config.domTarget || !!passive,
      capture: !!capture
    },
    captureString: capture ? 'Capture' : '',
    pointer: !!pointer
  });
}
function getInternalGestureOptions(gestureConfig) {
  var defaultGestureOptions = {
    enabled: true,
    initial: [0, 0],
    threshold: undefined,
    rubberband: 0
  };

  var config = _extends({}, defaultGestureOptions, {}, gestureConfig);

  var threshold = config.threshold,
      rubberband = config.rubberband,
      enabled = config.enabled,
      initial = config.initial;
  if (typeof rubberband === 'boolean') rubberband = rubberband ? DEFAULT_RUBBERBAND : 0;
  if (threshold === void 0) threshold = 0;
  return {
    enabled: enabled,
    initial: initial,
    threshold: def.array(threshold),
    rubberband: def.array(rubberband)
  };
}
function getInternalCoordinatesOptions(coordinatesConfig) {
  if (coordinatesConfig === void 0) {
    coordinatesConfig = {};
  }

  var defaultCoordinatesOptions = {
    lockDirection: false,
    axis: undefined,
    bounds: undefined
  };

  var _coordinatesConfig = coordinatesConfig,
      axis = _coordinatesConfig.axis,
      lockDirection = _coordinatesConfig.lockDirection,
      _coordinatesConfig$bo = _coordinatesConfig.bounds,
      bounds = _coordinatesConfig$bo === void 0 ? {} : _coordinatesConfig$bo,
      internalOptions = _objectWithoutPropertiesLoose(_coordinatesConfig, ["axis", "lockDirection", "bounds"]);

  var boundsArray = [[def.withDefault(bounds.left, -Infinity), def.withDefault(bounds.right, Infinity)], [def.withDefault(bounds.top, -Infinity), def.withDefault(bounds.bottom, Infinity)]];
  return _extends({}, getInternalGestureOptions(internalOptions), {}, defaultCoordinatesOptions, {}, matchKeysFromObject({
    axis: axis,
    lockDirection: lockDirection
  }, coordinatesConfig), {
    bounds: boundsArray
  });
}
function getInternalDistanceAngleOptions(distanceAngleConfig) {
  if (distanceAngleConfig === void 0) {
    distanceAngleConfig = {};
  }

  var _distanceAngleConfig = distanceAngleConfig,
      _distanceAngleConfig$ = _distanceAngleConfig.distanceBounds,
      distanceBounds = _distanceAngleConfig$ === void 0 ? {} : _distanceAngleConfig$,
      _distanceAngleConfig$2 = _distanceAngleConfig.angleBounds,
      angleBounds = _distanceAngleConfig$2 === void 0 ? {} : _distanceAngleConfig$2,
      internalOptions = _objectWithoutPropertiesLoose(_distanceAngleConfig, ["distanceBounds", "angleBounds"]);

  var boundsArray = [[def.withDefault(distanceBounds.min, -Infinity), def.withDefault(distanceBounds.max, Infinity)], [def.withDefault(angleBounds.min, -Infinity), def.withDefault(angleBounds.max, Infinity)]];
  return _extends({}, getInternalGestureOptions(internalOptions), {
    bounds: boundsArray
  });
}
function getInternalDragOptions(dragConfig) {
  if (dragConfig === void 0) {
    dragConfig = {};
  }

  var defaultDragOptions = {
    filterTaps: false,
    swipeVelocity: 0.5,
    swipeDistance: 60,
    delay: false
  };

  var _dragConfig = dragConfig,
      enabled = _dragConfig.enabled,
      threshold = _dragConfig.threshold,
      bounds = _dragConfig.bounds,
      rubberband = _dragConfig.rubberband,
      initial = _dragConfig.initial,
      dragOptions = _objectWithoutPropertiesLoose(_dragConfig, ["enabled", "threshold", "bounds", "rubberband", "initial"]);

  var _defaultDragOptions$d = _extends({}, defaultDragOptions, {}, dragOptions),
      swipeVelocity = _defaultDragOptions$d.swipeVelocity,
      swipeDistance = _defaultDragOptions$d.swipeDistance,
      delay = _defaultDragOptions$d.delay,
      filterTaps = _defaultDragOptions$d.filterTaps,
      axis = _defaultDragOptions$d.axis,
      lockDirection = _defaultDragOptions$d.lockDirection;

  if (threshold === void 0) {
    threshold = Math.max(0, filterTaps ? 3 : 0, lockDirection || axis ? 1 : 0);
  } else {
    filterTaps = true;
  }

  var internalCoordinatesOptions = getInternalCoordinatesOptions(matchKeysFromObject({
    enabled: enabled,
    threshold: threshold,
    bounds: bounds,
    rubberband: rubberband,
    axis: axis,
    lockDirection: lockDirection,
    initial: initial
  }, dragConfig));
  return _extends({}, internalCoordinatesOptions, {
    filterTaps: filterTaps || internalCoordinatesOptions.threshold[0] + internalCoordinatesOptions.threshold[1] > 0,
    swipeVelocity: def.array(swipeVelocity),
    swipeDistance: def.array(swipeDistance),
    delay: typeof delay === 'number' ? delay : delay ? DEFAULT_DRAG_DELAY : 0
  });
}

/**
 * @public
 *
 * Drag hook.
 *
 * @param {Handler<'drag'>} handler - the function fired every time the drag gesture updates
 * @param {(Config | {})} [config={}] - the config object including generic options and drag options
 * @returns {(...args: any[]) => HookReturnType<Config>}
 */

function useDrag(handler, config) {
  if (config === void 0) {
    config = {};
  }

  var _config = config,
      domTarget = _config.domTarget,
      eventOptions = _config.eventOptions,
      window = _config.window,
      drag = _objectWithoutPropertiesLoose(_config, ["domTarget", "eventOptions", "window"]);
  /**
   * TODO: at the moment we recompute the config object at every render
   * this could probably be optimized
   */


  var mergedConfig = _extends({}, getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window
  }), {
    drag: getInternalDragOptions(drag)
  });

  return useRecognizers({
    drag: handler
  }, [DragRecognizer], mergedConfig);
}

/**
 * @private
 * Abstract class for distance/angle-based gesture recongizers
 * @abstract
 * @class DistanceAngleRecognizer
 * @extends {Recognizer<T>}
 * @template T
 */

var DistanceAngleRecognizer =
/*#__PURE__*/
function (_Recognizer) {
  _inheritsLoose(DistanceAngleRecognizer, _Recognizer);

  function DistanceAngleRecognizer() {
    return _Recognizer.apply(this, arguments) || this;
  }

  var _proto = DistanceAngleRecognizer.prototype;

  /**
   * Returns the real movement (without taking intentionality into acount)
   */
  _proto.getInternalMovement = function getInternalMovement(_ref, state) {
    var d = _ref[0],
        a = _ref[1];
    var da = state.values,
        turns = state.turns,
        initial = state.initial; // angle might not be defined when ctrl wheel is used for zoom only
    // in that case we set it to the previous angle value

    a = a !== void 0 ? a : da[1];
    var delta_a = a - da[1];
    /**
     * The angle value might jump from 179deg to -179deg when we actually want to
     * read 181deg to ensure continuity. To make that happen, we detect when the jump
     * is supsiciously high (ie > 270deg) and increase the `turns` value
     */

    var newTurns = Math.abs(delta_a) > 270 ? turns + Math.sign(delta_a) : turns; // we update the angle difference to its corrected value

    var movement_d = d - initial[0];
    var movement_a = a - 360 * newTurns - initial[1];
    return [movement_d, movement_a];
  };

  _proto.getKinematics = function getKinematics(values, event) {
    var _this$state = this.state,
        timeStamp = _this$state.timeStamp,
        initial = _this$state.initial;
    var movementDetection = this.getMovement(values, this.state);
    var delta = movementDetection.delta,
        movement = movementDetection.movement;
    var turns = (values[1] - movement[1] - initial[1]) / 360;
    var delta_t = event.timeStamp - timeStamp;
    var kinematics = calculateAllKinematics(movement, delta, delta_t);
    return _extends({
      values: values,
      delta: delta,
      turns: turns
    }, movementDetection, {}, kinematics);
  };

  _proto.mapStateValues = function mapStateValues(state) {
    return {
      da: state.values,
      vdva: state.velocities
    };
  };

  return DistanceAngleRecognizer;
}(Recognizer);

var PinchRecognizer =
/*#__PURE__*/
function (_DistanceAngleRecogni) {
  _inheritsLoose(PinchRecognizer, _DistanceAngleRecogni);

  function PinchRecognizer(controller, args) {
    var _this;

    _this = _DistanceAngleRecogni.call(this, 'pinch', controller, args) || this;
    _this.ingKey = 'pinching';

    _this.pinchShouldStart = function (event) {
      var _getGenericEventData = getGenericEventData(event),
          touches = _getGenericEventData.touches;

      return _this.enabled && touches === 2;
    };

    _this.onPinchStart = function (event) {
      if (!_this.pinchShouldStart(event)) return;

      var _getTwoTouchesEventDa = getTwoTouchesEventData(event),
          values = _getTwoTouchesEventDa.values,
          origin = _getTwoTouchesEventDa.origin;

      _this.updateSharedState(getGenericEventData(event));

      var startState = _extends({}, _this.getStartGestureState(values, event), {}, _this.getGenericPayload(event, true));

      _this.updateGestureState(_extends({}, startState, {}, _this.getMovement(values, startState), {
        origin: origin,
        cancel: function cancel() {
          return _this.onCancel();
        }
      }));

      _this.fireGestureHandler();
    };

    _this.onPinchChange = function (event) {
      var _this$state = _this.state,
          canceled = _this$state.canceled,
          timeStamp = _this$state.timeStamp,
          _active = _this$state._active;
      if (canceled || !_active) return;
      var genericEventData = getGenericEventData(event);
      if (genericEventData.touches !== 2 || event.timeStamp === timeStamp) return;

      _this.updateSharedState(genericEventData);

      var _getTwoTouchesEventDa2 = getTwoTouchesEventData(event),
          values = _getTwoTouchesEventDa2.values,
          origin = _getTwoTouchesEventDa2.origin;

      var kinematics = _this.getKinematics(values, event);

      _this.updateGestureState(_extends({}, _this.getGenericPayload(event), {}, kinematics, {
        origin: origin,
        cancel: function cancel() {
          return _this.onCancel();
        }
      }));

      _this.fireGestureHandler();
    };

    _this.onPinchEnd = function (event) {
      _this.state._active = false;

      _this.updateSharedState({
        down: false,
        touches: 0
      });

      _this.updateGestureState(_extends({
        event: event
      }, _this.getGenericPayload(event), {}, _this.getMovement(_this.state.values)));

      _this.fireGestureHandler();
    };

    _this.onCancel = function () {
      _this.state._active = false;

      _this.updateGestureState({
        canceled: true,
        cancel: noop
      });

      _this.updateSharedState({
        down: false,
        touches: 0
      });

      requestAnimationFrame(function () {
        return _this.fireGestureHandler();
      });
    };
    /**
     * PINCH WITH WEBKIT GESTURES
     */


    _this.onGestureStart = function (event) {
      if (!_this.enabled) return;
      event.preventDefault();

      var _getWebkitGestureEven = getWebkitGestureEventValues(event),
          values = _getWebkitGestureEven.values;

      _this.updateSharedState(getGenericEventData(event));

      var startState = _extends({}, _this.getStartGestureState(values, event), {}, _this.getGenericPayload(event, true));

      _this.updateGestureState(_extends({}, startState, {}, _this.getMovement(values, startState), {
        cancel: function cancel() {
          return _this.onCancel();
        }
      }));

      _this.fireGestureHandler();
    };

    _this.onGestureChange = function (event) {
      var _this$state2 = _this.state,
          canceled = _this$state2.canceled,
          _active = _this$state2._active;
      if (canceled || !_active) return;
      event.preventDefault();
      var genericEventData = getGenericEventData(event);

      _this.updateSharedState(genericEventData);

      var _getWebkitGestureEven2 = getWebkitGestureEventValues(event),
          values = _getWebkitGestureEven2.values;

      var kinematics = _this.getKinematics(values, event);

      _this.updateGestureState(_extends({}, _this.getGenericPayload(event), {}, kinematics, {
        cancel: function cancel() {
          return _this.onCancel();
        }
      }));

      _this.fireGestureHandler();
    };

    _this.onGestureEnd = function (event) {
      event.preventDefault();
      _this.state._active = false;

      _this.updateSharedState({
        down: false,
        touches: 0
      });

      _this.updateGestureState(_extends({
        event: event
      }, _this.getGenericPayload(event), {}, _this.getMovement(_this.state.values)));

      _this.fireGestureHandler();
    };

    _this.updateTouchData = function (event) {
      if (!_this.enabled || event.touches.length !== 2) return;

      var _getTwoTouchesEventDa3 = getTwoTouchesEventData(event),
          origin = _getTwoTouchesEventDa3.origin;

      _this.state.origin = origin;
    };
    /**
     * PINCH WITH WHEEL
     */


    _this.wheelShouldRun = function (event) {
      return _this.enabled && event.ctrlKey;
    };

    _this.getWheelValuesFromEvent = function (event) {
      var _getWheelEventValues = getWheelEventValues(event),
          _getWheelEventValues$ = _getWheelEventValues.values,
          delta_d = _getWheelEventValues$[1];

      var _this$state$values = _this.state.values,
          prev_d = _this$state$values[0],
          prev_a = _this$state$values[1];
      var d = prev_d - delta_d;
      var a = prev_a !== void 0 ? prev_a : 0;
      return {
        values: [d, a],
        origin: [event.clientX, event.clientY],
        delta: [0, delta_d]
      };
    };

    _this.onWheel = function (event) {
      if (!_this.wheelShouldRun(event)) return;

      _this.clearTimeout();

      _this.setTimeout(_this.onWheelEnd);

      if (!_this.state._active) _this.onWheelStart(event);else _this.onWheelChange(event);
    };

    _this.onWheelStart = function (event) {
      var _this$getWheelValuesF = _this.getWheelValuesFromEvent(event),
          values = _this$getWheelValuesF.values,
          delta = _this$getWheelValuesF.delta,
          origin = _this$getWheelValuesF.origin;

      if (!_this.controller.config.eventOptions.passive) {
        event.preventDefault();
      } else if (false) {}

      _this.updateSharedState(getGenericEventData(event));

      var startState = _extends({}, _this.getStartGestureState(values, event), {}, _this.getGenericPayload(event, true), {
        initial: _this.state.values
      });

      _this.updateGestureState(_extends({}, startState, {}, _this.getMovement(values, startState), {
        offset: values,
        delta: delta,
        origin: origin
      }));

      _this.fireGestureHandler();
    };

    _this.onWheelChange = function (event) {
      var genericEventData = getGenericEventData(event);

      _this.updateSharedState(genericEventData);

      var _this$getWheelValuesF2 = _this.getWheelValuesFromEvent(event),
          values = _this$getWheelValuesF2.values,
          origin = _this$getWheelValuesF2.origin,
          delta = _this$getWheelValuesF2.delta;

      var kinematics = _this.getKinematics(values, event);

      _this.updateGestureState(_extends({}, _this.getGenericPayload(event), {}, kinematics, {
        origin: origin,
        delta: delta
      }));

      _this.fireGestureHandler();
    };

    _this.onWheelEnd = function () {
      _this.state._active = false;

      _this.updateGestureState(_this.getMovement(_this.state.values));

      _this.fireGestureHandler();
    };

    return _this;
  }

  var _proto = PinchRecognizer.prototype;

  _proto.addBindings = function addBindings() {
    if (supportsGestureEvents()) {
      this.controller.addBindings('onGestureStart', this.onGestureStart);
      this.controller.addBindings('onGestureChange', this.onGestureChange);
      this.controller.addBindings(['onGestureEnd', 'onTouchCancel'], this.onGestureEnd);
      this.controller.addBindings(['onTouchStart', 'onTouchMove'], this.updateTouchData);
    } else {
      this.controller.addBindings('onTouchStart', this.onPinchStart);
      this.controller.addBindings('onTouchMove', this.onPinchChange);
      this.controller.addBindings(['onTouchEnd', 'onTouchCancel'], this.onPinchEnd);
      this.controller.addBindings('onWheel', this.onWheel);
    }
  };

  return PinchRecognizer;
}(DistanceAngleRecognizer);

/**
 * @public
 *
 * Pinch hook.
 *
 * @param {Handler<'pinch'>} handler - the function fired every time the pinch gesture updates
 * @param {(Config | {})} [config={}] - the config object including generic options and pinch options
 * @returns {(...args: any[]) => HookReturnType<Config>}
 */

function usePinch(handler, config) {
  if (config === void 0) {
    config = {};
  }

  var _config = config,
      domTarget = _config.domTarget,
      eventOptions = _config.eventOptions,
      window = _config.window,
      pinch = _objectWithoutPropertiesLoose(_config, ["domTarget", "eventOptions", "window"]);
  /**
   * TODO: at the moment we recompute the config object at every render
   * this could probably be optimized
   */


  var mergedConfig = _extends({}, getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window
  }), {
    pinch: getInternalDistanceAngleOptions(pinch)
  });

  return useRecognizers({
    pinch: handler
  }, [PinchRecognizer], mergedConfig);
}

var WheelRecognizer =
/*#__PURE__*/
function (_CoordinatesRecognize) {
  _inheritsLoose(WheelRecognizer, _CoordinatesRecognize);

  function WheelRecognizer(controller, args) {
    var _this;

    _this = _CoordinatesRecognize.call(this, 'wheel', controller, args) || this;
    _this.ingKey = 'wheeling';

    _this.wheelShouldRun = function (event) {
      if (event.ctrlKey && 'pinch' in _this.controller.handlers) return false;
      return _this.enabled;
    };

    _this.getValuesFromEvent = function (event) {
      var prevValues = _this.state.values;

      var _getWheelEventValues = getWheelEventValues(event),
          values = _getWheelEventValues.values;

      return {
        values: addV(values, prevValues)
      };
    };

    _this.onWheel = function (event) {
      if (!_this.wheelShouldRun(event)) return;

      _this.clearTimeout();

      _this.setTimeout(_this.onWheelEnd);

      if (!_this.state._active) _this.onWheelStart(event);else _this.onWheelChange(event);
    };

    _this.onWheelStart = function (event) {
      var _this$getValuesFromEv = _this.getValuesFromEvent(event),
          values = _this$getValuesFromEv.values;

      _this.updateSharedState(getGenericEventData(event));

      var startState = _extends({}, _this.getStartGestureState(values, event), {}, _this.getGenericPayload(event, true), {
        initial: _this.state.values
      });

      var movementDetection = _this.getMovement(values, startState);

      var delta = movementDetection.delta;

      _this.updateGestureState(_extends({}, startState, {}, movementDetection, {
        distance: calculateDistance(delta),
        direction: calculateDirection(delta)
      }));

      _this.fireGestureHandler();
    };

    _this.onWheelChange = function (event) {
      var genericEventData = getGenericEventData(event);

      _this.updateSharedState(genericEventData);

      var _this$getValuesFromEv2 = _this.getValuesFromEvent(event),
          values = _this$getValuesFromEv2.values;

      var kinematics = _this.getKinematics(values, event);

      _this.updateGestureState(_extends({}, _this.getGenericPayload(event), {}, kinematics));

      _this.fireGestureHandler();
    };

    _this.onWheelEnd = function () {
      _this.state._active = false;

      _this.updateGestureState(_extends({}, _this.getMovement(_this.state.values), {
        velocities: [0, 0],
        velocity: 0
      }));

      _this.fireGestureHandler();
    };

    return _this;
  }

  var _proto = WheelRecognizer.prototype;

  _proto.addBindings = function addBindings() {
    this.controller.addBindings('onWheel', this.onWheel);
  };

  return WheelRecognizer;
}(CoordinatesRecognizer);

/**
 * @public
 *
 * Wheel hook.
 *
 * @param {Handler<'wheel'>} handler - the function fired every time the wheel gesture updates
 * @param {(Config | {})} [config={}] - the config object including generic options and wheel options
 * @returns {(...args: any[]) => HookReturnType<Config>}
 */

function useWheel(handler, config) {
  if (config === void 0) {
    config = {};
  }

  var _config = config,
      domTarget = _config.domTarget,
      eventOptions = _config.eventOptions,
      window = _config.window,
      wheel = _objectWithoutPropertiesLoose(_config, ["domTarget", "eventOptions", "window"]);
  /**
   * TODO: at the moment we recompute the config object at every render
   * this could probably be optimized
   */


  var mergedConfig = _extends({}, getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window
  }), {
    wheel: getInternalCoordinatesOptions(wheel)
  });

  return useRecognizers({
    wheel: handler
  }, [WheelRecognizer], mergedConfig);
}

var MoveRecognizer =
/*#__PURE__*/
function (_CoordinatesRecognize) {
  _inheritsLoose(MoveRecognizer, _CoordinatesRecognize);

  function MoveRecognizer(controller, args) {
    var _this;

    _this = _CoordinatesRecognize.call(this, 'move', controller, args) || this;
    _this.ingKey = 'moving';

    _this.moveShouldRun = function () {
      return _this.enabled;
    };

    _this.onMove = function (event) {
      if (!_this.moveShouldRun()) return;

      _this.clearTimeout();

      _this.setTimeout(_this.onMoveEnd);

      if (!_this.state._active) _this.onMoveStart(event);else _this.onMoveChange(event);
    };

    _this.onMoveStart = function (event) {
      var _getPointerEventValue = getPointerEventValues(event),
          values = _getPointerEventValue.values;

      _this.updateSharedState(getGenericEventData(event));

      var startState = _extends({}, _this.getStartGestureState(values, event), {}, _this.getGenericPayload(event, true));

      _this.updateGestureState(_extends({}, startState, {}, _this.getMovement(values, startState)));

      _this.fireGestureHandler();
    };

    _this.onMoveChange = function (event) {
      var genericEventData = getGenericEventData(event);

      _this.updateSharedState(genericEventData);

      var _getPointerEventValue2 = getPointerEventValues(event),
          values = _getPointerEventValue2.values;

      var kinematics = _this.getKinematics(values, event);

      _this.updateGestureState(_extends({}, _this.getGenericPayload(event), {}, kinematics));

      _this.fireGestureHandler();
    };

    _this.onMoveEnd = function () {
      _this.state._active = false;

      _this.updateGestureState(_extends({}, _this.getMovement(_this.state.values), {
        velocities: [0, 0],
        velocity: 0
      }));

      _this.fireGestureHandler();
    };

    _this.onPointerEnter = function (event) {
      _this.controller.state.shared.hovering = true;
      if (!_this.controller.config.enabled) return;

      if (_this.controller.config.hover.enabled) {
        var _getPointerEventValue3 = getPointerEventValues(event),
            values = _getPointerEventValue3.values;

        var state = _extends({}, _this.controller.state.shared, {}, _this.state, {}, _this.getGenericPayload(event, true), {
          values: values,
          active: true,
          hovering: true
        });

        _this.controller.handlers.hover(_extends({}, state, {}, _this.mapStateValues(state)));
      }

      if ('move' in _this.controller.handlers) _this.onMoveStart(event);
    };

    _this.onPointerLeave = function (event) {
      _this.controller.state.shared.hovering = false;

      if (_this.controller.config.hover.enabled) {
        var _getPointerEventValue4 = getPointerEventValues(event),
            values = _getPointerEventValue4.values;

        var state = _extends({}, _this.controller.state.shared, {}, _this.state, {}, _this.getGenericPayload(event), {
          values: values,
          active: false
        });

        _this.controller.handlers.hover(_extends({}, state, {}, _this.mapStateValues(state)));
      }

      if ('move' in _this.controller.handlers) _this.onMoveEnd();
    };

    return _this;
  }

  var _proto = MoveRecognizer.prototype;

  _proto.addBindings = function addBindings() {
    if (this.controller.config.pointer) {
      if ('move' in this.controller.handlers) {
        this.controller.addBindings('onPointerMove', this.onMove);
      }

      if ('hover' in this.controller.handlers) {
        this.controller.addBindings('onPointerEnter', this.onPointerEnter);
        this.controller.addBindings('onPointerLeave', this.onPointerLeave);
      }
    } else {
      if ('move' in this.controller.handlers) {
        this.controller.addBindings('onMouseMove', this.onMove);
      }

      if ('hover' in this.controller.handlers) {
        this.controller.addBindings('onMouseEnter', this.onPointerEnter);
        this.controller.addBindings('onMouseLeave', this.onPointerLeave);
      }
    }
  };

  return MoveRecognizer;
}(CoordinatesRecognizer);

/**
 * @public
 *
 * Move hook.
 *
 * @param {Handler<'move'>} handler - the function fired every time the move gesture updates
 * @param {(Config | {})} [config={}] - the config object including generic options and move options
 * @returns {(...args: any[]) => HookReturnType<Config>}
 */

function useMove(handler, config) {
  if (config === void 0) {
    config = {};
  }

  var _config = config,
      domTarget = _config.domTarget,
      eventOptions = _config.eventOptions,
      window = _config.window,
      move = _objectWithoutPropertiesLoose(_config, ["domTarget", "eventOptions", "window"]);
  /**
   * TODO: at the moment we recompute the config object at every render
   * this could probably be optimized
   */


  var mergedConfig = _extends({}, getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window
  }), {
    move: getInternalCoordinatesOptions(move)
  });

  return useRecognizers({
    move: handler
  }, [MoveRecognizer], mergedConfig);
}

/**
 * @public
 *
 * Hover hook.
 *
 * @param {Handler<'hover'>} handler - the function fired every time the hover gesture updates
 * @param {(Config | {})} [config={}] - the config object including generic options and hover options
 * @returns {(...args: any[]) => HookReturnType<Config>}
 */

function useHover(handler, config) {
  if (config === void 0) {
    config = {};
  }

  var _config = config,
      domTarget = _config.domTarget,
      eventOptions = _config.eventOptions,
      window = _config.window,
      hover = _objectWithoutPropertiesLoose(_config, ["domTarget", "eventOptions", "window"]);
  /**
   * TODO: at the moment we recompute the config object at every render
   * this could probably be optimized
   */


  var mergedConfig = _extends({}, getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window
  }), {
    hover: _extends({
      enabled: true
    }, hover)
  });

  return useRecognizers({
    hover: handler
  }, [MoveRecognizer], mergedConfig);
}

var ScrollRecognizer =
/*#__PURE__*/
function (_CoordinatesRecognize) {
  _inheritsLoose(ScrollRecognizer, _CoordinatesRecognize);

  function ScrollRecognizer(controller, args) {
    var _this;

    _this = _CoordinatesRecognize.call(this, 'scroll', controller, args) || this;
    _this.ingKey = 'scrolling';

    _this.scrollShouldRun = function () {
      return _this.enabled;
    };

    _this.onScroll = function (event) {
      if (!_this.scrollShouldRun()) return;

      _this.clearTimeout();

      _this.setTimeout(_this.onScrollEnd);

      if (!_this.state._active) _this.onScrollStart(event);else _this.onScrollChange(event);
    };

    _this.onScrollStart = function (event) {
      var _getScrollEventValues = getScrollEventValues(event),
          values = _getScrollEventValues.values;

      _this.updateSharedState(getGenericEventData(event));

      var startState = _extends({}, _this.getStartGestureState(values, event), {}, _this.getGenericPayload(event, true), {
        initial: _this.state.values
      });

      var movementDetection = _this.getMovement(values, startState);

      var delta = movementDetection.delta;

      _this.updateGestureState(_extends({}, startState, {}, movementDetection, {
        distance: calculateDistance(delta),
        direction: calculateDirection(delta)
      }));

      _this.fireGestureHandler();
    };

    _this.onScrollChange = function (event) {
      var genericEventData = getGenericEventData(event);

      _this.updateSharedState(genericEventData);

      var _getScrollEventValues2 = getScrollEventValues(event),
          values = _getScrollEventValues2.values;

      var kinematics = _this.getKinematics(values, event);

      _this.updateGestureState(_extends({}, _this.getGenericPayload(event), {}, kinematics));

      _this.fireGestureHandler();
    };

    _this.onScrollEnd = function () {
      _this.state._active = false;

      _this.updateGestureState(_extends({}, _this.getMovement(_this.state.values), {
        velocities: [0, 0],
        velocity: 0
      }));

      _this.fireGestureHandler();
    };

    return _this;
  }

  var _proto = ScrollRecognizer.prototype;

  _proto.addBindings = function addBindings() {
    this.controller.addBindings('onScroll', this.onScroll);
  };

  return ScrollRecognizer;
}(CoordinatesRecognizer);

/**
 * @public
 *
 * Scroll hook.
 *
 * @param {Handler<'scroll'>} handler - the function fired every time the scroll gesture updates
 * @param {(Config | {})} [config={}] - the config object including generic options and scroll options
 * @returns {(...args: any[]) => HookReturnType<Config>}
 */

function useScroll(handler, config) {
  if (config === void 0) {
    config = {};
  }

  var _config = config,
      domTarget = _config.domTarget,
      eventOptions = _config.eventOptions,
      window = _config.window,
      scroll = _objectWithoutPropertiesLoose(_config, ["domTarget", "eventOptions", "window"]);
  /**
   * TODO: at the moment we recompute the config object at every render
   * this could probably be optimized
   */


  var mergedConfig = _extends({}, getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window
  }), {
    scroll: getInternalCoordinatesOptions(scroll)
  });

  return useRecognizers({
    scroll: handler
  }, [ScrollRecognizer], mergedConfig);
}

/**
 * @public
 *
 * The most complete gesture hook, allowing support for multiple gestures.
 *
 * @param {UserHandlersPartial} handlers - an object with on[Gesture] keys containg gesture handlers
 * @param {UseGestureConfig} [config={}] - the full config object
 * @returns {(...args: any[]) => HookReturnType<Config>}
 */

function useGesture(handlers, config) {
  if (config === void 0) {
    config = {};
  }

  /**
   * If handlers contains {onDragStart, onDrag, onDragEnd, onMoveStart, onMove}
   * actions will include 'onDrag' and 'onMove.
   */
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(function () {
    return new Set(Object.keys(handlers).map(function (k) {
      return k.replace(/End|Start/, '');
    }));
  }),
      actions = _React$useState[0];
  /**
   * Here we compute the derived internal config based on the provided config object.
   * We decompose the config into its generic and gesture options and compute each.
   * TODO: this is currently done on every render!
   */


  var _config = config,
      drag = _config.drag,
      wheel = _config.wheel,
      move = _config.move,
      scroll = _config.scroll,
      pinch = _config.pinch,
      hover = _config.hover,
      restConfig = _objectWithoutPropertiesLoose(_config, ["drag", "wheel", "move", "scroll", "pinch", "hover"]);

  var mergedConfig = getInternalGenericOptions(restConfig);
  var classes = [];
  var internalHandlers = {}; // will hold reference to native handlers such as onClick, onMouseDown, etc.

  var _nativeHandlers = _extends({}, handlers);

  if (actions.has('onDrag')) {
    classes.push(DragRecognizer);
    internalHandlers.drag = includeStartEndHandlers(handlers, 'onDrag', _nativeHandlers);
    mergedConfig.drag = getInternalDragOptions(drag);
  }

  if (actions.has('onWheel')) {
    classes.push(WheelRecognizer);
    internalHandlers.wheel = includeStartEndHandlers(handlers, 'onWheel', _nativeHandlers);
    mergedConfig.wheel = getInternalCoordinatesOptions(wheel);
  }

  if (actions.has('onScroll')) {
    classes.push(ScrollRecognizer);
    internalHandlers.scroll = includeStartEndHandlers(handlers, 'onScroll', _nativeHandlers);
    mergedConfig.scroll = getInternalCoordinatesOptions(scroll);
  }

  if (actions.has('onMove')) {
    classes.push(MoveRecognizer);
    internalHandlers.move = includeStartEndHandlers(handlers, 'onMove', _nativeHandlers);
    mergedConfig.move = getInternalCoordinatesOptions(move);
  }

  if (actions.has('onPinch')) {
    classes.push(PinchRecognizer);
    internalHandlers.pinch = includeStartEndHandlers(handlers, 'onPinch', _nativeHandlers);
    mergedConfig.pinch = getInternalDistanceAngleOptions(pinch);
  }

  if (actions.has('onHover')) {
    if (!actions.has('onMove')) classes.push(MoveRecognizer);
    internalHandlers.hover = handlers.onHover;
    mergedConfig.hover = _extends({
      enabled: true
    }, hover);
    delete _nativeHandlers.onHover;
  }

  return useRecognizers(internalHandlers, classes, mergedConfig, _nativeHandlers);
}
/**
 * @private
 *
 * This utility function will integrate start and end handlers into the regular
 * handler function by using first and last conditions.
 *
 * @param {UserHandlersPartial} handlers - the handlers function object
 * @param {HandlerKey} handlerKey - the key for which to integrate start and end handlers
 * @returns
 */

function includeStartEndHandlers(handlers, handlerKey, _nativeHandlers) {
  var startKey = handlerKey + 'Start';
  var endKey = handlerKey + 'End';
  delete _nativeHandlers[handlerKey];
  delete _nativeHandlers[startKey];
  delete _nativeHandlers[endKey];

  var fn = function fn(state) {
    var memo = undefined;
    if (state.first && startKey in handlers) handlers[startKey](state);
    if (handlerKey in handlers) memo = handlers[handlerKey](state);
    if (state.last && endKey in handlers) handlers[endKey](state);
    return memo;
  };

  return fn;
}


//# sourceMappingURL=react-use-gesture.esm.js.map


/***/ }),

/***/ "./node_modules/smooth-scrollbar/decorators/boolean.js":
/*!*************************************************************!*\
  !*** ./node_modules/smooth-scrollbar/decorators/boolean.js ***!
  \*************************************************************/
/*! exports provided: boolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boolean", function() { return boolean; });
function boolean(proto, key) {
    var alias = "_" + key;
    Object.defineProperty(proto, key, {
        get: function () {
            return this[alias];
        },
        set: function (val) {
            Object.defineProperty(this, alias, {
                value: !!val,
                enumerable: false,
                writable: true,
                configurable: true,
            });
        },
        enumerable: true,
        configurable: true,
    });
}
//# sourceMappingURL=boolean.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/decorators/debounce.js":
/*!**************************************************************!*\
  !*** ./node_modules/smooth-scrollbar/decorators/debounce.js ***!
  \**************************************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/debounce */ "./node_modules/lodash-es/debounce.js");


function debounce() {
    var options = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        options[_i] = arguments[_i];
    }
    return function (_proto, key, descriptor) {
        var fn = descriptor.value;
        return {
            get: function () {
                if (!this.hasOwnProperty(key)) {
                    Object.defineProperty(this, key, {
                        value: lodash_es_debounce__WEBPACK_IMPORTED_MODULE_1__["default"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([fn], options)),
                    });
                }
                return this[key];
            },
        };
    };
}
//# sourceMappingURL=debounce.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/decorators/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/smooth-scrollbar/decorators/index.js ***!
  \***********************************************************/
/*! exports provided: range, boolean, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./range */ "./node_modules/smooth-scrollbar/decorators/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range__WEBPACK_IMPORTED_MODULE_0__["range"]; });

/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boolean */ "./node_modules/smooth-scrollbar/decorators/boolean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boolean", function() { return _boolean__WEBPACK_IMPORTED_MODULE_1__["boolean"]; });

/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debounce */ "./node_modules/smooth-scrollbar/decorators/debounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/decorators/range.js":
/*!***********************************************************!*\
  !*** ./node_modules/smooth-scrollbar/decorators/range.js ***!
  \***********************************************************/
/*! exports provided: range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/clamp */ "./node_modules/lodash-es/clamp.js");

function range(min, max) {
    if (min === void 0) { min = -Infinity; }
    if (max === void 0) { max = Infinity; }
    return function (proto, key) {
        var alias = "_" + key;
        Object.defineProperty(proto, key, {
            get: function () {
                return this[alias];
            },
            set: function (val) {
                Object.defineProperty(this, alias, {
                    value: Object(lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__["default"])(val, min, max),
                    enumerable: false,
                    writable: true,
                    configurable: true,
                });
            },
            enumerable: true,
            configurable: true,
        });
    };
}
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/events/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/smooth-scrollbar/events/index.js ***!
  \*******************************************************/
/*! exports provided: keyboardHandler, mouseHandler, resizeHandler, selectHandler, touchHandler, wheelHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard */ "./node_modules/smooth-scrollbar/events/keyboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyboardHandler", function() { return _keyboard__WEBPACK_IMPORTED_MODULE_0__["keyboardHandler"]; });

/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mouse */ "./node_modules/smooth-scrollbar/events/mouse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mouseHandler", function() { return _mouse__WEBPACK_IMPORTED_MODULE_1__["mouseHandler"]; });

/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resize */ "./node_modules/smooth-scrollbar/events/resize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resizeHandler", function() { return _resize__WEBPACK_IMPORTED_MODULE_2__["resizeHandler"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select */ "./node_modules/smooth-scrollbar/events/select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHandler", function() { return _select__WEBPACK_IMPORTED_MODULE_3__["selectHandler"]; });

/* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./touch */ "./node_modules/smooth-scrollbar/events/touch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touchHandler", function() { return _touch__WEBPACK_IMPORTED_MODULE_4__["touchHandler"]; });

/* harmony import */ var _wheel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wheel */ "./node_modules/smooth-scrollbar/events/wheel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wheelHandler", function() { return _wheel__WEBPACK_IMPORTED_MODULE_5__["wheelHandler"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/events/keyboard.js":
/*!**********************************************************!*\
  !*** ./node_modules/smooth-scrollbar/events/keyboard.js ***!
  \**********************************************************/
/*! exports provided: keyboardHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboardHandler", function() { return keyboardHandler; });
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ */ "./node_modules/smooth-scrollbar/utils/index.js");

var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["TAB"] = 9] = "TAB";
    KEY_CODE[KEY_CODE["SPACE"] = 32] = "SPACE";
    KEY_CODE[KEY_CODE["PAGE_UP"] = 33] = "PAGE_UP";
    KEY_CODE[KEY_CODE["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    KEY_CODE[KEY_CODE["END"] = 35] = "END";
    KEY_CODE[KEY_CODE["HOME"] = 36] = "HOME";
    KEY_CODE[KEY_CODE["LEFT"] = 37] = "LEFT";
    KEY_CODE[KEY_CODE["UP"] = 38] = "UP";
    KEY_CODE[KEY_CODE["RIGHT"] = 39] = "RIGHT";
    KEY_CODE[KEY_CODE["DOWN"] = 40] = "DOWN";
})(KEY_CODE || (KEY_CODE = {}));
function keyboardHandler(scrollbar) {
    var addEvent = Object(_utils___WEBPACK_IMPORTED_MODULE_0__["eventScope"])(scrollbar);
    var container = scrollbar.containerEl;
    addEvent(container, 'keydown', function (evt) {
        var activeElement = document.activeElement;
        if (activeElement !== container && !container.contains(activeElement)) {
            return;
        }
        if (isEditable(activeElement)) {
            return;
        }
        var delta = getKeyDelta(scrollbar, evt.keyCode || evt.which);
        if (!delta) {
            return;
        }
        var x = delta[0], y = delta[1];
        scrollbar.addTransformableMomentum(x, y, evt, function (willScroll) {
            if (willScroll) {
                evt.preventDefault();
            }
            else {
                scrollbar.containerEl.blur();
                if (scrollbar.parent) {
                    scrollbar.parent.containerEl.focus();
                }
            }
        });
    });
}
function getKeyDelta(scrollbar, keyCode) {
    var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
    switch (keyCode) {
        case KEY_CODE.TAB:
            return handleTabKey(scrollbar);
        case KEY_CODE.SPACE:
            return [0, 200];
        case KEY_CODE.PAGE_UP:
            return [0, -size.container.height + 40];
        case KEY_CODE.PAGE_DOWN:
            return [0, size.container.height - 40];
        case KEY_CODE.END:
            return [0, limit.y - offset.y];
        case KEY_CODE.HOME:
            return [0, -offset.y];
        case KEY_CODE.LEFT:
            return [-40, 0];
        case KEY_CODE.UP:
            return [0, -40];
        case KEY_CODE.RIGHT:
            return [40, 0];
        case KEY_CODE.DOWN:
            return [0, 40];
        default:
            return null;
    }
}
function handleTabKey(scrollbar) {
    // handle in next frame
    requestAnimationFrame(function () {
        scrollbar.scrollIntoView(document.activeElement, {
            offsetTop: scrollbar.size.container.height / 2,
            onlyScrollIfNeeded: true,
        });
    });
}
function isEditable(elem) {
    if (elem.tagName === 'INPUT' ||
        elem.tagName === 'SELECT' ||
        elem.tagName === 'TEXTAREA' ||
        elem.isContentEditable) {
        return !elem.disabled;
    }
    return false;
}
//# sourceMappingURL=keyboard.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/events/mouse.js":
/*!*******************************************************!*\
  !*** ./node_modules/smooth-scrollbar/events/mouse.js ***!
  \*******************************************************/
/*! exports provided: mouseHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseHandler", function() { return mouseHandler; });
/* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/clamp */ "./node_modules/lodash-es/clamp.js");
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ */ "./node_modules/smooth-scrollbar/utils/index.js");


var Direction;
(function (Direction) {
    Direction[Direction["X"] = 0] = "X";
    Direction[Direction["Y"] = 1] = "Y";
})(Direction || (Direction = {}));
function mouseHandler(scrollbar) {
    var addEvent = Object(_utils___WEBPACK_IMPORTED_MODULE_1__["eventScope"])(scrollbar);
    var container = scrollbar.containerEl;
    var _a = scrollbar.track, xAxis = _a.xAxis, yAxis = _a.yAxis;
    function calcOffset(direction, clickPosition) {
        var size = scrollbar.size;
        if (direction === Direction.X) {
            var totalWidth = size.container.width + (xAxis.thumb.realSize - xAxis.thumb.displaySize);
            return clickPosition / totalWidth * size.content.width;
        }
        if (direction === Direction.Y) {
            var totalHeight = size.container.height + (yAxis.thumb.realSize - yAxis.thumb.displaySize);
            return clickPosition / totalHeight * size.content.height;
        }
        return 0;
    }
    function getTrackDirection(elem) {
        if (Object(_utils___WEBPACK_IMPORTED_MODULE_1__["isOneOf"])(elem, [xAxis.element, xAxis.thumb.element])) {
            return Direction.X;
        }
        if (Object(_utils___WEBPACK_IMPORTED_MODULE_1__["isOneOf"])(elem, [yAxis.element, yAxis.thumb.element])) {
            return Direction.Y;
        }
        return void 0;
    }
    var isMouseDown;
    var isMouseMoving;
    var startOffsetToThumb;
    var startTrackDirection;
    var containerRect;
    addEvent(container, 'click', function (evt) {
        if (isMouseMoving || !Object(_utils___WEBPACK_IMPORTED_MODULE_1__["isOneOf"])(evt.target, [xAxis.element, yAxis.element])) {
            return;
        }
        var track = evt.target;
        var direction = getTrackDirection(track);
        var rect = track.getBoundingClientRect();
        var clickPos = Object(_utils___WEBPACK_IMPORTED_MODULE_1__["getPosition"])(evt);
        var offset = scrollbar.offset, limit = scrollbar.limit;
        if (direction === Direction.X) {
            var offsetOnTrack = clickPos.x - rect.left - xAxis.thumb.displaySize / 2;
            scrollbar.setMomentum(Object(lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__["default"])(calcOffset(direction, offsetOnTrack) - offset.x, -offset.x, limit.x - offset.x), 0);
        }
        if (direction === Direction.Y) {
            var offsetOnTrack = clickPos.y - rect.top - yAxis.thumb.displaySize / 2;
            scrollbar.setMomentum(0, Object(lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__["default"])(calcOffset(direction, offsetOnTrack) - offset.y, -offset.y, limit.y - offset.y));
        }
    });
    addEvent(container, 'mousedown', function (evt) {
        if (!Object(_utils___WEBPACK_IMPORTED_MODULE_1__["isOneOf"])(evt.target, [xAxis.thumb.element, yAxis.thumb.element])) {
            return;
        }
        isMouseDown = true;
        var thumb = evt.target;
        var cursorPos = Object(_utils___WEBPACK_IMPORTED_MODULE_1__["getPosition"])(evt);
        var thumbRect = thumb.getBoundingClientRect();
        startTrackDirection = getTrackDirection(thumb);
        // pointer offset to thumb
        startOffsetToThumb = {
            x: cursorPos.x - thumbRect.left,
            y: cursorPos.y - thumbRect.top,
        };
        // container bounding rectangle
        containerRect = container.getBoundingClientRect();
        // prevent selection, see:
        // https://github.com/idiotWu/smooth-scrollbar/issues/48
        Object(_utils___WEBPACK_IMPORTED_MODULE_1__["setStyle"])(scrollbar.containerEl, {
            '-user-select': 'none',
        });
    });
    addEvent(window, 'mousemove', function (evt) {
        if (!isMouseDown)
            return;
        isMouseMoving = true;
        var offset = scrollbar.offset;
        var cursorPos = Object(_utils___WEBPACK_IMPORTED_MODULE_1__["getPosition"])(evt);
        if (startTrackDirection === Direction.X) {
            // get percentage of pointer position in track
            // then tranform to px
            // don't need easing
            var offsetOnTrack = cursorPos.x - startOffsetToThumb.x - containerRect.left;
            scrollbar.setPosition(calcOffset(startTrackDirection, offsetOnTrack), offset.y);
        }
        if (startTrackDirection === Direction.Y) {
            var offsetOnTrack = cursorPos.y - startOffsetToThumb.y - containerRect.top;
            scrollbar.setPosition(offset.x, calcOffset(startTrackDirection, offsetOnTrack));
        }
    });
    addEvent(window, 'mouseup blur', function () {
        isMouseDown = isMouseMoving = false;
        Object(_utils___WEBPACK_IMPORTED_MODULE_1__["setStyle"])(scrollbar.containerEl, {
            '-user-select': '',
        });
    });
}
//# sourceMappingURL=mouse.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/events/resize.js":
/*!********************************************************!*\
  !*** ./node_modules/smooth-scrollbar/events/resize.js ***!
  \********************************************************/
/*! exports provided: resizeHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeHandler", function() { return resizeHandler; });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/debounce */ "./node_modules/lodash-es/debounce.js");
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ */ "./node_modules/smooth-scrollbar/utils/index.js");


function resizeHandler(scrollbar) {
    var addEvent = Object(_utils___WEBPACK_IMPORTED_MODULE_1__["eventScope"])(scrollbar);
    addEvent(window, 'resize', Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(scrollbar.update.bind(scrollbar), 300));
}
//# sourceMappingURL=resize.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/events/select.js":
/*!********************************************************!*\
  !*** ./node_modules/smooth-scrollbar/events/select.js ***!
  \********************************************************/
/*! exports provided: selectHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHandler", function() { return selectHandler; });
/* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/clamp */ "./node_modules/lodash-es/clamp.js");
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ */ "./node_modules/smooth-scrollbar/utils/index.js");


function selectHandler(scrollbar) {
    var addEvent = Object(_utils___WEBPACK_IMPORTED_MODULE_1__["eventScope"])(scrollbar);
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl, offset = scrollbar.offset, limit = scrollbar.limit;
    var isSelected = false;
    var animationID;
    function scroll(_a) {
        var x = _a.x, y = _a.y;
        if (!x && !y)
            return;
        // DISALLOW delta transformation
        scrollbar.setMomentum(Object(lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__["default"])(offset.x + x, 0, limit.x) - offset.x, Object(lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__["default"])(offset.y + y, 0, limit.y) - offset.y);
        animationID = requestAnimationFrame(function () {
            scroll({ x: x, y: y });
        });
    }
    addEvent(window, 'mousemove', function (evt) {
        if (!isSelected)
            return;
        cancelAnimationFrame(animationID);
        var dir = calcMomentum(scrollbar, evt);
        scroll(dir);
    });
    addEvent(contentEl, 'selectstart', function (evt) {
        evt.stopPropagation();
        cancelAnimationFrame(animationID);
        isSelected = true;
    });
    addEvent(window, 'mouseup blur', function () {
        cancelAnimationFrame(animationID);
        isSelected = false;
    });
    // patch for touch devices
    addEvent(containerEl, 'scroll', function (evt) {
        evt.preventDefault();
        containerEl.scrollTop = containerEl.scrollLeft = 0;
    });
}
function calcMomentum(scrollbar, evt) {
    var _a = scrollbar.bounding, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
    var _b = Object(_utils___WEBPACK_IMPORTED_MODULE_1__["getPosition"])(evt), x = _b.x, y = _b.y;
    var res = {
        x: 0,
        y: 0,
    };
    var padding = 20;
    if (x === 0 && y === 0)
        return res;
    if (x > right - padding) {
        res.x = (x - right + padding);
    }
    else if (x < left + padding) {
        res.x = (x - left - padding);
    }
    if (y > bottom - padding) {
        res.y = (y - bottom + padding);
    }
    else if (y < top + padding) {
        res.y = (y - top - padding);
    }
    res.x *= 2;
    res.y *= 2;
    return res;
}
//# sourceMappingURL=select.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/events/touch.js":
/*!*******************************************************!*\
  !*** ./node_modules/smooth-scrollbar/events/touch.js ***!
  \*******************************************************/
/*! exports provided: touchHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchHandler", function() { return touchHandler; });
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ */ "./node_modules/smooth-scrollbar/utils/index.js");

var activeScrollbar;
function touchHandler(scrollbar) {
    var MIN_EAING_MOMENTUM = 50;
    var EASING_MULTIPLIER = /Android/.test(navigator.userAgent) ? 3 : 2;
    var target = scrollbar.options.delegateTo || scrollbar.containerEl;
    var touchRecord = new _utils___WEBPACK_IMPORTED_MODULE_0__["TouchRecord"]();
    var addEvent = Object(_utils___WEBPACK_IMPORTED_MODULE_0__["eventScope"])(scrollbar);
    var damping;
    var pointerCount = 0;
    addEvent(target, 'touchstart', function (evt) {
        // start records
        touchRecord.track(evt);
        // stop scrolling
        scrollbar.setMomentum(0, 0);
        // save damping
        if (pointerCount === 0) {
            damping = scrollbar.options.damping;
            scrollbar.options.damping = Math.max(damping, 0.5); // less frames on touchmove
        }
        pointerCount++;
    });
    addEvent(target, 'touchmove', function (evt) {
        if (activeScrollbar && activeScrollbar !== scrollbar)
            return;
        touchRecord.update(evt);
        var _a = touchRecord.getDelta(), x = _a.x, y = _a.y;
        scrollbar.addTransformableMomentum(x, y, evt, function (willScroll) {
            if (willScroll) {
                evt.preventDefault();
                activeScrollbar = scrollbar;
            }
        });
    });
    addEvent(target, 'touchcancel touchend', function (evt) {
        var velocity = touchRecord.getVelocity();
        var momentum = { x: 0, y: 0 };
        Object.keys(velocity).forEach(function (dir) {
            var s = velocity[dir] / damping;
            // throw small values
            momentum[dir] = Math.abs(s) < MIN_EAING_MOMENTUM ? 0 : s * EASING_MULTIPLIER;
        });
        scrollbar.addTransformableMomentum(momentum.x, momentum.y, evt);
        pointerCount--;
        // restore damping
        if (pointerCount === 0) {
            scrollbar.options.damping = damping;
        }
        touchRecord.release(evt);
        activeScrollbar = null;
    });
}
//# sourceMappingURL=touch.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/events/wheel.js":
/*!*******************************************************!*\
  !*** ./node_modules/smooth-scrollbar/events/wheel.js ***!
  \*******************************************************/
/*! exports provided: wheelHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wheelHandler", function() { return wheelHandler; });
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ */ "./node_modules/smooth-scrollbar/utils/index.js");

function wheelHandler(scrollbar) {
    var addEvent = Object(_utils___WEBPACK_IMPORTED_MODULE_0__["eventScope"])(scrollbar);
    var target = scrollbar.options.delegateTo || scrollbar.containerEl;
    var eventName = ('onwheel' in window || document.implementation.hasFeature('Events.wheel', '3.0')) ? 'wheel' : 'mousewheel';
    addEvent(target, eventName, function (evt) {
        var _a = normalizeDelta(evt), x = _a.x, y = _a.y;
        scrollbar.addTransformableMomentum(x, y, evt, function (willScroll) {
            if (willScroll) {
                evt.preventDefault();
            }
        });
    });
}
// Normalizing wheel delta
var DELTA_SCALE = {
    STANDARD: 1,
    OTHERS: -3,
};
var DELTA_MODE = [1.0, 28.0, 500.0];
var getDeltaMode = function (mode) { return DELTA_MODE[mode] || DELTA_MODE[0]; };
function normalizeDelta(evt) {
    if ('deltaX' in evt) {
        var mode = getDeltaMode(evt.deltaMode);
        return {
            x: evt.deltaX / DELTA_SCALE.STANDARD * mode,
            y: evt.deltaY / DELTA_SCALE.STANDARD * mode,
        };
    }
    if ('wheelDeltaX' in evt) {
        return {
            x: evt.wheelDeltaX / DELTA_SCALE.OTHERS,
            y: evt.wheelDeltaY / DELTA_SCALE.OTHERS,
        };
    }
    // ie with touchpad
    return {
        x: 0,
        y: evt.wheelDelta / DELTA_SCALE.OTHERS,
    };
}
//# sourceMappingURL=wheel.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/geometry/get-size.js":
/*!************************************************************!*\
  !*** ./node_modules/smooth-scrollbar/geometry/get-size.js ***!
  \************************************************************/
/*! exports provided: getSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSize", function() { return getSize; });
function getSize(scrollbar) {
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
    return {
        container: {
            // requires `overflow: hidden`
            width: containerEl.clientWidth,
            height: containerEl.clientHeight,
        },
        content: {
            // border width should be included
            width: contentEl.offsetWidth - contentEl.clientWidth + contentEl.scrollWidth,
            height: contentEl.offsetHeight - contentEl.clientHeight + contentEl.scrollHeight,
        },
    };
}
//# sourceMappingURL=get-size.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/geometry/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/smooth-scrollbar/geometry/index.js ***!
  \*********************************************************/
/*! exports provided: getSize, isVisible, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-size */ "./node_modules/smooth-scrollbar/geometry/get-size.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSize", function() { return _get_size__WEBPACK_IMPORTED_MODULE_0__["getSize"]; });

/* harmony import */ var _is_visible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-visible */ "./node_modules/smooth-scrollbar/geometry/is-visible.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return _is_visible__WEBPACK_IMPORTED_MODULE_1__["isVisible"]; });

/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update */ "./node_modules/smooth-scrollbar/geometry/update.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _update__WEBPACK_IMPORTED_MODULE_2__["update"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/geometry/is-visible.js":
/*!**************************************************************!*\
  !*** ./node_modules/smooth-scrollbar/geometry/is-visible.js ***!
  \**************************************************************/
/*! exports provided: isVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
function isVisible(scrollbar, elem) {
    var bounding = scrollbar.bounding;
    var targetBounding = elem.getBoundingClientRect();
    // check overlapping
    var top = Math.max(bounding.top, targetBounding.top);
    var left = Math.max(bounding.left, targetBounding.left);
    var right = Math.min(bounding.right, targetBounding.right);
    var bottom = Math.min(bounding.bottom, targetBounding.bottom);
    return top < bottom && left < right;
}
//# sourceMappingURL=is-visible.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/geometry/update.js":
/*!**********************************************************!*\
  !*** ./node_modules/smooth-scrollbar/geometry/update.js ***!
  \**********************************************************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
function update(scrollbar) {
    var newSize = scrollbar.getSize();
    var limit = {
        x: Math.max(newSize.content.width - newSize.container.width, 0),
        y: Math.max(newSize.content.height - newSize.container.height, 0),
    };
    // metrics
    var containerBounding = scrollbar.containerEl.getBoundingClientRect();
    var bounding = {
        top: Math.max(containerBounding.top, 0),
        right: Math.min(containerBounding.right, window.innerWidth),
        bottom: Math.min(containerBounding.bottom, window.innerHeight),
        left: Math.max(containerBounding.left, 0),
    };
    // assign props
    scrollbar.size = newSize;
    scrollbar.limit = limit;
    scrollbar.bounding = bounding;
    // update tracks
    scrollbar.track.update();
    // re-positioning
    scrollbar.setPosition();
}
//# sourceMappingURL=update.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/index.js":
/*!************************************************!*\
  !*** ./node_modules/smooth-scrollbar/index.js ***!
  \************************************************/
/*! exports provided: ScrollbarPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills */ "./node_modules/smooth-scrollbar/polyfills.js");
/* harmony import */ var _scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollbar */ "./node_modules/smooth-scrollbar/scrollbar.js");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugin */ "./node_modules/smooth-scrollbar/plugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollbarPlugin", function() { return _plugin__WEBPACK_IMPORTED_MODULE_3__["ScrollbarPlugin"]; });

/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./node_modules/smooth-scrollbar/style.js");






/*!
 * cast `I.Scrollbar` to `Scrollbar` to avoid error
 *
 * `I.Scrollbar` is not assignable to `Scrollbar`:
 *     "privateProp" is missing in `I.Scrollbar`
 *
 * @see https://github.com/Microsoft/TypeScript/issues/2672
 */
var SmoothScrollbar = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SmoothScrollbar, _super);
    function SmoothScrollbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initializes a scrollbar on the given element.
     *
     * @param elem The DOM element that you want to initialize scrollbar to
     * @param [options] Initial options
     */
    SmoothScrollbar.init = function (elem, options) {
        if (!elem || elem.nodeType !== 1) {
            throw new TypeError("expect element to be DOM Element, but got " + elem);
        }
        // attach stylesheet
        Object(_style__WEBPACK_IMPORTED_MODULE_4__["attachStyle"])();
        if (_scrollbar__WEBPACK_IMPORTED_MODULE_2__["scrollbarMap"].has(elem)) {
            return _scrollbar__WEBPACK_IMPORTED_MODULE_2__["scrollbarMap"].get(elem);
        }
        return new _scrollbar__WEBPACK_IMPORTED_MODULE_2__["Scrollbar"](elem, options);
    };
    /**
     * Automatically init scrollbar on all elements base on the selector `[data-scrollbar]`
     *
     * @param options Initial options
     */
    SmoothScrollbar.initAll = function (options) {
        return Array.from(document.querySelectorAll('[data-scrollbar]'), function (elem) {
            return SmoothScrollbar.init(elem, options);
        });
    };
    /**
     * Check if there is a scrollbar on given element
     *
     * @param elem The DOM element that you want to check
     */
    SmoothScrollbar.has = function (elem) {
        return _scrollbar__WEBPACK_IMPORTED_MODULE_2__["scrollbarMap"].has(elem);
    };
    /**
     * Gets scrollbar on the given element.
     * If no scrollbar instance exsits, returns `undefined`
     *
     * @param elem The DOM element that you want to check.
     */
    SmoothScrollbar.get = function (elem) {
        return _scrollbar__WEBPACK_IMPORTED_MODULE_2__["scrollbarMap"].get(elem);
    };
    /**
     * Returns an array that contains all scrollbar instances
     */
    SmoothScrollbar.getAll = function () {
        return Array.from(_scrollbar__WEBPACK_IMPORTED_MODULE_2__["scrollbarMap"].values());
    };
    /**
     * Removes scrollbar on the given element
     */
    SmoothScrollbar.destroy = function (elem) {
        var scrollbar = _scrollbar__WEBPACK_IMPORTED_MODULE_2__["scrollbarMap"].get(elem);
        if (scrollbar) {
            scrollbar.destroy();
        }
    };
    /**
     * Removes all scrollbar instances from current document
     */
    SmoothScrollbar.destroyAll = function () {
        _scrollbar__WEBPACK_IMPORTED_MODULE_2__["scrollbarMap"].forEach(function (scrollbar) {
            scrollbar.destroy();
        });
    };
    /**
     * Attaches plugins to scrollbars
     *
     * @param ...Plugins Scrollbar plugin classes
     */
    SmoothScrollbar.use = function () {
        var Plugins = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            Plugins[_i] = arguments[_i];
        }
        return _plugin__WEBPACK_IMPORTED_MODULE_3__["addPlugins"].apply(void 0, Plugins);
    };
    /**
     * Attaches default style sheets to current document.
     * You don't need to call this method manually unless
     * you removed the default styles via `Scrollbar.detachStyle()`
     */
    SmoothScrollbar.attachStyle = function () {
        return Object(_style__WEBPACK_IMPORTED_MODULE_4__["attachStyle"])();
    };
    /**
     * Removes default styles from current document.
     * Use this method when you want to use your own css for scrollbars.
     */
    SmoothScrollbar.detachStyle = function () {
        return Object(_style__WEBPACK_IMPORTED_MODULE_4__["detachStyle"])();
    };
    SmoothScrollbar.version = "8.5.1";
    SmoothScrollbar.ScrollbarPlugin = _plugin__WEBPACK_IMPORTED_MODULE_3__["ScrollbarPlugin"];
    return SmoothScrollbar;
}(_scrollbar__WEBPACK_IMPORTED_MODULE_2__["Scrollbar"]));
/* harmony default export */ __webpack_exports__["default"] = (SmoothScrollbar);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/options.js":
/*!**************************************************!*\
  !*** ./node_modules/smooth-scrollbar/options.js ***!
  \**************************************************/
/*! exports provided: Options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _decorators___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators/ */ "./node_modules/smooth-scrollbar/decorators/index.js");


var Options = /** @class */ (function () {
    function Options(config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        /**
         * Momentum reduction damping factor, a float value between `(0, 1)`.
         * The lower the value is, the more smooth the scrolling will be
         * (also the more paint frames).
         */
        this.damping = 0.1;
        /**
         * Minimal size for scrollbar thumbs.
         */
        this.thumbMinSize = 20;
        /**
         * Render every frame in integer pixel values
         * set to `true` to improve scrolling performance.
         */
        this.renderByPixels = true;
        /**
         * Keep scrollbar tracks visible
         */
        this.alwaysShowTracks = false;
        /**
         * Set to `true` to allow outer scrollbars continue scrolling
         * when current scrollbar reaches edge.
         */
        this.continuousScrolling = true;
        /**
         * Delegate wheel events and touch events to the given element.
         * By default, the container element is used.
         * This option will be useful for dealing with fixed elements.
         */
        this.delegateTo = null;
        /**
         * Options for plugins. Syntax:
         *   plugins[pluginName] = pluginOptions: any
         */
        this.plugins = {};
        Object.keys(config).forEach(function (prop) {
            _this[prop] = config[prop];
        });
    }
    Object.defineProperty(Options.prototype, "wheelEventTarget", {
        get: function () {
            return this.delegateTo;
        },
        set: function (el) {
            console.warn('[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead.');
            this.delegateTo = el;
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_decorators___WEBPACK_IMPORTED_MODULE_1__["range"])(0, 1)
    ], Options.prototype, "damping", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_decorators___WEBPACK_IMPORTED_MODULE_1__["range"])(0, Infinity)
    ], Options.prototype, "thumbMinSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _decorators___WEBPACK_IMPORTED_MODULE_1__["boolean"]
    ], Options.prototype, "renderByPixels", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _decorators___WEBPACK_IMPORTED_MODULE_1__["boolean"]
    ], Options.prototype, "alwaysShowTracks", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _decorators___WEBPACK_IMPORTED_MODULE_1__["boolean"]
    ], Options.prototype, "continuousScrolling", void 0);
    return Options;
}());

//# sourceMappingURL=options.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/plugin.js":
/*!*************************************************!*\
  !*** ./node_modules/smooth-scrollbar/plugin.js ***!
  \*************************************************/
/*! exports provided: ScrollbarPlugin, globalPlugins, addPlugins, initPlugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarPlugin", function() { return ScrollbarPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalPlugins", function() { return globalPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return addPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPlugins", function() { return initPlugins; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ScrollbarPlugin = /** @class */ (function () {
    function ScrollbarPlugin(scrollbar, options) {
        var _newTarget = this.constructor;
        this.scrollbar = scrollbar;
        this.name = _newTarget.pluginName;
        this.options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _newTarget.defaultOptions), options);
    }
    ScrollbarPlugin.prototype.onInit = function () { };
    ScrollbarPlugin.prototype.onDestroy = function () { };
    ScrollbarPlugin.prototype.onUpdate = function () { };
    ScrollbarPlugin.prototype.onRender = function (_remainMomentum) { };
    ScrollbarPlugin.prototype.transformDelta = function (delta, _evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, delta);
    };
    ScrollbarPlugin.pluginName = '';
    ScrollbarPlugin.defaultOptions = {};
    return ScrollbarPlugin;
}());

var globalPlugins = {
    order: new Set(),
    constructors: {},
};
function addPlugins() {
    var Plugins = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Plugins[_i] = arguments[_i];
    }
    Plugins.forEach(function (P) {
        var pluginName = P.pluginName;
        if (!pluginName) {
            throw new TypeError("plugin name is required");
        }
        globalPlugins.order.add(pluginName);
        globalPlugins.constructors[pluginName] = P;
    });
}
function initPlugins(scrollbar, options) {
    return Array.from(globalPlugins.order)
        .filter(function (pluginName) {
        return options[pluginName] !== false;
    })
        .map(function (pluginName) {
        var Plugin = globalPlugins.constructors[pluginName];
        var instance = new Plugin(scrollbar, options[pluginName]);
        // bind plugin options to `scrollbar.options`
        options[pluginName] = instance.options;
        return instance;
    });
}
//# sourceMappingURL=plugin.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/polyfills.js":
/*!****************************************************!*\
  !*** ./node_modules/smooth-scrollbar/polyfills.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_fn_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/fn/map */ "core-js/fn/map");
/* harmony import */ var core_js_fn_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_fn_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/fn/set */ "core-js/fn/set");
/* harmony import */ var core_js_fn_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_fn_weak_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/fn/weak-map */ "core-js/fn/weak-map");
/* harmony import */ var core_js_fn_weak_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_weak_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_fn_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/fn/array/from */ "core-js/fn/array/from");
/* harmony import */ var core_js_fn_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_fn_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/fn/object/assign */ "core-js/fn/object/assign");
/* harmony import */ var core_js_fn_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_object_assign__WEBPACK_IMPORTED_MODULE_4__);





//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/scrollbar.js":
/*!****************************************************!*\
  !*** ./node_modules/smooth-scrollbar/scrollbar.js ***!
  \****************************************************/
/*! exports provided: scrollbarMap, Scrollbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollbarMap", function() { return scrollbarMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scrollbar", function() { return Scrollbar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/clamp */ "./node_modules/lodash-es/clamp.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./node_modules/smooth-scrollbar/options.js");
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ */ "./node_modules/smooth-scrollbar/utils/index.js");
/* harmony import */ var _decorators___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/ */ "./node_modules/smooth-scrollbar/decorators/index.js");
/* harmony import */ var _track___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./track/ */ "./node_modules/smooth-scrollbar/track/index.js");
/* harmony import */ var _geometry___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geometry/ */ "./node_modules/smooth-scrollbar/geometry/index.js");
/* harmony import */ var _scrolling___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scrolling/ */ "./node_modules/smooth-scrollbar/scrolling/index.js");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugin */ "./node_modules/smooth-scrollbar/plugin.js");
/* harmony import */ var _events___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/ */ "./node_modules/smooth-scrollbar/events/index.js");










// DO NOT use WeakMap here
// .getAll() methods requires `scrollbarMap.values()`
var scrollbarMap = new Map();
var Scrollbar = /** @class */ (function () {
    function Scrollbar(containerEl, options) {
        var _this = this;
        /**
         * Current scrolling offsets
         */
        this.offset = {
            x: 0,
            y: 0,
        };
        /**
         * Max-allowed scrolling offsets
         */
        this.limit = {
            x: Infinity,
            y: Infinity,
        };
        /**
         * Container bounding rect
         */
        this.bounding = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        };
        this._plugins = [];
        this._momentum = { x: 0, y: 0 };
        this._listeners = new Set();
        this.containerEl = containerEl;
        var contentEl = this.contentEl = document.createElement('div');
        this.options = new _options__WEBPACK_IMPORTED_MODULE_2__["Options"](options);
        // mark as a scroll element
        containerEl.setAttribute('data-scrollbar', 'true');
        // make container focusable
        containerEl.setAttribute('tabindex', '-1');
        Object(_utils___WEBPACK_IMPORTED_MODULE_3__["setStyle"])(containerEl, {
            overflow: 'hidden',
            outline: 'none',
        });
        // enable touch event capturing in IE, see:
        // https://github.com/idiotWu/smooth-scrollbar/issues/39
        if (window.navigator.msPointerEnabled) {
            containerEl.style.msTouchAction = 'none';
        }
        // mount content
        contentEl.className = 'scroll-content';
        Array.from(containerEl.childNodes).forEach(function (node) {
            contentEl.appendChild(node);
        });
        containerEl.appendChild(contentEl);
        // attach track
        this.track = new _track___WEBPACK_IMPORTED_MODULE_5__["TrackController"](this);
        // initial measuring
        this.size = this.getSize();
        // init plugins
        this._plugins = Object(_plugin__WEBPACK_IMPORTED_MODULE_8__["initPlugins"])(this, this.options.plugins);
        // preserve scroll offset
        var scrollLeft = containerEl.scrollLeft, scrollTop = containerEl.scrollTop;
        containerEl.scrollLeft = containerEl.scrollTop = 0;
        this.setPosition(scrollLeft, scrollTop, {
            withoutCallbacks: true,
        });
        var global = window;
        var MutationObserver = global.MutationObserver || global.WebKitMutationObserver || global.MozMutationObserver;
        // observe
        if (typeof MutationObserver === 'function') {
            this._observer = new MutationObserver(function () {
                _this.update();
            });
            this._observer.observe(contentEl, {
                subtree: true,
                childList: true,
            });
        }
        scrollbarMap.set(containerEl, this);
        // wait for DOM ready
        requestAnimationFrame(function () {
            _this._init();
        });
    }
    Object.defineProperty(Scrollbar.prototype, "parent", {
        /**
         * Parent scrollbar
         */
        get: function () {
            var elem = this.containerEl.parentElement;
            while (elem) {
                var parentScrollbar = scrollbarMap.get(elem);
                if (parentScrollbar) {
                    return parentScrollbar;
                }
                elem = elem.parentElement;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "scrollTop", {
        /**
         * Gets or sets `scrollbar.offset.y`
         */
        get: function () {
            return this.offset.y;
        },
        set: function (y) {
            this.setPosition(this.scrollLeft, y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "scrollLeft", {
        /**
         * Gets or sets `scrollbar.offset.x`
         */
        get: function () {
            return this.offset.x;
        },
        set: function (x) {
            this.setPosition(x, this.scrollTop);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the size of the scrollbar container element
     * and the content wrapper element
     */
    Scrollbar.prototype.getSize = function () {
        return Object(_geometry___WEBPACK_IMPORTED_MODULE_6__["getSize"])(this);
    };
    /**
     * Forces scrollbar to update geometry infomation.
     *
     * By default, scrollbars are automatically updated with `100ms` debounce (or `MutationObserver` fires).
     * You can call this method to force an update when you modified contents
     */
    Scrollbar.prototype.update = function () {
        Object(_geometry___WEBPACK_IMPORTED_MODULE_6__["update"])(this);
        this._plugins.forEach(function (plugin) {
            plugin.onUpdate();
        });
    };
    /**
     * Checks if an element is visible in the current view area
     */
    Scrollbar.prototype.isVisible = function (elem) {
        return Object(_geometry___WEBPACK_IMPORTED_MODULE_6__["isVisible"])(this, elem);
    };
    /**
     * Sets the scrollbar to the given offset without easing
     */
    Scrollbar.prototype.setPosition = function (x, y, options) {
        var _this = this;
        if (x === void 0) { x = this.offset.x; }
        if (y === void 0) { y = this.offset.y; }
        if (options === void 0) { options = {}; }
        var status = Object(_scrolling___WEBPACK_IMPORTED_MODULE_7__["setPosition"])(this, x, y);
        if (!status || options.withoutCallbacks) {
            return;
        }
        this._listeners.forEach(function (fn) {
            fn.call(_this, status);
        });
    };
    /**
     * Scrolls to given position with easing function
     */
    Scrollbar.prototype.scrollTo = function (x, y, duration, options) {
        if (x === void 0) { x = this.offset.x; }
        if (y === void 0) { y = this.offset.y; }
        if (duration === void 0) { duration = 0; }
        if (options === void 0) { options = {}; }
        Object(_scrolling___WEBPACK_IMPORTED_MODULE_7__["scrollTo"])(this, x, y, duration, options);
    };
    /**
     * Scrolls the target element into visible area of scrollbar,
     * likes the DOM method `element.scrollIntoView().
     */
    Scrollbar.prototype.scrollIntoView = function (elem, options) {
        if (options === void 0) { options = {}; }
        Object(_scrolling___WEBPACK_IMPORTED_MODULE_7__["scrollIntoView"])(this, elem, options);
    };
    /**
     * Adds scrolling listener
     */
    Scrollbar.prototype.addListener = function (fn) {
        if (typeof fn !== 'function') {
            throw new TypeError('[smooth-scrollbar] scrolling listener should be a function');
        }
        this._listeners.add(fn);
    };
    /**
     * Removes listener previously registered with `scrollbar.addListener()`
     */
    Scrollbar.prototype.removeListener = function (fn) {
        this._listeners.delete(fn);
    };
    /**
     * Adds momentum and applys delta transformers.
     */
    Scrollbar.prototype.addTransformableMomentum = function (x, y, fromEvent, callback) {
        this._updateDebounced();
        var finalDelta = this._plugins.reduce(function (delta, plugin) {
            return plugin.transformDelta(delta, fromEvent) || delta;
        }, { x: x, y: y });
        var willScroll = !this._shouldPropagateMomentum(finalDelta.x, finalDelta.y);
        if (willScroll) {
            this.addMomentum(finalDelta.x, finalDelta.y);
        }
        if (callback) {
            callback.call(this, willScroll);
        }
    };
    /**
     * Increases scrollbar's momentum
     */
    Scrollbar.prototype.addMomentum = function (x, y) {
        this.setMomentum(this._momentum.x + x, this._momentum.y + y);
    };
    /**
     * Sets scrollbar's momentum to given value
     */
    Scrollbar.prototype.setMomentum = function (x, y) {
        if (this.limit.x === 0) {
            x = 0;
        }
        if (this.limit.y === 0) {
            y = 0;
        }
        if (this.options.renderByPixels) {
            x = Math.round(x);
            y = Math.round(y);
        }
        this._momentum.x = x;
        this._momentum.y = y;
    };
    /**
     * Update options for specific plugin
     *
     * @param pluginName Name of the plugin
     * @param [options] An object includes the properties that you want to update
     */
    Scrollbar.prototype.updatePluginOptions = function (pluginName, options) {
        this._plugins.forEach(function (plugin) {
            if (plugin.name === pluginName) {
                Object.assign(plugin.options, options);
            }
        });
    };
    Scrollbar.prototype.destroy = function () {
        var _a = this, containerEl = _a.containerEl, contentEl = _a.contentEl;
        Object(_utils___WEBPACK_IMPORTED_MODULE_3__["clearEventsOn"])(this);
        this._listeners.clear();
        this.setMomentum(0, 0);
        cancelAnimationFrame(this._renderID);
        if (this._observer) {
            this._observer.disconnect();
        }
        scrollbarMap.delete(this.containerEl);
        // restore contents
        var childNodes = Array.from(contentEl.childNodes);
        while (containerEl.firstChild) {
            containerEl.removeChild(containerEl.firstChild);
        }
        childNodes.forEach(function (el) {
            containerEl.appendChild(el);
        });
        // reset scroll position
        Object(_utils___WEBPACK_IMPORTED_MODULE_3__["setStyle"])(containerEl, {
            overflow: '',
        });
        containerEl.scrollTop = this.scrollTop;
        containerEl.scrollLeft = this.scrollLeft;
        // invoke plugin.onDestroy
        this._plugins.forEach(function (plugin) {
            plugin.onDestroy();
        });
        this._plugins.length = 0;
    };
    Scrollbar.prototype._init = function () {
        var _this = this;
        this.update();
        // init evet handlers
        Object.keys(_events___WEBPACK_IMPORTED_MODULE_9__).forEach(function (prop) {
            _events___WEBPACK_IMPORTED_MODULE_9__[prop](_this);
        });
        // invoke `plugin.onInit`
        this._plugins.forEach(function (plugin) {
            plugin.onInit();
        });
        this._render();
    };
    Scrollbar.prototype._updateDebounced = function () {
        this.update();
    };
    // check whether to propagate monmentum to parent scrollbar
    // the following situations are considered as `true`:
    //         1. continuous scrolling is enabled (automatically disabled when overscroll is enabled)
    //         2. scrollbar reaches one side and is not about to scroll on the other direction
    Scrollbar.prototype._shouldPropagateMomentum = function (deltaX, deltaY) {
        if (deltaX === void 0) { deltaX = 0; }
        if (deltaY === void 0) { deltaY = 0; }
        var _a = this, options = _a.options, offset = _a.offset, limit = _a.limit;
        if (!options.continuousScrolling)
            return false;
        // force an update when scrollbar is "unscrollable", see #106
        if (limit.x === 0 && limit.y === 0) {
            this._updateDebounced();
        }
        var destX = Object(lodash_es_clamp__WEBPACK_IMPORTED_MODULE_1__["default"])(deltaX + offset.x, 0, limit.x);
        var destY = Object(lodash_es_clamp__WEBPACK_IMPORTED_MODULE_1__["default"])(deltaY + offset.y, 0, limit.y);
        var res = true;
        // offsets are not about to change
        // `&=` operator is not allowed for boolean types
        res = res && (destX === offset.x);
        res = res && (destY === offset.y);
        // current offsets are on the edge
        res = res && (offset.x === limit.x || offset.x === 0 || offset.y === limit.y || offset.y === 0);
        return res;
    };
    Scrollbar.prototype._render = function () {
        var _momentum = this._momentum;
        if (_momentum.x || _momentum.y) {
            var nextX = this._nextTick('x');
            var nextY = this._nextTick('y');
            _momentum.x = nextX.momentum;
            _momentum.y = nextY.momentum;
            this.setPosition(nextX.position, nextY.position);
        }
        var remain = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._momentum);
        this._plugins.forEach(function (plugin) {
            plugin.onRender(remain);
        });
        this._renderID = requestAnimationFrame(this._render.bind(this));
    };
    Scrollbar.prototype._nextTick = function (direction) {
        var _a = this, options = _a.options, offset = _a.offset, _momentum = _a._momentum;
        var current = offset[direction];
        var remain = _momentum[direction];
        if (Math.abs(remain) <= 0.1) {
            return {
                momentum: 0,
                position: current + remain,
            };
        }
        var nextMomentum = remain * (1 - options.damping);
        if (options.renderByPixels) {
            nextMomentum |= 0;
        }
        return {
            momentum: nextMomentum,
            position: current + remain - nextMomentum,
        };
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_decorators___WEBPACK_IMPORTED_MODULE_4__["debounce"])(100, { leading: true })
    ], Scrollbar.prototype, "_updateDebounced", null);
    return Scrollbar;
}());

//# sourceMappingURL=scrollbar.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/scrolling/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/smooth-scrollbar/scrolling/index.js ***!
  \**********************************************************/
/*! exports provided: setPosition, scrollTo, scrollIntoView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _set_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-position */ "./node_modules/smooth-scrollbar/scrolling/set-position.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPosition", function() { return _set_position__WEBPACK_IMPORTED_MODULE_0__["setPosition"]; });

/* harmony import */ var _scroll_to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll-to */ "./node_modules/smooth-scrollbar/scrolling/scroll-to.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return _scroll_to__WEBPACK_IMPORTED_MODULE_1__["scrollTo"]; });

/* harmony import */ var _scroll_into_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll-into-view */ "./node_modules/smooth-scrollbar/scrolling/scroll-into-view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrollIntoView", function() { return _scroll_into_view__WEBPACK_IMPORTED_MODULE_2__["scrollIntoView"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/scrolling/scroll-into-view.js":
/*!*********************************************************************!*\
  !*** ./node_modules/smooth-scrollbar/scrolling/scroll-into-view.js ***!
  \*********************************************************************/
/*! exports provided: scrollIntoView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollIntoView", function() { return scrollIntoView; });
/* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/clamp */ "./node_modules/lodash-es/clamp.js");

function scrollIntoView(scrollbar, elem, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.alignToTop, alignToTop = _c === void 0 ? true : _c, _d = _b.onlyScrollIfNeeded, onlyScrollIfNeeded = _d === void 0 ? false : _d, _e = _b.offsetTop, offsetTop = _e === void 0 ? 0 : _e, _f = _b.offsetLeft, offsetLeft = _f === void 0 ? 0 : _f, _g = _b.offsetBottom, offsetBottom = _g === void 0 ? 0 : _g;
    var containerEl = scrollbar.containerEl, bounding = scrollbar.bounding, offset = scrollbar.offset, limit = scrollbar.limit;
    if (!elem || !containerEl.contains(elem))
        return;
    var targetBounding = elem.getBoundingClientRect();
    if (onlyScrollIfNeeded && scrollbar.isVisible(elem))
        return;
    var delta = alignToTop ? targetBounding.top - bounding.top - offsetTop : targetBounding.bottom - bounding.bottom + offsetBottom;
    scrollbar.setMomentum(targetBounding.left - bounding.left - offsetLeft, Object(lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__["default"])(delta, -offset.y, limit.y - offset.y));
}
//# sourceMappingURL=scroll-into-view.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/scrolling/scroll-to.js":
/*!**************************************************************!*\
  !*** ./node_modules/smooth-scrollbar/scrolling/scroll-to.js ***!
  \**************************************************************/
/*! exports provided: scrollTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/clamp */ "./node_modules/lodash-es/clamp.js");

var animationIDStorage = new WeakMap();
function scrollTo(scrollbar, x, y, duration, _a) {
    if (duration === void 0) { duration = 0; }
    var _b = _a === void 0 ? {} : _a, _c = _b.easing, easing = _c === void 0 ? defaultEasing : _c, callback = _b.callback;
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit;
    if (options.renderByPixels) {
        // ensure resolved with integer
        x = Math.round(x);
        y = Math.round(y);
    }
    var startX = offset.x;
    var startY = offset.y;
    var disX = Object(lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__["default"])(x, 0, limit.x) - startX;
    var disY = Object(lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__["default"])(y, 0, limit.y) - startY;
    var start = Date.now();
    function scroll() {
        var elapse = Date.now() - start;
        var progress = duration ? easing(Math.min(elapse / duration, 1)) : 1;
        scrollbar.setPosition(startX + disX * progress, startY + disY * progress);
        if (elapse >= duration) {
            if (typeof callback === 'function') {
                callback.call(scrollbar);
            }
        }
        else {
            var animationID = requestAnimationFrame(scroll);
            animationIDStorage.set(scrollbar, animationID);
        }
    }
    cancelAnimationFrame(animationIDStorage.get(scrollbar));
    scroll();
}
/**
 * easeOutCubic
 */
function defaultEasing(t) {
    return Math.pow((t - 1), 3) + 1;
}
//# sourceMappingURL=scroll-to.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/scrolling/set-position.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smooth-scrollbar/scrolling/set-position.js ***!
  \*****************************************************************/
/*! exports provided: setPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPosition", function() { return setPosition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/clamp */ "./node_modules/lodash-es/clamp.js");
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ */ "./node_modules/smooth-scrollbar/utils/index.js");



function setPosition(scrollbar, x, y) {
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit, track = scrollbar.track, contentEl = scrollbar.contentEl;
    if (options.renderByPixels) {
        x = Math.round(x);
        y = Math.round(y);
    }
    x = Object(lodash_es_clamp__WEBPACK_IMPORTED_MODULE_1__["default"])(x, 0, limit.x);
    y = Object(lodash_es_clamp__WEBPACK_IMPORTED_MODULE_1__["default"])(y, 0, limit.y);
    // position changed -> show track for 300ms
    if (x !== offset.x)
        track.xAxis.show();
    if (y !== offset.y)
        track.yAxis.show();
    if (!options.alwaysShowTracks) {
        track.autoHideOnIdle();
    }
    if (x === offset.x && y === offset.y) {
        return null;
    }
    offset.x = x;
    offset.y = y;
    Object(_utils___WEBPACK_IMPORTED_MODULE_2__["setStyle"])(contentEl, {
        '-transform': "translate3d(" + -x + "px, " + -y + "px, 0)",
    });
    track.update();
    return {
        offset: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, offset),
        limit: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, limit),
    };
}
//# sourceMappingURL=set-position.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/style.js":
/*!************************************************!*\
  !*** ./node_modules/smooth-scrollbar/style.js ***!
  \************************************************/
/*! exports provided: attachStyle, detachStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachStyle", function() { return attachStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachStyle", function() { return detachStyle; });
var TRACK_BG = 'rgba(222, 222, 222, .75)';
var THUMB_BG = 'rgba(0, 0, 0, .5)';
var SCROLLBAR_STYLE = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: " + TRACK_BG + ";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: " + THUMB_BG + ";\n  border-radius: 4px;\n}\n";
var STYLE_ID = 'smooth-scrollbar-style';
var isStyleAttached = false;
function attachStyle() {
    if (isStyleAttached || typeof window === 'undefined') {
        return;
    }
    var styleEl = document.createElement('style');
    styleEl.id = STYLE_ID;
    styleEl.textContent = SCROLLBAR_STYLE;
    if (document.head) {
        document.head.appendChild(styleEl);
    }
    isStyleAttached = true;
}
function detachStyle() {
    if (!isStyleAttached || typeof window === 'undefined') {
        return;
    }
    var styleEl = document.getElementById(STYLE_ID);
    if (!styleEl || !styleEl.parentNode) {
        return;
    }
    styleEl.parentNode.removeChild(styleEl);
    isStyleAttached = false;
}
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/track/direction.js":
/*!**********************************************************!*\
  !*** ./node_modules/smooth-scrollbar/track/direction.js ***!
  \**********************************************************/
/*! exports provided: TrackDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackDirection", function() { return TrackDirection; });
var TrackDirection;
(function (TrackDirection) {
    TrackDirection["X"] = "x";
    TrackDirection["Y"] = "y";
})(TrackDirection || (TrackDirection = {}));
//# sourceMappingURL=direction.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/track/index.js":
/*!******************************************************!*\
  !*** ./node_modules/smooth-scrollbar/track/index.js ***!
  \******************************************************/
/*! exports provided: TrackController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackController", function() { return TrackController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track */ "./node_modules/smooth-scrollbar/track/track.js");
/* harmony import */ var _direction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./direction */ "./node_modules/smooth-scrollbar/track/direction.js");
/* harmony import */ var _decorators___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators/ */ "./node_modules/smooth-scrollbar/decorators/index.js");




var TrackController = /** @class */ (function () {
    function TrackController(_scrollbar) {
        this._scrollbar = _scrollbar;
        var thumbMinSize = _scrollbar.options.thumbMinSize;
        this.xAxis = new _track__WEBPACK_IMPORTED_MODULE_1__["ScrollbarTrack"](_direction__WEBPACK_IMPORTED_MODULE_2__["TrackDirection"].X, thumbMinSize);
        this.yAxis = new _track__WEBPACK_IMPORTED_MODULE_1__["ScrollbarTrack"](_direction__WEBPACK_IMPORTED_MODULE_2__["TrackDirection"].Y, thumbMinSize);
        this.xAxis.attachTo(_scrollbar.containerEl);
        this.yAxis.attachTo(_scrollbar.containerEl);
        if (_scrollbar.options.alwaysShowTracks) {
            this.xAxis.show();
            this.yAxis.show();
        }
    }
    /**
     * Updates track appearance
     */
    TrackController.prototype.update = function () {
        var _a = this._scrollbar, size = _a.size, offset = _a.offset;
        this.xAxis.update(offset.x, size.container.width, size.content.width);
        this.yAxis.update(offset.y, size.container.height, size.content.height);
    };
    /**
     * Automatically hide tracks when scrollbar is in idle state
     */
    TrackController.prototype.autoHideOnIdle = function () {
        if (this._scrollbar.options.alwaysShowTracks) {
            return;
        }
        this.xAxis.hide();
        this.yAxis.hide();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_decorators___WEBPACK_IMPORTED_MODULE_3__["debounce"])(300)
    ], TrackController.prototype, "autoHideOnIdle", null);
    return TrackController;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/track/thumb.js":
/*!******************************************************!*\
  !*** ./node_modules/smooth-scrollbar/track/thumb.js ***!
  \******************************************************/
/*! exports provided: ScrollbarThumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarThumb", function() { return ScrollbarThumb; });
/* harmony import */ var _direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./direction */ "./node_modules/smooth-scrollbar/track/direction.js");
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ */ "./node_modules/smooth-scrollbar/utils/index.js");


var ScrollbarThumb = /** @class */ (function () {
    function ScrollbarThumb(_direction, _minSize) {
        if (_minSize === void 0) { _minSize = 0; }
        this._direction = _direction;
        this._minSize = _minSize;
        /**
         * Thumb element
         */
        this.element = document.createElement('div');
        /**
         * Display size of the thumb
         * will always be greater than `scrollbar.options.thumbMinSize`
         */
        this.displaySize = 0;
        /**
         * Actual size of the thumb
         */
        this.realSize = 0;
        /**
         * Thumb offset to the top
         */
        this.offset = 0;
        this.element.className = "scrollbar-thumb scrollbar-thumb-" + _direction;
    }
    /**
     * Attach to track element
     *
     * @param trackEl Track element
     */
    ScrollbarThumb.prototype.attachTo = function (trackEl) {
        trackEl.appendChild(this.element);
    };
    ScrollbarThumb.prototype.update = function (scrollOffset, containerSize, pageSize) {
        // calculate thumb size
        // pageSize > containerSize -> scrollable
        this.realSize = Math.min(containerSize / pageSize, 1) * containerSize;
        this.displaySize = Math.max(this.realSize, this._minSize);
        // calculate thumb offset
        this.offset = scrollOffset / pageSize * (containerSize + (this.realSize - this.displaySize));
        Object(_utils___WEBPACK_IMPORTED_MODULE_1__["setStyle"])(this.element, this._getStyle());
    };
    ScrollbarThumb.prototype._getStyle = function () {
        switch (this._direction) {
            case _direction__WEBPACK_IMPORTED_MODULE_0__["TrackDirection"].X:
                return {
                    width: this.displaySize + "px",
                    '-transform': "translate3d(" + this.offset + "px, 0, 0)",
                };
            case _direction__WEBPACK_IMPORTED_MODULE_0__["TrackDirection"].Y:
                return {
                    height: this.displaySize + "px",
                    '-transform': "translate3d(0, " + this.offset + "px, 0)",
                };
            default:
                return null;
        }
    };
    return ScrollbarThumb;
}());

//# sourceMappingURL=thumb.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/track/track.js":
/*!******************************************************!*\
  !*** ./node_modules/smooth-scrollbar/track/track.js ***!
  \******************************************************/
/*! exports provided: ScrollbarTrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarTrack", function() { return ScrollbarTrack; });
/* harmony import */ var _thumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thumb */ "./node_modules/smooth-scrollbar/track/thumb.js");
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ */ "./node_modules/smooth-scrollbar/utils/index.js");


var ScrollbarTrack = /** @class */ (function () {
    function ScrollbarTrack(direction, thumbMinSize) {
        if (thumbMinSize === void 0) { thumbMinSize = 0; }
        /**
         * Track element
         */
        this.element = document.createElement('div');
        this._isShown = false;
        this.element.className = "scrollbar-track scrollbar-track-" + direction;
        this.thumb = new _thumb__WEBPACK_IMPORTED_MODULE_0__["ScrollbarThumb"](direction, thumbMinSize);
        this.thumb.attachTo(this.element);
    }
    /**
     * Attach to scrollbar container element
     *
     * @param scrollbarContainer Scrollbar container element
     */
    ScrollbarTrack.prototype.attachTo = function (scrollbarContainer) {
        scrollbarContainer.appendChild(this.element);
    };
    /**
     * Show track immediately
     */
    ScrollbarTrack.prototype.show = function () {
        if (this._isShown) {
            return;
        }
        this._isShown = true;
        this.element.classList.add('show');
    };
    /**
     * Hide track immediately
     */
    ScrollbarTrack.prototype.hide = function () {
        if (!this._isShown) {
            return;
        }
        this._isShown = false;
        this.element.classList.remove('show');
    };
    ScrollbarTrack.prototype.update = function (scrollOffset, containerSize, pageSize) {
        Object(_utils___WEBPACK_IMPORTED_MODULE_1__["setStyle"])(this.element, {
            display: pageSize <= containerSize ? 'none' : 'block',
        });
        this.thumb.update(scrollOffset, containerSize, pageSize);
    };
    return ScrollbarTrack;
}());

//# sourceMappingURL=track.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/utils/event-hub.js":
/*!**********************************************************!*\
  !*** ./node_modules/smooth-scrollbar/utils/event-hub.js ***!
  \**********************************************************/
/*! exports provided: eventScope, clearEventsOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventScope", function() { return eventScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearEventsOn", function() { return clearEventsOn; });
var eventListenerOptions;
var eventMap = new WeakMap();
function getOptions() {
    if (eventListenerOptions !== undefined) {
        return eventListenerOptions;
    }
    var supportPassiveEvent = false;
    try {
        var noop = function () { };
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                supportPassiveEvent = true;
            },
        });
        window.addEventListener('testPassive', noop, options);
        window.removeEventListener('testPassive', noop, options);
    }
    catch (e) { }
    eventListenerOptions = supportPassiveEvent ? { passive: false } : false;
    return eventListenerOptions;
}
function eventScope(scrollbar) {
    var configs = eventMap.get(scrollbar) || [];
    eventMap.set(scrollbar, configs);
    return function addEvent(elem, events, fn) {
        function handler(event) {
            // ignore default prevented events
            if (event.defaultPrevented) {
                return;
            }
            fn(event);
        }
        events.split(/\s+/g).forEach(function (eventName) {
            configs.push({ elem: elem, eventName: eventName, handler: handler });
            elem.addEventListener(eventName, handler, getOptions());
        });
    };
}
function clearEventsOn(scrollbar) {
    var configs = eventMap.get(scrollbar);
    if (!configs) {
        return;
    }
    configs.forEach(function (_a) {
        var elem = _a.elem, eventName = _a.eventName, handler = _a.handler;
        elem.removeEventListener(eventName, handler, getOptions());
    });
    eventMap.delete(scrollbar);
}
//# sourceMappingURL=event-hub.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/utils/get-pointer-data.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smooth-scrollbar/utils/get-pointer-data.js ***!
  \*****************************************************************/
/*! exports provided: getPointerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPointerData", function() { return getPointerData; });
/**
 * Get pointer/touch data
 */
function getPointerData(evt) {
    // if is touch event, return last item in touchList
    // else return original event
    return evt.touches ? evt.touches[evt.touches.length - 1] : evt;
}
//# sourceMappingURL=get-pointer-data.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/utils/get-position.js":
/*!*************************************************************!*\
  !*** ./node_modules/smooth-scrollbar/utils/get-position.js ***!
  \*************************************************************/
/*! exports provided: getPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return getPosition; });
/* harmony import */ var _get_pointer_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-pointer-data */ "./node_modules/smooth-scrollbar/utils/get-pointer-data.js");

/**
 * Get pointer/finger position
 */
function getPosition(evt) {
    var data = Object(_get_pointer_data__WEBPACK_IMPORTED_MODULE_0__["getPointerData"])(evt);
    return {
        x: data.clientX,
        y: data.clientY,
    };
}
//# sourceMappingURL=get-position.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/utils/index.js":
/*!******************************************************!*\
  !*** ./node_modules/smooth-scrollbar/utils/index.js ***!
  \******************************************************/
/*! exports provided: eventScope, clearEventsOn, getPointerData, getPosition, isOneOf, setStyle, Tracker, TouchRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_hub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-hub */ "./node_modules/smooth-scrollbar/utils/event-hub.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventScope", function() { return _event_hub__WEBPACK_IMPORTED_MODULE_0__["eventScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearEventsOn", function() { return _event_hub__WEBPACK_IMPORTED_MODULE_0__["clearEventsOn"]; });

/* harmony import */ var _get_pointer_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-pointer-data */ "./node_modules/smooth-scrollbar/utils/get-pointer-data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPointerData", function() { return _get_pointer_data__WEBPACK_IMPORTED_MODULE_1__["getPointerData"]; });

/* harmony import */ var _get_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-position */ "./node_modules/smooth-scrollbar/utils/get-position.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return _get_position__WEBPACK_IMPORTED_MODULE_2__["getPosition"]; });

/* harmony import */ var _is_one_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-one-of */ "./node_modules/smooth-scrollbar/utils/is-one-of.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOneOf", function() { return _is_one_of__WEBPACK_IMPORTED_MODULE_3__["isOneOf"]; });

/* harmony import */ var _set_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./set-style */ "./node_modules/smooth-scrollbar/utils/set-style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return _set_style__WEBPACK_IMPORTED_MODULE_4__["setStyle"]; });

/* harmony import */ var _touch_record__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./touch-record */ "./node_modules/smooth-scrollbar/utils/touch-record.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tracker", function() { return _touch_record__WEBPACK_IMPORTED_MODULE_5__["Tracker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TouchRecord", function() { return _touch_record__WEBPACK_IMPORTED_MODULE_5__["TouchRecord"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/utils/is-one-of.js":
/*!**********************************************************!*\
  !*** ./node_modules/smooth-scrollbar/utils/is-one-of.js ***!
  \**********************************************************/
/*! exports provided: isOneOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOneOf", function() { return isOneOf; });
/**
 * Check if `a` is one of `[...b]`
 */
function isOneOf(a, b) {
    if (b === void 0) { b = []; }
    return b.some(function (v) { return a === v; });
}
//# sourceMappingURL=is-one-of.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/utils/set-style.js":
/*!**********************************************************!*\
  !*** ./node_modules/smooth-scrollbar/utils/set-style.js ***!
  \**********************************************************/
/*! exports provided: setStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
var VENDOR_PREFIX = [
    'webkit',
    'moz',
    'ms',
    'o',
];
var RE = new RegExp("^-(?!(?:" + VENDOR_PREFIX.join('|') + ")-)");
function autoPrefix(styles) {
    var res = {};
    Object.keys(styles).forEach(function (prop) {
        if (!RE.test(prop)) {
            res[prop] = styles[prop];
            return;
        }
        var val = styles[prop];
        prop = prop.replace(/^-/, '');
        res[prop] = val;
        VENDOR_PREFIX.forEach(function (prefix) {
            res["-" + prefix + "-" + prop] = val;
        });
    });
    return res;
}
function setStyle(elem, styles) {
    styles = autoPrefix(styles);
    Object.keys(styles).forEach(function (prop) {
        var cssProp = prop.replace(/^-/, '').replace(/-([a-z])/g, function (_, $1) { return $1.toUpperCase(); });
        elem.style[cssProp] = styles[prop];
    });
}
//# sourceMappingURL=set-style.js.map

/***/ }),

/***/ "./node_modules/smooth-scrollbar/utils/touch-record.js":
/*!*************************************************************!*\
  !*** ./node_modules/smooth-scrollbar/utils/touch-record.js ***!
  \*************************************************************/
/*! exports provided: Tracker, TouchRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tracker", function() { return Tracker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchRecord", function() { return TouchRecord; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _get_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-position */ "./node_modules/smooth-scrollbar/utils/get-position.js");


var Tracker = /** @class */ (function () {
    function Tracker(touch) {
        this.updateTime = Date.now();
        this.delta = { x: 0, y: 0 };
        this.velocity = { x: 0, y: 0 };
        this.lastPosition = { x: 0, y: 0 };
        this.lastPosition = Object(_get_position__WEBPACK_IMPORTED_MODULE_1__["getPosition"])(touch);
    }
    Tracker.prototype.update = function (touch) {
        var _a = this, velocity = _a.velocity, updateTime = _a.updateTime, lastPosition = _a.lastPosition;
        var now = Date.now();
        var position = Object(_get_position__WEBPACK_IMPORTED_MODULE_1__["getPosition"])(touch);
        var delta = {
            x: -(position.x - lastPosition.x),
            y: -(position.y - lastPosition.y),
        };
        var duration = (now - updateTime) || 16;
        var vx = delta.x / duration * 16;
        var vy = delta.y / duration * 16;
        velocity.x = vx * 0.9 + velocity.x * 0.1;
        velocity.y = vy * 0.9 + velocity.y * 0.1;
        this.delta = delta;
        this.updateTime = now;
        this.lastPosition = position;
    };
    return Tracker;
}());

var TouchRecord = /** @class */ (function () {
    function TouchRecord() {
        this._touchList = {};
    }
    Object.defineProperty(TouchRecord.prototype, "_primitiveValue", {
        get: function () {
            return { x: 0, y: 0 };
        },
        enumerable: true,
        configurable: true
    });
    TouchRecord.prototype.isActive = function () {
        return this._activeTouchID !== undefined;
    };
    TouchRecord.prototype.getDelta = function () {
        var tracker = this._getActiveTracker();
        if (!tracker) {
            return this._primitiveValue;
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, tracker.delta);
    };
    TouchRecord.prototype.getVelocity = function () {
        var tracker = this._getActiveTracker();
        if (!tracker) {
            return this._primitiveValue;
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, tracker.velocity);
    };
    TouchRecord.prototype.track = function (evt) {
        var _this = this;
        var targetTouches = evt.targetTouches;
        Array.from(targetTouches).forEach(function (touch) {
            _this._add(touch);
        });
        return this._touchList;
    };
    TouchRecord.prototype.update = function (evt) {
        var _this = this;
        var touches = evt.touches, changedTouches = evt.changedTouches;
        Array.from(touches).forEach(function (touch) {
            _this._renew(touch);
        });
        this._setActiveID(changedTouches);
        return this._touchList;
    };
    TouchRecord.prototype.release = function (evt) {
        var _this = this;
        delete this._activeTouchID;
        Array.from(evt.changedTouches).forEach(function (touch) {
            _this._delete(touch);
        });
    };
    TouchRecord.prototype._add = function (touch) {
        if (this._has(touch)) {
            return;
        }
        var tracker = new Tracker(touch);
        this._touchList[touch.identifier] = tracker;
    };
    TouchRecord.prototype._renew = function (touch) {
        if (!this._has(touch)) {
            return;
        }
        var tracker = this._touchList[touch.identifier];
        tracker.update(touch);
    };
    TouchRecord.prototype._delete = function (touch) {
        delete this._touchList[touch.identifier];
    };
    TouchRecord.prototype._has = function (touch) {
        return this._touchList.hasOwnProperty(touch.identifier);
    };
    TouchRecord.prototype._setActiveID = function (touches) {
        this._activeTouchID = touches[touches.length - 1].identifier;
    };
    TouchRecord.prototype._getActiveTracker = function () {
        var _a = this, _touchList = _a._touchList, _activeTouchID = _a._activeTouchID;
        return _touchList[_activeTouchID];
    };
    return TouchRecord;
}());

//# sourceMappingURL=touch-record.js.map

/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

/* harmony default export */ __webpack_exports__["default"] = (invariant);


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/use-memo-one/dist/use-memo-one.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/use-memo-one/dist/use-memo-one.esm.js ***!
  \************************************************************/
/*! exports provided: useCallback, useCallbackOne, useMemo, useMemoOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallbackOne", function() { return useCallbackOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemoOne", function() { return useMemoOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function useMemoOne(getResult, inputs) {
  var initial = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return {
      inputs: inputs,
      result: getResult()
    };
  })[0];
  var committed = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(initial);
  var isInputMatch = Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
  var cache = isInputMatch ? committed.current : {
    inputs: inputs,
    result: getResult()
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallbackOne(callback, inputs) {
  return useMemoOne(function () {
    return callback;
  }, inputs);
}
var useMemo = useMemoOne;
var useCallback = useCallbackOne;




/***/ }),

/***/ "./public/static/d/2214290884.json":
/*!*****************************************!*\
  !*** ./public/static/d/2214290884.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"pic1\":{\"id\":\"97d9ee8d-bc58-50bc-bb76-bd4b0cdaac87\",\"childImageSharp\":{\"id\":\"798b2e31-e889-502c-b9b1-3ba6e0b22027\",\"fluid\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAECAwT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQQC/9oADAMBAAIQAxAAAAHqm+wUYqy6GQB//8QAGRAAAgMBAAAAAAAAAAAAAAAAAhIAAQMg/9oACAEBAAEFAjJZoaV3/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFREBAQAAAAAAAAAAAAAAAAAAICH/2gAIAQIBAT8Bg//EABoQAQABBQAAAAAAAAAAAAAAAAEAERIwMnH/2gAIAQEABj8C1WVtXmD/xAAZEAACAwEAAAAAAAAAAAAAAAABEQAhQSD/2gAIAQEAAT8hMINk5kVWJULv/9oADAMBAAIAAwAAABAk4AD/xAAXEQEAAwAAAAAAAAAAAAAAAAABESBB/9oACAEDAQE/EGcaf//EABcRAQADAAAAAAAAAAAAAAAAAAERICH/2gAIAQIBAT8QHElP/8QAHBAAAgICAwAAAAAAAAAAAAAAAAERMRBRYXGx/9oACAEBAAE/EEqQQn7GjkLLkhClC7HWsIdEn//Z\",\"aspectRatio\":1,\"src\":\"/static/1bd5e7703c8ddc6bae7ffe54a509436b/9dc27/5.jpg\",\"srcSet\":\"/static/1bd5e7703c8ddc6bae7ffe54a509436b/25b50/5.jpg 75w,\\n/static/1bd5e7703c8ddc6bae7ffe54a509436b/aabdf/5.jpg 150w,\\n/static/1bd5e7703c8ddc6bae7ffe54a509436b/9dc27/5.jpg 300w,\\n/static/1bd5e7703c8ddc6bae7ffe54a509436b/32fd5/5.jpg 450w,\\n/static/1bd5e7703c8ddc6bae7ffe54a509436b/4fe8c/5.jpg 600w,\\n/static/1bd5e7703c8ddc6bae7ffe54a509436b/a6352/5.jpg 960w\",\"sizes\":\"(max-width: 300px) 100vw, 300px\"}}},\"pic2\":{\"id\":\"4ee99929-3501-5740-b898-92c275e0430c\",\"childImageSharp\":{\"id\":\"b5e54971-883b-513a-a9d9-bc3525b172ed\",\"fluid\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECA//EABcBAQEBAQAAAAAAAAAAAAAAAAEEAAL/2gAMAwEAAhADEAAAAeyZhu0jPLB2QL//xAAZEAEAAwEBAAAAAAAAAAAAAAABAAIRECD/2gAIAQEAAQUC8WUrsbTV5//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABURAQEAAAAAAAAAAAAAAAAAABAB/9oACAECAQE/ASH/xAAWEAEBAQAAAAAAAAAAAAAAAAAgARH/2gAIAQEABj8CFw//xAAaEAEAAgMBAAAAAAAAAAAAAAABABARITFR/9oACAEBAAE/IbzGAintGORJtr//2gAMAwEAAgADAAAAEDfAfP/EABgRAAIDAAAAAAAAAAAAAAAAAAABEBEh/9oACAEDAQE/EHhQ4//EABcRAQEBAQAAAAAAAAAAAAAAAAEAERD/2gAIAQIBAT8QBXLGBz//xAAcEAEAAgEFAAAAAAAAAAAAAAABABExEEFRYaH/2gAIAQEAAT8QqJK0AUKww78hYHkidAjASnITYn//2Q==\",\"aspectRatio\":1,\"src\":\"/static/a25457be609795ae64c531e0385ee08d/9dc27/4.jpg\",\"srcSet\":\"/static/a25457be609795ae64c531e0385ee08d/25b50/4.jpg 75w,\\n/static/a25457be609795ae64c531e0385ee08d/aabdf/4.jpg 150w,\\n/static/a25457be609795ae64c531e0385ee08d/9dc27/4.jpg 300w,\\n/static/a25457be609795ae64c531e0385ee08d/32fd5/4.jpg 450w,\\n/static/a25457be609795ae64c531e0385ee08d/4fe8c/4.jpg 600w,\\n/static/a25457be609795ae64c531e0385ee08d/a6352/4.jpg 960w\",\"sizes\":\"(max-width: 300px) 100vw, 300px\"}}},\"pic3\":{\"id\":\"ac82b539-2bab-51d1-b87c-73af13bc85df\",\"childImageSharp\":{\"id\":\"16eeeff4-8e12-5177-8da4-5a18124ac930\",\"fluid\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAQFBgL/xAAWAQEBAQAAAAAAAAAAAAAAAAABAwL/2gAMAwEAAhADEAAAAbKXn1paBQBj9FsShl//xAAbEAACAgMBAAAAAAAAAAAAAAABAwACBBIUEP/aAAgBAQABBQJqd2edjZ2Nhy3A6CBYj6A3/8QAGREAAgMBAAAAAAAAAAAAAAAAAAEQERIx/9oACAEDAQE/AbRpQ+n/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQITIf/aAAgBAgEBPwHOjJjJfD//xAAdEAAABgMBAAAAAAAAAAAAAAAAARARQpECITFx/9oACAEBAAY/AizfixoRobalLwf/xAAaEAACAwEBAAAAAAAAAAAAAAABIQAQETFB/9oACAEBAAE/IePUWVtgBAAEiFezW9LhsIxQp//aAAwDAQACAAMAAAAQe+AB/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAxEP/aAAgBAwEBPxANU5G21//EABkRAQACAwAAAAAAAAAAAAAAAAEAERAhQf/aAAgBAgEBPxBUB5hTUSu5/8QAHhAAAgIBBQEAAAAAAAAAAAAAAREAITEQQXGh8LH/2gAIAQEAAT8Q2YwZGi49FuPHMv8AH2ESUiDh3Beb8iEgUkYJzH7A2CgSB1P/2Q==\",\"aspectRatio\":1,\"src\":\"/static/6266137b5edb7b8ca748ea94a18376e1/9dc27/7.jpg\",\"srcSet\":\"/static/6266137b5edb7b8ca748ea94a18376e1/25b50/7.jpg 75w,\\n/static/6266137b5edb7b8ca748ea94a18376e1/aabdf/7.jpg 150w,\\n/static/6266137b5edb7b8ca748ea94a18376e1/9dc27/7.jpg 300w,\\n/static/6266137b5edb7b8ca748ea94a18376e1/32fd5/7.jpg 450w,\\n/static/6266137b5edb7b8ca748ea94a18376e1/4fe8c/7.jpg 600w,\\n/static/6266137b5edb7b8ca748ea94a18376e1/a6352/7.jpg 960w\",\"sizes\":\"(max-width: 300px) 100vw, 300px\"}}}}}");

/***/ }),

/***/ "./public/static/d/4132989182.json":
/*!*****************************************!*\
  !*** ./public/static/d/4132989182.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"left_bottom\":{\"id\":\"459c105d-d961-5984-ae17-d5031c639f73\",\"childImageSharp\":{\"id\":\"0e0ebf81-27ba-5573-a76a-68f2438b9b04\",\"fluid\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAIAAACjcKk8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAF4klEQVQ4y02VaW8TVxSG5zcUJWTBcbyvM57xbsdxFhKSNCyhKYlaSACVEAotQqh8SheFoi4qKqiCFiFFReouNVUrhERYFMhCVsc2iZPYjh0vY3s8421sowLth56JI5WrI/t6dJ/7nnnPuddIeXXljopysVQokYsa63R//nDT8WRy9tHD2ccPZh/fh5ibeDA/+XBhanzxySPHzIRjFmJyaXbSOTeNVNfyKnhVQolAoZS8vtt8+9dbroXZ+elHC9Pji9Pj8OmYeeycm3ItPHEvzi4vza84FzyuxVW3Y33FhQilwl21PBUqB7izxTp+53e3Yw72XpyZWOR0Jp3zHAbMFuD0rS1v+NdCmxsxMowo1DK+iK8hlIRW1bOvaWrsrxWXA3RcCzMQJTWQWl92+lafAhYOBRNxkqGpFJMEWCoQ16IaBU4oD3e3zY3fXVt2gk4pAFt7uuRdcfnWl0tkjIwkqTidTEAgKK6UyMWEVq3RKI717nXPT3o97jW3AxgOW3Zy5NpTv88TDPgAJqOheCwK4hCIwYwrUFmdTafXq8+ePOzzOH1ez7rHve5xeVfd8Iag6fOubPhXAQ5tBiLhTTIajkZCMEFMFkKNKRrsxuYG/ZfDF8hwMBIObgZ9wYDf51v1e1dAExIukaAMTImEnwiuVSsweX29obnReOPKRef02NjoyL3Rkel7o0HfKqzYDPpLGARgEDDZer6BEDpULBdbrURTk3nobP/Quz1HulsH3uo4c6Tj5ldDmz4PSUbJSAhSfTVAmYNxHSqUic1mvLHRdH6wt73ZZLVqm+2GrjZr34H60e+vUlQcHCoFmARWQ1CJGKQAbqugT/QGzG43DfYdMBswDa4iCFWdBT/QYbswcHB5YYKmkyUYGKhwmqHhE7bgYJFMpNWh9Xbj6aNdRkJZC2VHZTiu3NNs6dlru/PLjUw2A1VNJmKZNJPPs8Vikc1luSbRGzVSpcRkJurrjQN9XXYLXsnfpVRJlWpZS72uq91665vhXDady6Xz+VxxaxQKeTaXgSeIhlCJ5CLYwmrVDR492GTT7eRVwUO5SmrSo12txmuXzrOZVLH4DKji/6MAg+swoUyIa1UGo2agv6vBStQI+YQOwzRyswHd26z/euhUMZ8tFJ/BaoAg7WwmBflnM+ktWCrUEGpQO9LTsbvBACdcIBMb9ajJgLXZsOsXz8H6XC6XheSBSNFgW8l5xGDCIW2jhYBJ9/6WztY6NSqTKCUErtQQaKdNPXJlOJ1O0zSdSjFpiDQDVnHVArcNZq1EIQGrrXX6Q2/s+fhM75WPBr+9dK6/p91kxPsONv80ci1OMbEElaSZeJJOJGmaYVKwB8MghB4VKzi3zRZ9Z7u9p9PW1mo/c/Lt374bPne8a39b3d0/fmayhXQ6k8lmYxQdiMSDZCIUozbJBBwMrQKV63RqXItihLqsurKKz6uVCE8e770+/P6JQ60hv+fv5y/A3mcwikWKTpFUMpakIwkK0ZtwTKsGfZ1Bo8SUOyrKeIIagUSgJtBPz/f/ePWTIodsFycLruVyeah4jqWZFILrURVcIzpOFjwvr654bWdZOa8KrofP3ntzaer+i3/+zbNsiQcSgtsFuiSbRVSYQqqUYoRKrVHiOgwu0x07yzRqSW+L7vIHxxJkqLA1SjAkXnhlIIBJAMcUCkxB6DXQWAqVzGJA95hVY7dHn798CUnCOjbPloDSz21Yo1VDqUAfAuZms9Zi0UsktZ8PfxhLQnVSkCfLssCw3Dc32d6OZRGZSloj4sMFrIK0tWh7W4PFhJ8+dWLVuwF+QkSpZBzOZCqVYBh6q2IUwyRoJkbTCE/Ir6qprhUL4M21esxu050+9c6KdyMKS6Cx0mnQj1BUNJkktyZhqHCMCsYSAagzdDIcI6gtXEYyhfhQ9z6vd50tFKGHtisECcMbs1x/Q3mhN/yRuDdEegJRZEdlOTRGRU21QCLiC2uuXv6iZEvJG2DgSKQyGfiDgPxBM0DGvWHSsxF2rwf+A0i1NmbMGNc7AAAAAElFTkSuQmCC\",\"aspectRatio\":0.6666666666666666,\"src\":\"/static/58230903ba690e526b23180b62129e6e/630fb/cactus2.png\",\"srcSet\":\"/static/58230903ba690e526b23180b62129e6e/5db04/cactus2.png 75w,\\n/static/58230903ba690e526b23180b62129e6e/6d161/cactus2.png 150w,\\n/static/58230903ba690e526b23180b62129e6e/630fb/cactus2.png 300w,\\n/static/58230903ba690e526b23180b62129e6e/62b1f/cactus2.png 450w,\\n/static/58230903ba690e526b23180b62129e6e/2a4de/cactus2.png 600w,\\n/static/58230903ba690e526b23180b62129e6e/71935/cactus2.png 1868w\",\"sizes\":\"(max-width: 300px) 100vw, 300px\"}}},\"middle\":{\"id\":\"a8481ee5-f351-549d-921a-9d263259407c\",\"childImageSharp\":{\"id\":\"dcb4fb0a-9eb0-5c44-a2d5-40c02daaebe0\",\"fluid\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAIAAADzvTiPAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAFxElEQVQ4y2WQSVPbdhjG9UV66a0zXWZybA/9BF0m7aRJJmnTlmlSkkBCAwQIDI5j40AAL8LYlnBsYuNVlhd5X2RLdrxgW16QLXkBYryCA5m2hx4r6LSXzvxG80jz/h79/y/Afzov4M2Cy09ddrtEAUkVykChQdSOo9XuP+CV9gXdSKV78exwcAGv9gDewoxYxFNvyiJUI1Zt61FMrTPgdCvGcGaH41+ZC5zW/Q+82gVgtToYz6GeQOrwjKz1E81hpHwYrRxx8v/8fyuYDs6cfwckMtCM2N3kbmL/LcH2yFqPrA9Itsfl//zYBRdF5xXn4R9ZJHwGr/EjBZZonsQ4s9Y/92uc3L2QOzGmTTDt2MU0zpyfllsEcd7eBRC9xuLyh+kWXh9Eaj2c+2GtF2M7UbYbZXvcdJQTmPNpku3GmfY5Va6ry70C1YAlQ+35Ck2yMYjXe6/rvWyjS5WZLHuUY9/kmTcUc1CstVrtQafV7leoYSXfrRQJbqPVNnCaC/zVyP1Zy/1eSb4rEX9UU/1spL8bHlayb+nMaTl5Rqf3Q9bOa8+7am64lz6tZAcVKlU9ijNdABy7sfnwJ8WDW+u/XlsZuQLev4k9G6UM628L0UEm2En5jvPRhlfLYC/fllPHFHlSIPsUmawckrUBILrx+Ucffvze+x9c+uTSZ5cuPbn8KTJzNQ7xznL+/XQ4gJrrueQwGzyM2k4LxJCKDQvkIE9U9ugy0wSsCz+O3f3l6+tX5+6PLE/e0c7cioHTu9uiQxzJuw1RI1T0W0/S3k7c2fRpj2LWYSk+LCbOivFBOQ0wDkUTg5puuIqCLLbFejQ0pinYVCUHHNGsWOULXliISheDymcsBrdJ+2kpMSwlh4V4vxAHaFS+h4AHOFKwKYIvhUmTjMa0jN9YD1kI3apa/Ngs58GzP2uF400c6ecix7kwtzaO42ICaL/2lBDZUcyWNkuUK2MutZD26KoBcy1kTRqksuVHG88nsojCCYt8huU0unGS8Z9S+FmROMnjwBvCwQRNfptZIRXIwMewbCZv36r4jLWwnXKon/N/ffTgOiSa3FHwl1+Mu3dWG1Hb/i5RIf2tTBioutQs7oBka4uzD/mih9KVB0Wnho2gaVTtgYTTj258P/KlaG50ZnZEsv74Jcjz60HS63AaNI1dEqCdW5WgBRSv/jzy05VbX9yd+DZslNTCKOXUFG2b+rVZ3vh3LxZur838KHly95VgLGNYJ5ymqN3QTIUA7oalgFUFiqcnH05N3Ru5e9muFtTDaNln4dZG7sjd8FJQs5RWzaIr43HVfN0FNUPGg5CxHXcARZe2hG3n7TDjNyRMG+KVqdjOZimA+PSynFObMEh1sqXE9nMaVYY1ywmtqO7bHuSjLcI+yIaAgnuHDlgpp7bsNaTMmxLBeBLVloI25epUUCdOGOTG1SeM51UR03lgUc64znq3h3R2uJc5iFgAyr2Td+nyLj3lteSxHSO4SFi3qrjr2dxtu1KQtG554ZW9gCXr0nshYc4k7aT8p3SGk3vpAJBE1GzEkcFeZdz6jEPr00ndrzYydp0V4hMGMGFWOl5KS24dboIQGS9tlLIB06BInJbj7+gMEDfKo1qJZmN+ZuLWD1cvr/Enr1355to3X83PjsIrC2MjN6FVPhde8KYtMoFdsqCZvRNEIdKwUXNvAw7FEjh/H+b/tjw9+uTBL2Le5Nr8hHD63tOpUdHjexu8R+rnc5LFCY1oOoeqKbt61wQWUDiPqGhUASjXBBr5mkktd+7AEdt22mMuhBxUxJX22UiXMR+07fqQlMdSDCJ7YZQlXN0CMahkTqrZAZ0GtIIpp3gRfTGHbwojcj6uEmHihYhyqW6HBj5Nx6E4xlQnbtUxBg0wqO9S9ezylg08sIhb6AaAaaGsx5ZxmvIuUxzRx6z6qHk7oN96jegaQdsR7jzCHUdRVyviaOMczg7ueBO07AeR/ZDtb7PGdIj8z6nyAAAAAElFTkSuQmCC\",\"aspectRatio\":0.75,\"src\":\"/static/7e0301e3fe8cf34b76cf069ebb264830/630fb/cactus1.png\",\"srcSet\":\"/static/7e0301e3fe8cf34b76cf069ebb264830/5db04/cactus1.png 75w,\\n/static/7e0301e3fe8cf34b76cf069ebb264830/6d161/cactus1.png 150w,\\n/static/7e0301e3fe8cf34b76cf069ebb264830/630fb/cactus1.png 300w,\\n/static/7e0301e3fe8cf34b76cf069ebb264830/62b1f/cactus1.png 450w,\\n/static/7e0301e3fe8cf34b76cf069ebb264830/2a4de/cactus1.png 600w,\\n/static/7e0301e3fe8cf34b76cf069ebb264830/cd41e/cactus1.png 1875w\",\"sizes\":\"(max-width: 300px) 100vw, 300px\"}}}}}");

/***/ }),

/***/ "./src/components/aboutBlurb.js":
/*!**************************************!*\
  !*** ./src/components/aboutBlurb.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_4132989182_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/4132989182.json */ "./public/static/d/4132989182.json");
var _public_static_d_4132989182_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/4132989182.json */ "./public/static/d/4132989182.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
const AboutBlurb=()=>{const data=_public_static_d_4132989182_json__WEBPACK_IMPORTED_MODULE_0__.data;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"about-blurb"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"inner-blurb"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"content"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,"The ability to create"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \u2018Content here, content here\u2019, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \u2018lorem ipsum\u2019 will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"btn-row"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"],{to:"/work"},"View Series"))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"images"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"top-right"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_2___default.a,{fluid:data.middle.childImageSharp.fluid})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"bottom-left"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_2___default.a,{fluid:data.left_bottom.childImageSharp.fluid}))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"black-box"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"black-box overlay"}));};/* harmony default export */ __webpack_exports__["default"] = (AboutBlurb);

/***/ }),

/***/ "./src/components/banner.js":
/*!**********************************!*\
  !*** ./src/components/banner.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_2214290884_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/2214290884.json */ "./public/static/d/2214290884.json");
var _public_static_d_2214290884_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/2214290884.json */ "./public/static/d/2214290884.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _floating_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./floating-card */ "./src/components/floating-card.js");
/* harmony import */ var _images_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/5.jpg */ "./src/images/5.jpg");
/* harmony import */ var _images_5_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_5_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/4.jpg */ "./src/images/4.jpg");
/* harmony import */ var _images_4_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_4_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/7.jpg */ "./src/images/7.jpg");
/* harmony import */ var _images_7_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_7_jpg__WEBPACK_IMPORTED_MODULE_7__);
const Banner=()=>{const data=_public_static_d_2214290884_json__WEBPACK_IMPORTED_MODULE_0__.data;Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(()=>{// let t1 = anime.timeline({
//   easing: 'easeOutExpo',
//   duration: 1500
// })
// t1.add({
//   targets: '.banner',
//   backgroundColor: 'rgb(255, 244, 223)',
// })
// .add({
//   targets: '.banner .main-text',
//   translateX: 250,
// })
});return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"banner"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"side-image left"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_floating_card__WEBPACK_IMPORTED_MODULE_4__["default"],{img:_images_4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,width:"208px",height:"208px"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"main-text"},"Oumayma Lahmer"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"main-image"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_floating_card__WEBPACK_IMPORTED_MODULE_4__["default"],{img:_images_5_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,width:"430px",height:"430px"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"side-image right"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_floating_card__WEBPACK_IMPORTED_MODULE_4__["default"],{img:_images_7_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,width:"208px",height:"208px"}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"scroll"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,"Scroll down"))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"fixed-misc"},"Visual Artist and Panda"));};/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./src/components/floating-card.js":
/*!*****************************************!*\
  !*** ./src/components/floating-card.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _styles_floating_card_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/floating-card.css */ "./src/styles/floating-card.css");
/* harmony import */ var _styles_floating_card_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_floating_card_css__WEBPACK_IMPORTED_MODULE_2__);
const calc=(x,y)=>[-(y-window.innerHeight/2)/20,(x-window.innerWidth/2)/20,1.1];const trans=(x,y,s)=>`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;function Card(props){const[spring_props,set]=Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])(()=>({xys:[0,0,1],config:{mass:5,tension:350,friction:40}}));return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"floating-card"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div,{className:"card",onMouseMove:({clientX:x,clientY:y})=>set({xys:calc(x,y)}),onMouseLeave:()=>set({xys:[0,0,1]}),style:{transform:spring_props.xys.interpolate(trans),backgroundImage:`url(${props.img})`,width:props.width,height:props.height}}));}/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_afropunk_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/afropunk.png */ "./src/images/afropunk.png");
/* harmony import */ var _images_afropunk_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_afropunk_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_creative_boom_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/creative-boom.png */ "./src/images/creative-boom.png");
/* harmony import */ var _images_creative_boom_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_creative_boom_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_vogue_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/vogue.png */ "./src/images/vogue.png");
/* harmony import */ var _images_vogue_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_vogue_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_wgsn_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/wgsn.png */ "./src/images/wgsn.png");
/* harmony import */ var _images_wgsn_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_wgsn_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/twitter.svg */ "./src/images/twitter.svg");
/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_twitter_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_instagram_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/instagram.svg */ "./src/images/instagram.svg");
/* harmony import */ var _images_instagram_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_instagram_svg__WEBPACK_IMPORTED_MODULE_6__);
//Featured Companies
// Socials
const featured=[{name:"CreativeBoom",image:_images_creative_boom_png__WEBPACK_IMPORTED_MODULE_2___default.a},{name:"Afropunk",image:_images_afropunk_png__WEBPACK_IMPORTED_MODULE_1___default.a},{name:"WGSN",image:_images_wgsn_png__WEBPACK_IMPORTED_MODULE_4___default.a},{name:"Vogue",image:_images_vogue_png__WEBPACK_IMPORTED_MODULE_3___default.a}];const Footer=()=>{return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"featured-companies"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,featured.map(({name,image})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:"name"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:image,alt:name})))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"footer"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"inner"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"\xA9 2020 Oumayma Lahmer"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"socials"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://media.tenor.com/images/63431877f96ac43be7b596bdaf68ebc2/tenor.gif"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:_images_twitter_svg__WEBPACK_IMPORTED_MODULE_5___default.a,alt:"Twitter"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://media1.giphy.com/media/bRJRe4SUFyp2w/source.gif"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:_images_instagram_svg__WEBPACK_IMPORTED_MODULE_6___default.a,alt:"Instagram"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"oumaymalahmer@panda.com"))));};/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");
// Hook
function useHover(){const[value,setValue]=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);const ref=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);const handleMouseOver=()=>setValue(true);const handleMouseOut=()=>setValue(false);Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(()=>{const node=ref.current;if(node){node.addEventListener('mouseover',handleMouseOver);node.addEventListener('mouseout',handleMouseOut);return()=>{node.removeEventListener('mouseover',handleMouseOver);node.removeEventListener('mouseout',handleMouseOut);};}},[ref.current]// Recall only if ref changes
);return[ref,value];}const Header=()=>{const[hoverRef,isHovered]=useHover();if(isHovered){Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_2__["default"])({targets:'.navigation',scale:1.2,duration:700,elasticity:300});}return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"inner-header"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"logo"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"],{to:"/home"},"PANDA")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navigation"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"],{to:"/about"},"About"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"],{to:"/work"},"Work"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"],{to:"/contact"},"Contact"))))));};/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/scroll-animation.js":
/*!********************************************!*\
  !*** ./src/components/scroll-animation.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _styles_scroll_animation_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/scroll-animation.scss */ "./src/styles/scroll-animation.scss");
/* harmony import */ var _styles_scroll_animation_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scroll_animation_scss__WEBPACK_IMPORTED_MODULE_3__);
// SVG tuto: https://medium.com/how-to-react/create-svg-drawing-animation-in-reactjs-using-animejs-9b124e711d5f
// https://codepen.io/NouamaneTazi/pen/oNXxWJz
// https://codesandbox.io/s/reactjs-animejs-4ilb6
// https://codesandbox.io/s/react-animejs-20buk
// https://codesandbox.io/s/react-svg-stroke-animation-ornament-x9dqo
class SubmitButton extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{componentDidMount(){this.basicTimeline=animejs__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({autoplay:true});this.basicTimeline.add({targets:".scroll-animation",duration:1,opacity:"1"});}render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"scroll-animation"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"HELLO"));}}/* harmony default export */ __webpack_exports__["default"] = (SubmitButton);

/***/ }),

/***/ "./src/components/submit-btn.js":
/*!**************************************!*\
  !*** ./src/components/submit-btn.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
// SVG tuto: https://medium.com/how-to-react/create-svg-drawing-animation-in-reactjs-using-animejs-9b124e711d5f
// https://codepen.io/NouamaneTazi/pen/oNXxWJz
// https://codesandbox.io/s/reactjs-animejs-4ilb6
// https://codesandbox.io/s/react-animejs-20buk
// https://codesandbox.io/s/react-svg-stroke-animation-ornament-x9dqo
class SubmitButton extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{constructor(...args){super(...args);this.handleClick=()=>{if(!this.flag){this.basicTimeline.add({targets:".text",duration:1,opacity:"0"}).add({targets:".button",duration:1300,height:10,width:300,backgroundColor:"#6e462b",//btn-color
border:"0",borderRadius:100}).add({targets:".progress-bar",translateX:'-50%',translateY:'-50%',duration:1}).add({targets:".progress-bar",duration:2000,width:300,easing:"linear"}).add({targets:".button",width:0,duration:1}).add({targets:".progress-bar",width:80,height:80,delay:500,duration:750,borderRadius:80,backgroundColor:"#71DFBE"//lightblue
}).add({targets:".st0",duration:1,opacity:1}).add({targets:".st0",strokeDashoffset:[animejs__WEBPACK_IMPORTED_MODULE_1__["default"].setDashoffset,0],duration:200,easing:"easeInOutSine"}).add({targets:".st0",duration:1,opacity:0,duration:750,easing:"easeInCirc",delay:1000}).add({targets:".progress-bar",scale:25,duration:2000,backgroundColor:'rgb(255, 244, 223)',easing:"easeInCubic"}).add({complete:function(anim){Object(gatsby__WEBPACK_IMPORTED_MODULE_2__["navigate"])("/home");}});}this.flag=true;};}componentDidMount(){this.basicTimeline=animejs__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({autoplay:true});}render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"submit-btn",onClick:this.handleClick},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"button"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text"},"Enter")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"progress-bar"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 25 30",style:{"enableBackground":"new 0 0 25 30"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{className:"check st0",ref:path=>this.pathRef=path,d:"M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"})));}}/* harmony default export */ __webpack_exports__["default"] = (SubmitButton);

/***/ }),

/***/ "./src/components/swiping-cards.js":
/*!*****************************************!*\
  !*** ./src/components/swiping-cards.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use-gesture */ "./node_modules/react-use-gesture/dist/react-use-gesture.esm.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _styles_swiping_cards_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/swiping-cards.scss */ "./src/styles/swiping-cards.scss");
/* harmony import */ var _styles_swiping_cards_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_swiping_cards_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/2.jpg */ "./src/images/2.jpg");
/* harmony import */ var _images_2_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_2_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/3.jpg */ "./src/images/3.jpg");
/* harmony import */ var _images_3_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_3_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_4_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/4.jpg */ "./src/images/4.jpg");
/* harmony import */ var _images_4_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_4_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_5_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/5.jpg */ "./src/images/5.jpg");
/* harmony import */ var _images_5_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_5_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_7_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/7.jpg */ "./src/images/7.jpg");
/* harmony import */ var _images_7_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_7_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_8_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/8.jpg */ "./src/images/8.jpg");
/* harmony import */ var _images_8_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_8_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_9_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/9.jpg */ "./src/images/9.jpg");
/* harmony import */ var _images_9_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_9_jpg__WEBPACK_IMPORTED_MODULE_11__);
// https://www.gatsbyjs.org/docs/importing-assets-into-files/
const cards=[_images_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,_images_3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,_images_4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,_images_5_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,_images_7_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,_images_8_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,_images_9_jpg__WEBPACK_IMPORTED_MODULE_11___default.a];// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to=i=>({x:0,y:i*-4,scale:1,rot:-10+Math.random()*20,delay:i*100});const from=i=>({x:0,rot:0,scale:1.5,y:-1000});// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans=(r,s)=>`perspective(1500px) rotateX(30deg) rotateY(${r/10}deg) rotateZ(${r}deg) scale(${s})`;function Deck(){const[gone]=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(()=>new Set());// The set flags all the cards that are flicked out
const[props,set]=Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSprings"])(cards.length,i=>({...to(i),from:from(i)}));// Create a bunch of springs using the helpers above
// Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
const bind=Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_2__["useDrag"])(({args:[index],down,movement:[mx],distance,direction:[xDir],velocity})=>{const trigger=velocity>0.2;// If you flick hard enough it should trigger the card to fly out
const dir=xDir<0?-1:1;// Direction should either point left or right
if(!down&&trigger)gone.add(index);// If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
set(i=>{if(index!==i)return;// We're only interested in changing spring-data for the current spring
const isGone=gone.has(index);const x=isGone?(200+window.innerWidth)*dir:down?mx:0;// When a card is gone it flys out left or right, otherwise goes back to zero
const rot=mx/100+(isGone?dir*10*velocity:0);// How much the card tilts, flicking it harder makes it rotate faster
const scale=down?1.1:1;// Active cards lift up a bit
return{x,rot,scale,delay:undefined,config:{friction:50,tension:down?800:isGone?200:500}};});if(!down&&gone.size===cards.length)setTimeout(()=>gone.clear()||set(i=>to(i)),600);});// Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"swiping-cards"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"images"},props.map(({x,y,rot,scale},i)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div,{key:i,style:{x,y}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div,Object.assign({},bind(i),{style:{transform:Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["to"])([rot,scale],trans),backgroundImage:`url(${cards[i]})`}}))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"The ability to create"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \u2018Content here, content here\u2019, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \u2018lorem ipsum\u2019 will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"btn-row"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"],{to:"/work"},"View Series")))));}/* harmony default export */ __webpack_exports__["default"] = (Deck);

/***/ }),

/***/ "./src/components/videoSection.js":
/*!****************************************!*\
  !*** ./src/components/videoSection.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const VideoSection=()=>{return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"video-section"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"video-player"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video",{poster:"https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/fr/e15/s1080x1080/53006846_539912093081814_3463245754746190054_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=106&oh=cda110261b8679cd3868e39c2171c671&oe=5DE56700",controls:true,type:"video/mp4",src:"https://scontent-dfw5-2.cdninstagram.com/v/t50.2886-16/53730396_2071478279602567_7391671117649281024_n.mp4?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=107&oe=5DE5325D&oh=28646880a3188b07a14e6a88d281124a"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"video-content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"title"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Let\u2019s Talk About It Now")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"I\u2019m so happy to present the 1st trailer of the film. \u201CLet\u2019s Talk About It Now\u201D is a film that focuses on Mental health in the African community, and the black race as a whole, as this is a topic we tend to shy away from in our community . With this film, we hope to reduce/eradicate the stigma surrounding Mental Health In our community, making it a topic that is freely discussed as opposed to leaving it on the back burner.")))));};/* harmony default export */ __webpack_exports__["default"] = (VideoSection);

/***/ }),

/***/ "./src/images/2.jpg":
/*!**************************!*\
  !*** ./src/images/2.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/2-1a3ddc5395feb31c4b4bb767ec3e1e16.jpg";

/***/ }),

/***/ "./src/images/3.jpg":
/*!**************************!*\
  !*** ./src/images/3.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/3-d825bf98bf4ec426725b6d37a01b2f30.jpg";

/***/ }),

/***/ "./src/images/4.jpg":
/*!**************************!*\
  !*** ./src/images/4.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/4-a25457be609795ae64c531e0385ee08d.jpg";

/***/ }),

/***/ "./src/images/5.jpg":
/*!**************************!*\
  !*** ./src/images/5.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/5-1bd5e7703c8ddc6bae7ffe54a509436b.jpg";

/***/ }),

/***/ "./src/images/7.jpg":
/*!**************************!*\
  !*** ./src/images/7.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/7-6266137b5edb7b8ca748ea94a18376e1.jpg";

/***/ }),

/***/ "./src/images/8.jpg":
/*!**************************!*\
  !*** ./src/images/8.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/8-18101cfbbcb9b6fe27cf3ac2cc4d291a.jpg";

/***/ }),

/***/ "./src/images/9.jpg":
/*!**************************!*\
  !*** ./src/images/9.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/9-1ccb7e6613a03d95efd2bbcb53491ff0.jpg";

/***/ }),

/***/ "./src/images/afropunk.png":
/*!*********************************!*\
  !*** ./src/images/afropunk.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAABQCAYAAACNr2npAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAABOKADAAQAAAABAAAAUAAAAABoj8AEAAASlklEQVR4Ae2dB9AdVRXHvyBECJAgXQhlCAECRLpIDzVADF0pDr0KUgZBHJoU6S1xqBZEEZHiANJEA0RAepESegg1MLTQWwj4+ydvyea9t3vP7tt97Ttn5mT33fO/5577f3fP3r1735eeHhdnwBlwBpwBZ8AZcAacAWfAGXAGnAFnwBlwBpwBZ8AZcAacAWfAGXAGnAFnwBlwBpwBZ8AZcAacAWfAGXAGnAFnwBlwBpwBZ8AZcAacAWfAGXAGnAFnwBlwBpwBZ8AZcAacAWfAGXAGnAFnwBlwBpwBZ8AZcAacAWfAGXAGnAFnwBlwBpyBVjDQp1mNfv311+vQVr9Aew/26dPnnQCmxozvlSicv8YwvWAKfseAm4miDVEdi5DH8TtRjvC9MYc0vy+BfRrckuAGqY5RnqPeC0ZsKoy2vwVA/a/3vX9IO3cH4rsLzMepjdQx4nMtiueoY4oXjeHDrOja8cLA+RTstxOTjqlCDAMBLJcK6um5D1/vBTDfmPGpeNf7pqD+ySR83l9tou7MlOm7SJNMfBt9fkY8/6nXKPU3obze2IjgE6j7bPQh7Yiv+bCvnIaJ2cx+Y3Xa65QOv42G5IA8UeP0moDjD+UXzGzo5wFsFvOuUbwGv6MrMRyfpQGwn6Hfj9rJe8RHX/RaNEkeNcT3AJW/kzUG6oxLajRW3p/zZWOfraenA1TiThUwexocKhGbBX+LGHzeWc8h9QYY6p5er25SmdHnKyn1JwdiOiWpbrwcH7OjzwZ8ReaPOAndeOLuM52nzTgyOUoD04FB2OdJw1RsWe7eBnddAfk2vbgTDjVLzSXUnYWKV6Bb5nIwvdKqnI7FX2g2Nr1G+WeH08RZxNSUsVxwd74O+Ducfi0SwLSVufI9nExQg42BjWBWOM6IzQxr1qDYzxjZakZcb4P1pcP3MniG5Oz436m3Vc661dW+R8F9bZZQDiami6oDbfPPHxOfNCSHhQBtZt+beA4yxnRB0uOysX4Q1qwEt00wkmmAJbhwFjRiextMSe5++Fk2S8fB3wx+ZJY6BqxieKTNktwexKNZakcIF/aXBLq9Idj96ZfWbdteiFOPmlOXYgzBTgRzoAHXEKRZCW5uY5Ra4Gz0McrYVEfC9Gh4DwNpqCV6cDeB29SCzYHRTO4h2mjWGAqFqDi2I57L2yim1JhJcvp+JqSCenr0MuKQAKblZjhXnHpS0JJKSCYBWI7+B18OhRyF7KUPTjrejyDmDAUSs28WO/fTWgb6U6TEkvriAbsunrK5XJE2nqSt2WrDbEmJxvMO6EXEFHzx0JIIaxvV43VI9qI/pptayFGJ9qvwvbTB/2QwPyG5md9WG3wmQkpPcLS8J5plsC2TGK0bIgb00kAvHmpmZ5TNjOqxtOzkFsWiQf0wbVpn6VG9Mo974Xw0MYmnthRi64f250K/ngCnvsFOCVSzouNT7C010Y/9CWALYxBn0meNz6ZIMxLcgRl7sjiEtcuMIGPoTYVrTe5GXShVre7C55rEV4Up+qNuSscW7bRBf9pyNKJBH2VWV/I9t9LAMRxDb1RH8F0PLjOgPL6JSeuxZ6KWXPIvcEflaSdvHT03lyaViy/rl6K71dboX0sI7At86u5u+TIszd9lAVVhruFz2sZdPc4fh1q21agf1X0RfxbRBXUxemcFrHURSTw+Ja7DUcsM3Nqu2kiS1zDslmSslGtsbBnARGZL3BG2FceduUaO1iyOozbfDksJQje036PrpWCaaiJmzdofRC0TkjfB7UZfQ4m80D6UmuCIdEDOaHelXuEJDnK1qHlpzpgKqUYM/8ORNFEYOFdgnIDOnghqzKBBdjKxHF3tpjo+YtEAvhKtTqTVVRv+TNvv4+RPaY6IR9/freh6qF5Kdbr8mg5o1n0qGurTmvR/IXia2OpOE4duHn9DLclN1932xP16s+Mue9Bm2hke6/xSsfNed8pAeItOz4Va9knl4UfrIDXJrZ4jcH+nfHNUSbHlQjxfoesTSJ7Zc8vjrxOAZnFL06dbsP27jj1epAmJcO0g+xLExsZADqZ/Y43YQmFlJ7i9c0a7QM56XVONAaF9UlN/YlZCp27M6FPJRHfhdpL72imYBmPRMoDkxGmH1H+HkBDnS0WUbKR9zTRHG5vR2LnQiC0cVlqCgwQ9Xm2YM2L9ZjRv3ZxNejVnoGUM7MZ4X53W70ZvD0ShR0P9qkXHVsmKNKzZZEh0g96Um3XLbo6lJTg6tiTayJfw0xB7bncGuoQBXSe/JBF8xfEQQ5+WAJO6D9Lgo2zIJzSwGn0qa5nFFH+ZCa7RjYmbcJfqa+qFg5yBzmdgC8a7/pjBE6jeqIbkD+BnCYFaZNd6rd4OP9Oi9r9ptswE1+geJG070K79XicM3D7ornR83l7XeUOH4WZ+YDsboJ0E0bV4fGUWtzvnWoNNkyEYh6UBWmi7jn6c08L2v2m6lATHANSUu9EEp9lbr3ubquRGv3dEL0Et6xzAeo/Az0L09kW0G19EDad/K5McJtA/yyzubPDtNot7iti3R9tCyrqAtLtZG1YblT1xoIXXQoTBoFmhXsVnGRTvMOB+WEgAOCGGvTnskeJP+4pWSLF3rQluFqdzlwc6qB/5i6NuFE0MLkBXR7U1R/sCZ0WTZHkM2vR8dRKgyeWf0572u2lDfVtIWQluZUPv9Jyu2Uqa7MKg3wfCinoLoxmrBk+Wtb030gLMYRtInR/kqFevyrsUts1gqhdgxrJ+4IviRk1Pyth+O8BXY8wvxph/iaNu7hsEgjoWe7skuMOI+/FAvE01l/KISg/WMfTiDwaMErASgkstA+9QtFQ73S1rQ2xpyfpwc1tLI8jXuG76N5HcdNwK1dvINBkKdvc0QBNtvyKWtBlnE0OZ1lRZCW6YoSengfnUgFvMgOltEM3ctPtdSc6llgElt7G1xR1TsjSRrkAftI/sWkPUh1UwrZ7N66XYLwzxNg1SeIIjgyshDQr04HW+vOfBXBTAyaw1BpfpDDzN6RLw58ltOifRmdaANuzw5Ka+aC3uH1xLWivWrxxCs7hlwR5IvzVhsOyjA1aaHEosC5fmPaPjwhMc7a9viOGZCuYMjlqLS5PtIUzTdZeenscgYQ0GshafXWZk4AM+bgc3nfhYOmNPpn1ahMMq9Gcix4vrAarKps6cwOsnVO9V2Zr5cQCNjWpmg2ltlZHgLOtvUwdh5csL/d5SdwNfh5v2RxGHwVkrB2/aWGqlTcltJ7i5oZVBlND2chWfWs75KOB/IBOBgyuYEwLYss0jiWWZshux+C8jwVneoF4TC+7t2HnS6dAkQy8pH0c/ldwm9ZL+ZummLvwd4ebGLJU6CUvfXiXeswwxH6unHeQcsOMN+LIg2o4V2u5TVtsz+C00wUGuXvNrb06aaP3tiRjgyth50qllVphUt7pcM6AsWvTj4Gex9qdUB5fweWs46w0zN/GR5bvRy5at4OamBN66qfg8OhN6iTA3mIMqnR7FMbT8U4FmPnxlqLEC+cAy2TG4yg8pNMERxnA0tLfu3qpw9cWFZJMQwGLnQvgUXQD9TgYtdKpNu6dEbROz1iAtsqkF1OkYeHkm4sZ4nAfcrZ3eb0v89PMtcJY3lKNILHOAPxf8UxbfOTC3GOpo3fw/xBLKBwZX+SFFJ7htDKFo86J29OvHxfrSHtFHlaXIimDnS7F3quloAg+9IVPfDujUDnrchTLwF6M3/VpGcua0Q7H/kjyfxeNJBq+zg9nJgCsNUnSCW9YQaXTH1c+w5q1o6C2p4lzT4LujIAwUPZI9aAh6aRL8RgacQ7qYAcaLtgbtZ+jiqYyXhcApIZb1ywK9rdX4TRNd178llgXSQGXaik5wgwPBvon9UTqs3xJuFsBWm9eqLuiSz7rbfmnoi24ILs6AZRbXF5r2IiFO5nhCGZThW09f0UwxrQm9cDgsDVCmrbAER9IaRqBzBoIdAzFaoNRG4FkC2GrzGtUF3fAZPjTdf8jQF/23cQMMOId0MQOMl4/p3iGGLh7JeNGm++vQJw34PBC9ILS82dfm3yF5Gmi0TmEJjkD2NQQztoIJvWmt52pVSOpXz9AFZVoQDoluHtEbshDW7V3MAElOj4evBrqomdPPwGoWd2gAm8tcSbbbUTn0qKo8c1yuRhqsVGSCW9cQywMVzEgDthoyKwVd+TaRgaLHjpeqO1zn8w51yvIUafN0FunGFzz1+q8ZTxaZKwu4YOxJ+Au9nDuQScF3wY1Bo18PFRxGz1gcjjM4/TGxrG/AFQopMsH1D0Sm/WRaf1ObIwLYJHPeekn+2qncsrai3xx+r4CgL8OPaesNOC0nPIfOXEC77e5CvAyzBFnh5T4LtgwMN8UL8Ts+4FuzuBPBaoa1VQCby4xvLTltjn5hcHAivIVeKBrc2CGFJDiCXpAm5wg0ewVk6I6zHJp3LWnFQBudbB5lDP48Iy4Eu4XvbXgaCLvWTZ5He0Nyi6i4nX5vEH2od8S+KOVPoLPVszex7BRDW7sSr2aamsG9YcBnhnBdv0al2wwV1wKzswFXGKSQBEc0RxgiurqCWdWATYIMTjJ0ejmD5G36cImhH0MNGCvkBgb/pxW9X5U4PyYq4+OjVkddhlPyj3i5V33j88+jMj4q6WvJpNVyCQEo0aaJbk4XViYXGjuazZUhP8bpRwbHxxgwhUEaTnB86Zpy7mWISINC8g56aoKGLqg5aW9tOelS+b2hXwPgIG3RWDcScWwRDX5dqFI9zkjiZbNMKzL9e74J1TrQP2laf07IInEOGuHlSxo72NJgHgxJS4+HZxvqalO9fsGjm+hjBnxmCL71RzP02BySJYnljBCobewE2x8NyScANGhSBcw+IUfYf1fthLJrAvVCf7Gk2mXmz7T/eSAGvflKFerPhD4U8COzZhfRhVfjE9vC6MtoFpl6c6HC8Vkqgf0CXaUmiFgB9nEGn6E13JjHfKfEMD/6hiGWOOQRtUbBEfFCw/nHYNZNihSbblQhCe59xMHM6MMhR9jHVvoxT0pMkwN+Uh+JqasJyCsBHzK/jwbzQVKcWcobnsHRWCJhsUAuJ8PrbhaSqT/jCoASB02gXtubK3fkkwyBasa1VBIOP69hWwcdn4QpqPwD/GxGew8V5K9UN8T5Jg2sjFreWDcSy3tU3ob27mjEiaUubei6OtmAXYOksiB46+ze4HJGCL41kbDEopvZlTPWLudTEQlua0NolkcvudGGxLcC/uYP2DvdfCsd0GbOkJyZBmCw6SLeCC0ryUUXseLtGIGXiQS7NvpCSUGLlx/Rzi0l+a/n9loKQ2txfcHcSJIr4pqvF0NUpms9tNQk7EhiybpdKWrDfCyis7sbWjPtwWFQaE3hqoC/uSBm0QCmY81w8D7BH2nowCbwMDANh68XsW+I6likaOamv57bUcktIoC4X+V8PbToJCdetsX/mKitZhxp70va2cfQlmavixtwuSHEMpnKBxgc6BH1Osbwt+JYPs+BDkEXR/vEbXnOG0pwBKDZ1PKBhqdg1xdvlesMwNIWbg1tNwNyqbGRESEcA04zudXR0Mw45Cqyf8bJSPx2ZHKLOkH8SnJroK9HZQ0e9QJDj+u3Negnb/V7qTjeUPkyA6YhCBz8FweW8aG125WixsgnSsB6hH4YVV/0p59mSICUZZKGEhwtDTK0dhUd1h3GKpbZ3p5FZHdrQM3Gwdck2rTMAk6zDAD8ae1pMJrle0jq9gj83ZFk7KTyCi+6QX9SQNxD8Xd3AX5yuaBt7TEdbqg80IApArKH0cnNsTF8E3X0aN8P1eRJs9Lt0NyiaWIjMoXKowIOzg/Yq80vU3A62rfaEPusXdNKzmpfcj36ok4S5POE8iKLf4OzND6zJoVt8XccGpqma8BqlpYqXAB6czUvoKPRenFOrDi4h2PSd3oxfh6v4LIc/gxYm8HTpBnfUU379OddeFkMw1E1xmkFemEjeQCtx4sSy2j8BL8DOYmJ+lvPXwxi+glUHD+BD1qbrff9Rrj3opM6x9GUpc2YNDMzCXzoLf5BgJcwVFgGrPbQLYCKE82GddNRDlgbvQJ1cQacAWegMxkgwfVDtf3pj+hwdBCqrTaW9bzO7LRH7Qw4A72HAZLZvugUdDz6AfoYOncjDIQefxrx7XWdAWfAGcjEAAltNSqsiWodWr9fb8nSRaagHewMOAPOgDPgDDgDzoAz4Aw4A86AM+AMOAPOgDPgDDgDzoAz4Aw4A86AM+AMOAPOgDPgDDgDzoAz4Aw4A86AM+AMOAPOgDPgDDgDzoAz4Aw4A86AM+AMOAPOgDPgDDgDzoAz4Aw4A86AM+AMOAPOgDPgDDgDzoAz4Aw4A86AM+AMOAPOgDNQw8D/ATYATOq+UH6BAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/images/creative-boom.png":
/*!**************************************!*\
  !*** ./src/images/creative-boom.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAABACAYAAADfyA84AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAhqADAAQAAAABAAAAQAAAAAAlZ3meAAAHVklEQVR4Ae2dz3HbRhTGLZ8zI3YQdBB0EKQCqwMhFUTH5CR2EKUCsQMxFYgdiD7kDKQCMcfMZEb5ffJCQ9PAvl0QICCAb+Z5wX3/vvftYgGZ1vjiQ8/y8vKyoMQnNHGlMjfqs1SyRXevVx8+bNxYMv55cXFRzbvpaQxj5+WiD5ppOiWvNsMVqutjZEvwGtUm0fW7lVnyojsAvUULtC8pSHyLLt7L7hBWh7lg7EsKEt+i4+FFYByoZ8ZTiWrdjnlzgG++vND8NVqgQ0lB4euxbRBhQgt0KCkofHpeKJqiT+hYRFiSoTcIGCbDS/TLJ81nLMADOp7n2ZcdsWP4aagX1Knx8vELp2F/0nyO5yM6tk2hBoRJJ0euD6eUKfISfGLQ/D1k5y0J/4e4Nbp1qjQld3epC3KnDFpYSYYm6BV6ibaRFbl/bhMYGzNrXmj+AY2VkoA7NIslu/JXrMuhXLGix12vAqD58kLz95ErssN/2fWKKCeq3DFy1zWOKh8g7mOA4DsdXmgmj2j+tXH8q0dCxWFno3KjsRsk7wyASwSG+fJC8xkaKiWOadcL0JRPtVDVDJXOsFFwvrzQvIh/DmR9i19vp4Rnc+j0UO0QUS9JU67QeXLMmxcIeAphG59VKKl9+QlDINanYzFQZ7680HweSPTgm6JaaPCGbo68iokdZ80Lzet4LlBLtrHE9u0P4JDHStEGB7nnzQsELK0dgb0UUW0I7jNGmBw2Bq8sY3GQbb680LyItV44d/h09oYfu0CWv7ChwugT9Ri8seWLzo6X/e9KbiDeIuxuqC+prE0hu8N2Z/iqR/UaKvJVjE+mywt3RYH6RHeiRZCPvJPYhBG1To3gdw1yFahPpssLXae+zp1teZKV7aAIeEPeCVKr1Ox5CSCytEgcm52e9JLsEz0ivEKwtcFKb4IRGukpiJfqHeOT0cPasI/RbGG+DgA9X17YQXomW5IFkDgqFxrKrKawL5pAY0sC4qfLC83nBgG7JvLGPk9f1kto3tTD3HnRoyRpIsfNW0eyET6o2cKeeND5bAqzcntSD26ysCfVO4YP6dZnHLmtPALfwog9JreRuneziV0bIzNgvOeNsTF68/WeGrFWbiN8ULOFPQs5MQbt4Fx8GAa0Mb43SpeGfczmnQHu0mO3eLFye1IPbrKwX17oJxIfTL5/CP4VA1+eoWxt+2sbN1SfsXWt/s6PklhGZ+KvjfG3r1d2VuKzj9kGdusF8rMH/6x50cYoPeTIlBj21mZtOvQX9BF9QivR9SMq2zH1FwY437O2NGKPweVNrZ5d74+Mw/BC4Q3qk8zbRQsjxdT4va/ogU2+SWwpYrKDPIcfN005cZw1LzoxGslxpFnHcRO3tfMQfoVB/2I7r3Won5Sv7hzFxkhmOG889q3HJtOkeQl5+eyMABY2h9AHdIHGimIeXI7Q2CTUscZvVzO3PzVtXkQ06pPnfTbaXlPAquPDcGi7CsFB0PNh4MHnvCkPfhbeafMCAb1/7U6NBLUWCZdgUa6kaVE1jz0LyKZTqFaInTUvH/n7Kx2Zvh/bRFzQHVrL8JfJJUPjInjimkzKtWwyunkL82fXe22aMy/Qwt2xNO6uopa9gEnyJkbuY8xJEwSSFkbim6bYap742fJSvXyuKzIaRi3ussFmTVt3rhXvs9fmdlgTXyC2jWGX+cwLZJaoT/RcXwSQ+ZULMRtf0iNtm6+K8UEYUet9pjyMa/pMrlnyUp0Y4mXVRI6b16a4MXzqzEndZEdzlzV5hNHawKuauKYpy3favLg7zfo3kroT0yYG6+bx71X2a1IoDSimHq2N85ZWvujseHk7Mdxb+N0bI/UXIvQhhtj6NN3POkyPAZn164S7AL9XlzMvjikItp6puLw8hRIbmE8528i2wkHwU0CCsvKPGcmrU2NWvLydGHtELfeumy5TiLpvMh7Mlwefu/z4euc7LGlA4mWAzzcu7tQIiZ02LxC9RUPE3BwkuQlJ1NLnN+LuA2PfTpdvVj5wgjrz5gUCEnQXSLiO8EUTty5XYKpot78CI9RL0oQxdF450HnzAgEZGioFjo1HObZVaKIIv38jfBuxhW6Kyo+aZ14gIY8gXz/K3qLfnB7MJWjonYZrp5JXi9rVCLozL5Cwilym1w1yuAjkuIrM04X73SGOrj4D7swLJKxbrFJBzO/oj9VicB1zp+F+lKyqun2NoJssL8G/MwIJIvq6Jck74tZoif6H/op+h/Ylf/Aj5k1fyffznnmBDUg45R1PuVaS7y/cKa5BOTlegk+MimBIyLjW3V/3BVblNsSo/ywn46TYDlH8zAusQ0KKbtGxiLAkQ2yI/ZpgOPMiQiBCR2iJDiWqne8vzhiuhQk98wIJS3SHnkpUazmGTeDDIIzovHmBgIUjos87RblF9sK3IGOynXnZWw3ISN0CbhmPFeW4QdO9Eu/yUj2g2tij5yX6p5LYFYEE3d1XaOJiMzdq/gd3rV9f2LnrjRtLxrX7yttNTWcYOy//AwVNGzrB2mbVAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/images/instagram.svg":
/*!**********************************!*\
  !*** ./src/images/instagram.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4NCiAgPGcgaWQ9Ikdyb3VwXzEiIGRhdGEtbmFtZT0iR3JvdXAgMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk3MyAtMzg1MCkiPg0KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTMiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEzIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHJ4PSI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NzMgMzg1MCkiLz4NCiAgICA8cGF0aCBpZD0iUGF0aF8zIiBkYXRhLW5hbWU9IlBhdGggMyIgZD0iTTE2LDExLjM3QTQsNCwwLDEsMSwxMi42Myw4LDQsNCwwLDAsMSwxNiwxMS4zN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3MSAzODQ4KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjJmNGY1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPg0KICAgIDxwYXRoIGlkPSJQYXRoXzQiIGRhdGEtbmFtZT0iUGF0aCA0IiBkPSJNMCwwSC4wMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTg4LjUgMzg1NC41KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjJmNGY1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPg0KICA8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./src/images/twitter.svg":
/*!********************************!*\
  !*** ./src/images/twitter.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNy45NDQiIHZpZXdCb3g9IjAgMCAyMiAxNy45NDQiPg0KICA8cGF0aCBpZD0idHdpdHRlciIgZD0iTTIzLDNhMTAuOSwxMC45LDAsMCwxLTMuMTQsMS41Myw0LjQ4LDQuNDgsMCwwLDAtNy44NiwzdjFBMTAuNjYsMTAuNjYsMCwwLDEsMyw0cy00LDksNSwxM2ExMS42NCwxMS42NCwwLDAsMS03LDJjOSw1LDIwLDAsMjAtMTEuNWE0LjUsNC41LDAsMCwwLS4wOC0uODNBNy43Miw3LjcyLDAsMCwwLDIzLDNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMi45OSkiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/images/vogue.png":
/*!******************************!*\
  !*** ./src/images/vogue.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAAA4CAYAAACWj5YVAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAA3KADAAQAAAABAAAAOAAAAACU/vFAAAAUzklEQVR4Ae2dC9RWVZnH+SwRlasEkndQYHCBKOSImogXNMq0vMwy15rImsyWmdM0LW1stDJbMdOMK7NialqGqxS1m5fyitwSIU3EC3gBAQO5CHJTQEy++f2/75xv9ru/ffY+15dXeZ+1/p59nufZz/Ocffazb+f9sKXLbkCtra0tPGbfCEdyPRT0Bx8Ae4JN4A2wAjwXXV9raWkRr2Eoeg7FrfhHg8FAz6Xn6AreBq+AF8GjYBVYy3Ns5+okbL4PwXmgH3o/cio1maW1QAsNfkNp1rp02cZL+7ci9ohnLPU/mdLGNfjbkqQbddDhyC8Ax4L1YCZ4FqhjbgY7wV5AnfYIcDwYBbaBaeAP+JDuLiWe5XAC+EcwDMwD08EiYutIJnT6wBsERoIzorKSbza4H93lXDsI/Z7cTAT/Dr6FvCbhkP89/DOBSRq85MdH7yDUYKVrTGrnh/Dx55iR5koMp6J3okO3GzzZ1yDjI8XbG+jqI8W7w1BopfxmxJOvHkDtFbKDipNegHtLFx6olwPHwwvRchROAmZ9BVSIsNfVsin7s8AnHPzEh490b+S6EbwFPgP2DgWHzh5gAJgCdoAV4PJQvSrl+P8UeAVsAHo3e4T8oaN2HAsWAz3Ha+AmcGaEa7jGsrcpX2bbhCcbPSwczH2IXkBhNLDrahbORNjYy2FHdq8E5yXITL8HorMehEhtbNZTuTvYN7r25NoXnA6+A54FWegBlPdLfHiE8wLW9BI/n2igJAE+DgFLgUaYIKGnBvocUAfdCZ4BmrUyEXX2BF8H64BoDhgPMneaTI4jZfxo9TEM/BK8A1aCMVltUacPmAw2gSRyJpzLFwY0AIZoEQpDXfXL4mH/CjAhZA8dJU6ahDsnZMuUY1PvZzi4FswFbwIfBRPuX6itDuuju8wgqijj/FLwgzS20TsM/BZsASIly2kgcSb02VU98CWwGagtVoPvAi1BKyV8nAzmA9FWkHtwo2438FWQ1CmaCdfaminhzJdPu2pFdDFYCpIomHBjqLkqqXbE38Y1tJ43Y8tUxrZmmd8AHXR4STpgAYjpbxQu9VZKIcSGOuutsdHoOpvr/imqZ1bBrpJ8LFCSxTSDgg5HChE2rgdqF5uyJJyWVlra+ug9P8O5XgQN0hto+6MViU3i9/PtBbTJW+gybPC0mfxX477s4mEY3MpG2xsHD6KDlqngKBDTHRT+J77Je8W3DiW+CdYZNk6gfAt+S102YU8nhueCXwNzvzmFOHTgU5S+gQG1yd8KGNJhgg5AmmS1AO9oI6wLwe+BeWAkzT3BHokJR+UNKDwizQBdTkfpFdDJKx5CxUW+yvg+Hbk66AhDbw3lSTyDOkdhwo5O+r5rGFK7ye/t+B9g8IsWR2Pgh0AnpjHpWe6Mb4pco/b4HjYeL2KnWTe5BWjjV5HqAOopl1ZiwkXKetGhY1cdZuRe/7qCMnjHUJ5r3NcU6exaan4f9DMESrKHwUsGr4ziTzGy2DCkthsJbiOOwstLbAzD1t3gg8Dcc97AS9SRdSmErb9i6L+APQKXYj8yovhDfatMfw1lizZeTUBaqay1Aws1ijrtDLuS4/5sOoy5BHKoZGNhT7Fp1nrZVRO5Ev2/gbmMlKoGiPt46K26KZG0tNQhkT1ranl5dRE/PMuh1P8ZsBN3G7ybi9hOqKvELmXWTLCvQ6XKD5YSfDcEm/73CoFMAuqPHeRNOCqpc2kJEiKN9PowWybpo6uCVeA1RAfVCKqTyzOAORtIT4lxvwplEm2hGUEfkDdbdrty/0Viusjip7qlnvZtl4Ixjgrz8dtplHToZWJhU+36BaA9RxWkfmW/lyr8NLrNewhQ25EO8iZcpDWPq3cfhVwj9KhIv6zLVzD0RzpHzQY9SjZN1+cD10t9kDrrywrCsvMM9y7b74f/v8R2nKWf5lbLZiWcEs+myvZatJEGjptATfvaATTvC7WAtiDTTQtpEk4zxgNmJUdZJzDnOfi5WHTc/lQcDx50GOgN7wrQ3SET65cJ/DLYmm2XJhjSkvobxL5fgrwTG10ti28GeiabNKMqwaukuzGuTX6TKmgBBrVWzN5umg4mHJX04mcBjYg++ggdyN6D+PR9spMR/h7f6xxKF8I7CbhmNy2VSl9OxjEQj47T1RZJdBoCxZ6W/gnF4QnKW+CvTJCVxX4WQ1UndVmxvlvtzCHwNXHwwYSLFLWsDI2E2stoGViISFrNluq4k21DyAbCu8bmG/dPkRRvGfdVFB/zGNUsp58cuZaHNdXQOQiGBo8k2oSg40UlKRXh01Y6lLmniI1mXX8L0MZasuubcBulSjgqKdmmRXV8l4l0JNfyyFfHlmmW1AnXE7aA+6+BAQ5+zNKIXTU9GXBwIvJzAzoSHw/sE1azmmY41wxv6pRRvqsMI00b3ha4N5amSrhIeQpXLal81AehZqcidAiVV0QjQ4cdEnkINxM6GO7C8252eVzi0qGJb6mnA5RvE2+3gNdPI/fpvIF8Q8BGYXE0mD5S2NBuZoD32wtoD56GNHm0rbyyJJwq+ZZTcqxlZdFf1GuGcO0rxsL3zW7aa74M6kHen5oRwGFgHHASL+oIBKGBSXtm/T1WPahjyVMPZ+8RH+fzHPoGm4aUbMulmDrhGAl14vJDVfJQCzIFoVPGvPRhKi4wK9NBta8bB7TUTCLtRyqfESLnNd9WHAEpTg08Se17OXLt93y0Jmpzn05ZsvvKMrQb2Rme4Vk1GbStipI6RJKtWQiWJgkj/jCuvr1JYnU66IcQKrmWWUr7cq/TPyV0EmkJVq8ZYUVSEBFfcY4C+9l6PKOS8SKb77hf7eBVxZKv31Rl/L1ml3eo93t6hufaiW7bDxiyJpx+mTAz4Eh7mM8HdJLEExHoc4B90ngM/AOSKkV8JVu9Ek6HSCHSwNMp4eCNAB8IVUautq4L0d47QT0TvC7PVaGTQdgemMG+ZrhFYEemhIsSYToVtXzz0VmMAgf7FGwZ+jrd/DhwHVN/An4o1h3oCPWg11M42R+dwx16ox08F2u9i9nkNUQLfIwogp9+4kjJm3fAA2BDqBPHdczrbG5CHU6z3JfNSinKOiZ/jKBWOXRPcfBs1nYYoYHArpP3Pu1e8TiHg79z8FwsPU+TGqwFmBi0OtEEkIvyJNwyPIWWlQrmXILrp0KI0FMcOiyZausi6wZPy7MQaZ0s1IPSJlzNXpZn0f7twJQB6pSySY3XAuMJST+sz0WZE44ZqBVPk4HWpT7SSaWO+NNQD5QOBX92KOtTgGbMEGl2q9eskHavaK/z9yHGXqEHieT1mq1ThrN7q2mwBCfQCjcAHeLloswJF3mZw9X1rcwMQp3rVILUqWOI9kdBybLJoZhqlnTUawSWfTii75ShzwGNEHczBqMF6MPad08CdwP11dyUZuboZJxZTv9Iyi0Iju4k/H+Gknkc0Ige+onSBHT0j5pu5WpTd5vxLrq3B7QWYhea1HgtMJI+bR5U6dBPW4KPAh1+aaC03yesbJQr4SIXOq1cA3wZfyRyjQ4PACdFM+D5CK90KjSZzRaoTwvo5FGfnrYALRlVFrTVyb2EpG4NFUm45VjSL0LOqLFYe6Oj08tBYsIhOw70AfOBi1zLTJdeI/LebsSgmjE5W+B7rLB+F0uYCNR3dX4wGFwMLgCa5QpR7imS4DbgeVYK7x8jeI0SSTQRwW+xty1BwbXMTFBtOLZWACbpoCn0A3BTv1muXwvUnHDTH/XtbCWYQQhKuMtA4cE/d8LhXHQXqAm0jdv5P5/tzOJf42n/J+bGIJvikke8lR6ZKdKzFH0e056vrE8VaWippaSDoTcsXvO2wVuApNMvcW4mzLOB/U4zRV+0gy7Em04sQ3QmydXXoTQK3hIeZolD1sZCpjX12iS5wdc3LqEe5PrJlsvvcxZTs3ja72tFlvuW2+ZtGS1AX5yFnWtB7lVXoZdKAPr39icRgL5P+JJ3EPKR4BHQRtRroaBTznvbOd7/an93plej/fRPNutBOt4PUSsKT5tKtJf+mXF7mWmqmGXXAGXKg2V86SP7VcD8PKF9SOjju2ZhxalniOlG4n8svtmNrw/x7OqPo/O0QaGEixzex/UFMMwTgDrPWNCRcJQ1G40A3wYhmotCKOH0vS/NN7+QrzRyswMn6WuP+6JDmDibW7plDB5KmuuB+Z61hL/T8mXf6pDrGmCO5OaRua2/29wz6Oh/6KL2yZxw1Ovum5VSNSIB6CDg1wFl+bF/f6aTSR23qlOEaHpIAbmSzexYKarkVkmzpFRibXR4cCWhQ63mX5N2yYM8zajqIEB/Qd8GKr0WrNj+m9RX4zrRNelQK4W595xKmlWZ66FvLpxwkdWHub7u8mDwRpDhGl1j+hyFBUAzQYieRCHUUXSQkfYwI+QvJO8fUNBSbBFwPZuWmWlOKvcO+GiKd10L6B263m0oon3KSjgtKUMjt3xpmaLTSc1GnwazGT3NfYLELtoB8wmXwODVM+EOMvy6ikqoeTybTiVrCJ5mdA0gIdo/pNCU75oW4B1qVfdoDu+9Skm4qBPNThHABJJtMHqa6XqCP6WoIxUlnDbsvuTUjKDfb9aDQgmnRJvhCeRXHlksKnxoEhtqXitpAU0AO9Napt+rf5aTcJHTO1IGcBF6Z4E7SFRzUx6Z6XxBT4n2OHDtieIKSrZ6LcOGxk4TrvpU8nyCTOxbQegj6gG8pHrtST2hNkUJLXA7/GcSZC62tiF7lzLDRdbnc/2Ly5PF+wfuPw5+bPFDt/NQeNWjpGVq5cswkkCnqwM9cUh0HYNE4uiHbB060wM2NID0Dug0xbuoBXiHy8DqDO71Kab4KWXsEOda1/4A+JZ9Uj8S6P9q6psBpFdD6GuTelsNs/PNoM6s0jlDsOibeWYSa5r1vVYEWionUQ8EaU5Dk+o3+Y3VAocTTs8yZzg93h/BchUCJL089HMq+UaVI/IYzVjnWI++Phj/xCM3RdoDvGQyrLIS7t38t4DW4+y+t6yK9EPoUaBb2Qm3BaMPB5pWe5eZAR2nmJlDyXa9U9jOHOaRlSU63mNIx8WhpWJcfTGFafGN49oH3gAHvxFYWs34SB/thSa1t4C2IeNAS6kJR0LoOHwG2AqSaBmCJUnCFPyp6CxI0BvKaNI9QVaYje1uGDkmwZA64U9og7UJ8ho2elp63wSSDoLkS8vXRiPtTdcHgtLhldCk9hY4gctRKpaacO22u8zluiYquy6aBVa4BCl5r6P3M6Cjd5vUSU+zmSXeD8ZW/wR7U+HfmSBzskk6LSmvcwrbmb7lq6dapSINLKsq9ZDOeBV9N53nDFrRIdt/UqUt3tKDphNp9tL+JIn0/9/WTJiLqKsR9hZg/xI/tndBXKjgejQ27d9RaqZS4kwktrdy+NSebw5wHTadyAsr/R3liNGsonentnfFa+pVVqZNdGh1AFhZmZPyDF+IKfWbNqrqZU6OHVhX7fEesXiZb+nYsnMx+Kujsv4UKGkWcqinY0Uv+SS07aWSlldXEZNG/sxEvW1UmgRcS0s9x0cyG62wAvEq4TRA+LYN2rPY7VRmVDq91cD3aplGy7ZFnzkcm1eYdqtKuFk4cc1A+mfMfctNMzZvGTv66PhVsNlS1C9YTrd4Zdxqb3iWw5D2Yfc6+FlY96OcdLp5bRZDddKdjh/XYBe7V1uNjG8quH4BmwtBaC9ZgetMJq9Ee0SmGnmVye4vAv29XEz6W7Axee256mGvK/gOkO2Y5PNXQB+OSyPsXQtMeoubn4JSBi3ZAYp7B7BpXFkPguGv2MYd97+Dp6RJJOSfAdscdWPWNAqln1RiczhYDA5ODM4QoNcDrAchOseoVqiIo33A1S6HhQz7KuPsULDScLqQchUvQA36fWB21DXcl5bc2NI/obYRxCRfSrbevjbIKsNeHzAVmAMIt623gX2z2rP1sfE+8AQIUZqEez9GrgNvJxjbDv9YO4Yi99jrB24FqZMD3bomHP56g/8Aev5OVOT5vXXxpCy/w/B4o7dCASE+1JG+BOIRV7PcPPELmG2rio3u4C5g0o+40Ylo6YTd/cDdpjPKr4NTijrDxmeB/k3REAUTTrFgZF/wc5Bkcw6yUlYAkT/9n2W/DlIP3OjWLeEiX/dwTRqEqj1owvFlQEuvN0GVp4dtf/KDD3Wol0C8lJ1MWR+QcxF1lchXga1ANpeAS3IZy1AJH3sBjZLrQEzqvAMymKlRpe5xYBXQc8juX8B94BdAS9lZIJ7FUyWcHFBHs7IGIA0KNundXwIKDXzU7w++CfQ+dWCSmtCvPOHwMQBcDJYCL6UOPI8inoeDtUBJMCyPjax18HMUmAK2A73wH4MeOez0ot5NYDPQCK6lzIdAoc6TNg78dANng+dATNMoHJbWRqxHHcX9JNDe51vgZHAI6JilKWtmPQu8CFInnHyg3xWcAx4H5myn5F4OJsSxZL1SdwRQ22vgy5RsUWyVJRzxDARXg7lAk0qQsj5/Zn0ieBDcD/TtpG6EP/3t3dNAy8ynwGigmSNxOSJZpKOB4lGgugvA+LoF7nCE/38GK4D2jnq5Q4G3PZFrdtbs82WgJJoI9nSYr2GhczSYAryHJjWVohvqqH0Vq5JMA54STqQllhKmJwguMdHR/rAv+Bp4BowHie/NjAU9xaAki3Eg5fUgRJ9CIa7TnbKWyybEU/xDwCXgIaD3kYlSPYT5QFnLRKOj9IM4xp+ctW5RfXyrg50K9C1rMNB3m5cjvMY1/pbUlbJGz0FgKDgE6K/YHwYzif0NrruUeBadyn0UjAUfBPPBE2AxeBOINPv2BVpG61uYvlUtATN4Bn3vCxJ+NOt9GPyJOtuDFRwK2FBbapA6BehYfAgQT59y/gCeBiuBfjUUk77b6bvjQHAg0IHU80B/N5n6UxK+1d/URnHf1lW24nuKTtI71l9v6DujyjuBSWoXfXISclMoiNyG44o0gDp9dxptQ8yr95UY1BHVCXsBvVT9SkH38fNLrgRcHV0V6wZiVuM3FPEs6phKKnUiPYugE0zNSJuBOvIrYBNYzzOoE2UitRf1cn3INx1hR7NwHKsGjKNBnHzqwOYvc9T2y8BCoF/urCWGjVwzUfSuNYvG7zZT/aqV/w/FgC8KyhiFdAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/images/wgsn.png":
/*!*****************************!*\
  !*** ./src/images/wgsn.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAA4CAYAAACfZDZvAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAA2KADAAQAAAABAAAAOAAAAADn9taPAAASXUlEQVR4Ae2dC9RVYxrHfUJyC5ncRrmUQSpjRsb9ssidkUszLmsiBotxtxIyjFuGFsqoISxpMMhghqyK1LgllRHllkTJJUW6UprfP+cc59tnX97n3Xuf73zlWev/nb3f93n+z/O++333fi/7nK9ulZ+kajWwbNmytXC2PWgDOoJfgG3A5mBDsCqQLKqrq2v2w2HD/yVuxaVYdwA7g3ZgS7AJaAIkS8AX4AMwGbwB3tUxZVnA50opdVTerZT8GEPpx1NhRxn0nVSJoxeKfwTd4H/WycigBP9TqHcwmBxPHC8b9ENV8bsuGduCi8FxoNggOYyUmuhgxL4BEepa3whaRkYbn/Ed2fcDtbMPqNP58eqVucTRg9Te4HtwGhz3VmpVJ4VY2uJpkKO3yatgcCiwyPcoq+IzFTinFoJ4M1PiAhncswr8Lh8folSXJg7sNwCPgvlAdWaRhWl8Z2FLsHeBhZagE3SXkj8P9AUuN5lSMdDvAYoinitLmVU+wPdOxUAcPseog60DvnVQLlfZK8tyQXxWGbli0dAjM4Fvb2Bp5D19neOnHRgO0jTOButgxH0smAnylLmQPwSautQzeuUdrBjXHRykugm6+A7q4NPWwUSA0S3FqB0/Hw06TnOOz3cDfkdxnknliQdMDPAnne5kLQ+EulHdBvTESitV72AEvAa4MW3gRvuNXOoZzrAOJlf9wWouHFnp4M+rg22naI2ycRZB43MHsCTEd6uM+LcI4Y5Lep/M4mKDUwjo7wcsQ9A4/8qragfD36pAQ8JqS9oOpngfB2s4XagMlPBl6mDFhvQhvpca/Xc26leoE6yeUkNB2Jj8zAoDv4T2BrNl6F7NJFqT6URR/OBPKD4HWiQa1K7CdYR2Wu2GFxuZFmHGch2q1sliowlkLu9gNKhFpP8lkJd0enSSgkP+NuhEPakuptI2c+BIUrHMpxZDZlnBvBt9rY41WqGOf0nwFzXaAvwQuG6ikymLVmxrSopPMAV1E5hniK4zBVrPoB+memlYYiFtdT5/G5OfmEV86ry7Jyr+qPAWh5/+eBp+BG8TMIjcbqC8DsMNajSVMmj+ovm06roxi0ZCW4NnKZPvdkIu5S81Dp5iGvdPMnhZG90TDPr1VKmIrUjoXi+x8kST2zUrk51TDkCzVMYEKw0PL0oaHhKPGuPt4CSQyUIMPA0lqp8tG8p5Dn53gVMruG1y4Pai1B2sXO7kpFN5QsKxhokDEnSistVAk0RPIHXie5IUI/K7RqSHJc+kc40KywikaW6Y1fwwQF2908KN4n48ut6AyoPTfH1mAdP51BscukFtDLTFon1SfTYH1Ra9TPA85duH6zml2s4T/RGY9ihc5etEwhAFyFcHrsvZXm9TwK+NXos8GRJqvSTI9rQQGnRVFy+Bx8C9QDe6XAUfHYGPvIOR0xsx6O0ChoKoPcgsVhGhDxVtauv1s0wFTtMqYoVzCB4IDTc68fQKkoQEqHpF01XkaOf+oATKimxszq9gik+IfXJjqn0iLeGnlSUQDAS7gs2BhtpVF/yeDKxyNgbm1TpsmoPfgNGgXPLsYPKjTrZrlpULX+oO1kWRGWSstQBwa8XHIj4+RhocTE4qA1y9DXxhqnr9Sg30Z0m+qpFPHP3DgoxJ60eez3CyVBzsta2xP9A8SU+1vDsYLpZ9DQ4pBZHyAK7UHawpJJ8BV5ljiRnS41yJy/QWcawxvZOguxb4psw+6fCmOGKMW4Cvkkgi8heSfgOombfjVVbiGRURb1iy6tKpM8TVYzEPLm1s6/U4p2V19HqANLIAY+8FuWLc+oTH1MEq7khMDLUXNKicNOF4fZwelqBTnn1t+Ynjsd5Zu89RV2qngnUc9TU5fzBBtx/5PhP22dh1pE57goUJPqqdbZmfzCM4IROhLr4H/cE3mRAmk+jmdh/t9Phk1Ww1KjpYgf4xo5u7XPQpYEv0tLnsI9p30/emXOQsF6WCzjgu9PgofXzqO1w+Q4wZ2G0O97tR3I0oXVsTQmMWrZhrfeH8ahYiqoO9RhCfGwLZlMBjh3Dka89oGGhi4A2qunac1kHDmPOBMXnKks/1E3SC2dNI6ETnWhTMqKFzywqwyq89psYuant6sf2GahUktIPRMPQlOetQbreEoNXoOyboJGXr9SnttUQK+b8nc+1IhcqMyFej4NLQ9MpKk9gUfbNXXwr8JFar4TPfM4SghjmE+tArSSuCXEpZbgK66ecqoR2s4PEJo2dNROMCPs/IF6auBn9MWIbS8K+G0DcqPyT9FTrC+yHpxaStOFiveOL42QfOEY66Dan2otG5nmIvUcddQWMfLqroF4N7KIt520HGrhLXwbRDP9eVCD3tN7QJ06cQm5Ke1dhXd5+ouDVMtax29QqLtyxt57Jjl0M9vW5xUawBnXEeMWjh6CHwGtegNUgz3Pdwn7lJNxhHUA7Nz3KRqIa6Cnfh7/F4qtHrwRH6Wa7ebIGPkyL87B2RHpX8elRGIf2ohPxg9mXU22fBxBo9n0hcszxj64CdXkP6iMZ5WiPvaHtSjnGUYU3Puog1ixvSacilfDUY183RUTSwfcs9FgLXeP/n5ekpj/+Ln3qdqRDrG/Du6MhdwRG0g1MNsEUwPeJc89YtfDoYfvTuXrsI3rTJE4hpfhgJfvch/TkQeaMNswtJm0naCDAQX6ND8lMlEWcPCHqnIkk2VtxdiP/LOFVi2Yn8CXE6ZXmvlh2HH0L4NHAVvQakJ0xJOO/uamzQ01sAe5WccMB5B4O94tRPkEUK+ZsY+KQ6G3jNTbA7TAQ5iRpEqOBPX7vR3Tsr0XV5HZwLNgt16pEIV9qNZiicRHPMeu03GC756Taag4Sca06hzVgX0Zi8W0DxjMB53KmGpS6iJ+utAcXOgfO402ncqSbFKZCneaNFRsCpp1ijEeJdSrAHgi8yClrXpSO4DUylMf4VbMlxNUWjpSmeDrUSPoyYLds8sa4ShwZchOEwTItlqZ95UPGUQPfj2LJ/ckXR1uGzPfzlk9OuDjZFFQ2LksSyWCKuoUmEtZjP9Z1NXJprut7cXIuh1blLwAdcp+tBtRZE1Lk6gdBhMelJsh0KE4nX6TWuJLLEDlYgeCqJqCxfX1EoBtenLD3p8F4UdOdzrRgNx54WKf6258N1xU8N6XrZJUixDAlqpeykBZOSYq0d0MleJqYDwOIcYtNTrSeYznXqkgN/BWXhptGKjI8qMt0SdO0/Jl4t5qQS1w72gMGL7lwXEJyeALHznADnACpmAWkXBdLjTg/Ej8b6JwDXsryGn6lxpIU8NQyLfGlRrjVd6mQkMe0O3sopNm2h6LcQb86Jvx5toZO1JzF5oaGeZemkOUf6CYJ9SykeB06NkmBfgvttA//J6A4GTR1tXsZHsSIexcYyXDkF/UMc/UjtSYPuSqXKNRhPgYtzqHk5FF6jjototE8CrwUhS0yUZy76+wNNc3xED4nHidXyMns9P04drGDx93qW8SdtyC7NxeJVl+eeV9ShUvQkuKd47vB5LTq/ctCTylLg+jRe5shZVNu0eNCYP6n/peB8yqBh9yvg2xzKcwSc+vb2ajlw16OkLJpyqIP4zpH1JFOsB9QjdjyxdLBhjpxWNb0QG5y/nElaHnfQ4VS4y/BQZdDdzyK6868wQj1NpzB7gDZA1956w8EkVg4n1zIdiCWLy6Qs35F/JHg4Ti8mT9OeoXSy38XohGZZOthkGMaFsqRLPLRQASUWzvWkGV1KyO5gkIFKG+wWOcqi3Bh0uQ763tbHxHow2BKcCz4FWck1NNpdsyKL46EcS8g/EfwtTi8mT09bjX4ujNGpyHLuYASoO9h1FQzpEmbAOzKCQgXJcniied3zEb7CkmeGJcak7UVj0Z1uhRNde/AR6EfhtgHHg38DNdo0onnYpWkILLbEvwScg01f4PNE1sKX1hecxbmDFRhfdGZ2U7wrSo2KeIe856PyPdKHwOncadCdhQ9nfXSbgZYecclkONjYgPtl1BBCvSwAjwANubYCA4Hmzb5yBDcm8VRNiF1z/t5AI6VcxdTBCOxzopmUUUSz4Ls6gcv3ThNGqwq1ygiDgYYQZxv0S6rUw7eqW1dguLBk3IAHxDsdnE4IrYFWf30arDagzwBVFeK+DIe9gGXF2hyjqYMV2LuYvYQbPBaeXC/1ac7G1kvxP3nfw/QRo42+EFrVu7ExvlzUaaxaqesKdgE+w/o9cgksmfRGVLRwkVsnM3cwKlNDN+sCQLCoi0lIfKLgS+PkO4LGHucPwTXXw876tNZTrKeHn0ZvQv1qQWQCBdkNzDYWaFOjfibqihkiPXk1r1KbzFzMHawQwQspI7mbwk115FAFpOnQqjiNuX3kQ4ws8zD5OJ2n2PE6WBmF6zqecg8wln1Do35m6sSrBRytDp4CMt8a8u1gVxGMz3gbs+USubhRVCh+UngNPy4onnt8vgeH5o5mwU5lvARYV5z0z+x2NDtccQz6G4vS1KifuTrX+kFITwQ+I53IeLw6GMG8CWNwczjSSSBjJPZW22cCHJbTxy3KIbpDSJsVkh6XtB6ZL9DJmscpNWQesa2fl3+u7/S8uPPkJe4n4T80Sx9eHawQwBOegZifRhR8Dr589uA04e7jGedyM3wv4kBDCKuoc82gIR9rNayS/q3EJqRpA6Ghwtk2NCM6sSZWRRUe11tbUTuATOZkaSpXjc66+qK51GTgI1rS/9poOJoK+8poE6Z+BYk+bzCsjd0jNLh/ejS6sDiyTNOw7FygV4C2zZIYLi3dW8R6XS3cZl3ajNqoVkSt8+8KX94djCCmwDaygjE6QZ2xK3Y+y7i6s3yH/XPR9KE5WiBJLfjW5LdvCiIterxOQ+4Hfg286z1FDGGmdSR2Bm8Q059B6tU8OLaGTwsGFkndkC3OXHS55hPR2w+onXtL2gt9r8HzxwQ9yqAfpqqNXNcOqg75cBiJTxqx34Cdde5Y7motTs4B2tfTlw/183NtwUZgHaB/urFaAdp8raboaXYVmIL/y0FLYGob6Os/p6hz/Q9sBCwim5oTrvk7BKVO5jN6WV4eUyWG1IDlCZZ6P4sC607n+nbFw+hr7palnJQRmZ4U6rC6gDOAhs5fAL1yJHwCGkKa4fQa8DF4nw5zKlg9KRB0tMw+GLwN1knSD8m/OyStJpJoQ6qLDkDXxSx1ZouAAZU7hKQugeTgqVaVtiLYJcEM6zn+dEdxGSoejr+nrPxJ+vg/Bp1Mhp4xvhYRuxp7qBBDCzJcG7L+NW7FUx+OYXAcGOqgfuJiTnUH1w1gVuFYQ+aWYDOwCWgF1gA+Mpb4OsUZEmsP8hNfTChwPAPfIXF8PnmFOn8B2+0M9q8adMNVcbwbSJI+4dZ+qTjTEnic6P9B5bJEDq9+6kw/4qKffstLcl9VI3B9Hb4WpHtSKyBIy8+2DU3i880njmZgtKHSxqQdIirWt4A2ZKNkPhk3R2V6pt+WYHcnd7FcVqbgVVkvB7eDuHInhPhTNjUwAQxqLDXBtdeN7wDgPDJK3cFwOheHGiZGyWB0NHfKUv4FWdyYuH+WzoJclEev15xPej+g1dGfxF4Dujl1px61GNVohHg13D4S/Mcl6NQdrODkTD6j5lcDXAKx6FBI+eoWYzMtJi/LrAsh+0OWhCsJlzrXIVxHPcEanRC3bqqaiyeuomfSwXA4B2daDQvKEyTktQQ7Gu6wIVpv4tHbF7kLfvQk0+rZHmBq7g5XDAe6OfYAIxpzcbjuepKdBTSKWZZ7WZj46T8HBqVdno5x1jPgUIsbvqtZqUKVX9AH6L/apxWN9XMVAtwbaPNbvydfLZmDo27WgmFTE4scUXET380gbNFrTJSNOR0HLcAiUJRpHDQxExkN8PFl0SGfk4zmmasTQyug16O+Ab6SewdTwQluVXAl0DuTectYHFiWuEvXBrua7mCFuryKOL8LVGJ2HazgZHiZA6/KLNWq4wH+9GuxRbnY0Sx3NQJaFwwGPk+IqnSw8kogzjPAYpC1LITwoHJf1mPsa76DqUzEeV6g8jLvYLpIkg+sleirj68NgIaGGn409eXJy64Qn/YK/wG+BS5S9Q6m8hPYmmBboKfaJ8BXNFzSzUXvXTZLW7dwnA30lHWB5sQNIsSnEcEJoDhcHJP6TY7ykkCs7xgdDaYwCdQiRFUEv0fgSAsOTkunVQkqxAlxqrF1BJqb7gjagtZAb0So7oqLTrFvcqCXuxCrYmkD2oNtgWLdHOgNjvK3SL7i/DOgRR4N0SeD8VwLbd+sdEK9qU9pr0zfCZz9f7P9eZ3wXUaoAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/layouts/index.js":
/*!******************************!*\
  !*** ./src/layouts/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-transitions */ "./node_modules/gatsby-plugin-transitions/dist/index.es.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
const Layout=({location,children})=>{if(location.pathname=="/"){return children;}return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_plugin_transitions__WEBPACK_IMPORTED_MODULE_1__["TransitionProvider"],{location:location,mode:"successive",enter:{opacity:0,config:{mass:1,tension:210,friction:20,clamp:true}},usual:{opacity:1},leave:{opacity:0,config:{duration:500}}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"],null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_plugin_transitions__WEBPACK_IMPORTED_MODULE_1__["TransitionViews"],null,children),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"],null));};/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const NotFoundPage=()=>{return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"404"));};/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smooth-scrollbar */ "./node_modules/smooth-scrollbar/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
//Import Components
const AboutPage=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"about"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"About"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"I'll try to tell you in here how I became a big fat panda. I hope I can be honest enough to talk about the embarassing facts, because as I said, I'm a panda, and I'm fat. But I'm also a fat panda. Thank you. Oh and I have the best friend in the world tho."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{id:"srsly"},"But seriously oumayma.. If I took all this time to make you this little gift limakathemch chnahia as long as it makes you happy, it's to tell you that you're someone really really important to me. You're not the only one that thinks bli i help you a lot.. If it was the case you wouldn't be this special to me.. Bl3eks you're really such a gifted and special and strong girl. I admired your motivation, your honesty in life, how simple and great you are. And seeing you everyday working so hard influenced me soooo much wlh. Just talking to you, and laughing with makes me so happy, and I would love to do it more kun makhftch nberztek 3la lkhedma. Don't you ever think bli you'll be alone chi nhar. Don't you ever start having dark thoughts, because you should know for sure bli you've got a best friend for LIFE inchallah.. We only knew each other ghamn aout but still so much happened in our lives.. And I hope so much good things happen in our lives inchallah, because we're only going to grow stronger and stronger.. And I reaaaally think you have a huge potential, and I'm so curious to see what you'll become, mrs best architect I've known ! I also love how different are our lives, and im lucky that my best friend's live is eventful cuz I hate boring lives... Hmm I guess baraka mn cuteness, let me end it with a Happy Birthday Best Friend ! Wish you aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaall the happiness in the world to you and your family ! A huuuge thank you for everything so far, and for everything to come."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null," Your forever best friend, Nouamane.")))));/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smooth-scrollbar */ "./node_modules/smooth-scrollbar/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
//Import Components
const ContactPage=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"about"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"contact"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Knt bagha n3tikum my contacts wlkin wakha n3tih likum maghanjawbkch cuz i'm most of the time sleeping. Kun knt kanjawb chi 7ed anjawb my best friend be3da lidima kanvuvih..")))));/* harmony default export */ __webpack_exports__["default"] = (ContactPage);

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! smooth-scrollbar */ "./node_modules/smooth-scrollbar/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/banner */ "./src/components/banner.js");
/* harmony import */ var _components_aboutBlurb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/aboutBlurb */ "./src/components/aboutBlurb.js");
/* harmony import */ var _components_videoSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/videoSection */ "./src/components/videoSection.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _starts_start_text_typing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../starts/start-text-typing */ "./src/starts/start-text-typing.js");
/* harmony import */ var _components_swiping_cards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/swiping-cards */ "./src/components/swiping-cards.js");
/* harmony import */ var _components_scroll_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/scroll-animation */ "./src/components/scroll-animation.js");
//Import Components
// import FloatingCard from "../starts/floating-card"
// import FlippingCard from "../starts/flipping-card"
// import DemoGesture from "../starts/demo-gesture"
const IndexPage=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_banner__WEBPACK_IMPORTED_MODULE_3__["default"],null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_aboutBlurb__WEBPACK_IMPORTED_MODULE_4__["default"],null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_swiping_cards__WEBPACK_IMPORTED_MODULE_8__["default"],null));/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/pages/index copy.js":
/*!*********************************!*\
  !*** ./src/pages/index copy.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _starts_start_text_typing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../starts/start-text-typing */ "./src/starts/start-text-typing.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _components_submit_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/submit-btn */ "./src/components/submit-btn.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_4__);
class IndexPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"index container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_starts_start_text_typing__WEBPACK_IMPORTED_MODULE_1__["default"],null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_submit_btn__WEBPACK_IMPORTED_MODULE_3__["default"],null));}}/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_trap_btn_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/trap-btn.scss */ "./src/styles/trap-btn.scss");
/* harmony import */ var _styles_trap_btn_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_trap_btn_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _starts_start_text_typing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../starts/start-text-typing */ "./src/starts/start-text-typing.js");
/**
 * Globals
 */const CONSTANTS={assetPath:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/184729"};const ASSETS={head:`${CONSTANTS.assetPath}/head.svg`,waiting:`${CONSTANTS.assetPath}/hand.svg`,stalking:`${CONSTANTS.assetPath}/hand-waiting.svg`,grabbing:`${CONSTANTS.assetPath}/hand.svg`,grabbed:`${CONSTANTS.assetPath}/hand-with-cursor.svg`,shaka:`${CONSTANTS.assetPath}/hand-surfs-up.svg`};// Preload images
Object.keys(ASSETS).forEach(key=>{const img=new Image();img.src=ASSETS[key];});/**
 * Shared hooks
 */ // Hover state - https://dev.to/spaciecat/hover-states-with-react-hooks-4023
const useHover=()=>{const ref=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();const[hovered,setHovered]=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);const enter=()=>setHovered(true);const leave=()=>setHovered(false);Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{ref.current.addEventListener("mouseenter",enter);ref.current.addEventListener("mouseleave",leave);return()=>{ref.current.removeEventListener("mouseenter",enter);ref.current.removeEventListener("mouseleave",leave);};},[ref]);return[ref,hovered];};// Mouse position
const useMousePosition=()=>{const[position,setPosition]=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({x:0,y:0});Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{const setFromEvent=e=>setPosition({x:e.clientX,y:e.clientY});window.addEventListener("mousemove",setFromEvent);return()=>{window.removeEventListener("mousemove",setFromEvent);};},[]);return position;};// Element position
const usePosition=()=>{const ref=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();const[position,setPosition]=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});const handleResize=()=>{setPosition(ref.current.getBoundingClientRect());};Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(()=>{handleResize();window.addEventListener('resize',handleResize);return()=>{window.removeEventListener('resize',handleResize);};},[ref.current]);return[ref,position];};/**
 * React Components
 */class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{constructor(props){super(props);this.state={debug:false,cursorGrabbed:false,gameOver:false};this.handleToggleDebug=this.handleToggleDebug.bind(this);this.handleButtonClicked=this.handleButtonClicked.bind(this);this.handleCursorGrabbed=this.handleCursorGrabbed.bind(this);}handleToggleDebug(){this.setState({debug:!this.state.debug});}handleCursorGrabbed(){this.setState({cursorGrabbed:true});setTimeout(()=>{this.setState({cursorGrabbed:false});},4000);}handleButtonClicked(){this.setState({gameOver:true});setTimeout(()=>{this.setState({gameOver:false});},4000);}render(){const{cursorGrabbed,gameOver,debug}=this.state;const screenStyle=cursorGrabbed?{cursor:"none"}:{};const appClass=debug?"app app--debug":"app";return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:appClass,style:screenStyle},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"index container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_starts_start_text_typing__WEBPACK_IMPORTED_MODULE_3__["default"],null)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:"trap-button",onClick:this.handleButtonClicked},gameOver&&"Niiiice",cursorGrabbed&&"HUHUHUHU LA277",!gameOver&&!cursorGrabbed&&"Enter"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"grab-zone-wrapper"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GrabZone,{onCursorGrabbed:this.handleCursorGrabbed,cursorGrabbed:cursorGrabbed,gameOver:gameOver})));}}// GrabZone (The hover trigger zone)
const GrabZone=({cursorGrabbed,gameOver,onCursorGrabbed})=>{const[outerRef,outerHovered]=useHover();const[innerRef,innerHovered]=useHover();const[isExtended,setExtendedArm]=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);let state="waiting";if(outerHovered){state="stalking";}if(innerHovered){state="grabbing";}if(cursorGrabbed){state="grabbed";}if(gameOver){state="shaka";}// If state is grabbing for a long time, they're being clever!
Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{let timer;if(state==="grabbing"){timer=setTimeout(()=>{// Not so clever now, are they?
setExtendedArm(true);timer=null;},2000);}return()=>{setExtendedArm(false);if(timer){clearTimeout(timer);}};},[state]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"grab-zone",ref:outerRef},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"grab-zone__debug"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,"Debug info:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Current state: ",state),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Extended arm: ",isExtended?"Yes":"No")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"grab-zone__danger",ref:innerRef},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Grabber,{state:state,gameOver:gameOver,extended:isExtended,onCursorGrabbed:onCursorGrabbed})));};// Grabber (The graphic)
const Grabber=({state,gameOver,extended,onCursorGrabbed})=>{const mousePos=useMousePosition();const[ref,position]=usePosition();const hasCursor=false;// Calculate rotation of armWrapper
const x=position.left+position.width*0.5;const y=position.top+position.height*0.5;const angle=gameOver?0:Math.atan2(mousePos.x-x,-(mousePos.y-y))*(180/Math.PI);// Ensure value is within acceptable range (-75 to 75)
const rotation=Math.min(Math.max(parseInt(angle),-79),79);const grabberClass=`grabber grabber--${state} ${extended&&"grabber--extended"}`;const wrapperStyle={transform:`rotate(${rotation}deg)`};let handImageSrc=ASSETS[state];return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:grabberClass},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"grabber__body"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:"grabber__face",src:ASSETS.head}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"grabber__arm-wrapper",ref:ref,style:wrapperStyle},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"grabber__arm"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:"grabber__hand",src:handImageSrc,onMouseEnter:onCursorGrabbed}))));};

/***/ }),

/***/ "./src/pages/page-2.js":
/*!*****************************!*\
  !*** ./src/pages/page-2.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const SecondPage=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"page 2");/* harmony default export */ __webpack_exports__["default"] = (SecondPage);

/***/ }),

/***/ "./src/pages/work.js":
/*!***************************!*\
  !*** ./src/pages/work.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smooth-scrollbar */ "./node_modules/smooth-scrollbar/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
//Import Components
const WorkPage=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"about"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"work"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sorry but I don't have any work to show.. 3atyaha ghaln3as wlmakla wduran wndarb m3a nouamane...")))));/* harmony default export */ __webpack_exports__["default"] = (WorkPage);

/***/ }),

/***/ "./src/starts/start-text-typing.js":
/*!*****************************************!*\
  !*** ./src/starts/start-text-typing.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-typist */ "./node_modules/react-typist/dist/Typist.js");
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_typist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_typist_dist_Typist_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-typist/dist/Typist.css */ "./node_modules/react-typist/dist/Typist.css");
/* harmony import */ var react_typist_dist_Typist_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_typist_dist_Typist_css__WEBPACK_IMPORTED_MODULE_2__);
// Makes cursor blink
const Start=()=>{const[renderMsg,setRenderMsg]=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"TypistExample"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a,{className:"TypistExample-header",startDelay:2000,onTypingDone:()=>setRenderMsg(true),cursor:{hideWhenDone:true}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",null,"Hello, Oumayma Lahmer !",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Backspace,{count:16,delay:1000}),"worst friend ever !",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Backspace,{count:19,delay:1000}),"panda !",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Backspace,{count:7,delay:1000}),"fatty !",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Backspace,{count:7,delay:1000}),"dummy !",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Backspace,{count:7,delay:1000}),"kindest and greatest person I've ever met")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"TypistExample-content"},renderMsg?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a,{className:"TypistExample-message",startDelay:2000,avgTypingDelay:60},"So as u can see,",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Delay,{ms:1000})," the genius and greatest person alive,",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Delay,{ms:1000})," that also happens to be ur best friend just figured out how to do animations...",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Delay,{ms:1000})," So I thought I'll complete my gift",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Delay,{ms:500})," O:) ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Delay,{ms:1000}),"I know you must be very amazed and your mouth is widely open right now... :O ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Delay,{ms:1000}),"Baqe machefti waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalu !",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Delay,{ms:1000}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Your best friend ever."):null));};/* harmony default export */ __webpack_exports__["default"] = (Start);

/***/ }),

/***/ "./src/styles/floating-card.css":
/*!**************************************!*\
  !*** ./src/styles/floating-card.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/styles/scroll-animation.scss":
/*!******************************************!*\
  !*** ./src/styles/scroll-animation.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/styles/swiping-cards.scss":
/*!***************************************!*\
  !*** ./src/styles/swiping-cards.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/styles/trap-btn.scss":
/*!**********************************!*\
  !*** ./src/styles/trap-btn.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "@reach/router":
/*!***********************************************************************************************!*\
  !*** external "D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\@reach\\router\\index.js" ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "core-js/fn/array/from":
/*!**************************************************************************************************!*\
  !*** external "D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\array\\from.js" ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_fn_array_from__;

/***/ }),

/***/ "core-js/fn/map":
/*!******************************************************************************************!*\
  !*** external "D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\map.js" ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_fn_map__;

/***/ }),

/***/ "core-js/fn/object/assign":
/*!*****************************************************************************************************!*\
  !*** external "D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\object\\assign.js" ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_fn_object_assign__;

/***/ }),

/***/ "core-js/fn/set":
/*!******************************************************************************************!*\
  !*** external "D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\set.js" ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_fn_set__;

/***/ }),

/***/ "core-js/fn/weak-map":
/*!***********************************************************************************************!*\
  !*** external "D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\fn\\weak-map.js" ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_fn_weak_map__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!************************************************************************************************************!*\
  !*** external "D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\core-js\\modules\\web.dom.iterable.js" ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_crypto__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!****************************************************************************************!*\
  !*** external "D:\\Projets\\Git\\gatsby\\gatsby-app\\node_modules\\lodash\\lodash.js" ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map