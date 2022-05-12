module.exports = {
    transpileDependencies: [
        'vuetify'
    ],

    publicPath: './',
    lintOnSave: false,
    devServer: {
        overlay: {
            warning: false,
            errors: false
        },
        host: '192.168.1.219',
        port: 8080
    },
}