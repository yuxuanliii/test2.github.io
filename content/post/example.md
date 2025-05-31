---
title: "Example"
date: 2025-02-03T12:00:00
#tags: ["causal inference", "reinforcement learning", "dynamic treatment regimes"]
#categories: ["Research"]
author: "Your Name"
summary: "Brief summary of the post (optional)"
hiddenInHomeList: true #hide post on the homepage
showToc: true #table of contents 
tocOpen: false #collapse toc
math: true #enable math equations
comments: true #enable comment function
postSearch: true #enable search on this post
draft: true #keep it as false to publish the post
---

## Headings

Content here. \
Newline: \\ \
**Bold text.**\
*Italic text.* 


## Math Formula


If you want to include a in-line formula, please use: \( d_t \).\
Formula block: 
<!-- Please seperate math formula and text. -->
\[
A_t = d_t(S_t)
\]

Multiple lines:

\[
\begin{aligned}
Q(S_t, A_t) &= R_t + \gamma \max_{a'} Q(S_{t+1}, a') \\
V(S_t) &= \mathbb{E}_{A_t} [Q(S_t, A_t)]
\end{aligned}
\]


## Figure

Please put your figure under `static/` folder. And the path is `"../../" + "path under static folder"`.

You can add a **figure** using Markdown’s `![Alt Text](path)` syntax:  
```md
![Example](../../research/DTR.jpg)
```
![Example](../../research/DTR.jpg)

## Code blocks
```r
a <- 5
print(a)
```
