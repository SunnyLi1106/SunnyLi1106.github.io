---
title: 题解 P9810 [CCC 2015 S1] Zero That Out
date: 2023-10-25 22:57:10
categories: 洛谷题解
tags: [OI, 题解]
---
[题目传送门](https://www.luogu.com.cn/problem/p9810)

# 思路

这种题，直接 Python 模拟即可。声明一个列表 `a`，如果输入 `t` 等于 $0$，那么删除 `a` 的最后一个元素，即进行 `a.pop()` 操作，否则添加该元素，即 `a.append(t)`。

# AC 代码

```python
a = []
k = int(input())
for i in range(k):
    t = int(input())
    if(t==0):
        a.pop()
    else:
        a.append(t)
print(sum(a))
```