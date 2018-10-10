import MessageBox  from './src/message-box.js';
MessageBox.install = function (Vue) {
  Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
};
export default MessageBox;