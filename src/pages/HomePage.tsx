import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Grid3X3, LayoutList, TrendingUp, Award, Users, Briefcase } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import FilterSidebar from '../components/FilterSidebar';
import { projects, Project } from '../data/projects';

export default function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = !searchQuery ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchQuery, selectedCategory, selectedStatus]);

  const stats = [
    { icon: Briefcase, label: 'Projects', value: '50+', color: 'text-olive' },
    { icon: Users, label: 'Engineers', value: '25+', color: 'text-gold' },
    { icon: Award, label: 'Years', value: '15+', color: 'text-olive' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%', color: 'text-gold' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection onExploreProjects={() => {
        document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Stats Bar */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 p-3 rounded-lg bg-warm-gray/50">
                <stat.icon size={24} className={stat.color} />
                <div>
                  <p className="text-xl font-bold text-text-primary">{stat.value}</p>
                  <p className="text-xs text-text-muted">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Our Projects & Services
            </h2>
            <p className="text-sm text-text-muted mt-1">
              Explore our portfolio of engineering excellence across Bangladesh
            </p>
          </div>
          <div className="flex items-center gap-2">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium text-text-secondary hover:border-olive hover:text-olive transition-all"
            >
              <Filter size={16} />
              Filters
            </button>
            {/* View Toggle */}
            <div className="hidden sm:flex items-center border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-olive text-white' : 'text-text-muted hover:bg-warm-gray'}`}
              >
                <Grid3X3 size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-olive text-white' : 'text-text-muted hover:bg-warm-gray'}`}
              >
                <LayoutList size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Content with Sidebar */}
        <div className="flex gap-6">
          <FilterSidebar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
            isMobileOpen={mobileFilterOpen}
            onMobileClose={() => setMobileFilterOpen(false)}
          />

          {/* Projects Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-text-muted">
                Showing <span className="font-semibold text-text-primary">{filteredProjects.length}</span> of {projects.length} projects
              </p>
            </div>

            {filteredProjects.length > 0 ? (
              <div className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'
                  : 'space-y-4'
              }>
                {filteredProjects.map((project, index) => (
                  viewMode === 'grid' ? (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      onSelect={(p) => navigate(`/project/${p.id}`)}
                    />
                  ) : (
                    <ListProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      onSelect={(p) => navigate(`/project/${p.id}`)}
                    />
                  )
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-warm-gray rounded-xl">
                <p className="text-lg font-semibold text-text-primary mb-2">No projects found</p>
                <p className="text-sm text-text-muted">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

// List view card component
function ListProjectCard({ project, index, onSelect }: { project: Project; index: number; onSelect: (p: Project) => void }) {
  const statusColors: Record<string, string> = {
    'Completed': 'bg-green-100 text-green-800',
    'Ongoing': 'bg-blue-100 text-blue-800',
    'Upcoming': 'bg-amber-100 text-amber-800',
    'Proposal': 'bg-purple-100 text-purple-800'
  };

  return (
    <div
      className="flex flex-col sm:flex-row bg-white rounded-xl border border-border-light hover:border-olive/30 shadow-sm hover:shadow-md transition-all cursor-pointer animate-fadeIn overflow-hidden"
      style={{ animationDelay: `${index * 80}ms` }}
      onClick={() => onSelect(project)}
    >
      <div className="sm:w-48 h-36 sm:h-auto shrink-0">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-sm font-bold text-text-primary line-clamp-1">{project.title}</h3>
          <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>
        <p className="text-xs text-text-muted line-clamp-2 mb-2">{project.shortDescription}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">{project.location} • {project.year}</span>
          <span className="text-sm font-bold text-gold">{project.budget}</span>
        </div>
      </div>
    </div>
  );
}
