import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { heroBanners } from '../data/projects';

interface HeroSectionProps {
  onExploreProjects: () => void;
}

export default function HeroSection({ onExploreProjects }: HeroSectionProps) {
  const activeBanners = heroBanners.filter(b => b.active);
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = activeBanners.length > 0 ? activeBanners : [heroBanners[0]];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const banner = banners[currentBanner];

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={banner.imageUrl}
          alt={banner.title}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-olive-dark/90 via-olive-dark/70 to-olive-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl animate-fadeIn" key={banner.id}>
          {/* Season Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-gold-light rounded-full animate-pulse" />
            <span className="text-xs font-medium text-gold-light uppercase tracking-wider">
              {banner.season}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {banner.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gold-light font-medium mb-4">
            {banner.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-8 max-w-lg">
            {banner.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onExploreProjects}
              className="flex items-center gap-2 bg-gold hover:bg-gold-light text-white px-6 py-3 rounded-md font-semibold text-sm transition-all hover:shadow-lg"
            >
              Explore Projects
              <ArrowRight size={16} />
            </button>
            <a
              href="tel:+8801818560316"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-md font-semibold text-sm transition-all backdrop-blur-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {banners.length > 1 && (
        <div className="absolute bottom-8 right-8 flex items-center gap-2">
          <button
            onClick={() => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {/* Banner Indicators */}
      {banners.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBanner(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentBanner ? 'w-8 bg-gold-light' : 'w-3 bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
