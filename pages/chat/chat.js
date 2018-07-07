// pages/chat/chat.js
Page({
  data: {
    mySend: '',
    scrollTop: 0,
    chatData: [{
      receive: false,
      content: '在么？'
    }, {
      receive: true,
      content: '在呢，我不去了，不好意思呀～'
    }]
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '刘冰冰'
    })
  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  bindSend: function(e) {
    var that = this;
    var obj = {}; // 给他一个对象，存放将要发送的消息
    console.log(e.detail.value);
    if (e.detail.value == '') {
      return false;
    }
    obj.content = e.detail.value;
    obj.receive = true;
    that.data.chatData.push(obj)
    that.setData({
      chatData: that.data.chatData,
      mySend: ''  //  发送之后，这里将聊天框清空
    })
    that.sendMessage();
  },
  sendMessage: function () {
    var len = this.data.chatData.length //遍历的数组的长度
    this.setData({
      scrollTop: 1000 * len // 这里我们的单对话区域最高1000，取了最大值，应该有方法取到精确的  
    });
  }
})