<template>
  <div class="hello">
    <h1 @click="isshow = !isshow" >{{ msg }}</h1>
    <m-button type='success'>默认2</m-button>

    <mt-cell
      title="标题文字"
      to="https://zhuanlan.zhihu.com/p/32172618"
      is-link
      value="带链接">
    </mt-cell>
    <transition name='fade'>
       <h2 class="transtss" v-if='isshow'>Essential Links</h2>
    </transition>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// import { Toast } from '../../packages/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isshow: false
    }
  },
  methods: {
    openToast () {
      // this.$toast('提示信息')
    }
  },
  mounted () {
    this.$toast({
      message: '提示',
      position: 'top',
      duration: 3000,
      iconClass: 'icon icon-success',
      backgroundImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539087798521&di=997fc66bd14d1959524f68faf9ea622a&imgtype=0&src=http%3A%2F%2Fpic167.nipic.com%2Ffile%2F20180605%2F26996938_232219888038_2.jpg'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.transtss{
  transition: opacity 3s linear;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fade-enter-active{
  animation: bounce-in .5s;
}
.fade-leave-active {
  animation: reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
