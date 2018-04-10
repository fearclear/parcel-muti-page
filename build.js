const fs = require('fs')
const fileDirectory = './src/pages'
if(fs.existsSync(fileDirectory)) {
  fs.readdir(fileDirectory, function(err, files) {
    if(err) {
      console.log(err)
      return
    }

    files.forEach(function(filename) {
      var exec = require('child_process').exec
      console.info(`正在打包${filename}...`)
      // 需要执行的命令字符串
      let cli = `cross-env NODE_ENV=production && npm run parcel:build -- src/pages/${filename}/index.html -d dist/${filename} --public-url ./`
      exec(cli, { encoding: 'utf8' }, function(err, stdout, stderr) {
        if(err) {
          console.log(err)
          return
        }
        console.info(`${filename}打包完成...`)
      })
    })
  })
}
const copy = require('copy')
copy('src/img/*.*', 'dist/img/', (err, file) => {
  if(err) {
    console.error(err)
  }
  console.log(`img copy done`)
})
