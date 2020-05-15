// components/my-mslot/my-mslot.js
Component({
  options:{
    // 添加此属性才可以使用多插槽
    multipleSlots:true
  },
  /* ----------组件中的生命周期------------- */
  // 1.监听所在页面的的生命周期
  pageLifetimes: {
    show() {
      console.log('监听组件所在页面显示出来的时候')
    },
    hide() {
      console.log('监听组件所在页面隐藏起来的时候');
    },
    resize() {
    }
  },

  // 2.监听组件本身的生命周期
  lifetimes:{
    created(){
      console.log('组件被创建出来时');
    },
    attached(){
      console.log('组件被添加到页面');
    },
    ready(){
      console.log('组件被渲染出来');
    },
    detached(){
      console.log('组件被移除');
      
    }
  }
})
