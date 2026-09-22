---
layout: page
title: Visual Geometry Grounded Novel-View Acoustic Synthesis
description: Geometry-grounded audio-visual reasoning without explicit 3D reconstruction
img: assets/img/nvas.png
importance: 3
category: research
related_publications: true
---

Novel-view acoustic synthesis asks a deceptively difficult question: given observations of a scene, can a system infer how that environment should sound from a new listener position? Existing approaches often depend on expensive per-scene 3D reconstruction.

**Our approach** grounds spatial audio synthesis directly in feed-forward visual geometry. Given a short video, the framework combines visual information, estimated scene geometry, and acoustic representations, then uses the Geometry-Grounded Acoustic Decoder (GGAD) to synthesize listener-conditioned binaural audio without explicitly rendering the target view.

**My contribution** was designing the output representation extracted from the VGGT feed-forward geometry model and formulating the query/key structure of the GGAD cross-attention mechanism.

For my broader research direction, this project is an example of **environment understanding across modalities**: extracting a representation of physical space that supports inference beyond what is directly observed.

{% cite polra2026nvas %}
