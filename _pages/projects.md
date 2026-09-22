---
layout: page
title: research
permalink: /projects/
description: Selected research on environment understanding, multimodal reasoning, robustness, and agentic decision-making.
nav: true
nav_order: 2
horizontal: false
---

<div class="research-page-copy" markdown="1">

My work approaches intelligent agents from several points in the loop between **understanding an environment and acting within it**. I have studied how multimodal observations can be grounded in the structure of an environment, how perception systems can maintain task-relevant spatial information as that environment changes, how models fail when multiple sources of evidence become unreliable at once, and how an AI system can recognize that it does not yet have enough information and actively seek what is missing.

These problems appear across different domains, but each informs a different part of the same broader challenge. **Visual Geometry Grounded Novel-View Acoustic Synthesis** studies how geometric visual information can support reasoning across modalities without explicitly reconstructing the entire scene. **Dynamic Safety Zone Monitoring** examines how a system can continuously update task-relevant spatial understanding of a changing physical environment from multiple cameras. **TandemBench** studies what happens when the evidence available to a multimodal system becomes simultaneously unreliable. **AI-Assisted Accident Investigation** addresses the complementary problem of information insufficiency by identifying what is missing and asking targeted questions before producing a structured account. **Progressive Evidence-Driven Root Cause Analysis** extends that direction into evolving investigation by maintaining competing causal explanations, identifying consequential evidence gaps, seeking distinguishing information, and revising conclusions as new evidence becomes available.

Together, these projects have moved my interests beyond improving individual perception or multimodal components toward agents that can determine **what they know, what they still need to know, what information matters for the task, what evidence would resolve uncertainty, and whether they should gather more information or act next.**

## Selected research

</div>

<div class="projects research-grid row row-cols-1 row-cols-md-2">
{% assign sorted_projects = site.projects | where: "category", "research" | sort: "importance" %}
{% for project in sorted_projects %}
  {% include projects.liquid %}
{% endfor %}
</div>


