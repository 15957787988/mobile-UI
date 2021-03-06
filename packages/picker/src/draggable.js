import Vue from 'vue'
let isDragging = false

const supportTouch = !Vue.prototype.$isServer && 'ontouchstart' in window

export default function (element, options) {
  const moveFn = function (event) {
    if (options.drag) {
      options.drag(supportTouch ? event.changedTouches[0] || event.touches[0] : event)
    }
  }

  const endFn = function (event) {
    if (!supportTouch) {
      document.removeEventListener('mousemove', moveFn)
      document.removeEventListener('mouseup', endFn)
    }
    document.onselectstart = null
    document.ondragstart = null

    isDragging = false

    if (options.end) {
      options.end(supportTouch ? event.changedTouches[0] || event.touches[0] : event)
    }
  }
  element.addEventListener(supportTouch ? 'touchstart' : 'mousedown', (event) => {
    // if (isDragging) return
    document.onselectstart = function () { return false } // 这个事件主要是用于禁止选择网页中的文字
    document.ondragstart = function () { return false } // 用户开始拖动元素时触发

    if (!supportTouch) {
      document.addEventListener('mousemove', moveFn)
      document.addEventListener('mouseup', endFn)
    }

    isDragging = true
    if (options.start) {
      event.preventDefault()
      options.start(supportTouch ? event.changedTouches[0] || event.touches[0] : event)
    }
  })
  if (supportTouch) {
    element.addEventListener('touchmove', moveFn)
    element.addEventListener('touchend', endFn)
    element.addEventListener('touchcancel', endFn)
  }
}
