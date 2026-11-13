# Manyashree GP — Professional Personal Portfolio

A clean, corporate-style personal portfolio website for **Manyashree GP** built with **React**, **Vite**, and **custom modern CSS**.

---

## 🎨 Design & Style
- **Color Palette**: Crisp white background (`#ffffff`), subtle slates (`#f8fafc`, `#f1f5f9`), and sophisticated navy-blue accents (`#0a192f`, `#1e3a8a`, `#2563eb`).
- **Typography**: Professional typography powered by Google Fonts (*Plus Jakarta Sans* for headings, *Inter* for body text).
- **Layout**: Clean, corporate minimal aesthetic with high whitespace, structured cards, and full mobile & desktop responsiveness.
- **Vercel Compatible**: Zero custom server requirements; static assets served from `public/`.

---

## 📸 1. How to Add Your Profile Photograph
Place your photograph directly into the `public/images/` directory:
```
public/images/profile.jpg
```
The website automatically loads this image with a **professional circular crop** and responsive sizing. If the file is not yet placed, an elegant corporate monogram placeholder is displayed.

---

## 📄 2. How to Add Your Official Resume PDF
Place your resume PDF directly into the `public/resume/` directory:
```
public/resume/Manyashree_GP_Resume.pdf
```
- The **"Download Official CV (PDF)"** button is connected directly to `/resume/Manyashree_GP_Resume.pdf`.
- The **"Print / Save to PDF"** button uses your browser's native print engine to format the on-screen CV cleanly.

---

## 🔗 3. Centralized Profile Configuration
All personal links and data are maintained in one single configuration file:
👉 **[`src/data/portfolioData.js`](src/data/portfolioData.js)**

To update your contact details or social profiles:
```javascript
export const personalInfo = {
  name: "Manyashree GP",
  title: "Software Engineer & Full Stack Developer",
  naturalBio: "...",
  location: "Bangalore, India",
  status: "Open to Professional Opportunities",
  
  // Update with your official details when ready:
  email: "your.email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  
  // Asset Paths (Served from the public/ folder)
  profileImage: "/images/profile.jpg",
  resumeUrl: "/resume/Manyashree_GP_Resume.pdf",
};
```
*(No contact details or GitHub links are invented. When these fields are left empty `""`, the site displays clean, non-breaking placeholders with guidance).*

---

## 📑 Portfolio Sections
1. **Home (Hero)**: Circular profile photo crop, natural introduction, SIH 2025 Team Leader badge, quick CTAs, and connected profile row.
2. **About**: Engineering philosophy, 4 core pillars (*Clean Architecture, Team Leadership, Performance & Responsiveness, User-Centered Engineering*), and key stats.
3. **Skills**: Categorized technical capabilities (*Frontend Development, Backend & Systems, Databases & Tools, Core Methodologies*) with interactive category filters.
4. **Projects**: Detailed cards for **NEXUS ABYSS**, **BookAura**, **KrishiBandhu**, and **Hostel Finder**, with tech badges, GitHub buttons, and specifications modal.
5. **Achievements**: Highlighted **Smart India Hackathon 2025 Team Leader** nomination, academic honors, certifications, and mentorship.
6. **Resume**: Executive summary, SIH 2025 leadership, engineering projects, education credentials, with functional download and print actions.
7. **Contact**: Corporate communication panel, direct message form with client-side validation and confirmation feedback, plus configurable profile placeholders.
8. **Footer**: Navigation links, connected profile icons, and smooth back-to-top button.

---

## 🚀 Available Scripts

### Run Development Server
```bash
npm run dev
```
Starts the local development server at `http://localhost:5173/`.

### Build for Production (Vercel Ready)
```bash
npm run build
```
Creates an optimized, production-ready build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Previews the built application locally.

### Lint Codebase
```bash
npm run lint
```
Runs ESLint across the codebase.
