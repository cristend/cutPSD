(function() {
  var path = require("path");
  var tap = require('gulp-tap');

  var repl = /\\/g;
  var replRev = /\//g;

  module.exports = function(collateFolderName) {

    collateFolderName = collateFolderName || "assets";
    var reg = new RegExp(".*\/"+collateFolderName+"\/");

    return tap(function(file) {
      var cwd = process.cwd();
      var lpath = file.path.replace(repl,"/");
      lpath = lpath.replace(reg, "");
      lpath = lpath.replace(replRev,"\\");
      if (lpath == file.path) return;
      file.path = path.join(cwd, lpath.replace(repl, "/"))
      file.base = cwd;
      file.cwd = cwd;

    });
  };

}).call(this);
