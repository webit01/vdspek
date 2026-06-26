"use strict";
(self["webpackChunkvdspek_office_appp"] = self["webpackChunkvdspek_office_appp"] || []).push([[202],{

/***/ 35137:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ murmur2; }
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

/***/ 93700:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

const IconDirectionContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const IconDirectionContextDefaultValue = {};
const IconDirectionContextProvider = IconDirectionContext.Provider;
const useIconContext = () => {
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(IconDirectionContext);
    return context !== null && context !== void 0 ? context : IconDirectionContextDefaultValue;
};

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "F", 0, /* binding */ IconDirectionContextProvider,
/* harmony export */   "U", 0, /* binding */ useIconContext
/* harmony export */ ]);


/***/ }),

/***/ 55883:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: function() { return /* binding */ Image; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-jsx-runtime/lib/jsx-runtime.js + 8 modules
var jsx_runtime = __webpack_require__(95395);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-utilities/lib/compose/assertSlots.js
var assertSlots = __webpack_require__(82222);
;// ./node_modules/@fluentui/react-image/lib/components/Image/renderImage.js
  

/**
 * Define the render function.
 * Given the state of an image, renders it.
 */ const renderImage_unstable = (state)=>{
    (0,assertSlots/* assertSlots */.C)(state);
    return /*#__PURE__*/ (0,jsx_runtime/* jsx */.Y)(state.root, {});
};

// EXTERNAL MODULE: ./node_modules/@fluentui/react-utilities/lib/compose/slot.js
var slot = __webpack_require__(56257);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-utilities/lib/compose/getIntrinsicElementProps.js + 2 modules
var getIntrinsicElementProps = __webpack_require__(30460);
;// ./node_modules/@fluentui/react-image/lib/components/Image/useImage.js


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
        root: slot/* always */.Gk((0,getIntrinsicElementProps/* getIntrinsicElementProps */.g)('img', {
            ref,
            ...props
        }), {
            elementType: 'img'
        })
    };
    return state;
};

// EXTERNAL MODULE: ./node_modules/@griffel/react/__styles.esm.js
var _styles_esm = __webpack_require__(99159);
// EXTERNAL MODULE: ./node_modules/@griffel/core/mergeClasses.esm.js
var mergeClasses_esm = __webpack_require__(20677);
;// ./node_modules/@fluentui/react-image/lib/components/Image/useImageStyles.styles.js


const imageClassNames = {
  root: 'fui-Image'
};
const useStyles = /*#__PURE__*/(0,_styles_esm/* __styles */.X)({
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
  state.root.className = (0,mergeClasses_esm/* mergeClasses */.z)(imageClassNames.root, styles.base, state.block && styles.block, state.bordered && styles.bordered, state.shadow && styles.shadow, styles[state.fit], styles[state.shape], state.root.className);
  return state;
};
// EXTERNAL MODULE: ./node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js
var CustomStyleHooksContext = __webpack_require__(68909);
;// ./node_modules/@fluentui/react-image/lib/components/Image/Image.js





/**
 * The Image component ensures the consistent styling of images.
 */ const Image = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    const state = useImage_unstable(props, ref);
    useImageStyles_unstable(state);
    (0,CustomStyleHooksContext/* useCustomStyleHook */.$e)('useImageStyles_unstable')(state);
    return renderImage_unstable(state);
});
Image.displayName = 'Image';


/***/ }),

/***/ 95395:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: function() { return /* binding */ jsx; },
  F: function() { return /* binding */ jsxs; }
});

// EXTERNAL MODULE: ./node_modules/@fluentui/react-utilities/lib/compose/constants.js
var constants = __webpack_require__(86800);
;// ./node_modules/@fluentui/react-utilities/lib/compose/isSlot.js

/**
 * Guard method to ensure a given element is a slot.
 * This is mainly used internally to ensure a slot is being used as a component.
 */ function isSlot(element) {
    return Boolean(element === null || element === void 0 ? void 0 : element.hasOwnProperty(constants/* SLOT_ELEMENT_TYPE_SYMBOL */.on));
}

;// ./node_modules/@fluentui/react-jsx-runtime/lib/utils/createCompatSlotComponent.js


// TODO:
// this is for backwards compatibility with getSlotsNext
// it should be removed once getSlotsNext is obsolete
function createCompatSlotComponent(type, props) {
    return {
        ...props,
        [constants/* SLOT_ELEMENT_TYPE_SYMBOL */.on]: type
    };
}

;// ./node_modules/@fluentui/react-jsx-runtime/lib/utils/warnIfElementTypeIsInvalid.js


function warnIfElementTypeIsInvalid(type) {
    if (false) // removed by dead control flow
{}
}

;// ./node_modules/@fluentui/react-jsx-runtime/lib/jsx/createJSX.js




function createJSX(runtime, slotRuntime) {
    return function jsx(type, overrideProps, key, source, self) {
        // TODO:
        // this is for backwards compatibility with getSlotsNext
        // it should be removed once getSlotsNext is obsolete
        if (isSlot(overrideProps)) {
            return slotRuntime(createCompatSlotComponent(type, overrideProps), null, key, source, self);
        }
        if (isSlot(type)) {
            return slotRuntime(type, overrideProps, key, source, self);
        }
        warnIfElementTypeIsInvalid(type);
        return runtime(type, overrideProps, key, source, self);
    };
}

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@fluentui/react-jsx-runtime/lib/utils/getMetadataFromSlotComponent.js

/**
 * @internal
 */ function getMetadataFromSlotComponent(type) {
    const { as, [constants/* SLOT_CLASS_NAME_PROP_SYMBOL */.b9]: _classNameProp, [constants/* SLOT_ELEMENT_TYPE_SYMBOL */.on]: baseElementType, [constants/* SLOT_RENDER_FUNCTION_SYMBOL */.Y9]: renderFunction, ...propsWithoutMetadata } = type;
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

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
var jsx_runtime_namespaceObject = /*#__PURE__*/__webpack_require__.t(jsx_runtime, 2);
;// ./node_modules/@fluentui/react-jsx-runtime/lib/utils/Runtime.js

const Runtime = jsx_runtime_namespaceObject;

;// ./node_modules/@fluentui/react-jsx-runtime/lib/jsx/jsxSlot.js



const jsxSlot = (type, overrideProps, key)=>{
    const { elementType, renderFunction, props: slotProps } = getMetadataFromSlotComponent(type);
    const props = {
        ...slotProps,
        ...overrideProps
    };
    if (renderFunction) {
        return Runtime.jsx(react.Fragment, {
            children: renderFunction(elementType, props)
        }, key);
    }
    return Runtime.jsx(elementType, props, key);
};

;// ./node_modules/@fluentui/react-jsx-runtime/lib/jsx/jsxsSlot.js



const jsxsSlot = (type, overrideProps, key)=>{
    const { elementType, renderFunction, props: slotProps } = getMetadataFromSlotComponent(type);
    const props = {
        ...slotProps,
        ...overrideProps
    };
    if (renderFunction) {
        /**
     * In static runtime then children is an array and this array won't be keyed.
     * We should wrap children by a static fragment
     * as there's no way to know if renderFunction will render statically or dynamically
     */ return Runtime.jsx(react.Fragment, {
            children: renderFunction(elementType, {
                ...props,
                children: Runtime.jsxs(react.Fragment, {
                    children: props.children
                }, undefined)
            })
        }, key);
    }
    return Runtime.jsxs(elementType, props, key);
};

;// ./node_modules/@fluentui/react-jsx-runtime/lib/jsx-runtime.js





const jsx = createJSX(Runtime.jsx, jsxSlot);
const jsxs = createJSX(Runtime.jsxs, jsxsSlot);


/***/ }),

