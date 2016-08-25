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
        innerHTML: PropTypes.string,
        children: PropTypes.string,
    };
    //格式化代码
    highlightCode(){
        let domNode = ReactDOM.findDOMNode(this),
            nodes = domNode.querySelectorAll('pre code');

        nodes.forEach(node => hljs.highlightBlock(node));
    }
    //显示/隐藏代码
    toggleCodeHandle = () => {
        let { show } = this.state;

        this.setState({
            show: !show
        });
    }
    componentDidMount(){
        this.highlightCode();
    }
    componentDidUpdate(){
        this.highlightCode();
    }
    render() {
        let { innerHTML, children, ...others } = this.props,
            { show } = this.state;

        if (innerHTML) {
            innerHTML = innerHTML.trim();

            return (
                <div
                    dangerouslySetInnerHTML={{ __html: innerHTML }}
                    {...others}></div>
            );
        }

        return (
            <div style={{marginTop: '-20px'}} {...others}>
                <div className="text-right">
                    <Button onClick={this.toggleCodeHandle} className="btn-code-toggle" theme="default" size="sm">
                        <Icon type={show?'angle-double-up':'code'}/>
                    </Button>
                </div>
                <Card className={classnames('no-margin', {hidden: !show})} noborder>
                    <pre className="no-margin">
                        <code>{children}</code>
                    </pre>
                </Card>
            </div>
        );
    }
}
