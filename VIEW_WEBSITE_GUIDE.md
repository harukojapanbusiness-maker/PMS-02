# 🖥️ ওয়েবসাইট দেখার গাইড (বাংলায়)

## আপনার ওয়েবসাইট এখন দেখার জন্য Ready!

---

## 🚀 ওয়েবসাইট চালু করার ৩টি পদ্ধতি:

### ✅ পদ্ধতি ১: Local Development Server (সবচেয়ে সহজ)

#### Step 1: Terminal খুলুন
- **Windows:** `Ctrl + R` চাপুন, `cmd` লিখে Enter চাপুন
- **Mac:** `Cmd + Space` চাপুন, `terminal` লিখে Enter চাপুন
- **Linux:** `Ctrl + Alt + T` চাপুন

#### Step 2: Project Folder এ যান
```bash
cd path/to/your/power-management-solutions
```

উদাহরণ:
```bash
cd Desktop/power-management-solutions
```

#### Step 3: Dependencies Install করুন (প্রথমবার)
```bash
npm install
```

এটা ১-২ মিনিট সময় নেবে।

#### Step 4: Development Server চালু করুন
```bash
npm run dev
```

#### ✅ ব্যাস! ওয়েবসাইট চালু হয়ে যাবে!

আপনি দেখবেন এই রকম message:
```
  VITE v6.3.5  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.1.100:3000/
```

#### Step 5: Browser এ খুলুন
```
http://localhost:3000
```

অথবা Terminal এ যে URL দেখাচ্ছে সেটা কপি করে browser এ পেস্ট করুন।

---

### ✅ পদ্ধতি ২: Production Build দেখুন

#### Step 1: Build করুন
```bash
npm run build
```

#### Step 2: Preview করুন
```bash
npm run preview
```

#### ✅ ওয়েবসাইট চালু হবে:
```
http://localhost:4173
```

---

### ✅ পদ্ধতি ৩: VS Code ব্যবহার করুন (সবচেয়ে সহজ)

#### Step 1: VS Code খুলুন
```bash
code .
```

(Project folder এ)

#### Step 2: Terminal খুলুন VS Code এ
```
Ctrl + ` (backtick)
```

#### Step 3: Server চালু করুন
```bash
npm run dev
```

#### Step 4: Browser এ খুলুন
```
http://localhost:3000
```

---

## 🎯 ওয়েবসাইটে কি কি দেখবেন:

### 🏠 Home Page
- **Hero Section:** সুন্দর banner with seasonal image
- **Stats:** 50+ Projects, 25+ Engineers, 15+ Years, 98% Success Rate
- **Live Visitor Counter:** রিয়েল-টাইম ভিজিটর কাউন্ট
- **Projects Grid:** 8টি sample projects
- **Lead Collection Form:** ভিজিটর inquiry form

### 🔍 Projects Page
- **Search Bar:** প্রজেক্ট খুঁজুন
- **Category Filter:** Power, Sub-Station, Telecom, Civil, Garments
- **Status Filter:** Completed, Ongoing, Upcoming, Proposal
- **Grid/List View:** দুইভাবে দেখতে পারবেন

### 📋 Project Detail Page
- **Image Gallery:** Multiple images with navigation
- **Specifications:** Technical details
- **Booking Form:** Site visit request
- **Quantity Updater:** Scope adjust করুন

### ℹ️ About Page
- **Company Story:** Power Management Solutions এর ইতিহাস
- **Services:** সব services এর list
- **Core Values:** Safety, Innovation, Timely Delivery, Quality
- **Team Stats:** Engineers, Projects, Experience

### 🔐 Admin Login
- **URL:** http://localhost:3000/login
- **Owner Login:**
  - Username: `owner`
  - Password: `PMS@Owner2025`
- **Admin Login:**
  - Username: `admin`
  - Password: `PMS@Admin2025`

### 📊 Admin Dashboard
- **Live Stats:** Total visitors, Active visitors, Total leads, New leads
- **Recent Leads:** সাম্প্রতিক lead গুলো
- **Recent Visitors:** সাম্প্রতিক visitors
- **Lead Management:** Status update করুন
- **Visitor Tracking:** সব visitors এর details
- **Project Management:** Projects edit করুন
- **Banner Management:** Seasonal banners control করুন

---

## 📱 Features Test করুন:

### 1. Home Page Test
```
✓ Hero banner দেখুন
✓ Stats cards দেখুন
✓ Live visitor counter দেখুন
✓ Projects grid দেখুন
✓ Lead collection form দেখুন
```

### 2. Search & Filter Test
```
✓ Search bar এ "power" লিখুন
✓ Category filter এ "Telecom" select করুন
✓ Status filter এ "Completed" select করুন
✓ Grid/List view toggle করুন
```

### 3. Project Detail Test
```
✓ যেকোনো project এ click করুন
✓ Image gallery navigate করুন
✓ Specifications দেখুন
✓ Quantity updater test করুন
✓ "Request Site Visit" button click করুন
```

### 4. Admin Login Test
```
✓ /login এ যান
✓ Owner credentials দিয়ে login করুন
✓ Dashboard দেখুন
✓ Leads tab এ যান
✓ Visitors tab এ যান
✓ Logout করুন
```

### 5. Mobile Responsive Test
```
✓ Browser window ছোট করুন
✓ Mobile menu দেখুন
✓ Responsive layout চেক করুন
```

---

## 🛠️ Common Commands:

### Development Server চালু করা:
```bash
npm run dev
```

### Server বন্ধ করা:
```
Terminal এ Ctrl + C চাপুন
```

### Dependencies Install করা:
```bash
npm install
```

### Build করা:
```bash
npm run build
```

### Preview করা:
```bash
npm run preview
```

---

## 🔧 Troubleshooting:

### Problem: "npm not found"

#### সমাধান:
Node.js install করুন:
```
https://nodejs.org/en/download
```

LTS version download করুন এবং install করুন।

### Problem: "Port 3000 already in use"

#### সমাধান:
```bash
# অন্য port এ চালু করুন
npm run dev -- --port 3001
```

অথবা:
```bash
# পুরানো process বন্ধ করুন
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### Problem: "Module not found"

