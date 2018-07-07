Page({
    data: {
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
        }]
    },
    // 禁用下拉刷新
    onPullDownRefresh: function () {
      wx.stopPullDownRefresh()
    },
    onLoad: function () {

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