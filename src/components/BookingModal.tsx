import { useState } from 'react';
import { X, Calendar, Phone, User, FileText, Clock, CheckCircle, Send } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle?: string;
  projectId?: string;
}

export default function BookingModal({ isOpen, onClose, projectTitle, projectId }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    projectRef: projectTitle || '',
    message: '',
    requestType: 'site-visit'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log('Booking Request:', { ...formData, projectId });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        contact: '',
        email: '',
        preferredDate: '',
        preferredTime: '',
        projectRef: '',
        message: '',
        requestType: 'site-visit'
      });
      onClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-scaleIn">
        {/* Header */}
        <div className="sticky top-0 bg-olive text-white px-6 py-4 rounded-t-xl flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">Request a Site Visit or Schedule a Call</h2>
            <p className="text-xs text-gray-300 mt-0.5">Our team will get back to you within 24 hours</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Request Submitted!</h3>
            <p className="text-sm text-text-muted">
              Thank you for your interest. Our team will contact you shortly to confirm your appointment.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Request Type */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">
                Request Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, requestType: 'site-visit' }))}
                  className={`px-3 py-2 rounded-md text-sm font-medium border transition-all ${
                    formData.requestType === 'site-visit'
                      ? 'bg-olive text-white border-olive'
                      : 'bg-white text-text-secondary border-border hover:border-olive'
                  }`}
                >
                  🏗️ Site Visit
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, requestType: 'phone-call' }))}
                  className={`px-3 py-2 rounded-md text-sm font-medium border transition-all ${
                    formData.requestType === 'phone-call'
                      ? 'bg-olive text-white border-olive'
                      : 'bg-white text-text-secondary border-border hover:border-olive'
                  }`}
                >
                  📞 Phone Call
                </button>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                Full Name *
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-4 py-2.5 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition-all"
                />
              </div>
            </div>

            {/* Contact & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    placeholder="+880 1XXX-XXXXXX"
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                  Email
                </label>
                <div className="relative">
                  <FileText size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                  Preferred Date *
                </label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                  Preferred Time *
                </label>
                <div className="relative">
                  <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Project Reference */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                Project Reference
              </label>
              <input
                type="text"
                name="projectRef"
                value={formData.projectRef}
                onChange={handleChange}
                placeholder={projectTitle || "Enter project name or ID"}
                className="w-full px-4 py-2.5 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Any specific requirements or questions..."
                className="w-full px-4 py-2.5 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-white py-3 rounded-md font-semibold text-sm transition-all hover:shadow-lg"
            >
              <Send size={16} />
              Submit Request
            </button>

            <p className="text-xs text-center text-text-muted">
              By submitting, you agree to our terms. No payment is required at this stage.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
