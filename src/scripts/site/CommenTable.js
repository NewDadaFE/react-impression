import React, { Component } from 'react';

/**
 * React组件
 */
export default class ComponentName extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
    }
    //props校验
    static propTypes ={
        data: React.PropTypes.any,
    }
    //默认props
    static defaultProps = {

    }
    //渲染
    render(){
        let { data } = this.props;

        let rows = data.map((item, index) => {
            return (
                <tr key={index}>
                    <td style={{fontWeight: 'bold'}}>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                    <td>{item[3] || '-'}</td>
                </tr>
            );
        });

        return(
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>参数</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}