import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Zap,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Shield,
  Award
} from 'lucide-react';
import { companyInfo } from '../data/projects';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About Us' },
    { path: '/admin', label: 'Admin Panel' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-warm-white">
      {/* Top Bar */}
      <div className="bg-olive text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={12} />
              {companyInfo.cells[0]}
            </span>
            <span className="flex items-center gap-1">
              <Mail size={12} />
              {companyInfo.email}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={12} />
            <span>{companyInfo.headOffice}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-olive rounded-lg flex items-center justify-center group-hover:bg-olive-dark transition-colors">
                <Zap className="text-gold-light" size={24} />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm lg:text-base font-bold text-text-primary tracking-tight leading-tight">
                  POWER MANAGEMENT
                </h1>
                <p className="text-[10px] lg:text-xs text-text-muted tracking-widest uppercase">
                  Solutions
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-olive text-white'
                      : 'text-text-secondary hover:bg-warm-gray hover:text-olive'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${companyInfo.cells[0]}`}
                className="hidden sm:flex items-center gap-2 bg-gold text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gold-light transition-colors"
              >
                <Phone size={14} />
                Get in Touch
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-text-secondary hover:bg-warm-gray"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white animate-slideDown">
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-olive text-white'
                      : 'text-text-secondary hover:bg-warm-gray'
                  }`}
                >
                  {link.label}
                  <ChevronRight size={16} />
                </Link>
              ))}
              <a
                href={`tel:${companyInfo.cells[0]}`}
                className="flex items-center justify-center gap-2 bg-gold text-white px-4 py-3 rounded-md text-sm font-semibold mt-4"
              >
                <Phone size={14} />
                Call Us: {companyInfo.cells[0]}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-olive-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-olive rounded-lg flex items-center justify-center">
                  <Zap className="text-gold-light" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base">Power Management Solutions</h3>
                  <p className="text-xs text-gray-300">Engineering Excellence</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed max-w-md">
                A customer-focused, quality driven Engineering, Erection, Installation & Construction Company committed to providing the entire range of services for Power Generation, Sub-stations and Industrial Engineering Projects.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1 text-xs text-gold-light">
                  <Shield size={14} />
                  <span>Category A, B, C Licensed</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gold-light">
                  <Award size={14} />
                  <span>Since 2010</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-sm mb-4 text-gold-light uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-300 hover:text-gold-light transition-colors flex items-center gap-1"
                    >
                      <ChevronRight size={12} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-sm mb-4 text-gold-light uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-gold-light" />
                  <span>{companyInfo.headOffice}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} className="shrink-0 text-gold-light" />
                  <span>{companyInfo.cells.join(', ')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} className="shrink-0 text-gold-light" />
                  <span className="break-all">{companyInfo.email}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-olive mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Power Management Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>TIN: {companyInfo.tinNumber}</span>
              <span>|</span>
              <span>VAT: {companyInfo.vatRegistration}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
