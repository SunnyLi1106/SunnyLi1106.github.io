---
title: 题解 AT_bcu30_2019_qual_a Bullet of Flame
date: 2023-06-15 20:46:16
categories: 洛谷题解
tags: [OI, 题解]
---
## 思路

额，一道很水的题，是暂无评定可惜了……

我们只需要循环每次输入后判断能量是否为负。如果为负，则输出目前进行的操作数减 $1$（因为这一次操作不可能打穿墙壁，需要减掉这一次）即可 `return 0;` 收官。如果全部打穿，即循环后没有结束代码，输出 $N$ 的值即可。

## AC 代码

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,p,a;
    cin >> n >> p;
    for(int i=1;i<=n;i++){
        cin >> a;
        p -= a;
        if(p<0){
            cout << i-1;
            return 0;
        }
    }
    cout << n;
    return 0;
}
```