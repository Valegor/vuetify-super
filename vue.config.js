module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
      proxy: 'http://laravel-super.loc:8888/',
      host: 'localhost',
    }
}
