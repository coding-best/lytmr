const uploadImage = require('../../utils/uploadAliyun.js');

Page({
  data: {
    recruitChange: false,
    describle: '',
    describleNum: 0,

    logoImg: 'https://ofdznzfo9.qnssl.com/szdx_upload_img.png',
    title: '',  // 企业全程
    address: '',  // 企业地址
    nature: '', // 性质
    scale: '',  // 规模
    industry: '', // 行业
    describle: '',  // 简介
    linkman: '',  // 联系人
    phone: '', // 联系电话
    natureArray: ['全职', '兼职', '实习'],
    scaleArray: ['大', '中', '小'],
    industryArray: ['IT', '通信', '管理'],
  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  onLoad: function (e) {
    this.setData({
      recruitChange: e.change
    })
  },
  // 在这里封装一个上传图的方法
  uploadFile: function (tempFilePaths) {
    uploadImage({
      filePath: tempFilePaths[0],
      dir: "recruit/",
      success: function (res) {
        console.log("上传成功")
      },
      fail: function (res) {
        console.log("上传失败")
        console.log(res)
      }
    })
  },
  // 上传企业logo
  uploadImg: function (e) {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
       // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          logoImg: res.tempFilePaths
        })
        that.uploadFile(tempFilePaths);
      }
    })
  },
  // 企业全称
  titleInput: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  // 企业地址
  addressInput: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  // 工作性质
  bindPickerNature: function (e) {
    this.setData({
      nature: this.data.natureArray[e.detail.value]
    })
  },
  // 企业规模
  bindPickerScale: function (e) {
    this.setData({
      scale: this.data.scaleArray[e.detail.value]
    })
  },
  // 所属行业
  bindPickerIndustry: function (e) {
    this.setData({
      industry: this.data.industryArray[e.detail.value]
    })
  },
  // 企业简介
  textarea(e) {
    this.setData({
      describleNum: e.detail.cursor,
      describle: e.detail.value
    })
  },
  // 职位联系人
  linkmanInput: function (e) {
    this.setData({
      linkman: e.detail.value
    })
  },
  // 联系电话
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  hrefRecruitSubmit: function () {
    var that = this.data;
    if (that.title == '' || that.address == '' || that.nature == '' || that.scale == '' || that.industry == '' || that.describle == '' || that.linkman == '' || that.phone == '') {
      wx.showToast({
        title: '请完善招聘信息',
        icon: 'none', // loading
        duration: 2000,
        mask: true
      })
    } else {
      console.log(that.title, that.address, that.nature, that.scale, that.industry, that.describle, that.linkman, that.phone);
      wx.navigateTo({
        url: '../recruitSubmit/recruitSubmit',
      })
    }
  },
  hrefMineRecruitChange: function () {
    var that = this.data;
    if (that.title == '' || that.address == '' || that.nature == '' || that.scale == '' || that.industry == '' || that.describle == '' || that.linkman == '' || that.phone == '') {
      wx.showToast({
        title: '请完善招聘信息',
        icon: 'none', // loading
        duration: 2000,
        mask: true
      })
    } else {
      wx.showToast({
        title: '已保存',
        icon: 'success',
        duration: 1100,
        success: function (res) {
          setTimeout(() => {
            wx.navigateBack({
              delta: 1,
            })
          }, 1200);
        }
      })
    }
  },
})