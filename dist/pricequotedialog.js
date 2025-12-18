"use strict";
(self["webpackChunkvdspek_office_appp"] = self["webpackChunkvdspek_office_appp"] || []).push([["pricequotedialog"],{

/***/ "./node_modules/@emotion/hash/dist/emotion-hash.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/emotion-hash.esm.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ murmur2; }
/* harmony export */ });
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}




/***/ }),

/***/ "./node_modules/@fluentui/react-icons/lib/contexts/IconDirectionContext.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@fluentui/react-icons/lib/contexts/IconDirectionContext.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconDirectionContextProvider: function() { return /* binding */ IconDirectionContextProvider; },
/* harmony export */   useIconContext: function() { return /* binding */ useIconContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const IconDirectionContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const IconDirectionContextDefaultValue = {};
const IconDirectionContextProvider = IconDirectionContext.Provider;
const useIconContext = () => {
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(IconDirectionContext);
    return context !== null && context !== void 0 ? context : IconDirectionContextDefaultValue;
};


/***/ }),

/***/ "./node_modules/@fluentui/react-image/lib/components/Image/Image.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@fluentui/react-image/lib/components/Image/Image.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Image: function() { return /* binding */ Image; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderImage */ "./node_modules/@fluentui/react-image/lib/components/Image/renderImage.js");
/* harmony import */ var _useImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useImage */ "./node_modules/@fluentui/react-image/lib/components/Image/useImage.js");
/* harmony import */ var _useImageStyles_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useImageStyles.styles */ "./node_modules/@fluentui/react-image/lib/components/Image/useImageStyles.styles.js");
/* harmony import */ var _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-shared-contexts */ "./node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js");





/**
 * The Image component ensures the consistent styling of images.
 */ const Image = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref)=>{
    const state = (0,_useImage__WEBPACK_IMPORTED_MODULE_2__.useImage_unstable)(props, ref);
    (0,_useImageStyles_styles__WEBPACK_IMPORTED_MODULE_3__.useImageStyles_unstable)(state);
    (0,_fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_4__.useCustomStyleHook)('useImageStyles_unstable')(state);
    return (0,_renderImage__WEBPACK_IMPORTED_MODULE_1__.renderImage_unstable)(state);
});
Image.displayName = 'Image';


/***/ }),

/***/ "./node_modules/@fluentui/react-image/lib/components/Image/renderImage.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@fluentui/react-image/lib/components/Image/renderImage.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderImage_unstable: function() { return /* binding */ renderImage_unstable; }
/* harmony export */ });
/* harmony import */ var _fluentui_react_jsx_runtime_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-jsx-runtime/jsx-runtime */ "./node_modules/@fluentui/react-jsx-runtime/lib/jsx-runtime.js");
/* harmony import */ var _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-utilities */ "./node_modules/@fluentui/react-utilities/lib/compose/assertSlots.js");
  

/**
 * Define the render function.
 * Given the state of an image, renders it.
 */ const renderImage_unstable = (state)=>{
    (0,_fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_1__.assertSlots)(state);
    return /*#__PURE__*/ (0,_fluentui_react_jsx_runtime_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(state.root, {});
};


/***/ }),

/***/ "./node_modules/@fluentui/react-image/lib/components/Image/useImage.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@fluentui/react-image/lib/components/Image/useImage.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useImage_unstable: function() { return /* binding */ useImage_unstable; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-utilities */ "./node_modules/@fluentui/react-utilities/lib/compose/slot.js");
/* harmony import */ var _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-utilities */ "./node_modules/@fluentui/react-utilities/lib/compose/getIntrinsicElementProps.js");


/**
 * Given user props, returns state and render function for an Image.
 */ const useImage_unstable = (props, ref)=>{
    const { bordered = false, fit = 'default', block = false, shape = 'square', shadow = false } = props;
    const state = {
        bordered,
        fit,
        block,
        shape,
        shadow,
        components: {
            root: 'img'
        },
        root: _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_1__.always((0,_fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_2__.getIntrinsicElementProps)('img', {
            ref,
            ...props
        }), {
            elementType: 'img'
        })
    };
    return state;
};


/***/ }),

/***/ "./node_modules/@fluentui/react-image/lib/components/Image/useImageStyles.styles.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-image/lib/components/Image/useImageStyles.styles.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageClassNames: function() { return /* binding */ imageClassNames; },
/* harmony export */   useImageStyles_unstable: function() { return /* binding */ useImageStyles_unstable; }
/* harmony export */ });
/* harmony import */ var _griffel_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @griffel/react */ "./node_modules/@griffel/react/__styles.esm.js");
/* harmony import */ var _griffel_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @griffel/react */ "./node_modules/@griffel/core/mergeClasses.esm.js");


const imageClassNames = {
  root: 'fui-Image'
};
const useStyles = /*#__PURE__*/(0,_griffel_react__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  base: {
    g2u3we: "fj3muxo",
    h3c5rm: ["f1akhkt", "f1lxtadh"],
    B9xav0g: "f1aperda",
    zhjwy3: ["f1lxtadh", "f1akhkt"],
    Beyfa6y: 0,
    Bbmb7ep: 0,
    Btl43ni: 0,
    B7oj6ja: 0,
    Dimara: "f1fabniw",
    B7ck84d: "f1ewtqcl",
    mc9l5x: "f14t3ns0"
  },
  bordered: {
    icvyot: "fzkkow9",
    vrafjx: ["fcdblym", "fjik90z"],
    oivjwe: "fg706s2",
    wvpqe5: ["fjik90z", "fcdblym"],
    B4j52fo: "f192inf7",
    Bekrc4i: ["f5tn483", "f1ojsxk5"],
    Bn0qgzm: "f1vxd6vx",
    ibv6hh: ["f1ojsxk5", "f5tn483"]
  },
  circular: {
    Beyfa6y: 0,
    Bbmb7ep: 0,
    Btl43ni: 0,
    B7oj6ja: 0,
    Dimara: "f44lkw9"
  },
  rounded: {
    Beyfa6y: 0,
    Bbmb7ep: 0,
    Btl43ni: 0,
    B7oj6ja: 0,
    Dimara: "ft85np5"
  },
  square: {},
  shadow: {
    E5pizo: "f1whvlc6"
  },
  center: {
    st4lth: "f1plgu50",
    Ermj5k: "f14xojzb",
    Bqenvij: "f1l02sjl",
    a9b677: "fly5x3f"
  },
  contain: {
    st4lth: "f1kle4es",
    Ermj5k: "f14xojzb",
    Bqenvij: "f1l02sjl",
    a9b677: "fly5x3f"
  },
  "default": {},
  cover: {
    st4lth: "f1ps3kmd",
    Ermj5k: "f14xojzb",
    Bqenvij: "f1l02sjl",
    a9b677: "fly5x3f"
  },
  none: {
    st4lth: "f1plgu50",
    Ermj5k: ["f13uwng7", "fjmyj0p"],
    Bqenvij: "f1l02sjl",
    a9b677: "fly5x3f"
  },
  block: {
    a9b677: "fly5x3f"
  }
}, {
  d: [".fj3muxo{border-top-color:var(--colorNeutralStroke1);}", ".f1akhkt{border-right-color:var(--colorNeutralStroke1);}", ".f1lxtadh{border-left-color:var(--colorNeutralStroke1);}", ".f1aperda{border-bottom-color:var(--colorNeutralStroke1);}", [".f1fabniw{border-radius:var(--borderRadiusNone);}", {
    p: -1
  }], ".f1ewtqcl{box-sizing:border-box;}", ".f14t3ns0{display:inline-block;}", ".fzkkow9{border-top-style:solid;}", ".fcdblym{border-right-style:solid;}", ".fjik90z{border-left-style:solid;}", ".fg706s2{border-bottom-style:solid;}", ".f192inf7{border-top-width:var(--strokeWidthThin);}", ".f5tn483{border-right-width:var(--strokeWidthThin);}", ".f1ojsxk5{border-left-width:var(--strokeWidthThin);}", ".f1vxd6vx{border-bottom-width:var(--strokeWidthThin);}", [".f44lkw9{border-radius:var(--borderRadiusCircular);}", {
    p: -1
  }], [".ft85np5{border-radius:var(--borderRadiusMedium);}", {
    p: -1
  }], ".f1whvlc6{box-shadow:var(--shadow4);}", ".f1plgu50{object-fit:none;}", ".f14xojzb{object-position:center;}", ".f1l02sjl{height:100%;}", ".fly5x3f{width:100%;}", ".f1kle4es{object-fit:contain;}", ".f1ps3kmd{object-fit:cover;}", ".f13uwng7{object-position:left top;}", ".fjmyj0p{object-position:right top;}"]
});
const useImageStyles_unstable = state => {
  'use no memo';

  const styles = useStyles();
  state.root.className = (0,_griffel_react__WEBPACK_IMPORTED_MODULE_1__.mergeClasses)(imageClassNames.root, styles.base, state.block && styles.block, state.bordered && styles.bordered, state.shadow && styles.shadow, styles[state.fit], styles[state.shape], state.root.className);
  return state;
};

/***/ }),

/***/ "./node_modules/@fluentui/react-jsx-runtime/lib/jsx-runtime.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@fluentui/react-jsx-runtime/lib/jsx-runtime.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fragment: function() { return /* reexport safe */ react__WEBPACK_IMPORTED_MODULE_4__.Fragment; },
/* harmony export */   jsx: function() { return /* binding */ jsx; },
/* harmony export */   jsxs: function() { return /* binding */ jsxs; }
/* harmony export */ });
/* harmony import */ var _jsx_createJSX__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsx/createJSX */ "./node_modules/@fluentui/react-jsx-runtime/lib/jsx/createJSX.js");
/* harmony import */ var _jsx_jsxSlot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsx/jsxSlot */ "./node_modules/@fluentui/react-jsx-runtime/lib/jsx/jsxSlot.js");
/* harmony import */ var _jsx_jsxsSlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsx/jsxsSlot */ "./node_modules/@fluentui/react-jsx-runtime/lib/jsx/jsxsSlot.js");
/* harmony import */ var _utils_Runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/Runtime */ "./node_modules/@fluentui/react-jsx-runtime/lib/utils/Runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const jsx = (0,_jsx_createJSX__WEBPACK_IMPORTED_MODULE_0__.createJSX)(_utils_Runtime__WEBPACK_IMPORTED_MODULE_3__.Runtime.jsx, _jsx_jsxSlot__WEBPACK_IMPORTED_MODULE_1__.jsxSlot);
const jsxs = (0,_jsx_createJSX__WEBPACK_IMPORTED_MODULE_0__.createJSX)(_utils_Runtime__WEBPACK_IMPORTED_MODULE_3__.Runtime.jsxs, _jsx_jsxsSlot__WEBPACK_IMPORTED_MODULE_2__.jsxsSlot);


/***/ }),

/***/ "./node_modules/@fluentui/react-jsx-runtime/lib/jsx/createJSX.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@fluentui/react-jsx-runtime/lib/jsx/createJSX.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createJSX: function() { return /* binding */ createJSX; }
/* harmony export */ });
/* harmony import */ var _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-utilities */ "./node_modules/@fluentui/react-utilities/lib/compose/isSlot.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_createCompatSlotComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/createCompatSlotComponent */ "./node_modules/@fluentui/react-jsx-runtime/lib/utils/createCompatSlotComponent.js");
/* harmony import */ var _utils_warnIfElementTypeIsInvalid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/warnIfElementTypeIsInvalid */ "./node_modules/@fluentui/react-jsx-runtime/lib/utils/warnIfElementTypeIsInvalid.js");




function createJSX(runtime, slotRuntime) {
    return function jsx(type, overrideProps, key, source, self) {
        // TODO:
        // this is for backwards compatibility with getSlotsNext
        // it should be removed once getSlotsNext is obsolete
        if ((0,_fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__.isSlot)(overrideProps)) {
            return slotRuntime((0,_utils_createCompatSlotComponent__WEBPACK_IMPORTED_MODULE_2__.createCompatSlotComponent)(type, overrideProps), null, key, source, self);
        }
        if ((0,_fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__.isSlot)(type)) {
            return slotRuntime(type, overrideProps, key, source, self);
        }
        (0,_utils_warnIfElementTypeIsInvalid__WEBPACK_IMPORTED_MODULE_3__.warnIfElementTypeIsInvalid)(type);
        return runtime(type, overrideProps, key, source, self);
    };
}


/***/ }),

/***/ "./node_modules/@fluentui/react-jsx-runtime/lib/jsx/jsxSlot.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@fluentui/react-jsx-runtime/lib/jsx/jsxSlot.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jsxSlot: function() { return /* binding */ jsxSlot; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_getMetadataFromSlotComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getMetadataFromSlotComponent */ "./node_modules/@fluentui/react-jsx-runtime/lib/utils/getMetadataFromSlotComponent.js");
/* harmony import */ var _utils_Runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Runtime */ "./node_modules/@fluentui/react-jsx-runtime/lib/utils/Runtime.js");



const jsxSlot = (type, overrideProps, key)=>{
    const { elementType, renderFunction, props: slotProps } = (0,_utils_getMetadataFromSlotComponent__WEBPACK_IMPORTED_MODULE_1__.getMetadataFromSlotComponent)(type);
    const props = {
        ...slotProps,
        ...overrideProps
    };
    if (renderFunction) {
        return _utils_Runtime__WEBPACK_IMPORTED_MODULE_2__.Runtime.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: renderFunction(elementType, props)
        }, key);
    }
    return _utils_Runtime__WEBPACK_IMPORTED_MODULE_2__.Runtime.jsx(elementType, props, key);
};


/***/ }),

/***/ "./node_modules/@fluentui/react-jsx-runtime/lib/jsx/jsxsSlot.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fluentui/react-jsx-runtime/lib/jsx/jsxsSlot.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jsxsSlot: function() { return /* binding */ jsxsSlot; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_getMetadataFromSlotComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getMetadataFromSlotComponent */ "./node_modules/@fluentui/react-jsx-runtime/lib/utils/getMetadataFromSlotComponent.js");
/* harmony import */ var _utils_Runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Runtime */ "./node_modules/@fluentui/react-jsx-runtime/lib/utils/Runtime.js");



const jsxsSlot = (type, overrideProps, key)=>{
    const { elementType, renderFunction, props: slotProps } = (0,_utils_getMetadataFromSlotComponent__WEBPACK_IMPORTED_MODULE_1__.getMetadataFromSlotComponent)(type);
    const props = {
        ...slotProps,
        ...overrideProps
    };
    if (renderFunction) {
        /**
     * In static runtime then children is an array and this array won't be keyed.
     * We should wrap children by a static fragment
     * as there's no way to know if renderFunction will render statically or dynamically
     */ return _utils_Runtime__WEBPACK_IMPORTED_MODULE_2__.Runtime.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: renderFunction(elementType, {
                ...props,
                children: _utils_Runtime__WEBPACK_IMPORTED_MODULE_2__.Runtime.jsxs(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: props.children
                }, undefined)
            })
        }, key);
    }
    return _utils_Runtime__WEBPACK_IMPORTED_MODULE_2__.Runtime.jsxs(elementType, props, key);
};


/***/ }),

/***/ "./node_modules/@fluentui/react-jsx-runtime/lib/utils/Runtime.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@fluentui/react-jsx-runtime/lib/utils/Runtime.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Runtime: function() { return /* binding */ Runtime; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const Runtime = /*#__PURE__*/ (react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, 2)));


/***/ }),

/***/ "./node_modules/@fluentui/react-jsx-runtime/lib/utils/createCompatSlotComponent.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-jsx-runtime/lib/utils/createCompatSlotComponent.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCompatSlotComponent: function() { return /* binding */ createCompatSlotComponent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-utilities */ "./node_modules/@fluentui/react-utilities/lib/compose/constants.js");


// TODO:
// this is for backwards compatibility with getSlotsNext
// it should be removed once getSlotsNext is obsolete
function createCompatSlotComponent(type, props) {
    return {
        ...props,
        [_fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_1__.SLOT_ELEMENT_TYPE_SYMBOL]: type
    };
}


/***/ }),

/***/ "./node_modules/@fluentui/react-jsx-runtime/lib/utils/getMetadataFromSlotComponent.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-jsx-runtime/lib/utils/getMetadataFromSlotComponent.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMetadataFromSlotComponent: function() { return /* binding */ getMetadataFromSlotComponent; }
/* harmony export */ });
/* harmony import */ var _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-utilities */ "./node_modules/@fluentui/react-utilities/lib/compose/constants.js");

/**
 * @internal
 */ function getMetadataFromSlotComponent(type) {
    const { as, [_fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__.SLOT_CLASS_NAME_PROP_SYMBOL]: _classNameProp, [_fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__.SLOT_ELEMENT_TYPE_SYMBOL]: baseElementType, [_fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__.SLOT_RENDER_FUNCTION_SYMBOL]: renderFunction, ...propsWithoutMetadata } = type;
    const props = propsWithoutMetadata;
    const elementType = typeof baseElementType === 'string' ? as !== null && as !== void 0 ? as : baseElementType : baseElementType;
    if (typeof elementType !== 'string' && as) {
        props.as = as;
    }
    return {
        elementType,
        props,
        renderFunction
    };
}


/***/ }),

/***/ "./node_modules/@fluentui/react-jsx-runtime/lib/utils/warnIfElementTypeIsInvalid.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-jsx-runtime/lib/utils/warnIfElementTypeIsInvalid.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   warnIfElementTypeIsInvalid: function() { return /* binding */ warnIfElementTypeIsInvalid; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");


function warnIfElementTypeIsInvalid(type) {
    if ( true && typeof type === 'object' && !(0,react_is__WEBPACK_IMPORTED_MODULE_1__.isValidElementType)(type)) {
        // eslint-disable-next-line no-console
        console.error(`@fluentui/react-jsx-runtime:
Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: ${type}.

If this happened in a slot of Fluent UI component, you might be facing package resolution issues.
Please make sure you don't have multiple versions of "@fluentui/react-utilities" installed in your dependencies or sub-dependencies.
You can check this by searching up for matching entries in a lockfile produced by your package manager (yarn.lock, pnpm-lock.yaml or package-lock.json).`);
    }
}


/***/ }),

/***/ "./node_modules/@fluentui/react-provider/lib/components/FluentProvider/FluentProvider.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-provider/lib/components/FluentProvider/FluentProvider.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FluentProvider: function() { return /* binding */ FluentProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderFluentProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderFluentProvider */ "./node_modules/@fluentui/react-provider/lib/components/FluentProvider/renderFluentProvider.js");
/* harmony import */ var _useFluentProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useFluentProvider */ "./node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProvider.js");
/* harmony import */ var _useFluentProviderStyles_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useFluentProviderStyles.styles */ "./node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderStyles.styles.js");
/* harmony import */ var _useFluentProviderContextValues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useFluentProviderContextValues */ "./node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderContextValues.js");





const FluentProvider = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref)=>{
    const state = (0,_useFluentProvider__WEBPACK_IMPORTED_MODULE_2__.useFluentProvider_unstable)(props, ref);
    (0,_useFluentProviderStyles_styles__WEBPACK_IMPORTED_MODULE_3__.useFluentProviderStyles_unstable)(state);
    const contextValues = (0,_useFluentProviderContextValues__WEBPACK_IMPORTED_MODULE_4__.useFluentProviderContextValues_unstable)(state);
    return (0,_renderFluentProvider__WEBPACK_IMPORTED_MODULE_1__.renderFluentProvider_unstable)(state, contextValues);
});
FluentProvider.displayName = 'FluentProvider';


/***/ }),

/***/ "./node_modules/@fluentui/react-provider/lib/components/FluentProvider/createCSSRuleFromTheme.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-provider/lib/components/FluentProvider/createCSSRuleFromTheme.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCSSRuleFromTheme: function() { return /* binding */ createCSSRuleFromTheme; }
/* harmony export */ });
/**
 * Creates a CSS rule from a theme object.
 *
 * Useful for scenarios when you want to apply theming statically to a top level elements like `body`.
 */ function createCSSRuleFromTheme(selector, theme) {
    if (theme) {
        const cssVarsAsString = Object.keys(theme).reduce((cssVarRule, cssVar)=>{
            return `${cssVarRule}--${cssVar}: ${theme[cssVar]}; `;
        }, '');
        return `${selector} { ${cssVarsAsString} }`;
    }
    return `${selector} {}`;
}


/***/ }),

/***/ "./node_modules/@fluentui/react-provider/lib/components/FluentProvider/renderFluentProvider.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-provider/lib/components/FluentProvider/renderFluentProvider.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderFluentProvider_unstable: function() { return /* binding */ renderFluentProvider_unstable; }
/* harmony export */ });
/* harmony import */ var _fluentui_react_jsx_runtime_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-jsx-runtime/jsx-runtime */ "./node_modules/@fluentui/react-jsx-runtime/lib/jsx-runtime.js");
/* harmony import */ var _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-utilities */ "./node_modules/@fluentui/react-utilities/lib/ssr/canUseDOM.js");
/* harmony import */ var _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-utilities */ "./node_modules/@fluentui/react-utilities/lib/compose/assertSlots.js");
/* harmony import */ var _griffel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @griffel/react */ "./node_modules/@griffel/react/TextDirectionContext.esm.js");
/* harmony import */ var _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-shared-contexts */ "./node_modules/@fluentui/react-shared-contexts/lib/ProviderContext/ProviderContext.js");
/* harmony import */ var _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-shared-contexts */ "./node_modules/@fluentui/react-shared-contexts/lib/ThemeContext/ThemeContext.js");
/* harmony import */ var _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-shared-contexts */ "./node_modules/@fluentui/react-shared-contexts/lib/ThemeClassNameContext/ThemeClassNameContext.js");
/* harmony import */ var _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-shared-contexts */ "./node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js");
/* harmony import */ var _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-shared-contexts */ "./node_modules/@fluentui/react-shared-contexts/lib/TooltipVisibilityContext/TooltipContext.js");
/* harmony import */ var _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-shared-contexts */ "./node_modules/@fluentui/react-shared-contexts/lib/OverridesContext/OverridesContext.js");
/* harmony import */ var _fluentui_react_icons_lib_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-icons/lib/providers */ "./node_modules/@fluentui/react-icons/lib/contexts/IconDirectionContext.js");
  




/**
 * Render the final JSX of FluentProvider
 */ const renderFluentProvider_unstable = (state, contextValues)=>{
    (0,_fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_2__.assertSlots)(state);
    // Typescript (vscode) incorrectly references the FluentProviderProps.customStyleHooks_unstable
    // instead of FluentProviderContextValues.customStyleHooks_unstable and thinks it is
    // Partial<CustomStyleHooksContextValue>, so it needs to be cast to Required<CustomStyleHooksContextValue>
    return /*#__PURE__*/ (0,_fluentui_react_jsx_runtime_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_4__.Provider, {
        value: contextValues.provider,
        children: /*#__PURE__*/ (0,_fluentui_react_jsx_runtime_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
            value: contextValues.theme,
            children: /*#__PURE__*/ (0,_fluentui_react_jsx_runtime_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_6__.ThemeClassNameProvider, {
                value: contextValues.themeClassName,
                children: /*#__PURE__*/ (0,_fluentui_react_jsx_runtime_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_7__.CustomStyleHooksProvider, {
                    value: contextValues.customStyleHooks_unstable,
                    children: /*#__PURE__*/ (0,_fluentui_react_jsx_runtime_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_8__.TooltipVisibilityProvider, {
                        value: contextValues.tooltip,
                        children: /*#__PURE__*/ (0,_fluentui_react_jsx_runtime_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_griffel_react__WEBPACK_IMPORTED_MODULE_3__.TextDirectionProvider, {
                            dir: contextValues.textDirection,
                            children: /*#__PURE__*/ (0,_fluentui_react_jsx_runtime_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_icons_lib_providers__WEBPACK_IMPORTED_MODULE_10__.IconDirectionContextProvider, {
                                value: contextValues.iconDirection,
                                children: /*#__PURE__*/ (0,_fluentui_react_jsx_runtime_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_9__.OverridesProvider, {
                                    value: contextValues.overrides_unstable,
                                    children: /*#__PURE__*/ (0,_fluentui_react_jsx_runtime_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(state.root, {
                                        children: [
                                            (0,_fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_1__.canUseDOM)() ? null : /*#__PURE__*/ (0,_fluentui_react_jsx_runtime_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", {
                                                // Using dangerous HTML because react can escape characters
                                                // which can lead to invalid CSS.
                                                // eslint-disable-next-line react/no-danger
                                                dangerouslySetInnerHTML: {
                                                    __html: state.serverStyleProps.cssRule
                                                },
                                                ...state.serverStyleProps.attributes
                                            }),
                                            state.root.children
                                        ]
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });
};


/***/ }),

/***/ "./node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProvider.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProvider.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFluentProvider_unstable: function() { return /* binding */ useFluentProvider_unstable; }
/* harmony export */ });
/* harmony import */ var _griffel_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @griffel/react */ "./node_modules/@griffel/react/RendererContext.esm.js");
/* harmony import */ var _fluentui_react_tabster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-tabster */ "./node_modules/@fluentui/react-tabster/lib/hooks/useFocusVisible.js");
/* harmony import */ var _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-shared-contexts */ "./node_modules/@fluentui/react-shared-contexts/lib/ProviderContext/ProviderContext.js");
/* harmony import */ var _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-shared-contexts */ "./node_modules/@fluentui/react-shared-contexts/lib/OverridesContext/OverridesContext.js");
/* harmony import */ var _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-shared-contexts */ "./node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js");
/* harmony import */ var _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-shared-contexts */ "./node_modules/@fluentui/react-shared-contexts/lib/ThemeContext/ThemeContext.js");
/* harmony import */ var _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-utilities */ "./node_modules/@fluentui/react-utilities/lib/compose/slot.js");
/* harmony import */ var _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-utilities */ "./node_modules/@fluentui/react-utilities/lib/compose/getIntrinsicElementProps.js");
/* harmony import */ var _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-utilities */ "./node_modules/@fluentui/react-utilities/lib/hooks/useMergedRefs.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _useFluentProviderThemeStyleTag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useFluentProviderThemeStyleTag */ "./node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderThemeStyleTag.js");






// Meomizing empty objects to avoid unnecessary rerenders.
const DEFAULT_STYLE_HOOKS = {};
const DEFAULT_RENDERER_ATTRIBUTES = {};
/**
 * Create the state required to render FluentProvider.
 *
 * The returned state can be modified with hooks such as useFluentProviderStyles_unstable,
 * before being passed to renderFluentProvider_unstable.
 *
 * @param props - props from this instance of FluentProvider
 * @param ref - reference to root HTMLElement of FluentProvider
 */ const useFluentProvider_unstable = (props, ref)=>{
    'use no memo';
    const parentContext = (0,_fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_2__.useFluent)();
    const parentTheme = useTheme();
    const parentOverrides = (0,_fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_3__.useOverrides)();
    const parentCustomStyleHooks = react__WEBPACK_IMPORTED_MODULE_9__.useContext(_fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_4__.CustomStyleHooksContext) || DEFAULT_STYLE_HOOKS;
    /**
   * TODO: add merge functions to "dir" merge,
   * nesting providers with the same "dir" should not add additional attributes to DOM
   * see https://github.com/microsoft/fluentui/blob/0dc74a19f3aa5a058224c20505016fbdb84db172/packages/fluentui/react-northstar/src/utils/mergeProviderContexts.ts#L89-L93
   */ const { applyStylesToPortals = true, // eslint-disable-next-line @typescript-eslint/naming-convention
    customStyleHooks_unstable, dir = parentContext.dir, targetDocument = parentContext.targetDocument, theme, overrides_unstable: overrides = {} } = props;
    const mergedTheme = shallowMerge(parentTheme, theme);
    const mergedOverrides = shallowMerge(parentOverrides, overrides);
    const mergedCustomStyleHooks = shallowMerge(parentCustomStyleHooks, customStyleHooks_unstable);
    const renderer = (0,_griffel_react__WEBPACK_IMPORTED_MODULE_0__.useRenderer)();
    var _renderer_styleElementAttributes;
    const { styleTagId, rule } = (0,_useFluentProviderThemeStyleTag__WEBPACK_IMPORTED_MODULE_10__.useFluentProviderThemeStyleTag)({
        theme: mergedTheme,
        targetDocument,
        rendererAttributes: (_renderer_styleElementAttributes = renderer.styleElementAttributes) !== null && _renderer_styleElementAttributes !== void 0 ? _renderer_styleElementAttributes : DEFAULT_RENDERER_ATTRIBUTES
    });
    if (true) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        react__WEBPACK_IMPORTED_MODULE_9__.useEffect(()=>{
            if (mergedTheme === undefined) {
                // eslint-disable-next-line no-console
                console.warn([
                    '@fluentui/react-provider: FluentProvider does not have your "theme" defined.',
                    "Make sure that your top-level FluentProvider has set a `theme` prop or you're setting the theme in your child FluentProvider."
                ].join(' '));
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
    }
    return {
        applyStylesToPortals,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        customStyleHooks_unstable: mergedCustomStyleHooks,
        dir,
        targetDocument,
        theme: mergedTheme,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        overrides_unstable: mergedOverrides,
        themeClassName: styleTagId,
        components: {
            root: 'div'
        },
        root: _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_6__.always((0,_fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_7__.getIntrinsicElementProps)('div', {
            ...props,
            dir,
            // FIXME:
            // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
            // but since it would be a breaking change to fix it, we are casting ref to it's proper type
            ref: (0,_fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_8__.useMergedRefs)(ref, (0,_fluentui_react_tabster__WEBPACK_IMPORTED_MODULE_1__.useFocusVisible)({
                targetDocument
            }))
        }), {
            elementType: 'div'
        }),
        serverStyleProps: {
            cssRule: rule,
            attributes: {
                ...renderer.styleElementAttributes,
                id: styleTagId
            }
        }
    };
};
function shallowMerge(a, b) {
    // Merge impacts perf: we should like to avoid it if it's possible
    if (a && b) {
        return {
            ...a,
            ...b
        };
    }
    if (a) {
        return a;
    }
    return b;
}
function useTheme() {
    return react__WEBPACK_IMPORTED_MODULE_9__.useContext(_fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_5__.ThemeContext);
}


/***/ }),

/***/ "./node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderContextValues.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderContextValues.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFluentProviderContextValues_unstable: function() { return /* binding */ useFluentProviderContextValues_unstable; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useFluentProviderContextValues_unstable(state) {
    const { applyStylesToPortals, // eslint-disable-next-line @typescript-eslint/naming-convention
    customStyleHooks_unstable, dir, root, targetDocument, theme, themeClassName, // eslint-disable-next-line @typescript-eslint/naming-convention
    overrides_unstable } = state;
    const provider = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({
            dir,
            targetDocument
        }), [
        dir,
        targetDocument
    ]);
    // "Tooltip" component mutates an object in this context, instance should be stable
    const [tooltip] = react__WEBPACK_IMPORTED_MODULE_0__.useState(()=>({}));
    const iconDirection = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({
            textDirection: dir
        }), [
        dir
    ]);
    return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        customStyleHooks_unstable,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        overrides_unstable,
        provider,
        textDirection: dir,
        iconDirection,
        tooltip,
        theme,
        themeClassName: applyStylesToPortals ? root.className : themeClassName
    };
}


/***/ }),

/***/ "./node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderStyles.styles.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderStyles.styles.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fluentProviderClassNames: function() { return /* binding */ fluentProviderClassNames; },
/* harmony export */   useFluentProviderStyles_unstable: function() { return /* binding */ useFluentProviderStyles_unstable; }
/* harmony export */ });
/* harmony import */ var _griffel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @griffel/core */ "./node_modules/@griffel/core/mergeClasses.esm.js");
/* harmony import */ var _griffel_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @griffel/core */ "./node_modules/@griffel/core/__styles.esm.js");
/* harmony import */ var _griffel_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @griffel/react */ "./node_modules/@griffel/react/RendererContext.esm.js");



const fluentProviderClassNames = {
  root: 'fui-FluentProvider'
};
const useStyles = /*#__PURE__*/(0,_griffel_core__WEBPACK_IMPORTED_MODULE_1__.__styles)({
  root: {
    sj55zd: "f19n0e5",
    De3pzq: "fxugw4r",
    fsow6f: ["f1o700av", "fes3tcz"],
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi"
  }
}, {
  d: [".f19n0e5{color:var(--colorNeutralForeground1);}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".f1o700av{text-align:left;}", ".fes3tcz{text-align:right;}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}"]
});
/** Applies style classnames to slots */
const useFluentProviderStyles_unstable = state => {
  'use no memo';

  const renderer = (0,_griffel_react__WEBPACK_IMPORTED_MODULE_2__.useRenderer)();
  const styles = useStyles({
    dir: state.dir,
    renderer
  });
  state.root.className = (0,_griffel_core__WEBPACK_IMPORTED_MODULE_0__.mergeClasses)(fluentProviderClassNames.root, state.themeClassName, styles.root, state.root.className);
  return state;
};

/***/ }),

/***/ "./node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderThemeStyleTag.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderThemeStyleTag.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFluentProviderThemeStyleTag: function() { return /* binding */ useFluentProviderThemeStyleTag; }
/* harmony export */ });
/* harmony import */ var _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-utilities */ "./node_modules/@fluentui/react-utilities/lib/hooks/useId.js");
/* harmony import */ var _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-utilities */ "./node_modules/@fluentui/react-utilities/lib/hooks/useIsomorphicLayoutEffect.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createCSSRuleFromTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createCSSRuleFromTheme */ "./node_modules/@fluentui/react-provider/lib/components/FluentProvider/createCSSRuleFromTheme.js");
/* harmony import */ var _useFluentProviderStyles_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useFluentProviderStyles.styles */ "./node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderStyles.styles.js");




// String concatenation is used to prevent bundlers to complain with older versions of React
const useInsertionEffect = react__WEBPACK_IMPORTED_MODULE_2__['useInsertion' + 'Effect'] ? react__WEBPACK_IMPORTED_MODULE_2__['useInsertion' + 'Effect'] : _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_1__.useIsomorphicLayoutEffect;
const createStyleTag = (target, elementAttributes)=>{
    // Document might exist but not be ready yet (e.g. during SSR)
    // In that case, we should not create a style tag
    if (!(target === null || target === void 0 ? void 0 : target.head)) {
        return undefined;
    }
    const tag = target.createElement('style');
    Object.keys(elementAttributes).forEach((attrName)=>{
        tag.setAttribute(attrName, elementAttributes[attrName]);
    });
    target.head.appendChild(tag);
    return tag;
};
const insertSheet = (tag, rule)=>{
    const sheet = tag.sheet;
    if (sheet) {
        if (sheet.cssRules.length > 0) {
            sheet.deleteRule(0);
        }
        sheet.insertRule(rule, 0);
    } else if (true) {
        // eslint-disable-next-line no-console
        console.error('FluentProvider: No sheet available on styleTag, styles will not be inserted into DOM.');
    }
};
/**
 * Writes a theme as css variables in a style tag on the provided targetDocument as a rule applied to a CSS class
 * @internal
 * @returns CSS class to apply the rule
 */ const useFluentProviderThemeStyleTag = (options)=>{
    'use no memo';
    const { targetDocument, theme, rendererAttributes } = options;
    const styleTag = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
    const styleTagId = (0,_fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__.useId)(_useFluentProviderStyles_styles__WEBPACK_IMPORTED_MODULE_4__.fluentProviderClassNames.root);
    const styleElementAttributes = rendererAttributes;
    const rule = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(()=>(0,_createCSSRuleFromTheme__WEBPACK_IMPORTED_MODULE_3__.createCSSRuleFromTheme)(`.${styleTagId}`, theme), [
        theme,
        styleTagId
    ]);
    if (true) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        react__WEBPACK_IMPORTED_MODULE_2__.useMemo(()=>{
            // Heads up!
            // .useMemo() is used because it is called during render and DOM for _current_ component is not mounted yet. Also,
            // this allows to do checks with strict mode enabled as .useEffect() will be called with incremented IDs because
            // of double render.
            if (targetDocument) {
                var _styleElement_textContent;
                const providerElementSelector = `.${_useFluentProviderStyles_styles__WEBPACK_IMPORTED_MODULE_4__.fluentProviderClassNames.root}.${styleTagId}`;
                const providerElements = targetDocument.querySelectorAll(providerElementSelector);
                const styleElementSelector = `style[id="${styleTagId}"]`;
                const styleElements = targetDocument.querySelectorAll(styleElementSelector);
                if (styleElements.length > 1) {
                    // eslint-disable-next-line no-console
                    console.error([
                        '@fluentui/react-provider: We found multiple <style> elements with same IDs in your DOM.',
                        'Please make sure that you configured your application properly.',
                        '\n',
                        '\n',
                        'Configuration guide: https://aka.ms/fluentui-conflicting-ids'
                    ].join(' '));
                    return;
                }
                const styleElement = styleElements.item(0);
                var _styleElement_textContent_length;
                // Heads up!
                //
                // In SSR, we will have DOM upfront & style tags will have CSS rules defined in `.textContent`
                const isSSR = ((_styleElement_textContent_length = styleElement === null || styleElement === void 0 ? void 0 : (_styleElement_textContent = styleElement.textContent) === null || _styleElement_textContent === void 0 ? void 0 : _styleElement_textContent.length) !== null && _styleElement_textContent_length !== void 0 ? _styleElement_textContent_length : 0) > 0;
                const elementsCount = isSSR ? 1 : 0;
                if (providerElements.length > elementsCount) {
                    // eslint-disable-next-line no-console
                    console.error([
                        '@fluentui/react-provider: There are conflicting ids in your DOM.',
                        'Please make sure that you configured your application properly.',
                        '\n',
                        '\n',
                        'Configuration guide: https://aka.ms/fluentui-conflicting-ids'
                    ].join(' '));
                }
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
    }
    useHandleSSRStyleElements(targetDocument, styleTagId);
    useInsertionEffect(()=>{
        // The style element could already have been created during SSR - no need to recreate it
        const ssrStyleElement = targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.getElementById(styleTagId);
        if (ssrStyleElement) {
            styleTag.current = ssrStyleElement;
        } else {
            styleTag.current = createStyleTag(targetDocument, {
                ...styleElementAttributes,
                id: styleTagId
            });
            if (styleTag.current) {
                insertSheet(styleTag.current, rule);
            }
        }
        return ()=>{
            var _styleTag_current;
            (_styleTag_current = styleTag.current) === null || _styleTag_current === void 0 ? void 0 : _styleTag_current.remove();
        };
    }, [
        styleTagId,
        targetDocument,
        rule,
        styleElementAttributes
    ]);
    return {
        styleTagId,
        rule
    };
};
function useHandleSSRStyleElements(targetDocument, styleTagId) {
    // Using a state factory so that this logic only runs once per render
    // Each FluentProvider can create its own style element during SSR as a slot
    // Moves all theme style elements to document head during render to avoid hydration errors.
    // Should be strict mode safe since the logic is idempotent.
    react__WEBPACK_IMPORTED_MODULE_2__.useState(()=>{
        if (!targetDocument) {
            return;
        }
        const themeStyleElement = targetDocument.getElementById(styleTagId);
        if (themeStyleElement) {
            targetDocument.head.append(themeStyleElement);
        }
    });
}


/***/ }),

/***/ "./node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomStyleHooksContext: function() { return /* binding */ CustomStyleHooksContext; },
/* harmony export */   CustomStyleHooksProvider: function() { return /* binding */ CustomStyleHooksProvider; },
/* harmony export */   useCustomStyleHook: function() { return /* binding */ useCustomStyleHook; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */ 
/**
 * @internal
 */ const CustomStyleHooksContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const noop = ()=>{};
/**
 * @internal
 */ const CustomStyleHooksProvider = CustomStyleHooksContext.Provider;
/**
 * Gets a custom style hook
 * @param hook - One of the hook properties in CustomStyleHooksContextValue
 * @returns The corresponding hook when defined, otherwise a no-op function.
 */ const useCustomStyleHook = (hook)=>{
    var _React_useContext;
    var _React_useContext_hook;
    return (_React_useContext_hook = (_React_useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(CustomStyleHooksContext)) === null || _React_useContext === void 0 ? void 0 : _React_useContext[hook]) !== null && _React_useContext_hook !== void 0 ? _React_useContext_hook : noop;
};


/***/ }),

/***/ "./node_modules/@fluentui/react-shared-contexts/lib/OverridesContext/OverridesContext.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-shared-contexts/lib/OverridesContext/OverridesContext.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverridesContext: function() { return /* binding */ OverridesContext; },
/* harmony export */   OverridesProvider: function() { return /* binding */ OverridesProvider; },
/* harmony export */   useOverrides: function() { return /* binding */ useOverrides; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @internal
 */ const OverridesContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
/**
 * @internal
 */ const OverridesProvider = OverridesContext.Provider;
function useOverrides() {
    var _React_useContext;
    return (_React_useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(OverridesContext)) !== null && _React_useContext !== void 0 ? _React_useContext : {};
}


/***/ }),

/***/ "./node_modules/@fluentui/react-shared-contexts/lib/ProviderContext/ProviderContext.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-shared-contexts/lib/ProviderContext/ProviderContext.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: function() { return /* binding */ Provider; },
/* harmony export */   useFluent: function() { return /* binding */ useFluent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @internal
 */ const ProviderContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const providerContextDefaultValue = {
    // eslint-disable-next-line @nx/workspace-no-restricted-globals -- expected ignore ( SSR friendly acquisition of globals )
    targetDocument: typeof document === 'object' ? document : undefined,
    dir: 'ltr'
};
/**
 * @internal
 */ const Provider = ProviderContext.Provider;
function useFluent() {
    var _React_useContext;
    return (_React_useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ProviderContext)) !== null && _React_useContext !== void 0 ? _React_useContext : providerContextDefaultValue;
}


/***/ }),

/***/ "./node_modules/@fluentui/react-shared-contexts/lib/ThemeClassNameContext/ThemeClassNameContext.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-shared-contexts/lib/ThemeClassNameContext/ThemeClassNameContext.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeClassNameProvider: function() { return /* binding */ ThemeClassNameProvider; },
/* harmony export */   useThemeClassName: function() { return /* binding */ useThemeClassName; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @internal
 * Used to provide a CSS class that applies theme css variables
 *
 * Useful for elements in the React tree (can read context) but not in the DOM Tree. E.g. Portals
 */ const ThemeClassNameContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const themeClassNameContextDefaultVaue = '';
const ThemeClassNameProvider = ThemeClassNameContext.Provider;
/**
 * @returns CSS class that applies css variables
 */ function useThemeClassName() {
    var _React_useContext;
    return (_React_useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ThemeClassNameContext)) !== null && _React_useContext !== void 0 ? _React_useContext : themeClassNameContextDefaultVaue;
}


/***/ }),

/***/ "./node_modules/@fluentui/react-shared-contexts/lib/ThemeContext/ThemeContext.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-shared-contexts/lib/ThemeContext/ThemeContext.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeContext: function() { return /* binding */ ThemeContext; },
/* harmony export */   ThemeProvider: function() { return /* binding */ ThemeProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @internal
 */ const ThemeContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
/**
 * @internal
 */ const ThemeProvider = ThemeContext.Provider;


/***/ }),

/***/ "./node_modules/@fluentui/react-shared-contexts/lib/TooltipVisibilityContext/TooltipContext.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-shared-contexts/lib/TooltipVisibilityContext/TooltipContext.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipVisibilityProvider: function() { return /* binding */ TooltipVisibilityProvider; },
/* harmony export */   useTooltipVisibility: function() { return /* binding */ useTooltipVisibility; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @internal
 * Context shared by all of the tooltips in the app
 */ const TooltipVisibilityContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const tooltipVisibilityContextDefaultValue = {};
/**
 * @internal
 */ const TooltipVisibilityProvider = TooltipVisibilityContext.Provider;
function useTooltipVisibility() {
    var _React_useContext;
    return (_React_useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(TooltipVisibilityContext)) !== null && _React_useContext !== void 0 ? _React_useContext : tooltipVisibilityContextDefaultValue;
}


/***/ }),

/***/ "./node_modules/@fluentui/react-tabster/lib/focus/constants.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@fluentui/react-tabster/lib/focus/constants.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FOCUS_VISIBLE_ATTR: function() { return /* binding */ FOCUS_VISIBLE_ATTR; },
/* harmony export */   FOCUS_WITHIN_ATTR: function() { return /* binding */ FOCUS_WITHIN_ATTR; },
/* harmony export */   KEYBOARD_NAV_ATTRIBUTE: function() { return /* binding */ KEYBOARD_NAV_ATTRIBUTE; },
/* harmony export */   KEYBOARD_NAV_SELECTOR: function() { return /* binding */ KEYBOARD_NAV_SELECTOR; },
/* harmony export */   defaultOptions: function() { return /* binding */ defaultOptions; }
/* harmony export */ });
const KEYBOARD_NAV_ATTRIBUTE = 'data-keyboard-nav';
const KEYBOARD_NAV_SELECTOR = `:global([${KEYBOARD_NAV_ATTRIBUTE}])`;
/**
 * @internal
 */ const FOCUS_VISIBLE_ATTR = 'data-fui-focus-visible';
/**
 * @internal
 */ const FOCUS_WITHIN_ATTR = 'data-fui-focus-within';
const defaultOptions = {
    style: {},
    selector: 'focus',
    customizeSelector: (selector)=>selector
};


/***/ }),

/***/ "./node_modules/@fluentui/react-tabster/lib/focus/focusVisiblePolyfill.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@fluentui/react-tabster/lib/focus/focusVisiblePolyfill.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyFocusVisiblePolyfill: function() { return /* binding */ applyFocusVisiblePolyfill; }
/* harmony export */ });
/* harmony import */ var _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-utilities */ "./node_modules/@fluentui/react-utilities/lib/utils/isHTMLElement.js");
/* harmony import */ var keyborg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! keyborg */ "./node_modules/keyborg/dist/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@fluentui/react-tabster/lib/focus/constants.js");



/**
 * @internal
 * @param scope - Applies the ponyfill to all DOM children
 * @param targetWindow - window
 */ function applyFocusVisiblePolyfill(scope, targetWindow) {
    if (alreadyInScope(scope)) {
        // Focus visible polyfill already applied at this scope
        return ()=>undefined;
    }
    const state = {
        current: undefined
    };
    const keyborg = (0,keyborg__WEBPACK_IMPORTED_MODULE_1__.createKeyborg)(targetWindow);
    function registerElementIfNavigating(el) {
        if (keyborg.isNavigatingWithKeyboard() && (0,_fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(el)) {
            state.current = el;
            el.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_2__.FOCUS_VISIBLE_ATTR, '');
        }
    }
    function disposeCurrentElement() {
        if (state.current) {
            state.current.removeAttribute(_constants__WEBPACK_IMPORTED_MODULE_2__.FOCUS_VISIBLE_ATTR);
            state.current = undefined;
        }
    }
    // When navigation mode changes remove the focus-visible selector
    keyborg.subscribe((isNavigatingWithKeyboard)=>{
        if (!isNavigatingWithKeyboard) {
            disposeCurrentElement();
        } else {
            registerElementIfNavigating(targetWindow.document.activeElement);
        }
    });
    // Keyborg's focusin event is delegated so it's only registered once on the window
    // and contains metadata about the focus event
    const keyborgListener = (e)=>{
        disposeCurrentElement();
        const target = e.composedPath()[0];
        registerElementIfNavigating(target);
    };
    // Make sure that when focus leaves the scope, the focus visible class is removed
    const blurListener = (e)=>{
        if (!e.relatedTarget || (0,_fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(e.relatedTarget) && !scope.contains(e.relatedTarget)) {
            disposeCurrentElement();
        }
    };
    scope.addEventListener(keyborg__WEBPACK_IMPORTED_MODULE_1__.KEYBORG_FOCUSIN, keyborgListener);
    scope.addEventListener('focusout', blurListener);
    scope.focusVisible = true;
    if (scope.contains(targetWindow.document.activeElement)) {
        registerElementIfNavigating(targetWindow.document.activeElement);
    }
    // Return disposer
    return ()=>{
        disposeCurrentElement();
        scope.removeEventListener(keyborg__WEBPACK_IMPORTED_MODULE_1__.KEYBORG_FOCUSIN, keyborgListener);
        scope.removeEventListener('focusout', blurListener);
        scope.focusVisible = undefined;
        (0,keyborg__WEBPACK_IMPORTED_MODULE_1__.disposeKeyborg)(keyborg);
    };
}
function alreadyInScope(el) {
    if (!el) {
        return false;
    }
    if (el.focusVisible) {
        return true;
    }
    return alreadyInScope(el === null || el === void 0 ? void 0 : el.parentElement);
}


/***/ }),

/***/ "./node_modules/@fluentui/react-tabster/lib/hooks/useFocusVisible.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@fluentui/react-tabster/lib/hooks/useFocusVisible.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFocusVisible: function() { return /* binding */ useFocusVisible; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-shared-contexts */ "./node_modules/@fluentui/react-shared-contexts/lib/ProviderContext/ProviderContext.js");
/* harmony import */ var _focus_focusVisiblePolyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../focus/focusVisiblePolyfill */ "./node_modules/@fluentui/react-tabster/lib/focus/focusVisiblePolyfill.js");



function useFocusVisible(options = {}) {
    const contextValue = (0,_fluentui_react_shared_contexts__WEBPACK_IMPORTED_MODULE_1__.useFluent)();
    const scopeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    var _options_targetDocument;
    const targetDocument = (_options_targetDocument = options.targetDocument) !== null && _options_targetDocument !== void 0 ? _options_targetDocument : contextValue.targetDocument;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if ((targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.defaultView) && scopeRef.current) {
            return (0,_focus_focusVisiblePolyfill__WEBPACK_IMPORTED_MODULE_2__.applyFocusVisiblePolyfill)(scopeRef.current, targetDocument.defaultView);
        }
    }, [
        scopeRef,
        targetDocument
    ]);
    return scopeRef;
}


/***/ }),

/***/ "./node_modules/@fluentui/react-utilities/lib/compose/assertSlots.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@fluentui/react-utilities/lib/compose/assertSlots.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertSlots: function() { return /* binding */ assertSlots; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@fluentui/react-utilities/lib/compose/constants.js");
/* harmony import */ var _isSlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isSlot */ "./node_modules/@fluentui/react-utilities/lib/compose/isSlot.js");
/* harmony import */ var _slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slot */ "./node_modules/@fluentui/react-utilities/lib/compose/slot.js");




/**
 * @internal
 * Assertion method to ensure state slots properties are properly declared.
 * A properly declared slot must be declared by using the `slot` method.
 *
 * @example
 * ```tsx
 * export const renderInput_unstable = (state: InputState) => {
    assertSlots<InputSlots>(state);
    return (
      <state.root>
        {state.contentBefore && <state.contentBefore />}
        <state.input />
        {state.contentAfter && <state.contentAfter />}
      </state.root>
    );
  };
 * ```
 */ function assertSlots(state) {
    /**
   * This verification is not necessary in production
   * as we're verifying static properties that will not change between environments
   */ if (true) {
        const typedState = state;
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        for (const slotName of Object.keys(typedState.components)){
            const slotElement = typedState[slotName];
            if (slotElement === undefined) {
                continue;
            }
            // this means a slot is being declared without using, slot.always or slot.optional or even resolveShorthand on the state hook,
            // but the render method is using the new `assertSlots` method. That scenario can be solved by simply updating the slot element with the proper element type
            // FIXME: this slot will still fail to support child render function scenario
            if (!(0,_isSlot__WEBPACK_IMPORTED_MODULE_2__.isSlot)(slotElement)) {
                typedState[slotName] = _slot__WEBPACK_IMPORTED_MODULE_3__.always(slotElement, {
                    // eslint-disable-next-line @typescript-eslint/no-deprecated
                    elementType: typedState.components[slotName]
                });
                // eslint-disable-next-line no-console
                console.warn(`@fluentui/react-utilities [${assertSlots.name}]:
"state.${slotName}" is not a slot!
Be sure to create slots properly by using "slot.always" or "slot.optional".`);
            } else {
                // This means a slot is being declared by using resolveShorthand on the state hook,
                // but the render method is using the new `assertSlots` method. That scenario can be solved by simply updating the slot element with the proper element type
                const { [_constants__WEBPACK_IMPORTED_MODULE_1__.SLOT_ELEMENT_TYPE_SYMBOL]: elementType } = slotElement;
                // eslint-disable-next-line @typescript-eslint/no-deprecated
                if (elementType !== typedState.components[slotName]) {
                    // eslint-disable-next-line @typescript-eslint/no-deprecated
                    slotElement[_constants__WEBPACK_IMPORTED_MODULE_1__.SLOT_ELEMENT_TYPE_SYMBOL] = typedState.components[slotName];
                    // eslint-disable-next-line no-console
                    console.warn(`@fluentui/react-utilities [${assertSlots.name}]:
"state.${slotName}" element type differs from "state.components.${slotName}",
${elementType} !== ${typedState.components[slotName]}.
Be sure to create slots properly by using "slot.always" or "slot.optional" with the correct elementType.`);
                }
            }
        }
    }
}


/***/ }),

/***/ "./node_modules/@fluentui/react-utilities/lib/compose/constants.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@fluentui/react-utilities/lib/compose/constants.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SLOT_CLASS_NAME_PROP_SYMBOL: function() { return /* binding */ SLOT_CLASS_NAME_PROP_SYMBOL; },
/* harmony export */   SLOT_ELEMENT_TYPE_SYMBOL: function() { return /* binding */ SLOT_ELEMENT_TYPE_SYMBOL; },
/* harmony export */   SLOT_RENDER_FUNCTION_SYMBOL: function() { return /* binding */ SLOT_RENDER_FUNCTION_SYMBOL; }
/* harmony export */ });
/**
 * @internal
 * Internal reference for the render function
 */ const SLOT_RENDER_FUNCTION_SYMBOL = Symbol.for('fui.slotRenderFunction');
/**
 * @internal
 * Internal reference for the render function
 */ const SLOT_ELEMENT_TYPE_SYMBOL = Symbol.for('fui.slotElementType');
/**
 * @internal
 * Internal cache of the original className prop for the slot, before being modified by the useStyles hook.
 */ const SLOT_CLASS_NAME_PROP_SYMBOL = Symbol.for('fui.slotClassNameProp');


/***/ }),

/***/ "./node_modules/@fluentui/react-utilities/lib/compose/getIntrinsicElementProps.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-utilities/lib/compose/getIntrinsicElementProps.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIntrinsicElementProps: function() { return /* binding */ getIntrinsicElementProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_getNativeElementProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getNativeElementProps */ "./node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js");


/**
 * Given an element tagname and user props, filters the props to only allowed props for the given
 * element type.
 *
 * Equivalent to {@link getNativeElementProps}, but more type-safe.
 *
 * @param tagName - The slot's default element type (e.g. 'div')
 * @param props - The component's props object
 * @param excludedPropNames - List of native props to exclude from the returned value
 */ const getIntrinsicElementProps = (tagName, // eslint-disable-next-line @typescript-eslint/no-restricted-types -- in order to not introduce Type Restriction CHANGe which is kinda "breaking change from Types POV", we don't enforce our custom `RefAttributes` in this API, to be compatible with scenarios where non v9 interfaces might be used. This may/will change with React 19
props, excludedPropNames)=>{
    var _props_as;
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    return (0,_utils_getNativeElementProps__WEBPACK_IMPORTED_MODULE_1__.getNativeElementProps)((_props_as = props.as) !== null && _props_as !== void 0 ? _props_as : tagName, props, excludedPropNames);
};


/***/ }),

/***/ "./node_modules/@fluentui/react-utilities/lib/compose/isSlot.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fluentui/react-utilities/lib/compose/isSlot.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSlot: function() { return /* binding */ isSlot; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@fluentui/react-utilities/lib/compose/constants.js");

/**
 * Guard method to ensure a given element is a slot.
 * This is mainly used internally to ensure a slot is being used as a component.
 */ function isSlot(element) {
    return Boolean(element === null || element === void 0 ? void 0 : element.hasOwnProperty(_constants__WEBPACK_IMPORTED_MODULE_0__.SLOT_ELEMENT_TYPE_SYMBOL));
}


/***/ }),

/***/ "./node_modules/@fluentui/react-utilities/lib/compose/slot.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fluentui/react-utilities/lib/compose/slot.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   always: function() { return /* binding */ always; },
/* harmony export */   optional: function() { return /* binding */ optional; },
/* harmony export */   resolveShorthand: function() { return /* binding */ resolveShorthand; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@fluentui/react-utilities/lib/compose/constants.js");


/**
 * Creates a slot from a slot shorthand or properties (`props.SLOT_NAME` or `props` itself)
 * @param value - the value of the slot, it can be a slot shorthand, a slot component or a slot properties
 * @param options - values you can pass to alter the signature of a slot, those values are:
 *
 * * `elementType` - the base element type of a slot, defaults to `'div'`
 * * `defaultProps` - similar to a React component declaration, you can provide a slot default properties to be merged with the shorthand/properties provided.
 */ function always(value, options) {
    const { defaultProps, elementType } = options;
    const props = resolveShorthand(value);
    /**
   * Casting is required here as SlotComponentType is a function, not an object.
   * Although SlotComponentType has a function signature, it is still just an object.
   * This is required to make a slot callable (JSX compatible), this is the exact same approach
   * that is used on `@types/react` components
   */ const propsWithMetadata = {
        ...defaultProps,
        ...props,
        [_constants__WEBPACK_IMPORTED_MODULE_1__.SLOT_ELEMENT_TYPE_SYMBOL]: elementType,
        [_constants__WEBPACK_IMPORTED_MODULE_1__.SLOT_CLASS_NAME_PROP_SYMBOL]: props === null || props === void 0 ? void 0 : props.className
    };
    if (props && typeof props.children === 'function') {
        propsWithMetadata[_constants__WEBPACK_IMPORTED_MODULE_1__.SLOT_RENDER_FUNCTION_SYMBOL] = props.children;
        propsWithMetadata.children = defaultProps === null || defaultProps === void 0 ? void 0 : defaultProps.children;
    }
    return propsWithMetadata;
}
/**
 * Creates a slot from a slot shorthand or properties (`props.SLOT_NAME` or `props` itself)
 * @param value - the value of the slot, it can be a slot shorthand, a slot component or a slot properties
 * @param options - values you can pass to alter the signature of a slot, those values are:
 *
 * * `elementType` - the base element type of a slot, defaults to `'div'`
 * * `defaultProps` - similar to a React component declaration, you can provide a slot default properties to be merged with the shorthand/properties provided
 * * `renderByDefault` - a boolean that indicates if a slot will be rendered even if it's base value is `undefined`.
 * By default if `props.SLOT_NAME` is `undefined` then `state.SLOT_NAME` becomes `undefined`
 * and nothing will be rendered, but if `renderByDefault = true` then `state.SLOT_NAME` becomes an object
 * with the values provided by `options.defaultProps` (or `{}`). This is useful for cases such as providing a default content
 * in case no shorthand is provided, like the case of the `expandIcon` slot for the `AccordionHeader`
 */ function optional(value, options) {
    if (value === null || value === undefined && !options.renderByDefault) {
        return undefined;
    }
    return always(value, options);
}
/**
 * Helper function that converts a slot shorthand or properties to a slot properties object
 * The main difference between this function and `slot` is that this function does not return the metadata required for a slot to be considered a properly renderable slot, it only converts the value to a slot properties object
 * @param value - the value of the slot, it can be a slot shorthand or a slot properties object
 */ function resolveShorthand(value) {
    if (typeof value === 'string' || typeof value === 'number' || isIterable(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(value)) {
        return {
            children: value
        };
    }
    if (value && typeof value !== 'object' && "development" !== 'production') {
        // TODO: would be nice to have a link to slot documentation in this error message
        // eslint-disable-next-line no-console
        console.error(`@fluentui/react-utilities [slot.${resolveShorthand.name}]:
A slot got an invalid value "${value}" (${typeof value}).
A valid value for a slot is a slot shorthand or slot properties object.
Slot shorthands can be strings, numbers, arrays or JSX elements`);
    }
    return value;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isIterable = (value)=>typeof value === 'object' && value !== null && Symbol.iterator in value;


/***/ }),

/***/ "./node_modules/@fluentui/react-utilities/lib/hooks/useId.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@fluentui/react-utilities/lib/hooks/useId.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdPrefixProvider: function() { return /* binding */ IdPrefixProvider; },
/* harmony export */   resetIdsForTests: function() { return /* binding */ resetIdsForTests; },
/* harmony export */   useId: function() { return /* binding */ useId; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ssr_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ssr/index */ "./node_modules/@fluentui/react-utilities/lib/ssr/SSRContext.js");


const IdPrefixContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
/**
 * Allows to define a prefix that will be used for all IDs generated by useId() hook. It's useful to avoid collisions
 * between different bundles.
 */ const IdPrefixProvider = IdPrefixContext.Provider;
function useIdPrefix() {
    return react__WEBPACK_IMPORTED_MODULE_0__.useContext(IdPrefixContext) || '';
}
/**
 * Resets generated IDs, should be used only in tests.
 */ function resetIdsForTests() {
    _ssr_index__WEBPACK_IMPORTED_MODULE_1__.defaultSSRContextValue.current = 0;
}
/**
 * Hook to generate a unique ID.
 *
 * @param prefix - Optional prefix for the ID. Defaults to 'fui-'.
 * @param providedId - Optional id provided by a parent component. Defaults to the provided value if present,
 *  without conditioning the hook call
 * @returns The ID
 */ function useId(prefix = 'fui-', providedId) {
    'use no memo';
    const contextValue = (0,_ssr_index__WEBPACK_IMPORTED_MODULE_1__.useSSRContext)();
    const idPrefix = useIdPrefix();
    // Checking if useId is available on React, if it is, we use it to generate the id. String concatenation is used to
    // prevent bundlers from complaining with older versions of React.
    const _useId = react__WEBPACK_IMPORTED_MODULE_0__['use' + 'Id'];
    if (_useId) {
        const generatedId = _useId();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const escapedId = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>generatedId.replace(/:/g, ''), [
            generatedId
        ]);
        return providedId || `${idPrefix}${prefix}${escapedId}`;
    }
    // Hooks appear to be running conditionally, but they will always run in the same order since it's based on
    // the version of React being used. This is safe to ignore.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>{
        if (providedId) {
            return providedId;
        }
        return `${idPrefix}${prefix}${++contextValue.current}`;
    }, [
        idPrefix,
        prefix,
        providedId,
        contextValue
    ]);
}


/***/ }),

/***/ "./node_modules/@fluentui/react-utilities/lib/hooks/useIsomorphicLayoutEffect.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@fluentui/react-utilities/lib/hooks/useIsomorphicLayoutEffect.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsomorphicLayoutEffect: function() { return /* binding */ useIsomorphicLayoutEffect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ssr_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ssr/index */ "./node_modules/@fluentui/react-utilities/lib/ssr/canUseDOM.js");


/**
 * React currently throws a warning when using useLayoutEffect on the server. To get around it, we can conditionally
 * useEffect on the server (no-op) and useLayoutEffect in the browser. We occasionally need useLayoutEffect to
 * ensure we don't get a render flash for certain operations, but we may also need affected components to render on
 * the server.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 */ // eslint-disable-next-line no-restricted-properties
const useIsomorphicLayoutEffect = (0,_ssr_index__WEBPACK_IMPORTED_MODULE_1__.canUseDOM)() ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;


/***/ }),

/***/ "./node_modules/@fluentui/react-utilities/lib/hooks/useMergedRefs.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@fluentui/react-utilities/lib/hooks/useMergedRefs.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMergedRefs: function() { return /* binding */ useMergedRefs; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * React hook to merge multiple React refs (either MutableRefObjects or ref callbacks) into a single ref callback that
 * updates all provided refs
 * @param refs - Refs to collectively update with one ref value.
 * @returns A function with an attached "current" prop, so that it can be treated like a RefObject.
 */ // LegacyRef is actually not supported, but in React v18 types this is leaking directly from forwardRef component declaration
function useMergedRefs(...refs) {
    'use no memo';
    const mergedCallback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((value)=>{
        // Update the "current" prop hanging on the function.
        mergedCallback.current = value;
        for (const ref of refs){
            if (typeof ref === 'string' && "development" !== 'production') {
                // eslint-disable-next-line no-console
                console.error(`@fluentui/react-utilities [useMergedRefs]:
This hook does not support the usage of string refs. Please use React.useRef instead.

For more info on 'React.useRef', see https://react.dev/reference/react/useRef.
For more info on string refs, see https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-string-refs.`);
            }
            if (typeof ref === 'function') {
                ref(value);
            } else if (ref) {
                // work around the immutability of the React.Ref type
                ref.current = value;
            }
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps -- already exhaustive
    [
        ...refs
    ]);
    return mergedCallback;
}


/***/ }),

/***/ "./node_modules/@fluentui/react-utilities/lib/ssr/SSRContext.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fluentui/react-utilities/lib/ssr/SSRContext.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSRContext: function() { return /* binding */ SSRContext; },
/* harmony export */   SSRProvider: function() { return /* binding */ SSRProvider; },
/* harmony export */   defaultSSRContextValue: function() { return /* binding */ defaultSSRContextValue; },
/* harmony export */   useIsSSR: function() { return /* binding */ useIsSSR; },
/* harmony export */   useSSRContext: function() { return /* binding */ useSSRContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canUseDOM */ "./node_modules/@fluentui/react-utilities/lib/ssr/canUseDOM.js");


/**
 * Default context value to use in case there is no SSRProvider. This is fine for client-only apps.
 *
 * @internal
 */ const defaultSSRContextValue = {
    current: 0
};
const SSRContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
/**
 * @internal
 */ function useSSRContext() {
    var _React_useContext;
    return (_React_useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(SSRContext)) !== null && _React_useContext !== void 0 ? _React_useContext : defaultSSRContextValue;
}
/**
 * When using SSR with Fluent UI, applications must be wrapped in an SSRProvider. This ensures that auto generated ids
 * are consistent between the client and server.
 *
 * @public
 */ const SSRProvider = (props)=>{
    const [value] = react__WEBPACK_IMPORTED_MODULE_0__.useState(()=>({
            current: 0
        }));
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSRContext.Provider, {
        value: value
    }, props.children);
};
/**
 * Returns whether the component is currently being server side rendered or hydrated on the client. Can be used to delay
 * browser-specific rendering until after hydration. May cause re-renders on a client when is used within SSRProvider.
 */ function useIsSSR() {
    const isInSSRContext = useSSRContext() !== defaultSSRContextValue;
    const [isSSR, setIsSSR] = react__WEBPACK_IMPORTED_MODULE_0__.useState(isInSSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider, provide a warning to hint to the
    // developer to add one.
    if (true) {
        if (!isInSSRContext && !(0,_canUseDOM__WEBPACK_IMPORTED_MODULE_1__.canUseDOM)()) {
            // eslint-disable-next-line no-console
            console.error(`@fluentui/react-components [${useIsSSR.name}]:
When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.


Check documentation at https://aka.ms/fluentui-ssr.`);
        }
    }
    // If on the client, and the component was initially server rendered, then schedule a layout effect to update the
    // component after hydration.
    if ((0,_canUseDOM__WEBPACK_IMPORTED_MODULE_1__.canUseDOM)() && isInSSRContext) {
        // This if statement technically breaks the rules of hooks, but is safe because the condition never changes after
        // mounting.
        // eslint-disable-next-line
        react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(()=>{
            setIsSSR(false);
        }, []);
    }
    return isSSR;
}


/***/ }),

/***/ "./node_modules/@fluentui/react-utilities/lib/ssr/canUseDOM.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@fluentui/react-utilities/lib/ssr/canUseDOM.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canUseDOM: function() { return /* binding */ canUseDOM; }
/* harmony export */ });
/**
 * Verifies if an application can use DOM.
 */ function canUseDOM() {
    return /* eslint-disable @nx/workspace-no-restricted-globals -- expected ignore ( SSR friendly acquisition of globals )*/ typeof window !== 'undefined' && !!(window.document && // eslint-disable-next-line @typescript-eslint/no-deprecated
    window.document.createElement);
}


/***/ }),

/***/ "./node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNativeElementProps: function() { return /* binding */ getNativeElementProps; },
/* harmony export */   getPartitionedNativeProps: function() { return /* binding */ getPartitionedNativeProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties */ "./node_modules/@fluentui/react-utilities/lib/utils/properties.js");


const nativeElementMap = {
    label: _properties__WEBPACK_IMPORTED_MODULE_1__.labelProperties,
    audio: _properties__WEBPACK_IMPORTED_MODULE_1__.audioProperties,
    video: _properties__WEBPACK_IMPORTED_MODULE_1__.videoProperties,
    ol: _properties__WEBPACK_IMPORTED_MODULE_1__.olProperties,
    li: _properties__WEBPACK_IMPORTED_MODULE_1__.liProperties,
    a: _properties__WEBPACK_IMPORTED_MODULE_1__.anchorProperties,
    button: _properties__WEBPACK_IMPORTED_MODULE_1__.buttonProperties,
    input: _properties__WEBPACK_IMPORTED_MODULE_1__.inputProperties,
    textarea: _properties__WEBPACK_IMPORTED_MODULE_1__.textAreaProperties,
    select: _properties__WEBPACK_IMPORTED_MODULE_1__.selectProperties,
    option: _properties__WEBPACK_IMPORTED_MODULE_1__.optionProperties,
    table: _properties__WEBPACK_IMPORTED_MODULE_1__.tableProperties,
    tr: _properties__WEBPACK_IMPORTED_MODULE_1__.trProperties,
    th: _properties__WEBPACK_IMPORTED_MODULE_1__.thProperties,
    td: _properties__WEBPACK_IMPORTED_MODULE_1__.tdProperties,
    colGroup: _properties__WEBPACK_IMPORTED_MODULE_1__.colGroupProperties,
    col: _properties__WEBPACK_IMPORTED_MODULE_1__.colProperties,
    fieldset: _properties__WEBPACK_IMPORTED_MODULE_1__.fieldsetProperties,
    form: _properties__WEBPACK_IMPORTED_MODULE_1__.formProperties,
    iframe: _properties__WEBPACK_IMPORTED_MODULE_1__.iframeProperties,
    img: _properties__WEBPACK_IMPORTED_MODULE_1__.imgProperties,
    time: _properties__WEBPACK_IMPORTED_MODULE_1__.timeProperties,
    dialog: _properties__WEBPACK_IMPORTED_MODULE_1__.dialogProperties
};
/**
 * Given an element tagname and user props, filters the props to only allowed props for the given
 * element type.
 * @param tagName - Tag name (e.g. "div")
 * @param props - Props object
 * @param excludedPropNames - List of props to disallow
 *
 * @deprecated use getIntrinsicElementProps instead, it is a type-safe version of this method
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNativeElementProps(tagName, props, excludedPropNames) {
    const allowedPropNames = tagName && nativeElementMap[tagName] || _properties__WEBPACK_IMPORTED_MODULE_1__.htmlElementProperties;
    allowedPropNames.as = 1;
    return (0,_properties__WEBPACK_IMPORTED_MODULE_1__.getNativeProps)(props, allowedPropNames, excludedPropNames);
}
/**
 * Splits the native props into ones that go to the `root` slot, and ones that go to the primary slot.
 *
 * This function is only for use with components that have a primary slot other than `root`.
 * Most components should use {@link getNativeElementProps} for their root slot if it is the primary slot.
 *
 * @returns An object containing the native props for the `root` and primary slots.
 */ const getPartitionedNativeProps = ({ primarySlotTagName, props, excludedPropNames })=>{
    return {
        root: {
            style: props.style,
            className: props.className
        },
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        primary: getNativeElementProps(primarySlotTagName, props, [
            ...excludedPropNames || [],
            'style',
            'className'
        ])
    };
};


/***/ }),

/***/ "./node_modules/@fluentui/react-utilities/lib/utils/isHTMLElement.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@fluentui/react-utilities/lib/utils/isHTMLElement.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHTMLElement: function() { return /* binding */ isHTMLElement; }
/* harmony export */ });
/**
 * Verifies if a given node is an HTMLElement,
 * this method works seamlessly with frames and elements from different documents
 *
 * This is preferred over simply using `instanceof`.
 * Since `instanceof` might be problematic while operating with [multiple realms](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof#instanceof_and_multiple_realms)
 *
 * @example
 * ```ts
 * isHTMLElement(event.target) && event.target.focus()
 * isHTMLElement(event.target, {constructorName: 'HTMLInputElement'}) && event.target.value // some value
 * ```
 *
 */ function isHTMLElement(element, options) {
    var _typedElement_ownerDocument;
    const typedElement = element;
    var _options_constructorName;
    return Boolean((typedElement === null || typedElement === void 0 ? void 0 : (_typedElement_ownerDocument = typedElement.ownerDocument) === null || _typedElement_ownerDocument === void 0 ? void 0 : _typedElement_ownerDocument.defaultView) && typedElement instanceof typedElement.ownerDocument.defaultView[(_options_constructorName = options === null || options === void 0 ? void 0 : options.constructorName) !== null && _options_constructorName !== void 0 ? _options_constructorName : 'HTMLElement']);
}


/***/ }),

/***/ "./node_modules/@fluentui/react-utilities/lib/utils/properties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@fluentui/react-utilities/lib/utils/properties.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   anchorProperties: function() { return /* binding */ anchorProperties; },
/* harmony export */   audioProperties: function() { return /* binding */ audioProperties; },
/* harmony export */   baseElementEvents: function() { return /* binding */ baseElementEvents; },
/* harmony export */   baseElementProperties: function() { return /* binding */ baseElementProperties; },
/* harmony export */   buttonProperties: function() { return /* binding */ buttonProperties; },
/* harmony export */   colGroupProperties: function() { return /* binding */ colGroupProperties; },
/* harmony export */   colProperties: function() { return /* binding */ colProperties; },
/* harmony export */   dialogProperties: function() { return /* binding */ dialogProperties; },
/* harmony export */   divProperties: function() { return /* binding */ divProperties; },
/* harmony export */   fieldsetProperties: function() { return /* binding */ fieldsetProperties; },
/* harmony export */   formProperties: function() { return /* binding */ formProperties; },
/* harmony export */   getNativeProps: function() { return /* binding */ getNativeProps; },
/* harmony export */   htmlElementProperties: function() { return /* binding */ htmlElementProperties; },
/* harmony export */   iframeProperties: function() { return /* binding */ iframeProperties; },
/* harmony export */   imgProperties: function() { return /* binding */ imgProperties; },
/* harmony export */   inputProperties: function() { return /* binding */ inputProperties; },
/* harmony export */   labelProperties: function() { return /* binding */ labelProperties; },
/* harmony export */   liProperties: function() { return /* binding */ liProperties; },
/* harmony export */   microdataProperties: function() { return /* binding */ microdataProperties; },
/* harmony export */   olProperties: function() { return /* binding */ olProperties; },
/* harmony export */   optionProperties: function() { return /* binding */ optionProperties; },
/* harmony export */   selectProperties: function() { return /* binding */ selectProperties; },
/* harmony export */   tableProperties: function() { return /* binding */ tableProperties; },
/* harmony export */   tdProperties: function() { return /* binding */ tdProperties; },
/* harmony export */   textAreaProperties: function() { return /* binding */ textAreaProperties; },
/* harmony export */   thProperties: function() { return /* binding */ thProperties; },
/* harmony export */   timeProperties: function() { return /* binding */ timeProperties; },
/* harmony export */   trProperties: function() { return /* binding */ trProperties; },
/* harmony export */   videoProperties: function() { return /* binding */ videoProperties; }
/* harmony export */ });
const toObjectMap = (...items)=>{
    const result = {};
    for (const item of items){
        const keys = Array.isArray(item) ? item : Object.keys(item);
        for (const key of keys){
            result[key] = 1;
        }
    }
    return result;
};
/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */ const baseElementEvents = toObjectMap([
    'onAuxClick',
    'onAnimationEnd',
    'onAnimationStart',
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel',
    'onPointerCancel',
    'onPointerDown',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerMove',
    'onPointerOut',
    'onPointerOver',
    'onPointerUp',
    'onGotPointerCapture',
    'onLostPointerCapture'
]);
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */ const baseElementProperties = toObjectMap([
    'accessKey',
    'children',
    'className',
    'contentEditable',
    'dir',
    'draggable',
    'hidden',
    'htmlFor',
    'id',
    'lang',
    'ref',
    'role',
    'style',
    'tabIndex',
    'title',
    'translate',
    'spellCheck',
    'name'
]);
/**
 * An array of microdata attributes that are allowed on every html element type.
 *
 * @public
 */ const microdataProperties = toObjectMap([
    'itemID',
    'itemProp',
    'itemRef',
    'itemScope',
    'itemType'
]);
/**
 * An array of HTML element properties and events.
 *
 * @public
 */ const htmlElementProperties = toObjectMap(baseElementProperties, baseElementEvents, microdataProperties);
/**
 * An array of LABEL tag properties and events.
 *
 * @public
 */ const labelProperties = toObjectMap(htmlElementProperties, [
    'form'
]);
/**
 * An array of AUDIO tag properties and events.

 * @public
 */ const audioProperties = toObjectMap(htmlElementProperties, [
    'height',
    'loop',
    'muted',
    'preload',
    'src',
    'width'
]);
/**
 * An array of VIDEO tag properties and events.
 *
 * @public
 */ const videoProperties = toObjectMap(audioProperties, [
    'poster'
]);
/**
 * An array of OL tag properties and events.
 *
 * @public
 */ const olProperties = toObjectMap(htmlElementProperties, [
    'start'
]);
/**
 * An array of LI tag properties and events.
 *
 * @public
 */ const liProperties = toObjectMap(htmlElementProperties, [
    'value'
]);
/**
 * An array of A tag properties and events.
 *
 * @public
 */ const anchorProperties = toObjectMap(htmlElementProperties, [
    'download',
    'href',
    'hrefLang',
    'media',
    'rel',
    'target',
    'type'
]);
/**
 * An array of TIME tag properties and events.
 *
 * @public
 */ const timeProperties = toObjectMap(htmlElementProperties, [
    'dateTime'
]);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */ const buttonProperties = toObjectMap(htmlElementProperties, [
    'autoFocus',
    'disabled',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'type',
    'value'
]);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */ const inputProperties = toObjectMap(buttonProperties, [
    'accept',
    'alt',
    'autoCorrect',
    'autoCapitalize',
    'autoComplete',
    'checked',
    'dirname',
    'form',
    'height',
    'inputMode',
    'list',
    'max',
    'maxLength',
    'min',
    'minLength',
    'multiple',
    'pattern',
    'placeholder',
    'readOnly',
    'required',
    'src',
    'step',
    'size',
    'type',
    'value',
    'width'
]);
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */ const textAreaProperties = toObjectMap(buttonProperties, [
    'autoCapitalize',
    'cols',
    'dirname',
    'form',
    'maxLength',
    'placeholder',
    'readOnly',
    'required',
    'rows',
    'wrap'
]);
/**
 * An array of SELECT tag properties and events.
 *
 * @public
 */ const selectProperties = toObjectMap(buttonProperties, [
    'form',
    'multiple',
    'required'
]);
const optionProperties = toObjectMap(htmlElementProperties, [
    'selected',
    'value'
]);
/**
 * An array of TABLE tag properties and events.
 *
 * @public
 */ const tableProperties = toObjectMap(htmlElementProperties, [
    'cellPadding',
    'cellSpacing'
]);
/**
 * An array of TR tag properties and events.
 *
 * @public
 */ const trProperties = htmlElementProperties;
/**
 * An array of TH tag properties and events.
 *
 * @public
 */ const thProperties = toObjectMap(htmlElementProperties, [
    'colSpan',
    'rowSpan',
    'scope'
]);
/**
 * An array of TD tag properties and events.
 *
 * @public
 */ const tdProperties = toObjectMap(htmlElementProperties, [
    'colSpan',
    'headers',
    'rowSpan',
    'scope'
]);
const colGroupProperties = toObjectMap(htmlElementProperties, [
    'span'
]);
const colProperties = toObjectMap(htmlElementProperties, [
    'span'
]);
/**
 * An array of FIELDSET tag properties and events.
 *
 * @public
 */ const fieldsetProperties = toObjectMap(htmlElementProperties, [
    'disabled',
    'form'
]);
/**
 * An array of FORM tag properties and events.
 *
 * @public
 */ const formProperties = toObjectMap(htmlElementProperties, [
    'acceptCharset',
    'action',
    'encType',
    'encType',
    'method',
    'noValidate',
    'target'
]);
/**
 * An array of IFRAME tag properties and events.
 *
 * @public
 */ const iframeProperties = toObjectMap(htmlElementProperties, [
    'allow',
    'allowFullScreen',
    'allowPaymentRequest',
    'allowTransparency',
    'csp',
    'height',
    'importance',
    'referrerPolicy',
    'sandbox',
    'src',
    'srcDoc',
    'width'
]);
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */ const imgProperties = toObjectMap(htmlElementProperties, [
    'alt',
    'crossOrigin',
    'height',
    'src',
    'srcSet',
    'useMap',
    'width'
]);
/**
 * An array of DIALOG tag properties and events.
 *
 * @public
 */ const dialogProperties = toObjectMap(htmlElementProperties, [
    'open',
    'onCancel',
    'onClose'
]);
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */ const divProperties = htmlElementProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropNames - The array or record of allowed prop names.
 * @param excludedPropNames
 * @returns The filtered props
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNativeProps(// eslint-disable-next-line @typescript-eslint/no-explicit-any
props, allowedPropNames, excludedPropNames) {
    // It'd be great to properly type this while allowing 'aria-` and 'data-' attributes like TypeScript does for
    // JSX attributes, but that ability is hardcoded into the TS compiler with no analog in TypeScript typings.
    // Then we'd be able to enforce props extends native props (including aria- and data- attributes), and then
    // return native props.
    // We should be able to do this once this PR is merged: https://github.com/microsoft/TypeScript/pull/26797
    const isArray = Array.isArray(allowedPropNames);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = {};
    const keys = Object.keys(props);
    for (const key of keys){
        const isNativeProp = !isArray && allowedPropNames[key] || isArray && allowedPropNames.indexOf(key) >= 0 || key.indexOf('data-') === 0 || key.indexOf('aria-') === 0;
        if (isNativeProp && (!excludedPropNames || (excludedPropNames === null || excludedPropNames === void 0 ? void 0 : excludedPropNames.indexOf(key)) === -1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            result[key] = props[key];
        }
    }
    return result;
}


/***/ }),

/***/ "./node_modules/@fluentui/tokens/lib/alias/lightColor.js":
/*!***************************************************************!*\
  !*** ./node_modules/@fluentui/tokens/lib/alias/lightColor.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateColorTokens: function() { return /* binding */ generateColorTokens; }
/* harmony export */ });
/* harmony import */ var _global_colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/colors.js */ "./node_modules/@fluentui/tokens/lib/global/colors.js");
/* !!! DO NOT EDIT !!! */ /* This file has been generated by the token pipeline */ 
const generateColorTokens = (brand)=>({
        colorNeutralForeground1: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[14],
        colorNeutralForeground1Hover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[14],
        colorNeutralForeground1Pressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[14],
        colorNeutralForeground1Selected: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[14],
        colorNeutralForeground2: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[26],
        colorNeutralForeground2Hover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[14],
        colorNeutralForeground2Pressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[14],
        colorNeutralForeground2Selected: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[14],
        colorNeutralForeground2BrandHover: brand[80],
        colorNeutralForeground2BrandPressed: brand[70],
        colorNeutralForeground2BrandSelected: brand[80],
        colorNeutralForeground3: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[38],
        colorNeutralForeground3Hover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[26],
        colorNeutralForeground3Pressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[26],
        colorNeutralForeground3Selected: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[26],
        colorNeutralForeground3BrandHover: brand[80],
        colorNeutralForeground3BrandPressed: brand[70],
        colorNeutralForeground3BrandSelected: brand[80],
        colorNeutralForeground4: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[44],
        colorNeutralForegroundDisabled: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[74],
        colorNeutralForegroundInvertedDisabled: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.whiteAlpha[40],
        colorBrandForegroundLink: brand[70],
        colorBrandForegroundLinkHover: brand[60],
        colorBrandForegroundLinkPressed: brand[40],
        colorBrandForegroundLinkSelected: brand[70],
        colorNeutralForeground2Link: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[26],
        colorNeutralForeground2LinkHover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[14],
        colorNeutralForeground2LinkPressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[14],
        colorNeutralForeground2LinkSelected: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[14],
        colorCompoundBrandForeground1: brand[80],
        colorCompoundBrandForeground1Hover: brand[70],
        colorCompoundBrandForeground1Pressed: brand[60],
        colorBrandForeground1: brand[80],
        colorBrandForeground2: brand[70],
        colorBrandForeground2Hover: brand[60],
        colorBrandForeground2Pressed: brand[30],
        colorNeutralForeground1Static: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[14],
        colorNeutralForegroundStaticInverted: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorNeutralForegroundInverted: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorNeutralForegroundInvertedHover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorNeutralForegroundInvertedPressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorNeutralForegroundInvertedSelected: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorNeutralForegroundInverted2: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorNeutralForegroundOnBrand: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorNeutralForegroundInvertedLink: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorNeutralForegroundInvertedLinkHover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorNeutralForegroundInvertedLinkPressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorNeutralForegroundInvertedLinkSelected: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorBrandForegroundInverted: brand[100],
        colorBrandForegroundInvertedHover: brand[110],
        colorBrandForegroundInvertedPressed: brand[100],
        colorBrandForegroundOnLight: brand[80],
        colorBrandForegroundOnLightHover: brand[70],
        colorBrandForegroundOnLightPressed: brand[50],
        colorBrandForegroundOnLightSelected: brand[60],
        colorNeutralBackground1: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorNeutralBackground1Hover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[96],
        colorNeutralBackground1Pressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[88],
        colorNeutralBackground1Selected: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[92],
        colorNeutralBackground2: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[98],
        colorNeutralBackground2Hover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[94],
        colorNeutralBackground2Pressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[86],
        colorNeutralBackground2Selected: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[90],
        colorNeutralBackground3: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[96],
        colorNeutralBackground3Hover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[92],
        colorNeutralBackground3Pressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[84],
        colorNeutralBackground3Selected: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[88],
        colorNeutralBackground4: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[94],
        colorNeutralBackground4Hover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[98],
        colorNeutralBackground4Pressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[96],
        colorNeutralBackground4Selected: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorNeutralBackground5: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[92],
        colorNeutralBackground5Hover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[96],
        colorNeutralBackground5Pressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[94],
        colorNeutralBackground5Selected: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[98],
        colorNeutralBackground6: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[90],
        colorNeutralBackgroundInverted: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[16],
        colorNeutralBackgroundStatic: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[20],
        colorNeutralBackgroundAlpha: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.whiteAlpha[50],
        colorNeutralBackgroundAlpha2: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.whiteAlpha[80],
        colorSubtleBackground: 'transparent',
        colorSubtleBackgroundHover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[96],
        colorSubtleBackgroundPressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[88],
        colorSubtleBackgroundSelected: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[92],
        colorSubtleBackgroundLightAlphaHover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.whiteAlpha[70],
        colorSubtleBackgroundLightAlphaPressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.whiteAlpha[50],
        colorSubtleBackgroundLightAlphaSelected: 'transparent',
        colorSubtleBackgroundInverted: 'transparent',
        colorSubtleBackgroundInvertedHover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.blackAlpha[10],
        colorSubtleBackgroundInvertedPressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.blackAlpha[30],
        colorSubtleBackgroundInvertedSelected: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.blackAlpha[20],
        colorTransparentBackground: 'transparent',
        colorTransparentBackgroundHover: 'transparent',
        colorTransparentBackgroundPressed: 'transparent',
        colorTransparentBackgroundSelected: 'transparent',
        colorNeutralBackgroundDisabled: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[94],
        colorNeutralBackgroundInvertedDisabled: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.whiteAlpha[10],
        colorNeutralStencil1: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[90],
        colorNeutralStencil2: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[98],
        colorNeutralStencil1Alpha: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.blackAlpha[10],
        colorNeutralStencil2Alpha: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.blackAlpha[5],
        colorBackgroundOverlay: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.blackAlpha[40],
        colorScrollbarOverlay: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.blackAlpha[50],
        colorBrandBackground: brand[80],
        colorBrandBackgroundHover: brand[70],
        colorBrandBackgroundPressed: brand[40],
        colorBrandBackgroundSelected: brand[60],
        colorCompoundBrandBackground: brand[80],
        colorCompoundBrandBackgroundHover: brand[70],
        colorCompoundBrandBackgroundPressed: brand[60],
        colorBrandBackgroundStatic: brand[80],
        colorBrandBackground2: brand[160],
        colorBrandBackground2Hover: brand[150],
        colorBrandBackground2Pressed: brand[130],
        colorBrandBackground3Static: brand[60],
        colorBrandBackground4Static: brand[40],
        colorBrandBackgroundInverted: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorBrandBackgroundInvertedHover: brand[160],
        colorBrandBackgroundInvertedPressed: brand[140],
        colorBrandBackgroundInvertedSelected: brand[150],
        colorNeutralCardBackground: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[98],
        colorNeutralCardBackgroundHover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorNeutralCardBackgroundPressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[96],
        colorNeutralCardBackgroundSelected: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[92],
        colorNeutralCardBackgroundDisabled: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[94],
        colorNeutralStrokeAccessible: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[38],
        colorNeutralStrokeAccessibleHover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[34],
        colorNeutralStrokeAccessiblePressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[30],
        colorNeutralStrokeAccessibleSelected: brand[80],
        colorNeutralStroke1: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[82],
        colorNeutralStroke1Hover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[78],
        colorNeutralStroke1Pressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[70],
        colorNeutralStroke1Selected: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[74],
        colorNeutralStroke2: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[88],
        colorNeutralStroke3: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[94],
        colorNeutralStrokeSubtle: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[88],
        colorNeutralStrokeOnBrand: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorNeutralStrokeOnBrand2: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorNeutralStrokeOnBrand2Hover: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorNeutralStrokeOnBrand2Pressed: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorNeutralStrokeOnBrand2Selected: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorBrandStroke1: brand[80],
        colorBrandStroke2: brand[140],
        colorBrandStroke2Hover: brand[120],
        colorBrandStroke2Pressed: brand[80],
        colorBrandStroke2Contrast: brand[140],
        colorCompoundBrandStroke: brand[80],
        colorCompoundBrandStrokeHover: brand[70],
        colorCompoundBrandStrokePressed: brand[60],
        colorNeutralStrokeDisabled: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.grey[88],
        colorNeutralStrokeInvertedDisabled: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.whiteAlpha[40],
        colorTransparentStroke: 'transparent',
        colorTransparentStrokeInteractive: 'transparent',
        colorTransparentStrokeDisabled: 'transparent',
        colorNeutralStrokeAlpha: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.blackAlpha[5],
        colorNeutralStrokeAlpha2: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.whiteAlpha[20],
        colorStrokeFocus1: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.white,
        colorStrokeFocus2: _global_colors_js__WEBPACK_IMPORTED_MODULE_0__.black,
        colorNeutralShadowAmbient: 'rgba(0,0,0,0.12)',
        colorNeutralShadowKey: 'rgba(0,0,0,0.14)',
        colorNeutralShadowAmbientLighter: 'rgba(0,0,0,0.06)',
        colorNeutralShadowKeyLighter: 'rgba(0,0,0,0.07)',
        colorNeutralShadowAmbientDarker: 'rgba(0,0,0,0.20)',
        colorNeutralShadowKeyDarker: 'rgba(0,0,0,0.24)',
        colorBrandShadowAmbient: 'rgba(0,0,0,0.30)',
        colorBrandShadowKey: 'rgba(0,0,0,0.25)'
    });


/***/ }),

/***/ "./node_modules/@fluentui/tokens/lib/alias/lightColorPalette.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fluentui/tokens/lib/alias/lightColorPalette.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorPaletteTokens: function() { return /* binding */ colorPaletteTokens; },
/* harmony export */   colorStatusTokens: function() { return /* binding */ colorStatusTokens; }
/* harmony export */ });
/* harmony import */ var _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/colorPalette.js */ "./node_modules/@fluentui/tokens/lib/global/colorPalette.js");
/* harmony import */ var _sharedColorNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sharedColorNames.js */ "./node_modules/@fluentui/tokens/lib/sharedColorNames.js");
/* harmony import */ var _statusColorMapping_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../statusColorMapping.js */ "./node_modules/@fluentui/tokens/lib/statusColorMapping.js");



const statusColorPaletteTokens = _sharedColorNames_js__WEBPACK_IMPORTED_MODULE_1__.statusSharedColorNames.reduce((acc, sharedColor)=>{
    const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
    const sharedColorTokens = {
        [`colorPalette${color}Background1`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.statusSharedColors[sharedColor].tint60,
        [`colorPalette${color}Background2`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.statusSharedColors[sharedColor].tint40,
        [`colorPalette${color}Background3`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.statusSharedColors[sharedColor].primary,
        [`colorPalette${color}Foreground1`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.statusSharedColors[sharedColor].shade10,
        [`colorPalette${color}Foreground2`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.statusSharedColors[sharedColor].shade30,
        [`colorPalette${color}Foreground3`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.statusSharedColors[sharedColor].primary,
        [`colorPalette${color}BorderActive`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.statusSharedColors[sharedColor].primary,
        [`colorPalette${color}Border1`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.statusSharedColors[sharedColor].tint40,
        [`colorPalette${color}Border2`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.statusSharedColors[sharedColor].primary
    };
    return Object.assign(acc, sharedColorTokens);
}, {});
// one-off patch for yellow
statusColorPaletteTokens.colorPaletteYellowForeground1 = _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.statusSharedColors.yellow.shade30;
statusColorPaletteTokens.colorPaletteRedForegroundInverted = _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.statusSharedColors.red.tint20;
statusColorPaletteTokens.colorPaletteGreenForegroundInverted = _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.statusSharedColors.green.tint20;
statusColorPaletteTokens.colorPaletteYellowForegroundInverted = _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.statusSharedColors.yellow.tint40;
const personaColorPaletteTokens = _sharedColorNames_js__WEBPACK_IMPORTED_MODULE_1__.personaSharedColorNames.reduce((acc, sharedColor)=>{
    const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
    const sharedColorTokens = {
        [`colorPalette${color}Background2`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.personaSharedColors[sharedColor].tint40,
        [`colorPalette${color}Foreground2`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.personaSharedColors[sharedColor].shade30,
        [`colorPalette${color}BorderActive`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.personaSharedColors[sharedColor].primary
    };
    return Object.assign(acc, sharedColorTokens);
}, {});
const colorPaletteTokens = {
    ...statusColorPaletteTokens,
    ...personaColorPaletteTokens
};
const colorStatusTokens = Object.entries(_statusColorMapping_js__WEBPACK_IMPORTED_MODULE_2__.statusColorMapping).reduce((acc, [statusColor, sharedColor])=>{
    const color = statusColor.slice(0, 1).toUpperCase() + statusColor.slice(1);
    // TODO: double check the mapping with design
    const statusColorTokens = {
        [`colorStatus${color}Background1`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.mappedStatusColors[sharedColor].tint60,
        [`colorStatus${color}Background2`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.mappedStatusColors[sharedColor].tint40,
        [`colorStatus${color}Background3`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.mappedStatusColors[sharedColor].primary,
        [`colorStatus${color}Foreground1`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.mappedStatusColors[sharedColor].shade10,
        [`colorStatus${color}Foreground2`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.mappedStatusColors[sharedColor].shade30,
        [`colorStatus${color}Foreground3`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.mappedStatusColors[sharedColor].primary,
        [`colorStatus${color}ForegroundInverted`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.mappedStatusColors[sharedColor].tint30,
        [`colorStatus${color}BorderActive`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.mappedStatusColors[sharedColor].primary,
        [`colorStatus${color}Border1`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.mappedStatusColors[sharedColor].tint40,
        [`colorStatus${color}Border2`]: _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.mappedStatusColors[sharedColor].primary
    };
    return Object.assign(acc, statusColorTokens);
}, {});
// one-off overrides for colorStatus tokens
colorStatusTokens.colorStatusDangerBackground3Hover = _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.mappedStatusColors[_statusColorMapping_js__WEBPACK_IMPORTED_MODULE_2__.statusColorMapping.danger].shade10;
colorStatusTokens.colorStatusDangerBackground3Pressed = _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.mappedStatusColors[_statusColorMapping_js__WEBPACK_IMPORTED_MODULE_2__.statusColorMapping.danger].shade20;
colorStatusTokens.colorStatusWarningForeground1 = _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.mappedStatusColors[_statusColorMapping_js__WEBPACK_IMPORTED_MODULE_2__.statusColorMapping.warning].shade20;
colorStatusTokens.colorStatusWarningForeground3 = _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.mappedStatusColors[_statusColorMapping_js__WEBPACK_IMPORTED_MODULE_2__.statusColorMapping.warning].shade20;
colorStatusTokens.colorStatusWarningBorder2 = _global_colorPalette_js__WEBPACK_IMPORTED_MODULE_0__.mappedStatusColors[_statusColorMapping_js__WEBPACK_IMPORTED_MODULE_2__.statusColorMapping.warning].shade20;


/***/ }),

/***/ "./node_modules/@fluentui/tokens/lib/global/borderRadius.js":
/*!******************************************************************!*\
  !*** ./node_modules/@fluentui/tokens/lib/global/borderRadius.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   borderRadius: function() { return /* binding */ borderRadius; }
/* harmony export */ });
const borderRadius = {
    borderRadiusNone: '0',
    borderRadiusSmall: '2px',
    borderRadiusMedium: '4px',
    borderRadiusLarge: '6px',
    borderRadiusXLarge: '8px',
    borderRadiusCircular: '10000px'
};


/***/ }),

/***/ "./node_modules/@fluentui/tokens/lib/global/brandColors.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@fluentui/tokens/lib/global/brandColors.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   brandOffice: function() { return /* binding */ brandOffice; },
/* harmony export */   brandTeams: function() { return /* binding */ brandTeams; },
/* harmony export */   brandTeamsV21: function() { return /* binding */ brandTeamsV21; },
/* harmony export */   brandWeb: function() { return /* binding */ brandWeb; }
/* harmony export */ });
const brandWeb = {
    10: `#061724`,
    20: `#082338`,
    30: `#0a2e4a`,
    40: `#0c3b5e`,
    50: `#0e4775`,
    60: `#0f548c`,
    70: `#115ea3`,
    80: `#0f6cbd`,
    90: `#2886de`,
    100: `#479ef5`,
    110: `#62abf5`,
    120: `#77b7f7`,
    130: `#96c6fa`,
    140: `#b4d6fa`,
    150: `#cfe4fa`,
    160: `#ebf3fc`
};
const brandTeams = {
    10: `#2b2b40`,
    20: `#2f2f4a`,
    30: `#333357`,
    40: `#383966`,
    50: `#3d3e78`,
    60: `#444791`,
    70: `#4f52b2`,
    80: `#5b5fc7`,
    90: `#7579eb`,
    100: `#7f85f5`,
    110: `#9299f7`,
    120: `#aab1fa`,
    130: `#b6bcfa`,
    140: `#c5cbfa`,
    150: `#dce0fa`,
    160: `#e8ebfa`
};
const brandOffice = {
    10: `#29130b`,
    20: `#4d2415`,
    30: `#792000`,
    40: `#99482b`,
    50: `#a52c00`,
    60: `#c33400`,
    70: `#e06a3f`,
    80: `#d83b01`,
    90: `#dd4f1b`,
    100: `#fe7948`,
    110: `#ff865a`,
    120: `#ff9973`,
    130: `#e8825d`,
    140: `#ffb498`,
    150: `#f4beaa`,
    160: `#f9dcd1`
};
const brandTeamsV21 = {
    10: `#29274f`,
    20: `#2f2a5e`,
    30: `#352e70`,
    40: `#3b3185`,
    50: `#44359e`,
    60: `#4d3aba`,
    70: `#5a40db`,
    80: `#654cf5`,
    90: `#7769fa`,
    100: `#887dff`,
    110: `#9791ff`,
    120: `#aba8ff`,
    130: `#bab8ff`,
    140: `#c8c7ff`,
    150: `#dcdbff`,
    160: `#e8e8ff`
};


/***/ }),

/***/ "./node_modules/@fluentui/tokens/lib/global/colorPalette.js":
/*!******************************************************************!*\
  !*** ./node_modules/@fluentui/tokens/lib/global/colorPalette.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mappedStatusColors: function() { return /* binding */ mappedStatusColors; },
/* harmony export */   personaSharedColors: function() { return /* binding */ personaSharedColors; },
/* harmony export */   statusSharedColors: function() { return /* binding */ statusSharedColors; }
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors.js */ "./node_modules/@fluentui/tokens/lib/global/colors.js");

const statusSharedColors = {
    red: _colors_js__WEBPACK_IMPORTED_MODULE_0__.red,
    green: _colors_js__WEBPACK_IMPORTED_MODULE_0__.green,
    darkOrange: _colors_js__WEBPACK_IMPORTED_MODULE_0__.darkOrange,
    yellow: _colors_js__WEBPACK_IMPORTED_MODULE_0__.yellow,
    berry: _colors_js__WEBPACK_IMPORTED_MODULE_0__.berry,
    lightGreen: _colors_js__WEBPACK_IMPORTED_MODULE_0__.lightGreen,
    marigold: _colors_js__WEBPACK_IMPORTED_MODULE_0__.marigold
};
const personaSharedColors = {
    darkRed: _colors_js__WEBPACK_IMPORTED_MODULE_0__.darkRed,
    cranberry: _colors_js__WEBPACK_IMPORTED_MODULE_0__.cranberry,
    pumpkin: _colors_js__WEBPACK_IMPORTED_MODULE_0__.pumpkin,
    peach: _colors_js__WEBPACK_IMPORTED_MODULE_0__.peach,
    gold: _colors_js__WEBPACK_IMPORTED_MODULE_0__.gold,
    brass: _colors_js__WEBPACK_IMPORTED_MODULE_0__.brass,
    brown: _colors_js__WEBPACK_IMPORTED_MODULE_0__.brown,
    forest: _colors_js__WEBPACK_IMPORTED_MODULE_0__.forest,
    seafoam: _colors_js__WEBPACK_IMPORTED_MODULE_0__.seafoam,
    darkGreen: _colors_js__WEBPACK_IMPORTED_MODULE_0__.darkGreen,
    lightTeal: _colors_js__WEBPACK_IMPORTED_MODULE_0__.lightTeal,
    teal: _colors_js__WEBPACK_IMPORTED_MODULE_0__.teal,
    steel: _colors_js__WEBPACK_IMPORTED_MODULE_0__.steel,
    blue: _colors_js__WEBPACK_IMPORTED_MODULE_0__.blue,
    royalBlue: _colors_js__WEBPACK_IMPORTED_MODULE_0__.royalBlue,
    cornflower: _colors_js__WEBPACK_IMPORTED_MODULE_0__.cornflower,
    navy: _colors_js__WEBPACK_IMPORTED_MODULE_0__.navy,
    lavender: _colors_js__WEBPACK_IMPORTED_MODULE_0__.lavender,
    purple: _colors_js__WEBPACK_IMPORTED_MODULE_0__.purple,
    grape: _colors_js__WEBPACK_IMPORTED_MODULE_0__.grape,
    lilac: _colors_js__WEBPACK_IMPORTED_MODULE_0__.lilac,
    pink: _colors_js__WEBPACK_IMPORTED_MODULE_0__.pink,
    magenta: _colors_js__WEBPACK_IMPORTED_MODULE_0__.magenta,
    plum: _colors_js__WEBPACK_IMPORTED_MODULE_0__.plum,
    beige: _colors_js__WEBPACK_IMPORTED_MODULE_0__.beige,
    mink: _colors_js__WEBPACK_IMPORTED_MODULE_0__.mink,
    platinum: _colors_js__WEBPACK_IMPORTED_MODULE_0__.platinum,
    anchor: _colors_js__WEBPACK_IMPORTED_MODULE_0__.anchor
};
const mappedStatusColors = {
    cranberry: _colors_js__WEBPACK_IMPORTED_MODULE_0__.cranberry,
    green: _colors_js__WEBPACK_IMPORTED_MODULE_0__.green,
    orange: _colors_js__WEBPACK_IMPORTED_MODULE_0__.orange
};


/***/ }),

/***/ "./node_modules/@fluentui/tokens/lib/global/colors.js":
/*!************************************************************!*\
  !*** ./node_modules/@fluentui/tokens/lib/global/colors.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   anchor: function() { return /* binding */ anchor; },
/* harmony export */   beige: function() { return /* binding */ beige; },
/* harmony export */   berry: function() { return /* binding */ berry; },
/* harmony export */   black: function() { return /* binding */ black; },
/* harmony export */   blackAlpha: function() { return /* binding */ blackAlpha; },
/* harmony export */   blue: function() { return /* binding */ blue; },
/* harmony export */   brass: function() { return /* binding */ brass; },
/* harmony export */   bronze: function() { return /* binding */ bronze; },
/* harmony export */   brown: function() { return /* binding */ brown; },
/* harmony export */   burgundy: function() { return /* binding */ burgundy; },
/* harmony export */   charcoal: function() { return /* binding */ charcoal; },
/* harmony export */   cornflower: function() { return /* binding */ cornflower; },
/* harmony export */   cranberry: function() { return /* binding */ cranberry; },
/* harmony export */   cyan: function() { return /* binding */ cyan; },
/* harmony export */   darkBlue: function() { return /* binding */ darkBlue; },
/* harmony export */   darkBrown: function() { return /* binding */ darkBrown; },
/* harmony export */   darkGreen: function() { return /* binding */ darkGreen; },
/* harmony export */   darkOrange: function() { return /* binding */ darkOrange; },
/* harmony export */   darkPurple: function() { return /* binding */ darkPurple; },
/* harmony export */   darkRed: function() { return /* binding */ darkRed; },
/* harmony export */   darkTeal: function() { return /* binding */ darkTeal; },
/* harmony export */   forest: function() { return /* binding */ forest; },
/* harmony export */   gold: function() { return /* binding */ gold; },
/* harmony export */   grape: function() { return /* binding */ grape; },
/* harmony export */   green: function() { return /* binding */ green; },
/* harmony export */   grey: function() { return /* binding */ grey; },
/* harmony export */   grey10Alpha: function() { return /* binding */ grey10Alpha; },
/* harmony export */   grey12Alpha: function() { return /* binding */ grey12Alpha; },
/* harmony export */   grey14Alpha: function() { return /* binding */ grey14Alpha; },
/* harmony export */   hcButtonFace: function() { return /* binding */ hcButtonFace; },
/* harmony export */   hcButtonText: function() { return /* binding */ hcButtonText; },
/* harmony export */   hcCanvas: function() { return /* binding */ hcCanvas; },
/* harmony export */   hcCanvasText: function() { return /* binding */ hcCanvasText; },
/* harmony export */   hcDisabled: function() { return /* binding */ hcDisabled; },
/* harmony export */   hcHighlight: function() { return /* binding */ hcHighlight; },
/* harmony export */   hcHighlightText: function() { return /* binding */ hcHighlightText; },
/* harmony export */   hcHyperlink: function() { return /* binding */ hcHyperlink; },
/* harmony export */   hotPink: function() { return /* binding */ hotPink; },
/* harmony export */   lavender: function() { return /* binding */ lavender; },
/* harmony export */   lightBlue: function() { return /* binding */ lightBlue; },
/* harmony export */   lightGreen: function() { return /* binding */ lightGreen; },
/* harmony export */   lightTeal: function() { return /* binding */ lightTeal; },
/* harmony export */   lilac: function() { return /* binding */ lilac; },
/* harmony export */   lime: function() { return /* binding */ lime; },
/* harmony export */   magenta: function() { return /* binding */ magenta; },
/* harmony export */   marigold: function() { return /* binding */ marigold; },
/* harmony export */   mink: function() { return /* binding */ mink; },
/* harmony export */   navy: function() { return /* binding */ navy; },
/* harmony export */   orange: function() { return /* binding */ orange; },
/* harmony export */   orchid: function() { return /* binding */ orchid; },
/* harmony export */   peach: function() { return /* binding */ peach; },
/* harmony export */   pink: function() { return /* binding */ pink; },
/* harmony export */   platinum: function() { return /* binding */ platinum; },
/* harmony export */   plum: function() { return /* binding */ plum; },
/* harmony export */   pumpkin: function() { return /* binding */ pumpkin; },
/* harmony export */   purple: function() { return /* binding */ purple; },
/* harmony export */   red: function() { return /* binding */ red; },
/* harmony export */   royalBlue: function() { return /* binding */ royalBlue; },
/* harmony export */   seafoam: function() { return /* binding */ seafoam; },
/* harmony export */   silver: function() { return /* binding */ silver; },
/* harmony export */   steel: function() { return /* binding */ steel; },
/* harmony export */   teal: function() { return /* binding */ teal; },
/* harmony export */   white: function() { return /* binding */ white; },
/* harmony export */   whiteAlpha: function() { return /* binding */ whiteAlpha; },
/* harmony export */   yellow: function() { return /* binding */ yellow; }
/* harmony export */ });
/* !!! DO NOT EDIT !!! */ /* This file has been generated by the token pipeline */ const grey = {
    '2': '#050505',
    '4': '#0a0a0a',
    '6': '#0f0f0f',
    '8': '#141414',
    '10': '#1a1a1a',
    '12': '#1f1f1f',
    '14': '#242424',
    '16': '#292929',
    '18': '#2e2e2e',
    '20': '#333333',
    '22': '#383838',
    '24': '#3d3d3d',
    '26': '#424242',
    '28': '#474747',
    '30': '#4d4d4d',
    '32': '#525252',
    '34': '#575757',
    '36': '#5c5c5c',
    '38': '#616161',
    '40': '#666666',
    '42': '#6b6b6b',
    '44': '#707070',
    '46': '#757575',
    '48': '#7a7a7a',
    '50': '#808080',
    '52': '#858585',
    '54': '#8a8a8a',
    '56': '#8f8f8f',
    '58': '#949494',
    '60': '#999999',
    '62': '#9e9e9e',
    '64': '#a3a3a3',
    '66': '#a8a8a8',
    '68': '#adadad',
    '70': '#b3b3b3',
    '72': '#b8b8b8',
    '74': '#bdbdbd',
    '76': '#c2c2c2',
    '78': '#c7c7c7',
    '80': '#cccccc',
    '82': '#d1d1d1',
    '84': '#d6d6d6',
    '86': '#dbdbdb',
    '88': '#e0e0e0',
    '90': '#e6e6e6',
    '92': '#ebebeb',
    '94': '#f0f0f0',
    '96': '#f5f5f5',
    '98': '#fafafa'
};
const whiteAlpha = {
    '5': 'rgba(255, 255, 255, 0.05)',
    '10': 'rgba(255, 255, 255, 0.1)',
    '20': 'rgba(255, 255, 255, 0.2)',
    '30': 'rgba(255, 255, 255, 0.3)',
    '40': 'rgba(255, 255, 255, 0.4)',
    '50': 'rgba(255, 255, 255, 0.5)',
    '60': 'rgba(255, 255, 255, 0.6)',
    '70': 'rgba(255, 255, 255, 0.7)',
    '80': 'rgba(255, 255, 255, 0.8)',
    '90': 'rgba(255, 255, 255, 0.9)'
};
const blackAlpha = {
    '5': 'rgba(0, 0, 0, 0.05)',
    '10': 'rgba(0, 0, 0, 0.1)',
    '20': 'rgba(0, 0, 0, 0.2)',
    '30': 'rgba(0, 0, 0, 0.3)',
    '40': 'rgba(0, 0, 0, 0.4)',
    '50': 'rgba(0, 0, 0, 0.5)',
    '60': 'rgba(0, 0, 0, 0.6)',
    '70': 'rgba(0, 0, 0, 0.7)',
    '80': 'rgba(0, 0, 0, 0.8)',
    '90': 'rgba(0, 0, 0, 0.9)'
};
const grey10Alpha = {
    '5': 'rgba(26, 26, 26, 0.05)',
    '10': 'rgba(26, 26, 26, 0.1)',
    '20': 'rgba(26, 26, 26, 0.2)',
    '30': 'rgba(26, 26, 26, 0.3)',
    '40': 'rgba(26, 26, 26, 0.4)',
    '50': 'rgba(26, 26, 26, 0.5)',
    '60': 'rgba(26, 26, 26, 0.6)',
    '70': 'rgba(26, 26, 26, 0.7)',
    '80': 'rgba(26, 26, 26, 0.8)',
    '90': 'rgba(26, 26, 26, 0.9)'
};
const grey12Alpha = {
    '5': 'rgba(31, 31, 31, 0.05)',
    '10': 'rgba(31, 31, 31, 0.1)',
    '20': 'rgba(31, 31, 31, 0.2)',
    '30': 'rgba(31, 31, 31, 0.3)',
    '40': 'rgba(31, 31, 31, 0.4)',
    '50': 'rgba(31, 31, 31, 0.5)',
    '60': 'rgba(31, 31, 31, 0.6)',
    '70': 'rgba(31, 31, 31, 0.7)',
    '80': 'rgba(31, 31, 31, 0.8)',
    '90': 'rgba(31, 31, 31, 0.9)'
};
const grey14Alpha = {
    '5': 'rgba(36, 36, 36, 0.05)',
    '10': 'rgba(36, 36, 36, 0.1)',
    '20': 'rgba(36, 36, 36, 0.2)',
    '30': 'rgba(36, 36, 36, 0.3)',
    '40': 'rgba(36, 36, 36, 0.4)',
    '50': 'rgba(36, 36, 36, 0.5)',
    '60': 'rgba(36, 36, 36, 0.6)',
    '70': 'rgba(36, 36, 36, 0.7)',
    '80': 'rgba(36, 36, 36, 0.8)',
    '90': 'rgba(36, 36, 36, 0.9)'
};
const white = '#ffffff';
const black = '#000000';
const hcHyperlink = '#ffff00';
const hcHighlight = '#1aebff';
const hcDisabled = '#3ff23f';
const hcCanvas = '#000000';
const hcCanvasText = '#ffffff';
const hcHighlightText = '#000000';
const hcButtonText = '#000000';
const hcButtonFace = '#ffffff';
const darkRed = {
    shade50: '#130204',
    shade40: '#230308',
    shade30: '#420610',
    shade20: '#590815',
    shade10: '#690a19',
    primary: '#750b1c',
    tint10: '#861b2c',
    tint20: '#962f3f',
    tint30: '#ac4f5e',
    tint40: '#d69ca5',
    tint50: '#e9c7cd',
    tint60: '#f9f0f2'
};
const burgundy = {
    shade50: '#1a0607',
    shade40: '#310b0d',
    shade30: '#5c1519',
    shade20: '#7d1d21',
    shade10: '#942228',
    primary: '#a4262c',
    tint10: '#af393e',
    tint20: '#ba4d52',
    tint30: '#c86c70',
    tint40: '#e4afb2',
    tint50: '#f0d3d4',
    tint60: '#fbf4f4'
};
const cranberry = {
    shade50: '#200205',
    shade40: '#3b0509',
    shade30: '#6e0811',
    shade20: '#960b18',
    shade10: '#b10e1c',
    primary: '#c50f1f',
    tint10: '#cc2635',
    tint20: '#d33f4c',
    tint30: '#dc626d',
    tint40: '#eeacb2',
    tint50: '#f6d1d5',
    tint60: '#fdf3f4'
};
const red = {
    shade50: '#210809',
    shade40: '#3f1011',
    shade30: '#751d1f',
    shade20: '#9f282b',
    shade10: '#bc2f32',
    primary: '#d13438',
    tint10: '#d7494c',
    tint20: '#dc5e62',
    tint30: '#e37d80',
    tint40: '#f1bbbc',
    tint50: '#f8dadb',
    tint60: '#fdf6f6'
};
const darkOrange = {
    shade50: '#230900',
    shade40: '#411200',
    shade30: '#7a2101',
    shade20: '#a62d01',
    shade10: '#c43501',
    primary: '#da3b01',
    tint10: '#de501c',
    tint20: '#e36537',
    tint30: '#e9835e',
    tint40: '#f4bfab',
    tint50: '#f9dcd1',
    tint60: '#fdf6f3'
};
const bronze = {
    shade50: '#1b0a01',
    shade40: '#321303',
    shade30: '#5e2405',
    shade20: '#7f3107',
    shade10: '#963a08',
    primary: '#a74109',
    tint10: '#b2521e',
    tint20: '#bc6535',
    tint30: '#ca8057',
    tint40: '#e5bba4',
    tint50: '#f1d9cc',
    tint60: '#fbf5f2'
};
const pumpkin = {
    shade50: '#200d03',
    shade40: '#3d1805',
    shade30: '#712d09',
    shade20: '#9a3d0c',
    shade10: '#b6480e',
    primary: '#ca5010',
    tint10: '#d06228',
    tint20: '#d77440',
    tint30: '#df8e64',
    tint40: '#efc4ad',
    tint50: '#f7dfd2',
    tint60: '#fdf7f4'
};
const orange = {
    shade50: '#271002',
    shade40: '#4a1e04',
    shade30: '#8a3707',
    shade20: '#bc4b09',
    shade10: '#de590b',
    primary: '#f7630c',
    tint10: '#f87528',
    tint20: '#f98845',
    tint30: '#faa06b',
    tint40: '#fdcfb4',
    tint50: '#fee5d7',
    tint60: '#fff9f5'
};
const peach = {
    shade50: '#291600',
    shade40: '#4d2a00',
    shade30: '#8f4e00',
    shade20: '#c26a00',
    shade10: '#e67e00',
    primary: '#ff8c00',
    tint10: '#ff9a1f',
    tint20: '#ffa83d',
    tint30: '#ffba66',
    tint40: '#ffddb3',
    tint50: '#ffedd6',
    tint60: '#fffaf5'
};
const marigold = {
    shade50: '#251a00',
    shade40: '#463100',
    shade30: '#835b00',
    shade20: '#b27c00',
    shade10: '#d39300',
    primary: '#eaa300',
    tint10: '#edad1c',
    tint20: '#efb839',
    tint30: '#f2c661',
    tint40: '#f9e2ae',
    tint50: '#fcefd3',
    tint60: '#fefbf4'
};
const yellow = {
    shade50: '#282400',
    shade40: '#4c4400',
    shade30: '#817400',
    shade20: '#c0ad00',
    shade10: '#e4cc00',
    primary: '#fde300',
    tint10: '#fde61e',
    tint20: '#fdea3d',
    tint30: '#feee66',
    tint40: '#fef7b2',
    tint50: '#fffad6',
    tint60: '#fffef5'
};
const gold = {
    shade50: '#1f1900',
    shade40: '#3a2f00',
    shade30: '#6c5700',
    shade20: '#937700',
    shade10: '#ae8c00',
    primary: '#c19c00',
    tint10: '#c8a718',
    tint20: '#d0b232',
    tint30: '#dac157',
    tint40: '#ecdfa5',
    tint50: '#f5eece',
    tint60: '#fdfbf2'
};
const brass = {
    shade50: '#181202',
    shade40: '#2e2103',
    shade30: '#553e06',
    shade20: '#745408',
    shade10: '#89640a',
    primary: '#986f0b',
    tint10: '#a47d1e',
    tint20: '#b18c34',
    tint30: '#c1a256',
    tint40: '#e0cea2',
    tint50: '#efe4cb',
    tint60: '#fbf8f2'
};
const brown = {
    shade50: '#170e07',
    shade40: '#2b1a0e',
    shade30: '#50301a',
    shade20: '#6c4123',
    shade10: '#804d29',
    primary: '#8e562e',
    tint10: '#9c663f',
    tint20: '#a97652',
    tint30: '#bb8f6f',
    tint40: '#ddc3b0',
    tint50: '#edded3',
    tint60: '#faf7f4'
};
const darkBrown = {
    shade50: '#0c0704',
    shade40: '#170c08',
    shade30: '#2b1710',
    shade20: '#3a1f15',
    shade10: '#452519',
    primary: '#4d291c',
    tint10: '#623a2b',
    tint20: '#784d3e',
    tint30: '#946b5c',
    tint40: '#caada3',
    tint50: '#e3d2cb',
    tint60: '#f8f3f2'
};
const lime = {
    shade50: '#121b06',
    shade40: '#23330b',
    shade30: '#405f14',
    shade20: '#57811b',
    shade10: '#689920',
    primary: '#73aa24',
    tint10: '#81b437',
    tint20: '#90be4c',
    tint30: '#a4cc6c',
    tint40: '#cfe5af',
    tint50: '#e5f1d3',
    tint60: '#f8fcf4'
};
const forest = {
    shade50: '#0c1501',
    shade40: '#162702',
    shade30: '#294903',
    shade20: '#376304',
    shade10: '#427505',
    primary: '#498205',
    tint10: '#599116',
    tint20: '#6ba02b',
    tint30: '#85b44c',
    tint40: '#bdd99b',
    tint50: '#dbebc7',
    tint60: '#f6faf0'
};
const seafoam = {
    shade50: '#002111',
    shade40: '#003d20',
    shade30: '#00723b',
    shade20: '#009b51',
    shade10: '#00b85f',
    primary: '#00cc6a',
    tint10: '#19d279',
    tint20: '#34d889',
    tint30: '#5ae0a0',
    tint40: '#a8f0cd',
    tint50: '#cff7e4',
    tint60: '#f3fdf8'
};
const lightGreen = {
    shade50: '#031a02',
    shade40: '#063004',
    shade30: '#0b5a08',
    shade20: '#0e7a0b',
    shade10: '#11910d',
    primary: '#13a10e',
    tint10: '#27ac22',
    tint20: '#3db838',
    tint30: '#5ec75a',
    tint40: '#a7e3a5',
    tint50: '#cef0cd',
    tint60: '#f2fbf2'
};
const green = {
    shade50: '#031403',
    shade40: '#052505',
    shade30: '#094509',
    shade20: '#0c5e0c',
    shade10: '#0e700e',
    primary: '#107c10',
    tint10: '#218c21',
    tint20: '#359b35',
    tint30: '#54b054',
    tint40: '#9fd89f',
    tint50: '#c9eac9',
    tint60: '#f1faf1'
};
const darkGreen = {
    shade50: '#021102',
    shade40: '#032003',
    shade30: '#063b06',
    shade20: '#085108',
    shade10: '#0a5f0a',
    primary: '#0b6a0b',
    tint10: '#1a7c1a',
    tint20: '#2d8e2d',
    tint30: '#4da64d',
    tint40: '#9ad29a',
    tint50: '#c6e7c6',
    tint60: '#f0f9f0'
};
const lightTeal = {
    shade50: '#001d1f',
    shade40: '#00373a',
    shade30: '#00666d',
    shade20: '#008b94',
    shade10: '#00a5af',
    primary: '#00b7c3',
    tint10: '#18bfca',
    tint20: '#32c8d1',
    tint30: '#58d3db',
    tint40: '#a6e9ed',
    tint50: '#cef3f5',
    tint60: '#f2fcfd'
};
const teal = {
    shade50: '#001516',
    shade40: '#012728',
    shade30: '#02494c',
    shade20: '#026467',
    shade10: '#037679',
    primary: '#038387',
    tint10: '#159195',
    tint20: '#2aa0a4',
    tint30: '#4cb4b7',
    tint40: '#9bd9db',
    tint50: '#c7ebec',
    tint60: '#f0fafa'
};
const darkTeal = {
    shade50: '#001010',
    shade40: '#001f1f',
    shade30: '#003939',
    shade20: '#004e4e',
    shade10: '#005c5c',
    primary: '#006666',
    tint10: '#0e7878',
    tint20: '#218b8b',
    tint30: '#41a3a3',
    tint40: '#92d1d1',
    tint50: '#c2e7e7',
    tint60: '#eff9f9'
};
const cyan = {
    shade50: '#00181e',
    shade40: '#002e38',
    shade30: '#005669',
    shade20: '#00748f',
    shade10: '#008aa9',
    primary: '#0099bc',
    tint10: '#18a4c4',
    tint20: '#31afcc',
    tint30: '#56bfd7',
    tint40: '#a4deeb',
    tint50: '#cdedf4',
    tint60: '#f2fafc'
};
const steel = {
    shade50: '#000f12',
    shade40: '#001b22',
    shade30: '#00333f',
    shade20: '#004555',
    shade10: '#005265',
    primary: '#005b70',
    tint10: '#0f6c81',
    tint20: '#237d92',
    tint30: '#4496a9',
    tint40: '#94c8d4',
    tint50: '#c3e1e8',
    tint60: '#eff7f9'
};
const lightBlue = {
    shade50: '#091823',
    shade40: '#112d42',
    shade30: '#20547c',
    shade20: '#2c72a8',
    shade10: '#3487c7',
    primary: '#3a96dd',
    tint10: '#4fa1e1',
    tint20: '#65ade5',
    tint30: '#83bdeb',
    tint40: '#bfddf5',
    tint50: '#dcedfa',
    tint60: '#f6fafe'
};
const blue = {
    shade50: '#001322',
    shade40: '#002440',
    shade30: '#004377',
    shade20: '#005ba1',
    shade10: '#006cbf',
    primary: '#0078d4',
    tint10: '#1a86d9',
    tint20: '#3595de',
    tint30: '#5caae5',
    tint40: '#a9d3f2',
    tint50: '#d0e7f8',
    tint60: '#f3f9fd'
};
const royalBlue = {
    shade50: '#000c16',
    shade40: '#00172a',
    shade30: '#002c4e',
    shade20: '#003b6a',
    shade10: '#00467e',
    primary: '#004e8c',
    tint10: '#125e9a',
    tint20: '#286fa8',
    tint30: '#4a89ba',
    tint40: '#9abfdc',
    tint50: '#c7dced',
    tint60: '#f0f6fa'
};
const darkBlue = {
    shade50: '#000910',
    shade40: '#00111f',
    shade30: '#002039',
    shade20: '#002b4e',
    shade10: '#00335c',
    primary: '#003966',
    tint10: '#0e4a78',
    tint20: '#215c8b',
    tint30: '#4178a3',
    tint40: '#92b5d1',
    tint50: '#c2d6e7',
    tint60: '#eff4f9'
};
const cornflower = {
    shade50: '#0d1126',
    shade40: '#182047',
    shade30: '#2c3c85',
    shade20: '#3c51b4',
    shade10: '#4760d5',
    primary: '#4f6bed',
    tint10: '#637cef',
    tint20: '#778df1',
    tint30: '#93a4f4',
    tint40: '#c8d1fa',
    tint50: '#e1e6fc',
    tint60: '#f7f9fe'
};
const navy = {
    shade50: '#00061d',
    shade40: '#000c36',
    shade30: '#001665',
    shade20: '#001e89',
    shade10: '#0023a2',
    primary: '#0027b4',
    tint10: '#173bbd',
    tint20: '#3050c6',
    tint30: '#546fd2',
    tint40: '#a3b2e8',
    tint50: '#ccd5f3',
    tint60: '#f2f4fc'
};
const lavender = {
    shade50: '#120f25',
    shade40: '#221d46',
    shade30: '#3f3682',
    shade20: '#5649b0',
    shade10: '#6656d1',
    primary: '#7160e8',
    tint10: '#8172eb',
    tint20: '#9184ee',
    tint30: '#a79cf1',
    tint40: '#d2ccf8',
    tint50: '#e7e4fb',
    tint60: '#f9f8fe'
};
const purple = {
    shade50: '#0f0717',
    shade40: '#1c0e2b',
    shade30: '#341a51',
    shade20: '#46236e',
    shade10: '#532982',
    primary: '#5c2e91',
    tint10: '#6b3f9e',
    tint20: '#7c52ab',
    tint30: '#9470bd',
    tint40: '#c6b1de',
    tint50: '#e0d3ed',
    tint60: '#f7f4fb'
};
const darkPurple = {
    shade50: '#0a0411',
    shade40: '#130820',
    shade30: '#240f3c',
    shade20: '#311552',
    shade10: '#3a1861',
    primary: '#401b6c',
    tint10: '#512b7e',
    tint20: '#633e8f',
    tint30: '#7e5ca7',
    tint40: '#b9a3d3',
    tint50: '#d8cce7',
    tint60: '#f5f2f9'
};
const orchid = {
    shade50: '#16101d',
    shade40: '#281e37',
    shade30: '#4c3867',
    shade20: '#674c8c',
    shade10: '#795aa6',
    primary: '#8764b8',
    tint10: '#9373c0',
    tint20: '#a083c9',
    tint30: '#b29ad4',
    tint40: '#d7caea',
    tint50: '#e9e2f4',
    tint60: '#f9f8fc'
};
const grape = {
    shade50: '#160418',
    shade40: '#29072e',
    shade30: '#4c0d55',
    shade20: '#671174',
    shade10: '#7a1589',
    primary: '#881798',
    tint10: '#952aa4',
    tint20: '#a33fb1',
    tint30: '#b55fc1',
    tint40: '#d9a7e0',
    tint50: '#eaceef',
    tint60: '#faf2fb'
};
const berry = {
    shade50: '#1f091d',
    shade40: '#3a1136',
    shade30: '#6d2064',
    shade20: '#932b88',
    shade10: '#af33a1',
    primary: '#c239b3',
    tint10: '#c94cbc',
    tint20: '#d161c4',
    tint30: '#da7ed0',
    tint40: '#edbbe7',
    tint50: '#f5daf2',
    tint60: '#fdf5fc'
};
const lilac = {
    shade50: '#1c0b1f',
    shade40: '#35153a',
    shade30: '#63276d',
    shade20: '#863593',
    shade10: '#9f3faf',
    primary: '#b146c2',
    tint10: '#ba58c9',
    tint20: '#c36bd1',
    tint30: '#cf87da',
    tint40: '#e6bfed',
    tint50: '#f2dcf5',
    tint60: '#fcf6fd'
};
const pink = {
    shade50: '#24091b',
    shade40: '#441232',
    shade30: '#80215d',
    shade20: '#ad2d7e',
    shade10: '#cd3595',
    primary: '#e43ba6',
    tint10: '#e750b0',
    tint20: '#ea66ba',
    tint30: '#ef85c8',
    tint40: '#f7c0e3',
    tint50: '#fbddf0',
    tint60: '#fef6fb'
};
const hotPink = {
    shade50: '#240016',
    shade40: '#44002a',
    shade30: '#7f004e',
    shade20: '#ad006a',
    shade10: '#cc007e',
    primary: '#e3008c',
    tint10: '#e61c99',
    tint20: '#ea38a6',
    tint30: '#ee5fb7',
    tint40: '#f7adda',
    tint50: '#fbd2eb',
    tint60: '#fef4fa'
};
const magenta = {
    shade50: '#1f0013',
    shade40: '#390024',
    shade30: '#6b0043',
    shade20: '#91005a',
    shade10: '#ac006b',
    primary: '#bf0077',
    tint10: '#c71885',
    tint20: '#ce3293',
    tint30: '#d957a8',
    tint40: '#eca5d1',
    tint50: '#f5cee6',
    tint60: '#fcf2f9'
};
const plum = {
    shade50: '#13000c',
    shade40: '#240017',
    shade30: '#43002b',
    shade20: '#5a003b',
    shade10: '#6b0045',
    primary: '#77004d',
    tint10: '#87105d',
    tint20: '#98246f',
    tint30: '#ad4589',
    tint40: '#d696c0',
    tint50: '#e9c4dc',
    tint60: '#faf0f6'
};
const beige = {
    shade50: '#141313',
    shade40: '#252323',
    shade30: '#444241',
    shade20: '#5d5958',
    shade10: '#6e6968',
    primary: '#7a7574',
    tint10: '#8a8584',
    tint20: '#9a9594',
    tint30: '#afabaa',
    tint40: '#d7d4d4',
    tint50: '#eae8e8',
    tint60: '#faf9f9'
};
const mink = {
    shade50: '#0f0e0e',
    shade40: '#1c1b1a',
    shade30: '#343231',
    shade20: '#474443',
    shade10: '#54514f',
    primary: '#5d5a58',
    tint10: '#706d6b',
    tint20: '#84817e',
    tint30: '#9e9b99',
    tint40: '#cecccb',
    tint50: '#e5e4e3',
    tint60: '#f8f8f8'
};
const silver = {
    shade50: '#151818',
    shade40: '#282d2e',
    shade30: '#4a5356',
    shade20: '#657174',
    shade10: '#78868a',
    primary: '#859599',
    tint10: '#92a1a5',
    tint20: '#a0aeb1',
    tint30: '#b3bfc2',
    tint40: '#d8dfe0',
    tint50: '#eaeeef',
    tint60: '#fafbfb'
};
const platinum = {
    shade50: '#111314',
    shade40: '#1f2426',
    shade30: '#3b4447',
    shade20: '#505c60',
    shade10: '#5f6d71',
    primary: '#69797e',
    tint10: '#79898d',
    tint20: '#89989d',
    tint30: '#a0adb2',
    tint40: '#cdd6d8',
    tint50: '#e4e9ea',
    tint60: '#f8f9fa'
};
const anchor = {
    shade50: '#090a0b',
    shade40: '#111315',
    shade30: '#202427',
    shade20: '#2b3135',
    shade10: '#333a3f',
    primary: '#394146',
    tint10: '#4d565c',
    tint20: '#626c72',
    tint30: '#808a90',
    tint40: '#bcc3c7',
    tint50: '#dbdfe1',
    tint60: '#f6f7f8'
};
const charcoal = {
    shade50: '#090909',
    shade40: '#111111',
    shade30: '#202020',
    shade20: '#2b2b2b',
    shade10: '#333333',
    primary: '#393939',
    tint10: '#515151',
    tint20: '#686868',
    tint30: '#888888',
    tint40: '#c4c4c4',
    tint50: '#dfdfdf',
    tint60: '#f7f7f7'
};


/***/ }),

/***/ "./node_modules/@fluentui/tokens/lib/global/curves.js":
/*!************************************************************!*\
  !*** ./node_modules/@fluentui/tokens/lib/global/curves.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   curves: function() { return /* binding */ curves; }
/* harmony export */ });
const curves = {
    curveAccelerateMax: 'cubic-bezier(0.9,0.1,1,0.2)',
    curveAccelerateMid: 'cubic-bezier(1,0,1,1)',
    curveAccelerateMin: 'cubic-bezier(0.8,0,0.78,1)',
    curveDecelerateMax: 'cubic-bezier(0.1,0.9,0.2,1)',
    curveDecelerateMid: 'cubic-bezier(0,0,0,1)',
    curveDecelerateMin: 'cubic-bezier(0.33,0,0.1,1)',
    curveEasyEaseMax: 'cubic-bezier(0.8,0,0.2,1)',
    curveEasyEase: 'cubic-bezier(0.33,0,0.67,1)',
    curveLinear: 'cubic-bezier(0,0,1,1)'
};


/***/ }),

/***/ "./node_modules/@fluentui/tokens/lib/global/durations.js":
/*!***************************************************************!*\
  !*** ./node_modules/@fluentui/tokens/lib/global/durations.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   durations: function() { return /* binding */ durations; }
/* harmony export */ });
const durations = {
    durationUltraFast: '50ms',
    durationFaster: '100ms',
    durationFast: '150ms',
    durationNormal: '200ms',
    durationGentle: '250ms',
    durationSlow: '300ms',
    durationSlower: '400ms',
    durationUltraSlow: '500ms'
};


/***/ }),

/***/ "./node_modules/@fluentui/tokens/lib/global/fonts.js":
/*!***********************************************************!*\
  !*** ./node_modules/@fluentui/tokens/lib/global/fonts.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fontFamilies: function() { return /* binding */ fontFamilies; },
/* harmony export */   fontSizes: function() { return /* binding */ fontSizes; },
/* harmony export */   fontWeights: function() { return /* binding */ fontWeights; },
/* harmony export */   lineHeights: function() { return /* binding */ lineHeights; }
/* harmony export */ });
const fontSizes = {
    fontSizeBase100: '10px',
    fontSizeBase200: '12px',
    fontSizeBase300: '14px',
    fontSizeBase400: '16px',
    fontSizeBase500: '20px',
    fontSizeBase600: '24px',
    fontSizeHero700: '28px',
    fontSizeHero800: '32px',
    fontSizeHero900: '40px',
    fontSizeHero1000: '68px'
};
const lineHeights = {
    lineHeightBase100: '14px',
    lineHeightBase200: '16px',
    lineHeightBase300: '20px',
    lineHeightBase400: '22px',
    lineHeightBase500: '28px',
    lineHeightBase600: '32px',
    lineHeightHero700: '36px',
    lineHeightHero800: '40px',
    lineHeightHero900: '52px',
    lineHeightHero1000: '92px'
};
const fontWeights = {
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemibold: 600,
    fontWeightBold: 700
};
const fontFamilies = {
    fontFamilyBase: "'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
    fontFamilyMonospace: "Consolas, 'Courier New', Courier, monospace",
    fontFamilyNumeric: "Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif"
};


/***/ }),

/***/ "./node_modules/@fluentui/tokens/lib/global/spacings.js":
/*!**************************************************************!*\
  !*** ./node_modules/@fluentui/tokens/lib/global/spacings.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   horizontalSpacings: function() { return /* binding */ horizontalSpacings; },
/* harmony export */   verticalSpacings: function() { return /* binding */ verticalSpacings; }
/* harmony export */ });
// Intentionally not exported! Use horizontalSpacings and verticalSpacings instead.
const spacings = {
    none: '0',
    xxs: '2px',
    xs: '4px',
    sNudge: '6px',
    s: '8px',
    mNudge: '10px',
    m: '12px',
    l: '16px',
    xl: '20px',
    xxl: '24px',
    xxxl: '32px'
};
const horizontalSpacings = {
    spacingHorizontalNone: spacings.none,
    spacingHorizontalXXS: spacings.xxs,
    spacingHorizontalXS: spacings.xs,
    spacingHorizontalSNudge: spacings.sNudge,
    spacingHorizontalS: spacings.s,
    spacingHorizontalMNudge: spacings.mNudge,
    spacingHorizontalM: spacings.m,
    spacingHorizontalL: spacings.l,
    spacingHorizontalXL: spacings.xl,
    spacingHorizontalXXL: spacings.xxl,
    spacingHorizontalXXXL: spacings.xxxl
};
const verticalSpacings = {
    spacingVerticalNone: spacings.none,
    spacingVerticalXXS: spacings.xxs,
    spacingVerticalXS: spacings.xs,
    spacingVerticalSNudge: spacings.sNudge,
    spacingVerticalS: spacings.s,
    spacingVerticalMNudge: spacings.mNudge,
    spacingVerticalM: spacings.m,
    spacingVerticalL: spacings.l,
    spacingVerticalXL: spacings.xl,
    spacingVerticalXXL: spacings.xxl,
    spacingVerticalXXXL: spacings.xxxl
};


/***/ }),

/***/ "./node_modules/@fluentui/tokens/lib/global/strokeWidths.js":
/*!******************************************************************!*\
  !*** ./node_modules/@fluentui/tokens/lib/global/strokeWidths.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   strokeWidths: function() { return /* binding */ strokeWidths; }
/* harmony export */ });
const strokeWidths = {
    strokeWidthThin: '1px',
    strokeWidthThick: '2px',
    strokeWidthThicker: '3px',
    strokeWidthThickest: '4px'
};


/***/ }),

/***/ "./node_modules/@fluentui/tokens/lib/sharedColorNames.js":
/*!***************************************************************!*\
  !*** ./node_modules/@fluentui/tokens/lib/sharedColorNames.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mappedStatusColorNames: function() { return /* binding */ mappedStatusColorNames; },
/* harmony export */   personaSharedColorNames: function() { return /* binding */ personaSharedColorNames; },
/* harmony export */   statusSharedColorNames: function() { return /* binding */ statusSharedColorNames; },
/* harmony export */   unusedSharedColorNames: function() { return /* binding */ unusedSharedColorNames; }
/* harmony export */ });
/* Names of colors used in shared color palette alias tokens for status. */ const statusSharedColorNames = [
    'red',
    'green',
    'darkOrange',
    'yellow',
    'berry',
    'lightGreen',
    'marigold'
];
/* Names of colors used in shared color palette alias tokens for persona. */ const personaSharedColorNames = [
    'darkRed',
    'cranberry',
    'pumpkin',
    'peach',
    'gold',
    'brass',
    'brown',
    'forest',
    'seafoam',
    'darkGreen',
    'lightTeal',
    'teal',
    'steel',
    'blue',
    'royalBlue',
    'cornflower',
    'navy',
    'lavender',
    'purple',
    'grape',
    'lilac',
    'pink',
    'magenta',
    'plum',
    'beige',
    'mink',
    'platinum',
    'anchor'
];
/* List of global colors which semantic alias status tokens map to */ const mappedStatusColorNames = [
    'cranberry',
    'green',
    'orange'
];
/* Names of colors not used in alias tokens but produced by token pipeline as global color tokens. */ const unusedSharedColorNames = [
    'burgundy',
    'bronze',
    'orange',
    'darkBrown',
    'lime',
    'darkTeal',
    'cyan',
    'lightBlue',
    'darkBlue',
    'darkPurple',
    'orchid',
    'hotPink',
    'silver',
    'charcoal'
];


/***/ }),

/***/ "./node_modules/@fluentui/tokens/lib/statusColorMapping.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@fluentui/tokens/lib/statusColorMapping.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   statusColorMapping: function() { return /* binding */ statusColorMapping; }
/* harmony export */ });
const statusColorMapping = {
    success: 'green',
    warning: 'orange',
    danger: 'cranberry'
};


/***/ }),

/***/ "./node_modules/@fluentui/tokens/lib/themes/web/lightTheme.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fluentui/tokens/lib/themes/web/lightTheme.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   webLightTheme: function() { return /* binding */ webLightTheme; }
/* harmony export */ });
/* harmony import */ var _utils_createLightTheme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/createLightTheme.js */ "./node_modules/@fluentui/tokens/lib/utils/createLightTheme.js");
/* harmony import */ var _global_brandColors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/brandColors.js */ "./node_modules/@fluentui/tokens/lib/global/brandColors.js");


const webLightTheme = (0,_utils_createLightTheme_js__WEBPACK_IMPORTED_MODULE_0__.createLightTheme)(_global_brandColors_js__WEBPACK_IMPORTED_MODULE_1__.brandWeb);


/***/ }),

/***/ "./node_modules/@fluentui/tokens/lib/utils/createLightTheme.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@fluentui/tokens/lib/utils/createLightTheme.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLightTheme: function() { return /* binding */ createLightTheme; }
/* harmony export */ });
/* harmony import */ var _alias_lightColorPalette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../alias/lightColorPalette.js */ "./node_modules/@fluentui/tokens/lib/alias/lightColorPalette.js");
/* harmony import */ var _alias_lightColor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../alias/lightColor.js */ "./node_modules/@fluentui/tokens/lib/alias/lightColor.js");
/* harmony import */ var _global_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/index.js */ "./node_modules/@fluentui/tokens/lib/global/borderRadius.js");
/* harmony import */ var _global_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/index.js */ "./node_modules/@fluentui/tokens/lib/global/fonts.js");
/* harmony import */ var _global_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/index.js */ "./node_modules/@fluentui/tokens/lib/global/strokeWidths.js");
/* harmony import */ var _shadows_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shadows.js */ "./node_modules/@fluentui/tokens/lib/utils/shadows.js");
/* harmony import */ var _global_durations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/durations.js */ "./node_modules/@fluentui/tokens/lib/global/durations.js");
/* harmony import */ var _global_curves_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/curves.js */ "./node_modules/@fluentui/tokens/lib/global/curves.js");
/* harmony import */ var _global_spacings_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/spacings.js */ "./node_modules/@fluentui/tokens/lib/global/spacings.js");







const createLightTheme = (brand)=>{
    const colorTokens = (0,_alias_lightColor_js__WEBPACK_IMPORTED_MODULE_1__.generateColorTokens)(brand);
    return {
        ..._global_index_js__WEBPACK_IMPORTED_MODULE_2__.borderRadius,
        ..._global_index_js__WEBPACK_IMPORTED_MODULE_3__.fontSizes,
        ..._global_index_js__WEBPACK_IMPORTED_MODULE_3__.lineHeights,
        ..._global_index_js__WEBPACK_IMPORTED_MODULE_3__.fontFamilies,
        ..._global_index_js__WEBPACK_IMPORTED_MODULE_3__.fontWeights,
        ..._global_index_js__WEBPACK_IMPORTED_MODULE_4__.strokeWidths,
        ..._global_spacings_js__WEBPACK_IMPORTED_MODULE_8__.horizontalSpacings,
        ..._global_spacings_js__WEBPACK_IMPORTED_MODULE_8__.verticalSpacings,
        ..._global_durations_js__WEBPACK_IMPORTED_MODULE_6__.durations,
        ..._global_curves_js__WEBPACK_IMPORTED_MODULE_7__.curves,
        ...colorTokens,
        ..._alias_lightColorPalette_js__WEBPACK_IMPORTED_MODULE_0__.colorPaletteTokens,
        ..._alias_lightColorPalette_js__WEBPACK_IMPORTED_MODULE_0__.colorStatusTokens,
        ...(0,_shadows_js__WEBPACK_IMPORTED_MODULE_5__.createShadowTokens)(colorTokens.colorNeutralShadowAmbient, colorTokens.colorNeutralShadowKey),
        ...(0,_shadows_js__WEBPACK_IMPORTED_MODULE_5__.createShadowTokens)(colorTokens.colorBrandShadowAmbient, colorTokens.colorBrandShadowKey, 'Brand')
    };
};


/***/ }),

/***/ "./node_modules/@fluentui/tokens/lib/utils/shadows.js":
/*!************************************************************!*\
  !*** ./node_modules/@fluentui/tokens/lib/utils/shadows.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShadowTokens: function() { return /* binding */ createShadowTokens; }
/* harmony export */ });
function createShadowTokens(ambientColor, keyColor, tokenSuffix = '') {
    return {
        [`shadow2${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 1px 2px ${keyColor}`,
        [`shadow4${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 2px 4px ${keyColor}`,
        [`shadow8${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 4px 8px ${keyColor}`,
        [`shadow16${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 8px 16px ${keyColor}`,
        [`shadow28${tokenSuffix}`]: `0 0 8px ${ambientColor}, 0 14px 28px ${keyColor}`,
        [`shadow64${tokenSuffix}`]: `0 0 8px ${ambientColor}, 0 32px 64px ${keyColor}`
    };
}


/***/ }),

/***/ "./node_modules/@griffel/core/__styles.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/@griffel/core/__styles.esm.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __styles: function() { return /* binding */ __styles; }
/* harmony export */ });
/* harmony import */ var _devtools_store_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devtools/store.esm.js */ "./node_modules/@griffel/core/devtools/store.esm.js");
/* harmony import */ var _devtools_isDevToolsEnabled_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devtools/isDevToolsEnabled.esm.js */ "./node_modules/@griffel/core/devtools/isDevToolsEnabled.esm.js");
/* harmony import */ var _devtools_getSourceURLfromError_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./devtools/getSourceURLfromError.esm.js */ "./node_modules/@griffel/core/devtools/getSourceURLfromError.esm.js");
/* harmony import */ var _insertionFactory_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insertionFactory.esm.js */ "./node_modules/@griffel/core/insertionFactory.esm.js");
/* harmony import */ var _runtime_reduceToClassNameForSlots_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./runtime/reduceToClassNameForSlots.esm.js */ "./node_modules/@griffel/core/runtime/reduceToClassNameForSlots.esm.js");







/**
 * A version of makeStyles() that accepts build output as an input and skips all runtime transforms.
 *
 * @internal
 */
function __styles(classesMapBySlot, cssRules, factory = _insertionFactory_esm_js__WEBPACK_IMPORTED_MODULE_3__.insertionFactory) {
  const insertStyles = factory();
  let ltrClassNamesForSlots = null;
  let rtlClassNamesForSlots = null;
  let sourceURL;
  if ( true && _devtools_isDevToolsEnabled_esm_js__WEBPACK_IMPORTED_MODULE_1__.isDevToolsEnabled) {
    sourceURL = (0,_devtools_getSourceURLfromError_esm_js__WEBPACK_IMPORTED_MODULE_2__.getSourceURLfromError)();
  }
  function computeClasses(options) {
    const {
      dir,
      renderer
    } = options;
    const isLTR = dir === 'ltr';
    if (isLTR) {
      if (ltrClassNamesForSlots === null) {
        ltrClassNamesForSlots = (0,_runtime_reduceToClassNameForSlots_esm_js__WEBPACK_IMPORTED_MODULE_4__.reduceToClassNameForSlots)(classesMapBySlot, dir);
      }
    } else {
      if (rtlClassNamesForSlots === null) {
        rtlClassNamesForSlots = (0,_runtime_reduceToClassNameForSlots_esm_js__WEBPACK_IMPORTED_MODULE_4__.reduceToClassNameForSlots)(classesMapBySlot, dir);
      }
    }
    insertStyles(renderer, cssRules);
    const classNamesForSlots = isLTR ? ltrClassNamesForSlots : rtlClassNamesForSlots;
    if ( true && _devtools_isDevToolsEnabled_esm_js__WEBPACK_IMPORTED_MODULE_1__.isDevToolsEnabled) {
      _devtools_store_esm_js__WEBPACK_IMPORTED_MODULE_0__.debugData.addSequenceDetails(classNamesForSlots, sourceURL);
    }
    return classNamesForSlots;
  }
  return computeClasses;
}


//# sourceMappingURL=__styles.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/constants.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@griffel/core/constants.esm.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DATA_BUCKET_ATTR: function() { return /* binding */ DATA_BUCKET_ATTR; },
/* harmony export */   DATA_PRIORITY_ATTR: function() { return /* binding */ DATA_PRIORITY_ATTR; },
/* harmony export */   DEBUG_RESET_CLASSES: function() { return /* binding */ DEBUG_RESET_CLASSES; },
/* harmony export */   DEBUG_SEQUENCE_SEPARATOR: function() { return /* binding */ DEBUG_SEQUENCE_SEPARATOR; },
/* harmony export */   DEFINITION_LOOKUP_TABLE: function() { return /* binding */ DEFINITION_LOOKUP_TABLE; },
/* harmony export */   HASH_PREFIX: function() { return /* binding */ HASH_PREFIX; },
/* harmony export */   LOOKUP_DEFINITIONS_INDEX: function() { return /* binding */ LOOKUP_DEFINITIONS_INDEX; },
/* harmony export */   LOOKUP_DIR_INDEX: function() { return /* binding */ LOOKUP_DIR_INDEX; },
/* harmony export */   RESET: function() { return /* binding */ RESET; },
/* harmony export */   RESET_HASH_PREFIX: function() { return /* binding */ RESET_HASH_PREFIX; },
/* harmony export */   SEQUENCE_HASH_LENGTH: function() { return /* binding */ SEQUENCE_HASH_LENGTH; },
/* harmony export */   SEQUENCE_PREFIX: function() { return /* binding */ SEQUENCE_PREFIX; },
/* harmony export */   SEQUENCE_SIZE: function() { return /* binding */ SEQUENCE_SIZE; },
/* harmony export */   UNSUPPORTED_CSS_PROPERTIES: function() { return /* binding */ UNSUPPORTED_CSS_PROPERTIES; }
/* harmony export */ });
// ----
// Heads up!
// These constants are global and will be shared between Griffel instances.
// Any change in them should happen only in a MAJOR version. If it happens,
// please change "__NAMESPACE_PREFIX__" to include a version.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const __GLOBAL__ = typeof window === 'undefined' ? __webpack_require__.g : window;
const __NAMESPACE_PREFIX__ = '@griffel/';
function getGlobalVar(name, defaultValue) {
  if (!__GLOBAL__[Symbol.for(__NAMESPACE_PREFIX__ + name)]) {
    __GLOBAL__[Symbol.for(__NAMESPACE_PREFIX__ + name)] = defaultValue;
  }
  return __GLOBAL__[Symbol.for(__NAMESPACE_PREFIX__ + name)];
}
/** @internal */
const DEBUG_RESET_CLASSES = /*#__PURE__*/getGlobalVar('DEBUG_RESET_CLASSES', {});
/** @internal */
const DEFINITION_LOOKUP_TABLE = /*#__PURE__*/getGlobalVar('DEFINITION_LOOKUP_TABLE', {});
// ----
/** @internal */
const DATA_BUCKET_ATTR = 'data-make-styles-bucket';
/** @internal */
const DATA_PRIORITY_ATTR = 'data-priority';
/** @internal */
const HASH_PREFIX = 'f';
/** @internal */
const RESET_HASH_PREFIX = 'r';
/** @internal */
const SEQUENCE_HASH_LENGTH = 7;
/** @internal */
const SEQUENCE_PREFIX = '___';
/** @internal */
const DEBUG_SEQUENCE_SEPARATOR = '_';
/** @internal */
const SEQUENCE_SIZE =  false ? 0 : SEQUENCE_PREFIX.length + SEQUENCE_HASH_LENGTH + DEBUG_SEQUENCE_SEPARATOR.length + SEQUENCE_HASH_LENGTH;
// indexes for values in LookupItem tuple
/** @internal */
const LOOKUP_DEFINITIONS_INDEX = 0;
/** @internal */
const LOOKUP_DIR_INDEX = 1;
// This collection is a map simply for faster access when checking if a CSS property is unsupported
/** @internal */
const UNSUPPORTED_CSS_PROPERTIES = {
  all: 1,
  borderColor: 1,
  borderStyle: 1,
  borderWidth: 1,
  borderBlock: 1,
  borderBlockEnd: 1,
  borderBlockStart: 1,
  borderInline: 1,
  borderInlineEnd: 1,
  borderInlineStart: 1
};
/**
 * Removes a CSS property from the style object.
 *
 * @link https://griffel.js.org/react/api/make-styles
 *
 * Do not use the value directly, use `RESET` constant instead.
 */
const RESET = 'DO_NOT_USE_DIRECTLY: @griffel/reset-value';


//# sourceMappingURL=constants.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/devtools/getAtomicDebugSequenceTree.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@griffel/core/devtools/getAtomicDebugSequenceTree.esm.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAtomicDebugSequenceTree: function() { return /* binding */ getAtomicDebugSequenceTree; }
/* harmony export */ });
/* harmony import */ var _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.esm.js */ "./node_modules/@griffel/core/constants.esm.js");
/* harmony import */ var _store_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.esm.js */ "./node_modules/@griffel/core/devtools/store.esm.js");
/* harmony import */ var _utils_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.esm.js */ "./node_modules/@griffel/core/devtools/utils.esm.js");




function getAtomicDebugSequenceTree(debugSequenceHash, parentNode) {
  const lookupItem = _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DEFINITION_LOOKUP_TABLE[debugSequenceHash];
  if (lookupItem === undefined) {
    return undefined;
  }
  const parentLookupItem = parentNode ? _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DEFINITION_LOOKUP_TABLE[parentNode.sequenceHash] : undefined;
  const debugClassNames = (0,_utils_esm_js__WEBPACK_IMPORTED_MODULE_2__.getDebugClassNames)(lookupItem, parentLookupItem, parentNode === null || parentNode === void 0 ? void 0 : parentNode.debugClassNames, parentNode === null || parentNode === void 0 ? void 0 : parentNode.children);
  const node = {
    sequenceHash: debugSequenceHash,
    direction: lookupItem[1],
    children: [],
    debugClassNames
  };
  const childrenSequences = _store_esm_js__WEBPACK_IMPORTED_MODULE_1__.debugData.getChildrenSequences(node.sequenceHash);
  childrenSequences.reverse() // first process the overriding children that are merged last
  .forEach(sequence => {
    const child = getAtomicDebugSequenceTree(sequence, node);
    if (child) {
      node.children.push(child);
    }
  });
  // if it's leaf (makeStyle node), get css rules
  if (!node.children.length) {
    node.rules = {};
    node.debugClassNames.forEach(({
      className
    }) => {
      const mapData = _store_esm_js__WEBPACK_IMPORTED_MODULE_1__.debugData.getSequenceDetails(debugSequenceHash);
      if (mapData) {
        node.slot = mapData.slotName;
        node.sourceURL = mapData.sourceURL;
      }
      const cssRule = _store_esm_js__WEBPACK_IMPORTED_MODULE_1__.debugData.getCSSRules().find(cssRule => {
        return cssRule.includes(className);
      });
      node.rules[className] = cssRule;
    });
  }
  return node;
}


//# sourceMappingURL=getAtomicDebugSequenceTree.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/devtools/getResetDebugSequence.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@griffel/core/devtools/getResetDebugSequence.esm.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResetDebugSequence: function() { return /* binding */ getResetDebugSequence; }
/* harmony export */ });
/* harmony import */ var _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.esm.js */ "./node_modules/@griffel/core/constants.esm.js");
/* harmony import */ var _store_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.esm.js */ "./node_modules/@griffel/core/devtools/store.esm.js");



function getResetDebugSequence(debugSequenceHash) {
  const resetClass = _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DEBUG_RESET_CLASSES[debugSequenceHash];
  if (resetClass === undefined) {
    return undefined;
  }
  const debugClassNames = [{
    className: debugSequenceHash
  }];
  const node = {
    sequenceHash: debugSequenceHash,
    direction: 'ltr',
    children: [],
    debugClassNames
  };
  node.rules = {};
  node.slot = 'makeResetStyles()';
  const [{
    className
  }] = node.debugClassNames;
  const cssRules = _store_esm_js__WEBPACK_IMPORTED_MODULE_1__.debugData.getCSSRules().filter(cssRule => {
    return cssRule.includes(`.${className}`);
  });
  node.rules[className] = cssRules.join('');
  return node;
}


//# sourceMappingURL=getResetDebugSequence.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/devtools/getSourceURLfromError.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@griffel/core/devtools/getSourceURLfromError.esm.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSourceURLfromError: function() { return /* binding */ getSourceURLfromError; }
/* harmony export */ });
/* harmony import */ var _react_render_tracker_stackTrace_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react-render-tracker/stackTrace.esm.js */ "./node_modules/@griffel/core/devtools/react-render-tracker/stackTrace.esm.js");


function getSourceURLfromError() {
  const stacks = String(new Error().stack).split('\n');
  const userMakeStyleCallLine = findUserMakeStyleCallInStacks(stacks);
  if (userMakeStyleCallLine === undefined) {
    return undefined;
  }
  const result = (0,_react_render_tracker_stackTrace_esm_js__WEBPACK_IMPORTED_MODULE_0__.parseStackTraceLine)(userMakeStyleCallLine);
  return result === null || result === void 0 ? void 0 : result.loc;
}
function findUserMakeStyleCallInStacks(stacks) {
  for (let i = stacks.length - 1; i >= 0; --i) {
    if (stacks[i].includes('at getSourceURLfromError')) {
      // The error stacks look like:
      //   getSourceURLfromError
      //   makeStyles/__styles in griffel core
      //   makeStyles/__styles in griffel react
      //   user makeStyles call
      return stacks[i + 3];
    }
  }
  return undefined;
}


//# sourceMappingURL=getSourceURLfromError.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/devtools/injectDevTools.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@griffel/core/devtools/injectDevTools.esm.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   injectDevTools: function() { return /* binding */ injectDevTools; }
/* harmony export */ });
/* harmony import */ var _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.esm.js */ "./node_modules/@griffel/core/constants.esm.js");
/* harmony import */ var _mergeDebugSequence_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeDebugSequence.esm.js */ "./node_modules/@griffel/core/devtools/mergeDebugSequence.esm.js");



function injectDevTools(document) {
  const window = document.defaultView;
  if (!window || window.__GRIFFEL_DEVTOOLS__) {
    return;
  }
  const devtools = {
    getInfo: element => {
      let rootDebugSequenceHash;
      let rootResetDebugClassName;
      for (const className of element.classList) {
        if (className.startsWith(_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.SEQUENCE_PREFIX)) {
          rootDebugSequenceHash = className;
        }
        if (_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DEBUG_RESET_CLASSES[className]) {
          rootResetDebugClassName = className;
        }
      }
      return (0,_mergeDebugSequence_esm_js__WEBPACK_IMPORTED_MODULE_1__.mergeDebugSequence)(rootDebugSequenceHash, rootResetDebugClassName);
    }
  };
  Object.defineProperty(window, '__GRIFFEL_DEVTOOLS__', {
    configurable: false,
    enumerable: false,
    get() {
      return devtools;
    }
  });
}


//# sourceMappingURL=injectDevTools.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/devtools/isDevToolsEnabled.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@griffel/core/devtools/isDevToolsEnabled.esm.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDevToolsEnabled: function() { return /* binding */ isDevToolsEnabled; }
/* harmony export */ });
const isDevToolsEnabled = /*#__PURE__*/(() => {
  var _a;
  // Accessing "window.sessionStorage" causes an exception when third party cookies are blocked
  // https://stackoverflow.com/questions/30481516/iframe-in-chrome-error-failed-to-read-localstorage-from-window-access-deni
  try {
    return Boolean(typeof window !== 'undefined' && ((_a = window.sessionStorage) === null || _a === void 0 ? void 0 : _a.getItem('__GRIFFEL_DEVTOOLS__')));
  } catch (e) {
    return false;
  }
})();


//# sourceMappingURL=isDevToolsEnabled.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/devtools/mergeDebugSequence.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@griffel/core/devtools/mergeDebugSequence.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeDebugSequence: function() { return /* binding */ mergeDebugSequence; }
/* harmony export */ });
/* harmony import */ var _getAtomicDebugSequenceTree_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAtomicDebugSequenceTree.esm.js */ "./node_modules/@griffel/core/devtools/getAtomicDebugSequenceTree.esm.js");
/* harmony import */ var _getResetDebugSequence_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getResetDebugSequence.esm.js */ "./node_modules/@griffel/core/devtools/getResetDebugSequence.esm.js");



function mergeDebugSequence(atomicClases, resetClassName) {
  const debugResultRootAtomic = atomicClases ? (0,_getAtomicDebugSequenceTree_esm_js__WEBPACK_IMPORTED_MODULE_0__.getAtomicDebugSequenceTree)(atomicClases) : undefined;
  const debugResultRootReset = resetClassName ? (0,_getResetDebugSequence_esm_js__WEBPACK_IMPORTED_MODULE_1__.getResetDebugSequence)(resetClassName) : undefined;
  if (!debugResultRootAtomic && !debugResultRootReset) {
    return undefined;
  }
  if (!debugResultRootAtomic) {
    return debugResultRootReset;
  }
  if (!debugResultRootReset) {
    return debugResultRootAtomic;
  }
  const debugResultRoot = {
    sequenceHash: debugResultRootAtomic.sequenceHash + debugResultRootReset.sequenceHash,
    direction: debugResultRootAtomic.direction,
    children: [debugResultRootAtomic, debugResultRootReset],
    debugClassNames: [...debugResultRootAtomic.debugClassNames, ...debugResultRootReset.debugClassNames]
  };
  return debugResultRoot;
}


//# sourceMappingURL=mergeDebugSequence.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/devtools/react-render-tracker/stackTrace.esm.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@griffel/core/devtools/react-render-tracker/stackTrace.esm.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseStackTraceLine: function() { return /* binding */ parseStackTraceLine; }
/* harmony export */ });
// TODO: duplicated from https://github.com/lahmatiy/react-render-tracker/blob/main/src/publisher/react-integration/utils/stackTrace.ts
// once it is published as a standalone npm package, remove this file
// Adopted version of StackTrace-Parser
// https://github.com/errwischt/stacktrace-parser/blob/master/src/stack-trace-parser.js
const UNKNOWN_FUNCTION = '<unknown>';
function parseStackTraceLine(line) {
  return parseChrome(line) || parseGecko(line) || parseJSC(line);
}
const chromeRe = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)?\)?\s*$/i;
const chromeRe2 = /^\s*at ()((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)\s*$/i;
const chromeEvalRe = /\((\S*)\)/;
function parseChrome(line) {
  const parts = chromeRe.exec(line) || chromeRe2.exec(line);
  if (!parts) {
    return null;
  }
  let loc = parts[2];
  const isNative = loc && loc.indexOf('native') === 0; // start of line
  const isEval = loc && loc.indexOf('eval') === 0; // start of line
  const submatch = chromeEvalRe.exec(loc);
  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line/column number
    loc = submatch[1]; // url
  }
  return {
    loc: !isNative ? parts[2] : null,
    name: parts[1] || UNKNOWN_FUNCTION
  };
}
const geckoRe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)\s*$/i;
const geckoEvalRe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function parseGecko(line) {
  const parts = geckoRe.exec(line);
  if (!parts) {
    return null;
  }
  let loc = parts[3];
  const isEval = loc && loc.indexOf(' > eval') > -1;
  const submatch = geckoEvalRe.exec(loc);
  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line number
    loc = submatch[1];
  }
  return {
    loc: parts[3],
    name: parts[1] || UNKNOWN_FUNCTION
  };
}
const javaScriptCoreRe = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?)\s*$/i;
function parseJSC(line) {
  const parts = javaScriptCoreRe.exec(line);
  if (!parts) {
    return null;
  }
  return {
    loc: parts[3],
    name: parts[1] || UNKNOWN_FUNCTION
  };
}


//# sourceMappingURL=stackTrace.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/devtools/store.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/@griffel/core/devtools/store.esm.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debugData: function() { return /* binding */ debugData; }
/* harmony export */ });
/* harmony import */ var _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.esm.js */ "./node_modules/@griffel/core/constants.esm.js");
/* harmony import */ var _mergeClasses_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mergeClasses.esm.js */ "./node_modules/@griffel/core/mergeClasses.esm.js");



const sequenceDetails = {};
const cssRules = /*#__PURE__*/new Set();
const debugData = {
  getChildrenSequences: debugSequenceHash => {
    const key = Object.keys(_mergeClasses_esm_js__WEBPACK_IMPORTED_MODULE_1__.mergeClassesCachedResults).find(key => _mergeClasses_esm_js__WEBPACK_IMPORTED_MODULE_1__.mergeClassesCachedResults[key].startsWith(debugSequenceHash));
    if (key) {
      // key of the mergeClasses cache contains merge order
      return key.split(_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.SEQUENCE_PREFIX).filter(sequence => sequence.length).map(sequence => _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.SEQUENCE_PREFIX + sequence);
    }
    return [];
  },
  addCSSRule: rule => {
    cssRules.add(rule);
  },
  addSequenceDetails: (classNamesForSlots, sourceURL) => {
    Object.entries(classNamesForSlots).forEach(([slotName, sequenceHash]) => {
      sequenceDetails[sequenceHash.substring(0, _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.SEQUENCE_SIZE)] = {
        slotName,
        sourceURL
      };
    });
  },
  getCSSRules: () => {
    return Array.from(cssRules);
  },
  getSequenceDetails: sequenceHash => {
    return sequenceDetails[sequenceHash];
  }
};


//# sourceMappingURL=store.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/devtools/utils.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/@griffel/core/devtools/utils.esm.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDebugClassNames: function() { return /* binding */ getDebugClassNames; }
/* harmony export */ });
function getDirectionalClassName(classes, direction) {
  return Array.isArray(classes) ? direction === 'rtl' ? classes[1] : classes[0] : classes || '';
}
function getDebugClassNames(lookupItem, parentLookupItem, parentDebugClassNames, overridingSiblings) {
  const classesMapping = lookupItem[0];
  const direction = lookupItem[1];
  return Object.entries(classesMapping).map(([propertyHash, classes]) => {
    const className = getDirectionalClassName(classes, direction);
    let overriddenBy;
    if (parentDebugClassNames && parentLookupItem) {
      const matching = parentDebugClassNames.find(({
        className: parentClassName
      }) => parentClassName === className);
      if (!matching && parentLookupItem[0][propertyHash]) {
        // parent node does not have current className (style), but has current selector:
        // style is overriden in current merging by another rule in sibling node
        overriddenBy = getDirectionalClassName(parentLookupItem[0][propertyHash], parentLookupItem[1]);
      } else if (matching && parentLookupItem[0][propertyHash]) {
        // parent node has current className (style), and has current selector:
        // case 1. style is not overriden during current merging; it may be overriden in higher level of merging
        // case 2. style is overriden in current merging by exactly the same rule in sibling nodes
        const siblingHasSameRule = overridingSiblings ? overridingSiblings.filter(({
          debugClassNames
        }) => debugClassNames.filter(({
          className: siblingClassName
        }) => siblingClassName === className).length > 0).length > 0 : false;
        overriddenBy = siblingHasSameRule ? matching.className // case 2
        : matching.overriddenBy; // case 1
      } else if (!matching && !parentLookupItem[0][propertyHash]) {
        // parent node does not have current className (style), and does not have current selector:
        // this case is not possible
        overriddenBy = undefined;
      } else if (matching && !parentLookupItem[0][propertyHash]) {
        // parent node has current className (style), but does not have current selector:
        // this case is not possible
        overriddenBy = undefined;
      }
    }
    return {
      className,
      overriddenBy
    };
  });
}


//# sourceMappingURL=utils.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/insertionFactory.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@griffel/core/insertionFactory.esm.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   insertionFactory: function() { return /* binding */ insertionFactory; }
/* harmony export */ });
/**
 * Default implementation of insertion factory. Inserts styles only once per renderer and performs
 * insertion immediately after styles computation.
 *
 * @internal
 */
const insertionFactory = () => {
  const insertionCache = {};
  return function insertStyles(renderer, cssRules) {
    if (insertionCache[renderer.id] === undefined) {
      renderer.insertCSSRules(cssRules);
      insertionCache[renderer.id] = true;
    }
  };
};


//# sourceMappingURL=insertionFactory.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/makeStyles.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@griffel/core/makeStyles.esm.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeStyles: function() { return /* binding */ makeStyles; }
/* harmony export */ });
/* harmony import */ var _devtools_store_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devtools/store.esm.js */ "./node_modules/@griffel/core/devtools/store.esm.js");
/* harmony import */ var _devtools_isDevToolsEnabled_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devtools/isDevToolsEnabled.esm.js */ "./node_modules/@griffel/core/devtools/isDevToolsEnabled.esm.js");
/* harmony import */ var _devtools_getSourceURLfromError_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./devtools/getSourceURLfromError.esm.js */ "./node_modules/@griffel/core/devtools/getSourceURLfromError.esm.js");
/* harmony import */ var _insertionFactory_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insertionFactory.esm.js */ "./node_modules/@griffel/core/insertionFactory.esm.js");
/* harmony import */ var _resolveStyleRulesForSlots_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolveStyleRulesForSlots.esm.js */ "./node_modules/@griffel/core/resolveStyleRulesForSlots.esm.js");
/* harmony import */ var _runtime_reduceToClassNameForSlots_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./runtime/reduceToClassNameForSlots.esm.js */ "./node_modules/@griffel/core/runtime/reduceToClassNameForSlots.esm.js");








function makeStyles(stylesBySlots, factory = _insertionFactory_esm_js__WEBPACK_IMPORTED_MODULE_3__.insertionFactory) {
  const insertStyles = factory();
  let classesMapBySlot = null;
  let cssRules = null;
  let ltrClassNamesForSlots = null;
  let rtlClassNamesForSlots = null;
  let sourceURL;
  if ( true && _devtools_isDevToolsEnabled_esm_js__WEBPACK_IMPORTED_MODULE_1__.isDevToolsEnabled) {
    sourceURL = (0,_devtools_getSourceURLfromError_esm_js__WEBPACK_IMPORTED_MODULE_2__.getSourceURLfromError)();
  }
  let classNameHashSalt;
  function computeClasses(options) {
    const {
      dir,
      renderer
    } = options;
    if (classesMapBySlot === null) {
      [classesMapBySlot, cssRules] = (0,_resolveStyleRulesForSlots_esm_js__WEBPACK_IMPORTED_MODULE_4__.resolveStyleRulesForSlots)(stylesBySlots, renderer.classNameHashSalt);
      if (true) {
        if (renderer.classNameHashSalt) {
          if (classNameHashSalt !== renderer.classNameHashSalt) {
            console.error(['@griffel/core:', '\n\n', 'A provided renderer has different "classNameHashSalt".', 'This is not supported and WILL cause issues with classnames generation.', 'Ensure that all renderers created with "createDOMRenderer()" have the same "classNameHashSalt".'].join(' '));
          }
          classNameHashSalt = renderer.classNameHashSalt;
        }
      }
    }
    const isLTR = dir === 'ltr';
    if (isLTR) {
      if (ltrClassNamesForSlots === null) {
        ltrClassNamesForSlots = (0,_runtime_reduceToClassNameForSlots_esm_js__WEBPACK_IMPORTED_MODULE_5__.reduceToClassNameForSlots)(classesMapBySlot, dir);
      }
    } else {
      if (rtlClassNamesForSlots === null) {
        rtlClassNamesForSlots = (0,_runtime_reduceToClassNameForSlots_esm_js__WEBPACK_IMPORTED_MODULE_5__.reduceToClassNameForSlots)(classesMapBySlot, dir);
      }
    }
    insertStyles(renderer, cssRules);
    const classNamesForSlots = isLTR ? ltrClassNamesForSlots : rtlClassNamesForSlots;
    if ( true && _devtools_isDevToolsEnabled_esm_js__WEBPACK_IMPORTED_MODULE_1__.isDevToolsEnabled) {
      _devtools_store_esm_js__WEBPACK_IMPORTED_MODULE_0__.debugData.addSequenceDetails(classNamesForSlots, sourceURL);
    }
    return classNamesForSlots;
  }
  return computeClasses;
}


//# sourceMappingURL=makeStyles.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/mergeClasses.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@griffel/core/mergeClasses.esm.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeClasses: function() { return /* binding */ mergeClasses; },
/* harmony export */   mergeClassesCachedResults: function() { return /* binding */ mergeClassesCachedResults; }
/* harmony export */ });
/* harmony import */ var _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.esm.js */ "./node_modules/@griffel/core/constants.esm.js");
/* harmony import */ var _runtime_utils_hashSequence_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runtime/utils/hashSequence.esm.js */ "./node_modules/@griffel/core/runtime/utils/hashSequence.esm.js");
/* harmony import */ var _runtime_reduceToClassNameForSlots_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runtime/reduceToClassNameForSlots.esm.js */ "./node_modules/@griffel/core/runtime/reduceToClassNameForSlots.esm.js");




// Contains a mapping of previously resolved sequences of atomic classnames
const mergeClassesCachedResults = {};
function mergeClasses() {
  // arguments are parsed manually to avoid double loops as TS & Babel transforms rest via an additional loop
  // @see https://babeljs.io/docs/en/babel-plugin-transform-parameters
  /* eslint-disable prefer-rest-params */
  let dir = null;
  let resultClassName = '';
  // Is used as a cache key to avoid object merging
  let sequenceMatch = '';
  const sequencesIds = new Array(arguments.length);
  let containsResetClassName = '';
  for (let i = 0; i < arguments.length; i++) {
    const className = arguments[i];
    if (typeof className === 'string' && className !== '') {
      // All classes generated by `makeStyles()` are prefixed by a sequence hash, this allows to identify class sets
      // without parsing each className in a string
      const sequenceIndex = className.indexOf(_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.SEQUENCE_PREFIX);
      if (sequenceIndex === -1) {
        if (true) {
          className.split(' ').forEach(entry => {
            if (entry.startsWith(_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.RESET_HASH_PREFIX) && _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DEBUG_RESET_CLASSES[entry]) {
              if (containsResetClassName) {
                // eslint-disable-next-line no-console
                console.error('mergeClasses(): a passed string contains multiple classes produced by makeResetStyles (' + `${className} & ${resultClassName}, this will lead to non-deterministic behavior. Learn more:` + 'https://griffel.js.org/react/api/make-reset-styles#limitations' + '\n' + `Source string: ${className}`);
              } else {
                containsResetClassName = entry;
              }
            }
          });
        }
        resultClassName += className + ' ';
      } else {
        const sequenceId = className.substr(sequenceIndex, _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.SEQUENCE_SIZE);
        // Handles a case with mixed classnames, i.e. "ui-button ATOMIC_CLASSES"
        if (sequenceIndex > 0) {
          resultClassName += className.slice(0, sequenceIndex);
        }
        sequenceMatch += sequenceId;
        sequencesIds[i] = sequenceId;
      }
      if (true) {
        if (className.indexOf(_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.SEQUENCE_PREFIX, sequenceIndex + 1) !== -1) {
          // eslint-disable-next-line no-console
          console.error('mergeClasses(): a passed string contains multiple identifiers of atomic classes (classes that start ' + `with "${_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.SEQUENCE_PREFIX}"), it's possible that passed classes were concatenated in a wrong way. ` + `Source string: ${className}`);
        }
      }
    }
  }
  // .slice() there allows to avoid trailing space for non-atomic classes
  // "ui-button ui-flex " => "ui-button ui-flex"
  if (sequenceMatch === '') {
    return resultClassName.slice(0, -1);
  }
  // It's safe to reuse results to avoid continuous merging as results are stable
  // "__seq1 ... __seq2 ..." => "__seq12 ..."
  const mergeClassesResult = mergeClassesCachedResults[sequenceMatch];
  if (mergeClassesResult !== undefined) {
    return resultClassName + mergeClassesResult;
  }
  const sequenceMappings = [];
  for (let i = 0; i < arguments.length; i++) {
    const sequenceId = sequencesIds[i];
    if (sequenceId) {
      const sequenceMapping = _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DEFINITION_LOOKUP_TABLE[sequenceId];
      if (sequenceMapping) {
        sequenceMappings.push(sequenceMapping[_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.LOOKUP_DEFINITIONS_INDEX]);
        if (true) {
          if (dir !== null && dir !== sequenceMapping[_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.LOOKUP_DIR_INDEX]) {
            // eslint-disable-next-line no-console
            console.error(`mergeClasses(): a passed string contains an identifier (${sequenceId}) that has different direction ` + `(dir="${sequenceMapping[1] ? 'rtl' : 'ltr'}") setting than other classes. This is not supported. ` + `Source string: ${arguments[i]}`);
          }
        }
        dir = sequenceMapping[_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.LOOKUP_DIR_INDEX];
      } else {
        if (true) {
          // eslint-disable-next-line no-console
          console.error(`mergeClasses(): a passed string contains an identifier (${sequenceId}) that does not match any entry ` + `in cache. Source string: ${arguments[i]}`);
        }
      }
    }
  }
  // eslint-disable-next-line prefer-spread
  const resultClassesMap = Object.assign.apply(Object,
  // .assign() mutates the first object, we can't mutate mappings as it will produce invalid results later
  [{}].concat(sequenceMappings));
  const [atomicClasses, classesMapHash] = (0,_runtime_reduceToClassNameForSlots_esm_js__WEBPACK_IMPORTED_MODULE_2__.reduceToClassName)(resultClassesMap, dir);
  // Each merge of classes generates a new sequence of atomic classes that needs to be registered
  const newSequenceHash = (0,_runtime_utils_hashSequence_esm_js__WEBPACK_IMPORTED_MODULE_1__.hashSequence)(classesMapHash, dir, sequencesIds);
  const newClassName = newSequenceHash + ' ' + atomicClasses;
  mergeClassesCachedResults[sequenceMatch] = newClassName;
  _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DEFINITION_LOOKUP_TABLE[newSequenceHash] = [resultClassesMap, dir];
  return resultClassName + newClassName;
}


//# sourceMappingURL=mergeClasses.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/renderer/createDOMRenderer.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@griffel/core/renderer/createDOMRenderer.esm.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDOMRenderer: function() { return /* binding */ createDOMRenderer; },
/* harmony export */   defaultCompareMediaQueries: function() { return /* binding */ defaultCompareMediaQueries; }
/* harmony export */ });
/* harmony import */ var _devtools_injectDevTools_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../devtools/injectDevTools.esm.js */ "./node_modules/@griffel/core/devtools/injectDevTools.esm.js");
/* harmony import */ var _devtools_isDevToolsEnabled_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../devtools/isDevToolsEnabled.esm.js */ "./node_modules/@griffel/core/devtools/isDevToolsEnabled.esm.js");
/* harmony import */ var _devtools_store_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../devtools/store.esm.js */ "./node_modules/@griffel/core/devtools/store.esm.js");
/* harmony import */ var _runtime_utils_normalizeCSSBucketEntry_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../runtime/utils/normalizeCSSBucketEntry.esm.js */ "./node_modules/@griffel/core/runtime/utils/normalizeCSSBucketEntry.esm.js");
/* harmony import */ var _getStyleSheetForBucket_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getStyleSheetForBucket.esm.js */ "./node_modules/@griffel/core/renderer/getStyleSheetForBucket.esm.js");
/* harmony import */ var _safeInsertRule_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./safeInsertRule.esm.js */ "./node_modules/@griffel/core/renderer/safeInsertRule.esm.js");







let lastIndex = 0;
/** @internal */
const defaultCompareMediaQueries = (a, b) => a < b ? -1 : a > b ? 1 : 0;
/**
 * Creates a new instances of a renderer.
 *
 * @public
 */
function createDOMRenderer(targetDocument = typeof document === 'undefined' ? undefined : document, options = {}) {
  const {
    classNameHashSalt,
    unstable_filterCSSRule,
    insertionPoint,
    styleElementAttributes,
    compareMediaQueries = defaultCompareMediaQueries
  } = options;
  const renderer = {
    classNameHashSalt,
    insertionCache: {},
    stylesheets: {},
    styleElementAttributes: Object.freeze(styleElementAttributes),
    compareMediaQueries,
    id: `d${lastIndex++}`,
    insertCSSRules(cssRules) {
      // eslint-disable-next-line guard-for-in
      for (const styleBucketName in cssRules) {
        const cssRulesForBucket = cssRules[styleBucketName];
        // This is a hot path in rendering styles: ".length" is cached in "l" var to avoid accesses the property
        for (let i = 0, l = cssRulesForBucket.length; i < l; i++) {
          const [ruleCSS, metadata] = (0,_runtime_utils_normalizeCSSBucketEntry_esm_js__WEBPACK_IMPORTED_MODULE_3__.normalizeCSSBucketEntry)(cssRulesForBucket[i]);
          const sheet = (0,_getStyleSheetForBucket_esm_js__WEBPACK_IMPORTED_MODULE_4__.getStyleSheetForBucket)(styleBucketName, targetDocument, insertionPoint || null, renderer, metadata);
          if (renderer.insertionCache[ruleCSS]) {
            continue;
          }
          renderer.insertionCache[ruleCSS] = styleBucketName;
          if ( true && _devtools_isDevToolsEnabled_esm_js__WEBPACK_IMPORTED_MODULE_1__.isDevToolsEnabled) {
            _devtools_store_esm_js__WEBPACK_IMPORTED_MODULE_2__.debugData.addCSSRule(ruleCSS);
          }
          if (unstable_filterCSSRule) {
            if (unstable_filterCSSRule(ruleCSS)) {
              (0,_safeInsertRule_esm_js__WEBPACK_IMPORTED_MODULE_5__.safeInsertRule)(sheet, ruleCSS);
            }
          } else {
            (0,_safeInsertRule_esm_js__WEBPACK_IMPORTED_MODULE_5__.safeInsertRule)(sheet, ruleCSS);
          }
        }
      }
    }
  };
  if (targetDocument && "development" !== 'production' && _devtools_isDevToolsEnabled_esm_js__WEBPACK_IMPORTED_MODULE_1__.isDevToolsEnabled) {
    (0,_devtools_injectDevTools_esm_js__WEBPACK_IMPORTED_MODULE_0__.injectDevTools)(targetDocument);
  }
  return renderer;
}


//# sourceMappingURL=createDOMRenderer.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/renderer/createIsomorphicStyleSheet.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@griffel/core/renderer/createIsomorphicStyleSheet.esm.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createIsomorphicStyleSheet: function() { return /* binding */ createIsomorphicStyleSheet; },
/* harmony export */   createIsomorphicStyleSheetFromElement: function() { return /* binding */ createIsomorphicStyleSheetFromElement; }
/* harmony export */ });
/* harmony import */ var _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.esm.js */ "./node_modules/@griffel/core/constants.esm.js");


function createIsomorphicStyleSheet(styleElement, bucketName, priority, elementAttributes) {
  // no CSSStyleSheet in SSR, just append rules here for server render
  const __cssRulesForSSR = [];
  elementAttributes[_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DATA_BUCKET_ATTR] = bucketName;
  elementAttributes[_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DATA_PRIORITY_ATTR] = String(priority);
  if (styleElement) {
    for (const attrName in elementAttributes) {
      styleElement.setAttribute(attrName, elementAttributes[attrName]);
    }
  }
  function insertRule(rule) {
    if (styleElement === null || styleElement === void 0 ? void 0 : styleElement.sheet) {
      return styleElement.sheet.insertRule(rule, styleElement.sheet.cssRules.length);
    }
    return __cssRulesForSSR.push(rule);
  }
  return {
    elementAttributes,
    insertRule,
    element: styleElement,
    bucketName,
    cssRules() {
      if (styleElement === null || styleElement === void 0 ? void 0 : styleElement.sheet) {
        return Array.from(styleElement.sheet.cssRules).map(cssRule => cssRule.cssText);
      }
      return __cssRulesForSSR;
    }
  };
}
function createIsomorphicStyleSheetFromElement(element) {
  const elementAttributes = Array.from(element.attributes).reduce((acc, attr) => {
    acc[attr.name] = attr.value;
    return acc;
  }, {});
  const stylesheet = createIsomorphicStyleSheet(element, elementAttributes[_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DATA_BUCKET_ATTR], Number(elementAttributes[_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DATA_PRIORITY_ATTR]), elementAttributes);
  return stylesheet;
}


//# sourceMappingURL=createIsomorphicStyleSheet.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/renderer/getStyleSheetForBucket.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@griffel/core/renderer/getStyleSheetForBucket.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyleSheetForBucket: function() { return /* binding */ getStyleSheetForBucket; },
/* harmony export */   getStyleSheetKey: function() { return /* binding */ getStyleSheetKey; },
/* harmony export */   getStyleSheetKeyFromElement: function() { return /* binding */ getStyleSheetKeyFromElement; },
/* harmony export */   styleBucketOrdering: function() { return /* binding */ styleBucketOrdering; }
/* harmony export */ });
/* harmony import */ var _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.esm.js */ "./node_modules/@griffel/core/constants.esm.js");
/* harmony import */ var _createIsomorphicStyleSheet_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createIsomorphicStyleSheet.esm.js */ "./node_modules/@griffel/core/renderer/createIsomorphicStyleSheet.esm.js");



/**
 * Ordered style buckets using their short pseudo name.
 *
 * @internal
 */
const styleBucketOrdering = [
// reset styles
'r',
// catch-all
'd',
// link
'l',
// visited
'v',
// focus-within
'w',
// focus
'f',
// focus-visible
'i',
// hover
'h',
// active
'a',
// at rules for reset styles
's',
// keyframes
'k',
// at-rules
't',
// @media rules
'm',
// @container rules
'c'];
// avoid repeatedly calling `indexOf` to determine order during new insertions
const styleBucketOrderingMap = /*#__PURE__*/styleBucketOrdering.reduce((acc, cur, j) => {
  acc[cur] = j;
  return acc;
}, {});
function getStyleSheetKey(bucketName, media, priority) {
  return (bucketName === 'm' ? bucketName + media : bucketName) + priority;
}
function getStyleSheetKeyFromElement(styleEl) {
  var _a;
  const bucketName = styleEl.getAttribute(_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DATA_BUCKET_ATTR);
  const priority = (_a = styleEl.getAttribute(_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DATA_PRIORITY_ATTR)) !== null && _a !== void 0 ? _a : '0';
  return getStyleSheetKey(bucketName, styleEl.media, priority);
}
/**
 * Lazily adds a `<style>` bucket to the `<head>`. This will ensure that the style buckets are ordered.
 */
function getStyleSheetForBucket(bucketName, targetDocument, insertionPoint, renderer, metadata = {}) {
  var _a, _b;
  const isMediaBucket = bucketName === 'm';
  const media = (_a = metadata['m']) !== null && _a !== void 0 ? _a : '0';
  const priority = (_b = metadata['p']) !== null && _b !== void 0 ? _b : 0;
  const stylesheetKey = getStyleSheetKey(bucketName, media, priority);
  if (!renderer.stylesheets[stylesheetKey]) {
    const tag = targetDocument && targetDocument.createElement('style');
    const stylesheet = (0,_createIsomorphicStyleSheet_esm_js__WEBPACK_IMPORTED_MODULE_1__.createIsomorphicStyleSheet)(tag, bucketName, priority, Object.assign({}, renderer.styleElementAttributes, isMediaBucket && {
      media
    }));
    renderer.stylesheets[stylesheetKey] = stylesheet;
    if ((targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.head) && tag) {
      targetDocument.head.insertBefore(tag, findInsertionPoint(targetDocument, insertionPoint, bucketName, renderer, metadata));
    }
  }
  return renderer.stylesheets[stylesheetKey];
}
function isSameInsertionKey(element, bucketName, metadata) {
  var _a, _b;
  const targetKey = bucketName + ((_a = metadata['m']) !== null && _a !== void 0 ? _a : '');
  const elementKey = element.getAttribute(_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DATA_BUCKET_ATTR) + ((_b = element.media) !== null && _b !== void 0 ? _b : '');
  return targetKey === elementKey;
}
/**
 * Finds an element before which the new bucket style element should be inserted following the bucket sort order.
 *
 * @param targetDocument - A document
 * @param insertionPoint - An element that will be used as an initial insertion point
 * @param targetBucket - The bucket that should be inserted to DOM
 * @param renderer - Griffel renderer
 * @param metadata - metadata for CSS rule
 * @returns - Smallest style element with greater sort order than the current bucket
 */
function findInsertionPoint(targetDocument, insertionPoint, targetBucket, renderer, metadata = {}) {
  var _a, _b;
  const targetOrder = styleBucketOrderingMap[targetBucket];
  const media = (_a = metadata['m']) !== null && _a !== void 0 ? _a : '';
  const priority = (_b = metadata['p']) !== null && _b !== void 0 ? _b : 0;
  // Similar to javascript sort comparators where
  // a positive value is increasing sort order
  // a negative value is decreasing sort order
  let comparer = el => targetOrder - styleBucketOrderingMap[el.getAttribute(_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DATA_BUCKET_ATTR)];
  let styleElements = targetDocument.head.querySelectorAll(`[${_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DATA_BUCKET_ATTR}]`);
  if (targetBucket === 'm') {
    const mediaElements = targetDocument.head.querySelectorAll(`[${_constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DATA_BUCKET_ATTR}="${targetBucket}"]`);
    // only reduce the scope of the search and change comparer
    // if there are other media buckets already on the page
    if (mediaElements.length) {
      styleElements = mediaElements;
      comparer = el => renderer.compareMediaQueries(media, el.media);
    }
  }
  const comparerWithPriority = el => {
    if (isSameInsertionKey(el, targetBucket, metadata)) {
      return priority - Number(el.getAttribute('data-priority'));
    }
    return comparer(el);
  };
  const length = styleElements.length;
  let index = length - 1;
  while (index >= 0) {
    const styleElement = styleElements.item(index);
    if (comparerWithPriority(styleElement) > 0) {
      return styleElement.nextSibling;
    }
    index--;
  }
  if (length > 0) {
    return styleElements.item(0);
  }
  return insertionPoint ? insertionPoint.nextSibling : null;
}


//# sourceMappingURL=getStyleSheetForBucket.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/renderer/rehydrateRendererCache.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@griffel/core/renderer/rehydrateRendererCache.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rehydrateRendererCache: function() { return /* binding */ rehydrateRendererCache; }
/* harmony export */ });
/* harmony import */ var _devtools_store_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../devtools/store.esm.js */ "./node_modules/@griffel/core/devtools/store.esm.js");
/* harmony import */ var _devtools_isDevToolsEnabled_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../devtools/isDevToolsEnabled.esm.js */ "./node_modules/@griffel/core/devtools/isDevToolsEnabled.esm.js");
/* harmony import */ var _createIsomorphicStyleSheet_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createIsomorphicStyleSheet.esm.js */ "./node_modules/@griffel/core/renderer/createIsomorphicStyleSheet.esm.js");
/* harmony import */ var _getStyleSheetForBucket_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getStyleSheetForBucket.esm.js */ "./node_modules/@griffel/core/renderer/getStyleSheetForBucket.esm.js");






// Regexps to extract names of classes and animations
// https://github.com/styletron/styletron/blob/e0fcae826744eb00ce679ac613a1b10d44256660/packages/styletron-engine-atomic/src/client/client.js#L8
const KEYFRAMES_HYDRATOR = /@(-webkit-)?keyframes ([^{]+){((?:(?:from|to|(?:\d+\.?\d*%))\{(?:[^}])*})*)}/g;
const AT_RULES_HYDRATOR = /@(media|supports|layer)[^{]+\{([\s\S]+?})\s*}/g;
const STYLES_HYDRATOR = /\.([^{:]+)(:[^{]+)?{(?:[^}]*;)?([^}]*?)}/g;
const regexps = {
  k: KEYFRAMES_HYDRATOR,
  t: AT_RULES_HYDRATOR,
  m: AT_RULES_HYDRATOR
};
/**
 * Should be called in a case of Server-Side rendering. Rehydrates cache from for a renderer to avoid double insertion
 * of classes to DOM.
 *
 * @public
 */
function rehydrateRendererCache(renderer, target = typeof document === 'undefined' ? undefined : document) {
  if (target) {
    const styleElements = target.querySelectorAll('[data-make-styles-bucket]');
    styleElements.forEach(styleElement => {
      const bucketName = styleElement.dataset['makeStylesBucket'];
      const stylesheetKey = (0,_getStyleSheetForBucket_esm_js__WEBPACK_IMPORTED_MODULE_3__.getStyleSheetKeyFromElement)(styleElement);
      // 👇 If some elements are not created yet, we will register them in renderer
      if (!renderer.stylesheets[stylesheetKey]) {
        renderer.stylesheets[stylesheetKey] = (0,_createIsomorphicStyleSheet_esm_js__WEBPACK_IMPORTED_MODULE_2__.createIsomorphicStyleSheetFromElement)(styleElement);
      }
      const regex = regexps[bucketName] || STYLES_HYDRATOR;
      let match;
      while (match = regex.exec(styleElement.textContent)) {
        // "cacheKey" is either a class name or an animation name
        const [cssRule] = match;
        renderer.insertionCache[cssRule] = bucketName;
        if ( true && _devtools_isDevToolsEnabled_esm_js__WEBPACK_IMPORTED_MODULE_1__.isDevToolsEnabled) {
          _devtools_store_esm_js__WEBPACK_IMPORTED_MODULE_0__.debugData.addCSSRule(cssRule);
        }
      }
    });
  }
}


//# sourceMappingURL=rehydrateRendererCache.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/renderer/safeInsertRule.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@griffel/core/renderer/safeInsertRule.esm.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   safeInsertRule: function() { return /* binding */ safeInsertRule; }
/* harmony export */ });
/**
 * Suffixes to be ignored in case of error
 */
const ignoreSuffixes = /*#__PURE__*/['-moz-placeholder', '-moz-focus-inner', '-moz-focusring', '-ms-input-placeholder', '-moz-read-write', '-moz-read-only'].join('|');
const ignoreSuffixesRegex = /*#__PURE__*/new RegExp(`:(${ignoreSuffixes})`);
/**
 * @internal
 *
 * Calls `sheet.insertRule` and catches errors related to browser prefixes.
 */
function safeInsertRule(sheet, ruleCSS) {
  try {
    sheet.insertRule(ruleCSS);
  } catch (e) {
    // We've disabled these warnings due to false-positive errors with browser prefixes
    if ( true && !ignoreSuffixesRegex.test(ruleCSS)) {
      // eslint-disable-next-line no-console
      console.error(`There was a problem inserting the following rule: "${ruleCSS}"`, e);
    }
  }
}


//# sourceMappingURL=safeInsertRule.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/resolveStyleRulesForSlots.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@griffel/core/resolveStyleRulesForSlots.esm.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveStyleRulesForSlots: function() { return /* binding */ resolveStyleRulesForSlots; }
/* harmony export */ });
/* harmony import */ var _runtime_resolveStyleRules_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./runtime/resolveStyleRules.esm.js */ "./node_modules/@griffel/core/runtime/resolveStyleRules.esm.js");


/**
 * Calls resolveStyleRules() for each slot, is also used by build time transform.
 *
 * @param stylesBySlots - An object with makeStyles rules where a key is a slot name
 * @param classNameHashSalt - A salt for classes hash
 *
 * @return - A tuple with an object classnames mapping where a key is a slot name and an array with CSS rules
 */
function resolveStyleRulesForSlots(stylesBySlots, classNameHashSalt = '') {
  const classesMapBySlot = {};
  const cssRules = {};
  // eslint-disable-next-line guard-for-in
  for (const slotName in stylesBySlots) {
    const slotStyles = stylesBySlots[slotName];
    const [cssClassMap, cssRulesByBucket] = (0,_runtime_resolveStyleRules_esm_js__WEBPACK_IMPORTED_MODULE_0__.resolveStyleRules)(slotStyles, classNameHashSalt);
    classesMapBySlot[slotName] = cssClassMap;
    Object.keys(cssRulesByBucket).forEach(styleBucketName => {
      cssRules[styleBucketName] = (cssRules[styleBucketName] || []).concat(cssRulesByBucket[styleBucketName]);
    });
  }
  return [classesMapBySlot, cssRules];
}


//# sourceMappingURL=resolveStyleRulesForSlots.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/compileAtomicCSSRule.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/compileAtomicCSSRule.esm.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compileAtomicCSSRule: function() { return /* binding */ compileAtomicCSSRule; },
/* harmony export */   normalizePseudoSelector: function() { return /* binding */ normalizePseudoSelector; }
/* harmony export */ });
/* harmony import */ var _utils_hyphenateProperty_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/hyphenateProperty.esm.js */ "./node_modules/@griffel/core/runtime/utils/hyphenateProperty.esm.js");
/* harmony import */ var _utils_normalizeNestedProperty_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/normalizeNestedProperty.esm.js */ "./node_modules/@griffel/core/runtime/utils/normalizeNestedProperty.esm.js");
/* harmony import */ var _compileCSSRules_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compileCSSRules.esm.js */ "./node_modules/@griffel/core/runtime/compileCSSRules.esm.js");




const PSEUDO_SELECTOR_REGEX = /,( *[^ &])/g;
/**
 * Normalizes pseudo selectors to always contain &, requires to work properly with comma-separated selectors.
 *
 * @example
 *   ":hover" => "&:hover"
 *   " :hover" => "& :hover"
 *   ":hover,:focus" => "&:hover,&:focus"
 *   " :hover, :focus" => "& :hover,& :focus"
 */
function normalizePseudoSelector(pseudoSelector) {
  return '&' + (0,_utils_normalizeNestedProperty_esm_js__WEBPACK_IMPORTED_MODULE_1__.normalizeNestedProperty)(
  // Regex there replaces a comma, spaces and an ampersand if it's present with comma and an ampersand.
  // This allows to normalize input, see examples in JSDoc.
  pseudoSelector.replace(PSEUDO_SELECTOR_REGEX, ',&$1'));
}
function createCSSRule(classNameSelector, cssDeclaration, pseudos) {
  let cssRule = cssDeclaration;
  if (pseudos.length > 0) {
    cssRule = pseudos.reduceRight((acc, selector) => {
      return `${normalizePseudoSelector(selector)} { ${acc} }`;
    }, cssDeclaration);
  }
  return `${classNameSelector}{${cssRule}}`;
}
function compileAtomicCSSRule(options, atRules) {
  const {
    className,
    selectors,
    property,
    rtlClassName,
    rtlProperty,
    rtlValue,
    value
  } = options;
  const {
    container,
    layer,
    media,
    supports
  } = atRules;
  const classNameSelector = `.${className}`;
  const cssDeclaration = Array.isArray(value) ? `${value.map(v => `${(0,_utils_hyphenateProperty_esm_js__WEBPACK_IMPORTED_MODULE_0__.hyphenateProperty)(property)}: ${v}`).join(';')};` : `${(0,_utils_hyphenateProperty_esm_js__WEBPACK_IMPORTED_MODULE_0__.hyphenateProperty)(property)}: ${value};`;
  let cssRule = createCSSRule(classNameSelector, cssDeclaration, selectors);
  if (rtlProperty && rtlClassName) {
    const rtlClassNameSelector = `.${rtlClassName}`;
    const rtlCSSDeclaration = Array.isArray(rtlValue) ? `${rtlValue.map(v => `${(0,_utils_hyphenateProperty_esm_js__WEBPACK_IMPORTED_MODULE_0__.hyphenateProperty)(rtlProperty)}: ${v}`).join(';')};` : `${(0,_utils_hyphenateProperty_esm_js__WEBPACK_IMPORTED_MODULE_0__.hyphenateProperty)(rtlProperty)}: ${rtlValue};`;
    cssRule += createCSSRule(rtlClassNameSelector, rtlCSSDeclaration, selectors);
  }
  if (media) {
    cssRule = `@media ${media} { ${cssRule} }`;
  }
  if (layer) {
    cssRule = `@layer ${layer} { ${cssRule} }`;
  }
  if (supports) {
    cssRule = `@supports ${supports} { ${cssRule} }`;
  }
  if (container) {
    cssRule = `@container ${container} { ${cssRule} }`;
  }
  return (0,_compileCSSRules_esm_js__WEBPACK_IMPORTED_MODULE_2__.compileCSSRules)(cssRule, true);
}


//# sourceMappingURL=compileAtomicCSSRule.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/compileCSSRules.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/compileCSSRules.esm.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compileCSSRules: function() { return /* binding */ compileCSSRules; }
/* harmony export */ });
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Parser.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Serializer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Middleware.js");
/* harmony import */ var _stylis_globalPlugin_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stylis/globalPlugin.esm.js */ "./node_modules/@griffel/core/runtime/stylis/globalPlugin.esm.js");
/* harmony import */ var _stylis_prefixerPlugin_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stylis/prefixerPlugin.esm.js */ "./node_modules/@griffel/core/runtime/stylis/prefixerPlugin.esm.js");
/* harmony import */ var _stylis_sortClassesInAtRulesPlugin_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stylis/sortClassesInAtRulesPlugin.esm.js */ "./node_modules/@griffel/core/runtime/stylis/sortClassesInAtRulesPlugin.esm.js");





// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop() {}
function compileCSSRules(cssRules, sortClassesInAtRules) {
  const rules = [];
  (0,stylis__WEBPACK_IMPORTED_MODULE_1__.serialize)((0,stylis__WEBPACK_IMPORTED_MODULE_0__.compile)(cssRules), (0,stylis__WEBPACK_IMPORTED_MODULE_2__.middleware)([_stylis_globalPlugin_esm_js__WEBPACK_IMPORTED_MODULE_3__.globalPlugin, sortClassesInAtRules ? _stylis_sortClassesInAtRulesPlugin_esm_js__WEBPACK_IMPORTED_MODULE_5__.sortClassesInAtRulesPlugin : noop, _stylis_prefixerPlugin_esm_js__WEBPACK_IMPORTED_MODULE_4__.prefixerPlugin, stylis__WEBPACK_IMPORTED_MODULE_1__.stringify,
  // 💡 we are using `.insertRule()` API for DOM operations, which does not support
  // insertion of multiple CSS rules in a single call. `rulesheet` plugin extracts
  // individual rules to be used with this API
  (0,stylis__WEBPACK_IMPORTED_MODULE_2__.rulesheet)(rule => rules.push(rule))]));
  return rules;
}


//# sourceMappingURL=compileCSSRules.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/compileKeyframeCSS.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/compileKeyframeCSS.esm.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compileKeyframeRule: function() { return /* binding */ compileKeyframeRule; },
/* harmony export */   compileKeyframesCSS: function() { return /* binding */ compileKeyframesCSS; }
/* harmony export */ });
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Parser.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Serializer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Middleware.js");
/* harmony import */ var _stylis_prefixerPlugin_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stylis/prefixerPlugin.esm.js */ "./node_modules/@griffel/core/runtime/stylis/prefixerPlugin.esm.js");
/* harmony import */ var _utils_cssifyObject_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/cssifyObject.esm.js */ "./node_modules/@griffel/core/runtime/utils/cssifyObject.esm.js");




function compileKeyframeRule(keyframeObject) {
  let css = '';
  // eslint-disable-next-line guard-for-in
  for (const percentage in keyframeObject) {
    css += `${percentage}{${(0,_utils_cssifyObject_esm_js__WEBPACK_IMPORTED_MODULE_4__.cssifyObject)(keyframeObject[percentage])}}`;
  }
  return css;
}
/**
 * Creates CSS rules for insertion from passed CSS.
 */
function compileKeyframesCSS(keyframeName, keyframeCSS) {
  const cssRule = `@keyframes ${keyframeName} {${keyframeCSS}}`;
  const rules = [];
  (0,stylis__WEBPACK_IMPORTED_MODULE_1__.serialize)((0,stylis__WEBPACK_IMPORTED_MODULE_0__.compile)(cssRule), (0,stylis__WEBPACK_IMPORTED_MODULE_2__.middleware)([stylis__WEBPACK_IMPORTED_MODULE_1__.stringify, _stylis_prefixerPlugin_esm_js__WEBPACK_IMPORTED_MODULE_3__.prefixerPlugin,
  // 💡 we are using `.insertRule()` API for DOM operations, which does not support
  // insertion of multiple CSS rules in a single call. `rulesheet` plugin extracts
  // individual rules to be used with this API
  (0,stylis__WEBPACK_IMPORTED_MODULE_2__.rulesheet)(rule => rules.push(rule))]));
  return rules;
}


//# sourceMappingURL=compileKeyframeCSS.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/getStyleBucketName.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/getStyleBucketName.esm.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyleBucketName: function() { return /* binding */ getStyleBucketName; }
/* harmony export */ });
/**
 * Maps the long pseudo name to the short pseudo name. Pseudos that match here will be ordered, everything else will
 * make their way to default style bucket. We reduce the pseudo name to save bundlesize.
 * Thankfully there aren't any overlaps, see: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes.
 */
const pseudosMap = {
  // :focus-within
  'us-w': 'w',
  // :focus-visible
  'us-v': 'i',
  // :link
  nk: 'l',
  // :visited
  si: 'v',
  // :focus
  cu: 'f',
  // :hover
  ve: 'h',
  // :active
  ti: 'a'
};
/**
 * Gets the bucket depending on the pseudo.
 *
 * Input:
 *
 * ```
 * ":hover"
 * ":focus:hover"
 * ```
 *
 * Output:
 *
 * ```
 * "h"
 * "f"
 * ```
 *
 * @internal
 */
function getStyleBucketName(selectors, atRules) {
  if (atRules.media) {
    return 'm';
  }
  // We are grouping all the at-rules like @supports etc. under `t` bucket.
  if (atRules.layer || atRules.supports) {
    return 't';
  }
  if (atRules.container) {
    return 'c';
  }
  if (selectors.length > 0) {
    const normalizedPseudo = selectors[0].trim();
    if (normalizedPseudo.charCodeAt(0) === 58 /* ":" */) {
      // We send through a subset of the string instead of the full pseudo name.
      // For example:
      // - `"focus-visible"` name would instead of `"us-v"`.
      // - `"focus"` name would instead of `"us"`.
      // Return a mapped pseudo else default bucket.
      return pseudosMap[normalizedPseudo.slice(4, 8)] /* allows to avoid collisions between "focus-visible" & "focus" */ || pseudosMap[normalizedPseudo.slice(3, 5)] || 'd';
    }
  }
  // Return default bucket
  return 'd';
}


//# sourceMappingURL=getStyleBucketName.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/reduceToClassNameForSlots.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/reduceToClassNameForSlots.esm.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reduceToClassName: function() { return /* binding */ reduceToClassName; },
/* harmony export */   reduceToClassNameForSlots: function() { return /* binding */ reduceToClassNameForSlots; }
/* harmony export */ });
/* harmony import */ var _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.esm.js */ "./node_modules/@griffel/core/constants.esm.js");
/* harmony import */ var _utils_hashSequence_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/hashSequence.esm.js */ "./node_modules/@griffel/core/runtime/utils/hashSequence.esm.js");



/**
 * Reduces a classname map for slot to a classname string. Uses classnames according to text directions.
 *
 * @private
 */
function reduceToClassName(classMap, dir) {
  // - `classString` is a string of classnames separated by a space, used to output classes
  // - `hashString` is a string of classnames separated by a space, used to generate a hash
  //
  // `hashString` is needed to handle `null` values in a class map as they don't produce any classes.
  let classString = '';
  let hashString = '';
  // eslint-disable-next-line guard-for-in
  for (const propertyHash in classMap) {
    const classNameMapping = classMap[propertyHash];
    if (classNameMapping === 0) {
      hashString += propertyHash + ' ';
      continue;
    }
    const hasRTLClassName = Array.isArray(classNameMapping);
    const className = dir === 'rtl' ? (hasRTLClassName ? classNameMapping[1] : classNameMapping) + ' ' : (hasRTLClassName ? classNameMapping[0] : classNameMapping) + ' ';
    classString += className;
    hashString += className;
  }
  return [classString.slice(0, -1), hashString.slice(0, -1)];
}
/**
 * Reduces classname maps for slots to classname strings. Registers them in a definition cache to be used by
 * `mergeClasses()`.
 *
 * @internal
 */
function reduceToClassNameForSlots(classesMapBySlot, dir) {
  const classNamesForSlots = {};
  // eslint-disable-next-line guard-for-in
  for (const slotName in classesMapBySlot) {
    const [slotClasses, slotClassesHash] = reduceToClassName(classesMapBySlot[slotName], dir);
    // Handles a case when there are no classes in a set i.e. "makeStyles({ root: {} })"
    if (slotClassesHash === '') {
      classNamesForSlots[slotName] = '';
      continue;
    }
    const sequenceHash = (0,_utils_hashSequence_esm_js__WEBPACK_IMPORTED_MODULE_1__.hashSequence)(slotClassesHash, dir);
    const resultSlotClasses = sequenceHash + (slotClasses === '' ? '' : ' ' + slotClasses);
    _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.DEFINITION_LOOKUP_TABLE[sequenceHash] = [classesMapBySlot[slotName], dir];
    classNamesForSlots[slotName] = resultSlotClasses;
  }
  return classNamesForSlots;
}


//# sourceMappingURL=reduceToClassNameForSlots.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/resolveStyleRules.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/resolveStyleRules.esm.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveStyleRules: function() { return /* binding */ resolveStyleRules; }
/* harmony export */ });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/emotion-hash.esm.js");
/* harmony import */ var rtl_css_js_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rtl-css-js/core */ "./node_modules/rtl-css-js/dist/esm/core.js");
/* harmony import */ var _constants_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.esm.js */ "./node_modules/@griffel/core/constants.esm.js");
/* harmony import */ var _compileAtomicCSSRule_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compileAtomicCSSRule.esm.js */ "./node_modules/@griffel/core/runtime/compileAtomicCSSRule.esm.js");
/* harmony import */ var _compileKeyframeCSS_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compileKeyframeCSS.esm.js */ "./node_modules/@griffel/core/runtime/compileKeyframeCSS.esm.js");
/* harmony import */ var _shorthands_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shorthands.esm.js */ "./node_modules/@griffel/core/runtime/shorthands.esm.js");
/* harmony import */ var _utils_generateCombinedMediaQuery_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/generateCombinedMediaQuery.esm.js */ "./node_modules/@griffel/core/runtime/utils/generateCombinedMediaQuery.esm.js");
/* harmony import */ var _utils_isMediaQuerySelector_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/isMediaQuerySelector.esm.js */ "./node_modules/@griffel/core/runtime/utils/isMediaQuerySelector.esm.js");
/* harmony import */ var _utils_isLayerSelector_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/isLayerSelector.esm.js */ "./node_modules/@griffel/core/runtime/utils/isLayerSelector.esm.js");
/* harmony import */ var _utils_isNestedSelector_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/isNestedSelector.esm.js */ "./node_modules/@griffel/core/runtime/utils/isNestedSelector.esm.js");
/* harmony import */ var _utils_isSupportQuerySelector_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/isSupportQuerySelector.esm.js */ "./node_modules/@griffel/core/runtime/utils/isSupportQuerySelector.esm.js");
/* harmony import */ var _utils_isContainerQuerySelector_esm_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/isContainerQuerySelector.esm.js */ "./node_modules/@griffel/core/runtime/utils/isContainerQuerySelector.esm.js");
/* harmony import */ var _utils_normalizeNestedProperty_esm_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/normalizeNestedProperty.esm.js */ "./node_modules/@griffel/core/runtime/utils/normalizeNestedProperty.esm.js");
/* harmony import */ var _utils_isObject_esm_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/isObject.esm.js */ "./node_modules/@griffel/core/runtime/utils/isObject.esm.js");
/* harmony import */ var _getStyleBucketName_esm_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./getStyleBucketName.esm.js */ "./node_modules/@griffel/core/runtime/getStyleBucketName.esm.js");
/* harmony import */ var _utils_hashClassName_esm_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/hashClassName.esm.js */ "./node_modules/@griffel/core/runtime/utils/hashClassName.esm.js");
/* harmony import */ var _utils_hashPropertyKey_esm_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/hashPropertyKey.esm.js */ "./node_modules/@griffel/core/runtime/utils/hashPropertyKey.esm.js");
/* harmony import */ var _utils_isResetValue_esm_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/isResetValue.esm.js */ "./node_modules/@griffel/core/runtime/utils/isResetValue.esm.js");
/* harmony import */ var _utils_trimSelector_esm_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/trimSelector.esm.js */ "./node_modules/@griffel/core/runtime/utils/trimSelector.esm.js");
/* harmony import */ var _warnings_warnAboutUnresolvedRule_esm_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./warnings/warnAboutUnresolvedRule.esm.js */ "./node_modules/@griffel/core/runtime/warnings/warnAboutUnresolvedRule.esm.js");
/* harmony import */ var _warnings_warnAboutUnsupportedProperties_esm_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./warnings/warnAboutUnsupportedProperties.esm.js */ "./node_modules/@griffel/core/runtime/warnings/warnAboutUnsupportedProperties.esm.js");






















function getShorthandDefinition(property) {
  return _shorthands_esm_js__WEBPACK_IMPORTED_MODULE_5__.shorthands[property];
}
function computePropertyPriority(shorthand) {
  var _a;
  return (_a = shorthand === null || shorthand === void 0 ? void 0 : shorthand[0]) !== null && _a !== void 0 ? _a : 0;
}
function pushToClassesMap(classesMap, propertyKey, ltrClassname, rtlClassname) {
  classesMap[propertyKey] = rtlClassname ? [ltrClassname, rtlClassname] : ltrClassname;
}
function createBucketEntry(cssRule, metadata) {
  if (metadata.length > 0) {
    return [cssRule, Object.fromEntries(metadata)];
  }
  return cssRule;
}
function pushToCSSRules(cssRulesByBucket, styleBucketName, ltrCSS, rtlCSS, media, priority) {
  var _a;
  const metadata = [];
  if (priority !== 0) {
    metadata.push(['p', priority]);
  }
  if (styleBucketName === 'm' && media) {
    metadata.push(['m', media]);
  }
  (_a = cssRulesByBucket[styleBucketName]) !== null && _a !== void 0 ? _a : cssRulesByBucket[styleBucketName] = [];
  if (ltrCSS) {
    cssRulesByBucket[styleBucketName].push(createBucketEntry(ltrCSS, metadata));
  }
  if (rtlCSS) {
    cssRulesByBucket[styleBucketName].push(createBucketEntry(rtlCSS, metadata));
  }
}
/**
 * Transforms input styles to classes maps & CSS rules.
 *
 * @internal
 */
function resolveStyleRules(styles, classNameHashSalt = '', selectors = [], atRules = {
  container: '',
  layer: '',
  media: '',
  supports: ''
}, cssClassesMap = {}, cssRulesByBucket = {}, rtlValue) {
  // eslint-disable-next-line guard-for-in
  for (const property in styles) {
    // eslint-disable-next-line no-prototype-builtins
    if (_constants_esm_js__WEBPACK_IMPORTED_MODULE_2__.UNSUPPORTED_CSS_PROPERTIES.hasOwnProperty(property)) {
      (0,_warnings_warnAboutUnsupportedProperties_esm_js__WEBPACK_IMPORTED_MODULE_20__.warnAboutUnsupportedProperties)(property, styles[property]);
      continue;
    }
    const value = styles[property];
    // eslint-disable-next-line eqeqeq
    if (value == null) {
      continue;
    }
    if ((0,_utils_isResetValue_esm_js__WEBPACK_IMPORTED_MODULE_17__.isResetValue)(value)) {
      const selector = (0,_utils_trimSelector_esm_js__WEBPACK_IMPORTED_MODULE_18__.trimSelector)(selectors.join(''));
      // uniq key based on a hash of property & selector, used for merging later
      const key = (0,_utils_hashPropertyKey_esm_js__WEBPACK_IMPORTED_MODULE_16__.hashPropertyKey)(selector, property, atRules);
      pushToClassesMap(cssClassesMap, key, 0, undefined);
      continue;
    }
    if (typeof value === 'string' || typeof value === 'number') {
      const selector = (0,_utils_trimSelector_esm_js__WEBPACK_IMPORTED_MODULE_18__.trimSelector)(selectors.join(''));
      const shorthand = getShorthandDefinition(property);
      if (shorthand) {
        const shorthandProperties = shorthand[1];
        const shorthandResetStyles = Object.fromEntries(shorthandProperties.map(property => [property, _constants_esm_js__WEBPACK_IMPORTED_MODULE_2__.RESET]));
        resolveStyleRules(shorthandResetStyles, classNameHashSalt, selectors, atRules, cssClassesMap, cssRulesByBucket);
      }
      // uniq key based on a hash of property & selector, used for merging later
      const key = (0,_utils_hashPropertyKey_esm_js__WEBPACK_IMPORTED_MODULE_16__.hashPropertyKey)(selector, property, atRules);
      const className = (0,_utils_hashClassName_esm_js__WEBPACK_IMPORTED_MODULE_15__.hashClassName)({
        value: value.toString(),
        salt: classNameHashSalt,
        selector,
        property
      }, atRules);
      const rtlDefinition = rtlValue && {
        key: property,
        value: rtlValue
      } || (0,rtl_css_js_core__WEBPACK_IMPORTED_MODULE_1__.convertProperty)(property, value);
      const flippedInRtl = rtlDefinition.key !== property || rtlDefinition.value !== value;
      const rtlClassName = flippedInRtl ? (0,_utils_hashClassName_esm_js__WEBPACK_IMPORTED_MODULE_15__.hashClassName)({
        value: rtlDefinition.value.toString(),
        property: rtlDefinition.key,
        salt: classNameHashSalt,
        selector
      }, atRules) : undefined;
      const rtlCompileOptions = flippedInRtl ? {
        rtlClassName,
        rtlProperty: rtlDefinition.key,
        rtlValue: rtlDefinition.value
      } : undefined;
      const styleBucketName = (0,_getStyleBucketName_esm_js__WEBPACK_IMPORTED_MODULE_14__.getStyleBucketName)(selectors, atRules);
      const [ltrCSS, rtlCSS] = (0,_compileAtomicCSSRule_esm_js__WEBPACK_IMPORTED_MODULE_3__.compileAtomicCSSRule)(Object.assign({
        className,
        selectors,
        property,
        value
      }, rtlCompileOptions), atRules);
      pushToClassesMap(cssClassesMap, key, className, rtlClassName);
      pushToCSSRules(cssRulesByBucket, styleBucketName, ltrCSS, rtlCSS, atRules.media, computePropertyPriority(shorthand));
    } else if (property === 'animationName') {
      const animationNameValue = Array.isArray(value) ? value : [value];
      const animationNames = [];
      const rtlAnimationNames = [];
      for (const keyframeObject of animationNameValue) {
        const keyframeCSS = (0,_compileKeyframeCSS_esm_js__WEBPACK_IMPORTED_MODULE_4__.compileKeyframeRule)(keyframeObject);
        const rtlKeyframeCSS = (0,_compileKeyframeCSS_esm_js__WEBPACK_IMPORTED_MODULE_4__.compileKeyframeRule)((0,rtl_css_js_core__WEBPACK_IMPORTED_MODULE_1__.convert)(keyframeObject));
        const animationName = _constants_esm_js__WEBPACK_IMPORTED_MODULE_2__.HASH_PREFIX + (0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(keyframeCSS);
        let rtlAnimationName;
        const keyframeRules = (0,_compileKeyframeCSS_esm_js__WEBPACK_IMPORTED_MODULE_4__.compileKeyframesCSS)(animationName, keyframeCSS);
        let rtlKeyframeRules = [];
        if (keyframeCSS === rtlKeyframeCSS) {
          // If CSS for LTR & RTL are same we will re-use animationName from LTR to avoid duplication of rules in output
          rtlAnimationName = animationName;
        } else {
          rtlAnimationName = _constants_esm_js__WEBPACK_IMPORTED_MODULE_2__.HASH_PREFIX + (0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(rtlKeyframeCSS);
          rtlKeyframeRules = (0,_compileKeyframeCSS_esm_js__WEBPACK_IMPORTED_MODULE_4__.compileKeyframesCSS)(rtlAnimationName, rtlKeyframeCSS);
        }
        for (let i = 0; i < keyframeRules.length; i++) {
          pushToCSSRules(cssRulesByBucket,
          // keyframes styles should be inserted into own bucket
          'k', keyframeRules[i], rtlKeyframeRules[i], atRules.media,
          // keyframes always have default priority
          0);
        }
        animationNames.push(animationName);
        rtlAnimationNames.push(rtlAnimationName);
      }
      resolveStyleRules({
        animationName: animationNames.join(', ')
      }, classNameHashSalt, selectors, atRules, cssClassesMap, cssRulesByBucket, rtlAnimationNames.join(', '));
    } else if (Array.isArray(value)) {
      // not animationName property but array in the value => fallback values
      if (value.length === 0) {
        if (true) {
          console.warn(`makeStyles(): An empty array was passed as input to "${property}", the property will be omitted in the styles.`);
        }
        continue;
      }
      const selector = (0,_utils_trimSelector_esm_js__WEBPACK_IMPORTED_MODULE_18__.trimSelector)(selectors.join(''));
      const shorthand = getShorthandDefinition(property);
      if (shorthand) {
        const shorthandProperties = shorthand[1];
        const shorthandResetStyles = Object.fromEntries(shorthandProperties.map(property => [property, _constants_esm_js__WEBPACK_IMPORTED_MODULE_2__.RESET]));
        resolveStyleRules(shorthandResetStyles, classNameHashSalt, selectors, atRules, cssClassesMap, cssRulesByBucket);
      }
      const key = (0,_utils_hashPropertyKey_esm_js__WEBPACK_IMPORTED_MODULE_16__.hashPropertyKey)(selector, property, atRules);
      const className = (0,_utils_hashClassName_esm_js__WEBPACK_IMPORTED_MODULE_15__.hashClassName)({
        value: value.map(v => (v !== null && v !== void 0 ? v : '').toString()).join(';'),
        salt: classNameHashSalt,
        selector,
        property
      }, atRules);
      const rtlDefinitions = value.map(v => (0,rtl_css_js_core__WEBPACK_IMPORTED_MODULE_1__.convertProperty)(property, v));
      const rtlPropertyConsistent = !rtlDefinitions.some(v => v.key !== rtlDefinitions[0].key);
      if (!rtlPropertyConsistent) {
        if (true) {
          console.error('makeStyles(): mixing CSS fallback values which result in multiple CSS properties in RTL is not supported.');
        }
        continue;
      }
      const flippedInRtl = rtlDefinitions[0].key !== property || rtlDefinitions.some((v, i) => v.value !== value[i]);
      const rtlClassName = flippedInRtl ? (0,_utils_hashClassName_esm_js__WEBPACK_IMPORTED_MODULE_15__.hashClassName)({
        value: rtlDefinitions.map(v => {
          var _a;
          return ((_a = v === null || v === void 0 ? void 0 : v.value) !== null && _a !== void 0 ? _a : '').toString();
        }).join(';'),
        salt: classNameHashSalt,
        property: rtlDefinitions[0].key,
        selector
      }, atRules) : undefined;
      const rtlCompileOptions = flippedInRtl ? {
        rtlClassName,
        rtlProperty: rtlDefinitions[0].key,
        rtlValue: rtlDefinitions.map(d => d.value)
      } : undefined;
      const styleBucketName = (0,_getStyleBucketName_esm_js__WEBPACK_IMPORTED_MODULE_14__.getStyleBucketName)(selectors, atRules);
      const [ltrCSS, rtlCSS] = (0,_compileAtomicCSSRule_esm_js__WEBPACK_IMPORTED_MODULE_3__.compileAtomicCSSRule)(Object.assign({
        className,
        selectors,
        property,
        value: value
      }, rtlCompileOptions), atRules);
      pushToClassesMap(cssClassesMap, key, className, rtlClassName);
      pushToCSSRules(cssRulesByBucket, styleBucketName, ltrCSS, rtlCSS, atRules.media, computePropertyPriority(shorthand));
    } else if ((0,_utils_isObject_esm_js__WEBPACK_IMPORTED_MODULE_13__.isObject)(value)) {
      if ((0,_utils_isNestedSelector_esm_js__WEBPACK_IMPORTED_MODULE_9__.isNestedSelector)(property)) {
        resolveStyleRules(value, classNameHashSalt, selectors.concat((0,_utils_normalizeNestedProperty_esm_js__WEBPACK_IMPORTED_MODULE_12__.normalizeNestedProperty)(property)), atRules, cssClassesMap, cssRulesByBucket);
      } else if ((0,_utils_isMediaQuerySelector_esm_js__WEBPACK_IMPORTED_MODULE_7__.isMediaQuerySelector)(property)) {
        const combinedMediaQuery = (0,_utils_generateCombinedMediaQuery_esm_js__WEBPACK_IMPORTED_MODULE_6__.generateCombinedQuery)(atRules.media, property.slice(6).trim());
        resolveStyleRules(value, classNameHashSalt, selectors, Object.assign({}, atRules, {
          media: combinedMediaQuery
        }), cssClassesMap, cssRulesByBucket);
      } else if ((0,_utils_isLayerSelector_esm_js__WEBPACK_IMPORTED_MODULE_8__.isLayerSelector)(property)) {
        const combinedLayerQuery = (atRules.layer ? `${atRules.layer}.` : '') + property.slice(6).trim();
        resolveStyleRules(value, classNameHashSalt, selectors, Object.assign({}, atRules, {
          layer: combinedLayerQuery
        }), cssClassesMap, cssRulesByBucket);
      } else if ((0,_utils_isSupportQuerySelector_esm_js__WEBPACK_IMPORTED_MODULE_10__.isSupportQuerySelector)(property)) {
        const combinedSupportQuery = (0,_utils_generateCombinedMediaQuery_esm_js__WEBPACK_IMPORTED_MODULE_6__.generateCombinedQuery)(atRules.supports, property.slice(9).trim());
        resolveStyleRules(value, classNameHashSalt, selectors, Object.assign({}, atRules, {
          supports: combinedSupportQuery
        }), cssClassesMap, cssRulesByBucket);
      } else if ((0,_utils_isContainerQuerySelector_esm_js__WEBPACK_IMPORTED_MODULE_11__.isContainerQuerySelector)(property)) {
        // TODO implement nested container queries if needed
        // The only way to target multiple containers is to nest container queries
        // https://developer.mozilla.org/en-US/docs/Web/CSS/@container#nested_container_queries
        const containerQuery = property.slice(10).trim();
        resolveStyleRules(value, classNameHashSalt, selectors, Object.assign({}, atRules, {
          container: containerQuery
        }), cssClassesMap, cssRulesByBucket);
      } else {
        (0,_warnings_warnAboutUnresolvedRule_esm_js__WEBPACK_IMPORTED_MODULE_19__.warnAboutUnresolvedRule)(property, value);
      }
    }
  }
  return [cssClassesMap, cssRulesByBucket];
}


//# sourceMappingURL=resolveStyleRules.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/shorthands.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/shorthands.esm.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shorthands: function() { return /* binding */ shorthands; }
/* harmony export */ });
const shorthands = {
  animation: [-1, ['animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimeline', 'animationTimingFunction']],
  animationRange: [-1, ['animationRangeEnd', 'animationRangeStart']],
  background: [-2, ['backgroundAttachment', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundSize']],
  backgroundPosition: [-1, ['backgroundPositionX', 'backgroundPositionY']],
  border: [-2, ['borderBottom', 'borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderTop', 'borderTopColor', 'borderTopStyle', 'borderTopWidth']],
  borderBottom: [-1, ['borderBottomColor', 'borderBottomStyle', 'borderBottomWidth']],
  borderImage: [-1, ['borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth']],
  borderLeft: [-1, ['borderLeftColor', 'borderLeftStyle', 'borderLeftWidth']],
  borderRadius: [-1, ['borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius']],
  borderRight: [-1, ['borderRightColor', 'borderRightStyle', 'borderRightWidth']],
  borderTop: [-1, ['borderTopColor', 'borderTopStyle', 'borderTopWidth']],
  caret: [-1, ['caretColor', 'caretShape']],
  columnRule: [-1, ['columnRuleColor', 'columnRuleStyle', 'columnRuleWidth']],
  columns: [-1, ['columnCount', 'columnWidth']],
  containIntrinsicSize: [-1, ['containIntrinsicHeight', 'containIntrinsicWidth']],
  container: [-1, ['containerName', 'containerType']],
  flex: [-1, ['flexBasis', 'flexGrow', 'flexShrink']],
  flexFlow: [-1, ['flexDirection', 'flexWrap']],
  font: [-1, ['fontFamily', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontWeight', 'lineHeight']],
  gap: [-1, ['columnGap', 'rowGap']],
  grid: [-1, ['columnGap', 'gridAutoColumns', 'gridAutoFlow', 'gridAutoRows', 'gridColumnGap', 'gridRowGap', 'gridTemplateAreas', 'gridTemplateColumns', 'gridTemplateRows', 'rowGap']],
  gridArea: [-1, ['gridColumnEnd', 'gridColumnStart', 'gridRowEnd', 'gridRowStart']],
  gridColumn: [-1, ['gridColumnEnd', 'gridColumnStart']],
  gridRow: [-1, ['gridRowEnd', 'gridRowStart']],
  gridTemplate: [-1, ['gridTemplateAreas', 'gridTemplateColumns', 'gridTemplateRows']],
  inset: [-1, ['bottom', 'left', 'right', 'top']],
  insetBlock: [-1, ['insetBlockEnd', 'insetBlockStart']],
  insetInline: [-1, ['insetInlineEnd', 'insetInlineStart']],
  listStyle: [-1, ['listStyleImage', 'listStylePosition', 'listStyleType']],
  margin: [-1, ['marginBottom', 'marginLeft', 'marginRight', 'marginTop']],
  marginBlock: [-1, ['marginBlockEnd', 'marginBlockStart']],
  marginInline: [-1, ['marginInlineEnd', 'marginInlineStart']],
  mask: [-1, ['maskClip', 'maskComposite', 'maskImage', 'maskMode', 'maskOrigin', 'maskPosition', 'maskRepeat', 'maskSize']],
  maskBorder: [-1, ['maskBorderMode', 'maskBorderOutset', 'maskBorderRepeat', 'maskBorderSlice', 'maskBorderSource', 'maskBorderWidth']],
  offset: [-1, ['offsetAnchor', 'offsetDistance', 'offsetPath', 'offsetPosition', 'offsetRotate']],
  outline: [-1, ['outlineColor', 'outlineStyle', 'outlineWidth']],
  overflow: [-1, ['overflowX', 'overflowY']],
  overscrollBehavior: [-1, ['overscrollBehaviorX', 'overscrollBehaviorY']],
  padding: [-1, ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop']],
  paddingBlock: [-1, ['paddingBlockEnd', 'paddingBlockStart']],
  paddingInline: [-1, ['paddingInlineEnd', 'paddingInlineStart']],
  placeContent: [-1, ['alignContent', 'justifyContent']],
  placeItems: [-1, ['alignItems', 'justifyItems']],
  placeSelf: [-1, ['alignSelf', 'justifySelf']],
  scrollMargin: [-1, ['scrollMarginBottom', 'scrollMarginLeft', 'scrollMarginRight', 'scrollMarginTop']],
  scrollMarginBlock: [-1, ['scrollMarginBlockEnd', 'scrollMarginBlockStart']],
  scrollMarginInline: [-1, ['scrollMarginInlineEnd', 'scrollMarginInlineStart']],
  scrollPadding: [-1, ['scrollPaddingBottom', 'scrollPaddingLeft', 'scrollPaddingRight', 'scrollPaddingTop']],
  scrollPaddingBlock: [-1, ['scrollPaddingBlockEnd', 'scrollPaddingBlockStart']],
  scrollPaddingInline: [-1, ['scrollPaddingInlineEnd', 'scrollPaddingInlineStart']],
  scrollTimeline: [-1, ['scrollTimelineAxis', 'scrollTimelineName']],
  textDecoration: [-1, ['textDecorationColor', 'textDecorationLine', 'textDecorationStyle', 'textDecorationThickness']],
  textEmphasis: [-1, ['textEmphasisColor', 'textEmphasisStyle']],
  transition: [-1, ['transitionBehavior', 'transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction']],
  viewTimeline: [-1, ['viewTimelineAxis', 'viewTimelineName']]
};


//# sourceMappingURL=shorthands.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/stylis/globalPlugin.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/stylis/globalPlugin.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   globalPlugin: function() { return /* binding */ globalPlugin; }
/* harmony export */ });
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Tokenizer.js");


const globalPlugin = element => {
  switch (element.type) {
    case stylis__WEBPACK_IMPORTED_MODULE_0__.RULESET:
      if (typeof element.props === 'string') {
        if (true) {
          throw new Error(`"element.props" has type "string" (${JSON.stringify(element.props, null, 2)}), it's not expected. Please report a bug if it happens.`);
        }
        // removed by dead control flow

      }
      element.props = element.props.map(value => {
        // Avoids calling tokenize() on every string
        if (value.indexOf(':global(') === -1) {
          return value;
        }
        return (0,stylis__WEBPACK_IMPORTED_MODULE_1__.tokenize)(value).reduce((acc, value, index, children) => {
          if (value === '') {
            return acc;
          }
          if (value === ':' && children[index + 1] === 'global') {
            const selector =
            // An inner part of ":global()"
            children[index + 2].slice(1, -1) +
            // A separator between selectors i.e. "body .class"
            ' ';
            acc.unshift(selector);
            children[index + 1] = '';
            children[index + 2] = '';
            return acc;
          }
          acc.push(value);
          return acc;
        }, []).join('');
      });
  }
};


//# sourceMappingURL=globalPlugin.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/stylis/isAtRuleElement.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/stylis/isAtRuleElement.esm.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAtRuleElement: function() { return /* binding */ isAtRuleElement; }
/* harmony export */ });
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Enum.js");


function isAtRuleElement(element) {
  switch (element.type) {
    case '@container':
    case stylis__WEBPACK_IMPORTED_MODULE_0__.MEDIA:
    case stylis__WEBPACK_IMPORTED_MODULE_0__.SUPPORTS:
    case stylis__WEBPACK_IMPORTED_MODULE_0__.LAYER:
      return true;
  }
  return false;
}


//# sourceMappingURL=isAtRuleElement.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/stylis/prefixerPlugin.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/stylis/prefixerPlugin.esm.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefix: function() { return /* binding */ prefix; },
/* harmony export */   prefixerPlugin: function() { return /* binding */ prefixerPlugin; }
/* harmony export */ });
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Serializer.js");


/* eslint-disable no-fallthrough */
function prefix(value, length, children) {
  switch ((0,stylis__WEBPACK_IMPORTED_MODULE_1__.hash)(value, length)) {
    // color-adjust
    case 5103:
      return stylis__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + 'print-' + value + value;
    // backface-visibility, column, box-decoration-break
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
      return stylis__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + value;
    // backdrop-filter, background-clip: text
    case 4215:
      // Additional check on "backdrop-(f)ilter" to prevent conflict with "background-clip"
      // https://github.com/thysultan/stylis/issues/292
      if ((0,stylis__WEBPACK_IMPORTED_MODULE_1__.charat)(value, 9) === 102) {
        return stylis__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + value;
      }
      // background-clip: text
      if ((0,stylis__WEBPACK_IMPORTED_MODULE_1__.charat)(value, length + 1) === 116) {
        return stylis__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + value;
      }
      break;
    // tab-size
    case 4789:
      return stylis__WEBPACK_IMPORTED_MODULE_0__.MOZ + value + value;
    // appearance, user-select, hyphens
    case 5349:
    case 4246:
    case 6968:
      return stylis__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_0__.MOZ + value + value;
    // cursor
    // @ts-expect-error fall through is intentional here
    case 6187:
      if (!(0,stylis__WEBPACK_IMPORTED_MODULE_1__.match)(value, /grab/)) {
        return (0,stylis__WEBPACK_IMPORTED_MODULE_1__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_1__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /(zoom-|grab)/, stylis__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + '$1'), /(image-set)/, stylis__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + '$1'), value, '') + value;
      }
    // background, background-image
    case 5495:
    case 3959:
      // eslint-disable-next-line no-useless-concat
      return (0,stylis__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /(image-set\([^]*)/, stylis__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + '$1' + '$`$1');
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /(.+)-inline(.+)/, stylis__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch fill-available
      if ((0,stylis__WEBPACK_IMPORTED_MODULE_1__.strlen)(value) - 1 - length > 6) switch ((0,stylis__WEBPACK_IMPORTED_MODULE_1__.charat)(value, length + 1)) {
        // (f)ill-available
        // @ts-expect-error fall through is intentional here
        case 102:
          if ((0,stylis__WEBPACK_IMPORTED_MODULE_1__.charat)(value, length + 3) === 108) {
            return (0,stylis__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /(.+:)(.+)-([^]+)/,
            // eslint-disable-next-line no-useless-concat, eqeqeq
            '$1' + stylis__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + '$2-$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_0__.MOZ + ((0,stylis__WEBPACK_IMPORTED_MODULE_1__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
          }
        // (s)tretch
        case 115:
          return ~(0,stylis__WEBPACK_IMPORTED_MODULE_1__.indexof)(value, 'stretch') ? prefix((0,stylis__WEBPACK_IMPORTED_MODULE_1__.replace)(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
  }
  return value;
}
/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixerPlugin(element, index, children, callback) {
  if (element.length > -1) if (!element.return) switch (element.type) {
    case stylis__WEBPACK_IMPORTED_MODULE_0__.DECLARATION:
      element.return = prefix(element.value, element.length);
      return;
    case stylis__WEBPACK_IMPORTED_MODULE_0__.RULESET:
      if (element.length)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return (0,stylis__WEBPACK_IMPORTED_MODULE_1__.combine)(element.props, function (value) {
          switch ((0,stylis__WEBPACK_IMPORTED_MODULE_1__.match)(value, /(::plac\w+|:read-\w+)/)) {
            // :read-(only|write)
            case ':read-only':
            case ':read-write':
              return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.serialize)(
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              [(0,stylis__WEBPACK_IMPORTED_MODULE_2__.copy)(element, {
                props: [(0,stylis__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /:(read-\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_0__.MOZ + '$1')]
              })], callback);
            // :placeholder
            case '::placeholder':
              return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.serialize)([
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              (0,stylis__WEBPACK_IMPORTED_MODULE_2__.copy)(element, {
                props: [(0,stylis__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /:(plac\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + 'input-$1')]
              }),
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              (0,stylis__WEBPACK_IMPORTED_MODULE_2__.copy)(element, {
                props: [(0,stylis__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /:(plac\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_0__.MOZ + '$1')]
              })], callback);
          }
          return '';
        });
  }
  return undefined;
}


//# sourceMappingURL=prefixerPlugin.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/stylis/sortClassesInAtRulesPlugin.esm.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/stylis/sortClassesInAtRulesPlugin.esm.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sortClassesInAtRulesPlugin: function() { return /* binding */ sortClassesInAtRulesPlugin; }
/* harmony export */ });
/* harmony import */ var _isAtRuleElement_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isAtRuleElement.esm.js */ "./node_modules/@griffel/core/runtime/stylis/isAtRuleElement.esm.js");


const sortClassesInAtRulesPlugin = element => {
  if ((0,_isAtRuleElement_esm_js__WEBPACK_IMPORTED_MODULE_0__.isAtRuleElement)(element) && Array.isArray(element.children)) {
    element.children.sort((a, b) => a.props[0] > b.props[0] ? 1 : -1);
  }
};


//# sourceMappingURL=sortClassesInAtRulesPlugin.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/utils/cssifyObject.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/utils/cssifyObject.esm.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssifyObject: function() { return /* binding */ cssifyObject; }
/* harmony export */ });
/* harmony import */ var _hyphenateProperty_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hyphenateProperty.esm.js */ "./node_modules/@griffel/core/runtime/utils/hyphenateProperty.esm.js");


function cssifyObject(style) {
  let css = '';
  // eslint-disable-next-line guard-for-in
  for (const property in style) {
    const value = style[property];
    if (typeof value === 'string' || typeof value === 'number') {
      css += (0,_hyphenateProperty_esm_js__WEBPACK_IMPORTED_MODULE_0__.hyphenateProperty)(property) + ':' + value + ';';
      continue;
    }
    if (Array.isArray(value)) {
      for (const arrValue of value) {
        css += (0,_hyphenateProperty_esm_js__WEBPACK_IMPORTED_MODULE_0__.hyphenateProperty)(property) + ':' + arrValue + ';';
      }
    }
  }
  return css;
}


//# sourceMappingURL=cssifyObject.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/utils/generateCombinedMediaQuery.esm.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/utils/generateCombinedMediaQuery.esm.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateCombinedQuery: function() { return /* binding */ generateCombinedQuery; }
/* harmony export */ });
function generateCombinedQuery(currentMediaQuery, nestedMediaQuery) {
  if (currentMediaQuery.length === 0) {
    return nestedMediaQuery;
  }
  return `${currentMediaQuery} and ${nestedMediaQuery}`;
}


//# sourceMappingURL=generateCombinedMediaQuery.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/utils/hashClassName.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/utils/hashClassName.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hashClassName: function() { return /* binding */ hashClassName; }
/* harmony export */ });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/emotion-hash.esm.js");
/* harmony import */ var _constants_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants.esm.js */ "./node_modules/@griffel/core/constants.esm.js");
/* harmony import */ var _hashPropertyKey_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hashPropertyKey.esm.js */ "./node_modules/@griffel/core/runtime/utils/hashPropertyKey.esm.js");




function hashClassName({
  property,
  selector,
  salt,
  value
}, atRules) {
  return _constants_esm_js__WEBPACK_IMPORTED_MODULE_1__.HASH_PREFIX + (0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(salt + selector + (0,_hashPropertyKey_esm_js__WEBPACK_IMPORTED_MODULE_2__.atRulesToString)(atRules) + property +
  // Trimming of value is required to generate consistent hashes
  value.trim());
}


//# sourceMappingURL=hashClassName.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/utils/hashPropertyKey.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/utils/hashPropertyKey.esm.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   atRulesToString: function() { return /* binding */ atRulesToString; },
/* harmony export */   hashPropertyKey: function() { return /* binding */ hashPropertyKey; }
/* harmony export */ });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/emotion-hash.esm.js");


function addAtRulePrefix(atRule, prefix) {
  return atRule ? prefix + atRule : atRule;
}
function atRulesToString(atRules) {
  return addAtRulePrefix(atRules.container, 'c') + addAtRulePrefix(atRules.media, 'm') + addAtRulePrefix(atRules.layer, 'l') + addAtRulePrefix(atRules.supports, 's');
}
function hashPropertyKey(selector, property, atRules) {
  // uniq key based on property & selector, used for merging later
  const computedKey = selector + atRulesToString(atRules) + property;
  // "key" can be really long as it includes selectors, we use hashes to reduce sizes of keys
  // ".foo :hover" => "abcd"
  const hashedKey = (0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(computedKey);
  // As these hashes are used as object keys in build output we should avoid having numbers as a first character to
  // avoid having quotes:
  // {
  //   "1abc": {}, // we don't want this
  //   Aabc: {}, // no quotes
  // }
  const firstCharCode = hashedKey.charCodeAt(0);
  const startsWithNumber = firstCharCode >= 48 && firstCharCode <= 57;
  if (startsWithNumber) {
    return String.fromCharCode(firstCharCode + 17) + hashedKey.slice(1);
  }
  return hashedKey;
}


//# sourceMappingURL=hashPropertyKey.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/utils/hashSequence.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/utils/hashSequence.esm.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hashSequence: function() { return /* binding */ hashSequence; }
/* harmony export */ });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/emotion-hash.esm.js");
/* harmony import */ var _constants_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants.esm.js */ "./node_modules/@griffel/core/constants.esm.js");



function padEndHash(value) {
  const hashLength = value.length;
  if (hashLength === _constants_esm_js__WEBPACK_IMPORTED_MODULE_1__.SEQUENCE_HASH_LENGTH) {
    return value;
  }
  for (let i = hashLength; i < _constants_esm_js__WEBPACK_IMPORTED_MODULE_1__.SEQUENCE_HASH_LENGTH; i++) {
    value += '0';
  }
  return value;
}
function hashSequence(classes, dir, sequenceIds = []) {
  if (false) // removed by dead control flow
{}
  return _constants_esm_js__WEBPACK_IMPORTED_MODULE_1__.SEQUENCE_PREFIX + padEndHash((0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(classes + dir)) + _constants_esm_js__WEBPACK_IMPORTED_MODULE_1__.DEBUG_SEQUENCE_SEPARATOR + padEndHash((0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(sequenceIds.join('')));
}


//# sourceMappingURL=hashSequence.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/utils/hyphenateProperty.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/utils/hyphenateProperty.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hyphenateProperty: function() { return /* binding */ hyphenateProperty; }
/* harmony export */ });
const uppercasePattern = /[A-Z]/g;
const msPattern = /^ms-/;
const cache = {};
function toHyphenLower(match) {
  return '-' + match.toLowerCase();
}
function hyphenateProperty(name) {
  if (Object.prototype.hasOwnProperty.call(cache, name)) {
    return cache[name];
  }
  if (name.substr(0, 2) === '--') {
    return name;
  }
  const hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? '-' + hName : hName;
}


//# sourceMappingURL=hyphenateProperty.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/utils/isContainerQuerySelector.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/utils/isContainerQuerySelector.esm.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isContainerQuerySelector: function() { return /* binding */ isContainerQuerySelector; }
/* harmony export */ });
function isContainerQuerySelector(property) {
  return property.substring(0, 10) === '@container';
}


//# sourceMappingURL=isContainerQuerySelector.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/utils/isLayerSelector.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/utils/isLayerSelector.esm.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLayerSelector: function() { return /* binding */ isLayerSelector; }
/* harmony export */ });
function isLayerSelector(property) {
  return property.substr(0, 6) === '@layer';
}


//# sourceMappingURL=isLayerSelector.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/utils/isMediaQuerySelector.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/utils/isMediaQuerySelector.esm.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMediaQuerySelector: function() { return /* binding */ isMediaQuerySelector; }
/* harmony export */ });
function isMediaQuerySelector(property) {
  return property.substr(0, 6) === '@media';
}


//# sourceMappingURL=isMediaQuerySelector.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/utils/isNestedSelector.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/utils/isNestedSelector.esm.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNestedSelector: function() { return /* binding */ isNestedSelector; }
/* harmony export */ });
const regex = /^(:|\[|>|&)/;
function isNestedSelector(property) {
  return regex.test(property);
}


//# sourceMappingURL=isNestedSelector.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/utils/isObject.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/utils/isObject.esm.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isObject: function() { return /* binding */ isObject; }
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
}


//# sourceMappingURL=isObject.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/utils/isResetValue.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/utils/isResetValue.esm.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isResetValue: function() { return /* binding */ isResetValue; }
/* harmony export */ });
/* harmony import */ var _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.esm.js */ "./node_modules/@griffel/core/constants.esm.js");


function isResetValue(value) {
  return value === _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__.RESET;
}


//# sourceMappingURL=isResetValue.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/utils/isSupportQuerySelector.esm.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/utils/isSupportQuerySelector.esm.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSupportQuerySelector: function() { return /* binding */ isSupportQuerySelector; }
/* harmony export */ });
function isSupportQuerySelector(property) {
  return property.substr(0, 9) === '@supports';
}


//# sourceMappingURL=isSupportQuerySelector.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/utils/normalizeCSSBucketEntry.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/utils/normalizeCSSBucketEntry.esm.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeCSSBucketEntry: function() { return /* binding */ normalizeCSSBucketEntry; }
/* harmony export */ });
/**
 * @internal
 *
 * @param entry - CSS bucket entry that can be either a string or an array
 * @returns An array where the first element is the CSS rule
 */
function normalizeCSSBucketEntry(entry) {
  if (!Array.isArray(entry)) {
    return [entry];
  }
  if ( true && entry.length > 2) {
    throw new Error('CSS Bucket contains an entry with greater than 2 items, please report this to https://github.com/microsoft/griffel/issues');
  }
  return entry;
}


//# sourceMappingURL=normalizeCSSBucketEntry.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/utils/normalizeNestedProperty.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/utils/normalizeNestedProperty.esm.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeNestedProperty: function() { return /* binding */ normalizeNestedProperty; }
/* harmony export */ });
function normalizeNestedProperty(nestedProperty) {
  if (nestedProperty.charAt(0) === '&') {
    return nestedProperty.slice(1);
  }
  return nestedProperty;
}


//# sourceMappingURL=normalizeNestedProperty.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/utils/trimSelector.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/utils/trimSelector.esm.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   trimSelector: function() { return /* binding */ trimSelector; }
/* harmony export */ });
/**
 * Trims selectors to generate consistent hashes.
 */
function trimSelector(selector) {
  return selector.replace(/>\s+/g, '>');
}


//# sourceMappingURL=trimSelector.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/warnings/logError.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/warnings/logError.esm.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logError: function() { return /* binding */ logError; }
/* harmony export */ });
function logError(...args) {
  if ( true && typeof document !== 'undefined') {
    console.error(...args);
  }
}


//# sourceMappingURL=logError.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/warnings/warnAboutUnresolvedRule.esm.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/warnings/warnAboutUnresolvedRule.esm.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   warnAboutUnresolvedRule: function() { return /* binding */ warnAboutUnresolvedRule; }
/* harmony export */ });
/* harmony import */ var _logError_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logError.esm.js */ "./node_modules/@griffel/core/runtime/warnings/logError.esm.js");


function warnAboutUnresolvedRule(property, value) {
  const message = /*#__PURE__*/(() => {
    const ruleText = JSON.stringify(value, null, 2);
    const message = ['@griffel/react: A rule was not resolved to CSS properly. ' + 'Please check your `makeStyles` or `makeResetStyles` calls for following:', ' '.repeat(2) + 'makeStyles({', ' '.repeat(4) + `[slot]: {`, ' '.repeat(6) + `"${property}": ${ruleText.split('\n').map((l, n) => ' '.repeat(n === 0 ? 0 : 6) + l).join('\n')}`, ' '.repeat(4) + '}', ' '.repeat(2) + `})`, ''];
    if (property.indexOf('&') === -1) {
      message.push(`It looks that you're are using a nested selector, but it is missing an ampersand placeholder where the generated class name should be injected.`);
      message.push(`Try to update a property to include it i.e "${property}" => "&${property}".`);
    } else {
      message.push('');
      message.push("If it's not obvious what triggers a problem, please report an issue at https://github.com/microsoft/griffel/issues");
    }
    return message.join('\n');
  })();
  (0,_logError_esm_js__WEBPACK_IMPORTED_MODULE_0__.logError)(message);
}


//# sourceMappingURL=warnAboutUnresolvedRule.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/core/runtime/warnings/warnAboutUnsupportedProperties.esm.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@griffel/core/runtime/warnings/warnAboutUnsupportedProperties.esm.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   warnAboutUnsupportedProperties: function() { return /* binding */ warnAboutUnsupportedProperties; }
/* harmony export */ });
/* harmony import */ var _logError_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logError.esm.js */ "./node_modules/@griffel/core/runtime/warnings/logError.esm.js");


function warnAboutUnsupportedProperties(property, value) {
  const message = /*#__PURE__*/(() => [`@griffel/react: You are using unsupported shorthand CSS property "${property}". ` + `Please check your "makeStyles" calls, there *should not* be following:`, ' '.repeat(2) + `makeStyles({`, ' '.repeat(4) + `[slot]: { ${property}: "${value}" }`, ' '.repeat(2) + `})`, '', 'Learn why CSS shorthands are not supported: https://aka.ms/griffel-css-shorthands'].join('\n'))();
  (0,_logError_esm_js__WEBPACK_IMPORTED_MODULE_0__.logError)(message);
}


//# sourceMappingURL=warnAboutUnsupportedProperties.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/react/RendererContext.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@griffel/react/RendererContext.esm.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RendererProvider: function() { return /* binding */ RendererProvider; },
/* harmony export */   useRenderer: function() { return /* binding */ useRenderer; }
/* harmony export */ });
/* harmony import */ var _griffel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @griffel/core */ "./node_modules/@griffel/core/renderer/createDOMRenderer.esm.js");
/* harmony import */ var _griffel_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @griffel/core */ "./node_modules/@griffel/core/renderer/rehydrateRendererCache.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_canUseDOM_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/canUseDOM.esm.js */ "./node_modules/@griffel/react/utils/canUseDOM.esm.js");




/**
 * @private
 */
const RendererContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createContext(/*#__PURE__*/(0,_griffel_core__WEBPACK_IMPORTED_MODULE_0__.createDOMRenderer)());
/**
 * @public
 */
const RendererProvider = ({
  children,
  renderer,
  targetDocument
}) => {
  react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => {
    if ((0,_utils_canUseDOM_esm_js__WEBPACK_IMPORTED_MODULE_3__.canUseDOM)()) {
      // "rehydrateCache()" can't be called in effects as it needs to be called before any component will be rendered to
      // avoid double insertion of classes
      (0,_griffel_core__WEBPACK_IMPORTED_MODULE_1__.rehydrateRendererCache)(renderer, targetDocument);
    }
  }, [renderer, targetDocument]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(RendererContext.Provider, {
    value: renderer
  }, children);
};
/**
 * Returns an instance of current makeStyles() renderer.
 *
 * @private Exported as "useRenderer_unstable" use it on own risk. Can be changed or removed without a notice.
 */
function useRenderer() {
  return react__WEBPACK_IMPORTED_MODULE_2__.useContext(RendererContext);
}


//# sourceMappingURL=RendererContext.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/react/TextDirectionContext.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@griffel/react/TextDirectionContext.esm.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextDirectionProvider: function() { return /* binding */ TextDirectionProvider; },
/* harmony export */   useTextDirection: function() { return /* binding */ useTextDirection; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @private
 */
const TextDirectionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext('ltr');
/**
 * @public
 */
const TextDirectionProvider = ({
  children,
  dir
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TextDirectionContext.Provider, {
    value: dir
  }, children);
};
/**
 * Returns current directionality of the element's text.
 *
 * @private
 */
function useTextDirection() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(TextDirectionContext);
}


//# sourceMappingURL=TextDirectionContext.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/react/__styles.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@griffel/react/__styles.esm.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __styles: function() { return /* binding */ __styles; }
/* harmony export */ });
/* harmony import */ var _griffel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @griffel/core */ "./node_modules/@griffel/core/__styles.esm.js");
/* harmony import */ var _insertionFactory_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insertionFactory.esm.js */ "./node_modules/@griffel/react/insertionFactory.esm.js");
/* harmony import */ var _RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RendererContext.esm.js */ "./node_modules/@griffel/react/RendererContext.esm.js");
/* harmony import */ var _TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextDirectionContext.esm.js */ "./node_modules/@griffel/react/TextDirectionContext.esm.js");





/**
 * A version of makeStyles() that accepts build output as an input and skips all runtime transforms.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function __styles(classesMapBySlot, cssRules) {
  const getStyles = (0,_griffel_core__WEBPACK_IMPORTED_MODULE_0__.__styles)(classesMapBySlot, cssRules, _insertionFactory_esm_js__WEBPACK_IMPORTED_MODULE_1__.insertionFactory);
  return function useClasses() {
    const dir = (0,_TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_3__.useTextDirection)();
    const renderer = (0,_RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__.useRenderer)();
    return getStyles({
      dir,
      renderer
    });
  };
}


//# sourceMappingURL=__styles.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/react/insertionFactory.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@griffel/react/insertionFactory.esm.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   insertionFactory: function() { return /* binding */ insertionFactory; }
/* harmony export */ });
/* harmony import */ var _utils_canUseDOM_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/canUseDOM.esm.js */ "./node_modules/@griffel/react/utils/canUseDOM.esm.js");
/* harmony import */ var _useInsertionEffect_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useInsertionEffect.esm.js */ "./node_modules/@griffel/react/useInsertionEffect.esm.js");



const insertionFactory = () => {
  const insertionCache = {};
  return function insert(renderer, cssRules) {
    // Even if `useInsertionEffect` is available, we can use it on a client only as it will not be executed in SSR
    if (_useInsertionEffect_esm_js__WEBPACK_IMPORTED_MODULE_1__.useInsertionEffect && (0,_utils_canUseDOM_esm_js__WEBPACK_IMPORTED_MODULE_0__.canUseDOM)()) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      (0,_useInsertionEffect_esm_js__WEBPACK_IMPORTED_MODULE_1__.useInsertionEffect)(() => {
        renderer.insertCSSRules(cssRules);
      }, [renderer, cssRules]);
      return;
    }
    if (insertionCache[renderer.id] === undefined) {
      renderer.insertCSSRules(cssRules);
      insertionCache[renderer.id] = true;
    }
  };
};


//# sourceMappingURL=insertionFactory.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/react/makeStyles.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@griffel/react/makeStyles.esm.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeStyles: function() { return /* binding */ makeStyles; }
/* harmony export */ });
/* harmony import */ var _griffel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @griffel/core */ "./node_modules/@griffel/core/makeStyles.esm.js");
/* harmony import */ var _insertionFactory_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insertionFactory.esm.js */ "./node_modules/@griffel/react/insertionFactory.esm.js");
/* harmony import */ var _RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RendererContext.esm.js */ "./node_modules/@griffel/react/RendererContext.esm.js");
/* harmony import */ var _TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextDirectionContext.esm.js */ "./node_modules/@griffel/react/TextDirectionContext.esm.js");
/* harmony import */ var _utils_isInsideComponent_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/isInsideComponent.esm.js */ "./node_modules/@griffel/react/utils/isInsideComponent.esm.js");






function makeStyles(stylesBySlots) {
  const getStyles = (0,_griffel_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(stylesBySlots, _insertionFactory_esm_js__WEBPACK_IMPORTED_MODULE_1__.insertionFactory);
  if (true) {
    if ((0,_utils_isInsideComponent_esm_js__WEBPACK_IMPORTED_MODULE_4__.isInsideComponent)()) {
      throw new Error(["makeStyles(): this function cannot be called in component's scope.", 'All makeStyles() calls should be top level i.e. in a root scope of a file.'].join(' '));
    }
  }
  return function useClasses() {
    const dir = (0,_TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_3__.useTextDirection)();
    const renderer = (0,_RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__.useRenderer)();
    return getStyles({
      dir,
      renderer
    });
  };
}


//# sourceMappingURL=makeStyles.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/react/useInsertionEffect.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@griffel/react/useInsertionEffect.esm.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInsertionEffect: function() { return /* binding */ useInsertionEffect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInsertionEffect =
// @ts-expect-error Hack to make sure that `useInsertionEffect` will not cause bundling issues in older React versions
// eslint-disable-next-line no-useless-concat
react__WEBPACK_IMPORTED_MODULE_0__['useInsertion' + 'Effect'] ? react__WEBPACK_IMPORTED_MODULE_0__['useInsertion' + 'Effect'] : undefined;


//# sourceMappingURL=useInsertionEffect.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/react/utils/canUseDOM.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@griffel/react/utils/canUseDOM.esm.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canUseDOM: function() { return /* binding */ canUseDOM; }
/* harmony export */ });
/**
 * Verifies if an application can use DOM.
 */
function canUseDOM() {
  return typeof window !== 'undefined' && !!(window.document && window.document.createElement);
}


//# sourceMappingURL=canUseDOM.esm.js.map


/***/ }),

/***/ "./node_modules/@griffel/react/utils/isInsideComponent.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/@griffel/react/utils/isInsideComponent.esm.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInsideComponent: function() { return /* binding */ isInsideComponent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function isInsideComponent() {
  // React 18 always logs errors if a dispatcher is not present:
  // https://github.com/facebook/react/blob/42f15b324f50d0fd98322c21646ac3013e30344a/packages/react/src/ReactHooks.js#L26-L36
  try {
    // @ts-expect-error "SECRET_INTERNALS" are not typed
    const dispatcher = react__WEBPACK_IMPORTED_MODULE_0__.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher.current;
    // Before any React component was rendered "dispatcher" will be "null"
    if (dispatcher === null || dispatcher === undefined) {
      return false;
    }
    // A check with hooks call (i.e. call "React.useContext()" outside a component) will always produce errors, but
    // a call on the dispatcher wont
    dispatcher.useContext({});
    return true;
  } catch (e) {
    return false;
  }
}


//# sourceMappingURL=isInsideComponent.esm.js.map


/***/ }),

/***/ "./node_modules/keyborg/dist/esm/index.js":
/*!************************************************!*\
  !*** ./node_modules/keyborg/dist/esm/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KEYBORG_FOCUSIN: function() { return /* binding */ KEYBORG_FOCUSIN; },
/* harmony export */   KEYBORG_FOCUSOUT: function() { return /* binding */ KEYBORG_FOCUSOUT; },
/* harmony export */   createKeyborg: function() { return /* binding */ createKeyborg; },
/* harmony export */   disposeKeyborg: function() { return /* binding */ disposeKeyborg; },
/* harmony export */   getLastFocusedProgrammatically: function() { return /* binding */ getLastFocusedProgrammatically; },
/* harmony export */   nativeFocus: function() { return /* binding */ nativeFocus; },
/* harmony export */   version: function() { return /* binding */ version; }
/* harmony export */ });
// src/WeakRefInstance.ts
var _canUseWeakRef = typeof WeakRef !== "undefined";
var WeakRefInstance = class {
  constructor(instance) {
    if (_canUseWeakRef && typeof instance === "object") {
      this._weakRef = new WeakRef(instance);
    } else {
      this._instance = instance;
    }
  }
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/deref}
   */
  deref() {
    var _a, _b;
    let instance;
    if (this._weakRef) {
      instance = (_a = this._weakRef) == null ? void 0 : _a.deref();
      if (!instance) {
        delete this._weakRef;
      }
    } else {
      instance = this._instance;
      if ((_b = instance == null ? void 0 : instance.isDisposed) == null ? void 0 : _b.call(instance)) {
        delete this._instance;
      }
    }
    return instance;
  }
};

// src/FocusEvent.ts
var KEYBORG_FOCUSIN = "keyborg:focusin";
var KEYBORG_FOCUSOUT = "keyborg:focusout";
function canOverrideNativeFocus(win) {
  const HTMLElement = win.HTMLElement;
  const origFocus = HTMLElement.prototype.focus;
  let isCustomFocusCalled = false;
  HTMLElement.prototype.focus = function focus() {
    isCustomFocusCalled = true;
  };
  const btn = win.document.createElement("button");
  btn.focus();
  HTMLElement.prototype.focus = origFocus;
  return isCustomFocusCalled;
}
var _canOverrideNativeFocus = false;
function nativeFocus(element) {
  const focus = element.focus;
  if (focus.__keyborgNativeFocus) {
    focus.__keyborgNativeFocus.call(element);
  } else {
    element.focus();
  }
}
function setupFocusEvent(win) {
  const kwin = win;
  if (!_canOverrideNativeFocus) {
    _canOverrideNativeFocus = canOverrideNativeFocus(kwin);
  }
  const origFocus = kwin.HTMLElement.prototype.focus;
  if (origFocus.__keyborgNativeFocus) {
    return;
  }
  kwin.HTMLElement.prototype.focus = focus;
  const shadowTargets = /* @__PURE__ */ new Set();
  const focusOutHandler = (e) => {
    const target = e.target;
    if (!target) {
      return;
    }
    const event = new CustomEvent(KEYBORG_FOCUSOUT, {
      cancelable: true,
      bubbles: true,
      // Allows the event to bubble past an open shadow root
      composed: true,
      detail: {
        originalEvent: e
      }
    });
    target.dispatchEvent(event);
  };
  const focusInHandler = (e) => {
    const target = e.target;
    if (!target) {
      return;
    }
    let node = e.composedPath()[0];
    const currentShadows = /* @__PURE__ */ new Set();
    while (node) {
      if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        currentShadows.add(node);
        node = node.host;
      } else {
        node = node.parentNode;
      }
    }
    for (const shadowRootWeakRef of shadowTargets) {
      const shadowRoot = shadowRootWeakRef.deref();
      if (!shadowRoot || !currentShadows.has(shadowRoot)) {
        shadowTargets.delete(shadowRootWeakRef);
        if (shadowRoot) {
          shadowRoot.removeEventListener("focusin", focusInHandler, true);
          shadowRoot.removeEventListener("focusout", focusOutHandler, true);
        }
      }
    }
    onFocusIn(target, e.relatedTarget || void 0);
  };
  const onFocusIn = (target, relatedTarget, originalEvent) => {
    var _a;
    const shadowRoot = target.shadowRoot;
    if (shadowRoot) {
      for (const shadowRootWeakRef of shadowTargets) {
        if (shadowRootWeakRef.deref() === shadowRoot) {
          return;
        }
      }
      shadowRoot.addEventListener("focusin", focusInHandler, true);
      shadowRoot.addEventListener("focusout", focusOutHandler, true);
      shadowTargets.add(new WeakRefInstance(shadowRoot));
      return;
    }
    const details = {
      relatedTarget,
      originalEvent
    };
    const event = new CustomEvent(KEYBORG_FOCUSIN, {
      cancelable: true,
      bubbles: true,
      // Allows the event to bubble past an open shadow root
      composed: true,
      detail: details
    });
    event.details = details;
    if (_canOverrideNativeFocus || data.lastFocusedProgrammatically) {
      details.isFocusedProgrammatically = target === ((_a = data.lastFocusedProgrammatically) == null ? void 0 : _a.deref());
      data.lastFocusedProgrammatically = void 0;
    }
    target.dispatchEvent(event);
  };
  const data = kwin.__keyborgData = {
    focusInHandler,
    focusOutHandler,
    shadowTargets
  };
  kwin.document.addEventListener(
    "focusin",
    kwin.__keyborgData.focusInHandler,
    true
  );
  kwin.document.addEventListener(
    "focusout",
    kwin.__keyborgData.focusOutHandler,
    true
  );
  function focus() {
    const keyborgNativeFocusEvent = kwin.__keyborgData;
    if (keyborgNativeFocusEvent) {
      keyborgNativeFocusEvent.lastFocusedProgrammatically = new WeakRefInstance(
        this
      );
    }
    return origFocus.apply(this, arguments);
  }
  let activeElement = kwin.document.activeElement;
  while (activeElement && activeElement.shadowRoot) {
    onFocusIn(activeElement);
    activeElement = activeElement.shadowRoot.activeElement;
  }
  focus.__keyborgNativeFocus = origFocus;
}
function disposeFocusEvent(win) {
  const kwin = win;
  const proto = kwin.HTMLElement.prototype;
  const origFocus = proto.focus.__keyborgNativeFocus;
  const keyborgNativeFocusEvent = kwin.__keyborgData;
  if (keyborgNativeFocusEvent) {
    kwin.document.removeEventListener(
      "focusin",
      keyborgNativeFocusEvent.focusInHandler,
      true
    );
    kwin.document.removeEventListener(
      "focusout",
      keyborgNativeFocusEvent.focusOutHandler,
      true
    );
    for (const shadowRootWeakRef of keyborgNativeFocusEvent.shadowTargets) {
      const shadowRoot = shadowRootWeakRef.deref();
      if (shadowRoot) {
        shadowRoot.removeEventListener(
          "focusin",
          keyborgNativeFocusEvent.focusInHandler,
          true
        );
        shadowRoot.removeEventListener(
          "focusout",
          keyborgNativeFocusEvent.focusOutHandler,
          true
        );
      }
    }
    keyborgNativeFocusEvent.shadowTargets.clear();
    delete kwin.__keyborgData;
  }
  if (origFocus) {
    proto.focus = origFocus;
  }
}
function getLastFocusedProgrammatically(win) {
  var _a;
  const keyborgNativeFocusEvent = win.__keyborgData;
  return keyborgNativeFocusEvent ? ((_a = keyborgNativeFocusEvent.lastFocusedProgrammatically) == null ? void 0 : _a.deref()) || null : void 0;
}

// src/Keyborg.ts
var _dismissTimeout = 500;
var _lastId = 0;
var KeyborgCore = class {
  constructor(win, props) {
    this._isNavigatingWithKeyboard_DO_NOT_USE = false;
    this._onFocusIn = (e) => {
      if (this._isMouseOrTouchUsedTimer) {
        return;
      }
      if (this.isNavigatingWithKeyboard) {
        return;
      }
      const details = e.detail;
      if (!details.relatedTarget) {
        return;
      }
      if (details.isFocusedProgrammatically || details.isFocusedProgrammatically === void 0) {
        return;
      }
      this.isNavigatingWithKeyboard = true;
    };
    this._onMouseDown = (e) => {
      if (e.buttons === 0 || e.clientX === 0 && e.clientY === 0 && e.screenX === 0 && e.screenY === 0) {
        return;
      }
      this._onMouseOrTouch();
    };
    this._onMouseOrTouch = () => {
      const win = this._win;
      if (win) {
        if (this._isMouseOrTouchUsedTimer) {
          win.clearTimeout(this._isMouseOrTouchUsedTimer);
        }
        this._isMouseOrTouchUsedTimer = win.setTimeout(() => {
          delete this._isMouseOrTouchUsedTimer;
        }, 1e3);
      }
      this.isNavigatingWithKeyboard = false;
    };
    this._onKeyDown = (e) => {
      const isNavigatingWithKeyboard = this.isNavigatingWithKeyboard;
      if (isNavigatingWithKeyboard) {
        if (this._shouldDismissKeyboardNavigation(e)) {
          this._scheduleDismiss();
        }
      } else {
        if (this._shouldTriggerKeyboardNavigation(e)) {
          this.isNavigatingWithKeyboard = true;
        }
      }
    };
    this.id = "c" + ++_lastId;
    this._win = win;
    const doc = win.document;
    if (props) {
      const triggerKeys = props.triggerKeys;
      const dismissKeys = props.dismissKeys;
      if (triggerKeys == null ? void 0 : triggerKeys.length) {
        this._triggerKeys = new Set(triggerKeys);
      }
      if (dismissKeys == null ? void 0 : dismissKeys.length) {
        this._dismissKeys = new Set(dismissKeys);
      }
    }
    doc.addEventListener(KEYBORG_FOCUSIN, this._onFocusIn, true);
    doc.addEventListener("mousedown", this._onMouseDown, true);
    win.addEventListener("keydown", this._onKeyDown, true);
    doc.addEventListener("touchstart", this._onMouseOrTouch, true);
    doc.addEventListener("touchend", this._onMouseOrTouch, true);
    doc.addEventListener("touchcancel", this._onMouseOrTouch, true);
    setupFocusEvent(win);
  }
  get isNavigatingWithKeyboard() {
    return this._isNavigatingWithKeyboard_DO_NOT_USE;
  }
  set isNavigatingWithKeyboard(val) {
    if (this._isNavigatingWithKeyboard_DO_NOT_USE !== val) {
      this._isNavigatingWithKeyboard_DO_NOT_USE = val;
      this.update();
    }
  }
  dispose() {
    const win = this._win;
    if (win) {
      if (this._isMouseOrTouchUsedTimer) {
        win.clearTimeout(this._isMouseOrTouchUsedTimer);
        this._isMouseOrTouchUsedTimer = void 0;
      }
      if (this._dismissTimer) {
        win.clearTimeout(this._dismissTimer);
        this._dismissTimer = void 0;
      }
      disposeFocusEvent(win);
      const doc = win.document;
      doc.removeEventListener(KEYBORG_FOCUSIN, this._onFocusIn, true);
      doc.removeEventListener("mousedown", this._onMouseDown, true);
      win.removeEventListener("keydown", this._onKeyDown, true);
      doc.removeEventListener("touchstart", this._onMouseOrTouch, true);
      doc.removeEventListener("touchend", this._onMouseOrTouch, true);
      doc.removeEventListener("touchcancel", this._onMouseOrTouch, true);
      delete this._win;
    }
  }
  isDisposed() {
    return !!this._win;
  }
  /**
   * Updates all keyborg instances with the keyboard navigation state
   */
  update() {
    var _a, _b;
    const keyborgs = (_b = (_a = this._win) == null ? void 0 : _a.__keyborg) == null ? void 0 : _b.refs;
    if (keyborgs) {
      for (const id of Object.keys(keyborgs)) {
        Keyborg.update(keyborgs[id], this.isNavigatingWithKeyboard);
      }
    }
  }
  /**
   * @returns whether the keyboard event should trigger keyboard navigation mode
   */
  _shouldTriggerKeyboardNavigation(e) {
    var _a;
    if (e.key === "Tab") {
      return true;
    }
    const activeElement = (_a = this._win) == null ? void 0 : _a.document.activeElement;
    const isTriggerKey = !this._triggerKeys || this._triggerKeys.has(e.keyCode);
    const isEditable = activeElement && (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA" || activeElement.isContentEditable);
    return isTriggerKey && !isEditable;
  }
  /**
   * @returns whether the keyboard event should dismiss keyboard navigation mode
   */
  _shouldDismissKeyboardNavigation(e) {
    var _a;
    return (_a = this._dismissKeys) == null ? void 0 : _a.has(e.keyCode);
  }
  _scheduleDismiss() {
    const win = this._win;
    if (win) {
      if (this._dismissTimer) {
        win.clearTimeout(this._dismissTimer);
        this._dismissTimer = void 0;
      }
      const was = win.document.activeElement;
      this._dismissTimer = win.setTimeout(() => {
        this._dismissTimer = void 0;
        const cur = win.document.activeElement;
        if (was && cur && was === cur) {
          this.isNavigatingWithKeyboard = false;
        }
      }, _dismissTimeout);
    }
  }
};
var Keyborg = class _Keyborg {
  constructor(win, props) {
    this._cb = [];
    this._id = "k" + ++_lastId;
    this._win = win;
    const current = win.__keyborg;
    if (current) {
      this._core = current.core;
      current.refs[this._id] = this;
    } else {
      this._core = new KeyborgCore(win, props);
      win.__keyborg = {
        core: this._core,
        refs: { [this._id]: this }
      };
    }
  }
  static create(win, props) {
    return new _Keyborg(win, props);
  }
  static dispose(instance) {
    instance.dispose();
  }
  /**
   * Updates all subscribed callbacks with the keyboard navigation state
   */
  static update(instance, isNavigatingWithKeyboard) {
    instance._cb.forEach((callback) => callback(isNavigatingWithKeyboard));
  }
  dispose() {
    var _a;
    const current = (_a = this._win) == null ? void 0 : _a.__keyborg;
    if (current == null ? void 0 : current.refs[this._id]) {
      delete current.refs[this._id];
      if (Object.keys(current.refs).length === 0) {
        current.core.dispose();
        delete this._win.__keyborg;
      }
    } else if (true) {
      console.error(
        `Keyborg instance ${this._id} is being disposed incorrectly.`
      );
    }
    this._cb = [];
    delete this._core;
    delete this._win;
  }
  /**
   * @returns Whether the user is navigating with keyboard
   */
  isNavigatingWithKeyboard() {
    var _a;
    return !!((_a = this._core) == null ? void 0 : _a.isNavigatingWithKeyboard);
  }
  /**
   * @param callback - Called when the keyboard navigation state changes
   */
  subscribe(callback) {
    this._cb.push(callback);
  }
  /**
   * @param callback - Registered with subscribe
   */
  unsubscribe(callback) {
    const index = this._cb.indexOf(callback);
    if (index >= 0) {
      this._cb.splice(index, 1);
    }
  }
  /**
   * Manually set the keyboard navigtion state
   */
  setVal(isNavigatingWithKeyboard) {
    if (this._core) {
      this._core.isNavigatingWithKeyboard = isNavigatingWithKeyboard;
    }
  }
};
function createKeyborg(win, props) {
  return Keyborg.create(win, props);
}
function disposeKeyborg(instance) {
  Keyborg.dispose(instance);
}

// src/index.ts
var version = "2.6.0";

/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var m = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
if (false) // removed by dead control flow
{} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (false) // removed by dead control flow
{} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

var didWarnAboutKeySpread = {};
function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    {
      if (hasOwnProperty.call(props, 'key')) {
        var componentName = getComponentNameFromType(type);
        var keys = Object.keys(props).filter(function (k) {
          return k !== 'key';
        });
        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

          didWarnAboutKeySpread[componentName + beforeExample] = true;
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (false) // removed by dead control flow
{} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/rtl-css-js/dist/esm/convert-9768a965.js":
/*!**************************************************************!*\
  !*** ./node_modules/rtl-css-js/dist/esm/convert-9768a965.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ propertiesToConvert; },
/* harmony export */   b: function() { return /* binding */ propsToIgnore; },
/* harmony export */   c: function() { return /* binding */ convert; },
/* harmony export */   d: function() { return /* binding */ convertProperty; },
/* harmony export */   e: function() { return /* binding */ getValueDoppelganger; },
/* harmony export */   f: function() { return /* binding */ arrayToObject; },
/* harmony export */   g: function() { return /* binding */ getPropertyDoppelganger; },
/* harmony export */   h: function() { return /* binding */ calculateNewBackgroundPosition; },
/* harmony export */   i: function() { return /* binding */ canConvertValue; },
/* harmony export */   j: function() { return /* binding */ flipTransformSign; },
/* harmony export */   k: function() { return /* binding */ flipSign; },
/* harmony export */   l: function() { return /* binding */ handleQuartetValues; },
/* harmony export */   m: function() { return /* binding */ includes; },
/* harmony export */   n: function() { return /* binding */ isBoolean; },
/* harmony export */   o: function() { return /* binding */ isFunction; },
/* harmony export */   p: function() { return /* binding */ propertyValueConverters; },
/* harmony export */   q: function() { return /* binding */ isNumber; },
/* harmony export */   r: function() { return /* binding */ isNullOrUndefined; },
/* harmony export */   s: function() { return /* binding */ isObject; },
/* harmony export */   t: function() { return /* binding */ isString; },
/* harmony export */   u: function() { return /* binding */ getValuesAsList; },
/* harmony export */   v: function() { return /* binding */ valuesToConvert; },
/* harmony export */   w: function() { return /* binding */ splitShadow; }
/* harmony export */ });
/**
 * Takes an array of [keyValue1, keyValue2] pairs and creates an object of {keyValue1: keyValue2, keyValue2: keyValue1}
 * @param {Array} array the array of pairs
 * @return {Object} the {key, value} pair object
 */
function arrayToObject(array) {
  return array.reduce(function (obj, _ref) {
    var prop1 = _ref[0],
      prop2 = _ref[1];
    obj[prop1] = prop2;
    obj[prop2] = prop1;
    return obj;
  }, {});
}
function isBoolean(val) {
  return typeof val === 'boolean';
}
function isFunction(val) {
  return typeof val === 'function';
}
function isNumber(val) {
  return typeof val === 'number';
}
function isNullOrUndefined(val) {
  return val === null || typeof val === 'undefined';
}
function isObject(val) {
  return val && typeof val === 'object';
}
function isString(val) {
  return typeof val === 'string';
}
function includes(inclusive, inclusee) {
  return inclusive.indexOf(inclusee) !== -1;
}

/**
 * Flip the sign of a CSS value, possibly with a unit.
 *
 * We can't just negate the value with unary minus due to the units.
 *
 * @private
 * @param {String} value - the original value (for example 77%)
 * @return {String} the result (for example -77%)
 */
function flipSign(value) {
  if (parseFloat(value) === 0) {
    // Don't mangle zeroes
    return value;
  }
  if (value[0] === '-') {
    return value.slice(1);
  }
  return "-" + value;
}
function flipTransformSign(match, prefix, offset, suffix) {
  return prefix + flipSign(offset) + suffix;
}

/**
 * Takes a percentage for background position and inverts it.
 * This was copied and modified from CSSJanus:
 * https://github.com/cssjanus/cssjanus/blob/4245f834365f6cfb0239191a151432fb85abab23/src/cssjanus.js#L152-L175
 * @param {String} value - the original value (for example 77%)
 * @return {String} the result (for example 23%)
 */
function calculateNewBackgroundPosition(value) {
  var idx = value.indexOf('.');
  if (idx === -1) {
    value = 100 - parseFloat(value) + "%";
  } else {
    // Two off, one for the "%" at the end, one for the dot itself
    var len = value.length - idx - 2;
    value = 100 - parseFloat(value);
    value = value.toFixed(len) + "%";
  }
  return value;
}

/**
 * This takes a list of CSS values and converts it to an array
 * @param {String} value - something like `1px`, `1px 2em`, or `3pt rgb(150, 230, 550) 40px calc(100% - 5px)`
 * @return {Array} the split values (for example: `['3pt', 'rgb(150, 230, 550)', '40px', 'calc(100% - 5px)']`)
 */
function getValuesAsList(value) {
  return value.replace(/ +/g, ' ') // remove all extraneous spaces
  .split(' ').map(function (i) {
    return i.trim();
  }) // get rid of extra space before/after each item
  .filter(Boolean) // get rid of empty strings
  // join items which are within parenthese
  // luckily `calc (100% - 5px)` is invalid syntax and it must be `calc(100% - 5px)`, otherwise this would be even more complex
  .reduce(function (_ref2, item) {
    var list = _ref2.list,
      state = _ref2.state;
    var openParansCount = (item.match(/\(/g) || []).length;
    var closedParansCount = (item.match(/\)/g) || []).length;
    if (state.parensDepth > 0) {
      list[list.length - 1] = list[list.length - 1] + " " + item;
    } else {
      list.push(item);
    }
    state.parensDepth += openParansCount - closedParansCount;
    return {
      list: list,
      state: state
    };
  }, {
    list: [],
    state: {
      parensDepth: 0
    }
  }).list;
}

/**
 * This is intended for properties that are `top right bottom left` and will switch them to `top left bottom right`
 * @param {String} value - `1px 2px 3px 4px` for example, but also handles cases where there are too few/too many and
 * simply returns the value in those cases (which is the correct behavior)
 * @return {String} the result - `1px 4px 3px 2px` for example.
 */
function handleQuartetValues(value) {
  var splitValues = getValuesAsList(value);
  if (splitValues.length <= 3 || splitValues.length > 4) {
    return value;
  }
  var top = splitValues[0],
    right = splitValues[1],
    bottom = splitValues[2],
    left = splitValues[3];
  return [top, left, bottom, right].join(' ');
}

/**
 *
 * @param {String|Number|Object} value css property value to test
 * @returns If the css property value can(should?) have an RTL equivalent
 */
function canConvertValue(value) {
  return !isBoolean(value) && !isNullOrUndefined(value);
}

/**
 * Splits a shadow style into its separate shadows using the comma delimiter, but creating an exception
 * for comma separated values in parentheses often used for rgba colours.
 * @param {String} value
 * @returns {Array} array of all box shadow values in the string
 */
function splitShadow(value) {
  var shadows = [];
  var start = 0;
  var end = 0;
  var rgba = false;
  while (end < value.length) {
    if (!rgba && value[end] === ',') {
      shadows.push(value.substring(start, end).trim());
      end++;
      start = end;
    } else if (value[end] === "(") {
      rgba = true;
      end++;
    } else if (value[end] === ')') {
      rgba = false;
      end++;
    } else {
      end++;
    }
  }

  // push the last shadow value if there is one
  // istanbul ignore next
  if (start != end) {
    shadows.push(value.substring(start, end + 1));
  }
  return shadows;
}

// some values require a little fudging, that fudging goes here.
var propertyValueConverters = {
  padding: function padding(_ref) {
    var value = _ref.value;
    if (isNumber(value)) {
      return value;
    }
    return handleQuartetValues(value);
  },
  textShadow: function textShadow(_ref2) {
    var value = _ref2.value;
    var flippedShadows = splitShadow(value).map(function (shadow) {
      // intentionally leaving off the `g` flag here because we only want to change the first number (which is the offset-x)
      return shadow.replace(/(^|\s)(-*)([.|\d]+)/, function (match, whiteSpace, negative, number) {
        if (number === '0') {
          return match;
        }
        var doubleNegative = negative === '' ? '-' : '';
        return "" + whiteSpace + doubleNegative + number;
      });
    });
    return flippedShadows.join(',');
  },
  borderColor: function borderColor(_ref3) {
    var value = _ref3.value;
    return handleQuartetValues(value);
  },
  borderRadius: function borderRadius(_ref4) {
    var value = _ref4.value;
    if (isNumber(value)) {
      return value;
    }
    if (includes(value, '/')) {
      var _value$split = value.split('/'),
        radius1 = _value$split[0],
        radius2 = _value$split[1];
      var convertedRadius1 = propertyValueConverters.borderRadius({
        value: radius1.trim()
      });
      var convertedRadius2 = propertyValueConverters.borderRadius({
        value: radius2.trim()
      });
      return convertedRadius1 + " / " + convertedRadius2;
    }
    var splitValues = getValuesAsList(value);
    switch (splitValues.length) {
      case 2:
        {
          return splitValues.reverse().join(' ');
        }
      case 4:
        {
          var topLeft = splitValues[0],
            topRight = splitValues[1],
            bottomRight = splitValues[2],
            bottomLeft = splitValues[3];
          return [topRight, topLeft, bottomLeft, bottomRight].join(' ');
        }
      default:
        {
          return value;
        }
    }
  },
  background: function background(_ref5) {
    var value = _ref5.value,
      valuesToConvert = _ref5.valuesToConvert,
      isRtl = _ref5.isRtl,
      bgImgDirectionRegex = _ref5.bgImgDirectionRegex,
      bgPosDirectionRegex = _ref5.bgPosDirectionRegex;
    if (isNumber(value)) {
      return value;
    }

    // Yeah, this is in need of a refactor 🙃...
    // but this property is a tough cookie 🍪
    // get the backgroundPosition out of the string by removing everything that couldn't be the backgroundPosition value
    var backgroundPositionValue = value.replace(/(url\(.*?\))|(rgba?\(.*?\))|(hsl\(.*?\))|(#[a-fA-F0-9]+)|((^| )(\D)+( |$))/g, '').trim();
    // replace that backgroundPosition value with the converted version
    value = value.replace(backgroundPositionValue, propertyValueConverters.backgroundPosition({
      value: backgroundPositionValue,
      valuesToConvert: valuesToConvert,
      isRtl: isRtl,
      bgPosDirectionRegex: bgPosDirectionRegex
    }));
    // do the backgroundImage value replacing on the whole value (because why not?)
    return propertyValueConverters.backgroundImage({
      value: value,
      valuesToConvert: valuesToConvert,
      bgImgDirectionRegex: bgImgDirectionRegex
    });
  },
  backgroundImage: function backgroundImage(_ref6) {
    var value = _ref6.value,
      valuesToConvert = _ref6.valuesToConvert,
      bgImgDirectionRegex = _ref6.bgImgDirectionRegex;
    if (!includes(value, 'url(') && !includes(value, 'linear-gradient(')) {
      return value;
    }
    return value.replace(bgImgDirectionRegex, function (match, g1, group2) {
      return match.replace(group2, valuesToConvert[group2]);
    });
  },
  backgroundPosition: function backgroundPosition(_ref7) {
    var value = _ref7.value,
      valuesToConvert = _ref7.valuesToConvert,
      isRtl = _ref7.isRtl,
      bgPosDirectionRegex = _ref7.bgPosDirectionRegex;
    return value
    // intentionally only grabbing the first instance of this because that represents `left`
    .replace(isRtl ? /^((-|\d|\.)+%)/ : null, function (match, group) {
      return calculateNewBackgroundPosition(group);
    }).replace(bgPosDirectionRegex, function (match) {
      return valuesToConvert[match];
    });
  },
  backgroundPositionX: function backgroundPositionX(_ref8) {
    var value = _ref8.value,
      valuesToConvert = _ref8.valuesToConvert,
      isRtl = _ref8.isRtl,
      bgPosDirectionRegex = _ref8.bgPosDirectionRegex;
    if (isNumber(value)) {
      return value;
    }
    return propertyValueConverters.backgroundPosition({
      value: value,
      valuesToConvert: valuesToConvert,
      isRtl: isRtl,
      bgPosDirectionRegex: bgPosDirectionRegex
    });
  },
  transition: function transition(_ref9) {
    var value = _ref9.value,
      propertiesToConvert = _ref9.propertiesToConvert;
    return value.split(/,\s*/g).map(function (transition) {
      var values = transition.split(' ');

      // Property is always defined first
      values[0] = propertiesToConvert[values[0]] || values[0];
      return values.join(' ');
    }).join(', ');
  },
  transitionProperty: function transitionProperty(_ref10) {
    var value = _ref10.value,
      propertiesToConvert = _ref10.propertiesToConvert;
    return value.split(/,\s*/g).map(function (prop) {
      return propertiesToConvert[prop] || prop;
    }).join(', ');
  },
  transform: function transform(_ref11) {
    var value = _ref11.value;
    // This was copied and modified from CSSJanus:
    // https://github.com/cssjanus/cssjanus/blob/4a40f001b1ba35567112d8b8e1d9d95eda4234c3/src/cssjanus.js#L152-L153
    var nonAsciiPattern = "[^\\u0020-\\u007e]";
    var escapePattern = "(?:" + '(?:(?:\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)' + "|\\\\[^\\r\\n\\f0-9a-f])";
    var signedQuantPattern = "((?:-?" + ('(?:[0-9]*\\.[0-9]+|[0-9]+)' + "(?:\\s*" + '(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)' + "|" + ("-?" + ("(?:[_a-z]|" + nonAsciiPattern + "|" + escapePattern + ")") + ("(?:[_a-z0-9-]|" + nonAsciiPattern + "|" + escapePattern + ")") + "*") + ")?") + ")|(?:inherit|auto))";
    var translateXRegExp = new RegExp("(translateX\\s*\\(\\s*)" + signedQuantPattern + "(\\s*\\))", 'gi');
    var translateRegExp = new RegExp("(translate\\s*\\(\\s*)" + signedQuantPattern + "((?:\\s*,\\s*" + signedQuantPattern + "){0,1}\\s*\\))", 'gi');
    var translate3dRegExp = new RegExp("(translate3d\\s*\\(\\s*)" + signedQuantPattern + "((?:\\s*,\\s*" + signedQuantPattern + "){0,2}\\s*\\))", 'gi');
    var rotateRegExp = new RegExp("(rotate[ZY]?\\s*\\(\\s*)" + signedQuantPattern + "(\\s*\\))", 'gi');
    return value.replace(translateXRegExp, flipTransformSign).replace(translateRegExp, flipTransformSign).replace(translate3dRegExp, flipTransformSign).replace(rotateRegExp, flipTransformSign);
  }
};
propertyValueConverters.objectPosition = propertyValueConverters.backgroundPosition;
propertyValueConverters.margin = propertyValueConverters.padding;
propertyValueConverters.borderWidth = propertyValueConverters.padding;
propertyValueConverters.boxShadow = propertyValueConverters.textShadow;
propertyValueConverters.webkitBoxShadow = propertyValueConverters.boxShadow;
propertyValueConverters.mozBoxShadow = propertyValueConverters.boxShadow;
propertyValueConverters.WebkitBoxShadow = propertyValueConverters.boxShadow;
propertyValueConverters.MozBoxShadow = propertyValueConverters.boxShadow;
propertyValueConverters.borderStyle = propertyValueConverters.borderColor;
propertyValueConverters.webkitTransform = propertyValueConverters.transform;
propertyValueConverters.mozTransform = propertyValueConverters.transform;
propertyValueConverters.WebkitTransform = propertyValueConverters.transform;
propertyValueConverters.MozTransform = propertyValueConverters.transform;
propertyValueConverters.transformOrigin = propertyValueConverters.backgroundPosition;
propertyValueConverters.webkitTransformOrigin = propertyValueConverters.transformOrigin;
propertyValueConverters.mozTransformOrigin = propertyValueConverters.transformOrigin;
propertyValueConverters.WebkitTransformOrigin = propertyValueConverters.transformOrigin;
propertyValueConverters.MozTransformOrigin = propertyValueConverters.transformOrigin;
propertyValueConverters.webkitTransition = propertyValueConverters.transition;
propertyValueConverters.mozTransition = propertyValueConverters.transition;
propertyValueConverters.WebkitTransition = propertyValueConverters.transition;
propertyValueConverters.MozTransition = propertyValueConverters.transition;
propertyValueConverters.webkitTransitionProperty = propertyValueConverters.transitionProperty;
propertyValueConverters.mozTransitionProperty = propertyValueConverters.transitionProperty;
propertyValueConverters.WebkitTransitionProperty = propertyValueConverters.transitionProperty;
propertyValueConverters.MozTransitionProperty = propertyValueConverters.transitionProperty;

// kebab-case versions

propertyValueConverters['text-shadow'] = propertyValueConverters.textShadow;
propertyValueConverters['border-color'] = propertyValueConverters.borderColor;
propertyValueConverters['border-radius'] = propertyValueConverters.borderRadius;
propertyValueConverters['background-image'] = propertyValueConverters.backgroundImage;
propertyValueConverters['background-position'] = propertyValueConverters.backgroundPosition;
propertyValueConverters['background-position-x'] = propertyValueConverters.backgroundPositionX;
propertyValueConverters['object-position'] = propertyValueConverters.objectPosition;
propertyValueConverters['border-width'] = propertyValueConverters.padding;
propertyValueConverters['box-shadow'] = propertyValueConverters.textShadow;
propertyValueConverters['-webkit-box-shadow'] = propertyValueConverters.textShadow;
propertyValueConverters['-moz-box-shadow'] = propertyValueConverters.textShadow;
propertyValueConverters['border-style'] = propertyValueConverters.borderColor;
propertyValueConverters['-webkit-transform'] = propertyValueConverters.transform;
propertyValueConverters['-moz-transform'] = propertyValueConverters.transform;
propertyValueConverters['transform-origin'] = propertyValueConverters.transformOrigin;
propertyValueConverters['-webkit-transform-origin'] = propertyValueConverters.transformOrigin;
propertyValueConverters['-moz-transform-origin'] = propertyValueConverters.transformOrigin;
propertyValueConverters['-webkit-transition'] = propertyValueConverters.transition;
propertyValueConverters['-moz-transition'] = propertyValueConverters.transition;
propertyValueConverters['transition-property'] = propertyValueConverters.transitionProperty;
propertyValueConverters['-webkit-transition-property'] = propertyValueConverters.transitionProperty;
propertyValueConverters['-moz-transition-property'] = propertyValueConverters.transitionProperty;

// this will be an object of properties that map to their corresponding rtl property (their doppelganger)
var propertiesToConvert = arrayToObject([['paddingLeft', 'paddingRight'], ['marginLeft', 'marginRight'], ['left', 'right'], ['borderLeft', 'borderRight'], ['borderLeftColor', 'borderRightColor'], ['borderLeftStyle', 'borderRightStyle'], ['borderLeftWidth', 'borderRightWidth'], ['borderTopLeftRadius', 'borderTopRightRadius'], ['borderBottomLeftRadius', 'borderBottomRightRadius'],
// kebab-case versions
['padding-left', 'padding-right'], ['margin-left', 'margin-right'], ['border-left', 'border-right'], ['border-left-color', 'border-right-color'], ['border-left-style', 'border-right-style'], ['border-left-width', 'border-right-width'], ['border-top-left-radius', 'border-top-right-radius'], ['border-bottom-left-radius', 'border-bottom-right-radius']]);
var propsToIgnore = ['content'];

// this is the same as the propertiesToConvert except for values
var valuesToConvert = arrayToObject([['ltr', 'rtl'], ['left', 'right'], ['w-resize', 'e-resize'], ['sw-resize', 'se-resize'], ['nw-resize', 'ne-resize']]);

// Sorry for the regex 😞, but basically thisis used to replace _every_ instance of
// `ltr`, `rtl`, `right`, and `left` in `backgroundimage` with the corresponding opposite.
// A situation we're accepting here:
// url('/left/right/rtl/ltr.png') will be changed to url('/right/left/ltr/rtl.png')
// Definite trade-offs here, but I think it's a good call.
var bgImgDirectionRegex = new RegExp('(^|\\W|_)((ltr)|(rtl)|(left)|(right))(\\W|_|$)', 'g');
var bgPosDirectionRegex = new RegExp('(left)|(right)');

/**
 * converts properties and values in the CSS in JS object to their corresponding RTL values
 * @param {Object} object the CSS in JS object
 * @return {Object} the RTL converted object
 */
function convert(object) {
  return Object.keys(object).reduce(function (newObj, originalKey) {
    var originalValue = object[originalKey];
    if (isString(originalValue)) {
      // you're welcome to later code 😺
      originalValue = originalValue.trim();
    }

    // Some properties should never be transformed
    if (includes(propsToIgnore, originalKey)) {
      newObj[originalKey] = originalValue;
      return newObj;
    }
    var _convertProperty = convertProperty(originalKey, originalValue),
      key = _convertProperty.key,
      value = _convertProperty.value;
    newObj[key] = value;
    return newObj;
  }, Array.isArray(object) ? [] : {});
}

/**
 * Converts a property and its value to the corresponding RTL key and value
 * @param {String} originalKey the original property key
 * @param {Number|String|Object} originalValue the original css property value
 * @return {Object} the new {key, value} pair
 */
function convertProperty(originalKey, originalValue) {
  var isNoFlip = /\/\*\s?@noflip\s?\*\//.test(originalValue);
  var key = isNoFlip ? originalKey : getPropertyDoppelganger(originalKey);
  var value = isNoFlip ? originalValue : getValueDoppelganger(key, originalValue);
  return {
    key: key,
    value: value
  };
}

/**
 * This gets the RTL version of the given property if it has a corresponding RTL property
 * @param {String} property the name of the property
 * @return {String} the name of the RTL property
 */
function getPropertyDoppelganger(property) {
  return propertiesToConvert[property] || property;
}

/**
 * This converts the given value to the RTL version of that value based on the key
 * @param {String} key this is the key (note: this should be the RTL version of the originalKey)
 * @param {String|Number|Object} originalValue the original css property value. If it's an object, then we'll convert that as well
 * @return {String|Number|Object} the converted value
 */
function getValueDoppelganger(key, originalValue) {
  if (!canConvertValue(originalValue)) {
    return originalValue;
  }
  if (isObject(originalValue)) {
    return convert(originalValue); // recursion 🌀
  }

  var isNum = isNumber(originalValue);
  var isFunc = isFunction(originalValue);
  var importantlessValue = isNum || isFunc ? originalValue : originalValue.replace(/ !important.*?$/, '');
  var isImportant = !isNum && importantlessValue.length !== originalValue.length;
  var valueConverter = propertyValueConverters[key];
  var newValue;
  if (valueConverter) {
    newValue = valueConverter({
      value: importantlessValue,
      valuesToConvert: valuesToConvert,
      propertiesToConvert: propertiesToConvert,
      isRtl: true,
      bgImgDirectionRegex: bgImgDirectionRegex,
      bgPosDirectionRegex: bgPosDirectionRegex
    });
  } else {
    newValue = valuesToConvert[importantlessValue] || importantlessValue;
  }
  if (isImportant) {
    return newValue + " !important";
  }
  return newValue;
}




/***/ }),

/***/ "./node_modules/rtl-css-js/dist/esm/core.js":
/*!**************************************************!*\
  !*** ./node_modules/rtl-css-js/dist/esm/core.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayToObject: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.f; },
/* harmony export */   calculateNewBackgroundPosition: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.h; },
/* harmony export */   calculateNewTranslate: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.j; },
/* harmony export */   canConvertValue: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.i; },
/* harmony export */   convert: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.c; },
/* harmony export */   convertProperty: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.d; },
/* harmony export */   flipSign: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.k; },
/* harmony export */   flipTransformSign: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.j; },
/* harmony export */   getPropertyDoppelganger: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.g; },
/* harmony export */   getValueDoppelganger: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.e; },
/* harmony export */   getValuesAsList: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.u; },
/* harmony export */   handleQuartetValues: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.l; },
/* harmony export */   includes: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.m; },
/* harmony export */   isBoolean: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.n; },
/* harmony export */   isFunction: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.o; },
/* harmony export */   isNullOrUndefined: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.r; },
/* harmony export */   isNumber: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.q; },
/* harmony export */   isObject: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.s; },
/* harmony export */   isString: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.t; },
/* harmony export */   propertiesToConvert: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.a; },
/* harmony export */   propertyValueConverters: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.p; },
/* harmony export */   propsToIgnore: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.b; },
/* harmony export */   splitShadow: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.w; },
/* harmony export */   valuesToConvert: function() { return /* reexport safe */ _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__.v; }
/* harmony export */ });
/* harmony import */ var _convert_9768a965_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert-9768a965.js */ "./node_modules/rtl-css-js/dist/esm/convert-9768a965.js");



/***/ }),

/***/ "./node_modules/stylis/src/Enum.js":
/*!*****************************************!*\
  !*** ./node_modules/stylis/src/Enum.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHARSET: function() { return /* binding */ CHARSET; },
/* harmony export */   COMMENT: function() { return /* binding */ COMMENT; },
/* harmony export */   COUNTER_STYLE: function() { return /* binding */ COUNTER_STYLE; },
/* harmony export */   DECLARATION: function() { return /* binding */ DECLARATION; },
/* harmony export */   DOCUMENT: function() { return /* binding */ DOCUMENT; },
/* harmony export */   FONT_FACE: function() { return /* binding */ FONT_FACE; },
/* harmony export */   FONT_FEATURE_VALUES: function() { return /* binding */ FONT_FEATURE_VALUES; },
/* harmony export */   IMPORT: function() { return /* binding */ IMPORT; },
/* harmony export */   KEYFRAMES: function() { return /* binding */ KEYFRAMES; },
/* harmony export */   LAYER: function() { return /* binding */ LAYER; },
/* harmony export */   MEDIA: function() { return /* binding */ MEDIA; },
/* harmony export */   MOZ: function() { return /* binding */ MOZ; },
/* harmony export */   MS: function() { return /* binding */ MS; },
/* harmony export */   NAMESPACE: function() { return /* binding */ NAMESPACE; },
/* harmony export */   PAGE: function() { return /* binding */ PAGE; },
/* harmony export */   RULESET: function() { return /* binding */ RULESET; },
/* harmony export */   SCOPE: function() { return /* binding */ SCOPE; },
/* harmony export */   SUPPORTS: function() { return /* binding */ SUPPORTS; },
/* harmony export */   VIEWPORT: function() { return /* binding */ VIEWPORT; },
/* harmony export */   WEBKIT: function() { return /* binding */ WEBKIT; }
/* harmony export */ });
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'
var LAYER = '@layer'
var SCOPE = '@scope'


/***/ }),

/***/ "./node_modules/stylis/src/Middleware.js":
/*!***********************************************!*\
  !*** ./node_modules/stylis/src/Middleware.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   middleware: function() { return /* binding */ middleware; },
/* harmony export */   namespace: function() { return /* binding */ namespace; },
/* harmony export */   prefixer: function() { return /* binding */ prefixer; },
/* harmony export */   rulesheet: function() { return /* binding */ rulesheet; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var _Serializer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Serializer.js */ "./node_modules/stylis/src/Serializer.js");
/* harmony import */ var _Prefixer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Prefixer.js */ "./node_modules/stylis/src/Prefixer.js");






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.DECLARATION: element.return = (0,_Prefixer_js__WEBPACK_IMPORTED_MODULE_4__.prefix)(element.value, element.length, children)
					return
				case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.KEYFRAMES:
					return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.copy)(element, {value: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(element.value, '@', '@' + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT)})], callback)
				case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.RULESET:
					if (element.length)
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.combine)(children = element.props, function (value) {
							switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.match)(value, callback = /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /:(read-\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MOZ + '$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.copy)(element, {props: [value]}))
									;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.assign)(element, {props: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.filter)(children, callback)})
									break
								// :placeholder
								case '::placeholder':
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + 'input-$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MOZ + '$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /:(plac\w+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + 'input-$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.copy)(element, {props: [value]}))
									;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.assign)(element, {props: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.filter)(children, callback)})
									break
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.RULESET:
			element.props = element.props.map(function (value) {
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.combine)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.tokenize)(value), function (value, index, children) {
					switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(value, 0)) {
						// \f
						case 12:
							return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 1, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(children) > 1 ? '' : value
								case index = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}


/***/ }),

/***/ "./node_modules/stylis/src/Parser.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/src/Parser.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   comment: function() { return /* binding */ comment; },
/* harmony export */   compile: function() { return /* binding */ compile; },
/* harmony export */   declaration: function() { return /* binding */ declaration; },
/* harmony export */   parse: function() { return /* binding */ parse; },
/* harmony export */   ruleset: function() { return /* binding */ ruleset; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/stylis/src/Tokenizer.js");




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.dealloc)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.alloc)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.next)()) {
			// (
			case 40:
				if (previous != 108 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, length - 1) == 58) {
					if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.indexof)(characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.delimit)(character), '&', '&\f'), '&\f', (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(index ? points[index - 1] : 0)) != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.delimit)(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.whitespace)(previous)
				break
			// \
			case 92:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.escaping)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.caret)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.peek)()) {
					case 42: case 47:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.commenter)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.next)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.caret)()), root, parent, declarations), declarations)
						if (((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.token)(previous || 1) == 5 || (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.token)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.peek)() || 1) == 5) && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(characters, -1, void 0) !== ' ') characters += ' '
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset: if (ampersand == -1) characters = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, /\f/g, '')
						if (property > 0 && ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - length || (variable === 0 && previous === 47)))
							(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else {
								switch (atrule) {
									// c(ontainer)
									case 99:
										if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, 3) === 110) break
									// l(ayer)
									case 108:
										if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, 2) === 97) break
									default:
										offset = 0
									// d(ocument) m(edia) s(upports)
									case 100: case 109: case 115:
								}
								if (offset) parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children)
								else parse(characters, reference, reference, reference, [''], children, 0, points, children)
							}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.prev)() == 125)
						continue

				switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.peek)() === 45)
							characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.delimit)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.next)())

						atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.peek)(), offset = length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.identifier)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.caret)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.trim)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(y, /&\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.node)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_0__.RULESET : type, props, children, length, siblings)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @param {object[]} siblings
 * @return {object}
 */
function comment (value, root, parent, siblings) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_0__.COMMENT, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.char)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 2, -2), 0, siblings)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function declaration (value, root, parent, length, siblings) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_0__.DECLARATION, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, length + 1, -1), length, siblings)
}


/***/ }),

/***/ "./node_modules/stylis/src/Prefixer.js":
/*!*********************************************!*\
  !*** ./node_modules/stylis/src/Prefixer.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefix: function() { return /* binding */ prefix; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");



/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix (value, length, children) {
	switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.hash)(value, length)) {
		// color-adjust
		case 5103:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position
		case 6391: case 5879: case 5623: case 6135: case 4599:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + value
		// mask-composite
		case 4855:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value.replace('add', 'source-over').replace('substract', 'source-out').replace('intersect', 'source-in').replace('exclude', 'xor') + value
		// tab-size
		case 4789:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MOZ + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MOZ + value + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + value + value
		// writing-mode
		case 5936:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
				// default: fallthrough to below
			}
		// flex, flex-direction, scroll-snap-type, writing-mode
		case 6828: case 4268: case 2903:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + value + value
		// order
		case 6165:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + 'flex-' + value + value
		// align-items
		case 5187:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /(\w+).+(:[^]+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + 'box-$1$2' + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + 'flex-item-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /flex-|-self/g, '') + (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.match)(value, /flex-|baseline/) ? _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + 'grid-row-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /flex-|-self/g, '') : '') + value
		// align-content
		case 4675:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + 'flex-line-pack' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /align-content|flex-|-self/g, '') + value
		// flex-shrink
		case 5548:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + 'box-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, '-grow', '') + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /([^-])(transform)/g, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + '$2') + value
		// cursor
		case 6187:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /(zoom-|grab)/, _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + '$1'), /(image-set)/, _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /(image-set\([^]*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /(.+:)(flex-)?(.*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + 'box-pack:$3' + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + 'flex-pack:$3'), /space-between/, 'justify') + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + value + value
		// justify-self
		case 4200:
			if (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.match)(value, /flex-|baseline/)) return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + 'grid-column-align' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, length) + value
			break
		// grid-template-(columns|rows)
		case 2592: case 3360:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, 'template-', '') + value
		// grid-(row|column)-start
		case 4384: case 3616:
			if (children && children.some(function (element, index) { return length = index, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.match)(element.props, /grid-\w+-end/) })) {
				return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.indexof)(value + (children = children[length].value), 'span', 0) ? value : (_Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, '-start', '') + value + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + 'grid-row-span:' + (~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.indexof)(children, 'span', 0) ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.match)(children, /\d+/) : +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.match)(children, /\d+/) - +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.match)(value, /\d+/)) + ';')
			}
			return _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, '-start', '') + value
		// grid-(row|column)-end
		case 4896: case 4128:
			return (children && children.some(function (element) { return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.match)(element.props, /grid-\w+-start/) })) ? value : _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, '-end', '-span'), 'span ', '') + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /(.+)-inline(.+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(value) - 1 - length > 6)
				switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + '$2-$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MOZ + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.indexof)(value, 'stretch', 0) ? prefix((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, 'stretch', 'fill-available'), length, children) + value : value
				}
			break
		// grid-(column|row)
		case 5152: case 5920:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) { return (_Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + a + ':' + b + f) + (c ? (_Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + a + '-span:' + (d ? e : +e - +b)) + f : '') + value })
		// position: sticky
		case 4949:
			// stick(y)?
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(value, length + 6) === 121)
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT) + value
			break
		// display: (flex|inline-flex|grid|inline-grid)
		case 6444:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(value, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(value, 14) === 45 ? 18 : 11)) {
				// (inline-)?fle(x)
				case 120:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.WEBKIT + '$2$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS + '$2box$3') + value
				// (inline-)?gri(d)
				case 100:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_0__.MS) + value
			}
			break
		// scroll-margin, scroll-margin-(top|right|bottom|left)
		case 5719: case 2647: case 2135: case 3927: case 2391:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(value, 'scroll-', 'scroll-snap-') + value
	}

	return value
}


/***/ }),

/***/ "./node_modules/stylis/src/Serializer.js":
/*!***********************************************!*\
  !*** ./node_modules/stylis/src/Serializer.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serialize: function() { return /* binding */ serialize; },
/* harmony export */   stringify: function() { return /* binding */ stringify; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''

	for (var i = 0; i < children.length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.LAYER: if (element.children.length) break
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.IMPORT: case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.NAMESPACE: case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.DECLARATION: return element.return = element.return || element.value
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.COMMENT: return ''
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.RULESET: if (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(element.value = element.props.join(','))) return ''
	}

	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}


/***/ }),

/***/ "./node_modules/stylis/src/Tokenizer.js":
/*!**********************************************!*\
  !*** ./node_modules/stylis/src/Tokenizer.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alloc: function() { return /* binding */ alloc; },
/* harmony export */   caret: function() { return /* binding */ caret; },
/* harmony export */   char: function() { return /* binding */ char; },
/* harmony export */   character: function() { return /* binding */ character; },
/* harmony export */   characters: function() { return /* binding */ characters; },
/* harmony export */   column: function() { return /* binding */ column; },
/* harmony export */   commenter: function() { return /* binding */ commenter; },
/* harmony export */   copy: function() { return /* binding */ copy; },
/* harmony export */   dealloc: function() { return /* binding */ dealloc; },
/* harmony export */   delimit: function() { return /* binding */ delimit; },
/* harmony export */   delimiter: function() { return /* binding */ delimiter; },
/* harmony export */   escaping: function() { return /* binding */ escaping; },
/* harmony export */   identifier: function() { return /* binding */ identifier; },
/* harmony export */   length: function() { return /* binding */ length; },
/* harmony export */   lift: function() { return /* binding */ lift; },
/* harmony export */   line: function() { return /* binding */ line; },
/* harmony export */   next: function() { return /* binding */ next; },
/* harmony export */   node: function() { return /* binding */ node; },
/* harmony export */   peek: function() { return /* binding */ peek; },
/* harmony export */   position: function() { return /* binding */ position; },
/* harmony export */   prev: function() { return /* binding */ prev; },
/* harmony export */   slice: function() { return /* binding */ slice; },
/* harmony export */   token: function() { return /* binding */ token; },
/* harmony export */   tokenize: function() { return /* binding */ tokenize; },
/* harmony export */   tokenizer: function() { return /* binding */ tokenizer; },
/* harmony export */   whitespace: function() { return /* binding */ whitespace; }
/* harmony export */ });
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {object[]} siblings
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length, siblings) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: '', siblings: siblings}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(node('', null, null, '', null, null, 0, root.siblings), root, {length: -root.length}, props)
}

/**
 * @param {object} root
 */
function lift (root) {
	while (root.root)
		root = copy(root.root, {children: [root]})

	;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(root, root.siblings)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.trim)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(identifier(position - 1), children)
				break
			case 2: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(delimit(character), children)
				break
			default: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}


/***/ }),

/***/ "./node_modules/stylis/src/Utility.js":
/*!********************************************!*\
  !*** ./node_modules/stylis/src/Utility.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abs: function() { return /* binding */ abs; },
/* harmony export */   append: function() { return /* binding */ append; },
/* harmony export */   assign: function() { return /* binding */ assign; },
/* harmony export */   charat: function() { return /* binding */ charat; },
/* harmony export */   combine: function() { return /* binding */ combine; },
/* harmony export */   filter: function() { return /* binding */ filter; },
/* harmony export */   from: function() { return /* binding */ from; },
/* harmony export */   hash: function() { return /* binding */ hash; },
/* harmony export */   indexof: function() { return /* binding */ indexof; },
/* harmony export */   match: function() { return /* binding */ match; },
/* harmony export */   replace: function() { return /* binding */ replace; },
/* harmony export */   sizeof: function() { return /* binding */ sizeof; },
/* harmony export */   strlen: function() { return /* binding */ strlen; },
/* harmony export */   substr: function() { return /* binding */ substr; },
/* harmony export */   trim: function() { return /* binding */ trim; }
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @param {number} position
 * @return {number}
 */
function indexof (value, search, position) {
	return value.indexOf(search, position)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

/**
 * @param {string[]} array
 * @param {RegExp} pattern
 * @return {string[]}
 */
function filter (array, pattern) {
	return array.filter(function (value) { return !match(value, pattern) })
}


/***/ }),

/***/ "./src/pricequotedialog/components/QuoteDialogApp.tsx":
/*!************************************************************!*\
  !*** ./src/pricequotedialog/components/QuoteDialogApp.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-image/lib/components/Image/Image.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/makeStyles.esm.js");
/* harmony import */ var _util_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/log */ "./src/util/log.ts");
/* provided dependency */ var Promise = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js")["Promise"];
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};



var useStyles = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
    root: {
        minHeight: "100vh",
    },
});
var QuoteDialogApp = function (props) {
    var styles = useStyles();
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(''), dialogData = _a[0], setDialogData = _a[1];
    var _b = react__WEBPACK_IMPORTED_MODULE_0__.useState('https://webit01.github.io/vdspek/dist/assets/logo-filled.png'), imageUrl = _b[0], setImageUrl = _b[1];
    console.log((0,_util_log__WEBPACK_IMPORTED_MODULE_3__.formatLog)("Loading pricequotedialog"), props);
    var fetchData = function (jsonData) { return __awaiter(void 0, void 0, void 0, function () {
        var machineDataUrl, machine, result, parser, xmlDoc, hefFototElement, hefFototValue;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    machineDataUrl = "https://www.gebruikteheftrucks.nl/gebruikteheftrucks/fs3_mr.nsf/RetrieveHeftruck?openagent&hefid=".concat(jsonData.machineNr, "&mrid=").concat(jsonData.referenceNr);
                    return [4 /*yield*/, fetch(machineDataUrl)];
                case 1:
                    machine = _b.sent();
                    return [4 /*yield*/, machine.text()];
                case 2:
                    result = _b.sent();
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(result, "application/xml");
                    hefFototElement = xmlDoc.querySelector("hef_fotot");
                    hefFototValue = (_a = hefFototElement === null || hefFototElement === void 0 ? void 0 : hefFototElement.textContent) !== null && _a !== void 0 ? _a : "";
                    console.log((0,_util_log__WEBPACK_IMPORTED_MODULE_3__.formatLog)("Waarde van hef_fotot:"), hefFototValue);
                    // De waarde is zonder host ervoor, voorbeeld:
                    // www.gebruikteheftrucks.nl/site/55A64E6502B345A6C125899B004B519E/$File/Dutchlift DL-50 intro.png
                    if (!hefFototValue.startsWith("https")) {
                        hefFototValue = "https://" + hefFototValue;
                    }
                    setImageUrl(hefFototValue);
                    return [2 /*return*/];
            }
        });
    }); };
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        console.log((0,_util_log__WEBPACK_IMPORTED_MODULE_3__.formatLog)("Setting up dialog message handler"));
        Office.onReady(function () {
            console.log((0,_util_log__WEBPACK_IMPORTED_MODULE_3__.formatLog)("Office is ready in dialog"));
            Office.context.ui.addHandlerAsync(Office.EventType.DialogParentMessageReceived, function (arg) { return __awaiter(void 0, void 0, void 0, function () {
                var jsonData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log((0,_util_log__WEBPACK_IMPORTED_MODULE_3__.formatLog)("Bericht ontvangen van parent:"), arg);
                            jsonData = JSON.parse(arg.message);
                            console.log((0,_util_log__WEBPACK_IMPORTED_MODULE_3__.formatLog)("Parsed JSON data:"), jsonData);
                            setDialogData(arg.message); // Toon ontvangen bericht
                            return [4 /*yield*/, fetchData(jsonData)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            // Optioneel: stuur meteen een bericht terug
            Office.context.ui.messageParent("Dialoog is klaar!");
        });
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: styles.root },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Image, { src: imageUrl, alt: props.title })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Data ontvangen van parent:"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, dialogData))));
};
/* harmony default export */ __webpack_exports__["default"] = (QuoteDialogApp);


/***/ }),

/***/ "./src/pricequotedialog/index.tsx":
/*!****************************************!*\
  !*** ./src/pricequotedialog/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_QuoteDialogApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/QuoteDialogApp */ "./src/pricequotedialog/components/QuoteDialogApp.tsx");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/tokens/lib/themes/web/lightTheme.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-provider/lib/components/FluentProvider/FluentProvider.js");




/* global document, Office, module, require, HTMLElement */
var title = "VdSpek Pane Add-in";
var rootElement = document.getElementById("container");
var root = rootElement ? (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootElement) : undefined;
/* Render application after Office initializes */
Office.onReady(function () {
    root === null || root === void 0 ? void 0 : root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.FluentProvider, { theme: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.webLightTheme },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_QuoteDialogApp__WEBPACK_IMPORTED_MODULE_2__["default"], { title: title })));
});
if (false) // removed by dead control flow
{}


/***/ }),

/***/ "./src/pricequotedialog/pricequotedialog.html":
/*!****************************************************!*\
  !*** ./src/pricequotedialog/pricequotedialog.html ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<!-- Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. -->\r\n<!-- See LICENSE in the project root for license information -->\r\n\r\n<!doctype html>\r\n<html lang=\"en\" data-framework=\"typescript\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    <title>Vd Spek Price Quote</title>\r\n\r\n    <!-- Office JavaScript API -->\r\n    <" + "script type=\"text/javascript\" src=\"https://appsforoffice.microsoft.com/lib/1/hosted/office.js\"><" + "/script>\r\n</head>\r\n\r\n<body style=\"width: 100%; height: 100%; margin: 0; padding: 0;\">\r\n    <div id=\"container\"></div>\r\n\r\n    <!-- \r\n        Fluent UI React v. 9 uses modern JavaScript syntax that is not supported in\r\n        Trident (Internet Explorer) or EdgeHTML (Edge Legacy), so this add-in won't\r\n        work in Office versions that use these webviews. The script below makes the \r\n        following div display when an unsupported webview is in use, and hides the \r\n        React container div. \r\n    -->\r\n    <div id=\"tridentmessage\" style=\"display: none; padding: 10;\">\r\n        This add-in will not run in your version of Office. Please upgrade either to perpetual Office 2021 (or later) \r\n        or to a Microsoft 365 account.\r\n    </div>\r\n    <" + "script>\r\n        if ((navigator.userAgent.indexOf(\"Trident\") !== -1) || (navigator.userAgent.indexOf(\"Edge\") !== -1)) {\r\n            var tridentMessage = document.getElementById(\"tridentmessage\");\r\n            var normalContainer = document.getElementById(\"container\");\r\n            tridentMessage.style.display = \"block\";\r\n            normalContainer.style.display = \"none\";\r\n        } \r\n    <" + "/script>\r\n</body>\r\n\r\n</html>\r\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/util/log.ts":
/*!*************************!*\
  !*** ./src/util/log.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLog: function() { return /* binding */ formatLog; }
/* harmony export */ });
function pad(num) {
  return num.toString().padStart(2, '0');
}
function padMilliseconds(ms) {
  return ms.toString().padStart(3, '0');
}
function formatLog(message) {
  var now = new Date();
  var formattedTime = "".concat(pad(now.getHours()), ":").concat(pad(now.getMinutes()), ":").concat(pad(now.getSeconds()), ":").concat(padMilliseconds(now.getMilliseconds()));
  return "[VdSpek ".concat(formattedTime, "] ").concat(message);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pricequotedialog/index.tsx"), __webpack_exec__("./src/pricequotedialog/pricequotedialog.html"));
/******/ }
]);
//# sourceMappingURL=pricequotedialog.js.map