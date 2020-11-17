import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getBannerListAction , getProListAction } from '../store/actionCreator/home'

@connect(state => ({
  bannerList : state.getIn(['home' , 'bannerList']),
  proList : state.getIn(['home' , 'proList'])
}) , dispatch => ({
  getBannerList : () => dispatch(getBannerListAction),
  getProList : () => dispatch(getProListAction)
}))
class Home extends Component {
  componentDidMount(){
    this.props.getBannerList()
    this.props.getProList()
  }
  render() {
    const {bannerList , proList } = this.props
    return (
      <div>
        <ul>
          {
            bannerList && bannerList.map(item => (
              <img key={item.bannerid} src={item.bannerimg} style={{height:'100px'}} alt=''/>
            ))
          }
          <ul>
            {
              proList && proList.map(item => (
              <h1 key={item.proid}>{item.proname}</h1>
              ))
            }
          </ul>
        </ul>
      </div>
    )
  }
}
export default Home
