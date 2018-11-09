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
    <mt-spinner type="snake" color="red">></mt-spinner>
    <mt-spinner :type="2" :size="14" color="#26a2ff"></mt-spinner>
    <transition name='fade'>
       <h2 class="transtss" v-if='isshow'>Essential Links</h2>
    </transition>
    <mt-picker :slots="slots" @change="onValuesChange" ></mt-picker>
  </div>
</template>

<script>
// import { Toast } from '../../packages/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isshow: false,
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'center'
        }
        // {
        //   divider: true,
        //   content: '-',
        //   className: 'slot2'
        // },
        // {
        //   flex: 1,
        //   values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
        //   className: 'slot3',
        //   textAlign: 'left'
        // }
      ]
    }
  },
  methods: {
    onValuesChange (picker, values) {
      // console.log(picker.slotValueChange, values)
      console.log(values[0], values[1])
      // console.log(picker.setSlotValue(1, values[0]))
      // picker.setSlotValue(1, values[0])
    }
  },
  mounted () {
    // this.$toast({
    //   message: '提示',
    //   // position: 'top',
    //   duration: 3000,
    //   iconClass: 'icon icon-success',
    //   backgroundImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539087798521&di=997fc66bd14d1959524f68faf9ea622a&imgtype=0&src=http%3A%2F%2Fpic167.nipic.com%2Ffile%2F20180605%2F26996938_232219888038_2.jpg'
    // })
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
