# 渝康码属性
|  属性   | 说明  |   类型   | 可选值  | 默认值 |
|  ----   | ----  |  ----   |  ----  |  ----  | 
| list  | 列表 |    Array[] |  -  |    []     |
| reportList  | 列表 |Array[] |  -  |    []   |
| serverList  | 列表 |Array[] |  -  |    []   |
| feverList  | 列表 |Array[] |  -  |    []   |

### 示例

1.引用：小程序在当前使用的json文件里面引入

     "yukangCode": "/components/yukangCode/yukangCode" 

2.使用：list传参

     <yukangCode list="{{yukangCodeList}}"></yukangCode> 


3.示例：
## list:

![](https://s1.ax1x.com/2022/05/13/OsS0PO.md.png)



# 车牌号

1.引用：小程序在当前使用的json文件里面引入

     "car-num-input": "/components/carNumInput/carNumInput" 

2.使用：

     <car-num-input></car-num-input> 

## 车牌号验证规则
1、传统车牌<br/>
第1位为省份简称（汉字），第二位为发牌机关代号（A-Z的字母）第3到第7位为序号（由字母或数字组成，但不存在字母I和O，防止和数字1、0混淆，另外最后一位可能是“挂学警港澳使领”中的一个汉字）。<br/>
2、新能源车牌<br/>
第1位和第2位与传统车牌一致，第3到第8位为序号（比传统车牌多一位）。新能源车牌的序号规则如下：
小型车：第1位只能是字母D或F，第2为可以是数字或字母，第3到6位必须是数字。
大型车：第1位到第5位必须是数字，第6位只能是字母D或F。

## carNumInput:

![](https://s1.ax1x.com/2022/05/13/OsSdIK.png)
