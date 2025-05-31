---
title: "Developing Personalized Education using Optimal Treatment Regimes"
date: 2025-05-10T12:00:00
# tags: ["causal inference", "dynamic treatment regimes"]
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

<h2 style="font-size: 32px;">Motivation</h2>

Current educational systems often rely on one-size-fits-all plans, assuming that all students should follow the same learning path. However, students differ in their learning pace, interests, and long-term goals. While educators and school counselors may try to tailor recommendations based on student profiles, doing so effectively requires substantial training and deep familiarity with each individual’s background, which is not always feasible in real-world settings.

To address this challenge, we need data-driven approaches that can systematically leverage students’ learning histories to support more personalized and effective decision-making. Optimal Treatment Regime (OTR) methods from personalized medicine help to design individualized education plans. They recommend the most suitable learning path for each student based on their background and learning history and make personalized education more achievable.


<h2 style="font-size: 32px;">Optimal Treatment Regimes</h2>

**How do OTR methods work in personalized education?** \
Consider a treatment sets with multiple options (e.g., different courses). Different treatments (e.g., enrolling in Algebra I vs. Geometry) can lead to different potential outcomes for a given individual. OTRs aim to find the treatment that yields the best outcome for each person. Because treatment effects can vary across individuals, the optimal treatment may differ from one person to another. Instead of assigning the same treatment to everyone, OTRs leverage this **treatment effect heterogeneity** to recommend personalized treatment strategies.

**In one sentence:** OTRs aim to estimate the best treatment for each individual based on their observed characteristics, in order to maximize an outcome of interest. 

### OTR for a Single Decision Point
<h4 style="font-size: 20px;">Set up</h4>
To start with, we consider OTRs for a single decision point, \( K=1 \). And we will extend to multiple decision points in future posts. For each individual, the data we observe are \( \{\mathbf{X}, A, Y\} \), where
- \( \mathbf{X}=\{X_1, X_2, ..., X_p\} \) represents the baseline covariates (e.g., prior grades, motivation level),
- \(A \in \{a_1, a_2, a_3, ..., a_m\} \) is the treatment the individual receives from the treatment sets (e.g., course placement),
- \(Y\) is the observed outcome given treatment \(A\) and covariates \(X\) (e.g., GPA, test score, or course completion). 

A treatment regime, or decision rule \(d \in \mathcal{D}\), assigns a treatment from the available treatment options to each individual based on their baseline covariates \(\mathbf{X}\). The set \(\mathcal{D}\) includes all possible single-decision treatment regimes and may consist of infinitely many decision rules \(d\). 
<div style="margin-top: -20px;">
<details style="color: gray;"><summary>Examples of Treatment Regimes</summary>

- Assign all students to Algebra I regardless of their background.
- Assign students to Geometry if they took Algebra I in 8th grade; otherwise assign Algebra I.
- Assign students to Pre-algebra if their math GPAs in 8th grade are lower than 2.0; otherwise assign Algebra I.
</details>
</div>
Since we can only observe the outcome under the treatment actually recieved, and not for all other treatment regimes, we need to define the potential outcome under regime \(d\). (The potential outcome is the outcome an individual would receive if assigned treatment according to regime \(d\).) The definition is:
\[
Y(d) = Y^a \cdot \mathbb{1}\{d(X) = a\}, 
\]
where \(Y^a\) is the potential outcome under treatment \(a\).
<details style="color: gray;">
<summary>Potential Outcome Framework</summary>
The potential outcomes define the outcomes an individual would experiences under each possible treatment. In the binary treatment case:

- \( Y^1 \): potential outcome if the individual receives treatment  
- \( Y^0 \): potential outcome if the individual receives control

Only one of these is observed for each individual, depending on the treatment actually received.
The **causal effect** for an individual is defined as \( Y^1 - Y^0 \).

</details>
<br>
Then, the optimal decision rule, \(d^{opt}\), is the decision rule that maximizes the expected potential outcome \(Y(d)\):
\[
d^{\text{opt}} = \underset{d \in \mathcal{D}}{\arg\max} \, \mathbb{E}\{ Y(d) \}.
\]
The expected potential outcome of regime \(d\) is also called the <strong>value</strong> of regime \(d\). 
In short, <strong>an optimal treatment regime maximize the value</strong>.



<h4 style="font-size: 20px;">Identification</h4>

