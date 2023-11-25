---
title: 题解 UVA880 Cantor Fractions
date: 2023-06-13 13:17:46
categories: 洛谷题解
tags: [OI, 题解]
---
## 思路

小学就学过的找规律题目，重点是要记得二分。

很明显，第 $i$ 列的分母都为 $i$，第 $j$ 行的分子为 $j-i+1$。

## AC 代码

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

inline ll bin(ll n){
	ll l=1,r=n;
	while (l<r){
		ll mid = (l+r)/2;
		if (mid*(mid+1)/2>=n)	r = mid;
		else	l = mid+1;
	}
	return l;
}

int main(){
    ll n,r,s;
    while(cin >> n){
        if(n==1)	cout << "1/1" << endl;
		else if(n==2)	cout << "2/1" << endl;
		else{
		    r = bin(n);
		    s = n-r*(r-1)/2;
		    cout << r-s+1 << "/" << s << endl;
		}
    }
    return 0;
}
```