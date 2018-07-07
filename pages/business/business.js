//获取应用实例
const app = getApp()
var api = require('../../utils/api.js')
const getInf = (str, key) => str.replace(new RegExp(`${key}`, 'g'), `%%${key}%%`).split('%%')

Page({
  data: {
    showModalStatus: false,
    industry: '选择行业',
    sort: ['全部分类', '金融行业', '建筑/建材', '房地产行业', '医药卫生', '信息产业', '交通运输', '机械机电', '轻工食品'],
    searchValue: '',
    requires: [{
      content: '民营企业',
      img: 'https://ofdznzfo9.qnssl.com/szdx_business_icon.png'
    }, {
      content: '100-149人',
      img: 'https://ofdznzfo9.qnssl.com/szdx_people_icon.png'
    }, {
      content: '建筑/建材',
      img: 'https://ofdznzfo9.qnssl.com/szdx_build_icon.png'
    }, {
      content: '地址',
      img: 'https://ofdznzfo9.qnssl.com/szdx_WechatIMG3012.png'
    }],
    searchValue: '',
    keyName: '',
    ifSearch: false
  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  onLoad: function () {
    this.getIndexData();
  },
  //搜索关键词高亮
  searchInput: function (e) {
    this.setData({
      keyName: e.detail.value,
      ifSearch: true
    })
    this.getIndexData();
    if (e.detail.value == '') {
      this.setData({
        directoryArr: '',
        keyName: '',
        ifSearch: false
      })
    }
  },
  // 数据获取
  getIndexData() {
    var dataBusiness = api.getBusiness(); //这是公司的数据
    this.setData({
      businessArr: dataBusiness.data
    })
    var sum = {};
    var num = [];
    for (var i = 0; i < this.data.businessArr.length; i++) {
      sum[i] = this.data.businessArr[i].title
      num[i] = getInf(sum[i], this.data.keyName);
    }
    console.log(num);
    this.setData({
      businessArrName: num
    })
  },
  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    var currentStatuf = e.currentTarget.dataset.statuf;
    if (this.data.showModalStatus == false) {
      this.util(currentStatu)
    } else {
      this.util(currentStatuf)
    }

  },
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例   
    var animation = wx.createAnimation({
      duration: 200, //动画时长  
      timingFunction: "linear", //线性  
      delay: 0 //0则不延迟  
    });

    // 第2步：这个动画实例赋给当前的动画实例  
    this.animation = animation;

    // 第3步：执行第一组动画：Y轴偏移240px后(盒子高度是240px)，停  
    animation.translateY(-344).step();

    // 第4步：导出动画对象赋给数据对象储存  
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画  
    setTimeout(function () {
      // 执行第二组动画：Y轴不偏移，停  
      animation.translateY(0).step()
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象  
      this.setData({
        animationData: animation
      })

      //关闭抽屉  
      if (currentStatu == "close") {
        animation.translateY(240).step()
        this.setData({
          showModalStatus: false
        });
      }
    }.bind(this), 40)

    // 显示抽屉  
    if (currentStatu == "open") {
      this.setData({
        showModalStatus: true
      });
    }
  },
  chooseSort: function (e) {
    var currentStatuf = e.currentTarget.dataset.statuf;
    var sort = e.currentTarget.dataset.sort;
    var num = e.currentTarget.dataset.num;
    console.log(num);
    this.setData({
      industry: sort,
      num: num
    });
    this.util(currentStatuf);
  },
  hrefBusinessDetailMajor: function () {
    wx.navigateTo({
      url: '../businessDetailMajor/businessDetailMajor'
    })
  },
  clearSearch: function () {
    this.setData({
      searchValue: '',
      directoryArr: '',
      keyName: ''
    })
  },
  getLocation: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },
  
})