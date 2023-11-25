---
title: 题解 UVA10784 Diagonal
date: 2023-06-15 13:45:06
categories: 洛谷题解
tags: [OI, 题解]
---
蒟蒻又来水题解啦！

## 思路

题目大意如下：

**给定你一个数 $N$，求最小的 $n$ 使得 $n$ 边形的对角线总数不小于 $N$。**

首先我们需要知道一个正 $N$ 边形最多有几个对角线。

对于一个正 $N$ 边形，我们先选择一个点，有 $N$ 种选法。此时要找到一个对角线，不能取这个点，也不能取相邻的两个点，则还有 $N-3$ 种选法。又由于可能选重复，则需要将结果除以二。所以我们得到了如下结论：

**一个正 $N$ 边形有 $\frac{N(N-3)}{2}$ 个对角线。**

那么相当于解一个二次方程：

$$
\begin{aligned}
\frac{n(n-3)}{2} &= N \\
n^2 - 3n&=2N
\end{aligned}
$$

带入二次方程的求根公式，舍去负数根就可以了。记得开 long long 哦。

$$x_{1,2}=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$

## AC 代码

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

int main(){
    ll n,cnt=1,ans;
    while(cin >> n){
        if(n==0)    return 0;
        ans=(3+sqrt(8*n+9))/2;
        if(ans*(ans-3)/2 < n)    ans++;
        cout << "Case " << cnt << ": " << ans << endl;
        cnt++;
    }
}
```