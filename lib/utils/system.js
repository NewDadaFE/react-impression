'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unmanager = exports.manager = undefined;

var _reactDom = require('react-dom');

var _dom = require('./dom');

/**
 * 初始化.
 */
var init = function init() {
    document.body._popLayers = [];

    var bodyClick = document.body.onclick;
    document.body.onclick = function (event) {
        bodyClick && bodyClick(event);
        //清空时间弹出层
        document.body._popLayers.map(function (component) {
            var componentDom = (0, _reactDom.findDOMNode)(component);
            //兼容Chrome、FF、Safari
            if (event.path && event.path.indexOf(componentDom) === -1 || !(0, _dom.isDescendentNode)(componentDom, event.target)) {
                component.hideOptionsHandle && component.hideOptionsHandle();
            }
        });
    };
};

init();

/**
 * 管理弹出层组件.
 * @param  {[Component]} component  [组件]
 */
var manager = exports.manager = function manager(component) {
    document.body._popLayers.push(component);
};

/**
 * 取消弹出层组件管理.
 * @param  {[Component]} component [组件]
 */
var unmanager = exports.unmanager = function unmanager(component) {
    document.body._popLayers = document.body._popLayers.filter(function (item) {
        return item !== component;
    });
};
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(init, 'init', 'src/scripts/utils/system.js');

    __REACT_HOT_LOADER__.register(manager, 'manager', 'src/scripts/utils/system.js');

    __REACT_HOT_LOADER__.register(unmanager, 'unmanager', 'src/scripts/utils/system.js');
})();

;