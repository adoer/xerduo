---
title: null与undefined
date: 2021-03-08 10:50:11
comments: true
tags: 
    - JavaScript
categories: [前端]
keywords: demo
description: 
---
# undefined与null
 ECMAScript 的原始类型中，是有Undefined 和 Null 类型的。 这两种类型都分别对应了属于自己的唯一专用值，即undefined 和 null。
> ECMAScript 有 6 种简单数据类型（也称为原始类型）：<font color='red'> Undefined、Null、Boolean、Number、
String 和 Symbol </font>。Symbol（符号）是 ECMAScript 6 新增的。还有一种复杂数据类型叫 Object（对
象）。Object 是一种无序名值对的集合。
<!--more-->

# undefined
表示"缺少值"，就是此处应该有一个值，但是还没有定义
（1）变量被声明了，但没有赋值时，就等于undefined。

（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。

（3）对象没有赋值的属性，该属性的值为undefined。

（4）函数没有返回值时，默认返回undefined。

> 一般来说，永远不用显式地给某个变量设置 undefined 值。字面值 undefined
 主要用于比较，而且在 ECMA-262 第 3 版之前是不存在的。<font color='red'>增加这个特殊值的目的就是为
 了正式明确空对象指针（null）和未初始化变量的区别<font>。

# null
> Null 类型同样只有一个值，即特殊值 null。逻辑上讲，null 值表示一个空对象指针，这也是给
typeof 传一个 null 会返回"object"的原因：
let car = null; 
console.log(typeof car); // "object" 
在定义将来要保存对象值的变量时，建议使用 null 来初始化，不要使用其他值。这样，只要检查
这个变量的值是不是 null 就可以知道这个变量是否在后来被重新赋予了一个对象的引用

（1）在定义将来要保存对象值的变量时，建议使用 null 来初始化，不要使用其他值。

// （1） 作为函数的参数，表示该函数的参数不是对象。

（2） 作为对象原型链的终点。
Object.getPrototypeOf(Object.prototype)
// null

# 检测
1、可以使用 String()转型函数，它始终会返回表示相应类型值的字符串
```
String(null) // 'null' ,
String(undefined) // 'undefined'
```
2、使用 Object.prototype.toString.call(arg)
```
Object.prototype.toString.call(undefined) ; // "[object Undefined]"
Object.prototype.toString.call(null) ; // "[object Null]"
```

# 历史原因
1995年JavaScript诞生时，最初像Java一样，只设置了null作为表示"无"的值。
根据C语言的传统，null被设计成可以自动转为0。

```
Number(null)
// 0
5 + null
// 5
```

但是，JavaScript的设计者Brendan Eich（布兰登·艾克），觉得这样做还不够，有两个原因。

首先，null像在Java里一样，被当成一个对象。但是，JavaScript的数据类型分成原始类型（primitive）和合成类型（complex）两大类，Brendan Eich觉得表示"无"的值最好不是对象。

其次，JavaScript的最初版本没有包括错误处理机制，发生数据类型不匹配时，往往是自动转换类型或者默默地失败。Brendan Eich觉得，如果null自动转为0，很不容易发现错误。

因此，Brendan Eich又设计了一个undefined。