import * as constants from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  list:[],
  startIdx: 0,
  endIdx: 20
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.INIT_LIST_ACTION :
           return state.set('list', action.data)
        case constants.GET_PREV :
           return state.merge({
             list:action.payload.data,
             'startIdx' : action.payload.startIdx,
             'endIdx': action.payload.endIdx
           })
        case constants.GET_NEXT:
            return state.merge({
             list:action.payload.data,
             'startIdx' : action.payload.startIdx,
             'endIdx': action.payload.endIdx
           })
        default: 
           return state;
    }
}