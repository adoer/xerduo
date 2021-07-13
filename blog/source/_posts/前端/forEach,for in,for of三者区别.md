---
title: forEach、for in 、 for of三者的区别
date: 2021-04-10 10:12:22
comments: true
tags: 
    - JavaScript
categories: [前端]
keywords: demo
description: 
---

# for循环
除了这三种方法以外还有一种最原始的遍历，它用来遍历数组，for循环中可以使用return、break等来中断循环。
<!--more-->
 ``` javascript
let arr = [1,2,3]
for(let i = 0 ; i< arr.length ; i++){
	console.log(arr[i])
}
/* 输出结果
1
2
3
*/
 ```

 # forEach
 对数组的每一个元素执行一次提供的函数（不能使用return、break等中断循环），不改变原数组，无返回值undefined。
  ``` javascript
let arr = ['a', 'b', 'c']
arr.forEach(function (val, index, arr) { // val是当前元素，index当前元素索引，arr数组
    console.log(val + ',' + index)
})
/* 输出结果
a,0
b,1
c,2
*/
 ```

 # for…in
循环遍历的值都是数据结构的键值
``` javascript
let obj = {a: '1', b: '2', c: '3'}
for (let o in obj) {
    console.log(o)    //遍历的实际上是对象的属性名称 a,b,c
    console.log(obj[o])  //这个才是属性对应的值1，2，3
}
 ```
**for...in循环有几个缺点。** 

1、数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
2、for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
``` javascript
Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};
var arr = [3, 5];
arr.foo = 'hello';
for (var i in arr) {
   console.log(i);
}
// 结果是：
// 0
// 1
// foo
// arrCustom
// objCustom
 ```
3、某些情况下，for...in循环会以任意顺序遍历键名。（先把当中的非负整数键提出来，排序好输出，然后将剩下的定义时的顺序输出）
4、不可以使用return、break等来中断循环

总之，for...in循环主要是为遍历对象而设计的，不适用于遍历数组。


# for…of
ES6中新增加的语法，用来循环获取一对键值对中的值，可以使用return、break等来中断循环

**一个数据结构只有部署了 Symbol.iterator 属性, 才具有 iterator接口可以使用 for of循环。例子中的obj对象没有Symbol.iterator属性 所以会报错。**

哪些数据结构部署了 Symbol.iteratoer属性了呢?

数组 Array
Map
Set
String
arguments对象
Nodelist对象, 就是获取的dom列表集合

## 循环一个数组
``` javascript
let arr = ['China', 'America', 'Korea']
for (let o of arr) {
    console.log(o) //China, America, Korea
}
 ```
 ## 循环一个普通对象（报错）
 obj对象没有Symbol.iterator属性 所以会报错。
 ``` javascript
let obj = {a: '1', b: '2', c: '3', d: '4'}
for (let o of obj) {
    console.log(o)   // Uncaught TypeError: obj is not iterabl
}
 ```

如果想让对象可以使用 for of循环怎么办?使用 Object.keys() 获取对象的 key值集合后,再使用 for of，或者使用内置的Object.values()方法获取对象的value值集合再使用for of。
 ``` javascript
let obj = {a: '1', b: '2', c: '3', d: '4'}
for (let o of Object.keys(obj)) {
    console.log(o) // a,b,c,d
}

let obj = {a: '1', b: '2', c: '3', d: '4'}
for (let o of Object.values(obj)) {
    console.log(o) // 1,2,3,4
}
 ```

 ## 循环一个字符串
  ``` javascript
let str = 'love'
for (let o of str) {
    console.log(o) // l,o,v,e
}
 ```

 ## 循环一个Map
``` javascript
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3

for (let entry of iterable) {
  console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]
```

## 循环一个Set
``` javascript
let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```