
import Button from '@/components/button';
import Header from '@/components/header';
import Dialog from '@/components/dialog';
import Message from '@/components/message';

const version = '0.0.1';
const components = [Header,Button,Dialog,Message];
const install = Vue => {
  components.forEach(Component => {
    Vue.component(Component.name,Component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default {
  install,version
};