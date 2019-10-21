import React from 'react';
import  { PageWrapper } from './style';


const Pagination = ({handlePrev, handleNext}) => {
    return (
        <PageWrapper>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </PageWrapper>
    )
}

export default Pagination;