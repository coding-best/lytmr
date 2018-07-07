// pages/mineRecruitChange/mineRecruitChange.js
Page({
  data: {
  
  },
  hrefRecruitPostOne: function (e) {
    var change = e.currentTarget.dataset.change;
    wx.navigateTo({
      url: '../recruitPostOne/recruitPostOne?change=' + change
    })
  },
  hrefRecruitPostTwo: function (e) {
    var change = e.currentTarget.dataset.change;
    wx.navigateTo({
      url: '../recruitPostTwo/recruitPostTwo?change=' + change
    })
  },
  hrefRecruitPostThree: function (e) {
    var change = e.currentTarget.dataset.change;
    wx.navigateTo({
      url: '../recruitPostThree/recruitPostThree?change=' + change
    })
  }
})