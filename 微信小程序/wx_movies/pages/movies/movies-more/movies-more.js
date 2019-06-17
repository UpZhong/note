var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    navigateTitle: "",
    requestUrl: "",
    totalCount: 0,
    isEmpty: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var category = options.category;
    this.data.navigateTitle = category;
    var dataUrl = "";
    switch (category) {
      case "正在热映":
        dataUrl = "https://douban-api.uieee.com/v2/movie/in_theaters";
        break;
      case "即将上映":
        dataUrl = "https://douban-api.uieee.com/v2/movie/coming_soon";
        break;
      case "TOP250":
        dataUrl = "https://douban-api.uieee.com/v2/movie/top250";
        break;
    }
    wx.setNavigationBarTitle({
      title: this.data.navigateTitle
    })
    this.data.requestUrl = dataUrl;
    util.http(dataUrl, this.processDoubanData)
  },

  onScrollLower: function(event) {
    var nextUrl = this.data.requestUrl +
      "?start=" + this.data.totalCount + "&count=20";
    util.http(nextUrl, this.processDoubanData)
    wx.showNavigationBarLoading()
  },

  onPullDownRefresh: function(event) {
    var refreshUrl = this.data.requestUrl +
      "?star=0&count=20";
    this.data.movies = [];
    this.data.isEmpty = true;
    this.data.totalCount = 0;
    util.http(refreshUrl, this.processDoubanData);
    wx.showNavigationBarLoading();
  },

  processDoubanData: function(moviesDouban) {
    var movies = [];
    for (let i = 0; i < moviesDouban.subjects.length; i++) {
      moviesDouban.subjects[i].rating.stars = util.formatStar(moviesDouban.subjects[i].rating.stars);
      var title = moviesDouban.subjects[i].title;
      if (title.length >= 6) {
        moviesDouban.subjects[i].title = title.substring(0, 6) + "...";
      }
      movies.push(moviesDouban.subjects[i])
    }
    var totalMovies = []

    //如果要绑定新加载的数据，那么需要同旧有的数据合并在一起
    if (!this.data.isEmpty) {
      totalMovies = this.data.movies.concat(movies);
    } else {
      totalMovies = movies;
      this.data.isEmpty = false;
    }
    this.setData({
      movies: totalMovies
    });

    this.data.totalCount += 20;
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh()
  },

  onReady: function(event) {
    wx.setNavigationBarTitle({
      title: this.data.navigateTitle
    })
  },

  itemTap: function(event) {
    var movieId = event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: '../movies-detail/movies-detail?id=' + movieId
    })
  }
})