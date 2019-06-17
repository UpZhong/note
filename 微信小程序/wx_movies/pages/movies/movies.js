var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheatersData: [],
    comingSoonData: [],
    top250Data: [],
    searchData: [],
    containerShow: true,
    searchPanelShow: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var inTheatersUrl = "https://douban-api.uieee.com/v2/movie/in_theaters?start=0&count=3";
    var comingSoonDataUrl = "https://douban-api.uieee.com//v2/movie/coming_soon?start=0&count=3";
    var top250Url = "https://douban-api.uieee.com/v2/movie/top250?start=0&count=3";
    this.getMovieList(inTheatersUrl, "theaters")
    this.getMovieList(comingSoonDataUrl, "coming_soon")
    this.getMovieList(top250Url, "top250")
  },

  moreTap: function(event) {
    var category = event.currentTarget.dataset.category;
    wx.navigateTo({
      url: 'movies-more/movies-more?category=' + category,
    })
  },

  itemTap: function(event) {
    var movieId = event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: 'movies-detail/movies-detail?id=' + movieId,
    })
  },

  getMovieList: function(url, type) {
    var self = this;
    wx.request({
      url: url,
      method: "GET",
      header: {
        "Content-Type": "json"
      },
      success: function(res) {
        console.log(res)
        self.dataHandle(res.data.subjects, type)
      }
    })
  },

  dataHandle: function(data, type) {
    if (type == "theaters" && data && data.length) {
      for (let i = 0; i < data.length; i++) {
        data[i].rating.stars = util.formatStar(data[i].rating.stars);
      }
      this.setData({
        inTheatersData: data
      })
    }
    if (type == "coming_soon" && data && data.length) {
      for (let i = 0; i < data.length; i++) {
        data[i].rating.stars = util.formatStar(data[i].rating.stars);
        if (data[i].title.length >= 6) {
          data[i].title = data[i].title.substring(0, 6) + "...";
        }
      }
      this.setData({
        comingSoonData: data
      })
    }
    if (type == "top250" && data && data.length) {
      for (let i = 0; i < data.length; i++) {
        data[i].rating.stars = util.formatStar(data[i].rating.stars);
        if (data[i].title.length >= 6) {
          data[i].title = data[i].title.substring(0, 6) + "...";
        }
      }
      this.setData({
        top250Data: data
      })
    }
    if (type == "search" && data && data.length) {
      for (let i = 0; i < data.length; i++) {
        data[i].rating.stars = util.formatStar(data[i].rating.stars);
        if (data[i].title.length >= 6) {
          data[i].title = data[i].title.substring(0, 6) + "...";
        }
      }
      this.setData({
        searchData: data
      })
    }
  },

  onBindConfirm: function(event) {
    console.log(event)
    var text = event.detail.value;
    var searchUrl = "https://douban-api.uieee.com/v2/movie/search?q=" + text;
    this.getMovieList(searchUrl, "search")
  },

  onBindFocus: function (event) {
    this.setData({
      containerShow: false,
      searchPanelShow: true
    })
  },

  onCancelImgTap: function(event) {
    this.setData({
      containerShow: true,
      searchPanelShow: false,
      searchResult: []
    })
  },
})