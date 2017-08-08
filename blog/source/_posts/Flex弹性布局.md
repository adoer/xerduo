---
layout: post
title: Flex弹性布局
date: 2017-05-08 21:10:03
tags: "技术"
---
>布局的传统解决方案，基于盒状模型，依赖 displaSy 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，Flex 布局或将成为未来布局的首选方案。

## 使用说明：
{% raw %}
<link rel="stylesheet" href="http://onix7zh9h.bkt.clouddn.com/css/flex.css">
<style>
    .flex{
        box-shadow: 1px 1px rgba(78, 78, 78, 0.1) inset,
        -1px -1px rgba(78, 78, 78, 0.1) inset;
        text-align: center;
        background: #f8ffed;
    }
    .flex[class*="item"],.bg-flex{
        line-height: 40px;
        box-shadow: 1px 1px rgba(78, 78, 78, 0.1) inset,
        -1px -1px rgba(78, 78, 78, 0.1) inset;
        background: #edf8ff;
    }
    .bg-flex{
        width: 25%;
    }
    #left-menu{
        position:absolute;left:50%;width:60px;margin-left: -30px;
    }
    #left-menu>div{
        position: fixed;
        text-align: center;
    }
    #left-menu>div>h3{
        display: block;
        padding: 5px 20px;
        margin-left:-20px;
        border:1px solid #e7e7e7;
        border-radius:8px 0 8px 0;
        cursor: pointer;
    }
    #left-menu>div>h3:hover{
        background: #efefef;
        border-radius:0 8px 0 8px;
    }
    #left-menu-h{
        height: 4480px;
    }
    #con-right i{
        display: block;
        height: 36px;
        width: 36px;
        background: #ffcfcf;
        position: fixed;
        margin-left: -33px;
        border-radius:50%;
        margin-top: 102px;
        box-shadow: 0 2px 6px -2px #385a68;
        z-index: 99;
        border: 8px solid #fff;
    }
    #con-right{
        margin-left: 45px;
    }
    .head-bg{
        background: #f0f0f0;
    }
    .conbg{
        background: #EDF8FF;
    }
    .m-t-10 {
        margin-top: 10px !important;
    }
    .h-220 {
        height: 220px !important;
        overflow: hidden !important;
    }
    .border {
        border: 1px solid #efefef !important;
    }
    .bd-6 {
        -moz-border-radius: 6px !important;
        -webkit-border-radius: 6px !important;
        border-radius: 6px !important;
    }
    .p-15 {
        padding: 15px !important;
    }
    .p-0{
        padding:0 !important;
    }
    .list-unstyled::before{
        display:none !important;
    }
    .m-b-20 {
        margin-bottom: 20px !important;
    }
    .c-blue {
        color: #00A2D9;
    }
    .m-r-5 {
        margin-right: 5px !important;
    }
    .panel p{
        margin:0;
    }
    .panel-content{
        margin-bottom:30px;
    }
    .h-100 {
        height: 100px !important;
        overflow: hidden !important;
    }
    .w-100{
        width:100%;
    }
    .h-100p{
        height:100%;
    }
    p{
        margin:0 !important;
    }