/***/ 12086:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: function() { return /* binding */ FluentProvider; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-jsx-runtime/lib/jsx-runtime.js + 8 modules
var jsx_runtime = __webpack_require__(95395);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-utilities/lib/compose/assertSlots.js
var assertSlots = __webpack_require__(82222);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-utilities/lib/ssr/canUseDOM.js
var canUseDOM = __webpack_require__(40206);
// EXTERNAL MODULE: ./node_modules/@griffel/react/TextDirectionContext.esm.js
var TextDirectionContext_esm = __webpack_require__(56004);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-shared-contexts/lib/ProviderContext/ProviderContext.js
var ProviderContext = __webpack_require__(97073);
;// ./node_modules/@fluentui/react-shared-contexts/lib/ThemeContext/ThemeContext.js

/**
 * @internal
 */ const ThemeContext = react.createContext(undefined);
/**
 * @internal
 */ const ThemeProvider = ThemeContext.Provider;

;// ./node_modules/@fluentui/react-shared-contexts/lib/ThemeClassNameContext/ThemeClassNameContext.js
/* unused harmony import specifier */ var React;

/**
 * @internal
 * Used to provide a CSS class that applies theme css variables
 *
 * Useful for elements in the React tree (can read context) but not in the DOM Tree. E.g. Portals
 */ const ThemeClassNameContext = react.createContext(undefined);
const themeClassNameContextDefaultVaue = '';
const ThemeClassNameProvider = ThemeClassNameContext.Provider;
/**
 * @returns CSS class that applies css variables
 */ function useThemeClassName() {
    var _React_useContext;
    return (_React_useContext = React.useContext(ThemeClassNameContext)) !== null && _React_useContext !== void 0 ? _React_useContext : themeClassNameContextDefaultVaue;
}

// EXTERNAL MODULE: ./node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js
var CustomStyleHooksContext = __webpack_require__(68909);
;// ./node_modules/@fluentui/react-shared-contexts/lib/TooltipVisibilityContext/TooltipContext.js
/* unused harmony import specifier */ var TooltipContext_React;

/**
 * @internal
 * Context shared by all of the tooltips in the app
 */ const TooltipVisibilityContext = react.createContext(undefined);
const tooltipVisibilityContextDefaultValue = (/* unused pure expression or super */ null && ({}));
/**
 * @internal
 */ const TooltipVisibilityProvider = TooltipVisibilityContext.Provider;
function useTooltipVisibility() {
    var _React_useContext;
    return (_React_useContext = TooltipContext_React.useContext(TooltipVisibilityContext)) !== null && _React_useContext !== void 0 ? _React_useContext : tooltipVisibilityContextDefaultValue;
}

;// ./node_modules/@fluentui/react-shared-contexts/lib/OverridesContext/OverridesContext.js

/**
 * @internal
 */ const OverridesContext = react.createContext(undefined);
/**
 * @internal
 */ const OverridesProvider = OverridesContext.Provider;
function useOverrides() {
    var _React_useContext;
    return (_React_useContext = react.useContext(OverridesContext)) !== null && _React_useContext !== void 0 ? _React_useContext : {};
}

// EXTERNAL MODULE: ./node_modules/@fluentui/react-icons/lib/contexts/IconDirectionContext.js
var IconDirectionContext = __webpack_require__(93700);
;// ./node_modules/@fluentui/react-provider/lib/components/FluentProvider/renderFluentProvider.js
  




/**
 * Render the final JSX of FluentProvider
 */ const renderFluentProvider_unstable = (state, contextValues)=>{
    (0,assertSlots/* assertSlots */.C)(state);
    // Typescript (vscode) incorrectly references the FluentProviderProps.customStyleHooks_unstable
    // instead of FluentProviderContextValues.customStyleHooks_unstable and thinks it is
    // Partial<CustomStyleHooksContextValue>, so it needs to be cast to Required<CustomStyleHooksContextValue>
    return /*#__PURE__*/ (0,jsx_runtime/* jsx */.Y)(ProviderContext/* Provider */.K, {
        value: contextValues.provider,
        children: /*#__PURE__*/ (0,jsx_runtime/* jsx */.Y)(ThemeProvider, {
            value: contextValues.theme,
            children: /*#__PURE__*/ (0,jsx_runtime/* jsx */.Y)(ThemeClassNameProvider, {
                value: contextValues.themeClassName,
                children: /*#__PURE__*/ (0,jsx_runtime/* jsx */.Y)(CustomStyleHooksContext/* CustomStyleHooksProvider */.gH, {
                    value: contextValues.customStyleHooks_unstable,
                    children: /*#__PURE__*/ (0,jsx_runtime/* jsx */.Y)(TooltipVisibilityProvider, {
                        value: contextValues.tooltip,
                        children: /*#__PURE__*/ (0,jsx_runtime/* jsx */.Y)(TextDirectionContext_esm/* TextDirectionProvider */.e, {
                            dir: contextValues.textDirection,
                            children: /*#__PURE__*/ (0,jsx_runtime/* jsx */.Y)(IconDirectionContext/* IconDirectionContextProvider */.F, {
                                value: contextValues.iconDirection,
                                children: /*#__PURE__*/ (0,jsx_runtime/* jsx */.Y)(OverridesProvider, {
                                    value: contextValues.overrides_unstable,
                                    children: /*#__PURE__*/ (0,jsx_runtime/* jsxs */.F)(state.root, {
                                        children: [
                                            (0,canUseDOM/* canUseDOM */.S)() ? null : /*#__PURE__*/ (0,jsx_runtime/* jsx */.Y)("style", {
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

// EXTERNAL MODULE: ./node_modules/@griffel/react/RendererContext.esm.js + 5 modules
var RendererContext_esm = __webpack_require__(26312);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-utilities/lib/utils/isHTMLElement.js
var isHTMLElement = __webpack_require__(96631);
;// ./node_modules/keyborg/dist/esm/index.js
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
    } else if (false) // removed by dead control flow
{}
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
;// ./node_modules/@fluentui/react-tabster/lib/focus/constants.js
const KEYBOARD_NAV_ATTRIBUTE = 'data-keyboard-nav';
const KEYBOARD_NAV_SELECTOR = (/* unused pure expression or super */ null && (`:global([${KEYBOARD_NAV_ATTRIBUTE}])`));
/**
 * @internal
 */ const FOCUS_VISIBLE_ATTR = 'data-fui-focus-visible';
/**
 * @internal
 */ const FOCUS_WITHIN_ATTR = 'data-fui-focus-within';
const defaultOptions = (/* unused pure expression or super */ null && ({
    style: {},
    selector: 'focus',
    customizeSelector: (selector)=>selector
}));

;// ./node_modules/@fluentui/react-tabster/lib/focus/focusVisiblePolyfill.js



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
    const keyborg = createKeyborg(targetWindow);
    function registerElementIfNavigating(el) {
        if (keyborg.isNavigatingWithKeyboard() && (0,isHTMLElement/* isHTMLElement */.s)(el)) {
            state.current = el;
            el.setAttribute(FOCUS_VISIBLE_ATTR, '');
        }
    }
    function disposeCurrentElement() {
        if (state.current) {
            state.current.removeAttribute(FOCUS_VISIBLE_ATTR);
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
        if (!e.relatedTarget || (0,isHTMLElement/* isHTMLElement */.s)(e.relatedTarget) && !scope.contains(e.relatedTarget)) {
            disposeCurrentElement();
        }
    };
    scope.addEventListener(KEYBORG_FOCUSIN, keyborgListener);
    scope.addEventListener('focusout', blurListener);
    scope.focusVisible = true;
    if (scope.contains(targetWindow.document.activeElement)) {
        registerElementIfNavigating(targetWindow.document.activeElement);
    }
    // Return disposer
    return ()=>{
        disposeCurrentElement();
        scope.removeEventListener(KEYBORG_FOCUSIN, keyborgListener);
        scope.removeEventListener('focusout', blurListener);
        scope.focusVisible = undefined;
        disposeKeyborg(keyborg);
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

;// ./node_modules/@fluentui/react-tabster/lib/hooks/useFocusVisible.js



function useFocusVisible(options = {}) {
    const contextValue = (0,ProviderContext/* useFluent */.Y)();
    const scopeRef = react.useRef(null);
    var _options_targetDocument;
    const targetDocument = (_options_targetDocument = options.targetDocument) !== null && _options_targetDocument !== void 0 ? _options_targetDocument : contextValue.targetDocument;
    react.useEffect(()=>{
        if ((targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.defaultView) && scopeRef.current) {
            return applyFocusVisiblePolyfill(scopeRef.current, targetDocument.defaultView);
        }
    }, [
        scopeRef,
        targetDocument
    ]);
    return scopeRef;
}

// EXTERNAL MODULE: ./node_modules/@fluentui/react-utilities/lib/compose/slot.js
var slot = __webpack_require__(56257);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-utilities/lib/compose/getIntrinsicElementProps.js + 2 modules
var getIntrinsicElementProps = __webpack_require__(30460);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-utilities/lib/hooks/useMergedRefs.js
var useMergedRefs = __webpack_require__(85532);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-utilities/lib/hooks/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(3808);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-utilities/lib/hooks/useId.js + 1 modules
var useId = __webpack_require__(93564);
;// ./node_modules/@fluentui/react-provider/lib/components/FluentProvider/createCSSRuleFromTheme.js
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

// EXTERNAL MODULE: ./node_modules/@griffel/core/__styles.esm.js
var _styles_esm = __webpack_require__(58413);
// EXTERNAL MODULE: ./node_modules/@griffel/core/mergeClasses.esm.js
var mergeClasses_esm = __webpack_require__(20677);
;// ./node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderStyles.styles.js



const fluentProviderClassNames = {
  root: 'fui-FluentProvider'
};
const useStyles = /*#__PURE__*/(0,_styles_esm/* __styles */.X)({
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

  const renderer = (0,RendererContext_esm/* useRenderer */.J)();
  const styles = useStyles({
    dir: state.dir,
    renderer
  });
  state.root.className = (0,mergeClasses_esm/* mergeClasses */.z)(fluentProviderClassNames.root, state.themeClassName, styles.root, state.root.className);
  return state;
};
;// ./node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderThemeStyleTag.js




// String concatenation is used to prevent bundlers to complain with older versions of React
const useInsertionEffect = react_namespaceObject['useInsertion' + 'Effect'] ? react_namespaceObject['useInsertion' + 'Effect'] : useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.E;
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
    } else if (false) // removed by dead control flow
{}
};
/**
 * Writes a theme as css variables in a style tag on the provided targetDocument as a rule applied to a CSS class
 * @internal
 * @returns CSS class to apply the rule
 */ const useFluentProviderThemeStyleTag = (options)=>{
    'use no memo';
    const { targetDocument, theme, rendererAttributes } = options;
    const styleTag = react.useRef();
    const styleTagId = (0,useId/* useId */.Bi)(fluentProviderClassNames.root);
    const styleElementAttributes = rendererAttributes;
    const rule = react.useMemo(()=>createCSSRuleFromTheme(`.${styleTagId}`, theme), [
        theme,
        styleTagId
    ]);
    if (false) // removed by dead control flow
{}
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
    react.useState(()=>{
        if (!targetDocument) {
            return;
        }
        const themeStyleElement = targetDocument.getElementById(styleTagId);
        if (themeStyleElement) {
            targetDocument.head.append(themeStyleElement);
        }
    });
}

;// ./node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProvider.js






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
    const parentContext = (0,ProviderContext/* useFluent */.Y)();
    const parentTheme = useTheme();
    const parentOverrides = useOverrides();
    const parentCustomStyleHooks = react.useContext(CustomStyleHooksContext/* CustomStyleHooksContext */.k7) || DEFAULT_STYLE_HOOKS;
    /**
   * TODO: add merge functions to "dir" merge,
   * nesting providers with the same "dir" should not add additional attributes to DOM
   * see https://github.com/microsoft/fluentui/blob/0dc74a19f3aa5a058224c20505016fbdb84db172/packages/fluentui/react-northstar/src/utils/mergeProviderContexts.ts#L89-L93
   */ const { applyStylesToPortals = true, // eslint-disable-next-line @typescript-eslint/naming-convention
    customStyleHooks_unstable, dir = parentContext.dir, targetDocument = parentContext.targetDocument, theme, overrides_unstable: overrides = {} } = props;
    const mergedTheme = shallowMerge(parentTheme, theme);
    const mergedOverrides = shallowMerge(parentOverrides, overrides);
    const mergedCustomStyleHooks = shallowMerge(parentCustomStyleHooks, customStyleHooks_unstable);
    const renderer = (0,RendererContext_esm/* useRenderer */.J)();
    var _renderer_styleElementAttributes;
    const { styleTagId, rule } = useFluentProviderThemeStyleTag({
        theme: mergedTheme,
        targetDocument,
        rendererAttributes: (_renderer_styleElementAttributes = renderer.styleElementAttributes) !== null && _renderer_styleElementAttributes !== void 0 ? _renderer_styleElementAttributes : DEFAULT_RENDERER_ATTRIBUTES
    });
    if (false) // removed by dead control flow
{}
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
        root: slot/* always */.Gk((0,getIntrinsicElementProps/* getIntrinsicElementProps */.g)('div', {
            ...props,
            dir,
            // FIXME:
            // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
            // but since it would be a breaking change to fix it, we are casting ref to it's proper type
            ref: (0,useMergedRefs/* useMergedRefs */.a)(ref, useFocusVisible({
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
    return react.useContext(ThemeContext);
}

;// ./node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderContextValues.js

function useFluentProviderContextValues_unstable(state) {
    const { applyStylesToPortals, // eslint-disable-next-line @typescript-eslint/naming-convention
    customStyleHooks_unstable, dir, root, targetDocument, theme, themeClassName, // eslint-disable-next-line @typescript-eslint/naming-convention
    overrides_unstable } = state;
    const provider = react.useMemo(()=>({
            dir,
            targetDocument
        }), [
        dir,
        targetDocument
    ]);
    // "Tooltip" component mutates an object in this context, instance should be stable
    const [tooltip] = react.useState(()=>({}));
    const iconDirection = react.useMemo(()=>({
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

;// ./node_modules/@fluentui/react-provider/lib/components/FluentProvider/FluentProvider.js





const FluentProvider = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    const state = useFluentProvider_unstable(props, ref);
    useFluentProviderStyles_unstable(state);
    const contextValues = useFluentProviderContextValues_unstable(state);
    return renderFluentProvider_unstable(state, contextValues);
});
FluentProvider.displayName = 'FluentProvider';


/***/ }),

/***/ 68909:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "$e", 0, /* binding */ useCustomStyleHook,
/* harmony export */   "gH", 0, /* binding */ CustomStyleHooksProvider,
/* harmony export */   "k7", 0, /* binding */ CustomStyleHooksContext
/* harmony export */ ]);


/***/ }),

/***/ 97073:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: function() { return /* binding */ useFluent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "K", 0, /* binding */ Provider
/* harmony export */ ]);


/***/ }),

/***/ 82222:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ assertSlots; }
/* harmony export */ });




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
   */ if (false) // removed by dead control flow
{}
}


/***/ }),

/***/ 86800:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "Y9", 0, /* binding */ SLOT_RENDER_FUNCTION_SYMBOL,
/* harmony export */   "b9", 0, /* binding */ SLOT_CLASS_NAME_PROP_SYMBOL,
/* harmony export */   "on", 0, /* binding */ SLOT_ELEMENT_TYPE_SYMBOL
/* harmony export */ ]);


/***/ }),

/***/ 30460:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: function() { return /* binding */ getIntrinsicElementProps; }
});

;// ./node_modules/@fluentui/react-utilities/lib/utils/properties.js
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
 */ const divProperties = (/* unused pure expression or super */ null && (htmlElementProperties));
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

;// ./node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js


const nativeElementMap = {
    label: labelProperties,
    audio: audioProperties,
    video: videoProperties,
    ol: olProperties,
    li: liProperties,
    a: anchorProperties,
    button: buttonProperties,
    input: inputProperties,
    textarea: textAreaProperties,
    select: selectProperties,
    option: optionProperties,
    table: tableProperties,
    tr: trProperties,
    th: thProperties,
    td: tdProperties,
    colGroup: colGroupProperties,
    col: colProperties,
    fieldset: fieldsetProperties,
    form: formProperties,
    iframe: iframeProperties,
    img: imgProperties,
    time: timeProperties,
    dialog: dialogProperties
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
    const allowedPropNames = tagName && nativeElementMap[tagName] || htmlElementProperties;
    allowedPropNames.as = 1;
    return getNativeProps(props, allowedPropNames, excludedPropNames);
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

;// ./node_modules/@fluentui/react-utilities/lib/compose/getIntrinsicElementProps.js


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
    return getNativeElementProps((_props_as = props.as) !== null && _props_as !== void 0 ? _props_as : tagName, props, excludedPropNames);
};


/***/ }),

/***/ 56257:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gk: function() { return /* binding */ always; },
/* harmony export */   lq: function() { return /* binding */ optional; }
/* harmony export */ });
/* unused harmony export resolveShorthand */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86800);


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
        [_constants__WEBPACK_IMPORTED_MODULE_1__/* .SLOT_ELEMENT_TYPE_SYMBOL */ .on]: elementType,
        [_constants__WEBPACK_IMPORTED_MODULE_1__/* .SLOT_CLASS_NAME_PROP_SYMBOL */ .b9]: props === null || props === void 0 ? void 0 : props.className
    };
    if (props && typeof props.children === 'function') {
        propsWithMetadata[_constants__WEBPACK_IMPORTED_MODULE_1__/* .SLOT_RENDER_FUNCTION_SYMBOL */ .Y9] = props.children;
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
    if (value && typeof value !== 'object' && "production" !== 'production') // removed by dead control flow
{}
    return value;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isIterable = (value)=>typeof value === 'object' && value !== null && Symbol.iterator in value;


/***/ }),

/***/ 93564:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Bi: function() { return /* binding */ useId; }
});

