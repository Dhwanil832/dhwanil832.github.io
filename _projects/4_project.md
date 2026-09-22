---
layout: page
title: TandemBench
description: Joint-corruption benchmark for cross-modal retrieval under simultaneous image and text degradation
img: assets/img/vlm_benchmark.png
importance: 2
category: research
related_publications: true
---

Cross-modal retrieval systems are usually evaluated on clean image-text pairs or under corruption in only one modality at a time. In real settings, however, both modalities can degrade simultaneously.

**TandemBench** studies how dual-encoder retrieval models behave under joint image and text corruption, and whether joint degradation can be inferred from the effects observed when each modality is corrupted separately.

The benchmark evaluates:

- **19 dual-encoder retrieval models**
- **16 image corruptions**
- **12 text perturbations**
- **5 severity levels**
- **MS-COCO and Flickr30K**
- both **image-to-text** and **text-to-image** retrieval

The primary analysis covers **47,360 matched joint-corruption conditions**.

Across these conditions, joint degradation exceeds the larger of the two single-modality losses in **95.15%** of cases, with a mean excess of **5.07 Recall@1 points**.

A central question in the work is whether joint degradation can be reconstructed from single-modality effects. A simple additive model is surprisingly accurate under mild corruption, but its predictive quality declines as degradation becomes more severe, revealing retrieval- and model-dependent nonlinear interactions between modalities.

The benchmark also includes realized-damage matching to separate true cross-modal interaction effects from artifacts of using a shared ordinal severity index.

**My role** is lead researcher on the benchmark design, corruption framework, large-scale evaluation, analysis, and interpretation of joint degradation behavior across model families and retrieval directions.

This work is submitted to the **WACV 2027 Datasets Track**.

{% cite chauhan2026tandembench %}