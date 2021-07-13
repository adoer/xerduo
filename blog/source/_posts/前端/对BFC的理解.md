---
title: 对BFC的理解
date: 2021-07-11 21:46:20
tags: 
    - CSS
categories: [前端]
keywords: demo
description: 
---

## 一、是什么
我们在页面布局的时候，经常出现以下情况：

* 这个元素高度怎么没了？
* 这两栏布局怎么没法自适应？
* 这两个元素的间距怎么有点奇怪的样子？
* ......

原因是元素之间相互的影响，导致了意料之外的情况，这里就涉及到`BFC`概念
<!-- more -->
`BFC`（Block Formatting Context），即块级格式化上下文，它是页面中的一块渲染区域，并且有一套属于自己的渲染规则：

* 内部的盒子会在垂直方向上一个接一个的放置
* 对于同一个BFC的俩个相邻的盒子的margin会发生重叠，与方向无关。
* 每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此
* BFC的区域不会与float的元素区域重叠
* 计算BFC的高度时，浮动子元素也参与计算
* BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

`BFC`目的是形成一个相对于外界完全独立的空间，让内部的子元素不会影响到外部的元素

## 二、触发条件
触发`BFC`的条件包含不限于：

* 根元素，即HTML元素
* 浮动元素：float值为left、right
* overflow值不为 visible，为 auto、scroll、hidden
* display的值为inline-block、inltable-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid
* position的值为absolute或fixed

## 三、应用场景
利用`BFC`的特性，我们将`BFC`应用在以下场景：

#### 防止margin重叠（塌陷）
```
<style>
    p {
        color: #f55;
        background: #fcc;
        width: 200px;
        line-height: 100px;
        text-align:center;
        margin: 100px;
    }
</style>
<body>
    <p>Haha</p >
    <p>Hehe</p >
</body>
```

页面显示如下：

![](https://camo.githubusercontent.com/2edcf1cac871572e2ed82f0bd098d87a83eb16088c212df177a6d3556568dcf8/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f64306365333635302d393531312d313165622d383566362d3666616337376330633962332e706e67)

两个`p`元素之间的距离为`100px`，发生了`margin`重叠（塌陷），以最大的为准，如果第一个P的`margin`为80的话，两个P之间的距离还是100，以最大的为准。

前面讲到，同一个`BFC`的俩个相邻的盒子的`margin`会发生重叠

可以在`p`外面包裹一层容器，并触发这个容器生成一个`BFC`，那么两个`p`就不属于同一个`BFC`，则不会出现`margin`重叠

```
<style>
    .wrap {
        overflow: hidden;// 新的BFC
    }
    p {
        color: #f55;
        background: #fcc;
        width: 200px;
        line-height: 100px;
        text-align:center;
        margin: 100px;
    }
</style>
<body>
    <p>Haha</p >
    <div class="wrap">
        <p>Hehe</p >
    </div>
</body>
```

这时候，边距则不会重叠：

![](https://camo.githubusercontent.com/814c7d522281fe3f3364868acf65b77c3c33384c3c5c0389be5361bd3ce9db1a/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f64656334343734302d393531312d313165622d383566362d3666616337376330633962332e706e67)

#### 清除内部浮动
```
<style>
    .par {
        border: 5px solid #fcc;
        width: 300px;
    }
 
    .child {
        border: 5px solid #f66;
        width:100px;
        height: 100px;
        float: left;
    }
</style>
<body>
    <div class="par">
        <div class="child"></div>
        <div class="child"></div>
    </div>
</body>
```

页面显示如下：

![](https://camo.githubusercontent.com/950f1c953614934d6ca43dae0d6e93d1a7800cec8b9913a5160ee94f233a6e42/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f65633564343431302d393531312d313165622d383566362d3666616337376330633962332e706e67)

而`BFC`在计算高度时，浮动元素也会参与，所以我们可以触发`.par`元素生活才能`BFC`，则内部浮动元素计算高度时候也会计算

```css
.par {
    overflow: hidden;
}
```

实现效果如下：

![](https://camo.githubusercontent.com/941b70b7cf6e09f5d118b0eeab4e5b12b33064860b18146e7b51cd6cf1fb7f01/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f66363438376232302d393531312d313165622d616239302d6439616538313462323430642e706e67)

#### 自适应多栏布局
这里举个两栏的布局

```
<style>
    body {
        width: 300px;
        position: relative;
    }
 
    .aside {
        width: 100px;
        height: 150px;
        float: left;
        background: #f66;
    }
 
    .main {
        height: 200px;
        background: #fcc;
    }
</style>
<body>
    <div class="aside"></div>
    <div class="main"></div>
</body>
```

效果图如下：

![](https://camo.githubusercontent.com/ab92fb390c82cf85a0280600edc0ee055f30514b968a8f9532e8872232afc874/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f66666239353231302d393531312d313165622d616239302d6439616538313462323430642e706e67)

前面讲到，每个元素的左外边距与包含块的左边界相接触

因此，虽然`.aslide`为浮动元素，但是`main`的左边依然会与包含块的左边相接触

而`BFC`的区域不会与浮动盒子重叠

所以我们可以通过触发`main`生成`BFC`，以此适应两栏布局

```css
.main {
    overflow: hidden;
}
```

这时候，新的`BFC`不会与浮动的`.aside`元素重叠。因此会根据包含块的宽度，和`.aside`的宽度，自动变窄

效果如下：

![](https://camo.githubusercontent.com/b81ff5a8300d0dbda275910507092642f4274dff420b6fc42cdf48b75fa3fb7b/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f30613566323639302d393531322d313165622d616239302d6439616538313462323430642e706e67)

### 小结
可以看到上面几个案例，都体现了`BFC`实际就是页面一个独立的容器，里面的子元素不影响外面的元素

## 参考文献
* https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context
* https://github.com/zuopf769/notebook/blob/master/fe/BFC%E5%8E%9F%E7%90%86%E5%89%96%E6%9E%90/README.md


