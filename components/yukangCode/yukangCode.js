Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list: {
            type: Array,
            value: []
        },
        reportTitle: {
            type: String,
            value: ""
        },
        reportList: {
            type: Array,
            value: []
        },
        serverTitle: {
            type: String,
            value: ""
        },
        feverTitle: {
            type: String,
            value: ""
        },
        serverList: {
            type: Array,
            value: []
        },
        feverList: {
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        multipleClick(e) {
            let name = e.currentTarget.dataset.name
            let type = e.currentTarget.dataset.type
            console.log(name, type)
            if (type == "apply") {
                console.log('去申领页面')
            }
            if (type == "scan") {
                wx.scanCode({
                    success(res) {
                        console.log(res)
                    }
                })
            }
        },
        singleClick(e) {
            let name = e.currentTarget.dataset.name
            console.log(name)
        },
        translateClick(e) {
            let name = e.currentTarget.dataset.name
            console.log(name)
        },
        reportClick(e) {
            let name = e.currentTarget.dataset.name
            console.log(name)
        },
        serverClick(e) {
            let name = e.currentTarget.dataset.name
            console.log(name)
        },
        feverClick(e) {
            let name = e.currentTarget.dataset.name
            console.log(name)
        }

    }

})