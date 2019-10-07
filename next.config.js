const withTypescript = require('@zeit/next-typescript')
const path = require('path');
const fs = require('fs');

fs.readdir('./icons', (err, files) => {
    const keys = files.map(file => file.replace('.svg', ''));
    fs.writeFile('./icons/keys.json', JSON.stringify(keys, null, 4), 'utf-8', err => {
        if (err) throw err;
    });
});

module.exports = withTypescript({
    webpack(config) {
        config.resolve.alias['components'] = path.join(__dirname, 'components');
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "svg-react-loader",
                }
            ]
        });
        return config;
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/wechat-message-react/out' : '',
})
