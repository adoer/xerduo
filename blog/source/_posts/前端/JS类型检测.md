---
title: JS类型检测
date: 2021-03-08 22:51:08
comments: true
tags: 
    - JavaScript
categories: [前端]
keywords: demo
description: 
---
# JS类型检测
在 ECMAScript 规范中，共定义了 7 种数据类型，分为 基本类型 和 引用类型 两大类，如下所示：

基本类型：**String、Number、Boolean、Symbol、Undefined、Null**
引用类型：**Object**

基本类型也称为简单类型，由于其占据空间固定，是简单的数据段，为了便于提升变量查询速度，将其存储在栈中，即按值访问。

引用类型也称为复杂类型，由于其值的大小会改变，所以不能将其存放在栈中，否则会降低变量查询速度，因此，其值存储在堆(heap)中，而存储在变量处的值，是一个指针，指向存储对象的内存处，即按址访问。引用类型除 Object 外，还包括 Function 、Array、RegExp、Date 等等。

鉴于 ECMAScript 是松散类型的，因此需要有一种手段来检测给定变量的数据类型。对于这个问题，JavaScript 也提供了多种方法，但遗憾的是，不同的方法得到的结果参差不齐。

下面介绍常用的4种方法，并对各个方法存在的问题进行简单的分析。
<!--more-->
# typeof
 ``` javascript
console.log(typeof "");           // string 有效
console.log(typeof 1);            // number 有效
console.log(typeof Symbol());     // symbol 有效
console.log(typeof true);         // boolean 有效
console.log(typeof undefined);    // undefined 有效
console.log(typeof null);         // object 有效
console.log(typeof []);           // object 有效
console.log(typeof function(){}); // function 有效
console.log(typeof {});           // object
console.log(typeof new Date());   // object
console.log(typeof new RegExp()); // object
```

有些时候，typeof 操作符会返回一些令人迷惑但技术上却正确的值：
* 对于基本类型，除 null 以外，均可以返回正确的结果。
* 对于引用类型，除 function 以外，一律返回 object 类型。
* 对于 null ，返回 object 类型。
* 对于 function 返回  function 类型。
其中，null 有属于自己的数据类型 Null ， 引用类型中的 数组、日期、正则 也都有属于自己的具体类型，而 typeof 对于这些类型的处理，只返回了处于其原型链最顶端的 Object 类型，没有错，但不是我们想要的结果。

# instanceof
instanceof 是用来判断 A 是否为 B 的实例，表达式为：A instanceof B，如果 A 是 B 的实例，则返回 true,否则返回 false。 在这里需要特别注意的是：instanceof 检测的是原型，我们用一段伪代码来模拟其内部执行过程：

# constructor

# Object.prototype.toString.call()
toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。

对于 Object 对象，直接调用 toString()  就能返回 [object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。
 ``` javascript
Object.prototype.toString.call('') ;  // [object String]
Object.prototype.toString.call(1) ;   // [object Number]
Object.prototype.toString.call(true) ;// [object Boolean]
Object.prototype.toString.call(Symbol());//[object Symbol]
Object.prototype.toString.call(undefined) ;// [object Undefined]
Object.prototype.toString.call(null) ;// [object Null]
Object.prototype.toString.call(newFunction()) ;// [object Function]
Object.prototype.toString.call(newDate()) ;// [object Date]
Object.prototype.toString.call([]) ;// [object Array]
Object.prototype.toString.call(newRegExp()) ;// [object RegExp]
Object.prototype.toString.call(newError()) ;// [object Error]
Object.prototype.toString.call(document) ;// [object HTMLDocument]
Object.prototype.toString.call(window) ;//[object global] window 是全局对象 global 的引用
```