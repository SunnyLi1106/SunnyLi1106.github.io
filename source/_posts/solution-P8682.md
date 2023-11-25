---
title: 题解 P8682 [蓝桥杯 2019 省 B] 等差数列
date: 2023-04-22 15:19:07
categories: 洛谷题解
tags: [OI, 题解]
---
## 思路

如果你随便试几个数，你就会发现这个等差数列的公差其实就是这个数列里从小到大两个数之差的最大公因数。

举个栗子： $3\quad9\quad7\quad1\quad15$

对他进行排序 $1\quad3\quad7\quad9\quad15$

求相邻两数之差分别为 $2\quad4\quad2\quad6$

计算易得最大公因数为 $2$

最后再用我们小学二年级就学过的等差数列项数公式 

$$s=\frac{(b-a)}{d}+1$$ 

其中 $s$ 为项数， $a$ 为首项， $b$ 为末项， $d$ 为公差

## AC 代码

```cpp
#include <bits/stdc++.h>
using namespace std;

int n,a[100005]={0},d,dt;

int gcd(int a,int b){
    if(a==b) return a;
    if(a>b) return gcd(a-b,b);
    if(a<b) return gcd(b-a,a);
}

int main(){
    cin >> n;
    for(int i=1;i<=n;i++){
    	cin >> a[i];
	}
	sort(a+1,a+n+1);
	d = a[2]-a[1];
	for(int i=2;i<=n;i++){
		dt = a[i]-a[i-1];
		d = gcd(d,dt);
	}
	if(d==0)	cout << n;
	else	cout << (a[n]-a[1])/d+1;
    return 0;
}

```

[AC 记录](https://www.luogu.com.cn/record/107053773)