Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'coderz',
    age:'18',
    students:[
      {id:110,name:'kobe',age:18},
      {id:111,name:'zz',age:18},
      {id:112,name:'curry',age:18},
      {id:113,name:'james',age:18},
    ],
    counter:0
  },

  handleBtnClick(){
    // 1.界面是不会监听的
    // this.data.counter += 1

    // 2.this.setData()
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleSubClick(){
    this.setData({
      counter:this.data.counter - 1
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