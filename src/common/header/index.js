import React from 'react';
import { HeaderWrapper } from './style';


const Header = ({title}) => {
    return (
        <HeaderWrapper>{title}</HeaderWrapper>
    )
}

export default Header;