// UNUSED EXPORTS: IdPrefixProvider, resetIdsForTests

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
;// ./node_modules/@fluentui/react-utilities/lib/ssr/SSRContext.js
/* unused harmony import specifier */ var React;
/* unused harmony import specifier */ var canUseDOM;


/**
 * Default context value to use in case there is no SSRProvider. This is fine for client-only apps.
 *
 * @internal
 */ const defaultSSRContextValue = {
    current: 0
};
const SSRContext = /*#__PURE__*/ react.createContext(undefined);
/**
 * @internal
 */ function useSSRContext() {
    var _React_useContext;
    return (_React_useContext = react.useContext(SSRContext)) !== null && _React_useContext !== void 0 ? _React_useContext : defaultSSRContextValue;
}
/**
 * When using SSR with Fluent UI, applications must be wrapped in an SSRProvider. This ensures that auto generated ids
 * are consistent between the client and server.
 *
 * @public
 */ const SSRProvider = (props)=>{
    const [value] = React.useState(()=>({
            current: 0
        }));
    return /*#__PURE__*/ React.createElement(SSRContext.Provider, {
        value: value
    }, props.children);
};
/**
 * Returns whether the component is currently being server side rendered or hydrated on the client. Can be used to delay
 * browser-specific rendering until after hydration. May cause re-renders on a client when is used within SSRProvider.
 */ function useIsSSR() {
    const isInSSRContext = useSSRContext() !== defaultSSRContextValue;
    const [isSSR, setIsSSR] = React.useState(isInSSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider, provide a warning to hint to the
    // developer to add one.
    if (false) // removed by dead control flow
{}
    // If on the client, and the component was initially server rendered, then schedule a layout effect to update the
    // component after hydration.
    if (canUseDOM() && isInSSRContext) {
        // This if statement technically breaks the rules of hooks, but is safe because the condition never changes after
        // mounting.
        // eslint-disable-next-line
        React.useLayoutEffect(()=>{
            setIsSSR(false);
        }, []);
    }
    return isSSR;
}

;// ./node_modules/@fluentui/react-utilities/lib/hooks/useId.js
/* unused harmony import specifier */ var useId_defaultSSRContextValue;


const IdPrefixContext = react.createContext(undefined);
/**
 * Allows to define a prefix that will be used for all IDs generated by useId() hook. It's useful to avoid collisions
 * between different bundles.
 */ const IdPrefixProvider = IdPrefixContext.Provider;
function useIdPrefix() {
    return react.useContext(IdPrefixContext) || '';
}
/**
 * Resets generated IDs, should be used only in tests.
 */ function resetIdsForTests() {
    useId_defaultSSRContextValue.current = 0;
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
    const contextValue = useSSRContext();
    const idPrefix = useIdPrefix();
    // Checking if useId is available on React, if it is, we use it to generate the id. String concatenation is used to
    // prevent bundlers from complaining with older versions of React.
    const _useId = react_namespaceObject['use' + 'Id'];
    if (_useId) {
        const generatedId = _useId();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const escapedId = react.useMemo(()=>generatedId.replace(/:/g, ''), [
            generatedId
        ]);
        return providedId || `${idPrefix}${prefix}${escapedId}`;
    }
    // Hooks appear to be running conditionally, but they will always run in the same order since it's based on
    // the version of React being used. This is safe to ignore.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return react.useMemo(()=>{
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

/***/ 3808:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _ssr_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40206);


/**
 * React currently throws a warning when using useLayoutEffect on the server. To get around it, we can conditionally
 * useEffect on the server (no-op) and useLayoutEffect in the browser. We occasionally need useLayoutEffect to
 * ensure we don't get a render flash for certain operations, but we may also need affected components to render on
 * the server.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 */ // eslint-disable-next-line no-restricted-properties
const useIsomorphicLayoutEffect = (0,_ssr_index__WEBPACK_IMPORTED_MODULE_1__/* .canUseDOM */ .S)() ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "E", 0, /* binding */ useIsomorphicLayoutEffect
/* harmony export */ ]);


/***/ }),

/***/ 85532:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ useMergedRefs; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

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
            if (typeof ref === 'string' && "production" !== 'production') // removed by dead control flow
{}
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

/***/ 40206:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ canUseDOM; }
/* harmony export */ });
/**
 * Verifies if an application can use DOM.
 */ function canUseDOM() {
    return /* eslint-disable @nx/workspace-no-restricted-globals -- expected ignore ( SSR friendly acquisition of globals )*/ typeof window !== 'undefined' && !!(window.document && // eslint-disable-next-line @typescript-eslint/no-deprecated
    window.document.createElement);
}


/***/ }),

/***/ 96631:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: function() { return /* binding */ isHTMLElement; }
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

/***/ 12272:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: function() { return /* binding */ webLightTheme; }
});

