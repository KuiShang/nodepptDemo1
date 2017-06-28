title: web全栈工程师养成手册
speaker: kk~
url: https://github.com/ksky521/nodeppt
transition: zoomout
files: /js/demo.js,/css/demo.css
theme: dark

[slide]

# web全栈工程师手册
## 演讲者：kk

[slide data-on-build="globalCallbackName"]
# 封面样式2 {:&.flexbox.vleft}
## 左对齐

[slide style="background-image:url('/img/bg1.png')"]

## 使用背景

[slide data-transition="vertical3d"]
## 使用.class/#id/自定义属性样式
----

```javascript
alert('nodeppt');
```

[slide]

## 主页面样式
### ----是上下分界线
----

nodeppt是基于nodejs写的支持 **Markdown!** 语法的网页PPT，当前版本：1.4.5

Github：https://github.com/ksky521/nodeppt

[slide]
[magic data-transition="circle"]
## 标题1
-----
<div class="columns3">
    <img src="/img/a.jpg" height="350">
    <img src="/img/b.jpg" height="350">
    <img src="/img/c.jpg" height="350">
</div>
====
## 标题2
-----
<div class="columns3">
    <img src="/img/d.jpg" height="350">
    <img src="/img/e.jpg" height="350">
    <img src="/img/f.jpg" height="350">
</div>

====
## 标题3
-----
<div class="columns3">
    <img src="/img/a.jpg" height="350">
    <img src="/img/g.jpg" height="350">
    <img src="/img/e.jpg" height="350">
</div>

[/magic]

[slide]

* 上下左右方向键翻页
    * 列表支持渐显动画 {:&.moveIn}
    * 支持多级列表
    * 这个动画是moveIn


[slide]
<div class="file-setting">
    <p>这是html</p>
</div>
<p id="css-demo">这是css样式</p>
<p>具体看下项目中 ppts/demo.md 代码</p>
<script>
    function testScriptTag(){

    }
    console.log(typeof testScriptTag);
</script>
<style>
#css-demo{
    color: red;
    float:left
}
</style>
[slide]
# Thanks !
#####Powered By Nodeppt