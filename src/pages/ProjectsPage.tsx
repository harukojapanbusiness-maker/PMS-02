import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Grid3X3, LayoutList } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import FilterSidebar from '../components/FilterSidebar';
import { projects } from '../data/projects';

export default function ProjectsPage() {
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2">All Projects</h1>
        <p className="text-sm text-text-muted">
          Browse our complete portfolio of engineering projects across Bangladesh
        </p>
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
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm text-text-muted">
              Showing <span className="font-semibold text-text-primary">{filteredProjects.length}</span> of {projects.length} projects
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 px-3 py-1.5 border border-border rounded-lg text-sm font-medium text-text-secondary hover:border-olive hover:text-olive transition-all"
              >
                <Filter size={14} />
                Filters
              </button>
              <div className="hidden sm:flex items-center border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 ${viewMode === 'grid' ? 'bg-olive text-white' : 'text-text-muted hover:bg-warm-gray'}`}
                >
                  <Grid3X3 size={14} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 ${viewMode === 'list' ? 'bg-olive text-white' : 'text-text-muted hover:bg-warm-gray'}`}
                >
                  <LayoutList size={14} />
                </button>
              </div>
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'
                : 'space-y-4'
            }>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onSelect={(p) => navigate(`/project/${p.id}`)}
                />
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
    </div>
  );
}
