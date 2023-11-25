---
title: 题解 AT_pakencamp_2020_day1_c 皆勤賞
date: 2023-06-16 13:29:03
categories: 洛谷题解
tags: [OI, 题解]
---
## 思路

Python 中有一种变量类型叫做字典，与 C++ 中的 map 非常相似。字典类型有一个特点：**对于一个键 key，都有其对应的值 value**。这就说明字典就如同一个花名册一样，一个名字对应一个信息。

这道题循环即可。但为了优化节省时间，我们只需要把第一天输入的名字存入字典中即可，因为后面输入的不可能获得全勤奖。而这就需要一个函数叫 `get`。

```python
dic.get(key[,value])
```

这段代码的含义是说在这个叫做 `dic` 的字典中寻找这样一个键 `key`。如果你设置了这样的一个值 `value`，那么如果无法找到这样的键 `key` 时就会返回这个 `value`。

## AC 代码

```python
n = int(input())
p = int(input())
p1 = p
a = input().split(" ")
a1 = a
dic = {}
ans = 0

for i in range(p):
    dic[a[i]] = 1

for i in range(n-1):
    p = int(input())
    a = input().split(" ")
    for j in range(p):
        if dic.get(a[j],False):
            dic[a[j]] += 1
            
for i in range(p1):
    if(dic[a1[i]]==n):
        ans += 1
        
print(ans)
```

[AC 记录](https://www.luogu.com.cn/record/112775224)