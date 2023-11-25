---
title: 题解 UVA855 Lunch in Grid City
date: 2023-06-14 12:19:42
categories: 洛谷题解
tags: [OI, 题解]
---
## 思路

题目要求找到的点距离其他的点距离和最小。这个点的坐标有两个维度，我们可以先考虑一维的情况。

对于一维的情况，假设有这样一个已经排序的共线点集 $\{a_n\}$，那么我们要找到一个点 $p$，使得下式最小：

$$\sum_{i=1}^{n}|p-a_i|$$

那么我们肯定要找中间的点，即 $a_{\lceil \frac{n}{2}\rceil}$。那么二维的也同理啦。

## AC 代码

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int T,n,m,s;
	scanf("%d",&T);
	for(int i=1;i<=T;i++){
	    int x[100005],y[100005];
		scanf("%d %d %d",&n,&m,&s);
		for(int i=1;i<=s;i++)	scanf("%d %d",&x[i],&y[i]);
		sort(x+1,x+s+1); sort(y+1,y+s+1);
		cout << "(Street: " << x[(s+1)/2] << ", Avenue: " << y[(s+1)/2] << ")" << endl;
	}
	return 0;
}
```