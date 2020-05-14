// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0
  },
  handleincrement(event){
    /* 组件传递参数过来的时候，应该在event中的detail获取 */
    console.log(event);
    
    this.setData({
      counter:this.data.counter + 1
    })
  }
})