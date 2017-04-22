var fs      = require('fs');
var path    = require('path');
var webpack = require('webpack');

var UmbracoPath    = path.join(__dirname, '../Umbraco.Site/scripts');
var AspNetCorePath = path.join(__dirname, '../Site/js');

if (fs.existsSync(UmbracoPath))

    var outDir = UmbracoPath;

else if (fs.existsSync(UmbracoPath))

    var outDir = AspNetCorePath;

else throw 'Could not find outdir';

var settings = {

    devtool: 'eval-source-map',
    watch: true,
    entry: {
        client:     'js/client',
        server:  'js/server',
    },
    output: {
        path: outDir,
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'react', 
                        ['env', { 'modules': false }],
                    ]
                },
            },
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname),
            'node_modules'
        ],
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", '.jsx'],
        alias: {
        } 
    }
};

module.exports = function(env) {

    if (env && env.prod) {
        settings = Object.assign(settings, {
            devtool: '',
            output: {
                path: path.join(__dirname, '../Umbraco.Site/scripts'),
                filename: '[name].min.js'
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env': {
                        // This has effect on the react lib size
                        'NODE_ENV': JSON.stringify('production'),
                    }
                }),
                new webpack.optimize.UglifyJsPlugin({})
            ]
        });
    }

    return settings;
};
