const uploadImage = require('../../utils/uploadAliyun.js');

Page({
  data: {
    img: '',
    describle: '',
    describleNum: 0,
  },
  onLoad(e) {
    this.setData({
      img: e.img
    })
    console.log(this.data.img)
  },
  chooseImage: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          img: tempFilePaths
        })
        console.log(tempFilePaths[0]);
        uploadImage({
          filePath: tempFilePaths[0],
          dir: "head/",
          success: function (res) {
            console.log("上传成功")
          },
          fail: function (res) {
            console.log("上传失败")
            console.log(res)
          }
        })
      }
    })
  },
  hrefMine: function () {
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
  },
  textarea(e) {
    this.setData({
      describleNum: e.detail.cursor,
      describle: e.detail.value
    })
  },
})