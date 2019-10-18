import React from 'react';
import  { FilterWrapper } from './style';
import CheckBox from '../checkbox';


const Filter = data => {
    return (
        <FilterWrapper>
            <h3>Filter Title</h3>
            <CheckBox />
            <CheckBox />
            <CheckBox />
            <CheckBox />
        </FilterWrapper>
    )
}

export default Filter;