import React, { PureComponent } from 'react';
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


class Home extends PureComponent {
    filters = {};

    constructor(props){
        super(props)
        this.state = {
            filters : {},
            range: props.endIdx - props.startIdx,
        }
        this.filters[ACCOUNT_FILTER_SCHEMA.NAMES[0]] = [];
        this.filters[TRANSACTION_FILTER_SCHEMA.NAMES[0]] = [];
        
    }

    componentDidMount() {
        const { handleGetList, list, startIdx, endIdx } = this.props;
        handleGetList(list, startIdx, endIdx);
    }
    
    // if filter field has empty array, remove its property
    // e.g. {"transactionType": ["deposit"], "accountName": []} =>
    // {"transactionType": ["deposit"]}
    cleanObj (obj) {
        return Object.keys(obj) 
            .filter(key => obj[key].length !== 0)
            .reduce((acc, key) => { 
                acc[key] = obj[key]
                return acc;
            }, {})
    }

    // By clicking the checkbox to create filter schema for filterByConditions to use
    // e.g. filter schema : {"transactionType": ["deposit", ...], "accountName": ["Auto Loan Account",...]}
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

    // filter the source data according to the filter schema which is provided by getFilterConditions
    filterByConditions(data, filters) {
        const { startIdx, endIdx, handleGetTotal } = this.props;
        const useConditions = search => item => Object.keys(search).every(k => 
            Array.isArray(search[k]) && search[k].includes(item[k])
        );
        const total = data.filter(useConditions(filters)).length;
        handleGetTotal(total);
        return data.filter(useConditions(filters)).slice(startIdx, endIdx);
    }
    
    // input : e.g.{transactionType: "deposit"}
    // output : transactionType: ["deposit", "withdrawal", "invoice", "payment"]
    filterFields = (data, fields)  => {
        const key = fields[0];
        const filterInfo = {};
        filterInfo[key] = new Set();
        data.map(item => filterInfo[key].add(Object.values(item)[0]));
        const value  = Array.from(filterInfo[key]);
        filterInfo[key] = value;
        return filterInfo;
    }
    
    // input:  e.g. {account: "85225264"}
    // output: account: set("85225264, ...")
    // for check if field is account to make accout as a link in <Table>
    isAccountNumSet = (data) => {
        return data.reduce((acc, item) => {
                acc.add(Object.values(item)[0]);
                return acc;
        },new Set())
    }

    handlePrev = () => {
        const { handleGetList, list, startIdx, endIdx } = this.props;
        const { range } = this.state;
        handleGetList(list, startIdx - range, endIdx - range);
    }

    handleNext = () => {
        const { handleGetList, list, startIdx, endIdx } = this.props;
        const { range } = this.state;
        handleGetList(list, startIdx + range, endIdx + range);
    }

    calCurrPage = () => {
        const {  startIdx } = this.props;
        const { range, total } = this.state;
        const totalPage = Math.ceil(total / range);
        const currPage = Math.ceil(startIdx / range) + 1;
        return currPage < 0 ? (totalPage + currPage) : currPage;
    }

    calTotalPage = () => {
        const { range } = this.state;
        const { total } = this.props;
        return Math.ceil(total / range);
    }

    render() {
        const { list } = this.props;
        const { filters, showPrev, showNext } =  this.state;
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
            <Pagination handlePrev={this.handlePrev} 
                handleNext={this.handleNext} 
                currentPage={this.calCurrPage()}  
                totalPage={this.calTotalPage()}
                showPrev={showPrev}
                showNext={showNext}/>
        </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'list']),
        startIdx: state.getIn(['home', 'startIdx']),
        endIdx: state.getIn(['home', 'endIdx']),
        total: state.getIn(['home', 'total'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetList(list, startIdx, endIdx) {
            dispatch(actionCreators.getList(startIdx, endIdx));
        },
        handleGetTotal(total) {
            dispatch(actionCreators.getTotalAction(total));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);