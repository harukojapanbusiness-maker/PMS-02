import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';
import { categories, statusOptions } from '../data/projects';

interface FilterSidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

export default function FilterSidebar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedStatus,
  onStatusChange,
  isMobileOpen,
  onMobileClose
}: FilterSidebarProps) {
  const clearFilters = () => {
    onSearchChange('');
    onCategoryChange('All');
    onStatusChange('All');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'All' || selectedStatus !== 'All';

  const filterContent = (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-olive" />
          <h3 className="font-bold text-text-primary">Filters</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-olive hover:text-olive-dark font-medium flex items-center gap-1"
          >
            <X size={12} />
            Clear All
          </button>
        )}
      </div>

      {/* Search */}
      <div>
        <label className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">
          Search Projects
        </label>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name, location..."
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition-all bg-white"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">
          Category
        </label>
        <div className="space-y-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-olive text-white'
                  : 'text-text-secondary hover:bg-warm-gray hover:text-olive'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Status Filter */}
      <div>
        <label className="block text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">
          Status
        </label>
        <div className="space-y-1.5">
          {statusOptions.map((status) => (
            <button
              key={status}
              onClick={() => onStatusChange(status)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all ${
                selectedStatus === status
                  ? 'bg-gold text-white'
                  : 'text-text-secondary hover:bg-warm-gray hover:text-gold'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-warm-gray rounded-lg p-4 border border-border-light">
        <p className="text-xs text-text-muted leading-relaxed">
          💡 <strong>Tip:</strong> Combine multiple filters to narrow down results. Use the search bar for keyword-based filtering.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24 bg-white rounded-xl border border-border-light p-5 shadow-sm">
          {filterContent}
        </div>
      </aside>

      {/* Mobile Filter Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={onMobileClose} />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white p-5 overflow-y-auto animate-slideDown shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-olive" />
                <h3 className="font-bold text-text-primary">Filters</h3>
              </div>
              <button
                onClick={onMobileClose}
                className="p-1.5 rounded-md hover:bg-warm-gray"
              >
                <X size={20} />
              </button>
            </div>
            {filterContent}
          </div>
        </div>
      )}
    </>
  );
}
