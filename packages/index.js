import Button from './button/index.js';
import Toast from './toast/index.js';
import Radio from './button/index.js';
import Cell from './cell/index.js';
// import MessageBox from '../message-box/index.js';

const components = [Button, Toast, Radio, Cell];
//全局引入
const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name,component));
  Vue.$toast = Vue.prototype.$toast = Toast;
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
//导出 全局+按需加载
export default {
  install,
  Button,
  Toast,
  Radio,
  Cell
};