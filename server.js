// Javascript require hook
require('babel-register')({
    presets: ['es2015', 'react', 'stage-0'],
    plugins: ['add-module-exports']
})

// Css require hook
require('css-modules-require-hook')({
    extensions: ['.less'],
    preprocessCss: (data, filename) =>
        require('node-sass').renderSync({
            data,
            file: filename
        }).css,
    camelCase: true,
    generateScopedName: '[name]__[local]__[hash:base64:8]'
})

// Image require hook
require('asset-require-hook')({
    name: '/[hash].[ext]',
    extensions: ['jpg', 'png', 'gif', 'webp'],
    limit: 8000
})



import express from 'express';
import path from 'path';
import React from 'react';
// import {cookieParser} from 'cookie-parser'
// import {bodyParser} from 'body-parser'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import serverRouter from './src/router/serverRouter.js'


//創建服務器
const app =express();

//静态文件
app.use(express.static(path.resolve(__dirname,"./dist")))

// app.use(cookieParser())
// app.use(bodyParser())

app.get('*',(req,res)=>{

    const context ={};
    const jsx =(
        <div>
            <span>d34543543ds</span>
        </div>
        //  <StaticRouter context={context} location={req.url}>
        //      <serverRouter></serverRouter> 
        //  </StaticRouter>        
    )
    const reactDom  = renderToString(jsx)
    res.writeHead(200,{'Content-Type':"text-html"})
    res.end(htmlTemplate(reactDom))
})

function htmlTemplate( reactDom ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
        </body>
        </html>
    `;
}
app.listen(9000);




