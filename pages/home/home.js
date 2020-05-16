// pages/home/home.js
Page({
  hadleshowToast(){
    wx.showToast({
      title: '加载中',
      duration:1000,
      icon:'loading',
      // 生成一个蒙版
      mask:true
    })
  },
  hadleshowModal(){
    wx.showModal({
      title:'我是标题',
      content:'我是内容',
      // 取消'取消按钮'
      // showCancel:false,
      // 对取消或者确定按钮文字的修改
      cancelText:'退出',
      confirmText:'进入',
      cancelColor:'red',
      success(res){
        if(res.cancel){
          console.log('用户点击了取消按钮');
        }
        if(res.confirm){
          console.log('用户点击了确定按钮');
        }
      }
    })
  },
  hadleshowLoading(){
    wx.showLoading({
      title: '加载ing',
      mask:true
    })

    setTimeout(() => {
      // 必须手动hideLOading才会让loading消失
      // 或者等网络请求后回调
      wx.hideLoading()
    },1000)
  },
  hadleshowactionSheet(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      success(res){
        console.log(res);
        
      }
    })
  }
})