const fs = require('fs');
const gulp = require('gulp');
const colors = require('colors');
const exec = require('child_process').exec;

console.clear();

let pyData = {};

gulp.task('Idenitify System', function (cb) {
  exec('python3 ./py/operating_system.py', function (err, stdout, stderr) {
    if (err) {
      console.log(error);
    } else if (stderr) {
      console.log(stderr);
    } else {
      pyData = JSON.parse(stdout);
    }
    cb();
  });
});

gulp.task('Write System File', ['Idenitify System'], function (cb) {
  fs.readdir(__dirname, function(err, files) {
    if (err) {
      console.log(error);
    } else {
      fs.writeFileSync('system.json', JSON.stringify(pyData, null, 2));
      console.log(`System file written to ${__dirname}/system.json`);
    }
    cb();
  }); 
});

gulp.task('default', ['Write System File'], function(error, stdout) {
  console.log('JSON data: '.green, pyData);
  console.log('Done'.green);
});