var newsList = require('../data/newsList.js')
var notice = require('../data/notice.js')
var activity = require('../data/activity.js')
var donate = require('../data/donate.js')
var donatePeople = require('../data/donatePeople.js')
var business = require('../data/business.js')
var recruit = require('../data/recruit.js')
var directory = require('../data/directory.js')
var need = require('../data/need.js')
var chat = require('../data/chat.js')

function getData(url) {
	return new Promise(function (resolve, reject) {
		wx.request({
			url: url,
			data: {},
			header: {
				//'Content-Type': 'application/json'
			},
			success: function (res) {
				console.log("success")
				resolve(res)
			},
			fail: function (res) {
				reject(res)
				console.log("failed")
			}
		})
	})
} //封装请求方法
function _getNewsList() {
	return newsList.newsList;
}

function _getNotice() {
	return notice.notice;
}

function _getActivity() {
	return activity.activity;
}

function _getDonate() {
  return donate.donate;
}

function _getDonatePeople() {
  return donatePeople.donatePeople;
}

function _getBusiness() {
	return business.business;
}

function _getRecruit() {
	return recruit.recruit;
}

function _getDirectory() {
	return directory.directory;
}

function _getNeed() {
  return need.need;
}

function _getChat() {
  return chat.chat;
}
module.exports = {
	getNewsList: _getNewsList,
	getNotice: _getNotice,
	getActivity: _getActivity,
  getDonate: _getDonate,
  getDonatePeople: _getDonatePeople,
	getBusiness: _getBusiness,
	getRecruit: _getRecruit,
	getDirectory: _getDirectory,
  getNeed: _getNeed,
  getChat: _getChat
};