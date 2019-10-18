import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  list:[]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LIST :
           return state.set('list', action.data);
        default: 
           return state;
    }
}