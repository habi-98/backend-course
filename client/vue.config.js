module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "~@/css/styles.scss";'
            },
        }
    }
}