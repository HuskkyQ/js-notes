<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangsf
 * @Date: 2021-06-10 15:02:01
 * @LastEditors: wangsf
 * @LastEditTime: 2021-06-10 17:55:15
-->
# 计算机基础面试点

----
## 目录
1. [进程和线程有什么区别](#jump1)
2. [目录2](#jump2)

---
### <span id="jump1">
    https://www.cnblogs.com/weibanggang/p/9470364.html
    Q：进程和线程有什么区别？
    A：线程 是 进程 中执行运算的最小单位，是进程中的一个实体，
    是被系统独立调度和分派的基本单位，
    线程本身不拥有自己的系统资源，只拥有一点在运行中必不可少的资源，
    但是它可与同属一个进程的其他线程共享进程所拥有的全部资源。
    一个线程可以创建和撤销另一个线程，同一进程中的多个线程之间可以并发执行。

    好处： （1）易于调度。
          （2）提高并发性。通过线程可方便有效地实现并发性。进程可创建多个线程来执行同 一程序的不同部分。
          （3）开销少。创建线程比创建进程要快，所需开销很少。
          （4）利于充分发挥多处理器的功能。通过创建多线程进程，每个线程在一个处理器上运行，从而实现应用程序的并发性，使每个处理器都得到充分运行.

    进程：每个进程都有独立的代码和数据空间（进程上下文），进程间的切换会有较大的开销，一个进程包含1--n个线程。（进程是资源分配的最小单位）
    线程：同一类线程共享代码和数据空间，每个线程有独立的运行栈和程序计数器(PC)，线程切换开销小。（线程是cpu调度的最小单位）

  </span> 
---

### <span id="jump2">
    师父的师父sdafasssssssssssssssss
    sdafaaaaaaaaaaaaaaaaa
    师父的师父sdafasssssssssssssssss
    sdafaaaaaaaaaaaaaaaaa
    师父的师父sdafasssssssssssssssss
    sdafaaaaaaaaaaaaaaaaa
    师父的师父sdafasssssssssssssssss
    sdafaaaaaaaaaaaaaaaaa
    师父的师父sdafasssssssssssssssss
    sdafaaaaaaaaaaaaaaaaa
</span>