---
title: JS原型与原型链
date: 2021-06-20 23:19:26
tags: 
    - JavaScript
categories: [前端]
keywords: demo
description: adasd
---

# 原型和原型链
这几个要点是理解原型的关键：
1、**所有的引用类型（数组、函数、对象）可以自由扩展属性（除null以外）。**
2、**所有的引用类型都有一个’_ _ proto_ _ '属性(也叫隐式原型，它是一个普通的对象)。**
3、**所有的函数都有一个’prototype’属性(这也叫显式原型，它也是一个普通的对象)。**
4、**所有引用类型，它的’_ _ proto_ _'属性指向它的构造函数的’prototype’属性。**
5、**当试图得到一个对象的属性时，如果这个对象本身不存在这个属性，那么就会去它的’_ _ proto_ _'属性(也就是它的构造函数的’prototype’属性)中去寻找。**

# 原型

**构造函数的属性prototype,叫做原型,这是可以直接使用的。**
**在JS实例对象中有一个属性 \__proto__ ,它也是原型,这是供浏览器使用的,它不是标准的属性**。
(实际上，该属性在ES标准定义中的名字应该是[[Prototype]]，具体实现是由浏览器代理自己实现，谷歌浏览器的实现就是将[[Prototype]]命名为\__proto__)。 

**实例对象中的\__proto__指向的是该实例对象中的构造函数中的prototype，构造函数中的prototype里面的属性或者方法,可以直接通过实例对象调用。**

示例：
 ``` javascript
function Foo() {...}; // 申明构造函数Foo
console.log( Foo.prototype ); // 打印其prototype属性
```
 控制台输出
  ``` javascript
{
    constructor: ƒ Foo(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
 ```
上面这个对象，就是常说的原型对象
可以看到，原型对象有一个自有属性constructor，这个属性指向该函数
 ``` javascript
 Foo.prototype.constructor === Foo // true
```

原型对象也是一个普通对象，属性\__proto__指向其构造函数的原型。
``` javascript
Foo.prototype.__proto__ === Object.prototype  // true
```

# 原型链
<!--more-->