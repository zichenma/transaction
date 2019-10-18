import React from 'react';
import { CheckBoxWrapper } from './style';


const CheckBox = () => {
    return (
        <CheckBoxWrapper>
            <label>
                One
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
        </CheckBoxWrapper>
    )
};

export default CheckBox;