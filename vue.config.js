
module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        changeOrigin: true, // so CORS doesn't bite us. 
      }
    }
  }
}
