const { series, parallel } = require('gulp');

function clean(cb) {
  cb();
}

function build(cb) {
  cb();
}

exports.build = parallel(clean, build);
