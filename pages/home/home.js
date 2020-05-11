// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Path:null
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

  },
  handleChooseAlbum(){
    // 系统API，让用户在相册中选择图片(或者拍照)
    wx.chooseImage({
      complete: (res) => {
        // 1.取出路径
        const path = res.tempFilePaths[0]
        this.setData({
          Path:path
        })
      },
    })
  },
  handleimageLoad(){
    console.log('图片加载完成');
  },
  handleInput(event){
    console.log('输入的时候出发',event);
  },
  handleFocus(event){
    console.log('聚焦的时候触发',event);
  },
  handleBlur(event){
    console.log('失去焦点的时候触发',event);
  }
})