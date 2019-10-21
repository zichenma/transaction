import * as constants from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';
import { uri } from '../../../utils/constants';
import { selectedCols } from '../../../utils/utils';
import { COLUMN_SCHEMA } from '../../../utils/constants';


const initListAction = data => ({
    type: constants.INIT_LIST_ACTION,
    data: fromJS(data),
})

export const getPrev = (startIdx, endIdx) => ({
    type: constants.GET_PREV,
    payload: {
        startIdx,
        endIdx,
    }
})

export const getNext = (startIdx, endIdx) => ({
    type: constants.GET_NEXT,
    payload: {
        startIdx,
        endIdx,
    }
})

export const getList = (startIdx, endIdx) => {
    const query = `?_start=${startIdx}&_end=${endIdx}`;
    return async (dispatch) => {
        const response = await axios.get(`${uri}transactions/${query}`)
              .catch(err => console.log(err));
        const data = selectedCols(response.data, COLUMN_SCHEMA.NAMES);
        const action = initListAction(data);
        dispatch(action);
    }
}


// export const getList = () => {
//     return async (dispatch) => {
//         const response = await axios.get(`${uri}transactions`)
//               .catch(err => console.log(err));
//         const data = selectedCols(response.data.slice(0, 20), COLUMN_SCHEMA.NAMES);
//         const action = initListAction(data);
//         dispatch(action);
//     }
// }