Page({
    data: {
        close: false,
        requires: [{
            content: '招1人',
            img: 'https://ofdznzfo9.qnssl.com/szdx_require_num1.png'
        }, {
            content: '3-5年',
            img: 'https://ofdznzfo9.qnssl.com/szdx_%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%97%B4z.png'
        }, {
            content: '大专',
            img: 'https://ofdznzfo9.qnssl.com/szdx_%E5%AD%A6%E5%8E%86z.png'
        }, {
            content: '全职',
            img: 'https://ofdznzfo9.qnssl.com/szdx_%E5%85%A8%E8%81%8Cz.png'
        }, {
            content: '地址',
            img: 'https://ofdznzfo9.qnssl.com/szdx_WechatIMG3012.png'
        }]
    },
    onLoad: function (e) {
        this.setData({
            close: e.close
        })
        console.log(this.data.close)
    },
    // 禁用下拉刷新
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh()
    },
    hrefBusinessDetail: function () {
        wx.navigateTo({
            url: '../businessDetail/businessDetail',
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
    }
})