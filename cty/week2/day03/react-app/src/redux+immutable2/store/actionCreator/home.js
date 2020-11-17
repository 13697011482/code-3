import * as types from '../actionTypes'
const getBannerListAction = (dispatch) => {
  fetch('http://39.100.30.156/api/banner').then(res => res.json()).then(result => {
    console.log(result);
    dispatch({
      type : types.CHANGE_BANNER_LIST,
      data : result.data
    })
  })
}
const getProListAction = (dispatch) => {
  fetch('http://39.100.30.156/api/pro/list').then(res => res.json()).then(result => {
    console.log(result);
    dispatch({
      type : types.CHANGE_PRO_LIST,
      data : result.data
    })
  })
}
export {
  getBannerListAction,
  getProListAction
}