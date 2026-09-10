import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  User,
  Tag,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  ShoppingCart,
  Phone,
  FileText,
  CheckCircle
} from 'lucide-react';
import { projects } from '../data/projects';
import BookingModal from '../components/BookingModal';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(project?.scope.quantity || 1);
  const [bookingOpen, setBookingOpen] = useState(false);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Project Not Found</h2>
        <p className="text-text-muted mb-6">The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="text-olive font-semibold hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const statusColors: Record<string, string> = {
    'Completed': 'bg-green-100 text-green-800 border-green-200',
    'Ongoing': 'bg-blue-100 text-blue-800 border-blue-200',
    'Upcoming': 'bg-amber-100 text-amber-800 border-amber-200',
    'Proposal': 'bg-purple-100 text-purple-800 border-purple-200'
  };

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
        <Link to="/" className="hover:text-olive transition-colors">Home</Link>
        <span>/</span>
        <Link to="/projects" className="hover:text-olive transition-colors">Projects</Link>
        <span>/</span>
        <span className="text-text-primary font-medium truncate">{project.title}</span>
      </nav>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-text-muted hover:text-olive mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image Gallery */}
          <div className="relative rounded-xl overflow-hidden bg-warm-gray">
            <img
              src={project.images[currentImage]}
              alt={project.title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Navigation */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
              {currentImage + 1} / {project.images.length}
            </div>
          </div>

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === currentImage ? 'border-olive' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Title & Meta */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[project.status]}`}>
                {project.status}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-warm-gray text-text-secondary">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-warm-gray text-text-secondary">
                {project.subcategory}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
              <span className="flex items-center gap-1">
                <MapPin size={14} className="text-olive" />
                {project.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} className="text-olive" />
                {project.year}
              </span>
              <span className="flex items-center gap-1">
                <User size={14} className="text-olive" />
                {project.client}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl border border-border-light p-6">
            <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
              <FileText size={18} className="text-olive" />
              Project Description
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-xl border border-border-light p-6">
            <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              <CheckCircle size={18} className="text-olive" />
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.specifications.map((spec, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-warm-gray rounded-lg">
                  <span className="text-sm font-medium text-text-muted">{spec.label}</span>
                  <span className="text-sm font-semibold text-text-primary">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-warm-gray rounded-full text-xs font-medium text-text-secondary"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Booking Card */}
          <div className="bg-white rounded-xl border border-border-light p-6 shadow-sm sticky top-24">
            <h3 className="text-lg font-bold text-text-primary mb-1">Project Booking</h3>
            <p className="text-xs text-text-muted mb-4">Request a site visit or schedule a consultation</p>

            {/* Budget */}
            <div className="bg-warm-gray rounded-lg p-4 mb-4">
              <p className="text-xs text-text-muted mb-1">Estimated Budget</p>
              <p className="text-2xl font-bold text-gold">{project.budget}</p>
            </div>

            {/* Quantity/Scope Updater */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">
                Quantity / Scope
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:bg-warm-gray transition-colors"
                >
                  <Minus size={14} />
                </button>
                <div className="flex-1 text-center">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Math.min(project.scope.maxQuantity, parseInt(e.target.value) || 1)))}
                    min={1}
                    max={project.scope.maxQuantity}
                    className="w-full text-center text-lg font-bold text-text-primary border border-border rounded-lg py-1.5 focus:outline-none focus:ring-2 focus:ring-olive/30"
                  />
                  <p className="text-xs text-text-muted mt-1">{project.scope.unit} (max: {project.scope.maxQuantity})</p>
                </div>
                <button
                  onClick={() => setQuantity(Math.min(project.scope.maxQuantity, quantity + 1))}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:bg-warm-gray transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-white py-3 rounded-lg font-semibold text-sm transition-all hover:shadow-lg mb-3"
            >
              <ShoppingCart size={16} />
              Request Site Visit / Booking
            </button>
            <a
              href={`tel:+8801818560316`}
              className="w-full flex items-center justify-center gap-2 bg-white border-2 border-olive text-olive py-3 rounded-lg font-semibold text-sm hover:bg-olive hover:text-white transition-all"
            >
              <Phone size={16} />
              Call for Inquiry
            </a>

            <p className="text-[10px] text-center text-text-muted mt-3">
              No payment required. We'll schedule a consultation to discuss your requirements.
            </p>
          </div>

          {/* Quick Info */}
          <div className="bg-white rounded-xl border border-border-light p-5">
            <h4 className="font-bold text-sm text-text-primary mb-3">Quick Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-text-muted">Client</span>
                <span className="font-medium text-text-primary text-right">{project.client}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Duration</span>
                <span className="font-medium text-text-primary">
                  {project.specifications.find(s => s.label === 'Duration')?.value || 'N/A'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Category</span>
                <span className="font-medium text-text-primary">{project.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Year</span>
                <span className="font-medium text-text-primary">{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        projectTitle={project.title}
        projectId={project.id}
      />
    </div>
  );
}
