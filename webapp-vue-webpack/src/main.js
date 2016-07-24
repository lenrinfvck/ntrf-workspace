'use strict'

//样式引入
import 'style/main.less';

//类库框架引入
import 'myLib/rem.module.js';

//import $ from 'zepto';

import Vue from 'Vue';
import VueRouter from 'VueRouter';
import VueResource from 'VueResource';
import VueTouch from 'lib/vue/vue-touch.min.js';

import v_index from 'components/index.vue';
import v_list from 'components/list.vue';

//注册插件
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueTouch);

const router = new VueRouter();
let App = Vue.extend({});

//路由配置
router.map({
    '/': {
        component: v_index,
    },
    '/page/:type': {
        component: v_list,
    }
});

router.redirect({
    '*': '/'
});

router.start(App, '#app');