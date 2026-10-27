# ⚡ SVG Icons Vault & GitHub CDN Showcase

Is project me aapke sabhi SVG icons hosted hain aur sath hi ek modern **Web Showcase Gallery (`index.html`)** di gayi hai jisse aap sabhi icons ka direct CDN link ek click me copy karke apne kisi bhi website ya app me use kar sakte hain.

Aage chalkar jab bhi aap naye `.svg` files is folder me add karenge, ye page **automatically** un icons ka naam aur link create kar dega!

---

## 🚀 Features

- 🌐 **Instant CDN Links**: High-speed jsDelivr CDN links (`Content-Type: image/svg+xml`, zero rate limits, global caching).
- 🔄 **Auto-Detection for Future SVGs**: 
  - **GitHub Actions Automation**: GitHub par push karte hi `icons.json` manifest auto-update ho jata hai.
  - **Live GitHub API Auto-Sync**: Webpage par "Auto Sync" button dabate hi GitHub se turant live naye SVGs load ho jate hain!
  - **Local Batch Script**: Offline testing ke liye `update-icons.bat` par double click karein.
- 📋 **1-Click Copy**: Direct Link, HTML `<img>` tag, ya raw SVG code ek click me clipboard par copy karein.
- 🔍 **Live Search & Filter**: Name ya category (Social, System, Scanner & QR) se turant search karein.
- 🎨 **Dark / Light Mode**: Light and Dark theme toggle available.
- 📱 **Mobile & Desktop Responsive**: Har screen size par clean look.

---

## 🛠️ Step 1: GitHub Par Upload Kaise Karein (Push to GitHub)

Apne computer me terminal / command prompt kholein aur is folder me niche di gayi commands chalayein:

```bash
# 1. Git repository initialize karein
git init

# 2. Sabhi files stage karein
git add .

# 3. Commit karein
git commit -m "Add SVG icons and showcase vault"

# 4. Main branch set karein
git branch -M main

# 5. Apne GitHub repository ka link connect karein (USERNAME aur REPO_NAME replace karein)
git remote add origin https://github.com/AAPKA_USERNAME/AAPKA_REPO_NAME.git

# 6. GitHub par push karein
git push -u origin main
```

---

## 🌐 Step 2: GitHub Pages Enable Kaise Karein

Is web showcase page ko internet par live chalane ke liye:

1. Apne GitHub repository page par jayein.
2. **Settings** tab par click karein.
3. Left sidebar me **Pages** par click karein.
4. **Build and deployment** section me:
   - Source: **Deploy from a branch**
   - Branch: **main** (ya `master`) aur folder: `/ (root)`
5. **Save** par click karein.
6. 1-2 minute me aapka showcase page live ho jayega:  
   👉 `https://AAPKA_USERNAME.github.io/AAPKA_REPO_NAME/`

---

## 🔗 Icons Ka Link Apne Aane Wale Projects Me Kaise Use Karein

Aap apne kisi bhi HTML, React, Next.js, Vue, ya Mobile App me icons ko niche diye gaye tareeqon se use kar sakte hain:

### 1. jsDelivr CDN (Sabse Fast & Recommended)
```html
<img src="https://cdn.jsdelivr.net/gh/AAPKA_USERNAME/AAPKA_REPO_NAME@main/discord1.svg" alt="Discord" width="24" height="24" />
```

### 2. GitHub Pages Direct Link
```html
<img src="https://AAPKA_USERNAME.github.io/AAPKA_REPO_NAME/discord1.svg" alt="Discord" width="24" height="24" />
```

### 3. CSS Background Image me Use Karna
```css
.icon-discord {
  width: 24px;
  height: 24px;
  background-image: url('https://cdn.jsdelivr.net/gh/AAPKA_USERNAME/AAPKA_REPO_NAME@main/discord1.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
```

---

## 🔄 Aane Wale Samay Me Naye Icons Kaise Add Karein?

Jab bhi aapke paas koi naya `.svg` icon aaye:

1. Use is folder me paste kar dein (jaise `facebook.svg`, `cart.svg`, etc.).
2. Commit aur push karein:
   ```bash
   git add .
   git commit -m "Add new svg icons"
   git push
   ```
3. **Automatic Magic**:
   - Repository me maujood **GitHub Action** (`.github/workflows/auto-update-icons.yml`) automatically chalega aur `icons.json` ko update kar dega!
   - Showcase webpage par naya icon apne aap naam aur direct copy link ke sath add ho jayega!
   - Agar aap bina push kiye offline check karna chahte hain, to bas **`update-icons.bat`** par double click kar dein.

---

## 📁 Project Structure

```text
Web Icons/
├── .github/
│   └── workflows/
│       └── auto-update-icons.yml   # GitHub Action: Naye SVGs aane par auto update
├── index.html                      # Showcase page (Name, preview, link & 1-click copy)
├── icons.json                      # Icons ka manifest list
├── generate-icons.js               # Node.js script jo SVGs scan karke JSON banata hai
├── update-icons.bat                # Windows 1-click script local update ke liye
├── README.md                       # Complete guide
└── *.svg                           # Aapke sabhi SVG icons
```
