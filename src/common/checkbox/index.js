import React from 'react';
import { CheckBoxWrapper } from './style';


const CheckBox = ({label, title, handleChecked}) => {
    return (
        <CheckBoxWrapper>
            <label>
                {label}
                <input type="checkbox" onChange={val => handleChecked(title, label, val.target.checked)}/>
                <span className="checkmark"></span>
            </label>
        </CheckBoxWrapper>
    )
};

export default CheckBox;