
Page({
  data: {
    bannerList:{
      config:{
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000
      },
      items:[
        {
          id:'1',
          tag:'想去二周年',
          src:'http://xqproduct.xiangqu.com/FvKbCMBX3mjJR9h5BzP-GiphSNjI?imageView2/2/w/770/q/90/format/jpg/770x360/',
          mode:'aspectFit'
        },
        {
          id:'2',
          tag:'美式街头的不屑',
          src:'http://xqproduct.xiangqu.com/FiZLUkRyq2Nr_QzrcodaHtlpDYYe?imageView2/2/w/770/q/90/format/jpg/770x360/',
          mode:'aspectFit'
        },
        {
          id:'3',
          tag:'美物与慢生活',
          src:'http://xqproduct.xiangqu.com/FoBcb049nGf-HXLXE1hr3fKVaB0k?imageView2/2/w/770/q/90/format/jpg/770x360/',
          mode:'aspectFit'
        },
      ],
      texts:[
          '原创设计师',
          '传统手工艺制作',
          '精选小众美物',
      ],
    },
    limitList:{
      tag:'今日精选好物',
      items:[
        {
          id:'1',
          src:'http://xqproduct.xiangqu.com/FiZLUkRyq2Nr_QzrcodaHtlpDYYe?imageView2/2/w/770/q/90/format/jpg/770x360/',
          mode:'aspectFit',
          size:true,
          price:'90.0',
          name:'美式街头的不屑',
          timelimit:'24',
          link:'product'
        },
        {
          id:'2',
          src:'http://xqproduct.xiangqu.com/FiZLUkRyq2Nr_QzrcodaHtlpDYYe?imageView2/2/w/770/q/90/format/jpg/770x360/',
          mode:'aspectFit',
          size:false,
          price:'90.0',
          name:'美式街头的不屑',
          timelimit:'24',
          link:'product'
        },
        {
          id:'3',
          src:'http://xqproduct.xiangqu.com/FiZLUkRyq2Nr_QzrcodaHtlpDYYe?imageView2/2/w/770/q/90/format/jpg/770x360/',
          mode:'aspectFit',
          size:false,
          price:'90.0',
          name:'美式街头的不屑',
          timelimit:'24',
          link:'product'
        },
      ]
    }
  },
  onLoad: function () {
    var bannerList = this.data.bannerList;
    bannerList.config.indicatorDots = true;
    this.setData({
      bannerList: bannerList
    });
  },
  imageLoad: function(e){
    //console.log(e.detail);
    console.log('image is load');
  },
  swiperChange: function(e){
    //console.log(e.detail.current);
    console.log('swiper is change');
  },

});
