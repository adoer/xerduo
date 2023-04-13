---
title: call,apply,bind的用法区别解析
date: 2021-06-26 20:05:46
comments: true
tags:
  - JavaScript
categories: [前端]
keywords: demo
description:
---

# call、apply、bind 异同

- 由于**call()、apply()与 bind()**都是属于 Function.prototype 对象下的方法，所以每个 function 实例都拥有有 call、apply 与 bind 属性。
- 相同点：都是为改变 this 指向而存在的。
- 异同点：使用 call()方法时，传递给函数的参数必须逐个列举出来，使用 apply()方法时，传递给函数的是参数数组。bind()和 call()很相似，第一个参数是 this 的指向，从第二个参数开始是接收的参数列表。bind()方法不会立即执行，而是返回一个改变了上下文 this 后的函数，用于稍后调用。 call()、apply()则是立即调用。

<!--more-->

**这里的 this 指向 window 对象**

```javascript
funciton foo () {
 console.log(this); // window对象
}
foo() // window对象
```

**这里的 this 指向调用者，谁调用 this 就指向谁**

```javascript
var name = "王小二"
var obj = {
  age: 20,
  name: "张小二",
  foo: function() {
    console.log(this.age + "---" + this.name)
  }
}
obj.foo() // 20---张小二
var fun = obj.foo
fun() // undefined---王小二
```

**使用 call()、apply()、bind()改变 this 的上下文：**

```javascript
let name = "张小二"
function foo(sex, age) {
  console.log(`${this.name}---${sex}---${age}`)
}
let obj = {
  name: "王小二"
}

foo("男", 18) // 张小二---男---18
foo.call(obj, "男", 18) // 王小二---男---18
foo.apply(obj, ["男", 18]) // 王小二---男---18
foo.bind(obj, "男", 18)() // 王小二---男---18
```
