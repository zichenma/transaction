import * as constants from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  list:[],
  startIdx: 0,
  endIdx: 20,
  total: 0
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.INIT_LIST_ACTION :
           return state.merge({
              'list' : action.data,
              'startIdx' : action.startIdx,
              'endIdx': action.endIdx
           })
        case constants.GET_TOTAL :
           return state.set('total', action.total)
        default: 
           return state;
    }
}