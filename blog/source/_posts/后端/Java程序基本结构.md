---
title: Java程序基本结构
date: 2021-05-13 23:19:29
comments: true
tags: 
    - Java
categories: [后端]
keywords: demo
description: 
---

# Java程序基本结构
<!-- more -->
Java程序的基本结构：

``` Java
/**
 * 可以用来自动创建文档的注释
 */
public class Hello {
    public static void main(String[] args) {
        // 向屏幕输出文本:
        System.out.println("Hello, world!");
        /* 多行注释开始
        注释内容
        注释结束 */
    }
} // class定义结束
```
因为Java是面向对象的语言，一个程序的基本单位就是class，class是关键字，这里定义的class名字就是Hello：
``` Java
public class Hello { // 类名是Hello
    // ...
} // class定义结束
```
## 类名要求

* **类名必须以英文字母开头，后接字母，数字和下划线的组合**
* **习惯以大写字母开头**   

要注意遵守命名习惯，好的类命名：

* Hello
* NoteBook
* VRPlayer

不好的类命名：

* hello
* Good123
* Note_Book
* _World

注意到<code>public</code>是访问修饰符，表示该<code>public</code>是公开的。

不写<code>public</code>，也能正确编译，但是这个类将无法从命令行执行。

在<code>public</code>内部，可以定义若干方法（method）：
``` Java
public class Hello {
    public static void main(String[] args) { // 方法名是main
        // 方法代码...
    } // 方法定义结束
}
```

## 方法
方法定义了一组执行语句，方法内部的代码将会被依次顺序执行。

这里的方法名是main，返回值是void，表示没有任何返回值。

我们注意到public除了可以修饰class外，也可以修饰方法。而关键字static是另一个修饰符，它表示静态方法，后面我们会讲解方法的类型，目前，我们只需要知道，Java入口程序规定的方法必须是静态方法，方法名必须为main，括号内的参数必须是String数组。

方法名也有命名规则，命名和class一样，但是首字母小写：

好的方法命名：

* main
* goodMorning
* playVR

不好的方法命名：

* Main
* good123
* good_morning
* _playVR  

在方法内部，语句才是真正的执行代码。Java的每一行语句必须以分号结束：

``` Java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, world!"); // 语句
    }
}
```

## 注释
在Java程序中，注释是一种给人阅读的文本，不是程序的一部分，所以编译器会自动忽略注释。

Java有3种注释，第一种是单行注释，以双斜线开头，直到这一行的结尾结束：
``` Java
// 这是注释...
```
而多行注释以/*星号开头，以*/结束，可以有多行：
``` Java
/*
这是注释
blablabla...
这也是注释
*/
```
还有一种特殊的多行注释，以/**开头，以*/结束，如果有多行，每行通常以星号开头：
``` Java
/**
 * 可以用来自动创建文档的注释
 * 
 * @auther liaoxuefeng
 */
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
```

这种特殊的多行注释需要写在类和方法的定义处，可以用于自动创建文档。

Java程序对格式没有明确的要求，多几个空格或者回车不影响程序的正确性，但是我们要养成良好的编程习惯，注意遵守Java社区约定的编码格式。

# 参考资料
https://www.liaoxuefeng.com/wiki/1252599548343744/1255884132971296
