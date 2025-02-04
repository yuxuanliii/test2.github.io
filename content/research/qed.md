---
title: 'Quasi-experimental Designs' #change title here
#date: '2024-01-26T18:14:40-05:00'
draft: false
hiddenInHomeList: true
math: true #enable math equations
# showToc: true #if want to include table of contents 
# tocOpen: false #collapse toc
---
## Example

### Headings

Content here. \
Newline: \\ \
**Bold text.**\
*Italic text.* 


### Math Formula


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


### Figure

Please put your figure under `static/` folder. And the path is `"../../" + "path under static folder"`.

You can add a **figure** using Markdown’s `![Alt Text](path)` syntax:  
```md
![Example](../../research/DTR.jpg)
```
![Example](../../research/DTR.jpg)

### Code blocks
```r
a <- 5
print(a)
```

