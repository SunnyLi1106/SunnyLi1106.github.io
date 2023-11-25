---
title: 题解 P9226 糖果
date: 2023-04-22 21:07:03
categories: 洛谷题解
tags: [OI, 题解]
---
## 思路

很显然，只需要补齐一个周期减去前面不在周期里多出来的人数。如果前面恰好满一个周期，则输出周期的人数。

## AC 代码

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,k;
    cin >> n >> k;
    if(n%k==0)  cout << k;
    else    cout << k-(n%k);
    return 0;
}
```
