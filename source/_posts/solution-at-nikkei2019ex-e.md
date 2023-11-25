---
title: 题解 AT_nikkei2019ex_e コラッツ問題
date: 2023-06-25 10:39:22
categories: 洛谷题解
tags: [OI, 题解]
---
又来刷水题了，[题目传送门](https://www.luogu.com.cn/problem/AT_nikkei2019ex_e)。

## 思路

看这个递推函数 $f(x)$，它像什么？

角谷猜想是说给定一个正整数 $x_i$，进行如下操作：

$$
\begin{cases}
x_{i+1} = x_i\div2\quad x_i\rm\ is\ even\\
x_{i+1} = 3x_i+1 \quad x_i \rm\ is\ odd\\
\end{cases}
$$

再回到题目，像不像角谷猜想？事实上，这个函数 $f(x)$ 是角谷猜想所需要的步数。

所以我们就可以得到以下的式子：

$$
f(x)-1=
\begin{cases}
f(x/2)\qquad x\rm\ is\ even\\
f(3x+1) \quad x \rm\ is\ odd\\
\end{cases}
$$

那么我们可以反向递推呢？当然可以。

我们已经知道了 $f(1789997546303)=1000$，我们可以运用它类似角谷猜想的性质反向递推。

## AC 代码

```cpp
#include<bits/stdc++.h>
#define int long long
using namespace std;

signed main(){
    int p,arr[1005]={0};
    arr[1000]=1789997546303;
	cin >> p;
	for(int i=999;i>=p;i--){
		if(arr[i+1]%2==1)	arr[i]=arr[i+1]*3+1;
		else	arr[i]=arr[i+1]/2;
	}
	cout << arr[p] << endl;
	return 0;
}
```

[AC 记录](https://www.luogu.com.cn/record/113290627)