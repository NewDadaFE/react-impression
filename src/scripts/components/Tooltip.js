// import classnames from 'classnames';
import React, { Component } from 'react';
// import ReactDom from 'react-dom';

/**
 * Tooltip组件.
 */
export default class Tooltip extends Component{
    //prop type校验
    static propTypes = {
        position: React.PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
        msg: React.PropTypes.string,
        children: React.PropTypes.element.isRequired,
    }
    //默认props
    static defaultProps = {
        position: 'right',
    }
    createTooltip(targetRect){
        let { position, msg } = this.props;
        let positionClass = `tooltip-${position}`;
        let TooltipNode = document.createElement("div");
        let arrowNode = document.createElement("div");
        let innerNode = document.createElement("div");

        TooltipNode.className = `tooltip ${positionClass}`;
        arrowNode.className = 'tooltip-arrow';
        innerNode.className = 'tooltip-inner';

        innerNode.innerHTML = msg;
        TooltipNode.appendChild(arrowNode);
        TooltipNode.appendChild(innerNode);

        document.body.appendChild(TooltipNode);
        let tooltipRect = TooltipNode.getBoundingClientRect();

        //计算left、top
        switch(position){
        case 'top':
            TooltipNode.style.top = targetRect.top - tooltipRect.height;
            TooltipNode.style.left = targetRect.left - (tooltipRect.width - targetRect.width)/2;
            break;
        case 'bottom':
            TooltipNode.style.top = targetRect.top + tooltipRect.height;
            TooltipNode.style.left = targetRect.left - (tooltipRect.width - targetRect.width)/2;
            break;
        case 'left':
            TooltipNode.style.left = targetRect.left - tooltipRect.width;
            TooltipNode.style.top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
            break;
        case 'right':
            TooltipNode.style.left = targetRect.left + targetRect.width;
            TooltipNode.style.top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
            break;
        }
        
        TooltipNode.className = `tooltip ${positionClass} in`;
        this.tooltip = TooltipNode;
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