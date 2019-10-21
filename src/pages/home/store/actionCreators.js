import * as constants from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';
import { uri } from '../../../utils/constants';
import { selectedCols } from '../../../utils/utils';
import { COLUMN_SCHEMA } from '../../../utils/constants';


const initListAction = (data, startIdx, endIdx) => ({
    type: constants.INIT_LIST_ACTION,
    data: fromJS(data),
    startIdx,
    endIdx
})

export const getList = (startIdx, endIdx) => {
    const query = `?_start=${startIdx}&_end=${endIdx}`;
    return async (dispatch) => {
        const response = await axios.get(`${uri}transactions/${query}`)
              .catch(err => console.log(err));
        const data = selectedCols(response.data, COLUMN_SCHEMA.NAMES);
        const action = initListAction(data,startIdx,endIdx);
        dispatch(action);
    }
}
