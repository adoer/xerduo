---
title: Vue父子组件生命周期执行顺序
date: 2020-03-04 21:04:56
photos: "img(12).jpg"
tags:
  - Vue2
categories: [前端]
keywords: demo
description:
---

### 加载渲染过程

<!-- more -->

父 beforeCreate->父 created->父 beforeMount->子 beforeCreate->子 created->子 beforeMount->子 mounted->父 mounted

### 子组件更新过程

父 beforeUpdate->子 beforeUpdate->子 updated->父 updated

### 父组件更新过程

父 beforeUpdate->父 updated

### 销毁过程

父 beforeDestroy->子 beforeDestroy->子 destroyed->父 destroyed

参考文档
https://blog.csdn.net/weixin_30616969/article/details/94973817
