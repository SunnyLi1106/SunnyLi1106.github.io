---
title: 题解 P8627 [蓝桥杯 2015 省 A] 饮料换购
date: 2023-04-22 15:20:45
categories: 洛谷题解
tags: [OI, 题解]
---
[题目传送门](https://www.luogu.com.cn/problem/P8627)

## 思路

仔细看 $n$ 的范围，发现 $0<n<10000$。很明显这道题可以模拟，不需要找规律。

小明每次喝一瓶，瓶盖加一个，饮料减一瓶。如果瓶盖有 $3$ 个，加一瓶饮料，然后瓶盖数归零。

## AC 代码

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,sum=0,cnt=0;
    cin >> n;
    while(n!=0){
        n--;
        sum++;
        cnt++;
        if(cnt==3)  {n++;cnt=0;}
    }
    cout << sum;
    return 0;
}
```

[AC 记录](https://www.luogu.com.cn/record/108515372)