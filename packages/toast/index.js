import Vue from 'vue'

// // file: A.js
// export default { template: 'xxx' };
// export const xxx = 1;

// // file: B.js
// require('A')      // { default: {template}, xxx: 1 }

// Vue.extend返回的是一个扩展实例构造器
const ToastConstructor = Vue.extend(require('./src/toast.vue').default)
let toastPool = []

let getAnInstance = () => {
  // 第一次生成DOM后,后面调用的可以直接在数组里获取，减少内存
  if (toastPool.length > 0) {
    let instance = toastPool[0]
    toastPool.splice(0, 1)
    return instance
  }
  return new ToastConstructor({
    el: document.createElement('div')
  })
}

let returnAnInstance = instance => {
  if (instance) {
    toastPool.push(instance)
  }
}

let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}

ToastConstructor.prototype.close = function () {
  this.visible = false
  this.$el.addEventListener('transitionend', removeDom)
  this.closed = true
  returnAnInstance(this)
}

let Toast = (options = {}) => {
  let duration = options.duration || 3000
  let instance = getAnInstance()
  instance.closed = false
  clearTimeout(instance.timer)
  instance.message = typeof options === 'string' ? options : options.message
  instance.position = options.position || 'middle'
  instance.className = options.className || ''
  instance.iconClass = options.iconClass || ''
  instance.backgroundImage = options.backgroundImage || ''

  document.body.appendChild(instance.$el)
  Vue.nextTick(function () {
    instance.visible = true
    instance.$el.removeEventListener('transitionend', removeDom)
    duration && (instance.timer = setTimeout(function () {
      if (instance.closed) return
      instance.close()
    }, duration))
  })
  return instance
}

export default Toast
