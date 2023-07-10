import gulp from 'gulp';
import clean from './config/clean.js';
import data from './config/data.js';
import extras from './config/extras.js';
import html from './config/html.js';
import images from './config/images.js';
import scripts from './config/scripts.js';
import server from './config/server.js';
import styles from './config/styles.js';

const { series } = gulp;
const dev = series(clean, data, styles, scripts, extras, html, images);

//--------- Create tasks
export const build = dev;
export default server;
