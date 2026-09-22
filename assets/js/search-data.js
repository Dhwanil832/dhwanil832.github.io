// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Selected research on environment understanding, multimodal reasoning, robustness, and agentic decision-making.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Complete list of publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "PhD application CV — Dhwanil R. Chauhan. Graduate Researcher at CIVS, Purdue University Northwest. Agentic AI · Multimodal Reasoning · Embodied AI · Robustness &amp; Evaluation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-our-paper-development-of-trialing-image-detection-for-a-melt-shop-safety-tool-has-been-accepted-at-aistech-2026-multi-camera-spatial-reasoning-system-for-real-time-dynamic-safety-zone-reconfiguration-in-active-industrial-environments",
          title: 'Our paper Development of Trialing Image Detection for a Melt Shop Safety Tool...',
          description: "",
          section: "News",},{id: "news-our-paper-visual-geometry-grounded-novel-view-acoustic-synthesis-has-been-accepted-at-the-cvpr-2026-mmfm5-workshop-first-unified-framework-for-novel-view-acoustic-synthesis-bypassing-explicit-3d-reconstruction-via-feed-forward-visual-geometry-grounding",
          title: 'Our paper Visual Geometry Grounded Novel-View Acoustic Synthesis has been accepted at the...',
          description: "",
          section: "News",},{id: "projects-visual-geometry-grounded-novel-view-acoustic-synthesis",
          title: 'Visual Geometry Grounded Novel-View Acoustic Synthesis',
          description: "Geometry-grounded audio-visual reasoning without explicit 3D reconstruction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-dynamic-safety-zone-monitoring",
          title: 'Dynamic Safety Zone Monitoring',
          description: "Multi-camera spatial reasoning for changing industrial environments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-ai-assisted-accident-investigation",
          title: 'AI-Assisted Accident Investigation',
          description: "Conversational AI for structured industrial safety incident reporting and targeted information gathering",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-tandembench",
          title: 'TandemBench',
          description: "Joint-corruption benchmark for cross-modal retrieval under simultaneous image and text degradation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-progressive-evidence-driven-root-cause-analysis",
          title: 'Progressive Evidence-Driven Root Cause Analysis',
          description: "AI-assisted industrial investigation with evolving evidence, competing causal explanations, and justified revision",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/dhwanil_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%61%75%68%61%35%36@%70%75%72%64%75%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Dhwanil832", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dhwanil-chauhan", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rGG7kXMAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0000-7481-622X", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
