var app = getApp();
Page({
  data: {
    'ding': '定位',
    imgUrls: [],
    // indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    page: 1,
    index: 2,
    cont: [],
    // 滑动
    brand: [],
    cat: [],
    list:[],
    tj:[]
  },
  onPullDownRefresh:function(e){
    onLoad();
  },
  listdetail: function (e) {
    console.log(e.currentTarget.dataset.title)
    wx.navigateTo({
      url: '../listdetail/listdetail?title=' + e.currentTarget.dataset.title,
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  suo: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },

  qiang: function (e) {
    var catId = e.currentTarget.dataset.id;
    var title = e.currentTarget.dataset.name;
    if(catId==1){
      wx.navigateTo({
        url: '../hotel/hotel?catId=' + catId + '&title=' + title
      })
    } else if (catId == 14){
      wx.navigateTo({
        url: '../dinner/dinner?catId=' + catId + '&title=' + title
      })
    }else{
      wx.navigateTo({
        url: '../shop/shop?catId=' + catId + '&title=' + title
      })
    }
  },

  jj: function (e) {
    var title = e.currentTarget.dataset.name;
    var shopId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../hotes/hotes?shopId=' + shopId + '&title=' + title,
    })
  },

  sou:function(e) {
    console.log(e.currentTarget.dataset.title)
    wx.navigateTo({
      url: '../search/search',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },


    // 定位
    // var that = this;  
    /* 获取定位地理位置 */
    // 新建bmap对象   
  onLoad: function () {
    var that=this

    //加载首页数据
    that.loadIndexData();
  },

  //加载首页数据
  loadIndexData:function(){
    var that = this;
    wx.request({
      url: app.d.ceshiUrl + '/Api/Index/playIndex',
      method: 'post',
      data: {},
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var ggtop = res.data.ggtop;
        var cat = res.data.cat;
        var shoplist = res.data.shoplist;
        var shop = res.data.shop;
        //that.initProductData(data);
        that.setData({
          imgUrls: ggtop,
          cat: cat,
          brand: shoplist,
          cont: shop,
          list:res.data.list,
          tj:res.data.tj
        });
        //endInitData
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    })
  },
  gotodetail:function(e){
    var productId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../product2/product2?productId=' + productId,
    })
  },

  onShareAppMessage: function () {
    return {
      title: '吴川海鲜烧烤',
      path: '/pages/playIndex/playIndex',
      success: function(res) {
        // 分享成功
      },
      fail: function(res) {
        // 分享失败
      }
    }
  }

});