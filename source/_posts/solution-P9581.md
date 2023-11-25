---
title: 题解 P9581 宝箱
date: 2023-08-26 23:22:46
categories: 洛谷题解
tags: [OI, 题解]
---
比赛的时候看电影去了，回来的时候发现有比赛，只能写一篇题解来补偿一下了。

# 思路

第一眼先看样例。

观察样例，很容易发现，结果总是绝对值小的数的绝对值的两倍加上绝对值大的绝对值的值。

举个栗子：样例三的答案就是 $|51|\times2+|-154|=256$。

其实也很好理解，因为样例中的三个例子你会发现他会先去距离小的地方，之后再走到另外一个点。

比如说两个点的位置分别为 $a,b$，其中 $a<0,b>0$，如果你先去 $a$，则距离为 $a+a+b=2a+b$，如果先去 $b$，则距离为 $b+a+b=a+2b$，两者都有共同的 $a+b$，只需要比较 $a,b$ 的大小后选择小的即可。

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int a,b; cin >> a >> b;
    if(abs(a)>abs(b))   cout << abs(b)*2+abs(a);
    else if(abs(a)<abs(b))    cout << abs(a)*2+abs(b);
    else if(abs(a)==abs(b)) cout << 3*abs(a);
    return 0;
}
```

代码一交上去，呀，WA on #3 和 #7，但这是为什么呢？

观察三个样例，你会发现它们都是一正一负，当然包括有一个在零点的情况。所以上面我们考虑的情况是他一点要过原点后去到另一个地方。但是如果两个点同时位于同一个半轴，那么这样走就属于绕路，实际上可以直接向远的那个走去，可以顺路，故在这种情况下，答案应该为 $\max(|a|,|b|)$。

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int a,b; cin >> a >> b;
    if((a>=0 and b<=0)or(a<=b and b>=0)){
        if(abs(a)>abs(b))   cout << abs(b)*2+abs(a);
        else    cout << abs(a)*2+abs(b);
    }
    else{
        cout << max(abs(a),abs(b));
    }
    return 0;
}
```

但是这样还是太麻烦了，不符合 T1 一行代码 AC 的性质（逃），所以我们可以继续简化。

我们可以假设我们先从 $0$ 到 $a$，那么距离为 $|a|$，之后再从 $a$ 到 $b$，即 $|a-b|$。

如果我们先从 $0$ 到 $b$，那么距离为 $|b|$，之后再从 $b$ 到 $a$，即 $|a-b|$。

所以答案可以简化为 $\min(|a|+|a-b|,|b|+|a-b|)$。

# AC代码

C++ 代码：

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int a,b; cin >> a >> b;
    cout << min(abs(a)+abs(a-b),abs(b)+abs(a-b));
    return 0;
}
```

Python 代码：

```python
a,b = map(int,input().split(" "))
print(min(abs(a)+abs(b-a),abs(b)+abs(a-b)))
```

总结一下，这是一道很水的题目，但是我们的做法是越来越简单的。因此，在遇到新的一题时，我们应该多想想，想想更加简便的做法，或者层层递进，或许可以发现另一片新世界。

~~不要想太多，我只是在想办法掩饰我比较蠢的事实而已。~~