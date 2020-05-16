// pages/home/home.js
Page({
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return{
      title:'你好啊，朱举亮',
      path:"/pages/about/about.js",
      imageUrl:'../../assets/images/common/favor.png'
    }
  }
})