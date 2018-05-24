;(function() {
"use strict";

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // identity function for calling harmony imports with the correct context
    /******/__webpack_require__.i = function (value) {
        return value;
    };
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 12);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(15);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__lib_matchesSelector__ = __webpack_require__(1);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__ = __webpack_require__(14);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__ = __webpack_require__(13);
    /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
        return __WEBPACK_IMPORTED_MODULE_0__lib_templating__["a"];
    });
    /* unused harmony reexport matchesSelector */
    /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
        return __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__["a"];
    });
    /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__["a"];
    });
    /**
     * Created by ThatJoeMoore on 2/14/17
     */

    /***/
},
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    __webpack_exports__["a"] = matchesSelector;
    /*
     *  @license
     *    Copyright 2017 Brigham Young University
     *
     *    Licensed under the Apache License, Version 2.0 (the "License");
     *    you may not use this file except in compliance with the License.
     *    You may obtain a copy of the License at
     *
     *        http://www.apache.org/licenses/LICENSE-2.0
     *
     *    Unless required by applicable law or agreed to in writing, software
     *    distributed under the License is distributed on an "AS IS" BASIS,
     *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *    See the License for the specific language governing permissions and
     *    limitations under the License.
     */

    function matchesSelector(el, selector) {
        var proto = Element.prototype;
        var actual = proto.matches || proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector || function (s) {
            var doc = this.document || this.ownerDocument;
            return doc.querySelectorAll(s).indexOf(this) !== -1;
        };

        return actual.call(el, selector);
    }

    /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html__ = __webpack_require__(23);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);

    var BYUFooterActionButton = function (_HTMLElement) {
        _inherits(BYUFooterActionButton, _HTMLElement);

        function BYUFooterActionButton() {
            _classCallCheck(this, BYUFooterActionButton);

            var _this = _possibleConstructorReturn(this, (BYUFooterActionButton.__proto__ || Object.getPrototypeOf(BYUFooterActionButton)).call(this));

            _this.attachShadow({ mode: 'open' });
            return _this;
        }

        _createClass(BYUFooterActionButton, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-footer-action-button', __WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html___default.a);
            }
        }]);

        return BYUFooterActionButton;
    }(HTMLElement);

    window.customElements.define('byu-footer-action-button', BYUFooterActionButton);
    window.BYUFooterActionButton = BYUFooterActionButton;

    /***/
},
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html__ = __webpack_require__(24);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);

    var BYUFooterColumn = function (_HTMLElement2) {
        _inherits(BYUFooterColumn, _HTMLElement2);

        function BYUFooterColumn() {
            _classCallCheck(this, BYUFooterColumn);

            var _this2 = _possibleConstructorReturn(this, (BYUFooterColumn.__proto__ || Object.getPrototypeOf(BYUFooterColumn)).call(this));

            _this2.attachShadow({ mode: 'open' });
            return _this2;
        }

        _createClass(BYUFooterColumn, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-footer-column', __WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html___default.a);
            }
        }]);

        return BYUFooterColumn;
    }(HTMLElement);

    window.customElements.define('byu-footer-column', BYUFooterColumn);
    window.BYUFooterColumn = BYUFooterColumn;

    /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_footer_html__ = __webpack_require__(25);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_footer_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_footer_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);

    var ATTR_FULL_WIDTH = 'full-width';
    var ATTR_MAX_WIDTH = 'max-width';
    var DEFAULT_MAX_WIDTH = '1200px';

    var BYUFooter = function (_HTMLElement3) {
        _inherits(BYUFooter, _HTMLElement3);

        function BYUFooter() {
            _classCallCheck(this, BYUFooter);

            var _this3 = _possibleConstructorReturn(this, (BYUFooter.__proto__ || Object.getPrototypeOf(BYUFooter)).call(this));

            _this3.attachShadow({ mode: 'open' });
            return _this3;
        }

        _createClass(BYUFooter, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                var component = this;
                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](component, 'byu-footer', __WEBPACK_IMPORTED_MODULE_0__byu_footer_html___default.a, function () {
                    // always show the current year in the copyright message
                    var currentYear = component.shadowRoot.querySelector("#currentYear");
                    currentYear.innerHTML = new Date().getFullYear();

                    var header = document.querySelector('byu-header');
                    var observer = new MutationObserver(function (mutations) {
                        component.updateWithHeaderAttributes(header);
                    });

                    // configuration of the observer:
                    var config = { attributes: true };
                    observer.observe(header, config);
                    component.updateWithHeaderAttributes(header); // run it once to get the initial values
                });
            }
        }, {
            key: 'updateWithHeaderAttributes',
            value: function updateWithHeaderAttributes(header) {

                // check the header for full-width or max-width attributes
                if (header.hasAttribute(ATTR_FULL_WIDTH)) {
                    this.setAttribute(ATTR_FULL_WIDTH, '');
                } else {
                    this.removeAttribute(ATTR_FULL_WIDTH);
                }

                var w = DEFAULT_MAX_WIDTH;
                if (header.hasAttribute(ATTR_MAX_WIDTH)) {
                    w = header.getAttribute(ATTR_MAX_WIDTH);
                }
                this.setAttribute(ATTR_MAX_WIDTH, w);

                var needsWidthSetting = this.shadowRoot.querySelectorAll('.needs-width-setting');
                for (var i = 0; i < needsWidthSetting.length; i++) {
                    needsWidthSetting[i].style.maxWidth = w;
                    needsWidthSetting[i].style.maxWidth = w;
                }
            }
        }]);

        return BYUFooter;
    }(HTMLElement);

    window.customElements.define('byu-footer', BYUFooter);
    window.BYUFooter = BYUFooter;

    /***/
},
/* 5 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_header_ejs_html__ = __webpack_require__(21);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_header_ejs_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_header_ejs_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_deep_equal__ = __webpack_require__(18);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_deep_equal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_deep_equal__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2_byu_web_component_utils__ = __webpack_require__(0);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__icons_transformicons__ = __webpack_require__(11);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__icons_transformicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__icons_transformicons__);

    var ATTR_MOBILE_MAX_WIDTH = 'mobile-max-width';
    var ATTR_FULL_WIDTH = 'full-width';
    var ATTR_CONSTRAIN_TOP_BAR = 'constrain-top-bar';
    var ATTR_MAX_WIDTH = 'max-width';
    var ATTR_MOBILE_VIEW = 'mobile-view';
    var ATTR_MENU_OPEN = 'menu-open';
    var ATTR_MENU_KEEP_OPEN = 'menu-keep-open';
    var ATTR_NO_MENU = 'no-menu';
    var ATTR_HOME_URL = 'home-url';

    var DEFAULT_MOBILE_WIDTH = '1023px';
    var DEFAULT_MAX_WIDTH = '1200px';
    var DEFAULT_HOME_URL = 'https://byu.edu/';

    var BYUHeader = function (_HTMLElement4) {
        _inherits(BYUHeader, _HTMLElement4);

        function BYUHeader() {
            _classCallCheck(this, BYUHeader);

            var _this4 = _possibleConstructorReturn(this, (BYUHeader.__proto__ || Object.getPrototypeOf(BYUHeader)).call(this));

            _this4.attachShadow({ mode: 'open' });
            return _this4;
        }

        _createClass(BYUHeader, [{
            key: '_render',
            value: function _render() {
                var _this5 = this;

                var state = {
                    mobile: this.inMobileView
                };
                if (!__WEBPACK_IMPORTED_MODULE_1_deep_equal__(state, this._renderState)) {
                    __WEBPACK_IMPORTED_MODULE_2_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-header', __WEBPACK_IMPORTED_MODULE_0__byu_header_ejs_html__(state), function () {
                        _this5._renderState = state;
                        _this5._addSlotListeners();
                        _this5._notifyChildrenOfMobileState();
                        _this5._addButtonListeners();
                        _this5._checkIfMenuIsNeeded();
                        _this5._applyHomeUrl();
                        _this5._applyMaxWidth();
                        _this5._applyMenuTransparencyListeners();
                    });
                }
            }
        }, {
            key: '_checkIfMenuIsNeeded',
            value: function _checkIfMenuIsNeeded() {
                // check whether to show the mobile menu button
                var userSlot = this.shadowRoot.querySelector("#user");
                var hasUserInfo = userSlot.assignedNodes().length !== 0;

                var menuSlot = this.shadowRoot.querySelector("#navbarMenu");
                var hasMenu = menuSlot.assignedNodes().length !== 0;

                var actionSlot = this.shadowRoot.querySelector('#actions');
                var hasActions = actionSlot.assignedNodes().length !== 0;

                this.noMenu = !(hasUserInfo || hasMenu || hasActions);

                if (menuSlot.assignedNodes().length < 4) {
                    this.setAttribute('left-align', '');
                } else {
                    this.removeAttribute('left-align');
                }
            }
        }, {
            key: '_addButtonListeners',
            value: function _addButtonListeners() {
                var _this6 = this;

                if (!this.inMobileView) {
                    this.menuOpen = false;
                    return;
                }
                var menuButton = this.shadowRoot.querySelector('.mobile-menu-button');
                menuButton.addEventListener('click', function () {
                    return _this6._toggleMenu();
                });
            }
        }, {
            key: '_toggleMenu',
            value: function _toggleMenu() {
                this.menuOpen = !this.menuOpen;
            }
        }, {
            key: '_addSlotListeners',
            value: function _addSlotListeners() {
                var _this7 = this;

                this._findAllSlots().forEach(function (each) {
                    each.addEventListener('slotchange', function (event) {
                        _this7._notifyChildrenOfMobileState();
                        _this7._checkIfMenuIsNeeded();
                        _this7._applyMenuTransparencyListeners();
                    });
                });
            }
        }, {
            key: '_notifyChildrenOfMobileState',
            value: function _notifyChildrenOfMobileState() {
                var kids = this._findAllDistributedChildren();
                if (this.inMobileView) {
                    kids.forEach(function (each) {
                        each.setAttribute(ATTR_MOBILE_VIEW, '');
                        each.classList.add(ATTR_MOBILE_VIEW);
                    });
                } else {
                    kids.forEach(function (each) {
                        each.removeAttribute(ATTR_MOBILE_VIEW);
                        each.classList.remove(ATTR_MOBILE_VIEW);
                    });
                }
            }
        }, {
            key: '_findAllSlots',
            value: function _findAllSlots() {
                var slots = this.shadowRoot.querySelectorAll('slot');
                var arr = [];
                for (var i = 0; i < slots.length; ++i) {
                    arr.push(slots[i]);
                }
                return arr;
            }
        }, {
            key: '_findAllDistributedChildren',
            value: function _findAllDistributedChildren() {
                return this._findAllSlots().map(function (s) {
                    return s.assignedNodes().filter(function (n) {
                        return n instanceof HTMLElement;
                    });
                }).reduce(function (agg, each) {
                    return agg.concat(each);
                }, []);
            }
        }, {
            key: 'connectedCallback',
            value: function connectedCallback() {
                //This is a hack to ensure that the right defaults get applied.
                this.mobileMaxWidth = this.mobileMaxWidth;
                this._applyMobileWidth();
                this._render();
                this.maxWidth = this.maxWidth;

                var header = this;
                setTimeout(function () {
                    var menu = header.shadowRoot.querySelector('#mobileMenu');
                    if (menu) menu.addEventListener('click', function openMenuClickHandler() {
                        console.log(menu.innerHTML);
                        if (header.hasAttribute(ATTR_MOBILE_VIEW) && header.hasAttribute(ATTR_MENU_OPEN) && !header.hasAttribute(ATTR_MENU_KEEP_OPEN)) {
                            header.removeAttribute(ATTR_MENU_OPEN);
                        }
                    });
                }, 0);
            }
        }, {
            key: 'attributeChangedCallback',
            value: function attributeChangedCallback(attr, oldValue, newValue) {
                switch (attr) {
                    case ATTR_MOBILE_MAX_WIDTH:
                        this._applyMobileWidth();
                        return;
                    case ATTR_CONSTRAIN_TOP_BAR:
                    case ATTR_MAX_WIDTH:
                        this._applyMaxWidth();
                        return;
                    case ATTR_MOBILE_VIEW:
                        this._render();
                        return;
                    case ATTR_MENU_OPEN:
                        this._applyMenuOpen();
                        return;
                    case ATTR_HOME_URL:
                        this._applyHomeUrl();
                        return;
                }
            }
        }, {
            key: '_applyMenuOpen',
            value: function _applyMenuOpen() {
                var menu = this.shadowRoot.querySelector('#mobileMenu');
                if (!menu) return;
                if (this.menuOpen) {
                    menu.style.maxHeight = menu.scrollHeight + 'px';
                    this.classList.add('byu-header-menu-open');
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__icons_transformicons__["transform"])(this.shadowRoot.querySelector('.mobile-menu-button'));
                } else {
                    menu.style.maxHeight = null;
                    this.classList.remove('byu-header-menu-open');
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__icons_transformicons__["revert"])(this.shadowRoot.querySelector('.mobile-menu-button'));
                }
            }
        }, {
            key: '_applyHomeUrl',
            value: function _applyHomeUrl() {
                var aTag = this.shadowRoot.querySelector('#home-url');
                if (aTag) {
                    //Filter out cases where we haven't fully initialized yet
                    aTag.setAttribute('href', this.homeUrl);
                }
            }
        }, {
            key: '_applyMobileWidth',
            value: function _applyMobileWidth() {
                var desiredQuery = this.mobileMediaQuery;
                var q = this._mobileQuery;
                if (q) {
                    if (q.media === desiredQuery) {
                        //Nothing has changed, bail!
                        return;
                    } else {
                        q.removeListener(this._mobileQueryListener);
                        this._mobileQuery = null;
                    }
                }
                this._mobileQuery = q = window.matchMedia(desiredQuery);
                this._mobileQueryListener = this._handleMobileChange.bind(this);

                q.addListener(this._mobileQueryListener);
                this._mobileQueryListener(q);
            }
        }, {
            key: '_handleMobileChange',
            value: function _handleMobileChange(mql) {
                this.inMobileView = mql.matches;
            }
        }, {
            key: '_applyMaxWidth',
            value: function _applyMaxWidth() {
                if (!this.inMobileView) {
                    var constrain = this.constrainTopBar;
                    var maxWidth = this.maxWidth;
                    var needsWidthSetting = this.shadowRoot.querySelectorAll('.needs-width-setting');
                    needsWidthSetting.forEach(function (element) {
                        if (element.classList.contains('stretches') && !constrain) {
                            element.style.maxWidth = null;
                            return;
                        }
                        element.style.maxWidth = maxWidth;
                    });
                }
                var desiredQuery = this.maxWidthMediaQuery;
                var q = this._maxWidthQuery;
                if (q) {
                    if (q.media === desiredQuery) {
                        //Nothing has changed, bail!
                        return;
                    } else {
                        q.removeListener(this._maxWidthQueryListener);
                        this._maxWidthQuery = null;
                    }
                }
                this._maxWidthQuery = q = window.matchMedia(desiredQuery);
                this._maxWidthQueryListener = this._handleMaxWidthChange.bind(this);

                q.addListener(this._maxWidthQueryListener);
                this._maxWidthQueryListener(q);
            }
        }, {
            key: '_handleMaxWidthChange',
            value: function _handleMaxWidthChange(mql) {
                if (mql.matches) {
                    this.classList.add('below-max-width');
                } else {
                    this.classList.remove('below-max-width');
                }
            }
        }, {
            key: '_applyMenuTransparencyListeners',
            value: function _applyMenuTransparencyListeners() {
                var _this8 = this;

                var navSlot = this.shadowRoot.querySelector('#navbarMenu');
                var assigned = navSlot.assignedNodes().filter(function (n) {
                    return n.nodeType === Node.ELEMENT_NODE;
                });
                if (assigned.length === 0) {
                    this._applyMenuTransparency(null);
                    return;
                }
                var menu = assigned[0];
                if (!menu.__byu_header_transparency_listener) {
                    var obs = new MutationObserver(function (e) {
                        _this8._applyMenuTransparency(menu);
                    });
                    //noinspection JSCheckFunctionSignatures
                    obs.observe(menu, { attributes: true, attributeFilter: ['class'] });
                    menu.__byu_header_transparency_listener = obs;
                }
                this._applyMenuTransparency(menu);
            }
        }, {
            key: '_applyMenuTransparency',
            value: function _applyMenuTransparency(element) {
                var transparent = element && element.classList.contains('transparent');
                if (transparent) {
                    //Can't use .toggle thanks to IE 11. Thanks, IE!
                    this.classList.add('menu-transparent');
                } else {
                    this.classList.remove('menu-transparent');
                }
            }
        }, {
            key: 'mobileMaxWidth',
            get: function get() {
                return this.getAttribute(ATTR_MOBILE_MAX_WIDTH);
            },
            set: function set(val) {
                if (val) {
                    this.setAttribute(ATTR_MOBILE_MAX_WIDTH, val);
                } else {
                    this.setAttribute(ATTR_MOBILE_MAX_WIDTH, DEFAULT_MOBILE_WIDTH);
                }
            }
        }, {
            key: 'maxWidth',
            get: function get() {
                return this.getAttribute(ATTR_MAX_WIDTH) || DEFAULT_MAX_WIDTH;
            },
            set: function set(val) {
                if (val) {
                    this.setAttribute(ATTR_MAX_WIDTH, val);
                } else {
                    this.setAttribute(ATTR_MAX_WIDTH, DEFAULT_MAX_WIDTH);
                }
            }
        }, {
            key: 'inMobileView',
            get: function get() {
                return this.hasAttribute(ATTR_MOBILE_VIEW);
            },
            set: function set(val) {
                if (val) {
                    this.setAttribute(ATTR_MOBILE_VIEW, '');
                } else {
                    this.removeAttribute(ATTR_MOBILE_VIEW);
                }
            }
        }, {
            key: 'menuOpen',
            get: function get() {
                return this.hasAttribute(ATTR_MENU_OPEN);
            },
            set: function set(val) {
                if (val) {
                    this.setAttribute(ATTR_MENU_OPEN, '');
                } else {
                    this.removeAttribute(ATTR_MENU_OPEN);
                }
            }
        }, {
            key: 'keepMenuOpen',
            get: function get() {
                return this.hasAttribute(ATTR_MENU_KEEP_OPEN);
            },
            set: function set(val) {
                if (val) {
                    this.setAttribute(ATTR_MENU_KEEP_OPEN, '');
                } else {
                    this.removeAttribute(ATTR_MENU_KEEP_OPEN);
                }
            }
        }, {
            key: 'noMenu',
            get: function get() {
                return this.hasAttribute(ATTR_NO_MENU);
            },
            set: function set(val) {
                if (val) {
                    this.setAttribute(ATTR_NO_MENU, '');
                } else {
                    this.removeAttribute(ATTR_NO_MENU);
                }
            }
        }, {
            key: 'homeUrl',
            get: function get() {
                return this.getAttribute(ATTR_HOME_URL) || DEFAULT_HOME_URL;
            },
            set: function set(val) {
                this.setAttribute(ATTR_HOME_URL, val);
            }
        }, {
            key: 'constrainTopBar',
            get: function get() {
                return this.hasAttribute(ATTR_CONSTRAIN_TOP_BAR);
            },
            set: function set(value) {
                if (value) {
                    this.setAttribute(ATTR_CONSTRAIN_TOP_BAR, '');
                } else {
                    this.removeAttribute(ATTR_CONSTRAIN_TOP_BAR);
                }
            }
        }, {
            key: 'mobileMediaQuery',
            get: function get() {
                return '(max-width: ' + this.mobileMaxWidth + ')';
            }
        }, {
            key: 'maxWidthMediaQuery',
            get: function get() {
                return '(max-width: ' + this.maxWidth + ')';
            }
        }], [{
            key: 'observedAttributes',
            get: function get() {
                return [ATTR_MOBILE_MAX_WIDTH, ATTR_MOBILE_VIEW, ATTR_MENU_OPEN, ATTR_HOME_URL, ATTR_MAX_WIDTH, ATTR_CONSTRAIN_TOP_BAR];
            }
        }]);

        return BYUHeader;
    }(HTMLElement);

    window.customElements.define('byu-header', BYUHeader);
    window.BYUHeader = BYUHeader;

    /***/
},
/* 6 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_menu_html__ = __webpack_require__(26);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_menu_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_menu_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__active_styles_scss__ = __webpack_require__(16);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__active_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__active_styles_scss__);

    var ATTR_ACTIVE_SELECTOR = "active-selector";
    var DEFAULT_ACTIVE_SELECTOR = ".active";

    var BYUMenu = function (_HTMLElement5) {
        _inherits(BYUMenu, _HTMLElement5);

        _createClass(BYUMenu, [{
            key: 'activeSelector',
            get: function get() {
                return this.getAttribute(ATTR_ACTIVE_SELECTOR) || DEFAULT_ACTIVE_SELECTOR;
            },
            set: function set(val) {
                if (val) {
                    this.setAttribute(ATTR_ACTIVE_SELECTOR, val);
                } else {
                    this.setAttribute(ATTR_ACTIVE_SELECTOR, DEFAULT_ACTIVE_SELECTOR);
                }
            }
        }, {
            key: 'showMore',
            get: function get() {
                return isShowingMoreMenu(this);
            },
            set: function set(show) {
                var el = this.shadowRoot.querySelector('.byu-menu-more-menu');
                if (show && !isShowingMoreMenu(this)) enableHideClick(this);
                toggleClass(el, 'byu-menu-more-expanded', show);
            }
        }]);

        function BYUMenu() {
            _classCallCheck(this, BYUMenu);

            // always call super first
            var _this9 = _possibleConstructorReturn(this, (BYUMenu.__proto__ || Object.getPrototypeOf(BYUMenu)).call(this));

            _this9.attachShadow({ mode: 'open' });
            return _this9;
        }

        _createClass(BYUMenu, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                render(this, true);
            }
        }, {
            key: 'attributeChangedCallback',
            value: function attributeChangedCallback(attr, oldValue, newValue) {
                switch (attr) {
                    case ATTR_ACTIVE_SELECTOR:
                        render(this, false);
                        return;
                }
            }
        }, {
            key: '_menuSlot',
            get: function get() {
                return this.shadowRoot.querySelector('#byu-menu-items');
            }
        }, {
            key: '_menuMoreSlot',
            get: function get() {
                return this.shadowRoot.querySelector('#byu-menu-more-slot');
            }
        }], [{
            key: 'observedAttributes',
            get: function get() {
                return [ATTR_ACTIVE_SELECTOR];
            }
        }]);

        return BYUMenu;
    }(HTMLElement);

    function render(component, force) {
        var activeSelector = component.activeSelector;
        if (!force && activeSelector === component._renderedActiveSelector) {
            return;
        }

        var css = __WEBPACK_IMPORTED_MODULE_2__active_styles_scss___default.a.toString().replace('__byu-menu-active-placeholder__', activeSelector);
        var tmpl = '<style>' + css + '</style>' + __WEBPACK_IMPORTED_MODULE_0__byu_menu_html___default.a;

        __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](component, 'byu-menu', tmpl, function () {
            component._renderedActiveSelector = activeSelector;
            updateMoreMenuState(component);
            addSlotListeners(component);
            // when the more button is clicked then show the more menu
            component.shadowRoot.querySelector('.byu-menu-more').addEventListener('click', function () {
                component.showMore = true;
            });
        });
    }

    function addSlotListeners(component) {
        component.shadowRoot.querySelector('slot').addEventListener('slotchange', function (e) {
            //Run on microtask timing to let polyfilled shadow DOM changes to propagate
            setTimeout(function () {
                return function () {
                    updateMoreMenuState(component);
                };
            });
        });
    }

    function enableHideClick(component) {

        var fn = function fn() {
            document.removeEventListener('click', fn);
            component.showMore = false;
        };

        setTimeout(function () {
            document.addEventListener('click', fn);
        });
    }

    function hasClass(el, className) {
        var classes = el.className.split(/ +/);
        return classes.indexOf(className) !== -1;
    }

    function isShowingMoreMenu(component) {
        return hasClass(component.shadowRoot.querySelector('.byu-menu-more-menu'), 'byu-menu-more-expanded');
    }

    function toggleClass(el, className, value) {
        var classes = el.className.split(/ +/);
        var index = classes.indexOf(className);
        var exists = index !== -1;
        var setTo = arguments.length > 2 ? arguments[2] : !exists;
        if (setTo && !exists) {
            classes.push(className);
        } else if (!setTo && exists) {
            classes.splice(index, 1);
        }
        el.className = classes.join(' ');
    }

    function updateMoreMenuState(component) {
        var children = component.shadowRoot.querySelector('.byu-menu-items').assignedNodes();
        var moreChildren = component.shadowRoot.querySelector('.byu-menu-more-slot').assignedNodes();
        var filteredChildren = children.filter(function (node) {
            return node instanceof HTMLElement;
        });
        var filteredMoreChildren = moreChildren.filter(function (node) {
            return node instanceof HTMLElement;
        });
        var length = filteredChildren.length + filteredMoreChildren.length;
        var hasOverflow = length > 6;
        var nav = component.shadowRoot.querySelector('.outer-nav');

        if (nav) toggleClass(nav, 'byu-menu-more-visible', hasOverflow);

        if (hasOverflow) {
            for (var i = 5; i < filteredChildren.length; i++) {
                filteredChildren[i].setAttribute('slot', 'more');
            }
        } else if (length === 6) {
            filteredChildren[5].setAttribute('slot', '');
        }

        if (length < 4) {
            console.log(length);
            component.setAttribute('left-align', '');
        } else {
            component.removeAttribute('left-align');
        }
    }

    window.customElements.define('byu-menu', BYUMenu);
    window.BYUMenu = BYUMenu;

    /***/
},
/* 7 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */

    var _DEFAULT_ACTION_TARGE;

    var __WEBPACK_IMPORTED_MODULE_0__byu_search_html__ = __webpack_require__(27);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_search_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_search_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);
    /**
     *  @license
     *    Copyright 2016 Brigham Young University
     *
     *    Licensed under the Apache License, Version 2.0 (the "License");
     *    you may not use this file except in compliance with the License.
     *    You may obtain a copy of the License at
     *
     *        http://www.apache.org/licenses/LICENSE-2.0
     *
     *    Unless required by applicable law or agreed to in writing, software
     *    distributed under the License is distributed on an "AS IS" BASIS,
     *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *    See the License for the specific language governing permissions and
     *    limitations under the License.
     **/

    var CLASS_SELECTED_INPUT = '__byu-search-selected-input';

    var ATTR_OLD_SEARCH_HANDLER = 'onsearch';
    var ATTR_SEARCH_HANDLER = 'onbyusearch';
    var ATTR_SEARCH_INPUT_SELECTOR = 'search-input-selector';
    var ATTR_ACTION = 'action';
    var ATTR_ACTION_TARGET = 'action-target';

    var ACTION_SUBMIT_FORM = 'submit-form';
    var ACTION_CLICK = 'click';
    var ACTION_NAVIGATE = 'navigate';

    var DEFAULT_ACTION_TARGET_SUBMIT_FORM = 'form';
    var DEFAULT_ACTION_TARGET_CLICK = 'button, input[type="submit"], input[type="button"]';

    var EVENT_TYPE = 'byu-search';

    var DEFAULT_ACTION_TARGET = (_DEFAULT_ACTION_TARGE = {}, _defineProperty(_DEFAULT_ACTION_TARGE, ACTION_SUBMIT_FORM, DEFAULT_ACTION_TARGET_SUBMIT_FORM), _defineProperty(_DEFAULT_ACTION_TARGE, ACTION_CLICK, DEFAULT_ACTION_TARGET_CLICK), _DEFAULT_ACTION_TARGE);

    var DEFAULT_SEARCH_INPUT_SELECTOR = 'input[type="search"], input[type="text"]';

    var ByuSearch = function (_HTMLElement6) {
        _inherits(ByuSearch, _HTMLElement6);

        function ByuSearch() {
            _classCallCheck(this, ByuSearch);

            // always call super first
            var _this10 = _possibleConstructorReturn(this, (ByuSearch.__proto__ || Object.getPrototypeOf(ByuSearch)).call(this));

            _this10.attachShadow({ mode: 'open' });
            return _this10;
        }

        _createClass(ByuSearch, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                var _this11 = this;

                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-search', __WEBPACK_IMPORTED_MODULE_0__byu_search_html___default.a, function () {
                    _this11._initialized = true;

                    _this11._input = lookupAndConfigureInputElement(_this11, _this11.searchInputSelector);

                    setupButtonSearchDispatcher(_this11);
                    setupSearchListeners(_this11);

                    setupSlotListener(_this11);
                });
            }
        }, {
            key: 'disconnectedCallback',
            value: function disconnectedCallback() {
                if (this._input) {
                    teardownInputElement(this, this._input);
                }

                teardownSearchListeners(this);
            }
        }, {
            key: 'search',
            value: function search() {
                var el = this._input;
                if (!el) {
                    throw new Error('Unable to perform search; no search element matching the selector \'' + this.searchInputSelector + '\' can be found!');
                }
                var value = el.value;
                if (!value) return;

                var event = __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["b" /* createEvent */](EVENT_TYPE, { search: value });

                var cancelled = !this.dispatchEvent(event);
                if (cancelled) return;

                if (this.action) {
                    runPredefinedAction(this, value);
                }
            }
        }, {
            key: 'attributeChangedCallback',
            value: function attributeChangedCallback(attr, oldValue, newValue) {
                if (!this._initialized) return;
                switch (attr) {
                    case ATTR_SEARCH_INPUT_SELECTOR:
                        if (this._input) {
                            teardownInputElement(this, this._input);
                        }

                        this._input = lookupAndConfigureInputElement(this, newValue);

                        return;
                    //All other attrs are lazily looked up, as needed.
                }
            }
        }, {
            key: 'onbyusearch',
            get: function get() {
                return this.getAttribute(ATTR_SEARCH_HANDLER);
            },
            set: function set(value) {
                this.setAttribute(ATTR_SEARCH_HANDLER, value);
            }
        }, {
            key: 'onsearch',
            get: function get() {
                return this.getAttribute(ATTR_OLD_SEARCH_HANDLER);
            },
            set: function set(value) {
                this.setAttribute(ATTR_OLD_SEARCH_HANDLER, value);
            }
        }, {
            key: 'searchInputSelector',
            set: function set(value) {
                this.setAttribute(ATTR_SEARCH_INPUT_SELECTOR, value);
            },
            get: function get() {
                return this.getAttribute(ATTR_SEARCH_INPUT_SELECTOR) || DEFAULT_SEARCH_INPUT_SELECTOR;
            }
        }, {
            key: 'action',
            set: function set(value) {
                this.setAttribute(ATTR_ACTION, value);
            },
            get: function get() {
                //Defaults to null
                return this.getAttribute(ATTR_ACTION);
            }
        }, {
            key: 'actionTarget',
            set: function set(value) {
                this.setAttribute(ATTR_ACTION_TARGET, value);
            },
            get: function get() {
                //Default depends on action target value
                return this.getAttribute(ATTR_ACTION_TARGET) || defaultActionTarget(this.action);
            }
        }, {
            key: '_searchSlot',
            get: function get() {
                return this.shadowRoot.querySelector('#search');
            }
        }], [{
            key: 'observedAttributes',
            get: function get() {
                return [ATTR_SEARCH_INPUT_SELECTOR];
            }
        }]);

        return ByuSearch;
    }(HTMLElement);

    window.customElements.define('byu-search', ByuSearch);
    window.ByuSearch = ByuSearch;

    function setupSlotListener(search) {
        search._searchSlot.addEventListener('slotchange', function (e) {
            handleSlotChange(search, e);
        });
    }

    function handleSlotChange(search, event) {
        var oldInput = search._input;
        var newInput = lookupSearchInput(search, search.searchInputSelector);

        if (oldInput === newInput) return;

        search._input = newInput;

        if (oldInput) {
            teardownInputElement(search, oldInput);
        }
        if (newInput) {
            setupInputElement(search, newInput);
        } else {
            console.error('[byu-search] WARNING! Unable to find a search input element using the selector \'' + search.searchInputSelector + '\' on ', search);
        }
    }

    function lookupSearchInput(search, selector) {
        return __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["c" /* querySelectorSlot */](search._searchSlot, selector);
    }

    function lookupAndConfigureInputElement(search, selector) {
        var input = lookupSearchInput(search, selector);

        if (input) {
            setupInputElement(search, input);
        } else {
            console.error('[byu-search] WARNING! Unable to find a search input element using the selector \'' + selector + '\' on ', search);
        }
        return input;
    }

    function setupInputElement(search, input) {
        applyStyleHelpers(search, input);
        applyA11yHelpers(search, input);
        setupEnterKeySearchDispatcher(search, input);
    }

    function teardownInputElement(search, input) {
        removeStyleHelpers(search, input);
        removeA11yHelpers(search, input);
        teardownEnterKeySearchDispatcher(search, input);
    }

    function runPredefinedAction(search, value) {
        var action = search.action;

        switch (action) {
            case ACTION_SUBMIT_FORM:
                runSubmitFormAction(search, value);
                break;
            case ACTION_CLICK:
                runClickAction(search, value);
                break;
            case ACTION_NAVIGATE:
                runNavigateAction(search, value);
                break;
            default:
                throw new Error('Invalid value for ' + ATTR_ACTION + ': \'' + action + '\'');
        }
    }

    function runSubmitFormAction(search, value) {
        var target = search.actionTarget;

        var form = __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["c" /* querySelectorSlot */](search._searchSlot, target);

        if (!form) {
            throw new Error('Unable to find target for \'submit-form\' action using selector \'' + target + '\'');
        }

        if (!(form instanceof HTMLFormElement)) {
            throw new Error('Element found by selector \'' + target + '\' must be a <form>, but was \'' + form.localName + '\'');
        }

        form.submit();
    }

    function runClickAction(search, value) {
        var target = search.actionTarget;

        var button = __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["c" /* querySelectorSlot */](search._searchSlot, target);

        if (!button) {
            throw new Error('Unable to find target for \'click\' action using selector \'' + target + '\'');
        }

        button.click();
    }

    function runNavigateAction(search, value) {
        var target = search.actionTarget;

        if (!target) {
            throw new Error('When using action="navigate", you must specify an action-target');
        }

        if (target.indexOf('${search}')) {
            console.warn('[byu-search] WARNING: Using action="navigate" with a target that does not contain ${search} will not include the search terms in the URL.', search);
        }

        window.location.assign(target.replace('${search}', window.encodeURIComponent(value)));
    }

    function applyStyleHelpers(search, input) {
        input.classList.add(CLASS_SELECTED_INPUT);
    }

    function removeStyleHelpers(search, input) {
        input.classList.remove(CLASS_SELECTED_INPUT);
    }

    // For Accessibility, it's good for us to have a title and placeholder set. So, if there isn't one, we'll set it.
    function applyA11yHelpers(search, input) {
        if (input.title && input.placeholder) return;

        var helped = [];

        if (!input.title && !input.placeholder) {
            input.title = input.placeholder = 'Search';
            helped.push('title', 'placeholder');
        } else if (input.title) {
            input.placeholder = input.title;
            helped.push('placeholder');
        } else {
            input.title = input.placeholder;
            helped.push('title');
        }

        input.__byu_search_a11yHelpersApplied = helped;
    }

    function removeA11yHelpers(search, input) {
        var helpers = input.__byu_search_a11yHelpersApplied;
        if (!helpers) return;

        if (helpers.includes('title')) {
            input.title = null;
        }
        if (helpers.includes('placeholder')) {
            input.placeholder = null;
        }
        delete input.__byu_search_a11yHelpersApplied;
    }

    function setupButtonSearchDispatcher(search) {
        search.shadowRoot.querySelector('#search-button').addEventListener('click', function () {
            search.search();
        });
    }

    function setupEnterKeySearchDispatcher(search, input) {
        var keypress = input.__byu_search_keyObserver = function (e) {
            if (e.keyCode === 13) {
                search.search();
            }
        };
        input.addEventListener('keypress', keypress, false);
    }

    function teardownEnterKeySearchDispatcher(search, input) {
        var keypress = input.__byu_search_keyObserver;
        if (keypress) input.removeEventListener('keypress', keypress, false);
    }

    function setupSearchListeners(search) {
        var handler = search.__onbyusearchHandler = function (event) {
            var name = search.onbyusearch;
            if (!name) return;
            var handler = window[name];
            if (!handler) {
                throw new Error('Unable to find a global function named \'' + name + '\'');
            }
            handler.call(search, event);
        };

        search.addEventListener(EVENT_TYPE, handler, false);

        var legacyHandler = search.__onsearchLegacyHandler = function (event) {
            var name = search.onsearch;
            if (!name) return;

            var handler = window[name];
            if (!handler) {
                throw new Error('Unable to find a global function named \'' + name + '\'');
            }
            handler.call(search, event.detail.search, event);
        };

        search.addEventListener(EVENT_TYPE, legacyHandler, false);
    }

    function teardownSearchListeners(search) {
        if (search.__onbyusearchHandler) {
            search.removeEventListener(EVENT_TYPE, search.__onbyusearchHandler, false);
        }
        if (search.__onsearchLegacyHandler) {
            search.removeEventListener(EVENT_TYPE, search.__onsearchLegacyHandler, false);
        }
    }

    function defaultActionTarget(action) {
        if (!action) return null;
        return DEFAULT_ACTION_TARGET[action];
    }

    /***/
},
/* 8 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html__ = __webpack_require__(28);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);

    var SOCIAL_NAMES = {
        'facebook': 'Facebook',
        'twitter': 'Twitter',
        'instagram': 'Instagram',
        'youtube': 'YouTube',
        'pinterest': 'Pinterest',
        'google-plus': 'Google+',
        'googleplus': 'Google+',
        'gplus': 'Google+',
        'linkedin': 'LinkedIn',
        'rss': 'RSS',
        'snapchat': 'Snapchat',
        'podcast': 'Podcast'
    };

    var SOCIAL_IDS = Object.getOwnPropertyNames(SOCIAL_NAMES);

    var BYUSocialMediaLinks = function (_HTMLElement7) {
        _inherits(BYUSocialMediaLinks, _HTMLElement7);

        function BYUSocialMediaLinks() {
            _classCallCheck(this, BYUSocialMediaLinks);

            var _this12 = _possibleConstructorReturn(this, (BYUSocialMediaLinks.__proto__ || Object.getPrototypeOf(BYUSocialMediaLinks)).call(this));

            _this12.attachShadow({ mode: 'open' });
            return _this12;
        }

        _createClass(BYUSocialMediaLinks, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                var _this13 = this;

                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-social-media-links', __WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html___default.a, function () {
                    var main = _this13.shadowRoot.querySelector('#social-main');
                    applyTitleToChildren(main);

                    SOCIAL_IDS.forEach(function (id) {
                        var slot = _this13.shadowRoot.querySelector('#social-deprecated-' + id);
                        if (!slot) return;

                        applyTitleToChildren(slot);
                        //We're still supporting the old way, but it's deprecated and people should move on.
                        if (slot.assignedNodes().length > 0) {
                            console.log('[WARNING] byu-social-media-links: deprecated usage of slot="' + id + '". Replace with class="' + id + '":', _this13);
                        }
                    });
                });
            }
        }]);

        return BYUSocialMediaLinks;
    }(HTMLElement);

    window.customElements.define('byu-social-media-links', BYUSocialMediaLinks);
    window.BYUSocialMediaLinks = BYUSocialMediaLinks;

    function applyTitleToChildren(slotElement) {
        var kids = slotElement.assignedNodes();
        kids.filter(function (k) {
            return k instanceof HTMLElement;
        })
        //Only grab the ones that don't already have a title
        .filter(function (k) {
            return !k.title;
        }).forEach(function (kid) {
            var kind = detectSocialKind(kid);
            if (!kind) {
                return;
            }
            //The spaces are a hack to avoid triggering adblockplus.
            kid.title = ' ' + SOCIAL_NAMES[kind] + ' ';
        });
    }

    function detectSocialKind(element) {
        if (element.hasAttribute('slot')) return element.getAttribute('slot');
        for (var i = 0; i < SOCIAL_IDS.length; i++) {
            var id = SOCIAL_IDS[i];
            if (element.classList.contains(id)) {
                return id;
            }
        }
        return null;
    }

    /***/
},
/* 9 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_user_info_html__ = __webpack_require__(29);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_user_info_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_user_info_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);
    /**
     * Created by ThatJoeMoore on 11/7/16.
     */

    var ByuUserInfo = function (_HTMLElement8) {
        _inherits(ByuUserInfo, _HTMLElement8);

        function ByuUserInfo() {
            _classCallCheck(this, ByuUserInfo);

            var _this14 = _possibleConstructorReturn(this, (ByuUserInfo.__proto__ || Object.getPrototypeOf(ByuUserInfo)).call(this));

            var shadowRoot = _this14.attachShadow({ mode: 'open' });

            return _this14;
        }

        _createClass(ByuUserInfo, [{
            key: 'attributeChangedCallback',
            value: function attributeChangedCallback(attr, oldval, newval) {
                // switch (attr) {
                //     case 'login-url':
                //         this.loginUrl = newval;
                //         break;
                // }
            }
        }, {
            key: 'connectedCallback',
            value: function connectedCallback() {
                var _this15 = this;

                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-user-info', __WEBPACK_IMPORTED_MODULE_0__byu_user_info_html___default.a, function () {
                    _this15._addSlotListeners();
                    _this15._addAriaAttributes();
                });
            }
        }, {
            key: '_addSlotListeners',
            value: function _addSlotListeners() {
                var _this16 = this;

                this._setHasUser();
                var userSlot = this.shadowRoot.querySelector('#user-name');
                userSlot.addEventListener('slotchange', function (e) {
                    _this16._setHasUser();
                });
            }
        }, {
            key: '_setHasUser',
            value: function _setHasUser() {
                var userSlot = this.shadowRoot.querySelector('#user-name');
                if (userSlot.assignedNodes().length > 0) {
                    this.setAttribute('has-user', '');
                } else {
                    this.removeAttribute('has-user');
                }
            }
        }, {
            key: '_addAriaAttributes',
            value: function _addAriaAttributes() {
                this.setAttribute('role', 'button');
            }
        }], [{
            key: 'observedAttributes',
            get: function get() {
                // return ['login-url'];
            }
        }]);

        return ByuUserInfo;
    }(HTMLElement);

    window.customElements.define('byu-user-info', ByuUserInfo);
    window.ByuUserInfo = ByuUserInfo;

    /***/
},
/* 10 */
/***/function (module, exports) {

    module.exports = { "name": "byuweb-components", "version": "1.2.4", "description": "Components to be used for byu web pages and applications.", "main": "", "scripts": { "build": "gulp build", "serve": "gulp watch", "test": "echo \"Error: no test specified\" && exit 1" }, "private": true, "author": "", "license": "Apache-2.0", "dependencies": { "byu-web-component-utils": "^0.4.2", "deep-equal": "^1.0.1", "sass-loader": "^6.0.6" }, "devDependencies": { "browser-sync": "^2.18.6", "byu-web-component-build": "^0.2.3", "git-revision-webpack-plugin": "^2.5.1", "gulp": "^3.9.1", "gulp-rename": "^1.2.2" }

        /***/ };
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__; /**
                                                                       * Created by ThatJoeMoore on 2/24/17
                                                                       */

    (function (root, factory) {
        if (true) {
            // AMD module
            !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
            // CommonJS-like environment (i.e. Node)
            module.exports = factory();
        } else {
            // Browser global
            root.transformicons = factory();
        }
    })(this || window, function () {

        // ####################
        // MODULE TRANSFORMICON
        // ####################
        'use strict';

        var tcon = {},
            // static class
        _transformClass = 'tcon-transform',


        // const
        DEFAULT_EVENTS = {
            transform: ['click'],
            revert: ['click']
        };

        // ##############
        // private methods
        // ##############

        /**
         * Normalize a selector string, a single DOM element or an array of elements into an array of DOM elements.
         * @private
         *
         * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements
         * @returns {array} Array of DOM elements
         */
        var getElementList = function getElementList(elements) {
            if (typeof elements === 'string') {
                return Array.prototype.slice.call(document.querySelectorAll(elements));
            } else if (typeof elements === 'undefined' || elements instanceof Array) {
                return elements;
            } else {
                return [elements];
            }
        };

        /**
         * Normalize a string with eventnames separated by spaces or an array of eventnames into an array of eventnames.
         * @private
         *
         * @param {(string|array)} elements - String with eventnames separated by spaces or array of eventnames
         * @returns {array} Array of eventnames
         */
        var getEventList = function getEventList(events) {
            if (typeof events === 'string') {
                return events.toLowerCase().split(' ');
            } else {
                return events;
            }
        };

        /**
         * Attach or remove transformicon events to one or more elements.
         * @private
         *
         * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
         * @param {object} [events] - An Object containing one or more special event definitions
         * @param {boolean} [remove=false] - Defines wether the listeners should be added (default) or removed.
         */
        var setListeners = function setListeners(elements, events, remove) {
            var method = (remove ? 'remove' : 'add') + 'EventListener',
                elementList = getElementList(elements),
                currentElement = elementList.length,
                eventLists = {};

            // get events or use defaults
            for (var prop in DEFAULT_EVENTS) {
                eventLists[prop] = events && events[prop] ? getEventList(events[prop]) : DEFAULT_EVENTS[prop];
            }

            // add or remove all events for all occasions to all elements
            while (currentElement--) {
                for (var occasion in eventLists) {
                    var currentEvent = eventLists[occasion].length;
                    while (currentEvent--) {
                        elementList[currentElement][method](eventLists[occasion][currentEvent], handleEvent);
                    }
                }
            }
        };

        /**
         * Event handler for transform events.
         * @private
         *
         * @param {object} event - event object
         */
        var handleEvent = function handleEvent(event) {
            tcon.toggle(event.currentTarget);
        };

        // ##############
        // public methods
        // ##############

        /**
         * Add transformicon behavior to one or more elements.
         * @public
         *
         * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
         * @param {object} [events] - An Object containing one or more special event definitions
         * @param {(string|array)} [events.transform] - One or more events that trigger the transform. Can be an Array or string with events seperated by space.
         * @param {(string|array)} [events.revert] - One or more events that trigger the reversion. Can be an Array or string with events seperated by space.
         * @returns {transformicon} transformicon instance for chaining
         */
        tcon.add = function (elements, events) {
            setListeners(elements, events);
            return tcon;
        };

        /**
         * Remove transformicon behavior from one or more elements.
         * @public
         *
         * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
         * @param {object} [events] - An Object containing one or more special event definitions
         * @param {(string|array)} [events.transform] - One or more events that trigger the transform. Can be an Array or string with events seperated by space.
         * @param {(string|array)} [events.revert] - One or more events that trigger the reversion. Can be an Array or string with events seperated by space.
         * @returns {transformicon} transformicon instance for chaining
         */
        tcon.remove = function (elements, events) {
            setListeners(elements, events, true);
            return tcon;
        };

        /**
         * Put one or more elements in the transformed state.
         * @public
         *
         * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be transformed
         * @returns {transformicon} transformicon instance for chaining
         */
        tcon.transform = function (elements) {
            getElementList(elements).forEach(function (element) {
                element.classList.add(_transformClass);
            });
            return tcon;
        };

        /**
         * Revert one or more elements to the original state.
         * @public
         *
         * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be reverted
         * @returns {transformicon} transformicon instance for chaining
         */
        tcon.revert = function (elements) {
            getElementList(elements).forEach(function (element) {
                element.classList.remove(_transformClass);
            });
            return tcon;
        };

        /**
         * Toggles one or more elements between transformed and original state.
         * @public
         *
         * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
         * @returns {transformicon} transformicon instance for chaining
         */
        tcon.toggle = function (elements) {
            getElementList(elements).forEach(function (element) {
                tcon[element.classList.contains(_transformClass) ? 'revert' : 'transform'](element);
            });
            return tcon;
        };

        return tcon;
    });

    /***/
},
/* 12 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_header_byu_header_js__ = __webpack_require__(5);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__byu_menu_byu_menu_js__ = __webpack_require__(6);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__byu_search_byu_search_js__ = __webpack_require__(7);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__byu_user_info_byu_user_info_js__ = __webpack_require__(9);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__byu_footer_byu_footer_js__ = __webpack_require__(4);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__byu_footer_column_byu_footer_column_js__ = __webpack_require__(3);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__byu_footer_action_button_byu_footer_action_button_js__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__byu_social_media_links_byu_social_media_links_js__ = __webpack_require__(8);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__package_json__ = __webpack_require__(10);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__package_json__);
    /**
     * Created by ThatJoeMoore on 2/18/17
     */

    /*
     * Header Bits
     */

    /*
     * Footer Bits
     */

    console.log('--------------- Starting byu-theme-components ' + __WEBPACK_IMPORTED_MODULE_8__package_json__["version"] + ' ---------------');

    /***/
},
/* 13 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    __webpack_exports__["a"] = createEvent;
    /*
     *  @license
     *    Copyright 2017 Brigham Young University
     *
     *    Licensed under the Apache License, Version 2.0 (the "License");
     *    you may not use this file except in compliance with the License.
     *    You may obtain a copy of the License at
     *
     *        http://www.apache.org/licenses/LICENSE-2.0
     *
     *    Unless required by applicable law or agreed to in writing, software
     *    distributed under the License is distributed on an "AS IS" BASIS,
     *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *    See the License for the specific language governing permissions and
     *    limitations under the License.
     */

    function createEvent(name, detail) {
        if (typeof window.CustomEvent === 'function') {
            return new CustomEvent(name, { detail: detail, cancelable: true, bubbles: true });
        }
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(name, true, true, detail);
        return evt;
    }

    /***/
},
/* 14 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    __webpack_exports__["a"] = querySelectorSlot;
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__ = __webpack_require__(1);
    /*
     *  @license
     *    Copyright 2017 Brigham Young University
     *
     *    Licensed under the Apache License, Version 2.0 (the "License");
     *    you may not use this file except in compliance with the License.
     *    You may obtain a copy of the License at
     *
     *        http://www.apache.org/licenses/LICENSE-2.0
     *
     *    Unless required by applicable law or agreed to in writing, software
     *    distributed under the License is distributed on an "AS IS" BASIS,
     *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *    See the License for the specific language governing permissions and
     *    limitations under the License.
     */

    function querySelectorSlot(slot, selector) {
        var roots = slot.assignedNodes({ flatten: true }).filter(function (n) {
            return n.nodeType === Node.ELEMENT_NODE;
        });

        for (var i = 0, len = roots.length; i < len; i++) {
            var each = roots[i];
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__["a" /* default */])(each, selector)) {
                return each;
            }
            var child = each.querySelector(selector);
            if (child) {
                return child;
            }
        }
        return null;
    }

    /***/
},
/* 15 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    __webpack_exports__["a"] = applyTemplate;
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(22);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hash_sum__);
    /*
     *  @license
     *    Copyright 2017 Brigham Young University
     *
     *    Licensed under the Apache License, Version 2.0 (the "License");
     *    you may not use this file except in compliance with the License.
     *    You may obtain a copy of the License at
     *
     *        http://www.apache.org/licenses/LICENSE-2.0
     *
     *    Unless required by applicable law or agreed to in writing, software
     *    distributed under the License is distributed on an "AS IS" BASIS,
     *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *    See the License for the specific language governing permissions and
     *    limitations under the License.
     */

    var TEMPLATE_RENDERED_CLASS = 'byu-component-rendered';

    function applyTemplate(element, elementName, template, callback) {
        var sum = __WEBPACK_IMPORTED_MODULE_0_hash_sum___default()(template);

        var elSettings = element.__byu_webCommunity_components = element.__byu_webCommunity_components || {};
        if (elSettings.templateHash === sum) {
            //Nothing has changed in the element.  Don't replace the DOM, don't fire the callback.
            return;
        }
        elSettings.templateHash = sum;

        if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
            applyTemplateShady(element, elementName, template, callback, sum);
        } else {
            applyTemplateNative(element, template, callback);
        }
    }

    function applyTemplateShady(element, elementName, template, callback, sum) {
        var templateId = '__byu-custom-element-template_' + elementName + '_' + sum;
        var templateElement = document.head.querySelector('template#' + templateId);
        if (!templateElement) {
            templateElement = document.createElement('template');
            templateElement.id = templateId;
            templateElement.innerHTML = template;
            document.head.appendChild(templateElement);
            ShadyCSS.prepareTemplate(templateElement, elementName);
        }
        if (ShadyCSS.styleElement) {
            ShadyCSS.styleElement(element);
        } else if (ShadyCSS.applyStyle) {
            ShadyCSS.applyStyle(element);
        } else {
            throw new Error('ShadyCSS is not properly defined: no styleElement or applyStyle!');
        }
        var imported = document.importNode(templateElement.content, true);
        var shadow = element.shadowRoot;
        //It'd be nice if we could just diff the DOM and replace what changed between templates, but that might lead to
        // event listeners getting applied twice.  Easier to just clear out the shadow DOM and replace it.
        while (shadow.firstChild) {
            shadow.removeChild(shadow.firstChild);
        }
        shadow.appendChild(imported);
        setTimeout(function () {
            runAfterStamping(element, callback);
        });
    }

    function applyTemplateNative(element, template, callback) {
        element.shadowRoot.innerHTML = template;
        runAfterStamping(element, callback);
    }

    function runAfterStamping(element, callback) {
        element.classList.add(TEMPLATE_RENDERED_CLASS);
        if (callback) {
            callback();
        }
    }

    /***/
},
/* 16 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(17)();
    // imports


    // module
    exports.push([module.i, ".slot-container ::slotted(__byu-menu-active-placeholder__){background:#e6e6e6!important}", ""]);

    // exports


    /***/
},
/* 17 */
/***/function (module, exports) {

    /*
    	MIT License http://www.opensource.org/licenses/mit-license.php
    	Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    module.exports = function () {
        var list = [];

        // return the list of modules as css string
        list.toString = function toString() {
            var result = [];
            for (var i = 0; i < this.length; i++) {
                var item = this[i];
                if (item[2]) {
                    result.push("@media " + item[2] + "{" + item[1] + "}");
                } else {
                    result.push(item[1]);
                }
            }
            return result.join("");
        };

        // import a list of modules into the list
        list.i = function (modules, mediaQuery) {
            if (typeof modules === "string") modules = [[null, modules, ""]];
            var alreadyImportedModules = {};
            for (var i = 0; i < this.length; i++) {
                var id = this[i][0];
                if (typeof id === "number") alreadyImportedModules[id] = true;
            }
            for (i = 0; i < modules.length; i++) {
                var item = modules[i];
                // skip already imported module
                // this implementation is not 100% perfect for weird media query combinations
                //  when a module is imported multiple times with different media queries.
                //  I hope this will never occur (Hey this way we have smaller bundles)
                if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                    if (mediaQuery && !item[2]) {
                        item[2] = mediaQuery;
                    } else if (mediaQuery) {
                        item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                    }
                    list.push(item);
                }
            }
        };
        return list;
    };

    /***/
},
/* 18 */
/***/function (module, exports, __webpack_require__) {

    var pSlice = Array.prototype.slice;
    var objectKeys = __webpack_require__(20);
    var isArguments = __webpack_require__(19);

    var deepEqual = module.exports = function (actual, expected, opts) {
        if (!opts) opts = {};
        // 7.1. All identical values are equivalent, as determined by ===.
        if (actual === expected) {
            return true;
        } else if (actual instanceof Date && expected instanceof Date) {
            return actual.getTime() === expected.getTime();

            // 7.3. Other pairs that do not both pass typeof value == 'object',
            // equivalence is determined by ==.
        } else if (!actual || !expected || (typeof actual === 'undefined' ? 'undefined' : _typeof(actual)) != 'object' && (typeof expected === 'undefined' ? 'undefined' : _typeof(expected)) != 'object') {
            return opts.strict ? actual === expected : actual == expected;

            // 7.4. For all other Object pairs, including Array objects, equivalence is
            // determined by having the same number of owned properties (as verified
            // with Object.prototype.hasOwnProperty.call), the same set of keys
            // (although not necessarily the same order), equivalent values for every
            // corresponding key, and an identical 'prototype' property. Note: this
            // accounts for both named and indexed properties on Arrays.
        } else {
            return objEquiv(actual, expected, opts);
        }
    };

    function isUndefinedOrNull(value) {
        return value === null || value === undefined;
    }

    function isBuffer(x) {
        if (!x || (typeof x === 'undefined' ? 'undefined' : _typeof(x)) !== 'object' || typeof x.length !== 'number') return false;
        if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
            return false;
        }
        if (x.length > 0 && typeof x[0] !== 'number') return false;
        return true;
    }

    function objEquiv(a, b, opts) {
        var i, key;
        if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) return false;
        // an identical 'prototype' property.
        if (a.prototype !== b.prototype) return false;
        //~~~I've managed to break Object.keys through screwy arguments passing.
        //   Converting to array solves the problem.
        if (isArguments(a)) {
            if (!isArguments(b)) {
                return false;
            }
            a = pSlice.call(a);
            b = pSlice.call(b);
            return deepEqual(a, b, opts);
        }
        if (isBuffer(a)) {
            if (!isBuffer(b)) {
                return false;
            }
            if (a.length !== b.length) return false;
            for (i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) return false;
            }
            return true;
        }
        try {
            var ka = objectKeys(a),
                kb = objectKeys(b);
        } catch (e) {
            //happens when one is a string literal and the other isn't
            return false;
        }
        // having the same number of owned properties (keys incorporates
        // hasOwnProperty)
        if (ka.length != kb.length) return false;
        //the same set of keys (although not necessarily the same order),
        ka.sort();
        kb.sort();
        //~~~cheap key test
        for (i = ka.length - 1; i >= 0; i--) {
            if (ka[i] != kb[i]) return false;
        }
        //equivalent values for every corresponding key, and
        //~~~possibly expensive deep test
        for (i = ka.length - 1; i >= 0; i--) {
            key = ka[i];
            if (!deepEqual(a[key], b[key], opts)) return false;
        }
        return (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === (typeof b === 'undefined' ? 'undefined' : _typeof(b));
    }

    /***/
},
/* 19 */
/***/function (module, exports) {

    var supportsArgumentsClass = function () {
        return Object.prototype.toString.call(arguments);
    }() == '[object Arguments]';

    exports = module.exports = supportsArgumentsClass ? supported : unsupported;

    exports.supported = supported;
    function supported(object) {
        return Object.prototype.toString.call(object) == '[object Arguments]';
    };

    exports.unsupported = unsupported;
    function unsupported(object) {
        return object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) == 'object' && typeof object.length == 'number' && Object.prototype.hasOwnProperty.call(object, 'callee') && !Object.prototype.propertyIsEnumerable.call(object, 'callee') || false;
    };

    /***/
},
/* 20 */
/***/function (module, exports) {

    exports = module.exports = typeof Object.keys === 'function' ? Object.keys : shim;

    exports.shim = shim;
    function shim(obj) {
        var keys = [];
        for (var key in obj) {
            keys.push(key);
        }return keys;
    }

    /***/
},
/* 21 */
/***/function (module, exports) {

    module.exports = function anonymous(locals, escapeFn, include, rethrow) {
        "use strict";

        escapeFn = escapeFn || function (markup) {
            return markup == undefined ? "" : String(markup).replace(_MATCH_HTML, encode_char);
        };
        var _ENCODE_HTML_RULES = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&#34;",
            "'": "&#39;"
        },
            _MATCH_HTML = /[&<>'"]/g;
        function encode_char(c) {
            return _ENCODE_HTML_RULES[c] || c;
        }
        var __output = [],
            __append = __output.push.bind(__output);
        __append('<link rel="stylesheet" type="text/css" href="/dist/byu-header/byu-header.css"><div id="header" class="byu-header-root"><div class="byu-header-content needs-width-setting stretches">\n<div class="byu-header-primary">\n<a class="byu-logo" id="home-url" name="home-url" href="">\n<img class="byu-logo" alt="BYU" src="https://cdn.byu.edu/shared-icons/latest/logos/monogram-white.svg">\n</a><div class="byu-header-title">\n<slot id="site-title" name="site-title"></slot>\n</div>\n');
        if (locals.mobile) {
            __append('<button type="button" class="mobile-menu-button tcon tcon-menu--xbutterfly" aria-label="toggle menu">\n<span class="tcon-menu__lines" aria-hidden="true"></span>\n<span class="tcon-visuallyhidden">toggle menu</span>\n</button>\n');
        }
        __append("</div>");
        if (locals.mobile) {
            __append('<div id="mobileMenu">\n<slot id="user" name="user"></slot>\n<slot id="navbarMenu" name="nav"></slot>\n<div class="byu-header-actions">\n<slot id="actions" name="actions"></slot>\n</div>\n</div>\n');
        }
        __append('<div id="secondary" class="byu-header-secondary">\n');
        if (!locals.mobile) {
            __append('<div class="byu-header-actions">\n<slot id="actions" name="actions"></slot>\n</div>\n<div class="byu-header-user">\n<slot id="user" name="user"></slot>\n</div>\n');
        }
        __append('<div class="byu-header-search">\n<slot id="search" name="search"></slot>\n</div></div>\n</div>\n</div>\n');
        if (!locals.mobile) {
            __append('<div class="menu-outer-wrapper">\n<div class="menu-inner-wrapper slot-wrapper needs-width-setting">\n<slot id="navbarMenu" name="nav"></slot>\n</div>\n</div>\n');
        }
        return __output.join("");
    };

    /***/
},
/* 22 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    function pad(hash, len) {
        while (hash.length < len) {
            hash = '0' + hash;
        }
        return hash;
    }

    function fold(hash, text) {
        var i;
        var chr;
        var len;
        if (text.length === 0) {
            return hash;
        }
        for (i = 0, len = text.length; i < len; i++) {
            chr = text.charCodeAt(i);
            hash = (hash << 5) - hash + chr;
            hash |= 0;
        }
        return hash < 0 ? hash * -2 : hash;
    }

    function foldObject(hash, o, seen) {
        return Object.keys(o).sort().reduce(foldKey, hash);
        function foldKey(hash, key) {
            return foldValue(hash, o[key], key, seen);
        }
    }

    function foldValue(input, value, key, seen) {
        var hash = fold(fold(fold(input, key), toString(value)), typeof value === 'undefined' ? 'undefined' : _typeof(value));
        if (value === null) {
            return fold(hash, 'null');
        }
        if (value === undefined) {
            return fold(hash, 'undefined');
        }
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
            if (seen.indexOf(value) !== -1) {
                return fold(hash, '[Circular]' + key);
            }
            seen.push(value);
            return foldObject(hash, value, seen);
        }
        return fold(hash, value.toString());
    }

    function toString(o) {
        return Object.prototype.toString.call(o);
    }

    function sum(o) {
        return pad(foldValue(0, o, '', []).toString(16), 8);
    }

    module.exports = sum;

    /***/
},
/* 23 */
/***/function (module, exports) {

    module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"/dist/byu-footer-action-button/byu-footer-action-button.css\"> <div class=\"wrapper\"> <slot name=\"actiontext\"></slot> </div>";

    /***/
},
/* 24 */
/***/function (module, exports) {

    module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"/dist/byu-footer-column/byu-footer-column.css\"> <h2 class=\"header\"> <slot name=\"header\"></slot> </h2> <div class=\"content\"> <slot></slot> </div>";

    /***/
},
/* 25 */
/***/function (module, exports) {

    module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"/dist/byu-footer/byu-footer.css\"> <div class=\"site-footer-wrapper\"> <div class=\"site-footer needs-width-setting\"> <slot id=\"slot\"></slot> </div> </div> <div class=\"university-footer\"> <div class=\"university-logo-wrapper needs-width-setting\"> <a href=\"https://home.byu.edu/home/\" target=\"_blank\"> <img src=\"https://cdn.byu.edu/shared-icons/latest/logos/word-mark-wide-white.svg\" alt=\"Brigham Young University\" class=\"university-logo\"></a> </div> <div class=\"university-info needs-width-setting\"> <span class=\"info-text\">&copy;<span id=\"currentYear\"></span> All Rights Reserved</span> <span class=\"info-text\">Provo, UT 84602, USA</span> <span class=\"info-text\"><a class=\"contact-phone\" href=\"tel:18014224636\">801-422-4636</a></span> </div> </div>";

    /***/
},
/* 26 */
/***/function (module, exports) {

    module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"/dist/byu-menu/byu-menu.css\"> <nav class=\"outer-nav slot-container needs-width-setting\"> <slot class=\"byu-menu-items\" id=\"byu-menu-items\"></slot> <div class=\"byu-menu-more-menu\"> <a href=\"javascript: void 0\" class=\"byu-menu-more\"> More <div class=\"more-open-button\" aria-label=\"More\"> </div> </a> <div class=\"byu-menu-more-items slot-container\"> <slot class=\"byu-menu-more-slot\" id=\"byu-menu-more-slot\" name=\"more\"></slot> </div> </div> </nav>";

    /***/
},
/* 27 */
/***/function (module, exports) {

    module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"/dist/byu-search/byu-search.css\"> <div id=\"search-form\"> <div id=\"search-container\"> <slot id=\"search\"><input type=\"search\" placeholder=\"Search\"></slot> </div> <button id=\"search-button\" type=\"submit\"> <img id=\"search-icon\" src=\"https://cdn.byu.edu/shared-icons/latest/fontawesome/search-white.svg\" alt=\"Run Search\"> </button> </div>";

    /***/
},
/* 28 */
/***/function (module, exports) {

    module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"/dist/byu-social-media-links/byu-social-media-links.css\"> <div class=\"slot-wrapper\"> <slot id=\"social-main\"></slot> <slot id=\"social-deprecated-facebook\" name=\"facebook\"></slot> <slot id=\"social-deprecated-twitter\" name=\"twitter\"></slot> <slot id=\"social-deprecated-instagram\" name=\"instagram\"></slot> <slot id=\"social-deprecated-youtube\" name=\"youtube\"></slot> <slot id=\"social-deprecated-pinterest\" name=\"pinterest\"></slot> <slot id=\"social-deprecated-googleplus\" name=\"googleplus\"></slot> <slot id=\"social-deprecated-linkedin\" name=\"linkedin\"></slot> <slot id=\"social-deprecated-rss\" name=\"rss\"></slot> <slot id=\"social-deprecated-snapchat\" name=\"snapchat\"></slot> </div>";

    /***/
},
/* 29 */
/***/function (module, exports) {

    module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"/dist/byu-user-info/byu-user-info.css\"> <div class=\"byu-user-wrapper\"> <div class=\"no-user slot-wrapper\"> <div class=\"user-info-image\" aria-label=\"User Icon\"> </div> <span class=\"text slot-wrapper\"> <slot name=\"login\">Sign In</slot> </span> </div> <div class=\"has-user\"> <span class=\"name slot-wrapper\"> <slot name=\"user-name\" id=\"user-name\"></slot> </span> <div class=\"user-info-image\" aria-label=\"User Icon\"> </div> <span class=\"logout slot-wrapper\"> <slot name=\"logout\">Sign Out</slot> </span> </div> </div>";

    /***/
}]
/******/);
}());

//# sourceMappingURL=components-compat.js.map
