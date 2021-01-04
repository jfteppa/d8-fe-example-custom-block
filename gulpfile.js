"use strict";

const { watch, src, dest } = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

sass.compiler = require("node-sass");

function scss() {
  return src("./sass/fe-example.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(sourcemaps.write())
    .pipe(dest("./css"));
}

exports.scss = scss;
exports.default = function () {
  watch("./sass/**/*.scss", { ignoreInitial: false }, scss);
};
