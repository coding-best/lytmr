var app = getApp()
var api = require('../../utils/api.js')

Page({
    data: {
        navbar: ['全部', '全职', '兼职', '实习'],
        currentTab: 0,
        recruitArr: '', //新闻
        winWidth: 0,
        winHeight: 0,
        requires: [{
            content: '3-5年',
            img: 'https://ofdznzfo9.qnssl.com/szdx_%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%97%B4z.png'
        }, {
            content: '大专',
            img: 'https://ofdznzfo9.qnssl.com/szdx_%E5%AD%A6%E5%8E%86z.png'
        }, {
            content: '全职',
            img: 'https://ofdznzfo9.qnssl.com/szdx_%E5%85%A8%E8%81%8Cz.png'
        }]
    },
    // 禁用下拉刷新
    onPullDownRefresh: function () {
      wx.stopPullDownRefresh()
    },
    navbarTap: function (e) {
        var that = this;
        this.setData({
            currentTab: e.currentTarget.dataset.idx
        })
    },
    // 轮播图左右滑动切换索引
    bindChange: function (e) {
        var that = this;
        that.setData({
            currentTab: e.detail.current
        });
    },
    onLoad: function () {
        // 主轮播图
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    winWidth: res.windowWidth
                });
            }
        });
        //调用应用实例的方法获取首页数据  没有接口 自己模拟
        this.getIndexData();
    },
    getIndexData() {
        var dataRecruit = api.getRecruit(); //这是列表的数据
        this.setData({
            recruitArr: dataRecruit.data,
        })
    },
    // 跳转新闻详情
    hrefNewsDetail: function () {
        wx.navigateTo({
            url: '../newsDetail/newsDetail'
        })
    },
    hrefRecruitDetail: function () {
        wx.navigateTo({
            url: '../recruitDetail/recruitDetail'
        })
    },
    hrefRecruitPostOne: function () {
        wx.navigateTo({
            url: '../recruitPostOne/recruitPostOne'
        })
    },
})