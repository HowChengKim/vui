import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/example/index';
import Button from '@/example/button';
import Header from '@/example/header';
import Dialog from '@/example/dialog';
import Message from '@/example/message';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: Dialog
  },
  {
    path: '/header',
    name: 'Header',
    component: Header
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: Dialog
  }]
});
