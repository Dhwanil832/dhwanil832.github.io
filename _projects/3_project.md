---
layout: page
title: AI-Assisted Accident Investigation
description: Conversational AI for structured industrial safety incident reporting and targeted information gathering
img: assets/img/aiaai.png
importance: 5
category: research
related_publications: true
---

Industrial safety incident reporting at steel manufacturing facilities often begins under time pressure, with incomplete information and inconsistent documentation across incident types. Static forms can capture required fields, but they do little to help determine what important information is still missing.

**Our system** replaces static incident reporting with a conversational AI workflow that guides supervisors through structured incident capture using natural dialogue. The system retains context across multi-turn exchanges, extracts incident information, tracks what has already been established, and asks targeted follow-up questions when important information is missing.

**My contribution** was designing and implementing the conversational AI backend, including context retention, dialogue-state management, structured information flow, and action sequencing across the investigation.

The broader research question behind this work was not simply whether an LLM could generate a report, but whether an AI system could recognize when the available information was insufficient and determine what to ask next.

This project became an important step toward my current work on **progressive evidence-driven root cause analysis**, where the investigation moves beyond information collection toward maintaining competing causal explanations, identifying consequential evidence gaps, seeking distinguishing evidence, and revising conclusions as new information becomes available.

The work was presented at **AISTech 2025**.

{% cite pu2025aiaai %}