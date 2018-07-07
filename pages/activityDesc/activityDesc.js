Page({
  data: {
    releaseChange: false,
    imgUrl: [],
    describle: '',
    describleNum: 0,
  },
  onLoad: function (e) {
    console.log(e);
    this.setData({
      describle: e.describle
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
        if (that.data.imgUrl.length < 8) {
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
  // 字数统计
  textarea(e) {
    this.setData({
      describleNum: e.detail.cursor,
      describle: e.detail.value
    })
    // console.log(this.data.describle);
  },
  hrefActivityPost: function () {
    var pages = getCurrentPages();  // 当前页面
    var prevPage = pages[pages.length - 2]; // 上级页面
    prevPage.setData({
      describle: this.data.describle
    })
    wx.navigateBack({
      delta: 1,
    })
  }
})