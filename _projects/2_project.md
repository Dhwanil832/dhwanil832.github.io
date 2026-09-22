---
layout: page
title: Dynamic Safety Zone Monitoring
description: Multi-camera spatial reasoning for changing industrial environments
img: assets/img/safety_zone.png
importance: 4
category: research
related_publications: true
---

Industrial environments are dynamic: equipment and personnel move, occlusions are common, and a fixed geometric rule can quickly stop reflecting the state of the floor.

**Our system** combines four camera perspectives with a rule-based spatial reasoning engine that updates safety-zone boundaries from detected blocker positions. Rather than treating each camera frame independently, the system turns distributed visual observations into a continuously updated representation used for hazard monitoring.

**My contribution** was designing and implementing the spatial reasoning logic that determines how detected blocker positions redefine the active safety boundary. The detection pipeline was developed by a co-author.

This work shaped my interest in **agents that must maintain task-relevant understanding of changing environments** before they can make useful decisions.

{% cite toth2026safety %}
