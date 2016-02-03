var webpack = require("webpack");

// root path where JS modules/libs are located
var modulePath = "/assets/javascripts";

// split output JS into "critical" (above-the-fold) scripts and the rest (which can be loaded on-demand)
module.exports = {
    entry: {
        critical: ["vendor/modernizr.js", "picturefill"],
        main: "." + modulePath + "/main.js",
    },
    resolve: {
        root: __dirname + modulePath,
    },
    output: {
        path: __dirname + modulePath,
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                test: /assets\/javascripts\/.*\.js$/,
                exclude: /node_modules|\.tmp|vendor/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015', 'react'],
                },
            },
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("critical", "critical.bundle.js")
    ]
};