;// ./node_modules/@fluentui/tokens/lib/global/colors.js
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
const grey10Alpha = (/* unused pure expression or super */ null && ({
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
}));
const grey12Alpha = (/* unused pure expression or super */ null && ({
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
}));
const grey14Alpha = (/* unused pure expression or super */ null && ({
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
}));
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
const burgundy = (/* unused pure expression or super */ null && ({
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
}));
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
const bronze = (/* unused pure expression or super */ null && ({
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
}));
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
const darkBrown = (/* unused pure expression or super */ null && ({
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
}));
const lime = (/* unused pure expression or super */ null && ({
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
}));
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
const darkTeal = (/* unused pure expression or super */ null && ({
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
}));
const cyan = (/* unused pure expression or super */ null && ({
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
}));
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
const lightBlue = (/* unused pure expression or super */ null && ({
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
}));
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
const darkBlue = (/* unused pure expression or super */ null && ({
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
}));
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
const darkPurple = (/* unused pure expression or super */ null && ({
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
}));
const orchid = (/* unused pure expression or super */ null && ({
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
}));
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
const hotPink = (/* unused pure expression or super */ null && ({
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
}));
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
const silver = (/* unused pure expression or super */ null && ({
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
}));
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
const colors_anchor = {
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
const charcoal = (/* unused pure expression or super */ null && ({
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
}));

;// ./node_modules/@fluentui/tokens/lib/global/colorPalette.js

const statusSharedColors = {
    red: red,
    green: green,
    darkOrange: darkOrange,
    yellow: yellow,
    berry: berry,
    lightGreen: lightGreen,
    marigold: marigold
};
const personaSharedColors = {
    darkRed: darkRed,
    cranberry: cranberry,
    pumpkin: pumpkin,
    peach: peach,
    gold: gold,
    brass: brass,
    brown: brown,
    forest: forest,
    seafoam: seafoam,
    darkGreen: darkGreen,
    lightTeal: lightTeal,
    teal: teal,
    steel: steel,
    blue: blue,
    royalBlue: royalBlue,
    cornflower: cornflower,
    navy: navy,
    lavender: lavender,
    purple: purple,
    grape: grape,
    lilac: lilac,
    pink: pink,
    magenta: magenta,
    plum: plum,
    beige: beige,
    mink: mink,
    platinum: platinum,
    anchor: colors_anchor
};
const mappedStatusColors = {
    cranberry: cranberry,
    green: green,
    orange: orange
};

;// ./node_modules/@fluentui/tokens/lib/sharedColorNames.js
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
/* List of global colors which semantic alias status tokens map to */ const mappedStatusColorNames = (/* unused pure expression or super */ null && ([
    'cranberry',
    'green',
    'orange'
]));
/* Names of colors not used in alias tokens but produced by token pipeline as global color tokens. */ const unusedSharedColorNames = (/* unused pure expression or super */ null && ([
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
]));

;// ./node_modules/@fluentui/tokens/lib/statusColorMapping.js
const statusColorMapping = {
    success: 'green',
    warning: 'orange',
    danger: 'cranberry'
};

;// ./node_modules/@fluentui/tokens/lib/alias/lightColorPalette.js



const statusColorPaletteTokens = statusSharedColorNames.reduce((acc, sharedColor)=>{
    const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
    const sharedColorTokens = {
        [`colorPalette${color}Background1`]: statusSharedColors[sharedColor].tint60,
        [`colorPalette${color}Background2`]: statusSharedColors[sharedColor].tint40,
        [`colorPalette${color}Background3`]: statusSharedColors[sharedColor].primary,
        [`colorPalette${color}Foreground1`]: statusSharedColors[sharedColor].shade10,
        [`colorPalette${color}Foreground2`]: statusSharedColors[sharedColor].shade30,
        [`colorPalette${color}Foreground3`]: statusSharedColors[sharedColor].primary,
        [`colorPalette${color}BorderActive`]: statusSharedColors[sharedColor].primary,
        [`colorPalette${color}Border1`]: statusSharedColors[sharedColor].tint40,
        [`colorPalette${color}Border2`]: statusSharedColors[sharedColor].primary
    };
    return Object.assign(acc, sharedColorTokens);
}, {});
// one-off patch for yellow
statusColorPaletteTokens.colorPaletteYellowForeground1 = statusSharedColors.yellow.shade30;
statusColorPaletteTokens.colorPaletteRedForegroundInverted = statusSharedColors.red.tint20;
statusColorPaletteTokens.colorPaletteGreenForegroundInverted = statusSharedColors.green.tint20;
statusColorPaletteTokens.colorPaletteYellowForegroundInverted = statusSharedColors.yellow.tint40;
const personaColorPaletteTokens = personaSharedColorNames.reduce((acc, sharedColor)=>{
    const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
    const sharedColorTokens = {
        [`colorPalette${color}Background2`]: personaSharedColors[sharedColor].tint40,
        [`colorPalette${color}Foreground2`]: personaSharedColors[sharedColor].shade30,
        [`colorPalette${color}BorderActive`]: personaSharedColors[sharedColor].primary
    };
    return Object.assign(acc, sharedColorTokens);
}, {});
const colorPaletteTokens = {
    ...statusColorPaletteTokens,
    ...personaColorPaletteTokens
};
const colorStatusTokens = Object.entries(statusColorMapping).reduce((acc, [statusColor, sharedColor])=>{
    const color = statusColor.slice(0, 1).toUpperCase() + statusColor.slice(1);
    // TODO: double check the mapping with design
    const statusColorTokens = {
        [`colorStatus${color}Background1`]: mappedStatusColors[sharedColor].tint60,
        [`colorStatus${color}Background2`]: mappedStatusColors[sharedColor].tint40,
        [`colorStatus${color}Background3`]: mappedStatusColors[sharedColor].primary,
        [`colorStatus${color}Foreground1`]: mappedStatusColors[sharedColor].shade10,
        [`colorStatus${color}Foreground2`]: mappedStatusColors[sharedColor].shade30,
        [`colorStatus${color}Foreground3`]: mappedStatusColors[sharedColor].primary,
        [`colorStatus${color}ForegroundInverted`]: mappedStatusColors[sharedColor].tint30,
        [`colorStatus${color}BorderActive`]: mappedStatusColors[sharedColor].primary,
        [`colorStatus${color}Border1`]: mappedStatusColors[sharedColor].tint40,
        [`colorStatus${color}Border2`]: mappedStatusColors[sharedColor].primary
    };
    return Object.assign(acc, statusColorTokens);
}, {});
// one-off overrides for colorStatus tokens
colorStatusTokens.colorStatusDangerBackground3Hover = mappedStatusColors[statusColorMapping.danger].shade10;
colorStatusTokens.colorStatusDangerBackground3Pressed = mappedStatusColors[statusColorMapping.danger].shade20;
colorStatusTokens.colorStatusWarningForeground1 = mappedStatusColors[statusColorMapping.warning].shade20;
colorStatusTokens.colorStatusWarningForeground3 = mappedStatusColors[statusColorMapping.warning].shade20;
colorStatusTokens.colorStatusWarningBorder2 = mappedStatusColors[statusColorMapping.warning].shade20;

;// ./node_modules/@fluentui/tokens/lib/alias/lightColor.js
/* !!! DO NOT EDIT !!! */ /* This file has been generated by the token pipeline */ 
const generateColorTokens = (brand)=>({
        colorNeutralForeground1: grey[14],
        colorNeutralForeground1Hover: grey[14],
        colorNeutralForeground1Pressed: grey[14],
        colorNeutralForeground1Selected: grey[14],
        colorNeutralForeground2: grey[26],
        colorNeutralForeground2Hover: grey[14],
        colorNeutralForeground2Pressed: grey[14],
        colorNeutralForeground2Selected: grey[14],
        colorNeutralForeground2BrandHover: brand[80],
        colorNeutralForeground2BrandPressed: brand[70],
        colorNeutralForeground2BrandSelected: brand[80],
        colorNeutralForeground3: grey[38],
        colorNeutralForeground3Hover: grey[26],
        colorNeutralForeground3Pressed: grey[26],
        colorNeutralForeground3Selected: grey[26],
        colorNeutralForeground3BrandHover: brand[80],
        colorNeutralForeground3BrandPressed: brand[70],
        colorNeutralForeground3BrandSelected: brand[80],
        colorNeutralForeground4: grey[44],
        colorNeutralForegroundDisabled: grey[74],
        colorNeutralForegroundInvertedDisabled: whiteAlpha[40],
        colorBrandForegroundLink: brand[70],
        colorBrandForegroundLinkHover: brand[60],
        colorBrandForegroundLinkPressed: brand[40],
        colorBrandForegroundLinkSelected: brand[70],
        colorNeutralForeground2Link: grey[26],
        colorNeutralForeground2LinkHover: grey[14],
        colorNeutralForeground2LinkPressed: grey[14],
        colorNeutralForeground2LinkSelected: grey[14],
        colorCompoundBrandForeground1: brand[80],
        colorCompoundBrandForeground1Hover: brand[70],
        colorCompoundBrandForeground1Pressed: brand[60],
        colorBrandForeground1: brand[80],
        colorBrandForeground2: brand[70],
        colorBrandForeground2Hover: brand[60],
        colorBrandForeground2Pressed: brand[30],
        colorNeutralForeground1Static: grey[14],
        colorNeutralForegroundStaticInverted: white,
        colorNeutralForegroundInverted: white,
        colorNeutralForegroundInvertedHover: white,
        colorNeutralForegroundInvertedPressed: white,
        colorNeutralForegroundInvertedSelected: white,
        colorNeutralForegroundInverted2: white,
        colorNeutralForegroundOnBrand: white,
        colorNeutralForegroundInvertedLink: white,
        colorNeutralForegroundInvertedLinkHover: white,
        colorNeutralForegroundInvertedLinkPressed: white,
        colorNeutralForegroundInvertedLinkSelected: white,
        colorBrandForegroundInverted: brand[100],
        colorBrandForegroundInvertedHover: brand[110],
        colorBrandForegroundInvertedPressed: brand[100],
        colorBrandForegroundOnLight: brand[80],
        colorBrandForegroundOnLightHover: brand[70],
        colorBrandForegroundOnLightPressed: brand[50],
        colorBrandForegroundOnLightSelected: brand[60],
        colorNeutralBackground1: white,
        colorNeutralBackground1Hover: grey[96],
        colorNeutralBackground1Pressed: grey[88],
        colorNeutralBackground1Selected: grey[92],
        colorNeutralBackground2: grey[98],
        colorNeutralBackground2Hover: grey[94],
        colorNeutralBackground2Pressed: grey[86],
        colorNeutralBackground2Selected: grey[90],
        colorNeutralBackground3: grey[96],
        colorNeutralBackground3Hover: grey[92],
        colorNeutralBackground3Pressed: grey[84],
        colorNeutralBackground3Selected: grey[88],
        colorNeutralBackground4: grey[94],
        colorNeutralBackground4Hover: grey[98],
        colorNeutralBackground4Pressed: grey[96],
        colorNeutralBackground4Selected: white,
        colorNeutralBackground5: grey[92],
        colorNeutralBackground5Hover: grey[96],
        colorNeutralBackground5Pressed: grey[94],
        colorNeutralBackground5Selected: grey[98],
        colorNeutralBackground6: grey[90],
        colorNeutralBackgroundInverted: grey[16],
        colorNeutralBackgroundStatic: grey[20],
        colorNeutralBackgroundAlpha: whiteAlpha[50],
        colorNeutralBackgroundAlpha2: whiteAlpha[80],
        colorSubtleBackground: 'transparent',
        colorSubtleBackgroundHover: grey[96],
        colorSubtleBackgroundPressed: grey[88],
        colorSubtleBackgroundSelected: grey[92],
        colorSubtleBackgroundLightAlphaHover: whiteAlpha[70],
        colorSubtleBackgroundLightAlphaPressed: whiteAlpha[50],
        colorSubtleBackgroundLightAlphaSelected: 'transparent',
        colorSubtleBackgroundInverted: 'transparent',
        colorSubtleBackgroundInvertedHover: blackAlpha[10],
        colorSubtleBackgroundInvertedPressed: blackAlpha[30],
        colorSubtleBackgroundInvertedSelected: blackAlpha[20],
        colorTransparentBackground: 'transparent',
        colorTransparentBackgroundHover: 'transparent',
        colorTransparentBackgroundPressed: 'transparent',
        colorTransparentBackgroundSelected: 'transparent',
        colorNeutralBackgroundDisabled: grey[94],
        colorNeutralBackgroundInvertedDisabled: whiteAlpha[10],
        colorNeutralStencil1: grey[90],
        colorNeutralStencil2: grey[98],
        colorNeutralStencil1Alpha: blackAlpha[10],
        colorNeutralStencil2Alpha: blackAlpha[5],
        colorBackgroundOverlay: blackAlpha[40],
        colorScrollbarOverlay: blackAlpha[50],
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
        colorBrandBackgroundInverted: white,
        colorBrandBackgroundInvertedHover: brand[160],
        colorBrandBackgroundInvertedPressed: brand[140],
        colorBrandBackgroundInvertedSelected: brand[150],
        colorNeutralCardBackground: grey[98],
        colorNeutralCardBackgroundHover: white,
        colorNeutralCardBackgroundPressed: grey[96],
        colorNeutralCardBackgroundSelected: grey[92],
        colorNeutralCardBackgroundDisabled: grey[94],
        colorNeutralStrokeAccessible: grey[38],
        colorNeutralStrokeAccessibleHover: grey[34],
        colorNeutralStrokeAccessiblePressed: grey[30],
        colorNeutralStrokeAccessibleSelected: brand[80],
        colorNeutralStroke1: grey[82],
        colorNeutralStroke1Hover: grey[78],
        colorNeutralStroke1Pressed: grey[70],
        colorNeutralStroke1Selected: grey[74],
        colorNeutralStroke2: grey[88],
        colorNeutralStroke3: grey[94],
        colorNeutralStrokeSubtle: grey[88],
        colorNeutralStrokeOnBrand: white,
        colorNeutralStrokeOnBrand2: white,
        colorNeutralStrokeOnBrand2Hover: white,
        colorNeutralStrokeOnBrand2Pressed: white,
        colorNeutralStrokeOnBrand2Selected: white,
        colorBrandStroke1: brand[80],
        colorBrandStroke2: brand[140],
        colorBrandStroke2Hover: brand[120],
        colorBrandStroke2Pressed: brand[80],
        colorBrandStroke2Contrast: brand[140],
        colorCompoundBrandStroke: brand[80],
        colorCompoundBrandStrokeHover: brand[70],
        colorCompoundBrandStrokePressed: brand[60],
        colorNeutralStrokeDisabled: grey[88],
        colorNeutralStrokeInvertedDisabled: whiteAlpha[40],
        colorTransparentStroke: 'transparent',
        colorTransparentStrokeInteractive: 'transparent',
        colorTransparentStrokeDisabled: 'transparent',
        colorNeutralStrokeAlpha: blackAlpha[5],
        colorNeutralStrokeAlpha2: whiteAlpha[20],
        colorStrokeFocus1: white,
        colorStrokeFocus2: black,
        colorNeutralShadowAmbient: 'rgba(0,0,0,0.12)',
        colorNeutralShadowKey: 'rgba(0,0,0,0.14)',
        colorNeutralShadowAmbientLighter: 'rgba(0,0,0,0.06)',
        colorNeutralShadowKeyLighter: 'rgba(0,0,0,0.07)',
        colorNeutralShadowAmbientDarker: 'rgba(0,0,0,0.20)',
        colorNeutralShadowKeyDarker: 'rgba(0,0,0,0.24)',
        colorBrandShadowAmbient: 'rgba(0,0,0,0.30)',
        colorBrandShadowKey: 'rgba(0,0,0,0.25)'
    });

;// ./node_modules/@fluentui/tokens/lib/global/borderRadius.js
const borderRadius = {
    borderRadiusNone: '0',
    borderRadiusSmall: '2px',
    borderRadiusMedium: '4px',
    borderRadiusLarge: '6px',
    borderRadiusXLarge: '8px',
    borderRadiusCircular: '10000px'
};

;// ./node_modules/@fluentui/tokens/lib/global/fonts.js
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

;// ./node_modules/@fluentui/tokens/lib/global/strokeWidths.js
const strokeWidths = {
    strokeWidthThin: '1px',
    strokeWidthThick: '2px',
    strokeWidthThicker: '3px',
    strokeWidthThickest: '4px'
};

;// ./node_modules/@fluentui/tokens/lib/utils/shadows.js
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

;// ./node_modules/@fluentui/tokens/lib/global/durations.js
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

;// ./node_modules/@fluentui/tokens/lib/global/curves.js
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

;// ./node_modules/@fluentui/tokens/lib/global/spacings.js
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

;// ./node_modules/@fluentui/tokens/lib/utils/createLightTheme.js







const createLightTheme = (brand)=>{
    const colorTokens = generateColorTokens(brand);
    return {
        ...borderRadius,
        ...fontSizes,
        ...lineHeights,
        ...fontFamilies,
        ...fontWeights,
        ...strokeWidths,
        ...horizontalSpacings,
        ...verticalSpacings,
        ...durations,
        ...curves,
        ...colorTokens,
        ...colorPaletteTokens,
        ...colorStatusTokens,
        ...createShadowTokens(colorTokens.colorNeutralShadowAmbient, colorTokens.colorNeutralShadowKey),
        ...createShadowTokens(colorTokens.colorBrandShadowAmbient, colorTokens.colorBrandShadowKey, 'Brand')
    };
};

;// ./node_modules/@fluentui/tokens/lib/global/brandColors.js
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
const brandTeams = (/* unused pure expression or super */ null && ({
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
}));
const brandOffice = (/* unused pure expression or super */ null && ({
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
}));
const brandTeamsV21 = (/* unused pure expression or super */ null && ({
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
}));

;// ./node_modules/@fluentui/tokens/lib/themes/web/lightTheme.js


const webLightTheme = createLightTheme(brandWeb);


/***/ }),

/***/ 58413:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: function() { return /* binding */ __styles; }
/* harmony export */ });
/* harmony import */ var _insertionFactory_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53864);
/* harmony import */ var _runtime_reduceToClassNameForSlots_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87294);







/**
 * A version of makeStyles() that accepts build output as an input and skips all runtime transforms.
 *
 * @internal
 */
