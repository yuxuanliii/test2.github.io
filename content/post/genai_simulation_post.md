---
title: "Making Simulations Smarter with Generative AI"
date: 2025-05-11T12:00:00
author: "Chenguang Pan"
summary: "This post introduces a generative AI framework that creates realistic synthetic data for simulation studies, enabling smarter performance evaluations of statistical methods."
hiddenInHomeList: false
showToc: true
tocOpen: false
math: false
comments: true
postSearch: true
draft: true
---

<h2 style="font-size: 32px;">Why Do Simulations Matter?</h2>

If you’ve ever tested a new idea in a sandbox before deploying it in the real world, you’ve used the same logic as a simulation study. In data science, simulation studies act like virtual laboratories for testing whether a proposed method works.

But what if this virtual lab doesn’t reflect real-world conditions? Simulations often rely on overly simplified, clean, and smooth data. These idealized setups may lead researchers to overestimate how well a method will work in the wild.

<h2 style="font-size: 32px;">The Problem with Traditional Simulations</h2>

Traditional Monte Carlo simulations often use handcrafted data-generating processes (DGPs) with neat bell-shaped distributions and simple rule-based logic. In reality, data is messy, nonlinear, and packed with complex dependencies.

This mismatch introduces a real risk: a method that performs well under artificial assumptions might fail in practice. (See [our paper’s](https://osf.io/preprints/psyarxiv/7rd86_v1) comparison of Figure 5 vs. Figure S6.)

Simulation studies usually serve two purposes:
- Predicting how well a method will perform,
- Assessing how accurately it can recover true parameters.

Our method focuses on the first: performance evaluation under realistic conditions.

<h2 style="font-size: 32px;">Enter Generative AI</h2>

We propose a new simulation framework powered by **Generative AI (GenAI)** that learns from real-world data and generates **realistic synthetic datasets** for simulation studies.

If you've seen tools like ChatGPT or DALL·E in action, you already know how GenAI can create text or images based on learned patterns. We’re doing the same for data—but instead of text or art, we generate synthetic datasets that mirror real user behaviors (like how students interact with digital tests).

We use this synthetic data to evaluate a feature-extraction method proposed by Tang et al. (2020), comparing its performance on GenAI-based simulations versus traditional rule-based ones.

<h2 style="font-size: 32px;">Real Data, Real Behavior</h2>

Our focus is on **process data** which are detailed records of how users interact with digital platforms. For example, when a student takes an online test, their interaction sequence might be:

`START → CLICK → CLICK → RETURN BUTTON → MARK BUTTON → CLICK → CHECKBOX_TAB → END`

We use log data from the **PIAAC international assessment** and train two GenAI models:

- **CTGAN** (Xu et al., 2019): A GAN-based model for structured tabular data
- **CPAR** (Zhang et al., 2022): A neural network model for sequential categorical data

The goal is to generate synthetic action sequences that closely mimic real behaviors.

<h2 style="font-size: 32px;">Our 5-Step GenAI Simulation Framework</h2>

We designed a general-purpose simulation framework:

<ol>
<li><strong>Preprocess the data:</strong> Encode variables for model training.</li>
<li><strong>Train GenAI models:</strong> Learn realistic patterns from observed data.</li>
<li><strong>Assess data quality:</strong> Propose new evaluation metrics for sequential data:
    <ul>
        <li><strong>TVC-n:</strong> N-gram distribution similarity</li>
        <li><strong>Recall-n / Precision-n:</strong> How well synthetic data captures true patterns</li>
    </ul>
</li>
<li><strong>Run simulations:</strong> Test statistical methods on GenAI-generated data.</li>
<li><strong>Evaluate method performance:</strong> Compare results to those from traditional simulations.</li>
</ol>

<h2 style="font-size: 32px;">What Did We Learn?</h2>

GenAI-based simulations consistently generate more realistic synthetic data than traditional handcrafted DGPs. As a result, they offer **more accurate insights** into how statistical methods will perform on real-world data.

This approach helps bridge the gap between theory and practice—making simulations not only smarter, but more useful.

<h2 style="font-size: 32px;">References</h2>

- Xu, L., Skoularidou, M., Cuesta-Infante, A., & Veeramachaneni, K. (2019). Modeling Tabular Data using Conditional GAN. [[Paper](https://arxiv.org/abs/1907.00503)]
- Zhang, K., Patki, N., & Veeramachaneni, K. (2022). Sequential models in the synthetic data vault. [[Paper](https://arxiv.org/abs/2207.14406)]  
- Tang, X., Wang, Z., He, Q., Liu, J., & Ying, Z. (2020). Latent feature extraction for process data via multidimensional scaling. Psychometrika, 85(2), 378-397.[[Paper](https://www.cambridge.org/core/journals/psychometrika/article/abs/latent-feature-extraction-for-process-data-via-multidimensional-scaling/FF76AA880620E0C91A7B43B5B1C642FE)]  

<h2 style="font-size: 32px;">Our Paper</h2>

- Suk, Y., Pan, C., & Yang, K. (2025). Using Generative AI for Sequential Data Generation in Monte Carlo Simulation Studies. [[Preprint](https://osf.io/preprints/psyarxiv/7rd86_v1)]