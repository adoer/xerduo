---
title: Vue父子组件生命周期执行顺序
date: 2021-08-04 21:04:56
tags: 
    - Vue2
categories: [前端]
keywords: demo
description: 
---
### 加载渲染过程
<!-- more -->
   父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
### 子组件更新过程
　　父beforeUpdate->子beforeUpdate->子updated->父updated
### 父组件更新过程
　　父beforeUpdate->父updated
### 销毁过程
　　父beforeDestroy->子beforeDestroy->子destroyed->父destroyed


参考文档
https://blog.csdn.net/weixin_30616969/article/details/94973817