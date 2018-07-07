Page({
  data: {
    recruitChange: false, //判断是招聘信息修改还是招聘信息发布

    title: '', // 职位名称
    salary: '', // 岗位薪资
    number: '', // 招聘人数
    workingDateArray: ['无工作年限', '1-3年', '3-5年', '5-10年', '10年以上'],
    workingDate: '', // 工作年限
    educationArray: ['无限制', '大专', '本科', '硕士', '博士'],
    education: '', // 学历要求
    location: '', // 工作地点
    describle: '', // 职位描述
    describleNum: 0, //职位描述字数
    natureArray: ['全职', '兼职', '实习'],
    nature: '' //工作性质
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

  // 工作性质
  bindPickerNature: function (e) {
    this.setData({
      nature: this.data.natureArray[e.detail.value]
    })
  },
  // 工作年限
  bindPickerWorkingDate: function (e) {
    this.setData({
      workingDate: this.data.workingDateArray[e.detail.value]
    })
  },
  // 学历要求
  bindPickerEducation: function (e) {
    this.setData({
      education: this.data.educationArray[e.detail.value]
    })
  },
  // 字数统计
  textarea(e) {
    console.log(e.detail.cursor);
    this.setData({
      describleNum: e.detail.cursor,
      describle: e.detail.value
    })
  },
  titleInput: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  salaryInput: function (e) {
    this.setData({
      salary: e.detail.value
    })
  },
  numberInput: function (e) {
    this.setData({
      number: e.detail.value
    })
  },
  locationInput: function (e) {
    this.setData({
      location: e.detail.value
    })
  },
  hrefRecruitPostTwo: function () {
    var that = this.data;
    if (that.title == '' || that.salary == '' || that.number == '' || that.location == '' || that.describle == '' || that.workingDate == '' || that.education == '' || that.nature == '') {
      wx.showToast({
        title: '请完善招聘信息',
        icon: 'none', // loading
        duration: 2000,
        mask: true
      })
    } else {
      console.log(that.title, that.salary, that.number, that.location, that.describle);
      wx.navigateTo({
        url: '../recruitPostTwo/recruitPostTwo'
      })
    }
  },
  // 修改招聘信息
  hrefMineRecruitChange: function () {
    var that = this.data;
    if (that.title == '' || that.salary == '' || that.number == '' || that.location == '' || that.describle == '' || that.workingDate == '' || that.education == '' || that.nature == '') {
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