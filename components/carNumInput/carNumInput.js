Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        isKeyboard: false,
        isNumberKB: true,
        tapNum: false,
        keyboardNumber: "1234567890QWERTYUPASDFGHJKLZXCVBNM",
        keyboard: "京津冀鲁晋蒙辽吉黑沪苏浙皖闽赣豫鄂湘粤桂琼渝川贵云藏陕甘青宁新港澳台警使领",
        inputPlates: {
            index0: "",
            index1: "",
            index2: "",
            index3: "",
            index4: "",
            index5: "",
            index6: "",
            index7: ""
        },
        inputOnFocusIndex: "",
        isNewEnergy: false,
        carNum: "",
        rightCarNum: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        //input
        inputClick: function (t) {
            var that = this;
            if (t.target.dataset.id == 0) {
                that.setData({
                    inputOnFocusIndex: t.target.dataset.id,
                    isNumberKB: true,
                    isKeyboard: true,
                    tapNum: false,
                })
            };
            if (t.target.dataset.id == 1) {
                that.setData({
                    inputOnFocusIndex: t.target.dataset.id,
                    isNumberKB: false,
                    isKeyboard: true,
                    tapNum: false,
                })
            }
            if (t.target.dataset.id > 1) {
                that.setData({
                    inputOnFocusIndex: t.target.dataset.id,
                    isNumberKB: false,
                    isKeyboard: true,
                    tapNum: true,
                })
            }
        },
        //键盘点击事件
        tapKeyboard: function (t) {
            t.target.dataset.index;
            var a = t.target.dataset.val;
            switch (parseInt(this.data.inputOnFocusIndex)) {
                case 0:
                    this.setData({
                        "inputPlates.index0": a,
                        inputOnFocusIndex: "1"
                    });
                    break;
                case 1:
                    this.setData({
                        "inputPlates.index1": a,
                        inputOnFocusIndex: "2"
                    });
                    break;
                case 2:
                    this.setData({
                        "inputPlates.index2": a,
                        inputOnFocusIndex: "3"
                    });
                    break;
                case 3:
                    this.setData({
                        "inputPlates.index3": a,
                        inputOnFocusIndex: "4"
                    });
                    break;
                case 4:
                    this.setData({
                        "inputPlates.index4": a,
                        inputOnFocusIndex: "5"
                    });
                    break;
                case 5:
                    this.setData({
                        "inputPlates.index5": a,
                        inputOnFocusIndex: "6"
                    });
                    break;
                case 6:
                    this.setData({
                        "inputPlates.index6": a,
                        inputOnFocusIndex: "7"
                    });
                    break;
                case 7:
                    this.setData({
                        "inputPlates.index7": a,
                        inputOnFocusIndex: "7"
                    });
            }
            var n = this.data.inputPlates.index0 + this.data.inputPlates.index1 + this.data.inputPlates.index2 + this.data.inputPlates.index3 + this.data.inputPlates.index4 + this.data.inputPlates.index5 +
                this.data.inputPlates.index6 + this.data.inputPlates.index7
            console.log('车牌号:', n);
            this.data.carNum = n;
            this.checkedKeyboard();
            if (this.data.carNum.length > 7) {
                this.setData({
                    isNewEnergy: true
                })
            } else {
                this.setData({
                    isNewEnergy: false
                })
            }
        },

        //键盘确认按钮点击事件 
        confirm: function () {
            var that = this
            this.checkCarNum(that.data.carNum)
            if (that.data.rightCarNum) {
                that.setData({
                    isKeyboard: false,
                    isNumberKB: false,
                    tapNum: false,
                });
            }
        },

        //查询停车费
        payBtn: function () {
            var that = this
            this.checkCarNum(that.data.carNum)
            if (that.data.rightCarNum) {
                console.log('车牌号:', this.data.carNum);
            }
        },

        //键盘删除按钮点击事件
        tapSpecBtn: function (t) {
            console.log(t)
            switch (parseInt(this.data.inputOnFocusIndex)) {
                case 0:
                    this.setData({
                        "inputPlates.index0": "",
                        inputOnFocusIndex: "0"
                    });
                    break;
                case 1:
                    this.setData({
                        "inputPlates.index1": "",
                        inputOnFocusIndex: "0"
                    });
                    break;
                case 2:
                    this.setData({
                        "inputPlates.index2": "",
                        inputOnFocusIndex: "1"
                    });
                    break;
                case 3:
                    this.setData({
                        "inputPlates.index3": "",
                        inputOnFocusIndex: "2"
                    });
                    break;
                case 4:
                    this.setData({
                        "inputPlates.index4": "",
                        inputOnFocusIndex: "3"
                    });
                    break;
                case 5:
                    this.setData({
                        "inputPlates.index5": "",
                        inputOnFocusIndex: "4"
                    });
                    break;
                case 6:
                    this.setData({
                        "inputPlates.index6": "",
                        inputOnFocusIndex: "5"
                    });
                    break;
                case 7:
                    this.setData({
                        "inputPlates.index7": "",
                        inputOnFocusIndex: "6"
                    });
            }
            this.checkedKeyboard();
            var n = this.data.inputPlates.index0 + this.data.inputPlates.index1 + this.data.inputPlates.index2 + this.data.inputPlates.index3 + this.data.inputPlates.index4 + this.data.inputPlates.index5 +
                this.data.inputPlates.index6 + this.data.inputPlates.index7
            console.log('车牌号:', n);
            this.data.carNum = n;
            //判断新能源
            if (this.data.carNum.length > 7) {
                this.setData({
                    isNewEnergy: true
                })
            } else {
                this.setData({
                    isNewEnergy: false
                })
            }
        },
        //键盘切换
        checkedKeyboard: function () {
            var t = this;
            //console.log("键盘切换", this.data.inputOnFocusIndex);
            if (this.data.inputOnFocusIndex == 0) {
                t.setData({
                    tapNum: false,
                    isNumberKB: true
                })
            }
            if (this.data.inputOnFocusIndex == 1) {
                t.setData({
                    tapNum: false,
                    isNumberKB: false
                })
            }
            if (this.data.inputOnFocusIndex > 1) {
                t.setData({
                    tapNum: true,
                    isNumberKB: false
                })
            }
        },

        //校验车牌号-车牌输入限制了正确格式只判断车牌位数
        checkCarNum: function (carNum) {
            var that = this
            let reg = /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/
            const careg = reg.test(carNum);
            if (!careg) {
                wx.showToast({
                    icon: 'none',
                    title: '请输入正确车牌号',
                })
            } else {
                that.setData({
                    rightCarNum: true
                });
            }
        }

    }

})