---
title: 题解 AT_past202004_e 順列
date: 2023-06-16 11:17:53
categories: 洛谷题解
tags: [OI, 题解]
---
## 思路

按照题意模拟即可。

对于每次按按钮，我们只需要设置一个新变量并且比较即可。

需要注意的有以下几点：

1. 结果 $ans$ 的值需要加 $1$，你可以将其初值设置为 $1$。

2. $ans$ 需要在每次循环后重新赋初值。

3. 你需要每次循环设定一个新变量 `b=a[i]`，这样的话就不会影响数组原来的样子。

4. 每次输出之后要加空格而不是换行。

## AC 代码

```cpp
#include<bits/stdc++.h>
using namespace std;
int n,a[105];
int main(){
	cin >> n;
	for(int i=1;i<=n;i++)	cin >> a[i];
	for(int i=1;i<=n;i++){
		int ans=1,b=a[i];
		while(b!=i) {b=a[b];ans++;}
		cout << ans << " ";
	}
	return 0;
}
```