
//CssSprite图片合并
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

// fis.match('*', {
//   useHash: false
// });

//release将png,js,css移到对应目录下面
//useHash md5戳
fis.match('*.js', {
    useHash:true,
    release: '/js/$0',
    optimizer: fis.plugin('uglify-js')
});

//useSprite CssSprite图片合并
fis.match('*.css', {
    useHash:true,
    release: '/css/$0',
    useSprite: true,
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    useHash:true,
    release: '/$0',
    optimizer: fis.plugin('png-compressor')
});

fis.match('*.es6', {
    parser: fis.plugin('babel'),
    rExt: '.js' // 代码编译产出时，后缀改成 .js
});

//fis3 server open 打开服务器根目录