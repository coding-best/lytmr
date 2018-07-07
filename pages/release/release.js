var app = getApp()
var api = require('../../utils/api.js')

Page({
    data: {
        navbar: ['默认排序', '最新发布'],
        currentTab: 0,
        needArr: '', //需求发布
        needArrNews: '',
        winWidth: 0,
        winHeight: 0
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
    onLoad: function (e) {
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
        var that = this;
        var dataNeed = api.getNeed(); //这是列表的数据
        this.setData({
            needArr: dataNeed.data,
        })
        var rows = dataNeed.data;
        rows.sort(function (a, b) {
            return Date.parse(b.date) - Date.parse(a.date); //时间正序
        });
        this.setData({
            needArrNews: rows,
        })
    },
    hrefReleaseDetail: function () {
        wx.navigateTo({
          url: '../releaseDetail/releaseDetail'
        })
    },
    hrefAnnounce: function() {
        wx.navigateTo({
            url: '../releaseAnnounce/releaseAnnounce',
        })
    }
})