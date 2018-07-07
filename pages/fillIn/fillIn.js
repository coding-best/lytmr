Page({
  data: {
    hide: 0, // 默认不隐藏
    name: '', // 姓名
    sex: '', // 性别
    birthday: '', // 生日
    phone: '', // 联系电话
    mail: '', // 邮箱
    edu: '', // 学历
    entrance: '', // 入学年份
    major: '', //专业
    organization: '', //工作单位
    industry: '', //行业
    post: '', //職位
    speciality: '',// 特長

    sexArray: ['男', '女'], //性别
    eduArray: ['小学', '初中', '高中', '大专', '本科', '硕士', '博士'], //学历
  },
  onLoad: function () {

  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  switch1Change: function (e) {
    if (e.detail.value == true) {
      this.setData({
        hide: 1 //隐藏
      })
    } else {
      this.setData({
        hide: 0 //不隐藏
      })
    }
  },
  // 填写姓名
  nameInput: function(e) {
    this.setData({
      name: e.detail.value
    })
  },
  // 验证姓名
  nameBlur: function (e) {
    var regName = /^[\u4e00-\u9fa5]{2,6}$/;
    if (!regName.test(this.data.name)) {
      this.setData({
        nameError: '姓名填写有误'
      })
      return false;
    }  else {
      this.setData({
        nameError: ''
      })
    }
  }, 
  // 选择性别
  bindPickerSex: function (e) {
    this.setData({
      sex: this.data.sexArray[e.detail.value]
    })
  },
  // 选择生日
  bindPickBirth: function (e) {
    this.setData({
      birthday: e.detail.value
    })
  },
  // 联系电话
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  // 验证电话
  phoneBlur: function (e) {
    var regName = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!regName.test(this.data.phone)) {
      this.setData({
        phoneError: '电话填写有误'
      })
      return false;
    } else {
      this.setData({
        phoneError: ''
      })
    }
  }, 
  // 邮箱
  mailInput: function (e) {
    this.setData({
      mail: e.detail.value
    })
  },
  // 验证邮箱
  mailBlur: function (e) {
    var regName = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    if (!regName.test(this.data.mail)) {
      this.setData({
        mailError: '邮箱填写有误'
      })
      return false;
    } else {
      this.setData({
        mailError: ''
      })
    }
  }, 
  // 选择学历
  bindPickerEdu: function (e) {
    this.setData({
      edu: this.data.eduArray[e.detail.value]
    })
  },
  // 选择入学年份
  bindPickerEntrance: function (e) {
    this.setData({
      entrance: e.detail.value
    })
  },
  // 填写专业
  majorInput: function (e) {
    this.setData({
      major: e.detail.value
    })
  },
  // 工作单位
  organizationInput: function (e) {
    this.setData({
      organization: e.detail.value
    })
  },
  // 所属行业
  industryInput: function (e) {
    this.setData({
      industry: e.detail.value
    })
  },
  // 工作职位
  postInput: function (e) {
    this.setData({
      post: e.detail.value
    })
  },
  // 特长
  specialityInput: function (e) {
    this.setData({
      speciality: e.detail.value
    })
  },
  // 提交审核
  hrefCheck: function() {
    var that = this.data;
    if (that.name == '' || that.sex == '' || that.birthday == '' || that.phone == '' || that.mail == '') {
      wx.showToast({
        title: '请完善基本信息',
        icon: 'none',
        duration: 2000
      })
    } else if (that.nameError || that.phoneError || that.mailError) {
      wx.showToast({
        title: '基本信息填写有误',
        icon: 'none',
        duration: 2000
      })
    } else if (that.edu == '' || that.entrance == '' || that.major == '') {
      wx.showToast({
        title: '请完善院系资料',
        icon: 'none',
        duration: 2000
      })
    } else if (that.organization == '' || that.industry == '' || that.post == '' || that.speciality == '') {
      wx.showToast({
        title: '请完善工作信息或其他信息',
        icon: 'none',
        duration: 2000
      })
    } else {
      console.log(that.name, that.sex, that.birthday, that.phone, that.mail);
      console.log(that.edu, that.entrance, that.major);
      console.log(that.organization, that.industry, that.post, that.speciality);
      wx.navigateTo({
        url: '../check/check',
      })
    }
  }
})