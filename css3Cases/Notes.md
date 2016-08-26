### 10天精通css3

1. border-radius属性: 向元素添加圆角 参数分别为: 左上角 右上角 右下角 左下角
    利用此属性可以轻松制作出圆形 半圆形 等效果

2. box-shadow属性: 向盒子添加阴影，支持一个或多个 参数分别为: x轴偏移量 Y轴偏移量 [阴影模糊半径] [阴影扩展半径] [阴影颜色] [投影方式]

3. border-image 为边框应用背景 参数分别为: 路径 切割图片的宽度 图片延伸方式 url() 70px repeat

4. 颜色rgba,rgb是一种色彩标准，由红绿蓝的变化以及相互叠加来得到各式各样的颜色，rgba是在rgb的基础上增加了alpha透明度的参数
    语法color:(R,G,B,A);

5. css3 gradient是渐变色彩，分为线性渐变(linear)和径向渐变(radial)  参数包括渐变方向和 渐变色彩
    语法：line-gradient(to-bottom ,blue,yellow) to top 从下向上 to right 从左向右 to left 从右向左 to bottom 从上向下 to top right左下角到右上角
    to top left  右下角到左上角

6. text-overflow与word-wrap;text-overflow来设置是否使用一个省略标记标识对象内文本的溢出,要是想溢出时产生省略号的效果，还须定义强制文本在一行      内显示：使用white-space：nowwrap和overflow：hidden。
    word-wrap也可以用来设置文本行为,当前行超过指定容器的边界时是否断开转行。
    text:overflow:clip(表示剪切) | ellipsis (表示显示省略标记)
    word-wrap:normal(表示控制连续文本换行) | break-word(表示内容将在边界内换行)

7. @font-face能够加载服务器端的字体文件,让浏览器可以显示用户电脑里没有安装的字体。
      @font-face{
              font-family: 字体名称;
              src: 字体文件在服务器上的相对或绝对路径;
      }
