// pages/code/code.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        yukangCodeList: [{
                img: "/assets/1.jpg",
                title: [{
                    name: "核酸检测结果查询",
                    type: "result"
                }]
            },
            {
                img: "/assets/2.jpg",
                title: [{
                    name: "核酸检测二维码",
                    type: "code"
                }]
            },
            {
                img: "/assets/3.jpg",
                title: [{
                    name: "通信大数据行程卡",
                    type: "signal"
                }]
            },
            {
                type: "multiple",
                img: "/assets/3.jpg",
                title: [{
                        name: "申领",
                        type: "apply"
                    },
                    {
                        name: "扫描",
                        type: "scan"
                    }
                ]
            },
            {
                img: "/assets/3.jpg",
                title: [{
                    name: "社区报告二维码",
                    type: "community"
                }]
            },
            {
                img: "/assets/3.jpg",
                title: [{
                    name: "港澳台、外籍人士健康申报",
                    type: "foreign"
                }],
                translate: "Health declaration of Hong Kong, Macao, Taiwan and foreigners"
            },
            {
                type: "multiple",
                img: "/assets/3.jpg",
                title: [{
                        name: "医保服务",
                        type: "service"
                    },
                    {
                        name: "公交乘车",
                        type: "bus"
                    }
                ]
            },
            {
                img: "/assets/3.jpg",
                title: [{
                    name: "新冠病毒核酸检测预约",
                    type: "order"
                }]
            },
        ],
        reportTitle: "疫情上报",
        reportList: [{
            img: "../../assets/1.jpg",
            name: "自主申报",
            des: "自主申报，享受精准指导和服务。众志成城、共抗疫情"
        }, ],
        infoTitle: "防疫资讯",
        infoList: [{
                img: "../../assets/1.jpg",
                name: "疫情播报",
                des: "实时跟踪最新疫情动态"
            },
            {
                img: "../../assets/1.jpg",
                name: "肺炎科普",
                des: "新科“新冠病毒感染”相关知识"
            },
        ],
        serverTitle: "便民服务",
        serverList: [{
                name: "同行人查询",
                des: "确诊患者同行程查询"
            },
            {
                name: "行程核验",
                des: "个人行程信息查询"
            },
        ],
        feverTitle: "发热门诊",
        feverList: [{
                img: "/assets/1.jpg",
                name: "发热自查",
                color: "#f0f3fc"
            },
            {
                img: "/assets/2.jpg",
                name: "发热门诊导航",
                color: "#fef4f3"
            },
        ]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})