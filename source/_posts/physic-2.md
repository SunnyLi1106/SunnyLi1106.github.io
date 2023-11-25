---
title: 物理学习笔记2-圆周运动与向心力
date: 2023-09-09 19:32:00
categories: 物理笔记
tags: [物理, 笔记]
index_img: https://cdn.jsdelivr.net/gh/SunnyLi1106/PicGoCDN/post/physic-2.jpg
banner_img: https://cdn.jsdelivr.net/gh/SunnyLi1106/PicGoCDN/post/physic-2.jpg
---

{% note warning %}
本文大致难度：高中至强基
{% endnote %}

# § 圆周运动的定义与公式

一个物体运动，如果其轨迹为圆周，我们则称之为圆周运动。

圆周运动主要分为两种：
- 匀速圆周运动：任何相等时间段内通过长度相等。
- 变速圆周运动：不是匀速圆周运动…… 

## 1. 角速度

![角速度](https://cdn.jsdelivr.net/gh/SunnyLi1106/PicGoCDN/img/physic-2/1.png)

我们定义角速度 $\omega$ 为

$\displaystyle\omega=\frac{ {\rm d} \theta}{ {\rm d} t}\quad (\texttt{或}\omega=\frac{\Delta\theta}{\Delta t})$
 
角速度可以描述质点圆周运动的快慢，$\omega$ 的方向可以由右手螺旋定则确定。

## 2. 线速度

$\displaystyle v=\frac{ {\rm d} s}{ {\rm d} t}=\frac{ {\rm d}\theta\times r}{ {\rm d}t}=\omega r\quad (\texttt{或}v=\frac{\Delta s}{\Delta t})$

## 3. 角加速度

$\displaystyle\beta=\frac{ {\rm d}\omega}{ {\rm d}t}$

当质点做匀速圆周运动时，$\beta=0$；匀加速运动时，$\beta$ 与 $\omega$ 同向；匀减速运动时，$\beta$ 与 $\omega$ 反向；$\beta$ 恒定的圆周运动称之为匀变速圆周运动，满足

$\displaystyle\omega = \omega_0+\beta t$

$\displaystyle\theta=\omega_0 t+\frac{1}{2}\beta t^2$

## 4. 线加速度

这是一个重头戏，大部分圆周运动的运动力学题目基本上都会有它的存在。我们先从线加速度引入。

![线加速度](https://cdn.jsdelivr.net/gh/SunnyLi1106/PicGoCDN/img/physic-2/2.png)

如图1，我们假设速度的变化

${\rm d}v=v'-v$

将 ${\rm d}v$ 分解为 ${\rm d}v_1$ 和 ${\rm d}v_2 $，此时有

$\displaystyle a=\frac{ {\rm d}v}{ {\rm d}t}=\frac{ {\rm d}v_1}{ {\rm d}t}+\frac{ {\rm d}v_2}{ {\rm d}t}$

其中，$\displaystyle {\rm d}v_1/{\rm d}t$ 是速度方向的变化快慢，$\displaystyle {\rm d}v_2/{\rm d}t$ 是速度大小的变化快慢，决定了圆周运动是匀速还是变速。

我们通常记 $\displaystyle {\rm d}v_1/{\rm d}t$ 为向心加速度，一般记作 $a_n$。记 $\displaystyle {\rm d}v_2/{\rm d}t$ 为切向加速度，一般记作 $a_t$（或者 $a_\tau$）。

我们所见到的大部分题目都是匀速圆周运动，故向心加速度的作用就变得非常大，所以向心加速度的计算公式就必不可少了。

$\displaystyle a_n=\frac{v^2}{r}=\omega^2r$

## 5. 向心加速度

### (1) 推导过程

![向心加速度](https://cdn.jsdelivr.net/gh/SunnyLi1106/PicGoCDN/img/physic-2/3.png)

以圆周运动轨迹圆心为原点创建平面直角坐标系，我们可以用 $\theta$ 表示质点圆周运动所在的坐标，在 $x$ 和 $y$ 两个方向求出其加速度，最后勾股定理合成。

- 对于 $x$ 坐标：

$\displaystyle x=R\cos\theta\quad(\theta=\omega t)$

$\displaystyle v_x=\frac{ {\rm d}x}{ {\rm d}t}=-R\omega\sin\theta$

$\displaystyle a_x=\frac{ {\rm d}v_x}{ {\rm d}t}=-R\omega^2\cos\theta$

- 对于 $y$ 坐标：

$y=R\sin\theta$

$\displaystyle v_y=\frac{ {\rm d}x}{ {\rm d}t}=R\omega\cos\theta$

$\displaystyle a_y=\frac{ {\rm d}v_y}{ {\rm d}t}=-R\omega^2\sin\theta$

所以

$\displaystyle   a_n=\sqrt{a_x^2+a_y^2}=\sqrt{R^2\omega^4\cos^2\theta+R^2\omega^4\sin^2\theta}=\omega^2R$

### (2) 向心力
现在，我们知道了 $a_n$ 的表达式，我们就可以通过牛顿第二定律得出向心力的计算公式

$\displaystyle F_\texttt{向}=m\frac{v^2}{r}=m\omega^2r=m\omega v$

对于一般情况下的圆周运动，都有

$\displaystyle F_\texttt{合}=F_\texttt{向}$

即合外力提供向心力。

# § 圆周运动的模型

## 1. 圆锥摆

![圆锥摆](https://cdn.jsdelivr.net/gh/SunnyLi1106/PicGoCDN/img/physic-2/4.png)

$\displaystyle \begin{cases} F_\texttt{合}=T\sin\theta=m\omega^2r=m\omega^2L\sin\theta \\ T\cos\theta=mg \\ \end{cases}$

易得

$\displaystyle \omega=\sqrt{\frac{g}{L\cos\theta} }$

## 2. 圆盘转动

圆盘转动时，两物体于同一轴转动，故角速度 $\omega$ 相同。

## 3. 传送带传动

此时线速度 $v$ 相等。

# § 圆周运动的例题

## 1. 圆盘转动

### 题目

有两物体 $A,B$，距离转轴的距离分别为 $l,2l$ 且处于转轴同一侧（如图）。$A,B$ 之间有绳子连接，且质量均为 $m$。求绳子恰好有力时圆盘角速度的大小于 $A,B$ 恰好不滑动时圆盘的角速度的大小（第一问考虑摩擦力，摩擦系数为 $\mu$。第二问假设圆盘光滑，无摩擦力）。

![圆盘转动](https://cdn.jsdelivr.net/gh/SunnyLi1106/PicGoCDN/img/physic-2/5.png)

### 答案

$\displaystyle \sqrt{\mu mg/2l}\ ;\sqrt{2\mu g/3l}$

### 过程

- 第一问

$\begin{cases} F_A=m\omega^2l \\ F_B=m\omega^22l=\mu mg \\ \end{cases}$

解得 $\omega=\sqrt{\mu mg/2l}$

- 第二问

![圆盘转动受力分析](https://cdn.jsdelivr.net/gh/SunnyLi1106/PicGoCDN/img/physic-2/6.png)

$\begin{cases} f-T=m\omega^2l \\ T+f=m\omega^2\cdot2l \\ \end{cases}$

解得 $\omega=\sqrt{2\mu g/3l}$

## 2. 临界圆锥摆

### 题目

两绳系一个质量为 $m=0.1kg$ 的小球，绳子另一端分别固定于一轴的 $A,B$ 处，上方的绳子长 $l=2m$. 当绳子拉直时，绳子与轴的夹角分别为 $30^{\circ}$ 与 $45^{\circ}$ ，问球角速度为多少时两绳均有拉力？

![临界圆锥摆](https://cdn.jsdelivr.net/gh/SunnyLi1106/PicGoCDN/img/physic-2/7.png)

### 答案

$\displaystyle\sqrt{\frac{10\sqrt3}{3}}<\omega<\sqrt{10}$

### 过程

临界问题，求出两绳分别没有拉力时的角速度可得范围。

(1) $T_B=0$ 时，

$\displaystyle \begin{cases} T_A\sin30^{\circ}=m\omega_1^2\cdot l\sin30^{\circ}\\ T_A\cos30^{\circ}=mg \end{cases}\Rightarrow\omega_1=\sqrt{\frac{10\sqrt3}{3}}$

(2) $T_A=0$ 时，

$\displaystyle \begin{cases} T_B\sin45^{\circ}=m\omega_2^2\cdot l\sin30^{\circ}\\ T_B\cos45^{\circ}=mg \end{cases}\Rightarrow\omega_2=\sqrt{10}$

易得 $\displaystyle\sqrt{\frac{10\sqrt3}{3}}<\omega<\sqrt{10}$

## 3. 类圆锥摆

### 题目

如图，长 $L$ 绳一端系座椅，另一端固定于半径为 $r$ 的水平转盘边缘。转盘可以绕穿其中心轴以角速度 $\omega$ 匀速转动。若此时绳子与转盘在同一平面运动，与竖直夹角 $\theta$ 时，求 $\omega$ 与 $\theta$ 的关系？

![类圆锥摆](https://cdn.jsdelivr.net/gh/SunnyLi1106/PicGoCDN/img/physic-2/8.png)

### 答案

$\displaystyle\omega=\sqrt{\frac{g\tan\theta}{L\sin\theta+r}}$

### 过程

列方程，有

$\displaystyle m\omega^2(L\sin\theta+r)=mg\tan\theta$

解得，$\displaystyle\omega=\sqrt{\frac{g\tan\theta}{L\sin\theta+r}}$

## 4. 半圆轨道

### 题目

如图，一半球形小碗半径为 $R$，一质量为 $m$ 的小球处于图示位置，重力加速度为 $g$，问：

(1) 小球禁止释放瞬间，求碗对小球的支持力与小球的加速度（计摩擦力）。

(2) 若小球以 $v$ 的速度通过图示位置，求此时碗对小球的支持力与小球的加速度（不计摩擦力）。

![半圆轨道](https://cdn.jsdelivr.net/gh/SunnyLi1106/PicGoCDN/img/physic-2/9.png)

### 答案

(1) $\displaystyle N=mg\cos\theta; a=g\sin\theta-\mu g\cos\theta$

(2) $\displaystyle N=mg\cos\theta+m\frac{v^2}{R}; a=\sqrt{\frac{v^4}{R^2}+g^2\sin^2\theta}$

### 过程

(1)

![半圆轨道第一问受力分析](https://cdn.jsdelivr.net/gh/SunnyLi1106/PicGoCDN/img/physic-2/10.png)

受力分析，有 $N=mg\cos\theta$

$\displaystyle\therefore a=\frac{F_{\texttt{合}}}{m}=\frac{mg\sin\theta-\mu mg\cos\theta}{m}=g\sin\theta-\mu g\cos\theta$

(2)

$\displaystyle m\frac{v^2}R=N-mg\cos\theta=ma_\bot\Rightarrow N=mg\cos\theta+m\frac{v^2}{R}$

$\displaystyle ma_\parallel =mg\sin\theta-f=mg\sin\theta-\mu mg\cos\theta-\mu m\frac{v^2}{R}$

当 $\mu=0$，有

$\displaystyle a=\sqrt{a_\parallel^2+a_\bot^2}=\sqrt{\frac{v^4}{R^2}+g^2\sin^2\theta}$

## 5. 水漩涡

### 题目

现有一圆柱形水杯装了适量的水。现以角速度 $\omega$ 旋转水杯形成漩涡。试求漩涡的切面方程，其中重力加速度取 $g$。

![水漩涡](https://cdn.jsdelivr.net/gh/SunnyLi1106/PicGoCDN/img/physic-2/11.png)

### 答案

$\displaystyle y=\frac{\omega^2}{2g}x^2$

### 过程

![水漩涡受力分析](https://cdn.jsdelivr.net/gh/SunnyLi1106/PicGoCDN/img/physic-2/12.png)

取一质量点 ${\rm d}m$，有

$\displaystyle {\rm d}mg\tan\theta={\rm d}m\omega^2x$

又根据切线斜率 $\displaystyle \tan\theta=\frac{{\rm d}y}{{\rm d}x}$

有

$\begin{aligned} g\frac{{\rm d}y}{{\rm d}x}&=\omega^2x\\ \int{\rm d}y&=\int\frac{\omega^2x}{g}{\rm d}x\\ \therefore y&=\frac{\omega^2}{2g}x^2 \end{aligned}$