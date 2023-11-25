---
title: 题解 P9582 方格
date: 2023-08-27 01:17:49
categories: 洛谷题解
tags: [OI, 题解]
---
# 思路

既然对于 $\forall i,j,\ 1\le a_{i,j}\le9$，我们可以设置一个数组存起来这个数字，接着挨个枚举，加上相同的个数，减去本身，再减去周围相邻的即可。注意开 long long。

# AC 代码

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
ll a[2005][2005],b[11],n,m,s=0;
ll r(ll p,ll q){
    return a[p][q];
}
int main(){
    cin >> n >> m;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            cin >> a[i][j];
            b[r(i,j)]++;
        }
    }
    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            s+=(b[r(i,j)]-1);
            if(r(i,j)==r(i,j+1))s--;
            if(r(i,j)==r(i,j-1))s--;
            if(r(i,j)==r(i+1,j))s--;
            if(r(i,j)==r(i-1,j))s--;
        }
    }
    cout << s;
    return 0;
}
```
