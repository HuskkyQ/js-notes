/*
 * @Descripttion: 
 * @version: 
 * @Author: wangsf
 * @Date: 2021-05-21 20:42:45
 * @LastEditors: wangsf
 * @LastEditTime: 2021-05-22 13:29:56
 */
Object.myEntries = function (obj) {
  var arr = [];
  if(Object.prototype.toString.call(obj) === '[object Object]') {
    for(var k in obj) {
      var item = [k, obj[k]];
      arr.push(item)
    }
  }
  return arr;
}

Object.myFromEntries = function (iter) {
  var _obj = {};
  for(var item of iter) {
    _obj[item[0]] = item[1]
  }
  return _obj
}


ob = {
  a: 1,
  b: 2
}

const r1 = Object.entries(ob);
const r2 = Object.myEntries(ob);

console.log(r1)
console.log(r2)

const n1 = Object.myFromEntries(r2)
console.log(n1)

// const r3 = Object.fromEntries(r2)
// console.log(r3)

// const m1 = new Map(r1);
// // const m2 = new Map(r2);

// const r4 = Object.fromEntries(m1);
// console.log(r4)

// console.log(m1.size)
// console.log(m2)

// const sets = new Set()
// sets.add(['s'])
// sets.add([1, 'sd'])
// sets.add([Symbol(1), 2])

// console.log(sets)
// const l = new Map(sets)
// console.log(l)