## 环境依赖
node v12.10.0
taro v3.0.14

## 开发规范
### 一、页面&样式
1、 全局公共class放在scss/global/common.global.scss中，开发时多使用utils下的变量、mixin等。
2、 由于Page标签下的样式无法在h5端编译成功，所以请避免使用标签定义样式。
3、 每个页面固定的html结构请按照（最好将其添加到vscode文件->首选项->用户代码片段里）：
    {
      "Print to console": {
        "prefix": "taroH5",
        "body": [
          "import React, { Component } from 'react'",
          "import Taro from '@tarojs/taro'",
          "import { View } from '@tarojs/components'",
          "// import styles from './index.scss'\n",
          "class Index extends Component {",
          "  render () {",
          "    return (",
          "      <View className='wrap'></View>",
          "    )",
          "  }",
          "}\n",			
          "export default Index",
          "$2"
        ],
        "description": "taro h5"
      }
    }
    
    > 请确保每个页面的**类名不能相同**，css modules会帮助你生成不同的className。

