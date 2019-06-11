const path = require('path')
const webpack = require('webpack')

const src = path.resolve(process.cwd(),"src")

const evn = process.env.NODE_ENV=="production"?"production":"development"

module.exports = {
    mode:"production",
    entry:{
        jquery:['jquery']
    },
    output:{
        path:path.resolve(__dirname,"..",'dll'),
        filename:'[name].dll.js',
        library:'[name]_[hash]',
        libraryTarget:'this'
    },
    plugins:[
        new webpack.DllPlugin({
            context:process.cwd(),

            path:path.resolve(__dirname,'..','dll/[name]-mainfest.json'),
            name:'[name]_[hash]'
        })
    ]
}