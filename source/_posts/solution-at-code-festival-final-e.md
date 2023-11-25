---
title: 题解 AT_code_festival_final_e 常ならずグラフ
date: 2023-08-03 18:33:34
categories: 洛谷题解
tags: [OI, 题解]
---
## 思路

我们直接从开始暴力枚举，每三个算一次。

如果这三个不构成波浪，那么我们就需要将答案减一，即剔除掉这个数。这个时候，我们就需要把这前一个数给赋值到这个数，这样的话就可以与剔除的前一个数进行比较。

## AC 代码

（人生苦短，我用 Python）

```python
n = int(input())
a = list(map(int,input().split(" ")))
ans = n
for i in range(2,n):
    if ((a[i-1]>a[i] and a[i-1]>a[i-2]) or (a[i-1]<a[i] and a[i-1]<a[i-2]))==False:
        ans -= 1
        a[i-1]=a[i-2]
if ans<3:
    print("0")
else:
    print(ans)
```