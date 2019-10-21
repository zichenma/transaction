import React from 'react';
import  { FilterWrapper } from './style';
import CheckBox from '../checkbox';
import { camelcaseToWords } from  '../../utils/utils';


const Filter = ({filterInfo, getFilterConditions}) => {
    const header = camelcaseToWords(Object.keys(filterInfo)[0]);
    return (
        <FilterWrapper>
            <h3>{header}</h3>
            {Object.values(filterInfo)[0].map(label => <CheckBox key={label} label={label} title={Object.keys(filterInfo)[0]} handleChecked={getFilterConditions} />)}
        </FilterWrapper>
    )
}

export default Filter;