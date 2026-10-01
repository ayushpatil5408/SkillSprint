# SkillSprint 🚀

> **Deepen Skills. Accelerate Careers.**  
> An outcome-based practical learning platform for engineering students to master job-ready software development skills through 4–6 week intensive sprints, simulated mentor checkpoints, and verified proof-of-work portfolios.

---

## 🎨 Visual Design System: Dark Cyan Claymorphism

The platform features a modern, tactile **Dark Cyan Claymorphic** aesthetic blending an ultra-dark palette with 3D inflated clay geometry, soft dual inset bevel lighting, and bouncy micro-interactions:

- **App Background:** `#070B0D` (Deep Void Black)
- **Main Surface:** `#0D161A` (Charcoal Slate Clay)
- **Raised Clay Surface:** `#122026` (Inflated Matte Clay)
- **Primary Accent:** `#20D9E5` (Electric Cyan Clay)
- **Deep Teal Structure:** `#087F86` (Supporting Clay Foundation)
- **Text:** `#F2F7F8` (Ultra-High Contrast Main Text) & `#9AADB1` (Muted Slate)

---

## 🌟 Core Features & Screens

1. **Student Dashboard:** Real-time progress tracker, active sprint overview, weekly milestone stepper, and simulated engineering metrics.
2. **Sprint Catalogue & Category Filters:** Multi-week tracks with category filtering (`All`, `Full-Stack`, `Backend`, `Mobile`, `Cloud/DevOps`), pricing, and outcome tags.
3. **Sprint Detail View:** 5-week curriculum breakdown, week-by-week syllabus deliverables, simulated mentor card, and enrollment triggers.
4. **Learning Workspace:** Responsive 3-pane layout featuring module tree navigation, Markdown curriculum reader with syntax highlighting, and an interactive milestone checklist driving live progress calculation.
5. **AI Coach Drawer:** Socratic debugging assistant, architecture hints, schema advisor, and code reviews without giving away direct test answers.
6. **Mentor Feedback & Rubric:** 4-criterion grading matrix (Architecture, Code Quality, Security, Deliverables) with simulated evaluation breakdowns and revision/resubmit workflows.
7. **SkillProof™ Portfolio:** Recruiter-ready artifact view with public/private visibility toggle, simulated verification seal, and proof-of-work links (GitHub PRs, OpenAPI docs, and walkthrough videos).

---

## 🛠️ Tech Stack

- **Frontend:** Vanilla HTML5, Modern CSS3 with CSS Variables & Claymorphism, Vanilla ES6+ JavaScript
- **Typography:** Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*)
- **State Management:** Fully client-side reactive store persisted in `localStorage` (`skillsprint_prototype_v2`)
- **Server:** Zero-dependency Node.js HTTP static server (`server.js`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended) OR Python (3.9+) with `streamlit`

### Running Locally

**Option A: Using Node.js**
```bash
node server.js
# Open http://localhost:3000
```

**Option B: Using Streamlit**
```bash
pip install -r requirements.txt
streamlit run streamlit_app.py
# Open http://localhost:8501
```

### ☁️ Deploying on Streamlit Community Cloud

1. Head to [share.streamlit.io](https://share.streamlit.io).
2. Connect your GitHub account and select repository `ayushpatil5408/SkillSprint`.
3. Set **Main file path** to `streamlit_app.py`.
4. Click **Deploy!** — Streamlit Cloud installs `requirements.txt` and serves the app with full Claymorphic styling.

---

## ℹ️ Disclaimer

This repository is an interactive product prototype. All student personas, mentor identities, reviews, rubric scores, credentials, and verification seals are simulated sample data for demonstration purposes. State is stored locally in the browser's `localStorage`.
