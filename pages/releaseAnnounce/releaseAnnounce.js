const uploadImage = require('../../utils/uploadAliyun.js');

Page({
  data: {
    releaseChange: false,
    imgUrl: [],
    describle: '',
    describleNum: 0,
  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  onLoad: function (e) {
    this.setData({
      releaseChange: e.change
    })
  },
  // 标题
  titleInput: function (e) {
    this.setData({
      title: e.detail.value
    })
    console.log(this.data.title)
  },
  // 详情
  textarea(e) {
    this.setData({
      describleNum: e.detail.cursor,
      describle: e.detail.value
    })
  },
  hrefSubmit: function () {
    var that = this.data;

    if (that.title == '' || that.describle == '') {
      wx.showToast({
        title: '请完善需求信息',
        icon: 'none', // loading
        duration: 2000,
        mask: true
      })
    } else {
      this.uploadFile();
      wx.navigateTo({
        url: '../releaseSubmit/releaseSubmit',
      })
    }
  },
  hrefMineRelease: function () {
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
  // 上传图片
  chooseImg: function () {
    var that = this;

    wx.chooseImage({
      count: 8 - that.data.imgUrl.length, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        if (that.data.imgUrl.length < 6) {
          that.data.imgUrl = that.data.imgUrl.concat(tempFilePaths);
          that.setData({
            imgUrl: that.data.imgUrl
          })
          console.log(that.data.imgUrl);
        } else {
          wx.showToast({
            title: '最多上传八张图片哦～',
            icon: 'none',
            duration: 2000
          });
        }
      }
    });
  },
  // 在这里封装一个上传多图的方法
  uploadFile: function () {
    var that = this.data;    
    var successUp = 0; //成功个数
    var failUp = 0; //失败个数
    var length = that.imgUrl.length; //总共个数

    for (let i = 0; i < that.imgUrl.length; i++) {
      const element = that.imgUrl[i];
      uploadImage({
        filePath: that.imgUrl[i],
        dir: "announce/",
        success: function (res) {
          successUp++;
          // console.log("上传成功")
        },
        fail: function (res) {
          failUp++;
          // console.log("上传失败")
          console.log(res)
        },
        complete: function (res) {
          i++;
          this.showToast('总共' + successUp + '张上传成功,' + failUp + '张上传失败！');
        }
      })
    }
  }
})