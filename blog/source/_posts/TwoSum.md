---
title: Two Sum
layout: post
date: 2018-01-18 13:06:00
comments: true
tags: 
    - 刷题
categories: [前端]
keywords: demo
description: 
---
## 题意
Given an array of integers, return indices of the two numbers such that they add up to a specific target，You may assume that each input would have exactly one solution, and you may not use the same element twice.   
给定一个整数数组，返回其中两个数的索引，并使索引对应元素之和与给定的数相等，假定每次输入都只有一个解决方案，并且不会使用相同的元素两次。     

例如：
```
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
## 代码

``` javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for (var i = 0, l = nums.length; i < l; i++) {
        if (map[target - nums[i]] !== undefined) {
            return [map[target - nums[i]], i];
        } else {
            map[nums[i]] = i;
        }
    }
};
```
## 在线演示
<script async src="//jsfiddle.net/duqing/g6wLLesw/embed/js,html,css,result/dark/"></script>


