// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:true,
    score:45,
    movies:['盗梦空间','大话西游','星际穿越'],
    nums:[
      [1,2,3,4],
      [11,22,33,44],
      [111,222,333,444]
    ]
  },
  handleIncreament(){
    this.setData({
      score:this.data.score + 8
    })
  },
  handleswitch(){
    this.setData({
      isShow:!this.data.isShow
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})