// 创建vue.config.js新增自定义配置项，该js文件中的配置在打包时会与公共的配置项进行合并打包
// module.exports = {
//   configureWebpack: { // webpack相关配置项
//     resolve: { // 路径别名相关配置项
//       alias: {
//         // '@':'/src' src路径别名已经在公共的配置文件配置，这里直接用@别名即可
//         'assets': '@/assets',
//         'components': '@/components',
//         'network': '@/network',
//         'views': '@/views',
//         'commonjs': '@/commonjs',
//         'img': '@/assets/img',
//         'css': '@/assets/css',
//       }
//     }
//   }
// }


const path = require('path');//引入path模块
function resolve(dir) {
  return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('assets', resolve('.src/assets'))
      .set('commonjs', resolve('./src/commonjs'))
      .set('network', resolve('./src/network'))
      .set('views', resolve('./src/views'))
  }
};
