/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/content.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/content.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.content{
    flex-grow:1;
    display: flex;
    flex-direction: column;
    padding: 1rem 2.5rem;
    color: var(--text-color-dark);
    position: relative;
}

.content__title{
    display: flex;
    align-items: center;
    justify-content: start;
}

.content__title h1{
    margin: 2rem 0;
    font-size: 2.5rem;
}

.content__title i{
    margin-left: 1rem;
    font-size: 2rem;
}

.content__title i:hover{
    cursor: pointer;
    color: var(--hover-text-color);
}

.content__items{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap:1rem;
}

.undo__box{
    position: absolute;
    top: 20px;
    min-width: 200px;
    right: 20px;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    background: var(--background-color-2);
    border-radius: 10px;
    box-shadow: var(--shadow-color) 5px 5px 10px;
    animation:fadeIn linear .2s;
}

.undo__box .buttons{
    margin-left: 1rem;
}

.undo__box .undo__btn{
    background: var(--edit-btn-color);
    color: #FFF;
}

.undo__box .close__btn{
    background: var(--delete-btn-color);
    color: #FFF;
}

.undo__box[closing]{
    animation:fadeOut linear .2s;
}`, "",{"version":3,"sources":["webpack://./src/style/content.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,gBAAgB;IAChB,WAAW;IACX,eAAe;IACf,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,qCAAqC;IACrC,mBAAmB;IACnB,4CAA4C;IAC5C,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iCAAiC;IACjC,WAAW;AACf;;AAEA;IACI,mCAAmC;IACnC,WAAW;AACf;;AAEA;IACI,4BAA4B;AAChC","sourcesContent":[".content{\n    flex-grow:1;\n    display: flex;\n    flex-direction: column;\n    padding: 1rem 2.5rem;\n    color: var(--text-color-dark);\n    position: relative;\n}\n\n.content__title{\n    display: flex;\n    align-items: center;\n    justify-content: start;\n}\n\n.content__title h1{\n    margin: 2rem 0;\n    font-size: 2.5rem;\n}\n\n.content__title i{\n    margin-left: 1rem;\n    font-size: 2rem;\n}\n\n.content__title i:hover{\n    cursor: pointer;\n    color: var(--hover-text-color);\n}\n\n.content__items{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n    gap:1rem;\n}\n\n.undo__box{\n    position: absolute;\n    top: 20px;\n    min-width: 200px;\n    right: 20px;\n    padding: 0 2rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 100px;\n    background: var(--background-color-2);\n    border-radius: 10px;\n    box-shadow: var(--shadow-color) 5px 5px 10px;\n    animation:fadeIn linear .2s;\n}\n\n.undo__box .buttons{\n    margin-left: 1rem;\n}\n\n.undo__box .undo__btn{\n    background: var(--edit-btn-color);\n    color: #FFF;\n}\n\n.undo__box .close__btn{\n    background: var(--delete-btn-color);\n    color: #FFF;\n}\n\n.undo__box[closing]{\n    animation:fadeOut linear .2s;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/detail.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/detail.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.detail{
    background: var(--background-color-2);
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 400px;
    border-left: 1px solid var(--tab-border-color);
    /* animation: slideInRight linear .3s; */
}
.detail[opening]{
    animation: slideInRight linear .3s;
}

.detail[open]{
    animation: none
}

.detail[closing]{
    animation: slideOutRight linear .3s;
}

.detail h1{
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.detail p{
    margin: 0 0 1rem 0;
    width: 100%;
}

.detail div{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    margin-bottom: 2rem;
}

.detail button.delete__btn{
    background: var(--delete-btn-color);
    color: var(--text-color-light);
}

.detail button.close__btn{
    position: absolute;
    top: .1rem;
    left: .1rem;
    border:none;
    background: inherit;
    font-size: 1.2rem;
    opacity: 0.5;
}

.detail button.close__btn:hover{
    cursor: pointer;
    color: var(--hover-text-color)
}
`, "",{"version":3,"sources":["webpack://./src/style/detail.css"],"names":[],"mappings":"AAAA;IACI,qCAAqC;IACrC,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,8CAA8C;IAC9C,wCAAwC;AAC5C;AACA;IACI,kCAAkC;AACtC;;AAEA;IACI;AACJ;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,SAAS;IACT,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;IACnC,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf;AACJ","sourcesContent":[".detail{\n    background: var(--background-color-2);\n    padding: 1rem 2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    width: 400px;\n    border-left: 1px solid var(--tab-border-color);\n    /* animation: slideInRight linear .3s; */\n}\n.detail[opening]{\n    animation: slideInRight linear .3s;\n}\n\n.detail[open]{\n    animation: none\n}\n\n.detail[closing]{\n    animation: slideOutRight linear .3s;\n}\n\n.detail h1{\n    margin: 2rem 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.detail p{\n    margin: 0 0 1rem 0;\n    width: 100%;\n}\n\n.detail div{\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n    gap: 1rem;\n    width: 100%;\n    margin-bottom: 2rem;\n}\n\n.detail button.delete__btn{\n    background: var(--delete-btn-color);\n    color: var(--text-color-light);\n}\n\n.detail button.close__btn{\n    position: absolute;\n    top: .1rem;\n    left: .1rem;\n    border:none;\n    background: inherit;\n    font-size: 1.2rem;\n    opacity: 0.5;\n}\n\n.detail button.close__btn:hover{\n    cursor: pointer;\n    color: var(--hover-text-color)\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/dialog.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/dialog.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `dialog{
    border:none;
    animation:fadeIn linear .2s;
}

dialog::backdrop{
    background: #33333335;
    animation:fadeIn linear .2s;
}

dialog[closing]{
    animation:fadeOut linear .2s;
}

dialog div {
    /* Styling for form divs */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: .5rem;
}

dialog input {
    /* Styling for form inputs */
    border: 1px solid var(--nav-border-color);
    height: 30px;
    border-radius: 5px;
    padding: 0 .5rem;
    font-size: 1rem;
    font-family: 'Inconsolata', monospace;
}

dialog input:focus{
    outline: none;
}

dialog label {
    /* Styling for form labels */
    width: 150px;
    font-size: 1rem;
    margin-bottom: .2rem;
    font-family: 'Inconsolata', monospace;
}

dialog textarea {
    /* Styling for form textareas */
    border: 1px solid var(--nav-border-color);
    height: 60px;
    border-radius: 5px;
    resize: none;
    padding: .2rem .5rem;
    font-size: 1rem;
    font-family: 'Inconsolata', monospace;
}

dialog textarea:focus{
    outline:none;
}

dialog select:focus{
    outline:none
}

dialog .buttons {
    /* Styling for button container */
    display: flex !important;
    flex-direction: row !important;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    margin-top: 1rem;
    margin-bottom: 0;
}

dialog .add__btn {
    /* Styling for add button */
    background-color: var(--priority-low-color);
    color: var(--text-color-light);
    font-size: 1.1rem !important;
}

dialog .close__btn {
    /* Styling for close button */
    background-color: var(--delete-btn-color);
    color: var(--text-color-light);
    font-size: 1.1rem !important;
}

/* Project Dialog section */
#project__add-dialog {
    /* Styling for the dialog */
    /* border: 1px solid var(--nav-border-color); */
    padding: 1rem 2rem;
    width: 400px;
    height: 250px;
    background-color: var(--background-color-2);
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

#project__add-form{
    width: 100%;
}

/* Item dialog section */
#item__add-dialog {
    padding: 1rem 2rem;
    width: 400px;
    background-color: var(--background-color-2);
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    /* border: 1px solid var(--nav-border-color); */
}

#item__add-dialog .select__item-form {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#item__add-dialog .select__item-form select {
    width: 200px;
    height: 30px;
    border-radius: 5px;
    background: #fff;
    padding: 0 0.25rem;
    font-size: 1rem;
    font-family: 'Inconsolata', monospace;
}

#item__add-dialog>form {
    margin-bottom: 1.5rem;
}

#item__move-dialog select,
#item__add-dialog>form>div>select {
    height: 30px;
    border-radius: 5px;
    background: #fff;
    padding: 0 0.25rem;
    font-size: 1rem;
    font-family: 'Inconsolata', monospace;
}

#item__add-dialog > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

#item__add-dialog > div > label{
    width: auto !important;
}

#item__add-dialog>div>select {
    width: 200px;
    height: 30px;
    border-radius: 5px;
    background: #fff;
    padding: 0 0.25rem;
    font-size: 1rem;
    font-family: 'Inconsolata', monospace;
}

/* Edit dialog section */
#item__edit-dialog{
    padding: 1rem 2rem;
    width: 400px;
    background-color: var(--background-color-2);
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    /* border: 1px solid var(--nav-border-color); */
}

/* Confirm dialog section */
#confirm__dialog{
    /* border: 1px solid var(--nav-border-color); */
    padding: 1rem 2rem;
    width: 300px;
    background-color: var(--background-color-2);
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

#confirm__dialog>span {
    /* Styling for form labels */
    width: 150px;
    font-size: 1rem;
    margin-bottom: .2rem;
    font-family: 'Inconsolata', monospace;
}

/* Move dialog */
#item__move-dialog{
    /* border: 1px solid var(--nav-border-color); */
    padding: 1rem 2rem;
    width: 300px;
    background-color: var(--background-color-2);
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

#item__move-dialog div{
    justify-content: center;
    align-items: center;
}

#item__move-dialog select{
    width: 200px;
}`, "",{"version":3,"sources":["webpack://./src/style/dialog.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,2BAA2B;AAC/B;;AAEA;IACI,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,0BAA0B;IAC1B,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,oBAAoB;AACxB;;AAEA;IACI,4BAA4B;IAC5B,yCAAyC;IACzC,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,qCAAqC;AACzC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,qCAAqC;AACzC;;AAEA;IACI,+BAA+B;IAC/B,yCAAyC;IACzC,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;IACpB,eAAe;IACf,qCAAqC;AACzC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI;AACJ;;AAEA;IACI,iCAAiC;IACjC,wBAAwB;IACxB,8BAA8B;IAC9B,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;IAC3B,2CAA2C;IAC3C,8BAA8B;IAC9B,4BAA4B;AAChC;;AAEA;IACI,6BAA6B;IAC7B,yCAAyC;IACzC,8BAA8B;IAC9B,4BAA4B;AAChC;;AAEA,2BAA2B;AAC3B;IACI,2BAA2B;IAC3B,+CAA+C;IAC/C,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,2CAA2C;IAC3C,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA,wBAAwB;AACxB;IACI,kBAAkB;IAClB,YAAY;IACZ,2CAA2C;IAC3C,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,+CAA+C;AACnD;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,qCAAqC;AACzC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,qCAAqC;AACzC;;AAEA,wBAAwB;AACxB;IACI,kBAAkB;IAClB,YAAY;IACZ,2CAA2C;IAC3C,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,+CAA+C;AACnD;;AAEA,2BAA2B;AAC3B;IACI,+CAA+C;IAC/C,kBAAkB;IAClB,YAAY;IACZ,2CAA2C;IAC3C,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,qCAAqC;AACzC;;AAEA,gBAAgB;AAChB;IACI,+CAA+C;IAC/C,kBAAkB;IAClB,YAAY;IACZ,2CAA2C;IAC3C,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB","sourcesContent":["dialog{\n    border:none;\n    animation:fadeIn linear .2s;\n}\n\ndialog::backdrop{\n    background: #33333335;\n    animation:fadeIn linear .2s;\n}\n\ndialog[closing]{\n    animation:fadeOut linear .2s;\n}\n\ndialog div {\n    /* Styling for form divs */\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    margin-bottom: .5rem;\n}\n\ndialog input {\n    /* Styling for form inputs */\n    border: 1px solid var(--nav-border-color);\n    height: 30px;\n    border-radius: 5px;\n    padding: 0 .5rem;\n    font-size: 1rem;\n    font-family: 'Inconsolata', monospace;\n}\n\ndialog input:focus{\n    outline: none;\n}\n\ndialog label {\n    /* Styling for form labels */\n    width: 150px;\n    font-size: 1rem;\n    margin-bottom: .2rem;\n    font-family: 'Inconsolata', monospace;\n}\n\ndialog textarea {\n    /* Styling for form textareas */\n    border: 1px solid var(--nav-border-color);\n    height: 60px;\n    border-radius: 5px;\n    resize: none;\n    padding: .2rem .5rem;\n    font-size: 1rem;\n    font-family: 'Inconsolata', monospace;\n}\n\ndialog textarea:focus{\n    outline:none;\n}\n\ndialog select:focus{\n    outline:none\n}\n\ndialog .buttons {\n    /* Styling for button container */\n    display: flex !important;\n    flex-direction: row !important;\n    justify-content: center;\n    align-items: center;\n    gap: .5rem;\n    margin-top: 1rem;\n    margin-bottom: 0;\n}\n\ndialog .add__btn {\n    /* Styling for add button */\n    background-color: var(--priority-low-color);\n    color: var(--text-color-light);\n    font-size: 1.1rem !important;\n}\n\ndialog .close__btn {\n    /* Styling for close button */\n    background-color: var(--delete-btn-color);\n    color: var(--text-color-light);\n    font-size: 1.1rem !important;\n}\n\n/* Project Dialog section */\n#project__add-dialog {\n    /* Styling for the dialog */\n    /* border: 1px solid var(--nav-border-color); */\n    padding: 1rem 2rem;\n    width: 400px;\n    height: 250px;\n    background-color: var(--background-color-2);\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n}\n\n#project__add-form{\n    width: 100%;\n}\n\n/* Item dialog section */\n#item__add-dialog {\n    padding: 1rem 2rem;\n    width: 400px;\n    background-color: var(--background-color-2);\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n    /* border: 1px solid var(--nav-border-color); */\n}\n\n#item__add-dialog .select__item-form {\n    margin-bottom: 1.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n#item__add-dialog .select__item-form select {\n    width: 200px;\n    height: 30px;\n    border-radius: 5px;\n    background: #fff;\n    padding: 0 0.25rem;\n    font-size: 1rem;\n    font-family: 'Inconsolata', monospace;\n}\n\n#item__add-dialog>form {\n    margin-bottom: 1.5rem;\n}\n\n#item__move-dialog select,\n#item__add-dialog>form>div>select {\n    height: 30px;\n    border-radius: 5px;\n    background: #fff;\n    padding: 0 0.25rem;\n    font-size: 1rem;\n    font-family: 'Inconsolata', monospace;\n}\n\n#item__add-dialog > div {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 1rem;\n}\n\n#item__add-dialog > div > label{\n    width: auto !important;\n}\n\n#item__add-dialog>div>select {\n    width: 200px;\n    height: 30px;\n    border-radius: 5px;\n    background: #fff;\n    padding: 0 0.25rem;\n    font-size: 1rem;\n    font-family: 'Inconsolata', monospace;\n}\n\n/* Edit dialog section */\n#item__edit-dialog{\n    padding: 1rem 2rem;\n    width: 400px;\n    background-color: var(--background-color-2);\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n    /* border: 1px solid var(--nav-border-color); */\n}\n\n/* Confirm dialog section */\n#confirm__dialog{\n    /* border: 1px solid var(--nav-border-color); */\n    padding: 1rem 2rem;\n    width: 300px;\n    background-color: var(--background-color-2);\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n}\n\n#confirm__dialog>span {\n    /* Styling for form labels */\n    width: 150px;\n    font-size: 1rem;\n    margin-bottom: .2rem;\n    font-family: 'Inconsolata', monospace;\n}\n\n/* Move dialog */\n#item__move-dialog{\n    /* border: 1px solid var(--nav-border-color); */\n    padding: 1rem 2rem;\n    width: 300px;\n    background-color: var(--background-color-2);\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n}\n\n#item__move-dialog div{\n    justify-content: center;\n    align-items: center;\n}\n\n#item__move-dialog select{\n    width: 200px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/header.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/header.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `header{
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--header-color);
    color: var(--text-color-light);
    font-size: 1.2rem;
    padding: 0 .25rem;
    flex-grow: 4;
}

header .logo{
    font-weight: bold;
    display: flex;
    justify-content: center;
}

header .logo i{
    font-size: 1.3rem;
}

header .menu__btn:hover,
header .add__btn:hover{
    cursor: pointer;
    background: inherit!important;
}`, "",{"version":3,"sources":["webpack://./src/style/header.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,+BAA+B;IAC/B,8BAA8B;IAC9B,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,eAAe;IACf,6BAA6B;AACjC","sourcesContent":["header{\n    height: 3rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: var(--header-color);\n    color: var(--text-color-light);\n    font-size: 1.2rem;\n    padding: 0 .25rem;\n    flex-grow: 4;\n}\n\nheader .logo{\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n}\n\nheader .logo i{\n    font-size: 1.3rem;\n}\n\nheader .menu__btn:hover,\nheader .add__btn:hover{\n    cursor: pointer;\n    background: inherit!important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/item.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/item.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* TODOS*/

.to-do,
.note{
    display: flex;
    width: 1200px;
    height: 2.5rem;
    border: 1px solid var(--nav-border-color);
    border-radius: 10px;
    animation:fadeIn linear .3s;
}

.to-do[closing],
.note[closing]{    
    animation: fadeOut linear .3s;    
}

.to-do:hover,
.note:hover{
    box-shadow: var(--shadow-color) 5px 5px 10px;
}

.to-do .checkbox{
    width: 2.5rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right:1px solid var(--nav-border-color);
    flex-grow: 1;
}

.to-do .title{
    display: flex;
    width: 30rem;
    justify-content: start;
    align-items: center;
    padding: 0 1rem;
    border-right: 1px solid var(--nav-border-color);
    flex-grow: 20;
}
.note .title{
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 1rem;
    border-right: 1px solid var(--nav-border-color);
    flex-grow: 5;
}

.to-do .checkbox input:hover,
.to-do .title:hover,
.note .title:hover{
    cursor:pointer;
}

.to-do .buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    gap: 1rem;
    width: 300px;
}
.note .buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    gap: 1rem;
    width: 300px;
}

.to-do .buttons button,
.note .buttons button
    {
    border: none;
    background: inherit;
    height: 100%;
    font-size: 1.3rem;
}

.to-do .buttons button:hover,
.note .buttons button:hover{
    cursor: pointer;
    color: var(--hover-text-color);
}

.to-do .priority__btn.priority__low:hover{
    color: var(--priority-low-color) !important;
}
.to-do .priority__btn.priority__medium:hover{
    color: var(--priority-medium-color) !important;
}
.to-do .priority__btn.priority__high:hover{
    color: var(--priority-high-color) !important;
}

/* CHECKBOX */
input[type='checkbox']{
    appearance: none;
    background-color: #fff;
    margin:0;
    font:inherit;
    color: var(--priority-low-color);
    border: 1px solid var(--header-hover-color);
    width: 1.2rem;
    height:1.2rem;
    border-radius: 5px;
    display: grid;
    place-content: center;
}

input[type='checkbox']:hover{
    border:2px solid var(--header-hover-color)
}

input[type='checkbox']::before{
    content: '';
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 3px;
    transform: scale(0);
    transition: .12s transform ease-in-out;
    box-shadow: inset 1em 1em var(--priority-low-color);
}

input[type='checkbox']:checked::before{
    transform:scale(1);
}`, "",{"version":3,"sources":["webpack://./src/style/item.css"],"names":[],"mappings":"AAAA,SAAS;;AAET;;IAEI,aAAa;IACb,aAAa;IACb,cAAc;IACd,yCAAyC;IACzC,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;;IAEI,6BAA6B;AACjC;;AAEA;;IAEI,4CAA4C;AAChD;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8CAA8C;IAC9C,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,+CAA+C;IAC/C,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,+CAA+C;IAC/C,YAAY;AAChB;;AAEA;;;IAGI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,SAAS;IACT,YAAY;AAChB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,SAAS;IACT,YAAY;AAChB;;AAEA;;;IAGI,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;;IAEI,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,2CAA2C;AAC/C;AACA;IACI,8CAA8C;AAClD;AACA;IACI,4CAA4C;AAChD;;AAEA,aAAa;AACb;IACI,gBAAgB;IAChB,sBAAsB;IACtB,QAAQ;IACR,YAAY;IACZ,gCAAgC;IAChC,2CAA2C;IAC3C,aAAa;IACb,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,mBAAmB;IACnB,sCAAsC;IACtC,mDAAmD;AACvD;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["/* TODOS*/\n\n.to-do,\n.note{\n    display: flex;\n    width: 1200px;\n    height: 2.5rem;\n    border: 1px solid var(--nav-border-color);\n    border-radius: 10px;\n    animation:fadeIn linear .3s;\n}\n\n.to-do[closing],\n.note[closing]{    \n    animation: fadeOut linear .3s;    \n}\n\n.to-do:hover,\n.note:hover{\n    box-shadow: var(--shadow-color) 5px 5px 10px;\n}\n\n.to-do .checkbox{\n    width: 2.5rem;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-right:1px solid var(--nav-border-color);\n    flex-grow: 1;\n}\n\n.to-do .title{\n    display: flex;\n    width: 30rem;\n    justify-content: start;\n    align-items: center;\n    padding: 0 1rem;\n    border-right: 1px solid var(--nav-border-color);\n    flex-grow: 20;\n}\n.note .title{\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    padding: 0 1rem;\n    border-right: 1px solid var(--nav-border-color);\n    flex-grow: 5;\n}\n\n.to-do .checkbox input:hover,\n.to-do .title:hover,\n.note .title:hover{\n    cursor:pointer;\n}\n\n.to-do .buttons{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.3rem;\n    gap: 1rem;\n    width: 300px;\n}\n.note .buttons{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.3rem;\n    gap: 1rem;\n    width: 300px;\n}\n\n.to-do .buttons button,\n.note .buttons button\n    {\n    border: none;\n    background: inherit;\n    height: 100%;\n    font-size: 1.3rem;\n}\n\n.to-do .buttons button:hover,\n.note .buttons button:hover{\n    cursor: pointer;\n    color: var(--hover-text-color);\n}\n\n.to-do .priority__btn.priority__low:hover{\n    color: var(--priority-low-color) !important;\n}\n.to-do .priority__btn.priority__medium:hover{\n    color: var(--priority-medium-color) !important;\n}\n.to-do .priority__btn.priority__high:hover{\n    color: var(--priority-high-color) !important;\n}\n\n/* CHECKBOX */\ninput[type='checkbox']{\n    appearance: none;\n    background-color: #fff;\n    margin:0;\n    font:inherit;\n    color: var(--priority-low-color);\n    border: 1px solid var(--header-hover-color);\n    width: 1.2rem;\n    height:1.2rem;\n    border-radius: 5px;\n    display: grid;\n    place-content: center;\n}\n\ninput[type='checkbox']:hover{\n    border:2px solid var(--header-hover-color)\n}\n\ninput[type='checkbox']::before{\n    content: '';\n    width: 0.6rem;\n    height: 0.6rem;\n    border-radius: 3px;\n    transform: scale(0);\n    transition: .12s transform ease-in-out;\n    box-shadow: inset 1em 1em var(--priority-low-color);\n}\n\ninput[type='checkbox']:checked::before{\n    transform:scale(1);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/menu.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/menu.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.menu{
    width: 300px;
    background: var(--background-color-2);
    border-right: 1px solid var(--tab-border-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    /* animation: slideInLeft linear .3s; */
}

.menu[closing]{
    animation: slideOutLeft linear .3s;
}

.menu__top > div{
    width: 14rem;
}

.search__bar{
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--nav-border-color);
    border-radius: 10px;
    background: #FFF;
    /* padding: 0 0.25rem; */
    margin-bottom: 1rem;
}

.search__bar > input{
    width: 10rem;
    border: none;
    border-radius: 10px;
    padding-left: .5rem;
}

.search__bar > input:focus{
    outline:none;
}

.search__bar > div{
    border-radius: 10px;
}

.search__bar > div:hover{
    cursor: pointer;
    color: var(--hover-text-color)
}

.menu__item{
    display: flex;
    justify-content: start;
    margin-bottom: 1rem;
    border-radius:10px;
}

.menu__item:hover{
    cursor: pointer;
    background:var(--hover-background-color);
}

.menu__item span{
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
}

.menu__item.project__list{
    flex-direction: column;
    border-radius:0;
}

.menu__item.project__list:hover{
    cursor: default !important;
    background: inherit;
    color:inherit;
}

.menu__item.project__list > div{
    display: flex;
    justify-content: start;
    position: relative;
    border-radius: 10px;
}

.menu__item.project__list > div:hover{
    background: var(--hover-background-color);
    cursor: pointer;
}

.arrow {
    position: absolute;
    right:0;
}

.arrow i{
    color: var(--text-color-dark) !important;
}

.menu__item.project__list ul{
    margin: 1rem 0 0 0;
    padding: 0;
}

.menu__item.project__list ul li{
    list-style: none;
    height: 40px;
    margin-bottom: .75rem;
    padding:.25rem 0.5rem;
    border:1px solid var(--nav-border-color);
    border-radius:10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background: var(--nav-border-color); */
    color: var(--text-color-dark);
}

.menu__item.project__list ul li span{
    max-width: 5rem;
    overflow: hidden;
}

.menu__item.project__list ul li span:hover{
    cursor:pointer;
}

.menu__item.project__list ul li .buttons{
    display: flex;
    align-items: center;
    gap: .3rem;
}

.menu__item.project__list ul li .buttons button{
    border:none;
    background: inherit;
    color: var(--text-color-dark);
    font-size:1.2rem;
}

.menu__item.project__list ul li .buttons button:hover{
    cursor:pointer;
    color:var(--hover-text-color)
}

.menu__item.project__list ul li:hover{
    box-shadow: var(--shadow-color) 5px 5px 10px;

}

.project__add-btn{
    border:none !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin-bottom: 0 !important;
    background: inherit !important;
}

.project__add-btn:hover{
    cursor: default !important;
    box-shadow: none !important;
}

.project__add-btn button{
    background: var(--nav-border-color);
    color: var(--text-color-light);
    font-size: 1.3rem;
    border: none;
    border-radius: 10px;
    padding: 0 .5rem;
}

.project__add-btn button:hover{
    cursor: pointer;
    box-shadow: var(--shadow-color) 5px 5px 10px;
    border:none !important;
}

.menu__bot{
    font-size: 1.3rem !important;
}
`, "",{"version":3,"sources":["webpack://./src/style/menu.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,qCAAqC;IACrC,+CAA+C;IAC/C,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;IACf,uCAAuC;AAC3C;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,yCAAyC;IACzC,mBAAmB;IACnB,gBAAgB;IAChB,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,0BAA0B;IAC1B,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,yCAAyC;IACzC,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,OAAO;AACX;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,qBAAqB;IACrB,qBAAqB;IACrB,wCAAwC;IACxC,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,yCAAyC;IACzC,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,6BAA6B;IAC7B,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd;AACJ;;AAEA;IACI,4CAA4C;;AAEhD;;AAEA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,8BAA8B;IAC9B,kCAAkC;IAClC,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;AAC/B;;AAEA;IACI,mCAAmC;IACnC,8BAA8B;IAC9B,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,4CAA4C;IAC5C,sBAAsB;AAC1B;;AAEA;IACI,4BAA4B;AAChC","sourcesContent":[".menu{\n    width: 300px;\n    background: var(--background-color-2);\n    border-right: 1px solid var(--tab-border-color);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1rem 0;\n    /* animation: slideInLeft linear .3s; */\n}\n\n.menu[closing]{\n    animation: slideOutLeft linear .3s;\n}\n\n.menu__top > div{\n    width: 14rem;\n}\n\n.search__bar{\n    display: flex;\n    justify-content: space-between;\n    border: 1px solid var(--nav-border-color);\n    border-radius: 10px;\n    background: #FFF;\n    /* padding: 0 0.25rem; */\n    margin-bottom: 1rem;\n}\n\n.search__bar > input{\n    width: 10rem;\n    border: none;\n    border-radius: 10px;\n    padding-left: .5rem;\n}\n\n.search__bar > input:focus{\n    outline:none;\n}\n\n.search__bar > div{\n    border-radius: 10px;\n}\n\n.search__bar > div:hover{\n    cursor: pointer;\n    color: var(--hover-text-color)\n}\n\n.menu__item{\n    display: flex;\n    justify-content: start;\n    margin-bottom: 1rem;\n    border-radius:10px;\n}\n\n.menu__item:hover{\n    cursor: pointer;\n    background:var(--hover-background-color);\n}\n\n.menu__item span{\n    display: flex;\n    align-items: center;\n    margin-left: 0.5rem;\n}\n\n.menu__item.project__list{\n    flex-direction: column;\n    border-radius:0;\n}\n\n.menu__item.project__list:hover{\n    cursor: default !important;\n    background: inherit;\n    color:inherit;\n}\n\n.menu__item.project__list > div{\n    display: flex;\n    justify-content: start;\n    position: relative;\n    border-radius: 10px;\n}\n\n.menu__item.project__list > div:hover{\n    background: var(--hover-background-color);\n    cursor: pointer;\n}\n\n.arrow {\n    position: absolute;\n    right:0;\n}\n\n.arrow i{\n    color: var(--text-color-dark) !important;\n}\n\n.menu__item.project__list ul{\n    margin: 1rem 0 0 0;\n    padding: 0;\n}\n\n.menu__item.project__list ul li{\n    list-style: none;\n    height: 40px;\n    margin-bottom: .75rem;\n    padding:.25rem 0.5rem;\n    border:1px solid var(--nav-border-color);\n    border-radius:10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    /* background: var(--nav-border-color); */\n    color: var(--text-color-dark);\n}\n\n.menu__item.project__list ul li span{\n    max-width: 5rem;\n    overflow: hidden;\n}\n\n.menu__item.project__list ul li span:hover{\n    cursor:pointer;\n}\n\n.menu__item.project__list ul li .buttons{\n    display: flex;\n    align-items: center;\n    gap: .3rem;\n}\n\n.menu__item.project__list ul li .buttons button{\n    border:none;\n    background: inherit;\n    color: var(--text-color-dark);\n    font-size:1.2rem;\n}\n\n.menu__item.project__list ul li .buttons button:hover{\n    cursor:pointer;\n    color:var(--hover-text-color)\n}\n\n.menu__item.project__list ul li:hover{\n    box-shadow: var(--shadow-color) 5px 5px 10px;\n\n}\n\n.project__add-btn{\n    border:none !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    margin-bottom: 0 !important;\n    background: inherit !important;\n}\n\n.project__add-btn:hover{\n    cursor: default !important;\n    box-shadow: none !important;\n}\n\n.project__add-btn button{\n    background: var(--nav-border-color);\n    color: var(--text-color-light);\n    font-size: 1.3rem;\n    border: none;\n    border-radius: 10px;\n    padding: 0 .5rem;\n}\n\n.project__add-btn button:hover{\n    cursor: pointer;\n    box-shadow: var(--shadow-color) 5px 5px 10px;\n    border:none !important;\n}\n\n.menu__bot{\n    font-size: 1.3rem !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/nav.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/nav.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.nav__bar{
    display: flex;
    flex-direction: column;
    width: 3rem;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    border-right: 1px solid var(--tab-border-color);
    /* animation: slideInLeft linear .3s; */
}

.nav__bar[closing]{
    animation: slideOutLeft linear .3s;
}

.nav__items{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.inbox__nav i{
    color: var(--inbox-color);
}

.today__nav i{
    color:var(--today-color)
}

.project__nav i{
    color:var(--project-color)
}

.history__nav i{
    color:var(--history-color)
}

.appearance__mode i,
.menu__bot i{
    color: var(--light-mode-color);
}`, "",{"version":3,"sources":["webpack://./src/style/nav.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;IACf,+CAA+C;IAC/C,uCAAuC;AAC3C;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;;IAEI,8BAA8B;AAClC","sourcesContent":[".nav__bar{\n    display: flex;\n    flex-direction: column;\n    width: 3rem;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1rem 0;\n    border-right: 1px solid var(--tab-border-color);\n    /* animation: slideInLeft linear .3s; */\n}\n\n.nav__bar[closing]{\n    animation: slideOutLeft linear .3s;\n}\n\n.nav__items{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.inbox__nav i{\n    color: var(--inbox-color);\n}\n\n.today__nav i{\n    color:var(--today-color)\n}\n\n.project__nav i{\n    color:var(--project-color)\n}\n\n.history__nav i{\n    color:var(--history-color)\n}\n\n.appearance__mode i,\n.menu__bot i{\n    color: var(--light-mode-color);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inconsolata&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --background-color-1: #F3EEEA;
    --background-color-2: #EAE4E0;
    --header-color: #776B5D;
    --header-hover-color: #5a5147;
    --tab-border-color: #B0A695;
    --nav-border-color: #51493F;
    --text-color-light: #F3EEEA;
    --text-color-dark: #333333;
    --text-color-nav: #51493F;
    --inbox-color: #78ACC2;
    --today-color: #56854B;
    --project-color: #502ABC;
    --history-color: #E1516B;
    --hover-text-color: #C29778;
    --hover-background-color: #FFFFFF;
    --priority-low-color: #56854B;
    --priority-medium-color: #dabe36;
    --priority-high-color: #E15151;
    --edit-btn-color: #78ACC2;
    --delete-btn-color: #E15151;
    --light-mode-color: #B89B01;
    --shadow-color: #c6c6c6;
}

body{
    margin: 0;
    padding: 0;
    height: auto;
    width: auto;
    font-family: 'Inconsolata', monospace;
    font-size:20px;
    color: var(--text-color-dark);
    background: var(--background-color-1);
    overflow: hidden;
}
/* Common */
.df{
    display: flex !important;
}

.d-off{
    display: none !important;
}

.icon__big{
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
}

.icon__big:hover{
    cursor: pointer;
    background: var(--hover-background-color);
    color: var(--hover-text-color);
}

.icon__small{
    font-size: 1.3rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.priority__btn.priority__low{
    color: var(--priority-low-color);
}

.priority__btn.priority__medium{
    color: var(--priority-medium-color);
}

.priority__btn.priority__high{
    color: var(--priority-high-color);
}

.btn{
    border: none;
    border-radius: 10px;
    padding: .5rem 1rem;
    font-weight: 600;
    font-family: 'Inconsolata', monospace;
}

.btn:hover{
    cursor: pointer;
    opacity: .8;
}

.rotate-180{
    transform: rotate(180deg);
}

.container{
    display: flex;
    flex-direction: row;
    min-height: 95vh;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}

@keyframes slideInLeft {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

@keyframes slideOutLeft{
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
}

@keyframes slideInRight {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
}

@keyframes slideOutRight {
    from { transform: translateX(0); }
    to { transform: translateX(100%); }
}

.fadeIn{
    animation:fadeIn linear .3s;
}

.fadeOut{
    animation: fadeOut linear .3s;
}

.slideInLeft{
    animation: slideInLeft linear .3s;
}

.slideOutLeft{
    animation: slideOutLeft linear .3s;
}

.slideInRight{
    animation: slideInRight linear .3s;
}

.slideOutRight{
    animation: slideOutRight linear .3s;
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAEA;IACI,6BAA6B;IAC7B,6BAA6B;IAC7B,uBAAuB;IACvB,6BAA6B;IAC7B,2BAA2B;IAC3B,2BAA2B;IAC3B,2BAA2B;IAC3B,0BAA0B;IAC1B,yBAAyB;IACzB,sBAAsB;IACtB,sBAAsB;IACtB,wBAAwB;IACxB,wBAAwB;IACxB,2BAA2B;IAC3B,iCAAiC;IACjC,6BAA6B;IAC7B,gCAAgC;IAChC,8BAA8B;IAC9B,yBAAyB;IACzB,2BAA2B;IAC3B,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,YAAY;IACZ,WAAW;IACX,qCAAqC;IACrC,cAAc;IACd,6BAA6B;IAC7B,qCAAqC;IACrC,gBAAgB;AACpB;AACA,WAAW;AACX;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,yCAAyC;IACzC,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,gBAAgB;IAChB,qCAAqC;AACzC;;AAEA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,OAAO,UAAU,EAAE;IACnB,KAAK,UAAU,EAAE;AACrB;;AAEA;IACI,OAAO,UAAU,EAAE;IACnB,KAAK,UAAU,EAAE;AACrB;;AAEA;IACI,OAAO,4BAA4B,EAAE;IACrC,KAAK,wBAAwB,EAAE;AACnC;;AAEA;IACI,OAAO,wBAAwB,EAAE;IACjC,KAAK,4BAA4B,EAAE;AACvC;;AAEA;IACI,OAAO,2BAA2B,EAAE;IACpC,KAAK,wBAAwB,EAAE;AACnC;;AAEA;IACI,OAAO,wBAAwB,EAAE;IACjC,KAAK,2BAA2B,EAAE;AACtC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,mCAAmC;AACvC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');\n\n:root{\n    --background-color-1: #F3EEEA;\n    --background-color-2: #EAE4E0;\n    --header-color: #776B5D;\n    --header-hover-color: #5a5147;\n    --tab-border-color: #B0A695;\n    --nav-border-color: #51493F;\n    --text-color-light: #F3EEEA;\n    --text-color-dark: #333333;\n    --text-color-nav: #51493F;\n    --inbox-color: #78ACC2;\n    --today-color: #56854B;\n    --project-color: #502ABC;\n    --history-color: #E1516B;\n    --hover-text-color: #C29778;\n    --hover-background-color: #FFFFFF;\n    --priority-low-color: #56854B;\n    --priority-medium-color: #dabe36;\n    --priority-high-color: #E15151;\n    --edit-btn-color: #78ACC2;\n    --delete-btn-color: #E15151;\n    --light-mode-color: #B89B01;\n    --shadow-color: #c6c6c6;\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    height: auto;\n    width: auto;\n    font-family: 'Inconsolata', monospace;\n    font-size:20px;\n    color: var(--text-color-dark);\n    background: var(--background-color-1);\n    overflow: hidden;\n}\n/* Common */\n.df{\n    display: flex !important;\n}\n\n.d-off{\n    display: none !important;\n}\n\n.icon__big{\n    width: 2.5rem;\n    height: 2.5rem;\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n}\n\n.icon__big:hover{\n    cursor: pointer;\n    background: var(--hover-background-color);\n    color: var(--hover-text-color);\n}\n\n.icon__small{\n    font-size: 1.3rem;\n    width: 2rem;\n    height: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.priority__btn.priority__low{\n    color: var(--priority-low-color);\n}\n\n.priority__btn.priority__medium{\n    color: var(--priority-medium-color);\n}\n\n.priority__btn.priority__high{\n    color: var(--priority-high-color);\n}\n\n.btn{\n    border: none;\n    border-radius: 10px;\n    padding: .5rem 1rem;\n    font-weight: 600;\n    font-family: 'Inconsolata', monospace;\n}\n\n.btn:hover{\n    cursor: pointer;\n    opacity: .8;\n}\n\n.rotate-180{\n    transform: rotate(180deg);\n}\n\n.container{\n    display: flex;\n    flex-direction: row;\n    min-height: 95vh;\n}\n\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n\n@keyframes fadeOut {\n    from { opacity: 1; }\n    to { opacity: 0; }\n}\n\n@keyframes slideInLeft {\n    from { transform: translateX(-100%); }\n    to { transform: translateX(0); }\n}\n\n@keyframes slideOutLeft{\n    from { transform: translateX(0); }\n    to { transform: translateX(-100%); }\n}\n\n@keyframes slideInRight {\n    from { transform: translateX(100%); }\n    to { transform: translateX(0); }\n}\n\n@keyframes slideOutRight {\n    from { transform: translateX(0); }\n    to { transform: translateX(100%); }\n}\n\n.fadeIn{\n    animation:fadeIn linear .3s;\n}\n\n.fadeOut{\n    animation: fadeOut linear .3s;\n}\n\n.slideInLeft{\n    animation: slideInLeft linear .3s;\n}\n\n.slideOutLeft{\n    animation: slideOutLeft linear .3s;\n}\n\n.slideInRight{\n    animation: slideInRight linear .3s;\n}\n\n.slideOutRight{\n    animation: slideOutRight linear .3s;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/content.css":
/*!*******************************!*\
  !*** ./src/style/content.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./content.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/content.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/detail.css":
/*!******************************!*\
  !*** ./src/style/detail.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_detail_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./detail.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/detail.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_detail_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_detail_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_detail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_detail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/dialog.css":
/*!******************************!*\
  !*** ./src/style/dialog.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./dialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/dialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/header.css":
/*!******************************!*\
  !*** ./src/style/header.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/item.css":
/*!****************************!*\
  !*** ./src/style/item.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_item_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./item.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/item.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_item_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_item_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_item_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_item_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/menu.css":
/*!****************************!*\
  !*** ./src/style/menu.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/nav.css":
/*!***************************!*\
  !*** ./src/style/nav.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./nav.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/nav.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/component/Default Project/history.js":
/*!**************************************************!*\
  !*** ./src/component/Default Project/history.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project */ "./src/component/project.js");


function history(){
    const history = Object.create((0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])())
    history.changeValue('History', 'You can see all your finished todos here')

    return history
}

const historyObj = history()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (historyObj);

/***/ }),

/***/ "./src/component/Default Project/inbox.js":
/*!************************************************!*\
  !*** ./src/component/Default Project/inbox.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project */ "./src/component/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo */ "./src/component/todo.js");
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../note */ "./src/component/note.js");




const todo1StartDate = new Date()
const todo1DueDate = new Date()
todo1DueDate.setFullYear(todo1DueDate.getFullYear() + 1)

const inbox = () => {
    const inboxObj = Object.create((0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])())
    inboxObj.changeValue('Inbox', 'Where you store all your new stuffs')

    const todo1 = (0,_todo__WEBPACK_IMPORTED_MODULE_1__["default"])()
    
    todo1.changeValue('Create your first project!', 'Click the add button on our menu', todo1StartDate, todo1DueDate, 'high')

    const note1 = (0,_note__WEBPACK_IMPORTED_MODULE_2__["default"])()
    note1.changeValue('Today is a wonderful day!', 'Do something interesting today!')

    inboxObj.addItem(todo1)
    inboxObj.addItem(note1)

    return inboxObj
}

const inboxObj = inbox()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inboxObj);

/***/ }),

/***/ "./src/component/Default Project/searchResult.js":
/*!*******************************************************!*\
  !*** ./src/component/Default Project/searchResult.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchResult)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project */ "./src/component/project.js");


function searchResult(){
    const searchResultObj = Object.create((0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])())
    searchResultObj.changeValue('Search Result', 'Where you can see your search results!')
    return searchResultObj
}



/***/ }),

/***/ "./src/component/Default Project/today.js":
/*!************************************************!*\
  !*** ./src/component/Default Project/today.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _itemContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../itemContainer */ "./src/component/itemContainer.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project */ "./src/component/project.js");





const today = () => {
    const todayObj = Object.create((0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])())

    todayObj.changeValue('Today', `You can store your today's to-dos here`)

    return todayObj
}

const todayObj = today()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todayObj);

/***/ }),

/***/ "./src/component/Layout/createContent.js":
/*!***********************************************!*\
  !*** ./src/component/Layout/createContent.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContent)
/* harmony export */ });
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ "./src/component/Layout/createTodo.js");
/* harmony import */ var _createNote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNote */ "./src/component/Layout/createNote.js");
/* harmony import */ var _utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common/appendChildren */ "./src/utils/common/appendChildren.js");
/* harmony import */ var _utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/common/createDivWithClass */ "./src/utils/common/createDivWithClass.js");
/* harmony import */ var _createFinishedTodo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createFinishedTodo */ "./src/component/Layout/createFinishedTodo.js");






function createContent(prj) {
    const title = prj.getValue().title

    const contentDiv = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_3__["default"])('content')

    const titleDiv = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_3__["default"])('content__title')
    const titleH1 = document.createElement('h1')
    titleH1.innerHTML = title

    const titleIcon = document.createElement('i')
    titleIcon.classList.add('ri-information-2-fill')

    const itemDiv = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_3__["default"])('content__items')

    const items = prj.getAllItem()
    items.forEach(item => {
        const itemType = item.getType()
        if (prj.getValue().title === 'History'){
            console.log('added finished item')
            itemDiv.appendChild((0,_createFinishedTodo__WEBPACK_IMPORTED_MODULE_4__["default"])(item))
        } else if (itemType === 'note') {
            itemDiv.appendChild((0,_createNote__WEBPACK_IMPORTED_MODULE_1__["default"])(item))
        } else if (itemType === 'todo') {
            itemDiv.appendChild((0,_createTodo__WEBPACK_IMPORTED_MODULE_0__["default"])(item))
        }
    })

    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_2__["default"])(titleDiv, [titleH1, titleIcon])
    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_2__["default"])(contentDiv, [titleDiv, itemDiv])

    return contentDiv
}




/***/ }),

/***/ "./src/component/Layout/createDetail.js":
/*!**********************************************!*\
  !*** ./src/component/Layout/createDetail.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDetail)
/* harmony export */ });
/* harmony import */ var _utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/common/appendChildren */ "./src/utils/common/appendChildren.js");
/* harmony import */ var _utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/common/createDivWithClass */ "./src/utils/common/createDivWithClass.js");



function createDetail(obj) {
    const detail = obj.getValue()
    const title = detail.title
    const description = detail.description

    const detailDiv = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_1__["default"])('detail', 'd-off')

    const titleH1 = document.createElement('h1')
    titleH1.innerHTML = title

    const descriptionP = document.createElement('p')
    descriptionP.innerHTML = description

    const detailList = document.createElement('div')
    for (let item in detail) {
        if (item !== 'title' && item !== 'description') {
            const detailItem = document.createElement('span')
            switch(item){
                case 'date':
                    detailItem.innerHTML = `<strong>Date created: </strong> ${detail[item]}`
                    break
                case 'startDate':
                    detailItem.innerHTML = `<strong>Start date: </strong> ${detail[item]}`
                    break
                case 'dueDate':
                    detailItem.innerHTML = `<strong>Due date: </strong> ${detail[item]}`
                    break
                case 'priority':
                    detailItem.innerHTML = `<strong>Priority: </strong> ${detail[item]}`
                    break
                case 'status':
                    if(detail[item] === true){
                        detailItem.innerHTML = `<strong>Status: </strong> Finished`
                    }else{
                        detailItem.innerHTML = `<strong>Status: </strong> On-going`
                    }
                    break
            }
            detailList.appendChild(detailItem)
        }
    }

    const closeBtn = document.createElement('button')
    closeBtn.classList.add('close__btn')
    closeBtn.innerHTML = `<i class="ri-close-line"></i>`

    // const deleteBtn = document.createElement('button')
    // deleteBtn.classList.add('btn','delete__btn')
    // deleteBtn.innerHTML = `Delete`

    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(detailDiv, [closeBtn, titleH1, descriptionP, detailList])

    return detailDiv
}



/***/ }),

/***/ "./src/component/Layout/createDialogs.js":
/*!***********************************************!*\
  !*** ./src/component/Layout/createDialogs.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createConfirmDialog: () => (/* binding */ createConfirmDialog),
/* harmony export */   createEditDialog: () => (/* binding */ createEditDialog),
/* harmony export */   createItemDialog: () => (/* binding */ createItemDialog),
/* harmony export */   createMoveDialog: () => (/* binding */ createMoveDialog),
/* harmony export */   createProjectDialog: () => (/* binding */ createProjectDialog)
/* harmony export */ });
/* harmony import */ var _utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/common/appendChildren */ "./src/utils/common/appendChildren.js");
/* harmony import */ var _utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/common/createDivWithClass */ "./src/utils/common/createDivWithClass.js");
/* harmony import */ var _projectContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projectContainer */ "./src/component/projectContainer.js");
/* harmony import */ var _utils_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/state */ "./src/utils/state.js");





// Project add dialog
function createProjectDialog() {
    const dialog = document.createElement('dialog')
    dialog.id = 'project__add-dialog'

    const form = document.createElement('form')
    form.id = 'project__add-form'
    form.innerHTML = `
        <div>
            <label for="title">Project Title:</label>
            <input required type="text" id="title" name="title" class="project__title-input">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea required type="text" id="description" name="description" class="project__des-input"></textarea>
        </div>
    `

    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(form, [createAddButtonDiv()])
    dialog.appendChild(form)

    return dialog
}

// Item add dialog
function createItemDialog() {
    const dialog = document.createElement('dialog')
    dialog.id = 'item__add-dialog'

    const selectItemForm = document.createElement('form')
    selectItemForm.classList.add('select__item-form')
    selectItemForm.innerHTML = `
        <label for="item">Choose which item to create:</label>
        <select name="item" id="item" class="select__item-input">
            <option value="to-do">Todo</option>
            <option value="note">Note</option>
        </select>`

    const todoAddForm = createTodoAddForm()
    const noteAddForm = createNoteAddForm()

    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(dialog, [selectItemForm, todoAddForm, noteAddForm, createProjectSelect(), createAddButtonDiv()])

    return dialog
}

function createTodoAddForm() {
    const todoAddForm = document.createElement('form')
    todoAddForm.id = 'todo__add-form'
    todoAddForm.innerHTML = `
        <div>
            <label for="title">Title:</label>
            <input required type="text" id="title" name="title" class="todo__title-input">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea required id="description" name="description" class="todo__des-input"></textarea>
        </div>
        <div>
            <label for="startDate">Start date:</label>
            <input required type="date" name="startDate" id="startDate" class="todo__start-input">
        </div>
        <div>
            <label for="dueDate">Due date:</label>
            <input required type="date" name="dueDate" id="dueDate" class="todo__due-input">
        </div>
        <div>
            <label for="priority">Priority:</label>
            <select name="priority" id="priority" class="todo__priority-input">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>`

    const startDateInput = todoAddForm.querySelector('#startDate')
    const dueDateInput = todoAddForm.querySelector('#dueDate')

    startDateInput.addEventListener('input', function() {
        dueDateInput.min = startDateInput.value
    })

    dueDateInput.addEventListener('click', () => {
        startDateInput.max = dueDateInput.value
    })

    return todoAddForm
}

function createNoteAddForm() {
    const noteAddForm = document.createElement('form')
    noteAddForm.id = 'note__add-form'
    noteAddForm.classList.add('d-off')
    noteAddForm.innerHTML = `
        <div>
            <label for="title">Title:</label>
            <input required type="text" id="title" name="title" class="note__title-input">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description" class="note__des-input"></textarea>
        </div>`

    return noteAddForm
}

function createProjectSelect() {
    const projectSelectDiv = document.createElement('div')
    const projectSelectLabel = document.createElement('label')
    projectSelectLabel.setAttribute('for', 'project')
    projectSelectLabel.innerHTML = `Put it in: `
    const projectSelectList = document.createElement('select')
    projectSelectList.classList.add('item__project-input')
    projectSelectList.setAttribute('name', 'project')
    projectSelectList.setAttribute('id', 'project')
    const currentProject = (0,_utils_state__WEBPACK_IMPORTED_MODULE_3__.getCurrentState)()

    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(projectSelectDiv, [projectSelectLabel, projectSelectList])

    const projects = _projectContainer__WEBPACK_IMPORTED_MODULE_2__["default"].getAllItem()
    projects.forEach(prj => {
        const option = document.createElement('option')
        option.innerText = `${prj.getValue().title}`
        projectSelectList.appendChild(option)
    })

    projectSelectList.value = currentProject.getValue().title
    return projectSelectDiv
}

function createAddButtonDiv() {
    const buttonDiv = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_1__["default"])('buttons')
    buttonDiv.innerHTML = `
        <button class="btn add__btn" formmethod="dialog">Create</button>
        <button class="btn close__btn" formmethod="dialog">Cancel</button>`

    return buttonDiv
}

// Confirm dialog
function createConfirmDialog() {
    const dialog = document.createElement('dialog')
    dialog.id = 'confirm__dialog'

    const message = document.createElement('span')
    message.innerHTML = `Are you sure?`

    const buttonDiv = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_1__["default"])('buttons')
    buttonDiv.innerHTML = `
        <button class="btn add__btn" formmethod="dialog">Yes</button>
        <button class="btn close__btn" formmethod="dialog">No</button>`

    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(dialog, [message, buttonDiv])

    return dialog
}

// Item edit dialog
function createEditDialog(){
    const dialog = document.createElement('dialog')
    dialog.id = 'item__edit-dialog'

    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(dialog, [createTodoEditForm(), createNoteEditForm(), createProjectEditForm(), createEditButtonDiv()])

    return dialog
}

function createTodoEditForm(){
    const todoEditForm = document.createElement('form')
    todoEditForm.id = 'todo__edit-form'
    todoEditForm.innerHTML = `
        <div>
            <label for="title">Title:</label>
            <input required type="text" id="title" name="title" class="todo__title-input">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea required id="description" name="description" class="todo__des-input"></textarea>
        </div>
        <div>
            <label for="startDate">Start date:</label>
            <input required type="date" name="startDate" id="startDate" class="todo__start-input">
        </div>
        <div>
            <label for="dueDate">Due date:</label>
            <input required type="date" name="dueDate" id="dueDate" class="todo__due-input">
        </div>`

    return todoEditForm
}

function createNoteEditForm(){
    const noteEditForm = document.createElement('form')
    noteEditForm.id = 'note__edit-form'
    noteEditForm.classList.add('d-off')
    noteEditForm.innerHTML = `
        <div>
            <label for="title">Title:</label>
            <input required type="text" id="title" name="title" class="note__title-input">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description" class="note__des-input"></textarea>
        </div>`

    return noteEditForm
}

function createProjectEditForm(){
    const projectEditForm = document.createElement('form')
    projectEditForm.id = 'project__edit-form'
    projectEditForm.classList.add('d-off')
    projectEditForm.innerHTML = `
        <div>
            <label for="title">Title:</label>
            <input required type="text" id="title" name="title" class="project__title-input">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description" class="project__des-input"></textarea>
        </div>`

    return projectEditForm
}

function createEditButtonDiv() {
    const buttonDiv = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_1__["default"])('buttons')
    buttonDiv.innerHTML = `
        <button class="btn add__btn" formmethod="dialog">Save</button>
        <button class="btn close__btn" formmethod="dialog">Cancel</button>`

    return buttonDiv
}

// Move dialog 

function createMoveDialog(){
    const dialog = document.createElement('dialog')
    dialog.id = 'item__move-dialog'
    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(dialog, [createProjectSelect(), createEditButtonDiv()])

    return dialog
}

/***/ }),

/***/ "./src/component/Layout/createFinishedTodo.js":
/*!****************************************************!*\
  !*** ./src/component/Layout/createFinishedTodo.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFinishedTodo)
/* harmony export */ });
/* harmony import */ var _utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/common/appendChildren */ "./src/utils/common/appendChildren.js");
/* harmony import */ var _utils_common_createButtonWithClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/common/createButtonWithClass */ "./src/utils/common/createButtonWithClass.js");
/* harmony import */ var _utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common/createDivWithClass */ "./src/utils/common/createDivWithClass.js");




function createFinishedTodo(todo) {
    const detail = todo.getValue()

    const todoDiv = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_2__["default"])('finished','content__item', 'to-do')

    const titleDiv = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_2__["default"])('title')
    titleDiv.innerHTML = `<span>${detail.title}</span>`

    const buttonDiv = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_2__["default"])('buttons')
    const deleteBtn = (0,_utils_common_createButtonWithClass__WEBPACK_IMPORTED_MODULE_1__["default"])('delete__btn', 'ri-delete-bin-6-line')

    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(buttonDiv, [deleteBtn])
    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(todoDiv, [titleDiv, buttonDiv])

    return todoDiv
}

/***/ }),

/***/ "./src/component/Layout/createHeader.js":
/*!**********************************************!*\
  !*** ./src/component/Layout/createHeader.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/common/appendChildren */ "./src/utils/common/appendChildren.js");
/* harmony import */ var _utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/common/createDivWithClass */ "./src/utils/common/createDivWithClass.js");
/* harmony import */ var _utils_common_createIconWithClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common/createIconWithClass */ "./src/utils/common/createIconWithClass.js");




function createHeader() {
    const header = document.createElement('header')

    const menuBtn = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_1__["default"])('menu__btn', 'icon__big')
    const menuIcon = (0,_utils_common_createIconWithClass__WEBPACK_IMPORTED_MODULE_2__["default"])('ri-menu-line')
    menuBtn.appendChild(menuIcon)

    const logo = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_1__["default"])('logo')
    logo.innerHTML = `
        <i class="ri-stack-line"></i>
        <span>Tasko</span>`

    const addBtn = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_1__["default"])('add__btn', 'icon__big')
    const addIcon = (0,_utils_common_createIconWithClass__WEBPACK_IMPORTED_MODULE_2__["default"])('ri-add-line')
    addBtn.appendChild(addIcon)

    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(header, [menuBtn, logo, addBtn])

    return header
}


/***/ }),

/***/ "./src/component/Layout/createLayout.js":
/*!**********************************************!*\
  !*** ./src/component/Layout/createLayout.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLayout)
/* harmony export */ });
/* harmony import */ var _createHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHeader */ "./src/component/Layout/createHeader.js");
/* harmony import */ var _createNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNavigation */ "./src/component/Layout/createNavigation.js");
/* harmony import */ var _createMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMenu */ "./src/component/Layout/createMenu.js");
/* harmony import */ var _createContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createContent */ "./src/component/Layout/createContent.js");
/* harmony import */ var _createDialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createDialogs */ "./src/component/Layout/createDialogs.js");
/* harmony import */ var _utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/common/appendChildren */ "./src/utils/common/appendChildren.js");







function createLayout(obj){
    const body = document.querySelector('body')

    const container = document.createElement('section')
    container.classList.add('container')

    const content = (0,_createContent__WEBPACK_IMPORTED_MODULE_3__["default"])(obj)
    const projectDialog = (0,_createDialogs__WEBPACK_IMPORTED_MODULE_4__.createProjectDialog)()
    const itemDialog = (0,_createDialogs__WEBPACK_IMPORTED_MODULE_4__.createItemDialog)()
    const editDialog = (0,_createDialogs__WEBPACK_IMPORTED_MODULE_4__.createEditDialog)()
    const moveDialog = (0,_createDialogs__WEBPACK_IMPORTED_MODULE_4__.createMoveDialog)()
    const confirmDialog = (0,_createDialogs__WEBPACK_IMPORTED_MODULE_4__.createConfirmDialog)()

    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_5__["default"])(body, [(0,_createHeader__WEBPACK_IMPORTED_MODULE_0__["default"])(), container])
    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_5__["default"])(container, [(0,_createNavigation__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_createMenu__WEBPACK_IMPORTED_MODULE_2__["default"])(), content, projectDialog, itemDialog, editDialog, moveDialog, confirmDialog])
}

/***/ }),

/***/ "./src/component/Layout/createMenu.js":
/*!********************************************!*\
  !*** ./src/component/Layout/createMenu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/common/appendChildren */ "./src/utils/common/appendChildren.js");
/* harmony import */ var _utils_common_createButtonWithClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/common/createButtonWithClass */ "./src/utils/common/createButtonWithClass.js");
/* harmony import */ var _utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common/createDivWithClass */ "./src/utils/common/createDivWithClass.js");
/* harmony import */ var _projectContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projectContainer */ "./src/component/projectContainer.js");





function createMenu() {
    const menu = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_2__["default"])('menu', 'd-off')

    const menuTop = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_2__["default"])('menu__top')
    const menuItemsHTML = `
        <div class="search__bar">
            <input type="text" class="search__input">
            <div class="search__icon icon__small">
                <i class="ri-search-line"></i>
            </div>
        </div>
        <div class="menu__item inbox__nav ">
            <div class="icon__small">
                <i class="ri-inbox-2-line"></i>
            </div>
            <span>Inbox</span>
        </div>
        <div class="menu__item today__nav">
            <div class=" icon__small">
                <i class="ri-calendar-line"></i>
            </div>
            <span>Today</span>
        </div>
    `
    menuTop.innerHTML = menuItemsHTML
    const historyNav = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_2__["default"])('menu__item', 'history__nav')
    historyNav.innerHTML = `
        <div class=" icon__small">
            <i class="ri-history-line"></i>
        </div>
        <span>History</span>`
    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(menuTop, [createProjectList(), historyNav])
    
    const menuBot = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_2__["default"])('menu__bot', 'icon__big')
    menuBot.innerHTML = '<i class="ri-sun-line"></i>'

    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(menu, [menuTop, menuBot])

    return menu
}

function createProjectList(){
    const projectListDiv = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_2__["default"])('menu__item', 'project__list')
    projectListDiv.innerHTML = `
        <div class="project__nav ">
            <div class="icon__small">
                <i class="ri-archive-line"></i>
            </div>
            <span>Project</span>
            <div class="arrow icon__small">
                <i class="ri-arrow-up-s-line"></i>
            </div>
        </div>`

    const projectList = document.createElement('ul')
    projectList.classList.add('project__list-items', 'd-off')
    const projects = _projectContainer__WEBPACK_IMPORTED_MODULE_3__["default"].getAllItem()
    projects.forEach(prj => {
        if(prj.getValue().title !== 'Inbox' && prj.getValue().title !== 'Today'){
            const projectLi = document.createElement('li')
            projectLi.classList.add('project__list-item')
            projectLi.innerHTML = `<span>${prj.getValue().title}</span>`
            const buttonDiv = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_2__["default"])('buttons')
            const editBtn = (0,_utils_common_createButtonWithClass__WEBPACK_IMPORTED_MODULE_1__["default"])('edit__btn', 'ri-edit-box-line')
            const deleteBtn = (0,_utils_common_createButtonWithClass__WEBPACK_IMPORTED_MODULE_1__["default"])('delete__btn', 'ri-delete-bin-6-line')
            ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(buttonDiv, [editBtn, deleteBtn])
            projectLi.appendChild(buttonDiv)
            projectList.appendChild(projectLi)
        }
    })

    const addBtnLi = document.createElement('li')
    addBtnLi.classList.add('project__add-btn')
    const addBtn = document.createElement('button')
    addBtn.textContent = `+`
    addBtnLi.appendChild(addBtn)

    projectList.appendChild(addBtnLi)
    projectListDiv.appendChild(projectList)
    return projectListDiv
}


/***/ }),

/***/ "./src/component/Layout/createNavigation.js":
/*!**************************************************!*\
  !*** ./src/component/Layout/createNavigation.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNavigationBar)
/* harmony export */ });
/* harmony import */ var _utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/common/appendChildren */ "./src/utils/common/appendChildren.js");
/* harmony import */ var _utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/common/createDivWithClass */ "./src/utils/common/createDivWithClass.js");



function createNavigationBar() {
    const navBar = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_1__["default"])('nav__bar')

    const navItems = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_1__["default"])('nav__items')
    const navItemHTML = `
        <div class="nav__item icon__big search__nav">
            <i class="ri-search-line"></i>
        </div>
        <div class="nav__item icon__big inbox__nav">
            <i class="ri-inbox-2-line"></i>
        </div>
        <div class="nav__item icon__big today__nav">
            <i class="ri-calendar-line"></i>
        </div>
        <div class="nav__item icon__big project__nav">
            <i class="ri-archive-line"></i>
        </div>
        <div class="nav__item icon__big history__nav">
            <i class="ri-history-line"></i>
        </div>
    `
    navItems.innerHTML = navItemHTML

    const appearanceMode = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_1__["default"])('appearance__mode', 'icon__big')
    appearanceMode.innerHTML = '<i class="ri-sun-line"></i>'

    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(navBar, [navItems, appearanceMode])

    return navBar
}


/***/ }),

/***/ "./src/component/Layout/createNote.js":
/*!********************************************!*\
  !*** ./src/component/Layout/createNote.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNote)
/* harmony export */ });
/* harmony import */ var _utils_common_appendChildren_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/common/appendChildren.js */ "./src/utils/common/appendChildren.js");
/* harmony import */ var _utils_common_createDivWithClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/common/createDivWithClass.js */ "./src/utils/common/createDivWithClass.js");



function createNote(note) {
    const detail = note.getValue()

    const noteDiv = (0,_utils_common_createDivWithClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])('note', 'content__item')

    const titleDiv = (0,_utils_common_createDivWithClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])('title')
    titleDiv.innerHTML = `<span>${detail.title}</span>`

    const buttonDiv = (0,_utils_common_createDivWithClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])('buttons')
    buttonDiv.innerHTML = `
        <button class="edit__btn"><i class="ri-edit-box-line"></i></button>
        <button class="move__btn"><i class="ri-arrow-right-circle-line"></i></button>
        <button class="delete__btn"><i class="ri-delete-bin-6-line"></i></button>
    `

    ;(0,_utils_common_appendChildren_js__WEBPACK_IMPORTED_MODULE_0__["default"])(noteDiv, [titleDiv, buttonDiv])

    return noteDiv
}



/***/ }),

/***/ "./src/component/Layout/createTodo.js":
/*!********************************************!*\
  !*** ./src/component/Layout/createTodo.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodo)
/* harmony export */ });
/* harmony import */ var _utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/common/appendChildren */ "./src/utils/common/appendChildren.js");
/* harmony import */ var _utils_common_createButtonWithClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/common/createButtonWithClass */ "./src/utils/common/createButtonWithClass.js");
/* harmony import */ var _utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common/createDivWithClass */ "./src/utils/common/createDivWithClass.js");
/* harmony import */ var _utils_common_setPriorityClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/common/setPriorityClass */ "./src/utils/common/setPriorityClass.js");





function createTodo(todo) {
    const detail = todo.getValue()

    const todoDiv = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_2__["default"])('to-do','content__item')

    const checkboxDiv = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_2__["default"])('checkbox')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('checkbox__input')
    checkboxDiv.appendChild(checkbox)

    const titleDiv = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_2__["default"])('title')
    titleDiv.innerHTML = `<span>${detail.title}</span>`

    const buttonDiv = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_2__["default"])('buttons')
    const editBtn = (0,_utils_common_createButtonWithClass__WEBPACK_IMPORTED_MODULE_1__["default"])('edit__btn', 'ri-edit-box-line')
    const priorityBtn = (0,_utils_common_createButtonWithClass__WEBPACK_IMPORTED_MODULE_1__["default"])('priority__btn', 'ri-flag-2-line')
    const moveBtn = (0,_utils_common_createButtonWithClass__WEBPACK_IMPORTED_MODULE_1__["default"])('move__btn', 'ri-arrow-right-circle-line')
    const deleteBtn = (0,_utils_common_createButtonWithClass__WEBPACK_IMPORTED_MODULE_1__["default"])('delete__btn', 'ri-delete-bin-6-line')

    ;(0,_utils_common_setPriorityClass__WEBPACK_IMPORTED_MODULE_3__["default"])(priorityBtn, detail.priority)

    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(buttonDiv, [editBtn, priorityBtn, moveBtn, deleteBtn])
    ;(0,_utils_common_appendChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(todoDiv, [checkboxDiv, titleDiv, buttonDiv])

    return todoDiv
}






/***/ }),

/***/ "./src/component/Layout/createUndoBox.js":
/*!***********************************************!*\
  !*** ./src/component/Layout/createUndoBox.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createUndoBox)
/* harmony export */ });
/* harmony import */ var _utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/common/createDivWithClass */ "./src/utils/common/createDivWithClass.js");


function createUndoBox(message){
    const undoBox = (0,_utils_common_createDivWithClass__WEBPACK_IMPORTED_MODULE_0__["default"])('undo__box')
    undoBox.innerHTML = `
        <span>${message}</span>
        <div class="buttons">
            <button class="btn undo__btn">Undo</button>
            <button class="btn close__btn">Close</button>
        </div>
        `

    return undoBox
}

/***/ }),

/***/ "./src/component/itemContainer.js":
/*!****************************************!*\
  !*** ./src/component/itemContainer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function itemContainer() {
    const arr = []

    const addItem = (item) => {
        arr.push(item)
    }

    const getItem = (index) => {
        if(index >= 0 && index < arr.length) return arr[index]
    }

    const getAllItem = () => {
        return arr
    }

    const deleteItem = (index) => {
        if(index === 0){
            arr.splice(0,1)
        }else{
            arr.splice(index, index)
        }
    }

    return{
        addItem,
        getItem,
        getAllItem,
        deleteItem
    }
}

const itemContainerObj = itemContainer()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemContainerObj);

/***/ }),

/***/ "./src/component/note.js":
/*!*******************************!*\
  !*** ./src/component/note.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ note)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");


function note(){
    const type = 'note'
    let title, description 
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(new Date(), 'MM/dd/yyyy')

    const changeValue = (tit,des) => {
        title = tit
        description = des
    }

    const getType = () => type

    const getValue = () => {
        return {
            title,
            description,
            date
        }
    }

    return{
        changeValue,
        getType,
        getValue
    }
}

/***/ }),

/***/ "./src/component/project.js":
/*!**********************************!*\
  !*** ./src/component/project.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ project)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");


function project(){
    const arr = []
    const type = 'project'
    let title, description
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(new Date(), 'MM/dd/yyyy')

    const changeValue = (tit,des) => {
        title = tit
        description = des
    }

    const getValue = () => {
        return{title, description, date}
    }

    const addItem = (item) => {
        arr.push(item)
    }

    const deleteItem = (index) => {
        if(index === 0){
            arr.splice(0,1)
        }else{
            arr.splice(index, 1)
        }
    }

    const getItem = (index) => {
        return arr[index]
    }
    const getAllItem = () => {
        return arr
    }

    const getType = () => type
    

    return{
        changeValue,
        getValue,
        addItem,
        deleteItem,
        getItem,
        getAllItem,
        getType
    }
}

/***/ }),

/***/ "./src/component/projectContainer.js":
/*!*******************************************!*\
  !*** ./src/component/projectContainer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   projectContainer: () => (/* binding */ projectContainer)
/* harmony export */ });
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/localStorage */ "./src/utils/localStorage.js");
/* harmony import */ var _Default_Project_inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Default Project/inbox */ "./src/component/Default Project/inbox.js");
/* harmony import */ var _Default_Project_today__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Default Project/today */ "./src/component/Default Project/today.js");




function projectContainer() {
    const arr = []
    const type = 'projectContainer'

    const addItem = (prj) => {
        arr.push(prj)
    }

    const getItem = (index) => {
        if(index >= 0 && index < arr.length) return arr[index]
    }

    const getAllItem = () => {
        return arr
    }

    const deleteItem = (index) => {
        if(index === 0){
            arr.splice(0,1)
        }else{
            arr.splice(index, 1)
        }
    }

    const getType = () => type

    return{
        addItem,
        getItem,
        getAllItem,
        deleteItem,
        getType
    }
}

function projectContainerConstructor() {
    if(localStorage.getItem('projectContainer') === null){
        console.log('Saving to local storage')
        const projectContainerObj = projectContainer()
        projectContainerObj.addItem(_Default_Project_inbox__WEBPACK_IMPORTED_MODULE_1__["default"])
        projectContainerObj.addItem(_Default_Project_today__WEBPACK_IMPORTED_MODULE_2__["default"])
        ;(0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)('projectContainer', projectContainerObj)
        return projectContainerObj
    }else{
        const loadedProjectContainer = (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.loadFromLocalStorage)('projectContainer')
        console.log(loadedProjectContainer)
        return loadedProjectContainer
    }
}

const projectContainerObj = projectContainerConstructor()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectContainerObj);

/***/ }),

/***/ "./src/component/todo.js":
/*!*******************************!*\
  !*** ./src/component/todo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todo)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");


function todo(){
    const type = 'todo'
    let title, description,startDate, dueDate, priority
    let status = false

    const changeValue = (tit,des, start, due,pri) => {
        title = tit
        description = des
        startDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(start, 'MM/dd/yyyy')
        dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(due, 'MM/dd/yyyy')
        priority = pri
    }

    const changePriority = (pri) => {
        priority = pri
    }

    const changeStatus = () => {
        if(status === false){
            status = true
        }else{
            status = false
        }
    }
    
    const getType = () => type

    const getValue = () => {
        return{
            title,
            description,
            startDate,
            dueDate,
            priority,
            status
        }
    }

    return{
        changeValue,
        changeStatus,
        changePriority,
        getType,
        getValue
    }
}

/***/ }),

/***/ "./src/utils/common/appendChildren.js":
/*!********************************************!*\
  !*** ./src/utils/common/appendChildren.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendChildren)
/* harmony export */ });
function appendChildren(parent, children) {
    children.forEach(child => parent.appendChild(child));
}

/***/ }),

/***/ "./src/utils/common/closeThis.js":
/*!***************************************!*\
  !*** ./src/utils/common/closeThis.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ closeThis)
/* harmony export */ });
function closeThis(obj){
    obj.classList.add('d-off')
}

/***/ }),

/***/ "./src/utils/common/createButtonWithClass.js":
/*!***************************************************!*\
  !*** ./src/utils/common/createButtonWithClass.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createButtonWithClass)
/* harmony export */ });
function createButtonWithClass(className, iconClass) {
    const button = document.createElement('button')
    button.classList.add(className)
    if (iconClass) {
        button.innerHTML = `<i class="${iconClass}"></i>`
    }
    return button
}

/***/ }),

/***/ "./src/utils/common/createDivWithClass.js":
/*!************************************************!*\
  !*** ./src/utils/common/createDivWithClass.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDivWithClass)
/* harmony export */ });
function createDivWithClass(...className){
    const div = document.createElement('div');
    div.classList.add(...className);
    return div;
}

/***/ }),

/***/ "./src/utils/common/createIconWithClass.js":
/*!*************************************************!*\
  !*** ./src/utils/common/createIconWithClass.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createIconWithClass)
/* harmony export */ });
function createIconWithClass(className) {
    const icon = document.createElement('i');
    icon.classList.add(className);
    return icon;
}

/***/ }),

/***/ "./src/utils/common/executeWithAnimation.js":
/*!**************************************************!*\
  !*** ./src/utils/common/executeWithAnimation.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ executeWithAnimation)
/* harmony export */ });
function executeWithAnimation(item, callback) {
    item.setAttribute('closing', '')
    item.addEventListener('animationend', () => {
        item.removeAttribute('closing')
        callback(item)
    }, {once:true})
}



/***/ }),

/***/ "./src/utils/common/openThis.js":
/*!**************************************!*\
  !*** ./src/utils/common/openThis.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openThis)
/* harmony export */ });
function openThis(obj){
    obj.classList.remove('d-off')
}

/***/ }),

/***/ "./src/utils/common/searchAllItems.js":
/*!********************************************!*\
  !*** ./src/utils/common/searchAllItems.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchAllItems)
/* harmony export */ });
/* harmony import */ var _component_projectContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/projectContainer */ "./src/component/projectContainer.js");

function searchAllItems(title){
    const searchResult = []
    const allProjects = _component_projectContainer__WEBPACK_IMPORTED_MODULE_0__["default"].getAllItem()
    allProjects.forEach(prj => {
        const allItems = prj.getAllItem()
        allItems.forEach(item => {
            if(item.getValue().title.toLowerCase().includes(title.toLowerCase())){
                searchResult.push(item)
            }
        })
    })

    return searchResult
}

/***/ }),

/***/ "./src/utils/common/setPriorityClass.js":
/*!**********************************************!*\
  !*** ./src/utils/common/setPriorityClass.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setPriorityClass)
/* harmony export */ });
function setPriorityClass(element, priority) {
    element.classList.remove('priority__low')
    element.classList.remove('priority__medium')
    element.classList.remove('priority__high')
    switch (priority) {
        case 'low':
            element.classList.add('priority__low')
            break
        case 'medium':
            element.classList.add('priority__medium')
            break
        case 'high':
            element.classList.add('priority__high')
            break
    }
}

/***/ }),

/***/ "./src/utils/localStorage.js":
/*!***********************************!*\
  !*** ./src/utils/localStorage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadFromLocalStorage: () => (/* binding */ loadFromLocalStorage),
/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)
/* harmony export */ });
/* harmony import */ var _component_note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/note */ "./src/component/note.js");
/* harmony import */ var _component_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/project */ "./src/component/project.js");
/* harmony import */ var _component_projectContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/projectContainer */ "./src/component/projectContainer.js");
/* harmony import */ var _component_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/todo */ "./src/component/todo.js");





function saveToLocalStorage(key, value) {
    const serializedValue = JSON.stringify(serialize(value))
    console.log(serializedValue)
    localStorage.setItem(key, serializedValue)
}

function serialize(inputObj){
    if (inputObj.getType()) {
        const data = []
        for (const prop in inputObj) {
            let arr
            if ((typeof inputObj[prop] === 'function' && prop !== 'getAllItem') || prop === 'type') continue // Skip functions
            if (prop === 'getAllItem'){
                arr = inputObj.getAllItem()
            }
            if(Array.isArray(arr)){
                arr.forEach(obj => {
                    if (obj.getType() === 'todo' || obj.getType() === 'note'){
                        data.push({
                            type: obj.getType(),
                            value: obj.getValue()
                        })
                    }else{
                        data.push({
                            type: obj.getType(),
                            value: obj.getValue(),
                            data: obj.getAllItem().map(item => {
                                return {
                                    type: item.getType(),
                                    value: item.getValue()
                                }
                            })
                        })
                    }
                })
            }
        }
        if(inputObj.getValue !== undefined && inputObj !== 'todo' && inputObj !== 'note'){
            return {
                type: inputObj.getType(),
                value: inputObj.getValue(),
                data: data        
            }
        }
        return {
            type: inputObj.getType(),
            data: data
        }
    }else{
        return null
    }
}

function loadFromLocalStorage(key) {
    const loaded = JSON.parse(localStorage.getItem(key))
    console.log(loaded)
    switch (loaded.type) { 
        case 'projectContainer':
            return createProjectContainer(loaded.data)
        case 'project':
            return createProject(loaded)
        default:
            return createComponent(loaded.type, loaded.data)
    }
}



function createProjectContainer(data) {
    const obj = (0,_component_projectContainer__WEBPACK_IMPORTED_MODULE_2__.projectContainer)()
    for (const prj in data) {
        obj.addItem(createProject(data[prj]))
    }
    return obj
}

function createProject(data) {
    const obj = (0,_component_project__WEBPACK_IMPORTED_MODULE_1__["default"])()
    obj.changeValue(data.value.title, data.value.description)
    data.data.forEach(item => {
        obj.addItem(createComponent(item.type, item.value))
    })
    return obj
}

function createNote(data) {
    const obj = (0,_component_note__WEBPACK_IMPORTED_MODULE_0__["default"])()
    obj.changeValue(data.title, data.description)
    return obj
}

function createTodo(data) {
    const obj = (0,_component_todo__WEBPACK_IMPORTED_MODULE_3__["default"])()
    obj.changeValue(data.title, data.description, data.startDate, data.dueDate)
    obj.changePriority(data.priority)
    if(data.status){
        obj.changeStatus()
    }
    return obj
}

function createComponent(type, data) {
    switch (type) {
        case 'note':
            return createNote(data)
        case 'todo':
            return createTodo(data)
        default:
            return null
    }
}


// const data = JSON.parse(localStorage.getItem(key), (_key, value) => {
//     if (value.type) {
//         let obj
//         switch (value.type) {
//             case 'projectContainer':
//                 obj = createProjectContainer(value.data)
//                 break
//             case 'project':
//                 obj = createProject(value.data)
//                 break
//             case 'note':
//                 obj = createNote(value.data)
//                 break
//             case 'todo':
//                 obj = createTodo(value.data)
//                 break
//             default:
//                 obj = value
//         }
//         console.log('right')
//         return obj
//     }
//     console.log('wrong')
//     return value
// })
// return data

/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderLayout)
/* harmony export */ });
/* harmony import */ var _component_Layout_createLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Layout/createLayout */ "./src/component/Layout/createLayout.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/utils/localStorage.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/utils/state.js");
/* harmony import */ var _ui_handlers_contentHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-handlers/contentHandler */ "./src/utils/ui-handlers/contentHandler.js");
/* harmony import */ var _ui_handlers_headerHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-handlers/headerHandler */ "./src/utils/ui-handlers/headerHandler.js");
/* harmony import */ var _ui_handlers_menuHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui-handlers/menuHandler */ "./src/utils/ui-handlers/menuHandler.js");
/* harmony import */ var _ui_handlers_navHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui-handlers/navHandler */ "./src/utils/ui-handlers/navHandler.js");








function renderLayout() {
    const body = document.querySelector('body')
    body.innerHTML = ''

    let currentProject = (0,_state__WEBPACK_IMPORTED_MODULE_2__.getCurrentState)()

    ;(0,_component_Layout_createLayout__WEBPACK_IMPORTED_MODULE_0__["default"])(currentProject)
    
    if(body.innerHTML !== ''){
        (0,_ui_handlers_headerHandler__WEBPACK_IMPORTED_MODULE_4__["default"])()
        ;(0,_ui_handlers_navHandler__WEBPACK_IMPORTED_MODULE_6__["default"])()
        ;(0,_ui_handlers_menuHandler__WEBPACK_IMPORTED_MODULE_5__["default"])()
        ;(0,_ui_handlers_contentHandler__WEBPACK_IMPORTED_MODULE_3__["default"])()
    }
}

/***/ }),

/***/ "./src/utils/state.js":
/*!****************************!*\
  !*** ./src/utils/state.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentState: () => (/* binding */ getCurrentState),
/* harmony export */   setCurrentState: () => (/* binding */ setCurrentState)
/* harmony export */ });
/* harmony import */ var _component_projectContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/projectContainer */ "./src/component/projectContainer.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/utils/localStorage.js");



let currentState = {
    currentProject: _component_projectContainer__WEBPACK_IMPORTED_MODULE_0__["default"].getItem(0)
}

function setCurrentState(obj){
    currentState.currentProject = obj
}

function getCurrentState(){
    return currentState.currentProject
}

/***/ }),

/***/ "./src/utils/ui-handlers/appearanceHandler.js":
/*!****************************************************!*\
  !*** ./src/utils/ui-handlers/appearanceHandler.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appearanceHandler)
/* harmony export */ });
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinycolor2 */ "./node_modules/tinycolor2/esm/tinycolor.js");


function appearanceHandler() {
}


/***/ }),

/***/ "./src/utils/ui-handlers/confirmDialogHandler.js":
/*!*******************************************************!*\
  !*** ./src/utils/ui-handlers/confirmDialogHandler.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteConfirmHandler: () => (/* binding */ deleteConfirmHandler),
/* harmony export */   deleteProjectConfirmHandler: () => (/* binding */ deleteProjectConfirmHandler)
/* harmony export */ });
/* harmony import */ var _component_Default_Project_inbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/Default Project/inbox */ "./src/component/Default Project/inbox.js");
/* harmony import */ var _component_projectContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/projectContainer */ "./src/component/projectContainer.js");
/* harmony import */ var _common_closeThis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/closeThis */ "./src/utils/common/closeThis.js");
/* harmony import */ var _common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/executeWithAnimation */ "./src/utils/common/executeWithAnimation.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render */ "./src/utils/render.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state */ "./src/utils/state.js");
/* harmony import */ var _menuHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuHandler */ "./src/utils/ui-handlers/menuHandler.js");
/* harmony import */ var _undoHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./undoHandler */ "./src/utils/ui-handlers/undoHandler.js");










function deleteConfirmHandler(project, item, index){
    const confirmDialog = document.getElementById('confirm__dialog')
    const yesBtn = confirmDialog.querySelector('.add__btn')
    const noBtn = confirmDialog.querySelector('.close__btn')

    yesBtn.addEventListener('click', () => {
        const menuOpen = (0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.isMenuOpen)()
        const listOpen = (0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.isProjectListOpen)()
        ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_3__["default"])(confirmDialog, () => {
            const deleteItem = project.getItem(index)
            project.deleteItem(index)
            confirmDialog.close('deleted')
            ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_3__["default"])(item, () => {
                ;(0,_common_closeThis__WEBPACK_IMPORTED_MODULE_2__["default"])(item)
                ;(0,_state__WEBPACK_IMPORTED_MODULE_5__.setCurrentState)(project)
                ;(0,_render__WEBPACK_IMPORTED_MODULE_4__["default"])()
                if(menuOpen) (0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.openMenu)(false)
                if(listOpen) (0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.openProjectList)()
                ;(0,_undoHandler__WEBPACK_IMPORTED_MODULE_7__.undoDelete)(project,deleteItem)
            })           
        })
    })

    noBtn.addEventListener('click', () => {
        ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_3__["default"])(confirmDialog, () => {
            confirmDialog.close('cancelled')
        })
    })
}

function deleteProjectConfirmHandler(project, index){
    const confirmDialog = document.getElementById('confirm__dialog')
    const yesBtn = confirmDialog.querySelector('.add__btn')
    const noBtn = confirmDialog.querySelector('.close__btn')

    yesBtn.addEventListener('click', () => {
        ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_3__["default"])(confirmDialog, () => {
            const deleteItem = project.getItem(index)
            project.deleteItem(index)
            confirmDialog.close('deleted')
            ;(0,_state__WEBPACK_IMPORTED_MODULE_5__.setCurrentState)(_component_projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(0))
            ;(0,_render__WEBPACK_IMPORTED_MODULE_4__["default"])()
            ;(0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.openMenu)(false)
            ;(0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.openProjectList)()
            ;(0,_undoHandler__WEBPACK_IMPORTED_MODULE_7__.undoDelete)(project,deleteItem)
        })
    })

    noBtn.addEventListener('click', () => {
        ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_3__["default"])(confirmDialog, () => {
            confirmDialog.close('cancelled')
        })
    })
}



/***/ }),

/***/ "./src/utils/ui-handlers/contentHandler.js":
/*!*************************************************!*\
  !*** ./src/utils/ui-handlers/contentHandler.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contentHandler)
/* harmony export */ });
/* harmony import */ var _component_Default_Project_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/Default Project/history */ "./src/component/Default Project/history.js");
/* harmony import */ var _component_projectContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/projectContainer */ "./src/component/projectContainer.js");
/* harmony import */ var _common_closeThis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/closeThis */ "./src/utils/common/closeThis.js");
/* harmony import */ var _common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/executeWithAnimation */ "./src/utils/common/executeWithAnimation.js");
/* harmony import */ var _common_openThis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/openThis */ "./src/utils/common/openThis.js");
/* harmony import */ var _common_setPriorityClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/setPriorityClass */ "./src/utils/common/setPriorityClass.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../localStorage */ "./src/utils/localStorage.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../render */ "./src/utils/render.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state */ "./src/utils/state.js");
/* harmony import */ var _confirmDialogHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirmDialogHandler */ "./src/utils/ui-handlers/confirmDialogHandler.js");
/* harmony import */ var _detailHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detailHandler */ "./src/utils/ui-handlers/detailHandler.js");
/* harmony import */ var _editDialogHandler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editDialogHandler */ "./src/utils/ui-handlers/editDialogHandler.js");
/* harmony import */ var _menuHandler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menuHandler */ "./src/utils/ui-handlers/menuHandler.js");
/* harmony import */ var _moveDialogHandler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./moveDialogHandler */ "./src/utils/ui-handlers/moveDialogHandler.js");
/* harmony import */ var _undoHandler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./undoHandler */ "./src/utils/ui-handlers/undoHandler.js");
















function contentHandler() {
    const titleDiv = document.querySelector('.content__title')
    const detailBtn = titleDiv.querySelector('i')
    const contentItems = document.querySelectorAll('.content__item')
    const currentProject = (0,_state__WEBPACK_IMPORTED_MODULE_8__.getCurrentState)()
    // let currentProject
    // if(currentProject.getValue().title === 'History'){
    //     currentProjectInContainer = loadFromLocalStorage('history')
    // }else{
    //     currentProjectInContainer = projectContainerObj.getAllItem().find(prj => prj.getValue().title === currentProject.getValue().title)
    // }
    

    function handleDetailClick(index) {
        const item = currentProject.getItem(index)
        ;(0,_detailHandler__WEBPACK_IMPORTED_MODULE_10__.changeDetail)(item)
        ;(0,_detailHandler__WEBPACK_IMPORTED_MODULE_10__.openDetail)()
    }

    function handleEditButtonClick(item, index) {
        const editDialog = document.getElementById('item__edit-dialog')
        const todoForm = editDialog.querySelector('#todo__edit-form')
        const noteForm = editDialog.querySelector('#note__edit-form')

        editDialog.showModal()
        if (item.classList.contains('note')) {
            (0,_common_openThis__WEBPACK_IMPORTED_MODULE_4__["default"])(noteForm)
            ;(0,_common_closeThis__WEBPACK_IMPORTED_MODULE_2__["default"])(todoForm)
            ;(0,_editDialogHandler__WEBPACK_IMPORTED_MODULE_11__.editNoteDialogHandler)(currentProject.getItem(index))
        } else {
            (0,_common_openThis__WEBPACK_IMPORTED_MODULE_4__["default"])(todoForm)
            ;(0,_common_closeThis__WEBPACK_IMPORTED_MODULE_2__["default"])(noteForm)
            ;(0,_editDialogHandler__WEBPACK_IMPORTED_MODULE_11__.editTodoDialogHandler)(currentProject.getItem(index))
        }
    }

    function handleMoveButtonClick(item, index) {
        const moveDialog = document.getElementById('item__move-dialog')
        moveDialog.showModal()
        ;(0,_moveDialogHandler__WEBPACK_IMPORTED_MODULE_13__["default"])(currentProject, item, index)
    }

    function handleDeleteButtonClick(item, index) {
        const confirmDialog = document.getElementById('confirm__dialog')
        confirmDialog.showModal()
        ;(0,_confirmDialogHandler__WEBPACK_IMPORTED_MODULE_9__.deleteConfirmHandler)(currentProject, item, index)
    }

    function handlePriorityButtonClick(index, priorityBtn) {
        const currentItem = currentProject.getItem(index)
        const priority = currentItem.getValue().priority
        const newPriority = priority === 'low' ? 'medium' : (priority === 'medium' ? 'high' : 'low')
        currentItem.changePriority(newPriority)
        ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_6__.saveToLocalStorage)('projectContainer', _component_projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"])
        ;(0,_common_setPriorityClass__WEBPACK_IMPORTED_MODULE_5__["default"])(priorityBtn, newPriority)
    }

    function handleCheckboxChange(item, index) {
        const menuOpen = (0,_menuHandler__WEBPACK_IMPORTED_MODULE_12__.isMenuOpen)()
        const projectListOpen = (0,_menuHandler__WEBPACK_IMPORTED_MODULE_12__.isProjectListOpen)()
        setTimeout(() => {
            const finishedItem = currentProject.getItem(index)
            finishedItem.changeStatus()
            console.log(finishedItem.getValue().status)

            if(localStorage.getItem('history')){
                const loadedHistoryObj = (0,_localStorage__WEBPACK_IMPORTED_MODULE_6__.loadFromLocalStorage)('history')
                loadedHistoryObj.addItem(finishedItem)
                ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_6__.saveToLocalStorage)('history', loadedHistoryObj)
                console.log(loadedHistoryObj.getAllItem())
            }else{
                _component_Default_Project_history__WEBPACK_IMPORTED_MODULE_0__["default"].addItem(finishedItem)
                ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_6__.saveToLocalStorage)('history', _component_Default_Project_history__WEBPACK_IMPORTED_MODULE_0__["default"])
                console.log(_component_Default_Project_history__WEBPACK_IMPORTED_MODULE_0__["default"].getAllItem())
            }
            
            currentProject.deleteItem(index)
            ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_6__.saveToLocalStorage)('projectContainer', _component_projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"])

            ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_3__["default"])(item, () => {
                ;(0,_common_closeThis__WEBPACK_IMPORTED_MODULE_2__["default"])(item)
                ;(0,_state__WEBPACK_IMPORTED_MODULE_8__.setCurrentState)((0,_state__WEBPACK_IMPORTED_MODULE_8__.getCurrentState)())
                ;(0,_render__WEBPACK_IMPORTED_MODULE_7__["default"])()
                if (menuOpen) (0,_menuHandler__WEBPACK_IMPORTED_MODULE_12__.openMenu)(false)
                if (projectListOpen) (0,_menuHandler__WEBPACK_IMPORTED_MODULE_12__.openProjectList)()
                ;(0,_undoHandler__WEBPACK_IMPORTED_MODULE_14__.undoCheckbox)(currentProject, finishedItem)
            })
        }, 500)
    }

    detailBtn.addEventListener('click', () => {
        (0,_detailHandler__WEBPACK_IMPORTED_MODULE_10__.changeDetail)(currentProject)
        ;(0,_detailHandler__WEBPACK_IMPORTED_MODULE_10__.openDetail)()
    })

    contentItems.forEach((item, index) => {
        const isSearchResult = currentProject.getValue().title === 'Search Result'
        if (!item.classList.contains('finished') && !isSearchResult) {
            const title = item.querySelector('.title')
            title.addEventListener('click', () => handleDetailClick(index))

            const editBtn = item.querySelector('.edit__btn')
            editBtn.addEventListener('click', () => handleEditButtonClick(item, index))

            const moveBtn = item.querySelector('.move__btn')
            moveBtn.addEventListener('click', () => handleMoveButtonClick(item, index))

            const deleteBtn = item.querySelector('.delete__btn')
            deleteBtn.addEventListener('click', () => handleDeleteButtonClick(item, index))

            if (item.classList.contains('to-do')) {
                const priorityBtn = item.querySelector('.priority__btn')
                priorityBtn.addEventListener('click', () => handlePriorityButtonClick(index, priorityBtn))

                const checkbox = item.querySelector('.checkbox__input')
                checkbox.addEventListener('change', () => handleCheckboxChange(item, index))
            }
        } else {
            const title = item.querySelector('.title')
            title.addEventListener('click', () => handleDetailClick(index))

            if (!isSearchResult) {
                const deleteBtn = item.querySelector('.delete__btn')
                deleteBtn.addEventListener('click', () => handleDeleteButtonClick(item, index))
            }
        }
    })
}


/***/ }),

/***/ "./src/utils/ui-handlers/detailHandler.js":
/*!************************************************!*\
  !*** ./src/utils/ui-handlers/detailHandler.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeDetail: () => (/* binding */ changeDetail),
/* harmony export */   closeDetail: () => (/* binding */ closeDetail),
/* harmony export */   detailHandler: () => (/* binding */ detailHandler),
/* harmony export */   isDetailOpen: () => (/* binding */ isDetailOpen),
/* harmony export */   openDetail: () => (/* binding */ openDetail)
/* harmony export */ });
/* harmony import */ var _component_Layout_createDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/Layout/createDetail */ "./src/component/Layout/createDetail.js");
/* harmony import */ var _common_closeThis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/closeThis */ "./src/utils/common/closeThis.js");
/* harmony import */ var _common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/executeWithAnimation */ "./src/utils/common/executeWithAnimation.js");
/* harmony import */ var _common_openThis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/openThis */ "./src/utils/common/openThis.js");





function detailHandler(){
    const detail = document.querySelector('.detail')
    const closeBtn = detail.querySelector('.close__btn')
    const deleteBtn = detail.querySelector('.delete__btn')


    closeBtn.addEventListener('click', () => {
        closeDetail()
    })

    // deleteBtn.addEventListener('click', () => {

    // })
    
}

function changeDetail(obj){
    const container = document.querySelector('.container')
    const oldDetail = container.querySelector('.detail')
    const newDetail = (0,_component_Layout_createDetail__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)
    
    if(oldDetail !== null){
        container.removeChild(oldDetail)
        container.appendChild(newDetail)
        ;(0,_common_openThis__WEBPACK_IMPORTED_MODULE_3__["default"])(newDetail)
    }else{
        container.appendChild(newDetail)
    }
    
}

function openDetail(){
    const detail = document.querySelector('.detail')
    const detailOpen = isDetailOpen()
    if(!detailOpen){
        detail.setAttribute('opening','')
        ;(0,_common_openThis__WEBPACK_IMPORTED_MODULE_3__["default"])(detail)
        detailHandler()
    }else{
        detail.removeAttribute('opening')
        detail.setAttribute('open','')
        ;(0,_common_openThis__WEBPACK_IMPORTED_MODULE_3__["default"])(detail)
        detailHandler()
    }
}

function closeDetail(){
    const detail = document.querySelector('.detail')
    ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])(detail, () => {
        ;(0,_common_closeThis__WEBPACK_IMPORTED_MODULE_1__["default"])(detail)
        detail.parentElement.removeChild(detail)
    })
}

function isDetailOpen(){
    const detail = document.querySelector('.detail')
    if(detail === null){
        return false
    }else if(!detail.classList.contains('d-off')){
        return true
    }else{
        return false
    }
}

/***/ }),

/***/ "./src/utils/ui-handlers/editDialogHandler.js":
/*!****************************************************!*\
  !*** ./src/utils/ui-handlers/editDialogHandler.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editNoteDialogHandler: () => (/* binding */ editNoteDialogHandler),
/* harmony export */   editProjectDialogHandler: () => (/* binding */ editProjectDialogHandler),
/* harmony export */   editTodoDialogHandler: () => (/* binding */ editTodoDialogHandler)
/* harmony export */ });
/* harmony import */ var _component_projectContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/projectContainer */ "./src/component/projectContainer.js");
/* harmony import */ var _common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/executeWithAnimation */ "./src/utils/common/executeWithAnimation.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localStorage */ "./src/utils/localStorage.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render */ "./src/utils/render.js");
/* harmony import */ var _detailHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detailHandler */ "./src/utils/ui-handlers/detailHandler.js");
/* harmony import */ var _menuHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuHandler */ "./src/utils/ui-handlers/menuHandler.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state */ "./src/utils/state.js");









function populateTodoForm(todoForm, item) {
    const { title, description, startDate, dueDate} = item.getValue()
    todoForm.querySelector('.todo__title-input').value = title
    todoForm.querySelector('.todo__des-input').value = description
    todoForm.querySelector('.todo__start-input').value = new Date(startDate).toISOString().split('T')[0]
    todoForm.querySelector('.todo__due-input').value = new Date(dueDate).toISOString().split('T')[0]
}

function populateNoteForm(noteForm, item) {
    const { title, description } = item.getValue()
    noteForm.querySelector('.note__title-input').value = title
    noteForm.querySelector('.note__des-input').value = description
}

function populateProjectForm(projectForm, item) {
    const { title, description } = item.getValue()
    projectForm.querySelector('.project__title-input').value = title
    projectForm.querySelector('.project__des-input').value = description
}


function attachFormListeners(editDialog, item, saveHandler) {
    const saveBtn = editDialog.querySelector('.add__btn')
    const cancelBtn = editDialog.querySelector('.close__btn')

    saveBtn.addEventListener('click', () => {
        ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_1__["default"])(editDialog, () => {
            const menuOpen = (0,_menuHandler__WEBPACK_IMPORTED_MODULE_5__.isMenuOpen)()
            const projectListOpen = (0,_menuHandler__WEBPACK_IMPORTED_MODULE_5__.isProjectListOpen)()
            // const detailOpen = isDetailOpen()
            saveHandler(item)
            editDialog.close('saved')
            ;(0,_state__WEBPACK_IMPORTED_MODULE_6__.setCurrentState)((0,_state__WEBPACK_IMPORTED_MODULE_6__.getCurrentState)())
            ;(0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])()
            if (menuOpen) (0,_menuHandler__WEBPACK_IMPORTED_MODULE_5__.openMenu)(false)
            // if (detailOpen){
                ;(0,_detailHandler__WEBPACK_IMPORTED_MODULE_4__.changeDetail)(item)
                ;(0,_detailHandler__WEBPACK_IMPORTED_MODULE_4__.openDetail)()
            // } 
            if (projectListOpen) (0,_menuHandler__WEBPACK_IMPORTED_MODULE_5__.openProjectList)()
        })
    })

    cancelBtn.addEventListener('click', () => {
        ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_1__["default"])(editDialog, () => {
            editDialog.close('cancelled')
        })
    })
}

function editTodoDialogHandler(item) {
    const editDialog = document.getElementById('item__edit-dialog')
    const todoForm = editDialog.querySelector('#todo__edit-form')
    populateTodoForm(todoForm, item)
    attachFormListeners(editDialog, item, (item) => {
        const { title, description, startDate, dueDate} = todoForm.elements
        item.changeValue(title.value, description.value, startDate.value, dueDate.value, item.getValue().priority)
        ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)('projectContainer', _component_projectContainer__WEBPACK_IMPORTED_MODULE_0__["default"])
    })
}

function editNoteDialogHandler(item) {
    const editDialog = document.getElementById('item__edit-dialog')
    const noteForm = editDialog.querySelector('#note__edit-form')
    populateNoteForm(noteForm, item)
    attachFormListeners(editDialog, item, (item) => {
        const { title, description } = noteForm.elements
        item.changeValue(title.value, description.value)
        ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)('projectContainer', _component_projectContainer__WEBPACK_IMPORTED_MODULE_0__["default"])
    })
}

function editProjectDialogHandler(item) {
    const editDialog = document.getElementById('item__edit-dialog')
    const projectForm = editDialog.querySelector('#project__edit-form')
    populateProjectForm(projectForm, item)
    attachFormListeners(editDialog, item, (item) => {
        const { title, description } = projectForm.elements
        item.changeValue(title.value, description.value)
        ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)('projectContainer', _component_projectContainer__WEBPACK_IMPORTED_MODULE_0__["default"])
    })
}


/***/ }),

/***/ "./src/utils/ui-handlers/headerHandler.js":
/*!************************************************!*\
  !*** ./src/utils/ui-handlers/headerHandler.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ headerHandler)
/* harmony export */ });
/* harmony import */ var _common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/executeWithAnimation */ "./src/utils/common/executeWithAnimation.js");
/* harmony import */ var _itemDialogHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemDialogHandler */ "./src/utils/ui-handlers/itemDialogHandler.js");
/* harmony import */ var _menuHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuHandler */ "./src/utils/ui-handlers/menuHandler.js");




function headerHandler(){
    const header = document.querySelector('header')
    const menuBtn = header.querySelector('.menu__btn')
    const addBtn = header.querySelector('.add__btn')
    const menu = document.querySelector('.menu')
    const navBar = document.querySelector('.nav__bar')

    menuBtn.addEventListener('click', () => {
        if(menu.classList.contains('d-off')){
            (0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_0__["default"])(navBar, () => {
                (0,_menuHandler__WEBPACK_IMPORTED_MODULE_2__.openMenu)(true)
            })          
        }else{
            (0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_0__["default"])(menu, () => {
                (0,_menuHandler__WEBPACK_IMPORTED_MODULE_2__.closeMenu)()
            })
        }
    })

    addBtn.addEventListener('click', () => {
        const itemDialog = document.getElementById('item__add-dialog')
        itemDialog.showModal()
        ;(0,_itemDialogHandler__WEBPACK_IMPORTED_MODULE_1__["default"])()
    })
}


/***/ }),

/***/ "./src/utils/ui-handlers/itemDialogHandler.js":
/*!****************************************************!*\
  !*** ./src/utils/ui-handlers/itemDialogHandler.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ itemDialogHandler)
/* harmony export */ });
/* harmony import */ var _common_openThis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/openThis */ "./src/utils/common/openThis.js");
/* harmony import */ var _common_closeThis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/closeThis */ "./src/utils/common/closeThis.js");
/* harmony import */ var _component_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/todo */ "./src/component/todo.js");
/* harmony import */ var _component_note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/note */ "./src/component/note.js");
/* harmony import */ var _component_projectContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/projectContainer */ "./src/component/projectContainer.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render */ "./src/utils/render.js");
/* harmony import */ var _menuHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuHandler */ "./src/utils/ui-handlers/menuHandler.js");
/* harmony import */ var _detailHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detailHandler */ "./src/utils/ui-handlers/detailHandler.js");
/* harmony import */ var _common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/executeWithAnimation */ "./src/utils/common/executeWithAnimation.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../localStorage */ "./src/utils/localStorage.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../state */ "./src/utils/state.js");












function itemDialogHandler() {
    const itemDialog = document.getElementById('item__add-dialog')
    const selectInput = itemDialog.querySelector('.select__item-input')
    const todoForm = document.getElementById('todo__add-form')
    const noteForm = document.getElementById('note__add-form')
    const closeBtn = itemDialog.querySelector('.close__btn')
    const addBtn = itemDialog.querySelector('.add__btn')

    function switchForm() {
        const formToShow = selectInput.value === 'to-do' ? todoForm : noteForm
        const formToHide = selectInput.value === 'to-do' ? noteForm : todoForm
        ;(0,_common_openThis__WEBPACK_IMPORTED_MODULE_0__["default"])(formToShow)
        ;(0,_common_closeThis__WEBPACK_IMPORTED_MODULE_1__["default"])(formToHide)
    }

    selectInput.addEventListener('change', switchForm)

    closeBtn.addEventListener('click', () => {
        ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_8__["default"])(itemDialog, () => {
            itemDialog.close('canceled')
        })
    })

    addBtn.addEventListener('click', () => {
        const filled = checkValue()
        if(filled){
            (0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_8__["default"])(itemDialog, () => {
                const menuOpen = (0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.isMenuOpen)()
                const detailOpen = (0,_detailHandler__WEBPACK_IMPORTED_MODULE_7__.isDetailOpen)()
                const projectListOpen = (0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.isProjectListOpen)()
                if (selectInput.value === 'to-do') addTodo()
                else if (selectInput.value === 'note') addNote()
                itemDialog.close('added')
                ;(0,_state__WEBPACK_IMPORTED_MODULE_10__.setCurrentState)(getSelectedProject())
                ;(0,_render__WEBPACK_IMPORTED_MODULE_5__["default"])()
                if (menuOpen) (0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.openMenu)(false)
                if (projectListOpen) (0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.openProjectList)()
                if (detailOpen) (0,_detailHandler__WEBPACK_IMPORTED_MODULE_7__.openDetail)()
            })
        }
    })

    function addTodo() {
        const newTodo = (0,_component_todo__WEBPACK_IMPORTED_MODULE_2__["default"])()
        populateTodo(newTodo, todoForm)
        getSelectedProject().addItem(newTodo)
        ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_9__.saveToLocalStorage)('projectContainer', _component_projectContainer__WEBPACK_IMPORTED_MODULE_4__["default"])
    }

    function addNote() {
        const newNote = (0,_component_note__WEBPACK_IMPORTED_MODULE_3__["default"])()
        populateNote(newNote, noteForm)
        getSelectedProject().addItem(newNote)
        ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_9__.saveToLocalStorage)('projectContainer', _component_projectContainer__WEBPACK_IMPORTED_MODULE_4__["default"])
    }

    function populateTodo(item, form) {
        const titleInput = form.querySelector('.todo__title-input')
        const desInput = form.querySelector('.todo__des-input')
        const startInput = form.querySelector('.todo__start-input')
        const dueInput = form.querySelector('.todo__due-input')
        const priorityInput = form.querySelector('.todo__priority-input')
        item.changeValue(titleInput.value, desInput.value, startInput.value, dueInput.value, priorityInput.value)
    }

    function populateNote(item, form) {
        const titleInput = form.querySelector('.note__title-input')
        const desInput = form.querySelector('.note__des-input')
        item.changeValue(titleInput.value, desInput.value)
    }

    function checkValue(){
        const form = selectInput.value === 'to-do' ? todoForm : noteForm
        if(selectInput.value === 'to-do'){
            const titleInput = form.querySelector('.todo__title-input')
            const desInput = form.querySelector('.todo__des-input')
            const startInput = form.querySelector('.todo__start-input')
            const dueInput = form.querySelector('.todo__due-input')
            const priorityInput = form.querySelector('.todo__priority-input')

            return titleInput.value&&desInput.value&&startInput.value&&dueInput.value&&priorityInput.value
        }else{
            const titleInput = form.querySelector('.note__title-input')
            const desInput = form.querySelector('.note__des-input')

            return titleInput.value&&desInput.value
        }
    }

    function getSelectedProject() {
        const projectList = document.querySelector('.item__project-input')
        const selectedValue = projectList.value
        return _component_projectContainer__WEBPACK_IMPORTED_MODULE_4__["default"].getAllItem().find(prj => prj.getValue().title === selectedValue)
    }
}


/***/ }),

/***/ "./src/utils/ui-handlers/menuHandler.js":
/*!**********************************************!*\
  !*** ./src/utils/ui-handlers/menuHandler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeMenu: () => (/* binding */ closeMenu),
/* harmony export */   "default": () => (/* binding */ menuHandler),
/* harmony export */   isMenuOpen: () => (/* binding */ isMenuOpen),
/* harmony export */   isProjectListOpen: () => (/* binding */ isProjectListOpen),
/* harmony export */   openMenu: () => (/* binding */ openMenu),
/* harmony export */   openProjectList: () => (/* binding */ openProjectList)
/* harmony export */ });
/* harmony import */ var _component_Default_Project_inbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/Default Project/inbox */ "./src/component/Default Project/inbox.js");
/* harmony import */ var _component_Default_Project_today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/Default Project/today */ "./src/component/Default Project/today.js");
/* harmony import */ var _component_Default_Project_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/Default Project/history */ "./src/component/Default Project/history.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "./src/utils/state.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render */ "./src/utils/render.js");
/* harmony import */ var _projectDialogHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectDialogHandler */ "./src/utils/ui-handlers/projectDialogHandler.js");
/* harmony import */ var _component_projectContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/projectContainer */ "./src/component/projectContainer.js");
/* harmony import */ var _common_closeThis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/closeThis */ "./src/utils/common/closeThis.js");
/* harmony import */ var _common_openThis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/openThis */ "./src/utils/common/openThis.js");
/* harmony import */ var _confirmDialogHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirmDialogHandler */ "./src/utils/ui-handlers/confirmDialogHandler.js");
/* harmony import */ var _editDialogHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editDialogHandler */ "./src/utils/ui-handlers/editDialogHandler.js");
/* harmony import */ var _component_Default_Project_searchResult__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../component/Default Project/searchResult */ "./src/component/Default Project/searchResult.js");
/* harmony import */ var _common_searchAllItems__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/searchAllItems */ "./src/utils/common/searchAllItems.js");
/* harmony import */ var _appearanceHandler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./appearanceHandler */ "./src/utils/ui-handlers/appearanceHandler.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../localStorage */ "./src/utils/localStorage.js");
















function menuHandler() {
    const menu = document.querySelector('.menu')
    const inboxNav = menu.querySelector('.inbox__nav')
    const todayNav = menu.querySelector('.today__nav')
    const projectNav = menu.querySelector('.project__nav')
    const historyNav = menu.querySelector('.history__nav')
    const projectAddButton = menu.querySelector('.project__add-btn button')
    const projectListItems = document.querySelectorAll('.project__list-item')
    const searchBtn = menu.querySelector('.search__icon')
    const appearanceBtn = menu.querySelector('.menu__bot')

    inboxNav.addEventListener('click', () => navClickHandler(_component_projectContainer__WEBPACK_IMPORTED_MODULE_6__["default"].getItem(0)))
    todayNav.addEventListener('click', () => navClickHandler(_component_projectContainer__WEBPACK_IMPORTED_MODULE_6__["default"].getItem(1)))
    projectNav.addEventListener('click', toggleProjectList)
    historyNav.addEventListener('click', () => {
        if(localStorage.getItem('history')){
            navClickHandler((0,_localStorage__WEBPACK_IMPORTED_MODULE_14__.loadFromLocalStorage)('history'))
        }else{
            navClickHandler(_component_Default_Project_history__WEBPACK_IMPORTED_MODULE_2__["default"])
            ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_14__.saveToLocalStorage)('history', _component_Default_Project_history__WEBPACK_IMPORTED_MODULE_2__["default"])
        }
    })
    projectAddButton.addEventListener('click', handleProjectAddButtonClick)

    projectListItems.forEach(item => {
        const title = item.querySelector('span')
        const editBtn = item.querySelector('.edit__btn')
        const deleteBtn = item.querySelector('.delete__btn')
        const projects = _component_projectContainer__WEBPACK_IMPORTED_MODULE_6__["default"].getAllItem()
        const targetProject = projects.find(prj => prj.getValue().title === item.textContent)

        title.addEventListener('click', () => handleTitleClick(targetProject))
        editBtn.addEventListener('click', () => handleEditButtonClick(targetProject))
        deleteBtn.addEventListener('click', () => handleDeleteButtonClick(title.textContent))
    })

    searchBtn.addEventListener('click', handleSearchButtonClick)

    appearanceBtn.addEventListener('click',_appearanceHandler__WEBPACK_IMPORTED_MODULE_13__["default"])
}

function navClickHandler(project) {
    const listOpen = isProjectListOpen()
    ;(0,_state__WEBPACK_IMPORTED_MODULE_3__.setCurrentState)(project)
    ;(0,_render__WEBPACK_IMPORTED_MODULE_4__["default"])()
    openMenu(false)
    if(listOpen) toggleProjectList()
}

function toggleProjectList() {
    const list = document.querySelector('.menu ul')
    list.classList.toggle('d-off')
    const arrow = document.querySelector('.arrow')
    arrow.classList.toggle('rotate-180')
}

function handleProjectAddButtonClick() {
    const projectDialog = document.getElementById('project__add-dialog')
    projectDialog.showModal()
    projectDialog.classList.add('df')
    ;(0,_projectDialogHandler__WEBPACK_IMPORTED_MODULE_5__["default"])()
}

function handleTitleClick(project) {
    (0,_state__WEBPACK_IMPORTED_MODULE_3__.setCurrentState)(project)
    ;(0,_render__WEBPACK_IMPORTED_MODULE_4__["default"])()
    openMenu(false)
    openProjectList()
}

function handleEditButtonClick(project) {
    const editDialog = document.getElementById('item__edit-dialog')
    const todoForm = editDialog.querySelector('#todo__edit-form')
    const noteForm = editDialog.querySelector('#note__edit-form')
    const projectForm = editDialog.querySelector('#project__edit-form')

    editDialog.showModal()
    ;(0,_common_openThis__WEBPACK_IMPORTED_MODULE_8__["default"])(projectForm)
    ;(0,_common_closeThis__WEBPACK_IMPORTED_MODULE_7__["default"])(noteForm)
    ;(0,_common_closeThis__WEBPACK_IMPORTED_MODULE_7__["default"])(todoForm)
    ;(0,_editDialogHandler__WEBPACK_IMPORTED_MODULE_10__.editProjectDialogHandler)(project)
    openProjectList()
}

function handleDeleteButtonClick(title) {
    const confirmDialog = document.getElementById('confirm__dialog')
    confirmDialog.showModal()
    const index = _component_projectContainer__WEBPACK_IMPORTED_MODULE_6__["default"].getAllItem().findIndex(prj => prj.getValue().title === title)
    ;(0,_confirmDialogHandler__WEBPACK_IMPORTED_MODULE_9__.deleteProjectConfirmHandler)(_component_projectContainer__WEBPACK_IMPORTED_MODULE_6__["default"], index)
}

function handleSearchButtonClick() {
    const searchInput = document.querySelector('.search__input')
    if (searchInput.value !== '') {
        const searchResultObj = (0,_component_Default_Project_searchResult__WEBPACK_IMPORTED_MODULE_11__["default"])()
        const results = (0,_common_searchAllItems__WEBPACK_IMPORTED_MODULE_12__["default"])(searchInput.value)
        results.forEach(item => searchResultObj.addItem(item))
        ;(0,_state__WEBPACK_IMPORTED_MODULE_3__.setCurrentState)(searchResultObj)
        ;(0,_render__WEBPACK_IMPORTED_MODULE_4__["default"])()
        openMenu(false)
    }
}

function isProjectListOpen() {
    const list = document.querySelector('.menu ul')
    return !list.classList.contains('d-off')
}

function openProjectList() {
    const list = document.querySelector('.menu ul')
    const arrow = document.querySelector('.arrow')
    list.classList.remove('d-off')
    arrow.classList.add('rotate-180')
}

function isMenuOpen() {
    const menu = document.querySelector('.menu')
    return !menu.classList.contains('d-off')
}

function openMenu(animated) {
    const navBar = document.querySelector('.nav__bar')
    const menu = document.querySelector('.menu')
    ;(0,_common_closeThis__WEBPACK_IMPORTED_MODULE_7__["default"])(navBar)
    if (animated === false) {
        (0,_common_openThis__WEBPACK_IMPORTED_MODULE_8__["default"])(menu)
    } else {
        menu.classList.add('slideInLeft')
        ;(0,_common_openThis__WEBPACK_IMPORTED_MODULE_8__["default"])(menu)
    }
}

function closeMenu() {
    const navBar = document.querySelector('.nav__bar')
    const menu = document.querySelector('.menu')
    ;(0,_common_closeThis__WEBPACK_IMPORTED_MODULE_7__["default"])(menu)
    navBar.classList.add('slideInLeft')
    ;(0,_common_openThis__WEBPACK_IMPORTED_MODULE_8__["default"])(navBar)
}


/***/ }),

/***/ "./src/utils/ui-handlers/moveDialogHandler.js":
/*!****************************************************!*\
  !*** ./src/utils/ui-handlers/moveDialogHandler.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ moveDialogHandler)
/* harmony export */ });
/* harmony import */ var _component_projectContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/projectContainer */ "./src/component/projectContainer.js");
/* harmony import */ var _common_closeThis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/closeThis */ "./src/utils/common/closeThis.js");
/* harmony import */ var _common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/executeWithAnimation */ "./src/utils/common/executeWithAnimation.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localStorage */ "./src/utils/localStorage.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render */ "./src/utils/render.js");
/* harmony import */ var _menuHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuHandler */ "./src/utils/ui-handlers/menuHandler.js");







function moveDialogHandler(curr, item, index){
    const moveDialog = document.getElementById('item__move-dialog')
    const projectInput = moveDialog.querySelector('.item__project-input')
    const saveBtn = moveDialog.querySelector('.add__btn')
    const cancelBtn = moveDialog.querySelector('.close__btn')

    const projects = _component_projectContainer__WEBPACK_IMPORTED_MODULE_0__["default"].getAllItem()

    saveBtn.addEventListener('click', () => {
        const menuOpen = (0,_menuHandler__WEBPACK_IMPORTED_MODULE_5__.isMenuOpen)()
        const listOpen = (0,_menuHandler__WEBPACK_IMPORTED_MODULE_5__.isProjectListOpen)()
        const moveItem = curr.getItem(index)
        const destination = projects.find(prj => prj.getValue().title === projectInput.value)
        curr.deleteItem(index)
        destination.addItem(moveItem)
        ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage)('projectContainer', _component_projectContainer__WEBPACK_IMPORTED_MODULE_0__["default"])
        ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])(moveDialog, () => {
            moveDialog.close('saved')
            ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])(item, () => {
                ;(0,_common_closeThis__WEBPACK_IMPORTED_MODULE_1__["default"])(item)
                ;(0,_render__WEBPACK_IMPORTED_MODULE_4__["default"])()
                if(menuOpen) (0,_menuHandler__WEBPACK_IMPORTED_MODULE_5__.openMenu)(false)
                if(listOpen) (0,_menuHandler__WEBPACK_IMPORTED_MODULE_5__.openProjectList)()
            })
        })
    })

    cancelBtn.addEventListener('click', () => {
        ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])(moveDialog, () => {
            moveDialog.close('canceled')
        })
    })
}

/***/ }),

/***/ "./src/utils/ui-handlers/navHandler.js":
/*!*********************************************!*\
  !*** ./src/utils/ui-handlers/navHandler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navHandler)
/* harmony export */ });
/* harmony import */ var _component_Default_Project_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/Default Project/history */ "./src/component/Default Project/history.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/utils/state.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render */ "./src/utils/render.js");
/* harmony import */ var _menuHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuHandler */ "./src/utils/ui-handlers/menuHandler.js");
/* harmony import */ var _appearanceHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appearanceHandler */ "./src/utils/ui-handlers/appearanceHandler.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../localStorage */ "./src/utils/localStorage.js");
/* harmony import */ var _component_projectContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/projectContainer */ "./src/component/projectContainer.js");








function navHandler(){
    const navBar = document.querySelector('.nav__bar')
    const searchNav = navBar.querySelector('.search__nav')
    const inboxNav = navBar.querySelector('.inbox__nav')
    const todayNav = navBar.querySelector('.today__nav')
    const projectNav = navBar.querySelector('.project__nav')
    const historyNav = navBar.querySelector('.history__nav')
    const appearanceBtn = navBar.querySelector('.appearance__mode')

    searchNav.addEventListener('click', () => (0,_menuHandler__WEBPACK_IMPORTED_MODULE_3__.openMenu)())
    
    inboxNav.addEventListener('click', () => {
        ;(0,_state__WEBPACK_IMPORTED_MODULE_1__.setCurrentState)(_component_projectContainer__WEBPACK_IMPORTED_MODULE_6__["default"].getItem(0))
        ;(0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])()
    })
    todayNav.addEventListener('click', () => {
        ;(0,_state__WEBPACK_IMPORTED_MODULE_1__.setCurrentState)(_component_projectContainer__WEBPACK_IMPORTED_MODULE_6__["default"].getItem(1))
        ;(0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])()
    })
    projectNav.addEventListener('click', () => {
        ;(0,_menuHandler__WEBPACK_IMPORTED_MODULE_3__.openMenu)()
        ;(0,_menuHandler__WEBPACK_IMPORTED_MODULE_3__.openProjectList)()
    })
    historyNav.addEventListener('click', () => {
        if(localStorage.getItem('history')){
            (0,_state__WEBPACK_IMPORTED_MODULE_1__.setCurrentState)((0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.loadFromLocalStorage)('history'))
        }else{
            (0,_state__WEBPACK_IMPORTED_MODULE_1__.setCurrentState)(_component_Default_Project_history__WEBPACK_IMPORTED_MODULE_0__["default"])
            ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveToLocalStorage)('history', _component_Default_Project_history__WEBPACK_IMPORTED_MODULE_0__["default"])
        }
        
        (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])()
    })

    appearanceBtn.addEventListener('click', _appearanceHandler__WEBPACK_IMPORTED_MODULE_4__["default"])
}



/***/ }),

/***/ "./src/utils/ui-handlers/projectDialogHandler.js":
/*!*******************************************************!*\
  !*** ./src/utils/ui-handlers/projectDialogHandler.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectDialogHandler)
/* harmony export */ });
/* harmony import */ var _component_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/project */ "./src/component/project.js");
/* harmony import */ var _component_projectContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/projectContainer */ "./src/component/projectContainer.js");
/* harmony import */ var _common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/executeWithAnimation */ "./src/utils/common/executeWithAnimation.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localStorage */ "./src/utils/localStorage.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render */ "./src/utils/render.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state */ "./src/utils/state.js");
/* harmony import */ var _menuHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuHandler */ "./src/utils/ui-handlers/menuHandler.js");
// For projectDialogHandler








function projectDialogHandler() {
    const projectDialog = document.getElementById('project__add-dialog')
    const projectForm = document.getElementById('project__add-form')
    const nameInput = projectForm.querySelector('.project__title-input')
    const desInput = projectForm.querySelector('.project__des-input')
    const addBtn = projectForm.querySelector('.add__btn')
    const closeBtn = projectForm.querySelector('.close__btn')

    closeBtn.addEventListener('click', () => {
        ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])(projectDialog, () => {
            projectForm.removeAttribute('novalidate')
            projectDialog.close('canceled')
            projectDialog.classList.remove('df')
            projectForm.setAttribute('novalidate', 'true')
        })
        
    })

    addBtn.addEventListener('click', () => {
        const allProjects = _component_projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"].getAllItem()
        const nameValue = nameInput.value.trim()
        const desValue = desInput.value.trim()
        
        if (nameValue && desValue) {
            (0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])(projectDialog, () => {
                const existingProject = allProjects.find(prj => prj.getValue().title === nameValue)
                const newProject = (0,_component_project__WEBPACK_IMPORTED_MODULE_0__["default"])()
                if (existingProject) {
                    newProject.changeValue(nameValue + '1', desValue)
                } else {
                    newProject.changeValue(nameValue, desValue)
                }
                _component_projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"].addItem(newProject)
                ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage)('projectContainer', _component_projectContainer__WEBPACK_IMPORTED_MODULE_1__["default"])
                ;(0,_state__WEBPACK_IMPORTED_MODULE_5__.setCurrentState)(newProject)
                ;(0,_render__WEBPACK_IMPORTED_MODULE_4__["default"])()
                ;(0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.openMenu)(false)
                ;(0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.openProjectList)()
            }) 
        } else {
            console.log('Empty input')
        }            
    })
}

/***/ }),

/***/ "./src/utils/ui-handlers/undoHandler.js":
/*!**********************************************!*\
  !*** ./src/utils/ui-handlers/undoHandler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   undoCheckbox: () => (/* binding */ undoCheckbox),
/* harmony export */   undoDelete: () => (/* binding */ undoDelete)
/* harmony export */ });
/* harmony import */ var _component_Default_Project_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/Default Project/history */ "./src/component/Default Project/history.js");
/* harmony import */ var _component_Layout_createUndoBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/Layout/createUndoBox */ "./src/component/Layout/createUndoBox.js");
/* harmony import */ var _component_projectContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/projectContainer */ "./src/component/projectContainer.js");
/* harmony import */ var _common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/executeWithAnimation */ "./src/utils/common/executeWithAnimation.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localStorage */ "./src/utils/localStorage.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render */ "./src/utils/render.js");
/* harmony import */ var _menuHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuHandler */ "./src/utils/ui-handlers/menuHandler.js");








let undoBoxQueue = [] // Queue to store undoBox elements

function addToQueue(item){
    undoBoxQueue.push(item)
} 

function removeUndoBox(undoBox) {
    const index = undoBoxQueue.indexOf(undoBox)
    if (index !== -1) {
        undoBoxQueue.splice(index, 1)
        undoBox.parentElement.removeChild(undoBox) 
    }
}

function checkUndoBoxQueue() {
    setTimeout(() => {
        const undoBox = undoBoxQueue.shift() // Get the first undoBox from the queue
        if (undoBox) {
            (0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_3__["default"])(undoBox, () => {
                undoBox.parentElement.removeChild(undoBox) // Remove the undoBox from the DOM
                checkUndoBoxQueue() // Check the queue for more undoBox elements
            })
        }  
    }, 3000)
}


function undoDeleteHandler(project, item, undoBox){
    const undoBtn = undoBox.querySelector('.undo__btn')
    const closeBtn = undoBox.querySelector('.close__btn')

    undoBtn.addEventListener('click', () => {
        const menuOpen = (0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.isMenuOpen)()
        const projectListOpen = (0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.isProjectListOpen)()
        ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_3__["default"])(undoBox, () => {
            project.addItem(item)
            ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)('projectContainer', _component_projectContainer__WEBPACK_IMPORTED_MODULE_2__["default"])
            removeUndoBox(undoBox)
            ;(0,_render__WEBPACK_IMPORTED_MODULE_5__["default"])()
            if(menuOpen) (0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.openMenu)(false)
            if(projectListOpen) (0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.openProjectList)()
        })
    })

    closeBtn.addEventListener('click', () => {
        ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_3__["default"])(undoBox, () => {
            removeUndoBox(undoBox)
        })
    })
}

function undoCheckboxHandler(project, item, undoBox){
    const undoBtn = undoBox.querySelector('.undo__btn')
    const closeBtn = undoBox.querySelector('.close__btn')

    undoBtn.addEventListener('click', () => {
        const menuOpen = (0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.isMenuOpen)()
        const projectListOpen = (0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.isProjectListOpen)()
        ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_3__["default"])(undoBox, () => {
            item.changeStatus()
            project.addItem(item)
            const index = _component_Default_Project_history__WEBPACK_IMPORTED_MODULE_0__["default"].getAllItem().findIndex(obj => obj.getValue().title === item.getValue().title)
            _component_Default_Project_history__WEBPACK_IMPORTED_MODULE_0__["default"].deleteItem(index)
            ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)('projectContainer', _component_projectContainer__WEBPACK_IMPORTED_MODULE_2__["default"])
            ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)('history', _component_Default_Project_history__WEBPACK_IMPORTED_MODULE_0__["default"])
            removeUndoBox(undoBox)
            ;(0,_render__WEBPACK_IMPORTED_MODULE_5__["default"])()
            if(menuOpen) (0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.openMenu)(false)
            if(projectListOpen) (0,_menuHandler__WEBPACK_IMPORTED_MODULE_6__.openProjectList)()
        })
    })

    closeBtn.addEventListener('click', () => {
        ;(0,_common_executeWithAnimation__WEBPACK_IMPORTED_MODULE_3__["default"])(undoBox, () => {
            removeUndoBox(undoBox)
        })
    })
}

function undoCheckbox(project,item){
    setTimeout(() => {
        const content = document.querySelector('.content')
        const undoBox = (0,_component_Layout_createUndoBox__WEBPACK_IMPORTED_MODULE_1__["default"])('1 item marked finished')
        content.appendChild(undoBox)
        undoCheckboxHandler(project, item, undoBox) 
        addToQueue(undoBox) 
        checkUndoBoxQueue() 
    }, 500)
}

function undoDelete(project,item){
    setTimeout(() => {
        const content = document.querySelector('.content')
        const undoBox = (0,_component_Layout_createUndoBox__WEBPACK_IMPORTED_MODULE_1__["default"])('1 item deleted')
        content.appendChild(undoBox)
        undoDeleteHandler(project, item, undoBox) 
        addToQueue(undoBox) 
        checkUndoBoxQueue() 
    }, 500)
}



/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    const timestamp = date.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/format.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/format.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ }),

/***/ "./node_modules/tinycolor2/esm/tinycolor.js":
/*!**************************************************!*\
  !*** ./node_modules/tinycolor2/esm/tinycolor.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tinycolor)
/* harmony export */ });
// This file is autogenerated. It's used to publish ESM to npm.
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

var trimLeft = /^\s+/;
var trimRight = /\s+$/;
function tinycolor(color, opts) {
  color = color ? color : "";
  opts = opts || {};

  // If input is already a tinycolor, return itself
  if (color instanceof tinycolor) {
    return color;
  }
  // If we are called as a function, call using new instead
  if (!(this instanceof tinycolor)) {
    return new tinycolor(color, opts);
  }
  var rgb = inputToRGB(color);
  this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
  this._gradientType = opts.gradientType;

  // Don't let the range of [0,255] come back in [0,1].
  // Potentially lose a little bit of precision here, but will fix issues where
  // .5 gets interpreted as half of the total, instead of half of 1
  // If it was supposed to be 128, this was already taken care of by `inputToRgb`
  if (this._r < 1) this._r = Math.round(this._r);
  if (this._g < 1) this._g = Math.round(this._g);
  if (this._b < 1) this._b = Math.round(this._b);
  this._ok = rgb.ok;
}
tinycolor.prototype = {
  isDark: function isDark() {
    return this.getBrightness() < 128;
  },
  isLight: function isLight() {
    return !this.isDark();
  },
  isValid: function isValid() {
    return this._ok;
  },
  getOriginalInput: function getOriginalInput() {
    return this._originalInput;
  },
  getFormat: function getFormat() {
    return this._format;
  },
  getAlpha: function getAlpha() {
    return this._a;
  },
  getBrightness: function getBrightness() {
    //http://www.w3.org/TR/AERT#color-contrast
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  },
  getLuminance: function getLuminance() {
    //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    var rgb = this.toRgb();
    var RsRGB, GsRGB, BsRGB, R, G, B;
    RsRGB = rgb.r / 255;
    GsRGB = rgb.g / 255;
    BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) R = RsRGB / 12.92;else R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    if (GsRGB <= 0.03928) G = GsRGB / 12.92;else G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    if (BsRGB <= 0.03928) B = BsRGB / 12.92;else B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  },
  setAlpha: function setAlpha(value) {
    this._a = boundAlpha(value);
    this._roundA = Math.round(100 * this._a) / 100;
    return this;
  },
  toHsv: function toHsv() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v,
      a: this._a
    };
  },
  toHsvString: function toHsvString() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    var h = Math.round(hsv.h * 360),
      s = Math.round(hsv.s * 100),
      v = Math.round(hsv.v * 100);
    return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
  },
  toHsl: function toHsl() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    return {
      h: hsl.h * 360,
      s: hsl.s,
      l: hsl.l,
      a: this._a
    };
  },
  toHslString: function toHslString() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    var h = Math.round(hsl.h * 360),
      s = Math.round(hsl.s * 100),
      l = Math.round(hsl.l * 100);
    return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
  },
  toHex: function toHex(allow3Char) {
    return rgbToHex(this._r, this._g, this._b, allow3Char);
  },
  toHexString: function toHexString(allow3Char) {
    return "#" + this.toHex(allow3Char);
  },
  toHex8: function toHex8(allow4Char) {
    return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
  },
  toHex8String: function toHex8String(allow4Char) {
    return "#" + this.toHex8(allow4Char);
  },
  toRgb: function toRgb() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function toRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function toPercentageRgb() {
    return {
      r: Math.round(bound01(this._r, 255) * 100) + "%",
      g: Math.round(bound01(this._g, 255) * 100) + "%",
      b: Math.round(bound01(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function toPercentageRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function toName() {
    if (this._a === 0) {
      return "transparent";
    }
    if (this._a < 1) {
      return false;
    }
    return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
  },
  toFilter: function toFilter(secondColor) {
    var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
    var secondHex8String = hex8String;
    var gradientType = this._gradientType ? "GradientType = 1, " : "";
    if (secondColor) {
      var s = tinycolor(secondColor);
      secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
  },
  toString: function toString(format) {
    var formatSet = !!format;
    format = format || this._format;
    var formattedString = false;
    var hasAlpha = this._a < 1 && this._a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
    if (needsAlphaFormat) {
      // Special case for "transparent", all other non-alpha formats
      // will return rgba when there is transparency.
      if (format === "name" && this._a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  },
  clone: function clone() {
    return tinycolor(this.toString());
  },
  _applyModification: function _applyModification(fn, args) {
    var color = fn.apply(null, [this].concat([].slice.call(args)));
    this._r = color._r;
    this._g = color._g;
    this._b = color._b;
    this.setAlpha(color._a);
    return this;
  },
  lighten: function lighten() {
    return this._applyModification(_lighten, arguments);
  },
  brighten: function brighten() {
    return this._applyModification(_brighten, arguments);
  },
  darken: function darken() {
    return this._applyModification(_darken, arguments);
  },
  desaturate: function desaturate() {
    return this._applyModification(_desaturate, arguments);
  },
  saturate: function saturate() {
    return this._applyModification(_saturate, arguments);
  },
  greyscale: function greyscale() {
    return this._applyModification(_greyscale, arguments);
  },
  spin: function spin() {
    return this._applyModification(_spin, arguments);
  },
  _applyCombination: function _applyCombination(fn, args) {
    return fn.apply(null, [this].concat([].slice.call(args)));
  },
  analogous: function analogous() {
    return this._applyCombination(_analogous, arguments);
  },
  complement: function complement() {
    return this._applyCombination(_complement, arguments);
  },
  monochromatic: function monochromatic() {
    return this._applyCombination(_monochromatic, arguments);
  },
  splitcomplement: function splitcomplement() {
    return this._applyCombination(_splitcomplement, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function triad() {
    return this._applyCombination(polyad, [3]);
  },
  tetrad: function tetrad() {
    return this._applyCombination(polyad, [4]);
  }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function (color, opts) {
  if (_typeof(color) == "object") {
    var newColor = {};
    for (var i in color) {
      if (color.hasOwnProperty(i)) {
        if (i === "a") {
          newColor[i] = color[i];
        } else {
          newColor[i] = convertToPercentage(color[i]);
        }
      }
    }
    color = newColor;
  }
  return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {
  var rgb = {
    r: 0,
    g: 0,
    b: 0
  };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format = false;
  if (typeof color == "string") {
    color = stringInputToObject(color);
  }
  if (_typeof(color) == "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format = "hsl";
    }
    if (color.hasOwnProperty("a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok: ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a
  };
}

// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;
  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h: h,
    s: s,
    l: l
  };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
  var r, g, b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    v = max;
  var d = max - min;
  s = max === 0 ? 0 : d / max;
  if (max == min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h: h,
    s: s,
    v: v
  };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h),
    f = h - i,
    p = v * (1 - s),
    q = v * (1 - f * s),
    t = v * (1 - (1 - f) * s),
    mod = i % 6,
    r = [v, q, p, p, t, v][mod],
    g = [t, v, v, q, p, p][mod],
    b = [p, p, t, v, v, q][mod];
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {
  var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];

  // Return a 3 character hex if possible
  if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {
  var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a))];

  // Return a 4 character hex if possible
  if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {
  var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
  return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
  if (!color1 || !color2) return false;
  return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function () {
  return tinycolor.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};

// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function _desaturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.s -= amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _saturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.s += amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _greyscale(color) {
  return tinycolor(color).desaturate(100);
}
function _lighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.l += amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}
function _brighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var rgb = tinycolor(color).toRgb();
  rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
  rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
  rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
  return tinycolor(rgb);
}
function _darken(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.l -= amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function _spin(color, amount) {
  var hsl = tinycolor(color).toHsl();
  var hue = (hsl.h + amount) % 360;
  hsl.h = hue < 0 ? 360 + hue : hue;
  return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function _complement(color) {
  var hsl = tinycolor(color).toHsl();
  hsl.h = (hsl.h + 180) % 360;
  return tinycolor(hsl);
}
function polyad(color, number) {
  if (isNaN(number) || number <= 0) {
    throw new Error("Argument to polyad must be a positive number");
  }
  var hsl = tinycolor(color).toHsl();
  var result = [tinycolor(color)];
  var step = 360 / number;
  for (var i = 1; i < number; i++) {
    result.push(tinycolor({
      h: (hsl.h + i * step) % 360,
      s: hsl.s,
      l: hsl.l
    }));
  }
  return result;
}
function _splitcomplement(color) {
  var hsl = tinycolor(color).toHsl();
  var h = hsl.h;
  return [tinycolor(color), tinycolor({
    h: (h + 72) % 360,
    s: hsl.s,
    l: hsl.l
  }), tinycolor({
    h: (h + 216) % 360,
    s: hsl.s,
    l: hsl.l
  })];
}
function _analogous(color, results, slices) {
  results = results || 6;
  slices = slices || 30;
  var hsl = tinycolor(color).toHsl();
  var part = 360 / slices;
  var ret = [tinycolor(color)];
  for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
    hsl.h = (hsl.h + part) % 360;
    ret.push(tinycolor(hsl));
  }
  return ret;
}
function _monochromatic(color, results) {
  results = results || 6;
  var hsv = tinycolor(color).toHsv();
  var h = hsv.h,
    s = hsv.s,
    v = hsv.v;
  var ret = [];
  var modification = 1 / results;
  while (results--) {
    ret.push(tinycolor({
      h: h,
      s: s,
      v: v
    }));
    v = (v + modification) % 1;
  }
  return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function (color1, color2, amount) {
  amount = amount === 0 ? 0 : amount || 50;
  var rgb1 = tinycolor(color1).toRgb();
  var rgb2 = tinycolor(color2).toRgb();
  var p = amount / 100;
  var rgba = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b,
    a: (rgb2.a - rgb1.a) * p + rgb1.a
  };
  return tinycolor(rgba);
};

// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function (color1, color2) {
  var c1 = tinycolor(color1);
  var c2 = tinycolor(color2);
  return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function (color1, color2, wcag2) {
  var readability = tinycolor.readability(color1, color2);
  var wcag2Parms, out;
  out = false;
  wcag2Parms = validateWCAG2Parms(wcag2);
  switch (wcag2Parms.level + wcag2Parms.size) {
    case "AAsmall":
    case "AAAlarge":
      out = readability >= 4.5;
      break;
    case "AAlarge":
      out = readability >= 3;
      break;
    case "AAAsmall":
      out = readability >= 7;
      break;
  }
  return out;
};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function (baseColor, colorList, args) {
  var bestColor = null;
  var bestScore = 0;
  var readability;
  var includeFallbackColors, level, size;
  args = args || {};
  includeFallbackColors = args.includeFallbackColors;
  level = args.level;
  size = args.size;
  for (var i = 0; i < colorList.length; i++) {
    readability = tinycolor.readability(baseColor, colorList[i]);
    if (readability > bestScore) {
      bestScore = readability;
      bestColor = tinycolor(colorList[i]);
    }
  }
  if (tinycolor.isReadable(baseColor, bestColor, {
    level: level,
    size: size
  }) || !includeFallbackColors) {
    return bestColor;
  } else {
    args.includeFallbackColors = false;
    return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
  }
};

// Big List of Colors
// ------------------
// <https://www.w3.org/TR/css-color-4/#named-colors>
var names = tinycolor.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);

// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
  var flipped = {};
  for (var i in o) {
    if (o.hasOwnProperty(i)) {
      flipped[o[i]] = i;
    }
  }
  return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
  if (isOnePointZero(n)) n = "100%";
  var processPercent = isPercentage(n);
  n = Math.min(max, Math.max(0, parseFloat(n)));

  // Automatically convert percentage into number
  if (processPercent) {
    n = parseInt(n * max, 10) / 100;
  }

  // Handle floating point rounding errors
  if (Math.abs(n - max) < 0.000001) {
    return 1;
  }

  // Convert into [0, 1] range if it isn't already
  return n % max / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
  return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
  return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
  return c.length == 1 ? "0" + c : "" + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
  if (n <= 1) {
    n = n * 100 + "%";
  }
  return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
var matchers = function () {
  // <http://www.w3.org/TR/css3-values/#integers>
  var CSS_INTEGER = "[-\\+]?\\d+%?";

  // <http://www.w3.org/TR/css3-values/#number-value>
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

  // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
  var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

  // Actual matching.
  // Parentheses and commas are optional, but not required.
  // Whitespace can take the place of commas or opening paren
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
  return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {
  color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color == "transparent") {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  }

  // Try to match string input using regular expressions.
  // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
  // Just return an object and let the conversion functions handle that.
  // This way the result will be the same whether the tinycolor is initialized with string or object.
  var match;
  if (match = matchers.rgb.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3]
    };
  }
  if (match = matchers.rgba.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsl.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3]
    };
  }
  if (match = matchers.hsla.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsv.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3]
    };
  }
  if (match = matchers.hsva.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hex8.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex6.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  if (match = matchers.hex4.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      a: convertHexToDecimal(match[4] + "" + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex3.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function validateWCAG2Parms(parms) {
  // return valid WCAG2 parms for isReadable.
  // If input parms are invalid, return {"level":"AA", "size":"small"}
  var level, size;
  parms = parms || {
    level: "AA",
    size: "small"
  };
  level = (parms.level || "AA").toUpperCase();
  size = (parms.size || "small").toLowerCase();
  if (level !== "AA" && level !== "AAA") {
    level = "AA";
  }
  if (size !== "small" && size !== "large") {
    size = "small";
  }
  return {
    level: level,
    size: size
  };
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _style_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/header.css */ "./src/style/header.css");
/* harmony import */ var _style_nav_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/nav.css */ "./src/style/nav.css");
/* harmony import */ var _style_menu_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/menu.css */ "./src/style/menu.css");
/* harmony import */ var _style_content_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/content.css */ "./src/style/content.css");
/* harmony import */ var _style_item_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/item.css */ "./src/style/item.css");
/* harmony import */ var _style_detail_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/detail.css */ "./src/style/detail.css");
/* harmony import */ var _style_dialog_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/dialog.css */ "./src/style/dialog.css");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/render */ "./src/utils/render.js");










function ScreenController(){
    (0,_utils_render__WEBPACK_IMPORTED_MODULE_8__["default"])()
}

ScreenController()



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDJGQUEyRixNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLHVEQUF1RCxvQkFBb0Isb0JBQW9CLHFCQUFxQixnREFBZ0QsMEJBQTBCLGtDQUFrQyxHQUFHLHlDQUF5Qyx3Q0FBd0MsR0FBRywrQkFBK0IsbURBQW1ELEdBQUcscUJBQXFCLG9CQUFvQixtQkFBbUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIscURBQXFELG1CQUFtQixHQUFHLGtCQUFrQixvQkFBb0IsbUJBQW1CLDZCQUE2QiwwQkFBMEIsc0JBQXNCLHNEQUFzRCxvQkFBb0IsR0FBRyxlQUFlLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHNCQUFzQixzREFBc0QsbUJBQW1CLEdBQUcsNEVBQTRFLHFCQUFxQixHQUFHLG9CQUFvQixvQkFBb0IsOEJBQThCLDBCQUEwQix3QkFBd0IsZ0JBQWdCLG1CQUFtQixHQUFHLGlCQUFpQixvQkFBb0IsOEJBQThCLDBCQUEwQix3QkFBd0IsZ0JBQWdCLG1CQUFtQixHQUFHLHlEQUF5RCxtQkFBbUIsMEJBQTBCLG1CQUFtQix3QkFBd0IsR0FBRywrREFBK0Qsc0JBQXNCLHFDQUFxQyxHQUFHLDhDQUE4QyxrREFBa0QsR0FBRywrQ0FBK0MscURBQXFELEdBQUcsNkNBQTZDLG1EQUFtRCxHQUFHLDJDQUEyQyx1QkFBdUIsNkJBQTZCLGVBQWUsbUJBQW1CLHVDQUF1QyxrREFBa0Qsb0JBQW9CLG9CQUFvQix5QkFBeUIsb0JBQW9CLDRCQUE0QixHQUFHLGlDQUFpQyxtREFBbUQsbUNBQW1DLGtCQUFrQixvQkFBb0IscUJBQXFCLHlCQUF5QiwwQkFBMEIsNkNBQTZDLDBEQUEwRCxHQUFHLDJDQUEyQyx5QkFBeUIsR0FBRyxtQkFBbUI7QUFDNXhIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SXZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFGQUFxRixVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxzRkFBc0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxVQUFVLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUs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O0FBQ0E7QUFDQSxzREFBc0QsYUFBYTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Q7O0FBRUEsV0FBVyxpRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLHVE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QTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDdUI7QUFDTjtBQUMrQzs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AseUJBQXlCLDJEQUFVO0FBQ25DLDBCQUEwQiwyREFBVTs7QUFFcEM7QUFDQSxzQkFBc0IseUdBQStCO0FBQ3JEO0FBQ0EsdUJBQXVCLHlHQUErQjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0EsdURBQXVELDZEQUFpQjtBQUN4RTs7QUFFQTtBQUNBLGlFQUFlLHdCQUF3QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEaUI7QUFDSztBQUNKO0FBQ1E7QUFLOUI7QUFDSTtBQUNGOztBQUV0QztBQUNBO0FBQ3NDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVnQzs7QUFFaEM7QUFDQSxRQUFRLGNBQWM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZpRTs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUEsT0FBTyx5RUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRzs7QUFF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O0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekR0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDLDRDQUE0QztBQUM1Qyw0Q0FBNEM7QUFDNUM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsVUFBVTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCx3QkFBd0I7O0FBRW5GO0FBQ0E7QUFDQSwyQ0FBMkMsd0JBQXdCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsNEJBQTRCLGlCQUFpQjtBQUMzSCw4RUFBOEUsMkJBQTJCLGtCQUFrQjtBQUMzSCxxREFBcUQsb0RBQW9ELGlCQUFpQjtBQUMxSCxxREFBcUQsb0RBQW9ELGlCQUFpQjtBQUMxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsTUFBTSxpQkFBaUIsYUFBYSxpQkFBaUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDN0QsMkJBQTJCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUM3RCwyQkFBMkIsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUM3RSwyQkFBMkIsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUM3RTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUyxRQUFRLFNBQVMsUUFBUSxRQUFRO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0M7Ozs7Ozs7VUMzcENoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDQztBQUNIO0FBQ0M7QUFDRztBQUNIO0FBQ0U7QUFDQTtBQUNjOztBQUV6QztBQUNBLElBQUkseURBQVk7QUFDaEI7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL2NvbnRlbnQuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUvZGV0YWlsLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL2RpYWxvZy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9oZWFkZXIuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUvaXRlbS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9tZW51LmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL25hdi5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUvY29udGVudC5jc3M/OGFiZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL2RldGFpbC5jc3M/ZTRjNyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL2RpYWxvZy5jc3M/MzIyMCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL2hlYWRlci5jc3M/OWEzMyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL2l0ZW0uY3NzP2NiZDMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9tZW51LmNzcz9lYjE4Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUvbmF2LmNzcz9mMzExIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudC9EZWZhdWx0IFByb2plY3QvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudC9EZWZhdWx0IFByb2plY3QvaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvRGVmYXVsdCBQcm9qZWN0L3NlYXJjaFJlc3VsdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudC9EZWZhdWx0IFByb2plY3QvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZURldGFpbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudC9MYXlvdXQvY3JlYXRlRGlhbG9ncy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudC9MYXlvdXQvY3JlYXRlRmluaXNoZWRUb2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50L0xheW91dC9jcmVhdGVIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZUxheW91dC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudC9MYXlvdXQvY3JlYXRlTWVudS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudC9MYXlvdXQvY3JlYXRlTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudC9MYXlvdXQvY3JlYXRlTm90ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudC9MYXlvdXQvY3JlYXRlVG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudC9MYXlvdXQvY3JlYXRlVW5kb0JveC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudC9pdGVtQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50L25vdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudC9wcm9qZWN0Q29udGFpbmVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50L3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy9jb21tb24vYXBwZW5kQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy9jb21tb24vY2xvc2VUaGlzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvY29tbW9uL2NyZWF0ZUJ1dHRvbldpdGhDbGFzcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL2NvbW1vbi9jcmVhdGVEaXZXaXRoQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy9jb21tb24vY3JlYXRlSWNvbldpdGhDbGFzcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL2NvbW1vbi9leGVjdXRlV2l0aEFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL2NvbW1vbi9vcGVuVGhpcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL2NvbW1vbi9zZWFyY2hBbGxJdGVtcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL2NvbW1vbi9zZXRQcmlvcml0eUNsYXNzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy91aS1oYW5kbGVycy9hcHBlYXJhbmNlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL3VpLWhhbmRsZXJzL2NvbmZpcm1EaWFsb2dIYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvdWktaGFuZGxlcnMvY29udGVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy91aS1oYW5kbGVycy9kZXRhaWxIYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvdWktaGFuZGxlcnMvZWRpdERpYWxvZ0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy91aS1oYW5kbGVycy9oZWFkZXJIYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvdWktaGFuZGxlcnMvaXRlbURpYWxvZ0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy91aS1oYW5kbGVycy9tZW51SGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL3VpLWhhbmRsZXJzL21vdmVEaWFsb2dIYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvdWktaGFuZGxlcnMvbmF2SGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL3VpLWhhbmRsZXJzL3Byb2plY3REaWFsb2dIYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvdWktaGFuZGxlcnMvdW5kb0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2FkZExlYWRpbmdaZXJvcy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRPcHRpb25zLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL3Byb3RlY3RlZFRva2Vucy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdGFudHMubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RydWN0RnJvbS5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZm9ybWF0Lm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldERheU9mWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldFdlZWsubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vla1llYXIubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNEYXRlLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVmFsaWQubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4ubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWsubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdGlueWNvbG9yMi9lc20vdGlueWNvbG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb250ZW50e1xuICAgIGZsZXgtZ3JvdzoxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1kYXJrKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250ZW50X190aXRsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cblxuLmNvbnRlbnRfX3RpdGxlIGgxe1xuICAgIG1hcmdpbjogMnJlbSAwO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4uY29udGVudF9fdGl0bGUgaXtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi5jb250ZW50X190aXRsZSBpOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0taG92ZXItdGV4dC1jb2xvcik7XG59XG5cbi5jb250ZW50X19pdGVtc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdhcDoxcmVtO1xufVxuXG4udW5kb19fYm94e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICByaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctY29sb3IpIDVweCA1cHggMTBweDtcbiAgICBhbmltYXRpb246ZmFkZUluIGxpbmVhciAuMnM7XG59XG5cbi51bmRvX19ib3ggLmJ1dHRvbnN7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi51bmRvX19ib3ggLnVuZG9fX2J0bntcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1lZGl0LWJ0bi1jb2xvcik7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi51bmRvX19ib3ggLmNsb3NlX19idG57XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGVsZXRlLWJ0bi1jb2xvcik7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi51bmRvX19ib3hbY2xvc2luZ117XG4gICAgYW5pbWF0aW9uOmZhZGVPdXQgbGluZWFyIC4ycztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9jb250ZW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsV0FBVztBQUNmOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250ZW50e1xcbiAgICBmbGV4LWdyb3c6MTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMXJlbSAyLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWRhcmspO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb250ZW50X190aXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLmNvbnRlbnRfX3RpdGxlIGgxe1xcbiAgICBtYXJnaW46IDJyZW0gMDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5jb250ZW50X190aXRsZSBpe1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY29udGVudF9fdGl0bGUgaTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0taG92ZXItdGV4dC1jb2xvcik7XFxufVxcblxcbi5jb250ZW50X19pdGVtc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOjFyZW07XFxufVxcblxcbi51bmRvX19ib3h7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1jb2xvcikgNXB4IDVweCAxMHB4O1xcbiAgICBhbmltYXRpb246ZmFkZUluIGxpbmVhciAuMnM7XFxufVxcblxcbi51bmRvX19ib3ggLmJ1dHRvbnN7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udW5kb19fYm94IC51bmRvX19idG57XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWVkaXQtYnRuLWNvbG9yKTtcXG4gICAgY29sb3I6ICNGRkY7XFxufVxcblxcbi51bmRvX19ib3ggLmNsb3NlX19idG57XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRlbGV0ZS1idG4tY29sb3IpO1xcbiAgICBjb2xvcjogI0ZGRjtcXG59XFxuXFxuLnVuZG9fX2JveFtjbG9zaW5nXXtcXG4gICAgYW5pbWF0aW9uOmZhZGVPdXQgbGluZWFyIC4ycztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZGV0YWlse1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMik7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS10YWItYm9yZGVyLWNvbG9yKTtcbiAgICAvKiBhbmltYXRpb246IHNsaWRlSW5SaWdodCBsaW5lYXIgLjNzOyAqL1xufVxuLmRldGFpbFtvcGVuaW5nXXtcbiAgICBhbmltYXRpb246IHNsaWRlSW5SaWdodCBsaW5lYXIgLjNzO1xufVxuXG4uZGV0YWlsW29wZW5de1xuICAgIGFuaW1hdGlvbjogbm9uZVxufVxuXG4uZGV0YWlsW2Nsb3Npbmdde1xuICAgIGFuaW1hdGlvbjogc2xpZGVPdXRSaWdodCBsaW5lYXIgLjNzO1xufVxuXG4uZGV0YWlsIGgxe1xuICAgIG1hcmdpbjogMnJlbSAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRldGFpbCBwe1xuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmRldGFpbCBkaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmRldGFpbCBidXR0b24uZGVsZXRlX19idG57XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGVsZXRlLWJ0bi1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xufVxuXG4uZGV0YWlsIGJ1dHRvbi5jbG9zZV9fYnRue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC4xcmVtO1xuICAgIGxlZnQ6IC4xcmVtO1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4uZGV0YWlsIGJ1dHRvbi5jbG9zZV9fYnRuOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0taG92ZXItdGV4dC1jb2xvcilcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2RldGFpbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osOENBQThDO0lBQzlDLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kZXRhaWx7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMik7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tdGFiLWJvcmRlci1jb2xvcik7XFxuICAgIC8qIGFuaW1hdGlvbjogc2xpZGVJblJpZ2h0IGxpbmVhciAuM3M7ICovXFxufVxcbi5kZXRhaWxbb3BlbmluZ117XFxuICAgIGFuaW1hdGlvbjogc2xpZGVJblJpZ2h0IGxpbmVhciAuM3M7XFxufVxcblxcbi5kZXRhaWxbb3Blbl17XFxuICAgIGFuaW1hdGlvbjogbm9uZVxcbn1cXG5cXG4uZGV0YWlsW2Nsb3Npbmdde1xcbiAgICBhbmltYXRpb246IHNsaWRlT3V0UmlnaHQgbGluZWFyIC4zcztcXG59XFxuXFxuLmRldGFpbCBoMXtcXG4gICAgbWFyZ2luOiAycmVtIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGV0YWlsIHB7XFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kZXRhaWwgZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uZGV0YWlsIGJ1dHRvbi5kZWxldGVfX2J0bntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGVsZXRlLWJ0bi1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG59XFxuXFxuLmRldGFpbCBidXR0b24uY2xvc2VfX2J0bntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC4xcmVtO1xcbiAgICBsZWZ0OiAuMXJlbTtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5kZXRhaWwgYnV0dG9uLmNsb3NlX19idG46aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWhvdmVyLXRleHQtY29sb3IpXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZGlhbG9ne1xuICAgIGJvcmRlcjpub25lO1xuICAgIGFuaW1hdGlvbjpmYWRlSW4gbGluZWFyIC4ycztcbn1cblxuZGlhbG9nOjpiYWNrZHJvcHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzMzU7XG4gICAgYW5pbWF0aW9uOmZhZGVJbiBsaW5lYXIgLjJzO1xufVxuXG5kaWFsb2dbY2xvc2luZ117XG4gICAgYW5pbWF0aW9uOmZhZGVPdXQgbGluZWFyIC4ycztcbn1cblxuZGlhbG9nIGRpdiB7XG4gICAgLyogU3R5bGluZyBmb3IgZm9ybSBkaXZzICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuZGlhbG9nIGlucHV0IHtcbiAgICAvKiBTdHlsaW5nIGZvciBmb3JtIGlucHV0cyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMCAuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcbn1cblxuZGlhbG9nIGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmRpYWxvZyBsYWJlbCB7XG4gICAgLyogU3R5bGluZyBmb3IgZm9ybSBsYWJlbHMgKi9cbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IC4ycmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XG59XG5cbmRpYWxvZyB0ZXh0YXJlYSB7XG4gICAgLyogU3R5bGluZyBmb3IgZm9ybSB0ZXh0YXJlYXMgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBwYWRkaW5nOiAuMnJlbSAuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcbn1cblxuZGlhbG9nIHRleHRhcmVhOmZvY3Vze1xuICAgIG91dGxpbmU6bm9uZTtcbn1cblxuZGlhbG9nIHNlbGVjdDpmb2N1c3tcbiAgICBvdXRsaW5lOm5vbmVcbn1cblxuZGlhbG9nIC5idXR0b25zIHtcbiAgICAvKiBTdHlsaW5nIGZvciBidXR0b24gY29udGFpbmVyICovXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5kaWFsb2cgLmFkZF9fYnRuIHtcbiAgICAvKiBTdHlsaW5nIGZvciBhZGQgYnV0dG9uICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG4gICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbn1cblxuZGlhbG9nIC5jbG9zZV9fYnRuIHtcbiAgICAvKiBTdHlsaW5nIGZvciBjbG9zZSBidXR0b24gKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWxldGUtYnRuLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG4gICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbn1cblxuLyogUHJvamVjdCBEaWFsb2cgc2VjdGlvbiAqL1xuI3Byb2plY3RfX2FkZC1kaWFsb2cge1xuICAgIC8qIFN0eWxpbmcgZm9yIHRoZSBkaWFsb2cgKi9cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTsgKi9cbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNwcm9qZWN0X19hZGQtZm9ybXtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLyogSXRlbSBkaWFsb2cgc2VjdGlvbiAqL1xuI2l0ZW1fX2FkZC1kaWFsb2cge1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7ICovXG59XG5cbiNpdGVtX19hZGQtZGlhbG9nIC5zZWxlY3RfX2l0ZW0tZm9ybSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNpdGVtX19hZGQtZGlhbG9nIC5zZWxlY3RfX2l0ZW0tZm9ybSBzZWxlY3Qge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMCAwLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xufVxuXG4jaXRlbV9fYWRkLWRpYWxvZz5mb3JtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbiNpdGVtX19tb3ZlLWRpYWxvZyBzZWxlY3QsXG4jaXRlbV9fYWRkLWRpYWxvZz5mb3JtPmRpdj5zZWxlY3Qge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAwIDAuMjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XG59XG5cbiNpdGVtX19hZGQtZGlhbG9nID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4jaXRlbV9fYWRkLWRpYWxvZyA+IGRpdiA+IGxhYmVse1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbiNpdGVtX19hZGQtZGlhbG9nPmRpdj5zZWxlY3Qge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMCAwLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xufVxuXG4vKiBFZGl0IGRpYWxvZyBzZWN0aW9uICovXG4jaXRlbV9fZWRpdC1kaWFsb2d7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLTIpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTsgKi9cbn1cblxuLyogQ29uZmlybSBkaWFsb2cgc2VjdGlvbiAqL1xuI2NvbmZpcm1fX2RpYWxvZ3tcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTsgKi9cbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2NvbmZpcm1fX2RpYWxvZz5zcGFuIHtcbiAgICAvKiBTdHlsaW5nIGZvciBmb3JtIGxhYmVscyAqL1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjJyZW07XG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcbn1cblxuLyogTW92ZSBkaWFsb2cgKi9cbiNpdGVtX19tb3ZlLWRpYWxvZ3tcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTsgKi9cbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2l0ZW1fX21vdmUtZGlhbG9nIGRpdntcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jaXRlbV9fbW92ZS1kaWFsb2cgc2VsZWN0e1xuICAgIHdpZHRoOiAyMDBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9kaWFsb2cuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksNEJBQTRC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IGJvcmRlcjpub25lO1xcbiAgICBhbmltYXRpb246ZmFkZUluIGxpbmVhciAuMnM7XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3B7XFxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzMzNTtcXG4gICAgYW5pbWF0aW9uOmZhZGVJbiBsaW5lYXIgLjJzO1xcbn1cXG5cXG5kaWFsb2dbY2xvc2luZ117XFxuICAgIGFuaW1hdGlvbjpmYWRlT3V0IGxpbmVhciAuMnM7XFxufVxcblxcbmRpYWxvZyBkaXYge1xcbiAgICAvKiBTdHlsaW5nIGZvciBmb3JtIGRpdnMgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuZGlhbG9nIGlucHV0IHtcXG4gICAgLyogU3R5bGluZyBmb3IgZm9ybSBpbnB1dHMgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAwIC41cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxufVxcblxcbmRpYWxvZyBpbnB1dDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuZGlhbG9nIGxhYmVsIHtcXG4gICAgLyogU3R5bGluZyBmb3IgZm9ybSBsYWJlbHMgKi9cXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC4ycmVtO1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbn1cXG5cXG5kaWFsb2cgdGV4dGFyZWEge1xcbiAgICAvKiBTdHlsaW5nIGZvciBmb3JtIHRleHRhcmVhcyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgcGFkZGluZzogLjJyZW0gLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcXG59XFxuXFxuZGlhbG9nIHRleHRhcmVhOmZvY3Vze1xcbiAgICBvdXRsaW5lOm5vbmU7XFxufVxcblxcbmRpYWxvZyBzZWxlY3Q6Zm9jdXN7XFxuICAgIG91dGxpbmU6bm9uZVxcbn1cXG5cXG5kaWFsb2cgLmJ1dHRvbnMge1xcbiAgICAvKiBTdHlsaW5nIGZvciBidXR0b24gY29udGFpbmVyICovXFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuZGlhbG9nIC5hZGRfX2J0biB7XFxuICAgIC8qIFN0eWxpbmcgZm9yIGFkZCBidXR0b24gKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xcbiAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG5kaWFsb2cgLmNsb3NlX19idG4ge1xcbiAgICAvKiBTdHlsaW5nIGZvciBjbG9zZSBidXR0b24gKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVsZXRlLWJ0bi1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLyogUHJvamVjdCBEaWFsb2cgc2VjdGlvbiAqL1xcbiNwcm9qZWN0X19hZGQtZGlhbG9nIHtcXG4gICAgLyogU3R5bGluZyBmb3IgdGhlIGRpYWxvZyAqL1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTsgKi9cXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMik7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdF9fYWRkLWZvcm17XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBJdGVtIGRpYWxvZyBzZWN0aW9uICovXFxuI2l0ZW1fX2FkZC1kaWFsb2cge1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpOyAqL1xcbn1cXG5cXG4jaXRlbV9fYWRkLWRpYWxvZyAuc2VsZWN0X19pdGVtLWZvcm0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2l0ZW1fX2FkZC1kaWFsb2cgLnNlbGVjdF9faXRlbS1mb3JtIHNlbGVjdCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDAgMC4yNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4jaXRlbV9fYWRkLWRpYWxvZz5mb3JtIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4jaXRlbV9fbW92ZS1kaWFsb2cgc2VsZWN0LFxcbiNpdGVtX19hZGQtZGlhbG9nPmZvcm0+ZGl2PnNlbGVjdCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAwIDAuMjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcXG59XFxuXFxuI2l0ZW1fX2FkZC1kaWFsb2cgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI2l0ZW1fX2FkZC1kaWFsb2cgPiBkaXYgPiBsYWJlbHtcXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXFxuI2l0ZW1fX2FkZC1kaWFsb2c+ZGl2PnNlbGVjdCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDAgMC4yNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4vKiBFZGl0IGRpYWxvZyBzZWN0aW9uICovXFxuI2l0ZW1fX2VkaXQtZGlhbG9ne1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpOyAqL1xcbn1cXG5cXG4vKiBDb25maXJtIGRpYWxvZyBzZWN0aW9uICovXFxuI2NvbmZpcm1fX2RpYWxvZ3tcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7ICovXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLTIpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jY29uZmlybV9fZGlhbG9nPnNwYW4ge1xcbiAgICAvKiBTdHlsaW5nIGZvciBmb3JtIGxhYmVscyAqL1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxufVxcblxcbi8qIE1vdmUgZGlhbG9nICovXFxuI2l0ZW1fX21vdmUtZGlhbG9ne1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTsgKi9cXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNpdGVtX19tb3ZlLWRpYWxvZyBkaXZ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaXRlbV9fbW92ZS1kaWFsb2cgc2VsZWN0e1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaGVhZGVye1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDAgLjI1cmVtO1xuICAgIGZsZXgtZ3JvdzogNDtcbn1cblxuaGVhZGVyIC5sb2dve1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmhlYWRlciAubG9nbyBpe1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG5oZWFkZXIgLm1lbnVfX2J0bjpob3ZlcixcbmhlYWRlciAuYWRkX19idG46aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQhaW1wb3J0YW50O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImhlYWRlcntcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDAgLjI1cmVtO1xcbiAgICBmbGV4LWdyb3c6IDQ7XFxufVxcblxcbmhlYWRlciAubG9nb3tcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgLmxvZ28gaXtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbmhlYWRlciAubWVudV9fYnRuOmhvdmVyLFxcbmhlYWRlciAuYWRkX19idG46aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdCFpbXBvcnRhbnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogVE9ET1MqL1xuXG4udG8tZG8sXG4ubm90ZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBhbmltYXRpb246ZmFkZUluIGxpbmVhciAuM3M7XG59XG5cbi50by1kb1tjbG9zaW5nXSxcbi5ub3RlW2Nsb3NpbmddeyAgICBcbiAgICBhbmltYXRpb246IGZhZGVPdXQgbGluZWFyIC4zczsgICAgXG59XG5cbi50by1kbzpob3Zlcixcbi5ub3RlOmhvdmVye1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1jb2xvcikgNXB4IDVweCAxMHB4O1xufVxuXG4udG8tZG8gLmNoZWNrYm94e1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLnRvLWRvIC50aXRsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xuICAgIGZsZXgtZ3JvdzogMjA7XG59XG4ubm90ZSAudGl0bGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xuICAgIGZsZXgtZ3JvdzogNTtcbn1cblxuLnRvLWRvIC5jaGVja2JveCBpbnB1dDpob3Zlcixcbi50by1kbyAudGl0bGU6aG92ZXIsXG4ubm90ZSAudGl0bGU6aG92ZXJ7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG59XG5cbi50by1kbyAuYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZ2FwOiAxcmVtO1xuICAgIHdpZHRoOiAzMDBweDtcbn1cbi5ub3RlIC5idXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBnYXA6IDFyZW07XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG4udG8tZG8gLmJ1dHRvbnMgYnV0dG9uLFxuLm5vdGUgLmJ1dHRvbnMgYnV0dG9uXG4gICAge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLnRvLWRvIC5idXR0b25zIGJ1dHRvbjpob3Zlcixcbi5ub3RlIC5idXR0b25zIGJ1dHRvbjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWhvdmVyLXRleHQtY29sb3IpO1xufVxuXG4udG8tZG8gLnByaW9yaXR5X19idG4ucHJpb3JpdHlfX2xvdzpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKSAhaW1wb3J0YW50O1xufVxuLnRvLWRvIC5wcmlvcml0eV9fYnRuLnByaW9yaXR5X19tZWRpdW06aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZGl1bS1jb2xvcikgIWltcG9ydGFudDtcbn1cbi50by1kbyAucHJpb3JpdHlfX2J0bi5wcmlvcml0eV9faGlnaDpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuLyogQ0hFQ0tCT1ggKi9cbmlucHV0W3R5cGU9J2NoZWNrYm94J117XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjowO1xuICAgIGZvbnQ6aW5oZXJpdDtcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItaG92ZXItY29sb3IpO1xuICAgIHdpZHRoOiAxLjJyZW07XG4gICAgaGVpZ2h0OjEuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J106aG92ZXJ7XG4gICAgYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1oZWFkZXItaG92ZXItY29sb3IpXG59XG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J106OmJlZm9yZXtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMC42cmVtO1xuICAgIGhlaWdodDogMC42cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zaXRpb246IC4xMnMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcbn1cblxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmV7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2l0ZW0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFNBQVM7O0FBRVQ7O0lBRUksYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0lBQ2QseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLCtDQUErQztJQUMvQyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsK0NBQStDO0lBQy9DLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsU0FBUztJQUNULFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTs7O0lBR0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBLGFBQWE7QUFDYjtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsMkNBQTJDO0lBQzNDLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQ0FBc0M7SUFDdEMsbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRPRE9TKi9cXG5cXG4udG8tZG8sXFxuLm5vdGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMjAwcHg7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYW5pbWF0aW9uOmZhZGVJbiBsaW5lYXIgLjNzO1xcbn1cXG5cXG4udG8tZG9bY2xvc2luZ10sXFxuLm5vdGVbY2xvc2luZ117ICAgIFxcbiAgICBhbmltYXRpb246IGZhZGVPdXQgbGluZWFyIC4zczsgICAgXFxufVxcblxcbi50by1kbzpob3ZlcixcXG4ubm90ZTpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWNvbG9yKSA1cHggNXB4IDEwcHg7XFxufVxcblxcbi50by1kbyAuY2hlY2tib3h7XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnRvLWRvIC50aXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xcbiAgICBmbGV4LWdyb3c6IDIwO1xcbn1cXG4ubm90ZSAudGl0bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7XFxuICAgIGZsZXgtZ3JvdzogNTtcXG59XFxuXFxuLnRvLWRvIC5jaGVja2JveCBpbnB1dDpob3ZlcixcXG4udG8tZG8gLnRpdGxlOmhvdmVyLFxcbi5ub3RlIC50aXRsZTpob3ZlcntcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi50by1kbyAuYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuLm5vdGUgLmJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi50by1kbyAuYnV0dG9ucyBidXR0b24sXFxuLm5vdGUgLmJ1dHRvbnMgYnV0dG9uXFxuICAgIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udG8tZG8gLmJ1dHRvbnMgYnV0dG9uOmhvdmVyLFxcbi5ub3RlIC5idXR0b25zIGJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0taG92ZXItdGV4dC1jb2xvcik7XFxufVxcblxcbi50by1kbyAucHJpb3JpdHlfX2J0bi5wcmlvcml0eV9fbG93OmhvdmVye1xcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKSAhaW1wb3J0YW50O1xcbn1cXG4udG8tZG8gLnByaW9yaXR5X19idG4ucHJpb3JpdHlfX21lZGl1bTpob3ZlcntcXG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZGl1bS1jb2xvcikgIWltcG9ydGFudDtcXG59XFxuLnRvLWRvIC5wcmlvcml0eV9fYnRuLnByaW9yaXR5X19oaWdoOmhvdmVye1xcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcikgIWltcG9ydGFudDtcXG59XFxuXFxuLyogQ0hFQ0tCT1ggKi9cXG5pbnB1dFt0eXBlPSdjaGVja2JveCdde1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW46MDtcXG4gICAgZm9udDppbmhlcml0O1xcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGVyLWhvdmVyLWNvbG9yKTtcXG4gICAgd2lkdGg6IDEuMnJlbTtcXG4gICAgaGVpZ2h0OjEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106aG92ZXJ7XFxuICAgIGJvcmRlcjoycHggc29saWQgdmFyKC0taGVhZGVyLWhvdmVyLWNvbG9yKVxcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMC42cmVtO1xcbiAgICBoZWlnaHQ6IDAuNnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAuMTJzIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZXtcXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tZW51e1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLTIpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXRhYi1ib3JkZXItY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgLyogYW5pbWF0aW9uOiBzbGlkZUluTGVmdCBsaW5lYXIgLjNzOyAqL1xufVxuXG4ubWVudVtjbG9zaW5nXXtcbiAgICBhbmltYXRpb246IHNsaWRlT3V0TGVmdCBsaW5lYXIgLjNzO1xufVxuXG4ubWVudV9fdG9wID4gZGl2e1xuICAgIHdpZHRoOiAxNHJlbTtcbn1cblxuLnNlYXJjaF9fYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAvKiBwYWRkaW5nOiAwIDAuMjVyZW07ICovXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnNlYXJjaF9fYmFyID4gaW5wdXR7XG4gICAgd2lkdGg6IDEwcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XG59XG5cbi5zZWFyY2hfX2JhciA+IGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6bm9uZTtcbn1cblxuLnNlYXJjaF9fYmFyID4gZGl2e1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zZWFyY2hfX2JhciA+IGRpdjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWhvdmVyLXRleHQtY29sb3IpXG59XG5cbi5tZW51X19pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbn1cblxuLm1lbnVfX2l0ZW06aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6dmFyKC0taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5tZW51X19pdGVtIHNwYW57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3R7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOjA7XG59XG5cbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3Q6aG92ZXJ7XG4gICAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBjb2xvcjppbmhlcml0O1xufVxuXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0ID4gZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCA+IGRpdjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OjA7XG59XG5cbi5hcnJvdyBpe1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWRhcmspICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgdWx7XG4gICAgbWFyZ2luOiAxcmVtIDAgMCAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgdWwgbGl7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xuICAgIHBhZGRpbmc6LjI1cmVtIDAuNXJlbTtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC8qIGJhY2tncm91bmQ6IHZhcigtLW5hdi1ib3JkZXItY29sb3IpOyAqL1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWRhcmspO1xufVxuXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0IHVsIGxpIHNwYW57XG4gICAgbWF4LXdpZHRoOiA1cmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgdWwgbGkgc3Bhbjpob3ZlcntcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cblxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCB1bCBsaSAuYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuM3JlbTtcbn1cblxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCB1bCBsaSAuYnV0dG9ucyBidXR0b257XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1kYXJrKTtcbiAgICBmb250LXNpemU6MS4ycmVtO1xufVxuXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0IHVsIGxpIC5idXR0b25zIGJ1dHRvbjpob3ZlcntcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICBjb2xvcjp2YXIoLS1ob3Zlci10ZXh0LWNvbG9yKVxufVxuXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0IHVsIGxpOmhvdmVye1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1jb2xvcikgNXB4IDVweCAxMHB4O1xuXG59XG5cbi5wcm9qZWN0X19hZGQtYnRue1xuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9qZWN0X19hZGQtYnRuOmhvdmVye1xuICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByb2plY3RfX2FkZC1idG4gYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAwIC41cmVtO1xufVxuXG4ucHJvamVjdF9fYWRkLWJ0biBidXR0b246aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1jb2xvcikgNXB4IDVweCAxMHB4O1xuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51X19ib3R7XG4gICAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL21lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLHFDQUFxQztJQUNyQywrQ0FBK0M7SUFDL0MsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0FBQ1g7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIseUNBQXlDO0lBQ3pDLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLDRDQUE0Qzs7QUFFaEQ7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw0Q0FBNEM7SUFDNUMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tZW51e1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMik7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXRhYi1ib3JkZXItY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG4gICAgLyogYW5pbWF0aW9uOiBzbGlkZUluTGVmdCBsaW5lYXIgLjNzOyAqL1xcbn1cXG5cXG4ubWVudVtjbG9zaW5nXXtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZU91dExlZnQgbGluZWFyIC4zcztcXG59XFxuXFxuLm1lbnVfX3RvcCA+IGRpdntcXG4gICAgd2lkdGg6IDE0cmVtO1xcbn1cXG5cXG4uc2VhcmNoX19iYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNGRkY7XFxuICAgIC8qIHBhZGRpbmc6IDAgMC4yNXJlbTsgKi9cXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnNlYXJjaF9fYmFyID4gaW5wdXR7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcbn1cXG5cXG4uc2VhcmNoX19iYXIgPiBpbnB1dDpmb2N1c3tcXG4gICAgb3V0bGluZTpub25lO1xcbn1cXG5cXG4uc2VhcmNoX19iYXIgPiBkaXZ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zZWFyY2hfX2JhciA+IGRpdjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0taG92ZXItdGV4dC1jb2xvcilcXG59XFxuXFxuLm1lbnVfX2l0ZW17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcXG59XFxuXFxuLm1lbnVfX2l0ZW06aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLm1lbnVfX2l0ZW0gc3BhbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXJhZGl1czowO1xcbn1cXG5cXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0OmhvdmVye1xcbiAgICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgY29sb3I6aW5oZXJpdDtcXG59XFxuXFxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCA+IGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0ID4gZGl2OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OjA7XFxufVxcblxcbi5hcnJvdyBpe1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0IHVse1xcbiAgICBtYXJnaW46IDFyZW0gMCAwIDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgdWwgbGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xcbiAgICBwYWRkaW5nOi4yNXJlbSAwLjVyZW07XFxuICAgIGJvcmRlcjoxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAvKiBiYWNrZ3JvdW5kOiB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTsgKi9cXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItZGFyayk7XFxufVxcblxcbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgdWwgbGkgc3BhbntcXG4gICAgbWF4LXdpZHRoOiA1cmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0IHVsIGxpIHNwYW46aG92ZXJ7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0IHVsIGxpIC5idXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC4zcmVtO1xcbn1cXG5cXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0IHVsIGxpIC5idXR0b25zIGJ1dHRvbntcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWRhcmspO1xcbiAgICBmb250LXNpemU6MS4ycmVtO1xcbn1cXG5cXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0IHVsIGxpIC5idXR0b25zIGJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIGNvbG9yOnZhcigtLWhvdmVyLXRleHQtY29sb3IpXFxufVxcblxcbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgdWwgbGk6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1jb2xvcikgNXB4IDVweCAxMHB4O1xcblxcbn1cXG5cXG4ucHJvamVjdF9fYWRkLWJ0bntcXG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJvamVjdF9fYWRkLWJ0bjpob3ZlcntcXG4gICAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnByb2plY3RfX2FkZC1idG4gYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwIC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdF9fYWRkLWJ0biBidXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWNvbG9yKSA1cHggNXB4IDEwcHg7XFxuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tZW51X19ib3R7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtICFpbXBvcnRhbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm5hdl9fYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tdGFiLWJvcmRlci1jb2xvcik7XG4gICAgLyogYW5pbWF0aW9uOiBzbGlkZUluTGVmdCBsaW5lYXIgLjNzOyAqL1xufVxuXG4ubmF2X19iYXJbY2xvc2luZ117XG4gICAgYW5pbWF0aW9uOiBzbGlkZU91dExlZnQgbGluZWFyIC4zcztcbn1cblxuLm5hdl9faXRlbXN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmluYm94X19uYXYgaXtcbiAgICBjb2xvcjogdmFyKC0taW5ib3gtY29sb3IpO1xufVxuXG4udG9kYXlfX25hdiBpe1xuICAgIGNvbG9yOnZhcigtLXRvZGF5LWNvbG9yKVxufVxuXG4ucHJvamVjdF9fbmF2IGl7XG4gICAgY29sb3I6dmFyKC0tcHJvamVjdC1jb2xvcilcbn1cblxuLmhpc3RvcnlfX25hdiBpe1xuICAgIGNvbG9yOnZhcigtLWhpc3RvcnktY29sb3IpXG59XG5cbi5hcHBlYXJhbmNlX19tb2RlIGksXG4ubWVudV9fYm90IGl7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LW1vZGUtY29sb3IpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL25hdi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZiwrQ0FBK0M7SUFDL0MsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7O0lBRUksOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uYXZfX2JhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS10YWItYm9yZGVyLWNvbG9yKTtcXG4gICAgLyogYW5pbWF0aW9uOiBzbGlkZUluTGVmdCBsaW5lYXIgLjNzOyAqL1xcbn1cXG5cXG4ubmF2X19iYXJbY2xvc2luZ117XFxuICAgIGFuaW1hdGlvbjogc2xpZGVPdXRMZWZ0IGxpbmVhciAuM3M7XFxufVxcblxcbi5uYXZfX2l0ZW1ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5pbmJveF9fbmF2IGl7XFxuICAgIGNvbG9yOiB2YXIoLS1pbmJveC1jb2xvcik7XFxufVxcblxcbi50b2RheV9fbmF2IGl7XFxuICAgIGNvbG9yOnZhcigtLXRvZGF5LWNvbG9yKVxcbn1cXG5cXG4ucHJvamVjdF9fbmF2IGl7XFxuICAgIGNvbG9yOnZhcigtLXByb2plY3QtY29sb3IpXFxufVxcblxcbi5oaXN0b3J5X19uYXYgaXtcXG4gICAgY29sb3I6dmFyKC0taGlzdG9yeS1jb2xvcilcXG59XFxuXFxuLmFwcGVhcmFuY2VfX21vZGUgaSxcXG4ubWVudV9fYm90IGl7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1tb2RlLWNvbG9yKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW5jb25zb2xhdGEmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLWJhY2tncm91bmQtY29sb3ItMTogI0YzRUVFQTtcbiAgICAtLWJhY2tncm91bmQtY29sb3ItMjogI0VBRTRFMDtcbiAgICAtLWhlYWRlci1jb2xvcjogIzc3NkI1RDtcbiAgICAtLWhlYWRlci1ob3Zlci1jb2xvcjogIzVhNTE0NztcbiAgICAtLXRhYi1ib3JkZXItY29sb3I6ICNCMEE2OTU7XG4gICAgLS1uYXYtYm9yZGVyLWNvbG9yOiAjNTE0OTNGO1xuICAgIC0tdGV4dC1jb2xvci1saWdodDogI0YzRUVFQTtcbiAgICAtLXRleHQtY29sb3ItZGFyazogIzMzMzMzMztcbiAgICAtLXRleHQtY29sb3ItbmF2OiAjNTE0OTNGO1xuICAgIC0taW5ib3gtY29sb3I6ICM3OEFDQzI7XG4gICAgLS10b2RheS1jb2xvcjogIzU2ODU0QjtcbiAgICAtLXByb2plY3QtY29sb3I6ICM1MDJBQkM7XG4gICAgLS1oaXN0b3J5LWNvbG9yOiAjRTE1MTZCO1xuICAgIC0taG92ZXItdGV4dC1jb2xvcjogI0MyOTc3ODtcbiAgICAtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgLS1wcmlvcml0eS1sb3ctY29sb3I6ICM1Njg1NEI7XG4gICAgLS1wcmlvcml0eS1tZWRpdW0tY29sb3I6ICNkYWJlMzY7XG4gICAgLS1wcmlvcml0eS1oaWdoLWNvbG9yOiAjRTE1MTUxO1xuICAgIC0tZWRpdC1idG4tY29sb3I6ICM3OEFDQzI7XG4gICAgLS1kZWxldGUtYnRuLWNvbG9yOiAjRTE1MTUxO1xuICAgIC0tbGlnaHQtbW9kZS1jb2xvcjogI0I4OUIwMTtcbiAgICAtLXNoYWRvdy1jb2xvcjogI2M2YzZjNjtcbn1cblxuYm9keXtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6MjBweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1kYXJrKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLTEpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4vKiBDb21tb24gKi9cbi5kZntcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG5cbi5kLW9mZntcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uX19iaWd7XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmljb25fX2JpZzpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWhvdmVyLXRleHQtY29sb3IpO1xufVxuXG4uaWNvbl9fc21hbGx7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByaW9yaXR5X19idG4ucHJpb3JpdHlfX2xvd3tcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcbn1cblxuLnByaW9yaXR5X19idG4ucHJpb3JpdHlfX21lZGl1bXtcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbWVkaXVtLWNvbG9yKTtcbn1cblxuLnByaW9yaXR5X19idG4ucHJpb3JpdHlfX2hpZ2h7XG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xufVxuXG4uYnRue1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xufVxuXG4uYnRuOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAuODtcbn1cblxuLnJvdGF0ZS0xODB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWluLWhlaWdodDogOTV2aDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dCB7XG4gICAgZnJvbSB7IG9wYWNpdHk6IDE7IH1cbiAgICB0byB7IG9wYWNpdHk6IDA7IH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUluTGVmdCB7XG4gICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cbiAgICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0TGVmdHtcbiAgICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gICAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpOyB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB9XG4gICAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZU91dFJpZ2h0IHtcbiAgICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gICAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cbn1cblxuLmZhZGVJbntcbiAgICBhbmltYXRpb246ZmFkZUluIGxpbmVhciAuM3M7XG59XG5cbi5mYWRlT3V0e1xuICAgIGFuaW1hdGlvbjogZmFkZU91dCBsaW5lYXIgLjNzO1xufVxuXG4uc2xpZGVJbkxlZnR7XG4gICAgYW5pbWF0aW9uOiBzbGlkZUluTGVmdCBsaW5lYXIgLjNzO1xufVxuXG4uc2xpZGVPdXRMZWZ0e1xuICAgIGFuaW1hdGlvbjogc2xpZGVPdXRMZWZ0IGxpbmVhciAuM3M7XG59XG5cbi5zbGlkZUluUmlnaHR7XG4gICAgYW5pbWF0aW9uOiBzbGlkZUluUmlnaHQgbGluZWFyIC4zcztcbn1cblxuLnNsaWRlT3V0UmlnaHR7XG4gICAgYW5pbWF0aW9uOiBzbGlkZU91dFJpZ2h0IGxpbmVhciAuM3M7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixpQ0FBaUM7SUFDakMsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLHFDQUFxQztJQUNyQyxnQkFBZ0I7QUFDcEI7QUFDQSxXQUFXO0FBQ1g7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLE9BQU8sVUFBVSxFQUFFO0lBQ25CLEtBQUssVUFBVSxFQUFFO0FBQ3JCOztBQUVBO0lBQ0ksT0FBTyxVQUFVLEVBQUU7SUFDbkIsS0FBSyxVQUFVLEVBQUU7QUFDckI7O0FBRUE7SUFDSSxPQUFPLDRCQUE0QixFQUFFO0lBQ3JDLEtBQUssd0JBQXdCLEVBQUU7QUFDbkM7O0FBRUE7SUFDSSxPQUFPLHdCQUF3QixFQUFFO0lBQ2pDLEtBQUssNEJBQTRCLEVBQUU7QUFDdkM7O0FBRUE7SUFDSSxPQUFPLDJCQUEyQixFQUFFO0lBQ3BDLEtBQUssd0JBQXdCLEVBQUU7QUFDbkM7O0FBRUE7SUFDSSxPQUFPLHdCQUF3QixFQUFFO0lBQ2pDLEtBQUssMkJBQTJCLEVBQUU7QUFDdEM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW5jb25zb2xhdGEmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3R7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvci0xOiAjRjNFRUVBO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3ItMjogI0VBRTRFMDtcXG4gICAgLS1oZWFkZXItY29sb3I6ICM3NzZCNUQ7XFxuICAgIC0taGVhZGVyLWhvdmVyLWNvbG9yOiAjNWE1MTQ3O1xcbiAgICAtLXRhYi1ib3JkZXItY29sb3I6ICNCMEE2OTU7XFxuICAgIC0tbmF2LWJvcmRlci1jb2xvcjogIzUxNDkzRjtcXG4gICAgLS10ZXh0LWNvbG9yLWxpZ2h0OiAjRjNFRUVBO1xcbiAgICAtLXRleHQtY29sb3ItZGFyazogIzMzMzMzMztcXG4gICAgLS10ZXh0LWNvbG9yLW5hdjogIzUxNDkzRjtcXG4gICAgLS1pbmJveC1jb2xvcjogIzc4QUNDMjtcXG4gICAgLS10b2RheS1jb2xvcjogIzU2ODU0QjtcXG4gICAgLS1wcm9qZWN0LWNvbG9yOiAjNTAyQUJDO1xcbiAgICAtLWhpc3RvcnktY29sb3I6ICNFMTUxNkI7XFxuICAgIC0taG92ZXItdGV4dC1jb2xvcjogI0MyOTc3ODtcXG4gICAgLS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICAtLXByaW9yaXR5LWxvdy1jb2xvcjogIzU2ODU0QjtcXG4gICAgLS1wcmlvcml0eS1tZWRpdW0tY29sb3I6ICNkYWJlMzY7XFxuICAgIC0tcHJpb3JpdHktaGlnaC1jb2xvcjogI0UxNTE1MTtcXG4gICAgLS1lZGl0LWJ0bi1jb2xvcjogIzc4QUNDMjtcXG4gICAgLS1kZWxldGUtYnRuLWNvbG9yOiAjRTE1MTUxO1xcbiAgICAtLWxpZ2h0LW1vZGUtY29sb3I6ICNCODlCMDE7XFxuICAgIC0tc2hhZG93LWNvbG9yOiAjYzZjNmM2O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZToyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1kYXJrKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0xKTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLyogQ29tbW9uICovXFxuLmRme1xcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLW9mZntcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaWNvbl9fYmlne1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uaWNvbl9fYmlnOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0taG92ZXItdGV4dC1jb2xvcik7XFxufVxcblxcbi5pY29uX19zbWFsbHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHlfX2J0bi5wcmlvcml0eV9fbG93e1xcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcXG59XFxuXFxuLnByaW9yaXR5X19idG4ucHJpb3JpdHlfX21lZGl1bXtcXG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZGl1bS1jb2xvcik7XFxufVxcblxcbi5wcmlvcml0eV9fYnRuLnByaW9yaXR5X19oaWdoe1xcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcik7XFxufVxcblxcbi5idG57XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcXG59XFxuXFxuLmJ0bjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAuODtcXG59XFxuXFxuLnJvdGF0ZS0xODB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1pbi1oZWlnaHQ6IDk1dmg7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgdG8geyBvcGFjaXR5OiAxOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxuICAgIGZyb20geyBvcGFjaXR5OiAxOyB9XFxuICAgIHRvIHsgb3BhY2l0eTogMDsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW5MZWZ0IHtcXG4gICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cXG4gICAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZU91dExlZnR7XFxuICAgIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXG4gICAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcXG4gICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgfVxcbiAgICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0UmlnaHQge1xcbiAgICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxuICAgIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB9XFxufVxcblxcbi5mYWRlSW57XFxuICAgIGFuaW1hdGlvbjpmYWRlSW4gbGluZWFyIC4zcztcXG59XFxuXFxuLmZhZGVPdXR7XFxuICAgIGFuaW1hdGlvbjogZmFkZU91dCBsaW5lYXIgLjNzO1xcbn1cXG5cXG4uc2xpZGVJbkxlZnR7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVJbkxlZnQgbGluZWFyIC4zcztcXG59XFxuXFxuLnNsaWRlT3V0TGVmdHtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZU91dExlZnQgbGluZWFyIC4zcztcXG59XFxuXFxuLnNsaWRlSW5SaWdodHtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUluUmlnaHQgbGluZWFyIC4zcztcXG59XFxuXFxuLnNsaWRlT3V0UmlnaHR7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVPdXRSaWdodCBsaW5lYXIgLjNzO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250ZW50LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGV0YWlsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGV0YWlsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaWFsb2cuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaWFsb2cuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaXRlbS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2l0ZW0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdFwiO1xuXG5mdW5jdGlvbiBoaXN0b3J5KCl7XG4gICAgY29uc3QgaGlzdG9yeSA9IE9iamVjdC5jcmVhdGUocHJvamVjdCgpKVxuICAgIGhpc3RvcnkuY2hhbmdlVmFsdWUoJ0hpc3RvcnknLCAnWW91IGNhbiBzZWUgYWxsIHlvdXIgZmluaXNoZWQgdG9kb3MgaGVyZScpXG5cbiAgICByZXR1cm4gaGlzdG9yeVxufVxuXG5jb25zdCBoaXN0b3J5T2JqID0gaGlzdG9yeSgpXG5leHBvcnQgZGVmYXVsdCBoaXN0b3J5T2JqIiwiaW1wb3J0IHByb2plY3QgZnJvbSBcIi4uL3Byb2plY3RcIjtcbmltcG9ydCB0b2RvIGZyb20gXCIuLi90b2RvXCJcbmltcG9ydCBub3RlIGZyb20gXCIuLi9ub3RlXCJcblxuY29uc3QgdG9kbzFTdGFydERhdGUgPSBuZXcgRGF0ZSgpXG5jb25zdCB0b2RvMUR1ZURhdGUgPSBuZXcgRGF0ZSgpXG50b2RvMUR1ZURhdGUuc2V0RnVsbFllYXIodG9kbzFEdWVEYXRlLmdldEZ1bGxZZWFyKCkgKyAxKVxuXG5jb25zdCBpbmJveCA9ICgpID0+IHtcbiAgICBjb25zdCBpbmJveE9iaiA9IE9iamVjdC5jcmVhdGUocHJvamVjdCgpKVxuICAgIGluYm94T2JqLmNoYW5nZVZhbHVlKCdJbmJveCcsICdXaGVyZSB5b3Ugc3RvcmUgYWxsIHlvdXIgbmV3IHN0dWZmcycpXG5cbiAgICBjb25zdCB0b2RvMSA9IHRvZG8oKVxuICAgIFxuICAgIHRvZG8xLmNoYW5nZVZhbHVlKCdDcmVhdGUgeW91ciBmaXJzdCBwcm9qZWN0IScsICdDbGljayB0aGUgYWRkIGJ1dHRvbiBvbiBvdXIgbWVudScsIHRvZG8xU3RhcnREYXRlLCB0b2RvMUR1ZURhdGUsICdoaWdoJylcblxuICAgIGNvbnN0IG5vdGUxID0gbm90ZSgpXG4gICAgbm90ZTEuY2hhbmdlVmFsdWUoJ1RvZGF5IGlzIGEgd29uZGVyZnVsIGRheSEnLCAnRG8gc29tZXRoaW5nIGludGVyZXN0aW5nIHRvZGF5IScpXG5cbiAgICBpbmJveE9iai5hZGRJdGVtKHRvZG8xKVxuICAgIGluYm94T2JqLmFkZEl0ZW0obm90ZTEpXG5cbiAgICByZXR1cm4gaW5ib3hPYmpcbn1cblxuY29uc3QgaW5ib3hPYmogPSBpbmJveCgpXG5cbmV4cG9ydCBkZWZhdWx0IGluYm94T2JqIiwiaW1wb3J0IHByb2plY3QgZnJvbSBcIi4uL3Byb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VhcmNoUmVzdWx0KCl7XG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0T2JqID0gT2JqZWN0LmNyZWF0ZShwcm9qZWN0KCkpXG4gICAgc2VhcmNoUmVzdWx0T2JqLmNoYW5nZVZhbHVlKCdTZWFyY2ggUmVzdWx0JywgJ1doZXJlIHlvdSBjYW4gc2VlIHlvdXIgc2VhcmNoIHJlc3VsdHMhJylcbiAgICByZXR1cm4gc2VhcmNoUmVzdWx0T2JqXG59XG5cbiIsImltcG9ydCBpdGVtQ29udGFpbmVyT2JqIGZyb20gJy4uL2l0ZW1Db250YWluZXInXG5pbXBvcnQgcHJvamVjdCBmcm9tICcuLi9wcm9qZWN0J1xuaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2RhdGUtZm5zJ1xuXG5cbmNvbnN0IHRvZGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZGF5T2JqID0gT2JqZWN0LmNyZWF0ZShwcm9qZWN0KCkpXG5cbiAgICB0b2RheU9iai5jaGFuZ2VWYWx1ZSgnVG9kYXknLCBgWW91IGNhbiBzdG9yZSB5b3VyIHRvZGF5J3MgdG8tZG9zIGhlcmVgKVxuXG4gICAgcmV0dXJuIHRvZGF5T2JqXG59XG5cbmNvbnN0IHRvZGF5T2JqID0gdG9kYXkoKVxuXG5leHBvcnQgZGVmYXVsdCB0b2RheU9iaiIsImltcG9ydCBjcmVhdGVUb2RvIGZyb20gXCIuL2NyZWF0ZVRvZG9cIlxuaW1wb3J0IGNyZWF0ZU5vdGUgZnJvbSBcIi4vY3JlYXRlTm90ZVwiXG5pbXBvcnQgYXBwZW5kQ2hpbGRyZW4gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9hcHBlbmRDaGlsZHJlblwiXG5pbXBvcnQgY3JlYXRlRGl2V2l0aENsYXNzIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vY3JlYXRlRGl2V2l0aENsYXNzXCJcbmltcG9ydCBjcmVhdGVGaW5pc2hlZFRvZG8gZnJvbSBcIi4vY3JlYXRlRmluaXNoZWRUb2RvXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29udGVudChwcmopIHtcbiAgICBjb25zdCB0aXRsZSA9IHByai5nZXRWYWx1ZSgpLnRpdGxlXG5cbiAgICBjb25zdCBjb250ZW50RGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdjb250ZW50JylcblxuICAgIGNvbnN0IHRpdGxlRGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdjb250ZW50X190aXRsZScpXG4gICAgY29uc3QgdGl0bGVIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICB0aXRsZUgxLmlubmVySFRNTCA9IHRpdGxlXG5cbiAgICBjb25zdCB0aXRsZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICB0aXRsZUljb24uY2xhc3NMaXN0LmFkZCgncmktaW5mb3JtYXRpb24tMi1maWxsJylcblxuICAgIGNvbnN0IGl0ZW1EaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ2NvbnRlbnRfX2l0ZW1zJylcblxuICAgIGNvbnN0IGl0ZW1zID0gcHJqLmdldEFsbEl0ZW0oKVxuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1UeXBlID0gaXRlbS5nZXRUeXBlKClcbiAgICAgICAgaWYgKHByai5nZXRWYWx1ZSgpLnRpdGxlID09PSAnSGlzdG9yeScpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZGVkIGZpbmlzaGVkIGl0ZW0nKVxuICAgICAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChjcmVhdGVGaW5pc2hlZFRvZG8oaXRlbSkpXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09ICdub3RlJykge1xuICAgICAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChjcmVhdGVOb3RlKGl0ZW0pKVxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSAndG9kbycpIHtcbiAgICAgICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kbyhpdGVtKSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBhcHBlbmRDaGlsZHJlbih0aXRsZURpdiwgW3RpdGxlSDEsIHRpdGxlSWNvbl0pXG4gICAgYXBwZW5kQ2hpbGRyZW4oY29udGVudERpdiwgW3RpdGxlRGl2LCBpdGVtRGl2XSlcblxuICAgIHJldHVybiBjb250ZW50RGl2XG59XG5cblxuIiwiaW1wb3J0IGFwcGVuZENoaWxkcmVuIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vYXBwZW5kQ2hpbGRyZW5cIlxuaW1wb3J0IGNyZWF0ZURpdldpdGhDbGFzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2NyZWF0ZURpdldpdGhDbGFzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURldGFpbChvYmopIHtcbiAgICBjb25zdCBkZXRhaWwgPSBvYmouZ2V0VmFsdWUoKVxuICAgIGNvbnN0IHRpdGxlID0gZGV0YWlsLnRpdGxlXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkZXRhaWwuZGVzY3JpcHRpb25cblxuICAgIGNvbnN0IGRldGFpbERpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygnZGV0YWlsJywgJ2Qtb2ZmJylcblxuICAgIGNvbnN0IHRpdGxlSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgdGl0bGVIMS5pbm5lckhUTUwgPSB0aXRsZVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGVzY3JpcHRpb25QLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uXG5cbiAgICBjb25zdCBkZXRhaWxMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3IgKGxldCBpdGVtIGluIGRldGFpbCkge1xuICAgICAgICBpZiAoaXRlbSAhPT0gJ3RpdGxlJyAmJiBpdGVtICE9PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBkZXRhaWxJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICBzd2l0Y2goaXRlbSl7XG4gICAgICAgICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbEl0ZW0uaW5uZXJIVE1MID0gYDxzdHJvbmc+RGF0ZSBjcmVhdGVkOiA8L3N0cm9uZz4gJHtkZXRhaWxbaXRlbV19YFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N0YXJ0RGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbEl0ZW0uaW5uZXJIVE1MID0gYDxzdHJvbmc+U3RhcnQgZGF0ZTogPC9zdHJvbmc+ICR7ZGV0YWlsW2l0ZW1dfWBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdkdWVEYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsSXRlbS5pbm5lckhUTUwgPSBgPHN0cm9uZz5EdWUgZGF0ZTogPC9zdHJvbmc+ICR7ZGV0YWlsW2l0ZW1dfWBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdwcmlvcml0eSc6XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbEl0ZW0uaW5uZXJIVE1MID0gYDxzdHJvbmc+UHJpb3JpdHk6IDwvc3Ryb25nPiAke2RldGFpbFtpdGVtXX1gXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnc3RhdHVzJzpcbiAgICAgICAgICAgICAgICAgICAgaWYoZGV0YWlsW2l0ZW1dID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbEl0ZW0uaW5uZXJIVE1MID0gYDxzdHJvbmc+U3RhdHVzOiA8L3N0cm9uZz4gRmluaXNoZWRgXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsSXRlbS5pbm5lckhUTUwgPSBgPHN0cm9uZz5TdGF0dXM6IDwvc3Ryb25nPiBPbi1nb2luZ2BcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGV0YWlsTGlzdC5hcHBlbmRDaGlsZChkZXRhaWxJdGVtKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlX19idG4nKVxuICAgIGNsb3NlQnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cInJpLWNsb3NlLWxpbmVcIj48L2k+YFxuXG4gICAgLy8gY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAvLyBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywnZGVsZXRlX19idG4nKVxuICAgIC8vIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSBgRGVsZXRlYFxuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZGV0YWlsRGl2LCBbY2xvc2VCdG4sIHRpdGxlSDEsIGRlc2NyaXB0aW9uUCwgZGV0YWlsTGlzdF0pXG5cbiAgICByZXR1cm4gZGV0YWlsRGl2XG59XG5cbiIsImltcG9ydCBhcHBlbmRDaGlsZHJlbiBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2FwcGVuZENoaWxkcmVuXCJcbmltcG9ydCBjcmVhdGVEaXZXaXRoQ2xhc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9jcmVhdGVEaXZXaXRoQ2xhc3NcIlxuaW1wb3J0IHByb2plY3RDb250YWluZXJPYmogZnJvbSAnLi4vcHJvamVjdENvbnRhaW5lcidcbmltcG9ydCB7Z2V0Q3VycmVudFN0YXRlfSBmcm9tICcuLi8uLi91dGlscy9zdGF0ZSdcblxuLy8gUHJvamVjdCBhZGQgZGlhbG9nXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdERpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKVxuICAgIGRpYWxvZy5pZCA9ICdwcm9qZWN0X19hZGQtZGlhbG9nJ1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uaWQgPSAncHJvamVjdF9fYWRkLWZvcm0nXG4gICAgZm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5Qcm9qZWN0IFRpdGxlOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJwcm9qZWN0X190aXRsZS1pbnB1dFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBpZD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgY2xhc3M9XCJwcm9qZWN0X19kZXMtaW5wdXRcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG5cbiAgICBhcHBlbmRDaGlsZHJlbihmb3JtLCBbY3JlYXRlQWRkQnV0dG9uRGl2KCldKVxuICAgIGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgcmV0dXJuIGRpYWxvZ1xufVxuXG4vLyBJdGVtIGFkZCBkaWFsb2dcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJdGVtRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpXG4gICAgZGlhbG9nLmlkID0gJ2l0ZW1fX2FkZC1kaWFsb2cnXG5cbiAgICBjb25zdCBzZWxlY3RJdGVtRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIHNlbGVjdEl0ZW1Gb3JtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdF9faXRlbS1mb3JtJylcbiAgICBzZWxlY3RJdGVtRm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtXCI+Q2hvb3NlIHdoaWNoIGl0ZW0gdG8gY3JlYXRlOjwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgbmFtZT1cIml0ZW1cIiBpZD1cIml0ZW1cIiBjbGFzcz1cInNlbGVjdF9faXRlbS1pbnB1dFwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRvLWRvXCI+VG9kbzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vdGVcIj5Ob3RlPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PmBcblxuICAgIGNvbnN0IHRvZG9BZGRGb3JtID0gY3JlYXRlVG9kb0FkZEZvcm0oKVxuICAgIGNvbnN0IG5vdGVBZGRGb3JtID0gY3JlYXRlTm90ZUFkZEZvcm0oKVxuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZGlhbG9nLCBbc2VsZWN0SXRlbUZvcm0sIHRvZG9BZGRGb3JtLCBub3RlQWRkRm9ybSwgY3JlYXRlUHJvamVjdFNlbGVjdCgpLCBjcmVhdGVBZGRCdXR0b25EaXYoKV0pXG5cbiAgICByZXR1cm4gZGlhbG9nXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9BZGRGb3JtKCkge1xuICAgIGNvbnN0IHRvZG9BZGRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgdG9kb0FkZEZvcm0uaWQgPSAndG9kb19fYWRkLWZvcm0nXG4gICAgdG9kb0FkZEZvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiBjbGFzcz1cInRvZG9fX3RpdGxlLWlucHV0XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSByZXF1aXJlZCBpZD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgY2xhc3M9XCJ0b2RvX19kZXMtaW5wdXRcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGFydERhdGVcIj5TdGFydCBkYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cImRhdGVcIiBuYW1lPVwic3RhcnREYXRlXCIgaWQ9XCJzdGFydERhdGVcIiBjbGFzcz1cInRvZG9fX3N0YXJ0LWlucHV0XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZURhdGVcIj5EdWUgZGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZURhdGVcIiBpZD1cImR1ZURhdGVcIiBjbGFzcz1cInRvZG9fX2R1ZS1pbnB1dFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eVwiIGlkPVwicHJpb3JpdHlcIiBjbGFzcz1cInRvZG9fX3ByaW9yaXR5LWlucHV0XCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5gXG5cbiAgICBjb25zdCBzdGFydERhdGVJbnB1dCA9IHRvZG9BZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoJyNzdGFydERhdGUnKVxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IHRvZG9BZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJylcblxuICAgIHN0YXJ0RGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGR1ZURhdGVJbnB1dC5taW4gPSBzdGFydERhdGVJbnB1dC52YWx1ZVxuICAgIH0pXG5cbiAgICBkdWVEYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN0YXJ0RGF0ZUlucHV0Lm1heCA9IGR1ZURhdGVJbnB1dC52YWx1ZVxuICAgIH0pXG5cbiAgICByZXR1cm4gdG9kb0FkZEZvcm1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTm90ZUFkZEZvcm0oKSB7XG4gICAgY29uc3Qgbm90ZUFkZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBub3RlQWRkRm9ybS5pZCA9ICdub3RlX19hZGQtZm9ybSdcbiAgICBub3RlQWRkRm9ybS5jbGFzc0xpc3QuYWRkKCdkLW9mZicpXG4gICAgbm90ZUFkZEZvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiBjbGFzcz1cIm5vdGVfX3RpdGxlLWlucHV0XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgY2xhc3M9XCJub3RlX19kZXMtaW5wdXRcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5gXG5cbiAgICByZXR1cm4gbm90ZUFkZEZvcm1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFNlbGVjdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgcHJvamVjdFNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QnKVxuICAgIHByb2plY3RTZWxlY3RMYWJlbC5pbm5lckhUTUwgPSBgUHV0IGl0IGluOiBgXG4gICAgY29uc3QgcHJvamVjdFNlbGVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHByb2plY3RTZWxlY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ2l0ZW1fX3Byb2plY3QtaW5wdXQnKVxuICAgIHByb2plY3RTZWxlY3RMaXN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0JylcbiAgICBwcm9qZWN0U2VsZWN0TGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QnKVxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFN0YXRlKClcblxuICAgIGFwcGVuZENoaWxkcmVuKHByb2plY3RTZWxlY3REaXYsIFtwcm9qZWN0U2VsZWN0TGFiZWwsIHByb2plY3RTZWxlY3RMaXN0XSlcblxuICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdENvbnRhaW5lck9iai5nZXRBbGxJdGVtKClcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByaiA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBgJHtwcmouZ2V0VmFsdWUoKS50aXRsZX1gXG4gICAgICAgIHByb2plY3RTZWxlY3RMaXN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgcHJvamVjdFNlbGVjdExpc3QudmFsdWUgPSBjdXJyZW50UHJvamVjdC5nZXRWYWx1ZSgpLnRpdGxlXG4gICAgcmV0dXJuIHByb2plY3RTZWxlY3REaXZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRkQnV0dG9uRGl2KCkge1xuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygnYnV0dG9ucycpXG4gICAgYnV0dG9uRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhZGRfX2J0blwiIGZvcm1tZXRob2Q9XCJkaWFsb2dcIj5DcmVhdGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBjbG9zZV9fYnRuXCIgZm9ybW1ldGhvZD1cImRpYWxvZ1wiPkNhbmNlbDwvYnV0dG9uPmBcblxuICAgIHJldHVybiBidXR0b25EaXZcbn1cblxuLy8gQ29uZmlybSBkaWFsb2dcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb25maXJtRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpXG4gICAgZGlhbG9nLmlkID0gJ2NvbmZpcm1fX2RpYWxvZydcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBtZXNzYWdlLmlubmVySFRNTCA9IGBBcmUgeW91IHN1cmU/YFxuXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdidXR0b25zJylcbiAgICBidXR0b25EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZF9fYnRuXCIgZm9ybW1ldGhvZD1cImRpYWxvZ1wiPlllczwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGNsb3NlX19idG5cIiBmb3JtbWV0aG9kPVwiZGlhbG9nXCI+Tm88L2J1dHRvbj5gXG5cbiAgICBhcHBlbmRDaGlsZHJlbihkaWFsb2csIFttZXNzYWdlLCBidXR0b25EaXZdKVxuXG4gICAgcmV0dXJuIGRpYWxvZ1xufVxuXG4vLyBJdGVtIGVkaXQgZGlhbG9nXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWRpdERpYWxvZygpe1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpXG4gICAgZGlhbG9nLmlkID0gJ2l0ZW1fX2VkaXQtZGlhbG9nJ1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZGlhbG9nLCBbY3JlYXRlVG9kb0VkaXRGb3JtKCksIGNyZWF0ZU5vdGVFZGl0Rm9ybSgpLCBjcmVhdGVQcm9qZWN0RWRpdEZvcm0oKSwgY3JlYXRlRWRpdEJ1dHRvbkRpdigpXSlcblxuICAgIHJldHVybiBkaWFsb2dcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0VkaXRGb3JtKCl7XG4gICAgY29uc3QgdG9kb0VkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgdG9kb0VkaXRGb3JtLmlkID0gJ3RvZG9fX2VkaXQtZm9ybSdcbiAgICB0b2RvRWRpdEZvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiBjbGFzcz1cInRvZG9fX3RpdGxlLWlucHV0XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSByZXF1aXJlZCBpZD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgY2xhc3M9XCJ0b2RvX19kZXMtaW5wdXRcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGFydERhdGVcIj5TdGFydCBkYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cImRhdGVcIiBuYW1lPVwic3RhcnREYXRlXCIgaWQ9XCJzdGFydERhdGVcIiBjbGFzcz1cInRvZG9fX3N0YXJ0LWlucHV0XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZURhdGVcIj5EdWUgZGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZURhdGVcIiBpZD1cImR1ZURhdGVcIiBjbGFzcz1cInRvZG9fX2R1ZS1pbnB1dFwiPlxuICAgICAgICA8L2Rpdj5gXG5cbiAgICByZXR1cm4gdG9kb0VkaXRGb3JtXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGVFZGl0Rm9ybSgpe1xuICAgIGNvbnN0IG5vdGVFZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIG5vdGVFZGl0Rm9ybS5pZCA9ICdub3RlX19lZGl0LWZvcm0nXG4gICAgbm90ZUVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2Qtb2ZmJylcbiAgICBub3RlRWRpdEZvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiBjbGFzcz1cIm5vdGVfX3RpdGxlLWlucHV0XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgY2xhc3M9XCJub3RlX19kZXMtaW5wdXRcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5gXG5cbiAgICByZXR1cm4gbm90ZUVkaXRGb3JtXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFZGl0Rm9ybSgpe1xuICAgIGNvbnN0IHByb2plY3RFZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIHByb2plY3RFZGl0Rm9ybS5pZCA9ICdwcm9qZWN0X19lZGl0LWZvcm0nXG4gICAgcHJvamVjdEVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2Qtb2ZmJylcbiAgICBwcm9qZWN0RWRpdEZvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiBjbGFzcz1cInByb2plY3RfX3RpdGxlLWlucHV0XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgY2xhc3M9XCJwcm9qZWN0X19kZXMtaW5wdXRcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5gXG5cbiAgICByZXR1cm4gcHJvamVjdEVkaXRGb3JtXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVkaXRCdXR0b25EaXYoKSB7XG4gICAgY29uc3QgYnV0dG9uRGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdidXR0b25zJylcbiAgICBidXR0b25EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZF9fYnRuXCIgZm9ybW1ldGhvZD1cImRpYWxvZ1wiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBjbG9zZV9fYnRuXCIgZm9ybW1ldGhvZD1cImRpYWxvZ1wiPkNhbmNlbDwvYnV0dG9uPmBcblxuICAgIHJldHVybiBidXR0b25EaXZcbn1cblxuLy8gTW92ZSBkaWFsb2cgXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb3ZlRGlhbG9nKCl7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbiAgICBkaWFsb2cuaWQgPSAnaXRlbV9fbW92ZS1kaWFsb2cnXG4gICAgYXBwZW5kQ2hpbGRyZW4oZGlhbG9nLCBbY3JlYXRlUHJvamVjdFNlbGVjdCgpLCBjcmVhdGVFZGl0QnV0dG9uRGl2KCldKVxuXG4gICAgcmV0dXJuIGRpYWxvZ1xufSIsImltcG9ydCBhcHBlbmRDaGlsZHJlbiBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2FwcGVuZENoaWxkcmVuXCJcbmltcG9ydCBjcmVhdGVCdXR0b25XaXRoQ2xhc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9jcmVhdGVCdXR0b25XaXRoQ2xhc3NcIlxuaW1wb3J0IGNyZWF0ZURpdldpdGhDbGFzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2NyZWF0ZURpdldpdGhDbGFzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZpbmlzaGVkVG9kbyh0b2RvKSB7XG4gICAgY29uc3QgZGV0YWlsID0gdG9kby5nZXRWYWx1ZSgpXG5cbiAgICBjb25zdCB0b2RvRGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdmaW5pc2hlZCcsJ2NvbnRlbnRfX2l0ZW0nLCAndG8tZG8nKVxuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ3RpdGxlJylcbiAgICB0aXRsZURpdi5pbm5lckhUTUwgPSBgPHNwYW4+JHtkZXRhaWwudGl0bGV9PC9zcGFuPmBcblxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygnYnV0dG9ucycpXG4gICAgY29uc3QgZGVsZXRlQnRuID0gY3JlYXRlQnV0dG9uV2l0aENsYXNzKCdkZWxldGVfX2J0bicsICdyaS1kZWxldGUtYmluLTYtbGluZScpXG5cbiAgICBhcHBlbmRDaGlsZHJlbihidXR0b25EaXYsIFtkZWxldGVCdG5dKVxuICAgIGFwcGVuZENoaWxkcmVuKHRvZG9EaXYsIFt0aXRsZURpdiwgYnV0dG9uRGl2XSlcblxuICAgIHJldHVybiB0b2RvRGl2XG59IiwiaW1wb3J0IGFwcGVuZENoaWxkcmVuIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vYXBwZW5kQ2hpbGRyZW5cIlxuaW1wb3J0IGNyZWF0ZURpdldpdGhDbGFzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2NyZWF0ZURpdldpdGhDbGFzc1wiXG5pbXBvcnQgY3JlYXRlSWNvbldpdGhDbGFzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2NyZWF0ZUljb25XaXRoQ2xhc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcblxuICAgIGNvbnN0IG1lbnVCdG4gPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ21lbnVfX2J0bicsICdpY29uX19iaWcnKVxuICAgIGNvbnN0IG1lbnVJY29uID0gY3JlYXRlSWNvbldpdGhDbGFzcygncmktbWVudS1saW5lJylcbiAgICBtZW51QnRuLmFwcGVuZENoaWxkKG1lbnVJY29uKVxuXG4gICAgY29uc3QgbG9nbyA9IGNyZWF0ZURpdldpdGhDbGFzcygnbG9nbycpXG4gICAgbG9nby5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpIGNsYXNzPVwicmktc3RhY2stbGluZVwiPjwvaT5cbiAgICAgICAgPHNwYW4+VGFza288L3NwYW4+YFxuXG4gICAgY29uc3QgYWRkQnRuID0gY3JlYXRlRGl2V2l0aENsYXNzKCdhZGRfX2J0bicsICdpY29uX19iaWcnKVxuICAgIGNvbnN0IGFkZEljb24gPSBjcmVhdGVJY29uV2l0aENsYXNzKCdyaS1hZGQtbGluZScpXG4gICAgYWRkQnRuLmFwcGVuZENoaWxkKGFkZEljb24pXG5cbiAgICBhcHBlbmRDaGlsZHJlbihoZWFkZXIsIFttZW51QnRuLCBsb2dvLCBhZGRCdG5dKVxuXG4gICAgcmV0dXJuIGhlYWRlclxufVxuIiwiaW1wb3J0IGhlYWRlciBmcm9tICcuL2NyZWF0ZUhlYWRlcidcbmltcG9ydCBuYXZCYXIgZnJvbSAnLi9jcmVhdGVOYXZpZ2F0aW9uJ1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9jcmVhdGVNZW51J1xuaW1wb3J0IGNyZWF0ZUNvbnRlbnQgZnJvbSAnLi9jcmVhdGVDb250ZW50J1xuaW1wb3J0IHtjcmVhdGVQcm9qZWN0RGlhbG9nLCBjcmVhdGVJdGVtRGlhbG9nLCBjcmVhdGVDb25maXJtRGlhbG9nLCBjcmVhdGVFZGl0RGlhbG9nLCBjcmVhdGVNb3ZlRGlhbG9nfSBmcm9tICcuL2NyZWF0ZURpYWxvZ3MnXG5pbXBvcnQgYXBwZW5kQ2hpbGRyZW4gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uL2FwcGVuZENoaWxkcmVuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVMYXlvdXQob2JqKXtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVDb250ZW50KG9iailcbiAgICBjb25zdCBwcm9qZWN0RGlhbG9nID0gY3JlYXRlUHJvamVjdERpYWxvZygpXG4gICAgY29uc3QgaXRlbURpYWxvZyA9IGNyZWF0ZUl0ZW1EaWFsb2coKVxuICAgIGNvbnN0IGVkaXREaWFsb2cgPSBjcmVhdGVFZGl0RGlhbG9nKClcbiAgICBjb25zdCBtb3ZlRGlhbG9nID0gY3JlYXRlTW92ZURpYWxvZygpXG4gICAgY29uc3QgY29uZmlybURpYWxvZyA9IGNyZWF0ZUNvbmZpcm1EaWFsb2coKVxuXG4gICAgYXBwZW5kQ2hpbGRyZW4oYm9keSwgW2hlYWRlcigpLCBjb250YWluZXJdKVxuICAgIGFwcGVuZENoaWxkcmVuKGNvbnRhaW5lciwgW25hdkJhcigpLCBtZW51KCksIGNvbnRlbnQsIHByb2plY3REaWFsb2csIGl0ZW1EaWFsb2csIGVkaXREaWFsb2csIG1vdmVEaWFsb2csIGNvbmZpcm1EaWFsb2ddKVxufSIsImltcG9ydCBhcHBlbmRDaGlsZHJlbiBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2FwcGVuZENoaWxkcmVuXCJcbmltcG9ydCBjcmVhdGVCdXR0b25XaXRoQ2xhc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9jcmVhdGVCdXR0b25XaXRoQ2xhc3NcIlxuaW1wb3J0IGNyZWF0ZURpdldpdGhDbGFzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2NyZWF0ZURpdldpdGhDbGFzc1wiXG5pbXBvcnQgcHJvamVjdENvbnRhaW5lck9iaiBmcm9tIFwiLi4vcHJvamVjdENvbnRhaW5lclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgbWVudSA9IGNyZWF0ZURpdldpdGhDbGFzcygnbWVudScsICdkLW9mZicpXG5cbiAgICBjb25zdCBtZW51VG9wID0gY3JlYXRlRGl2V2l0aENsYXNzKCdtZW51X190b3AnKVxuICAgIGNvbnN0IG1lbnVJdGVtc0hUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2hfX2JhclwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJzZWFyY2hfX2lucHV0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoX19pY29uIGljb25fX3NtYWxsXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJyaS1zZWFyY2gtbGluZVwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVfX2l0ZW0gaW5ib3hfX25hdiBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uX19zbWFsbFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicmktaW5ib3gtMi1saW5lXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj5JbmJveDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51X19pdGVtIHRvZGF5X19uYXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgaWNvbl9fc21hbGxcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInJpLWNhbGVuZGFyLWxpbmVcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuPlRvZGF5PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgbWVudVRvcC5pbm5lckhUTUwgPSBtZW51SXRlbXNIVE1MXG4gICAgY29uc3QgaGlzdG9yeU5hdiA9IGNyZWF0ZURpdldpdGhDbGFzcygnbWVudV9faXRlbScsICdoaXN0b3J5X19uYXYnKVxuICAgIGhpc3RvcnlOYXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiIGljb25fX3NtYWxsXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cInJpLWhpc3RvcnktbGluZVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuPkhpc3Rvcnk8L3NwYW4+YFxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnVUb3AsIFtjcmVhdGVQcm9qZWN0TGlzdCgpLCBoaXN0b3J5TmF2XSlcbiAgICBcbiAgICBjb25zdCBtZW51Qm90ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdtZW51X19ib3QnLCAnaWNvbl9fYmlnJylcbiAgICBtZW51Qm90LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cInJpLXN1bi1saW5lXCI+PC9pPidcblxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnUsIFttZW51VG9wLCBtZW51Qm90XSlcblxuICAgIHJldHVybiBtZW51XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RMaXN0KCl7XG4gICAgY29uc3QgcHJvamVjdExpc3REaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ21lbnVfX2l0ZW0nLCAncHJvamVjdF9fbGlzdCcpXG4gICAgcHJvamVjdExpc3REaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdF9fbmF2IFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb25fX3NtYWxsXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJyaS1hcmNoaXZlLWxpbmVcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuPlByb2plY3Q8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXJyb3cgaWNvbl9fc21hbGxcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInJpLWFycm93LXVwLXMtbGluZVwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gXG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0X19saXN0LWl0ZW1zJywgJ2Qtb2ZmJylcbiAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RDb250YWluZXJPYmouZ2V0QWxsSXRlbSgpXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcmogPT4ge1xuICAgICAgICBpZihwcmouZ2V0VmFsdWUoKS50aXRsZSAhPT0gJ0luYm94JyAmJiBwcmouZ2V0VmFsdWUoKS50aXRsZSAhPT0gJ1RvZGF5Jyl7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICBwcm9qZWN0TGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdF9fbGlzdC1pdGVtJylcbiAgICAgICAgICAgIHByb2plY3RMaS5pbm5lckhUTUwgPSBgPHNwYW4+JHtwcmouZ2V0VmFsdWUoKS50aXRsZX08L3NwYW4+YFxuICAgICAgICAgICAgY29uc3QgYnV0dG9uRGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdidXR0b25zJylcbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVCdXR0b25XaXRoQ2xhc3MoJ2VkaXRfX2J0bicsICdyaS1lZGl0LWJveC1saW5lJylcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZUJ1dHRvbldpdGhDbGFzcygnZGVsZXRlX19idG4nLCAncmktZGVsZXRlLWJpbi02LWxpbmUnKVxuICAgICAgICAgICAgYXBwZW5kQ2hpbGRyZW4oYnV0dG9uRGl2LCBbZWRpdEJ0biwgZGVsZXRlQnRuXSlcbiAgICAgICAgICAgIHByb2plY3RMaS5hcHBlbmRDaGlsZChidXR0b25EaXYpXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGkpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgYWRkQnRuTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgYWRkQnRuTGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdF9fYWRkLWJ0bicpXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSBgK2BcbiAgICBhZGRCdG5MaS5hcHBlbmRDaGlsZChhZGRCdG4pXG5cbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChhZGRCdG5MaSlcbiAgICBwcm9qZWN0TGlzdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdClcbiAgICByZXR1cm4gcHJvamVjdExpc3REaXZcbn1cbiIsImltcG9ydCBhcHBlbmRDaGlsZHJlbiBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2FwcGVuZENoaWxkcmVuXCJcbmltcG9ydCBjcmVhdGVEaXZXaXRoQ2xhc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9jcmVhdGVEaXZXaXRoQ2xhc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVOYXZpZ2F0aW9uQmFyKCkge1xuICAgIGNvbnN0IG5hdkJhciA9IGNyZWF0ZURpdldpdGhDbGFzcygnbmF2X19iYXInKVxuXG4gICAgY29uc3QgbmF2SXRlbXMgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ25hdl9faXRlbXMnKVxuICAgIGNvbnN0IG5hdkl0ZW1IVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2X19pdGVtIGljb25fX2JpZyBzZWFyY2hfX25hdlwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJyaS1zZWFyY2gtbGluZVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXZfX2l0ZW0gaWNvbl9fYmlnIGluYm94X19uYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwicmktaW5ib3gtMi1saW5lXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdl9faXRlbSBpY29uX19iaWcgdG9kYXlfX25hdlwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJyaS1jYWxlbmRhci1saW5lXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdl9faXRlbSBpY29uX19iaWcgcHJvamVjdF9fbmF2XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cInJpLWFyY2hpdmUtbGluZVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXZfX2l0ZW0gaWNvbl9fYmlnIGhpc3RvcnlfX25hdlwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJyaS1oaXN0b3J5LWxpbmVcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbiAgICBuYXZJdGVtcy5pbm5lckhUTUwgPSBuYXZJdGVtSFRNTFxuXG4gICAgY29uc3QgYXBwZWFyYW5jZU1vZGUgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ2FwcGVhcmFuY2VfX21vZGUnLCAnaWNvbl9fYmlnJylcbiAgICBhcHBlYXJhbmNlTW9kZS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJyaS1zdW4tbGluZVwiPjwvaT4nXG5cbiAgICBhcHBlbmRDaGlsZHJlbihuYXZCYXIsIFtuYXZJdGVtcywgYXBwZWFyYW5jZU1vZGVdKVxuXG4gICAgcmV0dXJuIG5hdkJhclxufVxuIiwiaW1wb3J0IGFwcGVuZENoaWxkcmVuIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vYXBwZW5kQ2hpbGRyZW4uanNcIlxuaW1wb3J0IGNyZWF0ZURpdldpdGhDbGFzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2NyZWF0ZURpdldpdGhDbGFzcy5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU5vdGUobm90ZSkge1xuICAgIGNvbnN0IGRldGFpbCA9IG5vdGUuZ2V0VmFsdWUoKVxuXG4gICAgY29uc3Qgbm90ZURpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygnbm90ZScsICdjb250ZW50X19pdGVtJylcblxuICAgIGNvbnN0IHRpdGxlRGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCd0aXRsZScpXG4gICAgdGl0bGVEaXYuaW5uZXJIVE1MID0gYDxzcGFuPiR7ZGV0YWlsLnRpdGxlfTwvc3Bhbj5gXG5cbiAgICBjb25zdCBidXR0b25EaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ2J1dHRvbnMnKVxuICAgIGJ1dHRvbkRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0X19idG5cIj48aSBjbGFzcz1cInJpLWVkaXQtYm94LWxpbmVcIj48L2k+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJtb3ZlX19idG5cIj48aSBjbGFzcz1cInJpLWFycm93LXJpZ2h0LWNpcmNsZS1saW5lXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlX19idG5cIj48aSBjbGFzcz1cInJpLWRlbGV0ZS1iaW4tNi1saW5lXCI+PC9pPjwvYnV0dG9uPlxuICAgIGBcblxuICAgIGFwcGVuZENoaWxkcmVuKG5vdGVEaXYsIFt0aXRsZURpdiwgYnV0dG9uRGl2XSlcblxuICAgIHJldHVybiBub3RlRGl2XG59XG5cbiIsImltcG9ydCBhcHBlbmRDaGlsZHJlbiBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2FwcGVuZENoaWxkcmVuXCJcbmltcG9ydCBjcmVhdGVCdXR0b25XaXRoQ2xhc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9jcmVhdGVCdXR0b25XaXRoQ2xhc3NcIlxuaW1wb3J0IGNyZWF0ZURpdldpdGhDbGFzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2NyZWF0ZURpdldpdGhDbGFzc1wiXG5pbXBvcnQgc2V0UHJpb3JpdHlDbGFzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL3NldFByaW9yaXR5Q2xhc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb2RvKHRvZG8pIHtcbiAgICBjb25zdCBkZXRhaWwgPSB0b2RvLmdldFZhbHVlKClcblxuICAgIGNvbnN0IHRvZG9EaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ3RvLWRvJywnY29udGVudF9faXRlbScpXG5cbiAgICBjb25zdCBjaGVja2JveERpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygnY2hlY2tib3gnKVxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3hfX2lucHV0JylcbiAgICBjaGVja2JveERpdi5hcHBlbmRDaGlsZChjaGVja2JveClcblxuICAgIGNvbnN0IHRpdGxlRGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCd0aXRsZScpXG4gICAgdGl0bGVEaXYuaW5uZXJIVE1MID0gYDxzcGFuPiR7ZGV0YWlsLnRpdGxlfTwvc3Bhbj5gXG5cbiAgICBjb25zdCBidXR0b25EaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ2J1dHRvbnMnKVxuICAgIGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVCdXR0b25XaXRoQ2xhc3MoJ2VkaXRfX2J0bicsICdyaS1lZGl0LWJveC1saW5lJylcbiAgICBjb25zdCBwcmlvcml0eUJ0biA9IGNyZWF0ZUJ1dHRvbldpdGhDbGFzcygncHJpb3JpdHlfX2J0bicsICdyaS1mbGFnLTItbGluZScpXG4gICAgY29uc3QgbW92ZUJ0biA9IGNyZWF0ZUJ1dHRvbldpdGhDbGFzcygnbW92ZV9fYnRuJywgJ3JpLWFycm93LXJpZ2h0LWNpcmNsZS1saW5lJylcbiAgICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVCdXR0b25XaXRoQ2xhc3MoJ2RlbGV0ZV9fYnRuJywgJ3JpLWRlbGV0ZS1iaW4tNi1saW5lJylcblxuICAgIHNldFByaW9yaXR5Q2xhc3MocHJpb3JpdHlCdG4sIGRldGFpbC5wcmlvcml0eSlcblxuICAgIGFwcGVuZENoaWxkcmVuKGJ1dHRvbkRpdiwgW2VkaXRCdG4sIHByaW9yaXR5QnRuLCBtb3ZlQnRuLCBkZWxldGVCdG5dKVxuICAgIGFwcGVuZENoaWxkcmVuKHRvZG9EaXYsIFtjaGVja2JveERpdiwgdGl0bGVEaXYsIGJ1dHRvbkRpdl0pXG5cbiAgICByZXR1cm4gdG9kb0RpdlxufVxuXG5cblxuXG4iLCJpbXBvcnQgY3JlYXRlRGl2V2l0aENsYXNzIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vY3JlYXRlRGl2V2l0aENsYXNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVVuZG9Cb3gobWVzc2FnZSl7XG4gICAgY29uc3QgdW5kb0JveCA9IGNyZWF0ZURpdldpdGhDbGFzcygndW5kb19fYm94JylcbiAgICB1bmRvQm94LmlubmVySFRNTCA9IGBcbiAgICAgICAgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gdW5kb19fYnRuXCI+VW5kbzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBjbG9zZV9fYnRuXCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcblxuICAgIHJldHVybiB1bmRvQm94XG59IiwiZnVuY3Rpb24gaXRlbUNvbnRhaW5lcigpIHtcbiAgICBjb25zdCBhcnIgPSBbXVxuXG4gICAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGFyci5wdXNoKGl0ZW0pXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SXRlbSA9IChpbmRleCkgPT4ge1xuICAgICAgICBpZihpbmRleCA+PSAwICYmIGluZGV4IDwgYXJyLmxlbmd0aCkgcmV0dXJuIGFycltpbmRleF1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRBbGxJdGVtID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXJyXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IChpbmRleCkgPT4ge1xuICAgICAgICBpZihpbmRleCA9PT0gMCl7XG4gICAgICAgICAgICBhcnIuc3BsaWNlKDAsMSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCBpbmRleClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgYWRkSXRlbSxcbiAgICAgICAgZ2V0SXRlbSxcbiAgICAgICAgZ2V0QWxsSXRlbSxcbiAgICAgICAgZGVsZXRlSXRlbVxuICAgIH1cbn1cblxuY29uc3QgaXRlbUNvbnRhaW5lck9iaiA9IGl0ZW1Db250YWluZXIoKVxuZXhwb3J0IGRlZmF1bHQgaXRlbUNvbnRhaW5lck9iaiIsImltcG9ydCB7Zm9ybWF0fSBmcm9tICdkYXRlLWZucydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm90ZSgpe1xuICAgIGNvbnN0IHR5cGUgPSAnbm90ZSdcbiAgICBsZXQgdGl0bGUsIGRlc2NyaXB0aW9uIFxuICAgIGNvbnN0IGRhdGUgPSBmb3JtYXQobmV3IERhdGUoKSwgJ01NL2RkL3l5eXknKVxuXG4gICAgY29uc3QgY2hhbmdlVmFsdWUgPSAodGl0LGRlcykgPT4ge1xuICAgICAgICB0aXRsZSA9IHRpdFxuICAgICAgICBkZXNjcmlwdGlvbiA9IGRlc1xuICAgIH1cblxuICAgIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB0eXBlXG5cbiAgICBjb25zdCBnZXRWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkYXRlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIGNoYW5nZVZhbHVlLFxuICAgICAgICBnZXRUeXBlLFxuICAgICAgICBnZXRWYWx1ZVxuICAgIH1cbn0iLCJpbXBvcnQge2Zvcm1hdH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3QoKXtcbiAgICBjb25zdCBhcnIgPSBbXVxuICAgIGNvbnN0IHR5cGUgPSAncHJvamVjdCdcbiAgICBsZXQgdGl0bGUsIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZGF0ZSA9IGZvcm1hdChuZXcgRGF0ZSgpLCAnTU0vZGQveXl5eScpXG5cbiAgICBjb25zdCBjaGFuZ2VWYWx1ZSA9ICh0aXQsZGVzKSA9PiB7XG4gICAgICAgIHRpdGxlID0gdGl0XG4gICAgICAgIGRlc2NyaXB0aW9uID0gZGVzXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VmFsdWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybnt0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGV9XG4gICAgfVxuXG4gICAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGFyci5wdXNoKGl0ZW0pXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IChpbmRleCkgPT4ge1xuICAgICAgICBpZihpbmRleCA9PT0gMCl7XG4gICAgICAgICAgICBhcnIuc3BsaWNlKDAsMSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SXRlbSA9IChpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gYXJyW2luZGV4XVxuICAgIH1cbiAgICBjb25zdCBnZXRBbGxJdGVtID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXJyXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHR5cGVcbiAgICBcblxuICAgIHJldHVybntcbiAgICAgICAgY2hhbmdlVmFsdWUsXG4gICAgICAgIGdldFZhbHVlLFxuICAgICAgICBhZGRJdGVtLFxuICAgICAgICBkZWxldGVJdGVtLFxuICAgICAgICBnZXRJdGVtLFxuICAgICAgICBnZXRBbGxJdGVtLFxuICAgICAgICBnZXRUeXBlXG4gICAgfVxufSIsImltcG9ydCB7IGxvYWRGcm9tTG9jYWxTdG9yYWdlLCBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi91dGlscy9sb2NhbFN0b3JhZ2UnXG5pbXBvcnQgaW5ib3hPYmogZnJvbSAnLi9EZWZhdWx0IFByb2plY3QvaW5ib3gnXG5pbXBvcnQgdG9kYXlPYmogZnJvbSAnLi9EZWZhdWx0IFByb2plY3QvdG9kYXknXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0Q29udGFpbmVyKCkge1xuICAgIGNvbnN0IGFyciA9IFtdXG4gICAgY29uc3QgdHlwZSA9ICdwcm9qZWN0Q29udGFpbmVyJ1xuXG4gICAgY29uc3QgYWRkSXRlbSA9IChwcmopID0+IHtcbiAgICAgICAgYXJyLnB1c2gocHJqKVxuICAgIH1cblxuICAgIGNvbnN0IGdldEl0ZW0gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgaWYoaW5kZXggPj0gMCAmJiBpbmRleCA8IGFyci5sZW5ndGgpIHJldHVybiBhcnJbaW5kZXhdXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QWxsSXRlbSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGFyclxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgaWYoaW5kZXggPT09IDApe1xuICAgICAgICAgICAgYXJyLnNwbGljZSgwLDEpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB0eXBlXG5cbiAgICByZXR1cm57XG4gICAgICAgIGFkZEl0ZW0sXG4gICAgICAgIGdldEl0ZW0sXG4gICAgICAgIGdldEFsbEl0ZW0sXG4gICAgICAgIGRlbGV0ZUl0ZW0sXG4gICAgICAgIGdldFR5cGVcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByb2plY3RDb250YWluZXJDb25zdHJ1Y3RvcigpIHtcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdENvbnRhaW5lcicpID09PSBudWxsKXtcbiAgICAgICAgY29uc29sZS5sb2coJ1NhdmluZyB0byBsb2NhbCBzdG9yYWdlJylcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lck9iaiA9IHByb2plY3RDb250YWluZXIoKVxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyT2JqLmFkZEl0ZW0oaW5ib3hPYmopXG4gICAgICAgIHByb2plY3RDb250YWluZXJPYmouYWRkSXRlbSh0b2RheU9iailcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdwcm9qZWN0Q29udGFpbmVyJywgcHJvamVjdENvbnRhaW5lck9iailcbiAgICAgICAgcmV0dXJuIHByb2plY3RDb250YWluZXJPYmpcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc3QgbG9hZGVkUHJvamVjdENvbnRhaW5lciA9IGxvYWRGcm9tTG9jYWxTdG9yYWdlKCdwcm9qZWN0Q29udGFpbmVyJylcbiAgICAgICAgY29uc29sZS5sb2cobG9hZGVkUHJvamVjdENvbnRhaW5lcilcbiAgICAgICAgcmV0dXJuIGxvYWRlZFByb2plY3RDb250YWluZXJcbiAgICB9XG59XG5cbmNvbnN0IHByb2plY3RDb250YWluZXJPYmogPSBwcm9qZWN0Q29udGFpbmVyQ29uc3RydWN0b3IoKVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0Q29udGFpbmVyT2JqIiwiaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvKCl7XG4gICAgY29uc3QgdHlwZSA9ICd0b2RvJ1xuICAgIGxldCB0aXRsZSwgZGVzY3JpcHRpb24sc3RhcnREYXRlLCBkdWVEYXRlLCBwcmlvcml0eVxuICAgIGxldCBzdGF0dXMgPSBmYWxzZVxuXG4gICAgY29uc3QgY2hhbmdlVmFsdWUgPSAodGl0LGRlcywgc3RhcnQsIGR1ZSxwcmkpID0+IHtcbiAgICAgICAgdGl0bGUgPSB0aXRcbiAgICAgICAgZGVzY3JpcHRpb24gPSBkZXNcbiAgICAgICAgc3RhcnREYXRlID0gZm9ybWF0KHN0YXJ0LCAnTU0vZGQveXl5eScpXG4gICAgICAgIGR1ZURhdGUgPSBmb3JtYXQoZHVlLCAnTU0vZGQveXl5eScpXG4gICAgICAgIHByaW9yaXR5ID0gcHJpXG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSAocHJpKSA9PiB7XG4gICAgICAgIHByaW9yaXR5ID0gcHJpXG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICBpZihzdGF0dXMgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIHN0YXR1cyA9IHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzdGF0dXMgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB0eXBlXG5cbiAgICBjb25zdCBnZXRWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICBjaGFuZ2VWYWx1ZSxcbiAgICAgICAgY2hhbmdlU3RhdHVzLFxuICAgICAgICBjaGFuZ2VQcmlvcml0eSxcbiAgICAgICAgZ2V0VHlwZSxcbiAgICAgICAgZ2V0VmFsdWVcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4ocGFyZW50LCBjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvc2VUaGlzKG9iail7XG4gICAgb2JqLmNsYXNzTGlzdC5hZGQoJ2Qtb2ZmJylcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCdXR0b25XaXRoQ2xhc3MoY2xhc3NOYW1lLCBpY29uQ2xhc3MpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICBpZiAoaWNvbkNsYXNzKSB7XG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCIke2ljb25DbGFzc31cIj48L2k+YFxuICAgIH1cbiAgICByZXR1cm4gYnV0dG9uXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGl2V2l0aENsYXNzKC4uLmNsYXNzTmFtZSl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gZGl2O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUljb25XaXRoQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gaWNvbjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGVjdXRlV2l0aEFuaW1hdGlvbihpdGVtLCBjYWxsYmFjaykge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdjbG9zaW5nJywgJycpXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdjbG9zaW5nJylcbiAgICAgICAgY2FsbGJhY2soaXRlbSlcbiAgICB9LCB7b25jZTp0cnVlfSlcbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3BlblRoaXMob2JqKXtcbiAgICBvYmouY2xhc3NMaXN0LnJlbW92ZSgnZC1vZmYnKVxufSIsImltcG9ydCBwcm9qZWN0Q29udGFpbmVyT2JqIGZyb20gJy4uLy4uL2NvbXBvbmVudC9wcm9qZWN0Q29udGFpbmVyJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VhcmNoQWxsSXRlbXModGl0bGUpe1xuICAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IFtdXG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0Q29udGFpbmVyT2JqLmdldEFsbEl0ZW0oKVxuICAgIGFsbFByb2plY3RzLmZvckVhY2gocHJqID0+IHtcbiAgICAgICAgY29uc3QgYWxsSXRlbXMgPSBwcmouZ2V0QWxsSXRlbSgpXG4gICAgICAgIGFsbEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZihpdGVtLmdldFZhbHVlKCkudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aXRsZS50b0xvd2VyQ2FzZSgpKSl7XG4gICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0LnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlYXJjaFJlc3VsdFxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFByaW9yaXR5Q2xhc3MoZWxlbWVudCwgcHJpb3JpdHkpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5X19sb3cnKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHlfX21lZGl1bScpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eV9faGlnaCcpXG4gICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgICBjYXNlICdsb3cnOlxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eV9fbG93JylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5X19tZWRpdW0nKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5X19oaWdoJylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgfVxufSIsImltcG9ydCBub3RlIGZyb20gXCIuLi9jb21wb25lbnQvbm90ZVwiXG5pbXBvcnQgcHJvamVjdCBmcm9tIFwiLi4vY29tcG9uZW50L3Byb2plY3RcIlxuaW1wb3J0IHsgcHJvamVjdENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnQvcHJvamVjdENvbnRhaW5lclwiXG5pbXBvcnQgdG9kbyBmcm9tIFwiLi4vY29tcG9uZW50L3RvZG9cIlxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBzZXJpYWxpemVkVmFsdWUgPSBKU09OLnN0cmluZ2lmeShzZXJpYWxpemUodmFsdWUpKVxuICAgIGNvbnNvbGUubG9nKHNlcmlhbGl6ZWRWYWx1ZSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHNlcmlhbGl6ZWRWYWx1ZSlcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplKGlucHV0T2JqKXtcbiAgICBpZiAoaW5wdXRPYmouZ2V0VHlwZSgpKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXVxuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gaW5wdXRPYmopIHtcbiAgICAgICAgICAgIGxldCBhcnJcbiAgICAgICAgICAgIGlmICgodHlwZW9mIGlucHV0T2JqW3Byb3BdID09PSAnZnVuY3Rpb24nICYmIHByb3AgIT09ICdnZXRBbGxJdGVtJykgfHwgcHJvcCA9PT0gJ3R5cGUnKSBjb250aW51ZSAvLyBTa2lwIGZ1bmN0aW9uc1xuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdnZXRBbGxJdGVtJyl7XG4gICAgICAgICAgICAgICAgYXJyID0gaW5wdXRPYmouZ2V0QWxsSXRlbSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KGFycikpe1xuICAgICAgICAgICAgICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouZ2V0VHlwZSgpID09PSAndG9kbycgfHwgb2JqLmdldFR5cGUoKSA9PT0gJ25vdGUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogb2JqLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb2JqLmdldFZhbHVlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBvYmouZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvYmouZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBvYmouZ2V0QWxsSXRlbSgpLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uZ2V0VmFsdWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGlucHV0T2JqLmdldFZhbHVlICE9PSB1bmRlZmluZWQgJiYgaW5wdXRPYmogIT09ICd0b2RvJyAmJiBpbnB1dE9iaiAhPT0gJ25vdGUnKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogaW5wdXRPYmouZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpbnB1dE9iai5nZXRWYWx1ZSgpLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBpbnB1dE9iai5nZXRUeXBlKCksXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRnJvbUxvY2FsU3RvcmFnZShrZXkpIHtcbiAgICBjb25zdCBsb2FkZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG4gICAgY29uc29sZS5sb2cobG9hZGVkKVxuICAgIHN3aXRjaCAobG9hZGVkLnR5cGUpIHsgXG4gICAgICAgIGNhc2UgJ3Byb2plY3RDb250YWluZXInOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVByb2plY3RDb250YWluZXIobG9hZGVkLmRhdGEpXG4gICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVByb2plY3QobG9hZGVkKVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvbXBvbmVudChsb2FkZWQudHlwZSwgbG9hZGVkLmRhdGEpXG4gICAgfVxufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRhaW5lcihkYXRhKSB7XG4gICAgY29uc3Qgb2JqID0gcHJvamVjdENvbnRhaW5lcigpXG4gICAgZm9yIChjb25zdCBwcmogaW4gZGF0YSkge1xuICAgICAgICBvYmouYWRkSXRlbShjcmVhdGVQcm9qZWN0KGRhdGFbcHJqXSkpXG4gICAgfVxuICAgIHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChkYXRhKSB7XG4gICAgY29uc3Qgb2JqID0gcHJvamVjdCgpXG4gICAgb2JqLmNoYW5nZVZhbHVlKGRhdGEudmFsdWUudGl0bGUsIGRhdGEudmFsdWUuZGVzY3JpcHRpb24pXG4gICAgZGF0YS5kYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIG9iai5hZGRJdGVtKGNyZWF0ZUNvbXBvbmVudChpdGVtLnR5cGUsIGl0ZW0udmFsdWUpKVxuICAgIH0pXG4gICAgcmV0dXJuIG9ialxufVxuXG5mdW5jdGlvbiBjcmVhdGVOb3RlKGRhdGEpIHtcbiAgICBjb25zdCBvYmogPSBub3RlKClcbiAgICBvYmouY2hhbmdlVmFsdWUoZGF0YS50aXRsZSwgZGF0YS5kZXNjcmlwdGlvbilcbiAgICByZXR1cm4gb2JqXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8oZGF0YSkge1xuICAgIGNvbnN0IG9iaiA9IHRvZG8oKVxuICAgIG9iai5jaGFuZ2VWYWx1ZShkYXRhLnRpdGxlLCBkYXRhLmRlc2NyaXB0aW9uLCBkYXRhLnN0YXJ0RGF0ZSwgZGF0YS5kdWVEYXRlKVxuICAgIG9iai5jaGFuZ2VQcmlvcml0eShkYXRhLnByaW9yaXR5KVxuICAgIGlmKGRhdGEuc3RhdHVzKXtcbiAgICAgICAgb2JqLmNoYW5nZVN0YXR1cygpXG4gICAgfVxuICAgIHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KHR5cGUsIGRhdGEpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbm90ZSc6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlTm90ZShkYXRhKVxuICAgICAgICBjYXNlICd0b2RvJzpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVUb2RvKGRhdGEpXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn1cblxuXG4vLyBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpLCAoX2tleSwgdmFsdWUpID0+IHtcbi8vICAgICBpZiAodmFsdWUudHlwZSkge1xuLy8gICAgICAgICBsZXQgb2JqXG4vLyAgICAgICAgIHN3aXRjaCAodmFsdWUudHlwZSkge1xuLy8gICAgICAgICAgICAgY2FzZSAncHJvamVjdENvbnRhaW5lcic6XG4vLyAgICAgICAgICAgICAgICAgb2JqID0gY3JlYXRlUHJvamVjdENvbnRhaW5lcih2YWx1ZS5kYXRhKVxuLy8gICAgICAgICAgICAgICAgIGJyZWFrXG4vLyAgICAgICAgICAgICBjYXNlICdwcm9qZWN0Jzpcbi8vICAgICAgICAgICAgICAgICBvYmogPSBjcmVhdGVQcm9qZWN0KHZhbHVlLmRhdGEpXG4vLyAgICAgICAgICAgICAgICAgYnJlYWtcbi8vICAgICAgICAgICAgIGNhc2UgJ25vdGUnOlxuLy8gICAgICAgICAgICAgICAgIG9iaiA9IGNyZWF0ZU5vdGUodmFsdWUuZGF0YSlcbi8vICAgICAgICAgICAgICAgICBicmVha1xuLy8gICAgICAgICAgICAgY2FzZSAndG9kbyc6XG4vLyAgICAgICAgICAgICAgICAgb2JqID0gY3JlYXRlVG9kbyh2YWx1ZS5kYXRhKVxuLy8gICAgICAgICAgICAgICAgIGJyZWFrXG4vLyAgICAgICAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICAgICAgICAgIG9iaiA9IHZhbHVlXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgY29uc29sZS5sb2coJ3JpZ2h0Jylcbi8vICAgICAgICAgcmV0dXJuIG9ialxuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZygnd3JvbmcnKVxuLy8gICAgIHJldHVybiB2YWx1ZVxuLy8gfSlcbi8vIHJldHVybiBkYXRhIiwiaW1wb3J0IGNyZWF0ZUxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50L0xheW91dC9jcmVhdGVMYXlvdXRcIjtcbmltcG9ydCB7IGxvYWRGcm9tTG9jYWxTdG9yYWdlLCBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRTdGF0ZSwgc2V0Q3VycmVudFN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCBjb250ZW50SGFuZGxlciBmcm9tIFwiLi91aS1oYW5kbGVycy9jb250ZW50SGFuZGxlclwiO1xuaW1wb3J0IGhlYWRlckhhbmRsZXIgZnJvbSBcIi4vdWktaGFuZGxlcnMvaGVhZGVySGFuZGxlclwiO1xuaW1wb3J0IG1lbnVIYW5kbGVyIGZyb20gXCIuL3VpLWhhbmRsZXJzL21lbnVIYW5kbGVyXCI7XG5pbXBvcnQgbmF2SGFuZGxlciBmcm9tIFwiLi91aS1oYW5kbGVycy9uYXZIYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckxheW91dCgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgYm9keS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFN0YXRlKClcblxuICAgIGNyZWF0ZUxheW91dChjdXJyZW50UHJvamVjdClcbiAgICBcbiAgICBpZihib2R5LmlubmVySFRNTCAhPT0gJycpe1xuICAgICAgICBoZWFkZXJIYW5kbGVyKClcbiAgICAgICAgbmF2SGFuZGxlcigpXG4gICAgICAgIG1lbnVIYW5kbGVyKClcbiAgICAgICAgY29udGVudEhhbmRsZXIoKVxuICAgIH1cbn0iLCJpbXBvcnQgcHJvamVjdENvbnRhaW5lck9iaiBmcm9tIFwiLi4vY29tcG9uZW50L3Byb2plY3RDb250YWluZXJcIlxuaW1wb3J0IHsgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCJcblxubGV0IGN1cnJlbnRTdGF0ZSA9IHtcbiAgICBjdXJyZW50UHJvamVjdDogcHJvamVjdENvbnRhaW5lck9iai5nZXRJdGVtKDApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50U3RhdGUob2JqKXtcbiAgICBjdXJyZW50U3RhdGUuY3VycmVudFByb2plY3QgPSBvYmpcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRTdGF0ZSgpe1xuICAgIHJldHVybiBjdXJyZW50U3RhdGUuY3VycmVudFByb2plY3Rcbn0iLCJpbXBvcnQgdGlueWNvbG9yIGZyb20gJ3Rpbnljb2xvcjInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlYXJhbmNlSGFuZGxlcigpIHtcbn1cbiIsImltcG9ydCBpbmJveE9iaiBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0RlZmF1bHQgUHJvamVjdC9pbmJveFwiXG5pbXBvcnQgcHJvamVjdENvbnRhaW5lck9iaiBmcm9tIFwiLi4vLi4vY29tcG9uZW50L3Byb2plY3RDb250YWluZXJcIlxuaW1wb3J0IGNsb3NlVGhpcyBmcm9tIFwiLi4vY29tbW9uL2Nsb3NlVGhpc1wiXG5pbXBvcnQgZXhlY3V0ZVdpdGhBbmltYXRpb24gZnJvbSBcIi4uL2NvbW1vbi9leGVjdXRlV2l0aEFuaW1hdGlvblwiXG5pbXBvcnQgcmVuZGVyTGF5b3V0IGZyb20gXCIuLi9yZW5kZXJcIlxuaW1wb3J0IHsgc2V0Q3VycmVudFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlXCJcbmltcG9ydCB7IGlzTWVudU9wZW4sIGlzUHJvamVjdExpc3RPcGVuLCBvcGVuTWVudSwgb3BlblByb2plY3RMaXN0IH0gZnJvbSBcIi4vbWVudUhhbmRsZXJcIlxuaW1wb3J0IHsgdW5kb0RlbGV0ZSB9IGZyb20gXCIuL3VuZG9IYW5kbGVyXCJcblxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29uZmlybUhhbmRsZXIocHJvamVjdCwgaXRlbSwgaW5kZXgpe1xuICAgIGNvbnN0IGNvbmZpcm1EaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybV9fZGlhbG9nJylcbiAgICBjb25zdCB5ZXNCdG4gPSBjb25maXJtRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5hZGRfX2J0bicpXG4gICAgY29uc3Qgbm9CdG4gPSBjb25maXJtRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZV9fYnRuJylcblxuICAgIHllc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbWVudU9wZW4gPSBpc01lbnVPcGVuKClcbiAgICAgICAgY29uc3QgbGlzdE9wZW4gPSBpc1Byb2plY3RMaXN0T3BlbigpXG4gICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKGNvbmZpcm1EaWFsb2csICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBwcm9qZWN0LmdldEl0ZW0oaW5kZXgpXG4gICAgICAgICAgICBwcm9qZWN0LmRlbGV0ZUl0ZW0oaW5kZXgpXG4gICAgICAgICAgICBjb25maXJtRGlhbG9nLmNsb3NlKCdkZWxldGVkJylcbiAgICAgICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKGl0ZW0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBjbG9zZVRoaXMoaXRlbSlcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50U3RhdGUocHJvamVjdClcbiAgICAgICAgICAgICAgICByZW5kZXJMYXlvdXQoKVxuICAgICAgICAgICAgICAgIGlmKG1lbnVPcGVuKSBvcGVuTWVudShmYWxzZSlcbiAgICAgICAgICAgICAgICBpZihsaXN0T3Blbikgb3BlblByb2plY3RMaXN0KClcbiAgICAgICAgICAgICAgICB1bmRvRGVsZXRlKHByb2plY3QsZGVsZXRlSXRlbSlcbiAgICAgICAgICAgIH0pICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgbm9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKGNvbmZpcm1EaWFsb2csICgpID0+IHtcbiAgICAgICAgICAgIGNvbmZpcm1EaWFsb2cuY2xvc2UoJ2NhbmNlbGxlZCcpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RDb25maXJtSGFuZGxlcihwcm9qZWN0LCBpbmRleCl7XG4gICAgY29uc3QgY29uZmlybURpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtX19kaWFsb2cnKVxuICAgIGNvbnN0IHllc0J0biA9IGNvbmZpcm1EaWFsb2cucXVlcnlTZWxlY3RvcignLmFkZF9fYnRuJylcbiAgICBjb25zdCBub0J0biA9IGNvbmZpcm1EaWFsb2cucXVlcnlTZWxlY3RvcignLmNsb3NlX19idG4nKVxuXG4gICAgeWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbihjb25maXJtRGlhbG9nLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVJdGVtID0gcHJvamVjdC5nZXRJdGVtKGluZGV4KVxuICAgICAgICAgICAgcHJvamVjdC5kZWxldGVJdGVtKGluZGV4KVxuICAgICAgICAgICAgY29uZmlybURpYWxvZy5jbG9zZSgnZGVsZXRlZCcpXG4gICAgICAgICAgICBzZXRDdXJyZW50U3RhdGUocHJvamVjdENvbnRhaW5lck9iai5nZXRJdGVtKDApKVxuICAgICAgICAgICAgcmVuZGVyTGF5b3V0KClcbiAgICAgICAgICAgIG9wZW5NZW51KGZhbHNlKVxuICAgICAgICAgICAgb3BlblByb2plY3RMaXN0KClcbiAgICAgICAgICAgIHVuZG9EZWxldGUocHJvamVjdCxkZWxldGVJdGVtKVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBub0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24oY29uZmlybURpYWxvZywgKCkgPT4ge1xuICAgICAgICAgICAgY29uZmlybURpYWxvZy5jbG9zZSgnY2FuY2VsbGVkJylcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG4iLCJpbXBvcnQgaGlzdG9yeU9iaiBmcm9tICcuLi8uLi9jb21wb25lbnQvRGVmYXVsdCBQcm9qZWN0L2hpc3RvcnknXG5pbXBvcnQgcHJvamVjdENvbnRhaW5lck9iaiBmcm9tICcuLi8uLi9jb21wb25lbnQvcHJvamVjdENvbnRhaW5lcidcbmltcG9ydCBjbG9zZVRoaXMgZnJvbSAnLi4vY29tbW9uL2Nsb3NlVGhpcydcbmltcG9ydCBleGVjdXRlV2l0aEFuaW1hdGlvbiBmcm9tICcuLi9jb21tb24vZXhlY3V0ZVdpdGhBbmltYXRpb24nXG5pbXBvcnQgb3BlblRoaXMgZnJvbSAnLi4vY29tbW9uL29wZW5UaGlzJ1xuaW1wb3J0IHNldFByaW9yaXR5Q2xhc3MgZnJvbSAnLi4vY29tbW9uL3NldFByaW9yaXR5Q2xhc3MnXG5pbXBvcnQgeyBsb2FkRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJ1xuaW1wb3J0IHJlbmRlckxheW91dCBmcm9tICcuLi9yZW5kZXInXG5pbXBvcnQgeyBnZXRDdXJyZW50U3RhdGUsIHNldEN1cnJlbnRTdGF0ZSB9IGZyb20gJy4uL3N0YXRlJ1xuaW1wb3J0IHsgZGVsZXRlQ29uZmlybUhhbmRsZXIgfSBmcm9tICcuL2NvbmZpcm1EaWFsb2dIYW5kbGVyJ1xuaW1wb3J0IHsgb3BlbkRldGFpbCwgY2hhbmdlRGV0YWlsIH0gZnJvbSAnLi9kZXRhaWxIYW5kbGVyJ1xuaW1wb3J0IHsgZWRpdE5vdGVEaWFsb2dIYW5kbGVyLCBlZGl0VG9kb0RpYWxvZ0hhbmRsZXIgfSBmcm9tICcuL2VkaXREaWFsb2dIYW5kbGVyJ1xuaW1wb3J0IHsgaXNNZW51T3BlbiwgaXNQcm9qZWN0TGlzdE9wZW4sIG9wZW5NZW51LCBvcGVuUHJvamVjdExpc3QgfSBmcm9tICcuL21lbnVIYW5kbGVyJ1xuaW1wb3J0IG1vdmVEaWFsb2dIYW5kbGVyIGZyb20gJy4vbW92ZURpYWxvZ0hhbmRsZXInXG5pbXBvcnQgeyB1bmRvQ2hlY2tib3ggfSBmcm9tICcuL3VuZG9IYW5kbGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250ZW50SGFuZGxlcigpIHtcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X190aXRsZScpXG4gICAgY29uc3QgZGV0YWlsQnRuID0gdGl0bGVEaXYucXVlcnlTZWxlY3RvcignaScpXG4gICAgY29uc3QgY29udGVudEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnRfX2l0ZW0nKVxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFN0YXRlKClcbiAgICAvLyBsZXQgY3VycmVudFByb2plY3RcbiAgICAvLyBpZihjdXJyZW50UHJvamVjdC5nZXRWYWx1ZSgpLnRpdGxlID09PSAnSGlzdG9yeScpe1xuICAgIC8vICAgICBjdXJyZW50UHJvamVjdEluQ29udGFpbmVyID0gbG9hZEZyb21Mb2NhbFN0b3JhZ2UoJ2hpc3RvcnknKVxuICAgIC8vIH1lbHNle1xuICAgIC8vICAgICBjdXJyZW50UHJvamVjdEluQ29udGFpbmVyID0gcHJvamVjdENvbnRhaW5lck9iai5nZXRBbGxJdGVtKCkuZmluZChwcmogPT4gcHJqLmdldFZhbHVlKCkudGl0bGUgPT09IGN1cnJlbnRQcm9qZWN0LmdldFZhbHVlKCkudGl0bGUpXG4gICAgLy8gfVxuICAgIFxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRGV0YWlsQ2xpY2soaW5kZXgpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGN1cnJlbnRQcm9qZWN0LmdldEl0ZW0oaW5kZXgpXG4gICAgICAgIGNoYW5nZURldGFpbChpdGVtKVxuICAgICAgICBvcGVuRGV0YWlsKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVFZGl0QnV0dG9uQ2xpY2soaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgZWRpdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtX19lZGl0LWRpYWxvZycpXG4gICAgICAgIGNvbnN0IHRvZG9Gb3JtID0gZWRpdERpYWxvZy5xdWVyeVNlbGVjdG9yKCcjdG9kb19fZWRpdC1mb3JtJylcbiAgICAgICAgY29uc3Qgbm90ZUZvcm0gPSBlZGl0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNub3RlX19lZGl0LWZvcm0nKVxuXG4gICAgICAgIGVkaXREaWFsb2cuc2hvd01vZGFsKClcbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdub3RlJykpIHtcbiAgICAgICAgICAgIG9wZW5UaGlzKG5vdGVGb3JtKVxuICAgICAgICAgICAgY2xvc2VUaGlzKHRvZG9Gb3JtKVxuICAgICAgICAgICAgZWRpdE5vdGVEaWFsb2dIYW5kbGVyKGN1cnJlbnRQcm9qZWN0LmdldEl0ZW0oaW5kZXgpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3BlblRoaXModG9kb0Zvcm0pXG4gICAgICAgICAgICBjbG9zZVRoaXMobm90ZUZvcm0pXG4gICAgICAgICAgICBlZGl0VG9kb0RpYWxvZ0hhbmRsZXIoY3VycmVudFByb2plY3QuZ2V0SXRlbShpbmRleCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVNb3ZlQnV0dG9uQ2xpY2soaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgbW92ZURpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtX19tb3ZlLWRpYWxvZycpXG4gICAgICAgIG1vdmVEaWFsb2cuc2hvd01vZGFsKClcbiAgICAgICAgbW92ZURpYWxvZ0hhbmRsZXIoY3VycmVudFByb2plY3QsIGl0ZW0sIGluZGV4KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1EaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybV9fZGlhbG9nJylcbiAgICAgICAgY29uZmlybURpYWxvZy5zaG93TW9kYWwoKVxuICAgICAgICBkZWxldGVDb25maXJtSGFuZGxlcihjdXJyZW50UHJvamVjdCwgaXRlbSwgaW5kZXgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUHJpb3JpdHlCdXR0b25DbGljayhpbmRleCwgcHJpb3JpdHlCdG4pIHtcbiAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSBjdXJyZW50UHJvamVjdC5nZXRJdGVtKGluZGV4KVxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGN1cnJlbnRJdGVtLmdldFZhbHVlKCkucHJpb3JpdHlcbiAgICAgICAgY29uc3QgbmV3UHJpb3JpdHkgPSBwcmlvcml0eSA9PT0gJ2xvdycgPyAnbWVkaXVtJyA6IChwcmlvcml0eSA9PT0gJ21lZGl1bScgPyAnaGlnaCcgOiAnbG93JylcbiAgICAgICAgY3VycmVudEl0ZW0uY2hhbmdlUHJpb3JpdHkobmV3UHJpb3JpdHkpXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgncHJvamVjdENvbnRhaW5lcicsIHByb2plY3RDb250YWluZXJPYmopXG4gICAgICAgIHNldFByaW9yaXR5Q2xhc3MocHJpb3JpdHlCdG4sIG5ld1ByaW9yaXR5KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94Q2hhbmdlKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1lbnVPcGVuID0gaXNNZW51T3BlbigpXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0T3BlbiA9IGlzUHJvamVjdExpc3RPcGVuKClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaW5pc2hlZEl0ZW0gPSBjdXJyZW50UHJvamVjdC5nZXRJdGVtKGluZGV4KVxuICAgICAgICAgICAgZmluaXNoZWRJdGVtLmNoYW5nZVN0YXR1cygpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaW5pc2hlZEl0ZW0uZ2V0VmFsdWUoKS5zdGF0dXMpXG5cbiAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaXN0b3J5Jykpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRlZEhpc3RvcnlPYmogPSBsb2FkRnJvbUxvY2FsU3RvcmFnZSgnaGlzdG9yeScpXG4gICAgICAgICAgICAgICAgbG9hZGVkSGlzdG9yeU9iai5hZGRJdGVtKGZpbmlzaGVkSXRlbSlcbiAgICAgICAgICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ2hpc3RvcnknLCBsb2FkZWRIaXN0b3J5T2JqKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvYWRlZEhpc3RvcnlPYmouZ2V0QWxsSXRlbSgpKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaGlzdG9yeU9iai5hZGRJdGVtKGZpbmlzaGVkSXRlbSlcbiAgICAgICAgICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ2hpc3RvcnknLCBoaXN0b3J5T2JqKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGhpc3RvcnlPYmouZ2V0QWxsSXRlbSgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5kZWxldGVJdGVtKGluZGV4KVxuICAgICAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdwcm9qZWN0Q29udGFpbmVyJywgcHJvamVjdENvbnRhaW5lck9iailcblxuICAgICAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24oaXRlbSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsb3NlVGhpcyhpdGVtKVxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRTdGF0ZShnZXRDdXJyZW50U3RhdGUoKSlcbiAgICAgICAgICAgICAgICByZW5kZXJMYXlvdXQoKVxuICAgICAgICAgICAgICAgIGlmIChtZW51T3Blbikgb3Blbk1lbnUoZmFsc2UpXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RMaXN0T3Blbikgb3BlblByb2plY3RMaXN0KClcbiAgICAgICAgICAgICAgICB1bmRvQ2hlY2tib3goY3VycmVudFByb2plY3QsIGZpbmlzaGVkSXRlbSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDUwMClcbiAgICB9XG5cbiAgICBkZXRhaWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNoYW5nZURldGFpbChjdXJyZW50UHJvamVjdClcbiAgICAgICAgb3BlbkRldGFpbCgpXG4gICAgfSlcblxuICAgIGNvbnRlbnRJdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpc1NlYXJjaFJlc3VsdCA9IGN1cnJlbnRQcm9qZWN0LmdldFZhbHVlKCkudGl0bGUgPT09ICdTZWFyY2ggUmVzdWx0J1xuICAgICAgICBpZiAoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmaW5pc2hlZCcpICYmICFpc1NlYXJjaFJlc3VsdCkge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpXG4gICAgICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZURldGFpbENsaWNrKGluZGV4KSlcblxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmVkaXRfX2J0bicpXG4gICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlRWRpdEJ1dHRvbkNsaWNrKGl0ZW0sIGluZGV4KSlcblxuICAgICAgICAgICAgY29uc3QgbW92ZUJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLm1vdmVfX2J0bicpXG4gICAgICAgICAgICBtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlTW92ZUJ1dHRvbkNsaWNrKGl0ZW0sIGluZGV4KSlcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlX19idG4nKVxuICAgICAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlRGVsZXRlQnV0dG9uQ2xpY2soaXRlbSwgaW5kZXgpKVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3RvLWRvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnByaW9yaXR5X19idG4nKVxuICAgICAgICAgICAgICAgIHByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlUHJpb3JpdHlCdXR0b25DbGljayhpbmRleCwgcHJpb3JpdHlCdG4pKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveF9faW5wdXQnKVxuICAgICAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGhhbmRsZUNoZWNrYm94Q2hhbmdlKGl0ZW0sIGluZGV4KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKVxuICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVEZXRhaWxDbGljayhpbmRleCkpXG5cbiAgICAgICAgICAgIGlmICghaXNTZWFyY2hSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVfX2J0bicpXG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlRGVsZXRlQnV0dG9uQ2xpY2soaXRlbSwgaW5kZXgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cbiIsImltcG9ydCBjcmVhdGVEZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9MYXlvdXQvY3JlYXRlRGV0YWlsXCJcbmltcG9ydCBjbG9zZVRoaXMgZnJvbSBcIi4uL2NvbW1vbi9jbG9zZVRoaXNcIlxuaW1wb3J0IGV4ZWN1dGVXaXRoQW5pbWF0aW9uIGZyb20gXCIuLi9jb21tb24vZXhlY3V0ZVdpdGhBbmltYXRpb25cIlxuaW1wb3J0IG9wZW5UaGlzIGZyb20gXCIuLi9jb21tb24vb3BlblRoaXNcIlxuXG5leHBvcnQgZnVuY3Rpb24gZGV0YWlsSGFuZGxlcigpe1xuICAgIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWwnKVxuICAgIGNvbnN0IGNsb3NlQnRuID0gZGV0YWlsLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZV9fYnRuJylcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkZXRhaWwucXVlcnlTZWxlY3RvcignLmRlbGV0ZV9fYnRuJylcblxuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlRGV0YWlsKClcbiAgICB9KVxuXG4gICAgLy8gZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgLy8gfSlcbiAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZURldGFpbChvYmope1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxuICAgIGNvbnN0IG9sZERldGFpbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsJylcbiAgICBjb25zdCBuZXdEZXRhaWwgPSBjcmVhdGVEZXRhaWwob2JqKVxuICAgIFxuICAgIGlmKG9sZERldGFpbCAhPT0gbnVsbCl7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChvbGREZXRhaWwpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEZXRhaWwpXG4gICAgICAgIG9wZW5UaGlzKG5ld0RldGFpbClcbiAgICB9ZWxzZXtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0RldGFpbClcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuRGV0YWlsKCl7XG4gICAgY29uc3QgZGV0YWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbCcpXG4gICAgY29uc3QgZGV0YWlsT3BlbiA9IGlzRGV0YWlsT3BlbigpXG4gICAgaWYoIWRldGFpbE9wZW4pe1xuICAgICAgICBkZXRhaWwuc2V0QXR0cmlidXRlKCdvcGVuaW5nJywnJylcbiAgICAgICAgb3BlblRoaXMoZGV0YWlsKVxuICAgICAgICBkZXRhaWxIYW5kbGVyKClcbiAgICB9ZWxzZXtcbiAgICAgICAgZGV0YWlsLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbmluZycpXG4gICAgICAgIGRldGFpbC5zZXRBdHRyaWJ1dGUoJ29wZW4nLCcnKVxuICAgICAgICBvcGVuVGhpcyhkZXRhaWwpXG4gICAgICAgIGRldGFpbEhhbmRsZXIoKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlRGV0YWlsKCl7XG4gICAgY29uc3QgZGV0YWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbCcpXG4gICAgZXhlY3V0ZVdpdGhBbmltYXRpb24oZGV0YWlsLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlVGhpcyhkZXRhaWwpXG4gICAgICAgIGRldGFpbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGRldGFpbClcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEZXRhaWxPcGVuKCl7XG4gICAgY29uc3QgZGV0YWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbCcpXG4gICAgaWYoZGV0YWlsID09PSBudWxsKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfWVsc2UgaWYoIWRldGFpbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Qtb2ZmJykpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59IiwiaW1wb3J0IHsgc2V0IH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgcHJvamVjdENvbnRhaW5lck9iaiBmcm9tICcuLi8uLi9jb21wb25lbnQvcHJvamVjdENvbnRhaW5lcidcbmltcG9ydCBleGVjdXRlV2l0aEFuaW1hdGlvbiBmcm9tICcuLi9jb21tb24vZXhlY3V0ZVdpdGhBbmltYXRpb24nXG5pbXBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9sb2NhbFN0b3JhZ2UnXG5pbXBvcnQgcmVuZGVyTGF5b3V0IGZyb20gJy4uL3JlbmRlcidcbmltcG9ydCB7IGNoYW5nZURldGFpbCwgaXNEZXRhaWxPcGVuLCBvcGVuRGV0YWlsIH0gZnJvbSAnLi9kZXRhaWxIYW5kbGVyJ1xuaW1wb3J0IHsgaXNNZW51T3BlbiwgaXNQcm9qZWN0TGlzdE9wZW4sIG9wZW5NZW51LCBvcGVuUHJvamVjdExpc3QgfSBmcm9tICcuL21lbnVIYW5kbGVyJ1xuaW1wb3J0IHsgZ2V0Q3VycmVudFN0YXRlLCBzZXRDdXJyZW50U3RhdGUgfSBmcm9tICcuLi9zdGF0ZSdcblxuZnVuY3Rpb24gcG9wdWxhdGVUb2RvRm9ybSh0b2RvRm9ybSwgaXRlbSkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBzdGFydERhdGUsIGR1ZURhdGV9ID0gaXRlbS5nZXRWYWx1ZSgpXG4gICAgdG9kb0Zvcm0ucXVlcnlTZWxlY3RvcignLnRvZG9fX3RpdGxlLWlucHV0JykudmFsdWUgPSB0aXRsZVxuICAgIHRvZG9Gb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19kZXMtaW5wdXQnKS52YWx1ZSA9IGRlc2NyaXB0aW9uXG4gICAgdG9kb0Zvcm0ucXVlcnlTZWxlY3RvcignLnRvZG9fX3N0YXJ0LWlucHV0JykudmFsdWUgPSBuZXcgRGF0ZShzdGFydERhdGUpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgIHRvZG9Gb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19kdWUtaW5wdXQnKS52YWx1ZSA9IG5ldyBEYXRlKGR1ZURhdGUpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZU5vdGVGb3JtKG5vdGVGb3JtLCBpdGVtKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSA9IGl0ZW0uZ2V0VmFsdWUoKVxuICAgIG5vdGVGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5ub3RlX190aXRsZS1pbnB1dCcpLnZhbHVlID0gdGl0bGVcbiAgICBub3RlRm9ybS5xdWVyeVNlbGVjdG9yKCcubm90ZV9fZGVzLWlucHV0JykudmFsdWUgPSBkZXNjcmlwdGlvblxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RGb3JtKHByb2plY3RGb3JtLCBpdGVtKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSA9IGl0ZW0uZ2V0VmFsdWUoKVxuICAgIHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X190aXRsZS1pbnB1dCcpLnZhbHVlID0gdGl0bGVcbiAgICBwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fZGVzLWlucHV0JykudmFsdWUgPSBkZXNjcmlwdGlvblxufVxuXG5cbmZ1bmN0aW9uIGF0dGFjaEZvcm1MaXN0ZW5lcnMoZWRpdERpYWxvZywgaXRlbSwgc2F2ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBzYXZlQnRuID0gZWRpdERpYWxvZy5xdWVyeVNlbGVjdG9yKCcuYWRkX19idG4nKVxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGVkaXREaWFsb2cucXVlcnlTZWxlY3RvcignLmNsb3NlX19idG4nKVxuXG4gICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24oZWRpdERpYWxvZywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVudU9wZW4gPSBpc01lbnVPcGVuKClcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0T3BlbiA9IGlzUHJvamVjdExpc3RPcGVuKClcbiAgICAgICAgICAgIC8vIGNvbnN0IGRldGFpbE9wZW4gPSBpc0RldGFpbE9wZW4oKVxuICAgICAgICAgICAgc2F2ZUhhbmRsZXIoaXRlbSlcbiAgICAgICAgICAgIGVkaXREaWFsb2cuY2xvc2UoJ3NhdmVkJylcbiAgICAgICAgICAgIHNldEN1cnJlbnRTdGF0ZShnZXRDdXJyZW50U3RhdGUoKSlcbiAgICAgICAgICAgIHJlbmRlckxheW91dCgpXG4gICAgICAgICAgICBpZiAobWVudU9wZW4pIG9wZW5NZW51KGZhbHNlKVxuICAgICAgICAgICAgLy8gaWYgKGRldGFpbE9wZW4pe1xuICAgICAgICAgICAgICAgIGNoYW5nZURldGFpbChpdGVtKVxuICAgICAgICAgICAgICAgIG9wZW5EZXRhaWwoKVxuICAgICAgICAgICAgLy8gfSBcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TGlzdE9wZW4pIG9wZW5Qcm9qZWN0TGlzdCgpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24oZWRpdERpYWxvZywgKCkgPT4ge1xuICAgICAgICAgICAgZWRpdERpYWxvZy5jbG9zZSgnY2FuY2VsbGVkJylcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRvZG9EaWFsb2dIYW5kbGVyKGl0ZW0pIHtcbiAgICBjb25zdCBlZGl0RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1fX2VkaXQtZGlhbG9nJylcbiAgICBjb25zdCB0b2RvRm9ybSA9IGVkaXREaWFsb2cucXVlcnlTZWxlY3RvcignI3RvZG9fX2VkaXQtZm9ybScpXG4gICAgcG9wdWxhdGVUb2RvRm9ybSh0b2RvRm9ybSwgaXRlbSlcbiAgICBhdHRhY2hGb3JtTGlzdGVuZXJzKGVkaXREaWFsb2csIGl0ZW0sIChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBzdGFydERhdGUsIGR1ZURhdGV9ID0gdG9kb0Zvcm0uZWxlbWVudHNcbiAgICAgICAgaXRlbS5jaGFuZ2VWYWx1ZSh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIHN0YXJ0RGF0ZS52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgaXRlbS5nZXRWYWx1ZSgpLnByaW9yaXR5KVxuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ3Byb2plY3RDb250YWluZXInLCBwcm9qZWN0Q29udGFpbmVyT2JqKVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0Tm90ZURpYWxvZ0hhbmRsZXIoaXRlbSkge1xuICAgIGNvbnN0IGVkaXREaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbV9fZWRpdC1kaWFsb2cnKVxuICAgIGNvbnN0IG5vdGVGb3JtID0gZWRpdERpYWxvZy5xdWVyeVNlbGVjdG9yKCcjbm90ZV9fZWRpdC1mb3JtJylcbiAgICBwb3B1bGF0ZU5vdGVGb3JtKG5vdGVGb3JtLCBpdGVtKVxuICAgIGF0dGFjaEZvcm1MaXN0ZW5lcnMoZWRpdERpYWxvZywgaXRlbSwgKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSA9IG5vdGVGb3JtLmVsZW1lbnRzXG4gICAgICAgIGl0ZW0uY2hhbmdlVmFsdWUodGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlKVxuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ3Byb2plY3RDb250YWluZXInLCBwcm9qZWN0Q29udGFpbmVyT2JqKVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0UHJvamVjdERpYWxvZ0hhbmRsZXIoaXRlbSkge1xuICAgIGNvbnN0IGVkaXREaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbV9fZWRpdC1kaWFsb2cnKVxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZWRpdERpYWxvZy5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdF9fZWRpdC1mb3JtJylcbiAgICBwb3B1bGF0ZVByb2plY3RGb3JtKHByb2plY3RGb3JtLCBpdGVtKVxuICAgIGF0dGFjaEZvcm1MaXN0ZW5lcnMoZWRpdERpYWxvZywgaXRlbSwgKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSA9IHByb2plY3RGb3JtLmVsZW1lbnRzXG4gICAgICAgIGl0ZW0uY2hhbmdlVmFsdWUodGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlKVxuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ3Byb2plY3RDb250YWluZXInLCBwcm9qZWN0Q29udGFpbmVyT2JqKVxuICAgIH0pXG59XG4iLCJpbXBvcnQgZXhlY3V0ZVdpdGhBbmltYXRpb24gZnJvbSBcIi4uL2NvbW1vbi9leGVjdXRlV2l0aEFuaW1hdGlvblwiXG5pbXBvcnQgaXRlbURpYWxvZ0hhbmRsZXIgZnJvbSBcIi4vaXRlbURpYWxvZ0hhbmRsZXJcIlxuaW1wb3J0IHsgY2xvc2VNZW51LCBvcGVuTWVudSB9IGZyb20gXCIuL21lbnVIYW5kbGVyXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVySGFuZGxlcigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpXG4gICAgY29uc3QgbWVudUJ0biA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcubWVudV9fYnRuJylcbiAgICBjb25zdCBhZGRCdG4gPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLmFkZF9fYnRuJylcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKVxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2JhcicpXG5cbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihtZW51LmNsYXNzTGlzdC5jb250YWlucygnZC1vZmYnKSl7XG4gICAgICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbihuYXZCYXIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBvcGVuTWVudSh0cnVlKVxuICAgICAgICAgICAgfSkgICAgICAgICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24obWVudSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsb3NlTWVudSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbURpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtX19hZGQtZGlhbG9nJylcbiAgICAgICAgaXRlbURpYWxvZy5zaG93TW9kYWwoKVxuICAgICAgICBpdGVtRGlhbG9nSGFuZGxlcigpXG4gICAgfSlcbn1cbiIsImltcG9ydCBvcGVuVGhpcyBmcm9tICcuLi9jb21tb24vb3BlblRoaXMnXG5pbXBvcnQgY2xvc2VUaGlzIGZyb20gJy4uL2NvbW1vbi9jbG9zZVRoaXMnXG5pbXBvcnQgdG9kbyBmcm9tICcuLi8uLi9jb21wb25lbnQvdG9kbydcbmltcG9ydCBub3RlIGZyb20gJy4uLy4uL2NvbXBvbmVudC9ub3RlJ1xuaW1wb3J0IHByb2plY3RDb250YWluZXJPYmogZnJvbSAnLi4vLi4vY29tcG9uZW50L3Byb2plY3RDb250YWluZXInXG5pbXBvcnQgcmVuZGVyTGF5b3V0IGZyb20gJy4uL3JlbmRlcidcbmltcG9ydCB7IGlzTWVudU9wZW4sIGlzUHJvamVjdExpc3RPcGVuLCBvcGVuTWVudSwgb3BlblByb2plY3RMaXN0IH0gZnJvbSAnLi9tZW51SGFuZGxlcidcbmltcG9ydCB7IGlzRGV0YWlsT3Blbiwgb3BlbkRldGFpbCB9IGZyb20gJy4vZGV0YWlsSGFuZGxlcidcbmltcG9ydCBleGVjdXRlV2l0aEFuaW1hdGlvbiBmcm9tICcuLi9jb21tb24vZXhlY3V0ZVdpdGhBbmltYXRpb24nXG5pbXBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9sb2NhbFN0b3JhZ2UnXG5pbXBvcnQgeyBzZXRDdXJyZW50U3RhdGUgfSBmcm9tICcuLi9zdGF0ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXRlbURpYWxvZ0hhbmRsZXIoKSB7XG4gICAgY29uc3QgaXRlbURpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtX19hZGQtZGlhbG9nJylcbiAgICBjb25zdCBzZWxlY3RJbnB1dCA9IGl0ZW1EaWFsb2cucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faXRlbS1pbnB1dCcpXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb19fYWRkLWZvcm0nKVxuICAgIGNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVfX2FkZC1mb3JtJylcbiAgICBjb25zdCBjbG9zZUJ0biA9IGl0ZW1EaWFsb2cucXVlcnlTZWxlY3RvcignLmNsb3NlX19idG4nKVxuICAgIGNvbnN0IGFkZEJ0biA9IGl0ZW1EaWFsb2cucXVlcnlTZWxlY3RvcignLmFkZF9fYnRuJylcblxuICAgIGZ1bmN0aW9uIHN3aXRjaEZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGZvcm1Ub1Nob3cgPSBzZWxlY3RJbnB1dC52YWx1ZSA9PT0gJ3RvLWRvJyA/IHRvZG9Gb3JtIDogbm90ZUZvcm1cbiAgICAgICAgY29uc3QgZm9ybVRvSGlkZSA9IHNlbGVjdElucHV0LnZhbHVlID09PSAndG8tZG8nID8gbm90ZUZvcm0gOiB0b2RvRm9ybVxuICAgICAgICBvcGVuVGhpcyhmb3JtVG9TaG93KVxuICAgICAgICBjbG9zZVRoaXMoZm9ybVRvSGlkZSlcbiAgICB9XG5cbiAgICBzZWxlY3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzd2l0Y2hGb3JtKVxuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKGl0ZW1EaWFsb2csICgpID0+IHtcbiAgICAgICAgICAgIGl0ZW1EaWFsb2cuY2xvc2UoJ2NhbmNlbGVkJylcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxsZWQgPSBjaGVja1ZhbHVlKClcbiAgICAgICAgaWYoZmlsbGVkKXtcbiAgICAgICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKGl0ZW1EaWFsb2csICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51T3BlbiA9IGlzTWVudU9wZW4oKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbE9wZW4gPSBpc0RldGFpbE9wZW4oKVxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0T3BlbiA9IGlzUHJvamVjdExpc3RPcGVuKClcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0SW5wdXQudmFsdWUgPT09ICd0by1kbycpIGFkZFRvZG8oKVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdElucHV0LnZhbHVlID09PSAnbm90ZScpIGFkZE5vdGUoKVxuICAgICAgICAgICAgICAgIGl0ZW1EaWFsb2cuY2xvc2UoJ2FkZGVkJylcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50U3RhdGUoZ2V0U2VsZWN0ZWRQcm9qZWN0KCkpXG4gICAgICAgICAgICAgICAgcmVuZGVyTGF5b3V0KClcbiAgICAgICAgICAgICAgICBpZiAobWVudU9wZW4pIG9wZW5NZW51KGZhbHNlKVxuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0TGlzdE9wZW4pIG9wZW5Qcm9qZWN0TGlzdCgpXG4gICAgICAgICAgICAgICAgaWYgKGRldGFpbE9wZW4pIG9wZW5EZXRhaWwoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBhZGRUb2RvKCkge1xuICAgICAgICBjb25zdCBuZXdUb2RvID0gdG9kbygpXG4gICAgICAgIHBvcHVsYXRlVG9kbyhuZXdUb2RvLCB0b2RvRm9ybSlcbiAgICAgICAgZ2V0U2VsZWN0ZWRQcm9qZWN0KCkuYWRkSXRlbShuZXdUb2RvKVxuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ3Byb2plY3RDb250YWluZXInLCBwcm9qZWN0Q29udGFpbmVyT2JqKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZE5vdGUoKSB7XG4gICAgICAgIGNvbnN0IG5ld05vdGUgPSBub3RlKClcbiAgICAgICAgcG9wdWxhdGVOb3RlKG5ld05vdGUsIG5vdGVGb3JtKVxuICAgICAgICBnZXRTZWxlY3RlZFByb2plY3QoKS5hZGRJdGVtKG5ld05vdGUpXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgncHJvamVjdENvbnRhaW5lcicsIHByb2plY3RDb250YWluZXJPYmopXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVUb2RvKGl0ZW0sIGZvcm0pIHtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnRvZG9fX3RpdGxlLWlucHV0JylcbiAgICAgICAgY29uc3QgZGVzSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19kZXMtaW5wdXQnKVxuICAgICAgICBjb25zdCBzdGFydElucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kb19fc3RhcnQtaW5wdXQnKVxuICAgICAgICBjb25zdCBkdWVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnRvZG9fX2R1ZS1pbnB1dCcpXG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19wcmlvcml0eS1pbnB1dCcpXG4gICAgICAgIGl0ZW0uY2hhbmdlVmFsdWUodGl0bGVJbnB1dC52YWx1ZSwgZGVzSW5wdXQudmFsdWUsIHN0YXJ0SW5wdXQudmFsdWUsIGR1ZUlucHV0LnZhbHVlLCBwcmlvcml0eUlucHV0LnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlTm90ZShpdGVtLCBmb3JtKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5ub3RlX190aXRsZS1pbnB1dCcpXG4gICAgICAgIGNvbnN0IGRlc0lucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcubm90ZV9fZGVzLWlucHV0JylcbiAgICAgICAgaXRlbS5jaGFuZ2VWYWx1ZSh0aXRsZUlucHV0LnZhbHVlLCBkZXNJbnB1dC52YWx1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1ZhbHVlKCl7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBzZWxlY3RJbnB1dC52YWx1ZSA9PT0gJ3RvLWRvJyA/IHRvZG9Gb3JtIDogbm90ZUZvcm1cbiAgICAgICAgaWYoc2VsZWN0SW5wdXQudmFsdWUgPT09ICd0by1kbycpe1xuICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnRvZG9fX3RpdGxlLWlucHV0JylcbiAgICAgICAgICAgIGNvbnN0IGRlc0lucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kb19fZGVzLWlucHV0JylcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19zdGFydC1pbnB1dCcpXG4gICAgICAgICAgICBjb25zdCBkdWVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnRvZG9fX2R1ZS1pbnB1dCcpXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kb19fcHJpb3JpdHktaW5wdXQnKVxuXG4gICAgICAgICAgICByZXR1cm4gdGl0bGVJbnB1dC52YWx1ZSYmZGVzSW5wdXQudmFsdWUmJnN0YXJ0SW5wdXQudmFsdWUmJmR1ZUlucHV0LnZhbHVlJiZwcmlvcml0eUlucHV0LnZhbHVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLm5vdGVfX3RpdGxlLWlucHV0JylcbiAgICAgICAgICAgIGNvbnN0IGRlc0lucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcubm90ZV9fZGVzLWlucHV0JylcblxuICAgICAgICAgICAgcmV0dXJuIHRpdGxlSW5wdXQudmFsdWUmJmRlc0lucHV0LnZhbHVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZWxlY3RlZFByb2plY3QoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1fX3Byb2plY3QtaW5wdXQnKVxuICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gcHJvamVjdExpc3QudmFsdWVcbiAgICAgICAgcmV0dXJuIHByb2plY3RDb250YWluZXJPYmouZ2V0QWxsSXRlbSgpLmZpbmQocHJqID0+IHByai5nZXRWYWx1ZSgpLnRpdGxlID09PSBzZWxlY3RlZFZhbHVlKVxuICAgIH1cbn1cbiIsImltcG9ydCBpbmJveCBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0RlZmF1bHQgUHJvamVjdC9pbmJveFwiXG5pbXBvcnQgdG9kYXkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9EZWZhdWx0IFByb2plY3QvdG9kYXlcIlxuaW1wb3J0IGhpc3RvcnkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9EZWZhdWx0IFByb2plY3QvaGlzdG9yeVwiXG5pbXBvcnQgeyBzZXRDdXJyZW50U3RhdGUgfSBmcm9tIFwiLi4vc3RhdGVcIlxuaW1wb3J0IHJlbmRlckxheW91dCBmcm9tIFwiLi4vcmVuZGVyXCJcbmltcG9ydCBwcm9qZWN0RGlhbG9nSGFuZGxlciBmcm9tIFwiLi9wcm9qZWN0RGlhbG9nSGFuZGxlclwiXG5pbXBvcnQgcHJvamVjdENvbnRhaW5lck9iaiBmcm9tIFwiLi4vLi4vY29tcG9uZW50L3Byb2plY3RDb250YWluZXJcIlxuaW1wb3J0IGNsb3NlVGhpcyBmcm9tIFwiLi4vY29tbW9uL2Nsb3NlVGhpc1wiXG5pbXBvcnQgb3BlblRoaXMgZnJvbSBcIi4uL2NvbW1vbi9vcGVuVGhpc1wiXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0Q29uZmlybUhhbmRsZXIgfSBmcm9tIFwiLi9jb25maXJtRGlhbG9nSGFuZGxlclwiXG5pbXBvcnQgeyBlZGl0UHJvamVjdERpYWxvZ0hhbmRsZXIgfSBmcm9tIFwiLi9lZGl0RGlhbG9nSGFuZGxlclwiXG5pbXBvcnQgc2VhcmNoUmVzdWx0IGZyb20gXCIuLi8uLi9jb21wb25lbnQvRGVmYXVsdCBQcm9qZWN0L3NlYXJjaFJlc3VsdFwiXG5pbXBvcnQgc2VhcmNoQWxsSXRlbXMgZnJvbSBcIi4uL2NvbW1vbi9zZWFyY2hBbGxJdGVtc1wiXG5pbXBvcnQgYXBwZWFyYW5jZUhhbmRsZXIgZnJvbSBcIi4vYXBwZWFyYW5jZUhhbmRsZXJcIlxuaW1wb3J0IHsgbG9hZEZyb21Mb2NhbFN0b3JhZ2UsIHNhdmVUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9sb2NhbFN0b3JhZ2VcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51SGFuZGxlcigpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKVxuICAgIGNvbnN0IGluYm94TmF2ID0gbWVudS5xdWVyeVNlbGVjdG9yKCcuaW5ib3hfX25hdicpXG4gICAgY29uc3QgdG9kYXlOYXYgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy50b2RheV9fbmF2JylcbiAgICBjb25zdCBwcm9qZWN0TmF2ID0gbWVudS5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fbmF2JylcbiAgICBjb25zdCBoaXN0b3J5TmF2ID0gbWVudS5xdWVyeVNlbGVjdG9yKCcuaGlzdG9yeV9fbmF2JylcbiAgICBjb25zdCBwcm9qZWN0QWRkQnV0dG9uID0gbWVudS5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fYWRkLWJ0biBidXR0b24nKVxuICAgIGNvbnN0IHByb2plY3RMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdF9fbGlzdC1pdGVtJylcbiAgICBjb25zdCBzZWFyY2hCdG4gPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2ljb24nKVxuICAgIGNvbnN0IGFwcGVhcmFuY2VCdG4gPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19ib3QnKVxuXG4gICAgaW5ib3hOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBuYXZDbGlja0hhbmRsZXIocHJvamVjdENvbnRhaW5lck9iai5nZXRJdGVtKDApKSlcbiAgICB0b2RheU5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG5hdkNsaWNrSGFuZGxlcihwcm9qZWN0Q29udGFpbmVyT2JqLmdldEl0ZW0oMSkpKVxuICAgIHByb2plY3ROYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVQcm9qZWN0TGlzdClcbiAgICBoaXN0b3J5TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlzdG9yeScpKXtcbiAgICAgICAgICAgIG5hdkNsaWNrSGFuZGxlcihsb2FkRnJvbUxvY2FsU3RvcmFnZSgnaGlzdG9yeScpKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG5hdkNsaWNrSGFuZGxlcihoaXN0b3J5KVxuICAgICAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdoaXN0b3J5JywgaGlzdG9yeSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcHJvamVjdEFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByb2plY3RBZGRCdXR0b25DbGljaylcblxuICAgIHByb2plY3RMaXN0SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKVxuICAgICAgICBjb25zdCBlZGl0QnRuID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZWRpdF9fYnRuJylcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlX19idG4nKVxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RDb250YWluZXJPYmouZ2V0QWxsSXRlbSgpXG4gICAgICAgIGNvbnN0IHRhcmdldFByb2plY3QgPSBwcm9qZWN0cy5maW5kKHByaiA9PiBwcmouZ2V0VmFsdWUoKS50aXRsZSA9PT0gaXRlbS50ZXh0Q29udGVudClcblxuICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZVRpdGxlQ2xpY2sodGFyZ2V0UHJvamVjdCkpXG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVFZGl0QnV0dG9uQ2xpY2sodGFyZ2V0UHJvamVjdCkpXG4gICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrKHRpdGxlLnRleHRDb250ZW50KSlcbiAgICB9KVxuXG4gICAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2VhcmNoQnV0dG9uQ2xpY2spXG5cbiAgICBhcHBlYXJhbmNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhcHBlYXJhbmNlSGFuZGxlcilcbn1cblxuZnVuY3Rpb24gbmF2Q2xpY2tIYW5kbGVyKHByb2plY3QpIHtcbiAgICBjb25zdCBsaXN0T3BlbiA9IGlzUHJvamVjdExpc3RPcGVuKClcbiAgICBzZXRDdXJyZW50U3RhdGUocHJvamVjdClcbiAgICByZW5kZXJMYXlvdXQoKVxuICAgIG9wZW5NZW51KGZhbHNlKVxuICAgIGlmKGxpc3RPcGVuKSB0b2dnbGVQcm9qZWN0TGlzdCgpXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVByb2plY3RMaXN0KCkge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudSB1bCcpXG4gICAgbGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdkLW9mZicpXG4gICAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3cnKVxuICAgIGFycm93LmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZS0xODAnKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0QWRkQnV0dG9uQ2xpY2soKSB7XG4gICAgY29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0X19hZGQtZGlhbG9nJylcbiAgICBwcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpXG4gICAgcHJvamVjdERpYWxvZy5jbGFzc0xpc3QuYWRkKCdkZicpXG4gICAgcHJvamVjdERpYWxvZ0hhbmRsZXIoKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUaXRsZUNsaWNrKHByb2plY3QpIHtcbiAgICBzZXRDdXJyZW50U3RhdGUocHJvamVjdClcbiAgICByZW5kZXJMYXlvdXQoKVxuICAgIG9wZW5NZW51KGZhbHNlKVxuICAgIG9wZW5Qcm9qZWN0TGlzdCgpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVkaXRCdXR0b25DbGljayhwcm9qZWN0KSB7XG4gICAgY29uc3QgZWRpdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtX19lZGl0LWRpYWxvZycpXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBlZGl0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvX19lZGl0LWZvcm0nKVxuICAgIGNvbnN0IG5vdGVGb3JtID0gZWRpdERpYWxvZy5xdWVyeVNlbGVjdG9yKCcjbm90ZV9fZWRpdC1mb3JtJylcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGVkaXREaWFsb2cucXVlcnlTZWxlY3RvcignI3Byb2plY3RfX2VkaXQtZm9ybScpXG5cbiAgICBlZGl0RGlhbG9nLnNob3dNb2RhbCgpXG4gICAgb3BlblRoaXMocHJvamVjdEZvcm0pXG4gICAgY2xvc2VUaGlzKG5vdGVGb3JtKVxuICAgIGNsb3NlVGhpcyh0b2RvRm9ybSlcbiAgICBlZGl0UHJvamVjdERpYWxvZ0hhbmRsZXIocHJvamVjdClcbiAgICBvcGVuUHJvamVjdExpc3QoKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVCdXR0b25DbGljayh0aXRsZSkge1xuICAgIGNvbnN0IGNvbmZpcm1EaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybV9fZGlhbG9nJylcbiAgICBjb25maXJtRGlhbG9nLnNob3dNb2RhbCgpXG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0Q29udGFpbmVyT2JqLmdldEFsbEl0ZW0oKS5maW5kSW5kZXgocHJqID0+IHByai5nZXRWYWx1ZSgpLnRpdGxlID09PSB0aXRsZSlcbiAgICBkZWxldGVQcm9qZWN0Q29uZmlybUhhbmRsZXIocHJvamVjdENvbnRhaW5lck9iaiwgaW5kZXgpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNlYXJjaEJ1dHRvbkNsaWNrKCkge1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9faW5wdXQnKVxuICAgIGlmIChzZWFyY2hJbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0T2JqID0gc2VhcmNoUmVzdWx0KClcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHNlYXJjaEFsbEl0ZW1zKHNlYXJjaElucHV0LnZhbHVlKVxuICAgICAgICByZXN1bHRzLmZvckVhY2goaXRlbSA9PiBzZWFyY2hSZXN1bHRPYmouYWRkSXRlbShpdGVtKSlcbiAgICAgICAgc2V0Q3VycmVudFN0YXRlKHNlYXJjaFJlc3VsdE9iailcbiAgICAgICAgcmVuZGVyTGF5b3V0KClcbiAgICAgICAgb3Blbk1lbnUoZmFsc2UpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9qZWN0TGlzdE9wZW4oKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51IHVsJylcbiAgICByZXR1cm4gIWxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdkLW9mZicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuUHJvamVjdExpc3QoKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51IHVsJylcbiAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdycpXG4gICAgbGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdkLW9mZicpXG4gICAgYXJyb3cuY2xhc3NMaXN0LmFkZCgncm90YXRlLTE4MCcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01lbnVPcGVuKCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpXG4gICAgcmV0dXJuICFtZW51LmNsYXNzTGlzdC5jb250YWlucygnZC1vZmYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb3Blbk1lbnUoYW5pbWF0ZWQpIHtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19iYXInKVxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpXG4gICAgY2xvc2VUaGlzKG5hdkJhcilcbiAgICBpZiAoYW5pbWF0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIG9wZW5UaGlzKG1lbnUpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdzbGlkZUluTGVmdCcpXG4gICAgICAgIG9wZW5UaGlzKG1lbnUpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2JhcicpXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JylcbiAgICBjbG9zZVRoaXMobWVudSlcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVJbkxlZnQnKVxuICAgIG9wZW5UaGlzKG5hdkJhcilcbn1cbiIsImltcG9ydCBwcm9qZWN0Q29udGFpbmVyT2JqIGZyb20gXCIuLi8uLi9jb21wb25lbnQvcHJvamVjdENvbnRhaW5lclwiXG5pbXBvcnQgY2xvc2VUaGlzIGZyb20gXCIuLi9jb21tb24vY2xvc2VUaGlzXCJcbmltcG9ydCBleGVjdXRlV2l0aEFuaW1hdGlvbiBmcm9tIFwiLi4vY29tbW9uL2V4ZWN1dGVXaXRoQW5pbWF0aW9uXCJcbmltcG9ydCB7IHNhdmVUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9sb2NhbFN0b3JhZ2VcIlxuaW1wb3J0IHJlbmRlckxheW91dCBmcm9tIFwiLi4vcmVuZGVyXCJcbmltcG9ydCB7IGlzTWVudU9wZW4sIGlzUHJvamVjdExpc3RPcGVuLCBvcGVuTWVudSwgb3BlblByb2plY3RMaXN0IH0gZnJvbSBcIi4vbWVudUhhbmRsZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb3ZlRGlhbG9nSGFuZGxlcihjdXJyLCBpdGVtLCBpbmRleCl7XG4gICAgY29uc3QgbW92ZURpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtX19tb3ZlLWRpYWxvZycpXG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gbW92ZURpYWxvZy5xdWVyeVNlbGVjdG9yKCcuaXRlbV9fcHJvamVjdC1pbnB1dCcpXG4gICAgY29uc3Qgc2F2ZUJ0biA9IG1vdmVEaWFsb2cucXVlcnlTZWxlY3RvcignLmFkZF9fYnRuJylcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBtb3ZlRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZV9fYnRuJylcblxuICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdENvbnRhaW5lck9iai5nZXRBbGxJdGVtKClcblxuICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lbnVPcGVuID0gaXNNZW51T3BlbigpXG4gICAgICAgIGNvbnN0IGxpc3RPcGVuID0gaXNQcm9qZWN0TGlzdE9wZW4oKVxuICAgICAgICBjb25zdCBtb3ZlSXRlbSA9IGN1cnIuZ2V0SXRlbShpbmRleClcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9qZWN0cy5maW5kKHByaiA9PiBwcmouZ2V0VmFsdWUoKS50aXRsZSA9PT0gcHJvamVjdElucHV0LnZhbHVlKVxuICAgICAgICBjdXJyLmRlbGV0ZUl0ZW0oaW5kZXgpXG4gICAgICAgIGRlc3RpbmF0aW9uLmFkZEl0ZW0obW92ZUl0ZW0pXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgncHJvamVjdENvbnRhaW5lcicsIHByb2plY3RDb250YWluZXJPYmopXG4gICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKG1vdmVEaWFsb2csICgpID0+IHtcbiAgICAgICAgICAgIG1vdmVEaWFsb2cuY2xvc2UoJ3NhdmVkJylcbiAgICAgICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKGl0ZW0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBjbG9zZVRoaXMoaXRlbSlcbiAgICAgICAgICAgICAgICByZW5kZXJMYXlvdXQoKVxuICAgICAgICAgICAgICAgIGlmKG1lbnVPcGVuKSBvcGVuTWVudShmYWxzZSlcbiAgICAgICAgICAgICAgICBpZihsaXN0T3Blbikgb3BlblByb2plY3RMaXN0KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24obW92ZURpYWxvZywgKCkgPT4ge1xuICAgICAgICAgICAgbW92ZURpYWxvZy5jbG9zZSgnY2FuY2VsZWQnKVxuICAgICAgICB9KVxuICAgIH0pXG59IiwiaW1wb3J0IGhpc3RvcnkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9EZWZhdWx0IFByb2plY3QvaGlzdG9yeVwiXG5pbXBvcnQgeyBzZXRDdXJyZW50U3RhdGUgfSBmcm9tIFwiLi4vc3RhdGVcIlxuaW1wb3J0IHJlbmRlckxheW91dCBmcm9tIFwiLi4vcmVuZGVyXCJcbmltcG9ydCB7IG9wZW5NZW51LCBvcGVuUHJvamVjdExpc3QgfSBmcm9tIFwiLi9tZW51SGFuZGxlclwiXG5pbXBvcnQgYXBwZWFyYW5jZUhhbmRsZXIgZnJvbSBcIi4vYXBwZWFyYW5jZUhhbmRsZXJcIlxuaW1wb3J0IHsgbG9hZEZyb21Mb2NhbFN0b3JhZ2UsIHNhdmVUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9sb2NhbFN0b3JhZ2VcIlxuaW1wb3J0IHByb2plY3RDb250YWluZXJPYmogZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9wcm9qZWN0Q29udGFpbmVyXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2SGFuZGxlcigpe1xuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2JhcicpXG4gICAgY29uc3Qgc2VhcmNoTmF2ID0gbmF2QmFyLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX25hdicpXG4gICAgY29uc3QgaW5ib3hOYXYgPSBuYXZCYXIucXVlcnlTZWxlY3RvcignLmluYm94X19uYXYnKVxuICAgIGNvbnN0IHRvZGF5TmF2ID0gbmF2QmFyLnF1ZXJ5U2VsZWN0b3IoJy50b2RheV9fbmF2JylcbiAgICBjb25zdCBwcm9qZWN0TmF2ID0gbmF2QmFyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19uYXYnKVxuICAgIGNvbnN0IGhpc3RvcnlOYXYgPSBuYXZCYXIucXVlcnlTZWxlY3RvcignLmhpc3RvcnlfX25hdicpXG4gICAgY29uc3QgYXBwZWFyYW5jZUJ0biA9IG5hdkJhci5xdWVyeVNlbGVjdG9yKCcuYXBwZWFyYW5jZV9fbW9kZScpXG5cbiAgICBzZWFyY2hOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTWVudSgpKVxuICAgIFxuICAgIGluYm94TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50U3RhdGUocHJvamVjdENvbnRhaW5lck9iai5nZXRJdGVtKDApKVxuICAgICAgICByZW5kZXJMYXlvdXQoKVxuICAgIH0pXG4gICAgdG9kYXlOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRTdGF0ZShwcm9qZWN0Q29udGFpbmVyT2JqLmdldEl0ZW0oMSkpXG4gICAgICAgIHJlbmRlckxheW91dCgpXG4gICAgfSlcbiAgICBwcm9qZWN0TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBvcGVuTWVudSgpXG4gICAgICAgIG9wZW5Qcm9qZWN0TGlzdCgpXG4gICAgfSlcbiAgICBoaXN0b3J5TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlzdG9yeScpKXtcbiAgICAgICAgICAgIHNldEN1cnJlbnRTdGF0ZShsb2FkRnJvbUxvY2FsU3RvcmFnZSgnaGlzdG9yeScpKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNldEN1cnJlbnRTdGF0ZShoaXN0b3J5KVxuICAgICAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdoaXN0b3J5JywgaGlzdG9yeSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyTGF5b3V0KClcbiAgICB9KVxuXG4gICAgYXBwZWFyYW5jZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcGVhcmFuY2VIYW5kbGVyKVxufVxuXG4iLCIvLyBGb3IgcHJvamVjdERpYWxvZ0hhbmRsZXJcbmltcG9ydCBwcm9qZWN0IGZyb20gXCIuLi8uLi9jb21wb25lbnQvcHJvamVjdFwiXG5pbXBvcnQgcHJvamVjdENvbnRhaW5lck9iaiBmcm9tIFwiLi4vLi4vY29tcG9uZW50L3Byb2plY3RDb250YWluZXJcIlxuaW1wb3J0IGV4ZWN1dGVXaXRoQW5pbWF0aW9uIGZyb20gXCIuLi9jb21tb24vZXhlY3V0ZVdpdGhBbmltYXRpb25cIlxuaW1wb3J0IHsgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2xvY2FsU3RvcmFnZVwiXG5pbXBvcnQgcmVuZGVyTGF5b3V0IGZyb20gXCIuLi9yZW5kZXJcIlxuaW1wb3J0IHsgc2V0Q3VycmVudFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlXCJcbmltcG9ydCB7IG9wZW5NZW51LCBvcGVuUHJvamVjdExpc3QgfSBmcm9tIFwiLi9tZW51SGFuZGxlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3REaWFsb2dIYW5kbGVyKCkge1xuICAgIGNvbnN0IHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF9fYWRkLWRpYWxvZycpXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF9fYWRkLWZvcm0nKVxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X190aXRsZS1pbnB1dCcpXG4gICAgY29uc3QgZGVzSW5wdXQgPSBwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fZGVzLWlucHV0JylcbiAgICBjb25zdCBhZGRCdG4gPSBwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKCcuYWRkX19idG4nKVxuICAgIGNvbnN0IGNsb3NlQnRuID0gcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcignLmNsb3NlX19idG4nKVxuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKHByb2plY3REaWFsb2csICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLnJlbW92ZUF0dHJpYnV0ZSgnbm92YWxpZGF0ZScpXG4gICAgICAgICAgICBwcm9qZWN0RGlhbG9nLmNsb3NlKCdjYW5jZWxlZCcpXG4gICAgICAgICAgICBwcm9qZWN0RGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2RmJylcbiAgICAgICAgICAgIHByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScsICd0cnVlJylcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfSlcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0Q29udGFpbmVyT2JqLmdldEFsbEl0ZW0oKVxuICAgICAgICBjb25zdCBuYW1lVmFsdWUgPSBuYW1lSW5wdXQudmFsdWUudHJpbSgpXG4gICAgICAgIGNvbnN0IGRlc1ZhbHVlID0gZGVzSW5wdXQudmFsdWUudHJpbSgpXG4gICAgICAgIFxuICAgICAgICBpZiAobmFtZVZhbHVlICYmIGRlc1ZhbHVlKSB7XG4gICAgICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbihwcm9qZWN0RGlhbG9nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0ID0gYWxsUHJvamVjdHMuZmluZChwcmogPT4gcHJqLmdldFZhbHVlKCkudGl0bGUgPT09IG5hbWVWYWx1ZSlcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdCgpXG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nUHJvamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LmNoYW5nZVZhbHVlKG5hbWVWYWx1ZSArICcxJywgZGVzVmFsdWUpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdC5jaGFuZ2VWYWx1ZShuYW1lVmFsdWUsIGRlc1ZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyT2JqLmFkZEl0ZW0obmV3UHJvamVjdClcbiAgICAgICAgICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ3Byb2plY3RDb250YWluZXInLCBwcm9qZWN0Q29udGFpbmVyT2JqKVxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRTdGF0ZShuZXdQcm9qZWN0KVxuICAgICAgICAgICAgICAgIHJlbmRlckxheW91dCgpXG4gICAgICAgICAgICAgICAgb3Blbk1lbnUoZmFsc2UpXG4gICAgICAgICAgICAgICAgb3BlblByb2plY3RMaXN0KClcbiAgICAgICAgICAgIH0pIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VtcHR5IGlucHV0JylcbiAgICAgICAgfSAgICAgICAgICAgIFxuICAgIH0pXG59IiwiaW1wb3J0IGhpc3RvcnlPYmogZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9EZWZhdWx0IFByb2plY3QvaGlzdG9yeVwiXG5pbXBvcnQgY3JlYXRlVW5kb0JveCBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0xheW91dC9jcmVhdGVVbmRvQm94XCJcbmltcG9ydCBwcm9qZWN0Q29udGFpbmVyT2JqIGZyb20gXCIuLi8uLi9jb21wb25lbnQvcHJvamVjdENvbnRhaW5lclwiXG5pbXBvcnQgZXhlY3V0ZVdpdGhBbmltYXRpb24gZnJvbSBcIi4uL2NvbW1vbi9leGVjdXRlV2l0aEFuaW1hdGlvblwiXG5pbXBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vbG9jYWxTdG9yYWdlXCJcbmltcG9ydCByZW5kZXJMYXlvdXQgZnJvbSBcIi4uL3JlbmRlclwiXG5pbXBvcnQgeyBpc01lbnVPcGVuLCBpc1Byb2plY3RMaXN0T3Blbiwgb3Blbk1lbnUsIG9wZW5Qcm9qZWN0TGlzdCB9IGZyb20gXCIuL21lbnVIYW5kbGVyXCJcblxubGV0IHVuZG9Cb3hRdWV1ZSA9IFtdIC8vIFF1ZXVlIHRvIHN0b3JlIHVuZG9Cb3ggZWxlbWVudHNcblxuZnVuY3Rpb24gYWRkVG9RdWV1ZShpdGVtKXtcbiAgICB1bmRvQm94UXVldWUucHVzaChpdGVtKVxufSBcblxuZnVuY3Rpb24gcmVtb3ZlVW5kb0JveCh1bmRvQm94KSB7XG4gICAgY29uc3QgaW5kZXggPSB1bmRvQm94UXVldWUuaW5kZXhPZih1bmRvQm94KVxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdW5kb0JveFF1ZXVlLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgdW5kb0JveC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHVuZG9Cb3gpIFxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tVbmRvQm94UXVldWUoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuZG9Cb3ggPSB1bmRvQm94UXVldWUuc2hpZnQoKSAvLyBHZXQgdGhlIGZpcnN0IHVuZG9Cb3ggZnJvbSB0aGUgcXVldWVcbiAgICAgICAgaWYgKHVuZG9Cb3gpIHtcbiAgICAgICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKHVuZG9Cb3gsICgpID0+IHtcbiAgICAgICAgICAgICAgICB1bmRvQm94LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodW5kb0JveCkgLy8gUmVtb3ZlIHRoZSB1bmRvQm94IGZyb20gdGhlIERPTVxuICAgICAgICAgICAgICAgIGNoZWNrVW5kb0JveFF1ZXVlKCkgLy8gQ2hlY2sgdGhlIHF1ZXVlIGZvciBtb3JlIHVuZG9Cb3ggZWxlbWVudHNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gIFxuICAgIH0sIDMwMDApXG59XG5cblxuZnVuY3Rpb24gdW5kb0RlbGV0ZUhhbmRsZXIocHJvamVjdCwgaXRlbSwgdW5kb0JveCl7XG4gICAgY29uc3QgdW5kb0J0biA9IHVuZG9Cb3gucXVlcnlTZWxlY3RvcignLnVuZG9fX2J0bicpXG4gICAgY29uc3QgY2xvc2VCdG4gPSB1bmRvQm94LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZV9fYnRuJylcblxuICAgIHVuZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lbnVPcGVuID0gaXNNZW51T3BlbigpXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0T3BlbiA9IGlzUHJvamVjdExpc3RPcGVuKClcbiAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24odW5kb0JveCwgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5hZGRJdGVtKGl0ZW0pXG4gICAgICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ3Byb2plY3RDb250YWluZXInLCBwcm9qZWN0Q29udGFpbmVyT2JqKVxuICAgICAgICAgICAgcmVtb3ZlVW5kb0JveCh1bmRvQm94KVxuICAgICAgICAgICAgcmVuZGVyTGF5b3V0KClcbiAgICAgICAgICAgIGlmKG1lbnVPcGVuKSBvcGVuTWVudShmYWxzZSlcbiAgICAgICAgICAgIGlmKHByb2plY3RMaXN0T3Blbikgb3BlblByb2plY3RMaXN0KClcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKHVuZG9Cb3gsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZVVuZG9Cb3godW5kb0JveClcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiB1bmRvQ2hlY2tib3hIYW5kbGVyKHByb2plY3QsIGl0ZW0sIHVuZG9Cb3gpe1xuICAgIGNvbnN0IHVuZG9CdG4gPSB1bmRvQm94LnF1ZXJ5U2VsZWN0b3IoJy51bmRvX19idG4nKVxuICAgIGNvbnN0IGNsb3NlQnRuID0gdW5kb0JveC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VfX2J0bicpXG5cbiAgICB1bmRvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51T3BlbiA9IGlzTWVudU9wZW4oKVxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdE9wZW4gPSBpc1Byb2plY3RMaXN0T3BlbigpXG4gICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKHVuZG9Cb3gsICgpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2hhbmdlU3RhdHVzKClcbiAgICAgICAgICAgIHByb2plY3QuYWRkSXRlbShpdGVtKVxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBoaXN0b3J5T2JqLmdldEFsbEl0ZW0oKS5maW5kSW5kZXgob2JqID0+IG9iai5nZXRWYWx1ZSgpLnRpdGxlID09PSBpdGVtLmdldFZhbHVlKCkudGl0bGUpXG4gICAgICAgICAgICBoaXN0b3J5T2JqLmRlbGV0ZUl0ZW0oaW5kZXgpXG4gICAgICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ3Byb2plY3RDb250YWluZXInLCBwcm9qZWN0Q29udGFpbmVyT2JqKVxuICAgICAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdoaXN0b3J5JywgaGlzdG9yeU9iailcbiAgICAgICAgICAgIHJlbW92ZVVuZG9Cb3godW5kb0JveClcbiAgICAgICAgICAgIHJlbmRlckxheW91dCgpXG4gICAgICAgICAgICBpZihtZW51T3Blbikgb3Blbk1lbnUoZmFsc2UpXG4gICAgICAgICAgICBpZihwcm9qZWN0TGlzdE9wZW4pIG9wZW5Qcm9qZWN0TGlzdCgpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbih1bmRvQm94LCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVVbmRvQm94KHVuZG9Cb3gpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuZG9DaGVja2JveChwcm9qZWN0LGl0ZW0pe1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgICAgICBjb25zdCB1bmRvQm94ID0gY3JlYXRlVW5kb0JveCgnMSBpdGVtIG1hcmtlZCBmaW5pc2hlZCcpXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodW5kb0JveClcbiAgICAgICAgdW5kb0NoZWNrYm94SGFuZGxlcihwcm9qZWN0LCBpdGVtLCB1bmRvQm94KSBcbiAgICAgICAgYWRkVG9RdWV1ZSh1bmRvQm94KSBcbiAgICAgICAgY2hlY2tVbmRvQm94UXVldWUoKSBcbiAgICB9LCA1MDApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRvRGVsZXRlKHByb2plY3QsaXRlbSl7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgICAgIGNvbnN0IHVuZG9Cb3ggPSBjcmVhdGVVbmRvQm94KCcxIGl0ZW0gZGVsZXRlZCcpXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodW5kb0JveClcbiAgICAgICAgdW5kb0RlbGV0ZUhhbmRsZXIocHJvamVjdCwgaXRlbSwgdW5kb0JveCkgXG4gICAgICAgIGFkZFRvUXVldWUodW5kb0JveCkgXG4gICAgICAgIGNoZWNrVW5kb0JveFF1ZXVlKCkgXG4gICAgfSwgNTAwKVxufVxuXG4iLCJleHBvcnQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIGNvbnN0IHNpZ24gPSBudW1iZXIgPCAwID8gXCItXCIgOiBcIlwiO1xuICBjb25zdCBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCkucGFkU3RhcnQodGFyZ2V0TGVuZ3RoLCBcIjBcIik7XG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufVxuIiwibGV0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59XG4iLCJpbXBvcnQgeyBnZXREYXlPZlllYXIgfSBmcm9tIFwiLi4vLi4vZ2V0RGF5T2ZZZWFyLm1qc1wiO1xuaW1wb3J0IHsgZ2V0SVNPV2VlayB9IGZyb20gXCIuLi8uLi9nZXRJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0SVNPV2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vZ2V0SVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrIH0gZnJvbSBcIi4uLy4uL2dldFdlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuLi8uLi9nZXRXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuLi9hZGRMZWFkaW5nWmVyb3MubWpzXCI7XG5pbXBvcnQgeyBsaWdodEZvcm1hdHRlcnMgfSBmcm9tIFwiLi9saWdodEZvcm1hdHRlcnMubWpzXCI7XG5cbmNvbnN0IGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiBcImFtXCIsXG4gIHBtOiBcInBtXCIsXG4gIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gIG5vb246IFwibm9vblwiLFxuICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgbmlnaHQ6IFwibmlnaHRcIixcbn07XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG5leHBvcnQgY29uc3QgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBlcmEgPSBkYXRlLmdldEZ1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlIFwiR1wiOlxuICAgICAgY2FzZSBcIkdHXCI6XG4gICAgICBjYXNlIFwiR0dHXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcImFiYnJldmlhdGVkXCIgfSk7XG4gICAgICAvLyBBLCBCXG4gICAgICBjYXNlIFwiR0dHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwibmFycm93XCIgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSBcIkdHR0dcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcIndpZGVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwieW9cIikge1xuICAgICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgICBjb25zdCB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc2lnbmVkV2Vla1llYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7XG5cbiAgICAvLyBUd28gZGlnaXQgeWVhclxuICAgIGlmICh0b2tlbiA9PT0gXCJZWVwiKSB7XG4gICAgICBjb25zdCB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9XG5cbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJZb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBpc29XZWVrWWVhciA9IGdldElTT1dlZWtZZWFyKGRhdGUpO1xuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwiUVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgXCJRUVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwiUW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwiUVFRXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcIlFRUVFRXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcIlFRUVFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcInFxXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJxb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJxcXFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwicXFxcXFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwicXFxcVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiTVwiOlxuICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7IHVuaXQ6IFwibW9udGhcIiB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIk1NTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTFwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMTFwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTG9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7IHVuaXQ6IFwibW9udGhcIiB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIkxMTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgd2VlayA9IGdldFdlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwid29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2VlaywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaXNvV2VlayA9IGdldElTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiSW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2VlaywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImRvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0RGF0ZSgpLCB7IHVuaXQ6IFwiZGF0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mWWVhciA9IGdldERheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJEb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHsgdW5pdDogXCJkYXlPZlllYXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJFXCI6XG4gICAgICBjYXNlIFwiRUVcIjpcbiAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiRUVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSBcImVcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiZWVcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgXCJlb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgY2FzZSBcImVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImVlZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJlZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJlZWVlXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImNjXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgXCJjb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgY2FzZSBcImNjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImNjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJjY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJjY2NjXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG4gICAgICBjYXNlIFwiaWlcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcbiAgICAgIGNhc2UgXCJpb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcImlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImlpaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJpaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJpaWlpXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZVxuICAgICAgICAgIC5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJhYWFhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYlwiOlxuICAgICAgY2FzZSBcImJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZVxuICAgICAgICAgIC5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJiYmJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJiXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIkJcIjpcbiAgICAgIGNhc2UgXCJCQlwiOlxuICAgICAgY2FzZSBcIkJCQlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcIkJCQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcIkJCQkJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJob1wiKSB7XG4gICAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJIb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldEhvdXJzKCksIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJLb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSBcImtvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwibW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRNaW51dGVzKCksIHsgdW5pdDogXCJtaW51dGVcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcInNvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0U2Vjb25kcygpLCB7IHVuaXQ6IFwic2Vjb25kXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gXCJaXCI7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgXCJYXCI6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcbiAgICAgIGNhc2UgXCJYWFhYXCI6XG4gICAgICBjYXNlIFwiWFhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcbiAgICAgIGNhc2UgXCJYWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYWFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcbiAgICAgIGNhc2UgXCJ4eHh4XCI6XG4gICAgICBjYXNlIFwieHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcbiAgICAgIGNhc2UgXCJ4eHh4eFwiOlxuICAgICAgY2FzZSBcInh4eFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgXCJPXCI6XG4gICAgICBjYXNlIFwiT09cIjpcbiAgICAgIGNhc2UgXCJPT09cIjpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlIFwiT09PT1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICBjYXNlIFwienpcIjpcbiAgICAgIGNhc2UgXCJ6enpcIjpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlIFwienp6elwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IE1hdGgudHJ1bmMoZGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGVsaW1pdGVyID0gXCJcIikge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC50cnVuYyhhYnNPZmZzZXQgLyA2MCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC50cnVuYyhhYnNPZmZzZXQgLyA2MCksIDIpO1xuICBjb25zdCBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG4iLCJpbXBvcnQgeyBhZGRMZWFkaW5nWmVyb3MgfSBmcm9tIFwiLi4vYWRkTGVhZGluZ1plcm9zLm1qc1wiO1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG5leHBvcnQgY29uc3QgbGlnaHRGb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gXCJ5eVwiID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTShkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gXCJNXCIgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXREYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYShkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0SG91cnMoKSAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgXCJhYWFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09IFwiYW1cIiA/IFwiYS5tLlwiIDogXCJwLm0uXCI7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0SG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0SG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0U2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICBjb25zdCBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGgudHJ1bmMoXG4gICAgICBtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSxcbiAgICApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG59O1xuIiwiY29uc3QgZGF0ZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcIlBQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCB0aW1lTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwicHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwicHBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJwcHBwXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIGNvbnN0IG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIGNvbnN0IGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIGNvbnN0IHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIGxldCBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXRcbiAgICAucmVwbGFjZShcInt7ZGF0ZX19XCIsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSlcbiAgICAucmVwbGFjZShcInt7dGltZX19XCIsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIsXG59O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4uL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB1dGNEYXRlID0gbmV3IERhdGUoXG4gICAgRGF0ZS5VVEMoXG4gICAgICBfZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgX2RhdGUuZ2V0TW9udGgoKSxcbiAgICAgIF9kYXRlLmdldERhdGUoKSxcbiAgICAgIF9kYXRlLmdldEhvdXJzKCksXG4gICAgICBfZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICBfZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICBfZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSxcbiAgICApLFxuICApO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKF9kYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gK2RhdGUgLSArdXRjRGF0ZTtcbn1cbiIsImNvbnN0IGRheU9mWWVhclRva2VuUkUgPSAvXkQrJC87XG5jb25zdCB3ZWVrWWVhclRva2VuUkUgPSAvXlkrJC87XG5cbmNvbnN0IHRocm93VG9rZW5zID0gW1wiRFwiLCBcIkREXCIsIFwiWVlcIiwgXCJZWVlZXCJdO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gZGF5T2ZZZWFyVG9rZW5SRS50ZXN0KHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gd2Vla1llYXJUb2tlblJFLnRlc3QodG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBjb25zdCBfbWVzc2FnZSA9IG1lc3NhZ2UodG9rZW4sIGZvcm1hdCwgaW5wdXQpO1xuICBjb25zb2xlLndhcm4oX21lc3NhZ2UpO1xuICBpZiAodGhyb3dUb2tlbnMuaW5jbHVkZXModG9rZW4pKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihfbWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2UodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgY29uc3Qgc3ViamVjdCA9IHRva2VuWzBdID09PSBcIllcIiA/IFwieWVhcnNcIiA6IFwiZGF5cyBvZiB0aGUgbW9udGhcIjtcbiAgcmV0dXJuIGBVc2UgXFxgJHt0b2tlbi50b0xvd2VyQ2FzZSgpfVxcYCBpbnN0ZWFkIG9mIFxcYCR7dG9rZW59XFxgIChpbiBcXGAke2Zvcm1hdH1cXGApIGZvciBmb3JtYXR0aW5nICR7c3ViamVjdH0gdG8gdGhlIGlucHV0IFxcYCR7aW5wdXR9XFxgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRgO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbnN0YW50c1xuICogQHN1bW1hcnkgVXNlZnVsIGNvbnN0YW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb2xsZWN0aW9uIG9mIHVzZWZ1bCBkYXRlIGNvbnN0YW50cy5cbiAqXG4gKiBUaGUgY29uc3RhbnRzIGNvdWxkIGJlIGltcG9ydGVkIGZyb20gYGRhdGUtZm5zL2NvbnN0YW50c2A6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG1heFRpbWUsIG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogZnVuY3Rpb24gaXNBbGxvd2VkVGltZSh0aW1lKSB7XG4gKiAgIHJldHVybiB0aW1lIDw9IG1heFRpbWUgJiYgdGltZSA+PSBtaW5UaW1lO1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgeWVhci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdyBtYW55IGRheXMgaW4gYSB5ZWFyLlxuICpcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICovXG5leHBvcnQgY29uc3QgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWF4VGltZVxuICogQHN1bW1hcnkgTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1heFRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IDg2NDAwMDAwMDAwMDAwMDEgPD0gbWF4VGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSg4NjQwMDAwMDAwMDAwMDAxKTtcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBzdW1tYXJ5IE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSAtODY0MDAwMDAwMDAwMDAwMSA+PSBtaW5UaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKC04NjQwMDAwMDAwMDAwMDAxKVxuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luV2VlayA9IDYwNDgwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkRheSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJblllYXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luWWVhciA9IDUyNTYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbk1vbnRoXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgbW9udGguXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Nb250aCA9IDQzMjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luRGF5XG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luRGF5ID0gMTQ0MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBzdW1tYXJ5IFF1YXJ0ZXJzIGluIDEgeWVhclxuICovXG5leHBvcnQgY29uc3QgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1pbnV0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1vbnRoXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMztcbiIsIi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlKGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29udHJ1c3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgIClcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luRGF5IH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5pbXBvcnQgeyBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIH0gZnJvbSBcIi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCB0aW1lc3RhbXBMZWZ0ID1cbiAgICArc3RhcnRPZkRheUxlZnQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgY29uc3QgdGltZXN0YW1wUmlnaHQgPVxuICAgICtzdGFydE9mRGF5UmlnaHQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBtaWxsaXNlY29uZHNJbkRheSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xuIiwiaW1wb3J0IHsgZGVmYXVsdExvY2FsZSB9IGZyb20gXCIuL19saWIvZGVmYXVsdExvY2FsZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLm1qc1wiO1xuaW1wb3J0IHsgbG9uZ0Zvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5tanNcIjtcbmltcG9ydCB7XG4gIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sXG4gIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbixcbiAgd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcixcbn0gZnJvbSBcIi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMubWpzXCI7XG5pbXBvcnQgeyBpc1ZhbGlkIH0gZnJvbSBcIi4vaXNWYWxpZC5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLy8gUmV4cG9ydHMgb2YgaW50ZXJuYWwgZm9yIGxpYnJhcmllcyB0byB1c2UuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzYzOCNpc3N1ZWNvbW1lbnQtMTg3NzA4Mjg3NFxuZXhwb3J0IHsgZm9ybWF0dGVycywgbG9uZ0Zvcm1hdHRlcnMgfTtcblxuLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5jb25zdCBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID1cbiAgL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG4vLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5jb25zdCBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG5jb25zdCBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG5jb25zdCBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xuY29uc3QgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuXG5leHBvcnQgeyBmb3JtYXQgYXMgZm9ybWF0RGF0ZSB9O1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZm9ybWF0fSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAYWxpYXMgZm9ybWF0RGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyKVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcikpLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gZm9ybWF0IC0gVGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqXG4gKiBAdGhyb3dzIGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3MgdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoZGF0ZSwgZm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgbG9jYWxlID0gb3B0aW9ucz8ubG9jYWxlID8/IGRlZmF1bHRPcHRpb25zLmxvY2FsZSA/PyBkZWZhdWx0TG9jYWxlO1xuXG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgdGltZSB2YWx1ZVwiKTtcbiAgfVxuXG4gIGxldCBwYXJ0cyA9IGZvcm1hdFN0clxuICAgIC5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcInBcIiB8fCBmaXJzdENoYXJhY3RlciA9PT0gXCJQXCIpIHtcbiAgICAgICAgY29uc3QgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3Vic3RyaW5nO1xuICAgIH0pXG4gICAgLmpvaW4oXCJcIilcbiAgICAubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IFwiJ1wiIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXSkge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiB0cnVlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgXCJGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYFwiICtcbiAgICAgICAgICAgIGZpcnN0Q2hhcmFjdGVyICtcbiAgICAgICAgICAgIFwiYFwiLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IHN1YnN0cmluZyB9O1xuICAgIH0pO1xuXG4gIC8vIGludm9rZSBsb2NhbGl6ZSBwcmVwcm9jZXNzb3IgKG9ubHkgZm9yIGZyZW5jaCBsb2NhbGVzIGF0IHRoZSBtb21lbnQpXG4gIGlmIChsb2NhbGUubG9jYWxpemUucHJlcHJvY2Vzc29yKSB7XG4gICAgcGFydHMgPSBsb2NhbGUubG9jYWxpemUucHJlcHJvY2Vzc29yKG9yaWdpbmFsRGF0ZSwgcGFydHMpO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZSxcbiAgfTtcblxuICByZXR1cm4gcGFydHNcbiAgICAubWFwKChwYXJ0KSA9PiB7XG4gICAgICBpZiAoIXBhcnQuaXNUb2tlbikgcmV0dXJuIHBhcnQudmFsdWU7XG5cbiAgICAgIGNvbnN0IHRva2VuID0gcGFydC52YWx1ZTtcblxuICAgICAgaWYgKFxuICAgICAgICAoIW9wdGlvbnM/LnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJlxuICAgICAgICAgIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikpIHx8XG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJlxuICAgICAgICAgIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pKVxuICAgICAgKSB7XG4gICAgICAgIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdFN0ciwgU3RyaW5nKGRhdGUpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1t0b2tlblswXV07XG4gICAgICByZXR1cm4gZm9ybWF0dGVyKG9yaWdpbmFsRGF0ZSwgdG9rZW4sIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIGNvbnN0IG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZlllYXIgfSBmcm9tIFwiLi9zdGFydE9mWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXREYXlPZlllYXJcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIGRheSBvZiB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgeWVhciBpcyAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldERheU9mWWVhcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gMTgzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlPZlllYXIoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhfZGF0ZSwgc3RhcnRPZlllYXIoX2RhdGUpKTtcbiAgY29uc3QgZGF5T2ZZZWFyID0gZGlmZiArIDE7XG4gIHJldHVybiBkYXlPZlllYXI7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF5T2ZZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiA1M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2VlayhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gK3N0YXJ0T2ZJU09XZWVrKF9kYXRlKSAtICtzdGFydE9mSVNPV2Vla1llYXIoX2RhdGUpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIG1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT1dlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZSxcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWtZZWFyKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHllYXIgPSBfZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT1dlZWtZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSB3aXRoIGRlZmF1bHQgb3B0aW9ucz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSxcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLFxuICogLy8gYW5kIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyIGFsd2F5cyBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiA1M1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSArc3RhcnRPZldlZWsoX2RhdGUsIG9wdGlvbnMpIC0gK3N0YXJ0T2ZXZWVrWWVhcihfZGF0ZSwgb3B0aW9ucyk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IHdpdGggdGhlIGRlZmF1bHQgc2V0dGluZ3M/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpKVxuICogLy89PiAyMDA1XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB3ZWVrIHN0YXJ0cyBvbiBTYXR1cmRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgd2Vla1N0YXJ0c09uOiA2IH0pXG4gKiAvLz0+IDIwMDRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHRoZSBmaXJzdCB3ZWVrIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0IH0pXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHllYXIgPSBfZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCBmaXJzdFdlZWtPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0V2Vla1llYXI7XG4iLCIvKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzRGF0ZTtcbiIsImltcG9ydCB7IGlzRGF0ZSB9IGZyb20gXCIuL2lzRGF0ZS5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZSlcbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB2YWxpZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZChkYXRlKSB7XG4gIGlmICghaXNEYXRlKGRhdGUpICYmIHR5cGVvZiBkYXRlICE9PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihfZGF0ZSkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVmFsaWQ7XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIGNvbnN0IGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBUaGUgbG9jYWxpemUgZnVuY3Rpb24gYXJndW1lbnQgY2FsbGJhY2sgd2hpY2ggYWxsb3dzIHRvIGNvbnZlcnQgcmF3IHZhbHVlIHRvXG4gKiB0aGUgYWN0dWFsIHR5cGUuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgY29udmVydGVkIHZhbHVlXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwIG9mIGxvY2FsaXplZCB2YWx1ZXMgZm9yIGVhY2ggd2lkdGguXG4gKi9cblxuLyoqXG4gKiBUaGUgaW5kZXggdHlwZSBvZiB0aGUgbG9jYWxlIHVuaXQgdmFsdWUuIEl0IHR5cGVzIGNvbnZlcnNpb24gb2YgdW5pdHMgb2ZcbiAqIHZhbHVlcyB0aGF0IGRvbid0IHN0YXJ0IGF0IDAgKGkuZS4gcXVhcnRlcnMpLlxuICovXG5cbi8qKlxuICogQ29udmVydHMgdGhlIHVuaXQgdmFsdWUgdG8gdGhlIHR1cGxlIG9mIHZhbHVlcy5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZXJhIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBCQyxcbiAqIHRoZSBzZWNvbmQgZWxlbWVudCByZXByZXNlbnRzIEFELlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBxdWFydGVyIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBRMS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZGF5IHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBTdW5kYXkuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIG1vbnRoIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBKYW51YXJ5LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IG9wdGlvbnM/LmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6IFwic3RhbmRhbG9uZVwiO1xuXG4gICAgbGV0IHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSBcImZvcm1hdHRpbmdcIiAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID1cbiAgICAgICAgYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbd2lkdGhdIHx8IGFyZ3MudmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuXG4gICAgY29uc3QgbWF0Y2hQYXR0ZXJuID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VQYXR0ZXJucyA9XG4gICAgICAod2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSkgfHxcbiAgICAgIGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcblxuICAgIGNvbnN0IGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucylcbiAgICAgID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpXG4gICAgICA6IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgZmluZEtleShwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKTtcblxuICAgIGxldCB2YWx1ZTtcblxuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpXG4gICAgICA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiZcbiAgICAgIHByZWRpY2F0ZShvYmplY3Rba2V5XSlcbiAgICApIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAobGV0IGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBsZXQgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKVxuICAgICAgOiBwYXJzZVJlc3VsdFswXTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIGNvbnN0IHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIHJlc3QgfTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGZvcm1hdERpc3RhbmNlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanNcIjtcbmltcG9ydCB7IGZvcm1hdExvbmcgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXRSZWxhdGl2ZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUubWpzXCI7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gXCIuL2VuLVVTL19saWIvbG9jYWxpemUubWpzXCI7XG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gXCIuL2VuLVVTL19saWIvbWF0Y2gubWpzXCI7XG5cbi8qKlxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF0oaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnApXG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3MpXG4gKi9cbmV4cG9ydCBjb25zdCBlblVTID0ge1xuICBjb2RlOiBcImVuLVVTXCIsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxLFxuICB9LFxufTtcblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBlblVTO1xuIiwiY29uc3QgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6IFwiMSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIGhhbGZBTWludXRlOiBcImhhbGYgYSBtaW51dGVcIixcblxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiBcIjEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogXCJhYm91dCAxIGhvdXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4SG91cnM6IHtcbiAgICBvbmU6IFwiMSBob3VyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeERheXM6IHtcbiAgICBvbmU6IFwiMSBkYXlcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gZGF5c1wiLFxuICB9LFxuXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiBcImFib3V0IDEgd2Vla1wiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIHhXZWVrczoge1xuICAgIG9uZTogXCIxIHdlZWtcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBtb250aFwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICB4TW9udGhzOiB7XG4gICAgb25lOiBcIjEgbW9udGhcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgeFllYXJzOiB7XG4gICAgb25lOiBcIjEgeWVhclwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6IFwib3ZlciAxIHllYXJcIixcbiAgICBvdGhlcjogXCJvdmVyIHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogXCJhbG1vc3QgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWxtb3N0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERpc3RhbmNlID0gKHRva2VuLCBjb3VudCwgb3B0aW9ucykgPT4ge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoXCJ7e2NvdW50fX1cIiwgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucz8uYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gXCJpbiBcIiArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArIFwiIGFnb1wiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHsgYnVpbGRGb3JtYXRMb25nRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanNcIjtcblxuY29uc3QgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiRUVFRSwgTU1NTSBkbywgeVwiLFxuICBsb25nOiBcIk1NTU0gZG8sIHlcIixcbiAgbWVkaXVtOiBcIk1NTSBkLCB5XCIsXG4gIHNob3J0OiBcIk1NL2RkL3l5eXlcIixcbn07XG5cbmNvbnN0IHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcImg6bW06c3MgYSB6enp6XCIsXG4gIGxvbmc6IFwiaDptbTpzcyBhIHpcIixcbiAgbWVkaXVtOiBcImg6bW06c3MgYVwiLFxuICBzaG9ydDogXCJoOm1tIGFcIixcbn07XG5cbmNvbnN0IGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG4gIHNob3J0OiBcInt7ZGF0ZX19LCB7e3RpbWV9fVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG5cbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG59O1xuIiwiY29uc3QgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiBcIlBcIixcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRSZWxhdGl2ZSA9ICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpID0+XG4gIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbiIsImltcG9ydCB7IGJ1aWxkTG9jYWxpemVGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi5tanNcIjtcblxuY29uc3QgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkJcIiwgXCJBXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiQkNcIiwgXCJBRFwiXSxcbiAgd2lkZTogW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdLFxufTtcblxuY29uc3QgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCJdLFxuICBhYmJyZXZpYXRlZDogW1wiUTFcIiwgXCJRMlwiLCBcIlEzXCIsIFwiUTRcIl0sXG4gIHdpZGU6IFtcIjFzdCBxdWFydGVyXCIsIFwiMm5kIHF1YXJ0ZXJcIiwgXCIzcmQgcXVhcnRlclwiLCBcIjR0aCBxdWFydGVyXCJdLFxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuY29uc3QgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdLFxuICBhYmJyZXZpYXRlZDogW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdLFxuXG4gIHdpZGU6IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXG4gIHNob3J0OiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgd2lkZTogW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3QgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3Qgb3JkaW5hbE51bWJlciA9IChkaXJ0eU51bWJlciwgX29wdGlvbnMpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIGNvbnN0IHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJzdFwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJuZFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJyZFwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgXCJ0aFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyLFxuXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IChxdWFydGVyKSA9PiBxdWFydGVyIC0gMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiBcIndpZGVcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgYnVpbGRNYXRjaEZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaEZuLm1qc1wiO1xuaW1wb3J0IHsgYnVpbGRNYXRjaFBhdHRlcm5GbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzXCI7XG5cbmNvbnN0IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG5jb25zdCBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcblxuY29uc3QgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pLFxufTtcbmNvbnN0IHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldLFxufTtcblxuY29uc3QgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaSxcbn07XG5jb25zdCBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV0sXG59O1xuXG5jb25zdCBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaSxcbn07XG5jb25zdCBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogW1xuICAgIC9eai9pLFxuICAgIC9eZi9pLFxuICAgIC9ebS9pLFxuICAgIC9eYS9pLFxuICAgIC9ebS9pLFxuICAgIC9eai9pLFxuICAgIC9eai9pLFxuICAgIC9eYS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxuXG4gIGFueTogW1xuICAgIC9eamEvaSxcbiAgICAvXmYvaSxcbiAgICAvXm1hci9pLFxuICAgIC9eYXAvaSxcbiAgICAvXm1heS9pLFxuICAgIC9eanVuL2ksXG4gICAgL15qdWwvaSxcbiAgICAvXmF1L2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG59O1xuXG5jb25zdCBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiAodmFsdWUpID0+IHBhcnNlSW50KHZhbHVlLCAxMCksXG4gIH0pLFxuXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgICB2YWx1ZUNhbGxiYWNrOiAoaW5kZXgpID0+IGluZGV4ICsgMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJhbnlcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsImltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrKGRhdGUpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRhdGUsIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrO1xuIiwiaW1wb3J0IHsgZ2V0SVNPV2Vla1llYXIgfSBmcm9tIFwiLi9nZXRJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNTpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gTW9uIEphbiAwMyAyMDA1IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mSVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCB5ZWFyID0gZ2V0SVNPV2Vla1llYXIoZGF0ZSk7XG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeSA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mSVNPV2Vla1llYXI7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkYXkgPSBfZGF0ZS5nZXREYXkoKTtcbiAgY29uc3QgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG5cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi9nZXRXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla1llYXJ9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDUgd2l0aCBkZWZhdWx0IHNldHRpbmdzOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBTdW4gRGVjIDI2IDIwMDQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDVcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHdlZWtcbiAqIC8vIGFuZCA0IEphbnVhcnkgaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB5ZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gIGNvbnN0IGZpcnN0V2VlayA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vlay5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IF9kYXRlID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrWWVhcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHllYXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mWWVhcihuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDAwKSlcbiAqIC8vPT4gV2VkIEphbiAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IGNsZWFuRGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGUgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBfZGF0ZS5zZXRGdWxsWWVhcihjbGVhbkRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZlllYXI7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhpcyBmaWxlIGlzIGF1dG9nZW5lcmF0ZWQuIEl0J3MgdXNlZCB0byBwdWJsaXNoIEVTTSB0byBucG0uXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmdyaW5zL1RpbnlDb2xvclxuLy8gQnJpYW4gR3JpbnN0ZWFkLCBNSVQgTGljZW5zZVxuXG52YXIgdHJpbUxlZnQgPSAvXlxccysvO1xudmFyIHRyaW1SaWdodCA9IC9cXHMrJC87XG5mdW5jdGlvbiB0aW55Y29sb3IoY29sb3IsIG9wdHMpIHtcbiAgY29sb3IgPSBjb2xvciA/IGNvbG9yIDogXCJcIjtcbiAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgLy8gSWYgaW5wdXQgaXMgYWxyZWFkeSBhIHRpbnljb2xvciwgcmV0dXJuIGl0c2VsZlxuICBpZiAoY29sb3IgaW5zdGFuY2VvZiB0aW55Y29sb3IpIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cbiAgLy8gSWYgd2UgYXJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLCBjYWxsIHVzaW5nIG5ldyBpbnN0ZWFkXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiB0aW55Y29sb3IpKSB7XG4gICAgcmV0dXJuIG5ldyB0aW55Y29sb3IoY29sb3IsIG9wdHMpO1xuICB9XG4gIHZhciByZ2IgPSBpbnB1dFRvUkdCKGNvbG9yKTtcbiAgdGhpcy5fb3JpZ2luYWxJbnB1dCA9IGNvbG9yLCB0aGlzLl9yID0gcmdiLnIsIHRoaXMuX2cgPSByZ2IuZywgdGhpcy5fYiA9IHJnYi5iLCB0aGlzLl9hID0gcmdiLmEsIHRoaXMuX3JvdW5kQSA9IE1hdGgucm91bmQoMTAwICogdGhpcy5fYSkgLyAxMDAsIHRoaXMuX2Zvcm1hdCA9IG9wdHMuZm9ybWF0IHx8IHJnYi5mb3JtYXQ7XG4gIHRoaXMuX2dyYWRpZW50VHlwZSA9IG9wdHMuZ3JhZGllbnRUeXBlO1xuXG4gIC8vIERvbid0IGxldCB0aGUgcmFuZ2Ugb2YgWzAsMjU1XSBjb21lIGJhY2sgaW4gWzAsMV0uXG4gIC8vIFBvdGVudGlhbGx5IGxvc2UgYSBsaXR0bGUgYml0IG9mIHByZWNpc2lvbiBoZXJlLCBidXQgd2lsbCBmaXggaXNzdWVzIHdoZXJlXG4gIC8vIC41IGdldHMgaW50ZXJwcmV0ZWQgYXMgaGFsZiBvZiB0aGUgdG90YWwsIGluc3RlYWQgb2YgaGFsZiBvZiAxXG4gIC8vIElmIGl0IHdhcyBzdXBwb3NlZCB0byBiZSAxMjgsIHRoaXMgd2FzIGFscmVhZHkgdGFrZW4gY2FyZSBvZiBieSBgaW5wdXRUb1JnYmBcbiAgaWYgKHRoaXMuX3IgPCAxKSB0aGlzLl9yID0gTWF0aC5yb3VuZCh0aGlzLl9yKTtcbiAgaWYgKHRoaXMuX2cgPCAxKSB0aGlzLl9nID0gTWF0aC5yb3VuZCh0aGlzLl9nKTtcbiAgaWYgKHRoaXMuX2IgPCAxKSB0aGlzLl9iID0gTWF0aC5yb3VuZCh0aGlzLl9iKTtcbiAgdGhpcy5fb2sgPSByZ2Iub2s7XG59XG50aW55Y29sb3IucHJvdG90eXBlID0ge1xuICBpc0Rhcms6IGZ1bmN0aW9uIGlzRGFyaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCcmlnaHRuZXNzKCkgPCAxMjg7XG4gIH0sXG4gIGlzTGlnaHQ6IGZ1bmN0aW9uIGlzTGlnaHQoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzRGFyaygpO1xuICB9LFxuICBpc1ZhbGlkOiBmdW5jdGlvbiBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9vaztcbiAgfSxcbiAgZ2V0T3JpZ2luYWxJbnB1dDogZnVuY3Rpb24gZ2V0T3JpZ2luYWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JpZ2luYWxJbnB1dDtcbiAgfSxcbiAgZ2V0Rm9ybWF0OiBmdW5jdGlvbiBnZXRGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdDtcbiAgfSxcbiAgZ2V0QWxwaGE6IGZ1bmN0aW9uIGdldEFscGhhKCkge1xuICAgIHJldHVybiB0aGlzLl9hO1xuICB9LFxuICBnZXRCcmlnaHRuZXNzOiBmdW5jdGlvbiBnZXRCcmlnaHRuZXNzKCkge1xuICAgIC8vaHR0cDovL3d3dy53My5vcmcvVFIvQUVSVCNjb2xvci1jb250cmFzdFxuICAgIHZhciByZ2IgPSB0aGlzLnRvUmdiKCk7XG4gICAgcmV0dXJuIChyZ2IuciAqIDI5OSArIHJnYi5nICogNTg3ICsgcmdiLmIgKiAxMTQpIC8gMTAwMDtcbiAgfSxcbiAgZ2V0THVtaW5hbmNlOiBmdW5jdGlvbiBnZXRMdW1pbmFuY2UoKSB7XG4gICAgLy9odHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG4gICAgdmFyIHJnYiA9IHRoaXMudG9SZ2IoKTtcbiAgICB2YXIgUnNSR0IsIEdzUkdCLCBCc1JHQiwgUiwgRywgQjtcbiAgICBSc1JHQiA9IHJnYi5yIC8gMjU1O1xuICAgIEdzUkdCID0gcmdiLmcgLyAyNTU7XG4gICAgQnNSR0IgPSByZ2IuYiAvIDI1NTtcbiAgICBpZiAoUnNSR0IgPD0gMC4wMzkyOCkgUiA9IFJzUkdCIC8gMTIuOTI7ZWxzZSBSID0gTWF0aC5wb3coKFJzUkdCICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gICAgaWYgKEdzUkdCIDw9IDAuMDM5MjgpIEcgPSBHc1JHQiAvIDEyLjkyO2Vsc2UgRyA9IE1hdGgucG93KChHc1JHQiArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICAgIGlmIChCc1JHQiA8PSAwLjAzOTI4KSBCID0gQnNSR0IgLyAxMi45MjtlbHNlIEIgPSBNYXRoLnBvdygoQnNSR0IgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgICByZXR1cm4gMC4yMTI2ICogUiArIDAuNzE1MiAqIEcgKyAwLjA3MjIgKiBCO1xuICB9LFxuICBzZXRBbHBoYTogZnVuY3Rpb24gc2V0QWxwaGEodmFsdWUpIHtcbiAgICB0aGlzLl9hID0gYm91bmRBbHBoYSh2YWx1ZSk7XG4gICAgdGhpcy5fcm91bmRBID0gTWF0aC5yb3VuZCgxMDAgKiB0aGlzLl9hKSAvIDEwMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgdG9Ic3Y6IGZ1bmN0aW9uIHRvSHN2KCkge1xuICAgIHZhciBoc3YgPSByZ2JUb0hzdih0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iKTtcbiAgICByZXR1cm4ge1xuICAgICAgaDogaHN2LmggKiAzNjAsXG4gICAgICBzOiBoc3YucyxcbiAgICAgIHY6IGhzdi52LFxuICAgICAgYTogdGhpcy5fYVxuICAgIH07XG4gIH0sXG4gIHRvSHN2U3RyaW5nOiBmdW5jdGlvbiB0b0hzdlN0cmluZygpIHtcbiAgICB2YXIgaHN2ID0gcmdiVG9Ic3YodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYik7XG4gICAgdmFyIGggPSBNYXRoLnJvdW5kKGhzdi5oICogMzYwKSxcbiAgICAgIHMgPSBNYXRoLnJvdW5kKGhzdi5zICogMTAwKSxcbiAgICAgIHYgPSBNYXRoLnJvdW5kKGhzdi52ICogMTAwKTtcbiAgICByZXR1cm4gdGhpcy5fYSA9PSAxID8gXCJoc3YoXCIgKyBoICsgXCIsIFwiICsgcyArIFwiJSwgXCIgKyB2ICsgXCIlKVwiIDogXCJoc3ZhKFwiICsgaCArIFwiLCBcIiArIHMgKyBcIiUsIFwiICsgdiArIFwiJSwgXCIgKyB0aGlzLl9yb3VuZEEgKyBcIilcIjtcbiAgfSxcbiAgdG9Ic2w6IGZ1bmN0aW9uIHRvSHNsKCkge1xuICAgIHZhciBoc2wgPSByZ2JUb0hzbCh0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iKTtcbiAgICByZXR1cm4ge1xuICAgICAgaDogaHNsLmggKiAzNjAsXG4gICAgICBzOiBoc2wucyxcbiAgICAgIGw6IGhzbC5sLFxuICAgICAgYTogdGhpcy5fYVxuICAgIH07XG4gIH0sXG4gIHRvSHNsU3RyaW5nOiBmdW5jdGlvbiB0b0hzbFN0cmluZygpIHtcbiAgICB2YXIgaHNsID0gcmdiVG9Ic2wodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYik7XG4gICAgdmFyIGggPSBNYXRoLnJvdW5kKGhzbC5oICogMzYwKSxcbiAgICAgIHMgPSBNYXRoLnJvdW5kKGhzbC5zICogMTAwKSxcbiAgICAgIGwgPSBNYXRoLnJvdW5kKGhzbC5sICogMTAwKTtcbiAgICByZXR1cm4gdGhpcy5fYSA9PSAxID8gXCJoc2woXCIgKyBoICsgXCIsIFwiICsgcyArIFwiJSwgXCIgKyBsICsgXCIlKVwiIDogXCJoc2xhKFwiICsgaCArIFwiLCBcIiArIHMgKyBcIiUsIFwiICsgbCArIFwiJSwgXCIgKyB0aGlzLl9yb3VuZEEgKyBcIilcIjtcbiAgfSxcbiAgdG9IZXg6IGZ1bmN0aW9uIHRvSGV4KGFsbG93M0NoYXIpIHtcbiAgICByZXR1cm4gcmdiVG9IZXgodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYiwgYWxsb3czQ2hhcik7XG4gIH0sXG4gIHRvSGV4U3RyaW5nOiBmdW5jdGlvbiB0b0hleFN0cmluZyhhbGxvdzNDaGFyKSB7XG4gICAgcmV0dXJuIFwiI1wiICsgdGhpcy50b0hleChhbGxvdzNDaGFyKTtcbiAgfSxcbiAgdG9IZXg4OiBmdW5jdGlvbiB0b0hleDgoYWxsb3c0Q2hhcikge1xuICAgIHJldHVybiByZ2JhVG9IZXgodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYiwgdGhpcy5fYSwgYWxsb3c0Q2hhcik7XG4gIH0sXG4gIHRvSGV4OFN0cmluZzogZnVuY3Rpb24gdG9IZXg4U3RyaW5nKGFsbG93NENoYXIpIHtcbiAgICByZXR1cm4gXCIjXCIgKyB0aGlzLnRvSGV4OChhbGxvdzRDaGFyKTtcbiAgfSxcbiAgdG9SZ2I6IGZ1bmN0aW9uIHRvUmdiKCkge1xuICAgIHJldHVybiB7XG4gICAgICByOiBNYXRoLnJvdW5kKHRoaXMuX3IpLFxuICAgICAgZzogTWF0aC5yb3VuZCh0aGlzLl9nKSxcbiAgICAgIGI6IE1hdGgucm91bmQodGhpcy5fYiksXG4gICAgICBhOiB0aGlzLl9hXG4gICAgfTtcbiAgfSxcbiAgdG9SZ2JTdHJpbmc6IGZ1bmN0aW9uIHRvUmdiU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9hID09IDEgPyBcInJnYihcIiArIE1hdGgucm91bmQodGhpcy5fcikgKyBcIiwgXCIgKyBNYXRoLnJvdW5kKHRoaXMuX2cpICsgXCIsIFwiICsgTWF0aC5yb3VuZCh0aGlzLl9iKSArIFwiKVwiIDogXCJyZ2JhKFwiICsgTWF0aC5yb3VuZCh0aGlzLl9yKSArIFwiLCBcIiArIE1hdGgucm91bmQodGhpcy5fZykgKyBcIiwgXCIgKyBNYXRoLnJvdW5kKHRoaXMuX2IpICsgXCIsIFwiICsgdGhpcy5fcm91bmRBICsgXCIpXCI7XG4gIH0sXG4gIHRvUGVyY2VudGFnZVJnYjogZnVuY3Rpb24gdG9QZXJjZW50YWdlUmdiKCkge1xuICAgIHJldHVybiB7XG4gICAgICByOiBNYXRoLnJvdW5kKGJvdW5kMDEodGhpcy5fciwgMjU1KSAqIDEwMCkgKyBcIiVcIixcbiAgICAgIGc6IE1hdGgucm91bmQoYm91bmQwMSh0aGlzLl9nLCAyNTUpICogMTAwKSArIFwiJVwiLFxuICAgICAgYjogTWF0aC5yb3VuZChib3VuZDAxKHRoaXMuX2IsIDI1NSkgKiAxMDApICsgXCIlXCIsXG4gICAgICBhOiB0aGlzLl9hXG4gICAgfTtcbiAgfSxcbiAgdG9QZXJjZW50YWdlUmdiU3RyaW5nOiBmdW5jdGlvbiB0b1BlcmNlbnRhZ2VSZ2JTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2EgPT0gMSA/IFwicmdiKFwiICsgTWF0aC5yb3VuZChib3VuZDAxKHRoaXMuX3IsIDI1NSkgKiAxMDApICsgXCIlLCBcIiArIE1hdGgucm91bmQoYm91bmQwMSh0aGlzLl9nLCAyNTUpICogMTAwKSArIFwiJSwgXCIgKyBNYXRoLnJvdW5kKGJvdW5kMDEodGhpcy5fYiwgMjU1KSAqIDEwMCkgKyBcIiUpXCIgOiBcInJnYmEoXCIgKyBNYXRoLnJvdW5kKGJvdW5kMDEodGhpcy5fciwgMjU1KSAqIDEwMCkgKyBcIiUsIFwiICsgTWF0aC5yb3VuZChib3VuZDAxKHRoaXMuX2csIDI1NSkgKiAxMDApICsgXCIlLCBcIiArIE1hdGgucm91bmQoYm91bmQwMSh0aGlzLl9iLCAyNTUpICogMTAwKSArIFwiJSwgXCIgKyB0aGlzLl9yb3VuZEEgKyBcIilcIjtcbiAgfSxcbiAgdG9OYW1lOiBmdW5jdGlvbiB0b05hbWUoKSB7XG4gICAgaWYgKHRoaXMuX2EgPT09IDApIHtcbiAgICAgIHJldHVybiBcInRyYW5zcGFyZW50XCI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hIDwgMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gaGV4TmFtZXNbcmdiVG9IZXgodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYiwgdHJ1ZSldIHx8IGZhbHNlO1xuICB9LFxuICB0b0ZpbHRlcjogZnVuY3Rpb24gdG9GaWx0ZXIoc2Vjb25kQ29sb3IpIHtcbiAgICB2YXIgaGV4OFN0cmluZyA9IFwiI1wiICsgcmdiYVRvQXJnYkhleCh0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iLCB0aGlzLl9hKTtcbiAgICB2YXIgc2Vjb25kSGV4OFN0cmluZyA9IGhleDhTdHJpbmc7XG4gICAgdmFyIGdyYWRpZW50VHlwZSA9IHRoaXMuX2dyYWRpZW50VHlwZSA/IFwiR3JhZGllbnRUeXBlID0gMSwgXCIgOiBcIlwiO1xuICAgIGlmIChzZWNvbmRDb2xvcikge1xuICAgICAgdmFyIHMgPSB0aW55Y29sb3Ioc2Vjb25kQ29sb3IpO1xuICAgICAgc2Vjb25kSGV4OFN0cmluZyA9IFwiI1wiICsgcmdiYVRvQXJnYkhleChzLl9yLCBzLl9nLCBzLl9iLCBzLl9hKTtcbiAgICB9XG4gICAgcmV0dXJuIFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KFwiICsgZ3JhZGllbnRUeXBlICsgXCJzdGFydENvbG9yc3RyPVwiICsgaGV4OFN0cmluZyArIFwiLGVuZENvbG9yc3RyPVwiICsgc2Vjb25kSGV4OFN0cmluZyArIFwiKVwiO1xuICB9LFxuICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoZm9ybWF0KSB7XG4gICAgdmFyIGZvcm1hdFNldCA9ICEhZm9ybWF0O1xuICAgIGZvcm1hdCA9IGZvcm1hdCB8fCB0aGlzLl9mb3JtYXQ7XG4gICAgdmFyIGZvcm1hdHRlZFN0cmluZyA9IGZhbHNlO1xuICAgIHZhciBoYXNBbHBoYSA9IHRoaXMuX2EgPCAxICYmIHRoaXMuX2EgPj0gMDtcbiAgICB2YXIgbmVlZHNBbHBoYUZvcm1hdCA9ICFmb3JtYXRTZXQgJiYgaGFzQWxwaGEgJiYgKGZvcm1hdCA9PT0gXCJoZXhcIiB8fCBmb3JtYXQgPT09IFwiaGV4NlwiIHx8IGZvcm1hdCA9PT0gXCJoZXgzXCIgfHwgZm9ybWF0ID09PSBcImhleDRcIiB8fCBmb3JtYXQgPT09IFwiaGV4OFwiIHx8IGZvcm1hdCA9PT0gXCJuYW1lXCIpO1xuICAgIGlmIChuZWVkc0FscGhhRm9ybWF0KSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIFwidHJhbnNwYXJlbnRcIiwgYWxsIG90aGVyIG5vbi1hbHBoYSBmb3JtYXRzXG4gICAgICAvLyB3aWxsIHJldHVybiByZ2JhIHdoZW4gdGhlcmUgaXMgdHJhbnNwYXJlbmN5LlxuICAgICAgaWYgKGZvcm1hdCA9PT0gXCJuYW1lXCIgJiYgdGhpcy5fYSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b05hbWUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnRvUmdiU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IFwicmdiXCIpIHtcbiAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9SZ2JTdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gXCJwcmdiXCIpIHtcbiAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9QZXJjZW50YWdlUmdiU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IFwiaGV4XCIgfHwgZm9ybWF0ID09PSBcImhleDZcIikge1xuICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hleFN0cmluZygpO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSBcImhleDNcIikge1xuICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hleFN0cmluZyh0cnVlKTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gXCJoZXg0XCIpIHtcbiAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9IZXg4U3RyaW5nKHRydWUpO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSBcImhleDhcIikge1xuICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hleDhTdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gXCJuYW1lXCIpIHtcbiAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9OYW1lKCk7XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IFwiaHNsXCIpIHtcbiAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9Ic2xTdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gXCJoc3ZcIikge1xuICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hzdlN0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGVkU3RyaW5nIHx8IHRoaXMudG9IZXhTdHJpbmcoKTtcbiAgfSxcbiAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHJldHVybiB0aW55Y29sb3IodGhpcy50b1N0cmluZygpKTtcbiAgfSxcbiAgX2FwcGx5TW9kaWZpY2F0aW9uOiBmdW5jdGlvbiBfYXBwbHlNb2RpZmljYXRpb24oZm4sIGFyZ3MpIHtcbiAgICB2YXIgY29sb3IgPSBmbi5hcHBseShudWxsLCBbdGhpc10uY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJncykpKTtcbiAgICB0aGlzLl9yID0gY29sb3IuX3I7XG4gICAgdGhpcy5fZyA9IGNvbG9yLl9nO1xuICAgIHRoaXMuX2IgPSBjb2xvci5fYjtcbiAgICB0aGlzLnNldEFscGhhKGNvbG9yLl9hKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgbGlnaHRlbjogZnVuY3Rpb24gbGlnaHRlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oX2xpZ2h0ZW4sIGFyZ3VtZW50cyk7XG4gIH0sXG4gIGJyaWdodGVuOiBmdW5jdGlvbiBicmlnaHRlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oX2JyaWdodGVuLCBhcmd1bWVudHMpO1xuICB9LFxuICBkYXJrZW46IGZ1bmN0aW9uIGRhcmtlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oX2RhcmtlbiwgYXJndW1lbnRzKTtcbiAgfSxcbiAgZGVzYXR1cmF0ZTogZnVuY3Rpb24gZGVzYXR1cmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oX2Rlc2F0dXJhdGUsIGFyZ3VtZW50cyk7XG4gIH0sXG4gIHNhdHVyYXRlOiBmdW5jdGlvbiBzYXR1cmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oX3NhdHVyYXRlLCBhcmd1bWVudHMpO1xuICB9LFxuICBncmV5c2NhbGU6IGZ1bmN0aW9uIGdyZXlzY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oX2dyZXlzY2FsZSwgYXJndW1lbnRzKTtcbiAgfSxcbiAgc3BpbjogZnVuY3Rpb24gc3BpbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oX3NwaW4sIGFyZ3VtZW50cyk7XG4gIH0sXG4gIF9hcHBseUNvbWJpbmF0aW9uOiBmdW5jdGlvbiBfYXBwbHlDb21iaW5hdGlvbihmbiwgYXJncykge1xuICAgIHJldHVybiBmbi5hcHBseShudWxsLCBbdGhpc10uY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJncykpKTtcbiAgfSxcbiAgYW5hbG9nb3VzOiBmdW5jdGlvbiBhbmFsb2dvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oX2FuYWxvZ291cywgYXJndW1lbnRzKTtcbiAgfSxcbiAgY29tcGxlbWVudDogZnVuY3Rpb24gY29tcGxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihfY29tcGxlbWVudCwgYXJndW1lbnRzKTtcbiAgfSxcbiAgbW9ub2Nocm9tYXRpYzogZnVuY3Rpb24gbW9ub2Nocm9tYXRpYygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihfbW9ub2Nocm9tYXRpYywgYXJndW1lbnRzKTtcbiAgfSxcbiAgc3BsaXRjb21wbGVtZW50OiBmdW5jdGlvbiBzcGxpdGNvbXBsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oX3NwbGl0Y29tcGxlbWVudCwgYXJndW1lbnRzKTtcbiAgfSxcbiAgLy8gRGlzYWJsZWQgdW50aWwgaHR0cHM6Ly9naXRodWIuY29tL2Jncmlucy9UaW55Q29sb3IvaXNzdWVzLzI1NFxuICAvLyBwb2x5YWQ6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihwb2x5YWQsIFtudW1iZXJdKTtcbiAgLy8gfSxcbiAgdHJpYWQ6IGZ1bmN0aW9uIHRyaWFkKCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKHBvbHlhZCwgWzNdKTtcbiAgfSxcbiAgdGV0cmFkOiBmdW5jdGlvbiB0ZXRyYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24ocG9seWFkLCBbNF0pO1xuICB9XG59O1xuXG4vLyBJZiBpbnB1dCBpcyBhbiBvYmplY3QsIGZvcmNlIDEgaW50byBcIjEuMFwiIHRvIGhhbmRsZSByYXRpb3MgcHJvcGVybHlcbi8vIFN0cmluZyBpbnB1dCByZXF1aXJlcyBcIjEuMFwiIGFzIGlucHV0LCBzbyAxIHdpbGwgYmUgdHJlYXRlZCBhcyAxXG50aW55Y29sb3IuZnJvbVJhdGlvID0gZnVuY3Rpb24gKGNvbG9yLCBvcHRzKSB7XG4gIGlmIChfdHlwZW9mKGNvbG9yKSA9PSBcIm9iamVjdFwiKSB7XG4gICAgdmFyIG5ld0NvbG9yID0ge307XG4gICAgZm9yICh2YXIgaSBpbiBjb2xvcikge1xuICAgICAgaWYgKGNvbG9yLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGlmIChpID09PSBcImFcIikge1xuICAgICAgICAgIG5ld0NvbG9yW2ldID0gY29sb3JbaV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3Q29sb3JbaV0gPSBjb252ZXJ0VG9QZXJjZW50YWdlKGNvbG9yW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb2xvciA9IG5ld0NvbG9yO1xuICB9XG4gIHJldHVybiB0aW55Y29sb3IoY29sb3IsIG9wdHMpO1xufTtcblxuLy8gR2l2ZW4gYSBzdHJpbmcgb3Igb2JqZWN0LCBjb252ZXJ0IHRoYXQgaW5wdXQgdG8gUkdCXG4vLyBQb3NzaWJsZSBzdHJpbmcgaW5wdXRzOlxuLy9cbi8vICAgICBcInJlZFwiXG4vLyAgICAgXCIjZjAwXCIgb3IgXCJmMDBcIlxuLy8gICAgIFwiI2ZmMDAwMFwiIG9yIFwiZmYwMDAwXCJcbi8vICAgICBcIiNmZjAwMDAwMFwiIG9yIFwiZmYwMDAwMDBcIlxuLy8gICAgIFwicmdiIDI1NSAwIDBcIiBvciBcInJnYiAoMjU1LCAwLCAwKVwiXG4vLyAgICAgXCJyZ2IgMS4wIDAgMFwiIG9yIFwicmdiICgxLCAwLCAwKVwiXG4vLyAgICAgXCJyZ2JhICgyNTUsIDAsIDAsIDEpXCIgb3IgXCJyZ2JhIDI1NSwgMCwgMCwgMVwiXG4vLyAgICAgXCJyZ2JhICgxLjAsIDAsIDAsIDEpXCIgb3IgXCJyZ2JhIDEuMCwgMCwgMCwgMVwiXG4vLyAgICAgXCJoc2woMCwgMTAwJSwgNTAlKVwiIG9yIFwiaHNsIDAgMTAwJSA1MCVcIlxuLy8gICAgIFwiaHNsYSgwLCAxMDAlLCA1MCUsIDEpXCIgb3IgXCJoc2xhIDAgMTAwJSA1MCUsIDFcIlxuLy8gICAgIFwiaHN2KDAsIDEwMCUsIDEwMCUpXCIgb3IgXCJoc3YgMCAxMDAlIDEwMCVcIlxuLy9cbmZ1bmN0aW9uIGlucHV0VG9SR0IoY29sb3IpIHtcbiAgdmFyIHJnYiA9IHtcbiAgICByOiAwLFxuICAgIGc6IDAsXG4gICAgYjogMFxuICB9O1xuICB2YXIgYSA9IDE7XG4gIHZhciBzID0gbnVsbDtcbiAgdmFyIHYgPSBudWxsO1xuICB2YXIgbCA9IG51bGw7XG4gIHZhciBvayA9IGZhbHNlO1xuICB2YXIgZm9ybWF0ID0gZmFsc2U7XG4gIGlmICh0eXBlb2YgY29sb3IgPT0gXCJzdHJpbmdcIikge1xuICAgIGNvbG9yID0gc3RyaW5nSW5wdXRUb09iamVjdChjb2xvcik7XG4gIH1cbiAgaWYgKF90eXBlb2YoY29sb3IpID09IFwib2JqZWN0XCIpIHtcbiAgICBpZiAoaXNWYWxpZENTU1VuaXQoY29sb3IucikgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IuZykgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IuYikpIHtcbiAgICAgIHJnYiA9IHJnYlRvUmdiKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpO1xuICAgICAgb2sgPSB0cnVlO1xuICAgICAgZm9ybWF0ID0gU3RyaW5nKGNvbG9yLnIpLnN1YnN0cigtMSkgPT09IFwiJVwiID8gXCJwcmdiXCIgOiBcInJnYlwiO1xuICAgIH0gZWxzZSBpZiAoaXNWYWxpZENTU1VuaXQoY29sb3IuaCkgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IucykgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IudikpIHtcbiAgICAgIHMgPSBjb252ZXJ0VG9QZXJjZW50YWdlKGNvbG9yLnMpO1xuICAgICAgdiA9IGNvbnZlcnRUb1BlcmNlbnRhZ2UoY29sb3Iudik7XG4gICAgICByZ2IgPSBoc3ZUb1JnYihjb2xvci5oLCBzLCB2KTtcbiAgICAgIG9rID0gdHJ1ZTtcbiAgICAgIGZvcm1hdCA9IFwiaHN2XCI7XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkQ1NTVW5pdChjb2xvci5oKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5zKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5sKSkge1xuICAgICAgcyA9IGNvbnZlcnRUb1BlcmNlbnRhZ2UoY29sb3Iucyk7XG4gICAgICBsID0gY29udmVydFRvUGVyY2VudGFnZShjb2xvci5sKTtcbiAgICAgIHJnYiA9IGhzbFRvUmdiKGNvbG9yLmgsIHMsIGwpO1xuICAgICAgb2sgPSB0cnVlO1xuICAgICAgZm9ybWF0ID0gXCJoc2xcIjtcbiAgICB9XG4gICAgaWYgKGNvbG9yLmhhc093blByb3BlcnR5KFwiYVwiKSkge1xuICAgICAgYSA9IGNvbG9yLmE7XG4gICAgfVxuICB9XG4gIGEgPSBib3VuZEFscGhhKGEpO1xuICByZXR1cm4ge1xuICAgIG9rOiBvayxcbiAgICBmb3JtYXQ6IGNvbG9yLmZvcm1hdCB8fCBmb3JtYXQsXG4gICAgcjogTWF0aC5taW4oMjU1LCBNYXRoLm1heChyZ2IuciwgMCkpLFxuICAgIGc6IE1hdGgubWluKDI1NSwgTWF0aC5tYXgocmdiLmcsIDApKSxcbiAgICBiOiBNYXRoLm1pbigyNTUsIE1hdGgubWF4KHJnYi5iLCAwKSksXG4gICAgYTogYVxuICB9O1xufVxuXG4vLyBDb252ZXJzaW9uIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gYHJnYlRvSHNsYCwgYHJnYlRvSHN2YCwgYGhzbFRvUmdiYCwgYGhzdlRvUmdiYCBtb2RpZmllZCBmcm9tOlxuLy8gPGh0dHA6Ly9tamlqYWNrc29uLmNvbS8yMDA4LzAyL3JnYi10by1oc2wtYW5kLXJnYi10by1oc3YtY29sb3ItbW9kZWwtY29udmVyc2lvbi1hbGdvcml0aG1zLWluLWphdmFzY3JpcHQ+XG5cbi8vIGByZ2JUb1JnYmBcbi8vIEhhbmRsZSBib3VuZHMgLyBwZXJjZW50YWdlIGNoZWNraW5nIHRvIGNvbmZvcm0gdG8gQ1NTIGNvbG9yIHNwZWNcbi8vIDxodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLz5cbi8vICpBc3N1bWVzOiogciwgZywgYiBpbiBbMCwgMjU1XSBvciBbMCwgMV1cbi8vICpSZXR1cm5zOiogeyByLCBnLCBiIH0gaW4gWzAsIDI1NV1cbmZ1bmN0aW9uIHJnYlRvUmdiKHIsIGcsIGIpIHtcbiAgcmV0dXJuIHtcbiAgICByOiBib3VuZDAxKHIsIDI1NSkgKiAyNTUsXG4gICAgZzogYm91bmQwMShnLCAyNTUpICogMjU1LFxuICAgIGI6IGJvdW5kMDEoYiwgMjU1KSAqIDI1NVxuICB9O1xufVxuXG4vLyBgcmdiVG9Ic2xgXG4vLyBDb252ZXJ0cyBhbiBSR0IgY29sb3IgdmFsdWUgdG8gSFNMLlxuLy8gKkFzc3VtZXM6KiByLCBnLCBhbmQgYiBhcmUgY29udGFpbmVkIGluIFswLCAyNTVdIG9yIFswLCAxXVxuLy8gKlJldHVybnM6KiB7IGgsIHMsIGwgfSBpbiBbMCwxXVxuZnVuY3Rpb24gcmdiVG9Ic2wociwgZywgYikge1xuICByID0gYm91bmQwMShyLCAyNTUpO1xuICBnID0gYm91bmQwMShnLCAyNTUpO1xuICBiID0gYm91bmQwMShiLCAyNTUpO1xuICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gIHZhciBoLFxuICAgIHMsXG4gICAgbCA9IChtYXggKyBtaW4pIC8gMjtcbiAgaWYgKG1heCA9PSBtaW4pIHtcbiAgICBoID0gcyA9IDA7IC8vIGFjaHJvbWF0aWNcbiAgfSBlbHNlIHtcbiAgICB2YXIgZCA9IG1heCAtIG1pbjtcbiAgICBzID0gbCA+IDAuNSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbik7XG4gICAgc3dpdGNoIChtYXgpIHtcbiAgICAgIGNhc2UgcjpcbiAgICAgICAgaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZzpcbiAgICAgICAgaCA9IChiIC0gcikgLyBkICsgMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGI6XG4gICAgICAgIGggPSAociAtIGcpIC8gZCArIDQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBoIC89IDY7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBoOiBoLFxuICAgIHM6IHMsXG4gICAgbDogbFxuICB9O1xufVxuXG4vLyBgaHNsVG9SZ2JgXG4vLyBDb252ZXJ0cyBhbiBIU0wgY29sb3IgdmFsdWUgdG8gUkdCLlxuLy8gKkFzc3VtZXM6KiBoIGlzIGNvbnRhaW5lZCBpbiBbMCwgMV0gb3IgWzAsIDM2MF0gYW5kIHMgYW5kIGwgYXJlIGNvbnRhaW5lZCBbMCwgMV0gb3IgWzAsIDEwMF1cbi8vICpSZXR1cm5zOiogeyByLCBnLCBiIH0gaW4gdGhlIHNldCBbMCwgMjU1XVxuZnVuY3Rpb24gaHNsVG9SZ2IoaCwgcywgbCkge1xuICB2YXIgciwgZywgYjtcbiAgaCA9IGJvdW5kMDEoaCwgMzYwKTtcbiAgcyA9IGJvdW5kMDEocywgMTAwKTtcbiAgbCA9IGJvdW5kMDEobCwgMTAwKTtcbiAgZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XG4gICAgaWYgKHQgPCAwKSB0ICs9IDE7XG4gICAgaWYgKHQgPiAxKSB0IC09IDE7XG4gICAgaWYgKHQgPCAxIC8gNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XG4gICAgaWYgKHQgPCAxIC8gMikgcmV0dXJuIHE7XG4gICAgaWYgKHQgPCAyIC8gMykgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2O1xuICAgIHJldHVybiBwO1xuICB9XG4gIGlmIChzID09PSAwKSB7XG4gICAgciA9IGcgPSBiID0gbDsgLy8gYWNocm9tYXRpY1xuICB9IGVsc2Uge1xuICAgIHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICB2YXIgcCA9IDIgKiBsIC0gcTtcbiAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpO1xuICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xuICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxIC8gMyk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByOiByICogMjU1LFxuICAgIGc6IGcgKiAyNTUsXG4gICAgYjogYiAqIDI1NVxuICB9O1xufVxuXG4vLyBgcmdiVG9Ic3ZgXG4vLyBDb252ZXJ0cyBhbiBSR0IgY29sb3IgdmFsdWUgdG8gSFNWXG4vLyAqQXNzdW1lczoqIHIsIGcsIGFuZCBiIGFyZSBjb250YWluZWQgaW4gdGhlIHNldCBbMCwgMjU1XSBvciBbMCwgMV1cbi8vICpSZXR1cm5zOiogeyBoLCBzLCB2IH0gaW4gWzAsMV1cbmZ1bmN0aW9uIHJnYlRvSHN2KHIsIGcsIGIpIHtcbiAgciA9IGJvdW5kMDEociwgMjU1KTtcbiAgZyA9IGJvdW5kMDEoZywgMjU1KTtcbiAgYiA9IGJvdW5kMDEoYiwgMjU1KTtcbiAgdmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpLFxuICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICB2YXIgaCxcbiAgICBzLFxuICAgIHYgPSBtYXg7XG4gIHZhciBkID0gbWF4IC0gbWluO1xuICBzID0gbWF4ID09PSAwID8gMCA6IGQgLyBtYXg7XG4gIGlmIChtYXggPT0gbWluKSB7XG4gICAgaCA9IDA7IC8vIGFjaHJvbWF0aWNcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKG1heCkge1xuICAgICAgY2FzZSByOlxuICAgICAgICBoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBnOlxuICAgICAgICBoID0gKGIgLSByKSAvIGQgKyAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYjpcbiAgICAgICAgaCA9IChyIC0gZykgLyBkICsgNDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGggLz0gNjtcbiAgfVxuICByZXR1cm4ge1xuICAgIGg6IGgsXG4gICAgczogcyxcbiAgICB2OiB2XG4gIH07XG59XG5cbi8vIGBoc3ZUb1JnYmBcbi8vIENvbnZlcnRzIGFuIEhTViBjb2xvciB2YWx1ZSB0byBSR0IuXG4vLyAqQXNzdW1lczoqIGggaXMgY29udGFpbmVkIGluIFswLCAxXSBvciBbMCwgMzYwXSBhbmQgcyBhbmQgdiBhcmUgY29udGFpbmVkIGluIFswLCAxXSBvciBbMCwgMTAwXVxuLy8gKlJldHVybnM6KiB7IHIsIGcsIGIgfSBpbiB0aGUgc2V0IFswLCAyNTVdXG5mdW5jdGlvbiBoc3ZUb1JnYihoLCBzLCB2KSB7XG4gIGggPSBib3VuZDAxKGgsIDM2MCkgKiA2O1xuICBzID0gYm91bmQwMShzLCAxMDApO1xuICB2ID0gYm91bmQwMSh2LCAxMDApO1xuICB2YXIgaSA9IE1hdGguZmxvb3IoaCksXG4gICAgZiA9IGggLSBpLFxuICAgIHAgPSB2ICogKDEgLSBzKSxcbiAgICBxID0gdiAqICgxIC0gZiAqIHMpLFxuICAgIHQgPSB2ICogKDEgLSAoMSAtIGYpICogcyksXG4gICAgbW9kID0gaSAlIDYsXG4gICAgciA9IFt2LCBxLCBwLCBwLCB0LCB2XVttb2RdLFxuICAgIGcgPSBbdCwgdiwgdiwgcSwgcCwgcF1bbW9kXSxcbiAgICBiID0gW3AsIHAsIHQsIHYsIHYsIHFdW21vZF07XG4gIHJldHVybiB7XG4gICAgcjogciAqIDI1NSxcbiAgICBnOiBnICogMjU1LFxuICAgIGI6IGIgKiAyNTVcbiAgfTtcbn1cblxuLy8gYHJnYlRvSGV4YFxuLy8gQ29udmVydHMgYW4gUkdCIGNvbG9yIHRvIGhleFxuLy8gQXNzdW1lcyByLCBnLCBhbmQgYiBhcmUgY29udGFpbmVkIGluIHRoZSBzZXQgWzAsIDI1NV1cbi8vIFJldHVybnMgYSAzIG9yIDYgY2hhcmFjdGVyIGhleFxuZnVuY3Rpb24gcmdiVG9IZXgociwgZywgYiwgYWxsb3czQ2hhcikge1xuICB2YXIgaGV4ID0gW3BhZDIoTWF0aC5yb3VuZChyKS50b1N0cmluZygxNikpLCBwYWQyKE1hdGgucm91bmQoZykudG9TdHJpbmcoMTYpKSwgcGFkMihNYXRoLnJvdW5kKGIpLnRvU3RyaW5nKDE2KSldO1xuXG4gIC8vIFJldHVybiBhIDMgY2hhcmFjdGVyIGhleCBpZiBwb3NzaWJsZVxuICBpZiAoYWxsb3czQ2hhciAmJiBoZXhbMF0uY2hhckF0KDApID09IGhleFswXS5jaGFyQXQoMSkgJiYgaGV4WzFdLmNoYXJBdCgwKSA9PSBoZXhbMV0uY2hhckF0KDEpICYmIGhleFsyXS5jaGFyQXQoMCkgPT0gaGV4WzJdLmNoYXJBdCgxKSkge1xuICAgIHJldHVybiBoZXhbMF0uY2hhckF0KDApICsgaGV4WzFdLmNoYXJBdCgwKSArIGhleFsyXS5jaGFyQXQoMCk7XG4gIH1cbiAgcmV0dXJuIGhleC5qb2luKFwiXCIpO1xufVxuXG4vLyBgcmdiYVRvSGV4YFxuLy8gQ29udmVydHMgYW4gUkdCQSBjb2xvciBwbHVzIGFscGhhIHRyYW5zcGFyZW5jeSB0byBoZXhcbi8vIEFzc3VtZXMgciwgZywgYiBhcmUgY29udGFpbmVkIGluIHRoZSBzZXQgWzAsIDI1NV0gYW5kXG4vLyBhIGluIFswLCAxXS4gUmV0dXJucyBhIDQgb3IgOCBjaGFyYWN0ZXIgcmdiYSBoZXhcbmZ1bmN0aW9uIHJnYmFUb0hleChyLCBnLCBiLCBhLCBhbGxvdzRDaGFyKSB7XG4gIHZhciBoZXggPSBbcGFkMihNYXRoLnJvdW5kKHIpLnRvU3RyaW5nKDE2KSksIHBhZDIoTWF0aC5yb3VuZChnKS50b1N0cmluZygxNikpLCBwYWQyKE1hdGgucm91bmQoYikudG9TdHJpbmcoMTYpKSwgcGFkMihjb252ZXJ0RGVjaW1hbFRvSGV4KGEpKV07XG5cbiAgLy8gUmV0dXJuIGEgNCBjaGFyYWN0ZXIgaGV4IGlmIHBvc3NpYmxlXG4gIGlmIChhbGxvdzRDaGFyICYmIGhleFswXS5jaGFyQXQoMCkgPT0gaGV4WzBdLmNoYXJBdCgxKSAmJiBoZXhbMV0uY2hhckF0KDApID09IGhleFsxXS5jaGFyQXQoMSkgJiYgaGV4WzJdLmNoYXJBdCgwKSA9PSBoZXhbMl0uY2hhckF0KDEpICYmIGhleFszXS5jaGFyQXQoMCkgPT0gaGV4WzNdLmNoYXJBdCgxKSkge1xuICAgIHJldHVybiBoZXhbMF0uY2hhckF0KDApICsgaGV4WzFdLmNoYXJBdCgwKSArIGhleFsyXS5jaGFyQXQoMCkgKyBoZXhbM10uY2hhckF0KDApO1xuICB9XG4gIHJldHVybiBoZXguam9pbihcIlwiKTtcbn1cblxuLy8gYHJnYmFUb0FyZ2JIZXhgXG4vLyBDb252ZXJ0cyBhbiBSR0JBIGNvbG9yIHRvIGFuIEFSR0IgSGV4OCBzdHJpbmdcbi8vIFJhcmVseSB1c2VkLCBidXQgcmVxdWlyZWQgZm9yIFwidG9GaWx0ZXIoKVwiXG5mdW5jdGlvbiByZ2JhVG9BcmdiSGV4KHIsIGcsIGIsIGEpIHtcbiAgdmFyIGhleCA9IFtwYWQyKGNvbnZlcnREZWNpbWFsVG9IZXgoYSkpLCBwYWQyKE1hdGgucm91bmQocikudG9TdHJpbmcoMTYpKSwgcGFkMihNYXRoLnJvdW5kKGcpLnRvU3RyaW5nKDE2KSksIHBhZDIoTWF0aC5yb3VuZChiKS50b1N0cmluZygxNikpXTtcbiAgcmV0dXJuIGhleC5qb2luKFwiXCIpO1xufVxuXG4vLyBgZXF1YWxzYFxuLy8gQ2FuIGJlIGNhbGxlZCB3aXRoIGFueSB0aW55Y29sb3IgaW5wdXRcbnRpbnljb2xvci5lcXVhbHMgPSBmdW5jdGlvbiAoY29sb3IxLCBjb2xvcjIpIHtcbiAgaWYgKCFjb2xvcjEgfHwgIWNvbG9yMikgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdGlueWNvbG9yKGNvbG9yMSkudG9SZ2JTdHJpbmcoKSA9PSB0aW55Y29sb3IoY29sb3IyKS50b1JnYlN0cmluZygpO1xufTtcbnRpbnljb2xvci5yYW5kb20gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aW55Y29sb3IuZnJvbVJhdGlvKHtcbiAgICByOiBNYXRoLnJhbmRvbSgpLFxuICAgIGc6IE1hdGgucmFuZG9tKCksXG4gICAgYjogTWF0aC5yYW5kb20oKVxuICB9KTtcbn07XG5cbi8vIE1vZGlmaWNhdGlvbiBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoYW5rcyB0byBsZXNzLmpzIGZvciBzb21lIG9mIHRoZSBiYXNpY3MgaGVyZVxuLy8gPGh0dHBzOi8vZ2l0aHViLmNvbS9jbG91ZGhlYWQvbGVzcy5qcy9ibG9iL21hc3Rlci9saWIvbGVzcy9mdW5jdGlvbnMuanM+XG5cbmZ1bmN0aW9uIF9kZXNhdHVyYXRlKGNvbG9yLCBhbW91bnQpIHtcbiAgYW1vdW50ID0gYW1vdW50ID09PSAwID8gMCA6IGFtb3VudCB8fCAxMDtcbiAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgaHNsLnMgLT0gYW1vdW50IC8gMTAwO1xuICBoc2wucyA9IGNsYW1wMDEoaHNsLnMpO1xuICByZXR1cm4gdGlueWNvbG9yKGhzbCk7XG59XG5mdW5jdGlvbiBfc2F0dXJhdGUoY29sb3IsIGFtb3VudCkge1xuICBhbW91bnQgPSBhbW91bnQgPT09IDAgPyAwIDogYW1vdW50IHx8IDEwO1xuICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICBoc2wucyArPSBhbW91bnQgLyAxMDA7XG4gIGhzbC5zID0gY2xhbXAwMShoc2wucyk7XG4gIHJldHVybiB0aW55Y29sb3IoaHNsKTtcbn1cbmZ1bmN0aW9uIF9ncmV5c2NhbGUoY29sb3IpIHtcbiAgcmV0dXJuIHRpbnljb2xvcihjb2xvcikuZGVzYXR1cmF0ZSgxMDApO1xufVxuZnVuY3Rpb24gX2xpZ2h0ZW4oY29sb3IsIGFtb3VudCkge1xuICBhbW91bnQgPSBhbW91bnQgPT09IDAgPyAwIDogYW1vdW50IHx8IDEwO1xuICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICBoc2wubCArPSBhbW91bnQgLyAxMDA7XG4gIGhzbC5sID0gY2xhbXAwMShoc2wubCk7XG4gIHJldHVybiB0aW55Y29sb3IoaHNsKTtcbn1cbmZ1bmN0aW9uIF9icmlnaHRlbihjb2xvciwgYW1vdW50KSB7XG4gIGFtb3VudCA9IGFtb3VudCA9PT0gMCA/IDAgOiBhbW91bnQgfHwgMTA7XG4gIHZhciByZ2IgPSB0aW55Y29sb3IoY29sb3IpLnRvUmdiKCk7XG4gIHJnYi5yID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCByZ2IuciAtIE1hdGgucm91bmQoMjU1ICogLShhbW91bnQgLyAxMDApKSkpO1xuICByZ2IuZyA9IE1hdGgubWF4KDAsIE1hdGgubWluKDI1NSwgcmdiLmcgLSBNYXRoLnJvdW5kKDI1NSAqIC0oYW1vdW50IC8gMTAwKSkpKTtcbiAgcmdiLmIgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIHJnYi5iIC0gTWF0aC5yb3VuZCgyNTUgKiAtKGFtb3VudCAvIDEwMCkpKSk7XG4gIHJldHVybiB0aW55Y29sb3IocmdiKTtcbn1cbmZ1bmN0aW9uIF9kYXJrZW4oY29sb3IsIGFtb3VudCkge1xuICBhbW91bnQgPSBhbW91bnQgPT09IDAgPyAwIDogYW1vdW50IHx8IDEwO1xuICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICBoc2wubCAtPSBhbW91bnQgLyAxMDA7XG4gIGhzbC5sID0gY2xhbXAwMShoc2wubCk7XG4gIHJldHVybiB0aW55Y29sb3IoaHNsKTtcbn1cblxuLy8gU3BpbiB0YWtlcyBhIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGFtb3VudCB3aXRoaW4gWy0zNjAsIDM2MF0gaW5kaWNhdGluZyB0aGUgY2hhbmdlIG9mIGh1ZS5cbi8vIFZhbHVlcyBvdXRzaWRlIG9mIHRoaXMgcmFuZ2Ugd2lsbCBiZSB3cmFwcGVkIGludG8gdGhpcyByYW5nZS5cbmZ1bmN0aW9uIF9zcGluKGNvbG9yLCBhbW91bnQpIHtcbiAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgdmFyIGh1ZSA9IChoc2wuaCArIGFtb3VudCkgJSAzNjA7XG4gIGhzbC5oID0gaHVlIDwgMCA/IDM2MCArIGh1ZSA6IGh1ZTtcbiAgcmV0dXJuIHRpbnljb2xvcihoc2wpO1xufVxuXG4vLyBDb21iaW5hdGlvbiBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhhbmtzIHRvIGpRdWVyeSB4Q29sb3IgZm9yIHNvbWUgb2YgdGhlIGlkZWFzIGJlaGluZCB0aGVzZVxuLy8gPGh0dHBzOi8vZ2l0aHViLmNvbS9pbmZ1c2lvbi9qUXVlcnkteGNvbG9yL2Jsb2IvbWFzdGVyL2pxdWVyeS54Y29sb3IuanM+XG5cbmZ1bmN0aW9uIF9jb21wbGVtZW50KGNvbG9yKSB7XG4gIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gIGhzbC5oID0gKGhzbC5oICsgMTgwKSAlIDM2MDtcbiAgcmV0dXJuIHRpbnljb2xvcihoc2wpO1xufVxuZnVuY3Rpb24gcG9seWFkKGNvbG9yLCBudW1iZXIpIHtcbiAgaWYgKGlzTmFOKG51bWJlcikgfHwgbnVtYmVyIDw9IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcmd1bWVudCB0byBwb2x5YWQgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtcbiAgfVxuICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICB2YXIgcmVzdWx0ID0gW3Rpbnljb2xvcihjb2xvcildO1xuICB2YXIgc3RlcCA9IDM2MCAvIG51bWJlcjtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBudW1iZXI7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKHRpbnljb2xvcih7XG4gICAgICBoOiAoaHNsLmggKyBpICogc3RlcCkgJSAzNjAsXG4gICAgICBzOiBoc2wucyxcbiAgICAgIGw6IGhzbC5sXG4gICAgfSkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBfc3BsaXRjb21wbGVtZW50KGNvbG9yKSB7XG4gIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gIHZhciBoID0gaHNsLmg7XG4gIHJldHVybiBbdGlueWNvbG9yKGNvbG9yKSwgdGlueWNvbG9yKHtcbiAgICBoOiAoaCArIDcyKSAlIDM2MCxcbiAgICBzOiBoc2wucyxcbiAgICBsOiBoc2wubFxuICB9KSwgdGlueWNvbG9yKHtcbiAgICBoOiAoaCArIDIxNikgJSAzNjAsXG4gICAgczogaHNsLnMsXG4gICAgbDogaHNsLmxcbiAgfSldO1xufVxuZnVuY3Rpb24gX2FuYWxvZ291cyhjb2xvciwgcmVzdWx0cywgc2xpY2VzKSB7XG4gIHJlc3VsdHMgPSByZXN1bHRzIHx8IDY7XG4gIHNsaWNlcyA9IHNsaWNlcyB8fCAzMDtcbiAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgdmFyIHBhcnQgPSAzNjAgLyBzbGljZXM7XG4gIHZhciByZXQgPSBbdGlueWNvbG9yKGNvbG9yKV07XG4gIGZvciAoaHNsLmggPSAoaHNsLmggLSAocGFydCAqIHJlc3VsdHMgPj4gMSkgKyA3MjApICUgMzYwOyAtLXJlc3VsdHM7KSB7XG4gICAgaHNsLmggPSAoaHNsLmggKyBwYXJ0KSAlIDM2MDtcbiAgICByZXQucHVzaCh0aW55Y29sb3IoaHNsKSk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbmZ1bmN0aW9uIF9tb25vY2hyb21hdGljKGNvbG9yLCByZXN1bHRzKSB7XG4gIHJlc3VsdHMgPSByZXN1bHRzIHx8IDY7XG4gIHZhciBoc3YgPSB0aW55Y29sb3IoY29sb3IpLnRvSHN2KCk7XG4gIHZhciBoID0gaHN2LmgsXG4gICAgcyA9IGhzdi5zLFxuICAgIHYgPSBoc3YudjtcbiAgdmFyIHJldCA9IFtdO1xuICB2YXIgbW9kaWZpY2F0aW9uID0gMSAvIHJlc3VsdHM7XG4gIHdoaWxlIChyZXN1bHRzLS0pIHtcbiAgICByZXQucHVzaCh0aW55Y29sb3Ioe1xuICAgICAgaDogaCxcbiAgICAgIHM6IHMsXG4gICAgICB2OiB2XG4gICAgfSkpO1xuICAgIHYgPSAodiArIG1vZGlmaWNhdGlvbikgJSAxO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbi8vIFV0aWxpdHkgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudGlueWNvbG9yLm1peCA9IGZ1bmN0aW9uIChjb2xvcjEsIGNvbG9yMiwgYW1vdW50KSB7XG4gIGFtb3VudCA9IGFtb3VudCA9PT0gMCA/IDAgOiBhbW91bnQgfHwgNTA7XG4gIHZhciByZ2IxID0gdGlueWNvbG9yKGNvbG9yMSkudG9SZ2IoKTtcbiAgdmFyIHJnYjIgPSB0aW55Y29sb3IoY29sb3IyKS50b1JnYigpO1xuICB2YXIgcCA9IGFtb3VudCAvIDEwMDtcbiAgdmFyIHJnYmEgPSB7XG4gICAgcjogKHJnYjIuciAtIHJnYjEucikgKiBwICsgcmdiMS5yLFxuICAgIGc6IChyZ2IyLmcgLSByZ2IxLmcpICogcCArIHJnYjEuZyxcbiAgICBiOiAocmdiMi5iIC0gcmdiMS5iKSAqIHAgKyByZ2IxLmIsXG4gICAgYTogKHJnYjIuYSAtIHJnYjEuYSkgKiBwICsgcmdiMS5hXG4gIH07XG4gIHJldHVybiB0aW55Y29sb3IocmdiYSk7XG59O1xuXG4vLyBSZWFkYWJpbGl0eSBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gPGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jY29udHJhc3QtcmF0aW9kZWYgKFdDQUcgVmVyc2lvbiAyKVxuXG4vLyBgY29udHJhc3RgXG4vLyBBbmFseXplIHRoZSAyIGNvbG9ycyBhbmQgcmV0dXJucyB0aGUgY29sb3IgY29udHJhc3QgZGVmaW5lZCBieSAoV0NBRyBWZXJzaW9uIDIpXG50aW55Y29sb3IucmVhZGFiaWxpdHkgPSBmdW5jdGlvbiAoY29sb3IxLCBjb2xvcjIpIHtcbiAgdmFyIGMxID0gdGlueWNvbG9yKGNvbG9yMSk7XG4gIHZhciBjMiA9IHRpbnljb2xvcihjb2xvcjIpO1xuICByZXR1cm4gKE1hdGgubWF4KGMxLmdldEx1bWluYW5jZSgpLCBjMi5nZXRMdW1pbmFuY2UoKSkgKyAwLjA1KSAvIChNYXRoLm1pbihjMS5nZXRMdW1pbmFuY2UoKSwgYzIuZ2V0THVtaW5hbmNlKCkpICsgMC4wNSk7XG59O1xuXG4vLyBgaXNSZWFkYWJsZWBcbi8vIEVuc3VyZSB0aGF0IGZvcmVncm91bmQgYW5kIGJhY2tncm91bmQgY29sb3IgY29tYmluYXRpb25zIG1lZXQgV0NBRzIgZ3VpZGVsaW5lcy5cbi8vIFRoZSB0aGlyZCBhcmd1bWVudCBpcyBhbiBvcHRpb25hbCBPYmplY3QuXG4vLyAgICAgIHRoZSAnbGV2ZWwnIHByb3BlcnR5IHN0YXRlcyAnQUEnIG9yICdBQUEnIC0gaWYgbWlzc2luZyBvciBpbnZhbGlkLCBpdCBkZWZhdWx0cyB0byAnQUEnO1xuLy8gICAgICB0aGUgJ3NpemUnIHByb3BlcnR5IHN0YXRlcyAnbGFyZ2UnIG9yICdzbWFsbCcgLSBpZiBtaXNzaW5nIG9yIGludmFsaWQsIGl0IGRlZmF1bHRzIHRvICdzbWFsbCcuXG4vLyBJZiB0aGUgZW50aXJlIG9iamVjdCBpcyBhYnNlbnQsIGlzUmVhZGFibGUgZGVmYXVsdHMgdG8ge2xldmVsOlwiQUFcIixzaXplOlwic21hbGxcIn0uXG5cbi8vICpFeGFtcGxlKlxuLy8gICAgdGlueWNvbG9yLmlzUmVhZGFibGUoXCIjMDAwXCIsIFwiIzExMVwiKSA9PiBmYWxzZVxuLy8gICAgdGlueWNvbG9yLmlzUmVhZGFibGUoXCIjMDAwXCIsIFwiIzExMVwiLHtsZXZlbDpcIkFBXCIsc2l6ZTpcImxhcmdlXCJ9KSA9PiBmYWxzZVxudGlueWNvbG9yLmlzUmVhZGFibGUgPSBmdW5jdGlvbiAoY29sb3IxLCBjb2xvcjIsIHdjYWcyKSB7XG4gIHZhciByZWFkYWJpbGl0eSA9IHRpbnljb2xvci5yZWFkYWJpbGl0eShjb2xvcjEsIGNvbG9yMik7XG4gIHZhciB3Y2FnMlBhcm1zLCBvdXQ7XG4gIG91dCA9IGZhbHNlO1xuICB3Y2FnMlBhcm1zID0gdmFsaWRhdGVXQ0FHMlBhcm1zKHdjYWcyKTtcbiAgc3dpdGNoICh3Y2FnMlBhcm1zLmxldmVsICsgd2NhZzJQYXJtcy5zaXplKSB7XG4gICAgY2FzZSBcIkFBc21hbGxcIjpcbiAgICBjYXNlIFwiQUFBbGFyZ2VcIjpcbiAgICAgIG91dCA9IHJlYWRhYmlsaXR5ID49IDQuNTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJBQWxhcmdlXCI6XG4gICAgICBvdXQgPSByZWFkYWJpbGl0eSA+PSAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkFBQXNtYWxsXCI6XG4gICAgICBvdXQgPSByZWFkYWJpbGl0eSA+PSA3O1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn07XG5cbi8vIGBtb3N0UmVhZGFibGVgXG4vLyBHaXZlbiBhIGJhc2UgY29sb3IgYW5kIGEgbGlzdCBvZiBwb3NzaWJsZSBmb3JlZ3JvdW5kIG9yIGJhY2tncm91bmRcbi8vIGNvbG9ycyBmb3IgdGhhdCBiYXNlLCByZXR1cm5zIHRoZSBtb3N0IHJlYWRhYmxlIGNvbG9yLlxuLy8gT3B0aW9uYWxseSByZXR1cm5zIEJsYWNrIG9yIFdoaXRlIGlmIHRoZSBtb3N0IHJlYWRhYmxlIGNvbG9yIGlzIHVucmVhZGFibGUuXG4vLyAqRXhhbXBsZSpcbi8vICAgIHRpbnljb2xvci5tb3N0UmVhZGFibGUodGlueWNvbG9yLm1vc3RSZWFkYWJsZShcIiMxMjNcIiwgW1wiIzEyNFwiLCBcIiMxMjVcIl0se2luY2x1ZGVGYWxsYmFja0NvbG9yczpmYWxzZX0pLnRvSGV4U3RyaW5nKCk7IC8vIFwiIzExMjI1NVwiXG4vLyAgICB0aW55Y29sb3IubW9zdFJlYWRhYmxlKHRpbnljb2xvci5tb3N0UmVhZGFibGUoXCIjMTIzXCIsIFtcIiMxMjRcIiwgXCIjMTI1XCJdLHtpbmNsdWRlRmFsbGJhY2tDb2xvcnM6dHJ1ZX0pLnRvSGV4U3RyaW5nKCk7ICAvLyBcIiNmZmZmZmZcIlxuLy8gICAgdGlueWNvbG9yLm1vc3RSZWFkYWJsZShcIiNhODAxNWFcIiwgW1wiI2ZhZjNmM1wiXSx7aW5jbHVkZUZhbGxiYWNrQ29sb3JzOnRydWUsbGV2ZWw6XCJBQUFcIixzaXplOlwibGFyZ2VcIn0pLnRvSGV4U3RyaW5nKCk7IC8vIFwiI2ZhZjNmM1wiXG4vLyAgICB0aW55Y29sb3IubW9zdFJlYWRhYmxlKFwiI2E4MDE1YVwiLCBbXCIjZmFmM2YzXCJdLHtpbmNsdWRlRmFsbGJhY2tDb2xvcnM6dHJ1ZSxsZXZlbDpcIkFBQVwiLHNpemU6XCJzbWFsbFwifSkudG9IZXhTdHJpbmcoKTsgLy8gXCIjZmZmZmZmXCJcbnRpbnljb2xvci5tb3N0UmVhZGFibGUgPSBmdW5jdGlvbiAoYmFzZUNvbG9yLCBjb2xvckxpc3QsIGFyZ3MpIHtcbiAgdmFyIGJlc3RDb2xvciA9IG51bGw7XG4gIHZhciBiZXN0U2NvcmUgPSAwO1xuICB2YXIgcmVhZGFiaWxpdHk7XG4gIHZhciBpbmNsdWRlRmFsbGJhY2tDb2xvcnMsIGxldmVsLCBzaXplO1xuICBhcmdzID0gYXJncyB8fCB7fTtcbiAgaW5jbHVkZUZhbGxiYWNrQ29sb3JzID0gYXJncy5pbmNsdWRlRmFsbGJhY2tDb2xvcnM7XG4gIGxldmVsID0gYXJncy5sZXZlbDtcbiAgc2l6ZSA9IGFyZ3Muc2l6ZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xvckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICByZWFkYWJpbGl0eSA9IHRpbnljb2xvci5yZWFkYWJpbGl0eShiYXNlQ29sb3IsIGNvbG9yTGlzdFtpXSk7XG4gICAgaWYgKHJlYWRhYmlsaXR5ID4gYmVzdFNjb3JlKSB7XG4gICAgICBiZXN0U2NvcmUgPSByZWFkYWJpbGl0eTtcbiAgICAgIGJlc3RDb2xvciA9IHRpbnljb2xvcihjb2xvckxpc3RbaV0pO1xuICAgIH1cbiAgfVxuICBpZiAodGlueWNvbG9yLmlzUmVhZGFibGUoYmFzZUNvbG9yLCBiZXN0Q29sb3IsIHtcbiAgICBsZXZlbDogbGV2ZWwsXG4gICAgc2l6ZTogc2l6ZVxuICB9KSB8fCAhaW5jbHVkZUZhbGxiYWNrQ29sb3JzKSB7XG4gICAgcmV0dXJuIGJlc3RDb2xvcjtcbiAgfSBlbHNlIHtcbiAgICBhcmdzLmluY2x1ZGVGYWxsYmFja0NvbG9ycyA9IGZhbHNlO1xuICAgIHJldHVybiB0aW55Y29sb3IubW9zdFJlYWRhYmxlKGJhc2VDb2xvciwgW1wiI2ZmZlwiLCBcIiMwMDBcIl0sIGFyZ3MpO1xuICB9XG59O1xuXG4vLyBCaWcgTGlzdCBvZiBDb2xvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gPGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3MtY29sb3ItNC8jbmFtZWQtY29sb3JzPlxudmFyIG5hbWVzID0gdGlueWNvbG9yLm5hbWVzID0ge1xuICBhbGljZWJsdWU6IFwiZjBmOGZmXCIsXG4gIGFudGlxdWV3aGl0ZTogXCJmYWViZDdcIixcbiAgYXF1YTogXCIwZmZcIixcbiAgYXF1YW1hcmluZTogXCI3ZmZmZDRcIixcbiAgYXp1cmU6IFwiZjBmZmZmXCIsXG4gIGJlaWdlOiBcImY1ZjVkY1wiLFxuICBiaXNxdWU6IFwiZmZlNGM0XCIsXG4gIGJsYWNrOiBcIjAwMFwiLFxuICBibGFuY2hlZGFsbW9uZDogXCJmZmViY2RcIixcbiAgYmx1ZTogXCIwMGZcIixcbiAgYmx1ZXZpb2xldDogXCI4YTJiZTJcIixcbiAgYnJvd246IFwiYTUyYTJhXCIsXG4gIGJ1cmx5d29vZDogXCJkZWI4ODdcIixcbiAgYnVybnRzaWVubmE6IFwiZWE3ZTVkXCIsXG4gIGNhZGV0Ymx1ZTogXCI1ZjllYTBcIixcbiAgY2hhcnRyZXVzZTogXCI3ZmZmMDBcIixcbiAgY2hvY29sYXRlOiBcImQyNjkxZVwiLFxuICBjb3JhbDogXCJmZjdmNTBcIixcbiAgY29ybmZsb3dlcmJsdWU6IFwiNjQ5NWVkXCIsXG4gIGNvcm5zaWxrOiBcImZmZjhkY1wiLFxuICBjcmltc29uOiBcImRjMTQzY1wiLFxuICBjeWFuOiBcIjBmZlwiLFxuICBkYXJrYmx1ZTogXCIwMDAwOGJcIixcbiAgZGFya2N5YW46IFwiMDA4YjhiXCIsXG4gIGRhcmtnb2xkZW5yb2Q6IFwiYjg4NjBiXCIsXG4gIGRhcmtncmF5OiBcImE5YTlhOVwiLFxuICBkYXJrZ3JlZW46IFwiMDA2NDAwXCIsXG4gIGRhcmtncmV5OiBcImE5YTlhOVwiLFxuICBkYXJra2hha2k6IFwiYmRiNzZiXCIsXG4gIGRhcmttYWdlbnRhOiBcIjhiMDA4YlwiLFxuICBkYXJrb2xpdmVncmVlbjogXCI1NTZiMmZcIixcbiAgZGFya29yYW5nZTogXCJmZjhjMDBcIixcbiAgZGFya29yY2hpZDogXCI5OTMyY2NcIixcbiAgZGFya3JlZDogXCI4YjAwMDBcIixcbiAgZGFya3NhbG1vbjogXCJlOTk2N2FcIixcbiAgZGFya3NlYWdyZWVuOiBcIjhmYmM4ZlwiLFxuICBkYXJrc2xhdGVibHVlOiBcIjQ4M2Q4YlwiLFxuICBkYXJrc2xhdGVncmF5OiBcIjJmNGY0ZlwiLFxuICBkYXJrc2xhdGVncmV5OiBcIjJmNGY0ZlwiLFxuICBkYXJrdHVycXVvaXNlOiBcIjAwY2VkMVwiLFxuICBkYXJrdmlvbGV0OiBcIjk0MDBkM1wiLFxuICBkZWVwcGluazogXCJmZjE0OTNcIixcbiAgZGVlcHNreWJsdWU6IFwiMDBiZmZmXCIsXG4gIGRpbWdyYXk6IFwiNjk2OTY5XCIsXG4gIGRpbWdyZXk6IFwiNjk2OTY5XCIsXG4gIGRvZGdlcmJsdWU6IFwiMWU5MGZmXCIsXG4gIGZpcmVicmljazogXCJiMjIyMjJcIixcbiAgZmxvcmFsd2hpdGU6IFwiZmZmYWYwXCIsXG4gIGZvcmVzdGdyZWVuOiBcIjIyOGIyMlwiLFxuICBmdWNoc2lhOiBcImYwZlwiLFxuICBnYWluc2Jvcm86IFwiZGNkY2RjXCIsXG4gIGdob3N0d2hpdGU6IFwiZjhmOGZmXCIsXG4gIGdvbGQ6IFwiZmZkNzAwXCIsXG4gIGdvbGRlbnJvZDogXCJkYWE1MjBcIixcbiAgZ3JheTogXCI4MDgwODBcIixcbiAgZ3JlZW46IFwiMDA4MDAwXCIsXG4gIGdyZWVueWVsbG93OiBcImFkZmYyZlwiLFxuICBncmV5OiBcIjgwODA4MFwiLFxuICBob25leWRldzogXCJmMGZmZjBcIixcbiAgaG90cGluazogXCJmZjY5YjRcIixcbiAgaW5kaWFucmVkOiBcImNkNWM1Y1wiLFxuICBpbmRpZ286IFwiNGIwMDgyXCIsXG4gIGl2b3J5OiBcImZmZmZmMFwiLFxuICBraGFraTogXCJmMGU2OGNcIixcbiAgbGF2ZW5kZXI6IFwiZTZlNmZhXCIsXG4gIGxhdmVuZGVyYmx1c2g6IFwiZmZmMGY1XCIsXG4gIGxhd25ncmVlbjogXCI3Y2ZjMDBcIixcbiAgbGVtb25jaGlmZm9uOiBcImZmZmFjZFwiLFxuICBsaWdodGJsdWU6IFwiYWRkOGU2XCIsXG4gIGxpZ2h0Y29yYWw6IFwiZjA4MDgwXCIsXG4gIGxpZ2h0Y3lhbjogXCJlMGZmZmZcIixcbiAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IFwiZmFmYWQyXCIsXG4gIGxpZ2h0Z3JheTogXCJkM2QzZDNcIixcbiAgbGlnaHRncmVlbjogXCI5MGVlOTBcIixcbiAgbGlnaHRncmV5OiBcImQzZDNkM1wiLFxuICBsaWdodHBpbms6IFwiZmZiNmMxXCIsXG4gIGxpZ2h0c2FsbW9uOiBcImZmYTA3YVwiLFxuICBsaWdodHNlYWdyZWVuOiBcIjIwYjJhYVwiLFxuICBsaWdodHNreWJsdWU6IFwiODdjZWZhXCIsXG4gIGxpZ2h0c2xhdGVncmF5OiBcIjc4OVwiLFxuICBsaWdodHNsYXRlZ3JleTogXCI3ODlcIixcbiAgbGlnaHRzdGVlbGJsdWU6IFwiYjBjNGRlXCIsXG4gIGxpZ2h0eWVsbG93OiBcImZmZmZlMFwiLFxuICBsaW1lOiBcIjBmMFwiLFxuICBsaW1lZ3JlZW46IFwiMzJjZDMyXCIsXG4gIGxpbmVuOiBcImZhZjBlNlwiLFxuICBtYWdlbnRhOiBcImYwZlwiLFxuICBtYXJvb246IFwiODAwMDAwXCIsXG4gIG1lZGl1bWFxdWFtYXJpbmU6IFwiNjZjZGFhXCIsXG4gIG1lZGl1bWJsdWU6IFwiMDAwMGNkXCIsXG4gIG1lZGl1bW9yY2hpZDogXCJiYTU1ZDNcIixcbiAgbWVkaXVtcHVycGxlOiBcIjkzNzBkYlwiLFxuICBtZWRpdW1zZWFncmVlbjogXCIzY2IzNzFcIixcbiAgbWVkaXVtc2xhdGVibHVlOiBcIjdiNjhlZVwiLFxuICBtZWRpdW1zcHJpbmdncmVlbjogXCIwMGZhOWFcIixcbiAgbWVkaXVtdHVycXVvaXNlOiBcIjQ4ZDFjY1wiLFxuICBtZWRpdW12aW9sZXRyZWQ6IFwiYzcxNTg1XCIsXG4gIG1pZG5pZ2h0Ymx1ZTogXCIxOTE5NzBcIixcbiAgbWludGNyZWFtOiBcImY1ZmZmYVwiLFxuICBtaXN0eXJvc2U6IFwiZmZlNGUxXCIsXG4gIG1vY2Nhc2luOiBcImZmZTRiNVwiLFxuICBuYXZham93aGl0ZTogXCJmZmRlYWRcIixcbiAgbmF2eTogXCIwMDAwODBcIixcbiAgb2xkbGFjZTogXCJmZGY1ZTZcIixcbiAgb2xpdmU6IFwiODA4MDAwXCIsXG4gIG9saXZlZHJhYjogXCI2YjhlMjNcIixcbiAgb3JhbmdlOiBcImZmYTUwMFwiLFxuICBvcmFuZ2VyZWQ6IFwiZmY0NTAwXCIsXG4gIG9yY2hpZDogXCJkYTcwZDZcIixcbiAgcGFsZWdvbGRlbnJvZDogXCJlZWU4YWFcIixcbiAgcGFsZWdyZWVuOiBcIjk4ZmI5OFwiLFxuICBwYWxldHVycXVvaXNlOiBcImFmZWVlZVwiLFxuICBwYWxldmlvbGV0cmVkOiBcImRiNzA5M1wiLFxuICBwYXBheWF3aGlwOiBcImZmZWZkNVwiLFxuICBwZWFjaHB1ZmY6IFwiZmZkYWI5XCIsXG4gIHBlcnU6IFwiY2Q4NTNmXCIsXG4gIHBpbms6IFwiZmZjMGNiXCIsXG4gIHBsdW06IFwiZGRhMGRkXCIsXG4gIHBvd2RlcmJsdWU6IFwiYjBlMGU2XCIsXG4gIHB1cnBsZTogXCI4MDAwODBcIixcbiAgcmViZWNjYXB1cnBsZTogXCI2NjMzOTlcIixcbiAgcmVkOiBcImYwMFwiLFxuICByb3N5YnJvd246IFwiYmM4ZjhmXCIsXG4gIHJveWFsYmx1ZTogXCI0MTY5ZTFcIixcbiAgc2FkZGxlYnJvd246IFwiOGI0NTEzXCIsXG4gIHNhbG1vbjogXCJmYTgwNzJcIixcbiAgc2FuZHlicm93bjogXCJmNGE0NjBcIixcbiAgc2VhZ3JlZW46IFwiMmU4YjU3XCIsXG4gIHNlYXNoZWxsOiBcImZmZjVlZVwiLFxuICBzaWVubmE6IFwiYTA1MjJkXCIsXG4gIHNpbHZlcjogXCJjMGMwYzBcIixcbiAgc2t5Ymx1ZTogXCI4N2NlZWJcIixcbiAgc2xhdGVibHVlOiBcIjZhNWFjZFwiLFxuICBzbGF0ZWdyYXk6IFwiNzA4MDkwXCIsXG4gIHNsYXRlZ3JleTogXCI3MDgwOTBcIixcbiAgc25vdzogXCJmZmZhZmFcIixcbiAgc3ByaW5nZ3JlZW46IFwiMDBmZjdmXCIsXG4gIHN0ZWVsYmx1ZTogXCI0NjgyYjRcIixcbiAgdGFuOiBcImQyYjQ4Y1wiLFxuICB0ZWFsOiBcIjAwODA4MFwiLFxuICB0aGlzdGxlOiBcImQ4YmZkOFwiLFxuICB0b21hdG86IFwiZmY2MzQ3XCIsXG4gIHR1cnF1b2lzZTogXCI0MGUwZDBcIixcbiAgdmlvbGV0OiBcImVlODJlZVwiLFxuICB3aGVhdDogXCJmNWRlYjNcIixcbiAgd2hpdGU6IFwiZmZmXCIsXG4gIHdoaXRlc21va2U6IFwiZjVmNWY1XCIsXG4gIHllbGxvdzogXCJmZjBcIixcbiAgeWVsbG93Z3JlZW46IFwiOWFjZDMyXCJcbn07XG5cbi8vIE1ha2UgaXQgZWFzeSB0byBhY2Nlc3MgY29sb3JzIHZpYSBgaGV4TmFtZXNbaGV4XWBcbnZhciBoZXhOYW1lcyA9IHRpbnljb2xvci5oZXhOYW1lcyA9IGZsaXAobmFtZXMpO1xuXG4vLyBVdGlsaXRpZXNcbi8vIC0tLS0tLS0tLVxuXG4vLyBgeyAnbmFtZTEnOiAndmFsMScgfWAgYmVjb21lcyBgeyAndmFsMSc6ICduYW1lMScgfWBcbmZ1bmN0aW9uIGZsaXAobykge1xuICB2YXIgZmxpcHBlZCA9IHt9O1xuICBmb3IgKHZhciBpIGluIG8pIHtcbiAgICBpZiAoby5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgZmxpcHBlZFtvW2ldXSA9IGk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmbGlwcGVkO1xufVxuXG4vLyBSZXR1cm4gYSB2YWxpZCBhbHBoYSB2YWx1ZSBbMCwxXSB3aXRoIGFsbCBpbnZhbGlkIHZhbHVlcyBiZWluZyBzZXQgdG8gMVxuZnVuY3Rpb24gYm91bmRBbHBoYShhKSB7XG4gIGEgPSBwYXJzZUZsb2F0KGEpO1xuICBpZiAoaXNOYU4oYSkgfHwgYSA8IDAgfHwgYSA+IDEpIHtcbiAgICBhID0gMTtcbiAgfVxuICByZXR1cm4gYTtcbn1cblxuLy8gVGFrZSBpbnB1dCBmcm9tIFswLCBuXSBhbmQgcmV0dXJuIGl0IGFzIFswLCAxXVxuZnVuY3Rpb24gYm91bmQwMShuLCBtYXgpIHtcbiAgaWYgKGlzT25lUG9pbnRaZXJvKG4pKSBuID0gXCIxMDAlXCI7XG4gIHZhciBwcm9jZXNzUGVyY2VudCA9IGlzUGVyY2VudGFnZShuKTtcbiAgbiA9IE1hdGgubWluKG1heCwgTWF0aC5tYXgoMCwgcGFyc2VGbG9hdChuKSkpO1xuXG4gIC8vIEF1dG9tYXRpY2FsbHkgY29udmVydCBwZXJjZW50YWdlIGludG8gbnVtYmVyXG4gIGlmIChwcm9jZXNzUGVyY2VudCkge1xuICAgIG4gPSBwYXJzZUludChuICogbWF4LCAxMCkgLyAxMDA7XG4gIH1cblxuICAvLyBIYW5kbGUgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzXG4gIGlmIChNYXRoLmFicyhuIC0gbWF4KSA8IDAuMDAwMDAxKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICAvLyBDb252ZXJ0IGludG8gWzAsIDFdIHJhbmdlIGlmIGl0IGlzbid0IGFscmVhZHlcbiAgcmV0dXJuIG4gJSBtYXggLyBwYXJzZUZsb2F0KG1heCk7XG59XG5cbi8vIEZvcmNlIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMVxuZnVuY3Rpb24gY2xhbXAwMSh2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWluKDEsIE1hdGgubWF4KDAsIHZhbCkpO1xufVxuXG4vLyBQYXJzZSBhIGJhc2UtMTYgaGV4IHZhbHVlIGludG8gYSBiYXNlLTEwIGludGVnZXJcbmZ1bmN0aW9uIHBhcnNlSW50RnJvbUhleCh2YWwpIHtcbiAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTYpO1xufVxuXG4vLyBOZWVkIHRvIGhhbmRsZSAxLjAgYXMgMTAwJSwgc2luY2Ugb25jZSBpdCBpcyBhIG51bWJlciwgdGhlcmUgaXMgbm8gZGlmZmVyZW5jZSBiZXR3ZWVuIGl0IGFuZCAxXG4vLyA8aHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83NDIyMDcyL2phdmFzY3JpcHQtaG93LXRvLWRldGVjdC1udW1iZXItYXMtYS1kZWNpbWFsLWluY2x1ZGluZy0xLTA+XG5mdW5jdGlvbiBpc09uZVBvaW50WmVybyhuKSB7XG4gIHJldHVybiB0eXBlb2YgbiA9PSBcInN0cmluZ1wiICYmIG4uaW5kZXhPZihcIi5cIikgIT0gLTEgJiYgcGFyc2VGbG9hdChuKSA9PT0gMTtcbn1cblxuLy8gQ2hlY2sgdG8gc2VlIGlmIHN0cmluZyBwYXNzZWQgaW4gaXMgYSBwZXJjZW50YWdlXG5mdW5jdGlvbiBpc1BlcmNlbnRhZ2Uobikge1xuICByZXR1cm4gdHlwZW9mIG4gPT09IFwic3RyaW5nXCIgJiYgbi5pbmRleE9mKFwiJVwiKSAhPSAtMTtcbn1cblxuLy8gRm9yY2UgYSBoZXggdmFsdWUgdG8gaGF2ZSAyIGNoYXJhY3RlcnNcbmZ1bmN0aW9uIHBhZDIoYykge1xuICByZXR1cm4gYy5sZW5ndGggPT0gMSA/IFwiMFwiICsgYyA6IFwiXCIgKyBjO1xufVxuXG4vLyBSZXBsYWNlIGEgZGVjaW1hbCB3aXRoIGl0J3MgcGVyY2VudGFnZSB2YWx1ZVxuZnVuY3Rpb24gY29udmVydFRvUGVyY2VudGFnZShuKSB7XG4gIGlmIChuIDw9IDEpIHtcbiAgICBuID0gbiAqIDEwMCArIFwiJVwiO1xuICB9XG4gIHJldHVybiBuO1xufVxuXG4vLyBDb252ZXJ0cyBhIGRlY2ltYWwgdG8gYSBoZXggdmFsdWVcbmZ1bmN0aW9uIGNvbnZlcnREZWNpbWFsVG9IZXgoZCkge1xuICByZXR1cm4gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGQpICogMjU1KS50b1N0cmluZygxNik7XG59XG4vLyBDb252ZXJ0cyBhIGhleCB2YWx1ZSB0byBhIGRlY2ltYWxcbmZ1bmN0aW9uIGNvbnZlcnRIZXhUb0RlY2ltYWwoaCkge1xuICByZXR1cm4gcGFyc2VJbnRGcm9tSGV4KGgpIC8gMjU1O1xufVxudmFyIG1hdGNoZXJzID0gZnVuY3Rpb24gKCkge1xuICAvLyA8aHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy12YWx1ZXMvI2ludGVnZXJzPlxuICB2YXIgQ1NTX0lOVEVHRVIgPSBcIlstXFxcXCtdP1xcXFxkKyU/XCI7XG5cbiAgLy8gPGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtdmFsdWVzLyNudW1iZXItdmFsdWU+XG4gIHZhciBDU1NfTlVNQkVSID0gXCJbLVxcXFwrXT9cXFxcZCpcXFxcLlxcXFxkKyU/XCI7XG5cbiAgLy8gQWxsb3cgcG9zaXRpdmUvbmVnYXRpdmUgaW50ZWdlci9udW1iZXIuICBEb24ndCBjYXB0dXJlIHRoZSBlaXRoZXIvb3IsIGp1c3QgdGhlIGVudGlyZSBvdXRjb21lLlxuICB2YXIgQ1NTX1VOSVQgPSBcIig/OlwiICsgQ1NTX05VTUJFUiArIFwiKXwoPzpcIiArIENTU19JTlRFR0VSICsgXCIpXCI7XG5cbiAgLy8gQWN0dWFsIG1hdGNoaW5nLlxuICAvLyBQYXJlbnRoZXNlcyBhbmQgY29tbWFzIGFyZSBvcHRpb25hbCwgYnV0IG5vdCByZXF1aXJlZC5cbiAgLy8gV2hpdGVzcGFjZSBjYW4gdGFrZSB0aGUgcGxhY2Ugb2YgY29tbWFzIG9yIG9wZW5pbmcgcGFyZW5cbiAgdmFyIFBFUk1JU1NJVkVfTUFUQ0gzID0gXCJbXFxcXHN8XFxcXChdKyhcIiArIENTU19VTklUICsgXCIpWyx8XFxcXHNdKyhcIiArIENTU19VTklUICsgXCIpWyx8XFxcXHNdKyhcIiArIENTU19VTklUICsgXCIpXFxcXHMqXFxcXCk/XCI7XG4gIHZhciBQRVJNSVNTSVZFX01BVENINCA9IFwiW1xcXFxzfFxcXFwoXSsoXCIgKyBDU1NfVU5JVCArIFwiKVssfFxcXFxzXSsoXCIgKyBDU1NfVU5JVCArIFwiKVssfFxcXFxzXSsoXCIgKyBDU1NfVU5JVCArIFwiKVssfFxcXFxzXSsoXCIgKyBDU1NfVU5JVCArIFwiKVxcXFxzKlxcXFwpP1wiO1xuICByZXR1cm4ge1xuICAgIENTU19VTklUOiBuZXcgUmVnRXhwKENTU19VTklUKSxcbiAgICByZ2I6IG5ldyBSZWdFeHAoXCJyZ2JcIiArIFBFUk1JU1NJVkVfTUFUQ0gzKSxcbiAgICByZ2JhOiBuZXcgUmVnRXhwKFwicmdiYVwiICsgUEVSTUlTU0lWRV9NQVRDSDQpLFxuICAgIGhzbDogbmV3IFJlZ0V4cChcImhzbFwiICsgUEVSTUlTU0lWRV9NQVRDSDMpLFxuICAgIGhzbGE6IG5ldyBSZWdFeHAoXCJoc2xhXCIgKyBQRVJNSVNTSVZFX01BVENINCksXG4gICAgaHN2OiBuZXcgUmVnRXhwKFwiaHN2XCIgKyBQRVJNSVNTSVZFX01BVENIMyksXG4gICAgaHN2YTogbmV3IFJlZ0V4cChcImhzdmFcIiArIFBFUk1JU1NJVkVfTUFUQ0g0KSxcbiAgICBoZXgzOiAvXiM/KFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pJC8sXG4gICAgaGV4NjogL14jPyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvLFxuICAgIGhleDQ6IC9eIz8oWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pJC8sXG4gICAgaGV4ODogL14jPyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkkL1xuICB9O1xufSgpO1xuXG4vLyBgaXNWYWxpZENTU1VuaXRgXG4vLyBUYWtlIGluIGEgc2luZ2xlIHN0cmluZyAvIG51bWJlciBhbmQgY2hlY2sgdG8gc2VlIGlmIGl0IGxvb2tzIGxpa2UgYSBDU1MgdW5pdFxuLy8gKHNlZSBgbWF0Y2hlcnNgIGFib3ZlIGZvciBkZWZpbml0aW9uKS5cbmZ1bmN0aW9uIGlzVmFsaWRDU1NVbml0KGNvbG9yKSB7XG4gIHJldHVybiAhIW1hdGNoZXJzLkNTU19VTklULmV4ZWMoY29sb3IpO1xufVxuXG4vLyBgc3RyaW5nSW5wdXRUb09iamVjdGBcbi8vIFBlcm1pc3NpdmUgc3RyaW5nIHBhcnNpbmcuICBUYWtlIGluIGEgbnVtYmVyIG9mIGZvcm1hdHMsIGFuZCBvdXRwdXQgYW4gb2JqZWN0XG4vLyBiYXNlZCBvbiBkZXRlY3RlZCBmb3JtYXQuICBSZXR1cm5zIGB7IHIsIGcsIGIgfWAgb3IgYHsgaCwgcywgbCB9YCBvciBgeyBoLCBzLCB2fWBcbmZ1bmN0aW9uIHN0cmluZ0lucHV0VG9PYmplY3QoY29sb3IpIHtcbiAgY29sb3IgPSBjb2xvci5yZXBsYWNlKHRyaW1MZWZ0LCBcIlwiKS5yZXBsYWNlKHRyaW1SaWdodCwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgdmFyIG5hbWVkID0gZmFsc2U7XG4gIGlmIChuYW1lc1tjb2xvcl0pIHtcbiAgICBjb2xvciA9IG5hbWVzW2NvbG9yXTtcbiAgICBuYW1lZCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoY29sb3IgPT0gXCJ0cmFuc3BhcmVudFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IDAsXG4gICAgICBnOiAwLFxuICAgICAgYjogMCxcbiAgICAgIGE6IDAsXG4gICAgICBmb3JtYXQ6IFwibmFtZVwiXG4gICAgfTtcbiAgfVxuXG4gIC8vIFRyeSB0byBtYXRjaCBzdHJpbmcgaW5wdXQgdXNpbmcgcmVndWxhciBleHByZXNzaW9ucy5cbiAgLy8gS2VlcCBtb3N0IG9mIHRoZSBudW1iZXIgYm91bmRpbmcgb3V0IG9mIHRoaXMgZnVuY3Rpb24gLSBkb24ndCB3b3JyeSBhYm91dCBbMCwxXSBvciBbMCwxMDBdIG9yIFswLDM2MF1cbiAgLy8gSnVzdCByZXR1cm4gYW4gb2JqZWN0IGFuZCBsZXQgdGhlIGNvbnZlcnNpb24gZnVuY3Rpb25zIGhhbmRsZSB0aGF0LlxuICAvLyBUaGlzIHdheSB0aGUgcmVzdWx0IHdpbGwgYmUgdGhlIHNhbWUgd2hldGhlciB0aGUgdGlueWNvbG9yIGlzIGluaXRpYWxpemVkIHdpdGggc3RyaW5nIG9yIG9iamVjdC5cbiAgdmFyIG1hdGNoO1xuICBpZiAobWF0Y2ggPSBtYXRjaGVycy5yZ2IuZXhlYyhjb2xvcikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcjogbWF0Y2hbMV0sXG4gICAgICBnOiBtYXRjaFsyXSxcbiAgICAgIGI6IG1hdGNoWzNdXG4gICAgfTtcbiAgfVxuICBpZiAobWF0Y2ggPSBtYXRjaGVycy5yZ2JhLmV4ZWMoY29sb3IpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IG1hdGNoWzFdLFxuICAgICAgZzogbWF0Y2hbMl0sXG4gICAgICBiOiBtYXRjaFszXSxcbiAgICAgIGE6IG1hdGNoWzRdXG4gICAgfTtcbiAgfVxuICBpZiAobWF0Y2ggPSBtYXRjaGVycy5oc2wuZXhlYyhjb2xvcikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaDogbWF0Y2hbMV0sXG4gICAgICBzOiBtYXRjaFsyXSxcbiAgICAgIGw6IG1hdGNoWzNdXG4gICAgfTtcbiAgfVxuICBpZiAobWF0Y2ggPSBtYXRjaGVycy5oc2xhLmV4ZWMoY29sb3IpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGg6IG1hdGNoWzFdLFxuICAgICAgczogbWF0Y2hbMl0sXG4gICAgICBsOiBtYXRjaFszXSxcbiAgICAgIGE6IG1hdGNoWzRdXG4gICAgfTtcbiAgfVxuICBpZiAobWF0Y2ggPSBtYXRjaGVycy5oc3YuZXhlYyhjb2xvcikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaDogbWF0Y2hbMV0sXG4gICAgICBzOiBtYXRjaFsyXSxcbiAgICAgIHY6IG1hdGNoWzNdXG4gICAgfTtcbiAgfVxuICBpZiAobWF0Y2ggPSBtYXRjaGVycy5oc3ZhLmV4ZWMoY29sb3IpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGg6IG1hdGNoWzFdLFxuICAgICAgczogbWF0Y2hbMl0sXG4gICAgICB2OiBtYXRjaFszXSxcbiAgICAgIGE6IG1hdGNoWzRdXG4gICAgfTtcbiAgfVxuICBpZiAobWF0Y2ggPSBtYXRjaGVycy5oZXg4LmV4ZWMoY29sb3IpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IHBhcnNlSW50RnJvbUhleChtYXRjaFsxXSksXG4gICAgICBnOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMl0pLFxuICAgICAgYjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzNdKSxcbiAgICAgIGE6IGNvbnZlcnRIZXhUb0RlY2ltYWwobWF0Y2hbNF0pLFxuICAgICAgZm9ybWF0OiBuYW1lZCA/IFwibmFtZVwiIDogXCJoZXg4XCJcbiAgICB9O1xuICB9XG4gIGlmIChtYXRjaCA9IG1hdGNoZXJzLmhleDYuZXhlYyhjb2xvcikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzFdKSxcbiAgICAgIGc6IHBhcnNlSW50RnJvbUhleChtYXRjaFsyXSksXG4gICAgICBiOiBwYXJzZUludEZyb21IZXgobWF0Y2hbM10pLFxuICAgICAgZm9ybWF0OiBuYW1lZCA/IFwibmFtZVwiIDogXCJoZXhcIlxuICAgIH07XG4gIH1cbiAgaWYgKG1hdGNoID0gbWF0Y2hlcnMuaGV4NC5leGVjKGNvbG9yKSkge1xuICAgIHJldHVybiB7XG4gICAgICByOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMV0gKyBcIlwiICsgbWF0Y2hbMV0pLFxuICAgICAgZzogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzJdICsgXCJcIiArIG1hdGNoWzJdKSxcbiAgICAgIGI6IHBhcnNlSW50RnJvbUhleChtYXRjaFszXSArIFwiXCIgKyBtYXRjaFszXSksXG4gICAgICBhOiBjb252ZXJ0SGV4VG9EZWNpbWFsKG1hdGNoWzRdICsgXCJcIiArIG1hdGNoWzRdKSxcbiAgICAgIGZvcm1hdDogbmFtZWQgPyBcIm5hbWVcIiA6IFwiaGV4OFwiXG4gICAgfTtcbiAgfVxuICBpZiAobWF0Y2ggPSBtYXRjaGVycy5oZXgzLmV4ZWMoY29sb3IpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IHBhcnNlSW50RnJvbUhleChtYXRjaFsxXSArIFwiXCIgKyBtYXRjaFsxXSksXG4gICAgICBnOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMl0gKyBcIlwiICsgbWF0Y2hbMl0pLFxuICAgICAgYjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzNdICsgXCJcIiArIG1hdGNoWzNdKSxcbiAgICAgIGZvcm1hdDogbmFtZWQgPyBcIm5hbWVcIiA6IFwiaGV4XCJcbiAgICB9O1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlV0NBRzJQYXJtcyhwYXJtcykge1xuICAvLyByZXR1cm4gdmFsaWQgV0NBRzIgcGFybXMgZm9yIGlzUmVhZGFibGUuXG4gIC8vIElmIGlucHV0IHBhcm1zIGFyZSBpbnZhbGlkLCByZXR1cm4ge1wibGV2ZWxcIjpcIkFBXCIsIFwic2l6ZVwiOlwic21hbGxcIn1cbiAgdmFyIGxldmVsLCBzaXplO1xuICBwYXJtcyA9IHBhcm1zIHx8IHtcbiAgICBsZXZlbDogXCJBQVwiLFxuICAgIHNpemU6IFwic21hbGxcIlxuICB9O1xuICBsZXZlbCA9IChwYXJtcy5sZXZlbCB8fCBcIkFBXCIpLnRvVXBwZXJDYXNlKCk7XG4gIHNpemUgPSAocGFybXMuc2l6ZSB8fCBcInNtYWxsXCIpLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChsZXZlbCAhPT0gXCJBQVwiICYmIGxldmVsICE9PSBcIkFBQVwiKSB7XG4gICAgbGV2ZWwgPSBcIkFBXCI7XG4gIH1cbiAgaWYgKHNpemUgIT09IFwic21hbGxcIiAmJiBzaXplICE9PSBcImxhcmdlXCIpIHtcbiAgICBzaXplID0gXCJzbWFsbFwiO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGV2ZWw6IGxldmVsLFxuICAgIHNpemU6IHNpemVcbiAgfTtcbn1cblxuZXhwb3J0IHsgdGlueWNvbG9yIGFzIGRlZmF1bHQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnXG5pbXBvcnQgJy4vc3R5bGUvaGVhZGVyLmNzcydcbmltcG9ydCAnLi9zdHlsZS9uYXYuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlL21lbnUuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlL2NvbnRlbnQuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlL2l0ZW0uY3NzJ1xuaW1wb3J0ICcuL3N0eWxlL2RldGFpbC5jc3MnXG5pbXBvcnQgJy4vc3R5bGUvZGlhbG9nLmNzcydcbmltcG9ydCByZW5kZXJMYXlvdXQgZnJvbSAnLi91dGlscy9yZW5kZXInXG5cbmZ1bmN0aW9uIFNjcmVlbkNvbnRyb2xsZXIoKXtcbiAgICByZW5kZXJMYXlvdXQoKVxufVxuXG5TY3JlZW5Db250cm9sbGVyKClcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=