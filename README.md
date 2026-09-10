# Power Management Solutions - Company Commerce & Project Showcase

<div align="center">

![Power Management Solutions](https://img.shields.io/badge/Power%20Management-Solutions-4B5320?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=flat-square&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?style=flat-square&logo=vite)

**Engineering Excellence in Bangladesh**

</div>

---

## 📋 Project Overview

A comprehensive **Company Commerce & Project Showcase Web Application** for Power Management Solutions, built with modern web technologies. Features include dynamic project management, admin dashboard with authentication, live visitor tracking, and lead collection system.

### 🎨 Design Theme
**Refined Bangladesh Military Cantonment Style** with Warm White Theme
- Clean, disciplined grid layout
- Professional typography (Inter font)
- Deep Olive Green (#4B5320) and Muted Gold/Brass accents
- Fully responsive (Desktop & Mobile)

---

## ✨ Features

### 🏠 Public Website
- **Dynamic Hero Section** - Seasonal banners with auto-rotation
- **Project Showcase** - Filterable project gallery with detailed views
- **Search & Filters** - Category and status-based filtering
- **Live Visitor Counter** - Real-time visitor tracking display
- **Lead Collection Form** - Visitor inquiry submission
- **About Page** - Company information and services
- **Responsive Design** - Mobile-first approach

### 🔐 Admin Dashboard
- **Secure Login System** - Role-based authentication (Owner/Admin)
- **Live Analytics** - Visitor tracking and statistics
- **Lead Management** - View, update status, delete leads
- **Project Management** - Edit projects via data file
- **Banner Management** - Control seasonal hero banners
- **Real-time Stats** - Total visitors, active visitors, leads count

### 📊 Data Management
- **Centralized Data File** - Easy editing without coding
- **Visitor Tracking** - Automatic visitor logging
- **Lead Collection** - Form submissions with status tracking
- **LocalStorage Persistence** - Data survives page refreshes

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.2
- **Language:** TypeScript 5.7
- **Build Tool:** Vite 6.3
- **Styling:** Tailwind CSS 4.1
- **Icons:** Lucide React
- **Routing:** React Router DOM 6.8
- **Animation:** Framer Motion 11.16

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/power-management-solutions.git

# Navigate to project directory
cd power-management-solutions

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

---

## 🔑 Admin Access

### Login Credentials

**Owner Access (Full Control)**
- Username: `owner`
- Password: `PMS@Owner2025`

**Admin Access (Limited Control)**
- Username: `admin`
- Password: `PMS@Admin2025`

### Access Admin Panel
1. Navigate to `/login` or click "Admin Login" in navigation
2. Enter credentials
3. Access dashboard at `/admin`

---

## 📁 Project Structure

```
power-management-solutions/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BookingModal.tsx
│   │   ├── FilterSidebar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Layout.tsx
│   │   ├── LeadCollectionForm.tsx
│   │   ├── LiveVisitorCounter.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ScrollToTop.tsx
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   └── VisitorContext.tsx
│   ├── data/
│   │   └── projects.ts          # 📝 EDIT THIS FILE
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── AdminPanel.tsx
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── ProjectDetailPage.tsx
│   │   └── ProjectsPage.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.js
```

---

## 📝 How to Edit Data

All project and banner data is stored in **`src/data/projects.ts`**

### Adding a New Project

Open `src/data/projects.ts` and add a new object to the `projects` array:

```typescript
{
  id: "proj-NEW",
  title: "Your Project Title",
  category: "Power", // Options: Power, Sub-Station, Telecom, Civil, Garments Tech Packs, Industrial
  subcategory: "Your Subcategory",
  description: "Full project description...",
  shortDescription: "Brief summary for cards...",
  location: "City, Bangladesh",
  client: "Client Name",
  year: 2025,
  status: "Ongoing", // Options: Completed, Ongoing, Upcoming, Proposal
  specifications: [
    { label: "Spec Name", value: "Spec Value" },
  ],
  images: ["https://image-url-1", "https://image-url-2"],
  scope: { quantity: 1, unit: "Unit", maxQuantity: 10 },
  budget: "৳ XX,XX,XX,XXX",
  tags: ["Tag1", "Tag2"]
}
```

### Changing Seasonal Banners

Edit the `heroBanners` array in `src/data/projects.ts`:

```typescript
{
  id: "banner-spring-2025",
  title: "Your Banner Title",
  subtitle: "Your Subtitle",
  description: "Banner description...",
  imageUrl: "https://your-image-url.com/image.jpg",
  season: "Spring 2025",
  active: true // Set to true to display
}
```

### Updating Company Information

Edit the `companyInfo` object at the top of `src/data/projects.ts`

---

## 📊 Features Breakdown

### Live Visitor Tracking
- Tracks all unique visitors automatically
- Shows active visitors (last 5 minutes)
- Records page visits and timestamps
- Displays real-time counter on homepage

### Lead Management
- Visitors submit inquiries via contact form
- Admin can view all leads in dashboard
- Update lead status: New → Contacted → Converted
- Delete leads when no longer needed
- All data stored in localStorage

### Project Management
- 8 sample projects included
- Categories: Power, Sub-Station, Telecom, Civil, Garments Tech Packs
- Status: Completed, Ongoing, Upcoming, Proposal
- Detailed project pages with image galleries
- Booking/consultation request system

---

## 🔒 Security Notes

### Current Implementation (Demo)
- Client-side authentication only
- Hardcoded credentials in AuthContext.tsx
- localStorage for session management
- Suitable for demo/portfolio sites

### Production Recommendations
- Move credentials to backend
- Use JWT tokens
- Implement password hashing
- Add rate limiting
- Use HTTPS
- Implement CSRF protection
- Add 2FA for owner account

---

## 🌐 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Drag and drop 'dist' folder to Netlify
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

This is a custom project for Power Management Solutions. For modifications:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is proprietary software created for Power Management Solutions.

---

## 📞 Contact

**Power Management Solutions**
- Address: 667/5, Gabtola, Mogbazar, Dhaka-1215
- Phone: +880 1818-560316, +880 1711-134359
- Email: power.managmentsolution2025@gmail.com

---

## 🙏 Acknowledgments

- React Team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for beautiful icons
- Vite for the fast build tool
- Power Management Solutions for the project opportunity

---

<div align="center">

**Built with ❤️ for Bangladesh's Engineering Excellence**

© 2025 Power Management Solutions. All rights reserved.

</div>
