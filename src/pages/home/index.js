import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { actionCreators } from './store';
import { HomeWrapper, FilterGroup, Main } from './style';
import { ACCOUNT_FILTER_SCHEMA, 
         TRANSACTION_FILTER_SCHEMA,
         ACCOUNT_NUM_SCHEMA } 
from '../../utils/constants';
import { selectedCols } from '../../utils/utils';
import Header from '../../common/header';
import Filter from '../../common/filter';
import Pagination from '../../common/pagination';
import Table from './components/table';


class Home extends Component {
    filters = {};

    constructor(props){
        super(props)
        this.state = {
            filters : {}
        }
        this.filters[ACCOUNT_FILTER_SCHEMA.NAMES[0]] = [];
        this.filters[TRANSACTION_FILTER_SCHEMA.NAMES[0]] = [];
    }

    componentDidMount() {
        const { handleGetList, list, startIdx, endIdx } = this.props;
        handleGetList(list, startIdx, endIdx);
    }

    cleanObj (obj) {
        return Object.keys(obj) 
            .filter(key => obj[key].length !== 0)
            .reduce((acc, key) => { 
                acc[key] = obj[key]
                return acc
            }, {})
    }

    getFilterConditions = (title, label, checked) =>  {
        const accountTitle = ACCOUNT_FILTER_SCHEMA.NAMES[0];
        const transactionTitle = TRANSACTION_FILTER_SCHEMA.NAMES[0];
        if (accountTitle === title && checked) {
            this.filters[accountTitle].push(label);
            this.filters[accountTitle] = Array.from(new Set(this.filters[accountTitle]));
        } else if (transactionTitle === title && checked) {
            this.filters[transactionTitle].push(label);
            this.filters[transactionTitle]= Array.from(new Set(this.filters[transactionTitle]));
        } else if (accountTitle === title && !checked) {
            const idx = this.filters[accountTitle].indexOf(label);
            this.filters[accountTitle].splice(idx, 1);
        } else {
            const idx = this.filters[transactionTitle].indexOf(label);
            this.filters[transactionTitle].splice(idx, 1);
        }
        this.setState({
            ...this.state,
            filters:  this.cleanObj(this.filters)
        })
    }

    filterByConditions(data, filters) {
        const useConditions = search => item => Object.keys(search).every(k => 
            Array.isArray(search[k]) && search[k].includes(item[k])
        );
        return data.filter(useConditions(filters));
    }

    filterFields = (data, fields)  => {
        const key = fields[0];
        const filterInfo = {};
        filterInfo[key] = new Set();
        data.map(item => filterInfo[key].add(Object.values(item)[0]));
        const value  = Array.from(filterInfo[key]);
        filterInfo[key] = value;
        return filterInfo;
    }

    isAccountNumSet = (data) => {
        return data.reduce((acc, item) => {
                acc.add(Object.values(item)[0]);
                return acc;
        },new Set())
    }

    handlePrev = (startIdx, endIdx) => {
        console.log(startIdx, endIdx)
    }

    handleNext = () => {
        const { handleGetList, list, startIdx, endIdx } = this.props;
        handleGetList(list, startIdx + 20, endIdx + 20);
    }
  
    render() {
        const { list, startIdx, endIdx, handleGetList } = this.props;
        const { filters } =  this.state;
        const selectedData = list.toJS();
        const accountfilterData = selectedCols(selectedData, ACCOUNT_FILTER_SCHEMA.NAMES);
        const accountFilterInfo = this.filterFields(accountfilterData, ACCOUNT_FILTER_SCHEMA.NAMES);
        const transactionFilterData = selectedCols(selectedData, TRANSACTION_FILTER_SCHEMA.NAMES);
        const transactionFilterInfo = this.filterFields(transactionFilterData, TRANSACTION_FILTER_SCHEMA.NAMES);
        const accountNumData = selectedCols(selectedData, ACCOUNT_NUM_SCHEMA.NAMES);
        return (
        <HomeWrapper>
            <Header title={'My Transactions'} />
            <Main>
                <FilterGroup>
                    <h2>Filters</h2>
                    <Filter getFilterConditions={this.getFilterConditions} filterInfo={accountFilterInfo} />
                    <Filter getFilterConditions={this.getFilterConditions} filterInfo={transactionFilterInfo}/>
                </FilterGroup>
                <Table data={this.filterByConditions(selectedData, filters)} isAccountNumSet={this.isAccountNumSet(accountNumData)}/>
            </Main>
            <Pagination handlePrev={(list, startIdx, endIdx) => handleGetList(list, startIdx, endIdx)} handleNext={this.handleNext} />

        </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'list']),
        startIdx: state.getIn(['home', 'startIdx']),
        endIdx: state.getIn(['home', 'endIdx']),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetList(list, startIdx, endIdx){
            dispatch(actionCreators.getList(startIdx, endIdx));
        },
        // handlePrev(list, startIdx, endIdx) {
        //     (list.size === 0) && dispatch(actionCreators.getPrev(startIdx, endIdx));;
        // },
        // handleNext(list, startIdx, endIdx) {
        //     (list.size === 0) && dispatch(actionCreators.getNext(startIdx, endIdx));
        // }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);