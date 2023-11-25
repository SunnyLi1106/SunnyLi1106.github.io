---
title: 题解 CF742B Arpa’s obvious problem and Mehrdad’s terrible solution
date: 2023-06-15 12:19:49
categories: 洛谷题解
tags: [OI, 题解]
---
## 思路

题目要求对于 $\forall i,j$ 有多少个 $a_i\oplus a_j=x$。

那么我们需要知道异或最重要的一个性质：

$$a\oplus b=c\Rightarrow a\oplus c=b$$

那么每输入一个数字，我们可以判断与前面输入过的数字是否满足 $a_i\oplus a_j=x$ 即可。若满足则 `sum+=a[t^x]` 即可。注意开 long long 哦。

## AC 代码

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

int main(){
    ll n,x,t,a[100005]={0},sum=0;
    cin >> n >> x;
    for(int i=1;i<=n;i++){
        cin >> t;
        sum += a[t^x];
        a[t]++;
    }
    cout << sum;
    return 0;
}
```