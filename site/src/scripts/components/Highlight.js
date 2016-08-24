import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js';

/**
 * 代码展示组件.
 */
export default class Highlight extends Component {
    static propTypes = {
        innerHTML: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.node,
    };

    static defaultProps = {
        innerHTML: false,
        className: null,
    };
    componentDidMount(){
        this.highlightCode();
    }

    componentDidUpdate(){
        this.highlightCode();
    }
    highlightCode() {
        const domNode = ReactDOM.findDOMNode(this);
        const nodes = domNode.querySelectorAll('pre code');

        if (nodes.length > 0) {
            for (let i = 0; i < nodes.length; i++) {
                hljs.highlightBlock(nodes[i]);
            }
        }
    }
    render() {
        const { innerHTML, children, className } = this.props;

        if (innerHTML) {
            return (
                <div
                    dangerouslySetInnerHTML={{ __html: children }}
                    className={className || null}></div>
            );
        }

        return (
            <pre>
                <code className={className}>{children}</code>
            </pre>
        );
    }
}
