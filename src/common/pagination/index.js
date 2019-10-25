import React from 'react';
import  { PageWrapper } from './style';

const hidePrvBtn = currentPage => {
    return currentPage > 1;
}

const hideNextBtn = (currentPage, totalPage) => {
    return  currentPage !== totalPage;
}


const Pagination = ({handlePrev, handleNext, currentPage, totalPage}) => {
    const isHidePrv = hidePrvBtn(currentPage);
    const isHideNext = hideNextBtn(currentPage, totalPage);
    return (
        <PageWrapper>
            { isHidePrv && <button onClick={handlePrev}>Prev</button> }
            <span>{currentPage}/{totalPage}</span>
            { isHideNext && <button onClick={handleNext}>Next</button> }
        </PageWrapper>
    )
}

export default Pagination;