The challenge here is that the potential outcome \(Y(d)\) in the formula above is not observable. To estimate \(d^{opt}\), we need to link the unobserved \(Y(d)\) to something we can observe. Basically, identification is the process to represent the unobserved causal quantity to some statistical quantity we can estimate under some assumptions. To identify OTR, we need three foundamental assumptions in causal inference:
- <details>
    <summary>Consistency</summary>
    The observed outcome \(Y\) equals the potential outcome under the treatment actually received.
  </details>

- <details>
    <summary>Unconfoundedness</summary>
    Given covariates \(\mathbf{X}\), the treatment assignment is independent of the potential outcomes.
  </details>

- <details>
    <summary>Positivity</summary>
    Each individual has a non-zero probability of receiving each treatment, given their covariates.
  </details>
With the assumptions above, for binary treatment case, where \(d(\mathbf{X}) \in \{0,1\}\), the expected potential outcome (i.e., value) can be identified as:

\[
    \mathbb{E}\{Y(d)\} = \mathbb{E}[d(X)\mathbb{E}[Y \mid A = 1, X] + \{1 - d(X)\}\mathbb{E}[Y \mid A = 0, X]].
\]
<details>
    <summary style="color: gray;">How to derive this</summary>
    \[
        \begin{aligned}
        \mathbb{E}\{Y(d)\} 
        &= \mathbb{E}[d(X)Y^1 + \{1 - d(X)\}Y^0] \\
        &= \mathbb{E}[\mathbb{E}[d(X)Y^1 + \{1 - d(X)\}Y^0 \mid X]] \\
        &= \mathbb{E}[d(X)\mathbb{E}[Y^1 \mid X] + \{1 - d(X)\}\mathbb{E}[Y^0 \mid X]] \\
        &= \mathbb{E}[d(X)\mathbb{E}[Y^1 \mid A = 1, X] + \{1 - d(X)\}\mathbb{E}[Y^0 \mid A = 0, X]] \text{(positivity, unconfoundedness)}\\
        &= \mathbb{E}[d(X)\mathbb{E}[Y \mid A = 1, X] + \{1 - d(X)\}\mathbb{E}[Y \mid A = 0, X]] \text{(consistency)}
        \end{aligned}
    \]
</details>
Now, the unobserved potential outcome is represented as observed outcome \(Y\). Based on that, we can identify the \(d^{opt}\) as 
\[
    d^{opt} = \mathbb{1}(\mathbb{E}[Y \mid X = x, A = 1] - \mathbb{E}[Y \mid X = x, A = 0] > 0)
\]
<details>
    <summary style="color: gray;">How to derive this</summary>
Let  
\( Q(x, a) = \mathbb{E}[Y \mid X = x, A = a] \).  
Then, we can rewrite \( d^{opt} \) as:
\[
\begin{aligned}
d^{opt} &= \arg\max_d \mathbb{E}\{Y(d)\} \\
        &= \arg\max_d \mathbb{E}[d(X)Q(X,1) + \{1 - d(X)\}Q(X,0)] \\
        &= \arg\max_d \mathbb{E}[d(X)\{Q(X,1) - Q(X,0)\}] \\
        &= \mathbb{1}(Q(X,1) - Q(X,0) > 0)
\end{aligned}
\]
</details>

For binary case, the optimal treatment rule assigns treatment when the expected outcome under treatment is larger than that under control, conditional on covariates \(\mathbf{X}\).

<h4 style="font-size: 20px;">Estimation</h4>
Q-learning estimates OTRs by modeling the conditional expectation of the outcome given covariates \(\mathbf{X}\) and treatment \(A\), known as the **Q-function**:

\[
   Q(x, a) = \mathbb{E}[Y \mid X = x, A = a] 
\]

Once the Q-function is estimated from the data, the optimal treatment rule can be derived by choosing the treatment that yields the higher expected outcome. A simple and easy to implement choice to learn Q-function is linear regression model:

\[
Q(X, A; \boldsymbol{\beta}) = \beta_0 + \beta_1 X + \beta_2 A + \beta_3 XA.
\] 

Then, the estimated OTR and value are straightforward:

\[
\begin{aligned}
\hat{d}^{opt}_Q(X) &= \arg\max_{A \in \{0, 1\}} Q(X, A; \hat{\boldsymbol{\beta}})\\
&= \mathbb{1} \left\{ Q(X, 1; \hat{\boldsymbol{\beta}}) > Q(X, 0; \hat{\boldsymbol{\beta}}) \right\}\\
&= \mathbb{1}(\hat{\beta}_2 + \hat{\beta}_3 X > 0),
\end{aligned}
\]


