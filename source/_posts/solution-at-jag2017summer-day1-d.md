---
title: 题解 AT_jag2017summer_day1_d くさかべ
date: 2023-06-16 10:56:43
categories: 洛谷题解
tags: [OI, 题解]
---
## 题目大意

有一直角三角形 $\triangle ABC$，其中 $B$ 是直角边。在 $AB$ 上找一点 $P$，连接 $CP$，又在 $AC$ 上找一点 $Q$ 后连接 $PQ$，使得 $\angle APQ=\angle BPC$。若已知线段 $AB$ 的长度为 $X$，线段 $BC$ 的长度为 $Y$，线段 $AQ$ 的长度为 $Z$，请求出线段 $AP$ 的长度是多少？

## 思路

好吧，一道数学几何题。

我们作 $Q$ 关于 $AB$ 的对称点 $Q'$，作 $Q\perp AB$ 于 $D$，$Q\perp BC$ 于 $F$，$Q'\perp CB$ 的延长线于 $E$。

根据勾股定理，有 $AC=\sqrt{X^2+Y^2}$。

因为 $\angle ADQ=\angle ABC = 90\degree$，$\angle DAQ=\angle BAC$，所以有 $\triangle ADQ\sim\triangle ABC$。由此可以推出：

$$\frac{DQ}{BC}=\frac{AQ}{AC}=\frac{Z}{\sqrt{X^2+Y^2}}$$

得到 $DQ=\frac{YZ}{\sqrt{X^2+Y^2}}$。

因为 $Q'$ 是 $Q$ 关于 $AB$ 的对称点，所以易得 $Q',P,C$ 三点共线。

故 $EB=DQ'=DQ$。

根据 $\triangle QFC\sim\triangle ABC$，有：

$$\frac{QF}{AB}=\frac{\sqrt{X^2+Y^2}-Z}{\sqrt{X^2+Y^2}}$$

故 $QE'=QF=\frac{X\sqrt{X^2+Y^2} -XZ}{\sqrt{X^2+Y^2}+Z}$

再根据 $\triangle QFC\sim\triangle ABC$，有：

$$\frac{PB}{Q'E}=\frac{BC}{CE}=\frac{Y}{Y+\frac{ZY}{\sqrt{X^2+Y^2}}}=\frac{\sqrt{X^2+Y^2}}{\sqrt{X^2+Y^2}+Z}$$

所以 $PB=\frac{X\sqrt{X^2+Y^2}-XZ}{\sqrt{X^2+Y^2}+Z}$，最后得到：

$$AP=AB-BP=\frac{2XZ}{\sqrt{X^2+Y^2}+Z}$$

## AC 代码

```python
from math import sqrt
x,y,z = map(float,input().split(" "))
print( (2.0*x*z)/(sqrt(x*x+y*y)+z) )
```