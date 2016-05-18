import React, { Component } from 'react';

/**
 * Tooltip组件.
 */
export default class Tooltip extends Component{
    //prop type校验
    static propTypes = {
        position: React.PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
        content: React.PropTypes.string,
        children: React.PropTypes.element.isRequired,
    }
    //默认props
    static defaultProps = {
        position: 'right',
    }
    //创建tooltip
    createTooltip(targetRect){
        let { position, content } = this.props;
        let positionClass = `tooltip-${position}`;
        let tooltipNode = document.createElement('div');
        let arrowNode = document.createElement('div');
        let innerNode = document.createElement('div');

        tooltipNode.className = `tooltip ${positionClass}`;
        arrowNode.className = 'tooltip-arrow';
        innerNode.className = 'tooltip-inner';

        innerNode.innerHTML = content;
        tooltipNode.appendChild(arrowNode);
        tooltipNode.appendChild(innerNode);

        document.body.appendChild(tooltipNode);
        let tooltipRect = tooltipNode.getBoundingClientRect();

        //计算left、top
        switch(position){
        case 'top':
            tooltipNode.style.top = targetRect.top - tooltipRect.height;
            tooltipNode.style.left = targetRect.left - (tooltipRect.width - targetRect.width)/2;
            break;
        case 'bottom':
            tooltipNode.style.top = targetRect.top + targetRect.height;
            tooltipNode.style.left = targetRect.left - (tooltipRect.width - targetRect.width)/2;
            break;
        case 'left':
            tooltipNode.style.left = targetRect.left - tooltipRect.width;
            tooltipNode.style.top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
            break;
        case 'right':
            tooltipNode.style.left = targetRect.left + targetRect.width;
            tooltipNode.style.top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
            break;
        }

        tooltipNode.className = `tooltip ${positionClass} in`;
        this.tooltip = tooltipNode;
    }
    //显示tooltip
    onMouseOver(event){
        let rect = event.target.getBoundingClientRect();
        this.createTooltip(rect);
    }
    //移除tooltip
    onMouseOut(){
        document.body.removeChild(this.tooltip);
    }
    //渲染
    render(){
        let { children } = this.props;
        let { onMouseOver, onMouseOut } = children.props;

        children = React.cloneElement(children, {
            onMouseOver: onMouseOver? event => {
                onMouseOver();
                this.onMouseOver(event);
            } : this.onMouseOver.bind(this),
            onMouseOut: onMouseOut? event => {
                onMouseOut();
                this.onMouseOut(event);
            } : this.onMouseOut.bind(this),
        });

        return children;
    }
}