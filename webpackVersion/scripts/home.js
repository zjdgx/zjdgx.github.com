/**
 * Author: ZJDGX
 * Date: 2016/04/01
 * Description: react webpack home page
 */

import React from 'react';
import AppView from './app';
import ReactDOM from 'react-dom';

//require('./style/home.styl');

ReactDOM.render(
  <AppView />,
  document.querySelector('div.wrapper')
);
