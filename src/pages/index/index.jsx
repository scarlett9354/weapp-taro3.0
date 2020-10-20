import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import IndexService from '@/services/index/index'
import styles from './index.scss'

class Index extends Component {
  componentDidMount() {
    Taro.login({
      success: (res) => {
        console.log(res.code)
        this.getTest(res.code)
      }
    })
  }

  async getTest(code) {
    try {
      const res = await IndexService.test({
        code
      })
      console.log(res, 'test接口')
    }catch(e) {}
    Taro.hideLoading()
  }

  goUser() {
    Taro.navigateTo({
      url: '/pages/user/index'
    })
  }

  render () {
    return (
      <View onClick={this.goUser} className={styles.wrap}>
        Hello, 首页2
      </View>
    )
  }
}

export default Index
