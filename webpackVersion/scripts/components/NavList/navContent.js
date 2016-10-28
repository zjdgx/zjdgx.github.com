/**
 * Author: ZJDGX
 * Date: 2016/04/07 14:52
 * Description: react webpack home page
 */
 
// frontend
import css from '../../content/css';
import html from '../../content/html';
import mobile from '../../content/mobile';
import javascript from '../../content/javascript';

// backend
import java from '../../content/java';
import nodejs from '../../content/nodejs';
import android from '../../content/android';

// database
import mysql from '../../content/mysql';
import mongodb from '../../content/mongodb';

// framework
import react from '../../content/react';
import redux from '../../content/redux';
import backbone from '../../content/backbone';

// tools
import gulp from '../../content/gulp';
import grunt from '../../content/grunt';
import webpack from '../../content/webpack';

//notes
import notes from '../../content/notes';

const database = [].concat(mysql, mongodb);
const tools = [].concat(gulp, grunt, notes, webpack);
const backend = [].concat(java, android, nodejs);
const frontend = [].concat(css, html, mobile, javascript);
const framework = [].concat(backbone, react, redux);
 
const navContent = [
	{
		category: 'Frontend',
		list: frontend
	},
	{
		category: 'Backend',
		list: backend
	},
	{
		category: 'Database',
		list: database
	},
	{
		category: 'Framework',
		list: framework
	},
	{
		category: 'Tools',
		list: tools
	}
]

export default navContent;