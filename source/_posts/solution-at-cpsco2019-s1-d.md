---
title: 题解 AT_cpsco2019_s1_d Dessert Planning
date: 2023-06-15 22:22:22
categories: 洛谷题解
tags: [OI, 题解]
---
## 思路

这道题暴力肯定是过不去的，所以我们要进行优化。虽然蒟蒻不会什么矩阵快速幂，但是会找规律。

根据样例，当 $n=1$ 和 $2$ 时，方案数分别为 $8$ 和 $40$。接着我们可以写一些简陋的枚举代码计算 $n\ge3$ 时的方案数，然后你就会得到下面的结果：

- $n=1$ 时，有 $8$ 种方案。

- $n=2$ 时，有 $40$ 种方案。

- $n=3$ 时，有 $200$ 种方案。

- $n=4$ 时，有 $1000$ 种方案。

- $n=5$ 时，有 $5000$ 种方案。

- $\ldots$

所以我们得到，如果有 $n$ 天的话，就有 $8\times5^{n-1}$ 种方案。

但是这样还是不能 AC 的呢，因为你要写快速幂。这道题可以评黄。

## AC 代码

```cpp
#include<bits/stdc++.h>
#define int long long
using namespace std;
const int mod=1e9+7;

inline int fpow(int a,int b,int mod){
    int res = 1;
    while(b){
        if(b & 1)
            res = res*a%mod;
        a = a*a%mod;
        b >>= 1;
    }
    return res;
}

signed main(){
    int n;
    cin >> n;
    cout << (8*fpow(5,n-1,mod))%mod;
    return 0;
}
```

[AC 记录](https://www.luogu.com.cn/record/112761376)