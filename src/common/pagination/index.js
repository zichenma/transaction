import React from 'react';
import  { PageWrapper } from './style';

const hidePrvBtn = (currentPage, totalPage) => {
    if (currentPage > totalPage) return true;
    return currentPage <= 0;
}

const hideNextBtn = (currentPage, totalPage) => {
    if (currentPage > totalPage) return true;
    return  currentPage === totalPage;
}


const Pagination = ({handlePrev, handleNext, currentPage, totalPage}) => {
    console.log(currentPage, totalPage)
    return (
        <PageWrapper>
            { hidePrvBtn(currentPage, totalPage) && <button onClick={handlePrev}>Prev</button> }
            <span>{currentPage}/{totalPage}</span>
            { hideNextBtn(currentPage, totalPage) && <button onClick={handleNext}>Next</button> }
        </PageWrapper>
    )
}

export default Pagination;