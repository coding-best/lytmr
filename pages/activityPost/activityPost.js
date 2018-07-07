const uploadImage = require('../../utils/uploadAliyun.js');

Page({
  data: {
    dateStart: '', // 活动开始时间
    dateEnd: '', //  活动结束时间
    bgImg: '', //  活动图
    title: '', //活动主题
    address: '', //  活动地点
    pay: '', //  活动费用
    number: '', //人数限制
    describle: '', // 活动描述
    deathline: '', //  截止日期
    info: '', // 报名表单设置
  },
  onShow() {
    var that = this;
    var pages = getCurrentPages();
    var currpage = pages[pages.length - 1]; // 当前页面
    if (currpage.data.describle) {
      that.setData({
        describle: currpage.data.describle,
      })
    } else if (currpage.data.info) {
      that.setData({
        info: currpage.data.info
      })
    } else {

    }
  },
  // 在这里封装一个上传图的方法
  uploadFile: function (tempFilePaths) {
    uploadImage({
      filePath: tempFilePaths[0],
      dir: "activity/",
      success: function (res) {
        console.log("上传成功")
      },
      fail: function (res) {
        console.log("上传失败")
        console.log(res)
      }
    })
  },
  // 活动照
  updataImg: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          bgImg: res.tempFilePaths
        })
        console.log(tempFilePaths);
        that.uploadFile(tempFilePaths);
      }
    })
  },
  // 活动主题
  titleInput: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  // 活动地点
  addressInput: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  // 活动费用
  payInput: function (e) {
    this.setData({
      pay: e.detail.value
    })
  },
  // 人数限制
  numberInput: function (e) {
    this.setData({
      number: e.detail.value
    })
  },

  bindDateChangeStart: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dateStart: e.detail.value + ' 00:00'
    })
  },
  bindDateChangeEnd: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dateEnd: e.detail.value + ' 00:00'
    })
  },
  //  截止日期
  bindDateChangeline: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      deathline: e.detail.value
    })
  },
  // 活动描述
  hrefActivityDesc: function () {
    wx.navigateTo({
      url: '../activityDesc/activityDesc?describle=' + this.data.describle,
    })
  },
  hrefActivitySubmit: function () {
    var that = this.data;
    if (that.title == '' || that.address == '' || that.pay == '' || that.number == '' || that.deathline == '' || that.dateStart == '' || that.dateEnd == '') {
      wx.showToast({
        title: '请活动招聘信息',
        icon: 'none', // loading
        duration: 2000,
        mask: true
      })
    } else {
      console.log(that.title, that.dateStart, that.dateEnd, that.address, that.pay, that.number, that.deathline)
      wx.navigateTo({
        url: '../activitySubmit/activitySubmit'
      })
    }
  },
  hrefActivityForm: function () {
    wx.navigateTo({
      url: '../activityForm/activityForm'
    })
  },
})