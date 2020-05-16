export default function request(options){
  return new Promise((resolve,reject) => {
    wx.request({
      url: options.url,
      method:options.method || 'get',
      data:options.data || {},
      // resolve和reject本身就是一个回调函数
      success:resolve,
      fail:reject,
    })
  })
}

// export default function request(options){
//   return new Promise((resolve,reject) => {
//     wx.request({
//       url: options.url,
//       method:options.method || 'get',
//       data:options.data || {},
//       success(res){
//         resolve(res)
//       },
//       fail(err){
//         reject(err)
//       }
//     })
//   })
// }