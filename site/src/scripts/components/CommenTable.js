import React, { PropTypes } from 'react';

/**
 * React组件
 */
const CommenTable = ({ data }) => {
    let rows = data.map((item, index) => {
        return (
            <tr key={index}>
                <td style={{ fontWeight: 'bold' }}>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3] || '-'}</td>
            </tr>
        );
    });

    return (
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
};

CommenTable.propTypes = {
    data: PropTypes.array,
};

export default CommenTable;
