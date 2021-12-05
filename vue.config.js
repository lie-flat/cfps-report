const ImageminPlugin = require('imagemin-webpack-plugin').default
const ImageminMozjpeg = require('imagemin-mozjpeg')

module.exports = {
  configureWebpack: {
    plugins: [
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        plugins: [
          ImageminMozjpeg({
            quality: 70
          })
        ]
      })
    ]
  }
}
