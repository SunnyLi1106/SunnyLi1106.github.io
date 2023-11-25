---
title: 题解 AT_mujin_pc_2016_b ロボットアーム
date: 2023-08-03 19:25:02
categories: 洛谷题解
tags: [OI, 题解]
---
## 思路

一道计算题，小学生都会做。

这道题其实就是计算圆环的面积，其表达式为 $\pi(R^2-r^2)$，其中 $R$ 为外圆的半径，$r$ 为内圆的半径。这里 $R$ 就是机械臂能伸到最远的距离，即 $a+b+c$。$r$ 需要分类讨论：

1. 如果 $a,b,c$ 可以构成三角形，即满足任意两边大于第三边，可以取到 $r=0$。

2. 如果无法构成三角形，则一定是 $\min(a-b-c,b-c-a,c-a-b)$，在这里表示三边中最大的一边减去较小的两边的值。

## AC 代码

```python
a,b,c = map(int,input().split(" "))
R = a+b+c
if(a+b>=c and a+c>=b and b+c>=a):   r = 0
else:   r = min(abs(a-b-c),abs(b-c-a),abs(c-a-b))
print(3.14159265358*(R*R-r*r))
```