import React from 'react';
import  { FilterWrapper } from './style';
import CheckBox from '../checkbox';


const Filter = ({filterInfo}) => {
    return (
        <FilterWrapper>
            <h3>{Object.keys(filterInfo)[0]}</h3>
            {Object.values(filterInfo)[0].map(label => <CheckBox key={label} label={label} />)}
        </FilterWrapper>
    )
}

export default Filter;