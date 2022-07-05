// js六种数据类型
// Undefined Null String Number Symbol Boolean


// 防抖节流
function debounce(func,delay,...arg){
  let timeout;
  return function(){
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this,arg)
    },delay);
  }
}

function throttle(func,delay,...arg){
  let timer;
  return function(){
    if(!timer){
      timer = setTimeout(()=>{
        func.apply(this,arg);
        timer = null;
      },delay);
    }
  }
}

/* 
1、变量被声明但没有被赋值
2、调用函数时，没有返回值，返回undefine
3、调用函数时 应该提供参数但没有提供，该参数等于undefine
4、对象属性没有赋值时，该属性值为undefine
Ob
 */

// 判断类型
Object.prototype.toString.call(undefined);

// 深拷贝
function deepCopy(obj){
  if(obj == null) return obj;
  if(typeof obj !== "object") return obj;
  if(obj instanceof Date) return obj;
  if(obj instanceof RegExp) return obj;
  let newObj = (obj instanceof Array)?[]:{};
  for(let o of Object.keys(obj)){ 
    if(obj.hasOwnProperty(o)){
      if(typeof o === "object"){
        newObj[o] = deepCopy(obj[o]);
      }else {
        newObj[o] = obj[o]
      }
    }
  }
  return newObj;
}

// 尾递归调用
// 斐波那契
// 从0开始
function fib(n,start=0,total=1){
  if(n===0) return 0;
  if(n===1) return total;
  return fib(n-1,total,total + start)
}
// 从1开始
function factorial2 (n, start = 1, total = 1) {
  if(n <= 2) return total;
  return factorial2 (n -1, total, total + start);
}
// 阶乘
function fac(n,total = 1){
  if (n === 1){
    return total;
  }
  return fac(n-1,n*total);
}

// 数组增删查改、转换方法、迭代方法
// 字符串增删查改、转换方法、模板匹配方法

// 闭包就是能够读取其它函数内部变量的函数, 本质上就是函数内部和函数外部连接的桥梁
function foo(params){
  var a = 1;
  function bar(){
    console.log(a);
  }
  return bar;
}

var res = foo();
res();

for(var i = 0; i < 10; i++){
  (function (j) {  
    setTimeout(function(){
      console.log(j);
    },j*1000);
  })(i)
}

for(var i = 0; i < 10; i++){
  setTimeout(function(){
    console.log(i);
  },i*1000);
}
// 继承 
class Point(){
}

class ColorPoint extends Point {
  constructor(...args){
    super(...args);
  }
} 
// 使用原型链
function Parent(){
  this.name = 'lisa'
}

Parent.prototype = {
  aa: function(){
    return this.name;
  },
  bb: function(){
    return '123'
  },
  cc: function(){
    this.name = 'cc';
  }
}

let child = new Parent();
console.log(child.aa());
console.log(child.cc());
console.log(child.aa());

function Parent() {
  this.name = 'parent1';
  this.play = [1, 2, 3]
}
function Child() {
  this.type = 'child2';
}
Child.prototype = new Parent();
let child = new Child();
console.log(child.name)


// this ------------ remember


// 事件模型  ------------ remember

// 事件循环 remember
/* 
js 单线程 解决阻塞问题，引入事件循环机制

同步任务
异步任务

同步任务进入主线程，即主执行栈，异步任务进入任务队列，主线程内的任务执行完毕为空，
会去任务队列读取对应的任务，推入主线程执行。上述过程的不断重复就是事件循环

*/

// 垃圾回收  remember
/* 
标记清除
垃圾回收程序运行的时候，会标记内存中存储的所有变量。然后，它会将所有在上下文中的变量，以及被在上下文中的变量引用的变量的标记去掉
在此之后再被加上标记的变量就是待删除的了，原因是任何在上下文中的变量都访问不到它们了
垃圾回收程序做一次内存清理，销毁带标记的所有值并收回它们的内存


引用计数 
语言引擎有一张"引用表"，保存了内存里面所有的资源（通常是各种值）的引用次数。如果一个值的引用次数是0，就表示这个值不再用到了，
因此可以将这块内存释放
*/

