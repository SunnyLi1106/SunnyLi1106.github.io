---
title: 题解 P9203 时效「月岩笠的诅咒」
date: 2023-04-22 15:19:22
categories: 洛谷题解
tags: [OI, 题解]
---
[题目传送门](https://www.luogu.com.cn/problem/P9203)

看到没有人发 Python 题解，本蒟蒻就来发一篇

## 思路

首先这道题可以通过操作使得 $a\gets a+1$ ， $b\gets b+1$ ， 故不论整数部分是多少，都能通过变换得到相同的整数部分。我们只需要对比小数部分是否相同即可。

Python 以不用写高精度出名，但是遇到非常小的数字（比如题目中的 $12$ 位小数），也会出现一些误差。

![示意图](https://cdn.jsdelivr.net/gh/SunnyLi1106/PicGoCDN/img/solution-P9203/1.png)

既然 Python 的 input() 是字符串形式，我们可以用字符串遍历，然后找到小数点的位置，对比小数点之后的数字是否相同即可。同理， C++ 也可以这么做。

## AC 代码

```python
#python代码
a,b = input().split()
arra,arrb = [],[]
for i in a:
    arra.append(i)
for i in b:
    arrb.append(i)
arra = arra[arra.index(".")+1:len(arra)]
arrb = arrb[arrb.index(".")+1:len(arrb)]
flag = False
for i in range(len(arra)):
    if(arra[i]!=arrb[i]):
        flag = True
        break
if(flag==True):  print("NO")
else:   print("YES")

```


------------

```cpp
//c++代码
#include<bits/stdc++.h>
using namespace std;

int main(){
    string a,b;
    cin >> a >> b;
    a = a.substr(a.find(".")+1);
    b = b.substr(b.find(".")+1);
    if(a==b)    cout << "YES";
    else    cout << "NO";
    return 0;
}
```

[Python AC 记录](https://www.luogu.com.cn/record/107708276)

[C++ AC 记录](https://www.luogu.com.cn/record/107996270)