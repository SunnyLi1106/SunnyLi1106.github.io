---
title: 题解 P9783 [ROIR 2020 Day1] 平方
date: 2023-10-24 13:42:59
categories: 洛谷题解
tags: [OI, 题解]
---
[题目传送门](https://www.luogu.com.cn/problem/P9783)

# 过程

显然发现，当 $n\bmod4=2$ 时，不存在这样的 $x,y$。否则拆分后一定是一个奇数乘以偶数，则必有一个数不是整数。

当 $n\bmod4=0$ 时，设 $n=2a\cdot 2b$，则有 $(x+y)(x-y)=2a\cdot2b\Rightarrow x=a+b,y=a-b$。

当 $n\bmod2=1$ 时，设 $n=2k+1$，则有 $x=k+1,y=k$。

# 代码

```cpp
#include<bits/stdc++.h>
using namespace std;
int main(){
    ios::sync_with_stdio(false);
    long long n;cin>>n;
    if(n==1 or n==4){cout<<"No";return 0;}
    if(n%4==2){cout<<"No";return 0;}
    cout<<"Yes"<<endl;
    if(n%4==0){
        n/=4;long long a=2;
        while(n%a!=0)   a++;
        cout<<(a+n/a)<<" "<<(abs(a-n/a));
    }
    else{
        long long a=(n-1)/2;
        cout<<(a+1)<<" "<<(a);
    }
    return 0;
}
```