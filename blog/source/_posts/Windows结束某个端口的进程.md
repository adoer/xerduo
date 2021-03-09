---
title: Windows结束某个端口的进程
date: 2021-03-08 21:04:12
comments: true
tags: 
    - Windows
categories: [Windows]
keywords: demo
description: 
---
# Windows结束某个端口的进程
以8080端口号为例
1.打开cmd命令窗口，输入命令：
```
netstat -ano | findstr 8080
```
根据端口号查找对应的PID。发现8080端口被PID（进程号）为2188的进程占用。
<!--more-->
2.根据PID找进程名称，输入命令：
```
tasklist | findstr 2181
```
发现是占用8080端口的进程为：javaw.exe。

3.根据PID结束对应进程。输入命令：
```
taskkill -PID 2188 -F
```
强制关闭PID为2188的进程。 


