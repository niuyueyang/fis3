fis.match('*', {
    useHash: false
});

fis.match('::packager', {
    postpackager: fis.plugin('loader', {
        allInOne: {
            js: function (file) {
                return "/static/js/" + file.filename + "_aio.js";
            },
            css: function (file) {
                return "/static/css/" + file.filename + "_aio.css";
            }
        }
    })
});


fis.match('*.png', {
    optimizer: fis.plugin('png-compressor',{
        //option
    })
})




fis.match('*.css', {
    useHash:false,
    release: '/$0',
    useSprite: true,
    optimizer: fis.plugin('clean-css'),
});




/*fis.match('*.{css,less}', {
    packTo: '/static/aio.css'
});*/



fis.match('*.js', {     /*放在js目录下*/
    useHash:false,
    release: '/$0',
    optimizer: fis.plugin('uglify-js')
});



/*fis.match('*.less', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css'
});*/