// 生命周期
/* 

// 实现_init初始化方法
Vue.prototype._init = function (options?: Object) {
  const vm: Component = this
  // a uid
  vm._uid = uid++

  // a flag to avoid this being observed
  vm._isVue = true

  // 1.合并选项
  // merge options
  if (options && options._isComponent) {
    initInternalComponent(vm, options)
  } else {
    vm.$options = mergeOptions(
      resolveConstructorOptions(vm.constructor),
      options || {},
      vm
    )
  }
  if (process.env.NODE_ENV !== 'production') {
    initProxy(vm)
  } else {
    vm._renderProxy = vm
  }
  // expose real self

  // 初始化核心逻辑
  vm._self = vm
  initLifecycle(vm) // $parent/$root/...
  initEvents(vm) // 自定义事件监听
  initRender(vm) // $slots/$createElement
  callHook(vm, 'beforeCreate') 
  initInjections(vm) // resolve injections before data/props
  initState(vm) // props/methods/data/computed/watch
  initProvide(vm) // resolve provide after data/props
  callHook(vm, 'created')

  // 当设置了el选项时，自动调用$mount
  if (vm.$options.el) {
    vm.$mount(vm.$options.el)
  }
}

1、new vue(); 合并传进来的配置参数，初始化生命周期、事件中心，props/methods/data/computed/watch 等等

2、beforeCreate 
进行数据初始化，会定义data数据，方法以及事件

3、created 能够拿到 data下的数据以及methods下的方法
判断当前是否有el参数(这里为什么需要判断，是因为我们后面的操作是会依赖这个el的，后面会详细说)，
如果有，我们再看是否有template参数。如果没有el，那么我们会等待调用$mount，

确保有了el后，继续往下走，判断当有template参数时，我们会选择去将template模板转换成render函数
如果没有template，那么我们就会直接将获取到的el（也就是我们常见的#app，#app里面可能还会有其他标签）编译成templae, 
然后在将这个template转换成render函数。

4、beforeMount
beforeMount结束后，render函数, 将vnode渲染为真实dom，会将渲染出来的真实dom替换掉原来的vm.$el
然后再将替换后的$el append到我们的页面内。

5、mounted
可以获取$el，可以操作dom的，因为这个时候dom已经渲染完成了。

6、状态数据发生变化 触发beforeUpdate，
beforeUpdate调用之后，我们又会重新生成一个新的虚拟Vnode，
然后会拿这个最新的Vnode和原来的Vnode去做比较，得到最新的vnode，
从而更新render函数中的最新数据，再将更新后的render函数渲染成真实dom。也就完成了我们的数据更新

7、updated
updated里面也可以操作dom，并拿到最新更新后的dom
mouted和updated的执行，并不会等待所有子组件都被挂载完成后再执行，
所以如果你希望所有视图都更新完毕后再做些什么事情，那么你最好在mouted或者updated中加一个$nextTick

8、beforeDestroy 实例销毁前，还可以操作实例

之后 会做一系列的销毁动作，解除各种数据引用，移除事件监听，删除组件_watcher，删除子实例，删除自身self等。
同时将实例属性_isDestroyed置为true

9、销毁完成后，再执行destroyed


*/

// call 实现
Function.prototype.myCall = function(context){
  if(typeof this !== "function"){
    throw new TypeError('not function');
  }
  context = context || window;
  context.fn = this;
  let arg = [...arguments].slice(1);
  let result = context.fn(...arg);
  delete context.fn
  return result;
} 
// apply实现
Function.prototype.myApply = function(context){
   if(typeof this !='function'){
     throw new TypeError('not function')
   }
   context = context || window;
   context.fn = this;
   let arg = arguments[1];
   let result;
   if(arg){
     result = context.fn(...arg)
   }else {
     result = context.fn();
   }
   delete context.fn;
   return result;
}

// bind 实现
var key = "windowK";
var obj = {
    key : "objK"
}
function fn(name,age){
    console.log("name="+name+" ; age="+age+" ; this.key="+this.key);
}
//bind模拟实现
Function.prototype.myBind = function(context){
  if(typeof this !== "function"){
    throw new TypeError("not function");
  }
  let args = [...argments].slice(1);
  let that = this;
  return function(){
    that.apply(context, args.concat([...arguments]));
  }
}

var bindFn = fn.myBind(obj,1,2);
console.log(bindFn);
console.log(bindFn("Lucy",20))


// 排序
// 快速排序
// 简单实现 占用额外内存
let quickSort = (nums) => {
  if(nums.length <= 1) return nums;
  let left = [];
  let right = [];
  let pivotIndex = Math.floor(nums.length/2);
  let pivotValue = nums.splice(pivotIndex,1)[0]; // 挖掉pivotValue
  nums.forEach((el, i) => {
    if(el > pivotValue){
      right.push(el);
    }else{
      left.push(el);
    }
  });
  return quickSort(left).concat(pivotValue,quickSort(right));
}


function swap(arr,i,j){
  [arr[i],arr[j]] = [arr[j],arr[i]];
}

function partition(nums,left,right){
  let pivot = nums[left];
  let start = left;
  while(left < right){
    while(left < right && nums[right] >= pivot){
      right--;
    }
    while(left < right && nums[left] <= pivot){
      left++;
    }
    if(left>=right) break;
    swap(nums,left,right);
  }
  swap(nums,start,left);
  return left;
}

function quickSort(nums,left,right){
  if(left<right){
    let index = partition(nums,left,right);
    quickSort(nums,left,index-1);
    quickSort(nums,index+1,right);
    return nums;
  }
}

function sortArray(nums){
  if(nums.length < 2) return nums;
  return quickSort(nums,0,nums.length-1);
}

// 冒泡排序
 function sortArray(nums){
  for(let i = nums.length - 1;i>=0;i--){
    for(let j=0;j<i;j++){
      if(nums[j]>nums[j+1]){
        [nums[j],nums[j+1]]=[nums[j+1],nums[j]];
      }
    }
  }
  return nums;
}



// 实现一个new

function myNew(construc,...args){
  const obj = Object.create(construc.prototype);
  const result = construc.apply(obj,args);
  return result instanceof Object ? result : obj;
} 

// 使用的例子：
function Person(name, age){
	this.name = name;
	this.age = age;
  return null
}
const person1 = myNew(Person, 'Tom', 20)
console.log(person1)  // Person {name: "Tom", age: 20}
