// pages/home/home.js

// getApp()获取App()产生示例对象
const app = getApp()

const name = app.globalData.name
const age = app.globalData.age

// 注册一个page页面
Page({
   /* -----------------------页面的初始数据----------------- */
  data: {
    world:'zjl',
    list:[]
  },

 
    /* --------------------------生命周期函数--监听页面加载------------------------ */
 
  onLoad: function (options) {
    wx.request({
      url: 'http://152.136.185.210:8000/api/n3/recommend',
      success:(res) => {
        console.log(res);
        console.log(this);
        
        const data = res.data.data.list
        this.setData({
          list:data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /* ----------------------1.监听wxml中的相关的一些事件--------------------------- */
    // 监听事件的点击，接受监听事件
    handleGeetYserInfo(event){
      console.log(event);
    },
    handleViewClick(){
      console.log('监听点击事件');
    },
    /* ------------------------2.监听其他事件------------------------------- */
    // 监听页面的滚动
    onPageScroll(obj){
      console.log(obj);
    },
    // 上拉加载更多
    onReachBottom(){
      console.log('页面滚动到底部');
    },
    // 下拉刷新事件
    onPullDownRefresh(){
      console.log('下拉刷新');
      
    }
})