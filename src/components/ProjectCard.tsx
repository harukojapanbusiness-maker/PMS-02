import { MapPin, Calendar, ArrowRight, Tag } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export default function ProjectCard({ project, onSelect, index }: ProjectCardProps) {
  const statusColors: Record<string, string> = {
    'Completed': 'bg-green-100 text-green-800 border-green-200',
    'Ongoing': 'bg-blue-100 text-blue-800 border-blue-200',
    'Upcoming': 'bg-amber-100 text-amber-800 border-amber-200',
    'Proposal': 'bg-purple-100 text-purple-800 border-purple-200'
  };

  const categoryColors: Record<string, string> = {
    'Power': 'bg-olive/10 text-olive',
    'Sub-Station': 'bg-olive/10 text-olive',
    'Telecom': 'bg-blue-50 text-blue-700',
    'Civil': 'bg-amber-50 text-amber-700',
    'Garments Tech Packs': 'bg-rose-50 text-rose-700',
    'Industrial': 'bg-gray-100 text-gray-700'
  };

  return (
    <div
      className="group bg-white rounded-xl border border-border-light hover:border-olive/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer animate-fadeIn"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => onSelect(project)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${categoryColors[project.category] || 'bg-gray-100 text-gray-700'}`}>
            {project.category}
          </span>
        </div>

        {/* Year */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs">
          <Calendar size={12} />
          <span>{project.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-bold text-text-primary group-hover:text-olive transition-colors line-clamp-2 mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-text-muted line-clamp-2 mb-3">
          {project.shortDescription}
        </p>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-xs text-text-muted mb-3">
          <MapPin size={12} className="text-olive" />
          <span>{project.location}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-warm-gray rounded text-[10px] font-medium text-text-muted"
            >
              <Tag size={8} />
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-0.5 bg-warm-gray rounded text-[10px] font-medium text-text-muted">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border-light">
          <div>
            <p className="text-xs text-text-muted">Budget</p>
            <p className="text-sm font-bold text-gold">{project.budget}</p>
          </div>
          <button className="flex items-center gap-1 text-olive text-sm font-semibold group-hover:gap-2 transition-all">
            View Details
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
