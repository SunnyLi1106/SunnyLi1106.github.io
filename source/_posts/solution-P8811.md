---
title: 题解 P8811 [蓝桥杯 2022 国 C] 六六大顺
date: 2023-06-13 16:46:43
categories: 洛谷题解
tags: [OI, 题解]
---
## 思路

这道题暴力法肯定不能 AC 的，所以我们需要找规律。

给定一个数 $n$，题目所需要求的就是

$$\sum_{k=1}^{n}{\underbrace{66\cdots6}_{k\texttt{个}6}}^2$$

我们先举一个例子，比方说 $666^2$

$$
\begin{aligned}
666^2 &= (\frac{2}{3}\times999)^2 \\
&= \frac{4}{9}\times (1000-1)^2 \\
&= \frac{4}{9}\times (1000^2-2\times1000\times1+1^2)
\end{aligned}
$$

那么

$$
\begin{aligned}
\sum_{k=1}^{n}{\underbrace{66\cdots6}_{k\texttt{个}6}}^2 &= \sum_{k=1}^{n} {\frac{4}{9}}(10^{2k}-2\times10^k+1)\\
&= \frac{4}{9}\sum_{k=1}^{n} (10^{2k}-2\times10^k+1)\\
&= \frac{4}{9}({\underbrace{1010\cdots1010}_{n\texttt{个}10}}0+{\underbrace{22\cdots22}_{n\texttt{个}2}}0+n)
\end{aligned}
$$

最后就是高精度了，推荐使用 char 可能不会 TLE 哦！