function __styles(classesMapBySlot, cssRules, factory = _insertionFactory_esm_js__WEBPACK_IMPORTED_MODULE_0__/* .insertionFactory */ .A) {
  const insertStyles = factory();
  let ltrClassNamesForSlots = null;
  let rtlClassNamesForSlots = null;
  let sourceURL;
  if (false) // removed by dead control flow
{}
  function computeClasses(options) {
    const {
      dir,
      renderer
    } = options;
    const isLTR = dir === 'ltr';
    if (isLTR) {
      if (ltrClassNamesForSlots === null) {
        ltrClassNamesForSlots = (0,_runtime_reduceToClassNameForSlots_esm_js__WEBPACK_IMPORTED_MODULE_1__/* .reduceToClassNameForSlots */ .N)(classesMapBySlot, dir);
      }
    } else {
      if (rtlClassNamesForSlots === null) {
        rtlClassNamesForSlots = (0,_runtime_reduceToClassNameForSlots_esm_js__WEBPACK_IMPORTED_MODULE_1__/* .reduceToClassNameForSlots */ .N)(classesMapBySlot, dir);
      }
    }
    insertStyles(renderer, cssRules);
    const classNamesForSlots = isLTR ? ltrClassNamesForSlots : rtlClassNamesForSlots;
    if (false) // removed by dead control flow
{}
    return classNamesForSlots;
  }
  return computeClasses;
}


//# sourceMappingURL=__styles.esm.js.map


/***/ }),

/***/ 45614:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports DEBUG_RESET_CLASSES, DEBUG_SEQUENCE_SEPARATOR, RESET_HASH_PREFIX */
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
const DEBUG_RESET_CLASSES = /*#__PURE__*/(/* unused pure expression or super */ null && (getGlobalVar('DEBUG_RESET_CLASSES', {})));
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
const SEQUENCE_SIZE =  true ? SEQUENCE_PREFIX.length + SEQUENCE_HASH_LENGTH : 0;
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "EJ", 0, /* binding */ DATA_PRIORITY_ATTR,
/* harmony export */   "Ut", 0, /* binding */ RESET,
/* harmony export */   "ed", 0, /* binding */ DATA_BUCKET_ATTR,
/* harmony export */   "k1", 0, /* binding */ DEFINITION_LOOKUP_TABLE,
/* harmony export */   "qw", 0, /* binding */ UNSUPPORTED_CSS_PROPERTIES,
/* harmony export */   "wn", 0, /* binding */ SEQUENCE_SIZE
/* harmony export */ ]);


/***/ }),

/***/ 53864:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* binding */ insertionFactory
/* harmony export */ ]);


/***/ }),

/***/ 20677:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: function() { return /* binding */ mergeClasses; }
/* harmony export */ });
/* unused harmony export mergeClassesCachedResults */
/* harmony import */ var _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45614);
/* harmony import */ var _runtime_utils_hashSequence_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29255);
/* harmony import */ var _runtime_reduceToClassNameForSlots_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87294);




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
      const sequenceIndex = className.indexOf((/* inlined export .SEQUENCE_PREFIX */"___"));
      if (sequenceIndex === -1) {
        if (false) // removed by dead control flow
{}
        resultClassName += className + ' ';
      } else {
        const sequenceId = className.substr(sequenceIndex, _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__/* .SEQUENCE_SIZE */ .wn);
        // Handles a case with mixed classnames, i.e. "ui-button ATOMIC_CLASSES"
        if (sequenceIndex > 0) {
          resultClassName += className.slice(0, sequenceIndex);
        }
        sequenceMatch += sequenceId;
        sequencesIds[i] = sequenceId;
      }
      if (false) // removed by dead control flow
{}
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
      const sequenceMapping = _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__/* .DEFINITION_LOOKUP_TABLE */ .k1[sequenceId];
      if (sequenceMapping) {
        sequenceMappings.push(sequenceMapping[(/* inlined export .LOOKUP_DEFINITIONS_INDEX */0)]);
        if (false) // removed by dead control flow
{}
        dir = sequenceMapping[(/* inlined export .LOOKUP_DIR_INDEX */1)];
      } else {
        if (false) // removed by dead control flow
{}
      }
    }
  }
  // eslint-disable-next-line prefer-spread
  const resultClassesMap = Object.assign.apply(Object,
  // .assign() mutates the first object, we can't mutate mappings as it will produce invalid results later
  [{}].concat(sequenceMappings));
  const [atomicClasses, classesMapHash] = (0,_runtime_reduceToClassNameForSlots_esm_js__WEBPACK_IMPORTED_MODULE_2__/* .reduceToClassName */ .z)(resultClassesMap, dir);
  // Each merge of classes generates a new sequence of atomic classes that needs to be registered
  const newSequenceHash = (0,_runtime_utils_hashSequence_esm_js__WEBPACK_IMPORTED_MODULE_1__/* .hashSequence */ .G)(classesMapHash, dir, sequencesIds);
  const newClassName = newSequenceHash + ' ' + atomicClasses;
  mergeClassesCachedResults[sequenceMatch] = newClassName;
  _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__/* .DEFINITION_LOOKUP_TABLE */ .k1[newSequenceHash] = [resultClassesMap, dir];
  return resultClassName + newClassName;
}


//# sourceMappingURL=mergeClasses.esm.js.map


/***/ }),

/***/ 87294:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: function() { return /* binding */ reduceToClassNameForSlots; },
/* harmony export */   z: function() { return /* binding */ reduceToClassName; }
/* harmony export */ });
/* harmony import */ var _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45614);
/* harmony import */ var _utils_hashSequence_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29255);



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
    const sequenceHash = (0,_utils_hashSequence_esm_js__WEBPACK_IMPORTED_MODULE_1__/* .hashSequence */ .G)(slotClassesHash, dir);
    const resultSlotClasses = sequenceHash + (slotClasses === '' ? '' : ' ' + slotClasses);
    _constants_esm_js__WEBPACK_IMPORTED_MODULE_0__/* .DEFINITION_LOOKUP_TABLE */ .k1[sequenceHash] = [classesMapBySlot[slotName], dir];
    classNamesForSlots[slotName] = resultSlotClasses;
  }
  return classNamesForSlots;
}


//# sourceMappingURL=reduceToClassNameForSlots.esm.js.map


/***/ }),

/***/ 29255:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: function() { return /* binding */ hashSequence; }
/* harmony export */ });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35137);



function padEndHash(value) {
  const hashLength = value.length;
  if (hashLength === (/* inlined export .SEQUENCE_HASH_LENGTH */7)) {
    return value;
  }
  for (let i = hashLength; i < (/* inlined export .SEQUENCE_HASH_LENGTH */7); i++) {
    value += '0';
  }
  return value;
}
function hashSequence(classes, dir, sequenceIds = []) {
  if (true) {
    return (/* inlined export .SEQUENCE_PREFIX */"___") + padEndHash((0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(classes + dir));
  }
  // removed by dead control flow

}


//# sourceMappingURL=hashSequence.esm.js.map


/***/ }),

/***/ 26312:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: function() { return /* binding */ useRenderer; }
});

// UNUSED EXPORTS: RendererProvider

;// ./node_modules/@griffel/core/runtime/utils/normalizeCSSBucketEntry.esm.js
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
  if (false) // removed by dead control flow
{}
  return entry;
}


//# sourceMappingURL=normalizeCSSBucketEntry.esm.js.map

// EXTERNAL MODULE: ./node_modules/@griffel/core/constants.esm.js
var constants_esm = __webpack_require__(45614);
;// ./node_modules/@griffel/core/renderer/createIsomorphicStyleSheet.esm.js
/* unused harmony import specifier */ var DATA_BUCKET_ATTR;
/* unused harmony import specifier */ var DATA_PRIORITY_ATTR;


function createIsomorphicStyleSheet(styleElement, bucketName, priority, elementAttributes) {
  // no CSSStyleSheet in SSR, just append rules here for server render
  const __cssRulesForSSR = [];
  elementAttributes[constants_esm/* DATA_BUCKET_ATTR */.ed] = bucketName;
  elementAttributes[constants_esm/* DATA_PRIORITY_ATTR */.EJ] = String(priority);
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
  const stylesheet = createIsomorphicStyleSheet(element, elementAttributes[DATA_BUCKET_ATTR], Number(elementAttributes[DATA_PRIORITY_ATTR]), elementAttributes);
  return stylesheet;
}


//# sourceMappingURL=createIsomorphicStyleSheet.esm.js.map

;// ./node_modules/@griffel/core/renderer/getStyleSheetForBucket.esm.js
/* unused harmony import specifier */ var getStyleSheetForBucket_esm_DATA_BUCKET_ATTR;
/* unused harmony import specifier */ var getStyleSheetForBucket_esm_DATA_PRIORITY_ATTR;



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
  const bucketName = styleEl.getAttribute(getStyleSheetForBucket_esm_DATA_BUCKET_ATTR);
  const priority = (_a = styleEl.getAttribute(getStyleSheetForBucket_esm_DATA_PRIORITY_ATTR)) !== null && _a !== void 0 ? _a : '0';
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
    const stylesheet = createIsomorphicStyleSheet(tag, bucketName, priority, Object.assign({}, renderer.styleElementAttributes, isMediaBucket && {
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
  const elementKey = element.getAttribute(constants_esm/* DATA_BUCKET_ATTR */.ed) + ((_b = element.media) !== null && _b !== void 0 ? _b : '');
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
  let comparer = el => targetOrder - styleBucketOrderingMap[el.getAttribute(constants_esm/* DATA_BUCKET_ATTR */.ed)];
  let styleElements = targetDocument.head.querySelectorAll(`[${constants_esm/* DATA_BUCKET_ATTR */.ed}]`);
  if (targetBucket === 'm') {
    const mediaElements = targetDocument.head.querySelectorAll(`[${constants_esm/* DATA_BUCKET_ATTR */.ed}="${targetBucket}"]`);
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

;// ./node_modules/@griffel/core/renderer/safeInsertRule.esm.js
/**
 * Suffixes to be ignored in case of error
 */
const ignoreSuffixes = /*#__PURE__*/(/* unused pure expression or super */ null && (['-moz-placeholder', '-moz-focus-inner', '-moz-focusring', '-ms-input-placeholder', '-moz-read-write', '-moz-read-only'].join('|')));
const ignoreSuffixesRegex = /*#__PURE__*/(/* unused pure expression or super */ null && (new RegExp(`:(${ignoreSuffixes})`)));
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
    if (false) // removed by dead control flow
{}
  }
}


//# sourceMappingURL=safeInsertRule.esm.js.map

;// ./node_modules/@griffel/core/renderer/createDOMRenderer.esm.js







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
          const [ruleCSS, metadata] = normalizeCSSBucketEntry(cssRulesForBucket[i]);
          const sheet = getStyleSheetForBucket(styleBucketName, targetDocument, insertionPoint || null, renderer, metadata);
          if (renderer.insertionCache[ruleCSS]) {
            continue;
          }
          renderer.insertionCache[ruleCSS] = styleBucketName;
          if (false) // removed by dead control flow
{}
          if (unstable_filterCSSRule) {
            if (unstable_filterCSSRule(ruleCSS)) {
              safeInsertRule(sheet, ruleCSS);
            }
          } else {
            safeInsertRule(sheet, ruleCSS);
          }
        }
      }
    }
  };
  if (targetDocument && "production" !== 'production' && 0) // removed by dead control flow
{}
  return renderer;
}


//# sourceMappingURL=createDOMRenderer.esm.js.map

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@griffel/react/RendererContext.esm.js
/* unused harmony import specifier */ var rehydrateRendererCache;
/* unused harmony import specifier */ var React;
/* unused harmony import specifier */ var canUseDOM;




/**
 * @private
 */
const RendererContext = /*#__PURE__*/react.createContext(/*#__PURE__*/createDOMRenderer());
/**
 * @public
 */
const RendererProvider = ({
  children,
  renderer,
  targetDocument
}) => {
  React.useMemo(() => {
    if (canUseDOM()) {
      // "rehydrateCache()" can't be called in effects as it needs to be called before any component will be rendered to
      // avoid double insertion of classes
      rehydrateRendererCache(renderer, targetDocument);
    }
  }, [renderer, targetDocument]);
  return /*#__PURE__*/React.createElement(RendererContext.Provider, {
    value: renderer
  }, children);
};
/**
 * Returns an instance of current makeStyles() renderer.
 *
 * @private Exported as "useRenderer_unstable" use it on own risk. Can be changed or removed without a notice.
 */
