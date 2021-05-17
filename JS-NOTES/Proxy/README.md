<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangsf
 * @Date: 2021-05-17 19:21:03
 * @LastEditors: wangsf
 * @LastEditTime: 2021-05-17 20:20:30
-->
# Proxy

### 定于：Proxy对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义(MDN).
(简言之，一个Proxy对象包装另一个对象并拦截诸如读取/写入属性和其他操作，可以选择自行处理他们，或者透明地允许该对象处理他们)

#### 语法
  ```
    let proxy = new Proxy(target, handler);
  ```
  1. target ———— 是要包装的对象，可以是任何东西，包括函数。
  2. handler ———— 代理配置：带有"钩子"的对象，比如`get`钩子用于读取`target`属性，`set`钩子写入`target`属性等等。

#### 没有任何钩子的代理：
  ```
  let target = {};
  let proxy = new Proxy(target, {}); // 空的handler对象

  proxy.test = 5; // 写入Proxy对象

  console.log(proxy.test); // 5,可以在Proxy对象上读取
  console.log(target.test); // 5, 也可以在target上读取，说明转发成功了

  for(let key in proxy) {
    console.log(key); // test, 迭代proxy会从target返回对应的值
  }
  ```
  由于没有钩子，所有对proxy的操作都直接转发给target对象了。
  
#### get/set 读取时的处理
  get:
  ```
    let numbers = [1, 2, 3];

    numbers = new Proxy(numbers, {
      get(target, prop, receiver) {
        if(prop in target) {
          return target[prop];
          // return Reflect.get(target, prop, receiver)
        } else {
          return 0;
        }
      }
    })

    console.log(numbers[1]); // 2
    console.log(numbers[12]); // 0
  ```
  get:
  ```
    let dictionary = {
      'Hello': 'Hola',
      'Bye': 'Adiós'
    }
    // 希望达到如下效果
    // console.log(dictionary['Hello']); // Hola
    // console.log(dictionary['Well']); // Well 不是 undefined

    dictionary = new Proxy(dictionary, {
      get(target, prop, receiver) {
        if(prop in target) {
          return target[prop];
          // return Reflect.get(target, prop, receiver);
        } else {
          return prop;
        }
      }
    })

    console.log(dictionary['Hello'])
    console.log(dictionary['Well'])
  ```
  set:
  ```
    let numbers = [];

    numbers = new Proxy(numbers, {
      set(target, prop, newVal, receiver) {
        if(typeof newVal === 'number') {
          target[prop] = newVal;
          // Reflect.set(target, prop, newVal, receiver)
          return true; // 操作成功返回true
        } else {
          return false; // 操作失败返回false 并触发TypeError
        }
      }
    })

    numbers.push(1); // 添加成功
    numbers.push(2); // 添加成功
    // numbers.push('age'); // 报错 TypeError: 'set' on proxy: trap returned falsish
    console.log(numbers); //[1, 2]
    console.log(numbers.length); // 2
  ```
