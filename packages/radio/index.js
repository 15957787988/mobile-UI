import Radio from './src/radio.vue';
Radio.install = function (Vue) {
  Vue.component(Button.name, Radio);
};
export default Radio;