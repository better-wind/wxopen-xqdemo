var app = getApp()
Page({
    data:{
        settingList:[
            {
                tag:'订单',
                link:'',
                value:'68',
            },
            {
                tag:'我的优惠券',
                link:'',
                value:'',
            },
            {
                tag:'我的地址',
                link:'',
                value:'',
            },

        ],
        userInfo:{}
    },
    onLoad: function () {
        var _this = this
        app.getUserInfo(function(userInfo){
            _this.setData({
                userInfo:userInfo
            })
            _this.update()
        })
        wx.setNavigationBarTitle({
            title: '我的设置'
        })
        wx.showNavigationBarLoading()
    },
    tapBack:function(e){
        wx.navigateTo({
            url: '../index/index',
        })
    }
})