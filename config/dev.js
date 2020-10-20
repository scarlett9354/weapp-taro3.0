// eslint-disable-next-line
module.exports = {
  env: {
    NODE_ENV: '"development"',
    BASE_URL: '"https://syycarowner-dev.rocogz.com"',
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    devServer: {
      open: false,
      host: 'localhost',
      port: 8080,
      proxy: {
        '/api': {
          target: 'https://syycarowner-dev.rocogz.com',
          changeOrigin: true
        },
      }
    }
  }
}
