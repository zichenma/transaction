import React from 'react';
import {TableWrapper} from './style';
import { Link } from 'react-router-dom';


const renderThead = colNames => {
    return (
        <thead>
        <tr>
         { colNames && colNames.map(colName => <th key={colName}>{colName}</th>) }
        </tr>
        </thead>
    )
}

const renderTbody = (data, isAccountNumSet) => {
    return (
         <tbody>
            {data.map((items,index) => <tr key={index + items[0]}>{items.map((item,index) => renderTd(item, index, isAccountNumSet))}</tr>)}
        </tbody> 
    )
}

const renderTd = (item, index, isAccountNumSet) => {
    if (isAccountNumSet.has(item)) {
        return (
        <td key={index + item}>
            <Link to={'/' + item}>
                {item}
            </Link>
        </td>);
    }  else {
        return <td key={index + item}>{item}</td>;
    }
}

const Table = ({data, isAccountNumSet}) => {
    const headData = data[0] && Object.keys(data[0]);
    const tableData = data.map(item => Object.values(item));
    return (
        <TableWrapper>
        <table>
            {renderThead(headData)}
            {renderTbody(tableData, isAccountNumSet)}
        </table>
        </TableWrapper>
    )
}

export default Table;