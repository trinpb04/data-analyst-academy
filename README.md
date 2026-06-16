<div align="center">

# 🔭 Data Analyst Academy

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=26&pause=1000&color=3B82F6&center=true&vCenter=true&width=600&lines=Interactive+Knowledge+Atlas;SQL,+Python,+and+Power+BI;Master+Data+Analytics" alt="Typing SVG" />

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Force_Graph-FF6B6B?style=for-the-badge&logo=graphql&logoColor=white" alt="Force Graph" />
  <img src="https://img.shields.io/badge/Deployment-gh--pages-181717?style=for-the-badge&logo=github&logoColor=white" alt="Deployment" />
</p>

**An interactive, encyclopedia-style learning platform dedicated to Data Analytics, designed with a stunning visual aesthetic and an intuitive learning path.**

[**🚀 Explore the Live Demo**](https://trinpb04.github.io/data-analyst-academy/)

</div>

---

## ✨ Outstanding Features

### 🌐 Interactive Knowledge Atlas
Forget boring, flat lists of lessons. The academy utilizes a physics-based **force-directed graph** to visualize the interconnectedness of knowledge domains:
- **Pan, zoom, drag, and drop** to freely explore the knowledge "planets".
- Click on any node to reveal a detailed, rich-text encyclopedia entry in the sidebar.
- Auto-stabilizing clusters group related topics together intuitively.

### 🌓 Dual-Theme Aesthetics
A bespoke visual system built carefully for both light and dark preferences, offering far more than just inverted colors:
- 🌌 **Deep Space (Dark Mode)**: Immerse yourself in deep space with twinkling stars, glowing nebulae, and neon-lit planetary nodes.
- 📜 **Warm Parchment (Light Mode)**: An elegant, solarized aesthetic featuring warm cream backgrounds, soft drop shadows, refined 3D embossing, and smooth connecting paths.

### 📚 Deep-Dive Content Modules
Pre-loaded with comprehensive, real-world data analytics curriculums curated from industry-leading books:
- 📈 **Business Acumen**: Problem Formulation (SMART), Frameworks (AARRR, RFM), KPIs (LTV, CAC), Expected Value, Data Storytelling.
- 📊 **Statistics**: Bayes' Theorem, Central Limit Theorem, Hypothesis Testing, A/B Testing Sample Sizes, Probability Distributions.
- 💾 **SQL & Databases**: Execution Order, Advanced JOINs, Window Functions (`OVER`, `RANK`, `LAG`), Query Optimization (SARGable), CTEs.
- 🐍 **Python**: Pandas (DataFrames vs Series), Exploratory Data Analysis (EDA), Matplotlib/Seaborn, Scikit-Learn (Train/Test Leakage), Web Scraping (BeautifulSoup).
- 🟡 **Power BI & DataViz**: Data Modeling (Star Schema), DAX Measures vs Calculated Columns, Advanced DAX (Context Transition), Power BI Service & RLS.
- 📗 **Excel & Spreadsheets**: Core Formulas (`INDEX`/`MATCH`, `XLOOKUP`), Pivot Tables, Power Query (Unpivot), What-If Analysis.

---

## 🚀 Local Development

The project is built with **React** and bundled using **Vite**.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/trinpb04/data-analyst-academy.git
   cd data-analyst-academy
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   *Open your browser at `http://localhost:5173/data-analyst-academy/` (Vite's default port is 5173)*

4. **Test production build & PWA locally:**
   ```bash
   npm run build
   npm run preview
   ```
   *Open your browser at `http://localhost:4173/data-analyst-academy/`*

---

## 📱 Install Web App (PWA)

Data Analyst Academy is a Progressive Web App (PWA). You can install it directly to your device for an app-like experience and offline access:

**On iOS (Safari):**
1. Open the live demo link in Safari.
2. Tap the **Share** button (square with an arrow pointing up) at the bottom.
3. Scroll down and tap **"Add to Home Screen"**.
4. Confirm by tapping **"Add"**.

**On Android (Chrome):**
1. Open the live demo link in Chrome.
2. Tap the three-dot menu icon in the top right.
3. Tap **"Install app"** or **"Add to Home screen"**.
4. Follow the on-screen prompt to install.

**On Desktop (Chrome/Edge):**
1. Open the live demo link.
2. Look for the **Install** icon in the right side of the URL address bar.
3. Click it and select **"Install"**.

---

## 🌍 Deployment (GitHub Pages)

Since the project uses Vite and is configured with `base: '/data-analyst-academy/'`, deploying to GitHub Pages is fully automated.

1. Install `gh-pages` if you haven't already:
   ```bash
   npm install gh-pages --save-dev
   ```
2. The `package.json` is already configured with deployment scripts:
   ```bash
   npm run deploy
   ```
3. Go to your repository on GitHub > **Settings** > **Pages** > Set the source to the `gh-pages` branch. Your interactive academy will be live in minutes!

---

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS + CSS Variables Design System
- **Graph Visualization**: `react-force-graph-2d` + `d3-force`
- **Typography**: Inter (Google Fonts)

---

<div align="center">
  <i>Developed with ❤️ for Data and Beautiful UIs.</i>
</div>
