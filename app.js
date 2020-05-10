// 注册小程序示例
/* 是一个全局共享的单例对象，所以可以将一些贡献数据放在这里 */
App({

  globalData:{
    name:'zjl',
    age:18
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // 1.判断小程序的进入场景
    // options.scene：场景值ID
    console.log(options.scene);
    switch(options){
      case 1001:
        break;
      case 1005:
        break;
    }

    // 2.获取用户信息，并且获取用户信息之后，将用户的信息传递给服务器
    /* 但是已经即将废弃这个接口，改用1.button组件-将open-type改成getUserInfo,并且绑定事件去点击，2.使用open-data开放能力组件 */
    wx.getUserInfo({
      complete: (res) => {console.log(res);},
    })
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
