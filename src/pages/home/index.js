import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import  { actionCreators } from './store';
import { HomeWrapper, FilterGroup } from './style';
import Filter from '../../common/filter';
import Table from './components/table';
 

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [
                 {
                    "account": "85225264",
                    "accountName": "Savings Account",
                    "mask": "0124",
                    "amount": 588.59,
                    "transactionType": "deposit",
                    "currencyCode": "PAB USD",
                    "currencyName": "Liberian Dollar",
                    "currencySymbol": "лв",
                    "iban": "NO2607790970023",
                    "bic": "YWGIGPX1"
                },
                {
                    "account": "67442173",
                    "accountName": "Checking Account",
                    "mask": "9572",
                    "amount": 890.66,
                    "transactionType": "withdrawal",
                    "currencyCode": "DKK",
                    "currencyName": "Codes specifically reserved for testing purposes",
                    "currencySymbol": "₫",
                    "iban": "PS828FY1714093005050080097054",
                    "bic": "JFEOIEQ1"
                }
            ],
            filters : {}
        }
     
    }
    
    filterByConditions(data, filters) {
        const useConditions = search => item => Object.keys(search).every(k => 
        Array.isArray(search[k]) && search[k].includes(item[k])
        );
        return data.filter(useConditions(filters));
    }
  
    render() {
        return (
        <HomeWrapper>
            <FilterGroup>
                <h1>Filter</h1>
                <Filter />
                <Filter />
            </FilterGroup>
            <Table />
        </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => {
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
};

export default Home;