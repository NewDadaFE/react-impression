import classnames from 'classnames';
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js';
import { Card, Button, Icon } from './impression'

/**
 * 代码展示组件.
 */
export default class Highlight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: undefined !== props.show? props.show : false
        };
    }
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
    toggleCodeHandle = () => {
        let { show } = this.state;

        this.setState({
            show: !show
        });
    }
    render() {
        let { innerHTML, children, className } = this.props,
            { show } = this.state;

        if (innerHTML) {
            return (
                <div
                    dangerouslySetInnerHTML={{ __html: children }}
                    className={className || null}></div>
            );
        }

        return (
            <div style={{marginTop: '-20px'}}>
                <div className="text-right">
                    <Button onClick={this.toggleCodeHandle} className="btn-code-toggle" style="default" size="sm">
                        <Icon type={show?'angle-double-up':'angle-double-down'}/>
                    </Button>
                </div>
                <Card className={classnames('no-margin', {hidden: !show})} noborder>
                    <pre className="no-margin">
                        <code className={className}>{children}</code>
                    </pre>
                </Card>
            </div>
        );
    }
}
