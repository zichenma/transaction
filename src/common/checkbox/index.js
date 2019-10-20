import React from 'react';
import { CheckBoxWrapper } from './style';


const CheckBox = ({label}) => {
    return (
        <CheckBoxWrapper>
            <label>
                {label}
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
        </CheckBoxWrapper>
    )
};

export default CheckBox;