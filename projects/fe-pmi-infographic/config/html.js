import gulp from 'gulp';
import { config } from './_config.js';
import plumber from 'gulp-plumber';
import fs from 'graceful-fs';
import pug from 'gulp-pug';
import data from 'gulp-data';

const { src, dest, series } = gulp;


const views = () =>
  src(config.views.pug.src)
    .pipe(plumber())
    .pipe(pug({ pretty: true, basedir: 'src' }))
    .pipe(dest(config.views.pug.dest));

const html = series(views);

export default html;
