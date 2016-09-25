Page({
    data: {
        productItem:{
            bannerList:{
                config:{
                    indicatorDots: true,
                    autoplay: true,
                    interval: 5000,
                    duration: 1000
                },
                items:[
                    {
                        src:'http://xqproduct.xiangqu.com/FiZLUkRyq2Nr_QzrcodaHtlpDYYe?imageView2/2/w/770/q/90/format/jpg/770x360/',
                        mode:'aspectFit'
                    },
                    {
                        src:'http://xqproduct.xiangqu.com/FiZLUkRyq2Nr_QzrcodaHtlpDYYe?imageView2/2/w/770/q/90/format/jpg/770x360/',
                        mode:'aspectFit'
                    },
                    {
                        src:'http://xqproduct.xiangqu.com/FiZLUkRyq2Nr_QzrcodaHtlpDYYe?imageView2/2/w/770/q/90/format/jpg/770x360/',
                        mode:'aspectFit'
                    },
                    {
                        src:'http://xqproduct.xiangqu.com/FiZLUkRyq2Nr_QzrcodaHtlpDYYe?imageView2/2/w/770/q/90/format/jpg/770x360/',
                        mode:'aspectFit'
                    },
                    {
                        src:'http://xqproduct.xiangqu.com/FiZLUkRyq2Nr_QzrcodaHtlpDYYe?imageView2/2/w/770/q/90/format/jpg/770x360/',
                        mode:'aspectFit'
                    }
                ]
            },
            productMsg:{
                title:'美式街头的不屑美式街头的不屑美式街头的不屑美式街头的不屑',
                price:'99',
                favor:false,
                favorNum:4,
                serverList:[
                    '七天无理由退货',
                    '48小时发货',
                    '担保交易'
                ],
                brandImage:'http://xqproduct.xiangqu.com/FiZLUkRyq2Nr_QzrcodaHtlpDYYe?imageView2/2/w/770/q/90/format/jpg/770x360/',
                brandName:'美式街头的不屑',
                brandDetail:'美式街头的不屑美式街头的不屑美式街头的不屑美式街头的不屑美式街头的不屑美式街头的不屑美式街头的不屑,美式街头的不屑美式街头的不屑美式街头的不屑美式街头的不屑美式街头的不屑美式街头的不屑美式街头的不屑美式街头的不屑。',
                shopNotices:'美式街头的不屑',
            },
            productDetail:[
                {
                    type:'text',
                    text:'美式街头的不屑',
                },
                {
                    type:'text',
                    text:'美式街头的不屑',
                },
                {
                    type:'text',
                    text:'美式街头的不屑'
                },
                {
                    type:'image',
                    src:'http://xqproduct.xiangqu.com/FiZLUkRyq2Nr_QzrcodaHtlpDYYe?imageView2/2/w/770/q/90/format/jpg/770x360/'
                },
                {
                    type:'text',
                    text:'美式街头的不屑'
                },
                {
                    type:'image',
                    src:'http://xqproduct.xiangqu.com/FiZLUkRyq2Nr_QzrcodaHtlpDYYe?imageView2/2/w/770/q/90/format/jpg/770x360/'
                },
                {
                    type:'text',
                    text:'美式街头的不屑'
                },
                {
                    type:'image',
                    src:'http://xqproduct.xiangqu.com/FiZLUkRyq2Nr_QzrcodaHtlpDYYe?imageView2/2/w/770/q/90/format/jpg/770x360/'
                }
            ],
            skuList:{
                config:{
                    isShow:false,
                },
                items:[
                    {
                        sku:'想',
                        select:false,
                        type:1,
                        id:1,
                        items:[
                            {
                                sku:'想去',
                                select:false,
                                type:2,
                                id:1,
                            },
                            {
                                sku:'想不去',
                                select:false,
                                type:2,
                                id:2,
                            }
                        ]


                    },
                    {
                        sku:'去',
                        select:false,
                        type:1,
                        id:2,
                        items:[
                            {
                                sku:'去想',
                                select:false,
                                type:2,
                                id:3,
                            },
                            {
                                sku:'去不想',
                                select:false,
                                type:2,
                                id:4,
                            }
                        ]


                    }
                ]
            }
        }
    },
    tapFavor: function(e){
        var productItem = this.data.productItem;
        productItem.productMsg.favor = !productItem.productMsg.favor;
        if(productItem.productMsg.favor){
            productItem.productMsg.favorNum++;
        }else{
            productItem.productMsg.favorNum--;
        }
        this.setData({
            productItem: productItem
        });
    },
    tapSelect:function(e){
        var _type = e.target.dataset.type,
            _id = e.target.dataset.id,
            productItem = this.data.productItem,
            skuList = productItem.skuList.items;

        for(var i = 0,j = skuList.length;i<j;i++){
            var items = skuList[i];
            if(items.id == _id && _type == '1'){
                items.select = !items.select;
            }
            else if(_type == '1'){
                items.select = false;
            }
            for(var n = 0,m = items.items.length;n<m;n++){
                var item = items.items[n];
                if(item.id == _id && _type == '2'){
                    item.select = !item.select;
                }
                else if(_type == '2'){
                    item.select = false;
                }

            }
        }

        productItem.skuList.items = skuList;
        this.setData({
            productItem:productItem
        })
    },
    tapSku:function(e){
        var productItem = this.data.productItem;
        productItem.skuList.config.isShow = !productItem.skuList.config.isShow;
        this.setData({
            productItem: productItem
        });
    },
})