</style>
    <div class="flex flex-row red">
        <div class="flex item-1">item-1</div>
    </div>
    <div class="flex flex-row m-t-10">
        <div class="flex item-1">item-1</div>
        <div class="flex item-2">item-2</div>
        <div class="flex item-7">item-7</div>
    </div>
    <div class="flex flex-row m-t-10">
        <div class="flex item-1">item-1</div>
        <div class="flex item-1">item-1</div>
        <div class="flex item-1">item-1</div>
        <div class="flex item-1">item-1</div>
        <div class="flex item-1">item-1</div>
        <div class="flex item-1">item-1</div>
        <div class="flex item-1">item-1</div>
        <div class="flex item-1">item-1</div>
        <div class="flex item-1">item-1</div>
        <div class="flex item-1">item-1</div>
    </div>
    <div class="flex flex-row m-t-10 h-220">
        <div class="flex item-1 flex-col">
            <div class="w-100 flex flex-row flex-mid flex-center  item-2">item-2</div>
            <div class="w-100 flex flex-row flex-mid flex-center item-6">item-6</div>
            <div class="w-100 flex flex-row flex-mid flex-center  item-2">item-2</div>
        </div>
        <div class="flex item-1 flex-col">
            <div class="w-100 flex flex-row flex-mid flex-center item-3">item-3</div>
            <div class="w-100 flex flex-row flex-mid flex-center item-3">item-3</div>
            <div class="w-100 flex flex-row flex-mid flex-center item-4">item-4</div>
        </div>
        <div class="flex item-1 flex-col">
            <div class="w-100 flex item-2">item-2</div>
            <div class="w-100 flex flex-row flex-mid flex-center item-3">item-3</div>
            <div class="w-100 flex flex-row flex-mid flex-center item-5">item-5</div>
        </div>
    </div>
{% endraw%}
<!--more-->
{% raw %}
    <ul class="m-t-10">
        <li>布局容器有两种：<br/>1、flex-row：容器里的[栅格]以横向排列。
            <br/>2、flex-col：容器里的[栅格]以纵向排列。<br/>3、综合使用flex-row、flex-col可以实现各种复杂布局。
        </li>
        <li>[栅格]宽度、高度不是固定百分比，可以无限切分下去。<br/>特别说明：
            <br/>1、item-1~item-9 由小到大 表示用于切分比例的类。
            <br/>2、item-1~item-9任意一个都可以重复使用，但重复使用时其所占高度或宽度百分比都将重新计算，最后都能使他们能完全填充整个容器。
        </li>
        <li>设为flex布局以后，子元素的float、clear和vertical-align属性将失效。<a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html">Flex原理教程</a></li>
    </ul>
    <div style="margin-top:26px;">
        <div class="panel-header">
            <h2>用法:</h2>
        </div>
        <div class="panel-content border m-t-20 p-0 bd-6 p-b-20">
            <div class="p-15 m-b-20 border head-bg">
                <p class="m-b-0"><span class="c-blue m-r-5">理解并使用item-*</span>这个class应用在[栅格]上，用于切分容器。</p>
            </div>
            <div class="flex flex-row">
                <div class="flex item-1">只使用一个item-*时，占容器宽度100%（建议统一使用item-1填充整个宽度）</div>
            </div>
            <div class="flex flex-row m-t-10">
                <div class="flex item-1">使用两个相同item-*时，各占容器宽度50%。</div>
                <div class="flex item-1">（以此类推，可根据需要无限切分下去）</div>
            </div>
            <div class="flex flex-row m-t-10">
                <div class="flex item-1">使用不同item-*时，所占比例 = 当前item-*数字大小 / 所有item-*数字之和。</div>
            </div>
            <div class="flex flex-row m-t-10">
                <div class="flex item-2">item-1,占 1/13</div>
                <div class="flex item-5">item-5,占 5/13</div>
                <div class="flex item-7">item-7,占 7/13</div>
            </div>
        </div>
        <div class="panel-content border m-t-20 p-0 bd-6 p-b-20">
            <div class="p-15 m-b-20 border head-bg">
                <p class="m-b-0"><span class="c-blue m-r-5">order-*（order-1~order-9）</span>这个class应用在[栅格]上，指定对应[栅格]排序。数值越大排序越靠后。</p>
            </div>
            <div class="flex flex-row">
                <div class="flex item-1 order-4">order-4</div>
                <div class="flex item-1 order-3">order-3</div>
                <div class="flex item-1 order-2">order-2</div>
                <div class="flex item-1 order-1">order-1</div>
            </div>
        </div>
        <div class="panel-content border m-t-20 p-0 bd-6 p-b-20">
            <div class="p-15 m-b-20 border head-bg">
                <p class="m-b-0"><span class="c-blue m-r-5">flex-mid 垂直居中 flex-center 水平居中</span>
                    <br/>这两个class应用在[容器]上时，所有子元素都会垂直或水平居中。也可以单独应用在子元素上，使特定子元素居中对齐。
                </p>
            </div>
            <div class="flex flex-row flex-center">
                <div class="flex bg-flex">水平居中</div>
            </div>
            <div class="flex flex-col flex-mid m-t-20 h-100">
                <div class="flex bg-flex">垂直居中</div>
            </div>
            <div class="flex flex-col flex-center flex-mid m-t-20 h-150">
                <div class="flex bg-flex">水平、垂直居中</div>
                <div class="flex bg-flex">水平、垂直居中</div>
            </div>
        </div>
        <div class="panel-content border m-t-20 p-0 bd-6 p-b-20">
            <div class="p-15 m-b-20 border head-bg">
                <p class="m-b-0"><span class="c-blue m-r-5">flex-left 左对齐 flex-right 右对齐</span>
                    <br/>这两个class应用在[容器]上时，所有子元素都会左右对其。也可以单独应用在子元素上。</p>
            </div>
            <div class="flex flex-row flex-left">
                <div class="flex bg-flex">左对齐</div>
                <div class="flex bg-flex">左对齐</div>
            </div>
            <div class="flex flex-row flex-right m-t-20">
                <div class="flex bg-flex">右对齐</div>
                <div class="flex bg-flex">右对齐</div>
            </div>
            <div class="flex flex-col m-t-20 flex-right">
                <div class="flex bg-flex">右对齐</div>
                <div class="flex bg-flex flex-left">左对齐</div>
                <div class="flex bg-flex">右对齐</div>
            </div>
        </div>
        <div class="panel-content border m-t-20 p-0 bd-6 p-b-20">
            <div class="p-15 m-b-20 border head-bg">
                <p class="m-b-0"><span class="c-blue m-r-5">flex-top 顶部对齐 flex-bottom 底部对齐</span>
                    <br/>这两个class应用在[容器]上时，所有子flex-item都会上下对其。也可以单独应用在[栅格]上。</p>
            </div>
            <div class="flex flex-row flex-bottom h-100">
                <div class="flex bg-flex">底部对齐</div>
                <div class="flex flex-top bg-flex">顶部对齐</div>
                <div class="flex bg-flex">底部对齐</div>
            </div>
        </div>
        <div class="panel-content border m-t-20 p-0 bd-6 p-b-20">
            <div class="p-15 m-b-20 border head-bg">
                <p class="m-b-0"><span class="c-blue m-r-5">flex-around 分散排列</span>
                    <br/>这个class应用在[容器]上。每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</p>
            </div>
            <div class="flex flex-row flex-around">
                <div class="flex bg-flex">分散排列</div>
                <div class="flex bg-flex">分散排列</div>
                <div class="flex bg-flex">分散排列</div>
            </div>
        </div>
        <div class="panel-content border m-t-20 p-0 bd-6 p-b-20">
            <div class="p-15 m-b-20 border head-bg">
                <p class="m-b-0"><span class="c-blue m-r-5">flex-between 两端对齐</span>
                    <br/>这个class应用在[容器]上。两端对齐，项目之间的间隔都相等。</p>
            </div>
            <div class="flex flex-row flex-between">
                <div class="flex bg-flex">两端对齐</div>
                <div class="flex bg-flex">两端对齐</div>
                <div class="flex bg-flex">两端对齐</div>
            </div>
        </div>
        <div id="responsive">
            <div class="panel-header">
                <h2>响应式布局:</h2>
            </div>
            <ul class="m-t-10 p-0">
                <li class="list-unstyled c-blue">提供基础的响应式功能，当分辨率小于某个阈值时，可以指定：</li>
                <li class="m-l-10">[容器]从横向排列变为竖向排列。</li>
                <li class="m-l-10">隐藏指定[栅格]</li>
                <li class="m-l-10">显示指定[栅格]</li>
            </ul>
            <div class="panel-content border m-t-20 p-0 bd-6 p-b-20">
                <div class="p-15 m-b-20 border head-bg">
                    <p class="m-b-0"><span class="c-blue m-r-5">flex-md </span><br/>这个class应用在[容器]上，当分辨率低于992px的时候，使[容器]变为竖向排列。</p>
                </div>
                <div class="flex flex-row flex-md m-b-20">
                    <div class="flex item-1">item-1</div>
                    <div class="flex item-1">item-1</div>
                    <div class="flex item-1">item-1</div>
                    <div class="flex item-1">item-1</div>
                </div>
            </div>
            <div class="panel-content border m-t-20 p-0 bd-6 p-b-20">
                <div class="p-15 m-b-20 border head-bg">
                    <p class="m-b-0"><span class="c-blue m-r-5">flex-sm </span><br/>这个class应用在[容器]上，当分辨率低于768px的时候，使[容器]变为竖向排列。</p>
                </div>
                <div class="flex flex-row flex-sm m-b-20">
                    <div class="flex item-1">item-1</div>
                    <div class="flex item-1">item-1</div>
                    <div class="flex item-1">item-1</div>
                    <div class="flex item-1">item-1</div>
                </div>
            </div>
            <div class="panel-content border m-t-20 p-0 bd-6 p-b-20">
                <div class="p-15 m-b-20 border head-bg">
                    <p class="m-b-0"><span class="c-blue m-r-5">flex-md-hide</span>
                        <br/>这个class应用在[容器]或[栅格]上，当分辨率低于992px的时候，隐藏[栅格]或[容器]
                    </p>
                </div>
                <div class="flex flex-row">
                    <div class="flex bg-flex item-1">item-1</div>
                    <div class="flex bg-flex item-8 flex-md-hide">flex-item-8，分辨率低于992px的时候消失</div>
                    <div class="flex bg-flex item-1">item-1</div>
                </div>
            </div>
            <div class="panel-content border m-t-20 p-0 bd-6 p-b-20">
                <div class="p-15 m-b-20 border head-bg">
                    <p class="m-b-0"><span class="c-blue m-r-5">flex-sm-hide</span>
                        <br/>这个class应用在[容器]或[栅格]上，当分辨率低于768px的时候，隐藏[栅格]或[容器]
                    </p>
                </div>
                <div class="flex flex-row">
                    <div class="flex bg-flex item-1">item-1</div>
                    <div class="flex bg-flex item-8 flex-sm-hide">item-8，分辨率低于768px的时候消失</div>
                    <div class="flex bg-flex item-1">item-1</div>
                </div>
            </div>
            <div class="panel-content border m-t-20 p-0 bd-6 p-b-20">
                <div class="p-15 m-b-20 border head-bg">
                    <p class="m-b-0"><span class="c-blue m-r-5">flex-md-show</span>
                        <br/>这个class应用在[容器]或[栅格]上，当分辨率低于992px的时候，显示[栅格]或[容器]
                    </p>
                </div>
                <div class="flex flex-row">
                    <div class="flex bg-flex item-1">item-1</div>
                    <div class="flex bg-flex item-1 flex-md-show flex-row flex-center">item-1，分辨率低于992px的时候显示</div>
                </div>
            </div>
            <div class="panel-content border m-t-20 p-0 bd-6 p-b-20">
                <div class="p-15 m-b-20 border head-bg">
                    <p class="m-b-0"><span class="c-blue m-r-5">flex-sm-show</span>
                        <br/>这个class应用在[容器]或[栅格]上，当分辨率低于768px的时候，显示[栅格]或[容器]
                    </p>
                </div>
                <div class="flex flex-row">
                    <div class="flex bg-flex item-1">item-1</div>
                    <div class="flex bg-flex item-1 flex-sm-show flex-row flex-center">item-1，分辨率低于768px的时候显示</div>
                </div>
            </div>
        </div>
        <div id="usage">
            <div class="panel-header">
                <h2>布局实例:</h2>
            </div>
            <div class="panel-content border m-t-20 p-0 bd-6 p-b-20">
                <div class="p-15 m-b-20 border head-bg">
                    <p class="m-b-0"><span class="c-blue m-r-5">响应式圣杯布局 </span><br/>main优先显示，宽度低于992px时候main和side-right变为水平排列, side-left隐藏</p>
                </div>
                <div class="flex flex-col h-220">
                    <div class="flex item-2">header</div>
                    <div class="flex flex-row item-6 flex-md">
                        <div class="h-100p flex item-6 order-2 flex-row flex-center flex-mid">main</div>
                        <div class="h-100p flex item-2 order-1 flex-md-hide flex-row flex-center flex-mid">side-left</div>
                        <div class="h-100p flex item-2 order-3 flex-row flex-center flex-mid">side-right</div>
                    </div>
                    <div class="flex item-2">footer</div>
                </div>
            </div>
        </div>
    </div>

<p><a href="http://onix7zh9h.bkt.clouddn.com/css/flex.css" download="Flex弹性布局">Flex弹性布局下载</a></p>
{% endraw%}