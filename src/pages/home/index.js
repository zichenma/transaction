import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { actionCreators } from './store';
import { HomeWrapper, FilterGroup } from './style';
import { COLUMN_SCHEMA, ACCOUNT_FILTER_SCHEMA, TRANSACTION_FILTER_SCHEMA } from '../../utils/constants';
import Filter from '../../common/filter';
import Table from './components/table';

 

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            filters : {}
        }
    }

    componentDidMount() {
        const { handleGetList, list } = this.props;
        handleGetList(list);
    }
    
    filterByConditions(data, filters) {
        const useConditions = search => item => Object.keys(search).every(k => 
        Array.isArray(search[k]) && search[k].includes(item[k])
        );
        return data.filter(useConditions(filters));
    }

    itemIndexMap = array => {
        return array.reduce((obj, item, index) => {
          obj[item] = index;
          return obj;
        }, {});
    };
    
    selectedCols = (data, fields) => {
        const orderMap = this.itemIndexMap(fields);
        return data.map(item => Object.keys(item)
        .filter(item => fields.includes(item))
        .reduce((acc, item) => {
            acc[orderMap[item]] = item;
            return acc;
        },[])
        .reduce((acc, key) => {
          acc[key] = item[key];
          return acc;
        }, {}));
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
  
    render() {
        const { list } = this.props;
        const selectedData = this.selectedCols(list.toJS(), COLUMN_SCHEMA.NAMES);
        const accountfilterData = this.selectedCols(selectedData, ACCOUNT_FILTER_SCHEMA.NAMES);
        const accountFilterInfo = this.filterFields(accountfilterData, ACCOUNT_FILTER_SCHEMA.NAMES);
        const transactionFilterData = this.selectedCols(selectedData, TRANSACTION_FILTER_SCHEMA.NAMES);
        const transactionFilterInfo = this.filterFields(transactionFilterData, TRANSACTION_FILTER_SCHEMA.NAMES);
        return (
        <HomeWrapper>
            <FilterGroup>
                <h1>Filter</h1>
                <Filter filterInfo={accountFilterInfo} />
                <Filter filterInfo={transactionFilterInfo}/>
            </FilterGroup>
            <Table data={selectedData}/>
        </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'list']),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetList(list){
            (list.size === 0) && dispatch(actionCreators.getList());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);