---
title: 题解 UVA10101 Bangla Numbers
date: 2023-06-15 13:21:34
categories: 洛谷题解
tags: [OI, 题解]
---
## 思路

这题可能是我写过最崩溃的一道题了……

这道题本质上就是相当于给数字分段，分成个十百千位的形式。

刚开始用 string 写的，想法是从第一位暴力枚举到第十五位。但是当我用 [uDebug](https://www.udebug.com/UVa/10101) 检查输出的时候发现有如下几个问题：

1. 如果出现输出 $0$ 的情况，对于暴力枚举可能不太友好。

2. 洛谷 UVA 的样例输出一般都不太友好，如果你看 uDebug 的话会发现前面有空位的。

所以我的推荐是使用 long long 类型，这样的话分段可以直接除，就不需要一直写 `s.substr()` 了。

如果数字大于 $7$ 为，我们可以把它分开之后分别输出。

## AC 代码

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

void PrintPeriod(ll a){
	if(a>=10000000){
		PrintPeriod(a/10000000);
		cout << " kuti";
		PrintPeriod(a%10000000);
	}
    else{
		if(a>=100000)	cout << " " << (a/100000) << " lakh";
		a %= 100000LL;
		if(a>=1000)	cout << " " << (a/1000) << " hajar";
		a %= 1000LL;
		if(a>=100)	cout << " " << (a/100) << " shata";
		a %= 100;
		if(a>0)	cout << " " << a;
	}
}

int main(){
	int t=1;
	ll n;
	while(cin >> n){
		printf("%4d.",t++);
		PrintPeriod(n);
		if(n==0)
			printf(" 0");
		cout << endl;
	}
	return 0;
}
```

[AC 记录](https://www.luogu.com.cn/record/112725760)