import React from 'react';
import {TableWrapper} from './style';


const Table = data => {
    return (
        <TableWrapper>
        <table>
            <thead>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Points</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>Peter</td>
            <td>Griffin</td>
            <td>$100</td>
            </tr>
            <tr>
            <td>Lois</td>
            <td>Griffin</td>
            <td>$150</td>
            </tr>
            <tr>
            <td>Joe</td>
            <td>Swanson</td>
            <td>$300</td>
            </tr>
            <tr>
            <td>Cleveland</td>
            <td>Brown</td>
            <td>$250</td>
            </tr>
            </tbody>
        </table>
        </TableWrapper>
    )
}

export default Table;