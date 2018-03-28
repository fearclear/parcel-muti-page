const fs = require('fs')
const fileDirectory = "./src/pages"
if (fs.existsSync(fileDirectory)) {
  fs.readdir(fileDirectory, function (err, files) {
    if (err) {
      console.log(err)
      return
    }

    const count = files.length
    const results = {}
    files.forEach(function (filename) {
      var exec = require('child_process').exec;

      //需要执行的命令字符串
      let cli = `npm run parcel:build -- src/pages/${filename}/index.html -d dist/${filename}`;

      exec(cli, { encoding: 'utf8' }, function (err, stdout, stderr) {
        if (err) {
          console.log(err);
          return;
        }
      })
    })
  })
}