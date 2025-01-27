const path = require('path');
const packageJSON = require('./package.json');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackFavicons = require('webpack-favicons');

const HtmlWebpackPlugin = require('html-webpack-plugin');


const pages = [
      {name: 'index', title: 'Portfolio', description: 'Discover the joy of pottery through our classes and events.'},
      {name: 'experience', title: 'Experience', description: ''},
      {name: 'skills', title: 'Key Skills', description: ''},
      {name: 'contact', title: 'Contact Me', description: ''},
      {name: 'achievements', title: 'Achievements', description: ''},
      {name: 'about-me', title: 'About Me', description: ''},
];


// Utility function to clean version strings
const getVersion = (pkg) => pkg ? pkg.replace(/^\^/, '') : 'Unknown';
const copyrightYear = new Date().getFullYear();

const appInfo = require('./src/js/app-info');

console.log(`App Name: ${appInfo.appName}`);
console.log(`Environment: ${appInfo.environment}`);
console.log(`Uptime: ${appInfo.uptime()}`);


const lastUpdated = new Date().toLocaleString("en-au", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
});

const siteName = packageJSON['name'];
const description = 'This is a demo project that combines <strong>Webpack</strong>, <strong>Handlebars</strong>, and <strong>Bootstrap</strong> to create a modular, modern web application setup.';


// Extract versions for project dependencies
const versions = {
      webpack: getVersion(packageJSON.devDependencies['webpack']),
      bootstrap: getVersion(packageJSON.devDependencies['bootstrap']),
};

const htmlPlugins = pages.map(({name, title, description}) => new HtmlWebpackPlugin({
      template: `./src/pages/${name}.hbs`,
      filename: `${name}.html`,
      templateParameters: {
            title,
            siteName,
            description,
            versions,
            copyrightYear,
            lastUpdated,
      },
}));

module.exports = {
      mode: process.env.NODE_ENV || 'development',
      entry: './src/js/index.js',
      output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].bundle.js',
            assetModuleFilename: 'images/[hash][ext][query]',
            clean: true,
      },
      devtool: 'source-map',
      devServer: {
            static: './dist',
            open: true,
      },
      optimization: {
            splitChunks: {
                  chunks: 'all',
            },
      },
      module: {
            rules: [
                  {
                        test: /\.hbs$/,
                        loader: 'handlebars-loader',
                        options: {
                              knownHelpersOnly: false,
                              inlineRequires: '\/assets/images\/',
                              partialDirs: path.resolve(__dirname, 'src/partials'),
                        },
                  },
                  {
                        test: /\.scss$/,
                        use: [
                              MiniCssExtractPlugin.loader,
                              'css-loader',
                              'sass-loader',
                        ],
                  },
                  {
                        test: /\.css$/,
                        use: [
                              MiniCssExtractPlugin.loader,
                              'css-loader',
                        ],
                  },
                  {
                        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                        type: 'asset/resource',
                  },
            ],
      },
      plugins: [
            ...htmlPlugins,
            new MiniCssExtractPlugin({
                  filename: 'assets/css/[name].[contenthash].css',
            })
      ],
};