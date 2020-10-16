import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import IndexService from '@/services/index/index'

import styles from './index.scss'

class Index extends Component {
  componentWillMount() {
    Taro.login({
      success: (res) => {
        console.log(res.code)
        this.getTest(res.code)
      }
    })
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
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

  render () {
    return (
      <View className={styles.index}>
        Hello, 首页
      </View>
    )
  }
}

export default Index