\[
\begin{aligned}
\hat{V}_Q(d^{opt}) 
&= \frac{1}{n} \sum_{i=1}^{n} \left[ \hat{\beta}_0 + \hat{\beta}_1 X_i + (\hat{\beta}_2 + \hat{\beta}_3 X_i)\hat{d}^{opt}_Q(X) \right]\\
&= \frac{1}{n} \sum_{i=1}^{n} \left[ \hat{\beta}_0 + \hat{\beta}_1 X_i + (\hat{\beta}_2 + \hat{\beta}_3 X_i)\mathbb{1}(\hat{\beta}_2 + \hat{\beta}_3 X_i > 0) \right].
\end{aligned}
\]

However, linear model relies heavily on correct specification of the outcome model and mis-specification can lead to biased treatment rules.
In practice, the Q-function is typically estimated using more flexible models, such as generalized linear models or machine learning methods (e.g., random forests, XGBoost, neural networks), depending on the complexity of the data. We can also use some more robust methods like A-learning or targeted maximum likelihood estimation (TMLE).

### Implementation in R
Suppose we are interested in whether students should take math course (\(A=1\)) or not in 9th grade. We measure their baseline covariates \(X_1\), the 8th grade math score and \(X_2\), the math identity. And we want to recommend the option that maximize their academic achievements \(Y\).
A very useful package in r is *DynTxRegime*. Below, we will show how to estimate OTRs using this package.

```r
# Install and load the package
install.packages("DynTxRegime")
library(DynTxRegime)

# Simulate data
set.seed(123)
n <- 1000
X1 <- runif(n, 0, 4)
X2 <- rnorm(n, 0, 4)
A <- rbinom(n, 1, 0.5)  # Binary treatment
Y <- 2 + 1.5 * A + 0.5 * X1 + 0.3 * X2 + 0.2 * X2 * A + rnorm(n)

data <- data.frame(X1 = X1, X2 = X2, A = A, Y = Y)

# Specify the models
Main <- buildModelObj(model = ~ (X1 + X2), 
                      solver.method = 'lm', 
                      predict.method = 'predict.lm') # model for main effects

Cont <- buildModelObj(model = ~ X2, 
                      solver.method = 'lm', 
                      predict.method = 'predict.lm') # model for treatment effects

# Fit Q-learning using a linear model
q_model <- qLearn(
  moMain = Main,         # model for main effects (covariates)
  moCont = Cont,         # model for contrasts (treatment effect modifiers)
  data = data,
  response = data$Y,      # outcome
  txName = "A",          # name of the treatment variable
  verbose = TRUE
)

# Summarize the model
summary(q_model)
# Get the coefficients
coef(q_model)

# Estimated optimal treatment regime
otr <- optTx(q_model)
otr
# Estimated value
value <- estimator(q_model)
value
```

<h2 style="font-size: 32px;"> References</h2>

- [Understood.org – Personalized Learning: What You Need to Know](https://www.understood.org/en/articles/personalized-learning-what-you-need-to-know)
- [Tsiatis et al. (2019) – *Dynamic Treatment Regimes: Statistical Methods for Precision Medicine*](https://www.routledge.com/Dynamic-Treatment-Regimes-Statistical-Methods-for-Precision-Medicine/Tsiatis-Davidian-Holloway-Laber/p/book/9781032082288?srsltid=AfmBOoqZT7InwVqO9g1ZoDlv1Hy_xKhLDeUOC6U1MTdEBoYSTyGIhH2w)


<h2 style="font-size: 32px;"> Publications/Working Papers in Our Lab </h2>

-	Suk, Y., Park, C., Pan, C., & Kim, K. (2024). Fair and robust estimation of heterogeneous treatment effects for optimal policies in multilevel studies. *PsyArXiv.* [[Preprint](https://doi.org/10.31234/osf.io/xz3jw)] [[R Code](https://github.com/youmisuk/FairCATE-Multilevel)]

-	Suk, Y., & Park, C. (2023). Designing optimal, data-driven policies from multisite randomized trials. *Psychometrika, 88.* 1171-1196. [[Journal Article](https://doi.org/10.1007/s11336-023-09937-2)] [[Preprint](https://doi.org/10.31234/osf.io/me5gb)] [[R Code](https://github.com/youmisuk/multisiteOTR)]


