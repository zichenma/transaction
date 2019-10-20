import React from 'react';
import {TableWrapper} from './style';

const renderThead = colNames => {
    return (
        <thead>
        <tr>
         { colNames && colNames.map(colName => <th key={colName}>{colName}</th>) }
        </tr>
        </thead>
    )
}

const renderTbody = data => {
    return (
         <tbody>
            {data.map((items,index) => <tr key={index}>{items.map((item,index) => <td key={index}>{item}</td>)}</tr>)}
        </tbody> 
    )
}

const Table = ({data}) => {
    const headData = data[0] && Object.keys(data[0]);
    const tableData = data.slice(0, 24).map(item => Object.values(item));
    return (
        <TableWrapper>
        <table>
            {renderThead(headData)}
            {renderTbody(tableData)}
        </table>
        </TableWrapper>
    )
}

export default Table;