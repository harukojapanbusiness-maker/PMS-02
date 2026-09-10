import { useState } from 'react';
import { Send, CheckCircle, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { useVisitor } from '../contexts/VisitorContext';

export default function LeadCollectionForm() {
  const { addLead } = useVisitor();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: '',
    projectRef: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', contact: '', email: '', message: '', projectRef: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl border border-border-light p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-green-600" size={32} />
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">Thank You!</h3>
        <p className="text-sm text-text-muted">
          We've received your information. Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-border-light p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-text-primary mb-2">Get in Touch</h3>
        <p className="text-sm text-text-muted">
          Interested in our services? Leave your details and we'll reach out to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="Your full name"
              className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition-all"
            />
          </div>
        </div>

        {/* Contact & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
              Phone *
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
                className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
              Email
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition-all"
              />
            </div>
          </div>
        </div>

        {/* Project Reference */}
        <div>
          <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
            Project of Interest
          </label>
          <input
            type="text"
            name="projectRef"
            value={formData.projectRef}
            onChange={handleChange}
            placeholder="Any specific project or service"
            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition-all"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
            Message
          </label>
          <div className="relative">
            <MessageSquare size={16} className="absolute left-3 top-3 text-text-muted" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us about your requirements..."
              className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition-all resize-none"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-white py-3 rounded-lg font-semibold text-sm transition-all hover:shadow-lg"
        >
          <Send size={16} />
          Submit Inquiry
        </button>

        <p className="text-xs text-center text-text-muted">
          We respect your privacy. Your information is safe with us.
        </p>
      </form>
    </div>
  );
}
