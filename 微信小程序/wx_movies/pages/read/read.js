var postsData = require('../../data/posts-data.js');

Page({

  data: {
    imgUrls: [
      { url: "/images/wx.png", postId:3 },
      { url: "/images/vr.png", postId:4 },
      { url: "/images/iqiyi.png", postId:5 }
    ]
  },

  onLoad: function (options) {
    this.setData({
      readList: postsData.postList
    })
  },

  goForDetail: function(event){
    let postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'read-detail/read-detail?id=' + postId
    })
  },

  onSwiperTap: function(event){
    console.log(event)
    let postId = event.target.dataset.postid;
    wx.navigateTo({
      url: 'read-detail/read-detail?id=' + postId
    })
  }



})