---
title: 题解 P9254 [PA 2022] Liczenie punktów
date: 2023-04-27 18:08:52
categories: 洛谷题解
tags: [OI, 题解]
---
[题目传送门](https://www.luogu.com.cn/problem/P9254)

## 思路

盲猜题目暴力不会超时，结果还真就是……

我们可以先算出它的周期 $\frac{10}{n}$，然后每次取出每个长度为一个周期的子字符串，再在这个长度为一个周期的字符串判断是否出现了 `N`。我们可以设置一个标记 `flag`，将其初始设置为 `true`。如果有 `N` 则把标记设置为 `false`，这时总数就不需要加 $1$。反之，如果这个子串中的所有字符都为 `T`，则 `sum++`。

## AC 代码

```cpp
#include<bits/stdc++.h>
using namespace std;

bool pd(string x){
    if(x=="N")	return 0;
    else	return 1;
}

int main(){
    int n,sum=0,t;
    string s,a;
    cin >> n >> s;
    t = n/10;
    for(int i=0;i<=n/t-1;i++){
    	bool flag=true;
    	a = s.substr(i*t,t);
    	for(int j=0;j<=t-1;j++)	if(pd(a.substr(j,1))==false)	flag=false;
		if(flag)	sum++;
	}
    cout << sum;
    return 0;
}
```

[AC 记录](https://www.luogu.com.cn/record/109037474)