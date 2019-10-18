import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';


const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
})


export const getData = () => {
    const uri = 'http://localhost:3200/';
    return (dispatch) => {
        axios.get(`${uri}transactions`).then((res) => {
            const data = res.data;
            console.log('actionCreator', data);
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
}