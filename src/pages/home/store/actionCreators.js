import * as constants from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';


const initListAction = data => ({
    type: constants.INIT_LIST_ACTION,
    data: fromJS(data),
})


export const getList = () => {
    const uri = 'http://localhost:3200/';
    return async (dispatch) => {
        const response = await axios.get(`${uri}transactions`)
              .catch(err => console.log(err));
        const data = response.data;
        // console.log(data);
        const action = initListAction(data);
        dispatch(action);
    }
}