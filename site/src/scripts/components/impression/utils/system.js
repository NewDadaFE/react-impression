import { findDOMNode } from 'react-dom';
import { isDescendentNode } from './dom';

/**
 * 初始化.
 */
const init = () => {
    let bodyClick = document.body.onclick;

    document.body._popLayers = [];
    document.body.onclick = event => {
        bodyClick && bodyClick(event);
        //清空时间弹出层
        document.body._popLayers.map(component => {
            let componentDom = findDOMNode(component);

            //兼容Chrome、FF、Safari
            if((event.path && event.path.indexOf(componentDom) === -1)
                || !isDescendentNode(componentDom, event.target)){
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
export const manager = component => {
    document.body._popLayers.push(component);
};

/**
 * 取消弹出层组件管理.
 * @param  {[Component]} component [组件]
 */
export const unmanager = component => {
    document.body._popLayers = document.body._popLayers.filter(item => item !== component);
};
