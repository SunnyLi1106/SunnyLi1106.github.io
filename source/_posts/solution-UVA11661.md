---
title: 题解 UVA11661 Burger Time?
date: 2023-06-16 11:35:21
categories: 洛谷题解
tags: [OI, 题解]
---
## 题目大意

有一个字符串，由 `.`，`R`，`D`，`Z` 组成。如果字符串中有 `Z` 则输出 `0`，否则输出所以 `R` 与 `D` 之间距离最小的距离数值。

## 思路

判断字符串中有没有 `Z` 是很容易的，重要是找到 `R` 与 `D` 距离最小的数值。

我们可以模拟输入数组，从头开始循环。如果输入的是 `R` 则设置 `rpos` 为当前所在位置；如果输入的是 `D` 则设置 `dpos` 为当前所在位置。相邻的两个 `R` 和 `D` 的距离必然是相对最小的，故设置此时的距离 `t=abs(rpos-dpos)`。最后在判断之前最小距离 `dis` 与此时的 `t` 最小值后赋值即可。

## AC 代码

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n;
    string s;
    while(true){
        int dis=2000005,dpos=-1,rpos=-1,t;
        bool df=false,rf=false;
        cin >> n;
        if(n==0)    break;
        cin >> s;
        if(s.find("Z")!=-1) {cout << 0 << endl;continue;}
        for(int i=0;i<=n-1;i++){
            if(s[i]=='R')   {rpos=i;rf=true;}
            else if(s[i]=='D')  {dpos=i;df=true;}
            t = abs(rpos-dpos);
            if(t<dis and rf and df)   dis = t;
        }
        cout << dis << endl;
    }
    return 0;
}
```