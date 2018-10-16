const path = require('path');
const nodeExternals = require('webpack-node-externals');//如果不想让它把某个文件打包进去，那么可以使用externals来进行过滤

module.exports = {
	entry:'./src/index.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename: 'bundle.js',
		libraryTarget:'common2.js',
	},
	modules:{
		rules:[
		  {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
		]
	},
	externals: [nodeExternals()],//// in order to ignore all modules in node_modules folder
	plugins:[]//这里仅仅是把js打包，不需要把js放入html模板，所以不加HtmlWebpackPlugin
}