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
    min-width: 15%;
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
`, "",{"version":3,"sources":["webpack://./src/style/detail.css"],"names":[],"mappings":"AAAA;IACI,qCAAqC;IACrC,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,8CAA8C;IAC9C,wCAAwC;AAC5C;AACA;IACI,kCAAkC;AACtC;;AAEA;IACI;AACJ;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,SAAS;IACT,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;IACnC,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf;AACJ","sourcesContent":[".detail{\n    background: var(--background-color-2);\n    padding: 1rem 2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    min-width: 15%;\n    border-left: 1px solid var(--tab-border-color);\n    /* animation: slideInRight linear .3s; */\n}\n.detail[opening]{\n    animation: slideInRight linear .3s;\n}\n\n.detail[open]{\n    animation: none\n}\n\n.detail[closing]{\n    animation: slideOutRight linear .3s;\n}\n\n.detail h1{\n    margin: 2rem 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.detail p{\n    margin: 0 0 1rem 0;\n    width: 100%;\n}\n\n.detail div{\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n    gap: 1rem;\n    width: 100%;\n    margin-bottom: 2rem;\n}\n\n.detail button.delete__btn{\n    background: var(--delete-btn-color);\n    color: var(--text-color-light);\n}\n\n.detail button.close__btn{\n    position: absolute;\n    top: .1rem;\n    left: .1rem;\n    border:none;\n    background: inherit;\n    font-size: 1.2rem;\n    opacity: 0.5;\n}\n\n.detail button.close__btn:hover{\n    cursor: pointer;\n    color: var(--hover-text-color)\n}\n"],"sourceRoot":""}]);
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
    min-width: 50%;
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
    min-width: 40%;
    justify-content: start;
    align-items: center;
    padding: 0 1rem;
    border-right: 1px solid var(--nav-border-color);
    flex-grow: 20;
}

.to-do .title span{
    min-width: 200px;
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
}`, "",{"version":3,"sources":["webpack://./src/style/item.css"],"names":[],"mappings":"AAAA,SAAS;;AAET;;IAEI,aAAa;IACb,cAAc;IACd,cAAc;IACd,yCAAyC;IACzC,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;;IAEI,6BAA6B;AACjC;;AAEA;;IAEI,4CAA4C;AAChD;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8CAA8C;IAC9C,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,+CAA+C;IAC/C,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,+CAA+C;IAC/C,YAAY;AAChB;;AAEA;;;IAGI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,SAAS;IACT,YAAY;AAChB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,SAAS;IACT,YAAY;AAChB;;AAEA;;;IAGI,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;;IAEI,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,2CAA2C;AAC/C;AACA;IACI,8CAA8C;AAClD;AACA;IACI,4CAA4C;AAChD;;AAEA,aAAa;AACb;IACI,gBAAgB;IAChB,sBAAsB;IACtB,QAAQ;IACR,YAAY;IACZ,gCAAgC;IAChC,2CAA2C;IAC3C,aAAa;IACb,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,mBAAmB;IACnB,sCAAsC;IACtC,mDAAmD;AACvD;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["/* TODOS*/\n\n.to-do,\n.note{\n    display: flex;\n    min-width: 50%;\n    height: 2.5rem;\n    border: 1px solid var(--nav-border-color);\n    border-radius: 10px;\n    animation:fadeIn linear .3s;\n}\n\n.to-do[closing],\n.note[closing]{    \n    animation: fadeOut linear .3s;    \n}\n\n.to-do:hover,\n.note:hover{\n    box-shadow: var(--shadow-color) 5px 5px 10px;\n}\n\n.to-do .checkbox{\n    width: 2.5rem;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-right:1px solid var(--nav-border-color);\n    flex-grow: 1;\n}\n\n.to-do .title{\n    display: flex;\n    min-width: 40%;\n    justify-content: start;\n    align-items: center;\n    padding: 0 1rem;\n    border-right: 1px solid var(--nav-border-color);\n    flex-grow: 20;\n}\n\n.to-do .title span{\n    min-width: 200px;\n}\n\n.note .title{\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    padding: 0 1rem;\n    border-right: 1px solid var(--nav-border-color);\n    flex-grow: 5;\n}\n\n.to-do .checkbox input:hover,\n.to-do .title:hover,\n.note .title:hover{\n    cursor:pointer;\n}\n\n.to-do .buttons{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.3rem;\n    gap: 1rem;\n    width: 300px;\n}\n.note .buttons{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.3rem;\n    gap: 1rem;\n    width: 300px;\n}\n\n.to-do .buttons button,\n.note .buttons button\n    {\n    border: none;\n    background: inherit;\n    height: 100%;\n    font-size: 1.3rem;\n}\n\n.to-do .buttons button:hover,\n.note .buttons button:hover{\n    cursor: pointer;\n    color: var(--hover-text-color);\n}\n\n.to-do .priority__btn.priority__low:hover{\n    color: var(--priority-low-color) !important;\n}\n.to-do .priority__btn.priority__medium:hover{\n    color: var(--priority-medium-color) !important;\n}\n.to-do .priority__btn.priority__high:hover{\n    color: var(--priority-high-color) !important;\n}\n\n/* CHECKBOX */\ninput[type='checkbox']{\n    appearance: none;\n    background-color: #fff;\n    margin:0;\n    font:inherit;\n    color: var(--priority-low-color);\n    border: 1px solid var(--header-hover-color);\n    width: 1.2rem;\n    height:1.2rem;\n    border-radius: 5px;\n    display: grid;\n    place-content: center;\n}\n\ninput[type='checkbox']:hover{\n    border:2px solid var(--header-hover-color)\n}\n\ninput[type='checkbox']::before{\n    content: '';\n    width: 0.6rem;\n    height: 0.6rem;\n    border-radius: 3px;\n    transform: scale(0);\n    transition: .12s transform ease-in-out;\n    box-shadow: inset 1em 1em var(--priority-low-color);\n}\n\ninput[type='checkbox']:checked::before{\n    transform:scale(1);\n}"],"sourceRoot":""}]);
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
    min-width: 12%;
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

.menu__top{
    width: 90%;
}

.menu__top > div{
    width: 100%;
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
    min-width: 50%;
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
`, "",{"version":3,"sources":["webpack://./src/style/menu.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,qCAAqC;IACrC,+CAA+C;IAC/C,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;IACf,uCAAuC;AAC3C;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,yCAAyC;IACzC,mBAAmB;IACnB,gBAAgB;IAChB,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,0BAA0B;IAC1B,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,yCAAyC;IACzC,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,OAAO;AACX;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,qBAAqB;IACrB,qBAAqB;IACrB,wCAAwC;IACxC,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,yCAAyC;IACzC,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,6BAA6B;IAC7B,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd;AACJ;;AAEA;IACI,4CAA4C;;AAEhD;;AAEA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,8BAA8B;IAC9B,kCAAkC;IAClC,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;AAC/B;;AAEA;IACI,mCAAmC;IACnC,8BAA8B;IAC9B,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,4CAA4C;IAC5C,sBAAsB;AAC1B;;AAEA;IACI,4BAA4B;AAChC","sourcesContent":[".menu{\n    min-width: 12%;\n    background: var(--background-color-2);\n    border-right: 1px solid var(--tab-border-color);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1rem 0;\n    /* animation: slideInLeft linear .3s; */\n}\n\n.menu[closing]{\n    animation: slideOutLeft linear .3s;\n}\n\n.menu__top{\n    width: 90%;\n}\n\n.menu__top > div{\n    width: 100%;\n}\n\n.search__bar{\n    display: flex;\n    justify-content: space-between;\n    border: 1px solid var(--nav-border-color);\n    border-radius: 10px;\n    background: #FFF;\n    /* padding: 0 0.25rem; */\n    margin-bottom: 1rem;\n}\n\n.search__bar > input{\n    min-width: 50%;\n    border: none;\n    border-radius: 10px;\n    padding-left: .5rem;\n}\n\n.search__bar > input:focus{\n    outline:none;\n}\n\n.search__bar > div{\n    border-radius: 10px;\n}\n\n.search__bar > div:hover{\n    cursor: pointer;\n    color: var(--hover-text-color)\n}\n\n.menu__item{\n    display: flex;\n    justify-content: start;\n    margin-bottom: 1rem;\n    border-radius:10px;\n}\n\n.menu__item:hover{\n    cursor: pointer;\n    background:var(--hover-background-color);\n}\n\n.menu__item span{\n    display: flex;\n    align-items: center;\n    margin-left: 0.5rem;\n}\n\n.menu__item.project__list{\n    flex-direction: column;\n    border-radius:0;\n}\n\n.menu__item.project__list:hover{\n    cursor: default !important;\n    background: inherit;\n    color:inherit;\n}\n\n.menu__item.project__list > div{\n    display: flex;\n    justify-content: start;\n    position: relative;\n    border-radius: 10px;\n}\n\n.menu__item.project__list > div:hover{\n    background: var(--hover-background-color);\n    cursor: pointer;\n}\n\n.arrow {\n    position: absolute;\n    right:0;\n}\n\n.arrow i{\n    color: var(--text-color-dark) !important;\n}\n\n.menu__item.project__list ul{\n    margin: 1rem 0 0 0;\n    padding: 0;\n}\n\n.menu__item.project__list ul li{\n    list-style: none;\n    height: 40px;\n    margin-bottom: .75rem;\n    padding:.25rem 0.5rem;\n    border:1px solid var(--nav-border-color);\n    border-radius:10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    /* background: var(--nav-border-color); */\n    color: var(--text-color-dark);\n}\n\n.menu__item.project__list ul li span{\n    max-width: 5rem;\n    overflow: hidden;\n}\n\n.menu__item.project__list ul li span:hover{\n    cursor:pointer;\n}\n\n.menu__item.project__list ul li .buttons{\n    display: flex;\n    align-items: center;\n    gap: .3rem;\n}\n\n.menu__item.project__list ul li .buttons button{\n    border:none;\n    background: inherit;\n    color: var(--text-color-dark);\n    font-size:1.2rem;\n}\n\n.menu__item.project__list ul li .buttons button:hover{\n    cursor:pointer;\n    color:var(--hover-text-color)\n}\n\n.menu__item.project__list ul li:hover{\n    box-shadow: var(--shadow-color) 5px 5px 10px;\n\n}\n\n.project__add-btn{\n    border:none !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    margin-bottom: 0 !important;\n    background: inherit !important;\n}\n\n.project__add-btn:hover{\n    cursor: default !important;\n    box-shadow: none !important;\n}\n\n.project__add-btn button{\n    background: var(--nav-border-color);\n    color: var(--text-color-light);\n    font-size: 1.3rem;\n    border: none;\n    border-radius: 10px;\n    padding: 0 .5rem;\n}\n\n.project__add-btn button:hover{\n    cursor: pointer;\n    box-shadow: var(--shadow-color) 5px 5px 10px;\n    border:none !important;\n}\n\n.menu__bot{\n    font-size: 1.3rem !important;\n}\n"],"sourceRoot":""}]);
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
    /* overflow: hidden; */
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
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAEA;IACI,6BAA6B;IAC7B,6BAA6B;IAC7B,uBAAuB;IACvB,6BAA6B;IAC7B,2BAA2B;IAC3B,2BAA2B;IAC3B,2BAA2B;IAC3B,0BAA0B;IAC1B,yBAAyB;IACzB,sBAAsB;IACtB,sBAAsB;IACtB,wBAAwB;IACxB,wBAAwB;IACxB,2BAA2B;IAC3B,iCAAiC;IACjC,6BAA6B;IAC7B,gCAAgC;IAChC,8BAA8B;IAC9B,yBAAyB;IACzB,2BAA2B;IAC3B,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,YAAY;IACZ,WAAW;IACX,qCAAqC;IACrC,cAAc;IACd,6BAA6B;IAC7B,qCAAqC;IACrC,sBAAsB;AAC1B;AACA,WAAW;AACX;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,yCAAyC;IACzC,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,gBAAgB;IAChB,qCAAqC;AACzC;;AAEA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,OAAO,UAAU,EAAE;IACnB,KAAK,UAAU,EAAE;AACrB;;AAEA;IACI,OAAO,UAAU,EAAE;IACnB,KAAK,UAAU,EAAE;AACrB;;AAEA;IACI,OAAO,4BAA4B,EAAE;IACrC,KAAK,wBAAwB,EAAE;AACnC;;AAEA;IACI,OAAO,wBAAwB,EAAE;IACjC,KAAK,4BAA4B,EAAE;AACvC;;AAEA;IACI,OAAO,2BAA2B,EAAE;IACpC,KAAK,wBAAwB,EAAE;AACnC;;AAEA;IACI,OAAO,wBAAwB,EAAE;IACjC,KAAK,2BAA2B,EAAE;AACtC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,mCAAmC;AACvC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');\n\n:root{\n    --background-color-1: #F3EEEA;\n    --background-color-2: #EAE4E0;\n    --header-color: #776B5D;\n    --header-hover-color: #5a5147;\n    --tab-border-color: #B0A695;\n    --nav-border-color: #51493F;\n    --text-color-light: #F3EEEA;\n    --text-color-dark: #333333;\n    --text-color-nav: #51493F;\n    --inbox-color: #78ACC2;\n    --today-color: #56854B;\n    --project-color: #502ABC;\n    --history-color: #E1516B;\n    --hover-text-color: #C29778;\n    --hover-background-color: #FFFFFF;\n    --priority-low-color: #56854B;\n    --priority-medium-color: #dabe36;\n    --priority-high-color: #E15151;\n    --edit-btn-color: #78ACC2;\n    --delete-btn-color: #E15151;\n    --light-mode-color: #B89B01;\n    --shadow-color: #c6c6c6;\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    height: auto;\n    width: auto;\n    font-family: 'Inconsolata', monospace;\n    font-size:20px;\n    color: var(--text-color-dark);\n    background: var(--background-color-1);\n    /* overflow: hidden; */\n}\n/* Common */\n.df{\n    display: flex !important;\n}\n\n.d-off{\n    display: none !important;\n}\n\n.icon__big{\n    width: 2.5rem;\n    height: 2.5rem;\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n}\n\n.icon__big:hover{\n    cursor: pointer;\n    background: var(--hover-background-color);\n    color: var(--hover-text-color);\n}\n\n.icon__small{\n    font-size: 1.3rem;\n    width: 2rem;\n    height: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.priority__btn.priority__low{\n    color: var(--priority-low-color);\n}\n\n.priority__btn.priority__medium{\n    color: var(--priority-medium-color);\n}\n\n.priority__btn.priority__high{\n    color: var(--priority-high-color);\n}\n\n.btn{\n    border: none;\n    border-radius: 10px;\n    padding: .5rem 1rem;\n    font-weight: 600;\n    font-family: 'Inconsolata', monospace;\n}\n\n.btn:hover{\n    cursor: pointer;\n    opacity: .8;\n}\n\n.rotate-180{\n    transform: rotate(180deg);\n}\n\n.container{\n    display: flex;\n    flex-direction: row;\n    min-height: 95vh;\n}\n\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n\n@keyframes fadeOut {\n    from { opacity: 1; }\n    to { opacity: 0; }\n}\n\n@keyframes slideInLeft {\n    from { transform: translateX(-100%); }\n    to { transform: translateX(0); }\n}\n\n@keyframes slideOutLeft{\n    from { transform: translateX(0); }\n    to { transform: translateX(-100%); }\n}\n\n@keyframes slideInRight {\n    from { transform: translateX(100%); }\n    to { transform: translateX(0); }\n}\n\n@keyframes slideOutRight {\n    from { transform: translateX(0); }\n    to { transform: translateX(100%); }\n}\n\n.fadeIn{\n    animation:fadeIn linear .3s;\n}\n\n.fadeOut{\n    animation: fadeOut linear .3s;\n}\n\n.slideInLeft{\n    animation: slideInLeft linear .3s;\n}\n\n.slideOutLeft{\n    animation: slideOutLeft linear .3s;\n}\n\n.slideInRight{\n    animation: slideInRight linear .3s;\n}\n\n.slideOutRight{\n    animation: slideOutRight linear .3s;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project */ "./src/component/project.js");


const today = () => {
    const todayObj = Object.create((0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])())

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
            handleNoteEdit(noteForm, todoForm, index)
        } else {
            handleTodoEdit(todoForm, noteForm, index)
        }
    }

    function handleNoteEdit(noteForm, todoForm, index) {
        (0,_common_openThis__WEBPACK_IMPORTED_MODULE_4__["default"])(noteForm)
        ;(0,_common_closeThis__WEBPACK_IMPORTED_MODULE_2__["default"])(todoForm)
        ;(0,_editDialogHandler__WEBPACK_IMPORTED_MODULE_11__.editNoteDialogHandler)(currentProject.getItem(index))
    }

    function handleTodoEdit(todoForm, noteForm, index) {
        (0,_common_openThis__WEBPACK_IMPORTED_MODULE_4__["default"])(todoForm)
        ;(0,_common_closeThis__WEBPACK_IMPORTED_MODULE_2__["default"])(noteForm)
        ;(0,_editDialogHandler__WEBPACK_IMPORTED_MODULE_11__.editTodoDialogHandler)(currentProject.getItem(index))
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
        const newPriority = priority === 'low' ? 'medium' : priority === 'medium' ? 'high' : 'low'
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

            const history = localStorage.getItem('history') ? (0,_localStorage__WEBPACK_IMPORTED_MODULE_6__.loadFromLocalStorage)('history') : _component_Default_Project_history__WEBPACK_IMPORTED_MODULE_0__["default"]
            history.addItem(finishedItem)
            ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_6__.saveToLocalStorage)('history', history)
            console.log(history.getAllItem())

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
        const title = item.querySelector('.title')
        title.addEventListener('click', () => handleDetailClick(index))

        if (!isSearchResult) {
            const deleteBtn = item.querySelector('.delete__btn')
            deleteBtn.addEventListener('click', () => handleDeleteButtonClick(item, index))
        }

        if (!item.classList.contains('finished') && !isSearchResult) {
            const editBtn = item.querySelector('.edit__btn')
            editBtn.addEventListener('click', () => handleEditButtonClick(item, index))

            const moveBtn = item.querySelector('.move__btn')
            moveBtn.addEventListener('click', () => handleMoveButtonClick(item, index))

            if (item.classList.contains('to-do')) {
                const priorityBtn = item.querySelector('.priority__btn')
                priorityBtn.addEventListener('click', () => handlePriorityButtonClick(index, priorityBtn))

                const checkbox = item.querySelector('.checkbox__input')
                checkbox.addEventListener('change', () => handleCheckboxChange(item, index))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMkZBQTJGLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksdURBQXVELG9CQUFvQixxQkFBcUIscUJBQXFCLGdEQUFnRCwwQkFBMEIsa0NBQWtDLEdBQUcseUNBQXlDLHdDQUF3QyxHQUFHLCtCQUErQixtREFBbUQsR0FBRyxxQkFBcUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsOEJBQThCLDBCQUEwQixxREFBcUQsbUJBQW1CLEdBQUcsa0JBQWtCLG9CQUFvQixxQkFBcUIsNkJBQTZCLDBCQUEwQixzQkFBc0Isc0RBQXNELG9CQUFvQixHQUFHLHVCQUF1Qix1QkFBdUIsR0FBRyxpQkFBaUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsc0JBQXNCLHNEQUFzRCxtQkFBbUIsR0FBRyw0RUFBNEUscUJBQXFCLEdBQUcsb0JBQW9CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHdCQUF3QixnQkFBZ0IsbUJBQW1CLEdBQUcsaUJBQWlCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHdCQUF3QixnQkFBZ0IsbUJBQW1CLEdBQUcseURBQXlELG1CQUFtQiwwQkFBMEIsbUJBQW1CLHdCQUF3QixHQUFHLCtEQUErRCxzQkFBc0IscUNBQXFDLEdBQUcsOENBQThDLGtEQUFrRCxHQUFHLCtDQUErQyxxREFBcUQsR0FBRyw2Q0FBNkMsbURBQW1ELEdBQUcsMkNBQTJDLHVCQUF1Qiw2QkFBNkIsZUFBZSxtQkFBbUIsdUNBQXVDLGtEQUFrRCxvQkFBb0Isb0JBQW9CLHlCQUF5QixvQkFBb0IsNEJBQTRCLEdBQUcsaUNBQWlDLG1EQUFtRCxtQ0FBbUMsa0JBQWtCLG9CQUFvQixxQkFBcUIseUJBQXlCLDBCQUEwQiw2Q0FBNkMsMERBQTBELEdBQUcsMkNBQTJDLHlCQUF5QixHQUFHLG1CQUFtQjtBQUMzMkg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdJdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFGQUFxRixVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFP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eUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc0ZBQXNGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sVUFBVSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxV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O0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDdUI7QUFDTjtBQUMrQzs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AseUJBQXlCLDJEQUFVO0FBQ25DLDBCQUEwQiwyREFBVTs7QUFFcEM7QUFDQSxzQkFBc0IseUdBQStCO0FBQ3JEO0FBQ0EsdUJBQXVCLHlHQUErQjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0EsdURBQXVELDZEQUFpQjtBQUN4RTs7QUFFQTtBQUNBLGlFQUFlLHdCQUF3QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEaUI7QUFDSztBQUNKO0FBQ1E7QUFLOUI7QUFDSTtBQUNGOztBQUV0QztBQUNBO0FBQ3NDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVnQzs7QUFFaEM7QUFDQSxRQUFRLGNBQWM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQ0M7QUFDSDtBQUNDO0FBQ0c7QUFDSDtBQUNFO0FBQ0E7QUFDYzs7QUFFekM7QUFDQSxJQUFJLHlEQUFZO0FBQ2hCOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9jb250ZW50LmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL2RldGFpbC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9kaWFsb2cuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL2l0ZW0uY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUvbWVudS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9uYXYuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL2NvbnRlbnQuY3NzPzhhYmUiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9kZXRhaWwuY3NzP2U0YzciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9kaWFsb2cuY3NzPzMyMjAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9oZWFkZXIuY3NzPzlhMzMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9pdGVtLmNzcz9jYmQzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUvbWVudS5jc3M/ZWIxOCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL25hdi5jc3M/ZjMxMSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvRGVmYXVsdCBQcm9qZWN0L2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvRGVmYXVsdCBQcm9qZWN0L2luYm94LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50L0RlZmF1bHQgUHJvamVjdC9zZWFyY2hSZXN1bHQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvRGVmYXVsdCBQcm9qZWN0L3RvZGF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50L0xheW91dC9jcmVhdGVDb250ZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50L0xheW91dC9jcmVhdGVEZXRhaWwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZURpYWxvZ3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZUZpbmlzaGVkVG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudC9MYXlvdXQvY3JlYXRlSGVhZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50L0xheW91dC9jcmVhdGVMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZU1lbnUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZU5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZU5vdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZVVuZG9Cb3guanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvbm90ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudC9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50L3Byb2plY3RDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL2NvbW1vbi9hcHBlbmRDaGlsZHJlbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL2NvbW1vbi9jbG9zZVRoaXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy9jb21tb24vY3JlYXRlQnV0dG9uV2l0aENsYXNzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvY29tbW9uL2NyZWF0ZURpdldpdGhDbGFzcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL2NvbW1vbi9jcmVhdGVJY29uV2l0aENsYXNzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvY29tbW9uL2V4ZWN1dGVXaXRoQW5pbWF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvY29tbW9uL29wZW5UaGlzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvY29tbW9uL3NlYXJjaEFsbEl0ZW1zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvY29tbW9uL3NldFByaW9yaXR5Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL3VpLWhhbmRsZXJzL2FwcGVhcmFuY2VIYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvdWktaGFuZGxlcnMvY29uZmlybURpYWxvZ0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy91aS1oYW5kbGVycy9jb250ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL3VpLWhhbmRsZXJzL2RldGFpbEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy91aS1oYW5kbGVycy9lZGl0RGlhbG9nSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL3VpLWhhbmRsZXJzL2hlYWRlckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy91aS1oYW5kbGVycy9pdGVtRGlhbG9nSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL3VpLWhhbmRsZXJzL21lbnVIYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvdWktaGFuZGxlcnMvbW92ZURpYWxvZ0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy91aS1oYW5kbGVycy9uYXZIYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvdWktaGFuZGxlcnMvcHJvamVjdERpYWxvZ0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy91aS1oYW5kbGVycy91bmRvSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvYWRkTGVhZGluZ1plcm9zLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZGVmYXVsdE9wdGlvbnMubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvZm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9mb3JtYXQubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0RGF5T2ZZZWFyLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWsubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0RhdGUubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNWYWxpZC5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4ubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZkRheS5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWsubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZZZWFyLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvbnRlbnR7XG4gICAgZmxleC1ncm93OjE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDFyZW0gMi41cmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWRhcmspO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRlbnRfX3RpdGxle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuXG4uY29udGVudF9fdGl0bGUgaDF7XG4gICAgbWFyZ2luOiAycmVtIDA7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5jb250ZW50X190aXRsZSBpe1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmNvbnRlbnRfX3RpdGxlIGk6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1ob3Zlci10ZXh0LWNvbG9yKTtcbn1cblxuLmNvbnRlbnRfX2l0ZW1ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOjFyZW07XG59XG5cbi51bmRvX19ib3h7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1jb2xvcikgNXB4IDVweCAxMHB4O1xuICAgIGFuaW1hdGlvbjpmYWRlSW4gbGluZWFyIC4ycztcbn1cblxuLnVuZG9fX2JveCAuYnV0dG9uc3tcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnVuZG9fX2JveCAudW5kb19fYnRue1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWVkaXQtYnRuLWNvbG9yKTtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLnVuZG9fX2JveCAuY2xvc2VfX2J0bntcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZWxldGUtYnRuLWNvbG9yKTtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLnVuZG9fX2JveFtjbG9zaW5nXXtcbiAgICBhbmltYXRpb246ZmFkZU91dCBsaW5lYXIgLjJzO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2NvbnRlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQiw0Q0FBNEM7SUFDNUMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRlbnR7XFxuICAgIGZsZXgtZ3JvdzoxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItZGFyayk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNvbnRlbnRfX3RpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4uY29udGVudF9fdGl0bGUgaDF7XFxuICAgIG1hcmdpbjogMnJlbSAwO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmNvbnRlbnRfX3RpdGxlIGl7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jb250ZW50X190aXRsZSBpOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1ob3Zlci10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmNvbnRlbnRfX2l0ZW1ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6MXJlbTtcXG59XFxuXFxuLnVuZG9fX2JveHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWNvbG9yKSA1cHggNXB4IDEwcHg7XFxuICAgIGFuaW1hdGlvbjpmYWRlSW4gbGluZWFyIC4ycztcXG59XFxuXFxuLnVuZG9fX2JveCAuYnV0dG9uc3tcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi51bmRvX19ib3ggLnVuZG9fX2J0bntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZWRpdC1idG4tY29sb3IpO1xcbiAgICBjb2xvcjogI0ZGRjtcXG59XFxuXFxuLnVuZG9fX2JveCAuY2xvc2VfX2J0bntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGVsZXRlLWJ0bi1jb2xvcik7XFxuICAgIGNvbG9yOiAjRkZGO1xcbn1cXG5cXG4udW5kb19fYm94W2Nsb3Npbmdde1xcbiAgICBhbmltYXRpb246ZmFkZU91dCBsaW5lYXIgLjJzO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5kZXRhaWx7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi13aWR0aDogMTUlO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tdGFiLWJvcmRlci1jb2xvcik7XG4gICAgLyogYW5pbWF0aW9uOiBzbGlkZUluUmlnaHQgbGluZWFyIC4zczsgKi9cbn1cbi5kZXRhaWxbb3BlbmluZ117XG4gICAgYW5pbWF0aW9uOiBzbGlkZUluUmlnaHQgbGluZWFyIC4zcztcbn1cblxuLmRldGFpbFtvcGVuXXtcbiAgICBhbmltYXRpb246IG5vbmVcbn1cblxuLmRldGFpbFtjbG9zaW5nXXtcbiAgICBhbmltYXRpb246IHNsaWRlT3V0UmlnaHQgbGluZWFyIC4zcztcbn1cblxuLmRldGFpbCBoMXtcbiAgICBtYXJnaW46IDJyZW0gMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kZXRhaWwgcHtcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZXRhaWwgZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5kZXRhaWwgYnV0dG9uLmRlbGV0ZV9fYnRue1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRlbGV0ZS1idG4tY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbn1cblxuLmRldGFpbCBidXR0b24uY2xvc2VfX2J0bntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAuMXJlbTtcbiAgICBsZWZ0OiAuMXJlbTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRldGFpbCBidXR0b24uY2xvc2VfX2J0bjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWhvdmVyLXRleHQtY29sb3IpXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9kZXRhaWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLDhDQUE4QztJQUM5Qyx3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZGV0YWlse1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLTIpO1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLXdpZHRoOiAxNSU7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tdGFiLWJvcmRlci1jb2xvcik7XFxuICAgIC8qIGFuaW1hdGlvbjogc2xpZGVJblJpZ2h0IGxpbmVhciAuM3M7ICovXFxufVxcbi5kZXRhaWxbb3BlbmluZ117XFxuICAgIGFuaW1hdGlvbjogc2xpZGVJblJpZ2h0IGxpbmVhciAuM3M7XFxufVxcblxcbi5kZXRhaWxbb3Blbl17XFxuICAgIGFuaW1hdGlvbjogbm9uZVxcbn1cXG5cXG4uZGV0YWlsW2Nsb3Npbmdde1xcbiAgICBhbmltYXRpb246IHNsaWRlT3V0UmlnaHQgbGluZWFyIC4zcztcXG59XFxuXFxuLmRldGFpbCBoMXtcXG4gICAgbWFyZ2luOiAycmVtIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGV0YWlsIHB7XFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kZXRhaWwgZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uZGV0YWlsIGJ1dHRvbi5kZWxldGVfX2J0bntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGVsZXRlLWJ0bi1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG59XFxuXFxuLmRldGFpbCBidXR0b24uY2xvc2VfX2J0bntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC4xcmVtO1xcbiAgICBsZWZ0OiAuMXJlbTtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5kZXRhaWwgYnV0dG9uLmNsb3NlX19idG46aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWhvdmVyLXRleHQtY29sb3IpXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZGlhbG9ne1xuICAgIGJvcmRlcjpub25lO1xuICAgIGFuaW1hdGlvbjpmYWRlSW4gbGluZWFyIC4ycztcbn1cblxuZGlhbG9nOjpiYWNrZHJvcHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzMzU7XG4gICAgYW5pbWF0aW9uOmZhZGVJbiBsaW5lYXIgLjJzO1xufVxuXG5kaWFsb2dbY2xvc2luZ117XG4gICAgYW5pbWF0aW9uOmZhZGVPdXQgbGluZWFyIC4ycztcbn1cblxuZGlhbG9nIGRpdiB7XG4gICAgLyogU3R5bGluZyBmb3IgZm9ybSBkaXZzICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuZGlhbG9nIGlucHV0IHtcbiAgICAvKiBTdHlsaW5nIGZvciBmb3JtIGlucHV0cyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMCAuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcbn1cblxuZGlhbG9nIGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmRpYWxvZyBsYWJlbCB7XG4gICAgLyogU3R5bGluZyBmb3IgZm9ybSBsYWJlbHMgKi9cbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IC4ycmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XG59XG5cbmRpYWxvZyB0ZXh0YXJlYSB7XG4gICAgLyogU3R5bGluZyBmb3IgZm9ybSB0ZXh0YXJlYXMgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBwYWRkaW5nOiAuMnJlbSAuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcbn1cblxuZGlhbG9nIHRleHRhcmVhOmZvY3Vze1xuICAgIG91dGxpbmU6bm9uZTtcbn1cblxuZGlhbG9nIHNlbGVjdDpmb2N1c3tcbiAgICBvdXRsaW5lOm5vbmVcbn1cblxuZGlhbG9nIC5idXR0b25zIHtcbiAgICAvKiBTdHlsaW5nIGZvciBidXR0b24gY29udGFpbmVyICovXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5kaWFsb2cgLmFkZF9fYnRuIHtcbiAgICAvKiBTdHlsaW5nIGZvciBhZGQgYnV0dG9uICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG4gICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbn1cblxuZGlhbG9nIC5jbG9zZV9fYnRuIHtcbiAgICAvKiBTdHlsaW5nIGZvciBjbG9zZSBidXR0b24gKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWxldGUtYnRuLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG4gICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbn1cblxuLyogUHJvamVjdCBEaWFsb2cgc2VjdGlvbiAqL1xuI3Byb2plY3RfX2FkZC1kaWFsb2cge1xuICAgIC8qIFN0eWxpbmcgZm9yIHRoZSBkaWFsb2cgKi9cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTsgKi9cbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNwcm9qZWN0X19hZGQtZm9ybXtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLyogSXRlbSBkaWFsb2cgc2VjdGlvbiAqL1xuI2l0ZW1fX2FkZC1kaWFsb2cge1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7ICovXG59XG5cbiNpdGVtX19hZGQtZGlhbG9nIC5zZWxlY3RfX2l0ZW0tZm9ybSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNpdGVtX19hZGQtZGlhbG9nIC5zZWxlY3RfX2l0ZW0tZm9ybSBzZWxlY3Qge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMCAwLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xufVxuXG4jaXRlbV9fYWRkLWRpYWxvZz5mb3JtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbiNpdGVtX19tb3ZlLWRpYWxvZyBzZWxlY3QsXG4jaXRlbV9fYWRkLWRpYWxvZz5mb3JtPmRpdj5zZWxlY3Qge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAwIDAuMjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XG59XG5cbiNpdGVtX19hZGQtZGlhbG9nID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4jaXRlbV9fYWRkLWRpYWxvZyA+IGRpdiA+IGxhYmVse1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbiNpdGVtX19hZGQtZGlhbG9nPmRpdj5zZWxlY3Qge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMCAwLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xufVxuXG4vKiBFZGl0IGRpYWxvZyBzZWN0aW9uICovXG4jaXRlbV9fZWRpdC1kaWFsb2d7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLTIpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTsgKi9cbn1cblxuLyogQ29uZmlybSBkaWFsb2cgc2VjdGlvbiAqL1xuI2NvbmZpcm1fX2RpYWxvZ3tcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTsgKi9cbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2NvbmZpcm1fX2RpYWxvZz5zcGFuIHtcbiAgICAvKiBTdHlsaW5nIGZvciBmb3JtIGxhYmVscyAqL1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjJyZW07XG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcbn1cblxuLyogTW92ZSBkaWFsb2cgKi9cbiNpdGVtX19tb3ZlLWRpYWxvZ3tcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTsgKi9cbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2l0ZW1fX21vdmUtZGlhbG9nIGRpdntcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jaXRlbV9fbW92ZS1kaWFsb2cgc2VsZWN0e1xuICAgIHdpZHRoOiAyMDBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9kaWFsb2cuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDJDQUEyQztJQUMzQyw4QkFBOEI7SUFDOUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHlDQUF5QztJQUN6Qyw4QkFBOEI7SUFDOUIsNEJBQTRCO0FBQ2hDOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLDJCQUEyQjtJQUMzQiwrQ0FBK0M7SUFDL0Msa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBLHdCQUF3QjtBQUN4QjtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixxQ0FBcUM7QUFDekM7O0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsK0NBQStDO0FBQ25EOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLCtDQUErQztJQUMvQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIscUNBQXFDO0FBQ3pDOztBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLCtDQUErQztJQUMvQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaWFsb2d7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBhbmltYXRpb246ZmFkZUluIGxpbmVhciAuMnM7XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3B7XFxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzMzNTtcXG4gICAgYW5pbWF0aW9uOmZhZGVJbiBsaW5lYXIgLjJzO1xcbn1cXG5cXG5kaWFsb2dbY2xvc2luZ117XFxuICAgIGFuaW1hdGlvbjpmYWRlT3V0IGxpbmVhciAuMnM7XFxufVxcblxcbmRpYWxvZyBkaXYge1xcbiAgICAvKiBTdHlsaW5nIGZvciBmb3JtIGRpdnMgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuZGlhbG9nIGlucHV0IHtcXG4gICAgLyogU3R5bGluZyBmb3IgZm9ybSBpbnB1dHMgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAwIC41cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxufVxcblxcbmRpYWxvZyBpbnB1dDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuZGlhbG9nIGxhYmVsIHtcXG4gICAgLyogU3R5bGluZyBmb3IgZm9ybSBsYWJlbHMgKi9cXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC4ycmVtO1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbn1cXG5cXG5kaWFsb2cgdGV4dGFyZWEge1xcbiAgICAvKiBTdHlsaW5nIGZvciBmb3JtIHRleHRhcmVhcyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgcGFkZGluZzogLjJyZW0gLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcXG59XFxuXFxuZGlhbG9nIHRleHRhcmVhOmZvY3Vze1xcbiAgICBvdXRsaW5lOm5vbmU7XFxufVxcblxcbmRpYWxvZyBzZWxlY3Q6Zm9jdXN7XFxuICAgIG91dGxpbmU6bm9uZVxcbn1cXG5cXG5kaWFsb2cgLmJ1dHRvbnMge1xcbiAgICAvKiBTdHlsaW5nIGZvciBidXR0b24gY29udGFpbmVyICovXFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuZGlhbG9nIC5hZGRfX2J0biB7XFxuICAgIC8qIFN0eWxpbmcgZm9yIGFkZCBidXR0b24gKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xcbiAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG5kaWFsb2cgLmNsb3NlX19idG4ge1xcbiAgICAvKiBTdHlsaW5nIGZvciBjbG9zZSBidXR0b24gKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVsZXRlLWJ0bi1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLyogUHJvamVjdCBEaWFsb2cgc2VjdGlvbiAqL1xcbiNwcm9qZWN0X19hZGQtZGlhbG9nIHtcXG4gICAgLyogU3R5bGluZyBmb3IgdGhlIGRpYWxvZyAqL1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTsgKi9cXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMik7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdF9fYWRkLWZvcm17XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBJdGVtIGRpYWxvZyBzZWN0aW9uICovXFxuI2l0ZW1fX2FkZC1kaWFsb2cge1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpOyAqL1xcbn1cXG5cXG4jaXRlbV9fYWRkLWRpYWxvZyAuc2VsZWN0X19pdGVtLWZvcm0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2l0ZW1fX2FkZC1kaWFsb2cgLnNlbGVjdF9faXRlbS1mb3JtIHNlbGVjdCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDAgMC4yNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4jaXRlbV9fYWRkLWRpYWxvZz5mb3JtIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4jaXRlbV9fbW92ZS1kaWFsb2cgc2VsZWN0LFxcbiNpdGVtX19hZGQtZGlhbG9nPmZvcm0+ZGl2PnNlbGVjdCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAwIDAuMjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcXG59XFxuXFxuI2l0ZW1fX2FkZC1kaWFsb2cgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI2l0ZW1fX2FkZC1kaWFsb2cgPiBkaXYgPiBsYWJlbHtcXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXFxuI2l0ZW1fX2FkZC1kaWFsb2c+ZGl2PnNlbGVjdCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDAgMC4yNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4vKiBFZGl0IGRpYWxvZyBzZWN0aW9uICovXFxuI2l0ZW1fX2VkaXQtZGlhbG9ne1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpOyAqL1xcbn1cXG5cXG4vKiBDb25maXJtIGRpYWxvZyBzZWN0aW9uICovXFxuI2NvbmZpcm1fX2RpYWxvZ3tcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7ICovXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLTIpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jY29uZmlybV9fZGlhbG9nPnNwYW4ge1xcbiAgICAvKiBTdHlsaW5nIGZvciBmb3JtIGxhYmVscyAqL1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxufVxcblxcbi8qIE1vdmUgZGlhbG9nICovXFxuI2l0ZW1fX21vdmUtZGlhbG9ne1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTsgKi9cXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNpdGVtX19tb3ZlLWRpYWxvZyBkaXZ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaXRlbV9fbW92ZS1kaWFsb2cgc2VsZWN0e1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaGVhZGVye1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDAgLjI1cmVtO1xuICAgIGZsZXgtZ3JvdzogNDtcbn1cblxuaGVhZGVyIC5sb2dve1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmhlYWRlciAubG9nbyBpe1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG5oZWFkZXIgLm1lbnVfX2J0bjpob3ZlcixcbmhlYWRlciAuYWRkX19idG46aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQhaW1wb3J0YW50O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImhlYWRlcntcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDAgLjI1cmVtO1xcbiAgICBmbGV4LWdyb3c6IDQ7XFxufVxcblxcbmhlYWRlciAubG9nb3tcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgLmxvZ28gaXtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbmhlYWRlciAubWVudV9fYnRuOmhvdmVyLFxcbmhlYWRlciAuYWRkX19idG46aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdCFpbXBvcnRhbnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogVE9ET1MqL1xuXG4udG8tZG8sXG4ubm90ZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi13aWR0aDogNTAlO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYW5pbWF0aW9uOmZhZGVJbiBsaW5lYXIgLjNzO1xufVxuXG4udG8tZG9bY2xvc2luZ10sXG4ubm90ZVtjbG9zaW5nXXsgICAgXG4gICAgYW5pbWF0aW9uOiBmYWRlT3V0IGxpbmVhciAuM3M7ICAgIFxufVxuXG4udG8tZG86aG92ZXIsXG4ubm90ZTpob3ZlcntcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctY29sb3IpIDVweCA1cHggMTBweDtcbn1cblxuLnRvLWRvIC5jaGVja2JveHtcbiAgICB3aWR0aDogMi41cmVtO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi50by1kbyAudGl0bGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6IDQwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xuICAgIGZsZXgtZ3JvdzogMjA7XG59XG5cbi50by1kbyAudGl0bGUgc3BhbntcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4ubm90ZSAudGl0bGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xuICAgIGZsZXgtZ3JvdzogNTtcbn1cblxuLnRvLWRvIC5jaGVja2JveCBpbnB1dDpob3Zlcixcbi50by1kbyAudGl0bGU6aG92ZXIsXG4ubm90ZSAudGl0bGU6aG92ZXJ7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG59XG5cbi50by1kbyAuYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZ2FwOiAxcmVtO1xuICAgIHdpZHRoOiAzMDBweDtcbn1cbi5ub3RlIC5idXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBnYXA6IDFyZW07XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG4udG8tZG8gLmJ1dHRvbnMgYnV0dG9uLFxuLm5vdGUgLmJ1dHRvbnMgYnV0dG9uXG4gICAge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLnRvLWRvIC5idXR0b25zIGJ1dHRvbjpob3Zlcixcbi5ub3RlIC5idXR0b25zIGJ1dHRvbjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWhvdmVyLXRleHQtY29sb3IpO1xufVxuXG4udG8tZG8gLnByaW9yaXR5X19idG4ucHJpb3JpdHlfX2xvdzpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKSAhaW1wb3J0YW50O1xufVxuLnRvLWRvIC5wcmlvcml0eV9fYnRuLnByaW9yaXR5X19tZWRpdW06aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZGl1bS1jb2xvcikgIWltcG9ydGFudDtcbn1cbi50by1kbyAucHJpb3JpdHlfX2J0bi5wcmlvcml0eV9faGlnaDpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuLyogQ0hFQ0tCT1ggKi9cbmlucHV0W3R5cGU9J2NoZWNrYm94J117XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjowO1xuICAgIGZvbnQ6aW5oZXJpdDtcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItaG92ZXItY29sb3IpO1xuICAgIHdpZHRoOiAxLjJyZW07XG4gICAgaGVpZ2h0OjEuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J106aG92ZXJ7XG4gICAgYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1oZWFkZXItaG92ZXItY29sb3IpXG59XG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J106OmJlZm9yZXtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMC42cmVtO1xuICAgIGhlaWdodDogMC42cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zaXRpb246IC4xMnMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcbn1cblxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmV7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2l0ZW0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFNBQVM7O0FBRVQ7O0lBRUksYUFBYTtJQUNiLGNBQWM7SUFDZCxjQUFjO0lBQ2QseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLCtDQUErQztJQUMvQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLCtDQUErQztJQUMvQyxZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DO0FBQ0E7SUFDSSw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQSxhQUFhO0FBQ2I7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUT0RPUyovXFxuXFxuLnRvLWRvLFxcbi5ub3Rle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBhbmltYXRpb246ZmFkZUluIGxpbmVhciAuM3M7XFxufVxcblxcbi50by1kb1tjbG9zaW5nXSxcXG4ubm90ZVtjbG9zaW5nXXsgICAgXFxuICAgIGFuaW1hdGlvbjogZmFkZU91dCBsaW5lYXIgLjNzOyAgICBcXG59XFxuXFxuLnRvLWRvOmhvdmVyLFxcbi5ub3RlOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctY29sb3IpIDVweCA1cHggMTBweDtcXG59XFxuXFxuLnRvLWRvIC5jaGVja2JveHtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4udG8tZG8gLnRpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4td2lkdGg6IDQwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcXG4gICAgZmxleC1ncm93OiAyMDtcXG59XFxuXFxuLnRvLWRvIC50aXRsZSBzcGFue1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ubm90ZSAudGl0bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7XFxuICAgIGZsZXgtZ3JvdzogNTtcXG59XFxuXFxuLnRvLWRvIC5jaGVja2JveCBpbnB1dDpob3ZlcixcXG4udG8tZG8gLnRpdGxlOmhvdmVyLFxcbi5ub3RlIC50aXRsZTpob3ZlcntcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi50by1kbyAuYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuLm5vdGUgLmJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi50by1kbyAuYnV0dG9ucyBidXR0b24sXFxuLm5vdGUgLmJ1dHRvbnMgYnV0dG9uXFxuICAgIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udG8tZG8gLmJ1dHRvbnMgYnV0dG9uOmhvdmVyLFxcbi5ub3RlIC5idXR0b25zIGJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0taG92ZXItdGV4dC1jb2xvcik7XFxufVxcblxcbi50by1kbyAucHJpb3JpdHlfX2J0bi5wcmlvcml0eV9fbG93OmhvdmVye1xcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKSAhaW1wb3J0YW50O1xcbn1cXG4udG8tZG8gLnByaW9yaXR5X19idG4ucHJpb3JpdHlfX21lZGl1bTpob3ZlcntcXG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZGl1bS1jb2xvcikgIWltcG9ydGFudDtcXG59XFxuLnRvLWRvIC5wcmlvcml0eV9fYnRuLnByaW9yaXR5X19oaWdoOmhvdmVye1xcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcikgIWltcG9ydGFudDtcXG59XFxuXFxuLyogQ0hFQ0tCT1ggKi9cXG5pbnB1dFt0eXBlPSdjaGVja2JveCdde1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW46MDtcXG4gICAgZm9udDppbmhlcml0O1xcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGVyLWhvdmVyLWNvbG9yKTtcXG4gICAgd2lkdGg6IDEuMnJlbTtcXG4gICAgaGVpZ2h0OjEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106aG92ZXJ7XFxuICAgIGJvcmRlcjoycHggc29saWQgdmFyKC0taGVhZGVyLWhvdmVyLWNvbG9yKVxcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMC42cmVtO1xcbiAgICBoZWlnaHQ6IDAuNnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAuMTJzIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZXtcXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tZW51e1xuICAgIG1pbi13aWR0aDogMTIlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMik7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tdGFiLWJvcmRlci1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICAvKiBhbmltYXRpb246IHNsaWRlSW5MZWZ0IGxpbmVhciAuM3M7ICovXG59XG5cbi5tZW51W2Nsb3Npbmdde1xuICAgIGFuaW1hdGlvbjogc2xpZGVPdXRMZWZ0IGxpbmVhciAuM3M7XG59XG5cbi5tZW51X190b3B7XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLm1lbnVfX3RvcCA+IGRpdntcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnNlYXJjaF9fYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAvKiBwYWRkaW5nOiAwIDAuMjVyZW07ICovXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnNlYXJjaF9fYmFyID4gaW5wdXR7XG4gICAgbWluLXdpZHRoOiA1MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbn1cblxuLnNlYXJjaF9fYmFyID4gaW5wdXQ6Zm9jdXN7XG4gICAgb3V0bGluZTpub25lO1xufVxuXG4uc2VhcmNoX19iYXIgPiBkaXZ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnNlYXJjaF9fYmFyID4gZGl2OmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0taG92ZXItdGV4dC1jb2xvcilcbn1cblxuLm1lbnVfX2l0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xufVxuXG4ubWVudV9faXRlbTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDp2YXIoLS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLm1lbnVfX2l0ZW0gc3BhbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cblxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci1yYWRpdXM6MDtcbn1cblxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdDpob3ZlcntcbiAgICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGNvbG9yOmluaGVyaXQ7XG59XG5cbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgPiBkaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0ID4gZGl2OmhvdmVye1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6MDtcbn1cblxuLmFycm93IGl7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItZGFyaykgIWltcG9ydGFudDtcbn1cblxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCB1bHtcbiAgICBtYXJnaW46IDFyZW0gMCAwIDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCB1bCBsaXtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XG4gICAgcGFkZGluZzouMjVyZW0gMC41cmVtO1xuICAgIGJvcmRlcjoxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLyogYmFja2dyb3VuZDogdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7ICovXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItZGFyayk7XG59XG5cbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgdWwgbGkgc3BhbntcbiAgICBtYXgtd2lkdGg6IDVyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCB1bCBsaSBzcGFuOmhvdmVye1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0IHVsIGxpIC5idXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IC4zcmVtO1xufVxuXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0IHVsIGxpIC5idXR0b25zIGJ1dHRvbntcbiAgICBib3JkZXI6bm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWRhcmspO1xuICAgIGZvbnQtc2l6ZToxLjJyZW07XG59XG5cbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgdWwgbGkgLmJ1dHRvbnMgYnV0dG9uOmhvdmVye1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIGNvbG9yOnZhcigtLWhvdmVyLXRleHQtY29sb3IpXG59XG5cbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgdWwgbGk6aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWNvbG9yKSA1cHggNXB4IDEwcHg7XG5cbn1cblxuLnByb2plY3RfX2FkZC1idG57XG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuLnByb2plY3RfX2FkZC1idG46aG92ZXJ7XG4gICAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucHJvamVjdF9fYWRkLWJ0biBidXR0b257XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAgLjVyZW07XG59XG5cbi5wcm9qZWN0X19hZGQtYnRuIGJ1dHRvbjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWNvbG9yKSA1cHggNXB4IDEwcHg7XG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1lbnVfX2JvdHtcbiAgICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLCtDQUErQztJQUMvQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztBQUNYOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHlDQUF5QztJQUN6Qyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkO0FBQ0o7O0FBRUE7SUFDSSw0Q0FBNEM7O0FBRWhEOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNENBQTRDO0lBQzVDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWVudXtcXG4gICAgbWluLXdpZHRoOiAxMiU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMik7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXRhYi1ib3JkZXItY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG4gICAgLyogYW5pbWF0aW9uOiBzbGlkZUluTGVmdCBsaW5lYXIgLjNzOyAqL1xcbn1cXG5cXG4ubWVudVtjbG9zaW5nXXtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZU91dExlZnQgbGluZWFyIC4zcztcXG59XFxuXFxuLm1lbnVfX3RvcHtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLm1lbnVfX3RvcCA+IGRpdntcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZWFyY2hfX2JhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcXG4gICAgLyogcGFkZGluZzogMCAwLjI1cmVtOyAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uc2VhcmNoX19iYXIgPiBpbnB1dHtcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXG59XFxuXFxuLnNlYXJjaF9fYmFyID4gaW5wdXQ6Zm9jdXN7XFxuICAgIG91dGxpbmU6bm9uZTtcXG59XFxuXFxuLnNlYXJjaF9fYmFyID4gZGl2e1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoX19iYXIgPiBkaXY6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWhvdmVyLXRleHQtY29sb3IpXFxufVxcblxcbi5tZW51X19pdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XFxufVxcblxcbi5tZW51X19pdGVtOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6dmFyKC0taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5tZW51X19pdGVtIHNwYW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3R7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci1yYWRpdXM6MDtcXG59XFxuXFxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdDpob3ZlcntcXG4gICAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XFxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICAgIGNvbG9yOmluaGVyaXQ7XFxufVxcblxcbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgPiBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCA+IGRpdjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDowO1xcbn1cXG5cXG4uYXJyb3cgaXtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItZGFyaykgIWltcG9ydGFudDtcXG59XFxuXFxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCB1bHtcXG4gICAgbWFyZ2luOiAxcmVtIDAgMCAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0IHVsIGxpe1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcXG4gICAgcGFkZGluZzouMjVyZW0gMC41cmVtO1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgLyogYmFja2dyb3VuZDogdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7ICovXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWRhcmspO1xcbn1cXG5cXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0IHVsIGxpIHNwYW57XFxuICAgIG1heC13aWR0aDogNXJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCB1bCBsaSBzcGFuOmhvdmVye1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCB1bCBsaSAuYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuM3JlbTtcXG59XFxuXFxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCB1bCBsaSAuYnV0dG9ucyBidXR0b257XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1kYXJrKTtcXG4gICAgZm9udC1zaXplOjEuMnJlbTtcXG59XFxuXFxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCB1bCBsaSAuYnV0dG9ucyBidXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBjb2xvcjp2YXIoLS1ob3Zlci10ZXh0LWNvbG9yKVxcbn1cXG5cXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0IHVsIGxpOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctY29sb3IpIDVweCA1cHggMTBweDtcXG5cXG59XFxuXFxuLnByb2plY3RfX2FkZC1idG57XFxuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQgIWltcG9ydGFudDtcXG59XFxuXFxuLnByb2plY3RfX2FkZC1idG46aG92ZXJ7XFxuICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcm9qZWN0X19hZGQtYnRuIGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMCAuNXJlbTtcXG59XFxuXFxuLnByb2plY3RfX2FkZC1idG4gYnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1jb2xvcikgNXB4IDVweCAxMHB4O1xcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWVudV9fYm90e1xcbiAgICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5uYXZfX2JhcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDNyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXRhYi1ib3JkZXItY29sb3IpO1xuICAgIC8qIGFuaW1hdGlvbjogc2xpZGVJbkxlZnQgbGluZWFyIC4zczsgKi9cbn1cblxuLm5hdl9fYmFyW2Nsb3Npbmdde1xuICAgIGFuaW1hdGlvbjogc2xpZGVPdXRMZWZ0IGxpbmVhciAuM3M7XG59XG5cbi5uYXZfX2l0ZW1ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5pbmJveF9fbmF2IGl7XG4gICAgY29sb3I6IHZhcigtLWluYm94LWNvbG9yKTtcbn1cblxuLnRvZGF5X19uYXYgaXtcbiAgICBjb2xvcjp2YXIoLS10b2RheS1jb2xvcilcbn1cblxuLnByb2plY3RfX25hdiBpe1xuICAgIGNvbG9yOnZhcigtLXByb2plY3QtY29sb3IpXG59XG5cbi5oaXN0b3J5X19uYXYgaXtcbiAgICBjb2xvcjp2YXIoLS1oaXN0b3J5LWNvbG9yKVxufVxuXG4uYXBwZWFyYW5jZV9fbW9kZSBpLFxuLm1lbnVfX2JvdCBpe1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1tb2RlLWNvbG9yKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9uYXYuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsK0NBQStDO0lBQy9DLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBOztJQUVJLDhCQUE4QjtBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubmF2X19iYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tdGFiLWJvcmRlci1jb2xvcik7XFxuICAgIC8qIGFuaW1hdGlvbjogc2xpZGVJbkxlZnQgbGluZWFyIC4zczsgKi9cXG59XFxuXFxuLm5hdl9fYmFyW2Nsb3Npbmdde1xcbiAgICBhbmltYXRpb246IHNsaWRlT3V0TGVmdCBsaW5lYXIgLjNzO1xcbn1cXG5cXG4ubmF2X19pdGVtc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaW5ib3hfX25hdiBpe1xcbiAgICBjb2xvcjogdmFyKC0taW5ib3gtY29sb3IpO1xcbn1cXG5cXG4udG9kYXlfX25hdiBpe1xcbiAgICBjb2xvcjp2YXIoLS10b2RheS1jb2xvcilcXG59XFxuXFxuLnByb2plY3RfX25hdiBpe1xcbiAgICBjb2xvcjp2YXIoLS1wcm9qZWN0LWNvbG9yKVxcbn1cXG5cXG4uaGlzdG9yeV9fbmF2IGl7XFxuICAgIGNvbG9yOnZhcigtLWhpc3RvcnktY29sb3IpXFxufVxcblxcbi5hcHBlYXJhbmNlX19tb2RlIGksXFxuLm1lbnVfX2JvdCBpe1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtbW9kZS1jb2xvcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluY29uc29sYXRhJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLTE6ICNGM0VFRUE7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLTI6ICNFQUU0RTA7XG4gICAgLS1oZWFkZXItY29sb3I6ICM3NzZCNUQ7XG4gICAgLS1oZWFkZXItaG92ZXItY29sb3I6ICM1YTUxNDc7XG4gICAgLS10YWItYm9yZGVyLWNvbG9yOiAjQjBBNjk1O1xuICAgIC0tbmF2LWJvcmRlci1jb2xvcjogIzUxNDkzRjtcbiAgICAtLXRleHQtY29sb3ItbGlnaHQ6ICNGM0VFRUE7XG4gICAgLS10ZXh0LWNvbG9yLWRhcms6ICMzMzMzMzM7XG4gICAgLS10ZXh0LWNvbG9yLW5hdjogIzUxNDkzRjtcbiAgICAtLWluYm94LWNvbG9yOiAjNzhBQ0MyO1xuICAgIC0tdG9kYXktY29sb3I6ICM1Njg1NEI7XG4gICAgLS1wcm9qZWN0LWNvbG9yOiAjNTAyQUJDO1xuICAgIC0taGlzdG9yeS1jb2xvcjogI0UxNTE2QjtcbiAgICAtLWhvdmVyLXRleHQtY29sb3I6ICNDMjk3Nzg7XG4gICAgLS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIC0tcHJpb3JpdHktbG93LWNvbG9yOiAjNTY4NTRCO1xuICAgIC0tcHJpb3JpdHktbWVkaXVtLWNvbG9yOiAjZGFiZTM2O1xuICAgIC0tcHJpb3JpdHktaGlnaC1jb2xvcjogI0UxNTE1MTtcbiAgICAtLWVkaXQtYnRuLWNvbG9yOiAjNzhBQ0MyO1xuICAgIC0tZGVsZXRlLWJ0bi1jb2xvcjogI0UxNTE1MTtcbiAgICAtLWxpZ2h0LW1vZGUtY29sb3I6ICNCODlCMDE7XG4gICAgLS1zaGFkb3ctY29sb3I6ICNjNmM2YzY7XG59XG5cbmJvZHl7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOjIwcHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItZGFyayk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0xKTtcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xufVxuLyogQ29tbW9uICovXG4uZGZ7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuXG4uZC1vZmZ7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaWNvbl9fYmlne1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5pY29uX19iaWc6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1ob3Zlci10ZXh0LWNvbG9yKTtcbn1cblxuLmljb25fX3NtYWxse1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcmlvcml0eV9fYnRuLnByaW9yaXR5X19sb3d7XG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7XG59XG5cbi5wcmlvcml0eV9fYnRuLnByaW9yaXR5X19tZWRpdW17XG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZGl1bS1jb2xvcik7XG59XG5cbi5wcmlvcml0eV9fYnRuLnByaW9yaXR5X19oaWdoe1xuICAgIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKTtcbn1cblxuLmJ0bntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcbn1cblxuLmJ0bjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogLjg7XG59XG5cbi5yb3RhdGUtMTgwe1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1pbi1oZWlnaHQ6IDk1dmg7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgIHRvIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICAgIGZyb20geyBvcGFjaXR5OiAxOyB9XG4gICAgdG8geyBvcGFjaXR5OiAwOyB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xuICAgIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpOyB9XG4gICAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZU91dExlZnR7XG4gICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAgIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XG4gICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgfVxuICAgIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVPdXRSaWdodCB7XG4gICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAgIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB9XG59XG5cbi5mYWRlSW57XG4gICAgYW5pbWF0aW9uOmZhZGVJbiBsaW5lYXIgLjNzO1xufVxuXG4uZmFkZU91dHtcbiAgICBhbmltYXRpb246IGZhZGVPdXQgbGluZWFyIC4zcztcbn1cblxuLnNsaWRlSW5MZWZ0e1xuICAgIGFuaW1hdGlvbjogc2xpZGVJbkxlZnQgbGluZWFyIC4zcztcbn1cblxuLnNsaWRlT3V0TGVmdHtcbiAgICBhbmltYXRpb246IHNsaWRlT3V0TGVmdCBsaW5lYXIgLjNzO1xufVxuXG4uc2xpZGVJblJpZ2h0e1xuICAgIGFuaW1hdGlvbjogc2xpZGVJblJpZ2h0IGxpbmVhciAuM3M7XG59XG5cbi5zbGlkZU91dFJpZ2h0e1xuICAgIGFuaW1hdGlvbjogc2xpZGVPdXRSaWdodCBsaW5lYXIgLjNzO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxxQ0FBcUM7SUFDckMsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixxQ0FBcUM7SUFDckMsc0JBQXNCO0FBQzFCO0FBQ0EsV0FBVztBQUNYO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlDQUF5QztJQUN6Qyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixLQUFLLFVBQVUsRUFBRTtBQUNyQjs7QUFFQTtJQUNJLE9BQU8sVUFBVSxFQUFFO0lBQ25CLEtBQUssVUFBVSxFQUFFO0FBQ3JCOztBQUVBO0lBQ0ksT0FBTyw0QkFBNEIsRUFBRTtJQUNyQyxLQUFLLHdCQUF3QixFQUFFO0FBQ25DOztBQUVBO0lBQ0ksT0FBTyx3QkFBd0IsRUFBRTtJQUNqQyxLQUFLLDRCQUE0QixFQUFFO0FBQ3ZDOztBQUVBO0lBQ0ksT0FBTywyQkFBMkIsRUFBRTtJQUNwQyxLQUFLLHdCQUF3QixFQUFFO0FBQ25DOztBQUVBO0lBQ0ksT0FBTyx3QkFBd0IsRUFBRTtJQUNqQyxLQUFLLDJCQUEyQixFQUFFO0FBQ3RDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluY29uc29sYXRhJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290e1xcbiAgICAtLWJhY2tncm91bmQtY29sb3ItMTogI0YzRUVFQTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLTI6ICNFQUU0RTA7XFxuICAgIC0taGVhZGVyLWNvbG9yOiAjNzc2QjVEO1xcbiAgICAtLWhlYWRlci1ob3Zlci1jb2xvcjogIzVhNTE0NztcXG4gICAgLS10YWItYm9yZGVyLWNvbG9yOiAjQjBBNjk1O1xcbiAgICAtLW5hdi1ib3JkZXItY29sb3I6ICM1MTQ5M0Y7XFxuICAgIC0tdGV4dC1jb2xvci1saWdodDogI0YzRUVFQTtcXG4gICAgLS10ZXh0LWNvbG9yLWRhcms6ICMzMzMzMzM7XFxuICAgIC0tdGV4dC1jb2xvci1uYXY6ICM1MTQ5M0Y7XFxuICAgIC0taW5ib3gtY29sb3I6ICM3OEFDQzI7XFxuICAgIC0tdG9kYXktY29sb3I6ICM1Njg1NEI7XFxuICAgIC0tcHJvamVjdC1jb2xvcjogIzUwMkFCQztcXG4gICAgLS1oaXN0b3J5LWNvbG9yOiAjRTE1MTZCO1xcbiAgICAtLWhvdmVyLXRleHQtY29sb3I6ICNDMjk3Nzg7XFxuICAgIC0taG92ZXItYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgLS1wcmlvcml0eS1sb3ctY29sb3I6ICM1Njg1NEI7XFxuICAgIC0tcHJpb3JpdHktbWVkaXVtLWNvbG9yOiAjZGFiZTM2O1xcbiAgICAtLXByaW9yaXR5LWhpZ2gtY29sb3I6ICNFMTUxNTE7XFxuICAgIC0tZWRpdC1idG4tY29sb3I6ICM3OEFDQzI7XFxuICAgIC0tZGVsZXRlLWJ0bi1jb2xvcjogI0UxNTE1MTtcXG4gICAgLS1saWdodC1tb2RlLWNvbG9yOiAjQjg5QjAxO1xcbiAgICAtLXNoYWRvdy1jb2xvcjogI2M2YzZjNjtcXG59XFxuXFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6MjBweDtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItZGFyayk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMSk7XFxuICAgIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXFxufVxcbi8qIENvbW1vbiAqL1xcbi5kZntcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1vZmZ7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmljb25fX2JpZ3tcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmljb25fX2JpZzpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWhvdmVyLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uaWNvbl9fc21hbGx7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5X19idG4ucHJpb3JpdHlfX2xvd3tcXG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7XFxufVxcblxcbi5wcmlvcml0eV9fYnRuLnByaW9yaXR5X19tZWRpdW17XFxuICAgIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWRpdW0tY29sb3IpO1xcbn1cXG5cXG4ucHJpb3JpdHlfX2J0bi5wcmlvcml0eV9faGlnaHtcXG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xcbn1cXG5cXG4uYnRue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxufVxcblxcbi5idG46aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogLjg7XFxufVxcblxcbi5yb3RhdGUtMTgwe1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtaW4taGVpZ2h0OiA5NXZoO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XFxuICAgIHRvIHsgb3BhY2l0eTogMTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgICBmcm9tIHsgb3BhY2l0eTogMTsgfVxcbiAgICB0byB7IG9wYWNpdHk6IDA7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluTGVmdCB7XFxuICAgIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpOyB9XFxuICAgIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVPdXRMZWZ0e1xcbiAgICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxuICAgIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XFxuICAgIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cXG4gICAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZU91dFJpZ2h0IHtcXG4gICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgfVxcbn1cXG5cXG4uZmFkZUlue1xcbiAgICBhbmltYXRpb246ZmFkZUluIGxpbmVhciAuM3M7XFxufVxcblxcbi5mYWRlT3V0e1xcbiAgICBhbmltYXRpb246IGZhZGVPdXQgbGluZWFyIC4zcztcXG59XFxuXFxuLnNsaWRlSW5MZWZ0e1xcbiAgICBhbmltYXRpb246IHNsaWRlSW5MZWZ0IGxpbmVhciAuM3M7XFxufVxcblxcbi5zbGlkZU91dExlZnR7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVPdXRMZWZ0IGxpbmVhciAuM3M7XFxufVxcblxcbi5zbGlkZUluUmlnaHR7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVJblJpZ2h0IGxpbmVhciAuM3M7XFxufVxcblxcbi5zbGlkZU91dFJpZ2h0e1xcbiAgICBhbmltYXRpb246IHNsaWRlT3V0UmlnaHQgbGluZWFyIC4zcztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RldGFpbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RldGFpbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2l0ZW0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pdGVtLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHByb2plY3QgZnJvbSBcIi4uL3Byb2plY3RcIjtcblxuZnVuY3Rpb24gaGlzdG9yeSgpe1xuICAgIGNvbnN0IGhpc3RvcnkgPSBPYmplY3QuY3JlYXRlKHByb2plY3QoKSlcbiAgICBoaXN0b3J5LmNoYW5nZVZhbHVlKCdIaXN0b3J5JywgJ1lvdSBjYW4gc2VlIGFsbCB5b3VyIGZpbmlzaGVkIHRvZG9zIGhlcmUnKVxuXG4gICAgcmV0dXJuIGhpc3Rvcnlcbn1cblxuY29uc3QgaGlzdG9yeU9iaiA9IGhpc3RvcnkoKVxuZXhwb3J0IGRlZmF1bHQgaGlzdG9yeU9iaiIsImltcG9ydCBwcm9qZWN0IGZyb20gXCIuLi9wcm9qZWN0XCI7XG5pbXBvcnQgdG9kbyBmcm9tIFwiLi4vdG9kb1wiXG5pbXBvcnQgbm90ZSBmcm9tIFwiLi4vbm90ZVwiXG5cbmNvbnN0IHRvZG8xU3RhcnREYXRlID0gbmV3IERhdGUoKVxuY29uc3QgdG9kbzFEdWVEYXRlID0gbmV3IERhdGUoKVxudG9kbzFEdWVEYXRlLnNldEZ1bGxZZWFyKHRvZG8xRHVlRGF0ZS5nZXRGdWxsWWVhcigpICsgMSlcblxuY29uc3QgaW5ib3ggPSAoKSA9PiB7XG4gICAgY29uc3QgaW5ib3hPYmogPSBPYmplY3QuY3JlYXRlKHByb2plY3QoKSlcbiAgICBpbmJveE9iai5jaGFuZ2VWYWx1ZSgnSW5ib3gnLCAnV2hlcmUgeW91IHN0b3JlIGFsbCB5b3VyIG5ldyBzdHVmZnMnKVxuXG4gICAgY29uc3QgdG9kbzEgPSB0b2RvKClcbiAgICBcbiAgICB0b2RvMS5jaGFuZ2VWYWx1ZSgnQ3JlYXRlIHlvdXIgZmlyc3QgcHJvamVjdCEnLCAnQ2xpY2sgdGhlIGFkZCBidXR0b24gb24gb3VyIG1lbnUnLCB0b2RvMVN0YXJ0RGF0ZSwgdG9kbzFEdWVEYXRlLCAnaGlnaCcpXG5cbiAgICBjb25zdCBub3RlMSA9IG5vdGUoKVxuICAgIG5vdGUxLmNoYW5nZVZhbHVlKCdUb2RheSBpcyBhIHdvbmRlcmZ1bCBkYXkhJywgJ0RvIHNvbWV0aGluZyBpbnRlcmVzdGluZyB0b2RheSEnKVxuXG4gICAgaW5ib3hPYmouYWRkSXRlbSh0b2RvMSlcbiAgICBpbmJveE9iai5hZGRJdGVtKG5vdGUxKVxuXG4gICAgcmV0dXJuIGluYm94T2JqXG59XG5cbmNvbnN0IGluYm94T2JqID0gaW5ib3goKVxuXG5leHBvcnQgZGVmYXVsdCBpbmJveE9iaiIsImltcG9ydCBwcm9qZWN0IGZyb20gXCIuLi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaFJlc3VsdCgpe1xuICAgIGNvbnN0IHNlYXJjaFJlc3VsdE9iaiA9IE9iamVjdC5jcmVhdGUocHJvamVjdCgpKVxuICAgIHNlYXJjaFJlc3VsdE9iai5jaGFuZ2VWYWx1ZSgnU2VhcmNoIFJlc3VsdCcsICdXaGVyZSB5b3UgY2FuIHNlZSB5b3VyIHNlYXJjaCByZXN1bHRzIScpXG4gICAgcmV0dXJuIHNlYXJjaFJlc3VsdE9ialxufVxuXG4iLCJpbXBvcnQgcHJvamVjdCBmcm9tICcuLi9wcm9qZWN0J1xuXG5jb25zdCB0b2RheSA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RheU9iaiA9IE9iamVjdC5jcmVhdGUocHJvamVjdCgpKVxuXG4gICAgdG9kYXlPYmouY2hhbmdlVmFsdWUoJ1RvZGF5JywgYFlvdSBjYW4gc3RvcmUgeW91ciB0b2RheSdzIHRvLWRvcyBoZXJlYClcblxuICAgIHJldHVybiB0b2RheU9ialxufVxuXG5jb25zdCB0b2RheU9iaiA9IHRvZGF5KClcblxuZXhwb3J0IGRlZmF1bHQgdG9kYXlPYmoiLCJpbXBvcnQgY3JlYXRlVG9kbyBmcm9tIFwiLi9jcmVhdGVUb2RvXCJcbmltcG9ydCBjcmVhdGVOb3RlIGZyb20gXCIuL2NyZWF0ZU5vdGVcIlxuaW1wb3J0IGFwcGVuZENoaWxkcmVuIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vYXBwZW5kQ2hpbGRyZW5cIlxuaW1wb3J0IGNyZWF0ZURpdldpdGhDbGFzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2NyZWF0ZURpdldpdGhDbGFzc1wiXG5pbXBvcnQgY3JlYXRlRmluaXNoZWRUb2RvIGZyb20gXCIuL2NyZWF0ZUZpbmlzaGVkVG9kb1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQocHJqKSB7XG4gICAgY29uc3QgdGl0bGUgPSBwcmouZ2V0VmFsdWUoKS50aXRsZVxuXG4gICAgY29uc3QgY29udGVudERpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygnY29udGVudCcpXG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygnY29udGVudF9fdGl0bGUnKVxuICAgIGNvbnN0IHRpdGxlSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgdGl0bGVIMS5pbm5lckhUTUwgPSB0aXRsZVxuXG4gICAgY29uc3QgdGl0bGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgdGl0bGVJY29uLmNsYXNzTGlzdC5hZGQoJ3JpLWluZm9ybWF0aW9uLTItZmlsbCcpXG5cbiAgICBjb25zdCBpdGVtRGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdjb250ZW50X19pdGVtcycpXG5cbiAgICBjb25zdCBpdGVtcyA9IHByai5nZXRBbGxJdGVtKClcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBpdGVtVHlwZSA9IGl0ZW0uZ2V0VHlwZSgpXG4gICAgICAgIGlmIChwcmouZ2V0VmFsdWUoKS50aXRsZSA9PT0gJ0hpc3RvcnknKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGRlZCBmaW5pc2hlZCBpdGVtJylcbiAgICAgICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRmluaXNoZWRUb2RvKGl0ZW0pKVxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSAnbm90ZScpIHtcbiAgICAgICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZShpdGVtKSlcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gJ3RvZG8nKSB7XG4gICAgICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRvZG8oaXRlbSkpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgYXBwZW5kQ2hpbGRyZW4odGl0bGVEaXYsIFt0aXRsZUgxLCB0aXRsZUljb25dKVxuICAgIGFwcGVuZENoaWxkcmVuKGNvbnRlbnREaXYsIFt0aXRsZURpdiwgaXRlbURpdl0pXG5cbiAgICByZXR1cm4gY29udGVudERpdlxufVxuXG5cbiIsImltcG9ydCBhcHBlbmRDaGlsZHJlbiBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2FwcGVuZENoaWxkcmVuXCJcbmltcG9ydCBjcmVhdGVEaXZXaXRoQ2xhc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9jcmVhdGVEaXZXaXRoQ2xhc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEZXRhaWwob2JqKSB7XG4gICAgY29uc3QgZGV0YWlsID0gb2JqLmdldFZhbHVlKClcbiAgICBjb25zdCB0aXRsZSA9IGRldGFpbC50aXRsZVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGV0YWlsLmRlc2NyaXB0aW9uXG5cbiAgICBjb25zdCBkZXRhaWxEaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ2RldGFpbCcsICdkLW9mZicpXG5cbiAgICBjb25zdCB0aXRsZUgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIHRpdGxlSDEuaW5uZXJIVE1MID0gdGl0bGVcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRlc2NyaXB0aW9uUC5pbm5lckhUTUwgPSBkZXNjcmlwdGlvblxuXG4gICAgY29uc3QgZGV0YWlsTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9yIChsZXQgaXRlbSBpbiBkZXRhaWwpIHtcbiAgICAgICAgaWYgKGl0ZW0gIT09ICd0aXRsZScgJiYgaXRlbSAhPT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgZGV0YWlsSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgICAgc3dpdGNoKGl0ZW0pe1xuICAgICAgICAgICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxJdGVtLmlubmVySFRNTCA9IGA8c3Ryb25nPkRhdGUgY3JlYXRlZDogPC9zdHJvbmc+ICR7ZGV0YWlsW2l0ZW1dfWBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdzdGFydERhdGUnOlxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxJdGVtLmlubmVySFRNTCA9IGA8c3Ryb25nPlN0YXJ0IGRhdGU6IDwvc3Ryb25nPiAke2RldGFpbFtpdGVtXX1gXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnZHVlRGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbEl0ZW0uaW5uZXJIVE1MID0gYDxzdHJvbmc+RHVlIGRhdGU6IDwvc3Ryb25nPiAke2RldGFpbFtpdGVtXX1gXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAncHJpb3JpdHknOlxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxJdGVtLmlubmVySFRNTCA9IGA8c3Ryb25nPlByaW9yaXR5OiA8L3N0cm9uZz4gJHtkZXRhaWxbaXRlbV19YFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N0YXR1cyc6XG4gICAgICAgICAgICAgICAgICAgIGlmKGRldGFpbFtpdGVtXSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxJdGVtLmlubmVySFRNTCA9IGA8c3Ryb25nPlN0YXR1czogPC9zdHJvbmc+IEZpbmlzaGVkYFxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbEl0ZW0uaW5uZXJIVE1MID0gYDxzdHJvbmc+U3RhdHVzOiA8L3N0cm9uZz4gT24tZ29pbmdgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRldGFpbExpc3QuYXBwZW5kQ2hpbGQoZGV0YWlsSXRlbSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZV9fYnRuJylcbiAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJyaS1jbG9zZS1saW5lXCI+PC9pPmBcblxuICAgIGFwcGVuZENoaWxkcmVuKGRldGFpbERpdiwgW2Nsb3NlQnRuLCB0aXRsZUgxLCBkZXNjcmlwdGlvblAsIGRldGFpbExpc3RdKVxuXG4gICAgcmV0dXJuIGRldGFpbERpdlxufVxuXG4iLCJpbXBvcnQgYXBwZW5kQ2hpbGRyZW4gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9hcHBlbmRDaGlsZHJlblwiXG5pbXBvcnQgY3JlYXRlRGl2V2l0aENsYXNzIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vY3JlYXRlRGl2V2l0aENsYXNzXCJcbmltcG9ydCBwcm9qZWN0Q29udGFpbmVyT2JqIGZyb20gJy4uL3Byb2plY3RDb250YWluZXInXG5pbXBvcnQge2dldEN1cnJlbnRTdGF0ZX0gZnJvbSAnLi4vLi4vdXRpbHMvc3RhdGUnXG5cbi8vIFByb2plY3QgYWRkIGRpYWxvZ1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3REaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbiAgICBkaWFsb2cuaWQgPSAncHJvamVjdF9fYWRkLWRpYWxvZydcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmlkID0gJ3Byb2plY3RfX2FkZC1mb3JtJ1xuICAgIGZvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+UHJvamVjdCBUaXRsZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwicHJvamVjdF9fdGl0bGUtaW5wdXRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNsYXNzPVwicHJvamVjdF9fZGVzLWlucHV0XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZm9ybSwgW2NyZWF0ZUFkZEJ1dHRvbkRpdigpXSlcbiAgICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSlcblxuICAgIHJldHVybiBkaWFsb2dcbn1cblxuLy8gSXRlbSBhZGQgZGlhbG9nXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSXRlbURpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKVxuICAgIGRpYWxvZy5pZCA9ICdpdGVtX19hZGQtZGlhbG9nJ1xuXG4gICAgY29uc3Qgc2VsZWN0SXRlbUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBzZWxlY3RJdGVtRm9ybS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RfX2l0ZW0tZm9ybScpXG4gICAgc2VsZWN0SXRlbUZvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbVwiPkNob29zZSB3aGljaCBpdGVtIHRvIGNyZWF0ZTo8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJpdGVtXCIgaWQ9XCJpdGVtXCIgY2xhc3M9XCJzZWxlY3RfX2l0ZW0taW5wdXRcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0by1kb1wiPlRvZG88L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub3RlXCI+Tm90ZTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5gXG5cbiAgICBjb25zdCB0b2RvQWRkRm9ybSA9IGNyZWF0ZVRvZG9BZGRGb3JtKClcbiAgICBjb25zdCBub3RlQWRkRm9ybSA9IGNyZWF0ZU5vdGVBZGRGb3JtKClcblxuICAgIGFwcGVuZENoaWxkcmVuKGRpYWxvZywgW3NlbGVjdEl0ZW1Gb3JtLCB0b2RvQWRkRm9ybSwgbm90ZUFkZEZvcm0sIGNyZWF0ZVByb2plY3RTZWxlY3QoKSwgY3JlYXRlQWRkQnV0dG9uRGl2KCldKVxuXG4gICAgcmV0dXJuIGRpYWxvZ1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvQWRkRm9ybSgpIHtcbiAgICBjb25zdCB0b2RvQWRkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIHRvZG9BZGRGb3JtLmlkID0gJ3RvZG9fX2FkZC1mb3JtJ1xuICAgIHRvZG9BZGRGb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJ0b2RvX190aXRsZS1pbnB1dFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgcmVxdWlyZWQgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNsYXNzPVwidG9kb19fZGVzLWlucHV0XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwic3RhcnREYXRlXCI+U3RhcnQgZGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJkYXRlXCIgbmFtZT1cInN0YXJ0RGF0ZVwiIGlkPVwic3RhcnREYXRlXCIgY2xhc3M9XCJ0b2RvX19zdGFydC1pbnB1dFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkdWVEYXRlXCI+RHVlIGRhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCIgaWQ9XCJkdWVEYXRlXCIgY2xhc3M9XCJ0b2RvX19kdWUtaW5wdXRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5XCIgY2xhc3M9XCJ0b2RvX19wcmlvcml0eS1pbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+YFxuXG4gICAgY29uc3Qgc3RhcnREYXRlSW5wdXQgPSB0b2RvQWRkRm9ybS5xdWVyeVNlbGVjdG9yKCcjc3RhcnREYXRlJylcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSB0b2RvQWRkRm9ybS5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpXG5cbiAgICBzdGFydERhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkdWVEYXRlSW5wdXQubWluID0gc3RhcnREYXRlSW5wdXQudmFsdWVcbiAgICB9KVxuXG4gICAgZHVlRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzdGFydERhdGVJbnB1dC5tYXggPSBkdWVEYXRlSW5wdXQudmFsdWVcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRvZG9BZGRGb3JtXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGVBZGRGb3JtKCkge1xuICAgIGNvbnN0IG5vdGVBZGRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgbm90ZUFkZEZvcm0uaWQgPSAnbm90ZV9fYWRkLWZvcm0nXG4gICAgbm90ZUFkZEZvcm0uY2xhc3NMaXN0LmFkZCgnZC1vZmYnKVxuICAgIG5vdGVBZGRGb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJub3RlX190aXRsZS1pbnB1dFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNsYXNzPVwibm90ZV9fZGVzLWlucHV0XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+YFxuXG4gICAgcmV0dXJuIG5vdGVBZGRGb3JtXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RTZWxlY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgcHJvamVjdFNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHByb2plY3RTZWxlY3RMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0JylcbiAgICBwcm9qZWN0U2VsZWN0TGFiZWwuaW5uZXJIVE1MID0gYFB1dCBpdCBpbjogYFxuICAgIGNvbnN0IHByb2plY3RTZWxlY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBwcm9qZWN0U2VsZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdpdGVtX19wcm9qZWN0LWlucHV0JylcbiAgICBwcm9qZWN0U2VsZWN0TGlzdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdCcpXG4gICAgcHJvamVjdFNlbGVjdExpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0JylcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRTdGF0ZSgpXG5cbiAgICBhcHBlbmRDaGlsZHJlbihwcm9qZWN0U2VsZWN0RGl2LCBbcHJvamVjdFNlbGVjdExhYmVsLCBwcm9qZWN0U2VsZWN0TGlzdF0pXG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RDb250YWluZXJPYmouZ2V0QWxsSXRlbSgpXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcmogPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gYCR7cHJqLmdldFZhbHVlKCkudGl0bGV9YFxuICAgICAgICBwcm9qZWN0U2VsZWN0TGlzdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHByb2plY3RTZWxlY3RMaXN0LnZhbHVlID0gY3VycmVudFByb2plY3QuZ2V0VmFsdWUoKS50aXRsZVxuICAgIHJldHVybiBwcm9qZWN0U2VsZWN0RGl2XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZEJ1dHRvbkRpdigpIHtcbiAgICBjb25zdCBidXR0b25EaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ2J1dHRvbnMnKVxuICAgIGJ1dHRvbkRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkX19idG5cIiBmb3JtbWV0aG9kPVwiZGlhbG9nXCI+Q3JlYXRlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gY2xvc2VfX2J0blwiIGZvcm1tZXRob2Q9XCJkaWFsb2dcIj5DYW5jZWw8L2J1dHRvbj5gXG5cbiAgICByZXR1cm4gYnV0dG9uRGl2XG59XG5cbi8vIENvbmZpcm0gZGlhbG9nXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29uZmlybURpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKVxuICAgIGRpYWxvZy5pZCA9ICdjb25maXJtX19kaWFsb2cnXG5cbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbWVzc2FnZS5pbm5lckhUTUwgPSBgQXJlIHlvdSBzdXJlP2BcblxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygnYnV0dG9ucycpXG4gICAgYnV0dG9uRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhZGRfX2J0blwiIGZvcm1tZXRob2Q9XCJkaWFsb2dcIj5ZZXM8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBjbG9zZV9fYnRuXCIgZm9ybW1ldGhvZD1cImRpYWxvZ1wiPk5vPC9idXR0b24+YFxuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZGlhbG9nLCBbbWVzc2FnZSwgYnV0dG9uRGl2XSlcblxuICAgIHJldHVybiBkaWFsb2dcbn1cblxuLy8gSXRlbSBlZGl0IGRpYWxvZ1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVkaXREaWFsb2coKXtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKVxuICAgIGRpYWxvZy5pZCA9ICdpdGVtX19lZGl0LWRpYWxvZydcblxuICAgIGFwcGVuZENoaWxkcmVuKGRpYWxvZywgW2NyZWF0ZVRvZG9FZGl0Rm9ybSgpLCBjcmVhdGVOb3RlRWRpdEZvcm0oKSwgY3JlYXRlUHJvamVjdEVkaXRGb3JtKCksIGNyZWF0ZUVkaXRCdXR0b25EaXYoKV0pXG5cbiAgICByZXR1cm4gZGlhbG9nXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9FZGl0Rm9ybSgpe1xuICAgIGNvbnN0IHRvZG9FZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIHRvZG9FZGl0Rm9ybS5pZCA9ICd0b2RvX19lZGl0LWZvcm0nXG4gICAgdG9kb0VkaXRGb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJ0b2RvX190aXRsZS1pbnB1dFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgcmVxdWlyZWQgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNsYXNzPVwidG9kb19fZGVzLWlucHV0XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwic3RhcnREYXRlXCI+U3RhcnQgZGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJkYXRlXCIgbmFtZT1cInN0YXJ0RGF0ZVwiIGlkPVwic3RhcnREYXRlXCIgY2xhc3M9XCJ0b2RvX19zdGFydC1pbnB1dFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkdWVEYXRlXCI+RHVlIGRhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCIgaWQ9XCJkdWVEYXRlXCIgY2xhc3M9XCJ0b2RvX19kdWUtaW5wdXRcIj5cbiAgICAgICAgPC9kaXY+YFxuXG4gICAgcmV0dXJuIHRvZG9FZGl0Rm9ybVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOb3RlRWRpdEZvcm0oKXtcbiAgICBjb25zdCBub3RlRWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBub3RlRWRpdEZvcm0uaWQgPSAnbm90ZV9fZWRpdC1mb3JtJ1xuICAgIG5vdGVFZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdkLW9mZicpXG4gICAgbm90ZUVkaXRGb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJub3RlX190aXRsZS1pbnB1dFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNsYXNzPVwibm90ZV9fZGVzLWlucHV0XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+YFxuXG4gICAgcmV0dXJuIG5vdGVFZGl0Rm9ybVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RWRpdEZvcm0oKXtcbiAgICBjb25zdCBwcm9qZWN0RWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBwcm9qZWN0RWRpdEZvcm0uaWQgPSAncHJvamVjdF9fZWRpdC1mb3JtJ1xuICAgIHByb2plY3RFZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdkLW9mZicpXG4gICAgcHJvamVjdEVkaXRGb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJwcm9qZWN0X190aXRsZS1pbnB1dFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNsYXNzPVwicHJvamVjdF9fZGVzLWlucHV0XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+YFxuXG4gICAgcmV0dXJuIHByb2plY3RFZGl0Rm9ybVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFZGl0QnV0dG9uRGl2KCkge1xuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygnYnV0dG9ucycpXG4gICAgYnV0dG9uRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhZGRfX2J0blwiIGZvcm1tZXRob2Q9XCJkaWFsb2dcIj5TYXZlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gY2xvc2VfX2J0blwiIGZvcm1tZXRob2Q9XCJkaWFsb2dcIj5DYW5jZWw8L2J1dHRvbj5gXG5cbiAgICByZXR1cm4gYnV0dG9uRGl2XG59XG5cbi8vIE1vdmUgZGlhbG9nIFxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW92ZURpYWxvZygpe1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpXG4gICAgZGlhbG9nLmlkID0gJ2l0ZW1fX21vdmUtZGlhbG9nJ1xuICAgIGFwcGVuZENoaWxkcmVuKGRpYWxvZywgW2NyZWF0ZVByb2plY3RTZWxlY3QoKSwgY3JlYXRlRWRpdEJ1dHRvbkRpdigpXSlcblxuICAgIHJldHVybiBkaWFsb2dcbn0iLCJpbXBvcnQgYXBwZW5kQ2hpbGRyZW4gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9hcHBlbmRDaGlsZHJlblwiXG5pbXBvcnQgY3JlYXRlQnV0dG9uV2l0aENsYXNzIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vY3JlYXRlQnV0dG9uV2l0aENsYXNzXCJcbmltcG9ydCBjcmVhdGVEaXZXaXRoQ2xhc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9jcmVhdGVEaXZXaXRoQ2xhc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGaW5pc2hlZFRvZG8odG9kbykge1xuICAgIGNvbnN0IGRldGFpbCA9IHRvZG8uZ2V0VmFsdWUoKVxuXG4gICAgY29uc3QgdG9kb0RpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygnZmluaXNoZWQnLCdjb250ZW50X19pdGVtJywgJ3RvLWRvJylcblxuICAgIGNvbnN0IHRpdGxlRGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCd0aXRsZScpXG4gICAgdGl0bGVEaXYuaW5uZXJIVE1MID0gYDxzcGFuPiR7ZGV0YWlsLnRpdGxlfTwvc3Bhbj5gXG5cbiAgICBjb25zdCBidXR0b25EaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ2J1dHRvbnMnKVxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZUJ1dHRvbldpdGhDbGFzcygnZGVsZXRlX19idG4nLCAncmktZGVsZXRlLWJpbi02LWxpbmUnKVxuXG4gICAgYXBwZW5kQ2hpbGRyZW4oYnV0dG9uRGl2LCBbZGVsZXRlQnRuXSlcbiAgICBhcHBlbmRDaGlsZHJlbih0b2RvRGl2LCBbdGl0bGVEaXYsIGJ1dHRvbkRpdl0pXG5cbiAgICByZXR1cm4gdG9kb0RpdlxufSIsImltcG9ydCBhcHBlbmRDaGlsZHJlbiBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2FwcGVuZENoaWxkcmVuXCJcbmltcG9ydCBjcmVhdGVEaXZXaXRoQ2xhc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9jcmVhdGVEaXZXaXRoQ2xhc3NcIlxuaW1wb3J0IGNyZWF0ZUljb25XaXRoQ2xhc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9jcmVhdGVJY29uV2l0aENsYXNzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG5cbiAgICBjb25zdCBtZW51QnRuID0gY3JlYXRlRGl2V2l0aENsYXNzKCdtZW51X19idG4nLCAnaWNvbl9fYmlnJylcbiAgICBjb25zdCBtZW51SWNvbiA9IGNyZWF0ZUljb25XaXRoQ2xhc3MoJ3JpLW1lbnUtbGluZScpXG4gICAgbWVudUJ0bi5hcHBlbmRDaGlsZChtZW51SWNvbilcblxuICAgIGNvbnN0IGxvZ28gPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ2xvZ28nKVxuICAgIGxvZ28uaW5uZXJIVE1MID0gYFxuICAgICAgICA8aSBjbGFzcz1cInJpLXN0YWNrLWxpbmVcIj48L2k+XG4gICAgICAgIDxzcGFuPlRhc2tvPC9zcGFuPmBcblxuICAgIGNvbnN0IGFkZEJ0biA9IGNyZWF0ZURpdldpdGhDbGFzcygnYWRkX19idG4nLCAnaWNvbl9fYmlnJylcbiAgICBjb25zdCBhZGRJY29uID0gY3JlYXRlSWNvbldpdGhDbGFzcygncmktYWRkLWxpbmUnKVxuICAgIGFkZEJ0bi5hcHBlbmRDaGlsZChhZGRJY29uKVxuXG4gICAgYXBwZW5kQ2hpbGRyZW4oaGVhZGVyLCBbbWVudUJ0biwgbG9nbywgYWRkQnRuXSlcblxuICAgIHJldHVybiBoZWFkZXJcbn1cbiIsImltcG9ydCBoZWFkZXIgZnJvbSAnLi9jcmVhdGVIZWFkZXInXG5pbXBvcnQgbmF2QmFyIGZyb20gJy4vY3JlYXRlTmF2aWdhdGlvbidcbmltcG9ydCBtZW51IGZyb20gJy4vY3JlYXRlTWVudSdcbmltcG9ydCBjcmVhdGVDb250ZW50IGZyb20gJy4vY3JlYXRlQ29udGVudCdcbmltcG9ydCB7Y3JlYXRlUHJvamVjdERpYWxvZywgY3JlYXRlSXRlbURpYWxvZywgY3JlYXRlQ29uZmlybURpYWxvZywgY3JlYXRlRWRpdERpYWxvZywgY3JlYXRlTW92ZURpYWxvZ30gZnJvbSAnLi9jcmVhdGVEaWFsb2dzJ1xuaW1wb3J0IGFwcGVuZENoaWxkcmVuIGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbi9hcHBlbmRDaGlsZHJlbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTGF5b3V0KG9iail7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXG5cbiAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlQ29udGVudChvYmopXG4gICAgY29uc3QgcHJvamVjdERpYWxvZyA9IGNyZWF0ZVByb2plY3REaWFsb2coKVxuICAgIGNvbnN0IGl0ZW1EaWFsb2cgPSBjcmVhdGVJdGVtRGlhbG9nKClcbiAgICBjb25zdCBlZGl0RGlhbG9nID0gY3JlYXRlRWRpdERpYWxvZygpXG4gICAgY29uc3QgbW92ZURpYWxvZyA9IGNyZWF0ZU1vdmVEaWFsb2coKVxuICAgIGNvbnN0IGNvbmZpcm1EaWFsb2cgPSBjcmVhdGVDb25maXJtRGlhbG9nKClcblxuICAgIGFwcGVuZENoaWxkcmVuKGJvZHksIFtoZWFkZXIoKSwgY29udGFpbmVyXSlcbiAgICBhcHBlbmRDaGlsZHJlbihjb250YWluZXIsIFtuYXZCYXIoKSwgbWVudSgpLCBjb250ZW50LCBwcm9qZWN0RGlhbG9nLCBpdGVtRGlhbG9nLCBlZGl0RGlhbG9nLCBtb3ZlRGlhbG9nLCBjb25maXJtRGlhbG9nXSlcbn0iLCJpbXBvcnQgYXBwZW5kQ2hpbGRyZW4gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9hcHBlbmRDaGlsZHJlblwiXG5pbXBvcnQgY3JlYXRlQnV0dG9uV2l0aENsYXNzIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vY3JlYXRlQnV0dG9uV2l0aENsYXNzXCJcbmltcG9ydCBjcmVhdGVEaXZXaXRoQ2xhc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9jcmVhdGVEaXZXaXRoQ2xhc3NcIlxuaW1wb3J0IHByb2plY3RDb250YWluZXJPYmogZnJvbSBcIi4uL3Byb2plY3RDb250YWluZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IG1lbnUgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ21lbnUnLCAnZC1vZmYnKVxuXG4gICAgY29uc3QgbWVudVRvcCA9IGNyZWF0ZURpdldpdGhDbGFzcygnbWVudV9fdG9wJylcbiAgICBjb25zdCBtZW51SXRlbXNIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoX19iYXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwic2VhcmNoX19pbnB1dFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaF9faWNvbiBpY29uX19zbWFsbFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicmktc2VhcmNoLWxpbmVcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51X19pdGVtIGluYm94X19uYXYgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbl9fc21hbGxcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInJpLWluYm94LTItbGluZVwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+SW5ib3g8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudV9faXRlbSB0b2RheV9fbmF2XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIGljb25fX3NtYWxsXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJyaS1jYWxlbmRhci1saW5lXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj5Ub2RheTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIG1lbnVUb3AuaW5uZXJIVE1MID0gbWVudUl0ZW1zSFRNTFxuICAgIGNvbnN0IGhpc3RvcnlOYXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ21lbnVfX2l0ZW0nLCAnaGlzdG9yeV9fbmF2JylcbiAgICBoaXN0b3J5TmF2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIiBpY29uX19zbWFsbFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJyaS1oaXN0b3J5LWxpbmVcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3Bhbj5IaXN0b3J5PC9zcGFuPmBcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51VG9wLCBbY3JlYXRlUHJvamVjdExpc3QoKSwgaGlzdG9yeU5hdl0pXG4gICAgXG4gICAgY29uc3QgbWVudUJvdCA9IGNyZWF0ZURpdldpdGhDbGFzcygnbWVudV9fYm90JywgJ2ljb25fX2JpZycpXG4gICAgbWVudUJvdC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJyaS1zdW4tbGluZVwiPjwvaT4nXG5cbiAgICBhcHBlbmRDaGlsZHJlbihtZW51LCBbbWVudVRvcCwgbWVudUJvdF0pXG5cbiAgICByZXR1cm4gbWVudVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0TGlzdCgpe1xuICAgIGNvbnN0IHByb2plY3RMaXN0RGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdtZW51X19pdGVtJywgJ3Byb2plY3RfX2xpc3QnKVxuICAgIHByb2plY3RMaXN0RGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RfX25hdiBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uX19zbWFsbFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicmktYXJjaGl2ZS1saW5lXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj5Qcm9qZWN0PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFycm93IGljb25fX3NtYWxsXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJyaS1hcnJvdy11cC1zLWxpbmVcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxuXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdF9fbGlzdC1pdGVtcycsICdkLW9mZicpXG4gICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0Q29udGFpbmVyT2JqLmdldEFsbEl0ZW0oKVxuICAgIHByb2plY3RzLmZvckVhY2gocHJqID0+IHtcbiAgICAgICAgaWYocHJqLmdldFZhbHVlKCkudGl0bGUgIT09ICdJbmJveCcgJiYgcHJqLmdldFZhbHVlKCkudGl0bGUgIT09ICdUb2RheScpe1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgcHJvamVjdExpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfX2xpc3QtaXRlbScpXG4gICAgICAgICAgICBwcm9qZWN0TGkuaW5uZXJIVE1MID0gYDxzcGFuPiR7cHJqLmdldFZhbHVlKCkudGl0bGV9PC9zcGFuPmBcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygnYnV0dG9ucycpXG4gICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gY3JlYXRlQnV0dG9uV2l0aENsYXNzKCdlZGl0X19idG4nLCAncmktZWRpdC1ib3gtbGluZScpXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVCdXR0b25XaXRoQ2xhc3MoJ2RlbGV0ZV9fYnRuJywgJ3JpLWRlbGV0ZS1iaW4tNi1saW5lJylcbiAgICAgICAgICAgIGFwcGVuZENoaWxkcmVuKGJ1dHRvbkRpdiwgW2VkaXRCdG4sIGRlbGV0ZUJ0bl0pXG4gICAgICAgICAgICBwcm9qZWN0TGkuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KVxuICAgICAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdExpKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGFkZEJ0bkxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGFkZEJ0bkxpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfX2FkZC1idG4nKVxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gYCtgXG4gICAgYWRkQnRuTGkuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoYWRkQnRuTGkpXG4gICAgcHJvamVjdExpc3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpXG4gICAgcmV0dXJuIHByb2plY3RMaXN0RGl2XG59XG4iLCJpbXBvcnQgYXBwZW5kQ2hpbGRyZW4gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9hcHBlbmRDaGlsZHJlblwiXG5pbXBvcnQgY3JlYXRlRGl2V2l0aENsYXNzIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vY3JlYXRlRGl2V2l0aENsYXNzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTmF2aWdhdGlvbkJhcigpIHtcbiAgICBjb25zdCBuYXZCYXIgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ25hdl9fYmFyJylcblxuICAgIGNvbnN0IG5hdkl0ZW1zID0gY3JlYXRlRGl2V2l0aENsYXNzKCduYXZfX2l0ZW1zJylcbiAgICBjb25zdCBuYXZJdGVtSFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdl9faXRlbSBpY29uX19iaWcgc2VhcmNoX19uYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwicmktc2VhcmNoLWxpbmVcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2X19pdGVtIGljb25fX2JpZyBpbmJveF9fbmF2XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cInJpLWluYm94LTItbGluZVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXZfX2l0ZW0gaWNvbl9fYmlnIHRvZGF5X19uYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwicmktY2FsZW5kYXItbGluZVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXZfX2l0ZW0gaWNvbl9fYmlnIHByb2plY3RfX25hdlwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJyaS1hcmNoaXZlLWxpbmVcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2X19pdGVtIGljb25fX2JpZyBoaXN0b3J5X19uYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwicmktaGlzdG9yeS1saW5lXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgbmF2SXRlbXMuaW5uZXJIVE1MID0gbmF2SXRlbUhUTUxcblxuICAgIGNvbnN0IGFwcGVhcmFuY2VNb2RlID0gY3JlYXRlRGl2V2l0aENsYXNzKCdhcHBlYXJhbmNlX19tb2RlJywgJ2ljb25fX2JpZycpXG4gICAgYXBwZWFyYW5jZU1vZGUuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwicmktc3VuLWxpbmVcIj48L2k+J1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4obmF2QmFyLCBbbmF2SXRlbXMsIGFwcGVhcmFuY2VNb2RlXSlcblxuICAgIHJldHVybiBuYXZCYXJcbn1cbiIsImltcG9ydCBhcHBlbmRDaGlsZHJlbiBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2FwcGVuZENoaWxkcmVuLmpzXCJcbmltcG9ydCBjcmVhdGVEaXZXaXRoQ2xhc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9jcmVhdGVEaXZXaXRoQ2xhc3MuanNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVOb3RlKG5vdGUpIHtcbiAgICBjb25zdCBkZXRhaWwgPSBub3RlLmdldFZhbHVlKClcblxuICAgIGNvbnN0IG5vdGVEaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ25vdGUnLCAnY29udGVudF9faXRlbScpXG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygndGl0bGUnKVxuICAgIHRpdGxlRGl2LmlubmVySFRNTCA9IGA8c3Bhbj4ke2RldGFpbC50aXRsZX08L3NwYW4+YFxuXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdidXR0b25zJylcbiAgICBidXR0b25EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdF9fYnRuXCI+PGkgY2xhc3M9XCJyaS1lZGl0LWJveC1saW5lXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW92ZV9fYnRuXCI+PGkgY2xhc3M9XCJyaS1hcnJvdy1yaWdodC1jaXJjbGUtbGluZVwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZV9fYnRuXCI+PGkgY2xhc3M9XCJyaS1kZWxldGUtYmluLTYtbGluZVwiPjwvaT48L2J1dHRvbj5cbiAgICBgXG5cbiAgICBhcHBlbmRDaGlsZHJlbihub3RlRGl2LCBbdGl0bGVEaXYsIGJ1dHRvbkRpdl0pXG5cbiAgICByZXR1cm4gbm90ZURpdlxufVxuXG4iLCJpbXBvcnQgYXBwZW5kQ2hpbGRyZW4gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9hcHBlbmRDaGlsZHJlblwiXG5pbXBvcnQgY3JlYXRlQnV0dG9uV2l0aENsYXNzIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vY3JlYXRlQnV0dG9uV2l0aENsYXNzXCJcbmltcG9ydCBjcmVhdGVEaXZXaXRoQ2xhc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9jcmVhdGVEaXZXaXRoQ2xhc3NcIlxuaW1wb3J0IHNldFByaW9yaXR5Q2xhc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9zZXRQcmlvcml0eUNsYXNzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kbyh0b2RvKSB7XG4gICAgY29uc3QgZGV0YWlsID0gdG9kby5nZXRWYWx1ZSgpXG5cbiAgICBjb25zdCB0b2RvRGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCd0by1kbycsJ2NvbnRlbnRfX2l0ZW0nKVxuXG4gICAgY29uc3QgY2hlY2tib3hEaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ2NoZWNrYm94JylcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94J1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94X19pbnB1dCcpXG4gICAgY2hlY2tib3hEaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpXG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygndGl0bGUnKVxuICAgIHRpdGxlRGl2LmlubmVySFRNTCA9IGA8c3Bhbj4ke2RldGFpbC50aXRsZX08L3NwYW4+YFxuXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdidXR0b25zJylcbiAgICBjb25zdCBlZGl0QnRuID0gY3JlYXRlQnV0dG9uV2l0aENsYXNzKCdlZGl0X19idG4nLCAncmktZWRpdC1ib3gtbGluZScpXG4gICAgY29uc3QgcHJpb3JpdHlCdG4gPSBjcmVhdGVCdXR0b25XaXRoQ2xhc3MoJ3ByaW9yaXR5X19idG4nLCAncmktZmxhZy0yLWxpbmUnKVxuICAgIGNvbnN0IG1vdmVCdG4gPSBjcmVhdGVCdXR0b25XaXRoQ2xhc3MoJ21vdmVfX2J0bicsICdyaS1hcnJvdy1yaWdodC1jaXJjbGUtbGluZScpXG4gICAgY29uc3QgZGVsZXRlQnRuID0gY3JlYXRlQnV0dG9uV2l0aENsYXNzKCdkZWxldGVfX2J0bicsICdyaS1kZWxldGUtYmluLTYtbGluZScpXG5cbiAgICBzZXRQcmlvcml0eUNsYXNzKHByaW9yaXR5QnRuLCBkZXRhaWwucHJpb3JpdHkpXG5cbiAgICBhcHBlbmRDaGlsZHJlbihidXR0b25EaXYsIFtlZGl0QnRuLCBwcmlvcml0eUJ0biwgbW92ZUJ0biwgZGVsZXRlQnRuXSlcbiAgICBhcHBlbmRDaGlsZHJlbih0b2RvRGl2LCBbY2hlY2tib3hEaXYsIHRpdGxlRGl2LCBidXR0b25EaXZdKVxuXG4gICAgcmV0dXJuIHRvZG9EaXZcbn1cblxuXG5cblxuIiwiaW1wb3J0IGNyZWF0ZURpdldpdGhDbGFzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2NyZWF0ZURpdldpdGhDbGFzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVVbmRvQm94KG1lc3NhZ2Upe1xuICAgIGNvbnN0IHVuZG9Cb3ggPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ3VuZG9fX2JveCcpXG4gICAgdW5kb0JveC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzcGFuPiR7bWVzc2FnZX08L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHVuZG9fX2J0blwiPlVuZG88L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gY2xvc2VfX2J0blwiPkNsb3NlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgXG5cbiAgICByZXR1cm4gdW5kb0JveFxufSIsImltcG9ydCB7Zm9ybWF0fSBmcm9tICdkYXRlLWZucydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm90ZSgpe1xuICAgIGNvbnN0IHR5cGUgPSAnbm90ZSdcbiAgICBsZXQgdGl0bGUsIGRlc2NyaXB0aW9uIFxuICAgIGNvbnN0IGRhdGUgPSBmb3JtYXQobmV3IERhdGUoKSwgJ01NL2RkL3l5eXknKVxuXG4gICAgY29uc3QgY2hhbmdlVmFsdWUgPSAodGl0LGRlcykgPT4ge1xuICAgICAgICB0aXRsZSA9IHRpdFxuICAgICAgICBkZXNjcmlwdGlvbiA9IGRlc1xuICAgIH1cblxuICAgIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB0eXBlXG5cbiAgICBjb25zdCBnZXRWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkYXRlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIGNoYW5nZVZhbHVlLFxuICAgICAgICBnZXRUeXBlLFxuICAgICAgICBnZXRWYWx1ZVxuICAgIH1cbn0iLCJpbXBvcnQge2Zvcm1hdH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3QoKXtcbiAgICBjb25zdCBhcnIgPSBbXVxuICAgIGNvbnN0IHR5cGUgPSAncHJvamVjdCdcbiAgICBsZXQgdGl0bGUsIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZGF0ZSA9IGZvcm1hdChuZXcgRGF0ZSgpLCAnTU0vZGQveXl5eScpXG5cbiAgICBjb25zdCBjaGFuZ2VWYWx1ZSA9ICh0aXQsZGVzKSA9PiB7XG4gICAgICAgIHRpdGxlID0gdGl0XG4gICAgICAgIGRlc2NyaXB0aW9uID0gZGVzXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VmFsdWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybnt0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGV9XG4gICAgfVxuXG4gICAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGFyci5wdXNoKGl0ZW0pXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IChpbmRleCkgPT4ge1xuICAgICAgICBpZihpbmRleCA9PT0gMCl7XG4gICAgICAgICAgICBhcnIuc3BsaWNlKDAsMSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SXRlbSA9IChpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gYXJyW2luZGV4XVxuICAgIH1cbiAgICBjb25zdCBnZXRBbGxJdGVtID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXJyXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHR5cGVcbiAgICBcblxuICAgIHJldHVybntcbiAgICAgICAgY2hhbmdlVmFsdWUsXG4gICAgICAgIGdldFZhbHVlLFxuICAgICAgICBhZGRJdGVtLFxuICAgICAgICBkZWxldGVJdGVtLFxuICAgICAgICBnZXRJdGVtLFxuICAgICAgICBnZXRBbGxJdGVtLFxuICAgICAgICBnZXRUeXBlXG4gICAgfVxufSIsImltcG9ydCB7IGxvYWRGcm9tTG9jYWxTdG9yYWdlLCBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi91dGlscy9sb2NhbFN0b3JhZ2UnXG5pbXBvcnQgaW5ib3hPYmogZnJvbSAnLi9EZWZhdWx0IFByb2plY3QvaW5ib3gnXG5pbXBvcnQgdG9kYXlPYmogZnJvbSAnLi9EZWZhdWx0IFByb2plY3QvdG9kYXknXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0Q29udGFpbmVyKCkge1xuICAgIGNvbnN0IGFyciA9IFtdXG4gICAgY29uc3QgdHlwZSA9ICdwcm9qZWN0Q29udGFpbmVyJ1xuXG4gICAgY29uc3QgYWRkSXRlbSA9IChwcmopID0+IHtcbiAgICAgICAgYXJyLnB1c2gocHJqKVxuICAgIH1cblxuICAgIGNvbnN0IGdldEl0ZW0gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgaWYoaW5kZXggPj0gMCAmJiBpbmRleCA8IGFyci5sZW5ndGgpIHJldHVybiBhcnJbaW5kZXhdXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QWxsSXRlbSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGFyclxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgaWYoaW5kZXggPT09IDApe1xuICAgICAgICAgICAgYXJyLnNwbGljZSgwLDEpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB0eXBlXG5cbiAgICByZXR1cm57XG4gICAgICAgIGFkZEl0ZW0sXG4gICAgICAgIGdldEl0ZW0sXG4gICAgICAgIGdldEFsbEl0ZW0sXG4gICAgICAgIGRlbGV0ZUl0ZW0sXG4gICAgICAgIGdldFR5cGVcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByb2plY3RDb250YWluZXJDb25zdHJ1Y3RvcigpIHtcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdENvbnRhaW5lcicpID09PSBudWxsKXtcbiAgICAgICAgY29uc29sZS5sb2coJ1NhdmluZyB0byBsb2NhbCBzdG9yYWdlJylcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lck9iaiA9IHByb2plY3RDb250YWluZXIoKVxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyT2JqLmFkZEl0ZW0oaW5ib3hPYmopXG4gICAgICAgIHByb2plY3RDb250YWluZXJPYmouYWRkSXRlbSh0b2RheU9iailcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdwcm9qZWN0Q29udGFpbmVyJywgcHJvamVjdENvbnRhaW5lck9iailcbiAgICAgICAgcmV0dXJuIHByb2plY3RDb250YWluZXJPYmpcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc3QgbG9hZGVkUHJvamVjdENvbnRhaW5lciA9IGxvYWRGcm9tTG9jYWxTdG9yYWdlKCdwcm9qZWN0Q29udGFpbmVyJylcbiAgICAgICAgY29uc29sZS5sb2cobG9hZGVkUHJvamVjdENvbnRhaW5lcilcbiAgICAgICAgcmV0dXJuIGxvYWRlZFByb2plY3RDb250YWluZXJcbiAgICB9XG59XG5cbmNvbnN0IHByb2plY3RDb250YWluZXJPYmogPSBwcm9qZWN0Q29udGFpbmVyQ29uc3RydWN0b3IoKVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0Q29udGFpbmVyT2JqIiwiaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvKCl7XG4gICAgY29uc3QgdHlwZSA9ICd0b2RvJ1xuICAgIGxldCB0aXRsZSwgZGVzY3JpcHRpb24sc3RhcnREYXRlLCBkdWVEYXRlLCBwcmlvcml0eVxuICAgIGxldCBzdGF0dXMgPSBmYWxzZVxuXG4gICAgY29uc3QgY2hhbmdlVmFsdWUgPSAodGl0LGRlcywgc3RhcnQsIGR1ZSxwcmkpID0+IHtcbiAgICAgICAgdGl0bGUgPSB0aXRcbiAgICAgICAgZGVzY3JpcHRpb24gPSBkZXNcbiAgICAgICAgc3RhcnREYXRlID0gZm9ybWF0KHN0YXJ0LCAnTU0vZGQveXl5eScpXG4gICAgICAgIGR1ZURhdGUgPSBmb3JtYXQoZHVlLCAnTU0vZGQveXl5eScpXG4gICAgICAgIHByaW9yaXR5ID0gcHJpXG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSAocHJpKSA9PiB7XG4gICAgICAgIHByaW9yaXR5ID0gcHJpXG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICBpZihzdGF0dXMgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIHN0YXR1cyA9IHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzdGF0dXMgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB0eXBlXG5cbiAgICBjb25zdCBnZXRWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICBjaGFuZ2VWYWx1ZSxcbiAgICAgICAgY2hhbmdlU3RhdHVzLFxuICAgICAgICBjaGFuZ2VQcmlvcml0eSxcbiAgICAgICAgZ2V0VHlwZSxcbiAgICAgICAgZ2V0VmFsdWVcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4ocGFyZW50LCBjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvc2VUaGlzKG9iail7XG4gICAgb2JqLmNsYXNzTGlzdC5hZGQoJ2Qtb2ZmJylcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCdXR0b25XaXRoQ2xhc3MoY2xhc3NOYW1lLCBpY29uQ2xhc3MpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICBpZiAoaWNvbkNsYXNzKSB7XG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCIke2ljb25DbGFzc31cIj48L2k+YFxuICAgIH1cbiAgICByZXR1cm4gYnV0dG9uXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGl2V2l0aENsYXNzKC4uLmNsYXNzTmFtZSl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gZGl2O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUljb25XaXRoQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gaWNvbjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGVjdXRlV2l0aEFuaW1hdGlvbihpdGVtLCBjYWxsYmFjaykge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdjbG9zaW5nJywgJycpXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdjbG9zaW5nJylcbiAgICAgICAgY2FsbGJhY2soaXRlbSlcbiAgICB9LCB7b25jZTp0cnVlfSlcbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3BlblRoaXMob2JqKXtcbiAgICBvYmouY2xhc3NMaXN0LnJlbW92ZSgnZC1vZmYnKVxufSIsImltcG9ydCBwcm9qZWN0Q29udGFpbmVyT2JqIGZyb20gJy4uLy4uL2NvbXBvbmVudC9wcm9qZWN0Q29udGFpbmVyJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VhcmNoQWxsSXRlbXModGl0bGUpe1xuICAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IFtdXG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0Q29udGFpbmVyT2JqLmdldEFsbEl0ZW0oKVxuICAgIGFsbFByb2plY3RzLmZvckVhY2gocHJqID0+IHtcbiAgICAgICAgY29uc3QgYWxsSXRlbXMgPSBwcmouZ2V0QWxsSXRlbSgpXG4gICAgICAgIGFsbEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZihpdGVtLmdldFZhbHVlKCkudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aXRsZS50b0xvd2VyQ2FzZSgpKSl7XG4gICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0LnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlYXJjaFJlc3VsdFxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFByaW9yaXR5Q2xhc3MoZWxlbWVudCwgcHJpb3JpdHkpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5X19sb3cnKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHlfX21lZGl1bScpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eV9faGlnaCcpXG4gICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgICBjYXNlICdsb3cnOlxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eV9fbG93JylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5X19tZWRpdW0nKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5X19oaWdoJylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgfVxufSIsImltcG9ydCBub3RlIGZyb20gXCIuLi9jb21wb25lbnQvbm90ZVwiXG5pbXBvcnQgcHJvamVjdCBmcm9tIFwiLi4vY29tcG9uZW50L3Byb2plY3RcIlxuaW1wb3J0IHsgcHJvamVjdENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnQvcHJvamVjdENvbnRhaW5lclwiXG5pbXBvcnQgdG9kbyBmcm9tIFwiLi4vY29tcG9uZW50L3RvZG9cIlxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBzZXJpYWxpemVkVmFsdWUgPSBKU09OLnN0cmluZ2lmeShzZXJpYWxpemUodmFsdWUpKVxuICAgIGNvbnNvbGUubG9nKHNlcmlhbGl6ZWRWYWx1ZSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHNlcmlhbGl6ZWRWYWx1ZSlcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplKGlucHV0T2JqKXtcbiAgICBpZiAoaW5wdXRPYmouZ2V0VHlwZSgpKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXVxuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gaW5wdXRPYmopIHtcbiAgICAgICAgICAgIGxldCBhcnJcbiAgICAgICAgICAgIGlmICgodHlwZW9mIGlucHV0T2JqW3Byb3BdID09PSAnZnVuY3Rpb24nICYmIHByb3AgIT09ICdnZXRBbGxJdGVtJykgfHwgcHJvcCA9PT0gJ3R5cGUnKSBjb250aW51ZSAvLyBTa2lwIGZ1bmN0aW9uc1xuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdnZXRBbGxJdGVtJyl7XG4gICAgICAgICAgICAgICAgYXJyID0gaW5wdXRPYmouZ2V0QWxsSXRlbSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KGFycikpe1xuICAgICAgICAgICAgICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouZ2V0VHlwZSgpID09PSAndG9kbycgfHwgb2JqLmdldFR5cGUoKSA9PT0gJ25vdGUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogb2JqLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb2JqLmdldFZhbHVlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBvYmouZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvYmouZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBvYmouZ2V0QWxsSXRlbSgpLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uZ2V0VmFsdWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGlucHV0T2JqLmdldFZhbHVlICE9PSB1bmRlZmluZWQgJiYgaW5wdXRPYmogIT09ICd0b2RvJyAmJiBpbnB1dE9iaiAhPT0gJ25vdGUnKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogaW5wdXRPYmouZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpbnB1dE9iai5nZXRWYWx1ZSgpLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBpbnB1dE9iai5nZXRUeXBlKCksXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRnJvbUxvY2FsU3RvcmFnZShrZXkpIHtcbiAgICBjb25zdCBsb2FkZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG4gICAgY29uc29sZS5sb2cobG9hZGVkKVxuICAgIHN3aXRjaCAobG9hZGVkLnR5cGUpIHsgXG4gICAgICAgIGNhc2UgJ3Byb2plY3RDb250YWluZXInOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVByb2plY3RDb250YWluZXIobG9hZGVkLmRhdGEpXG4gICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVByb2plY3QobG9hZGVkKVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvbXBvbmVudChsb2FkZWQudHlwZSwgbG9hZGVkLmRhdGEpXG4gICAgfVxufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRhaW5lcihkYXRhKSB7XG4gICAgY29uc3Qgb2JqID0gcHJvamVjdENvbnRhaW5lcigpXG4gICAgZm9yIChjb25zdCBwcmogaW4gZGF0YSkge1xuICAgICAgICBvYmouYWRkSXRlbShjcmVhdGVQcm9qZWN0KGRhdGFbcHJqXSkpXG4gICAgfVxuICAgIHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChkYXRhKSB7XG4gICAgY29uc3Qgb2JqID0gcHJvamVjdCgpXG4gICAgb2JqLmNoYW5nZVZhbHVlKGRhdGEudmFsdWUudGl0bGUsIGRhdGEudmFsdWUuZGVzY3JpcHRpb24pXG4gICAgZGF0YS5kYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIG9iai5hZGRJdGVtKGNyZWF0ZUNvbXBvbmVudChpdGVtLnR5cGUsIGl0ZW0udmFsdWUpKVxuICAgIH0pXG4gICAgcmV0dXJuIG9ialxufVxuXG5mdW5jdGlvbiBjcmVhdGVOb3RlKGRhdGEpIHtcbiAgICBjb25zdCBvYmogPSBub3RlKClcbiAgICBvYmouY2hhbmdlVmFsdWUoZGF0YS50aXRsZSwgZGF0YS5kZXNjcmlwdGlvbilcbiAgICByZXR1cm4gb2JqXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8oZGF0YSkge1xuICAgIGNvbnN0IG9iaiA9IHRvZG8oKVxuICAgIG9iai5jaGFuZ2VWYWx1ZShkYXRhLnRpdGxlLCBkYXRhLmRlc2NyaXB0aW9uLCBkYXRhLnN0YXJ0RGF0ZSwgZGF0YS5kdWVEYXRlKVxuICAgIG9iai5jaGFuZ2VQcmlvcml0eShkYXRhLnByaW9yaXR5KVxuICAgIGlmKGRhdGEuc3RhdHVzKXtcbiAgICAgICAgb2JqLmNoYW5nZVN0YXR1cygpXG4gICAgfVxuICAgIHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KHR5cGUsIGRhdGEpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbm90ZSc6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlTm90ZShkYXRhKVxuICAgICAgICBjYXNlICd0b2RvJzpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVUb2RvKGRhdGEpXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn1cblxuXG4vLyBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpLCAoX2tleSwgdmFsdWUpID0+IHtcbi8vICAgICBpZiAodmFsdWUudHlwZSkge1xuLy8gICAgICAgICBsZXQgb2JqXG4vLyAgICAgICAgIHN3aXRjaCAodmFsdWUudHlwZSkge1xuLy8gICAgICAgICAgICAgY2FzZSAncHJvamVjdENvbnRhaW5lcic6XG4vLyAgICAgICAgICAgICAgICAgb2JqID0gY3JlYXRlUHJvamVjdENvbnRhaW5lcih2YWx1ZS5kYXRhKVxuLy8gICAgICAgICAgICAgICAgIGJyZWFrXG4vLyAgICAgICAgICAgICBjYXNlICdwcm9qZWN0Jzpcbi8vICAgICAgICAgICAgICAgICBvYmogPSBjcmVhdGVQcm9qZWN0KHZhbHVlLmRhdGEpXG4vLyAgICAgICAgICAgICAgICAgYnJlYWtcbi8vICAgICAgICAgICAgIGNhc2UgJ25vdGUnOlxuLy8gICAgICAgICAgICAgICAgIG9iaiA9IGNyZWF0ZU5vdGUodmFsdWUuZGF0YSlcbi8vICAgICAgICAgICAgICAgICBicmVha1xuLy8gICAgICAgICAgICAgY2FzZSAndG9kbyc6XG4vLyAgICAgICAgICAgICAgICAgb2JqID0gY3JlYXRlVG9kbyh2YWx1ZS5kYXRhKVxuLy8gICAgICAgICAgICAgICAgIGJyZWFrXG4vLyAgICAgICAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICAgICAgICAgIG9iaiA9IHZhbHVlXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgY29uc29sZS5sb2coJ3JpZ2h0Jylcbi8vICAgICAgICAgcmV0dXJuIG9ialxuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZygnd3JvbmcnKVxuLy8gICAgIHJldHVybiB2YWx1ZVxuLy8gfSlcbi8vIHJldHVybiBkYXRhIiwiaW1wb3J0IGNyZWF0ZUxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50L0xheW91dC9jcmVhdGVMYXlvdXRcIjtcbmltcG9ydCB7IGxvYWRGcm9tTG9jYWxTdG9yYWdlLCBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRTdGF0ZSwgc2V0Q3VycmVudFN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCBjb250ZW50SGFuZGxlciBmcm9tIFwiLi91aS1oYW5kbGVycy9jb250ZW50SGFuZGxlclwiO1xuaW1wb3J0IGhlYWRlckhhbmRsZXIgZnJvbSBcIi4vdWktaGFuZGxlcnMvaGVhZGVySGFuZGxlclwiO1xuaW1wb3J0IG1lbnVIYW5kbGVyIGZyb20gXCIuL3VpLWhhbmRsZXJzL21lbnVIYW5kbGVyXCI7XG5pbXBvcnQgbmF2SGFuZGxlciBmcm9tIFwiLi91aS1oYW5kbGVycy9uYXZIYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckxheW91dCgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgYm9keS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFN0YXRlKClcblxuICAgIGNyZWF0ZUxheW91dChjdXJyZW50UHJvamVjdClcbiAgICBcbiAgICBpZihib2R5LmlubmVySFRNTCAhPT0gJycpe1xuICAgICAgICBoZWFkZXJIYW5kbGVyKClcbiAgICAgICAgbmF2SGFuZGxlcigpXG4gICAgICAgIG1lbnVIYW5kbGVyKClcbiAgICAgICAgY29udGVudEhhbmRsZXIoKVxuICAgIH1cbn0iLCJpbXBvcnQgcHJvamVjdENvbnRhaW5lck9iaiBmcm9tIFwiLi4vY29tcG9uZW50L3Byb2plY3RDb250YWluZXJcIlxuaW1wb3J0IHsgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCJcblxubGV0IGN1cnJlbnRTdGF0ZSA9IHtcbiAgICBjdXJyZW50UHJvamVjdDogcHJvamVjdENvbnRhaW5lck9iai5nZXRJdGVtKDApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50U3RhdGUob2JqKXtcbiAgICBjdXJyZW50U3RhdGUuY3VycmVudFByb2plY3QgPSBvYmpcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRTdGF0ZSgpe1xuICAgIHJldHVybiBjdXJyZW50U3RhdGUuY3VycmVudFByb2plY3Rcbn0iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVhcmFuY2VIYW5kbGVyKCkge1xufVxuIiwiaW1wb3J0IGluYm94T2JqIGZyb20gXCIuLi8uLi9jb21wb25lbnQvRGVmYXVsdCBQcm9qZWN0L2luYm94XCJcbmltcG9ydCBwcm9qZWN0Q29udGFpbmVyT2JqIGZyb20gXCIuLi8uLi9jb21wb25lbnQvcHJvamVjdENvbnRhaW5lclwiXG5pbXBvcnQgY2xvc2VUaGlzIGZyb20gXCIuLi9jb21tb24vY2xvc2VUaGlzXCJcbmltcG9ydCBleGVjdXRlV2l0aEFuaW1hdGlvbiBmcm9tIFwiLi4vY29tbW9uL2V4ZWN1dGVXaXRoQW5pbWF0aW9uXCJcbmltcG9ydCByZW5kZXJMYXlvdXQgZnJvbSBcIi4uL3JlbmRlclwiXG5pbXBvcnQgeyBzZXRDdXJyZW50U3RhdGUgfSBmcm9tIFwiLi4vc3RhdGVcIlxuaW1wb3J0IHsgaXNNZW51T3BlbiwgaXNQcm9qZWN0TGlzdE9wZW4sIG9wZW5NZW51LCBvcGVuUHJvamVjdExpc3QgfSBmcm9tIFwiLi9tZW51SGFuZGxlclwiXG5pbXBvcnQgeyB1bmRvRGVsZXRlIH0gZnJvbSBcIi4vdW5kb0hhbmRsZXJcIlxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDb25maXJtSGFuZGxlcihwcm9qZWN0LCBpdGVtLCBpbmRleCl7XG4gICAgY29uc3QgY29uZmlybURpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtX19kaWFsb2cnKVxuICAgIGNvbnN0IHllc0J0biA9IGNvbmZpcm1EaWFsb2cucXVlcnlTZWxlY3RvcignLmFkZF9fYnRuJylcbiAgICBjb25zdCBub0J0biA9IGNvbmZpcm1EaWFsb2cucXVlcnlTZWxlY3RvcignLmNsb3NlX19idG4nKVxuXG4gICAgeWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51T3BlbiA9IGlzTWVudU9wZW4oKVxuICAgICAgICBjb25zdCBsaXN0T3BlbiA9IGlzUHJvamVjdExpc3RPcGVuKClcbiAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24oY29uZmlybURpYWxvZywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlSXRlbSA9IHByb2plY3QuZ2V0SXRlbShpbmRleClcbiAgICAgICAgICAgIHByb2plY3QuZGVsZXRlSXRlbShpbmRleClcbiAgICAgICAgICAgIGNvbmZpcm1EaWFsb2cuY2xvc2UoJ2RlbGV0ZWQnKVxuICAgICAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24oaXRlbSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsb3NlVGhpcyhpdGVtKVxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRTdGF0ZShwcm9qZWN0KVxuICAgICAgICAgICAgICAgIHJlbmRlckxheW91dCgpXG4gICAgICAgICAgICAgICAgaWYobWVudU9wZW4pIG9wZW5NZW51KGZhbHNlKVxuICAgICAgICAgICAgICAgIGlmKGxpc3RPcGVuKSBvcGVuUHJvamVjdExpc3QoKVxuICAgICAgICAgICAgICAgIHVuZG9EZWxldGUocHJvamVjdCxkZWxldGVJdGVtKVxuICAgICAgICAgICAgfSkgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBub0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24oY29uZmlybURpYWxvZywgKCkgPT4ge1xuICAgICAgICAgICAgY29uZmlybURpYWxvZy5jbG9zZSgnY2FuY2VsbGVkJylcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdENvbmZpcm1IYW5kbGVyKHByb2plY3QsIGluZGV4KXtcbiAgICBjb25zdCBjb25maXJtRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1fX2RpYWxvZycpXG4gICAgY29uc3QgeWVzQnRuID0gY29uZmlybURpYWxvZy5xdWVyeVNlbGVjdG9yKCcuYWRkX19idG4nKVxuICAgIGNvbnN0IG5vQnRuID0gY29uZmlybURpYWxvZy5xdWVyeVNlbGVjdG9yKCcuY2xvc2VfX2J0bicpXG5cbiAgICB5ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKGNvbmZpcm1EaWFsb2csICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBwcm9qZWN0LmdldEl0ZW0oaW5kZXgpXG4gICAgICAgICAgICBwcm9qZWN0LmRlbGV0ZUl0ZW0oaW5kZXgpXG4gICAgICAgICAgICBjb25maXJtRGlhbG9nLmNsb3NlKCdkZWxldGVkJylcbiAgICAgICAgICAgIHNldEN1cnJlbnRTdGF0ZShwcm9qZWN0Q29udGFpbmVyT2JqLmdldEl0ZW0oMCkpXG4gICAgICAgICAgICByZW5kZXJMYXlvdXQoKVxuICAgICAgICAgICAgb3Blbk1lbnUoZmFsc2UpXG4gICAgICAgICAgICBvcGVuUHJvamVjdExpc3QoKVxuICAgICAgICAgICAgdW5kb0RlbGV0ZShwcm9qZWN0LGRlbGV0ZUl0ZW0pXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIG5vQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbihjb25maXJtRGlhbG9nLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25maXJtRGlhbG9nLmNsb3NlKCdjYW5jZWxsZWQnKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbiIsImltcG9ydCBoaXN0b3J5T2JqIGZyb20gJy4uLy4uL2NvbXBvbmVudC9EZWZhdWx0IFByb2plY3QvaGlzdG9yeSdcbmltcG9ydCBwcm9qZWN0Q29udGFpbmVyT2JqIGZyb20gJy4uLy4uL2NvbXBvbmVudC9wcm9qZWN0Q29udGFpbmVyJ1xuaW1wb3J0IGNsb3NlVGhpcyBmcm9tICcuLi9jb21tb24vY2xvc2VUaGlzJ1xuaW1wb3J0IGV4ZWN1dGVXaXRoQW5pbWF0aW9uIGZyb20gJy4uL2NvbW1vbi9leGVjdXRlV2l0aEFuaW1hdGlvbidcbmltcG9ydCBvcGVuVGhpcyBmcm9tICcuLi9jb21tb24vb3BlblRoaXMnXG5pbXBvcnQgc2V0UHJpb3JpdHlDbGFzcyBmcm9tICcuLi9jb21tb24vc2V0UHJpb3JpdHlDbGFzcydcbmltcG9ydCB7IGxvYWRGcm9tTG9jYWxTdG9yYWdlLCBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9sb2NhbFN0b3JhZ2UnXG5pbXBvcnQgcmVuZGVyTGF5b3V0IGZyb20gJy4uL3JlbmRlcidcbmltcG9ydCB7IGdldEN1cnJlbnRTdGF0ZSwgc2V0Q3VycmVudFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUnXG5pbXBvcnQgeyBkZWxldGVDb25maXJtSGFuZGxlciB9IGZyb20gJy4vY29uZmlybURpYWxvZ0hhbmRsZXInXG5pbXBvcnQgeyBvcGVuRGV0YWlsLCBjaGFuZ2VEZXRhaWwgfSBmcm9tICcuL2RldGFpbEhhbmRsZXInXG5pbXBvcnQgeyBlZGl0Tm90ZURpYWxvZ0hhbmRsZXIsIGVkaXRUb2RvRGlhbG9nSGFuZGxlciB9IGZyb20gJy4vZWRpdERpYWxvZ0hhbmRsZXInXG5pbXBvcnQgeyBpc01lbnVPcGVuLCBpc1Byb2plY3RMaXN0T3Blbiwgb3Blbk1lbnUsIG9wZW5Qcm9qZWN0TGlzdCB9IGZyb20gJy4vbWVudUhhbmRsZXInXG5pbXBvcnQgbW92ZURpYWxvZ0hhbmRsZXIgZnJvbSAnLi9tb3ZlRGlhbG9nSGFuZGxlcidcbmltcG9ydCB7IHVuZG9DaGVja2JveCB9IGZyb20gJy4vdW5kb0hhbmRsZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRlbnRIYW5kbGVyKCkge1xuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX3RpdGxlJylcbiAgICBjb25zdCBkZXRhaWxCdG4gPSB0aXRsZURpdi5xdWVyeVNlbGVjdG9yKCdpJylcbiAgICBjb25zdCBjb250ZW50SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudF9faXRlbScpXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBnZXRDdXJyZW50U3RhdGUoKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRGV0YWlsQ2xpY2soaW5kZXgpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGN1cnJlbnRQcm9qZWN0LmdldEl0ZW0oaW5kZXgpXG4gICAgICAgIGNoYW5nZURldGFpbChpdGVtKVxuICAgICAgICBvcGVuRGV0YWlsKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVFZGl0QnV0dG9uQ2xpY2soaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgZWRpdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtX19lZGl0LWRpYWxvZycpXG4gICAgICAgIGNvbnN0IHRvZG9Gb3JtID0gZWRpdERpYWxvZy5xdWVyeVNlbGVjdG9yKCcjdG9kb19fZWRpdC1mb3JtJylcbiAgICAgICAgY29uc3Qgbm90ZUZvcm0gPSBlZGl0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNub3RlX19lZGl0LWZvcm0nKVxuXG4gICAgICAgIGVkaXREaWFsb2cuc2hvd01vZGFsKClcbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdub3RlJykpIHtcbiAgICAgICAgICAgIGhhbmRsZU5vdGVFZGl0KG5vdGVGb3JtLCB0b2RvRm9ybSwgaW5kZXgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGVUb2RvRWRpdCh0b2RvRm9ybSwgbm90ZUZvcm0sIGluZGV4KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTm90ZUVkaXQobm90ZUZvcm0sIHRvZG9Gb3JtLCBpbmRleCkge1xuICAgICAgICBvcGVuVGhpcyhub3RlRm9ybSlcbiAgICAgICAgY2xvc2VUaGlzKHRvZG9Gb3JtKVxuICAgICAgICBlZGl0Tm90ZURpYWxvZ0hhbmRsZXIoY3VycmVudFByb2plY3QuZ2V0SXRlbShpbmRleCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlVG9kb0VkaXQodG9kb0Zvcm0sIG5vdGVGb3JtLCBpbmRleCkge1xuICAgICAgICBvcGVuVGhpcyh0b2RvRm9ybSlcbiAgICAgICAgY2xvc2VUaGlzKG5vdGVGb3JtKVxuICAgICAgICBlZGl0VG9kb0RpYWxvZ0hhbmRsZXIoY3VycmVudFByb2plY3QuZ2V0SXRlbShpbmRleCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTW92ZUJ1dHRvbkNsaWNrKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1vdmVEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbV9fbW92ZS1kaWFsb2cnKVxuICAgICAgICBtb3ZlRGlhbG9nLnNob3dNb2RhbCgpXG4gICAgICAgIG1vdmVEaWFsb2dIYW5kbGVyKGN1cnJlbnRQcm9qZWN0LCBpdGVtLCBpbmRleClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVEZWxldGVCdXR0b25DbGljayhpdGVtLCBpbmRleCkge1xuICAgICAgICBjb25zdCBjb25maXJtRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1fX2RpYWxvZycpXG4gICAgICAgIGNvbmZpcm1EaWFsb2cuc2hvd01vZGFsKClcbiAgICAgICAgZGVsZXRlQ29uZmlybUhhbmRsZXIoY3VycmVudFByb2plY3QsIGl0ZW0sIGluZGV4KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVByaW9yaXR5QnV0dG9uQ2xpY2soaW5kZXgsIHByaW9yaXR5QnRuKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gY3VycmVudFByb2plY3QuZ2V0SXRlbShpbmRleClcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBjdXJyZW50SXRlbS5nZXRWYWx1ZSgpLnByaW9yaXR5XG4gICAgICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gcHJpb3JpdHkgPT09ICdsb3cnID8gJ21lZGl1bScgOiBwcmlvcml0eSA9PT0gJ21lZGl1bScgPyAnaGlnaCcgOiAnbG93J1xuICAgICAgICBjdXJyZW50SXRlbS5jaGFuZ2VQcmlvcml0eShuZXdQcmlvcml0eSlcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdwcm9qZWN0Q29udGFpbmVyJywgcHJvamVjdENvbnRhaW5lck9iailcbiAgICAgICAgc2V0UHJpb3JpdHlDbGFzcyhwcmlvcml0eUJ0biwgbmV3UHJpb3JpdHkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hlY2tib3hDaGFuZ2UoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgbWVudU9wZW4gPSBpc01lbnVPcGVuKClcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RPcGVuID0gaXNQcm9qZWN0TGlzdE9wZW4oKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaGVkSXRlbSA9IGN1cnJlbnRQcm9qZWN0LmdldEl0ZW0oaW5kZXgpXG4gICAgICAgICAgICBmaW5pc2hlZEl0ZW0uY2hhbmdlU3RhdHVzKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbmlzaGVkSXRlbS5nZXRWYWx1ZSgpLnN0YXR1cylcblxuICAgICAgICAgICAgY29uc3QgaGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaXN0b3J5JykgPyBsb2FkRnJvbUxvY2FsU3RvcmFnZSgnaGlzdG9yeScpIDogaGlzdG9yeU9ialxuICAgICAgICAgICAgaGlzdG9yeS5hZGRJdGVtKGZpbmlzaGVkSXRlbSlcbiAgICAgICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgnaGlzdG9yeScsIGhpc3RvcnkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhoaXN0b3J5LmdldEFsbEl0ZW0oKSlcblxuICAgICAgICAgICAgY3VycmVudFByb2plY3QuZGVsZXRlSXRlbShpbmRleClcbiAgICAgICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgncHJvamVjdENvbnRhaW5lcicsIHByb2plY3RDb250YWluZXJPYmopXG5cbiAgICAgICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKGl0ZW0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBjbG9zZVRoaXMoaXRlbSlcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50U3RhdGUoZ2V0Q3VycmVudFN0YXRlKCkpXG4gICAgICAgICAgICAgICAgcmVuZGVyTGF5b3V0KClcbiAgICAgICAgICAgICAgICBpZiAobWVudU9wZW4pIG9wZW5NZW51KGZhbHNlKVxuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0TGlzdE9wZW4pIG9wZW5Qcm9qZWN0TGlzdCgpXG4gICAgICAgICAgICAgICAgdW5kb0NoZWNrYm94KGN1cnJlbnRQcm9qZWN0LCBmaW5pc2hlZEl0ZW0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCA1MDApXG4gICAgfVxuXG4gICAgZGV0YWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjaGFuZ2VEZXRhaWwoY3VycmVudFByb2plY3QpXG4gICAgICAgIG9wZW5EZXRhaWwoKVxuICAgIH0pXG5cbiAgICBjb250ZW50SXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaXNTZWFyY2hSZXN1bHQgPSBjdXJyZW50UHJvamVjdC5nZXRWYWx1ZSgpLnRpdGxlID09PSAnU2VhcmNoIFJlc3VsdCdcbiAgICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpXG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlRGV0YWlsQ2xpY2soaW5kZXgpKVxuXG4gICAgICAgIGlmICghaXNTZWFyY2hSZXN1bHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmRlbGV0ZV9fYnRuJylcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrKGl0ZW0sIGluZGV4KSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbmlzaGVkJykgJiYgIWlzU2VhcmNoUmVzdWx0KSB7XG4gICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZWRpdF9fYnRuJylcbiAgICAgICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVFZGl0QnV0dG9uQ2xpY2soaXRlbSwgaW5kZXgpKVxuXG4gICAgICAgICAgICBjb25zdCBtb3ZlQnRuID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcubW92ZV9fYnRuJylcbiAgICAgICAgICAgIG1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVNb3ZlQnV0dG9uQ2xpY2soaXRlbSwgaW5kZXgpKVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3RvLWRvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnByaW9yaXR5X19idG4nKVxuICAgICAgICAgICAgICAgIHByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlUHJpb3JpdHlCdXR0b25DbGljayhpbmRleCwgcHJpb3JpdHlCdG4pKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveF9faW5wdXQnKVxuICAgICAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGhhbmRsZUNoZWNrYm94Q2hhbmdlKGl0ZW0sIGluZGV4KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG4iLCJpbXBvcnQgY3JlYXRlRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZURldGFpbFwiXG5pbXBvcnQgY2xvc2VUaGlzIGZyb20gXCIuLi9jb21tb24vY2xvc2VUaGlzXCJcbmltcG9ydCBleGVjdXRlV2l0aEFuaW1hdGlvbiBmcm9tIFwiLi4vY29tbW9uL2V4ZWN1dGVXaXRoQW5pbWF0aW9uXCJcbmltcG9ydCBvcGVuVGhpcyBmcm9tIFwiLi4vY29tbW9uL29wZW5UaGlzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGRldGFpbEhhbmRsZXIoKXtcbiAgICBjb25zdCBkZXRhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsJylcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRldGFpbC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VfX2J0bicpXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZGV0YWlsLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVfX2J0bicpXG5cblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbG9zZURldGFpbCgpXG4gICAgfSlcblxuICAgIC8vIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIC8vIH0pXG4gICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEZXRhaWwob2JqKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcbiAgICBjb25zdCBvbGREZXRhaWwgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmRldGFpbCcpXG4gICAgY29uc3QgbmV3RGV0YWlsID0gY3JlYXRlRGV0YWlsKG9iailcbiAgICBcbiAgICBpZihvbGREZXRhaWwgIT09IG51bGwpe1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQob2xkRGV0YWlsKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGV0YWlsKVxuICAgICAgICBvcGVuVGhpcyhuZXdEZXRhaWwpXG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEZXRhaWwpXG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlbkRldGFpbCgpe1xuICAgIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWwnKVxuICAgIGNvbnN0IGRldGFpbE9wZW4gPSBpc0RldGFpbE9wZW4oKVxuICAgIGlmKCFkZXRhaWxPcGVuKXtcbiAgICAgICAgZGV0YWlsLnNldEF0dHJpYnV0ZSgnb3BlbmluZycsJycpXG4gICAgICAgIG9wZW5UaGlzKGRldGFpbClcbiAgICAgICAgZGV0YWlsSGFuZGxlcigpXG4gICAgfWVsc2V7XG4gICAgICAgIGRldGFpbC5yZW1vdmVBdHRyaWJ1dGUoJ29wZW5pbmcnKVxuICAgICAgICBkZXRhaWwuc2V0QXR0cmlidXRlKCdvcGVuJywnJylcbiAgICAgICAgb3BlblRoaXMoZGV0YWlsKVxuICAgICAgICBkZXRhaWxIYW5kbGVyKClcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZURldGFpbCgpe1xuICAgIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWwnKVxuICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKGRldGFpbCwgKCkgPT4ge1xuICAgICAgICBjbG9zZVRoaXMoZGV0YWlsKVxuICAgICAgICBkZXRhaWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChkZXRhaWwpXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGV0YWlsT3Blbigpe1xuICAgIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWwnKVxuICAgIGlmKGRldGFpbCA9PT0gbnVsbCl7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1lbHNlIGlmKCFkZXRhaWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkLW9mZicpKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufSIsImltcG9ydCB7IHNldCB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHByb2plY3RDb250YWluZXJPYmogZnJvbSAnLi4vLi4vY29tcG9uZW50L3Byb2plY3RDb250YWluZXInXG5pbXBvcnQgZXhlY3V0ZVdpdGhBbmltYXRpb24gZnJvbSAnLi4vY29tbW9uL2V4ZWN1dGVXaXRoQW5pbWF0aW9uJ1xuaW1wb3J0IHsgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJ1xuaW1wb3J0IHJlbmRlckxheW91dCBmcm9tICcuLi9yZW5kZXInXG5pbXBvcnQgeyBjaGFuZ2VEZXRhaWwsIGlzRGV0YWlsT3Blbiwgb3BlbkRldGFpbCB9IGZyb20gJy4vZGV0YWlsSGFuZGxlcidcbmltcG9ydCB7IGlzTWVudU9wZW4sIGlzUHJvamVjdExpc3RPcGVuLCBvcGVuTWVudSwgb3BlblByb2plY3RMaXN0IH0gZnJvbSAnLi9tZW51SGFuZGxlcidcbmltcG9ydCB7IGdldEN1cnJlbnRTdGF0ZSwgc2V0Q3VycmVudFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUnXG5cbmZ1bmN0aW9uIHBvcHVsYXRlVG9kb0Zvcm0odG9kb0Zvcm0sIGl0ZW0pIHtcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgc3RhcnREYXRlLCBkdWVEYXRlfSA9IGl0ZW0uZ2V0VmFsdWUoKVxuICAgIHRvZG9Gb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvX190aXRsZS1pbnB1dCcpLnZhbHVlID0gdGl0bGVcbiAgICB0b2RvRm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kb19fZGVzLWlucHV0JykudmFsdWUgPSBkZXNjcmlwdGlvblxuICAgIHRvZG9Gb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19zdGFydC1pbnB1dCcpLnZhbHVlID0gbmV3IERhdGUoc3RhcnREYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICB0b2RvRm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kb19fZHVlLWlucHV0JykudmFsdWUgPSBuZXcgRGF0ZShkdWVEYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVOb3RlRm9ybShub3RlRm9ybSwgaXRlbSkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBpdGVtLmdldFZhbHVlKClcbiAgICBub3RlRm9ybS5xdWVyeVNlbGVjdG9yKCcubm90ZV9fdGl0bGUtaW5wdXQnKS52YWx1ZSA9IHRpdGxlXG4gICAgbm90ZUZvcm0ucXVlcnlTZWxlY3RvcignLm5vdGVfX2Rlcy1pbnB1dCcpLnZhbHVlID0gZGVzY3JpcHRpb25cbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0Rm9ybShwcm9qZWN0Rm9ybSwgaXRlbSkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBpdGVtLmdldFZhbHVlKClcbiAgICBwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fdGl0bGUtaW5wdXQnKS52YWx1ZSA9IHRpdGxlXG4gICAgcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2Rlcy1pbnB1dCcpLnZhbHVlID0gZGVzY3JpcHRpb25cbn1cblxuXG5mdW5jdGlvbiBhdHRhY2hGb3JtTGlzdGVuZXJzKGVkaXREaWFsb2csIGl0ZW0sIHNhdmVIYW5kbGVyKSB7XG4gICAgY29uc3Qgc2F2ZUJ0biA9IGVkaXREaWFsb2cucXVlcnlTZWxlY3RvcignLmFkZF9fYnRuJylcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBlZGl0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZV9fYnRuJylcblxuICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKGVkaXREaWFsb2csICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVPcGVuID0gaXNNZW51T3BlbigpXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdE9wZW4gPSBpc1Byb2plY3RMaXN0T3BlbigpXG4gICAgICAgICAgICAvLyBjb25zdCBkZXRhaWxPcGVuID0gaXNEZXRhaWxPcGVuKClcbiAgICAgICAgICAgIHNhdmVIYW5kbGVyKGl0ZW0pXG4gICAgICAgICAgICBlZGl0RGlhbG9nLmNsb3NlKCdzYXZlZCcpXG4gICAgICAgICAgICBzZXRDdXJyZW50U3RhdGUoZ2V0Q3VycmVudFN0YXRlKCkpXG4gICAgICAgICAgICByZW5kZXJMYXlvdXQoKVxuICAgICAgICAgICAgaWYgKG1lbnVPcGVuKSBvcGVuTWVudShmYWxzZSlcbiAgICAgICAgICAgIC8vIGlmIChkZXRhaWxPcGVuKXtcbiAgICAgICAgICAgICAgICBjaGFuZ2VEZXRhaWwoaXRlbSlcbiAgICAgICAgICAgICAgICBvcGVuRGV0YWlsKClcbiAgICAgICAgICAgIC8vIH0gXG4gICAgICAgICAgICBpZiAocHJvamVjdExpc3RPcGVuKSBvcGVuUHJvamVjdExpc3QoKVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKGVkaXREaWFsb2csICgpID0+IHtcbiAgICAgICAgICAgIGVkaXREaWFsb2cuY2xvc2UoJ2NhbmNlbGxlZCcpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUb2RvRGlhbG9nSGFuZGxlcihpdGVtKSB7XG4gICAgY29uc3QgZWRpdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtX19lZGl0LWRpYWxvZycpXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBlZGl0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvX19lZGl0LWZvcm0nKVxuICAgIHBvcHVsYXRlVG9kb0Zvcm0odG9kb0Zvcm0sIGl0ZW0pXG4gICAgYXR0YWNoRm9ybUxpc3RlbmVycyhlZGl0RGlhbG9nLCBpdGVtLCAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgc3RhcnREYXRlLCBkdWVEYXRlfSA9IHRvZG9Gb3JtLmVsZW1lbnRzXG4gICAgICAgIGl0ZW0uY2hhbmdlVmFsdWUodGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBzdGFydERhdGUudmFsdWUsIGR1ZURhdGUudmFsdWUsIGl0ZW0uZ2V0VmFsdWUoKS5wcmlvcml0eSlcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdwcm9qZWN0Q29udGFpbmVyJywgcHJvamVjdENvbnRhaW5lck9iailcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdE5vdGVEaWFsb2dIYW5kbGVyKGl0ZW0pIHtcbiAgICBjb25zdCBlZGl0RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1fX2VkaXQtZGlhbG9nJylcbiAgICBjb25zdCBub3RlRm9ybSA9IGVkaXREaWFsb2cucXVlcnlTZWxlY3RvcignI25vdGVfX2VkaXQtZm9ybScpXG4gICAgcG9wdWxhdGVOb3RlRm9ybShub3RlRm9ybSwgaXRlbSlcbiAgICBhdHRhY2hGb3JtTGlzdGVuZXJzKGVkaXREaWFsb2csIGl0ZW0sIChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBub3RlRm9ybS5lbGVtZW50c1xuICAgICAgICBpdGVtLmNoYW5nZVZhbHVlKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSlcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdwcm9qZWN0Q29udGFpbmVyJywgcHJvamVjdENvbnRhaW5lck9iailcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFByb2plY3REaWFsb2dIYW5kbGVyKGl0ZW0pIHtcbiAgICBjb25zdCBlZGl0RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1fX2VkaXQtZGlhbG9nJylcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGVkaXREaWFsb2cucXVlcnlTZWxlY3RvcignI3Byb2plY3RfX2VkaXQtZm9ybScpXG4gICAgcG9wdWxhdGVQcm9qZWN0Rm9ybShwcm9qZWN0Rm9ybSwgaXRlbSlcbiAgICBhdHRhY2hGb3JtTGlzdGVuZXJzKGVkaXREaWFsb2csIGl0ZW0sIChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBwcm9qZWN0Rm9ybS5lbGVtZW50c1xuICAgICAgICBpdGVtLmNoYW5nZVZhbHVlKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSlcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdwcm9qZWN0Q29udGFpbmVyJywgcHJvamVjdENvbnRhaW5lck9iailcbiAgICB9KVxufVxuIiwiaW1wb3J0IGV4ZWN1dGVXaXRoQW5pbWF0aW9uIGZyb20gXCIuLi9jb21tb24vZXhlY3V0ZVdpdGhBbmltYXRpb25cIlxuaW1wb3J0IGl0ZW1EaWFsb2dIYW5kbGVyIGZyb20gXCIuL2l0ZW1EaWFsb2dIYW5kbGVyXCJcbmltcG9ydCB7IGNsb3NlTWVudSwgb3Blbk1lbnUgfSBmcm9tIFwiLi9tZW51SGFuZGxlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlckhhbmRsZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKVxuICAgIGNvbnN0IG1lbnVCdG4gPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLm1lbnVfX2J0bicpXG4gICAgY29uc3QgYWRkQnRuID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5hZGRfX2J0bicpXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JylcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19iYXInKVxuXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYobWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2Qtb2ZmJykpe1xuICAgICAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24obmF2QmFyLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3Blbk1lbnUodHJ1ZSlcbiAgICAgICAgICAgIH0pICAgICAgICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKG1lbnUsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjbG9zZU1lbnUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1EaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbV9fYWRkLWRpYWxvZycpXG4gICAgICAgIGl0ZW1EaWFsb2cuc2hvd01vZGFsKClcbiAgICAgICAgaXRlbURpYWxvZ0hhbmRsZXIoKVxuICAgIH0pXG59XG4iLCJpbXBvcnQgb3BlblRoaXMgZnJvbSAnLi4vY29tbW9uL29wZW5UaGlzJ1xuaW1wb3J0IGNsb3NlVGhpcyBmcm9tICcuLi9jb21tb24vY2xvc2VUaGlzJ1xuaW1wb3J0IHRvZG8gZnJvbSAnLi4vLi4vY29tcG9uZW50L3RvZG8nXG5pbXBvcnQgbm90ZSBmcm9tICcuLi8uLi9jb21wb25lbnQvbm90ZSdcbmltcG9ydCBwcm9qZWN0Q29udGFpbmVyT2JqIGZyb20gJy4uLy4uL2NvbXBvbmVudC9wcm9qZWN0Q29udGFpbmVyJ1xuaW1wb3J0IHJlbmRlckxheW91dCBmcm9tICcuLi9yZW5kZXInXG5pbXBvcnQgeyBpc01lbnVPcGVuLCBpc1Byb2plY3RMaXN0T3Blbiwgb3Blbk1lbnUsIG9wZW5Qcm9qZWN0TGlzdCB9IGZyb20gJy4vbWVudUhhbmRsZXInXG5pbXBvcnQgeyBpc0RldGFpbE9wZW4sIG9wZW5EZXRhaWwgfSBmcm9tICcuL2RldGFpbEhhbmRsZXInXG5pbXBvcnQgZXhlY3V0ZVdpdGhBbmltYXRpb24gZnJvbSAnLi4vY29tbW9uL2V4ZWN1dGVXaXRoQW5pbWF0aW9uJ1xuaW1wb3J0IHsgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJ1xuaW1wb3J0IHsgc2V0Q3VycmVudFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGl0ZW1EaWFsb2dIYW5kbGVyKCkge1xuICAgIGNvbnN0IGl0ZW1EaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbV9fYWRkLWRpYWxvZycpXG4gICAgY29uc3Qgc2VsZWN0SW5wdXQgPSBpdGVtRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2l0ZW0taW5wdXQnKVxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9fX2FkZC1mb3JtJylcbiAgICBjb25zdCBub3RlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlX19hZGQtZm9ybScpXG4gICAgY29uc3QgY2xvc2VCdG4gPSBpdGVtRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZV9fYnRuJylcbiAgICBjb25zdCBhZGRCdG4gPSBpdGVtRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5hZGRfX2J0bicpXG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hGb3JtKCkge1xuICAgICAgICBjb25zdCBmb3JtVG9TaG93ID0gc2VsZWN0SW5wdXQudmFsdWUgPT09ICd0by1kbycgPyB0b2RvRm9ybSA6IG5vdGVGb3JtXG4gICAgICAgIGNvbnN0IGZvcm1Ub0hpZGUgPSBzZWxlY3RJbnB1dC52YWx1ZSA9PT0gJ3RvLWRvJyA/IG5vdGVGb3JtIDogdG9kb0Zvcm1cbiAgICAgICAgb3BlblRoaXMoZm9ybVRvU2hvdylcbiAgICAgICAgY2xvc2VUaGlzKGZvcm1Ub0hpZGUpXG4gICAgfVxuXG4gICAgc2VsZWN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc3dpdGNoRm9ybSlcblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbihpdGVtRGlhbG9nLCAoKSA9PiB7XG4gICAgICAgICAgICBpdGVtRGlhbG9nLmNsb3NlKCdjYW5jZWxlZCcpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZmlsbGVkID0gY2hlY2tWYWx1ZSgpXG4gICAgICAgIGlmKGZpbGxlZCl7XG4gICAgICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbihpdGVtRGlhbG9nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVudU9wZW4gPSBpc01lbnVPcGVuKClcbiAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxPcGVuID0gaXNEZXRhaWxPcGVuKClcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdE9wZW4gPSBpc1Byb2plY3RMaXN0T3BlbigpXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdElucHV0LnZhbHVlID09PSAndG8tZG8nKSBhZGRUb2RvKClcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxlY3RJbnB1dC52YWx1ZSA9PT0gJ25vdGUnKSBhZGROb3RlKClcbiAgICAgICAgICAgICAgICBpdGVtRGlhbG9nLmNsb3NlKCdhZGRlZCcpXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFN0YXRlKGdldFNlbGVjdGVkUHJvamVjdCgpKVxuICAgICAgICAgICAgICAgIHJlbmRlckxheW91dCgpXG4gICAgICAgICAgICAgICAgaWYgKG1lbnVPcGVuKSBvcGVuTWVudShmYWxzZSlcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdExpc3RPcGVuKSBvcGVuUHJvamVjdExpc3QoKVxuICAgICAgICAgICAgICAgIGlmIChkZXRhaWxPcGVuKSBvcGVuRGV0YWlsKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gYWRkVG9kbygpIHtcbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IHRvZG8oKVxuICAgICAgICBwb3B1bGF0ZVRvZG8obmV3VG9kbywgdG9kb0Zvcm0pXG4gICAgICAgIGdldFNlbGVjdGVkUHJvamVjdCgpLmFkZEl0ZW0obmV3VG9kbylcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdwcm9qZWN0Q29udGFpbmVyJywgcHJvamVjdENvbnRhaW5lck9iailcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGROb3RlKCkge1xuICAgICAgICBjb25zdCBuZXdOb3RlID0gbm90ZSgpXG4gICAgICAgIHBvcHVsYXRlTm90ZShuZXdOb3RlLCBub3RlRm9ybSlcbiAgICAgICAgZ2V0U2VsZWN0ZWRQcm9qZWN0KCkuYWRkSXRlbShuZXdOb3RlKVxuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ3Byb2plY3RDb250YWluZXInLCBwcm9qZWN0Q29udGFpbmVyT2JqKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVG9kbyhpdGVtLCBmb3JtKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvX190aXRsZS1pbnB1dCcpXG4gICAgICAgIGNvbnN0IGRlc0lucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kb19fZGVzLWlucHV0JylcbiAgICAgICAgY29uc3Qgc3RhcnRJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnRvZG9fX3N0YXJ0LWlucHV0JylcbiAgICAgICAgY29uc3QgZHVlSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19kdWUtaW5wdXQnKVxuICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kb19fcHJpb3JpdHktaW5wdXQnKVxuICAgICAgICBpdGVtLmNoYW5nZVZhbHVlKHRpdGxlSW5wdXQudmFsdWUsIGRlc0lucHV0LnZhbHVlLCBzdGFydElucHV0LnZhbHVlLCBkdWVJbnB1dC52YWx1ZSwgcHJpb3JpdHlJbnB1dC52YWx1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZU5vdGUoaXRlbSwgZm9ybSkge1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcubm90ZV9fdGl0bGUtaW5wdXQnKVxuICAgICAgICBjb25zdCBkZXNJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLm5vdGVfX2Rlcy1pbnB1dCcpXG4gICAgICAgIGl0ZW0uY2hhbmdlVmFsdWUodGl0bGVJbnB1dC52YWx1ZSwgZGVzSW5wdXQudmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tWYWx1ZSgpe1xuICAgICAgICBjb25zdCBmb3JtID0gc2VsZWN0SW5wdXQudmFsdWUgPT09ICd0by1kbycgPyB0b2RvRm9ybSA6IG5vdGVGb3JtXG4gICAgICAgIGlmKHNlbGVjdElucHV0LnZhbHVlID09PSAndG8tZG8nKXtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvX190aXRsZS1pbnB1dCcpXG4gICAgICAgICAgICBjb25zdCBkZXNJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnRvZG9fX2Rlcy1pbnB1dCcpXG4gICAgICAgICAgICBjb25zdCBzdGFydElucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kb19fc3RhcnQtaW5wdXQnKVxuICAgICAgICAgICAgY29uc3QgZHVlSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19kdWUtaW5wdXQnKVxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnRvZG9fX3ByaW9yaXR5LWlucHV0JylcblxuICAgICAgICAgICAgcmV0dXJuIHRpdGxlSW5wdXQudmFsdWUmJmRlc0lucHV0LnZhbHVlJiZzdGFydElucHV0LnZhbHVlJiZkdWVJbnB1dC52YWx1ZSYmcHJpb3JpdHlJbnB1dC52YWx1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5ub3RlX190aXRsZS1pbnB1dCcpXG4gICAgICAgICAgICBjb25zdCBkZXNJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLm5vdGVfX2Rlcy1pbnB1dCcpXG5cbiAgICAgICAgICAgIHJldHVybiB0aXRsZUlucHV0LnZhbHVlJiZkZXNJbnB1dC52YWx1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtX19wcm9qZWN0LWlucHV0JylcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHByb2plY3RMaXN0LnZhbHVlXG4gICAgICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyT2JqLmdldEFsbEl0ZW0oKS5maW5kKHByaiA9PiBwcmouZ2V0VmFsdWUoKS50aXRsZSA9PT0gc2VsZWN0ZWRWYWx1ZSlcbiAgICB9XG59XG4iLCJpbXBvcnQgaW5ib3ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9EZWZhdWx0IFByb2plY3QvaW5ib3hcIlxuaW1wb3J0IHRvZGF5IGZyb20gXCIuLi8uLi9jb21wb25lbnQvRGVmYXVsdCBQcm9qZWN0L3RvZGF5XCJcbmltcG9ydCBoaXN0b3J5IGZyb20gXCIuLi8uLi9jb21wb25lbnQvRGVmYXVsdCBQcm9qZWN0L2hpc3RvcnlcIlxuaW1wb3J0IHsgc2V0Q3VycmVudFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlXCJcbmltcG9ydCByZW5kZXJMYXlvdXQgZnJvbSBcIi4uL3JlbmRlclwiXG5pbXBvcnQgcHJvamVjdERpYWxvZ0hhbmRsZXIgZnJvbSBcIi4vcHJvamVjdERpYWxvZ0hhbmRsZXJcIlxuaW1wb3J0IHByb2plY3RDb250YWluZXJPYmogZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9wcm9qZWN0Q29udGFpbmVyXCJcbmltcG9ydCBjbG9zZVRoaXMgZnJvbSBcIi4uL2NvbW1vbi9jbG9zZVRoaXNcIlxuaW1wb3J0IG9wZW5UaGlzIGZyb20gXCIuLi9jb21tb24vb3BlblRoaXNcIlxuaW1wb3J0IHsgZGVsZXRlUHJvamVjdENvbmZpcm1IYW5kbGVyIH0gZnJvbSBcIi4vY29uZmlybURpYWxvZ0hhbmRsZXJcIlxuaW1wb3J0IHsgZWRpdFByb2plY3REaWFsb2dIYW5kbGVyIH0gZnJvbSBcIi4vZWRpdERpYWxvZ0hhbmRsZXJcIlxuaW1wb3J0IHNlYXJjaFJlc3VsdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0RlZmF1bHQgUHJvamVjdC9zZWFyY2hSZXN1bHRcIlxuaW1wb3J0IHNlYXJjaEFsbEl0ZW1zIGZyb20gXCIuLi9jb21tb24vc2VhcmNoQWxsSXRlbXNcIlxuaW1wb3J0IGFwcGVhcmFuY2VIYW5kbGVyIGZyb20gXCIuL2FwcGVhcmFuY2VIYW5kbGVyXCJcbmltcG9ydCB7IGxvYWRGcm9tTG9jYWxTdG9yYWdlLCBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vbG9jYWxTdG9yYWdlXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUhhbmRsZXIoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JylcbiAgICBjb25zdCBpbmJveE5hdiA9IG1lbnUucXVlcnlTZWxlY3RvcignLmluYm94X19uYXYnKVxuICAgIGNvbnN0IHRvZGF5TmF2ID0gbWVudS5xdWVyeVNlbGVjdG9yKCcudG9kYXlfX25hdicpXG4gICAgY29uc3QgcHJvamVjdE5hdiA9IG1lbnUucXVlcnlTZWxlY3RvcignLnByb2plY3RfX25hdicpXG4gICAgY29uc3QgaGlzdG9yeU5hdiA9IG1lbnUucXVlcnlTZWxlY3RvcignLmhpc3RvcnlfX25hdicpXG4gICAgY29uc3QgcHJvamVjdEFkZEJ1dHRvbiA9IG1lbnUucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2FkZC1idG4gYnV0dG9uJylcbiAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RfX2xpc3QtaXRlbScpXG4gICAgY29uc3Qgc2VhcmNoQnRuID0gbWVudS5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19pY29uJylcbiAgICBjb25zdCBhcHBlYXJhbmNlQnRuID0gbWVudS5xdWVyeVNlbGVjdG9yKCcubWVudV9fYm90JylcblxuICAgIGluYm94TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbmF2Q2xpY2tIYW5kbGVyKHByb2plY3RDb250YWluZXJPYmouZ2V0SXRlbSgwKSkpXG4gICAgdG9kYXlOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBuYXZDbGlja0hhbmRsZXIocHJvamVjdENvbnRhaW5lck9iai5nZXRJdGVtKDEpKSlcbiAgICBwcm9qZWN0TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlUHJvamVjdExpc3QpXG4gICAgaGlzdG9yeU5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpc3RvcnknKSl7XG4gICAgICAgICAgICBuYXZDbGlja0hhbmRsZXIobG9hZEZyb21Mb2NhbFN0b3JhZ2UoJ2hpc3RvcnknKSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBuYXZDbGlja0hhbmRsZXIoaGlzdG9yeSlcbiAgICAgICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgnaGlzdG9yeScsIGhpc3RvcnkpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHByb2plY3RBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQcm9qZWN0QWRkQnV0dG9uQ2xpY2spXG5cbiAgICBwcm9qZWN0TGlzdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdzcGFuJylcbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmVkaXRfX2J0bicpXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmRlbGV0ZV9fYnRuJylcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0Q29udGFpbmVyT2JqLmdldEFsbEl0ZW0oKVxuICAgICAgICBjb25zdCB0YXJnZXRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcmogPT4gcHJqLmdldFZhbHVlKCkudGl0bGUgPT09IGl0ZW0udGV4dENvbnRlbnQpXG5cbiAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVUaXRsZUNsaWNrKHRhcmdldFByb2plY3QpKVxuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlRWRpdEJ1dHRvbkNsaWNrKHRhcmdldFByb2plY3QpKVxuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVEZWxldGVCdXR0b25DbGljayh0aXRsZS50ZXh0Q29udGVudCkpXG4gICAgfSlcblxuICAgIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNlYXJjaEJ1dHRvbkNsaWNrKVxuXG4gICAgYXBwZWFyYW5jZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYXBwZWFyYW5jZUhhbmRsZXIpXG59XG5cbmZ1bmN0aW9uIG5hdkNsaWNrSGFuZGxlcihwcm9qZWN0KSB7XG4gICAgY29uc3QgbGlzdE9wZW4gPSBpc1Byb2plY3RMaXN0T3BlbigpXG4gICAgc2V0Q3VycmVudFN0YXRlKHByb2plY3QpXG4gICAgcmVuZGVyTGF5b3V0KClcbiAgICBvcGVuTWVudShmYWxzZSlcbiAgICBpZihsaXN0T3BlbikgdG9nZ2xlUHJvamVjdExpc3QoKVxufVxuXG5mdW5jdGlvbiB0b2dnbGVQcm9qZWN0TGlzdCgpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUgdWwnKVxuICAgIGxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnZC1vZmYnKVxuICAgIGNvbnN0IGFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93JylcbiAgICBhcnJvdy5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUtMTgwJylcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdEFkZEJ1dHRvbkNsaWNrKCkge1xuICAgIGNvbnN0IHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF9fYWRkLWRpYWxvZycpXG4gICAgcHJvamVjdERpYWxvZy5zaG93TW9kYWwoKVxuICAgIHByb2plY3REaWFsb2cuY2xhc3NMaXN0LmFkZCgnZGYnKVxuICAgIHByb2plY3REaWFsb2dIYW5kbGVyKClcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGl0bGVDbGljayhwcm9qZWN0KSB7XG4gICAgc2V0Q3VycmVudFN0YXRlKHByb2plY3QpXG4gICAgcmVuZGVyTGF5b3V0KClcbiAgICBvcGVuTWVudShmYWxzZSlcbiAgICBvcGVuUHJvamVjdExpc3QoKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFZGl0QnV0dG9uQ2xpY2socHJvamVjdCkge1xuICAgIGNvbnN0IGVkaXREaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbV9fZWRpdC1kaWFsb2cnKVxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZWRpdERpYWxvZy5xdWVyeVNlbGVjdG9yKCcjdG9kb19fZWRpdC1mb3JtJylcbiAgICBjb25zdCBub3RlRm9ybSA9IGVkaXREaWFsb2cucXVlcnlTZWxlY3RvcignI25vdGVfX2VkaXQtZm9ybScpXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBlZGl0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0X19lZGl0LWZvcm0nKVxuXG4gICAgZWRpdERpYWxvZy5zaG93TW9kYWwoKVxuICAgIG9wZW5UaGlzKHByb2plY3RGb3JtKVxuICAgIGNsb3NlVGhpcyhub3RlRm9ybSlcbiAgICBjbG9zZVRoaXModG9kb0Zvcm0pXG4gICAgZWRpdFByb2plY3REaWFsb2dIYW5kbGVyKHByb2plY3QpXG4gICAgb3BlblByb2plY3RMaXN0KClcbn1cblxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlQnV0dG9uQ2xpY2sodGl0bGUpIHtcbiAgICBjb25zdCBjb25maXJtRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1fX2RpYWxvZycpXG4gICAgY29uZmlybURpYWxvZy5zaG93TW9kYWwoKVxuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdENvbnRhaW5lck9iai5nZXRBbGxJdGVtKCkuZmluZEluZGV4KHByaiA9PiBwcmouZ2V0VmFsdWUoKS50aXRsZSA9PT0gdGl0bGUpXG4gICAgZGVsZXRlUHJvamVjdENvbmZpcm1IYW5kbGVyKHByb2plY3RDb250YWluZXJPYmosIGluZGV4KVxufVxuXG5mdW5jdGlvbiBoYW5kbGVTZWFyY2hCdXR0b25DbGljaygpIHtcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2lucHV0JylcbiAgICBpZiAoc2VhcmNoSW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdE9iaiA9IHNlYXJjaFJlc3VsdCgpXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBzZWFyY2hBbGxJdGVtcyhzZWFyY2hJbnB1dC52YWx1ZSlcbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKGl0ZW0gPT4gc2VhcmNoUmVzdWx0T2JqLmFkZEl0ZW0oaXRlbSkpXG4gICAgICAgIHNldEN1cnJlbnRTdGF0ZShzZWFyY2hSZXN1bHRPYmopXG4gICAgICAgIHJlbmRlckxheW91dCgpXG4gICAgICAgIG9wZW5NZW51KGZhbHNlKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvamVjdExpc3RPcGVuKCkge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudSB1bCcpXG4gICAgcmV0dXJuICFsaXN0LmNsYXNzTGlzdC5jb250YWlucygnZC1vZmYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlblByb2plY3RMaXN0KCkge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudSB1bCcpXG4gICAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3cnKVxuICAgIGxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnZC1vZmYnKVxuICAgIGFycm93LmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZS0xODAnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNZW51T3BlbigpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKVxuICAgIHJldHVybiAhbWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2Qtb2ZmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5NZW51KGFuaW1hdGVkKSB7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fYmFyJylcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKVxuICAgIGNsb3NlVGhpcyhuYXZCYXIpXG4gICAgaWYgKGFuaW1hdGVkID09PSBmYWxzZSkge1xuICAgICAgICBvcGVuVGhpcyhtZW51KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnc2xpZGVJbkxlZnQnKVxuICAgICAgICBvcGVuVGhpcyhtZW51KVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19iYXInKVxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpXG4gICAgY2xvc2VUaGlzKG1lbnUpXG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlSW5MZWZ0JylcbiAgICBvcGVuVGhpcyhuYXZCYXIpXG59XG4iLCJpbXBvcnQgcHJvamVjdENvbnRhaW5lck9iaiBmcm9tIFwiLi4vLi4vY29tcG9uZW50L3Byb2plY3RDb250YWluZXJcIlxuaW1wb3J0IGNsb3NlVGhpcyBmcm9tIFwiLi4vY29tbW9uL2Nsb3NlVGhpc1wiXG5pbXBvcnQgZXhlY3V0ZVdpdGhBbmltYXRpb24gZnJvbSBcIi4uL2NvbW1vbi9leGVjdXRlV2l0aEFuaW1hdGlvblwiXG5pbXBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vbG9jYWxTdG9yYWdlXCJcbmltcG9ydCByZW5kZXJMYXlvdXQgZnJvbSBcIi4uL3JlbmRlclwiXG5pbXBvcnQgeyBpc01lbnVPcGVuLCBpc1Byb2plY3RMaXN0T3Blbiwgb3Blbk1lbnUsIG9wZW5Qcm9qZWN0TGlzdCB9IGZyb20gXCIuL21lbnVIYW5kbGVyXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW92ZURpYWxvZ0hhbmRsZXIoY3VyciwgaXRlbSwgaW5kZXgpe1xuICAgIGNvbnN0IG1vdmVEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbV9fbW92ZS1kaWFsb2cnKVxuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IG1vdmVEaWFsb2cucXVlcnlTZWxlY3RvcignLml0ZW1fX3Byb2plY3QtaW5wdXQnKVxuICAgIGNvbnN0IHNhdmVCdG4gPSBtb3ZlRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5hZGRfX2J0bicpXG4gICAgY29uc3QgY2FuY2VsQnRuID0gbW92ZURpYWxvZy5xdWVyeVNlbGVjdG9yKCcuY2xvc2VfX2J0bicpXG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RDb250YWluZXJPYmouZ2V0QWxsSXRlbSgpXG5cbiAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51T3BlbiA9IGlzTWVudU9wZW4oKVxuICAgICAgICBjb25zdCBsaXN0T3BlbiA9IGlzUHJvamVjdExpc3RPcGVuKClcbiAgICAgICAgY29uc3QgbW92ZUl0ZW0gPSBjdXJyLmdldEl0ZW0oaW5kZXgpXG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvamVjdHMuZmluZChwcmogPT4gcHJqLmdldFZhbHVlKCkudGl0bGUgPT09IHByb2plY3RJbnB1dC52YWx1ZSlcbiAgICAgICAgY3Vyci5kZWxldGVJdGVtKGluZGV4KVxuICAgICAgICBkZXN0aW5hdGlvbi5hZGRJdGVtKG1vdmVJdGVtKVxuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ3Byb2plY3RDb250YWluZXInLCBwcm9qZWN0Q29udGFpbmVyT2JqKVxuICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbihtb3ZlRGlhbG9nLCAoKSA9PiB7XG4gICAgICAgICAgICBtb3ZlRGlhbG9nLmNsb3NlKCdzYXZlZCcpXG4gICAgICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbihpdGVtLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xvc2VUaGlzKGl0ZW0pXG4gICAgICAgICAgICAgICAgcmVuZGVyTGF5b3V0KClcbiAgICAgICAgICAgICAgICBpZihtZW51T3Blbikgb3Blbk1lbnUoZmFsc2UpXG4gICAgICAgICAgICAgICAgaWYobGlzdE9wZW4pIG9wZW5Qcm9qZWN0TGlzdCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKG1vdmVEaWFsb2csICgpID0+IHtcbiAgICAgICAgICAgIG1vdmVEaWFsb2cuY2xvc2UoJ2NhbmNlbGVkJylcbiAgICAgICAgfSlcbiAgICB9KVxufSIsImltcG9ydCBoaXN0b3J5IGZyb20gXCIuLi8uLi9jb21wb25lbnQvRGVmYXVsdCBQcm9qZWN0L2hpc3RvcnlcIlxuaW1wb3J0IHsgc2V0Q3VycmVudFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlXCJcbmltcG9ydCByZW5kZXJMYXlvdXQgZnJvbSBcIi4uL3JlbmRlclwiXG5pbXBvcnQgeyBvcGVuTWVudSwgb3BlblByb2plY3RMaXN0IH0gZnJvbSBcIi4vbWVudUhhbmRsZXJcIlxuaW1wb3J0IGFwcGVhcmFuY2VIYW5kbGVyIGZyb20gXCIuL2FwcGVhcmFuY2VIYW5kbGVyXCJcbmltcG9ydCB7IGxvYWRGcm9tTG9jYWxTdG9yYWdlLCBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vbG9jYWxTdG9yYWdlXCJcbmltcG9ydCBwcm9qZWN0Q29udGFpbmVyT2JqIGZyb20gXCIuLi8uLi9jb21wb25lbnQvcHJvamVjdENvbnRhaW5lclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdkhhbmRsZXIoKXtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19iYXInKVxuICAgIGNvbnN0IHNlYXJjaE5hdiA9IG5hdkJhci5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19uYXYnKVxuICAgIGNvbnN0IGluYm94TmF2ID0gbmF2QmFyLnF1ZXJ5U2VsZWN0b3IoJy5pbmJveF9fbmF2JylcbiAgICBjb25zdCB0b2RheU5hdiA9IG5hdkJhci5xdWVyeVNlbGVjdG9yKCcudG9kYXlfX25hdicpXG4gICAgY29uc3QgcHJvamVjdE5hdiA9IG5hdkJhci5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fbmF2JylcbiAgICBjb25zdCBoaXN0b3J5TmF2ID0gbmF2QmFyLnF1ZXJ5U2VsZWN0b3IoJy5oaXN0b3J5X19uYXYnKVxuICAgIGNvbnN0IGFwcGVhcmFuY2VCdG4gPSBuYXZCYXIucXVlcnlTZWxlY3RvcignLmFwcGVhcmFuY2VfX21vZGUnKVxuXG4gICAgc2VhcmNoTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1lbnUoKSlcbiAgICBcbiAgICBpbmJveE5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFN0YXRlKHByb2plY3RDb250YWluZXJPYmouZ2V0SXRlbSgwKSlcbiAgICAgICAgcmVuZGVyTGF5b3V0KClcbiAgICB9KVxuICAgIHRvZGF5TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50U3RhdGUocHJvamVjdENvbnRhaW5lck9iai5nZXRJdGVtKDEpKVxuICAgICAgICByZW5kZXJMYXlvdXQoKVxuICAgIH0pXG4gICAgcHJvamVjdE5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgb3Blbk1lbnUoKVxuICAgICAgICBvcGVuUHJvamVjdExpc3QoKVxuICAgIH0pXG4gICAgaGlzdG9yeU5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpc3RvcnknKSl7XG4gICAgICAgICAgICBzZXRDdXJyZW50U3RhdGUobG9hZEZyb21Mb2NhbFN0b3JhZ2UoJ2hpc3RvcnknKSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXRDdXJyZW50U3RhdGUoaGlzdG9yeSlcbiAgICAgICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgnaGlzdG9yeScsIGhpc3RvcnkpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlbmRlckxheW91dCgpXG4gICAgfSlcblxuICAgIGFwcGVhcmFuY2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBlYXJhbmNlSGFuZGxlcilcbn1cblxuIiwiLy8gRm9yIHByb2plY3REaWFsb2dIYW5kbGVyXG5pbXBvcnQgcHJvamVjdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50L3Byb2plY3RcIlxuaW1wb3J0IHByb2plY3RDb250YWluZXJPYmogZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9wcm9qZWN0Q29udGFpbmVyXCJcbmltcG9ydCBleGVjdXRlV2l0aEFuaW1hdGlvbiBmcm9tIFwiLi4vY29tbW9uL2V4ZWN1dGVXaXRoQW5pbWF0aW9uXCJcbmltcG9ydCB7IHNhdmVUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9sb2NhbFN0b3JhZ2VcIlxuaW1wb3J0IHJlbmRlckxheW91dCBmcm9tIFwiLi4vcmVuZGVyXCJcbmltcG9ydCB7IHNldEN1cnJlbnRTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZVwiXG5pbXBvcnQgeyBvcGVuTWVudSwgb3BlblByb2plY3RMaXN0IH0gZnJvbSBcIi4vbWVudUhhbmRsZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0RGlhbG9nSGFuZGxlcigpIHtcbiAgICBjb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfX2FkZC1kaWFsb2cnKVxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfX2FkZC1mb3JtJylcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fdGl0bGUtaW5wdXQnKVxuICAgIGNvbnN0IGRlc0lucHV0ID0gcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2Rlcy1pbnB1dCcpXG4gICAgY29uc3QgYWRkQnRuID0gcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcignLmFkZF9fYnRuJylcbiAgICBjb25zdCBjbG9zZUJ0biA9IHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZV9fYnRuJylcblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbihwcm9qZWN0RGlhbG9nLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ25vdmFsaWRhdGUnKVxuICAgICAgICAgICAgcHJvamVjdERpYWxvZy5jbG9zZSgnY2FuY2VsZWQnKVxuICAgICAgICAgICAgcHJvamVjdERpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdkZicpXG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ25vdmFsaWRhdGUnLCAndHJ1ZScpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH0pXG5cbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdENvbnRhaW5lck9iai5nZXRBbGxJdGVtKClcbiAgICAgICAgY29uc3QgbmFtZVZhbHVlID0gbmFtZUlucHV0LnZhbHVlLnRyaW0oKVxuICAgICAgICBjb25zdCBkZXNWYWx1ZSA9IGRlc0lucHV0LnZhbHVlLnRyaW0oKVxuICAgICAgICBcbiAgICAgICAgaWYgKG5hbWVWYWx1ZSAmJiBkZXNWYWx1ZSkge1xuICAgICAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24ocHJvamVjdERpYWxvZywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdCA9IGFsbFByb2plY3RzLmZpbmQocHJqID0+IHByai5nZXRWYWx1ZSgpLnRpdGxlID09PSBuYW1lVmFsdWUpXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QoKVxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Byb2plY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdC5jaGFuZ2VWYWx1ZShuYW1lVmFsdWUgKyAnMScsIGRlc1ZhbHVlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3QuY2hhbmdlVmFsdWUobmFtZVZhbHVlLCBkZXNWYWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lck9iai5hZGRJdGVtKG5ld1Byb2plY3QpXG4gICAgICAgICAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdwcm9qZWN0Q29udGFpbmVyJywgcHJvamVjdENvbnRhaW5lck9iailcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50U3RhdGUobmV3UHJvamVjdClcbiAgICAgICAgICAgICAgICByZW5kZXJMYXlvdXQoKVxuICAgICAgICAgICAgICAgIG9wZW5NZW51KGZhbHNlKVxuICAgICAgICAgICAgICAgIG9wZW5Qcm9qZWN0TGlzdCgpXG4gICAgICAgICAgICB9KSBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFbXB0eSBpbnB1dCcpXG4gICAgICAgIH0gICAgICAgICAgICBcbiAgICB9KVxufSIsImltcG9ydCBoaXN0b3J5T2JqIGZyb20gXCIuLi8uLi9jb21wb25lbnQvRGVmYXVsdCBQcm9qZWN0L2hpc3RvcnlcIlxuaW1wb3J0IGNyZWF0ZVVuZG9Cb3ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9MYXlvdXQvY3JlYXRlVW5kb0JveFwiXG5pbXBvcnQgcHJvamVjdENvbnRhaW5lck9iaiBmcm9tIFwiLi4vLi4vY29tcG9uZW50L3Byb2plY3RDb250YWluZXJcIlxuaW1wb3J0IGV4ZWN1dGVXaXRoQW5pbWF0aW9uIGZyb20gXCIuLi9jb21tb24vZXhlY3V0ZVdpdGhBbmltYXRpb25cIlxuaW1wb3J0IHsgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2xvY2FsU3RvcmFnZVwiXG5pbXBvcnQgcmVuZGVyTGF5b3V0IGZyb20gXCIuLi9yZW5kZXJcIlxuaW1wb3J0IHsgaXNNZW51T3BlbiwgaXNQcm9qZWN0TGlzdE9wZW4sIG9wZW5NZW51LCBvcGVuUHJvamVjdExpc3QgfSBmcm9tIFwiLi9tZW51SGFuZGxlclwiXG5cbmxldCB1bmRvQm94UXVldWUgPSBbXSAvLyBRdWV1ZSB0byBzdG9yZSB1bmRvQm94IGVsZW1lbnRzXG5cbmZ1bmN0aW9uIGFkZFRvUXVldWUoaXRlbSl7XG4gICAgdW5kb0JveFF1ZXVlLnB1c2goaXRlbSlcbn0gXG5cbmZ1bmN0aW9uIHJlbW92ZVVuZG9Cb3godW5kb0JveCkge1xuICAgIGNvbnN0IGluZGV4ID0gdW5kb0JveFF1ZXVlLmluZGV4T2YodW5kb0JveClcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHVuZG9Cb3hRdWV1ZS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIHVuZG9Cb3gucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh1bmRvQm94KSBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrVW5kb0JveFF1ZXVlKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB1bmRvQm94ID0gdW5kb0JveFF1ZXVlLnNoaWZ0KCkgLy8gR2V0IHRoZSBmaXJzdCB1bmRvQm94IGZyb20gdGhlIHF1ZXVlXG4gICAgICAgIGlmICh1bmRvQm94KSB7XG4gICAgICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbih1bmRvQm94LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdW5kb0JveC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHVuZG9Cb3gpIC8vIFJlbW92ZSB0aGUgdW5kb0JveCBmcm9tIHRoZSBET01cbiAgICAgICAgICAgICAgICBjaGVja1VuZG9Cb3hRdWV1ZSgpIC8vIENoZWNrIHRoZSBxdWV1ZSBmb3IgbW9yZSB1bmRvQm94IGVsZW1lbnRzXG4gICAgICAgICAgICB9KVxuICAgICAgICB9ICBcbiAgICB9LCAzMDAwKVxufVxuXG5cbmZ1bmN0aW9uIHVuZG9EZWxldGVIYW5kbGVyKHByb2plY3QsIGl0ZW0sIHVuZG9Cb3gpe1xuICAgIGNvbnN0IHVuZG9CdG4gPSB1bmRvQm94LnF1ZXJ5U2VsZWN0b3IoJy51bmRvX19idG4nKVxuICAgIGNvbnN0IGNsb3NlQnRuID0gdW5kb0JveC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VfX2J0bicpXG5cbiAgICB1bmRvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51T3BlbiA9IGlzTWVudU9wZW4oKVxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdE9wZW4gPSBpc1Byb2plY3RMaXN0T3BlbigpXG4gICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKHVuZG9Cb3gsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3QuYWRkSXRlbShpdGVtKVxuICAgICAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdwcm9qZWN0Q29udGFpbmVyJywgcHJvamVjdENvbnRhaW5lck9iailcbiAgICAgICAgICAgIHJlbW92ZVVuZG9Cb3godW5kb0JveClcbiAgICAgICAgICAgIHJlbmRlckxheW91dCgpXG4gICAgICAgICAgICBpZihtZW51T3Blbikgb3Blbk1lbnUoZmFsc2UpXG4gICAgICAgICAgICBpZihwcm9qZWN0TGlzdE9wZW4pIG9wZW5Qcm9qZWN0TGlzdCgpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbih1bmRvQm94LCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVVbmRvQm94KHVuZG9Cb3gpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdW5kb0NoZWNrYm94SGFuZGxlcihwcm9qZWN0LCBpdGVtLCB1bmRvQm94KXtcbiAgICBjb25zdCB1bmRvQnRuID0gdW5kb0JveC5xdWVyeVNlbGVjdG9yKCcudW5kb19fYnRuJylcbiAgICBjb25zdCBjbG9zZUJ0biA9IHVuZG9Cb3gucXVlcnlTZWxlY3RvcignLmNsb3NlX19idG4nKVxuXG4gICAgdW5kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbWVudU9wZW4gPSBpc01lbnVPcGVuKClcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RPcGVuID0gaXNQcm9qZWN0TGlzdE9wZW4oKVxuICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbih1bmRvQm94LCAoKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNoYW5nZVN0YXR1cygpXG4gICAgICAgICAgICBwcm9qZWN0LmFkZEl0ZW0oaXRlbSlcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaGlzdG9yeU9iai5nZXRBbGxJdGVtKCkuZmluZEluZGV4KG9iaiA9PiBvYmouZ2V0VmFsdWUoKS50aXRsZSA9PT0gaXRlbS5nZXRWYWx1ZSgpLnRpdGxlKVxuICAgICAgICAgICAgaGlzdG9yeU9iai5kZWxldGVJdGVtKGluZGV4KVxuICAgICAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdwcm9qZWN0Q29udGFpbmVyJywgcHJvamVjdENvbnRhaW5lck9iailcbiAgICAgICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgnaGlzdG9yeScsIGhpc3RvcnlPYmopXG4gICAgICAgICAgICByZW1vdmVVbmRvQm94KHVuZG9Cb3gpXG4gICAgICAgICAgICByZW5kZXJMYXlvdXQoKVxuICAgICAgICAgICAgaWYobWVudU9wZW4pIG9wZW5NZW51KGZhbHNlKVxuICAgICAgICAgICAgaWYocHJvamVjdExpc3RPcGVuKSBvcGVuUHJvamVjdExpc3QoKVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24odW5kb0JveCwgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlVW5kb0JveCh1bmRvQm94KVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRvQ2hlY2tib3gocHJvamVjdCxpdGVtKXtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICAgICAgY29uc3QgdW5kb0JveCA9IGNyZWF0ZVVuZG9Cb3goJzEgaXRlbSBtYXJrZWQgZmluaXNoZWQnKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHVuZG9Cb3gpXG4gICAgICAgIHVuZG9DaGVja2JveEhhbmRsZXIocHJvamVjdCwgaXRlbSwgdW5kb0JveCkgXG4gICAgICAgIGFkZFRvUXVldWUodW5kb0JveCkgXG4gICAgICAgIGNoZWNrVW5kb0JveFF1ZXVlKCkgXG4gICAgfSwgNTAwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5kb0RlbGV0ZShwcm9qZWN0LGl0ZW0pe1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgICAgICBjb25zdCB1bmRvQm94ID0gY3JlYXRlVW5kb0JveCgnMSBpdGVtIGRlbGV0ZWQnKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHVuZG9Cb3gpXG4gICAgICAgIHVuZG9EZWxldGVIYW5kbGVyKHByb2plY3QsIGl0ZW0sIHVuZG9Cb3gpIFxuICAgICAgICBhZGRUb1F1ZXVlKHVuZG9Cb3gpIFxuICAgICAgICBjaGVja1VuZG9Cb3hRdWV1ZSgpIFxuICAgIH0sIDUwMClcbn1cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICBjb25zdCBzaWduID0gbnVtYmVyIDwgMCA/IFwiLVwiIDogXCJcIjtcbiAgY29uc3Qgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpLnBhZFN0YXJ0KHRhcmdldExlbmd0aCwgXCIwXCIpO1xuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn1cbiIsImxldCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufVxuIiwiaW1wb3J0IHsgZ2V0RGF5T2ZZZWFyIH0gZnJvbSBcIi4uLy4uL2dldERheU9mWWVhci5tanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0SVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gXCIuLi8uLi9nZXRXZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBhZGRMZWFkaW5nWmVyb3MgfSBmcm9tIFwiLi4vYWRkTGVhZGluZ1plcm9zLm1qc1wiO1xuaW1wb3J0IHsgbGlnaHRGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vbGlnaHRGb3JtYXR0ZXJzLm1qc1wiO1xuXG5jb25zdCBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogXCJhbVwiLFxuICBwbTogXCJwbVwiLFxuICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICBub29uOiBcIm5vb25cIixcbiAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gIG5pZ2h0OiBcIm5pZ2h0XCIsXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxuZXhwb3J0IGNvbnN0IGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZXJhID0gZGF0ZS5nZXRGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSBcIkdcIjpcbiAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgY2FzZSBcIkdHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJhYmJyZXZpYXRlZFwiIH0pO1xuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcIm5hcnJvd1wiIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcbiAgICAgIGNhc2UgXCJHR0dHXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJ3aWRlXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcInlvXCIpIHtcbiAgICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHNpZ25lZFdlZWtZZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09IFwiWVlcIikge1xuICAgICAgY29uc3QgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfVxuXG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwiWW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgaXNvV2Vla1llYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlKTtcblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcIlFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwiUVFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcIlFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcIlFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJRUVFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJRUVFRXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwicVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwicW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwicXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcInFxcXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcInFxcXFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIk1vXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJNTU1NTVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIkxvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJMTExMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHdlZWsgPSBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIndvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGlzb1dlZWsgPSBnZXRJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIklvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJkb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldERhdGUoKSwgeyB1bml0OiBcImRhdGVcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiRG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7IHVuaXQ6IFwiZGF5T2ZZZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcIkVFXCI6XG4gICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcIkVFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgXCJlXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImVlXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiZW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiZWVlZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiZWVlZVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJjY1wiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiY29cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiY2NjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlIFwiaVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSBcImlpXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlIFwiaW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiaWlpaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiaWlpaVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImJcIjpcbiAgICAgIGNhc2UgXCJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYmJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiYlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJCXCI6XG4gICAgICBjYXNlIFwiQkJcIjpcbiAgICAgIGNhc2UgXCJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCQlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiaG9cIikge1xuICAgICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiSG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRIb3VycygpLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiS29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJrb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIm1vXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0TWludXRlcygpLCB7IHVuaXQ6IFwibWludXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJzb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFNlY29uZHMoKSwgeyB1bml0OiBcInNlY29uZFwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiWlwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwiWFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG4gICAgICBjYXNlIFwiWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlIFwiWFhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlIFwieHh4eFwiOlxuICAgICAgY2FzZSBcInh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlIFwieHh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwiT1wiOlxuICAgICAgY2FzZSBcIk9PXCI6XG4gICAgICBjYXNlIFwiT09PXCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcIk9PT09cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwielwiOlxuICAgICAgY2FzZSBcInp6XCI6XG4gICAgICBjYXNlIFwienp6XCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcInp6enpcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLnRydW5jKGRhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApO1xuICBjb25zdCBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyID0gXCJcIikge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIGNvbnN0IGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgY29uc3QgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuIiwiaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5tanNcIjtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGxpZ2h0Rm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5cbiAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09IFwieXlcIiA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1vbnRoXG4gIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09IFwiTVwiID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0RGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEFNIG9yIFBNXG4gIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldEhvdXJzKCkgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSBcImFtXCIgPyBcImEubS5cIiA6IFwicC5tLlwiO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEhvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEhvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWludXRlXG4gIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0TWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFNlY29uZFxuICBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFNlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUyhkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgY29uc3QgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLnRydW5jKFxuICAgICAgbWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMyksXG4gICAgKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcbiIsImNvbnN0IGRhdGVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgdGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwicFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcInBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcInBwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwicHBwcFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBjb25zdCBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICBjb25zdCBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICBjb25zdCB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICBsZXQgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0XG4gICAgLnJlcGxhY2UoXCJ7e2RhdGV9fVwiLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpXG4gICAgLnJlcGxhY2UoXCJ7e3RpbWV9fVwiLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyLFxufTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgdXRjRGF0ZSA9IG5ldyBEYXRlKFxuICAgIERhdGUuVVRDKFxuICAgICAgX2RhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIF9kYXRlLmdldE1vbnRoKCksXG4gICAgICBfZGF0ZS5nZXREYXRlKCksXG4gICAgICBfZGF0ZS5nZXRIb3VycygpLFxuICAgICAgX2RhdGUuZ2V0TWludXRlcygpLFxuICAgICAgX2RhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgX2RhdGUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICAgKSxcbiAgKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihfZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuICtkYXRlIC0gK3V0Y0RhdGU7XG59XG4iLCJjb25zdCBkYXlPZlllYXJUb2tlblJFID0gL15EKyQvO1xuY29uc3Qgd2Vla1llYXJUb2tlblJFID0gL15ZKyQvO1xuXG5jb25zdCB0aHJvd1Rva2VucyA9IFtcIkRcIiwgXCJERFwiLCBcIllZXCIsIFwiWVlZWVwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIGRheU9mWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHdlZWtZZWFyVG9rZW5SRS50ZXN0KHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgY29uc3QgX21lc3NhZ2UgPSBtZXNzYWdlKHRva2VuLCBmb3JtYXQsIGlucHV0KTtcbiAgY29uc29sZS53YXJuKF9tZXNzYWdlKTtcbiAgaWYgKHRocm93VG9rZW5zLmluY2x1ZGVzKHRva2VuKSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoX21lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBtZXNzYWdlKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IHN1YmplY3QgPSB0b2tlblswXSA9PT0gXCJZXCIgPyBcInllYXJzXCIgOiBcImRheXMgb2YgdGhlIG1vbnRoXCI7XG4gIHJldHVybiBgVXNlIFxcYCR7dG9rZW4udG9Mb3dlckNhc2UoKX1cXGAgaW5zdGVhZCBvZiBcXGAke3Rva2VufVxcYCAoaW4gXFxgJHtmb3JtYXR9XFxgKSBmb3IgZm9ybWF0dGluZyAke3N1YmplY3R9IHRvIHRoZSBpbnB1dCBcXGAke2lucHV0fVxcYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kYDtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBjb25zdGFudHNcbiAqIEBzdW1tYXJ5IFVzZWZ1bCBjb25zdGFudHNcbiAqIEBkZXNjcmlwdGlvblxuICogQ29sbGVjdGlvbiBvZiB1c2VmdWwgZGF0ZSBjb25zdGFudHMuXG4gKlxuICogVGhlIGNvbnN0YW50cyBjb3VsZCBiZSBpbXBvcnRlZCBmcm9tIGBkYXRlLWZucy9jb25zdGFudHNgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBtYXhUaW1lLCBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGZ1bmN0aW9uIGlzQWxsb3dlZFRpbWUodGltZSkge1xuICogICByZXR1cm4gdGltZSA8PSBtYXhUaW1lICYmIHRpbWUgPj0gbWluVGltZTtcbiAqIH1cbiAqIGBgYFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luWWVhclxuICogQHN1bW1hcnkgRGF5cyBpbiAxIHllYXIuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb3cgbWFueSBkYXlzIGluIGEgeWVhci5cbiAqXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAc3VtbWFyeSBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gLTg2NDAwMDAwMDAwMDAwMDEgPj0gbWluVGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMSlcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbldlZWsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJblllYXIgPSA1MjU2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luTW9udGggPSA0MzIwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkRheSA9IDE0NDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuZXhwb3J0IGNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7XG4iLCIvKipcbiAqIEBuYW1lIGNvbnN0cnVjdEZyb21cbiAqIEBjYXRlZ29yeSBHZW5lcmljIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnN0cnVjdHMgYSBkYXRlIHVzaW5nIHRoZSByZWZlcmVuY2UgZGF0ZSBhbmQgdGhlIHZhbHVlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgZnVuY3Rpb24gY29uc3RydWN0cyBhIG5ldyBkYXRlIHVzaW5nIHRoZSBjb25zdHJ1Y3RvciBmcm9tIHRoZSByZWZlcmVuY2VcbiAqIGRhdGUgYW5kIHRoZSBnaXZlbiB2YWx1ZS4gSXQgaGVscHMgdG8gYnVpbGQgZ2VuZXJpYyBmdW5jdGlvbnMgdGhhdCBhY2NlcHRcbiAqIGRhdGUgZXh0ZW5zaW9ucy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSByZWZlcmVuY2UgZGF0ZSB0byB0YWtlIGNvbnN0cnVjdG9yIGZyb21cbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjcmVhdGUgdGhlIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBEYXRlIGluaXRpYWxpemVkIHVzaW5nIHRoZSBnaXZlbiBkYXRlIGFuZCB2YWx1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSAnZGF0ZS1mbnMnXG4gKlxuICogLy8gQSBmdW5jdGlvbiB0aGF0IGNsb25lcyBhIGRhdGUgcHJlc2VydmluZyB0aGUgb3JpZ2luYWwgdHlwZVxuICogZnVuY3Rpb24gY2xvbmVEYXRlPERhdGVUeXBlIGV4dGVuZHMgRGF0ZShkYXRlOiBEYXRlVHlwZSk6IERhdGVUeXBlIHtcbiAqICAgcmV0dXJuIGNvbnN0cnVjdEZyb20oXG4gKiAgICAgZGF0ZSwgLy8gVXNlIGNvbnRydXN0b3IgZnJvbSB0aGUgZ2l2ZW4gZGF0ZVxuICogICAgIGRhdGUuZ2V0VGltZSgpIC8vIFVzZSB0aGUgZGF0ZSB2YWx1ZSB0byBjcmVhdGUgYSBuZXcgZGF0ZVxuICogICApXG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RGcm9tKGRhdGUsIHZhbHVlKSB7XG4gIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBuZXcgZGF0ZS5jb25zdHJ1Y3Rvcih2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbnN0cnVjdEZyb207XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkRheSB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgY29uc3QgdGltZXN0YW1wTGVmdCA9XG4gICAgK3N0YXJ0T2ZEYXlMZWZ0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIGNvbnN0IHRpbWVzdGFtcFJpZ2h0ID1cbiAgICArc3RhcnRPZkRheVJpZ2h0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5EYXkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcbiIsImltcG9ydCB7IGRlZmF1bHRMb2NhbGUgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRMb2NhbGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXR0ZXJzIH0gZnJvbSBcIi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy5tanNcIjtcbmltcG9ydCB7IGxvbmdGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQge1xuICBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLFxuICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sXG4gIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IsXG59IGZyb20gXCIuL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qc1wiO1xuaW1wb3J0IHsgaXNWYWxpZCB9IGZyb20gXCIuL2lzVmFsaWQubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8vIFJleHBvcnRzIG9mIGludGVybmFsIGZvciBsaWJyYXJpZXMgdG8gdXNlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM2MzgjaXNzdWVjb21tZW50LTE4NzcwODI4NzRcbmV4cG9ydCB7IGZvcm1hdHRlcnMsIGxvbmdGb3JtYXR0ZXJzIH07XG5cbi8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuY29uc3QgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9XG4gIC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuY29uc3QgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuY29uc3QgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xuY29uc3QgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbmNvbnN0IHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuZXhwb3J0IHsgZm9ybWF0IGFzIGZvcm1hdERhdGUgfTtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGZvcm1hdH0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGFsaWFzIGZvcm1hdERhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcilcbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXIpKS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIGZvcm1hdCAtIFRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKlxuICogQHRocm93cyBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KGRhdGUsIGZvcm1hdFN0ciwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGxvY2FsZSA9IG9wdGlvbnM/LmxvY2FsZSA/PyBkZWZhdWx0T3B0aW9ucy5sb2NhbGUgPz8gZGVmYXVsdExvY2FsZTtcblxuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3Qgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIHRpbWUgdmFsdWVcIik7XG4gIH1cblxuICBsZXQgcGFydHMgPSBmb3JtYXRTdHJcbiAgICAubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApXG4gICAgLm1hcCgoc3Vic3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCJwXCIgfHwgZmlyc3RDaGFyYWN0ZXIgPT09IFwiUFwiKSB7XG4gICAgICAgIGNvbnN0IGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1YnN0cmluZztcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpXG4gICAgLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApXG4gICAgLm1hcCgoc3Vic3RyaW5nKSA9PiB7XG4gICAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgaXNUb2tlbjogZmFsc2UsIHZhbHVlOiBcIidcIiB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgaXNUb2tlbjogZmFsc2UsIHZhbHVlOiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKSB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl0pIHtcbiAgICAgICAgcmV0dXJuIHsgaXNUb2tlbjogdHJ1ZSwgdmFsdWU6IHN1YnN0cmluZyB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgIFwiRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGBcIiArXG4gICAgICAgICAgICBmaXJzdENoYXJhY3RlciArXG4gICAgICAgICAgICBcImBcIixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgaXNUb2tlbjogZmFsc2UsIHZhbHVlOiBzdWJzdHJpbmcgfTtcbiAgICB9KTtcblxuICAvLyBpbnZva2UgbG9jYWxpemUgcHJlcHJvY2Vzc29yIChvbmx5IGZvciBmcmVuY2ggbG9jYWxlcyBhdCB0aGUgbW9tZW50KVxuICBpZiAobG9jYWxlLmxvY2FsaXplLnByZXByb2Nlc3Nvcikge1xuICAgIHBhcnRzID0gbG9jYWxlLmxvY2FsaXplLnByZXByb2Nlc3NvcihvcmlnaW5hbERhdGUsIHBhcnRzKTtcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGUsXG4gIH07XG5cbiAgcmV0dXJuIHBhcnRzXG4gICAgLm1hcCgocGFydCkgPT4ge1xuICAgICAgaWYgKCFwYXJ0LmlzVG9rZW4pIHJldHVybiBwYXJ0LnZhbHVlO1xuXG4gICAgICBjb25zdCB0b2tlbiA9IHBhcnQudmFsdWU7XG5cbiAgICAgIGlmIChcbiAgICAgICAgKCFvcHRpb25zPy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiZcbiAgICAgICAgICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pKSB8fFxuICAgICAgICAoIW9wdGlvbnM/LnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMgJiZcbiAgICAgICAgICBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSlcbiAgICAgICkge1xuICAgICAgICB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXRTdHIsIFN0cmluZyhkYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbdG9rZW5bMF1dO1xuICAgICAgcmV0dXJuIGZvcm1hdHRlcihvcmlnaW5hbERhdGUsIHRva2VuLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH0pXG4gICAgLmpvaW4oXCJcIik7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICBjb25zdCBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG5cbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdDtcbiIsImltcG9ydCB7IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZlllYXIubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0RGF5T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBkYXkgb2YgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIHllYXIgaXMgMiBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXlPZlllYXIobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IDE4M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoX2RhdGUsIHN0YXJ0T2ZZZWFyKF9kYXRlKSk7XG4gIGNvbnN0IGRheU9mWWVhciA9IGRpZmYgKyAxO1xuICByZXR1cm4gZGF5T2ZZZWFyO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldERheU9mWWVhcjtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luV2VlayB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2Vla1llYXIgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gNTNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWsoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9ICtzdGFydE9mSVNPV2VlayhfZGF0ZSkgLSArc3RhcnRPZklTT1dlZWtZZWFyKF9kYXRlKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIHdlZWtzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuXG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luV2VlayB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2Vla1llYXIgfSBmcm9tIFwiLi9zdGFydE9mV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUgd2l0aCBkZWZhdWx0IG9wdGlvbnM/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUsXG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayxcbiAqIC8vIGFuZCB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhciBhbHdheXMgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gNTNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gK3N0YXJ0T2ZXZWVrKF9kYXRlLCBvcHRpb25zKSAtICtzdGFydE9mV2Vla1llYXIoX2RhdGUsIG9wdGlvbnMpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIG1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIFRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCB3aXRoIHRoZSBkZWZhdWx0IHNldHRpbmdzP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSlcbiAqIC8vPT4gMjAwNVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgd2VlayBzdGFydHMgb24gU2F0dXJkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IHdlZWtTdGFydHNPbjogNiB9KVxuICogLy89PiAyMDA0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB0aGUgZmlyc3Qgd2VlayBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNCB9KVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWtZZWFyO1xuIiwiLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0RhdGU7XG4iLCJpbXBvcnQgeyBpc0RhdGUgfSBmcm9tIFwiLi9pc0RhdGUubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGUpXG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdmFsaWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoZGF0ZSkge1xuICBpZiAoIWlzRGF0ZShkYXRlKSAmJiB0eXBlb2YgZGF0ZSAhPT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoX2RhdGUpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1ZhbGlkO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIChvcHRpb25zID0ge30pID0+IHtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICBjb25zdCBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogVGhlIGxvY2FsaXplIGZ1bmN0aW9uIGFyZ3VtZW50IGNhbGxiYWNrIHdoaWNoIGFsbG93cyB0byBjb252ZXJ0IHJhdyB2YWx1ZSB0b1xuICogdGhlIGFjdHVhbCB0eXBlLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIGNvbnZlcnRlZCB2YWx1ZVxuICovXG5cbi8qKlxuICogVGhlIG1hcCBvZiBsb2NhbGl6ZWQgdmFsdWVzIGZvciBlYWNoIHdpZHRoLlxuICovXG5cbi8qKlxuICogVGhlIGluZGV4IHR5cGUgb2YgdGhlIGxvY2FsZSB1bml0IHZhbHVlLiBJdCB0eXBlcyBjb252ZXJzaW9uIG9mIHVuaXRzIG9mXG4gKiB2YWx1ZXMgdGhhdCBkb24ndCBzdGFydCBhdCAwIChpLmUuIHF1YXJ0ZXJzKS5cbiAqL1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSB1bml0IHZhbHVlIHRvIHRoZSB0dXBsZSBvZiB2YWx1ZXMuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGVyYSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgQkMsXG4gKiB0aGUgc2Vjb25kIGVsZW1lbnQgcmVwcmVzZW50cyBBRC5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgcXVhcnRlciB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgUTEuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGRheSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgU3VuZGF5LlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBtb250aCB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgSmFudWFyeS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBvcHRpb25zPy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiBcInN0YW5kYWxvbmVcIjtcblxuICAgIGxldCB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gXCJmb3JtYXR0aW5nXCIgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9XG4gICAgICAgIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aDtcblxuICAgIGNvbnN0IG1hdGNoUGF0dGVybiA9XG4gICAgICAod2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSkgfHxcbiAgICAgIGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUGF0dGVybnMgPVxuICAgICAgKHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG5cbiAgICBjb25zdCBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpXG4gICAgICA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKVxuICAgICAgOiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIGZpbmRLZXkocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSk7XG5cbiAgICBsZXQgdmFsdWU7XG5cbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrXG4gICAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKVxuICAgICAgOiB2YWx1ZTtcblxuICAgIGNvbnN0IHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIHJlc3QgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmXG4gICAgICBwcmVkaWNhdGUob2JqZWN0W2tleV0pXG4gICAgKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKGxldCBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrXG4gICAgICA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSlcbiAgICAgIDogcGFyc2VSZXN1bHRbMF07XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG4iLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXRMb25nIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRMb25nLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0UmVsYXRpdmUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qc1wiO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2xvY2FsaXplLm1qc1wiO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi9lbi1VUy9fbGliL21hdGNoLm1qc1wiO1xuXG4vKipcbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBdKGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwKVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXShodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzKVxuICovXG5leHBvcnQgY29uc3QgZW5VUyA9IHtcbiAgY29kZTogXCJlbi1VU1wiLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMSxcbiAgfSxcbn07XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZW5VUztcbiIsImNvbnN0IGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIHNlY29uZFwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiBcIjEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICBoYWxmQU1pbnV0ZTogXCJoYWxmIGEgbWludXRlXCIsXG5cbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICB4TWludXRlczoge1xuICAgIG9uZTogXCIxIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBob3VyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeEhvdXJzOiB7XG4gICAgb25lOiBcIjEgaG91clwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhEYXlzOiB7XG4gICAgb25lOiBcIjEgZGF5XCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGRheXNcIixcbiAgfSxcblxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogXCJhYm91dCAxIHdlZWtcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICB4V2Vla3M6IHtcbiAgICBvbmU6IFwiMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiBcImFib3V0IDEgbW9udGhcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgeE1vbnRoczoge1xuICAgIG9uZTogXCIxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgeWVhclwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIHhZZWFyczoge1xuICAgIG9uZTogXCIxIHllYXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiBcIm92ZXIgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwib3ZlciB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWxtb3N0IDEgeWVhclwiLFxuICAgIG90aGVyOiBcImFsbW9zdCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREaXN0YW5jZSA9ICh0b2tlbiwgY291bnQsIG9wdGlvbnMpID0+IHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKFwie3tjb3VudH19XCIsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnM/LmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIFwiaW4gXCIgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyBcIiBhZ29cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IGJ1aWxkRm9ybWF0TG9uZ0ZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4ubWpzXCI7XG5cbmNvbnN0IGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiBcIkVFRUUsIE1NTU0gZG8sIHlcIixcbiAgbG9uZzogXCJNTU1NIGRvLCB5XCIsXG4gIG1lZGl1bTogXCJNTU0gZCwgeVwiLFxuICBzaG9ydDogXCJNTS9kZC95eXl5XCIsXG59O1xuXG5jb25zdCB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJoOm1tOnNzIGEgenp6elwiLFxuICBsb25nOiBcImg6bW06c3MgYSB6XCIsXG4gIG1lZGl1bTogXCJoOm1tOnNzIGFcIixcbiAgc2hvcnQ6IFwiaDptbSBhXCIsXG59O1xuXG5jb25zdCBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiBcInt7ZGF0ZX19LCB7e3RpbWV9fVwiLFxuICBzaG9ydDogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG5cbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxufTtcbiIsImNvbnN0IGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogXCJQXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0UmVsYXRpdmUgPSAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSA9PlxuICBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG4iLCJpbXBvcnQgeyBidWlsZExvY2FsaXplRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4ubWpzXCI7XG5cbmNvbnN0IGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJCXCIsIFwiQVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIkJDXCIsIFwiQURcIl0sXG4gIHdpZGU6IFtcIkJlZm9yZSBDaHJpc3RcIiwgXCJBbm5vIERvbWluaVwiXSxcbn07XG5cbmNvbnN0IHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlExXCIsIFwiUTJcIiwgXCJRM1wiLCBcIlE0XCJdLFxuICB3aWRlOiBbXCIxc3QgcXVhcnRlclwiLCBcIjJuZCBxdWFydGVyXCIsIFwiM3JkIHF1YXJ0ZXJcIiwgXCI0dGggcXVhcnRlclwiXSxcbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbmNvbnN0IG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkpcIiwgXCJGXCIsIFwiTVwiLCBcIkFcIiwgXCJNXCIsIFwiSlwiLCBcIkpcIiwgXCJBXCIsIFwiU1wiLCBcIk9cIiwgXCJOXCIsIFwiRFwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcbiAgICBcIkphblwiLFxuICAgIFwiRmViXCIsXG4gICAgXCJNYXJcIixcbiAgICBcIkFwclwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5cIixcbiAgICBcIkp1bFwiLFxuICAgIFwiQXVnXCIsXG4gICAgXCJTZXBcIixcbiAgICBcIk9jdFwiLFxuICAgIFwiTm92XCIsXG4gICAgXCJEZWNcIixcbiAgXSxcblxuICB3aWRlOiBbXG4gICAgXCJKYW51YXJ5XCIsXG4gICAgXCJGZWJydWFyeVwiLFxuICAgIFwiTWFyY2hcIixcbiAgICBcIkFwcmlsXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1bmVcIixcbiAgICBcIkp1bHlcIixcbiAgICBcIkF1Z3VzdFwiLFxuICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgXCJPY3RvYmVyXCIsXG4gICAgXCJOb3ZlbWJlclwiLFxuICAgIFwiRGVjZW1iZXJcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJTXCIsIFwiTVwiLCBcIlRcIiwgXCJXXCIsIFwiVFwiLCBcIkZcIiwgXCJTXCJdLFxuICBzaG9ydDogW1wiU3VcIiwgXCJNb1wiLCBcIlR1XCIsIFwiV2VcIiwgXCJUaFwiLCBcIkZyXCIsIFwiU2FcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG4gIHdpZGU6IFtcbiAgICBcIlN1bmRheVwiLFxuICAgIFwiTW9uZGF5XCIsXG4gICAgXCJUdWVzZGF5XCIsXG4gICAgXCJXZWRuZXNkYXlcIixcbiAgICBcIlRodXJzZGF5XCIsXG4gICAgXCJGcmlkYXlcIixcbiAgICBcIlNhdHVyZGF5XCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiBcImFcIixcbiAgICBwbTogXCJwXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlcIixcbiAgICBub29uOiBcIm5cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogXCJBTVwiLFxuICAgIHBtOiBcIlBNXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiBcImEubS5cIixcbiAgICBwbTogXCJwLm0uXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbn07XG5cbmNvbnN0IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiBcImFcIixcbiAgICBwbTogXCJwXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlcIixcbiAgICBub29uOiBcIm5cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogXCJBTVwiLFxuICAgIHBtOiBcIlBNXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiBcImEubS5cIixcbiAgICBwbTogXCJwLm0uXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbn07XG5cbmNvbnN0IG9yZGluYWxOdW1iZXIgPSAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICBjb25zdCByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwic3RcIjtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwibmRcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwicmRcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArIFwidGhcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcixcblxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBhcmd1bWVudENhbGxiYWNrOiAocXVhcnRlcikgPT4gcXVhcnRlciAtIDEsXG4gIH0pLFxuXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IGJ1aWxkTWF0Y2hGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi5tanNcIjtcbmltcG9ydCB7IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuLm1qc1wiO1xuXG5jb25zdCBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xuY29uc3QgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG5cbmNvbnN0IG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaSxcbn07XG5jb25zdCBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2ksXG59O1xuY29uc3QgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldLFxufTtcblxuY29uc3QgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2ksXG59O1xuY29uc3QgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFtcbiAgICAvXmovaSxcbiAgICAvXmYvaSxcbiAgICAvXm0vaSxcbiAgICAvXmEvaSxcbiAgICAvXm0vaSxcbiAgICAvXmovaSxcbiAgICAvXmovaSxcbiAgICAvXmEvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcblxuICBhbnk6IFtcbiAgICAvXmphL2ksXG4gICAgL15mL2ksXG4gICAgL15tYXIvaSxcbiAgICAvXmFwL2ksXG4gICAgL15tYXkvaSxcbiAgICAvXmp1bi9pLFxuICAgIC9eanVsL2ksXG4gICAgL15hdS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaSxcbn07XG5jb25zdCBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV0sXG59O1xuXG5jb25zdCBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbn07XG5jb25zdCBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2ksXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogKHZhbHVlKSA9PiBwYXJzZUludCh2YWx1ZSwgMTApLFxuICB9KSxcblxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gICAgdmFsdWVDYWxsYmFjazogKGluZGV4KSA9PiBpbmRleCArIDEsXG4gIH0pLFxuXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwiYW55XCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZEYXk7XG4iLCJpbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mSVNPV2VlayhkYXRlKSB7XG4gIHJldHVybiBzdGFydE9mV2VlayhkYXRlLCB7IHdlZWtTdGFydHNPbjogMSB9KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mSVNPV2VlaztcbiIsImltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0SVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDU6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWtZZWFyKGRhdGUpIHtcbiAgY29uc3QgeWVhciA9IGdldElTT1dlZWtZZWFyKGRhdGUpO1xuICBjb25zdCBmb3VydGhPZkphbnVhcnkgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWtZZWFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGF5ID0gX2RhdGUuZ2V0RGF5KCk7XG4gIGNvbnN0IGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuXG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IGdldFdlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1IHdpdGggZGVmYXVsdCBzZXR0aW5nczpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gU3VuIERlYyAyNiAyMDA0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1XG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB3ZWVrXG4gKiAvLyBhbmQgNCBKYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhcjpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gTW9uIEphbiAwMyAyMDA1IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgeWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICBjb25zdCBmaXJzdFdlZWsgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWsuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBfZGF0ZSA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2Vla1llYXI7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mWWVhclxuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB5ZWFyIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZlllYXIobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwMCkpXG4gKiAvLz0+IFdlZCBKYW4gMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZlllYXIoZGF0ZSkge1xuICBjb25zdCBjbGVhbkRhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IF9kYXRlID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgX2RhdGUuc2V0RnVsbFllYXIoY2xlYW5EYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZZZWFyO1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnXG5pbXBvcnQgJy4vc3R5bGUvaGVhZGVyLmNzcydcbmltcG9ydCAnLi9zdHlsZS9uYXYuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlL21lbnUuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlL2NvbnRlbnQuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlL2l0ZW0uY3NzJ1xuaW1wb3J0ICcuL3N0eWxlL2RldGFpbC5jc3MnXG5pbXBvcnQgJy4vc3R5bGUvZGlhbG9nLmNzcydcbmltcG9ydCByZW5kZXJMYXlvdXQgZnJvbSAnLi91dGlscy9yZW5kZXInXG5cbmZ1bmN0aW9uIFNjcmVlbkNvbnRyb2xsZXIoKXtcbiAgICByZW5kZXJMYXlvdXQoKVxufVxuXG5TY3JlZW5Db250cm9sbGVyKClcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=