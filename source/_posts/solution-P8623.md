---
title: 题解 P8623 [蓝桥杯 2015 省 B] 移动距离
date: 2023-04-22 15:21:27
categories: 洛谷题解
tags: [OI, 题解]
---
[题目传送门](https://www.luogu.com.cn/problem/p8623)

## 思路

一道小学奥数题

小学奥数管这个叫做数表。这道题是数表中比较简单的一种。很容易看得出来，这是一个周期为 $2w$ 的蛇形数表。

易得纵坐标为 $\frac{n}{2}$，但是当 $n$ 除以 $w$ 有余数时，需要加 $1$，因为这属于这个周期的后半部分，而后半部分要加一行。

横坐标只需要求 $n$ 除以 $2w$ 的余数，如果这个数大于 $w$，则它的横坐标应为 $w-(x-w)+1$。

## AC 代码

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

ll w,n,m;
ll xx1,xx2,yy1,yy2;

int main(){
    cin >> w >> n >> m;
    xx1 = n%(w*2);
    if(xx1>w)    xx1=w-(xx1-w)+1;
    yy1 = n/w;
    if(n%w>0)   yy1++;

    xx2 = m%(w*2);
    if(xx2>w)    xx2=w-(xx2-w)+1;
    yy2 = m/w;
    if(m%w>0)   yy2++;

    cout << abs(xx1-xx2)+abs(yy1-yy2);
    return 0;
}
```
