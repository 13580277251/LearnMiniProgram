// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleIncrementCpn(){
    // 修改组件中的数据
    // 获取组建对象
    const my_sel = this.selectComponent('#sle_id')
    console.log(my_sel);
    // 修改组件数据（不合理），最好的方法是在组件中暴露一个修改数据的方法
    // my_sel.setData({
    //   counter:my_sel.data.counter + 20
    // })
    
    // 通过组件中的方法进行修改
    my_sel.increamentCounter(10)
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