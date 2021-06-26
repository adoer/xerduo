---
title: '避坑,fill初始化多维数组'
date: 2021-05-18 22:39:17
tags: 
    - JavaScript
categories: [前端]
keywords: demo
description: 
---

# 避坑,fill初始化多维数组
数组实例的 fill(),使用给定值，填充一个数组。例如：
 ``` javascript
let a = new Array(5).fill(0);
console.log(a); // 输出结果为[0, 0, 0, 0, 0]
 ```

 使用fill()创建二维数组
``` javascript
let arr=new Array(3).fill(new Array(3).fill(0))
console.log(arr); // 输出结果为[[0,0,0],[0,0,0],[0,0,0]]
 ```
<!--more-->
看似没问题，当给某个元素赋值时如下：
每个第一行每一列1的元素的值都改变了。
``` javascript
arr[1][1]=1;
console.log(arr) // 输出结果为[[0,1,0],[0,1,0],[0,1,0]]
 ```

 # 原因
 fill()的参数不是基本类型时，好比数组、对象，并非将它的值填充到数组，而是将它的地址填充到数组，因此填充后数组的每一项都指向的是同一个对象，就会出现"牵一发而动全身"的现象。

 # 解决方法
可以使用map遍历
``` javascript
let arr=new Array(3).fill(0).map(item=>new Array(3).fill(0))
arr[1][1]=1
console.log(arr); // 输出结果为[[0,0,0],[0,1,0],[0,0,0]]
 ```

这样就只有arr[1][1]发生改变了。
