<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangsf
 * @Date: 2021-06-02 15:21:38
 * @LastEditors: wangsf
 * @LastEditTime: 2021-06-10 10:22:17
-->
### 接口记录
  1. 普通写法
  ```
    function printLabel(labelObj: {label: string, age: number}) {
      console.log(labelObj.label, labelObj.age);
    }

    let myObj = {
      label: 'sam',
      age: 23
    }
    printLabel(myObj); // sam  23
  ```

  2. 使用接口 interface
   ```
    interface ILabelObj {
      label: string;
      age: number
    }

    function printLabel(labelObj: ILabelObj) {
      console.log(labelObj.label, labelObj.age);
    }

    let myObj = {
      label: 'huskky',
      age: 25
    }
    printLabel(myObj); // huskky  25
   ```

   3. 可选属性
    ```
      interface ISquareConfig {
        color?: string;
        width?: number;
      }

      function createSquare(config: ISquareConfig): {color: string; area: number} {
        let newSquare = {color: 'white', area: 100}
        if(config.color) {
          newSquare.color = config.color;
        }
        if(config.width) {
          newSquare.area = config.width * config.width;
        }

        return newSquare;
      }

      let mySquare = createSquare({color: "black"});
    ```

   4. 只读属性
    ```
      interface Point {
        readonly x: number;
        readonly y: number;
      }

      let p1: Point = {
        x: 10,
        y: 20
      }
      p1.x = 5; // error!
    ```
  
   5. ReadonlyArray<T>
    ```
      let a: number[] = [1, 2, 3, 4];
      let ro: ReadonlyArray<number> = a;
      ro[0] = 12; // error!
      ro.push(5); // error!
      ro.length = 100; // error!
      a = ro; // error!
      // 不可以把ReadonlyArray赋值给普通数组，但是可以用类型断言重写
      a = ro as number[];
      // 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 
      // 做为变量使用的话用 const，若做为属性则使用readonly
    ```

   6. 函数类型:接口能够描述JavaScript中对象拥有的各种各样的外形
    ```
      interface SearchFunc {
        (source: string, subString: string): boolean;
      }
    ``` 