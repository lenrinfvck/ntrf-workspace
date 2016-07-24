'use strict'

//样式引入
import 'style/main.less';
import 'lib/fullpage/zepto.fullpage.css';

//类库框架引入
import 'myLib/rem.module.js';
import 'lib/fullpage/zepto.fullpage.js';
import $ from 'zepto';

$('.page-inner').fullpage({
    start: 0,
    loop: true,
    change: function (e) {
        // 移除动画属性
        $('.page').eq(e.cur).find('.js-animate').each(function() {
            $(this).removeClass($(this).data('animate')).hide();
        });
    },
    afterChange: function (e) {
        // 添加动画属性
        $('.page').eq(e.cur).find('.js-animate').each(function () {
            $(this).addClass($(this).data('animate')).show();
        });
    }
});