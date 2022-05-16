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
        keyboardNumber: {
            index0: "1234567890",
            index1: "QWERTYUPA",
            index2: "SDFGHJKL",
            index3: "ZXCVBNM"
        },
        keyboard: {
            index0: "京津冀鲁晋蒙辽吉黑沪",
            index1: "苏浙皖闽赣豫鄂湘粤桂",
            index2: "琼渝川贵云藏陕甘青宁",
            index3: "新港澳台警使领"
        },
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
            if (t.target.dataset.id) {
                that.setData({
                    inputOnFocusIndex: t.target.dataset.id,
                    isKeyboard: true,
                })
            };
        },
        //键盘点击事件
        tapKeyboard: function (t) {
            var that = this
            var a = t.target.dataset.val;
            switch (parseInt(that.data.inputOnFocusIndex)) {
                case 0:
                    that.setData({
                        "inputPlates.index0": a,
                        inputOnFocusIndex: "1"
                    });
                    break;
                case 1:
                    that.setData({
                        "inputPlates.index1": a,
                        inputOnFocusIndex: "2"
                    });
                    break;
                case 2:
                    that.setData({
                        "inputPlates.index2": a,
                        inputOnFocusIndex: "3"
                    });
                    break;
                case 3:
                    that.setData({
                        "inputPlates.index3": a,
                        inputOnFocusIndex: "4"
                    });
                    break;
                case 4:
                    that.setData({
                        "inputPlates.index4": a,
                        inputOnFocusIndex: "5"
                    });
                    break;
                case 5:
                    that.setData({
                        "inputPlates.index5": a,
                        inputOnFocusIndex: "6"
                    });
                    break;
                case 6:
                    that.setData({
                        "inputPlates.index6": a,
                        inputOnFocusIndex: "7"
                    });
                    break;
                case 7:
                    that.setData({
                        "inputPlates.index7": a,
                        inputOnFocusIndex: "7"
                    });
            }
            var n = that.data.inputPlates.index0 + that.data.inputPlates.index1 + that.data.inputPlates.index2 + that.data.inputPlates.index3 + that.data.inputPlates.index4 + that.data.inputPlates.index5 +
                that.data.inputPlates.index6 + that.data.inputPlates.index7
            console.log('车牌号:', n);
            that.data.carNum = n;
            that.isNewEnergyJudge();
        },
        //判断新能源
        isNewEnergyJudge: function () {
            var that = this
            if (that.data.carNum.length > 7) {
                that.setData({
                    isNewEnergy: true,
                })
                that.checkCarNum(that.data.carNum)
                if (that.data.rightCarNum) {
                    that.setData({
                        isKeyboard: false,
                    })
                }
            } else {
                that.setData({
                    isNewEnergy: false
                })
            }
        },

        //键盘确认按钮点击事件 
        confirm: function () {
            var that = this
            that.checkCarNum(that.data.carNum)
            if (that.data.rightCarNum) {
                that.setData({
                    isKeyboard: false
                });
            }
        },

        //查询停车费
        payBtn: function () {
            var that = this
            that.checkCarNum(that.data.carNum)
            if (that.data.rightCarNum) {
                console.log('车牌号:', this.data.carNum);
            }
        },

        //键盘删除按钮点击事件
        tapSpecBtn: function () {
            var that = this
            switch (parseInt(that.data.inputOnFocusIndex)) {
                case 0:
                    that.setData({
                        "inputPlates.index0": "",
                        inputOnFocusIndex: "0"
                    });
                    break;
                case 1:
                    if (that.data.inputPlates.index1) {
                        that.setData({
                            "inputPlates.index1": "",
                            inputOnFocusIndex: "1"
                        });
                    } else {
                        that.setData({
                            "inputPlates.index0": "",
                            inputOnFocusIndex: "0"
                        });
                    }
                    break;
                case 2:
                    if (that.data.inputPlates.index2) {
                        that.setData({
                            "inputPlates.index2": "",
                            inputOnFocusIndex: "2"
                        });
                    } else {
                        that.setData({
                            "inputPlates.index1": "",
                            inputOnFocusIndex: "1"
                        });
                    }
                    break;
                case 3:
                    if (that.data.inputPlates.index3) {
                        that.setData({
                            "inputPlates.index3": "",
                            inputOnFocusIndex: "3"
                        });
                    } else {
                        that.setData({
                            "inputPlates.index2": "",
                            inputOnFocusIndex: "2"
                        });
                    }
                    break;
                case 4:
                    if (that.data.inputPlates.index4) {
                        that.setData({
                            "inputPlates.index4": "",
                            inputOnFocusIndex: "4"
                        });
                    } else {
                        that.setData({
                            "inputPlates.index3": "",
                            inputOnFocusIndex: "3"
                        });
                    }
                    break;
                case 5:
                    if (that.data.inputPlates.index5) {
                        that.setData({
                            "inputPlates.index5": "",
                            inputOnFocusIndex: "5"
                        });
                    } else {
                        that.setData({
                            "inputPlates.index4": "",
                            inputOnFocusIndex: "4"
                        });
                    }
                    break;
                case 6:
                    if (that.data.inputPlates.index6) {
                        that.setData({
                            "inputPlates.index6": "",
                            inputOnFocusIndex: "6"
                        });
                    } else {
                        that.setData({
                            "inputPlates.index5": "",
                            inputOnFocusIndex: "5"
                        });
                    }
                    break;
                case 7:
                    if (that.data.inputPlates.index7) {
                        that.setData({
                            "inputPlates.index7": "",
                            inputOnFocusIndex: "6"
                        });
                    } else {
                        that.setData({
                            "inputPlates.index6": "",
                            inputOnFocusIndex: "6"
                        });
                    }
            }
            var n = that.data.inputPlates.index0 + that.data.inputPlates.index1 + that.data.inputPlates.index2 + that.data.inputPlates.index3 + that.data.inputPlates.index4 + that.data.inputPlates.index5 +
                that.data.inputPlates.index6 + that.data.inputPlates.index7
            console.log('车牌号:', n);
            that.data.carNum = n;
            that.isNewEnergyJudge()
        },


        //校验车牌号
        checkCarNum: function (carNum) {
            var that = this
            let reg = /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳台使领]))$/
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