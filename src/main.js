// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'lib-flexible';

import Button from '@/components/button';
import Header from '@/components/header';
import Dialog from '@/components/dialog';
import Message from '@/components/message';

Vue.component('loli-header', Header);
Vue.component('loli-button', Button);
Vue.component('loli-dialog', Dialog);
Vue.component('loli-message', Message);


Vue.config.productionTip = false;
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
