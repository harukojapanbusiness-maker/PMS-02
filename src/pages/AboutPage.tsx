import {
  Shield,
  Award,
  Target,
  Users,
  Zap,
  CheckCircle,
  Building2,
  Lightbulb,
  Clock,
  TrendingUp
} from 'lucide-react';
import { companyInfo } from '../data/projects';

export default function AboutPage() {
  const values = [
    { icon: Shield, title: 'Safety First', description: 'Conformity to safety, health and environment norms in every project we undertake.' },
    { icon: Lightbulb, title: 'Innovation', description: 'Innovative engineering solutions with high engineering standards.' },
    { icon: Clock, title: 'Timely Delivery', description: 'Commitment to budget and time schedule for every engagement.' },
    { icon: TrendingUp, title: 'Quality Driven', description: 'Value-added technical services with world-class quality standards.' },
  ];

  const services = [
    'Power Generation & Distribution',
    'LV, MV, HV Sub-stations',
    'Industrial Engineering Projects',
    'Telecom Infrastructure',
    'Civil & MEP Works',
    'Solar & Renewable Energy',
    'Building Automation Systems',
    'Technical Consultation'
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-olive text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Award size={14} className="text-gold-light" />
              <span className="text-xs font-medium text-gold-light uppercase tracking-wider">
                Since 2010
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              About Power Management Solutions
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Engineering excellence for Bangladesh's development — delivering world-class power, telecom, and industrial solutions with precision and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Our Story</h2>
            <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
              <p>
                Bangladesh is a developing country with plenty of skilled manpower and natural resources. We fully realized that the economic growth of Bangladesh is not possible without proper utilization of these resources, skilled manpower, and technical experts.
              </p>
              <p>
                <strong className="text-text-primary">Power Engineering (PE)</strong> started as a partnership firm in the year 2010, consisting of five engineers. Among them, 40 years' experienced personnel as well as 9-10 years experienced young, energetic engineers are present.
              </p>
              <p>
                PE came into being as a Private Limited Company in the year 2014 with a team of technical experts having extraordinary calibers in execution of important works inside the country with an aptitude in modern technology for the erection, installation and supervision specially in the field of Power Plants, LV, MV, HV Sub-stations and Industrial Engineering Projects.
              </p>
              <p>
                We are fully technically equipped and financially sound to take projects anywhere in Bangladesh. We have technical experts, tools, equipment, testing support and we are ready to work even in remote areas as and when called upon.
              </p>
            </div>
          </div>

          <div className="bg-warm-gray rounded-xl p-6 border border-border-light">
            <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              <Target size={20} className="text-olive" />
              Our Mission
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              We are a customer-focused, quality driven Engineering, Erection, Installation & Construction Company committed to providing the entire range of services involved in the conceptualization, design, construction and commissioning support for the Power Generation industries, Sub-stations and Commercial/Industrial Building solutions.
            </p>
            <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              <Zap size={20} className="text-gold" />
              What Drives Us
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2 text-sm text-text-secondary">
                  <CheckCircle size={14} className="text-olive shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-2">Our Core Values</h2>
            <p className="text-sm text-text-muted">The principles that guide every project we undertake</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 rounded-xl bg-warm-gray/50 border border-border-light hover:border-olive/30 transition-all">
                <div className="w-12 h-12 bg-olive/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon size={24} className="text-olive" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">{value.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Our Team & Expertise</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              We operate as a project driven company. We distinguish ourselves with value-added technical services, innovative engineering solutions, high engineering standards, conformity to safety, health and environment norms, and commitment to budget and time schedule.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-warm-gray rounded-lg p-4 border border-border-light">
                <Users size={20} className="text-olive mb-2" />
                <p className="text-2xl font-bold text-text-primary">25+</p>
                <p className="text-xs text-text-muted">Skilled Engineers</p>
              </div>
              <div className="bg-warm-gray rounded-lg p-4 border border-border-light">
                <Building2 size={20} className="text-olive mb-2" />
                <p className="text-2xl font-bold text-text-primary">50+</p>
                <p className="text-xs text-text-muted">Projects Completed</p>
              </div>
              <div className="bg-warm-gray rounded-lg p-4 border border-border-light">
                <Clock size={20} className="text-olive mb-2" />
                <p className="text-2xl font-bold text-text-primary">15+</p>
                <p className="text-xs text-text-muted">Years Experience</p>
              </div>
              <div className="bg-warm-gray rounded-lg p-4 border border-border-light">
                <Award size={20} className="text-olive mb-2" />
                <p className="text-2xl font-bold text-text-primary">A, B, C</p>
                <p className="text-xs text-text-muted">Electrical Board License</p>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="bg-white rounded-xl border border-border-light p-6 h-fit">
            <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
              <Building2 size={18} className="text-olive" />
              Company Details
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider">Organization</p>
                <p className="font-medium text-text-primary">{companyInfo.name}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider">Type</p>
                <p className="font-medium text-text-primary">{companyInfo.type}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider">Established</p>
                <p className="font-medium text-text-primary">{companyInfo.yearEstablished}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider">Head Office</p>
                <p className="font-medium text-text-primary text-xs">{companyInfo.headOffice}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider">Incorporation</p>
                <p className="font-medium text-text-primary">{companyInfo.incorporationNumber}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider">TIN Number</p>
                <p className="font-medium text-text-primary">{companyInfo.tinNumber}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider">Bank</p>
                <p className="font-medium text-text-primary">{companyInfo.bankName}, {companyInfo.bankBranch}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
