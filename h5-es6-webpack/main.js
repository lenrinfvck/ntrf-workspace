/**
 * h5-es6-webpack入口文件
 */
'use strict'

//样式引入
import 'myStyle/reset.css';
import 'style/main.less';

//其他常用引入
import 'myLib/rem.module.js';

import $ from 'zepto';

console.log($);