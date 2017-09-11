---
layout: post
title: 图片剪裁上传 imgUpload
date: 2017-09-11 01:20:19
tags: "技术"
---
> 图片剪裁上传，可移动图片位置，鼠标滚动可放大缩小图片

{% raw %}
<script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
<style>
    #imgBox {
      position: relative;
      cursor: move;
      -moz-user-select: none;
      -o-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    #imgBox canvas{
            position: absolute;
            top: 50%;
            left: 50%;
            transform:translate(-50%,-50%);
    }
    .myBtn{
            display: inline-block;
            padding: 6px 12px;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-image: none;
            border: 1px solid transparent;
            border-radius: 4px;
            color: #333;
            background-color: #fff;
            border-color: #ccc;
    }
    .myBtn:hover{
        color: #333;
        background-color: #d4d4d4;
        border-color: #8c8c8c;
    }
</style>
<input id="inputBtn" type="file" class="myBtn" style="margin:10px 0; ">
<div class="wrap clearfix">
    <div class="left" style="margin-right: 10px;margin-bottom: 10px;float:left;">
        <div id="imgBox">
        </div>
    </div>
    <div class="right" id="previewImgBox" style="width: 50%;float:left;">
    </div>
</div>
<button id="save" class="myBtn" style="margin: 10px 0;">保存预览</button>
<div id="base64" style="margin-bottom:20px;">
    <img src="" alt="">
</div>
<script src="http://onix7zh9h.bkt.clouddn.com/js/imgupload.js"></script>
<script>
    function saveCallBack(base64){
            $("#base64 img").attr("src",base64);
    }
    var imgupload=new Imgupload({
        uploadInputBtn:"#inputBtn",
        previewBox:"#previewImgBox",
        imgBox:"#imgBox",
        //容纳图片的容器大小设置
        imgBoxSize:350,
        //图片剪裁区域大小校设置
        imgCropSize:200,
        //剪裁图片预览容器大小
        previewBoxSize:200
    },saveCallBack);
</script>
{% endraw%}

[Github地址](https://github.com/adoer/imgUpload)
<!--more-->

# 调用
```javascript
    function saveCallBack(base64){
            $("#base64 img").attr("src",base64);
            //最终把此base64传给后端
            /**
             $.ajax({
    				data: {
    					base64: base64
    				}
    			})
             **/
        }
        //    初始化
        var imgupload=new Imgupload({
            //选择文件按钮id
            uploadInputBtn:"#inputBtn",
            //预览容器id
            previewBox:"#previewImgBox",
            //容纳图片的容器id
            imgBox:"#imgBox",
            //容纳图片的容器大小设置
            imgBoxSize:350,
            //图片剪裁区域大小校设置
            imgCropSize:200,
            //剪裁图片预览容器大小
            previewBoxSize:200
        },saveCallBack);
```