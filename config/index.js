// eslint-disable-next-line
const path = require('path')
const sassImporter = function(url) {
  if (url[0] === '~' && url[1] !== '/') {
    return {
      file: path.resolve(__dirname, '..', 'node_modules', url.substr(1))
    }
  }

  const reg = /^@\/scss\/(.*)/
  return {
    file: reg.test(url) ? path.resolve(__dirname, '..', 'src/scss', url.match(reg)[1]) : url
  }
}

const config = {
  projectName: 'weapp-samsung-mall',
  date: '2020-10-15',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  alias: {
    '@/actions': path.resolve(__dirname, '..', 'src/actions'),
    '@/services': path.resolve(__dirname, '..', 'src/services'),
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/configs': path.resolve(__dirname, '..', 'src/configs'),
    '@/constants': path.resolve(__dirname, '..', 'src/constants'),
    '@/reducers': path.resolve(__dirname, '..', 'src/reducers'),
    '@/scss': path.resolve(__dirname, '..', 'src/scss'),
    '@/static': path.resolve(__dirname, '..', 'src/static'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils')
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  sass: {
    importer: sassImporter
  },
  mini: {
    postcss: {
      autoprefixer: {
        enable: true
      },
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'global', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    output: {
      filename: 'js/[name].[hash:8].js',
      chunkFilename: 'js/[name].[chunkhash:8].js'
    },
    enableExtract: true,
    miniCssExtractPluginOption: {
      filename: 'css/[name].[hash:8].css',
      chunkFilename: 'css/[id].[chunkhash:8].css'
    },
    router: {
      mode: 'browser',
      customRoutes: {
        '/pages/index/index': '/index.html',
        '/pages/user/index': '/user.html'
      }
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      pxtransform: {
        enable: true,
        config: {
          /* pxtransform 配置项 */
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'global', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain (chain) {
      chain.merge({
        //警告 webpack 的性能提示
        performance: {
          hints: 'warning',
          // 入口起点的最大体积
          maxEntrypointSize: 50000000,
          // 生成文件的最大体积
          maxAssetSize: 30000000,
          // 只给出 js 文件的性能提示
          assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.js')
          }
        }
      })
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  if (process.env.NODE_ENV === 'test') {
    return merge({}, config, require('./test'))
  }
  return merge({}, config, require('./prod'))
}
