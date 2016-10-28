/**
 * Author: ZJDGX
 * Date: 2016/04/07 14:52
 * Description: react webpack home page
 */

// frontend
import css from './css';
import html from './html';
import mobile from './mobile';
import javascript from './javascript';

// backend
import java from './java';
import nodejs from './nodejs';
import android from './android';

// database
import mysql from './mysql';
import mongodb from './mongodb';

// framework
import react from './react';
import redux from './redux';
import backbone from './backbone';

// tools
import gulp from './gulp';
import grunt from './grunt';
import webpack from './webpack';
import tool from './tools';
import notes from './notes';

const database = [].concat(mysql, mongodb);
const tools = [].concat(tool, gulp, grunt, notes, webpack);
const backend = [].concat(java, android, nodejs);
const frontend = [].concat(css, html, mobile, javascript);
const framework = [].concat(backbone, react, redux);

const navContent = [].concat(frontend, tools, framework, backend, database);

for (var i = 0, len = navContent.length; i < len; i++) {
   if (navContent[i].contents.length == 0) {
      navContent.splice(i, 1);
      len -= 1;
      i -= 1;
   }
}

export default navContent;
