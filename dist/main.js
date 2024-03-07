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
    max-width: 20%;
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
    justify-content: start;
    overflow: hidden;
    width: 100%;
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
`, "",{"version":3,"sources":["webpack://./src/style/detail.css"],"names":[],"mappings":"AAAA;IACI,qCAAqC;IACrC,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,cAAc;IACd,8CAA8C;IAC9C,wCAAwC;AAC5C;AACA;IACI,kCAAkC;AACtC;;AAEA;IACI;AACJ;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,SAAS;IACT,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;IACnC,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf;AACJ","sourcesContent":[".detail{\n    background: var(--background-color-2);\n    padding: 1rem 2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    min-width: 15%;\n    max-width: 20%;\n    border-left: 1px solid var(--tab-border-color);\n    /* animation: slideInRight linear .3s; */\n}\n.detail[opening]{\n    animation: slideInRight linear .3s;\n}\n\n.detail[open]{\n    animation: none\n}\n\n.detail[closing]{\n    animation: slideOutRight linear .3s;\n}\n\n.detail h1{\n    margin: 2rem 0;\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    overflow: hidden;\n    width: 100%;\n}\n\n.detail p{\n    margin: 0 0 1rem 0;\n    width: 100%;\n}\n\n.detail div{\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n    gap: 1rem;\n    width: 100%;\n    margin-bottom: 2rem;\n}\n\n.detail button.delete__btn{\n    background: var(--delete-btn-color);\n    color: var(--text-color-light);\n}\n\n.detail button.close__btn{\n    position: absolute;\n    top: .1rem;\n    left: .1rem;\n    border:none;\n    background: inherit;\n    font-size: 1.2rem;\n    opacity: 0.5;\n}\n\n.detail button.close__btn:hover{\n    cursor: pointer;\n    color: var(--hover-text-color)\n}\n"],"sourceRoot":""}]);
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
    min-width: 70%;
    max-width: 100%;
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
    width: 3rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right:1px solid var(--nav-border-color);
    flex-grow: 0;
}

.to-do .title{
    display: flex;
    min-width: 50%;
    justify-content: start;
    align-items: center;
    padding: 0 1rem;
    border-right: 1px solid var(--nav-border-color);
    flex-grow: 20;
}

.to-do .title span,
.note .title span{
    max-width: 70%;
    height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
}

.note .title{
    display: flex;
    min-width: 50%;
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

.to-do .buttons,
.note .buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    gap: 1rem;
    min-width: 30%;
    max-width: 40%;
}


.to-do .buttons button,
.note .buttons button
    {
    border: none;
    background: inherit;
    height: 100%;
    font-size: 1.4rem;
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
}`, "",{"version":3,"sources":["webpack://./src/style/item.css"],"names":[],"mappings":"AAAA,SAAS;;AAET;;IAEI,aAAa;IACb,cAAc;IACd,eAAe;IACf,cAAc;IACd,yCAAyC;IACzC,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;;IAEI,6BAA6B;AACjC;;AAEA;;IAEI,4CAA4C;AAChD;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8CAA8C;IAC9C,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,+CAA+C;IAC/C,aAAa;AACjB;;AAEA;;IAEI,cAAc;IACd,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,cAAc;IACd,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,+CAA+C;IAC/C,YAAY;AAChB;;AAEA;;;IAGI,cAAc;AAClB;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,SAAS;IACT,cAAc;IACd,cAAc;AAClB;;;AAGA;;;IAGI,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;;IAEI,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,2CAA2C;AAC/C;AACA;IACI,8CAA8C;AAClD;AACA;IACI,4CAA4C;AAChD;;AAEA,aAAa;AACb;IACI,gBAAgB;IAChB,sBAAsB;IACtB,QAAQ;IACR,YAAY;IACZ,gCAAgC;IAChC,2CAA2C;IAC3C,aAAa;IACb,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,mBAAmB;IACnB,sCAAsC;IACtC,mDAAmD;AACvD;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["/* TODOS*/\n\n.to-do,\n.note{\n    display: flex;\n    min-width: 70%;\n    max-width: 100%;\n    height: 2.5rem;\n    border: 1px solid var(--nav-border-color);\n    border-radius: 10px;\n    animation:fadeIn linear .3s;\n}\n\n.to-do[closing],\n.note[closing]{    \n    animation: fadeOut linear .3s;    \n}\n\n.to-do:hover,\n.note:hover{\n    box-shadow: var(--shadow-color) 5px 5px 10px;\n}\n\n.to-do .checkbox{\n    width: 3rem;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-right:1px solid var(--nav-border-color);\n    flex-grow: 0;\n}\n\n.to-do .title{\n    display: flex;\n    min-width: 50%;\n    justify-content: start;\n    align-items: center;\n    padding: 0 1rem;\n    border-right: 1px solid var(--nav-border-color);\n    flex-grow: 20;\n}\n\n.to-do .title span,\n.note .title span{\n    max-width: 70%;\n    height: 1rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.note .title{\n    display: flex;\n    min-width: 50%;\n    justify-content: start;\n    align-items: center;\n    padding: 0 1rem;\n    border-right: 1px solid var(--nav-border-color);\n    flex-grow: 5;\n}\n\n.to-do .checkbox input:hover,\n.to-do .title:hover,\n.note .title:hover{\n    cursor:pointer;\n}\n\n.to-do .buttons,\n.note .buttons{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.4rem;\n    gap: 1rem;\n    min-width: 30%;\n    max-width: 40%;\n}\n\n\n.to-do .buttons button,\n.note .buttons button\n    {\n    border: none;\n    background: inherit;\n    height: 100%;\n    font-size: 1.4rem;\n}\n\n.to-do .buttons button:hover,\n.note .buttons button:hover{\n    cursor: pointer;\n    color: var(--hover-text-color);\n}\n\n.to-do .priority__btn.priority__low:hover{\n    color: var(--priority-low-color) !important;\n}\n.to-do .priority__btn.priority__medium:hover{\n    color: var(--priority-medium-color) !important;\n}\n.to-do .priority__btn.priority__high:hover{\n    color: var(--priority-high-color) !important;\n}\n\n/* CHECKBOX */\ninput[type='checkbox']{\n    appearance: none;\n    background-color: #fff;\n    margin:0;\n    font:inherit;\n    color: var(--priority-low-color);\n    border: 1px solid var(--header-hover-color);\n    width: 1.2rem;\n    height:1.2rem;\n    border-radius: 5px;\n    display: grid;\n    place-content: center;\n}\n\ninput[type='checkbox']:hover{\n    border:2px solid var(--header-hover-color)\n}\n\ninput[type='checkbox']::before{\n    content: '';\n    width: 0.6rem;\n    height: 0.6rem;\n    border-radius: 3px;\n    transform: scale(0);\n    transition: .12s transform ease-in-out;\n    box-shadow: inset 1em 1em var(--priority-low-color);\n}\n\ninput[type='checkbox']:checked::before{\n    transform:scale(1);\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDJGQUEyRixNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsUUFBUSxPQUFPLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksdURBQXVELG9CQUFvQixxQkFBcUIsc0JBQXNCLHFCQUFxQixnREFBZ0QsMEJBQTBCLGtDQUFrQyxHQUFHLHlDQUF5Qyx3Q0FBd0MsR0FBRywrQkFBK0IsbURBQW1ELEdBQUcscUJBQXFCLGtCQUFrQixtQkFBbUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIscURBQXFELG1CQUFtQixHQUFHLGtCQUFrQixvQkFBb0IscUJBQXFCLDZCQUE2QiwwQkFBMEIsc0JBQXNCLHNEQUFzRCxvQkFBb0IsR0FBRywyQ0FBMkMscUJBQXFCLG1CQUFtQix1QkFBdUIsOEJBQThCLEdBQUcsaUJBQWlCLG9CQUFvQixxQkFBcUIsNkJBQTZCLDBCQUEwQixzQkFBc0Isc0RBQXNELG1CQUFtQixHQUFHLDRFQUE0RSxxQkFBcUIsR0FBRyxxQ0FBcUMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsd0JBQXdCLGdCQUFnQixxQkFBcUIscUJBQXFCLEdBQUcsMkRBQTJELG1CQUFtQiwwQkFBMEIsbUJBQW1CLHdCQUF3QixHQUFHLCtEQUErRCxzQkFBc0IscUNBQXFDLEdBQUcsOENBQThDLGtEQUFrRCxHQUFHLCtDQUErQyxxREFBcUQsR0FBRyw2Q0FBNkMsbURBQW1ELEdBQUcsMkNBQTJDLHVCQUF1Qiw2QkFBNkIsZUFBZSxtQkFBbUIsdUNBQXVDLGtEQUFrRCxvQkFBb0Isb0JBQW9CLHlCQUF5QixvQkFBb0IsNEJBQTRCLEdBQUcsaUNBQWlDLG1EQUFtRCxtQ0FBbUMsa0JBQWtCLG9CQUFvQixxQkFBcUIseUJBQXlCLDBCQUEwQiw2Q0FBNkMsMERBQTBELEdBQUcsMkNBQTJDLHlCQUF5QixHQUFHLG1CQUFtQjtBQUMvMkg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlJdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFGQUFxRixVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGdDQUFnQyxxQkFBcUIsNENBQTRDLHNEQUFzRCxvQkFBb0IsNkJBQTZCLDBCQUEwQixxQ0FBcUMsc0JBQXNCLDRDQUE0QyxLQUFLLG1CQUFtQix5Q0FBeUMsR0FBRyxlQUFlLGlCQUFpQixHQUFHLHFCQUFxQixrQkFBa0IsR0FBRyxpQkFBaUIsb0JBQW9CLHFDQUFxQyxnREFBZ0QsMEJBQTBCLHVCQUF1Qiw2QkFBNkIsNEJBQTRCLEdBQUcseUJBQXlCLHFCQUFxQixtQkFBbUIsMEJBQTBCLDBCQUEwQixHQUFHLCtCQUErQixtQkFBbUIsR0FBRyx1QkFBdUIsMEJBQTBCLEdBQUcsNkJBQTZCLHNCQUFzQix1Q0FBdUMsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHlCQUF5QixHQUFHLHNCQUFzQixzQkFBc0IsK0NBQStDLEdBQUcscUJBQXFCLG9CQUFvQiwwQkFBMEIsMEJBQTBCLEdBQUcsOEJBQThCLDZCQUE2QixzQkFBc0IsR0FBRyxvQ0FBb0MsaUNBQWlDLDBCQUEwQixvQkFBb0IsR0FBRyxvQ0FBb0Msb0JBQW9CLDZCQUE2Qix5QkFBeUIsMEJBQTBCLEdBQUcsMENBQTBDLGdEQUFnRCxzQkFBc0IsR0FBRyxZQUFZLHlCQUF5QixjQUFjLEdBQUcsYUFBYSwrQ0FBK0MsR0FBRyxpQ0FBaUMseUJBQXlCLGlCQUFpQixHQUFHLG9DQUFvQyx1QkFBdUIsbUJBQW1CLDRCQUE0Qiw0QkFBNEIsK0NBQStDLHlCQUF5QixvQkFBb0IsMEJBQTBCLHFDQUFxQyw4Q0FBOEMsc0NBQXNDLEdBQUcseUNBQXlDLHNCQUFzQix1QkFBdUIsR0FBRywrQ0FBK0MscUJBQXFCLEdBQUcsNkNBQTZDLG9CQUFvQiwwQkFBMEIsaUJBQWlCLEdBQUcsb0RBQW9ELGtCQUFrQiwwQkFBMEIsb0NBQW9DLHVCQUF1QixHQUFHLDBEQUEwRCxxQkFBcUIsc0NBQXNDLDBDQUEwQyxtREFBbUQsS0FBSyxzQkFBc0IsNkJBQTZCLCtCQUErQixxQ0FBcUMseUNBQXlDLGtDQUFrQyxxQ0FBcUMsR0FBRyw0QkFBNEIsaUNBQWlDLGtDQUFrQyxHQUFHLDZCQUE2QiwwQ0FBMEMscUNBQXFDLHdCQUF3QixtQkFBbUIsMEJBQTBCLHVCQUF1QixHQUFHLG1DQUFtQyxzQkFBc0IsbURBQW1ELDZCQUE2QixHQUFHLGVBQWUsbUNBQW1DLEdBQUcscUJBQXFCO0FBQy9xSztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE12QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9GQUFvRixVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLG9DQUFvQyxvQkFBb0IsNkJBQTZCLGtCQUFrQiwwQkFBMEIscUNBQXFDLHNCQUFzQixzREFBc0QsNENBQTRDLEtBQUssdUJBQXVCLHlDQUF5QyxHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLGtCQUFrQixnQ0FBZ0MsR0FBRyxrQkFBa0IsaUNBQWlDLG9CQUFvQixtQ0FBbUMsb0JBQW9CLG1DQUFtQyx1Q0FBdUMscUNBQXFDLEdBQUcsbUJBQW1CO0FBQ2psQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0N2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlIQUF5SDtBQUN6SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc0ZBQXNGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sVUFBVSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxvQkFBb0IscUJBQXFCLE9BQU8sS0FBSyxvQkFBb0IscUJBQXFCLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLDJHQUEyRyxVQUFVLG9DQUFvQyxvQ0FBb0MsOEJBQThCLG9DQUFvQyxrQ0FBa0Msa0NBQWtDLGtDQUFrQyxpQ0FBaUMsZ0NBQWdDLDZCQUE2Qiw2QkFBNkIsK0JBQStCLCtCQUErQixrQ0FBa0Msd0NBQXdDLG9DQUFvQyx1Q0FBdUMscUNBQXFDLGdDQUFnQyxrQ0FBa0Msa0NBQWtDLDhCQUE4QixHQUFHLFNBQVMsZ0JBQWdCLGlCQUFpQixtQkFBbUIsa0JBQWtCLDRDQUE0QyxxQkFBcUIsb0NBQW9DLDRDQUE0QywyQkFBMkIsS0FBSyxvQkFBb0IsK0JBQStCLEdBQUcsV0FBVywrQkFBK0IsR0FBRyxlQUFlLG9CQUFvQixxQkFBcUIsMEJBQTBCLG9CQUFvQiwwQkFBMEIsOEJBQThCLHdCQUF3QixHQUFHLHFCQUFxQixzQkFBc0IsZ0RBQWdELHFDQUFxQyxHQUFHLGlCQUFpQix3QkFBd0Isa0JBQWtCLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLGlDQUFpQyx1Q0FBdUMsR0FBRyxvQ0FBb0MsMENBQTBDLEdBQUcsa0NBQWtDLHdDQUF3QyxHQUFHLFNBQVMsbUJBQW1CLDBCQUEwQiwwQkFBMEIsdUJBQXVCLDRDQUE0QyxHQUFHLGVBQWUsc0JBQXNCLGtCQUFrQixHQUFHLGdCQUFnQixnQ0FBZ0MsR0FBRyxlQUFlLG9CQUFvQiwwQkFBMEIsdUJBQXVCLEdBQUcsdUJBQXVCLGFBQWEsYUFBYSxXQUFXLGFBQWEsR0FBRyx3QkFBd0IsYUFBYSxhQUFhLFdBQVcsYUFBYSxHQUFHLDRCQUE0QixhQUFhLCtCQUErQixXQUFXLDJCQUEyQixHQUFHLDRCQUE0QixhQUFhLDJCQUEyQixXQUFXLCtCQUErQixHQUFHLDZCQUE2QixhQUFhLDhCQUE4QixXQUFXLDJCQUEyQixHQUFHLDhCQUE4QixhQUFhLDJCQUEyQixXQUFXLDhCQUE4QixHQUFHLFlBQVksa0NBQWtDLEdBQUcsYUFBYSxvQ0FBb0MsR0FBRyxpQkFBaUIsd0NBQXdDLEdBQUcsa0JBQWtCLHlDQUF5QyxHQUFHLGtCQUFrQix5Q0FBeUMsR0FBRyxtQkFBbUIsMENBQTBDLEdBQUcsbUJBQW1CO0FBQ2hvSjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3JLMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXdHO0FBQ3hHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJa0Q7QUFDMUUsT0FBTyxpRUFBZSx3RkFBTyxJQUFJLHdGQUFPLFVBQVUsd0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF1RztBQUN2RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSWlEO0FBQ3pFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBdUc7QUFDdkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUlpRDtBQUN6RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXVHO0FBQ3ZHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJaUQ7QUFDekUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFxRztBQUNyRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSStDO0FBQ3ZFLE9BQU8saUVBQWUscUZBQU8sSUFBSSxxRkFBTyxVQUFVLHFGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBcUc7QUFDckc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUkrQztBQUN2RSxPQUFPLGlFQUFlLHFGQUFPLElBQUkscUZBQU8sVUFBVSxxRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsb0ZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSxvRkFBTyxJQUFJLG9GQUFPLFVBQVUsb0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiaUM7O0FBRWpDO0FBQ0Esa0NBQWtDLG9EQUFPO0FBQ3pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWa0I7QUFDUDtBQUNBOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsb0RBQU87QUFDMUM7O0FBRUEsa0JBQWtCLGlEQUFJO0FBQ3RCO0FBQ0E7O0FBRUEsa0JBQWtCLGlEQUFJO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JrQjs7QUFFbEI7QUFDZiwwQ0FBMEMsb0RBQU87QUFDakQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05nQzs7QUFFaEM7QUFDQSxtQ0FBbUMsb0RBQU87O0FBRTFDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNac0I7QUFDQTtBQUN5QjtBQUNRO0FBQ2pCOztBQUV0QztBQUNmOztBQUVBLHVCQUF1Qiw0RUFBa0I7O0FBRXpDLHFCQUFxQiw0RUFBa0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQiw0RUFBa0I7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0RBQWtCO0FBQ2xELFVBQVU7QUFDVixnQ0FBZ0MsdURBQVU7QUFDMUMsVUFBVTtBQUNWLGdDQUFnQyx1REFBVTtBQUMxQztBQUNBLEtBQUs7O0FBRUwsSUFBSSx5RUFBYztBQUNsQixJQUFJLHlFQUFjOztBQUVsQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckM4RDtBQUNROztBQUV2RDtBQUNmO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsNEVBQWtCOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLGFBQWE7QUFDM0Y7QUFDQTtBQUNBLDRFQUE0RSxhQUFhO0FBQ3pGO0FBQ0E7QUFDQSwwRUFBMEUsYUFBYTtBQUN2RjtBQUNBO0FBQ0EsMEVBQTBFLGFBQWE7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUkseUVBQWM7O0FBRWxCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEOEQ7QUFDUTtBQUNqQjtBQUNKOztBQUVqRDtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSx5RUFBYztBQUNsQjs7QUFFQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLHlFQUFjOztBQUVsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2REFBZTs7QUFFMUMsSUFBSSx5RUFBYzs7QUFFbEIscUJBQXFCLHlEQUFtQjtBQUN4QztBQUNBO0FBQ0EsOEJBQThCLHFCQUFxQjtBQUNuRDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLDRFQUFrQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQiw0RUFBa0I7QUFDeEM7QUFDQTtBQUNBOztBQUVBLElBQUkseUVBQWM7O0FBRWxCO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRUEsSUFBSSx5RUFBYzs7QUFFbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLDRFQUFrQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxJQUFJLHlFQUFjOztBQUVsQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZQOEQ7QUFDYztBQUNOOztBQUV2RDtBQUNmOztBQUVBLG9CQUFvQiw0RUFBa0I7O0FBRXRDLHFCQUFxQiw0RUFBa0I7QUFDdkMsa0NBQWtDLGFBQWE7O0FBRS9DLHNCQUFzQiw0RUFBa0I7QUFDeEMsc0JBQXNCLCtFQUFxQjs7QUFFM0MsSUFBSSx5RUFBYztBQUNsQixJQUFJLHlFQUFjOztBQUVsQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25COEQ7QUFDUTtBQUNFOztBQUV6RDtBQUNmOztBQUVBLG9CQUFvQiw0RUFBa0I7QUFDdEMscUJBQXFCLDZFQUFtQjtBQUN4Qzs7QUFFQSxpQkFBaUIsNEVBQWtCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEVBQWtCO0FBQ3JDLG9CQUFvQiw2RUFBbUI7QUFDdkM7O0FBRUEsSUFBSSx5RUFBYzs7QUFFbEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJtQztBQUNJO0FBQ1I7QUFDWTtBQUNtRjtBQUNoRTs7QUFFL0M7QUFDZjs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQiwwREFBYTtBQUNqQywwQkFBMEIsbUVBQW1CO0FBQzdDLHVCQUF1QixnRUFBZ0I7QUFDdkMsdUJBQXVCLGdFQUFnQjtBQUN2Qyx1QkFBdUIsZ0VBQWdCO0FBQ3ZDLDBCQUEwQixtRUFBbUI7O0FBRTdDLElBQUkseUVBQWMsUUFBUSx5REFBTTtBQUNoQyxJQUFJLHlFQUFjLGFBQWEsNkRBQU0sSUFBSSx1REFBSTtBQUM3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEI4RDtBQUNjO0FBQ047QUFDakI7O0FBRXRDO0FBQ2YsaUJBQWlCLDRFQUFrQjs7QUFFbkMsb0JBQW9CLDRFQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNEVBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlFQUFjO0FBQ2xCO0FBQ0Esb0JBQW9CLDRFQUFrQjtBQUN0Qzs7QUFFQSxJQUFJLHlFQUFjOztBQUVsQjtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDRFQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLHlEQUFtQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxQkFBcUI7QUFDaEUsOEJBQThCLDRFQUFrQjtBQUNoRCw0QkFBNEIsK0VBQXFCO0FBQ2pELDhCQUE4QiwrRUFBcUI7QUFDbkQsWUFBWSx5RUFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckY4RDtBQUNROztBQUV2RDtBQUNmLG1CQUFtQiw0RUFBa0I7O0FBRXJDLHFCQUFxQiw0RUFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQiw0RUFBa0I7QUFDN0M7O0FBRUEsSUFBSSx5RUFBYzs7QUFFbEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ2lFO0FBQ1E7O0FBRTFEO0FBQ2Y7O0FBRUEsb0JBQW9CLCtFQUFrQjs7QUFFdEMscUJBQXFCLCtFQUFrQjtBQUN2QyxrQ0FBa0MsYUFBYTs7QUFFL0Msc0JBQXNCLCtFQUFrQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksNEVBQWM7O0FBRWxCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckI4RDtBQUNjO0FBQ047QUFDSjs7QUFFbkQ7QUFDZjs7QUFFQSxvQkFBb0IsNEVBQWtCOztBQUV0Qyx3QkFBd0IsNEVBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiw0RUFBa0I7QUFDdkMsa0NBQWtDLGFBQWE7O0FBRS9DLHNCQUFzQiw0RUFBa0I7QUFDeEMsb0JBQW9CLCtFQUFxQjtBQUN6Qyx3QkFBd0IsK0VBQXFCO0FBQzdDLG9CQUFvQiwrRUFBcUI7QUFDekMsc0JBQXNCLCtFQUFxQjs7QUFFM0MsSUFBSSwyRUFBZ0I7O0FBRXBCLElBQUkseUVBQWM7QUFDbEIsSUFBSSx5RUFBYzs7QUFFbEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQnVFOztBQUV4RDtBQUNmLG9CQUFvQiw0RUFBa0I7QUFDdEM7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2IrQjs7QUFFaEI7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCLGdEQUFNOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNCK0I7O0FBRWhCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdEQUFNOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERnRjtBQUNsQztBQUNBOztBQUV2QztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDhEQUFRO0FBQzVDLG9DQUFvQyw4REFBUTtBQUM1QyxRQUFRLHdFQUFrQjtBQUMxQjtBQUNBLEtBQUs7QUFDTCx1Q0FBdUMseUVBQW9CO0FBQzNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUN4RGdCOztBQUVoQjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0RBQU07QUFDMUIsa0JBQWtCLGdEQUFNO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0NlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRmU7QUFDZjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsVUFBVTtBQUNsRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNKZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0plO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUcsVUFBVTtBQUNsQjs7Ozs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDRmtFO0FBQ25EO0FBQ2Y7QUFDQSx3QkFBd0IsbUVBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmb0M7QUFDTTtBQUNzQjtBQUM1Qjs7QUFFN0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLGdCQUFnQiw2RUFBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiw4REFBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiwyREFBSTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsMkRBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0k0RDtBQUNjO0FBQ2Y7QUFDRDtBQUNGO0FBQ0o7QUFDRjs7QUFFbkM7QUFDZjtBQUNBOztBQUVBLHlCQUF5Qix1REFBZTs7QUFFeEMsSUFBSSwyRUFBWTtBQUNoQjtBQUNBO0FBQ0EsUUFBUSxzRUFBYTtBQUNyQixRQUFRLG9FQUFVO0FBQ2xCLFFBQVEscUVBQVc7QUFDbkIsUUFBUSx3RUFBYztBQUN0QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCK0Q7QUFDWjs7QUFFbkQ7QUFDQSxvQkFBb0IsbUVBQW1CO0FBQ3ZDOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1plO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y0RDtBQUNNO0FBQ3ZCO0FBQ3NCO0FBQzdCO0FBQ007QUFDOEM7QUFDOUM7OztBQUduQztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qix3REFBVTtBQUNuQyx5QkFBeUIsK0RBQWlCO0FBQzFDLFFBQVEseUVBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFlBQVkseUVBQW9CO0FBQ2hDLGdCQUFnQiw4REFBUztBQUN6QixnQkFBZ0Isd0RBQWU7QUFDL0IsZ0JBQWdCLG9EQUFZO0FBQzVCLDZCQUE2QixzREFBUTtBQUNyQyw2QkFBNkIsNkRBQWU7QUFDNUMsZ0JBQWdCLHlEQUFVO0FBQzFCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBLFFBQVEseUVBQW9CO0FBQzVCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseUVBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWUsQ0FBQyxtRUFBbUI7QUFDL0MsWUFBWSxvREFBWTtBQUN4QixZQUFZLHVEQUFRO0FBQ3BCLFlBQVksOERBQWU7QUFDM0IsWUFBWSx5REFBVTtBQUN0QixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBLFFBQVEseUVBQW9CO0FBQzVCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EZ0U7QUFDRTtBQUN2QjtBQUNzQjtBQUN4QjtBQUNnQjtBQUNpQjtBQUN0QztBQUN1QjtBQUNFO0FBQ0g7QUFDd0I7QUFDTTtBQUNyQztBQUNQOztBQUU3QjtBQUNmO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix1REFBZTs7QUFFMUM7QUFDQTtBQUNBLFFBQVEsOERBQVk7QUFDcEIsUUFBUSw0REFBVTtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSw0REFBUTtBQUNoQixRQUFRLDhEQUFTO0FBQ2pCLFFBQVEsMkVBQXFCO0FBQzdCOztBQUVBO0FBQ0EsUUFBUSw0REFBUTtBQUNoQixRQUFRLDhEQUFTO0FBQ2pCLFFBQVEsMkVBQXFCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0VBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNEVBQW9CO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFrQixxQkFBcUIsbUVBQW1CO0FBQ2xFLFFBQVEscUVBQWdCO0FBQ3hCOztBQUVBO0FBQ0EseUJBQXlCLHlEQUFVO0FBQ25DLGdDQUFnQyxnRUFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOERBQThELG1FQUFvQixjQUFjLDBFQUFVO0FBQzFHO0FBQ0EsWUFBWSxrRUFBa0I7QUFDOUI7O0FBRUE7QUFDQSxZQUFZLGtFQUFrQixxQkFBcUIsbUVBQW1COztBQUV0RSxZQUFZLHlFQUFvQjtBQUNoQyxnQkFBZ0IsOERBQVM7QUFDekIsZ0JBQWdCLHdEQUFlLENBQUMsdURBQWU7QUFDL0MsZ0JBQWdCLG9EQUFZO0FBQzVCLDhCQUE4Qix1REFBUTtBQUN0QyxxQ0FBcUMsOERBQWU7QUFDcEQsZ0JBQWdCLDREQUFZO0FBQzVCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxRQUFRLDZEQUFZO0FBQ3BCLFFBQVEsNERBQVU7QUFDbEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEk4RDtBQUNuQjtBQUNzQjtBQUN4Qjs7QUFFbEM7QUFDUDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBLFFBQVE7QUFDUjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLHNCQUFzQiwwRUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkRBQVE7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFRO0FBQ2hCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRLDZEQUFRO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsSUFBSSx5RUFBb0I7QUFDeEIsUUFBUSw4REFBUztBQUNqQjtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEU4QjtBQUNvQztBQUNEO0FBQ2I7QUFDaEI7QUFDb0M7QUFDZ0I7QUFDN0I7O0FBRTNEO0FBQ0EsWUFBWSx3Q0FBd0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5RUFBb0I7QUFDNUIsNkJBQTZCLHdEQUFVO0FBQ3ZDLG9DQUFvQywrREFBaUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBZSxDQUFDLHVEQUFlO0FBQzNDLFlBQVksb0RBQVk7QUFDeEIsMEJBQTBCLHNEQUFRO0FBQ2xDO0FBQ0EsZ0JBQWdCLDZEQUFZO0FBQzVCLGdCQUFnQiwyREFBVTtBQUMxQjtBQUNBLGlDQUFpQyw2REFBZTtBQUNoRCxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBLFFBQVEseUVBQW9CO0FBQzVCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdDQUF3QztBQUN4RDtBQUNBLFFBQVEsa0VBQWtCLHFCQUFxQixtRUFBbUI7QUFDbEUsS0FBSztBQUNMOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0EsUUFBUSxrRUFBa0IscUJBQXFCLG1FQUFtQjtBQUNsRSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxQkFBcUI7QUFDckM7QUFDQSxRQUFRLGtFQUFrQixxQkFBcUIsbUVBQW1CO0FBQ2xFLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZpRTtBQUNkO0FBQ0E7O0FBRXBDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSx3RUFBb0I7QUFDaEMsZ0JBQWdCLHNEQUFRO0FBQ3hCLGFBQWE7QUFDYixTQUFTO0FBQ1QsWUFBWSx3RUFBb0I7QUFDaEMsZ0JBQWdCLHVEQUFTO0FBQ3pCLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBaUI7QUFDekIsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCeUM7QUFDRTtBQUNKO0FBQ0E7QUFDMkI7QUFDOUI7QUFDb0Q7QUFDOUI7QUFDTztBQUNiO0FBQ1Y7O0FBRTNCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkRBQVE7QUFDaEIsUUFBUSw4REFBUztBQUNqQjs7QUFFQTs7QUFFQTtBQUNBLFFBQVEseUVBQW9CO0FBQzVCO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3RUFBb0I7QUFDaEMsaUNBQWlDLHdEQUFVO0FBQzNDLG1DQUFtQyw0REFBWTtBQUMvQyx3Q0FBd0MsK0RBQWlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix5REFBZTtBQUMvQixnQkFBZ0Isb0RBQVk7QUFDNUIsOEJBQThCLHNEQUFRO0FBQ3RDLHFDQUFxQyw2REFBZTtBQUNwRCxnQ0FBZ0MsMERBQVU7QUFDMUMsYUFBYTtBQUNiO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLHdCQUF3QiwyREFBSTtBQUM1QjtBQUNBO0FBQ0EsUUFBUSxrRUFBa0IscUJBQXFCLG1FQUFtQjtBQUNsRTs7QUFFQTtBQUNBLHdCQUF3QiwyREFBSTtBQUM1QjtBQUNBO0FBQ0EsUUFBUSxrRUFBa0IscUJBQXFCLG1FQUFtQjtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1FQUFtQjtBQUNsQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFHeUQ7QUFDQTtBQUNJO0FBQ25CO0FBQ047QUFDcUI7QUFDUztBQUN2QjtBQUNGO0FBQzJCO0FBQ047QUFDUztBQUNsQjtBQUNGO0FBQ3VCOztBQUUzRDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2REFBNkQsbUVBQW1CO0FBQ2hGLDZEQUE2RCxtRUFBbUI7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9FQUFvQjtBQUNoRCxTQUFTO0FBQ1QsNEJBQTRCLDBFQUFPO0FBQ25DLFlBQVksbUVBQWtCLFlBQVksMEVBQU87QUFDakQ7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUVBQW1CO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEsMkNBQTJDLDJEQUFpQjtBQUM1RDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3REFBZTtBQUNuQixJQUFJLG9EQUFZO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFvQjtBQUN4Qjs7QUFFQTtBQUNBLElBQUksdURBQWU7QUFDbkIsSUFBSSxvREFBWTtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksNkRBQVE7QUFDWixJQUFJLDhEQUFTO0FBQ2IsSUFBSSw4REFBUztBQUNiLElBQUksOEVBQXdCO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1FQUFtQjtBQUNyQyxJQUFJLG1GQUEyQixDQUFDLG1FQUFtQjtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0ZBQVk7QUFDNUMsd0JBQXdCLG1FQUFjO0FBQ3RDO0FBQ0EsUUFBUSx3REFBZTtBQUN2QixRQUFRLG9EQUFZO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsSUFBSSw4REFBUztBQUNiO0FBQ0EsUUFBUSw0REFBUTtBQUNoQixNQUFNO0FBQ047QUFDQSxRQUFRLDZEQUFRO0FBQ2hCO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsSUFBSSw4REFBUztBQUNiO0FBQ0EsSUFBSSw2REFBUTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSmtFO0FBQ3ZCO0FBQ3NCO0FBQ2I7QUFDaEI7QUFDb0Q7O0FBRXpFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLG1FQUFtQjs7QUFFeEM7QUFDQSx5QkFBeUIsd0RBQVU7QUFDbkMseUJBQXlCLCtEQUFpQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQWtCLHFCQUFxQixtRUFBbUI7QUFDbEUsUUFBUSx5RUFBb0I7QUFDNUI7QUFDQSxZQUFZLHlFQUFvQjtBQUNoQyxnQkFBZ0IsOERBQVM7QUFDekIsZ0JBQWdCLG9EQUFZO0FBQzVCLDZCQUE2QixzREFBUTtBQUNyQyw2QkFBNkIsNkRBQWU7QUFDNUMsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0EsUUFBUSx5RUFBb0I7QUFDNUI7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QzZEO0FBQ25CO0FBQ047QUFDcUI7QUFDTjtBQUN1QjtBQUNSOztBQUVuRDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QyxzREFBUTtBQUN0RDtBQUNBO0FBQ0EsUUFBUSx3REFBZSxDQUFDLG1FQUFtQjtBQUMzQyxRQUFRLG9EQUFZO0FBQ3BCLEtBQUs7QUFDTDtBQUNBLFFBQVEsd0RBQWUsQ0FBQyxtRUFBbUI7QUFDM0MsUUFBUSxvREFBWTtBQUNwQixLQUFLO0FBQ0w7QUFDQSxRQUFRLHVEQUFRO0FBQ2hCLFFBQVEsOERBQWU7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZLHVEQUFlLENBQUMsbUVBQW9CO0FBQ2hELFNBQVM7QUFDVCxZQUFZLHVEQUFlLENBQUMsMEVBQU87QUFDbkMsWUFBWSxrRUFBa0IsWUFBWSwwRUFBTztBQUNqRDtBQUNBO0FBQ0EsUUFBUSxtREFBWTtBQUNwQixLQUFLOztBQUVMLDRDQUE0QywwREFBaUI7QUFDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQzZDO0FBQ3FCO0FBQ0Q7QUFDYjtBQUNoQjtBQUNNO0FBQ2U7O0FBRTFDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5RUFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0EsNEJBQTRCLG1FQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0VBQW9CO0FBQ2hDO0FBQ0EsbUNBQW1DLDhEQUFPO0FBQzFDO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGdCQUFnQixtRUFBbUI7QUFDbkMsZ0JBQWdCLGtFQUFrQixxQkFBcUIsbUVBQW1CO0FBQzFFLGdCQUFnQix3REFBZTtBQUMvQixnQkFBZ0Isb0RBQVk7QUFDNUIsZ0JBQWdCLHVEQUFRO0FBQ3hCLGdCQUFnQiw4REFBZTtBQUMvQixhQUFhO0FBQ2IsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRGdFO0FBQ0E7QUFDRTtBQUNEO0FBQ2I7QUFDaEI7QUFDb0Q7O0FBRXhGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0VBQW9CO0FBQ2hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qix3REFBVTtBQUNuQyxnQ0FBZ0MsK0RBQWlCO0FBQ2pELFFBQVEseUVBQW9CO0FBQzVCO0FBQ0EsWUFBWSxrRUFBa0IscUJBQXFCLG1FQUFtQjtBQUN0RTtBQUNBLFlBQVksb0RBQVk7QUFDeEIseUJBQXlCLHNEQUFRO0FBQ2pDLGdDQUFnQyw2REFBZTtBQUMvQyxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBLFFBQVEseUVBQW9CO0FBQzVCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsd0RBQVU7QUFDbkMsZ0NBQWdDLCtEQUFpQjtBQUNqRCxRQUFRLHlFQUFvQjtBQUM1QjtBQUNBO0FBQ0EsMEJBQTBCLDBFQUFVO0FBQ3BDLFlBQVksMEVBQVU7QUFDdEIsWUFBWSxrRUFBa0IscUJBQXFCLG1FQUFtQjtBQUN0RSxZQUFZLGtFQUFrQixZQUFZLDBFQUFVO0FBQ3BEO0FBQ0EsWUFBWSxvREFBWTtBQUN4Qix5QkFBeUIsc0RBQVE7QUFDakMsZ0NBQWdDLDZEQUFlO0FBQy9DLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0EsUUFBUSx5RUFBb0I7QUFDNUI7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVPO0FBQ1A7QUFDQTtBQUNBLHdCQUF3QiwyRUFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQSx3QkFBd0IsMkVBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzR087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSc0Q7QUFDSjtBQUNRO0FBQ2Q7QUFDUTtBQUNLO0FBQ0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsc0JBQXNCO0FBQ3pEO0FBQ0E7QUFDQSxtQ0FBbUMsaUJBQWlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xEO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxjQUFjO0FBQzFEOztBQUVBLFdBQVcsaUVBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsMkJBQTJCLDZEQUFXO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxRUFBZTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELGNBQWM7QUFDOUQ7O0FBRUE7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHdCQUF3QixtRUFBYzs7QUFFdEM7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQSxpREFBaUQsaUJBQWlCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUVBQWU7QUFDOUI7QUFDQTtBQUNBLG1EQUFtRCxlQUFlO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsc0NBQXNDO0FBQzdFO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQSxtREFBbUQsZUFBZTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHNDQUFzQztBQUM3RTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGlCQUFpQixxREFBTzs7QUFFeEI7QUFDQSw0Q0FBNEMsY0FBYztBQUMxRDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLG9CQUFvQiwyREFBVTs7QUFFOUI7QUFDQSwrQ0FBK0MsY0FBYztBQUM3RDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGNBQWM7QUFDcEU7O0FBRUEsV0FBVyxpRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxzQkFBc0IsK0RBQVk7O0FBRWxDO0FBQ0EsaURBQWlELG1CQUFtQjtBQUNwRTs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBLHdEQUF3RCxhQUFhO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0Esd0RBQXdELGFBQWE7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQSxzREFBc0QsYUFBYTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Q7O0FBRUEsV0FBVyxpRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFOztBQUVBLFdBQVcsaUVBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EseURBQXlELGdCQUFnQjtBQUN6RTs7QUFFQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EseURBQXlELGdCQUFnQjtBQUN6RTs7QUFFQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLFdBQVcsaUVBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMscUVBQWU7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFFQUFlO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUVBQWU7QUFDL0Isa0JBQWtCLHFFQUFlO0FBQ2pDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2d0J5RDs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxxRUFBZTtBQUM5RCxHQUFHOztBQUVIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUMzRkE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQSwrQkFBK0IsZUFBZTtBQUM5QztBQUNBO0FBQ0EsK0JBQStCLGVBQWU7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DO0FBQ0EsK0JBQStCLGlCQUFpQjtBQUNoRDtBQUNBLCtCQUErQixlQUFlO0FBQzlDO0FBQ0E7QUFDQSwrQkFBK0IsZUFBZTtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLGdCQUFnQjtBQUM3RDtBQUNBO0FBQ0EsNkNBQTZDLGlCQUFpQjtBQUM5RDtBQUNBO0FBQ0EsNkNBQTZDLGVBQWU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGVBQWU7QUFDNUQ7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCLGdCQUFnQixNQUFNO0FBQ3RCOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0R1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZ0JBQWdCLG1EQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isb0JBQW9CLGtCQUFrQixNQUFNLFdBQVcsT0FBTyxxQkFBcUIsU0FBUyxpQkFBaUIsTUFBTSxJQUFJO0FBQ3pJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDdUI7QUFDTjtBQUMrQzs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AseUJBQXlCLDJEQUFVO0FBQ25DLDBCQUEwQiwyREFBVTs7QUFFcEM7QUFDQSxzQkFBc0IseUdBQStCO0FBQ3JEO0FBQ0EsdUJBQXVCLHlHQUErQjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0EsdURBQXVELDZEQUFpQjtBQUN4RTs7QUFFQTtBQUNBLGlFQUFlLHdCQUF3QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEaUI7QUFDSztBQUNKO0FBQ1E7QUFLOUI7QUFDSTtBQUNGOztBQUV0QztBQUNBO0FBQ3NDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVnQzs7QUFFaEM7QUFDQSxRQUFRLGNBQWM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUEsT0FBTyx5RUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxXQUFXLHlFQUFlO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsU0FBUyx5RUFBZTtBQUN4QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxPQUFPLHlFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHOztBQUVILGFBQWEseUVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FD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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQ0M7QUFDSDtBQUNDO0FBQ0c7QUFDSDtBQUNFO0FBQ0E7QUFDYzs7QUFFekM7QUFDQSxJQUFJLHlEQUFZO0FBQ2hCOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9jb250ZW50LmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL2RldGFpbC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9kaWFsb2cuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL2l0ZW0uY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUvbWVudS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9uYXYuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL2NvbnRlbnQuY3NzPzhhYmUiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9kZXRhaWwuY3NzP2U0YzciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9kaWFsb2cuY3NzPzMyMjAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9oZWFkZXIuY3NzPzlhMzMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9pdGVtLmNzcz9jYmQzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUvbWVudS5jc3M/ZWIxOCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL25hdi5jc3M/ZjMxMSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvRGVmYXVsdCBQcm9qZWN0L2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvRGVmYXVsdCBQcm9qZWN0L2luYm94LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50L0RlZmF1bHQgUHJvamVjdC9zZWFyY2hSZXN1bHQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvRGVmYXVsdCBQcm9qZWN0L3RvZGF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50L0xheW91dC9jcmVhdGVDb250ZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50L0xheW91dC9jcmVhdGVEZXRhaWwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZURpYWxvZ3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZUZpbmlzaGVkVG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudC9MYXlvdXQvY3JlYXRlSGVhZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50L0xheW91dC9jcmVhdGVMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZU1lbnUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZU5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZU5vdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZVVuZG9Cb3guanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvbm90ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudC9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50L3Byb2plY3RDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnQvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL2NvbW1vbi9hcHBlbmRDaGlsZHJlbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL2NvbW1vbi9jbG9zZVRoaXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy9jb21tb24vY3JlYXRlQnV0dG9uV2l0aENsYXNzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvY29tbW9uL2NyZWF0ZURpdldpdGhDbGFzcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL2NvbW1vbi9jcmVhdGVJY29uV2l0aENsYXNzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvY29tbW9uL2V4ZWN1dGVXaXRoQW5pbWF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvY29tbW9uL29wZW5UaGlzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvY29tbW9uL3NlYXJjaEFsbEl0ZW1zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvY29tbW9uL3NldFByaW9yaXR5Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL3VpLWhhbmRsZXJzL2FwcGVhcmFuY2VIYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvdWktaGFuZGxlcnMvY29uZmlybURpYWxvZ0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy91aS1oYW5kbGVycy9jb250ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL3VpLWhhbmRsZXJzL2RldGFpbEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy91aS1oYW5kbGVycy9lZGl0RGlhbG9nSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL3VpLWhhbmRsZXJzL2hlYWRlckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy91aS1oYW5kbGVycy9pdGVtRGlhbG9nSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxzL3VpLWhhbmRsZXJzL21lbnVIYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvdWktaGFuZGxlcnMvbW92ZURpYWxvZ0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy91aS1oYW5kbGVycy9uYXZIYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXRpbHMvdWktaGFuZGxlcnMvcHJvamVjdERpYWxvZ0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlscy91aS1oYW5kbGVycy91bmRvSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvYWRkTGVhZGluZ1plcm9zLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZGVmYXVsdE9wdGlvbnMubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvZm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9mb3JtYXQubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0RGF5T2ZZZWFyLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWsubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0RhdGUubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNWYWxpZC5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4ubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZkRheS5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWsubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZZZWFyLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvbnRlbnR7XG4gICAgZmxleC1ncm93OjE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDFyZW0gMi41cmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWRhcmspO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRlbnRfX3RpdGxle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuXG4uY29udGVudF9fdGl0bGUgaDF7XG4gICAgbWFyZ2luOiAycmVtIDA7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5jb250ZW50X190aXRsZSBpe1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmNvbnRlbnRfX3RpdGxlIGk6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1ob3Zlci10ZXh0LWNvbG9yKTtcbn1cblxuLmNvbnRlbnRfX2l0ZW1ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOjFyZW07XG59XG5cbi51bmRvX19ib3h7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1jb2xvcikgNXB4IDVweCAxMHB4O1xuICAgIGFuaW1hdGlvbjpmYWRlSW4gbGluZWFyIC4ycztcbn1cblxuLnVuZG9fX2JveCAuYnV0dG9uc3tcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnVuZG9fX2JveCAudW5kb19fYnRue1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWVkaXQtYnRuLWNvbG9yKTtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLnVuZG9fX2JveCAuY2xvc2VfX2J0bntcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZWxldGUtYnRuLWNvbG9yKTtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLnVuZG9fX2JveFtjbG9zaW5nXXtcbiAgICBhbmltYXRpb246ZmFkZU91dCBsaW5lYXIgLjJzO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2NvbnRlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQiw0Q0FBNEM7SUFDNUMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRlbnR7XFxuICAgIGZsZXgtZ3JvdzoxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItZGFyayk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNvbnRlbnRfX3RpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4uY29udGVudF9fdGl0bGUgaDF7XFxuICAgIG1hcmdpbjogMnJlbSAwO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmNvbnRlbnRfX3RpdGxlIGl7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jb250ZW50X190aXRsZSBpOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1ob3Zlci10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmNvbnRlbnRfX2l0ZW1ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6MXJlbTtcXG59XFxuXFxuLnVuZG9fX2JveHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWNvbG9yKSA1cHggNXB4IDEwcHg7XFxuICAgIGFuaW1hdGlvbjpmYWRlSW4gbGluZWFyIC4ycztcXG59XFxuXFxuLnVuZG9fX2JveCAuYnV0dG9uc3tcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi51bmRvX19ib3ggLnVuZG9fX2J0bntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZWRpdC1idG4tY29sb3IpO1xcbiAgICBjb2xvcjogI0ZGRjtcXG59XFxuXFxuLnVuZG9fX2JveCAuY2xvc2VfX2J0bntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGVsZXRlLWJ0bi1jb2xvcik7XFxuICAgIGNvbG9yOiAjRkZGO1xcbn1cXG5cXG4udW5kb19fYm94W2Nsb3Npbmdde1xcbiAgICBhbmltYXRpb246ZmFkZU91dCBsaW5lYXIgLjJzO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5kZXRhaWx7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi13aWR0aDogMTUlO1xuICAgIG1heC13aWR0aDogMjAlO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tdGFiLWJvcmRlci1jb2xvcik7XG4gICAgLyogYW5pbWF0aW9uOiBzbGlkZUluUmlnaHQgbGluZWFyIC4zczsgKi9cbn1cbi5kZXRhaWxbb3BlbmluZ117XG4gICAgYW5pbWF0aW9uOiBzbGlkZUluUmlnaHQgbGluZWFyIC4zcztcbn1cblxuLmRldGFpbFtvcGVuXXtcbiAgICBhbmltYXRpb246IG5vbmVcbn1cblxuLmRldGFpbFtjbG9zaW5nXXtcbiAgICBhbmltYXRpb246IHNsaWRlT3V0UmlnaHQgbGluZWFyIC4zcztcbn1cblxuLmRldGFpbCBoMXtcbiAgICBtYXJnaW46IDJyZW0gMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZGV0YWlsIHB7XG4gICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZGV0YWlsIGRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uZGV0YWlsIGJ1dHRvbi5kZWxldGVfX2J0bntcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZWxldGUtYnRuLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG59XG5cbi5kZXRhaWwgYnV0dG9uLmNsb3NlX19idG57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLjFyZW07XG4gICAgbGVmdDogLjFyZW07XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5kZXRhaWwgYnV0dG9uLmNsb3NlX19idG46aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1ob3Zlci10ZXh0LWNvbG9yKVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvZGV0YWlsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsOENBQThDO0lBQzlDLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmRldGFpbHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi13aWR0aDogMTUlO1xcbiAgICBtYXgtd2lkdGg6IDIwJTtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS10YWItYm9yZGVyLWNvbG9yKTtcXG4gICAgLyogYW5pbWF0aW9uOiBzbGlkZUluUmlnaHQgbGluZWFyIC4zczsgKi9cXG59XFxuLmRldGFpbFtvcGVuaW5nXXtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUluUmlnaHQgbGluZWFyIC4zcztcXG59XFxuXFxuLmRldGFpbFtvcGVuXXtcXG4gICAgYW5pbWF0aW9uOiBub25lXFxufVxcblxcbi5kZXRhaWxbY2xvc2luZ117XFxuICAgIGFuaW1hdGlvbjogc2xpZGVPdXRSaWdodCBsaW5lYXIgLjNzO1xcbn1cXG5cXG4uZGV0YWlsIGgxe1xcbiAgICBtYXJnaW46IDJyZW0gMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kZXRhaWwgcHtcXG4gICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRldGFpbCBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5kZXRhaWwgYnV0dG9uLmRlbGV0ZV9fYnRue1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZWxldGUtYnRuLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xcbn1cXG5cXG4uZGV0YWlsIGJ1dHRvbi5jbG9zZV9fYnRue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLjFyZW07XFxuICAgIGxlZnQ6IC4xcmVtO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmRldGFpbCBidXR0b24uY2xvc2VfX2J0bjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0taG92ZXItdGV4dC1jb2xvcilcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBkaWFsb2d7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYW5pbWF0aW9uOmZhZGVJbiBsaW5lYXIgLjJzO1xufVxuXG5kaWFsb2c6OmJhY2tkcm9we1xuICAgIGJhY2tncm91bmQ6ICMzMzMzMzMzNTtcbiAgICBhbmltYXRpb246ZmFkZUluIGxpbmVhciAuMnM7XG59XG5cbmRpYWxvZ1tjbG9zaW5nXXtcbiAgICBhbmltYXRpb246ZmFkZU91dCBsaW5lYXIgLjJzO1xufVxuXG5kaWFsb2cgZGl2IHtcbiAgICAvKiBTdHlsaW5nIGZvciBmb3JtIGRpdnMgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xufVxuXG5kaWFsb2cgaW5wdXQge1xuICAgIC8qIFN0eWxpbmcgZm9yIGZvcm0gaW5wdXRzICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAwIC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xufVxuXG5kaWFsb2cgaW5wdXQ6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuZGlhbG9nIGxhYmVsIHtcbiAgICAvKiBTdHlsaW5nIGZvciBmb3JtIGxhYmVscyAqL1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjJyZW07XG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcbn1cblxuZGlhbG9nIHRleHRhcmVhIHtcbiAgICAvKiBTdHlsaW5nIGZvciBmb3JtIHRleHRhcmVhcyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xufVxuXG5kaWFsb2cgdGV4dGFyZWE6Zm9jdXN7XG4gICAgb3V0bGluZTpub25lO1xufVxuXG5kaWFsb2cgc2VsZWN0OmZvY3Vze1xuICAgIG91dGxpbmU6bm9uZVxufVxuXG5kaWFsb2cgLmJ1dHRvbnMge1xuICAgIC8qIFN0eWxpbmcgZm9yIGJ1dHRvbiBjb250YWluZXIgKi9cbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmRpYWxvZyAuYWRkX19idG4ge1xuICAgIC8qIFN0eWxpbmcgZm9yIGFkZCBidXR0b24gKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xufVxuXG5kaWFsb2cgLmNsb3NlX19idG4ge1xuICAgIC8qIFN0eWxpbmcgZm9yIGNsb3NlIGJ1dHRvbiAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlbGV0ZS1idG4tY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xufVxuXG4vKiBQcm9qZWN0IERpYWxvZyBzZWN0aW9uICovXG4jcHJvamVjdF9fYWRkLWRpYWxvZyB7XG4gICAgLyogU3R5bGluZyBmb3IgdGhlIGRpYWxvZyAqL1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpOyAqL1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLTIpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI3Byb2plY3RfX2FkZC1mb3Jte1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBJdGVtIGRpYWxvZyBzZWN0aW9uICovXG4jaXRlbV9fYWRkLWRpYWxvZyB7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLTIpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTsgKi9cbn1cblxuI2l0ZW1fX2FkZC1kaWFsb2cgLnNlbGVjdF9faXRlbS1mb3JtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI2l0ZW1fX2FkZC1kaWFsb2cgLnNlbGVjdF9faXRlbS1mb3JtIHNlbGVjdCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAwIDAuMjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XG59XG5cbiNpdGVtX19hZGQtZGlhbG9nPmZvcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuI2l0ZW1fX21vdmUtZGlhbG9nIHNlbGVjdCxcbiNpdGVtX19hZGQtZGlhbG9nPmZvcm0+ZGl2PnNlbGVjdCB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAgMC4yNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcbn1cblxuI2l0ZW1fX2FkZC1kaWFsb2cgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbiNpdGVtX19hZGQtZGlhbG9nID4gZGl2ID4gbGFiZWx7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuI2l0ZW1fX2FkZC1kaWFsb2c+ZGl2PnNlbGVjdCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAwIDAuMjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XG59XG5cbi8qIEVkaXQgZGlhbG9nIHNlY3Rpb24gKi9cbiNpdGVtX19lZGl0LWRpYWxvZ3tcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMik7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpOyAqL1xufVxuXG4vKiBDb25maXJtIGRpYWxvZyBzZWN0aW9uICovXG4jY29uZmlybV9fZGlhbG9ne1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpOyAqL1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jY29uZmlybV9fZGlhbG9nPnNwYW4ge1xuICAgIC8qIFN0eWxpbmcgZm9yIGZvcm0gbGFiZWxzICovXG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuMnJlbTtcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xufVxuXG4vKiBNb3ZlIGRpYWxvZyAqL1xuI2l0ZW1fX21vdmUtZGlhbG9ne1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpOyAqL1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jaXRlbV9fbW92ZS1kaWFsb2cgZGl2e1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNpdGVtX19tb3ZlLWRpYWxvZyBzZWxlY3R7XG4gICAgd2lkdGg6IDIwMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2RpYWxvZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsMkNBQTJDO0lBQzNDLDhCQUE4QjtJQUM5Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IseUNBQXlDO0lBQ3pDLDhCQUE4QjtJQUM5Qiw0QkFBNEI7QUFDaEM7O0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0ksMkJBQTJCO0lBQzNCLCtDQUErQztJQUMvQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFDQUFxQztBQUN6Qzs7QUFFQSx3QkFBd0I7QUFDeEI7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDJDQUEyQztJQUMzQyx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwrQ0FBK0M7QUFDbkQ7O0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0ksK0NBQStDO0lBQy9DLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixxQ0FBcUM7QUFDekM7O0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksK0NBQStDO0lBQy9DLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpYWxvZ3tcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGFuaW1hdGlvbjpmYWRlSW4gbGluZWFyIC4ycztcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcHtcXG4gICAgYmFja2dyb3VuZDogIzMzMzMzMzM1O1xcbiAgICBhbmltYXRpb246ZmFkZUluIGxpbmVhciAuMnM7XFxufVxcblxcbmRpYWxvZ1tjbG9zaW5nXXtcXG4gICAgYW5pbWF0aW9uOmZhZGVPdXQgbGluZWFyIC4ycztcXG59XFxuXFxuZGlhbG9nIGRpdiB7XFxuICAgIC8qIFN0eWxpbmcgZm9yIGZvcm0gZGl2cyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbn1cXG5cXG5kaWFsb2cgaW5wdXQge1xcbiAgICAvKiBTdHlsaW5nIGZvciBmb3JtIGlucHV0cyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDAgLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcXG59XFxuXFxuZGlhbG9nIGlucHV0OmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5kaWFsb2cgbGFiZWwge1xcbiAgICAvKiBTdHlsaW5nIGZvciBmb3JtIGxhYmVscyAqL1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxufVxcblxcbmRpYWxvZyB0ZXh0YXJlYSB7XFxuICAgIC8qIFN0eWxpbmcgZm9yIGZvcm0gdGV4dGFyZWFzICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBwYWRkaW5nOiAuMnJlbSAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbn1cXG5cXG5kaWFsb2cgdGV4dGFyZWE6Zm9jdXN7XFxuICAgIG91dGxpbmU6bm9uZTtcXG59XFxuXFxuZGlhbG9nIHNlbGVjdDpmb2N1c3tcXG4gICAgb3V0bGluZTpub25lXFxufVxcblxcbmRpYWxvZyAuYnV0dG9ucyB7XFxuICAgIC8qIFN0eWxpbmcgZm9yIGJ1dHRvbiBjb250YWluZXIgKi9cXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG5kaWFsb2cgLmFkZF9fYnRuIHtcXG4gICAgLyogU3R5bGluZyBmb3IgYWRkIGJ1dHRvbiAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbmRpYWxvZyAuY2xvc2VfX2J0biB7XFxuICAgIC8qIFN0eWxpbmcgZm9yIGNsb3NlIGJ1dHRvbiAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWxldGUtYnRuLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xcbiAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBQcm9qZWN0IERpYWxvZyBzZWN0aW9uICovXFxuI3Byb2plY3RfX2FkZC1kaWFsb2cge1xcbiAgICAvKiBTdHlsaW5nIGZvciB0aGUgZGlhbG9nICovXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpOyAqL1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0X19hZGQtZm9ybXtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIEl0ZW0gZGlhbG9nIHNlY3Rpb24gKi9cXG4jaXRlbV9fYWRkLWRpYWxvZyB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLTIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7ICovXFxufVxcblxcbiNpdGVtX19hZGQtZGlhbG9nIC5zZWxlY3RfX2l0ZW0tZm9ybSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jaXRlbV9fYWRkLWRpYWxvZyAuc2VsZWN0X19pdGVtLWZvcm0gc2VsZWN0IHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgcGFkZGluZzogMCAwLjI1cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxufVxcblxcbiNpdGVtX19hZGQtZGlhbG9nPmZvcm0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbiNpdGVtX19tb3ZlLWRpYWxvZyBzZWxlY3QsXFxuI2l0ZW1fX2FkZC1kaWFsb2c+Zm9ybT5kaXY+c2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDAgMC4yNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4jaXRlbV9fYWRkLWRpYWxvZyA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jaXRlbV9fYWRkLWRpYWxvZyA+IGRpdiA+IGxhYmVse1xcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4jaXRlbV9fYWRkLWRpYWxvZz5kaXY+c2VsZWN0IHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgcGFkZGluZzogMCAwLjI1cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxufVxcblxcbi8qIEVkaXQgZGlhbG9nIHNlY3Rpb24gKi9cXG4jaXRlbV9fZWRpdC1kaWFsb2d7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLTIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7ICovXFxufVxcblxcbi8qIENvbmZpcm0gZGlhbG9nIHNlY3Rpb24gKi9cXG4jY29uZmlybV9fZGlhbG9ne1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTsgKi9cXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNjb25maXJtX19kaWFsb2c+c3BhbiB7XFxuICAgIC8qIFN0eWxpbmcgZm9yIGZvcm0gbGFiZWxzICovXFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcXG59XFxuXFxuLyogTW92ZSBkaWFsb2cgKi9cXG4jaXRlbV9fbW92ZS1kaWFsb2d7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpOyAqL1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2l0ZW1fX21vdmUtZGlhbG9nIGRpdntcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNpdGVtX19tb3ZlLWRpYWxvZyBzZWxlY3R7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBoZWFkZXJ7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZzogMCAuMjVyZW07XG4gICAgZmxleC1ncm93OiA0O1xufVxuXG5oZWFkZXIgLmxvZ297XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaGVhZGVyIC5sb2dvIGl7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbmhlYWRlciAubWVudV9fYnRuOmhvdmVyLFxuaGVhZGVyIC5hZGRfX2J0bjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdCFpbXBvcnRhbnQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVye1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogMCAuMjVyZW07XFxuICAgIGZsZXgtZ3JvdzogNDtcXG59XFxuXFxuaGVhZGVyIC5sb2dve1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciAubG9nbyBpe1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuaGVhZGVyIC5tZW51X19idG46aG92ZXIsXFxuaGVhZGVyIC5hZGRfX2J0bjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0IWltcG9ydGFudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBUT0RPUyovXG5cbi50by1kbyxcbi5ub3Rle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLXdpZHRoOiA3MCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYW5pbWF0aW9uOmZhZGVJbiBsaW5lYXIgLjNzO1xufVxuXG4udG8tZG9bY2xvc2luZ10sXG4ubm90ZVtjbG9zaW5nXXsgICAgXG4gICAgYW5pbWF0aW9uOiBmYWRlT3V0IGxpbmVhciAuM3M7ICAgIFxufVxuXG4udG8tZG86aG92ZXIsXG4ubm90ZTpob3ZlcntcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctY29sb3IpIDVweCA1cHggMTBweDtcbn1cblxuLnRvLWRvIC5jaGVja2JveHtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7XG4gICAgZmxleC1ncm93OiAwO1xufVxuXG4udG8tZG8gLnRpdGxle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLXdpZHRoOiA1MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcbiAgICBmbGV4LWdyb3c6IDIwO1xufVxuXG4udG8tZG8gLnRpdGxlIHNwYW4sXG4ubm90ZSAudGl0bGUgc3BhbntcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLm5vdGUgLnRpdGxle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLXdpZHRoOiA1MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcbiAgICBmbGV4LWdyb3c6IDU7XG59XG5cbi50by1kbyAuY2hlY2tib3ggaW5wdXQ6aG92ZXIsXG4udG8tZG8gLnRpdGxlOmhvdmVyLFxuLm5vdGUgLnRpdGxlOmhvdmVye1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuXG4udG8tZG8gLmJ1dHRvbnMsXG4ubm90ZSAuYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgZ2FwOiAxcmVtO1xuICAgIG1pbi13aWR0aDogMzAlO1xuICAgIG1heC13aWR0aDogNDAlO1xufVxuXG5cbi50by1kbyAuYnV0dG9ucyBidXR0b24sXG4ubm90ZSAuYnV0dG9ucyBidXR0b25cbiAgICB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4udG8tZG8gLmJ1dHRvbnMgYnV0dG9uOmhvdmVyLFxuLm5vdGUgLmJ1dHRvbnMgYnV0dG9uOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0taG92ZXItdGV4dC1jb2xvcik7XG59XG5cbi50by1kbyAucHJpb3JpdHlfX2J0bi5wcmlvcml0eV9fbG93OmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpICFpbXBvcnRhbnQ7XG59XG4udG8tZG8gLnByaW9yaXR5X19idG4ucHJpb3JpdHlfX21lZGl1bTpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbWVkaXVtLWNvbG9yKSAhaW1wb3J0YW50O1xufVxuLnRvLWRvIC5wcmlvcml0eV9fYnRuLnByaW9yaXR5X19oaWdoOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKSAhaW1wb3J0YW50O1xufVxuXG4vKiBDSEVDS0JPWCAqL1xuaW5wdXRbdHlwZT0nY2hlY2tib3gnXXtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOjA7XG4gICAgZm9udDppbmhlcml0O1xuICAgIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRlci1ob3Zlci1jb2xvcik7XG4gICAgd2lkdGg6IDEuMnJlbTtcbiAgICBoZWlnaHQ6MS4ycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpob3ZlcntcbiAgICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLWhlYWRlci1ob3Zlci1jb2xvcilcbn1cblxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAwLjZyZW07XG4gICAgaGVpZ2h0OiAwLjZyZW07XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNpdGlvbjogLjEycyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xufVxuXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZXtcbiAgICB0cmFuc2Zvcm06c2NhbGUoMSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvaXRlbS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsU0FBUzs7QUFFVDs7SUFFSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLCtDQUErQztJQUMvQyxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsK0NBQStDO0lBQy9DLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxjQUFjO0lBQ2QsY0FBYztBQUNsQjs7O0FBR0E7OztJQUdJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DO0FBQ0E7SUFDSSw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQSxhQUFhO0FBQ2I7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUT0RPUyovXFxuXFxuLnRvLWRvLFxcbi5ub3Rle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGFuaW1hdGlvbjpmYWRlSW4gbGluZWFyIC4zcztcXG59XFxuXFxuLnRvLWRvW2Nsb3NpbmddLFxcbi5ub3RlW2Nsb3NpbmddeyAgICBcXG4gICAgYW5pbWF0aW9uOiBmYWRlT3V0IGxpbmVhciAuM3M7ICAgIFxcbn1cXG5cXG4udG8tZG86aG92ZXIsXFxuLm5vdGU6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1jb2xvcikgNXB4IDVweCAxMHB4O1xcbn1cXG5cXG4udG8tZG8gLmNoZWNrYm94e1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcXG4gICAgZmxleC1ncm93OiAwO1xcbn1cXG5cXG4udG8tZG8gLnRpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcXG4gICAgZmxleC1ncm93OiAyMDtcXG59XFxuXFxuLnRvLWRvIC50aXRsZSBzcGFuLFxcbi5ub3RlIC50aXRsZSBzcGFue1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLm5vdGUgLnRpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcXG4gICAgZmxleC1ncm93OiA1O1xcbn1cXG5cXG4udG8tZG8gLmNoZWNrYm94IGlucHV0OmhvdmVyLFxcbi50by1kbyAudGl0bGU6aG92ZXIsXFxuLm5vdGUgLnRpdGxlOmhvdmVye1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLnRvLWRvIC5idXR0b25zLFxcbi5ub3RlIC5idXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGdhcDogMXJlbTtcXG4gICAgbWluLXdpZHRoOiAzMCU7XFxuICAgIG1heC13aWR0aDogNDAlO1xcbn1cXG5cXG5cXG4udG8tZG8gLmJ1dHRvbnMgYnV0dG9uLFxcbi5ub3RlIC5idXR0b25zIGJ1dHRvblxcbiAgICB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLnRvLWRvIC5idXR0b25zIGJ1dHRvbjpob3ZlcixcXG4ubm90ZSAuYnV0dG9ucyBidXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWhvdmVyLXRleHQtY29sb3IpO1xcbn1cXG5cXG4udG8tZG8gLnByaW9yaXR5X19idG4ucHJpb3JpdHlfX2xvdzpob3ZlcntcXG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcikgIWltcG9ydGFudDtcXG59XFxuLnRvLWRvIC5wcmlvcml0eV9fYnRuLnByaW9yaXR5X19tZWRpdW06aG92ZXJ7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWRpdW0tY29sb3IpICFpbXBvcnRhbnQ7XFxufVxcbi50by1kbyAucHJpb3JpdHlfX2J0bi5wcmlvcml0eV9faGlnaDpob3ZlcntcXG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIENIRUNLQk9YICovXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXXtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGZvbnQ6aW5oZXJpdDtcXG4gICAgY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRlci1ob3Zlci1jb2xvcik7XFxuICAgIHdpZHRoOiAxLjJyZW07XFxuICAgIGhlaWdodDoxLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmhvdmVye1xcbiAgICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLWhlYWRlci1ob3Zlci1jb2xvcilcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3Jle1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDAuNnJlbTtcXG4gICAgaGVpZ2h0OiAwLjZyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogLjEycyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmV7XFxuICAgIHRyYW5zZm9ybTpzY2FsZSgxKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubWVudXtcbiAgICBtaW4td2lkdGg6IDEyJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLTIpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXRhYi1ib3JkZXItY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgLyogYW5pbWF0aW9uOiBzbGlkZUluTGVmdCBsaW5lYXIgLjNzOyAqL1xufVxuXG4ubWVudVtjbG9zaW5nXXtcbiAgICBhbmltYXRpb246IHNsaWRlT3V0TGVmdCBsaW5lYXIgLjNzO1xufVxuXG4ubWVudV9fdG9we1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5tZW51X190b3AgPiBkaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWFyY2hfX2JhcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgLyogcGFkZGluZzogMCAwLjI1cmVtOyAqL1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5zZWFyY2hfX2JhciA+IGlucHV0e1xuICAgIG1pbi13aWR0aDogNTAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XG59XG5cbi5zZWFyY2hfX2JhciA+IGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6bm9uZTtcbn1cblxuLnNlYXJjaF9fYmFyID4gZGl2e1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zZWFyY2hfX2JhciA+IGRpdjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWhvdmVyLXRleHQtY29sb3IpXG59XG5cbi5tZW51X19pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbn1cblxuLm1lbnVfX2l0ZW06aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6dmFyKC0taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5tZW51X19pdGVtIHNwYW57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3R7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOjA7XG59XG5cbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3Q6aG92ZXJ7XG4gICAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBjb2xvcjppbmhlcml0O1xufVxuXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0ID4gZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCA+IGRpdjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OjA7XG59XG5cbi5hcnJvdyBpe1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWRhcmspICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgdWx7XG4gICAgbWFyZ2luOiAxcmVtIDAgMCAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgdWwgbGl7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xuICAgIHBhZGRpbmc6LjI1cmVtIDAuNXJlbTtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC8qIGJhY2tncm91bmQ6IHZhcigtLW5hdi1ib3JkZXItY29sb3IpOyAqL1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWRhcmspO1xufVxuXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0IHVsIGxpIHNwYW57XG4gICAgbWF4LXdpZHRoOiA1cmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgdWwgbGkgc3Bhbjpob3ZlcntcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cblxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCB1bCBsaSAuYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuM3JlbTtcbn1cblxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCB1bCBsaSAuYnV0dG9ucyBidXR0b257XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1kYXJrKTtcbiAgICBmb250LXNpemU6MS4ycmVtO1xufVxuXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0IHVsIGxpIC5idXR0b25zIGJ1dHRvbjpob3ZlcntcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICBjb2xvcjp2YXIoLS1ob3Zlci10ZXh0LWNvbG9yKVxufVxuXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0IHVsIGxpOmhvdmVye1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1jb2xvcikgNXB4IDVweCAxMHB4O1xuXG59XG5cbi5wcm9qZWN0X19hZGQtYnRue1xuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9qZWN0X19hZGQtYnRuOmhvdmVye1xuICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByb2plY3RfX2FkZC1idG4gYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAwIC41cmVtO1xufVxuXG4ucHJvamVjdF9fYWRkLWJ0biBidXR0b246aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1jb2xvcikgNXB4IDVweCAxMHB4O1xuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51X19ib3R7XG4gICAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL21lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztJQUNkLHFDQUFxQztJQUNyQywrQ0FBK0M7SUFDL0MsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHlDQUF5QztJQUN6QyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87QUFDWDs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5Qix5Q0FBeUM7SUFDekMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0ksNENBQTRDOztBQUVoRDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLGtDQUFrQztJQUNsQywyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDRDQUE0QztJQUM1QyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1lbnV7XFxuICAgIG1pbi13aWR0aDogMTIlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLTIpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS10YWItYm9yZGVyLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxuICAgIC8qIGFuaW1hdGlvbjogc2xpZGVJbkxlZnQgbGluZWFyIC4zczsgKi9cXG59XFxuXFxuLm1lbnVbY2xvc2luZ117XFxuICAgIGFuaW1hdGlvbjogc2xpZGVPdXRMZWZ0IGxpbmVhciAuM3M7XFxufVxcblxcbi5tZW51X190b3B7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5tZW51X190b3AgPiBkaXZ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2VhcmNoX19iYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmF2LWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNGRkY7XFxuICAgIC8qIHBhZGRpbmc6IDAgMC4yNXJlbTsgKi9cXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnNlYXJjaF9fYmFyID4gaW5wdXR7XFxuICAgIG1pbi13aWR0aDogNTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxufVxcblxcbi5zZWFyY2hfX2JhciA+IGlucHV0OmZvY3Vze1xcbiAgICBvdXRsaW5lOm5vbmU7XFxufVxcblxcbi5zZWFyY2hfX2JhciA+IGRpdntcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnNlYXJjaF9fYmFyID4gZGl2OmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1ob3Zlci10ZXh0LWNvbG9yKVxcbn1cXG5cXG4ubWVudV9faXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xcbn1cXG5cXG4ubWVudV9faXRlbTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4ubWVudV9faXRlbSBzcGFue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0e1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItcmFkaXVzOjA7XFxufVxcblxcbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3Q6aG92ZXJ7XFxuICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICBjb2xvcjppbmhlcml0O1xcbn1cXG5cXG4ubWVudV9faXRlbS5wcm9qZWN0X19saXN0ID4gZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgPiBkaXY6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hcnJvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6MDtcXG59XFxuXFxuLmFycm93IGl7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWRhcmspICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgdWx7XFxuICAgIG1hcmdpbjogMXJlbSAwIDAgMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCB1bCBsaXtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XFxuICAgIHBhZGRpbmc6LjI1cmVtIDAuNXJlbTtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1uYXYtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIC8qIGJhY2tncm91bmQ6IHZhcigtLW5hdi1ib3JkZXItY29sb3IpOyAqL1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1kYXJrKTtcXG59XFxuXFxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCB1bCBsaSBzcGFue1xcbiAgICBtYXgtd2lkdGg6IDVyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgdWwgbGkgc3Bhbjpob3ZlcntcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgdWwgbGkgLmJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjNyZW07XFxufVxcblxcbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgdWwgbGkgLmJ1dHRvbnMgYnV0dG9ue1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItZGFyayk7XFxuICAgIGZvbnQtc2l6ZToxLjJyZW07XFxufVxcblxcbi5tZW51X19pdGVtLnByb2plY3RfX2xpc3QgdWwgbGkgLmJ1dHRvbnMgYnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgY29sb3I6dmFyKC0taG92ZXItdGV4dC1jb2xvcilcXG59XFxuXFxuLm1lbnVfX2l0ZW0ucHJvamVjdF9fbGlzdCB1bCBsaTpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWNvbG9yKSA1cHggNXB4IDEwcHg7XFxuXFxufVxcblxcbi5wcm9qZWN0X19hZGQtYnRue1xcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcm9qZWN0X19hZGQtYnRuOmhvdmVye1xcbiAgICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJvamVjdF9fYWRkLWJ0biBidXR0b257XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW5hdi1ib3JkZXItY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAgLjVyZW07XFxufVxcblxcbi5wcm9qZWN0X19hZGQtYnRuIGJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctY29sb3IpIDVweCA1cHggMTBweDtcXG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLm1lbnVfX2JvdHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubmF2X19iYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS10YWItYm9yZGVyLWNvbG9yKTtcbiAgICAvKiBhbmltYXRpb246IHNsaWRlSW5MZWZ0IGxpbmVhciAuM3M7ICovXG59XG5cbi5uYXZfX2JhcltjbG9zaW5nXXtcbiAgICBhbmltYXRpb246IHNsaWRlT3V0TGVmdCBsaW5lYXIgLjNzO1xufVxuXG4ubmF2X19pdGVtc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uaW5ib3hfX25hdiBpe1xuICAgIGNvbG9yOiB2YXIoLS1pbmJveC1jb2xvcik7XG59XG5cbi50b2RheV9fbmF2IGl7XG4gICAgY29sb3I6dmFyKC0tdG9kYXktY29sb3IpXG59XG5cbi5wcm9qZWN0X19uYXYgaXtcbiAgICBjb2xvcjp2YXIoLS1wcm9qZWN0LWNvbG9yKVxufVxuXG4uaGlzdG9yeV9fbmF2IGl7XG4gICAgY29sb3I6dmFyKC0taGlzdG9yeS1jb2xvcilcbn1cblxuLmFwcGVhcmFuY2VfX21vZGUgaSxcbi5tZW51X19ib3QgaXtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtbW9kZS1jb2xvcik7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbmF2LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLCtDQUErQztJQUMvQyx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTs7SUFFSSw4QkFBOEI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdl9fYmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXRhYi1ib3JkZXItY29sb3IpO1xcbiAgICAvKiBhbmltYXRpb246IHNsaWRlSW5MZWZ0IGxpbmVhciAuM3M7ICovXFxufVxcblxcbi5uYXZfX2JhcltjbG9zaW5nXXtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZU91dExlZnQgbGluZWFyIC4zcztcXG59XFxuXFxuLm5hdl9faXRlbXN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmluYm94X19uYXYgaXtcXG4gICAgY29sb3I6IHZhcigtLWluYm94LWNvbG9yKTtcXG59XFxuXFxuLnRvZGF5X19uYXYgaXtcXG4gICAgY29sb3I6dmFyKC0tdG9kYXktY29sb3IpXFxufVxcblxcbi5wcm9qZWN0X19uYXYgaXtcXG4gICAgY29sb3I6dmFyKC0tcHJvamVjdC1jb2xvcilcXG59XFxuXFxuLmhpc3RvcnlfX25hdiBpe1xcbiAgICBjb2xvcjp2YXIoLS1oaXN0b3J5LWNvbG9yKVxcbn1cXG5cXG4uYXBwZWFyYW5jZV9fbW9kZSBpLFxcbi5tZW51X19ib3QgaXtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LW1vZGUtY29sb3IpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbmNvbnNvbGF0YSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0tYmFja2dyb3VuZC1jb2xvci0xOiAjRjNFRUVBO1xuICAgIC0tYmFja2dyb3VuZC1jb2xvci0yOiAjRUFFNEUwO1xuICAgIC0taGVhZGVyLWNvbG9yOiAjNzc2QjVEO1xuICAgIC0taGVhZGVyLWhvdmVyLWNvbG9yOiAjNWE1MTQ3O1xuICAgIC0tdGFiLWJvcmRlci1jb2xvcjogI0IwQTY5NTtcbiAgICAtLW5hdi1ib3JkZXItY29sb3I6ICM1MTQ5M0Y7XG4gICAgLS10ZXh0LWNvbG9yLWxpZ2h0OiAjRjNFRUVBO1xuICAgIC0tdGV4dC1jb2xvci1kYXJrOiAjMzMzMzMzO1xuICAgIC0tdGV4dC1jb2xvci1uYXY6ICM1MTQ5M0Y7XG4gICAgLS1pbmJveC1jb2xvcjogIzc4QUNDMjtcbiAgICAtLXRvZGF5LWNvbG9yOiAjNTY4NTRCO1xuICAgIC0tcHJvamVjdC1jb2xvcjogIzUwMkFCQztcbiAgICAtLWhpc3RvcnktY29sb3I6ICNFMTUxNkI7XG4gICAgLS1ob3Zlci10ZXh0LWNvbG9yOiAjQzI5Nzc4O1xuICAgIC0taG92ZXItYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICAtLXByaW9yaXR5LWxvdy1jb2xvcjogIzU2ODU0QjtcbiAgICAtLXByaW9yaXR5LW1lZGl1bS1jb2xvcjogI2RhYmUzNjtcbiAgICAtLXByaW9yaXR5LWhpZ2gtY29sb3I6ICNFMTUxNTE7XG4gICAgLS1lZGl0LWJ0bi1jb2xvcjogIzc4QUNDMjtcbiAgICAtLWRlbGV0ZS1idG4tY29sb3I6ICNFMTUxNTE7XG4gICAgLS1saWdodC1tb2RlLWNvbG9yOiAjQjg5QjAxO1xuICAgIC0tc2hhZG93LWNvbG9yOiAjYzZjNmM2O1xufVxuXG5ib2R5e1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWRhcmspO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3ItMSk7XG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cbn1cbi8qIENvbW1vbiAqL1xuLmRme1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cblxuLmQtb2Zme1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmljb25fX2JpZ3tcbiAgICB3aWR0aDogMi41cmVtO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uaWNvbl9fYmlnOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0taG92ZXItdGV4dC1jb2xvcik7XG59XG5cbi5pY29uX19zbWFsbHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJpb3JpdHlfX2J0bi5wcmlvcml0eV9fbG93e1xuICAgIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xufVxuXG4ucHJpb3JpdHlfX2J0bi5wcmlvcml0eV9fbWVkaXVte1xuICAgIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWRpdW0tY29sb3IpO1xufVxuXG4ucHJpb3JpdHlfX2J0bi5wcmlvcml0eV9faGlnaHtcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcik7XG59XG5cbi5idG57XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XG59XG5cbi5idG46aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IC44O1xufVxuXG4ucm90YXRlLTE4MHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtaW4taGVpZ2h0OiA5NXZoO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICB0byB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0IHtcbiAgICBmcm9tIHsgb3BhY2l0eTogMTsgfVxuICAgIHRvIHsgb3BhY2l0eTogMDsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5MZWZ0IHtcbiAgICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxuICAgIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVPdXRMZWZ0e1xuICAgIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xuICAgIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cbiAgICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0UmlnaHQge1xuICAgIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgfVxufVxuXG4uZmFkZUlue1xuICAgIGFuaW1hdGlvbjpmYWRlSW4gbGluZWFyIC4zcztcbn1cblxuLmZhZGVPdXR7XG4gICAgYW5pbWF0aW9uOiBmYWRlT3V0IGxpbmVhciAuM3M7XG59XG5cbi5zbGlkZUluTGVmdHtcbiAgICBhbmltYXRpb246IHNsaWRlSW5MZWZ0IGxpbmVhciAuM3M7XG59XG5cbi5zbGlkZU91dExlZnR7XG4gICAgYW5pbWF0aW9uOiBzbGlkZU91dExlZnQgbGluZWFyIC4zcztcbn1cblxuLnNsaWRlSW5SaWdodHtcbiAgICBhbmltYXRpb246IHNsaWRlSW5SaWdodCBsaW5lYXIgLjNzO1xufVxuXG4uc2xpZGVPdXRSaWdodHtcbiAgICBhbmltYXRpb246IHNsaWRlT3V0UmlnaHQgbGluZWFyIC4zcztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IscUNBQXFDO0lBQ3JDLHNCQUFzQjtBQUMxQjtBQUNBLFdBQVc7QUFDWDtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksT0FBTyxVQUFVLEVBQUU7SUFDbkIsS0FBSyxVQUFVLEVBQUU7QUFDckI7O0FBRUE7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixLQUFLLFVBQVUsRUFBRTtBQUNyQjs7QUFFQTtJQUNJLE9BQU8sNEJBQTRCLEVBQUU7SUFDckMsS0FBSyx3QkFBd0IsRUFBRTtBQUNuQzs7QUFFQTtJQUNJLE9BQU8sd0JBQXdCLEVBQUU7SUFDakMsS0FBSyw0QkFBNEIsRUFBRTtBQUN2Qzs7QUFFQTtJQUNJLE9BQU8sMkJBQTJCLEVBQUU7SUFDcEMsS0FBSyx3QkFBd0IsRUFBRTtBQUNuQzs7QUFFQTtJQUNJLE9BQU8sd0JBQXdCLEVBQUU7SUFDakMsS0FBSywyQkFBMkIsRUFBRTtBQUN0Qzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbmNvbnNvbGF0YSZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLTE6ICNGM0VFRUE7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvci0yOiAjRUFFNEUwO1xcbiAgICAtLWhlYWRlci1jb2xvcjogIzc3NkI1RDtcXG4gICAgLS1oZWFkZXItaG92ZXItY29sb3I6ICM1YTUxNDc7XFxuICAgIC0tdGFiLWJvcmRlci1jb2xvcjogI0IwQTY5NTtcXG4gICAgLS1uYXYtYm9yZGVyLWNvbG9yOiAjNTE0OTNGO1xcbiAgICAtLXRleHQtY29sb3ItbGlnaHQ6ICNGM0VFRUE7XFxuICAgIC0tdGV4dC1jb2xvci1kYXJrOiAjMzMzMzMzO1xcbiAgICAtLXRleHQtY29sb3ItbmF2OiAjNTE0OTNGO1xcbiAgICAtLWluYm94LWNvbG9yOiAjNzhBQ0MyO1xcbiAgICAtLXRvZGF5LWNvbG9yOiAjNTY4NTRCO1xcbiAgICAtLXByb2plY3QtY29sb3I6ICM1MDJBQkM7XFxuICAgIC0taGlzdG9yeS1jb2xvcjogI0UxNTE2QjtcXG4gICAgLS1ob3Zlci10ZXh0LWNvbG9yOiAjQzI5Nzc4O1xcbiAgICAtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIC0tcHJpb3JpdHktbG93LWNvbG9yOiAjNTY4NTRCO1xcbiAgICAtLXByaW9yaXR5LW1lZGl1bS1jb2xvcjogI2RhYmUzNjtcXG4gICAgLS1wcmlvcml0eS1oaWdoLWNvbG9yOiAjRTE1MTUxO1xcbiAgICAtLWVkaXQtYnRuLWNvbG9yOiAjNzhBQ0MyO1xcbiAgICAtLWRlbGV0ZS1idG4tY29sb3I6ICNFMTUxNTE7XFxuICAgIC0tbGlnaHQtbW9kZS1jb2xvcjogI0I4OUIwMTtcXG4gICAgLS1zaGFkb3ctY29sb3I6ICNjNmM2YzY7XFxufVxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOjIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLTEpO1xcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcbn1cXG4vKiBDb21tb24gKi9cXG4uZGZ7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG59XFxuXFxuLmQtb2Zme1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pY29uX19iaWd7XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5pY29uX19iaWc6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1ob3Zlci10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmljb25fX3NtYWxse1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eV9fYnRuLnByaW9yaXR5X19sb3d7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xcbn1cXG5cXG4ucHJpb3JpdHlfX2J0bi5wcmlvcml0eV9fbWVkaXVte1xcbiAgICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbWVkaXVtLWNvbG9yKTtcXG59XFxuXFxuLnByaW9yaXR5X19idG4ucHJpb3JpdHlfX2hpZ2h7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKTtcXG59XFxuXFxuLmJ0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4uYnRuOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IC44O1xcbn1cXG5cXG4ucm90YXRlLTE4MHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWluLWhlaWdodDogOTV2aDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxcbiAgICB0byB7IG9wYWNpdHk6IDE7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0IHtcXG4gICAgZnJvbSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgdG8geyBvcGFjaXR5OiAwOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xcbiAgICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxcbiAgICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0TGVmdHtcXG4gICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xcbiAgICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB9XFxuICAgIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVPdXRSaWdodCB7XFxuICAgIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXG4gICAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cXG59XFxuXFxuLmZhZGVJbntcXG4gICAgYW5pbWF0aW9uOmZhZGVJbiBsaW5lYXIgLjNzO1xcbn1cXG5cXG4uZmFkZU91dHtcXG4gICAgYW5pbWF0aW9uOiBmYWRlT3V0IGxpbmVhciAuM3M7XFxufVxcblxcbi5zbGlkZUluTGVmdHtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUluTGVmdCBsaW5lYXIgLjNzO1xcbn1cXG5cXG4uc2xpZGVPdXRMZWZ0e1xcbiAgICBhbmltYXRpb246IHNsaWRlT3V0TGVmdCBsaW5lYXIgLjNzO1xcbn1cXG5cXG4uc2xpZGVJblJpZ2h0e1xcbiAgICBhbmltYXRpb246IHNsaWRlSW5SaWdodCBsaW5lYXIgLjNzO1xcbn1cXG5cXG4uc2xpZGVPdXRSaWdodHtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZU91dFJpZ2h0IGxpbmVhciAuM3M7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250ZW50LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZXRhaWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZXRhaWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RpYWxvZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RpYWxvZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pdGVtLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaXRlbS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwcm9qZWN0IGZyb20gXCIuLi9wcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIGhpc3RvcnkoKXtcbiAgICBjb25zdCBoaXN0b3J5ID0gT2JqZWN0LmNyZWF0ZShwcm9qZWN0KCkpXG4gICAgaGlzdG9yeS5jaGFuZ2VWYWx1ZSgnSGlzdG9yeScsICdZb3UgY2FuIHNlZSBhbGwgeW91ciBmaW5pc2hlZCB0b2RvcyBoZXJlJylcblxuICAgIHJldHVybiBoaXN0b3J5XG59XG5cbmNvbnN0IGhpc3RvcnlPYmogPSBoaXN0b3J5KClcbmV4cG9ydCBkZWZhdWx0IGhpc3RvcnlPYmoiLCJpbXBvcnQgcHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdFwiO1xuaW1wb3J0IHRvZG8gZnJvbSBcIi4uL3RvZG9cIlxuaW1wb3J0IG5vdGUgZnJvbSBcIi4uL25vdGVcIlxuXG5jb25zdCB0b2RvMVN0YXJ0RGF0ZSA9IG5ldyBEYXRlKClcbmNvbnN0IHRvZG8xRHVlRGF0ZSA9IG5ldyBEYXRlKClcbnRvZG8xRHVlRGF0ZS5zZXRGdWxsWWVhcih0b2RvMUR1ZURhdGUuZ2V0RnVsbFllYXIoKSArIDEpXG5cbmNvbnN0IGluYm94ID0gKCkgPT4ge1xuICAgIGNvbnN0IGluYm94T2JqID0gT2JqZWN0LmNyZWF0ZShwcm9qZWN0KCkpXG4gICAgaW5ib3hPYmouY2hhbmdlVmFsdWUoJ0luYm94JywgJ1doZXJlIHlvdSBzdG9yZSBhbGwgeW91ciBuZXcgc3R1ZmZzJylcblxuICAgIGNvbnN0IHRvZG8xID0gdG9kbygpXG4gICAgXG4gICAgdG9kbzEuY2hhbmdlVmFsdWUoJ0NyZWF0ZSB5b3VyIGZpcnN0IHByb2plY3QhJywgJ0NsaWNrIHRoZSBhZGQgYnV0dG9uIG9uIG91ciBtZW51JywgdG9kbzFTdGFydERhdGUsIHRvZG8xRHVlRGF0ZSwgJ2hpZ2gnKVxuXG4gICAgY29uc3Qgbm90ZTEgPSBub3RlKClcbiAgICBub3RlMS5jaGFuZ2VWYWx1ZSgnVG9kYXkgaXMgYSB3b25kZXJmdWwgZGF5IScsICdEbyBzb21ldGhpbmcgaW50ZXJlc3RpbmcgdG9kYXkhJylcblxuICAgIGluYm94T2JqLmFkZEl0ZW0odG9kbzEpXG4gICAgaW5ib3hPYmouYWRkSXRlbShub3RlMSlcblxuICAgIHJldHVybiBpbmJveE9ialxufVxuXG5jb25zdCBpbmJveE9iaiA9IGluYm94KClcblxuZXhwb3J0IGRlZmF1bHQgaW5ib3hPYmoiLCJpbXBvcnQgcHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWFyY2hSZXN1bHQoKXtcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRPYmogPSBPYmplY3QuY3JlYXRlKHByb2plY3QoKSlcbiAgICBzZWFyY2hSZXN1bHRPYmouY2hhbmdlVmFsdWUoJ1NlYXJjaCBSZXN1bHQnLCAnV2hlcmUgeW91IGNhbiBzZWUgeW91ciBzZWFyY2ggcmVzdWx0cyEnKVxuICAgIHJldHVybiBzZWFyY2hSZXN1bHRPYmpcbn1cblxuIiwiaW1wb3J0IHByb2plY3QgZnJvbSAnLi4vcHJvamVjdCdcblxuY29uc3QgdG9kYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kYXlPYmogPSBPYmplY3QuY3JlYXRlKHByb2plY3QoKSlcblxuICAgIHRvZGF5T2JqLmNoYW5nZVZhbHVlKCdUb2RheScsIGBZb3UgY2FuIHN0b3JlIHlvdXIgdG9kYXkncyB0by1kb3MgaGVyZWApXG5cbiAgICByZXR1cm4gdG9kYXlPYmpcbn1cblxuY29uc3QgdG9kYXlPYmogPSB0b2RheSgpXG5cbmV4cG9ydCBkZWZhdWx0IHRvZGF5T2JqIiwiaW1wb3J0IGNyZWF0ZVRvZG8gZnJvbSBcIi4vY3JlYXRlVG9kb1wiXG5pbXBvcnQgY3JlYXRlTm90ZSBmcm9tIFwiLi9jcmVhdGVOb3RlXCJcbmltcG9ydCBhcHBlbmRDaGlsZHJlbiBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2FwcGVuZENoaWxkcmVuXCJcbmltcG9ydCBjcmVhdGVEaXZXaXRoQ2xhc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9jcmVhdGVEaXZXaXRoQ2xhc3NcIlxuaW1wb3J0IGNyZWF0ZUZpbmlzaGVkVG9kbyBmcm9tIFwiLi9jcmVhdGVGaW5pc2hlZFRvZG9cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb250ZW50KHByaikge1xuICAgIGNvbnN0IHRpdGxlID0gcHJqLmdldFZhbHVlKCkudGl0bGVcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ2NvbnRlbnQnKVxuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ2NvbnRlbnRfX3RpdGxlJylcbiAgICBjb25zdCB0aXRsZUgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIHRpdGxlSDEuaW5uZXJIVE1MID0gdGl0bGVcblxuICAgIGNvbnN0IHRpdGxlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgIHRpdGxlSWNvbi5jbGFzc0xpc3QuYWRkKCdyaS1pbmZvcm1hdGlvbi0yLWZpbGwnKVxuXG4gICAgY29uc3QgaXRlbURpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygnY29udGVudF9faXRlbXMnKVxuXG4gICAgY29uc3QgaXRlbXMgPSBwcmouZ2V0QWxsSXRlbSgpXG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgaXRlbVR5cGUgPSBpdGVtLmdldFR5cGUoKVxuICAgICAgICBpZiAocHJqLmdldFZhbHVlKCkudGl0bGUgPT09ICdIaXN0b3J5Jyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkZWQgZmluaXNoZWQgaXRlbScpXG4gICAgICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZpbmlzaGVkVG9kbyhpdGVtKSlcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gJ25vdGUnKSB7XG4gICAgICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGNyZWF0ZU5vdGUoaXRlbSkpXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09ICd0b2RvJykge1xuICAgICAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChjcmVhdGVUb2RvKGl0ZW0pKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGFwcGVuZENoaWxkcmVuKHRpdGxlRGl2LCBbdGl0bGVIMSwgdGl0bGVJY29uXSlcbiAgICBhcHBlbmRDaGlsZHJlbihjb250ZW50RGl2LCBbdGl0bGVEaXYsIGl0ZW1EaXZdKVxuXG4gICAgcmV0dXJuIGNvbnRlbnREaXZcbn1cblxuXG4iLCJpbXBvcnQgYXBwZW5kQ2hpbGRyZW4gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9hcHBlbmRDaGlsZHJlblwiXG5pbXBvcnQgY3JlYXRlRGl2V2l0aENsYXNzIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vY3JlYXRlRGl2V2l0aENsYXNzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGV0YWlsKG9iaikge1xuICAgIGNvbnN0IGRldGFpbCA9IG9iai5nZXRWYWx1ZSgpXG4gICAgY29uc3QgdGl0bGUgPSBkZXRhaWwudGl0bGVcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRldGFpbC5kZXNjcmlwdGlvblxuXG4gICAgY29uc3QgZGV0YWlsRGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdkZXRhaWwnLCAnZC1vZmYnKVxuXG4gICAgY29uc3QgdGl0bGVIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICB0aXRsZUgxLmlubmVySFRNTCA9IHRpdGxlXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkZXNjcmlwdGlvblAuaW5uZXJIVE1MID0gZGVzY3JpcHRpb25cblxuICAgIGNvbnN0IGRldGFpbExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvciAobGV0IGl0ZW0gaW4gZGV0YWlsKSB7XG4gICAgICAgIGlmIChpdGVtICE9PSAndGl0bGUnICYmIGl0ZW0gIT09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgICAgIHN3aXRjaChpdGVtKXtcbiAgICAgICAgICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsSXRlbS5pbm5lckhUTUwgPSBgPHN0cm9uZz5EYXRlIGNyZWF0ZWQ6IDwvc3Ryb25nPiAke2RldGFpbFtpdGVtXX1gXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnc3RhcnREYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsSXRlbS5pbm5lckhUTUwgPSBgPHN0cm9uZz5TdGFydCBkYXRlOiA8L3N0cm9uZz4gJHtkZXRhaWxbaXRlbV19YFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ2R1ZURhdGUnOlxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxJdGVtLmlubmVySFRNTCA9IGA8c3Ryb25nPkR1ZSBkYXRlOiA8L3N0cm9uZz4gJHtkZXRhaWxbaXRlbV19YFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ3ByaW9yaXR5JzpcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsSXRlbS5pbm5lckhUTUwgPSBgPHN0cm9uZz5Qcmlvcml0eTogPC9zdHJvbmc+ICR7ZGV0YWlsW2l0ZW1dfWBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdzdGF0dXMnOlxuICAgICAgICAgICAgICAgICAgICBpZihkZXRhaWxbaXRlbV0gPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsSXRlbS5pbm5lckhUTUwgPSBgPHN0cm9uZz5TdGF0dXM6IDwvc3Ryb25nPiBGaW5pc2hlZGBcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxJdGVtLmlubmVySFRNTCA9IGA8c3Ryb25nPlN0YXR1czogPC9zdHJvbmc+IE9uLWdvaW5nYFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZXRhaWxMaXN0LmFwcGVuZENoaWxkKGRldGFpbEl0ZW0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2VfX2J0bicpXG4gICAgY2xvc2VCdG4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwicmktY2xvc2UtbGluZVwiPjwvaT5gXG5cbiAgICBhcHBlbmRDaGlsZHJlbihkZXRhaWxEaXYsIFtjbG9zZUJ0biwgdGl0bGVIMSwgZGVzY3JpcHRpb25QLCBkZXRhaWxMaXN0XSlcblxuICAgIHJldHVybiBkZXRhaWxEaXZcbn1cblxuIiwiaW1wb3J0IGFwcGVuZENoaWxkcmVuIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vYXBwZW5kQ2hpbGRyZW5cIlxuaW1wb3J0IGNyZWF0ZURpdldpdGhDbGFzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2NyZWF0ZURpdldpdGhDbGFzc1wiXG5pbXBvcnQgcHJvamVjdENvbnRhaW5lck9iaiBmcm9tICcuLi9wcm9qZWN0Q29udGFpbmVyJ1xuaW1wb3J0IHtnZXRDdXJyZW50U3RhdGV9IGZyb20gJy4uLy4uL3V0aWxzL3N0YXRlJ1xuXG4vLyBQcm9qZWN0IGFkZCBkaWFsb2dcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpXG4gICAgZGlhbG9nLmlkID0gJ3Byb2plY3RfX2FkZC1kaWFsb2cnXG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5pZCA9ICdwcm9qZWN0X19hZGQtZm9ybSdcbiAgICBmb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlByb2plY3QgVGl0bGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiBjbGFzcz1cInByb2plY3RfX3RpdGxlLWlucHV0XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGlkPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBjbGFzcz1cInByb2plY3RfX2Rlcy1pbnB1dFwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcblxuICAgIGFwcGVuZENoaWxkcmVuKGZvcm0sIFtjcmVhdGVBZGRCdXR0b25EaXYoKV0pXG4gICAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICByZXR1cm4gZGlhbG9nXG59XG5cbi8vIEl0ZW0gYWRkIGRpYWxvZ1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUl0ZW1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbiAgICBkaWFsb2cuaWQgPSAnaXRlbV9fYWRkLWRpYWxvZydcblxuICAgIGNvbnN0IHNlbGVjdEl0ZW1Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgc2VsZWN0SXRlbUZvcm0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0X19pdGVtLWZvcm0nKVxuICAgIHNlbGVjdEl0ZW1Gb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW1cIj5DaG9vc2Ugd2hpY2ggaXRlbSB0byBjcmVhdGU6PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBuYW1lPVwiaXRlbVwiIGlkPVwiaXRlbVwiIGNsYXNzPVwic2VsZWN0X19pdGVtLWlucHV0XCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidG8tZG9cIj5Ub2RvPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm90ZVwiPk5vdGU8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+YFxuXG4gICAgY29uc3QgdG9kb0FkZEZvcm0gPSBjcmVhdGVUb2RvQWRkRm9ybSgpXG4gICAgY29uc3Qgbm90ZUFkZEZvcm0gPSBjcmVhdGVOb3RlQWRkRm9ybSgpXG5cbiAgICBhcHBlbmRDaGlsZHJlbihkaWFsb2csIFtzZWxlY3RJdGVtRm9ybSwgdG9kb0FkZEZvcm0sIG5vdGVBZGRGb3JtLCBjcmVhdGVQcm9qZWN0U2VsZWN0KCksIGNyZWF0ZUFkZEJ1dHRvbkRpdigpXSlcblxuICAgIHJldHVybiBkaWFsb2dcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0FkZEZvcm0oKSB7XG4gICAgY29uc3QgdG9kb0FkZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICB0b2RvQWRkRm9ybS5pZCA9ICd0b2RvX19hZGQtZm9ybSdcbiAgICB0b2RvQWRkRm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwidG9kb19fdGl0bGUtaW5wdXRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIHJlcXVpcmVkIGlkPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBjbGFzcz1cInRvZG9fX2Rlcy1pbnB1dFwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN0YXJ0RGF0ZVwiPlN0YXJ0IGRhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJzdGFydERhdGVcIiBpZD1cInN0YXJ0RGF0ZVwiIGNsYXNzPVwidG9kb19fc3RhcnQtaW5wdXRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlRGF0ZVwiPkR1ZSBkYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiIGlkPVwiZHVlRGF0ZVwiIGNsYXNzPVwidG9kb19fZHVlLWlucHV0XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJwcmlvcml0eVwiIGNsYXNzPVwidG9kb19fcHJpb3JpdHktaW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PmBcblxuICAgIGNvbnN0IHN0YXJ0RGF0ZUlucHV0ID0gdG9kb0FkZEZvcm0ucXVlcnlTZWxlY3RvcignI3N0YXJ0RGF0ZScpXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gdG9kb0FkZEZvcm0ucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKVxuXG4gICAgc3RhcnREYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZHVlRGF0ZUlucHV0Lm1pbiA9IHN0YXJ0RGF0ZUlucHV0LnZhbHVlXG4gICAgfSlcblxuICAgIGR1ZURhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3RhcnREYXRlSW5wdXQubWF4ID0gZHVlRGF0ZUlucHV0LnZhbHVlXG4gICAgfSlcblxuICAgIHJldHVybiB0b2RvQWRkRm9ybVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOb3RlQWRkRm9ybSgpIHtcbiAgICBjb25zdCBub3RlQWRkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIG5vdGVBZGRGb3JtLmlkID0gJ25vdGVfX2FkZC1mb3JtJ1xuICAgIG5vdGVBZGRGb3JtLmNsYXNzTGlzdC5hZGQoJ2Qtb2ZmJylcbiAgICBub3RlQWRkRm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwibm90ZV9fdGl0bGUtaW5wdXRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBjbGFzcz1cIm5vdGVfX2Rlcy1pbnB1dFwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PmBcblxuICAgIHJldHVybiBub3RlQWRkRm9ybVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U2VsZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHByb2plY3RTZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBwcm9qZWN0U2VsZWN0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdCcpXG4gICAgcHJvamVjdFNlbGVjdExhYmVsLmlubmVySFRNTCA9IGBQdXQgaXQgaW46IGBcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgcHJvamVjdFNlbGVjdExpc3QuY2xhc3NMaXN0LmFkZCgnaXRlbV9fcHJvamVjdC1pbnB1dCcpXG4gICAgcHJvamVjdFNlbGVjdExpc3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3QnKVxuICAgIHByb2plY3RTZWxlY3RMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdCcpXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBnZXRDdXJyZW50U3RhdGUoKVxuXG4gICAgYXBwZW5kQ2hpbGRyZW4ocHJvamVjdFNlbGVjdERpdiwgW3Byb2plY3RTZWxlY3RMYWJlbCwgcHJvamVjdFNlbGVjdExpc3RdKVxuXG4gICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0Q29udGFpbmVyT2JqLmdldEFsbEl0ZW0oKVxuICAgIHByb2plY3RzLmZvckVhY2gocHJqID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGAke3Byai5nZXRWYWx1ZSgpLnRpdGxlfWBcbiAgICAgICAgcHJvamVjdFNlbGVjdExpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICBwcm9qZWN0U2VsZWN0TGlzdC52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0LmdldFZhbHVlKCkudGl0bGVcbiAgICByZXR1cm4gcHJvamVjdFNlbGVjdERpdlxufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRCdXR0b25EaXYoKSB7XG4gICAgY29uc3QgYnV0dG9uRGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdidXR0b25zJylcbiAgICBidXR0b25EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZF9fYnRuXCIgZm9ybW1ldGhvZD1cImRpYWxvZ1wiPkNyZWF0ZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGNsb3NlX19idG5cIiBmb3JtbWV0aG9kPVwiZGlhbG9nXCI+Q2FuY2VsPC9idXR0b24+YFxuXG4gICAgcmV0dXJuIGJ1dHRvbkRpdlxufVxuXG4vLyBDb25maXJtIGRpYWxvZ1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbmZpcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbiAgICBkaWFsb2cuaWQgPSAnY29uZmlybV9fZGlhbG9nJ1xuXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gYEFyZSB5b3Ugc3VyZT9gXG5cbiAgICBjb25zdCBidXR0b25EaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ2J1dHRvbnMnKVxuICAgIGJ1dHRvbkRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkX19idG5cIiBmb3JtbWV0aG9kPVwiZGlhbG9nXCI+WWVzPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gY2xvc2VfX2J0blwiIGZvcm1tZXRob2Q9XCJkaWFsb2dcIj5ObzwvYnV0dG9uPmBcblxuICAgIGFwcGVuZENoaWxkcmVuKGRpYWxvZywgW21lc3NhZ2UsIGJ1dHRvbkRpdl0pXG5cbiAgICByZXR1cm4gZGlhbG9nXG59XG5cbi8vIEl0ZW0gZWRpdCBkaWFsb2dcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZGl0RGlhbG9nKCl7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbiAgICBkaWFsb2cuaWQgPSAnaXRlbV9fZWRpdC1kaWFsb2cnXG5cbiAgICBhcHBlbmRDaGlsZHJlbihkaWFsb2csIFtjcmVhdGVUb2RvRWRpdEZvcm0oKSwgY3JlYXRlTm90ZUVkaXRGb3JtKCksIGNyZWF0ZVByb2plY3RFZGl0Rm9ybSgpLCBjcmVhdGVFZGl0QnV0dG9uRGl2KCldKVxuXG4gICAgcmV0dXJuIGRpYWxvZ1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvRWRpdEZvcm0oKXtcbiAgICBjb25zdCB0b2RvRWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICB0b2RvRWRpdEZvcm0uaWQgPSAndG9kb19fZWRpdC1mb3JtJ1xuICAgIHRvZG9FZGl0Rm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwidG9kb19fdGl0bGUtaW5wdXRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIHJlcXVpcmVkIGlkPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBjbGFzcz1cInRvZG9fX2Rlcy1pbnB1dFwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN0YXJ0RGF0ZVwiPlN0YXJ0IGRhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJzdGFydERhdGVcIiBpZD1cInN0YXJ0RGF0ZVwiIGNsYXNzPVwidG9kb19fc3RhcnQtaW5wdXRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlRGF0ZVwiPkR1ZSBkYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiIGlkPVwiZHVlRGF0ZVwiIGNsYXNzPVwidG9kb19fZHVlLWlucHV0XCI+XG4gICAgICAgIDwvZGl2PmBcblxuICAgIHJldHVybiB0b2RvRWRpdEZvcm1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTm90ZUVkaXRGb3JtKCl7XG4gICAgY29uc3Qgbm90ZUVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgbm90ZUVkaXRGb3JtLmlkID0gJ25vdGVfX2VkaXQtZm9ybSdcbiAgICBub3RlRWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgnZC1vZmYnKVxuICAgIG5vdGVFZGl0Rm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwibm90ZV9fdGl0bGUtaW5wdXRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBjbGFzcz1cIm5vdGVfX2Rlcy1pbnB1dFwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PmBcblxuICAgIHJldHVybiBub3RlRWRpdEZvcm1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVkaXRGb3JtKCl7XG4gICAgY29uc3QgcHJvamVjdEVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgcHJvamVjdEVkaXRGb3JtLmlkID0gJ3Byb2plY3RfX2VkaXQtZm9ybSdcbiAgICBwcm9qZWN0RWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgnZC1vZmYnKVxuICAgIHByb2plY3RFZGl0Rm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwicHJvamVjdF9fdGl0bGUtaW5wdXRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBjbGFzcz1cInByb2plY3RfX2Rlcy1pbnB1dFwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PmBcblxuICAgIHJldHVybiBwcm9qZWN0RWRpdEZvcm1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRWRpdEJ1dHRvbkRpdigpIHtcbiAgICBjb25zdCBidXR0b25EaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ2J1dHRvbnMnKVxuICAgIGJ1dHRvbkRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkX19idG5cIiBmb3JtbWV0aG9kPVwiZGlhbG9nXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGNsb3NlX19idG5cIiBmb3JtbWV0aG9kPVwiZGlhbG9nXCI+Q2FuY2VsPC9idXR0b24+YFxuXG4gICAgcmV0dXJuIGJ1dHRvbkRpdlxufVxuXG4vLyBNb3ZlIGRpYWxvZyBcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vdmVEaWFsb2coKXtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKVxuICAgIGRpYWxvZy5pZCA9ICdpdGVtX19tb3ZlLWRpYWxvZydcbiAgICBhcHBlbmRDaGlsZHJlbihkaWFsb2csIFtjcmVhdGVQcm9qZWN0U2VsZWN0KCksIGNyZWF0ZUVkaXRCdXR0b25EaXYoKV0pXG5cbiAgICByZXR1cm4gZGlhbG9nXG59IiwiaW1wb3J0IGFwcGVuZENoaWxkcmVuIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vYXBwZW5kQ2hpbGRyZW5cIlxuaW1wb3J0IGNyZWF0ZUJ1dHRvbldpdGhDbGFzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2NyZWF0ZUJ1dHRvbldpdGhDbGFzc1wiXG5pbXBvcnQgY3JlYXRlRGl2V2l0aENsYXNzIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vY3JlYXRlRGl2V2l0aENsYXNzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRmluaXNoZWRUb2RvKHRvZG8pIHtcbiAgICBjb25zdCBkZXRhaWwgPSB0b2RvLmdldFZhbHVlKClcblxuICAgIGNvbnN0IHRvZG9EaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ2ZpbmlzaGVkJywnY29udGVudF9faXRlbScsICd0by1kbycpXG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygndGl0bGUnKVxuICAgIHRpdGxlRGl2LmlubmVySFRNTCA9IGA8c3Bhbj4ke2RldGFpbC50aXRsZX08L3NwYW4+YFxuXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdidXR0b25zJylcbiAgICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVCdXR0b25XaXRoQ2xhc3MoJ2RlbGV0ZV9fYnRuJywgJ3JpLWRlbGV0ZS1iaW4tNi1saW5lJylcblxuICAgIGFwcGVuZENoaWxkcmVuKGJ1dHRvbkRpdiwgW2RlbGV0ZUJ0bl0pXG4gICAgYXBwZW5kQ2hpbGRyZW4odG9kb0RpdiwgW3RpdGxlRGl2LCBidXR0b25EaXZdKVxuXG4gICAgcmV0dXJuIHRvZG9EaXZcbn0iLCJpbXBvcnQgYXBwZW5kQ2hpbGRyZW4gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9hcHBlbmRDaGlsZHJlblwiXG5pbXBvcnQgY3JlYXRlRGl2V2l0aENsYXNzIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vY3JlYXRlRGl2V2l0aENsYXNzXCJcbmltcG9ydCBjcmVhdGVJY29uV2l0aENsYXNzIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vY3JlYXRlSWNvbldpdGhDbGFzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuXG4gICAgY29uc3QgbWVudUJ0biA9IGNyZWF0ZURpdldpdGhDbGFzcygnbWVudV9fYnRuJywgJ2ljb25fX2JpZycpXG4gICAgY29uc3QgbWVudUljb24gPSBjcmVhdGVJY29uV2l0aENsYXNzKCdyaS1tZW51LWxpbmUnKVxuICAgIG1lbnVCdG4uYXBwZW5kQ2hpbGQobWVudUljb24pXG5cbiAgICBjb25zdCBsb2dvID0gY3JlYXRlRGl2V2l0aENsYXNzKCdsb2dvJylcbiAgICBsb2dvLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGkgY2xhc3M9XCJyaS1zdGFjay1saW5lXCI+PC9pPlxuICAgICAgICA8c3Bhbj5UYXNrbzwvc3Bhbj5gXG5cbiAgICBjb25zdCBhZGRCdG4gPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ2FkZF9fYnRuJywgJ2ljb25fX2JpZycpXG4gICAgY29uc3QgYWRkSWNvbiA9IGNyZWF0ZUljb25XaXRoQ2xhc3MoJ3JpLWFkZC1saW5lJylcbiAgICBhZGRCdG4uYXBwZW5kQ2hpbGQoYWRkSWNvbilcblxuICAgIGFwcGVuZENoaWxkcmVuKGhlYWRlciwgW21lbnVCdG4sIGxvZ28sIGFkZEJ0bl0pXG5cbiAgICByZXR1cm4gaGVhZGVyXG59XG4iLCJpbXBvcnQgaGVhZGVyIGZyb20gJy4vY3JlYXRlSGVhZGVyJ1xuaW1wb3J0IG5hdkJhciBmcm9tICcuL2NyZWF0ZU5hdmlnYXRpb24nXG5pbXBvcnQgbWVudSBmcm9tICcuL2NyZWF0ZU1lbnUnXG5pbXBvcnQgY3JlYXRlQ29udGVudCBmcm9tICcuL2NyZWF0ZUNvbnRlbnQnXG5pbXBvcnQge2NyZWF0ZVByb2plY3REaWFsb2csIGNyZWF0ZUl0ZW1EaWFsb2csIGNyZWF0ZUNvbmZpcm1EaWFsb2csIGNyZWF0ZUVkaXREaWFsb2csIGNyZWF0ZU1vdmVEaWFsb2d9IGZyb20gJy4vY3JlYXRlRGlhbG9ncydcbmltcG9ydCBhcHBlbmRDaGlsZHJlbiBmcm9tICcuLi8uLi91dGlscy9jb21tb24vYXBwZW5kQ2hpbGRyZW4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUxheW91dChvYmope1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxuXG4gICAgY29uc3QgY29udGVudCA9IGNyZWF0ZUNvbnRlbnQob2JqKVxuICAgIGNvbnN0IHByb2plY3REaWFsb2cgPSBjcmVhdGVQcm9qZWN0RGlhbG9nKClcbiAgICBjb25zdCBpdGVtRGlhbG9nID0gY3JlYXRlSXRlbURpYWxvZygpXG4gICAgY29uc3QgZWRpdERpYWxvZyA9IGNyZWF0ZUVkaXREaWFsb2coKVxuICAgIGNvbnN0IG1vdmVEaWFsb2cgPSBjcmVhdGVNb3ZlRGlhbG9nKClcbiAgICBjb25zdCBjb25maXJtRGlhbG9nID0gY3JlYXRlQ29uZmlybURpYWxvZygpXG5cbiAgICBhcHBlbmRDaGlsZHJlbihib2R5LCBbaGVhZGVyKCksIGNvbnRhaW5lcl0pXG4gICAgYXBwZW5kQ2hpbGRyZW4oY29udGFpbmVyLCBbbmF2QmFyKCksIG1lbnUoKSwgY29udGVudCwgcHJvamVjdERpYWxvZywgaXRlbURpYWxvZywgZWRpdERpYWxvZywgbW92ZURpYWxvZywgY29uZmlybURpYWxvZ10pXG59IiwiaW1wb3J0IGFwcGVuZENoaWxkcmVuIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vYXBwZW5kQ2hpbGRyZW5cIlxuaW1wb3J0IGNyZWF0ZUJ1dHRvbldpdGhDbGFzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2NyZWF0ZUJ1dHRvbldpdGhDbGFzc1wiXG5pbXBvcnQgY3JlYXRlRGl2V2l0aENsYXNzIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vY3JlYXRlRGl2V2l0aENsYXNzXCJcbmltcG9ydCBwcm9qZWN0Q29udGFpbmVyT2JqIGZyb20gXCIuLi9wcm9qZWN0Q29udGFpbmVyXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb25zdCBtZW51ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdtZW51JywgJ2Qtb2ZmJylcblxuICAgIGNvbnN0IG1lbnVUb3AgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ21lbnVfX3RvcCcpXG4gICAgY29uc3QgbWVudUl0ZW1zSFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaF9fYmFyXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInNlYXJjaF9faW5wdXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2hfX2ljb24gaWNvbl9fc21hbGxcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInJpLXNlYXJjaC1saW5lXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudV9faXRlbSBpbmJveF9fbmF2IFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb25fX3NtYWxsXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJyaS1pbmJveC0yLWxpbmVcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuPkluYm94PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVfX2l0ZW0gdG9kYXlfX25hdlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiBpY29uX19zbWFsbFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicmktY2FsZW5kYXItbGluZVwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+VG9kYXk8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbiAgICBtZW51VG9wLmlubmVySFRNTCA9IG1lbnVJdGVtc0hUTUxcbiAgICBjb25zdCBoaXN0b3J5TmF2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdtZW51X19pdGVtJywgJ2hpc3RvcnlfX25hdicpXG4gICAgaGlzdG9yeU5hdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCIgaWNvbl9fc21hbGxcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwicmktaGlzdG9yeS1saW5lXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4+SGlzdG9yeTwvc3Bhbj5gXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudVRvcCwgW2NyZWF0ZVByb2plY3RMaXN0KCksIGhpc3RvcnlOYXZdKVxuICAgIFxuICAgIGNvbnN0IG1lbnVCb3QgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ21lbnVfX2JvdCcsICdpY29uX19iaWcnKVxuICAgIG1lbnVCb3QuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwicmktc3VuLWxpbmVcIj48L2k+J1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudSwgW21lbnVUb3AsIG1lbnVCb3RdKVxuXG4gICAgcmV0dXJuIG1lbnVcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdExpc3QoKXtcbiAgICBjb25zdCBwcm9qZWN0TGlzdERpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygnbWVudV9faXRlbScsICdwcm9qZWN0X19saXN0JylcbiAgICBwcm9qZWN0TGlzdERpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0X19uYXYgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbl9fc21hbGxcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInJpLWFyY2hpdmUtbGluZVwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+UHJvamVjdDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdyBpY29uX19zbWFsbFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicmktYXJyb3ctdXAtcy1saW5lXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcblxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfX2xpc3QtaXRlbXMnLCAnZC1vZmYnKVxuICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdENvbnRhaW5lck9iai5nZXRBbGxJdGVtKClcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByaiA9PiB7XG4gICAgICAgIGlmKHByai5nZXRWYWx1ZSgpLnRpdGxlICE9PSAnSW5ib3gnICYmIHByai5nZXRWYWx1ZSgpLnRpdGxlICE9PSAnVG9kYXknKXtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIHByb2plY3RMaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0X19saXN0LWl0ZW0nKVxuICAgICAgICAgICAgcHJvamVjdExpLmlubmVySFRNTCA9IGA8c3Bhbj4ke3Byai5nZXRWYWx1ZSgpLnRpdGxlfTwvc3Bhbj5gXG4gICAgICAgICAgICBjb25zdCBidXR0b25EaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ2J1dHRvbnMnKVxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGNyZWF0ZUJ1dHRvbldpdGhDbGFzcygnZWRpdF9fYnRuJywgJ3JpLWVkaXQtYm94LWxpbmUnKVxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gY3JlYXRlQnV0dG9uV2l0aENsYXNzKCdkZWxldGVfX2J0bicsICdyaS1kZWxldGUtYmluLTYtbGluZScpXG4gICAgICAgICAgICBhcHBlbmRDaGlsZHJlbihidXR0b25EaXYsIFtlZGl0QnRuLCBkZWxldGVCdG5dKVxuICAgICAgICAgICAgcHJvamVjdExpLmFwcGVuZENoaWxkKGJ1dHRvbkRpdilcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RMaSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBhZGRCdG5MaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBhZGRCdG5MaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0X19hZGQtYnRuJylcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IGArYFxuICAgIGFkZEJ0bkxpLmFwcGVuZENoaWxkKGFkZEJ0bilcblxuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGFkZEJ0bkxpKVxuICAgIHByb2plY3RMaXN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RMaXN0KVxuICAgIHJldHVybiBwcm9qZWN0TGlzdERpdlxufVxuIiwiaW1wb3J0IGFwcGVuZENoaWxkcmVuIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vYXBwZW5kQ2hpbGRyZW5cIlxuaW1wb3J0IGNyZWF0ZURpdldpdGhDbGFzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2NyZWF0ZURpdldpdGhDbGFzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU5hdmlnYXRpb25CYXIoKSB7XG4gICAgY29uc3QgbmF2QmFyID0gY3JlYXRlRGl2V2l0aENsYXNzKCduYXZfX2JhcicpXG5cbiAgICBjb25zdCBuYXZJdGVtcyA9IGNyZWF0ZURpdldpdGhDbGFzcygnbmF2X19pdGVtcycpXG4gICAgY29uc3QgbmF2SXRlbUhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXZfX2l0ZW0gaWNvbl9fYmlnIHNlYXJjaF9fbmF2XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cInJpLXNlYXJjaC1saW5lXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdl9faXRlbSBpY29uX19iaWcgaW5ib3hfX25hdlwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJyaS1pbmJveC0yLWxpbmVcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2X19pdGVtIGljb25fX2JpZyB0b2RheV9fbmF2XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cInJpLWNhbGVuZGFyLWxpbmVcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2X19pdGVtIGljb25fX2JpZyBwcm9qZWN0X19uYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwicmktYXJjaGl2ZS1saW5lXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdl9faXRlbSBpY29uX19iaWcgaGlzdG9yeV9fbmF2XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cInJpLWhpc3RvcnktbGluZVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIG5hdkl0ZW1zLmlubmVySFRNTCA9IG5hdkl0ZW1IVE1MXG5cbiAgICBjb25zdCBhcHBlYXJhbmNlTW9kZSA9IGNyZWF0ZURpdldpdGhDbGFzcygnYXBwZWFyYW5jZV9fbW9kZScsICdpY29uX19iaWcnKVxuICAgIGFwcGVhcmFuY2VNb2RlLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cInJpLXN1bi1saW5lXCI+PC9pPidcblxuICAgIGFwcGVuZENoaWxkcmVuKG5hdkJhciwgW25hdkl0ZW1zLCBhcHBlYXJhbmNlTW9kZV0pXG5cbiAgICByZXR1cm4gbmF2QmFyXG59XG4iLCJpbXBvcnQgYXBwZW5kQ2hpbGRyZW4gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9hcHBlbmRDaGlsZHJlbi5qc1wiXG5pbXBvcnQgY3JlYXRlRGl2V2l0aENsYXNzIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vY3JlYXRlRGl2V2l0aENsYXNzLmpzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTm90ZShub3RlKSB7XG4gICAgY29uc3QgZGV0YWlsID0gbm90ZS5nZXRWYWx1ZSgpXG5cbiAgICBjb25zdCBub3RlRGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdub3RlJywgJ2NvbnRlbnRfX2l0ZW0nKVxuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ3RpdGxlJylcbiAgICB0aXRsZURpdi5pbm5lckhUTUwgPSBgPHNwYW4+JHtkZXRhaWwudGl0bGV9PC9zcGFuPmBcblxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygnYnV0dG9ucycpXG4gICAgYnV0dG9uRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXRfX2J0blwiPjxpIGNsYXNzPVwicmktZWRpdC1ib3gtbGluZVwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vdmVfX2J0blwiPjxpIGNsYXNzPVwicmktYXJyb3ctcmlnaHQtY2lyY2xlLWxpbmVcIj48L2k+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVfX2J0blwiPjxpIGNsYXNzPVwicmktZGVsZXRlLWJpbi02LWxpbmVcIj48L2k+PC9idXR0b24+XG4gICAgYFxuXG4gICAgYXBwZW5kQ2hpbGRyZW4obm90ZURpdiwgW3RpdGxlRGl2LCBidXR0b25EaXZdKVxuXG4gICAgcmV0dXJuIG5vdGVEaXZcbn1cblxuIiwiaW1wb3J0IGFwcGVuZENoaWxkcmVuIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vYXBwZW5kQ2hpbGRyZW5cIlxuaW1wb3J0IGNyZWF0ZUJ1dHRvbldpdGhDbGFzcyBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uL2NyZWF0ZUJ1dHRvbldpdGhDbGFzc1wiXG5pbXBvcnQgY3JlYXRlRGl2V2l0aENsYXNzIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vY3JlYXRlRGl2V2l0aENsYXNzXCJcbmltcG9ydCBzZXRQcmlvcml0eUNsYXNzIGZyb20gXCIuLi8uLi91dGlscy9jb21tb24vc2V0UHJpb3JpdHlDbGFzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRvZG8odG9kbykge1xuICAgIGNvbnN0IGRldGFpbCA9IHRvZG8uZ2V0VmFsdWUoKVxuXG4gICAgY29uc3QgdG9kb0RpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygndG8tZG8nLCdjb250ZW50X19pdGVtJylcblxuICAgIGNvbnN0IGNoZWNrYm94RGl2ID0gY3JlYXRlRGl2V2l0aENsYXNzKCdjaGVja2JveCcpXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCdcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveF9faW5wdXQnKVxuICAgIGNoZWNrYm94RGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KVxuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBjcmVhdGVEaXZXaXRoQ2xhc3MoJ3RpdGxlJylcbiAgICB0aXRsZURpdi5pbm5lckhUTUwgPSBgPHNwYW4+JHtkZXRhaWwudGl0bGV9PC9zcGFuPmBcblxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGNyZWF0ZURpdldpdGhDbGFzcygnYnV0dG9ucycpXG4gICAgY29uc3QgZWRpdEJ0biA9IGNyZWF0ZUJ1dHRvbldpdGhDbGFzcygnZWRpdF9fYnRuJywgJ3JpLWVkaXQtYm94LWxpbmUnKVxuICAgIGNvbnN0IHByaW9yaXR5QnRuID0gY3JlYXRlQnV0dG9uV2l0aENsYXNzKCdwcmlvcml0eV9fYnRuJywgJ3JpLWZsYWctMi1saW5lJylcbiAgICBjb25zdCBtb3ZlQnRuID0gY3JlYXRlQnV0dG9uV2l0aENsYXNzKCdtb3ZlX19idG4nLCAncmktYXJyb3ctcmlnaHQtY2lyY2xlLWxpbmUnKVxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZUJ1dHRvbldpdGhDbGFzcygnZGVsZXRlX19idG4nLCAncmktZGVsZXRlLWJpbi02LWxpbmUnKVxuXG4gICAgc2V0UHJpb3JpdHlDbGFzcyhwcmlvcml0eUJ0biwgZGV0YWlsLnByaW9yaXR5KVxuXG4gICAgYXBwZW5kQ2hpbGRyZW4oYnV0dG9uRGl2LCBbZWRpdEJ0biwgcHJpb3JpdHlCdG4sIG1vdmVCdG4sIGRlbGV0ZUJ0bl0pXG4gICAgYXBwZW5kQ2hpbGRyZW4odG9kb0RpdiwgW2NoZWNrYm94RGl2LCB0aXRsZURpdiwgYnV0dG9uRGl2XSlcblxuICAgIHJldHVybiB0b2RvRGl2XG59XG5cblxuXG5cbiIsImltcG9ydCBjcmVhdGVEaXZXaXRoQ2xhc3MgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi9jcmVhdGVEaXZXaXRoQ2xhc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVW5kb0JveChtZXNzYWdlKXtcbiAgICBjb25zdCB1bmRvQm94ID0gY3JlYXRlRGl2V2l0aENsYXNzKCd1bmRvX19ib3gnKVxuICAgIHVuZG9Cb3guaW5uZXJIVE1MID0gYFxuICAgICAgICA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biB1bmRvX19idG5cIj5VbmRvPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGNsb3NlX19idG5cIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuXG4gICAgcmV0dXJuIHVuZG9Cb3hcbn0iLCJpbXBvcnQge2Zvcm1hdH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vdGUoKXtcbiAgICBjb25zdCB0eXBlID0gJ25vdGUnXG4gICAgbGV0IHRpdGxlLCBkZXNjcmlwdGlvbiBcbiAgICBjb25zdCBkYXRlID0gZm9ybWF0KG5ldyBEYXRlKCksICdNTS9kZC95eXl5JylcblxuICAgIGNvbnN0IGNoYW5nZVZhbHVlID0gKHRpdCxkZXMpID0+IHtcbiAgICAgICAgdGl0bGUgPSB0aXRcbiAgICAgICAgZGVzY3JpcHRpb24gPSBkZXNcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUeXBlID0gKCkgPT4gdHlwZVxuXG4gICAgY29uc3QgZ2V0VmFsdWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZGF0ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICBjaGFuZ2VWYWx1ZSxcbiAgICAgICAgZ2V0VHlwZSxcbiAgICAgICAgZ2V0VmFsdWVcbiAgICB9XG59IiwiaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0KCl7XG4gICAgY29uc3QgYXJyID0gW11cbiAgICBjb25zdCB0eXBlID0gJ3Byb2plY3QnXG4gICAgbGV0IHRpdGxlLCBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGRhdGUgPSBmb3JtYXQobmV3IERhdGUoKSwgJ01NL2RkL3l5eXknKVxuXG4gICAgY29uc3QgY2hhbmdlVmFsdWUgPSAodGl0LGRlcykgPT4ge1xuICAgICAgICB0aXRsZSA9IHRpdFxuICAgICAgICBkZXNjcmlwdGlvbiA9IGRlc1xuICAgIH1cblxuICAgIGNvbnN0IGdldFZhbHVlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm57dGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlfVxuICAgIH1cblxuICAgIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICBhcnIucHVzaChpdGVtKVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgaWYoaW5kZXggPT09IDApe1xuICAgICAgICAgICAgYXJyLnNwbGljZSgwLDEpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldEl0ZW0gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGFycltpbmRleF1cbiAgICB9XG4gICAgY29uc3QgZ2V0QWxsSXRlbSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGFyclxuICAgIH1cblxuICAgIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB0eXBlXG4gICAgXG5cbiAgICByZXR1cm57XG4gICAgICAgIGNoYW5nZVZhbHVlLFxuICAgICAgICBnZXRWYWx1ZSxcbiAgICAgICAgYWRkSXRlbSxcbiAgICAgICAgZGVsZXRlSXRlbSxcbiAgICAgICAgZ2V0SXRlbSxcbiAgICAgICAgZ2V0QWxsSXRlbSxcbiAgICAgICAgZ2V0VHlwZVxuICAgIH1cbn0iLCJpbXBvcnQgeyBsb2FkRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vdXRpbHMvbG9jYWxTdG9yYWdlJ1xuaW1wb3J0IGluYm94T2JqIGZyb20gJy4vRGVmYXVsdCBQcm9qZWN0L2luYm94J1xuaW1wb3J0IHRvZGF5T2JqIGZyb20gJy4vRGVmYXVsdCBQcm9qZWN0L3RvZGF5J1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBhcnIgPSBbXVxuICAgIGNvbnN0IHR5cGUgPSAncHJvamVjdENvbnRhaW5lcidcblxuICAgIGNvbnN0IGFkZEl0ZW0gPSAocHJqKSA9PiB7XG4gICAgICAgIGFyci5wdXNoKHByailcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJdGVtID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGlmKGluZGV4ID49IDAgJiYgaW5kZXggPCBhcnIubGVuZ3RoKSByZXR1cm4gYXJyW2luZGV4XVxuICAgIH1cblxuICAgIGNvbnN0IGdldEFsbEl0ZW0gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhcnJcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVJdGVtID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGlmKGluZGV4ID09PSAwKXtcbiAgICAgICAgICAgIGFyci5zcGxpY2UoMCwxKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRUeXBlID0gKCkgPT4gdHlwZVxuXG4gICAgcmV0dXJue1xuICAgICAgICBhZGRJdGVtLFxuICAgICAgICBnZXRJdGVtLFxuICAgICAgICBnZXRBbGxJdGVtLFxuICAgICAgICBkZWxldGVJdGVtLFxuICAgICAgICBnZXRUeXBlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0Q29udGFpbmVyQ29uc3RydWN0b3IoKSB7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RDb250YWluZXInKSA9PT0gbnVsbCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgdG8gbG9jYWwgc3RvcmFnZScpXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXJPYmogPSBwcm9qZWN0Q29udGFpbmVyKClcbiAgICAgICAgcHJvamVjdENvbnRhaW5lck9iai5hZGRJdGVtKGluYm94T2JqKVxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyT2JqLmFkZEl0ZW0odG9kYXlPYmopXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgncHJvamVjdENvbnRhaW5lcicsIHByb2plY3RDb250YWluZXJPYmopXG4gICAgICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyT2JqXG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnN0IGxvYWRlZFByb2plY3RDb250YWluZXIgPSBsb2FkRnJvbUxvY2FsU3RvcmFnZSgncHJvamVjdENvbnRhaW5lcicpXG4gICAgICAgIGNvbnNvbGUubG9nKGxvYWRlZFByb2plY3RDb250YWluZXIpXG4gICAgICAgIHJldHVybiBsb2FkZWRQcm9qZWN0Q29udGFpbmVyXG4gICAgfVxufVxuXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyT2JqID0gcHJvamVjdENvbnRhaW5lckNvbnN0cnVjdG9yKClcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdENvbnRhaW5lck9iaiIsImltcG9ydCB7Zm9ybWF0fSBmcm9tICdkYXRlLWZucydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kbygpe1xuICAgIGNvbnN0IHR5cGUgPSAndG9kbydcbiAgICBsZXQgdGl0bGUsIGRlc2NyaXB0aW9uLHN0YXJ0RGF0ZSwgZHVlRGF0ZSwgcHJpb3JpdHlcbiAgICBsZXQgc3RhdHVzID0gZmFsc2VcblxuICAgIGNvbnN0IGNoYW5nZVZhbHVlID0gKHRpdCxkZXMsIHN0YXJ0LCBkdWUscHJpKSA9PiB7XG4gICAgICAgIHRpdGxlID0gdGl0XG4gICAgICAgIGRlc2NyaXB0aW9uID0gZGVzXG4gICAgICAgIHN0YXJ0RGF0ZSA9IGZvcm1hdChzdGFydCwgJ01NL2RkL3l5eXknKVxuICAgICAgICBkdWVEYXRlID0gZm9ybWF0KGR1ZSwgJ01NL2RkL3l5eXknKVxuICAgICAgICBwcmlvcml0eSA9IHByaVxuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZVByaW9yaXR5ID0gKHByaSkgPT4ge1xuICAgICAgICBwcmlvcml0eSA9IHByaVxuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZVN0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgaWYoc3RhdHVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICBzdGF0dXMgPSB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc3RhdHVzID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBnZXRUeXBlID0gKCkgPT4gdHlwZVxuXG4gICAgY29uc3QgZ2V0VmFsdWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgICBkdWVEYXRlLFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgY2hhbmdlVmFsdWUsXG4gICAgICAgIGNoYW5nZVN0YXR1cyxcbiAgICAgICAgY2hhbmdlUHJpb3JpdHksXG4gICAgICAgIGdldFR5cGUsXG4gICAgICAgIGdldFZhbHVlXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb3NlVGhpcyhvYmope1xuICAgIG9iai5jbGFzc0xpc3QuYWRkKCdkLW9mZicpXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uV2l0aENsYXNzKGNsYXNzTmFtZSwgaWNvbkNsYXNzKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgaWYgKGljb25DbGFzcykge1xuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiJHtpY29uQ2xhc3N9XCI+PC9pPmBcbiAgICB9XG4gICAgcmV0dXJuIGJ1dHRvblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURpdldpdGhDbGFzcyguLi5jbGFzc05hbWUpe1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGRpdjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJY29uV2l0aENsYXNzKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGljb247XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhlY3V0ZVdpdGhBbmltYXRpb24oaXRlbSwgY2FsbGJhY2spIHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgnY2xvc2luZycsICcnKVxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnY2xvc2luZycpXG4gICAgICAgIGNhbGxiYWNrKGl0ZW0pXG4gICAgfSwge29uY2U6dHJ1ZX0pXG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZW5UaGlzKG9iail7XG4gICAgb2JqLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtb2ZmJylcbn0iLCJpbXBvcnQgcHJvamVjdENvbnRhaW5lck9iaiBmcm9tICcuLi8uLi9jb21wb25lbnQvcHJvamVjdENvbnRhaW5lcidcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaEFsbEl0ZW1zKHRpdGxlKXtcbiAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBbXVxuICAgIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdENvbnRhaW5lck9iai5nZXRBbGxJdGVtKClcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByaiA9PiB7XG4gICAgICAgIGNvbnN0IGFsbEl0ZW1zID0gcHJqLmdldEFsbEl0ZW0oKVxuICAgICAgICBhbGxJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYoaXRlbS5nZXRWYWx1ZSgpLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGl0bGUudG9Mb3dlckNhc2UoKSkpe1xuICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdC5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWFyY2hSZXN1bHRcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRQcmlvcml0eUNsYXNzKGVsZW1lbnQsIHByaW9yaXR5KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eV9fbG93JylcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5X19tZWRpdW0nKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHlfX2hpZ2gnKVxuICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICAgICAgY2FzZSAnbG93JzpcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHlfX2xvdycpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eV9fbWVkaXVtJylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eV9faGlnaCcpXG4gICAgICAgICAgICBicmVha1xuICAgIH1cbn0iLCJpbXBvcnQgbm90ZSBmcm9tIFwiLi4vY29tcG9uZW50L25vdGVcIlxuaW1wb3J0IHByb2plY3QgZnJvbSBcIi4uL2NvbXBvbmVudC9wcm9qZWN0XCJcbmltcG9ydCB7IHByb2plY3RDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50L3Byb2plY3RDb250YWluZXJcIlxuaW1wb3J0IHRvZG8gZnJvbSBcIi4uL2NvbXBvbmVudC90b2RvXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUb0xvY2FsU3RvcmFnZShrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qgc2VyaWFsaXplZFZhbHVlID0gSlNPTi5zdHJpbmdpZnkoc2VyaWFsaXplKHZhbHVlKSlcbiAgICBjb25zb2xlLmxvZyhzZXJpYWxpemVkVmFsdWUpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBzZXJpYWxpemVkVmFsdWUpXG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShpbnB1dE9iail7XG4gICAgaWYgKGlucHV0T2JqLmdldFR5cGUoKSkge1xuICAgICAgICBjb25zdCBkYXRhID0gW11cbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIGlucHV0T2JqKSB7XG4gICAgICAgICAgICBsZXQgYXJyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBpbnB1dE9ialtwcm9wXSA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wICE9PSAnZ2V0QWxsSXRlbScpIHx8IHByb3AgPT09ICd0eXBlJykgY29udGludWUgLy8gU2tpcCBmdW5jdGlvbnNcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnZ2V0QWxsSXRlbScpe1xuICAgICAgICAgICAgICAgIGFyciA9IGlucHV0T2JqLmdldEFsbEl0ZW0oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShhcnIpKXtcbiAgICAgICAgICAgICAgICBhcnIuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmdldFR5cGUoKSA9PT0gJ3RvZG8nIHx8IG9iai5nZXRUeXBlKCkgPT09ICdub3RlJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IG9iai5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9iai5nZXRWYWx1ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogb2JqLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb2JqLmdldFZhbHVlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogb2JqLmdldEFsbEl0ZW0oKS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBpdGVtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLmdldFZhbHVlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihpbnB1dE9iai5nZXRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGlucHV0T2JqICE9PSAndG9kbycgJiYgaW5wdXRPYmogIT09ICdub3RlJyl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IGlucHV0T2JqLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogaW5wdXRPYmouZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogaW5wdXRPYmouZ2V0VHlwZSgpLFxuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gICAgY29uc3QgbG9hZGVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxuICAgIGNvbnNvbGUubG9nKGxvYWRlZClcbiAgICBzd2l0Y2ggKGxvYWRlZC50eXBlKSB7IFxuICAgICAgICBjYXNlICdwcm9qZWN0Q29udGFpbmVyJzpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQcm9qZWN0Q29udGFpbmVyKGxvYWRlZC5kYXRhKVxuICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQcm9qZWN0KGxvYWRlZClcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb21wb25lbnQobG9hZGVkLnR5cGUsIGxvYWRlZC5kYXRhKVxuICAgIH1cbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDb250YWluZXIoZGF0YSkge1xuICAgIGNvbnN0IG9iaiA9IHByb2plY3RDb250YWluZXIoKVxuICAgIGZvciAoY29uc3QgcHJqIGluIGRhdGEpIHtcbiAgICAgICAgb2JqLmFkZEl0ZW0oY3JlYXRlUHJvamVjdChkYXRhW3Byal0pKVxuICAgIH1cbiAgICByZXR1cm4gb2JqXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoZGF0YSkge1xuICAgIGNvbnN0IG9iaiA9IHByb2plY3QoKVxuICAgIG9iai5jaGFuZ2VWYWx1ZShkYXRhLnZhbHVlLnRpdGxlLCBkYXRhLnZhbHVlLmRlc2NyaXB0aW9uKVxuICAgIGRhdGEuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBvYmouYWRkSXRlbShjcmVhdGVDb21wb25lbnQoaXRlbS50eXBlLCBpdGVtLnZhbHVlKSlcbiAgICB9KVxuICAgIHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm90ZShkYXRhKSB7XG4gICAgY29uc3Qgb2JqID0gbm90ZSgpXG4gICAgb2JqLmNoYW5nZVZhbHVlKGRhdGEudGl0bGUsIGRhdGEuZGVzY3JpcHRpb24pXG4gICAgcmV0dXJuIG9ialxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKGRhdGEpIHtcbiAgICBjb25zdCBvYmogPSB0b2RvKClcbiAgICBvYmouY2hhbmdlVmFsdWUoZGF0YS50aXRsZSwgZGF0YS5kZXNjcmlwdGlvbiwgZGF0YS5zdGFydERhdGUsIGRhdGEuZHVlRGF0ZSlcbiAgICBvYmouY2hhbmdlUHJpb3JpdHkoZGF0YS5wcmlvcml0eSlcbiAgICBpZihkYXRhLnN0YXR1cyl7XG4gICAgICAgIG9iai5jaGFuZ2VTdGF0dXMoKVxuICAgIH1cbiAgICByZXR1cm4gb2JqXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudCh0eXBlLCBkYXRhKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ25vdGUnOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU5vdGUoZGF0YSlcbiAgICAgICAgY2FzZSAndG9kbyc6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlVG9kbyhkYXRhKVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59XG5cblxuLy8gY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSwgKF9rZXksIHZhbHVlKSA9PiB7XG4vLyAgICAgaWYgKHZhbHVlLnR5cGUpIHtcbi8vICAgICAgICAgbGV0IG9ialxuLy8gICAgICAgICBzd2l0Y2ggKHZhbHVlLnR5cGUpIHtcbi8vICAgICAgICAgICAgIGNhc2UgJ3Byb2plY3RDb250YWluZXInOlxuLy8gICAgICAgICAgICAgICAgIG9iaiA9IGNyZWF0ZVByb2plY3RDb250YWluZXIodmFsdWUuZGF0YSlcbi8vICAgICAgICAgICAgICAgICBicmVha1xuLy8gICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XG4vLyAgICAgICAgICAgICAgICAgb2JqID0gY3JlYXRlUHJvamVjdCh2YWx1ZS5kYXRhKVxuLy8gICAgICAgICAgICAgICAgIGJyZWFrXG4vLyAgICAgICAgICAgICBjYXNlICdub3RlJzpcbi8vICAgICAgICAgICAgICAgICBvYmogPSBjcmVhdGVOb3RlKHZhbHVlLmRhdGEpXG4vLyAgICAgICAgICAgICAgICAgYnJlYWtcbi8vICAgICAgICAgICAgIGNhc2UgJ3RvZG8nOlxuLy8gICAgICAgICAgICAgICAgIG9iaiA9IGNyZWF0ZVRvZG8odmFsdWUuZGF0YSlcbi8vICAgICAgICAgICAgICAgICBicmVha1xuLy8gICAgICAgICAgICAgZGVmYXVsdDpcbi8vICAgICAgICAgICAgICAgICBvYmogPSB2YWx1ZVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdyaWdodCcpXG4vLyAgICAgICAgIHJldHVybiBvYmpcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2coJ3dyb25nJylcbi8vICAgICByZXR1cm4gdmFsdWVcbi8vIH0pXG4vLyByZXR1cm4gZGF0YSIsImltcG9ydCBjcmVhdGVMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudC9MYXlvdXQvY3JlYXRlTGF5b3V0XCI7XG5pbXBvcnQgeyBsb2FkRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50U3RhdGUsIHNldEN1cnJlbnRTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgY29udGVudEhhbmRsZXIgZnJvbSBcIi4vdWktaGFuZGxlcnMvY29udGVudEhhbmRsZXJcIjtcbmltcG9ydCBoZWFkZXJIYW5kbGVyIGZyb20gXCIuL3VpLWhhbmRsZXJzL2hlYWRlckhhbmRsZXJcIjtcbmltcG9ydCBtZW51SGFuZGxlciBmcm9tIFwiLi91aS1oYW5kbGVycy9tZW51SGFuZGxlclwiO1xuaW1wb3J0IG5hdkhhbmRsZXIgZnJvbSBcIi4vdWktaGFuZGxlcnMvbmF2SGFuZGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJMYXlvdXQoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGJvZHkuaW5uZXJIVE1MID0gJydcblxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRTdGF0ZSgpXG5cbiAgICBjcmVhdGVMYXlvdXQoY3VycmVudFByb2plY3QpXG4gICAgXG4gICAgaWYoYm9keS5pbm5lckhUTUwgIT09ICcnKXtcbiAgICAgICAgaGVhZGVySGFuZGxlcigpXG4gICAgICAgIG5hdkhhbmRsZXIoKVxuICAgICAgICBtZW51SGFuZGxlcigpXG4gICAgICAgIGNvbnRlbnRIYW5kbGVyKClcbiAgICB9XG59IiwiaW1wb3J0IHByb2plY3RDb250YWluZXJPYmogZnJvbSBcIi4uL2NvbXBvbmVudC9wcm9qZWN0Q29udGFpbmVyXCJcbmltcG9ydCB7IHNhdmVUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiXG5cbmxldCBjdXJyZW50U3RhdGUgPSB7XG4gICAgY3VycmVudFByb2plY3Q6IHByb2plY3RDb250YWluZXJPYmouZ2V0SXRlbSgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFN0YXRlKG9iail7XG4gICAgY3VycmVudFN0YXRlLmN1cnJlbnRQcm9qZWN0ID0gb2JqXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50U3RhdGUoKXtcbiAgICByZXR1cm4gY3VycmVudFN0YXRlLmN1cnJlbnRQcm9qZWN0XG59IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlYXJhbmNlSGFuZGxlcigpIHtcbn1cbiIsImltcG9ydCBpbmJveE9iaiBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0RlZmF1bHQgUHJvamVjdC9pbmJveFwiXG5pbXBvcnQgcHJvamVjdENvbnRhaW5lck9iaiBmcm9tIFwiLi4vLi4vY29tcG9uZW50L3Byb2plY3RDb250YWluZXJcIlxuaW1wb3J0IGNsb3NlVGhpcyBmcm9tIFwiLi4vY29tbW9uL2Nsb3NlVGhpc1wiXG5pbXBvcnQgZXhlY3V0ZVdpdGhBbmltYXRpb24gZnJvbSBcIi4uL2NvbW1vbi9leGVjdXRlV2l0aEFuaW1hdGlvblwiXG5pbXBvcnQgcmVuZGVyTGF5b3V0IGZyb20gXCIuLi9yZW5kZXJcIlxuaW1wb3J0IHsgc2V0Q3VycmVudFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlXCJcbmltcG9ydCB7IGlzTWVudU9wZW4sIGlzUHJvamVjdExpc3RPcGVuLCBvcGVuTWVudSwgb3BlblByb2plY3RMaXN0IH0gZnJvbSBcIi4vbWVudUhhbmRsZXJcIlxuaW1wb3J0IHsgdW5kb0RlbGV0ZSB9IGZyb20gXCIuL3VuZG9IYW5kbGVyXCJcblxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29uZmlybUhhbmRsZXIocHJvamVjdCwgaXRlbSwgaW5kZXgpe1xuICAgIGNvbnN0IGNvbmZpcm1EaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybV9fZGlhbG9nJylcbiAgICBjb25zdCB5ZXNCdG4gPSBjb25maXJtRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5hZGRfX2J0bicpXG4gICAgY29uc3Qgbm9CdG4gPSBjb25maXJtRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZV9fYnRuJylcblxuICAgIHllc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbWVudU9wZW4gPSBpc01lbnVPcGVuKClcbiAgICAgICAgY29uc3QgbGlzdE9wZW4gPSBpc1Byb2plY3RMaXN0T3BlbigpXG4gICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKGNvbmZpcm1EaWFsb2csICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBwcm9qZWN0LmdldEl0ZW0oaW5kZXgpXG4gICAgICAgICAgICBwcm9qZWN0LmRlbGV0ZUl0ZW0oaW5kZXgpXG4gICAgICAgICAgICBjb25maXJtRGlhbG9nLmNsb3NlKCdkZWxldGVkJylcbiAgICAgICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKGl0ZW0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBjbG9zZVRoaXMoaXRlbSlcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50U3RhdGUocHJvamVjdClcbiAgICAgICAgICAgICAgICByZW5kZXJMYXlvdXQoKVxuICAgICAgICAgICAgICAgIGlmKG1lbnVPcGVuKSBvcGVuTWVudShmYWxzZSlcbiAgICAgICAgICAgICAgICBpZihsaXN0T3Blbikgb3BlblByb2plY3RMaXN0KClcbiAgICAgICAgICAgICAgICB1bmRvRGVsZXRlKHByb2plY3QsZGVsZXRlSXRlbSlcbiAgICAgICAgICAgIH0pICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgbm9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKGNvbmZpcm1EaWFsb2csICgpID0+IHtcbiAgICAgICAgICAgIGNvbmZpcm1EaWFsb2cuY2xvc2UoJ2NhbmNlbGxlZCcpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RDb25maXJtSGFuZGxlcihwcm9qZWN0LCBpbmRleCl7XG4gICAgY29uc3QgY29uZmlybURpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtX19kaWFsb2cnKVxuICAgIGNvbnN0IHllc0J0biA9IGNvbmZpcm1EaWFsb2cucXVlcnlTZWxlY3RvcignLmFkZF9fYnRuJylcbiAgICBjb25zdCBub0J0biA9IGNvbmZpcm1EaWFsb2cucXVlcnlTZWxlY3RvcignLmNsb3NlX19idG4nKVxuXG4gICAgeWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbihjb25maXJtRGlhbG9nLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVJdGVtID0gcHJvamVjdC5nZXRJdGVtKGluZGV4KVxuICAgICAgICAgICAgcHJvamVjdC5kZWxldGVJdGVtKGluZGV4KVxuICAgICAgICAgICAgY29uZmlybURpYWxvZy5jbG9zZSgnZGVsZXRlZCcpXG4gICAgICAgICAgICBzZXRDdXJyZW50U3RhdGUocHJvamVjdENvbnRhaW5lck9iai5nZXRJdGVtKDApKVxuICAgICAgICAgICAgcmVuZGVyTGF5b3V0KClcbiAgICAgICAgICAgIG9wZW5NZW51KGZhbHNlKVxuICAgICAgICAgICAgb3BlblByb2plY3RMaXN0KClcbiAgICAgICAgICAgIHVuZG9EZWxldGUocHJvamVjdCxkZWxldGVJdGVtKVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBub0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24oY29uZmlybURpYWxvZywgKCkgPT4ge1xuICAgICAgICAgICAgY29uZmlybURpYWxvZy5jbG9zZSgnY2FuY2VsbGVkJylcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG4iLCJpbXBvcnQgaGlzdG9yeU9iaiBmcm9tICcuLi8uLi9jb21wb25lbnQvRGVmYXVsdCBQcm9qZWN0L2hpc3RvcnknXG5pbXBvcnQgcHJvamVjdENvbnRhaW5lck9iaiBmcm9tICcuLi8uLi9jb21wb25lbnQvcHJvamVjdENvbnRhaW5lcidcbmltcG9ydCBjbG9zZVRoaXMgZnJvbSAnLi4vY29tbW9uL2Nsb3NlVGhpcydcbmltcG9ydCBleGVjdXRlV2l0aEFuaW1hdGlvbiBmcm9tICcuLi9jb21tb24vZXhlY3V0ZVdpdGhBbmltYXRpb24nXG5pbXBvcnQgb3BlblRoaXMgZnJvbSAnLi4vY29tbW9uL29wZW5UaGlzJ1xuaW1wb3J0IHNldFByaW9yaXR5Q2xhc3MgZnJvbSAnLi4vY29tbW9uL3NldFByaW9yaXR5Q2xhc3MnXG5pbXBvcnQgeyBsb2FkRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJ1xuaW1wb3J0IHJlbmRlckxheW91dCBmcm9tICcuLi9yZW5kZXInXG5pbXBvcnQgeyBnZXRDdXJyZW50U3RhdGUsIHNldEN1cnJlbnRTdGF0ZSB9IGZyb20gJy4uL3N0YXRlJ1xuaW1wb3J0IHsgZGVsZXRlQ29uZmlybUhhbmRsZXIgfSBmcm9tICcuL2NvbmZpcm1EaWFsb2dIYW5kbGVyJ1xuaW1wb3J0IHsgb3BlbkRldGFpbCwgY2hhbmdlRGV0YWlsIH0gZnJvbSAnLi9kZXRhaWxIYW5kbGVyJ1xuaW1wb3J0IHsgZWRpdE5vdGVEaWFsb2dIYW5kbGVyLCBlZGl0VG9kb0RpYWxvZ0hhbmRsZXIgfSBmcm9tICcuL2VkaXREaWFsb2dIYW5kbGVyJ1xuaW1wb3J0IHsgaXNNZW51T3BlbiwgaXNQcm9qZWN0TGlzdE9wZW4sIG9wZW5NZW51LCBvcGVuUHJvamVjdExpc3QgfSBmcm9tICcuL21lbnVIYW5kbGVyJ1xuaW1wb3J0IG1vdmVEaWFsb2dIYW5kbGVyIGZyb20gJy4vbW92ZURpYWxvZ0hhbmRsZXInXG5pbXBvcnQgeyB1bmRvQ2hlY2tib3ggfSBmcm9tICcuL3VuZG9IYW5kbGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250ZW50SGFuZGxlcigpIHtcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X190aXRsZScpXG4gICAgY29uc3QgZGV0YWlsQnRuID0gdGl0bGVEaXYucXVlcnlTZWxlY3RvcignaScpXG4gICAgY29uc3QgY29udGVudEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnRfX2l0ZW0nKVxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFN0YXRlKClcblxuICAgIGZ1bmN0aW9uIGhhbmRsZURldGFpbENsaWNrKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjdXJyZW50UHJvamVjdC5nZXRJdGVtKGluZGV4KVxuICAgICAgICBjaGFuZ2VEZXRhaWwoaXRlbSlcbiAgICAgICAgb3BlbkRldGFpbCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRWRpdEJ1dHRvbkNsaWNrKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGVkaXREaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbV9fZWRpdC1kaWFsb2cnKVxuICAgICAgICBjb25zdCB0b2RvRm9ybSA9IGVkaXREaWFsb2cucXVlcnlTZWxlY3RvcignI3RvZG9fX2VkaXQtZm9ybScpXG4gICAgICAgIGNvbnN0IG5vdGVGb3JtID0gZWRpdERpYWxvZy5xdWVyeVNlbGVjdG9yKCcjbm90ZV9fZWRpdC1mb3JtJylcblxuICAgICAgICBlZGl0RGlhbG9nLnNob3dNb2RhbCgpXG4gICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnbm90ZScpKSB7XG4gICAgICAgICAgICBoYW5kbGVOb3RlRWRpdChub3RlRm9ybSwgdG9kb0Zvcm0sIGluZGV4KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGFuZGxlVG9kb0VkaXQodG9kb0Zvcm0sIG5vdGVGb3JtLCBpbmRleClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZU5vdGVFZGl0KG5vdGVGb3JtLCB0b2RvRm9ybSwgaW5kZXgpIHtcbiAgICAgICAgb3BlblRoaXMobm90ZUZvcm0pXG4gICAgICAgIGNsb3NlVGhpcyh0b2RvRm9ybSlcbiAgICAgICAgZWRpdE5vdGVEaWFsb2dIYW5kbGVyKGN1cnJlbnRQcm9qZWN0LmdldEl0ZW0oaW5kZXgpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvZG9FZGl0KHRvZG9Gb3JtLCBub3RlRm9ybSwgaW5kZXgpIHtcbiAgICAgICAgb3BlblRoaXModG9kb0Zvcm0pXG4gICAgICAgIGNsb3NlVGhpcyhub3RlRm9ybSlcbiAgICAgICAgZWRpdFRvZG9EaWFsb2dIYW5kbGVyKGN1cnJlbnRQcm9qZWN0LmdldEl0ZW0oaW5kZXgpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdmVCdXR0b25DbGljayhpdGVtLCBpbmRleCkge1xuICAgICAgICBjb25zdCBtb3ZlRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1fX21vdmUtZGlhbG9nJylcbiAgICAgICAgbW92ZURpYWxvZy5zaG93TW9kYWwoKVxuICAgICAgICBtb3ZlRGlhbG9nSGFuZGxlcihjdXJyZW50UHJvamVjdCwgaXRlbSwgaW5kZXgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlQnV0dG9uQ2xpY2soaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgY29uZmlybURpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtX19kaWFsb2cnKVxuICAgICAgICBjb25maXJtRGlhbG9nLnNob3dNb2RhbCgpXG4gICAgICAgIGRlbGV0ZUNvbmZpcm1IYW5kbGVyKGN1cnJlbnRQcm9qZWN0LCBpdGVtLCBpbmRleClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVQcmlvcml0eUJ1dHRvbkNsaWNrKGluZGV4LCBwcmlvcml0eUJ0bikge1xuICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9IGN1cnJlbnRQcm9qZWN0LmdldEl0ZW0oaW5kZXgpXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gY3VycmVudEl0ZW0uZ2V0VmFsdWUoKS5wcmlvcml0eVxuICAgICAgICBjb25zdCBuZXdQcmlvcml0eSA9IHByaW9yaXR5ID09PSAnbG93JyA/ICdtZWRpdW0nIDogcHJpb3JpdHkgPT09ICdtZWRpdW0nID8gJ2hpZ2gnIDogJ2xvdydcbiAgICAgICAgY3VycmVudEl0ZW0uY2hhbmdlUHJpb3JpdHkobmV3UHJpb3JpdHkpXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgncHJvamVjdENvbnRhaW5lcicsIHByb2plY3RDb250YWluZXJPYmopXG4gICAgICAgIHNldFByaW9yaXR5Q2xhc3MocHJpb3JpdHlCdG4sIG5ld1ByaW9yaXR5KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94Q2hhbmdlKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1lbnVPcGVuID0gaXNNZW51T3BlbigpXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0T3BlbiA9IGlzUHJvamVjdExpc3RPcGVuKClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaW5pc2hlZEl0ZW0gPSBjdXJyZW50UHJvamVjdC5nZXRJdGVtKGluZGV4KVxuICAgICAgICAgICAgZmluaXNoZWRJdGVtLmNoYW5nZVN0YXR1cygpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaW5pc2hlZEl0ZW0uZ2V0VmFsdWUoKS5zdGF0dXMpXG5cbiAgICAgICAgICAgIGNvbnN0IGhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlzdG9yeScpID8gbG9hZEZyb21Mb2NhbFN0b3JhZ2UoJ2hpc3RvcnknKSA6IGhpc3RvcnlPYmpcbiAgICAgICAgICAgIGhpc3RvcnkuYWRkSXRlbShmaW5pc2hlZEl0ZW0pXG4gICAgICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ2hpc3RvcnknLCBoaXN0b3J5KVxuICAgICAgICAgICAgY29uc29sZS5sb2coaGlzdG9yeS5nZXRBbGxJdGVtKCkpXG5cbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmRlbGV0ZUl0ZW0oaW5kZXgpXG4gICAgICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ3Byb2plY3RDb250YWluZXInLCBwcm9qZWN0Q29udGFpbmVyT2JqKVxuXG4gICAgICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbihpdGVtLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xvc2VUaGlzKGl0ZW0pXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFN0YXRlKGdldEN1cnJlbnRTdGF0ZSgpKVxuICAgICAgICAgICAgICAgIHJlbmRlckxheW91dCgpXG4gICAgICAgICAgICAgICAgaWYgKG1lbnVPcGVuKSBvcGVuTWVudShmYWxzZSlcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdExpc3RPcGVuKSBvcGVuUHJvamVjdExpc3QoKVxuICAgICAgICAgICAgICAgIHVuZG9DaGVja2JveChjdXJyZW50UHJvamVjdCwgZmluaXNoZWRJdGVtKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgNTAwKVxuICAgIH1cblxuICAgIGRldGFpbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2hhbmdlRGV0YWlsKGN1cnJlbnRQcm9qZWN0KVxuICAgICAgICBvcGVuRGV0YWlsKClcbiAgICB9KVxuXG4gICAgY29udGVudEl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzU2VhcmNoUmVzdWx0ID0gY3VycmVudFByb2plY3QuZ2V0VmFsdWUoKS50aXRsZSA9PT0gJ1NlYXJjaCBSZXN1bHQnXG4gICAgICAgIGNvbnN0IHRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKVxuICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZURldGFpbENsaWNrKGluZGV4KSlcblxuICAgICAgICBpZiAoIWlzU2VhcmNoUmVzdWx0KSB7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVfX2J0bicpXG4gICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVEZWxldGVCdXR0b25DbGljayhpdGVtLCBpbmRleCkpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmaW5pc2hlZCcpICYmICFpc1NlYXJjaFJlc3VsdCkge1xuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmVkaXRfX2J0bicpXG4gICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlRWRpdEJ1dHRvbkNsaWNrKGl0ZW0sIGluZGV4KSlcblxuICAgICAgICAgICAgY29uc3QgbW92ZUJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLm1vdmVfX2J0bicpXG4gICAgICAgICAgICBtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlTW92ZUJ1dHRvbkNsaWNrKGl0ZW0sIGluZGV4KSlcblxuICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCd0by1kbycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlCdG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eV9fYnRuJylcbiAgICAgICAgICAgICAgICBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZVByaW9yaXR5QnV0dG9uQ2xpY2soaW5kZXgsIHByaW9yaXR5QnRuKSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3hfX2lucHV0JylcbiAgICAgICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBoYW5kbGVDaGVja2JveENoYW5nZShpdGVtLCBpbmRleCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuIiwiaW1wb3J0IGNyZWF0ZURldGFpbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0xheW91dC9jcmVhdGVEZXRhaWxcIlxuaW1wb3J0IGNsb3NlVGhpcyBmcm9tIFwiLi4vY29tbW9uL2Nsb3NlVGhpc1wiXG5pbXBvcnQgZXhlY3V0ZVdpdGhBbmltYXRpb24gZnJvbSBcIi4uL2NvbW1vbi9leGVjdXRlV2l0aEFuaW1hdGlvblwiXG5pbXBvcnQgb3BlblRoaXMgZnJvbSBcIi4uL2NvbW1vbi9vcGVuVGhpc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRhaWxIYW5kbGVyKCl7XG4gICAgY29uc3QgZGV0YWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbCcpXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkZXRhaWwucXVlcnlTZWxlY3RvcignLmNsb3NlX19idG4nKVxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRldGFpbC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlX19idG4nKVxuXG5cbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xvc2VEZXRhaWwoKVxuICAgIH0pXG5cbiAgICAvLyBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAvLyB9KVxuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRGV0YWlsKG9iail7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpXG4gICAgY29uc3Qgb2xkRGV0YWlsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWwnKVxuICAgIGNvbnN0IG5ld0RldGFpbCA9IGNyZWF0ZURldGFpbChvYmopXG4gICAgXG4gICAgaWYob2xkRGV0YWlsICE9PSBudWxsKXtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG9sZERldGFpbClcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0RldGFpbClcbiAgICAgICAgb3BlblRoaXMobmV3RGV0YWlsKVxuICAgIH1lbHNle1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGV0YWlsKVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5EZXRhaWwoKXtcbiAgICBjb25zdCBkZXRhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsJylcbiAgICBjb25zdCBkZXRhaWxPcGVuID0gaXNEZXRhaWxPcGVuKClcbiAgICBpZighZGV0YWlsT3Blbil7XG4gICAgICAgIGRldGFpbC5zZXRBdHRyaWJ1dGUoJ29wZW5pbmcnLCcnKVxuICAgICAgICBvcGVuVGhpcyhkZXRhaWwpXG4gICAgICAgIGRldGFpbEhhbmRsZXIoKVxuICAgIH1lbHNle1xuICAgICAgICBkZXRhaWwucmVtb3ZlQXR0cmlidXRlKCdvcGVuaW5nJylcbiAgICAgICAgZGV0YWlsLnNldEF0dHJpYnV0ZSgnb3BlbicsJycpXG4gICAgICAgIG9wZW5UaGlzKGRldGFpbClcbiAgICAgICAgZGV0YWlsSGFuZGxlcigpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VEZXRhaWwoKXtcbiAgICBjb25zdCBkZXRhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsJylcbiAgICBleGVjdXRlV2l0aEFuaW1hdGlvbihkZXRhaWwsICgpID0+IHtcbiAgICAgICAgY2xvc2VUaGlzKGRldGFpbClcbiAgICAgICAgZGV0YWlsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZGV0YWlsKVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RldGFpbE9wZW4oKXtcbiAgICBjb25zdCBkZXRhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsJylcbiAgICBpZihkZXRhaWwgPT09IG51bGwpe1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9ZWxzZSBpZighZGV0YWlsLmNsYXNzTGlzdC5jb250YWlucygnZC1vZmYnKSl7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn0iLCJpbXBvcnQgeyBzZXQgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBwcm9qZWN0Q29udGFpbmVyT2JqIGZyb20gJy4uLy4uL2NvbXBvbmVudC9wcm9qZWN0Q29udGFpbmVyJ1xuaW1wb3J0IGV4ZWN1dGVXaXRoQW5pbWF0aW9uIGZyb20gJy4uL2NvbW1vbi9leGVjdXRlV2l0aEFuaW1hdGlvbidcbmltcG9ydCB7IHNhdmVUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4uL2xvY2FsU3RvcmFnZSdcbmltcG9ydCByZW5kZXJMYXlvdXQgZnJvbSAnLi4vcmVuZGVyJ1xuaW1wb3J0IHsgY2hhbmdlRGV0YWlsLCBpc0RldGFpbE9wZW4sIG9wZW5EZXRhaWwgfSBmcm9tICcuL2RldGFpbEhhbmRsZXInXG5pbXBvcnQgeyBpc01lbnVPcGVuLCBpc1Byb2plY3RMaXN0T3Blbiwgb3Blbk1lbnUsIG9wZW5Qcm9qZWN0TGlzdCB9IGZyb20gJy4vbWVudUhhbmRsZXInXG5pbXBvcnQgeyBnZXRDdXJyZW50U3RhdGUsIHNldEN1cnJlbnRTdGF0ZSB9IGZyb20gJy4uL3N0YXRlJ1xuXG5mdW5jdGlvbiBwb3B1bGF0ZVRvZG9Gb3JtKHRvZG9Gb3JtLCBpdGVtKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHN0YXJ0RGF0ZSwgZHVlRGF0ZX0gPSBpdGVtLmdldFZhbHVlKClcbiAgICB0b2RvRm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kb19fdGl0bGUtaW5wdXQnKS52YWx1ZSA9IHRpdGxlXG4gICAgdG9kb0Zvcm0ucXVlcnlTZWxlY3RvcignLnRvZG9fX2Rlcy1pbnB1dCcpLnZhbHVlID0gZGVzY3JpcHRpb25cbiAgICB0b2RvRm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kb19fc3RhcnQtaW5wdXQnKS52YWx1ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgdG9kb0Zvcm0ucXVlcnlTZWxlY3RvcignLnRvZG9fX2R1ZS1pbnB1dCcpLnZhbHVlID0gbmV3IERhdGUoZHVlRGF0ZSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTm90ZUZvcm0obm90ZUZvcm0sIGl0ZW0pIHtcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9ID0gaXRlbS5nZXRWYWx1ZSgpXG4gICAgbm90ZUZvcm0ucXVlcnlTZWxlY3RvcignLm5vdGVfX3RpdGxlLWlucHV0JykudmFsdWUgPSB0aXRsZVxuICAgIG5vdGVGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5ub3RlX19kZXMtaW5wdXQnKS52YWx1ZSA9IGRlc2NyaXB0aW9uXG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdEZvcm0ocHJvamVjdEZvcm0sIGl0ZW0pIHtcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9ID0gaXRlbS5nZXRWYWx1ZSgpXG4gICAgcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcignLnByb2plY3RfX3RpdGxlLWlucHV0JykudmFsdWUgPSB0aXRsZVxuICAgIHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19kZXMtaW5wdXQnKS52YWx1ZSA9IGRlc2NyaXB0aW9uXG59XG5cblxuZnVuY3Rpb24gYXR0YWNoRm9ybUxpc3RlbmVycyhlZGl0RGlhbG9nLCBpdGVtLCBzYXZlSGFuZGxlcikge1xuICAgIGNvbnN0IHNhdmVCdG4gPSBlZGl0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5hZGRfX2J0bicpXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZWRpdERpYWxvZy5xdWVyeVNlbGVjdG9yKCcuY2xvc2VfX2J0bicpXG5cbiAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbihlZGl0RGlhbG9nLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZW51T3BlbiA9IGlzTWVudU9wZW4oKVxuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3RPcGVuID0gaXNQcm9qZWN0TGlzdE9wZW4oKVxuICAgICAgICAgICAgLy8gY29uc3QgZGV0YWlsT3BlbiA9IGlzRGV0YWlsT3BlbigpXG4gICAgICAgICAgICBzYXZlSGFuZGxlcihpdGVtKVxuICAgICAgICAgICAgZWRpdERpYWxvZy5jbG9zZSgnc2F2ZWQnKVxuICAgICAgICAgICAgc2V0Q3VycmVudFN0YXRlKGdldEN1cnJlbnRTdGF0ZSgpKVxuICAgICAgICAgICAgcmVuZGVyTGF5b3V0KClcbiAgICAgICAgICAgIGlmIChtZW51T3Blbikgb3Blbk1lbnUoZmFsc2UpXG4gICAgICAgICAgICAvLyBpZiAoZGV0YWlsT3Blbil7XG4gICAgICAgICAgICAgICAgY2hhbmdlRGV0YWlsKGl0ZW0pXG4gICAgICAgICAgICAgICAgb3BlbkRldGFpbCgpXG4gICAgICAgICAgICAvLyB9IFxuICAgICAgICAgICAgaWYgKHByb2plY3RMaXN0T3Blbikgb3BlblByb2plY3RMaXN0KClcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbihlZGl0RGlhbG9nLCAoKSA9PiB7XG4gICAgICAgICAgICBlZGl0RGlhbG9nLmNsb3NlKCdjYW5jZWxsZWQnKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VG9kb0RpYWxvZ0hhbmRsZXIoaXRlbSkge1xuICAgIGNvbnN0IGVkaXREaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbV9fZWRpdC1kaWFsb2cnKVxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZWRpdERpYWxvZy5xdWVyeVNlbGVjdG9yKCcjdG9kb19fZWRpdC1mb3JtJylcbiAgICBwb3B1bGF0ZVRvZG9Gb3JtKHRvZG9Gb3JtLCBpdGVtKVxuICAgIGF0dGFjaEZvcm1MaXN0ZW5lcnMoZWRpdERpYWxvZywgaXRlbSwgKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHN0YXJ0RGF0ZSwgZHVlRGF0ZX0gPSB0b2RvRm9ybS5lbGVtZW50c1xuICAgICAgICBpdGVtLmNoYW5nZVZhbHVlKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgc3RhcnREYXRlLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBpdGVtLmdldFZhbHVlKCkucHJpb3JpdHkpXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgncHJvamVjdENvbnRhaW5lcicsIHByb2plY3RDb250YWluZXJPYmopXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXROb3RlRGlhbG9nSGFuZGxlcihpdGVtKSB7XG4gICAgY29uc3QgZWRpdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtX19lZGl0LWRpYWxvZycpXG4gICAgY29uc3Qgbm90ZUZvcm0gPSBlZGl0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNub3RlX19lZGl0LWZvcm0nKVxuICAgIHBvcHVsYXRlTm90ZUZvcm0obm90ZUZvcm0sIGl0ZW0pXG4gICAgYXR0YWNoRm9ybUxpc3RlbmVycyhlZGl0RGlhbG9nLCBpdGVtLCAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9ID0gbm90ZUZvcm0uZWxlbWVudHNcbiAgICAgICAgaXRlbS5jaGFuZ2VWYWx1ZSh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUpXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgncHJvamVjdENvbnRhaW5lcicsIHByb2plY3RDb250YWluZXJPYmopXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRQcm9qZWN0RGlhbG9nSGFuZGxlcihpdGVtKSB7XG4gICAgY29uc3QgZWRpdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtX19lZGl0LWRpYWxvZycpXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBlZGl0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0X19lZGl0LWZvcm0nKVxuICAgIHBvcHVsYXRlUHJvamVjdEZvcm0ocHJvamVjdEZvcm0sIGl0ZW0pXG4gICAgYXR0YWNoRm9ybUxpc3RlbmVycyhlZGl0RGlhbG9nLCBpdGVtLCAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9ID0gcHJvamVjdEZvcm0uZWxlbWVudHNcbiAgICAgICAgaXRlbS5jaGFuZ2VWYWx1ZSh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUpXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgncHJvamVjdENvbnRhaW5lcicsIHByb2plY3RDb250YWluZXJPYmopXG4gICAgfSlcbn1cbiIsImltcG9ydCBleGVjdXRlV2l0aEFuaW1hdGlvbiBmcm9tIFwiLi4vY29tbW9uL2V4ZWN1dGVXaXRoQW5pbWF0aW9uXCJcbmltcG9ydCBpdGVtRGlhbG9nSGFuZGxlciBmcm9tIFwiLi9pdGVtRGlhbG9nSGFuZGxlclwiXG5pbXBvcnQgeyBjbG9zZU1lbnUsIG9wZW5NZW51IH0gZnJvbSBcIi4vbWVudUhhbmRsZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXJIYW5kbGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJylcbiAgICBjb25zdCBtZW51QnRuID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19idG4nKVxuICAgIGNvbnN0IGFkZEJ0biA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcuYWRkX19idG4nKVxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fYmFyJylcblxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkLW9mZicpKXtcbiAgICAgICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKG5hdkJhciwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9wZW5NZW51KHRydWUpXG4gICAgICAgICAgICB9KSAgICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbihtZW51LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xvc2VNZW51KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1fX2FkZC1kaWFsb2cnKVxuICAgICAgICBpdGVtRGlhbG9nLnNob3dNb2RhbCgpXG4gICAgICAgIGl0ZW1EaWFsb2dIYW5kbGVyKClcbiAgICB9KVxufVxuIiwiaW1wb3J0IG9wZW5UaGlzIGZyb20gJy4uL2NvbW1vbi9vcGVuVGhpcydcbmltcG9ydCBjbG9zZVRoaXMgZnJvbSAnLi4vY29tbW9uL2Nsb3NlVGhpcydcbmltcG9ydCB0b2RvIGZyb20gJy4uLy4uL2NvbXBvbmVudC90b2RvJ1xuaW1wb3J0IG5vdGUgZnJvbSAnLi4vLi4vY29tcG9uZW50L25vdGUnXG5pbXBvcnQgcHJvamVjdENvbnRhaW5lck9iaiBmcm9tICcuLi8uLi9jb21wb25lbnQvcHJvamVjdENvbnRhaW5lcidcbmltcG9ydCByZW5kZXJMYXlvdXQgZnJvbSAnLi4vcmVuZGVyJ1xuaW1wb3J0IHsgaXNNZW51T3BlbiwgaXNQcm9qZWN0TGlzdE9wZW4sIG9wZW5NZW51LCBvcGVuUHJvamVjdExpc3QgfSBmcm9tICcuL21lbnVIYW5kbGVyJ1xuaW1wb3J0IHsgaXNEZXRhaWxPcGVuLCBvcGVuRGV0YWlsIH0gZnJvbSAnLi9kZXRhaWxIYW5kbGVyJ1xuaW1wb3J0IGV4ZWN1dGVXaXRoQW5pbWF0aW9uIGZyb20gJy4uL2NvbW1vbi9leGVjdXRlV2l0aEFuaW1hdGlvbidcbmltcG9ydCB7IHNhdmVUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4uL2xvY2FsU3RvcmFnZSdcbmltcG9ydCB7IHNldEN1cnJlbnRTdGF0ZSB9IGZyb20gJy4uL3N0YXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpdGVtRGlhbG9nSGFuZGxlcigpIHtcbiAgICBjb25zdCBpdGVtRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1fX2FkZC1kaWFsb2cnKVxuICAgIGNvbnN0IHNlbGVjdElucHV0ID0gaXRlbURpYWxvZy5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19pdGVtLWlucHV0JylcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvX19hZGQtZm9ybScpXG4gICAgY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZV9fYWRkLWZvcm0nKVxuICAgIGNvbnN0IGNsb3NlQnRuID0gaXRlbURpYWxvZy5xdWVyeVNlbGVjdG9yKCcuY2xvc2VfX2J0bicpXG4gICAgY29uc3QgYWRkQnRuID0gaXRlbURpYWxvZy5xdWVyeVNlbGVjdG9yKCcuYWRkX19idG4nKVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoRm9ybSgpIHtcbiAgICAgICAgY29uc3QgZm9ybVRvU2hvdyA9IHNlbGVjdElucHV0LnZhbHVlID09PSAndG8tZG8nID8gdG9kb0Zvcm0gOiBub3RlRm9ybVxuICAgICAgICBjb25zdCBmb3JtVG9IaWRlID0gc2VsZWN0SW5wdXQudmFsdWUgPT09ICd0by1kbycgPyBub3RlRm9ybSA6IHRvZG9Gb3JtXG4gICAgICAgIG9wZW5UaGlzKGZvcm1Ub1Nob3cpXG4gICAgICAgIGNsb3NlVGhpcyhmb3JtVG9IaWRlKVxuICAgIH1cblxuICAgIHNlbGVjdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHN3aXRjaEZvcm0pXG5cbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24oaXRlbURpYWxvZywgKCkgPT4ge1xuICAgICAgICAgICAgaXRlbURpYWxvZy5jbG9zZSgnY2FuY2VsZWQnKVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGxlZCA9IGNoZWNrVmFsdWUoKVxuICAgICAgICBpZihmaWxsZWQpe1xuICAgICAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24oaXRlbURpYWxvZywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVPcGVuID0gaXNNZW51T3BlbigpXG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsT3BlbiA9IGlzRGV0YWlsT3BlbigpXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3RPcGVuID0gaXNQcm9qZWN0TGlzdE9wZW4oKVxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RJbnB1dC52YWx1ZSA9PT0gJ3RvLWRvJykgYWRkVG9kbygpXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0SW5wdXQudmFsdWUgPT09ICdub3RlJykgYWRkTm90ZSgpXG4gICAgICAgICAgICAgICAgaXRlbURpYWxvZy5jbG9zZSgnYWRkZWQnKVxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRTdGF0ZShnZXRTZWxlY3RlZFByb2plY3QoKSlcbiAgICAgICAgICAgICAgICByZW5kZXJMYXlvdXQoKVxuICAgICAgICAgICAgICAgIGlmIChtZW51T3Blbikgb3Blbk1lbnUoZmFsc2UpXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RMaXN0T3Blbikgb3BlblByb2plY3RMaXN0KClcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWlsT3Blbikgb3BlbkRldGFpbCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGFkZFRvZG8oKSB7XG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvKClcbiAgICAgICAgcG9wdWxhdGVUb2RvKG5ld1RvZG8sIHRvZG9Gb3JtKVxuICAgICAgICBnZXRTZWxlY3RlZFByb2plY3QoKS5hZGRJdGVtKG5ld1RvZG8pXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgncHJvamVjdENvbnRhaW5lcicsIHByb2plY3RDb250YWluZXJPYmopXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTm90ZSgpIHtcbiAgICAgICAgY29uc3QgbmV3Tm90ZSA9IG5vdGUoKVxuICAgICAgICBwb3B1bGF0ZU5vdGUobmV3Tm90ZSwgbm90ZUZvcm0pXG4gICAgICAgIGdldFNlbGVjdGVkUHJvamVjdCgpLmFkZEl0ZW0obmV3Tm90ZSlcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdwcm9qZWN0Q29udGFpbmVyJywgcHJvamVjdENvbnRhaW5lck9iailcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVRvZG8oaXRlbSwgZm9ybSkge1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kb19fdGl0bGUtaW5wdXQnKVxuICAgICAgICBjb25zdCBkZXNJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnRvZG9fX2Rlcy1pbnB1dCcpXG4gICAgICAgIGNvbnN0IHN0YXJ0SW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19zdGFydC1pbnB1dCcpXG4gICAgICAgIGNvbnN0IGR1ZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kb19fZHVlLWlucHV0JylcbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnRvZG9fX3ByaW9yaXR5LWlucHV0JylcbiAgICAgICAgaXRlbS5jaGFuZ2VWYWx1ZSh0aXRsZUlucHV0LnZhbHVlLCBkZXNJbnB1dC52YWx1ZSwgc3RhcnRJbnB1dC52YWx1ZSwgZHVlSW5wdXQudmFsdWUsIHByaW9yaXR5SW5wdXQudmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVOb3RlKGl0ZW0sIGZvcm0pIHtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLm5vdGVfX3RpdGxlLWlucHV0JylcbiAgICAgICAgY29uc3QgZGVzSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5ub3RlX19kZXMtaW5wdXQnKVxuICAgICAgICBpdGVtLmNoYW5nZVZhbHVlKHRpdGxlSW5wdXQudmFsdWUsIGRlc0lucHV0LnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVmFsdWUoKXtcbiAgICAgICAgY29uc3QgZm9ybSA9IHNlbGVjdElucHV0LnZhbHVlID09PSAndG8tZG8nID8gdG9kb0Zvcm0gOiBub3RlRm9ybVxuICAgICAgICBpZihzZWxlY3RJbnB1dC52YWx1ZSA9PT0gJ3RvLWRvJyl7XG4gICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kb19fdGl0bGUtaW5wdXQnKVxuICAgICAgICAgICAgY29uc3QgZGVzSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19kZXMtaW5wdXQnKVxuICAgICAgICAgICAgY29uc3Qgc3RhcnRJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnRvZG9fX3N0YXJ0LWlucHV0JylcbiAgICAgICAgICAgIGNvbnN0IGR1ZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kb19fZHVlLWlucHV0JylcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19wcmlvcml0eS1pbnB1dCcpXG5cbiAgICAgICAgICAgIHJldHVybiB0aXRsZUlucHV0LnZhbHVlJiZkZXNJbnB1dC52YWx1ZSYmc3RhcnRJbnB1dC52YWx1ZSYmZHVlSW5wdXQudmFsdWUmJnByaW9yaXR5SW5wdXQudmFsdWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcubm90ZV9fdGl0bGUtaW5wdXQnKVxuICAgICAgICAgICAgY29uc3QgZGVzSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5ub3RlX19kZXMtaW5wdXQnKVxuXG4gICAgICAgICAgICByZXR1cm4gdGl0bGVJbnB1dC52YWx1ZSYmZGVzSW5wdXQudmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNlbGVjdGVkUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV9fcHJvamVjdC1pbnB1dCcpXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBwcm9qZWN0TGlzdC52YWx1ZVxuICAgICAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lck9iai5nZXRBbGxJdGVtKCkuZmluZChwcmogPT4gcHJqLmdldFZhbHVlKCkudGl0bGUgPT09IHNlbGVjdGVkVmFsdWUpXG4gICAgfVxufVxuIiwiaW1wb3J0IGluYm94IGZyb20gXCIuLi8uLi9jb21wb25lbnQvRGVmYXVsdCBQcm9qZWN0L2luYm94XCJcbmltcG9ydCB0b2RheSBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0RlZmF1bHQgUHJvamVjdC90b2RheVwiXG5pbXBvcnQgaGlzdG9yeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0RlZmF1bHQgUHJvamVjdC9oaXN0b3J5XCJcbmltcG9ydCB7IHNldEN1cnJlbnRTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZVwiXG5pbXBvcnQgcmVuZGVyTGF5b3V0IGZyb20gXCIuLi9yZW5kZXJcIlxuaW1wb3J0IHByb2plY3REaWFsb2dIYW5kbGVyIGZyb20gXCIuL3Byb2plY3REaWFsb2dIYW5kbGVyXCJcbmltcG9ydCBwcm9qZWN0Q29udGFpbmVyT2JqIGZyb20gXCIuLi8uLi9jb21wb25lbnQvcHJvamVjdENvbnRhaW5lclwiXG5pbXBvcnQgY2xvc2VUaGlzIGZyb20gXCIuLi9jb21tb24vY2xvc2VUaGlzXCJcbmltcG9ydCBvcGVuVGhpcyBmcm9tIFwiLi4vY29tbW9uL29wZW5UaGlzXCJcbmltcG9ydCB7IGRlbGV0ZVByb2plY3RDb25maXJtSGFuZGxlciB9IGZyb20gXCIuL2NvbmZpcm1EaWFsb2dIYW5kbGVyXCJcbmltcG9ydCB7IGVkaXRQcm9qZWN0RGlhbG9nSGFuZGxlciB9IGZyb20gXCIuL2VkaXREaWFsb2dIYW5kbGVyXCJcbmltcG9ydCBzZWFyY2hSZXN1bHQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9EZWZhdWx0IFByb2plY3Qvc2VhcmNoUmVzdWx0XCJcbmltcG9ydCBzZWFyY2hBbGxJdGVtcyBmcm9tIFwiLi4vY29tbW9uL3NlYXJjaEFsbEl0ZW1zXCJcbmltcG9ydCBhcHBlYXJhbmNlSGFuZGxlciBmcm9tIFwiLi9hcHBlYXJhbmNlSGFuZGxlclwiXG5pbXBvcnQgeyBsb2FkRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2xvY2FsU3RvcmFnZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVIYW5kbGVyKCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpXG4gICAgY29uc3QgaW5ib3hOYXYgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveF9fbmF2JylcbiAgICBjb25zdCB0b2RheU5hdiA9IG1lbnUucXVlcnlTZWxlY3RvcignLnRvZGF5X19uYXYnKVxuICAgIGNvbnN0IHByb2plY3ROYXYgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19uYXYnKVxuICAgIGNvbnN0IGhpc3RvcnlOYXYgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5oaXN0b3J5X19uYXYnKVxuICAgIGNvbnN0IHByb2plY3RBZGRCdXR0b24gPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19hZGQtYnRuIGJ1dHRvbicpXG4gICAgY29uc3QgcHJvamVjdExpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0X19saXN0LWl0ZW0nKVxuICAgIGNvbnN0IHNlYXJjaEJ0biA9IG1lbnUucXVlcnlTZWxlY3RvcignLnNlYXJjaF9faWNvbicpXG4gICAgY29uc3QgYXBwZWFyYW5jZUJ0biA9IG1lbnUucXVlcnlTZWxlY3RvcignLm1lbnVfX2JvdCcpXG5cbiAgICBpbmJveE5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG5hdkNsaWNrSGFuZGxlcihwcm9qZWN0Q29udGFpbmVyT2JqLmdldEl0ZW0oMCkpKVxuICAgIHRvZGF5TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbmF2Q2xpY2tIYW5kbGVyKHByb2plY3RDb250YWluZXJPYmouZ2V0SXRlbSgxKSkpXG4gICAgcHJvamVjdE5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVByb2plY3RMaXN0KVxuICAgIGhpc3RvcnlOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaXN0b3J5Jykpe1xuICAgICAgICAgICAgbmF2Q2xpY2tIYW5kbGVyKGxvYWRGcm9tTG9jYWxTdG9yYWdlKCdoaXN0b3J5JykpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbmF2Q2xpY2tIYW5kbGVyKGhpc3RvcnkpXG4gICAgICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ2hpc3RvcnknLCBoaXN0b3J5KVxuICAgICAgICB9XG4gICAgfSlcbiAgICBwcm9qZWN0QWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJvamVjdEFkZEJ1dHRvbkNsaWNrKVxuXG4gICAgcHJvamVjdExpc3RJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3Rvcignc3BhbicpXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0X19idG4nKVxuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVfX2J0bicpXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdENvbnRhaW5lck9iai5nZXRBbGxJdGVtKClcbiAgICAgICAgY29uc3QgdGFyZ2V0UHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJqID0+IHByai5nZXRWYWx1ZSgpLnRpdGxlID09PSBpdGVtLnRleHRDb250ZW50KVxuXG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlVGl0bGVDbGljayh0YXJnZXRQcm9qZWN0KSlcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZUVkaXRCdXR0b25DbGljayh0YXJnZXRQcm9qZWN0KSlcbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlRGVsZXRlQnV0dG9uQ2xpY2sodGl0bGUudGV4dENvbnRlbnQpKVxuICAgIH0pXG5cbiAgICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTZWFyY2hCdXR0b25DbGljaylcblxuICAgIGFwcGVhcmFuY2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFwcGVhcmFuY2VIYW5kbGVyKVxufVxuXG5mdW5jdGlvbiBuYXZDbGlja0hhbmRsZXIocHJvamVjdCkge1xuICAgIGNvbnN0IGxpc3RPcGVuID0gaXNQcm9qZWN0TGlzdE9wZW4oKVxuICAgIHNldEN1cnJlbnRTdGF0ZShwcm9qZWN0KVxuICAgIHJlbmRlckxheW91dCgpXG4gICAgb3Blbk1lbnUoZmFsc2UpXG4gICAgaWYobGlzdE9wZW4pIHRvZ2dsZVByb2plY3RMaXN0KClcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdExpc3QoKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51IHVsJylcbiAgICBsaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2Qtb2ZmJylcbiAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdycpXG4gICAgYXJyb3cuY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlLTE4MCcpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RBZGRCdXR0b25DbGljaygpIHtcbiAgICBjb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfX2FkZC1kaWFsb2cnKVxuICAgIHByb2plY3REaWFsb2cuc2hvd01vZGFsKClcbiAgICBwcm9qZWN0RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2RmJylcbiAgICBwcm9qZWN0RGlhbG9nSGFuZGxlcigpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRpdGxlQ2xpY2socHJvamVjdCkge1xuICAgIHNldEN1cnJlbnRTdGF0ZShwcm9qZWN0KVxuICAgIHJlbmRlckxheW91dCgpXG4gICAgb3Blbk1lbnUoZmFsc2UpXG4gICAgb3BlblByb2plY3RMaXN0KClcbn1cblxuZnVuY3Rpb24gaGFuZGxlRWRpdEJ1dHRvbkNsaWNrKHByb2plY3QpIHtcbiAgICBjb25zdCBlZGl0RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1fX2VkaXQtZGlhbG9nJylcbiAgICBjb25zdCB0b2RvRm9ybSA9IGVkaXREaWFsb2cucXVlcnlTZWxlY3RvcignI3RvZG9fX2VkaXQtZm9ybScpXG4gICAgY29uc3Qgbm90ZUZvcm0gPSBlZGl0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNub3RlX19lZGl0LWZvcm0nKVxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZWRpdERpYWxvZy5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdF9fZWRpdC1mb3JtJylcblxuICAgIGVkaXREaWFsb2cuc2hvd01vZGFsKClcbiAgICBvcGVuVGhpcyhwcm9qZWN0Rm9ybSlcbiAgICBjbG9zZVRoaXMobm90ZUZvcm0pXG4gICAgY2xvc2VUaGlzKHRvZG9Gb3JtKVxuICAgIGVkaXRQcm9qZWN0RGlhbG9nSGFuZGxlcihwcm9qZWN0KVxuICAgIG9wZW5Qcm9qZWN0TGlzdCgpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrKHRpdGxlKSB7XG4gICAgY29uc3QgY29uZmlybURpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtX19kaWFsb2cnKVxuICAgIGNvbmZpcm1EaWFsb2cuc2hvd01vZGFsKClcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RDb250YWluZXJPYmouZ2V0QWxsSXRlbSgpLmZpbmRJbmRleChwcmogPT4gcHJqLmdldFZhbHVlKCkudGl0bGUgPT09IHRpdGxlKVxuICAgIGRlbGV0ZVByb2plY3RDb25maXJtSGFuZGxlcihwcm9qZWN0Q29udGFpbmVyT2JqLCBpbmRleClcbn1cblxuZnVuY3Rpb24gaGFuZGxlU2VhcmNoQnV0dG9uQ2xpY2soKSB7XG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19pbnB1dCcpXG4gICAgaWYgKHNlYXJjaElucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHRPYmogPSBzZWFyY2hSZXN1bHQoKVxuICAgICAgICBjb25zdCByZXN1bHRzID0gc2VhcmNoQWxsSXRlbXMoc2VhcmNoSW5wdXQudmFsdWUpXG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaChpdGVtID0+IHNlYXJjaFJlc3VsdE9iai5hZGRJdGVtKGl0ZW0pKVxuICAgICAgICBzZXRDdXJyZW50U3RhdGUoc2VhcmNoUmVzdWx0T2JqKVxuICAgICAgICByZW5kZXJMYXlvdXQoKVxuICAgICAgICBvcGVuTWVudShmYWxzZSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2plY3RMaXN0T3BlbigpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUgdWwnKVxuICAgIHJldHVybiAhbGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ2Qtb2ZmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Qcm9qZWN0TGlzdCgpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUgdWwnKVxuICAgIGNvbnN0IGFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93JylcbiAgICBsaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtb2ZmJylcbiAgICBhcnJvdy5jbGFzc0xpc3QuYWRkKCdyb3RhdGUtMTgwJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTWVudU9wZW4oKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JylcbiAgICByZXR1cm4gIW1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkLW9mZicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuTWVudShhbmltYXRlZCkge1xuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2JhcicpXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JylcbiAgICBjbG9zZVRoaXMobmF2QmFyKVxuICAgIGlmIChhbmltYXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgb3BlblRoaXMobWVudSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ3NsaWRlSW5MZWZ0JylcbiAgICAgICAgb3BlblRoaXMobWVudSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1lbnUoKSB7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fYmFyJylcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKVxuICAgIGNsb3NlVGhpcyhtZW51KVxuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCdzbGlkZUluTGVmdCcpXG4gICAgb3BlblRoaXMobmF2QmFyKVxufVxuIiwiaW1wb3J0IHByb2plY3RDb250YWluZXJPYmogZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9wcm9qZWN0Q29udGFpbmVyXCJcbmltcG9ydCBjbG9zZVRoaXMgZnJvbSBcIi4uL2NvbW1vbi9jbG9zZVRoaXNcIlxuaW1wb3J0IGV4ZWN1dGVXaXRoQW5pbWF0aW9uIGZyb20gXCIuLi9jb21tb24vZXhlY3V0ZVdpdGhBbmltYXRpb25cIlxuaW1wb3J0IHsgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2xvY2FsU3RvcmFnZVwiXG5pbXBvcnQgcmVuZGVyTGF5b3V0IGZyb20gXCIuLi9yZW5kZXJcIlxuaW1wb3J0IHsgaXNNZW51T3BlbiwgaXNQcm9qZWN0TGlzdE9wZW4sIG9wZW5NZW51LCBvcGVuUHJvamVjdExpc3QgfSBmcm9tIFwiLi9tZW51SGFuZGxlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vdmVEaWFsb2dIYW5kbGVyKGN1cnIsIGl0ZW0sIGluZGV4KXtcbiAgICBjb25zdCBtb3ZlRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1fX21vdmUtZGlhbG9nJylcbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBtb3ZlRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtX19wcm9qZWN0LWlucHV0JylcbiAgICBjb25zdCBzYXZlQnRuID0gbW92ZURpYWxvZy5xdWVyeVNlbGVjdG9yKCcuYWRkX19idG4nKVxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IG1vdmVEaWFsb2cucXVlcnlTZWxlY3RvcignLmNsb3NlX19idG4nKVxuXG4gICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0Q29udGFpbmVyT2JqLmdldEFsbEl0ZW0oKVxuXG4gICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbWVudU9wZW4gPSBpc01lbnVPcGVuKClcbiAgICAgICAgY29uc3QgbGlzdE9wZW4gPSBpc1Byb2plY3RMaXN0T3BlbigpXG4gICAgICAgIGNvbnN0IG1vdmVJdGVtID0gY3Vyci5nZXRJdGVtKGluZGV4KVxuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb2plY3RzLmZpbmQocHJqID0+IHByai5nZXRWYWx1ZSgpLnRpdGxlID09PSBwcm9qZWN0SW5wdXQudmFsdWUpXG4gICAgICAgIGN1cnIuZGVsZXRlSXRlbShpbmRleClcbiAgICAgICAgZGVzdGluYXRpb24uYWRkSXRlbShtb3ZlSXRlbSlcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCdwcm9qZWN0Q29udGFpbmVyJywgcHJvamVjdENvbnRhaW5lck9iailcbiAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24obW92ZURpYWxvZywgKCkgPT4ge1xuICAgICAgICAgICAgbW92ZURpYWxvZy5jbG9zZSgnc2F2ZWQnKVxuICAgICAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24oaXRlbSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsb3NlVGhpcyhpdGVtKVxuICAgICAgICAgICAgICAgIHJlbmRlckxheW91dCgpXG4gICAgICAgICAgICAgICAgaWYobWVudU9wZW4pIG9wZW5NZW51KGZhbHNlKVxuICAgICAgICAgICAgICAgIGlmKGxpc3RPcGVuKSBvcGVuUHJvamVjdExpc3QoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbihtb3ZlRGlhbG9nLCAoKSA9PiB7XG4gICAgICAgICAgICBtb3ZlRGlhbG9nLmNsb3NlKCdjYW5jZWxlZCcpXG4gICAgICAgIH0pXG4gICAgfSlcbn0iLCJpbXBvcnQgaGlzdG9yeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0RlZmF1bHQgUHJvamVjdC9oaXN0b3J5XCJcbmltcG9ydCB7IHNldEN1cnJlbnRTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZVwiXG5pbXBvcnQgcmVuZGVyTGF5b3V0IGZyb20gXCIuLi9yZW5kZXJcIlxuaW1wb3J0IHsgb3Blbk1lbnUsIG9wZW5Qcm9qZWN0TGlzdCB9IGZyb20gXCIuL21lbnVIYW5kbGVyXCJcbmltcG9ydCBhcHBlYXJhbmNlSGFuZGxlciBmcm9tIFwiLi9hcHBlYXJhbmNlSGFuZGxlclwiXG5pbXBvcnQgeyBsb2FkRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2xvY2FsU3RvcmFnZVwiXG5pbXBvcnQgcHJvamVjdENvbnRhaW5lck9iaiBmcm9tIFwiLi4vLi4vY29tcG9uZW50L3Byb2plY3RDb250YWluZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZIYW5kbGVyKCl7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fYmFyJylcbiAgICBjb25zdCBzZWFyY2hOYXYgPSBuYXZCYXIucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fbmF2JylcbiAgICBjb25zdCBpbmJveE5hdiA9IG5hdkJhci5xdWVyeVNlbGVjdG9yKCcuaW5ib3hfX25hdicpXG4gICAgY29uc3QgdG9kYXlOYXYgPSBuYXZCYXIucXVlcnlTZWxlY3RvcignLnRvZGF5X19uYXYnKVxuICAgIGNvbnN0IHByb2plY3ROYXYgPSBuYXZCYXIucXVlcnlTZWxlY3RvcignLnByb2plY3RfX25hdicpXG4gICAgY29uc3QgaGlzdG9yeU5hdiA9IG5hdkJhci5xdWVyeVNlbGVjdG9yKCcuaGlzdG9yeV9fbmF2JylcbiAgICBjb25zdCBhcHBlYXJhbmNlQnRuID0gbmF2QmFyLnF1ZXJ5U2VsZWN0b3IoJy5hcHBlYXJhbmNlX19tb2RlJylcblxuICAgIHNlYXJjaE5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5NZW51KCkpXG4gICAgXG4gICAgaW5ib3hOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRTdGF0ZShwcm9qZWN0Q29udGFpbmVyT2JqLmdldEl0ZW0oMCkpXG4gICAgICAgIHJlbmRlckxheW91dCgpXG4gICAgfSlcbiAgICB0b2RheU5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFN0YXRlKHByb2plY3RDb250YWluZXJPYmouZ2V0SXRlbSgxKSlcbiAgICAgICAgcmVuZGVyTGF5b3V0KClcbiAgICB9KVxuICAgIHByb2plY3ROYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG9wZW5NZW51KClcbiAgICAgICAgb3BlblByb2plY3RMaXN0KClcbiAgICB9KVxuICAgIGhpc3RvcnlOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaXN0b3J5Jykpe1xuICAgICAgICAgICAgc2V0Q3VycmVudFN0YXRlKGxvYWRGcm9tTG9jYWxTdG9yYWdlKCdoaXN0b3J5JykpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2V0Q3VycmVudFN0YXRlKGhpc3RvcnkpXG4gICAgICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ2hpc3RvcnknLCBoaXN0b3J5KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZW5kZXJMYXlvdXQoKVxuICAgIH0pXG5cbiAgICBhcHBlYXJhbmNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwZWFyYW5jZUhhbmRsZXIpXG59XG5cbiIsIi8vIEZvciBwcm9qZWN0RGlhbG9nSGFuZGxlclxuaW1wb3J0IHByb2plY3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9wcm9qZWN0XCJcbmltcG9ydCBwcm9qZWN0Q29udGFpbmVyT2JqIGZyb20gXCIuLi8uLi9jb21wb25lbnQvcHJvamVjdENvbnRhaW5lclwiXG5pbXBvcnQgZXhlY3V0ZVdpdGhBbmltYXRpb24gZnJvbSBcIi4uL2NvbW1vbi9leGVjdXRlV2l0aEFuaW1hdGlvblwiXG5pbXBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vbG9jYWxTdG9yYWdlXCJcbmltcG9ydCByZW5kZXJMYXlvdXQgZnJvbSBcIi4uL3JlbmRlclwiXG5pbXBvcnQgeyBzZXRDdXJyZW50U3RhdGUgfSBmcm9tIFwiLi4vc3RhdGVcIlxuaW1wb3J0IHsgb3Blbk1lbnUsIG9wZW5Qcm9qZWN0TGlzdCB9IGZyb20gXCIuL21lbnVIYW5kbGVyXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdERpYWxvZ0hhbmRsZXIoKSB7XG4gICAgY29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0X19hZGQtZGlhbG9nJylcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0X19hZGQtZm9ybScpXG4gICAgY29uc3QgbmFtZUlucHV0ID0gcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcignLnByb2plY3RfX3RpdGxlLWlucHV0JylcbiAgICBjb25zdCBkZXNJbnB1dCA9IHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19kZXMtaW5wdXQnKVxuICAgIGNvbnN0IGFkZEJ0biA9IHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5hZGRfX2J0bicpXG4gICAgY29uc3QgY2xvc2VCdG4gPSBwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKCcuY2xvc2VfX2J0bicpXG5cbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24ocHJvamVjdERpYWxvZywgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdEZvcm0ucmVtb3ZlQXR0cmlidXRlKCdub3ZhbGlkYXRlJylcbiAgICAgICAgICAgIHByb2plY3REaWFsb2cuY2xvc2UoJ2NhbmNlbGVkJylcbiAgICAgICAgICAgIHByb2plY3REaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnZGYnKVxuICAgICAgICAgICAgcHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJywgJ3RydWUnKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9KVxuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RDb250YWluZXJPYmouZ2V0QWxsSXRlbSgpXG4gICAgICAgIGNvbnN0IG5hbWVWYWx1ZSA9IG5hbWVJbnB1dC52YWx1ZS50cmltKClcbiAgICAgICAgY29uc3QgZGVzVmFsdWUgPSBkZXNJbnB1dC52YWx1ZS50cmltKClcbiAgICAgICAgXG4gICAgICAgIGlmIChuYW1lVmFsdWUgJiYgZGVzVmFsdWUpIHtcbiAgICAgICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKHByb2plY3REaWFsb2csICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1Byb2plY3QgPSBhbGxQcm9qZWN0cy5maW5kKHByaiA9PiBwcmouZ2V0VmFsdWUoKS50aXRsZSA9PT0gbmFtZVZhbHVlKVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KClcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdQcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3QuY2hhbmdlVmFsdWUobmFtZVZhbHVlICsgJzEnLCBkZXNWYWx1ZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LmNoYW5nZVZhbHVlKG5hbWVWYWx1ZSwgZGVzVmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXJPYmouYWRkSXRlbShuZXdQcm9qZWN0KVxuICAgICAgICAgICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgncHJvamVjdENvbnRhaW5lcicsIHByb2plY3RDb250YWluZXJPYmopXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFN0YXRlKG5ld1Byb2plY3QpXG4gICAgICAgICAgICAgICAgcmVuZGVyTGF5b3V0KClcbiAgICAgICAgICAgICAgICBvcGVuTWVudShmYWxzZSlcbiAgICAgICAgICAgICAgICBvcGVuUHJvamVjdExpc3QoKVxuICAgICAgICAgICAgfSkgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRW1wdHkgaW5wdXQnKVxuICAgICAgICB9ICAgICAgICAgICAgXG4gICAgfSlcbn0iLCJpbXBvcnQgaGlzdG9yeU9iaiBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0RlZmF1bHQgUHJvamVjdC9oaXN0b3J5XCJcbmltcG9ydCBjcmVhdGVVbmRvQm94IGZyb20gXCIuLi8uLi9jb21wb25lbnQvTGF5b3V0L2NyZWF0ZVVuZG9Cb3hcIlxuaW1wb3J0IHByb2plY3RDb250YWluZXJPYmogZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9wcm9qZWN0Q29udGFpbmVyXCJcbmltcG9ydCBleGVjdXRlV2l0aEFuaW1hdGlvbiBmcm9tIFwiLi4vY29tbW9uL2V4ZWN1dGVXaXRoQW5pbWF0aW9uXCJcbmltcG9ydCB7IHNhdmVUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9sb2NhbFN0b3JhZ2VcIlxuaW1wb3J0IHJlbmRlckxheW91dCBmcm9tIFwiLi4vcmVuZGVyXCJcbmltcG9ydCB7IGlzTWVudU9wZW4sIGlzUHJvamVjdExpc3RPcGVuLCBvcGVuTWVudSwgb3BlblByb2plY3RMaXN0IH0gZnJvbSBcIi4vbWVudUhhbmRsZXJcIlxuXG5sZXQgdW5kb0JveFF1ZXVlID0gW10gLy8gUXVldWUgdG8gc3RvcmUgdW5kb0JveCBlbGVtZW50c1xuXG5mdW5jdGlvbiBhZGRUb1F1ZXVlKGl0ZW0pe1xuICAgIHVuZG9Cb3hRdWV1ZS5wdXNoKGl0ZW0pXG59IFxuXG5mdW5jdGlvbiByZW1vdmVVbmRvQm94KHVuZG9Cb3gpIHtcbiAgICBjb25zdCBpbmRleCA9IHVuZG9Cb3hRdWV1ZS5pbmRleE9mKHVuZG9Cb3gpXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB1bmRvQm94UXVldWUuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB1bmRvQm94LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodW5kb0JveCkgXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1VuZG9Cb3hRdWV1ZSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdW5kb0JveCA9IHVuZG9Cb3hRdWV1ZS5zaGlmdCgpIC8vIEdldCB0aGUgZmlyc3QgdW5kb0JveCBmcm9tIHRoZSBxdWV1ZVxuICAgICAgICBpZiAodW5kb0JveCkge1xuICAgICAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24odW5kb0JveCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHVuZG9Cb3gucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh1bmRvQm94KSAvLyBSZW1vdmUgdGhlIHVuZG9Cb3ggZnJvbSB0aGUgRE9NXG4gICAgICAgICAgICAgICAgY2hlY2tVbmRvQm94UXVldWUoKSAvLyBDaGVjayB0aGUgcXVldWUgZm9yIG1vcmUgdW5kb0JveCBlbGVtZW50c1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSAgXG4gICAgfSwgMzAwMClcbn1cblxuXG5mdW5jdGlvbiB1bmRvRGVsZXRlSGFuZGxlcihwcm9qZWN0LCBpdGVtLCB1bmRvQm94KXtcbiAgICBjb25zdCB1bmRvQnRuID0gdW5kb0JveC5xdWVyeVNlbGVjdG9yKCcudW5kb19fYnRuJylcbiAgICBjb25zdCBjbG9zZUJ0biA9IHVuZG9Cb3gucXVlcnlTZWxlY3RvcignLmNsb3NlX19idG4nKVxuXG4gICAgdW5kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbWVudU9wZW4gPSBpc01lbnVPcGVuKClcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RPcGVuID0gaXNQcm9qZWN0TGlzdE9wZW4oKVxuICAgICAgICBleGVjdXRlV2l0aEFuaW1hdGlvbih1bmRvQm94LCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LmFkZEl0ZW0oaXRlbSlcbiAgICAgICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgncHJvamVjdENvbnRhaW5lcicsIHByb2plY3RDb250YWluZXJPYmopXG4gICAgICAgICAgICByZW1vdmVVbmRvQm94KHVuZG9Cb3gpXG4gICAgICAgICAgICByZW5kZXJMYXlvdXQoKVxuICAgICAgICAgICAgaWYobWVudU9wZW4pIG9wZW5NZW51KGZhbHNlKVxuICAgICAgICAgICAgaWYocHJvamVjdExpc3RPcGVuKSBvcGVuUHJvamVjdExpc3QoKVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24odW5kb0JveCwgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlVW5kb0JveCh1bmRvQm94KVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHVuZG9DaGVja2JveEhhbmRsZXIocHJvamVjdCwgaXRlbSwgdW5kb0JveCl7XG4gICAgY29uc3QgdW5kb0J0biA9IHVuZG9Cb3gucXVlcnlTZWxlY3RvcignLnVuZG9fX2J0bicpXG4gICAgY29uc3QgY2xvc2VCdG4gPSB1bmRvQm94LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZV9fYnRuJylcblxuICAgIHVuZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lbnVPcGVuID0gaXNNZW51T3BlbigpXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0T3BlbiA9IGlzUHJvamVjdExpc3RPcGVuKClcbiAgICAgICAgZXhlY3V0ZVdpdGhBbmltYXRpb24odW5kb0JveCwgKCkgPT4ge1xuICAgICAgICAgICAgaXRlbS5jaGFuZ2VTdGF0dXMoKVxuICAgICAgICAgICAgcHJvamVjdC5hZGRJdGVtKGl0ZW0pXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGhpc3RvcnlPYmouZ2V0QWxsSXRlbSgpLmZpbmRJbmRleChvYmogPT4gb2JqLmdldFZhbHVlKCkudGl0bGUgPT09IGl0ZW0uZ2V0VmFsdWUoKS50aXRsZSlcbiAgICAgICAgICAgIGhpc3RvcnlPYmouZGVsZXRlSXRlbShpbmRleClcbiAgICAgICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgncHJvamVjdENvbnRhaW5lcicsIHByb2plY3RDb250YWluZXJPYmopXG4gICAgICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoJ2hpc3RvcnknLCBoaXN0b3J5T2JqKVxuICAgICAgICAgICAgcmVtb3ZlVW5kb0JveCh1bmRvQm94KVxuICAgICAgICAgICAgcmVuZGVyTGF5b3V0KClcbiAgICAgICAgICAgIGlmKG1lbnVPcGVuKSBvcGVuTWVudShmYWxzZSlcbiAgICAgICAgICAgIGlmKHByb2plY3RMaXN0T3Blbikgb3BlblByb2plY3RMaXN0KClcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGVXaXRoQW5pbWF0aW9uKHVuZG9Cb3gsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZVVuZG9Cb3godW5kb0JveClcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5kb0NoZWNrYm94KHByb2plY3QsaXRlbSl7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgICAgIGNvbnN0IHVuZG9Cb3ggPSBjcmVhdGVVbmRvQm94KCcxIGl0ZW0gbWFya2VkIGZpbmlzaGVkJylcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh1bmRvQm94KVxuICAgICAgICB1bmRvQ2hlY2tib3hIYW5kbGVyKHByb2plY3QsIGl0ZW0sIHVuZG9Cb3gpIFxuICAgICAgICBhZGRUb1F1ZXVlKHVuZG9Cb3gpIFxuICAgICAgICBjaGVja1VuZG9Cb3hRdWV1ZSgpIFxuICAgIH0sIDUwMClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuZG9EZWxldGUocHJvamVjdCxpdGVtKXtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICAgICAgY29uc3QgdW5kb0JveCA9IGNyZWF0ZVVuZG9Cb3goJzEgaXRlbSBkZWxldGVkJylcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh1bmRvQm94KVxuICAgICAgICB1bmRvRGVsZXRlSGFuZGxlcihwcm9qZWN0LCBpdGVtLCB1bmRvQm94KSBcbiAgICAgICAgYWRkVG9RdWV1ZSh1bmRvQm94KSBcbiAgICAgICAgY2hlY2tVbmRvQm94UXVldWUoKSBcbiAgICB9LCA1MDApXG59XG5cbiIsImV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgY29uc3Qgc2lnbiA9IG51bWJlciA8IDAgPyBcIi1cIiA6IFwiXCI7XG4gIGNvbnN0IG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKS5wYWRTdGFydCh0YXJnZXRMZW5ndGgsIFwiMFwiKTtcbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59XG4iLCJsZXQgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn1cbiIsImltcG9ydCB7IGdldERheU9mWWVhciB9IGZyb20gXCIuLi8uLi9nZXREYXlPZlllYXIubWpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuLi8uLi9nZXRJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IGdldFdlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vlay5tanNcIjtcbmltcG9ydCB7IGdldFdlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5tanNcIjtcbmltcG9ydCB7IGxpZ2h0Rm9ybWF0dGVycyB9IGZyb20gXCIuL2xpZ2h0Rm9ybWF0dGVycy5tanNcIjtcblxuY29uc3QgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06IFwiYW1cIixcbiAgcG06IFwicG1cIixcbiAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgbm9vbjogXCJub29uXCIsXG4gIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICBuaWdodDogXCJuaWdodFwiLFxufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbmV4cG9ydCBjb25zdCBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGVyYSA9IGRhdGUuZ2V0RnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgXCJHXCI6XG4gICAgICBjYXNlIFwiR0dcIjpcbiAgICAgIGNhc2UgXCJHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIiB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgXCJHR0dHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJuYXJyb3dcIiB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlIFwiR0dHR1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwid2lkZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJ5b1wiKSB7XG4gICAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzaWduZWRXZWVrWWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3Qgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjtcblxuICAgIC8vIFR3byBkaWdpdCB5ZWFyXG4gICAgaWYgKHRva2VuID09PSBcIllZXCIpIHtcbiAgICAgIGNvbnN0IHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH1cblxuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcIllvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGlzb1dlZWtZZWFyID0gZ2V0SVNPV2Vla1llYXIoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJRXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcIlFRXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJRb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwiUVFRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwiUVFRUVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcInFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcInFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJxcXFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJxcXFxXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJNb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJNTU1NXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJMb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJMTExMXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB3ZWVrID0gZ2V0V2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJ3b1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBpc29XZWVrID0gZ2V0SVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJJb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiZG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXREYXRlKCksIHsgdW5pdDogXCJkYXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZZZWFyID0gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIkRvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwgeyB1bml0OiBcImRheU9mWWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcIkVcIjpcbiAgICAgIGNhc2UgXCJFRVwiOlxuICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJFRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlIFwiZVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJlZVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImVvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImVlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImVlZWVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiY2NcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImNvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImNjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSBcImlcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcbiAgICAgIGNhc2UgXCJpaVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSBcImlvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImlpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImlpaWlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJiXCI6XG4gICAgICBjYXNlIFwiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImJiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYmJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiQlwiOlxuICAgICAgY2FzZSBcIkJCXCI6XG4gICAgICBjYXNlIFwiQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImhvXCIpIHtcbiAgICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIkhvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0SG91cnMoKSwgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSBcIktvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09IFwia29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJtb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldE1pbnV0ZXMoKSwgeyB1bml0OiBcIm1pbnV0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwic29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRTZWNvbmRzKCksIHsgdW5pdDogXCJzZWNvbmRcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiBcIlpcIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcIlhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSBcIlhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSBcIlhYWFhYXCI6XG4gICAgICBjYXNlIFwiWFhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuICAgICAgY2FzZSBcInh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuICAgICAgY2FzZSBcInh4eHh4XCI6XG4gICAgICBjYXNlIFwieHh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcIk9cIjpcbiAgICAgIGNhc2UgXCJPT1wiOlxuICAgICAgY2FzZSBcIk9PT1wiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJPT09PXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcInpcIjpcbiAgICAgIGNhc2UgXCJ6elwiOlxuICAgICAgY2FzZSBcInp6elwiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJ6enp6XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gTWF0aC50cnVuYyhkYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSBNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKTtcbiAgY29uc3QgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKSwgMik7XG4gIGNvbnN0IG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbiIsImltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuLi9hZGRMZWFkaW5nWmVyb3MubWpzXCI7XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbmV4cG9ydCBjb25zdCBsaWdodEZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSBcInl5XCIgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNb250aFxuICBNKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSBcIk1cIiA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldERhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRIb3VycygpIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gXCJhbVwiID8gXCJhLm0uXCIgOiBcInAubS5cIjtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0xMl1cbiAgaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldE1pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgIGNvbnN0IGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC50cnVuYyhcbiAgICAgIG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpLFxuICAgICk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG4iLCJjb25zdCBkYXRlTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcInBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJwcHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcInBwcHBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgY29uc3QgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgY29uc3QgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgY29uc3QgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgbGV0IGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdFxuICAgIC5yZXBsYWNlKFwie3tkYXRlfX1cIiwgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKVxuICAgIC5yZXBsYWNlKFwie3t0aW1lfX1cIiwgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcixcbn07XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHV0Y0RhdGUgPSBuZXcgRGF0ZShcbiAgICBEYXRlLlVUQyhcbiAgICAgIF9kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBfZGF0ZS5nZXRNb250aCgpLFxuICAgICAgX2RhdGUuZ2V0RGF0ZSgpLFxuICAgICAgX2RhdGUuZ2V0SG91cnMoKSxcbiAgICAgIF9kYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgIF9kYXRlLmdldFNlY29uZHMoKSxcbiAgICAgIF9kYXRlLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICksXG4gICk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoX2RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiArZGF0ZSAtICt1dGNEYXRlO1xufVxuIiwiY29uc3QgZGF5T2ZZZWFyVG9rZW5SRSA9IC9eRCskLztcbmNvbnN0IHdlZWtZZWFyVG9rZW5SRSA9IC9eWSskLztcblxuY29uc3QgdGhyb3dUb2tlbnMgPSBbXCJEXCIsIFwiRERcIiwgXCJZWVwiLCBcIllZWVlcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBkYXlPZlllYXJUb2tlblJFLnRlc3QodG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiB3ZWVrWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IF9tZXNzYWdlID0gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCk7XG4gIGNvbnNvbGUud2FybihfbWVzc2FnZSk7XG4gIGlmICh0aHJvd1Rva2Vucy5pbmNsdWRlcyh0b2tlbikpIHRocm93IG5ldyBSYW5nZUVycm9yKF9tZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBjb25zdCBzdWJqZWN0ID0gdG9rZW5bMF0gPT09IFwiWVwiID8gXCJ5ZWFyc1wiIDogXCJkYXlzIG9mIHRoZSBtb250aFwiO1xuICByZXR1cm4gYFVzZSBcXGAke3Rva2VuLnRvTG93ZXJDYXNlKCl9XFxgIGluc3RlYWQgb2YgXFxgJHt0b2tlbn1cXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgJHtzdWJqZWN0fSB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGA7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgY29uc3RhbnRzXG4gKiBAc3VtbWFyeSBVc2VmdWwgY29uc3RhbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbGxlY3Rpb24gb2YgdXNlZnVsIGRhdGUgY29uc3RhbnRzLlxuICpcbiAqIFRoZSBjb25zdGFudHMgY291bGQgYmUgaW1wb3J0ZWQgZnJvbSBgZGF0ZS1mbnMvY29uc3RhbnRzYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgbWF4VGltZSwgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBmdW5jdGlvbiBpc0FsbG93ZWRUaW1lKHRpbWUpIHtcbiAqICAgcmV0dXJuIHRpbWUgPD0gbWF4VGltZSAmJiB0aW1lID49IG1pblRpbWU7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQHN1bW1hcnkgRGF5cyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB5ZWFyLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSG93IG1hbnkgZGF5cyBpbiBhIHllYXIuXG4gKlxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAc3VtbWFyeSBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWF4VGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gODY0MDAwMDAwMDAwMDAwMSA8PSBtYXhUaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKDg2NDAwMDAwMDAwMDAwMDEpO1xuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWluVGltZVxuICogQHN1bW1hcnkgTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IC04NjQwMDAwMDAwMDAwMDAxID49IG1pblRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoLTg2NDAwMDAwMDAwMDAwMDEpXG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5XZWVrID0gNjA0ODAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luRGF5ID0gODY0MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luWWVhclxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5ZZWFyID0gNTI1NjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luTW9udGhcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBtb250aC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbk1vbnRoID0gNDMyMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5EYXkgPSAxNDQwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQHN1bW1hcnkgUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKi9cbmV4cG9ydCBjb25zdCBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbWludXRlLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbW9udGhcbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzO1xuIiwiLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCBjbG9uZXMgYSBkYXRlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIHR5cGVcbiAqIGZ1bmN0aW9uIGNsb25lRGF0ZTxEYXRlVHlwZSBleHRlbmRzIERhdGUoZGF0ZTogRGF0ZVR5cGUpOiBEYXRlVHlwZSB7XG4gKiAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKFxuICogICAgIGRhdGUsIC8vIFVzZSBjb250cnVzdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKVxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbmV3IGRhdGUuY29uc3RydWN0b3IodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RGcm9tO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5EYXkgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcbmltcG9ydCB7IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgfSBmcm9tIFwiLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3Qgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3Qgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHRpbWVzdGFtcExlZnQgPVxuICAgICtzdGFydE9mRGF5TGVmdCAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICBjb25zdCB0aW1lc3RhbXBSaWdodCA9XG4gICAgK3N0YXJ0T2ZEYXlSaWdodCAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIG1pbGxpc2Vjb25kc0luRGF5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXM7XG4iLCJpbXBvcnQgeyBkZWZhdWx0TG9jYWxlIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0TG9jYWxlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQgeyBsb25nRm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLm1qc1wiO1xuaW1wb3J0IHtcbiAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbixcbiAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLFxuICB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yLFxufSBmcm9tIFwiLi9fbGliL3Byb3RlY3RlZFRva2Vucy5tanNcIjtcbmltcG9ydCB7IGlzVmFsaWQgfSBmcm9tIFwiLi9pc1ZhbGlkLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vLyBSZXhwb3J0cyBvZiBpbnRlcm5hbCBmb3IgbGlicmFyaWVzIHRvIHVzZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNjM4I2lzc3VlY29tbWVudC0xODc3MDgyODc0XG5leHBvcnQgeyBmb3JtYXR0ZXJzLCBsb25nRm9ybWF0dGVycyB9O1xuXG4vLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbmNvbnN0IGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPVxuICAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbmNvbnN0IGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbmNvbnN0IGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbmNvbnN0IGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG5jb25zdCB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbmV4cG9ydCB7IGZvcm1hdCBhcyBmb3JtYXREYXRlIH07XG5cbi8qKlxuICogVGhlIHtAbGluayBmb3JtYXR9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBhbGlhcyBmb3JtYXREYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXIpXG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyKSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICpcbiAqIEB0aHJvd3MgYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChkYXRlLCBmb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zPy5sb2NhbGUgPz8gZGVmYXVsdE9wdGlvbnMubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG5cbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gZm9ybWF0U3RyXG4gICAgLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwicFwiIHx8IGZpcnN0Q2hhcmFjdGVyID09PSBcIlBcIikge1xuICAgICAgICBjb25zdCBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJzdHJpbmc7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKVxuICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogXCInXCIgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZykgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IHRydWUsIHZhbHVlOiBzdWJzdHJpbmcgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgICAgICBcIkZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgXCIgK1xuICAgICAgICAgICAgZmlyc3RDaGFyYWN0ZXIgK1xuICAgICAgICAgICAgXCJgXCIsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgfSk7XG5cbiAgLy8gaW52b2tlIGxvY2FsaXplIHByZXByb2Nlc3NvciAob25seSBmb3IgZnJlbmNoIGxvY2FsZXMgYXQgdGhlIG1vbWVudClcbiAgaWYgKGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3IpIHtcbiAgICBwYXJ0cyA9IGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3Iob3JpZ2luYWxEYXRlLCBwYXJ0cyk7XG4gIH1cblxuICBjb25zdCBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlLFxuICB9O1xuXG4gIHJldHVybiBwYXJ0c1xuICAgIC5tYXAoKHBhcnQpID0+IHtcbiAgICAgIGlmICghcGFydC5pc1Rva2VuKSByZXR1cm4gcGFydC52YWx1ZTtcblxuICAgICAgY29uc3QgdG9rZW4gPSBwYXJ0LnZhbHVlO1xuXG4gICAgICBpZiAoXG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSkgfHxcbiAgICAgICAgKCFvcHRpb25zPy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikpXG4gICAgICApIHtcbiAgICAgICAgd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0U3RyLCBTdHJpbmcoZGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW3Rva2VuWzBdXTtcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIob3JpZ2luYWxEYXRlLCB0b2tlbiwgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgY29uc3QgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldERheU9mWWVhclxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF5IG9mIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAxODNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKF9kYXRlLCBzdGFydE9mWWVhcihfZGF0ZSkpO1xuICBjb25zdCBkYXlPZlllYXIgPSBkaWZmICsgMTtcbiAgcmV0dXJuIGRheU9mWWVhcjtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXREYXlPZlllYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDUzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSArc3RhcnRPZklTT1dlZWsoX2RhdGUpIC0gK3N0YXJ0T2ZJU09XZWVrWWVhcihfZGF0ZSk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2Vla1llYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZldlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1LFxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWssXG4gKiAvLyBhbmQgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIgYWx3YXlzIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IDUzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9ICtzdGFydE9mV2VlayhfZGF0ZSwgb3B0aW9ucykgLSArc3RhcnRPZldlZWtZZWFyKF9kYXRlLCBvcHRpb25zKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIHdlZWtzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla1llYXJ9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgd2l0aCB0aGUgZGVmYXVsdCBzZXR0aW5ncz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNikpXG4gKiAvLz0+IDIwMDVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHdlZWsgc3RhcnRzIG9uIFNhdHVyZGF5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyB3ZWVrU3RhcnRzT246IDYgfSlcbiAqIC8vPT4gMjAwNFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgdGhlIGZpcnN0IHdlZWsgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyBmaXJzdFdlZWtDb250YWluc0RhdGU6IDQgfSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mTmV4dFllYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcblxuICBjb25zdCBmaXJzdFdlZWtPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrWWVhcjtcbiIsIi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNEYXRlO1xuIiwiaW1wb3J0IHsgaXNEYXRlIH0gZnJvbSBcIi4vaXNEYXRlLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlKVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHZhbGlkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKGRhdGUpIHtcbiAgaWYgKCFpc0RhdGUoZGF0ZSkgJiYgdHlwZW9mIGRhdGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKF9kYXRlKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNWYWxpZDtcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgY29uc3QgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFRoZSBsb2NhbGl6ZSBmdW5jdGlvbiBhcmd1bWVudCBjYWxsYmFjayB3aGljaCBhbGxvd3MgdG8gY29udmVydCByYXcgdmFsdWUgdG9cbiAqIHRoZSBhY3R1YWwgdHlwZS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBjb252ZXJ0ZWQgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFRoZSBtYXAgb2YgbG9jYWxpemVkIHZhbHVlcyBmb3IgZWFjaCB3aWR0aC5cbiAqL1xuXG4vKipcbiAqIFRoZSBpbmRleCB0eXBlIG9mIHRoZSBsb2NhbGUgdW5pdCB2YWx1ZS4gSXQgdHlwZXMgY29udmVyc2lvbiBvZiB1bml0cyBvZlxuICogdmFsdWVzIHRoYXQgZG9uJ3Qgc3RhcnQgYXQgMCAoaS5lLiBxdWFydGVycykuXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdW5pdCB2YWx1ZSB0byB0aGUgdHVwbGUgb2YgdmFsdWVzLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBlcmEgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEJDLFxuICogdGhlIHNlY29uZCBlbGVtZW50IHJlcHJlc2VudHMgQUQuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIHF1YXJ0ZXIgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFExLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBkYXkgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFN1bmRheS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgbW9udGggdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEphbnVhcnkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gb3B0aW9ucz8uY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogXCJzdGFuZGFsb25lXCI7XG5cbiAgICBsZXQgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09IFwiZm9ybWF0dGluZ1wiICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPVxuICAgICAgICBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1t3aWR0aF0gfHwgYXJncy52YWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zdCBtYXRjaFBhdHRlcm4gPVxuICAgICAgKHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVBhdHRlcm5zID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuXG4gICAgY29uc3Qga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKVxuICAgICAgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSlcbiAgICAgIDogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSlcbiAgICAgIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJlxuICAgICAgcHJlZGljYXRlKG9iamVjdFtrZXldKVxuICAgICkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGxldCB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFja1xuICAgICAgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pXG4gICAgICA6IHBhcnNlUmVzdWx0WzBdO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0TG9uZyB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanNcIjtcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanNcIjtcbmltcG9ydCB7IG1hdGNoIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9tYXRjaC5tanNcIjtcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXShodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycClcbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc10oaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zcylcbiAqL1xuZXhwb3J0IGNvbnN0IGVuVVMgPSB7XG4gIGNvZGU6IFwiZW4tVVNcIixcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDEsXG4gIH0sXG59O1xuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGVuVVM7XG4iLCJjb25zdCBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICB4U2Vjb25kczoge1xuICAgIG9uZTogXCIxIHNlY29uZFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgaGFsZkFNaW51dGU6IFwiaGFsZiBhIG1pbnV0ZVwiLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiMSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgaG91clwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCIxIGhvdXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4RGF5czoge1xuICAgIG9uZTogXCIxIGRheVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBkYXlzXCIsXG4gIH0sXG5cbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgeFdlZWtzOiB7XG4gICAgb25lOiBcIjEgd2Vla1wiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogXCJhYm91dCAxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IFwiMSBtb250aFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogXCJhYm91dCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICB4WWVhcnM6IHtcbiAgICBvbmU6IFwiMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJvdmVyIDEgeWVhclwiLFxuICAgIG90aGVyOiBcIm92ZXIge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiBcImFsbW9zdCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhbG1vc3Qge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZShcInt7Y291bnR9fVwiLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zPy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiBcImluIFwiICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCIgYWdvXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBidWlsZEZvcm1hdExvbmdGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qc1wiO1xuXG5jb25zdCBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiLFxufTtcblxuY29uc3QgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiaDptbTpzcyBhIHp6enpcIixcbiAgbG9uZzogXCJoOm1tOnNzIGEgelwiLFxuICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gIHNob3J0OiBcImg6bW0gYVwiLFxufTtcblxuY29uc3QgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcbn07XG4iLCJjb25zdCBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6IFwiUFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlbGF0aXZlID0gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykgPT5cbiAgZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuIiwiaW1wb3J0IHsgYnVpbGRMb2NhbGl6ZUZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qc1wiO1xuXG5jb25zdCBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiQlwiLCBcIkFcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJCQ1wiLCBcIkFEXCJdLFxuICB3aWRlOiBbXCJCZWZvcmUgQ2hyaXN0XCIsIFwiQW5ubyBEb21pbmlcIl0sXG59O1xuXG5jb25zdCBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJRMVwiLCBcIlEyXCIsIFwiUTNcIiwgXCJRNFwiXSxcbiAgd2lkZTogW1wiMXN0IHF1YXJ0ZXJcIiwgXCIybmQgcXVhcnRlclwiLCBcIjNyZCBxdWFydGVyXCIsIFwiNHRoIHF1YXJ0ZXJcIl0sXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5jb25zdCBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwXCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF0sXG5cbiAgd2lkZTogW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVicnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiU1wiLCBcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiXSxcbiAgc2hvcnQ6IFtcIlN1XCIsIFwiTW9cIiwgXCJUdVwiLCBcIldlXCIsIFwiVGhcIiwgXCJGclwiLCBcIlNhXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICB3aWRlOiBbXG4gICAgXCJTdW5kYXlcIixcbiAgICBcIk1vbmRheVwiLFxuICAgIFwiVHVlc2RheVwiLFxuICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgXCJUaHVyc2RheVwiLFxuICAgIFwiRnJpZGF5XCIsXG4gICAgXCJTYXR1cmRheVwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBvcmRpbmFsTnVtYmVyID0gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykgPT4ge1xuICBjb25zdCBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgY29uc3QgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInN0XCI7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIm5kXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInJkXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyBcInRoXCI7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXIsXG5cbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgYXJndW1lbnRDYWxsYmFjazogKHF1YXJ0ZXIpID0+IHF1YXJ0ZXIgLSAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6IFwid2lkZVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyBidWlsZE1hdGNoRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4ubWpzXCI7XG5pbXBvcnQgeyBidWlsZE1hdGNoUGF0dGVybkZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanNcIjtcblxuY29uc3QgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbmNvbnN0IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xuXG5jb25zdCBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2ksXG59O1xuY29uc3QgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV0sXG59O1xuXG5jb25zdCBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pLFxufTtcbmNvbnN0IHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXSxcbn07XG5cbmNvbnN0IG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pLFxufTtcbmNvbnN0IHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbXG4gICAgL15qL2ksXG4gICAgL15mL2ksXG4gICAgL15tL2ksXG4gICAgL15hL2ksXG4gICAgL15tL2ksXG4gICAgL15qL2ksXG4gICAgL15qL2ksXG4gICAgL15hL2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG5cbiAgYW55OiBbXG4gICAgL15qYS9pLFxuICAgIC9eZi9pLFxuICAgIC9ebWFyL2ksXG4gICAgL15hcC9pLFxuICAgIC9ebWF5L2ksXG4gICAgL15qdW4vaSxcbiAgICAvXmp1bC9pLFxuICAgIC9eYXUvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6ICh2YWx1ZSkgPT4gcGFyc2VJbnQodmFsdWUsIDEwKSxcbiAgfSksXG5cbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICAgIHZhbHVlQ2FsbGJhY2s6IChpbmRleCkgPT4gaW5kZXggKyAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcImFueVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mRGF5O1xuIiwiaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWsoZGF0ZSkge1xuICByZXR1cm4gc3RhcnRPZldlZWsoZGF0ZSwgeyB3ZWVrU3RhcnRzT246IDEgfSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWs7XG4iLCJpbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuL2dldElTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcixcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1OlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IHllYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlKTtcbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5ID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICBjb25zdCBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcblxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNSB3aXRoIGRlZmF1bHQgc2V0dGluZ3M6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IFN1biBEZWMgMjYgMjAwNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNVxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2Ygd2Vla1xuICogLy8gYW5kIDQgSmFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXI6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHllYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZmlyc3RXZWVrID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3QgX2RhdGUgPSBzdGFydE9mV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWtZZWFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZlllYXJcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMDApKVxuICogLy89PiBXZWQgSmFuIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZZZWFyKGRhdGUpIHtcbiAgY29uc3QgY2xlYW5EYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBfZGF0ZSA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIF9kYXRlLnNldEZ1bGxZZWFyKGNsZWFuRGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mWWVhcjtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlL2hlYWRlci5jc3MnXG5pbXBvcnQgJy4vc3R5bGUvbmF2LmNzcydcbmltcG9ydCAnLi9zdHlsZS9tZW51LmNzcydcbmltcG9ydCAnLi9zdHlsZS9jb250ZW50LmNzcydcbmltcG9ydCAnLi9zdHlsZS9pdGVtLmNzcydcbmltcG9ydCAnLi9zdHlsZS9kZXRhaWwuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlL2RpYWxvZy5jc3MnXG5pbXBvcnQgcmVuZGVyTGF5b3V0IGZyb20gJy4vdXRpbHMvcmVuZGVyJ1xuXG5mdW5jdGlvbiBTY3JlZW5Db250cm9sbGVyKCl7XG4gICAgcmVuZGVyTGF5b3V0KClcbn1cblxuU2NyZWVuQ29udHJvbGxlcigpXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9