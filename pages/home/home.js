// pages/home/home.js
import request from '../../service/network'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /* --------原生发送网络请求----------- */
    // 发送网络请求
    // 1.发送最简单的get请求
    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/n3/recommend',
    //   success(res){
    //     console.log(res);
    //   }
    // }),
    // 2.get请求，但是携带参数
    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/n3/home/data',
    //   data:{
    //     type:'sell',
    //     page: 1
    //   },
    //   success(res){
    //     console.log(res);
    //   }
    // })
    // 3.post请求并且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method:'post',
    //   data:{
    //     name:'zjl',
    //     age:18
    //   },
    //   success(res){
    //     console.log(res);
    //   }
    // })
    /* 网络请求的封装 */
    // 1.降低网络请求和wx.reuqest的耦合度
    // 2.使用Promise的方法获取回调结果

    // 使用我们封装的request发送网络请求
    request({
      url:'http://152.136.185.210:8000/api/n3/recommend'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
})