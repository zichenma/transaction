import React from 'react';
import {TableWrapper} from './style';
import { Link } from 'react-router-dom';
import { camelcaseToWords } from '../../../../utils/utils';


const headerTranslate = colName => {
    let translatedName = '';
    if (colName === 'account') {
        translatedName = 'account no.';
    } else  if (colName === 'currencyCode') {
        translatedName = 'currency';
    } else {
        translatedName = colName;
    }
    return translatedName;
}

const renderThead = colNames => {
    return (
        <thead>
        <tr>
         { colNames && colNames.map(colName => <th nowrap="true" key={colName}>{camelcaseToWords(headerTranslate(colName)) }</th>) }
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
        <td nowrap="true" key={index + item}>
            <Link to={'/' + item}>
                {item}
            </Link>
        </td>);
    }  else {
        return <td nowrap="true" key={index + item}>{item}</td>;
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