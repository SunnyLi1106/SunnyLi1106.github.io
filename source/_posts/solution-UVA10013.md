---
title: 题解UVA10013 Super long sums
date: 2023-06-14 13:41:48
categories: 洛谷题解
tags: [OI, 题解]
---
[题目传送门](https://www.luogu.com.cn/problem/UVA10013)

## 思路

我们可以先用数组存起来每一组数据，接着倒序从个位依次向上加起来。这里需要注意几个点：

1. 高精度不要使用 `string`，会 TLE 的。

2. 题目样例输出是有问题的，输出的数之间应该也有空行。

3. 记得计算每一位的时候要加上进位而不是直接赋值。

## AC 代码

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int T,f;
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    cin >> T;
    for(int i=1;i<=T;i++){
        cin >> f;
        int a[1000010]={0},b[1000010]={0},ans[1000010]={0};
        for(int j=f;j>=1;j--){
            cin >> a[j] >> b[j];
        }
        for(int j=1;j<=f;j++){
            ans[j] += a[j]+b[j];
            ans[j+1] = ans[j]/10;
            ans[j] %= 10;
        }
        if(ans[f+1]==1) cout << 1;
        for(int j=f;j>=1;j--)   cout << ans[j];
        if(i==T)    cout << endl;
        else    cout << endl << endl;
    }
    return 0;
}
```

[AC 记录](https://www.luogu.com.cn/record/112675660)