function useRenderer() {
  return react.useContext(RendererContext);
}


//# sourceMappingURL=RendererContext.esm.js.map


/***/ }),

/***/ 56004:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: function() { return /* binding */ useTextDirection; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


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

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "e", 0, /* binding */ TextDirectionProvider
/* harmony export */ ]);


/***/ }),

/***/ 99159:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: function() { return /* binding */ __styles; }
/* harmony export */ });
/* harmony import */ var _griffel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58413);
/* harmony import */ var _insertionFactory_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49264);
/* harmony import */ var _RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26312);
/* harmony import */ var _TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56004);





/**
 * A version of makeStyles() that accepts build output as an input and skips all runtime transforms.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function __styles(classesMapBySlot, cssRules) {
  const getStyles = (0,_griffel_core__WEBPACK_IMPORTED_MODULE_0__/* .__styles */ .X)(classesMapBySlot, cssRules, _insertionFactory_esm_js__WEBPACK_IMPORTED_MODULE_1__/* .insertionFactory */ .A);
  return function useClasses() {
    const dir = (0,_TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_3__/* .useTextDirection */ .m)();
    const renderer = (0,_RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__/* .useRenderer */ .J)();
    return getStyles({
      dir,
      renderer
    });
  };
}


//# sourceMappingURL=__styles.esm.js.map


/***/ }),

/***/ 49264:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ insertionFactory; }
});

;// ./node_modules/@griffel/react/utils/canUseDOM.esm.js
/**
 * Verifies if an application can use DOM.
 */
function canUseDOM() {
  return typeof window !== 'undefined' && !!(window.document && window.document.createElement);
}


//# sourceMappingURL=canUseDOM.esm.js.map

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
;// ./node_modules/@griffel/react/useInsertionEffect.esm.js


const useInsertionEffect =
// @ts-expect-error Hack to make sure that `useInsertionEffect` will not cause bundling issues in older React versions
// eslint-disable-next-line no-useless-concat
react_namespaceObject['useInsertion' + 'Effect'] ? react_namespaceObject['useInsertion' + 'Effect'] : undefined;


//# sourceMappingURL=useInsertionEffect.esm.js.map

;// ./node_modules/@griffel/react/insertionFactory.esm.js



const insertionFactory = () => {
  const insertionCache = {};
  return function insert(renderer, cssRules) {
    // Even if `useInsertionEffect` is available, we can use it on a client only as it will not be executed in SSR
    if (useInsertionEffect && canUseDOM()) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useInsertionEffect(() => {
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

/***/ 44541:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: function() { return /* binding */ makeStyles_esm_makeStyles; }
});

// EXTERNAL MODULE: ./node_modules/@griffel/core/insertionFactory.esm.js
var insertionFactory_esm = __webpack_require__(53864);
// EXTERNAL MODULE: ./node_modules/@emotion/hash/dist/emotion-hash.esm.js
var emotion_hash_esm = __webpack_require__(35137);
;// ./node_modules/rtl-css-js/dist/esm/convert-9768a965.js
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



;// ./node_modules/rtl-css-js/dist/esm/core.js


// EXTERNAL MODULE: ./node_modules/@griffel/core/constants.esm.js
var constants_esm = __webpack_require__(45614);
;// ./node_modules/@griffel/core/runtime/utils/hyphenateProperty.esm.js
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

;// ./node_modules/@griffel/core/runtime/utils/normalizeNestedProperty.esm.js
function normalizeNestedProperty(nestedProperty) {
  if (nestedProperty.charAt(0) === '&') {
    return nestedProperty.slice(1);
  }
  return nestedProperty;
}


//# sourceMappingURL=normalizeNestedProperty.esm.js.map

;// ./node_modules/stylis/src/Enum.js
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

;// ./node_modules/stylis/src/Utility.js
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
var Utility_assign = Object.assign

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

;// ./node_modules/stylis/src/Serializer.js



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
		case LAYER: if (element.children.length) break
		case IMPORT: case NAMESPACE: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case RULESET: if (!strlen(element.value = element.props.join(','))) return ''
	}

	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

;// ./node_modules/stylis/src/Tokenizer.js
/* unused harmony import specifier */ var Tokenizer_append;


var line = 1
var column = 1
var Tokenizer_length = 0
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
	return Utility_assign(node('', null, null, '', null, null, 0, root.siblings), root, {length: -root.length}, props)
}

/**
 * @param {object} root
 */
function lift (root) {
	while (root.root)
		root = copy(root.root, {children: [root]})

	Tokenizer_append(root, root.siblings)
}

/**
 * @return {number}
 */
function Tokenizer_char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? charat(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < Tokenizer_length ? charat(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return charat(characters, position)
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
	return substr(characters, begin, end)
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
	return line = column = 1, Tokenizer_length = strlen(characters = value), position = 0, []
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
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
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
			case 0: append(identifier(position - 1), children)
				break
			case 2: append(delimit(character), children)
				break
			default: append(from(character), children)
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

	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
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

;// ./node_modules/stylis/src/Parser.js




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
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
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && charat(characters, length - 1) == 58) {
					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f', abs(index ? points[index - 1] : 0)) != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous)
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7)
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						append(comment(commenter(next(), caret()), root, parent, declarations), declarations)
						if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters) && substr(characters, -1, void 0) !== ' ') characters += ' '
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = strlen(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '')
						if (property > 0 && (strlen(characters) - length || (variable === 0 && previous === 47)))
							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else {
								switch (atrule) {
									// c(ontainer)
									case 99:
										if (charat(characters, 3) === 110) break
									// l(ayer)
									case 108:
										if (charat(characters, 2) === 97) break
									default:
										offset = 0
									// d(ocument) m(edia) s(upports)
									case 100: case 109: case 115:
								}
								if (offset) parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children)
								else parse(characters, reference, reference, reference, [''], children, 0, points, children)
							}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + strlen(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next())

						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++
						break
					// -
					case 45:
						if (previous === 45 && strlen(characters) == 2)
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
	var size = sizeof(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z

	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length, siblings)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @param {object[]} siblings
 * @return {object}
 */
function comment (value, root, parent, siblings) {
	return node(value, root, parent, COMMENT, from(Tokenizer_char()), substr(value, 2, -2), 0, siblings)
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
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length, siblings)
}

