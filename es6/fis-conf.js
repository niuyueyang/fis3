// 启用 es6-babel 插件，解析 .es6 后缀为 .js
fis.match('*', {
    deploy: [
        fis.plugin('local-deliver') //must add a deliver, such as http-push, local-deliver
    ]
})
fis.match('**.es6', {
    parser: fis.plugin('translate-es6'),
    rExt: '.js' // .es 最终修改其后缀为 .js
});

fis.match('::package', {
  postpackager: fis.plugin('loader')
});
