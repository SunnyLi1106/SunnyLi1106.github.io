---
title: 题解 P9222 「PEOI Rd1」Morning or Afternoon
date: 2023-04-22 15:20:05
categories: 洛谷题解
tags: [OI, 题解]
---
[题目传送门](https://www.luogu.com.cn/problem/P9222)

看到没有人写 Python 题解，蒟蒻又来写 Python 题解了

## 思路

如果开始时间的小时部分比结束时间的小时部分大，很容易得出结束时间肯定是在下午。但是如果小时部分是 $12$，你可能觉得要写一个特判，但是如果你按照数码时钟的样子把他改成 $0$，很明显也符合上述判断。

## AC 代码

```python
n = int(input())
for i in range(n):
    arr = input().split()
    a1,b1 = arr[0].split(":")
    a2,b2 = arr[1].split(":")
    a1,b1,a2,b2 = int(a1),int(b1),int(a2),int(b2)
    if(a1==12): a1=0
    if(a2==12): a2=0
    if (a1>a2 or (a1==a2 and b1>b2)): print("Yes")
    else:   print("No")
```

点个赞再走呗 qwq