;// ./node_modules/stylis/src/Middleware.js
/* unused harmony import specifier */ var Middleware_DECLARATION;
/* unused harmony import specifier */ var Middleware_KEYFRAMES;
/* unused harmony import specifier */ var Middleware_WEBKIT;
/* unused harmony import specifier */ var Middleware_RULESET;
/* unused harmony import specifier */ var Middleware_MOZ;
/* unused harmony import specifier */ var Middleware_MS;
/* unused harmony import specifier */ var Middleware_replace;
/* unused harmony import specifier */ var Middleware_combine;
/* unused harmony import specifier */ var Middleware_match;
/* unused harmony import specifier */ var Middleware_assign;
/* unused harmony import specifier */ var Middleware_filter;
/* unused harmony import specifier */ var Middleware_charat;
/* unused harmony import specifier */ var Middleware_substr;
/* unused harmony import specifier */ var Middleware_strlen;
/* unused harmony import specifier */ var Middleware_sizeof;
/* unused harmony import specifier */ var Middleware_copy;
/* unused harmony import specifier */ var Middleware_lift;
/* unused harmony import specifier */ var Middleware_tokenize;
/* unused harmony import specifier */ var Middleware_serialize;
/* unused harmony import specifier */ var prefix;






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = sizeof(collection)

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
				case Middleware_DECLARATION: element.return = prefix(element.value, element.length, children)
					return
				case Middleware_KEYFRAMES:
					return Middleware_serialize([Middleware_copy(element, {value: Middleware_replace(element.value, '@', '@' + Middleware_WEBKIT)})], callback)
				case Middleware_RULESET:
					if (element.length)
						return Middleware_combine(children = element.props, function (value) {
							switch (Middleware_match(value, callback = /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									Middleware_lift(Middleware_copy(element, {props: [Middleware_replace(value, /:(read-\w+)/, ':' + Middleware_MOZ + '$1')]}))
									Middleware_lift(Middleware_copy(element, {props: [value]}))
									Middleware_assign(element, {props: Middleware_filter(children, callback)})
									break
								// :placeholder
								case '::placeholder':
									Middleware_lift(Middleware_copy(element, {props: [Middleware_replace(value, /:(plac\w+)/, ':' + Middleware_WEBKIT + 'input-$1')]}))
									Middleware_lift(Middleware_copy(element, {props: [Middleware_replace(value, /:(plac\w+)/, ':' + Middleware_MOZ + '$1')]}))
									Middleware_lift(Middleware_copy(element, {props: [Middleware_replace(value, /:(plac\w+)/, Middleware_MS + 'input-$1')]}))
									Middleware_lift(Middleware_copy(element, {props: [value]}))
									Middleware_assign(element, {props: Middleware_filter(children, callback)})
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
		case Middleware_RULESET:
			element.props = element.props.map(function (value) {
				return Middleware_combine(Middleware_tokenize(value), function (value, index, children) {
					switch (Middleware_charat(value, 0)) {
						// \f
						case 12:
							return Middleware_substr(value, 1, Middleware_strlen(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + Middleware_substr(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return Middleware_sizeof(children) > 1 ? '' : value
								case index = Middleware_sizeof(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}

;// ./node_modules/@griffel/core/runtime/stylis/globalPlugin.esm.js


const globalPlugin = element => {
  switch (element.type) {
    case RULESET:
      if (typeof element.props === 'string') {
        if (false) // removed by dead control flow
{}
        return;
      }
      element.props = element.props.map(value => {
        // Avoids calling tokenize() on every string
        if (value.indexOf(':global(') === -1) {
          return value;
        }
        return tokenize(value).reduce((acc, value, index, children) => {
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

;// ./node_modules/@griffel/core/runtime/stylis/prefixerPlugin.esm.js


/* eslint-disable no-fallthrough */
function prefixerPlugin_esm_prefix(value, length, children) {
  switch (hash(value, length)) {
    // color-adjust
    case 5103:
      return WEBKIT + 'print-' + value + value;
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
      return WEBKIT + value + value;
    // backdrop-filter, background-clip: text
    case 4215:
      // Additional check on "backdrop-(f)ilter" to prevent conflict with "background-clip"
      // https://github.com/thysultan/stylis/issues/292
      if (charat(value, 9) === 102) {
        return WEBKIT + value + value;
      }
      // background-clip: text
      if (charat(value, length + 1) === 116) {
        return WEBKIT + value + value;
      }
      break;
    // tab-size
    case 4789:
      return MOZ + value + value;
    // appearance, user-select, hyphens
    case 5349:
    case 4246:
    case 6968:
      return WEBKIT + value + MOZ + value + value;
    // cursor
    // @ts-expect-error fall through is intentional here
    case 6187:
      if (!match(value, /grab/)) {
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
      }
    // background, background-image
    case 5495:
    case 3959:
      // eslint-disable-next-line no-useless-concat
      return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
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
      if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
        // (f)ill-available
        // @ts-expect-error fall through is intentional here
        case 102:
          if (charat(value, length + 3) === 108) {
            return replace(value, /(.+:)(.+)-([^]+)/,
            // eslint-disable-next-line no-useless-concat, eqeqeq
            '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
          }
        // (s)tretch
        case 115:
          return ~indexof(value, 'stretch') ? prefixerPlugin_esm_prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
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
    case DECLARATION:
      element.return = prefixerPlugin_esm_prefix(element.value, element.length);
      return;
    case RULESET:
      if (element.length)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return combine(element.props, function (value) {
          switch (match(value, /(::plac\w+|:read-\w+)/)) {
            // :read-(only|write)
            case ':read-only':
            case ':read-write':
              return serialize(
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              [copy(element, {
                props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
              })], callback);
            // :placeholder
            case '::placeholder':
              return serialize([
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              copy(element, {
                props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
              }),
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              copy(element, {
                props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
              })], callback);
          }
          return '';
        });
  }
  return undefined;
}


//# sourceMappingURL=prefixerPlugin.esm.js.map

;// ./node_modules/@griffel/core/runtime/stylis/isAtRuleElement.esm.js


function isAtRuleElement(element) {
  switch (element.type) {
    case '@container':
    case MEDIA:
    case SUPPORTS:
    case LAYER:
      return true;
  }
  return false;
}


//# sourceMappingURL=isAtRuleElement.esm.js.map

;// ./node_modules/@griffel/core/runtime/stylis/sortClassesInAtRulesPlugin.esm.js


const sortClassesInAtRulesPlugin = element => {
  if (isAtRuleElement(element) && Array.isArray(element.children)) {
    element.children.sort((a, b) => a.props[0] > b.props[0] ? 1 : -1);
  }
};


//# sourceMappingURL=sortClassesInAtRulesPlugin.esm.js.map

;// ./node_modules/@griffel/core/runtime/compileCSSRules.esm.js





// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop() {}
function compileCSSRules(cssRules, sortClassesInAtRules) {
  const rules = [];
  serialize(compile(cssRules), middleware([globalPlugin, sortClassesInAtRules ? sortClassesInAtRulesPlugin : noop, prefixerPlugin, stringify,
  // 💡 we are using `.insertRule()` API for DOM operations, which does not support
  // insertion of multiple CSS rules in a single call. `rulesheet` plugin extracts
  // individual rules to be used with this API
  rulesheet(rule => rules.push(rule))]));
  return rules;
}


//# sourceMappingURL=compileCSSRules.esm.js.map

;// ./node_modules/@griffel/core/runtime/compileAtomicCSSRule.esm.js




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
  return '&' + normalizeNestedProperty(
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
  const cssDeclaration = Array.isArray(value) ? `${value.map(v => `${hyphenateProperty(property)}: ${v}`).join(';')};` : `${hyphenateProperty(property)}: ${value};`;
  let cssRule = createCSSRule(classNameSelector, cssDeclaration, selectors);
  if (rtlProperty && rtlClassName) {
    const rtlClassNameSelector = `.${rtlClassName}`;
    const rtlCSSDeclaration = Array.isArray(rtlValue) ? `${rtlValue.map(v => `${hyphenateProperty(rtlProperty)}: ${v}`).join(';')};` : `${hyphenateProperty(rtlProperty)}: ${rtlValue};`;
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
  return compileCSSRules(cssRule, true);
}


//# sourceMappingURL=compileAtomicCSSRule.esm.js.map

;// ./node_modules/@griffel/core/runtime/utils/cssifyObject.esm.js


function cssifyObject(style) {
  let css = '';
  // eslint-disable-next-line guard-for-in
  for (const property in style) {
    const value = style[property];
    if (typeof value === 'string' || typeof value === 'number') {
      css += hyphenateProperty(property) + ':' + value + ';';
      continue;
    }
    if (Array.isArray(value)) {
      for (const arrValue of value) {
        css += hyphenateProperty(property) + ':' + arrValue + ';';
      }
    }
  }
  return css;
}


//# sourceMappingURL=cssifyObject.esm.js.map

;// ./node_modules/@griffel/core/runtime/compileKeyframeCSS.esm.js




function compileKeyframeRule(keyframeObject) {
  let css = '';
  // eslint-disable-next-line guard-for-in
  for (const percentage in keyframeObject) {
    css += `${percentage}{${cssifyObject(keyframeObject[percentage])}}`;
  }
  return css;
}
/**
 * Creates CSS rules for insertion from passed CSS.
 */
function compileKeyframesCSS(keyframeName, keyframeCSS) {
  const cssRule = `@keyframes ${keyframeName} {${keyframeCSS}}`;
  const rules = [];
  serialize(compile(cssRule), middleware([stringify, prefixerPlugin,
  // 💡 we are using `.insertRule()` API for DOM operations, which does not support
  // insertion of multiple CSS rules in a single call. `rulesheet` plugin extracts
  // individual rules to be used with this API
  rulesheet(rule => rules.push(rule))]));
  return rules;
}


//# sourceMappingURL=compileKeyframeCSS.esm.js.map

;// ./node_modules/@griffel/core/runtime/shorthands.esm.js
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

;// ./node_modules/@griffel/core/runtime/utils/generateCombinedMediaQuery.esm.js
function generateCombinedQuery(currentMediaQuery, nestedMediaQuery) {
  if (currentMediaQuery.length === 0) {
    return nestedMediaQuery;
  }
  return `${currentMediaQuery} and ${nestedMediaQuery}`;
}


//# sourceMappingURL=generateCombinedMediaQuery.esm.js.map

;// ./node_modules/@griffel/core/runtime/utils/isMediaQuerySelector.esm.js
function isMediaQuerySelector(property) {
  return property.substr(0, 6) === '@media';
}


//# sourceMappingURL=isMediaQuerySelector.esm.js.map

;// ./node_modules/@griffel/core/runtime/utils/isLayerSelector.esm.js
function isLayerSelector(property) {
  return property.substr(0, 6) === '@layer';
}


//# sourceMappingURL=isLayerSelector.esm.js.map

;// ./node_modules/@griffel/core/runtime/utils/isNestedSelector.esm.js
const regex = /^(:|\[|>|&)/;
function isNestedSelector(property) {
  return regex.test(property);
}


//# sourceMappingURL=isNestedSelector.esm.js.map

;// ./node_modules/@griffel/core/runtime/utils/isSupportQuerySelector.esm.js
function isSupportQuerySelector(property) {
  return property.substr(0, 9) === '@supports';
}


//# sourceMappingURL=isSupportQuerySelector.esm.js.map

;// ./node_modules/@griffel/core/runtime/utils/isContainerQuerySelector.esm.js
function isContainerQuerySelector(property) {
  return property.substring(0, 10) === '@container';
}


//# sourceMappingURL=isContainerQuerySelector.esm.js.map

;// ./node_modules/@griffel/core/runtime/utils/isObject.esm.js
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isObject_esm_isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
}


//# sourceMappingURL=isObject.esm.js.map

;// ./node_modules/@griffel/core/runtime/getStyleBucketName.esm.js
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

;// ./node_modules/@griffel/core/runtime/utils/hashPropertyKey.esm.js


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
  const hashedKey = (0,emotion_hash_esm/* default */.A)(computedKey);
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

;// ./node_modules/@griffel/core/runtime/utils/hashClassName.esm.js




function hashClassName({
  property,
  selector,
  salt,
  value
}, atRules) {
  return (/* inlined export .HASH_PREFIX */"f") + (0,emotion_hash_esm/* default */.A)(salt + selector + atRulesToString(atRules) + property +
  // Trimming of value is required to generate consistent hashes
  value.trim());
}


//# sourceMappingURL=hashClassName.esm.js.map

;// ./node_modules/@griffel/core/runtime/utils/isResetValue.esm.js


function isResetValue(value) {
  return value === constants_esm/* RESET */.Ut;
}


//# sourceMappingURL=isResetValue.esm.js.map

;// ./node_modules/@griffel/core/runtime/utils/trimSelector.esm.js
/**
 * Trims selectors to generate consistent hashes.
 */
function trimSelector(selector) {
  return selector.replace(/>\s+/g, '>');
}


//# sourceMappingURL=trimSelector.esm.js.map

;// ./node_modules/@griffel/core/runtime/warnings/logError.esm.js
function logError(...args) {
  if (false) // removed by dead control flow
{}
}


//# sourceMappingURL=logError.esm.js.map

;// ./node_modules/@griffel/core/runtime/warnings/warnAboutUnresolvedRule.esm.js


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
  logError(message);
}


//# sourceMappingURL=warnAboutUnresolvedRule.esm.js.map

;// ./node_modules/@griffel/core/runtime/warnings/warnAboutUnsupportedProperties.esm.js


function warnAboutUnsupportedProperties(property, value) {
  const message = /*#__PURE__*/(() => [`@griffel/react: You are using unsupported shorthand CSS property "${property}". ` + `Please check your "makeStyles" calls, there *should not* be following:`, ' '.repeat(2) + `makeStyles({`, ' '.repeat(4) + `[slot]: { ${property}: "${value}" }`, ' '.repeat(2) + `})`, '', 'Learn why CSS shorthands are not supported: https://aka.ms/griffel-css-shorthands'].join('\n'))();
  logError(message);
}


//# sourceMappingURL=warnAboutUnsupportedProperties.esm.js.map

;// ./node_modules/@griffel/core/runtime/resolveStyleRules.esm.js






















function getShorthandDefinition(property) {
  return shorthands[property];
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
    if (constants_esm/* UNSUPPORTED_CSS_PROPERTIES */.qw.hasOwnProperty(property)) {
      warnAboutUnsupportedProperties(property, styles[property]);
      continue;
    }
    const value = styles[property];
    // eslint-disable-next-line eqeqeq
    if (value == null) {
      continue;
    }
    if (isResetValue(value)) {
      const selector = trimSelector(selectors.join(''));
      // uniq key based on a hash of property & selector, used for merging later
      const key = hashPropertyKey(selector, property, atRules);
      pushToClassesMap(cssClassesMap, key, 0, undefined);
      continue;
    }
    if (typeof value === 'string' || typeof value === 'number') {
      const selector = trimSelector(selectors.join(''));
      const shorthand = getShorthandDefinition(property);
      if (shorthand) {
        const shorthandProperties = shorthand[1];
        const shorthandResetStyles = Object.fromEntries(shorthandProperties.map(property => [property, constants_esm/* RESET */.Ut]));
        resolveStyleRules(shorthandResetStyles, classNameHashSalt, selectors, atRules, cssClassesMap, cssRulesByBucket);
      }
      // uniq key based on a hash of property & selector, used for merging later
      const key = hashPropertyKey(selector, property, atRules);
      const className = hashClassName({
        value: value.toString(),
        salt: classNameHashSalt,
        selector,
        property
      }, atRules);
      const rtlDefinition = rtlValue && {
        key: property,
        value: rtlValue
      } || convertProperty(property, value);
      const flippedInRtl = rtlDefinition.key !== property || rtlDefinition.value !== value;
      const rtlClassName = flippedInRtl ? hashClassName({
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
      const styleBucketName = getStyleBucketName(selectors, atRules);
      const [ltrCSS, rtlCSS] = compileAtomicCSSRule(Object.assign({
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
        const keyframeCSS = compileKeyframeRule(keyframeObject);
        const rtlKeyframeCSS = compileKeyframeRule(convert(keyframeObject));
        const animationName = (/* inlined export .HASH_PREFIX */"f") + (0,emotion_hash_esm/* default */.A)(keyframeCSS);
        let rtlAnimationName;
        const keyframeRules = compileKeyframesCSS(animationName, keyframeCSS);
        let rtlKeyframeRules = [];
        if (keyframeCSS === rtlKeyframeCSS) {
          // If CSS for LTR & RTL are same we will re-use animationName from LTR to avoid duplication of rules in output
          rtlAnimationName = animationName;
        } else {
          rtlAnimationName = (/* inlined export .HASH_PREFIX */"f") + (0,emotion_hash_esm/* default */.A)(rtlKeyframeCSS);
          rtlKeyframeRules = compileKeyframesCSS(rtlAnimationName, rtlKeyframeCSS);
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
        if (false) // removed by dead control flow
{}
        continue;
      }
      const selector = trimSelector(selectors.join(''));
      const shorthand = getShorthandDefinition(property);
      if (shorthand) {
        const shorthandProperties = shorthand[1];
        const shorthandResetStyles = Object.fromEntries(shorthandProperties.map(property => [property, constants_esm/* RESET */.Ut]));
        resolveStyleRules(shorthandResetStyles, classNameHashSalt, selectors, atRules, cssClassesMap, cssRulesByBucket);
      }
      const key = hashPropertyKey(selector, property, atRules);
      const className = hashClassName({
        value: value.map(v => (v !== null && v !== void 0 ? v : '').toString()).join(';'),
        salt: classNameHashSalt,
        selector,
        property
      }, atRules);
      const rtlDefinitions = value.map(v => convertProperty(property, v));
      const rtlPropertyConsistent = !rtlDefinitions.some(v => v.key !== rtlDefinitions[0].key);
      if (!rtlPropertyConsistent) {
        if (false) // removed by dead control flow
{}
        continue;
      }
      const flippedInRtl = rtlDefinitions[0].key !== property || rtlDefinitions.some((v, i) => v.value !== value[i]);
      const rtlClassName = flippedInRtl ? hashClassName({
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
      const styleBucketName = getStyleBucketName(selectors, atRules);
      const [ltrCSS, rtlCSS] = compileAtomicCSSRule(Object.assign({
        className,
        selectors,
        property,
        value: value
      }, rtlCompileOptions), atRules);
      pushToClassesMap(cssClassesMap, key, className, rtlClassName);
      pushToCSSRules(cssRulesByBucket, styleBucketName, ltrCSS, rtlCSS, atRules.media, computePropertyPriority(shorthand));
    } else if (isObject_esm_isObject(value)) {
      if (isNestedSelector(property)) {
        resolveStyleRules(value, classNameHashSalt, selectors.concat(normalizeNestedProperty(property)), atRules, cssClassesMap, cssRulesByBucket);
      } else if (isMediaQuerySelector(property)) {
        const combinedMediaQuery = generateCombinedQuery(atRules.media, property.slice(6).trim());
        resolveStyleRules(value, classNameHashSalt, selectors, Object.assign({}, atRules, {
          media: combinedMediaQuery
        }), cssClassesMap, cssRulesByBucket);
      } else if (isLayerSelector(property)) {
        const combinedLayerQuery = (atRules.layer ? `${atRules.layer}.` : '') + property.slice(6).trim();
        resolveStyleRules(value, classNameHashSalt, selectors, Object.assign({}, atRules, {
          layer: combinedLayerQuery
        }), cssClassesMap, cssRulesByBucket);
      } else if (isSupportQuerySelector(property)) {
        const combinedSupportQuery = generateCombinedQuery(atRules.supports, property.slice(9).trim());
        resolveStyleRules(value, classNameHashSalt, selectors, Object.assign({}, atRules, {
          supports: combinedSupportQuery
        }), cssClassesMap, cssRulesByBucket);
      } else if (isContainerQuerySelector(property)) {
        // TODO implement nested container queries if needed
        // The only way to target multiple containers is to nest container queries
        // https://developer.mozilla.org/en-US/docs/Web/CSS/@container#nested_container_queries
        const containerQuery = property.slice(10).trim();
        resolveStyleRules(value, classNameHashSalt, selectors, Object.assign({}, atRules, {
          container: containerQuery
        }), cssClassesMap, cssRulesByBucket);
      } else {
        warnAboutUnresolvedRule(property, value);
      }
    }
  }
  return [cssClassesMap, cssRulesByBucket];
}


//# sourceMappingURL=resolveStyleRules.esm.js.map

;// ./node_modules/@griffel/core/resolveStyleRulesForSlots.esm.js


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
    const [cssClassMap, cssRulesByBucket] = resolveStyleRules(slotStyles, classNameHashSalt);
    classesMapBySlot[slotName] = cssClassMap;
    Object.keys(cssRulesByBucket).forEach(styleBucketName => {
      cssRules[styleBucketName] = (cssRules[styleBucketName] || []).concat(cssRulesByBucket[styleBucketName]);
    });
  }
  return [classesMapBySlot, cssRules];
}


//# sourceMappingURL=resolveStyleRulesForSlots.esm.js.map

// EXTERNAL MODULE: ./node_modules/@griffel/core/runtime/reduceToClassNameForSlots.esm.js
var reduceToClassNameForSlots_esm = __webpack_require__(87294);
;// ./node_modules/@griffel/core/makeStyles.esm.js








function makeStyles(stylesBySlots, factory = insertionFactory_esm/* insertionFactory */.A) {
  const insertStyles = factory();
  let classesMapBySlot = null;
  let cssRules = null;
  let ltrClassNamesForSlots = null;
  let rtlClassNamesForSlots = null;
  let sourceURL;
  if (false) // removed by dead control flow
{}
  let classNameHashSalt;
  function computeClasses(options) {
    const {
      dir,
      renderer
    } = options;
    if (classesMapBySlot === null) {
      [classesMapBySlot, cssRules] = resolveStyleRulesForSlots(stylesBySlots, renderer.classNameHashSalt);
      if (false) // removed by dead control flow
{}
    }
    const isLTR = dir === 'ltr';
    if (isLTR) {
      if (ltrClassNamesForSlots === null) {
        ltrClassNamesForSlots = (0,reduceToClassNameForSlots_esm/* reduceToClassNameForSlots */.N)(classesMapBySlot, dir);
      }
    } else {
      if (rtlClassNamesForSlots === null) {
        rtlClassNamesForSlots = (0,reduceToClassNameForSlots_esm/* reduceToClassNameForSlots */.N)(classesMapBySlot, dir);
      }
    }
    insertStyles(renderer, cssRules);
    const classNamesForSlots = isLTR ? ltrClassNamesForSlots : rtlClassNamesForSlots;
    if (false) // removed by dead control flow
{}
    return classNamesForSlots;
  }
  return computeClasses;
}


//# sourceMappingURL=makeStyles.esm.js.map

// EXTERNAL MODULE: ./node_modules/@griffel/react/insertionFactory.esm.js + 2 modules
var react_insertionFactory_esm = __webpack_require__(49264);
// EXTERNAL MODULE: ./node_modules/@griffel/react/RendererContext.esm.js + 5 modules
var RendererContext_esm = __webpack_require__(26312);
// EXTERNAL MODULE: ./node_modules/@griffel/react/TextDirectionContext.esm.js
var TextDirectionContext_esm = __webpack_require__(56004);
;// ./node_modules/@griffel/react/makeStyles.esm.js






function makeStyles_esm_makeStyles(stylesBySlots) {
  const getStyles = makeStyles(stylesBySlots, react_insertionFactory_esm/* insertionFactory */.A);
  if (false) // removed by dead control flow
{}
  return function useClasses() {
    const dir = (0,TextDirectionContext_esm/* useTextDirection */.m)();
    const renderer = (0,RendererContext_esm/* useRenderer */.J)();
    return getStyles({
      dir,
      renderer
    });
  };
}


//# sourceMappingURL=makeStyles.esm.js.map


/***/ }),

/***/ 20056:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ formatLog; }
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

/***/ }),

/***/ 54710:
/***/ (function() {

// Module
var code = (/* unused pure expression or super */ null && (" <!doctype html> <html lang=\"en\" data-framework=\"typescript\"> <head> <meta charset=\"UTF-8\"/> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\"/> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"> <title>Vd Spek Price Quote</title> <" + "script src=\"https://appsforoffice.microsoft.com/lib/1/hosted/office.js\"><" + "/script> </head> <body style=\"width:100%;height:100%;margin:0;padding:0\"> <div id=\"container\"></div> <div id=\"tridentmessage\" style=\"display:none;padding:10\"> This add-in will not run in your version of Office. Please upgrade either to perpetual Office 2021 (or later) or to a Microsoft 365 account. </div> <" + "script>if(-1!==navigator.userAgent.indexOf(\"Trident\")||-1!==navigator.userAgent.indexOf(\"Edge\")){var tridentMessage=document.getElementById(\"tridentmessage\"),normalContainer=document.getElementById(\"container\");tridentMessage.style.display=\"block\",normalContainer.style.display=\"none\"}<" + "/script> </body> </html> "));
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (code)));

/***/ }),

/***/ 5338:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var m = __webpack_require__(40961);
if (true) {
  exports.H = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else // removed by dead control flow
{ var i; }


/***/ }),

/***/ 21020:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(96540),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 74848:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(21020);
} else // removed by dead control flow
{}


/***/ }),

/***/ 25881:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/@griffel/react/makeStyles.esm.js + 37 modules
var makeStyles_esm = __webpack_require__(44541);
// EXTERNAL MODULE: ./node_modules/@fluentui/react-image/lib/components/Image/Image.js + 3 modules
var Image = __webpack_require__(55883);
// EXTERNAL MODULE: ./src/util/log.ts
var log = __webpack_require__(20056);
;// ./src/pricequotedialog/components/QuoteDialogApp.tsx
/* provided dependency */ var Promise = __webpack_require__(64583).Promise;
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const useStyles = (0,makeStyles_esm/* makeStyles */.n)({
    root: {
        minHeight: "100vh",
    },
});
const QuoteDialogApp = (props) => {
    const styles = useStyles();
    const [dialogData, setDialogData] = react.useState('');
    const [imageUrl, setImageUrl] = react.useState('https://webit01.github.io/vdspek/dist/assets/logo-filled.png');
    console.log((0,log/* formatLog */.e)("Loading pricequotedialog"), props);
    const fetchData = (jsonData) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const machineDataUrl = `https://www.gebruikteheftrucks.nl/gebruikteheftrucks/fs3_mr.nsf/RetrieveHeftruck?openagent&hefid=${jsonData.machineNr}&mrid=${jsonData.referenceNr}`;
        const machine = yield fetch(machineDataUrl);
        const result = yield machine.text();
        // De result is XML
        // Lees de node Heftrucks/hef_fotot uit
        // XML parsen
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(result, "application/xml");
        // Waarde van <hef_fotot> ophalen
        const hefFototElement = xmlDoc.querySelector("hef_fotot");
        let hefFototValue = (_a = hefFototElement === null || hefFototElement === void 0 ? void 0 : hefFototElement.textContent) !== null && _a !== void 0 ? _a : "";
        console.log((0,log/* formatLog */.e)("Waarde van hef_fotot:"), hefFototValue);
        // De waarde is zonder host ervoor, voorbeeld:
        // www.gebruikteheftrucks.nl/site/55A64E6502B345A6C125899B004B519E/$File/Dutchlift DL-50 intro.png
        if (!hefFototValue.startsWith("https")) {
            hefFototValue = "https://" + hefFototValue;
        }
        setImageUrl(hefFototValue);
    });
    react.useEffect(() => {
        console.log((0,log/* formatLog */.e)("Setting up dialog message handler"));
        Office.onReady(() => {
            console.log((0,log/* formatLog */.e)("Office is ready in dialog"));
            Office.context.ui.addHandlerAsync(Office.EventType.DialogParentMessageReceived, (arg) => __awaiter(void 0, void 0, void 0, function* () {
                console.log((0,log/* formatLog */.e)("Bericht ontvangen van parent:"), arg);
                // Laat machnr en referentienr binnenkomen
                // Parse json string naar object
                const jsonData = JSON.parse(arg.message);
                console.log((0,log/* formatLog */.e)("Parsed JSON data:"), jsonData);
                setDialogData(arg.message); // Toon ontvangen bericht
                yield fetchData(jsonData);
            }));
            // Optioneel: stuur meteen een bericht terug
            Office.context.ui.messageParent("Dialoog is klaar!");
        });
    }, []);
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { className: styles.root },
            react.createElement(Image/* Image */._, { src: imageUrl, alt: props.title })),
        react.createElement("div", null,
            react.createElement("h2", null, "Data ontvangen van parent:"),
            react.createElement("p", null, dialogData))));
};
/* harmony default export */ var components_QuoteDialogApp = (QuoteDialogApp);

// EXTERNAL MODULE: ./node_modules/@fluentui/react-provider/lib/components/FluentProvider/FluentProvider.js + 14 modules
var FluentProvider = __webpack_require__(12086);
// EXTERNAL MODULE: ./node_modules/@fluentui/tokens/lib/themes/web/lightTheme.js + 15 modules
var lightTheme = __webpack_require__(12272);
;// ./src/pricequotedialog/index.tsx




/* global document, Office, module, require, HTMLElement */
const title = "VdSpek Pane Add-in";
const rootElement = document.getElementById("container");
const root = rootElement ? (0,client/* createRoot */.H)(rootElement) : undefined;
/* Render application after Office initializes */
Office.onReady(() => {
    root === null || root === void 0 ? void 0 : root.render(react.createElement(FluentProvider/* FluentProvider */.q, { theme: lightTheme/* webLightTheme */.o },
        react.createElement(components_QuoteDialogApp, { title: title })));
});
if (false) // removed by dead control flow
{}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(25881), __webpack_exec__(54710));
/******/ }
]);
//# sourceMappingURL=pricequotedialog.js.map