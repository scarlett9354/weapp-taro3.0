import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Taro from '@tarojs/taro'

import configStore from './store'

import './app.scss'
import './scss/global/common.global.scss'

const store = configStore()

class App extends Component {
  componentDidMount() {
    if(process.env.TARO_ENV === 'weapp') {
      if (Taro.canIUse('getUpdateManager')) {
        const updateManager = Taro.getUpdateManager()
        updateManager.onCheckForUpdate(function (res) {
          // console.log('onCheckForUpdate====', res)
          // 请求完新版本信息的回调
          if (res.hasUpdate) {
            // console.log('res.hasUpdate====')
            updateManager.onUpdateReady(function () {
              Taro.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success: function (result) {
                  // console.log('success====', result)
                  // res: {errMsg: "showModal: ok", cancel: false, confirm: true}
                  if (result.confirm) {
                    // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                    updateManager.applyUpdate()
                  }
                }
              })
            })
            updateManager.onUpdateFailed(function () {
              // 新的版本下载失败
              Taro.showModal({
                title: '已经有新版本了哟~',
                content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
              })
            })
          }
        })
      }
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
