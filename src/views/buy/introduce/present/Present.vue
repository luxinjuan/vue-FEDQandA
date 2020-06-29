<template>
    <div id="present">
          <h3><a-icon type="paper-clip" /> 课程介绍</h3>
          <div id="heard">
              本教程是JavaScript基础部分， 内容包括JS语言的所有内容，从js语法， 语句， 变量、运算符、表达式， 
              流程控制，函数、对象、JSON、数组， 以及JavaScript的内置对象， 字符串对象操作、正则表达式， 数字对象，
              数学方法， 日期和时间的操作 并结合ES6的新特性，每一章节都结合的大量的实例进行讲解， 本部分是学习前端开发
              的基础， 所有内容都要求很好的掌握。
          </div>
          <div class="pp">
              <b>第一关：JavaScript语法</b> 本关是学习JavaScript的开始， 介绍了JavaScript的语言特性和版本，以及发展过程，
               重点介绍了JS语法，JS语句，以及变量的声明和数据类型，以及数据类型之间的转换过程，涉及到ES6新的技术点也进行了详细介绍。
          </div>
          <div class="pp">
              <b>第二关：JavaScript的运算符和流程控制</b>本关主要学习了JavaScript的各种相关的运算符号和流程控制的分支结构，
              以及相关的ES6的语法部分， 并通过实例演示进行了全面的讲解。
          </div>
          <div class="pp">
              <b>第三关：JavaScript的流程控制和函数</b>本关详细讲解了循环结构， 并重点讲解函数，包括函数的声明，函数的使用，
              以及函数参数的变化，还有回调函数，匿名函数，以及ES6中的箭头函数，和常用的闭包函数的应用，并通过实例一个个演示说明。
          </div>
          <div class="pp">
              <b>第四关：JavaScript对象编程</b>本关是Java面向对象部分， 是JavaScript的核心内容， 主要讲解了JavaScript的对象声明和应用，
              以及对象的继承，和ES6的类的声明和继承，以有对象的遍历。同时也介绍了JSOn的应用和声明语法格式。
          </div>
          <div class="pp">
              <b>第五关：JavaScript数组和异常处理</b>本关重点介绍了数组的应用， 包括数组和对象的区别应用， 通过对象模拟数组， 数组的声明，
              以及数组中常用的操作方法，也介绍了一些和数组相关的算法，像排序算法等，也讲解了数组的迭代方式。本关也介绍了异常的处理机制，
              包括声明异常和处理异常。
          </div>
          <div class="pp">
              <b>第六关：JavaScript字符串操作和正则表达式</b>本关是JS字符串的操作， 包括字符串的声明和应用， 并使用字符串中的处理函数处理字符串，
               同时重点讲解了正则表达式， 包括正则表达式的声明， 正则表达式方法的应用，以及正则表达式的编写思路，并通过实例演示每个知识点的详细应用。
          </div>
          <div class="pp">
              <b>第七关：JavaScript内置对象的应用 </b>本关讲解了数字对象声明和方法的应用， 以及数学对象中方法的应用和随机数的使用， 并重点讲解了日期和时间的应用， 
              同时也介绍了JavaScript中的事件添加方式，并通过实例详细对每个应用进行了功能的操作。
          </div>
    </div>
</template>
<script>
 export default({
     name:"Present"
 })
</script>
<style>
h3{
    margin-left: 15px;
    margin-right: 15px;
}
.pp{
    margin: 20px;
}
#heard{
    margin: 20px;
    
}
</style>