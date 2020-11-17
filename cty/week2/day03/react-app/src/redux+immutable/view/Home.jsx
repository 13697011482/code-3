import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getBannerListAction , getProListAction} from '../store/actionCreator/home'
@connect(state => ({
    bannerList : state.getIn(['home' , 'bannerList']),
    proList : state.getIn(['home' , 'proList'])

}) , dispatch => ({
  getBannerList : () => dispatch(getBannerListAction),
  getProList : () => dispatch(getProListAction)
}))
class Home extends Component {
  componentDidMount() {
    this.props.getBannerList()
    this.props.getProList()
  }
  render() {
    const { bannerList , proList } = this.props
    return (
      <div>
        <ul>
            {
              bannerList && bannerList.map(item => (
                <img src={item.bannerimg} key={item.bannerid} style={{height:'100px'}} alt=""/>
              ))
            }
        </ul>
        <ul>
          {
            proList && proList.map(item => (
            <li key={item.proid}>{item.proname}</li>
            )) 
          }
        </ul>
      </div>
    )
  }
}
export default Home
