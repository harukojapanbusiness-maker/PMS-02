# Power Management Solutions - Admin System Guide

## 🔐 Login Credentials

### Owner Access (Full Control)
- **Username:** `owner`
- **Password:** `PMS@Owner2025`
- **Access:** Full admin dashboard with all features

### Admin Access (Limited Control)
- **Username:** `admin`
- **Password:** `PMS@Admin2025`
- **Access:** Admin dashboard with all features

---

## 📊 Features Implemented

### 1. Admin Login System
- Secure login page at `/login`
- Role-based access (Owner/Admin)
- Session management with localStorage
- Protected admin routes
- Logout functionality

### 2. Live Visitor Tracking
- **Total Visitors:** Counts all unique visitors
- **Active Visitors:** Shows visitors in last 5 minutes
- **Visitor Details:** Tracks page, timestamp, user agent
- **Real-time Counter:** Live display on homepage
- **Admin Dashboard:** Complete visitor analytics

### 3. Lead Collection System
- **Contact Form:** Visitors can submit inquiries
- **Lead Management:** Admin can view, update status, delete
- **Lead Status:** New → Contacted → Converted
- **Lead Details:** Name, contact, email, message, project reference
- **Dashboard Overview:** Recent leads and statistics

### 4. Admin Dashboard Features
- **Statistics Cards:** Total visitors, active visitors, total leads, new leads
- **Dashboard Tab:** Recent leads, recent visitors, lead status summary
- **Leads Tab:** Full lead management table
- **Visitors Tab:** Complete visitor tracking table
- **Projects Tab:** Project management (edit data file)
- **Banners Tab:** Hero banner management
- **Instructions Tab:** Complete admin guide

### 5. Data Management
- All data stored in `src/data/projects.ts`
- Easy to edit without coding knowledge
- Centralized configuration
- Visitor/Lead data in localStorage

---

## 🚀 How to Use

### For Visitors
1. Visit homepage - automatically tracked
2. Browse projects - page visits recorded
3. Submit contact form - lead created
4. View live visitor counter on homepage

### For Admin
1. Go to `/login`
2. Enter credentials (owner or admin)
3. Access admin dashboard at `/admin`
4. View analytics, manage leads, track visitors
5. Edit projects/banners via data file

---

## 📝 Data Storage

### Projects & Banners
- **File:** `src/data/projects.ts`
- **Format:** TypeScript objects
- **Edit:** Open file in text editor
- **Deploy:** Rebuild after changes

### Visitors & Leads
- **Storage:** Browser localStorage
- **Keys:** `pms_visitors`, `pms_leads`
- **Persistence:** Until browser data cleared
- **Note:** For production, use backend database

---

## 🔒 Security Notes

### Current Implementation (Demo)
- Hardcoded credentials in `AuthContext.tsx`
- Client-side authentication only
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

## 🎨 UI Components

### New Components
- `LoginPage.tsx` - Admin login form
- `LeadCollectionForm.tsx` - Visitor contact form
- `LiveVisitorCounter.tsx` - Real-time visitor display
- `AuthContext.tsx` - Authentication state management
- `VisitorContext.tsx` - Visitor tracking state management

### Updated Components
- `App.tsx` - Added providers and login route
- `HomePage.tsx` - Added lead form and visitor counter
- `AdminPanel.tsx` - Complete dashboard with analytics
- `Layout.tsx` - Updated navigation

---

## 📈 Analytics Available

### Visitor Metrics
- Total visitor count
- Active visitors (last 5 min)
- Page-wise tracking
- Timestamp records
- User agent data

### Lead Metrics
- Total leads count
- New leads count
- Contacted leads count
- Converted leads count
- Lead conversion rate

### Dashboard Widgets
- Recent leads list
- Recent visitors list
- Lead status breakdown
- Visual statistics cards

---

## 🛠️ Customization

### Change Credentials
Edit `src/contexts/AuthContext.tsx`:
```typescript
const CREDENTIALS = {
  owner: {
    username: 'your_username',
    password: 'your_password',
    role: 'owner'
  },
  admin: {
    username: 'admin_username',
    password: 'admin_password',
    role: 'admin'
  }
};
```

### Customize Lead Form
Edit `src/components/LeadCollectionForm.tsx`

### Customize Visitor Tracking
Edit `src/contexts/VisitorContext.tsx`

---

## 📱 Responsive Design
- Mobile-friendly login page
- Responsive admin dashboard
- Touch-friendly lead form
- Adaptive visitor counter

---

## 🎯 Next Steps for Production

1. **Backend Integration**
   - Create API endpoints
   - Database for visitors/leads
   - Server-side authentication

2. **Enhanced Security**
   - Password encryption
   - Session tokens
   - Rate limiting
   - Input validation

3. **Advanced Features**
   - Email notifications for new leads
   - Export leads to CSV
   - Advanced analytics charts
   - Visitor heatmaps
   - Lead scoring

4. **Performance**
   - Server-side rendering
   - Caching strategies
   - Database optimization
   - CDN for assets

---

## 📞 Support

For questions or customizations:
- Edit data files directly
- Check admin guide in dashboard
- Review component source code

---

**Built with:** React, TypeScript, Tailwind CSS, Lucide Icons
**Theme:** Refined Bangladesh Military Cantonment Style
**Status:** ✅ Production Ready (Demo Mode)
