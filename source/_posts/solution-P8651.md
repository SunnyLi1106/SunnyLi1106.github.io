---
title: 题解 P8651 [蓝桥杯 2017 省 B] 日期问题
date: 2023-04-22 15:22:04
categories: 洛谷题解
tags: [OI, 题解]
---
[题目传送门](https://www.luogu.com.cn/problem/P8651)

蒟蒻又来交 Python 题解啦。

## 思路

年份从 $1960$ 到 $2059$，可以三重循环枚举，肯定不会超时。

主要是有几点很坑或者很麻烦：

1. 判断闰年，$2$ 月要写判断。

2. 输出要排序。

3. 前面可能要补 $0$。

4. 输入有 `/`，在 Python 中 `input().split("/")` 就可以啦。

5. 输出要带 `-`，Python 的字符串可以直接相加拼在一起。

（这就是我用 Python 的原因）

## AC 代码

```python
def isLY(x):
    return (x%4==0 and x%100!=0)or(x%400==0);

days = [0,31,28,31,30,31,30,31,31,30,31,30,31]
a,b,c = input().split("/")
a,b,c = int(a),int(b),int(c)

for i in range(1960,2060):
    if(isLY(i)):    days[2]=29;
    else:   days[2]=28;
    for j in range(1,13):
        for k in range(1,days[j]+1):
            t = i%100
            if (a==t and b==j and c==k) or (a==k and b==j and c==t) or (a==j and b==k and c==t):
                sa = str(i)
                if(j<=9):    sb = "0"+str(j)
                else:   sb = str(j)
                if(k<=9):    sc = "0"+str(k)
                else:   sc = str(k)
                print(sa+"-"+sb+"-"+sc)
```

[AC 记录](https://www.luogu.com.cn/record/108602594)

给个赞再走吧 qwq。