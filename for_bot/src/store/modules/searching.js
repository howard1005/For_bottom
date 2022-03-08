import { useState } from 'react';
import { createAction, handleActions } from 'redux-actions';
// 카운터 관련 상태 로직
const IMAGELOAD = 'searching/IMAGELOAD'

export const imageLoad = createAction(IMAGELOAD);

const initialState={
    champions = useState([])
};

const apiCall = async () => {
    await axios.get(`http://${global.serverAdress}/forbot/v1/champion/img/all-url`)
    .then(res => change_champions(res.data.champion_images))
    .catch(error => console.log(error))
  };

export default handleActions({
    [INCREMENT]: ({champions}) => ({champions : number + 1}),
    
}, initialState)
