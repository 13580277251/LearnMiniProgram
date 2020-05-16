const TOKEN = 'token'

App({
  // 对象：当小程序关闭的时候对象会被回收
  globalData:{
    token: ''
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 1.先从缓存中取出token
    const token = wx.getStorageSync('TOKEN')

    // 2.判断token是否有值
    if(token && token.length !== 0){
      // 已经有token，接下来验证是否过期
      this.check_token(token)
    }else{
      // 进行登录操作
      console.log('++++');
      this.login()
    }
  },
  // 验证token是否过期
  check_token(token){
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'POST',
      header:{
        token
      },
      success:(res) => {
        if(!res.data.errCode){
          this.globalData.token = token
        }else{
          this.login()
        }
      },
      fail:(err) => {
        console.log(err);
      }
    })
  },
  login(){
        // 小程序登录
        wx.login({
          /* code只有5分钟的有效期 */
          success:(res) => {
            console.log(res)
            // 1.获取code
            const code = res.code; 
            // 2.将code发送给我们的服务器
            wx.request({
              url: 'http://123.207.32.32:3000/login',
              method:"POST",
              data:{
                code
              },
              success:(res) => {
                // 1.取出token
                const token = res.data.token;

                // 2.将token保存在globaltoken中
                this.globalData.token = token
    
                // 3.进行本地存储,同步存储
                wx.setStorageSync('TOKEN', token)
              }
            })
          }
        })
  }
})

