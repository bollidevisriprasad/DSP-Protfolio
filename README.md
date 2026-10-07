# 🚀 DSP Portfolio — Bolli Devi Sri Prasad

A professional React portfolio for Bolli Devi Sri Prasad — Full Stack Developer.  
**Black & Orange** theme with Haikyuu-inspired volleyball aesthetics.

---

## 🛠️ Tech Stack
- React 18
- Pure CSS (no external UI libraries)
- GitHub Pages deployment

---

## 📦 Installation & Local Development

### Step 1 — Install Node.js
Download from: https://nodejs.org (LTS version)

### Step 2 — Clone / Download this project
```bash
# If you have git:
git clone https://github.com/bollidevisriprasad/dsp-portfolio.git
cd dsp-portfolio

# OR just download the zip and extract it
```

### Step 3 — Install dependencies
```bash
npm install
```

### Step 4 — Run locally
```bash
npm start
```
Opens at http://localhost:3000 in your browser.

---

## 🌐 Deploy to GitHub Pages

### Step 1 — Create GitHub repo
1. Go to https://github.com/new
2. Name it: `dsp-portfolio`
3. Make it **Public**
4. Click **Create repository**

### Step 2 — Push your code
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/bollidevisriprasad/dsp-portfolio.git
git push -u origin main
```

### Step 3 — Install gh-pages & deploy
```bash
npm install gh-pages --save-dev
npm run deploy
```

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select branch: `gh-pages`
3. Click **Save**

### Step 5 — Your site is live! 🎉
URL: `https://bollidevisriprasad.github.io/dsp-portfolio`

(Wait ~2 minutes for it to go live after deploying)

---

## 🔄 Update & Redeploy
After making changes:
```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

---

## 📁 Project Structure
```
dsp-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Education.js
│   │   ├── Certifications.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

---

## 📧 Contact
- Email: bdevisriprasad2004@gmail.com  
- LinkedIn: https://www.linkedin.com/in/devi-sri-prasad-3508702a0/?isSelfProfile=true
- GitHub: https://github.com/bollidevisriprasad/DSP-Protfolio
