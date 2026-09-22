---
layout: page
title: Progressive Evidence-Driven Root Cause Analysis
description: AI-assisted industrial investigation with evolving evidence, competing causal explanations, and justified revision
img: assets/img/RCA.png
importance: 1
category: research
related_publications: false
---

Industrial root cause analysis is usually treated as a fixed-input problem: collect an incident summary, analyze it, and produce a root cause.

My current work instead treats RCA as an **evolving investigation**.

The central research question is:

> **Can a progressive, evidence-driven investigation workflow produce better-supported causal explanations and better revisions than simpler ways of analyzing the same evidence?**

The system begins with incomplete evidence and progressively builds an understanding of the incident, identifies consequential uncertainties, develops competing causal explanations, and determines what additional evidence would help distinguish between them.

As new information becomes available, the goal is not simply to generate a longer report or become more confident. The system should explain **what changed, why it changed, and which assumptions or explanations were strengthened or weakened**.

The current research workflow includes:

- structured incident and system understanding
- identification of consequential information gaps
- targeted evidence requests
- competing causal explanations
- separate evaluation of factual support and causal role
- staged evidence release
- justified revision across investigation versions
- explicit representation of uncertainty and unresolved questions

A key part of the work is distinguishing:

1. whether a fact is supported,
2. whether that fact has a meaningful causal role,
3. and whether the proposed connection between events is justified.

This helps reduce unsupported causal jumps and makes explanations easier to challenge and revise.

The project also includes a controlled evaluation harness for comparing progressive investigation against simpler baselines and for testing which components of the workflow actually matter.

This work is ongoing.