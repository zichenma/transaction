import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { actionCreators } from './store';
import { HomeWrapper, FilterGroup } from './style';
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
  
    render() {
        const { list } = this.props;
        const newList = list.toJS();
        return (
        <HomeWrapper>
            <FilterGroup>
                <h1>Filter</h1>
                <Filter />
                <Filter />
            </FilterGroup>
            <Table data={newList}/>
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