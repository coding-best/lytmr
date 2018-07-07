//app.js
App({
  onLaunch: function () {
    var that = this;
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};

    if ((!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600)) && (!userInfo.nickName)) {
      wx.login({
        success: function (res) {
          if (res.code) {
            var data = that.globalData;//这里存储了appid、secret、token串    
            var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + data.appid + '&secret=' + data.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
            wx.request({
              url: url,
              data: {},
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT    
              // header: {}, // 设置请求的 header    
              success: function (res) {
                var obj = {};
                obj.openid = res.data.openid;
                obj.expires_in = res.header.Date;
                console.log(obj);
                wx.setStorageSync('user', obj);//存储openid    
              }
            });
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      });
    }
  },
  globalData: {
    userInfo: null,
    appid: "wx1415dc77391e8987",
    secret: "d123a09ec29eb91f2fd73097e43349b2"
  }
})