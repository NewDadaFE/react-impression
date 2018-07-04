import { findDOMNode } from 'react-dom';
import { contains } from './dom';

/**
 * 初始化.
 */
const init = () => {
    const bodyClick = document.body.onclick;

    document.body.popLayers = [];
    document.body.onclick = event => {
        bodyClick && bodyClick(event);
        // 清空时间弹出层
        document.body.popLayers.forEach(component => {
            const componentDom = findDOMNode(component);

            if(!contains(componentDom, event.target)) {
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
    document.body.popLayers.push(component);
};

/**
 * 取消弹出层组件管理.
 * @param  {[Component]} component [组件]
 */
export const unmanager = component => {
    document.body.popLayers = document.body.popLayers.filter(item => item !== component);
};
