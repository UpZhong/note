var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var self = this;
    var movieId = options.id;
    var url = "https://douban-api.uieee.com/v2/movie/subject/" + movieId;
    wx.request({
      url: url,
      method: "GET",
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        console.log(res)
        res.data.castss = util.convertToCastString(res.data.casts);
        res.data.castsInfo = util.convertToCastInfos(res.data.casts);
        res.data.generes = res.data.genres.join("、");
        res.data.rating.stars = util.formatStar(res.data.rating.stars)
        self.setData({
          movie: res.data
        })
      }
    })
  },
  viewMoviePostImg:function(e){
    var src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: [src] // 需要预览的图片http链接列表
    })
  }

  
})