#### সমাধান:
```bash
npm install
```

### Problem: Browser এ কিছু দেখাচ্ছে না

#### সমাধান:
1. Browser console খুলুন (F12)
2. Error messages দেখুন
3. Cache clear করুন (Ctrl + Shift + Delete)
4. আবার reload করুন

---

## 🌐 Network এ Access করা (অন্য device থেকে):

### Step 1: আপনার IP address জানুন
```bash
# Windows:
ipconfig

# Mac/Linux:
ifconfig
```

IPv4 Address খুঁজুন (যেমন: 192.168.1.100)

### Step 2: Server চালু করুন network access সহ
```bash
npm run dev -- --host
```

### Step 3: অন্য device থেকে access করুন
```
http://YOUR_IP:3000
```

উদাহরণ:
```
http://192.168.1.100:3000
```

---

## 📸 Screenshots (কি দেখবেন):

### Home Page:
```
┌─────────────────────────────────────┐
│  [Hero Banner with Image]           │
│  "Powering Bangladesh's Future"     │
├─────────────────────────────────────┤
│  📊 50+ Projects | 25+ Engineers    │
│  🏆 15+ Years | 98% Success Rate    │
│  👥 Live Visitors: 5 Active         │
├─────────────────────────────────────┤
│  🔍 Search | Filter | Grid/List     │
├─────────────────────────────────────┤
│  [Project Card 1] [Project Card 2]  │
│  [Project Card 3] [Project Card 4]  │
├─────────────────────────────────────┤
│  📧 Lead Collection Form            │
└─────────────────────────────────────┘
```

### Admin Dashboard:
```
┌─────────────────────────────────────┐
│  👤 Welcome, owner (owner)  [Logout]│
├─────────────────────────────────────┤
│  👥 15 Total | 🟢 5 Active          │
│  📧 8 Leads | 🆕 3 New              │
├─────────────────────────────────────┤
│  [Dashboard] [Leads] [Visitors]     │
│  [Projects] [Banners] [Guide]       │
├─────────────────────────────────────┤
│  Recent Leads:                      │
│  • John Doe - +8801712345678        │
│  • Jane Smith - +8801812345678      │
└─────────────────────────────────────┘
```

---

## 🎯 Quick Start (সবচেয়ে দ্রুত):

```bash
# Step 1: Terminal খুলুন
# Step 2: Project folder এ যান
cd power-management-solutions

# Step 3: Install করুন (প্রথমবার)
npm install

# Step 4: Server চালু করুন
npm run dev

# Step 5: Browser এ খুলুন
# http://localhost:3000
```

**ব্যাস! আপনার ওয়েবসাইট চালু হয়ে যাবে!** 🎉

---

## 📞 এখন কি করবেন:

1. ✅ Terminal খুলুন
2. ✅ Project folder এ যান
3. ✅ `npm install` চালান (প্রথমবার)
4. ✅ `npm run dev` চালান
5. ✅ Browser এ `http://localhost:3000` খুলুন
6. ✅ ওয়েবসাইট দেখুন এবং test করুন

---

## 🆘 সমস্যা হলে:

### আমাকে জানান:
1. কি error message আসছে?
2. কোন step এ আটকে গেছেন?
3. Screenshot দিতে পারলে আরও ভালো

---

<div align="center">

## 🎉 আপনার ওয়েবসাইট এখন দেখার জন্য Ready!

**শুধু `npm run dev` চালান এবং browser এ খুলুন!**

</div>
