import React from 'react';
import  { FilterWrapper } from './style';
import CheckBox from '../checkbox';


const Filter = ({filterInfo, getFilterConditions}) => {
    return (
        <FilterWrapper>
            <h3>{Object.keys(filterInfo)[0]}</h3>
            {Object.values(filterInfo)[0].map(label => <CheckBox key={label} label={label} title={Object.keys(filterInfo)[0]} handleChecked={getFilterConditions} />)}
        </FilterWrapper>
    )
}

export default Filter;