<template>
  <transition name="mint-toast-pop">
    <div class="mint-toast" v-show="visible" :class="customClass" :style="{ 'padding': iconClass === '' ? '10px' : '20px' }">
      <i class="mint-toast--icon" :style="{backgroundImage: 'url(' + backgroundImage + ')'}" :class="iconClass" v-if="iconClass !== ''"></i>
      <span class="mint-toast--text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{ message }}</span>
    </div>
  </transition>
</template>

<script type="text/babel">
export default {
  props: {
    message: String,
    className: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'middle'
    },
    iconClass: {
      type: String,
      default: ''
    },
    backgroundImage: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      visible: false
    }
  },
  computed: {
    customClass () {
      var classes = []
      switch (this.position) {
        case 'top':
          classes.push('is-placetop')
          break
        case 'bottom':
          classes.push('is-placebottom')
          break
        default:
          classes.push('is-placemiddle')
      }
      classes.push(this.className)
      return classes.join(' ')
    }
  }

}
</script>
