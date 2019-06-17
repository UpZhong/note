// pages/read/read-detail/read-detail.js
var postsData = require('../../../data/posts-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: {},
    collectionSrc: "",
    isPlayMusic: false,
    innerAudioContext: null,
    hasCollected: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      collectionSrc: "/images/icon/collection-anti.png",
      detailData: postsData.postList[options.id]
    })
    this.data.innerAudioContext = wx.createInnerAudioContext();
    this.data.innerAudioContext.src = this.data.detailData.music.url;

    var articleIds = wx.getStorageSync('zArticleIds');
    var articleIdArr = [];
    if (articleIds) {
      articleIdArr = JSON.parse(articleIds);
      for (var i = 0; i < articleIdArr.length; i++) {
        if (articleIdArr[i] === this.data.detailData.postId) {
          this.data.hasCollected = true;
          this.setData({
            collectionSrc: "/images/icon/collection.png"
          })
        }
      }
    }
  },

  musicTap: function() {
    console.log("this.isPlayMusic", this.data.isPlayMusic)
    if (!this.data.isPlayMusic) {
      this.setData({
        isPlayMusic: true
      })
      this.data.innerAudioContext.play()
    } else {
      this.setData({
        isPlayMusic: false
      })
      this.data.innerAudioContext.pause()
    }
  },

  collectTap: function() {
    var articleIds = wx.getStorageSync('zArticleIds');
    var that = this;
    wx.showModal({
      title: '收藏',
      content: this.data.hasCollected ? '确认取消收藏？' : '确认收藏？',
      success(res) {
        if (res.confirm) {
          if (!that.data.hasCollected) {
            var zArticleIds = [that.data.detailData.postId]
            wx.setStorageSync('zArticleIds', JSON.stringify(zArticleIds));
            that.setData({
              collectionSrc: "/images/icon/collection.png",
              hasCollected: true
            });
            wx.showToast({
              title: '收藏成功',
              icon: 'success',
              duration: 1500
            })
          } else {
            var arr = JSON.parse(articleIds);
            for (var i = 0; i < arr.length; i++) {
              if (arr[i] === that.data.detailData.postId) {
                arr.splice(i, 1);
                wx.setStorageSync('zArticleIds', JSON.stringify(arr));
                that.setData({
                  collectionSrc: "/images/icon/collection-anti.png",
                  hasCollected: false
                });
                wx.showToast({
                  title: '取消成功',
                  icon: 'success',
                  duration: 1500
                })
              }
            }
          }

        } else if (res.cancel) {}
      }
    })
  },

  shareTap: function() {
    wx.showActionSheet({
      itemList: ['分享给微信好友', '分享到朋友圈', '分享到QQ','分享到微博'],
      itemColor: "#405f80",
      success(res) {
        console.log(res.tapIndex)
        wx.showToast({
          title: '暂不支持',
          icon: 'success',
          duration: 1500
        })
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },

  onHide: function() {
    if (this.data.isPlayMusic) {
      this.data.innerAudioContext.stop()
    }
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    if (this.data.isPlayMusic) {
      this.data.innerAudioContext.stop()
    }
  }

})