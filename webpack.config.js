var path=require('path');
var webpack=require('webpack');

module.exports={
	entry:{
		admin:'./admin/index.js',
		consumer:'./consumer/index.js'
	},
	output:{
		path:path.join(__dirname,'dist'),
		publicPath:'/dist/',
		filename:'[name].bundle.js'
	},
	module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
       {
         test: /images/,
         use: [
          'file-loader'
         ]
       },
       {
       	test: /icons/,
       	use: [
       		'url-loader'
       	]
       },
       {
       	test: /\.scss$/,
       	use: [
       		'sass-loader'
       	]
       }
      ]
    }
};