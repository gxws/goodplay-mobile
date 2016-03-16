/**
 * 微信相关
 */
wx.ready(function() {

});
wx.error(function(res) {
	console.log("没有通过验证");
	console.log(res);
});

/**
 * 分享到朋友圈
 */
wx.onMenuShareTimeline(shareObj);
/**
 * 分享给朋友
 */
wx.onMenuShareAppMessage(shareObj);
/**
 * 分享到QQ
 */
wx.onMenuShareQQ(shareObj);
/**
 * 分享到腾讯微博
 */
wx.onMenuShareWeibo(shareObj);
/**
 * 分享到QQ空间
 */
wx.onMenuShareQZone(shareObj);