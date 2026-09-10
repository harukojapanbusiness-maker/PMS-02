import { useState } from 'react';
import {
  Settings,
  Image,
  FolderOpen,
  Plus,
  Edit3,
  Trash2,
  Save,
  X,
  AlertCircle,
  CheckCircle,
  FileText,
  Eye
} from 'lucide-react';
import { projects, heroBanners, Project, HeroBanner } from '../data/projects';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState<'projects' | 'banners' | 'instructions'>('instructions');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-olive rounded-lg flex items-center justify-center">
          <Settings size={20} className="text-gold-light" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Admin Dashboard</h1>
          <p className="text-sm text-text-muted">Manage projects, banners, and company data</p>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className={`mb-6 flex items-center gap-2 p-4 rounded-lg border ${
          notification.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          {notification.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
          <span className="text-sm font-medium">{notification.message}</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 bg-warm-gray rounded-lg p-1 border border-border-light">
        <button
          onClick={() => setActiveTab('instructions')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === 'instructions' ? 'bg-white text-olive shadow-sm' : 'text-text-muted hover:text-text-primary'
          }`}
        >
          <FileText size={16} />
          Instructions
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === 'projects' ? 'bg-white text-olive shadow-sm' : 'text-text-muted hover:text-text-primary'
          }`}
        >
          <FolderOpen size={16} />
          Projects ({projects.length})
        </button>
        <button
          onClick={() => setActiveTab('banners')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === 'banners' ? 'bg-white text-olive shadow-sm' : 'text-text-muted hover:text-text-primary'
          }`}
        >
          <Image size={16} />
          Banners ({heroBanners.length})
        </button>
      </div>

      {/* Content */}
      {activeTab === 'instructions' && <InstructionsTab />}
      {activeTab === 'projects' && <ProjectsTab showNotification={showNotification} />}
      {activeTab === 'banners' && <BannersTab showNotification={showNotification} />}
    </div>
  );
}

function InstructionsTab() {
  return (
    <div className="bg-white rounded-xl border border-border-light p-6 md:p-8">
      <h2 className="text-xl font-bold text-text-primary mb-4">📋 How to Manage Your Data</h2>
      <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="font-semibold text-amber-800 mb-2">⚡ Quick Start</p>
          <p className="text-amber-700">
            All your data is stored in <code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs font-mono">src/data/projects.ts</code>. 
            Open this file in any text editor to add, edit, or remove projects and banners.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-text-primary mb-2 flex items-center gap-2">
            <FolderOpen size={16} className="text-olive" />
            Adding a New Project
          </h3>
          <p className="mb-2">1. Open <code className="bg-warm-gray px-1.5 py-0.5 rounded text-xs font-mono">src/data/projects.ts</code></p>
          <p className="mb-2">2. Find the <code className="bg-warm-gray px-1.5 py-0.5 rounded text-xs font-mono">projects</code> array</p>
          <p className="mb-2">3. Copy an existing project entry and modify the values:</p>
          <pre className="bg-olive-dark text-green-300 p-4 rounded-lg text-xs overflow-x-auto mb-2">
{`{
  id: "proj-NEW",
  title: "Your Project Title",
  category: "Power", // Options: Power, Sub-Station, Telecom, Civil, Garments Tech Packs, Industrial
  subcategory: "Your Subcategory",
  description: "Full project description...",
  shortDescription: "Brief summary for cards...",
  location: "City, Bangladesh",
  client: "Client Name",
  year: 2025,
  status: "Ongoing", // Options: Completed, Ongoing, Upcoming, Proposal
  specifications: [
    { label: "Spec Name", value: "Spec Value" },
  ],
  images: ["https://image-url-1", "https://image-url-2"],
  scope: { quantity: 1, unit: "Unit", maxQuantity: 10 },
  budget: "৳ XX,XX,XX,XXX",
  tags: ["Tag1", "Tag2"]
}`}
          </pre>
          <p className="text-xs text-text-muted">4. Save the file and refresh the website.</p>
        </div>

        <div>
          <h3 className="font-bold text-text-primary mb-2 flex items-center gap-2">
            <Image size={16} className="text-olive" />
            Changing Seasonal Banners
          </h3>
          <p className="mb-2">1. Find the <code className="bg-warm-gray px-1.5 py-0.5 rounded text-xs font-mono">heroBanners</code> array</p>
          <p className="mb-2">2. Set <code className="bg-warm-gray px-1.5 py-0.5 rounded text-xs font-mono">active: true</code> for the banner you want to show</p>
          <p className="mb-2">3. Set <code className="bg-warm-gray px-1.5 py-0.5 rounded text-xs font-mono">active: false</code> for others</p>
          <p className="text-xs text-text-muted">You can also change the image URL, title, subtitle, and description for each banner.</p>
        </div>

        <div>
          <h3 className="font-bold text-text-primary mb-2 flex items-center gap-2">
            <Settings size={16} className="text-olive" />
            Updating Company Information
          </h3>
          <p>Find the <code className="bg-warm-gray px-1.5 py-0.5 rounded text-xs font-mono">companyInfo</code> object at the top of the file and update any fields as needed.</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="font-semibold text-green-800 mb-2">💡 Tips</p>
          <ul className="space-y-1 text-green-700 text-xs">
            <li>• Use high-quality images (at least 1200px wide) for best results</li>
            <li>• Keep IDs unique (e.g., proj-009, proj-010)</li>
            <li>• Categories must match exactly: Power, Sub-Station, Telecom, Civil, Garments Tech Packs, Industrial</li>
            <li>• Status must be one of: Completed, Ongoing, Upcoming, Proposal</li>
            <li>• Image URLs should be publicly accessible (use Unsplash, ImgBB, or your own hosting)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ProjectsTab({ showNotification }: { showNotification: (type: 'success' | 'error', message: string) => void }) {
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [viewProject, setViewProject] = useState<Project | null>(null);

  return (
    <div className="space-y-4">
      {/* Add New Button */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-text-muted">
          Manage your project portfolio. Edit the data file to make permanent changes.
        </p>
        <button
          onClick={() => showNotification('success', 'To add a new project, edit src/data/projects.ts directly.')}
          className="flex items-center gap-2 bg-olive text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-olive-dark transition-colors"
        >
          <Plus size={16} />
          Add New Project
        </button>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-xl border border-border-light overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-warm-gray border-b border-border">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-text-secondary">Project</th>
                <th className="text-left px-4 py-3 font-semibold text-text-secondary hidden md:table-cell">Category</th>
                <th className="text-left px-4 py-3 font-semibold text-text-secondary hidden sm:table-cell">Status</th>
                <th className="text-left px-4 py-3 font-semibold text-text-secondary hidden lg:table-cell">Budget</th>
                <th className="text-right px-4 py-3 font-semibold text-text-secondary">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-warm-gray/50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img src={project.images[0]} alt="" className="w-10 h-10 rounded-lg object-cover" />
                      <div>
                        <p className="font-medium text-text-primary line-clamp-1">{project.title}</p>
                        <p className="text-xs text-text-muted">{project.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className="px-2 py-1 bg-warm-gray rounded text-xs font-medium">{project.category}</span>
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                      project.status === 'Upcoming' ? 'bg-amber-100 text-amber-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell font-medium text-gold">{project.budget}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => setViewProject(project)}
                        className="p-1.5 rounded-md hover:bg-warm-gray text-text-muted hover:text-olive transition-colors"
                        title="View"
                      >
                        <Eye size={14} />
                      </button>
                      <button
                        onClick={() => setEditingProject(project)}
                        className="p-1.5 rounded-md hover:bg-warm-gray text-text-muted hover:text-gold transition-colors"
                        title="Edit"
                      >
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={() => showNotification('success', 'To delete, remove the entry from src/data/projects.ts')}
                        className="p-1.5 rounded-md hover:bg-warm-gray text-text-muted hover:text-red-600 transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Modal */}
      {viewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setViewProject(null)} />
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-scaleIn">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-text-primary">Project Details</h3>
              <button onClick={() => setViewProject(null)} className="p-1 hover:bg-warm-gray rounded">
                <X size={18} />
              </button>
            </div>
            <img src={viewProject.images[0]} alt="" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h4 className="font-bold text-text-primary mb-2">{viewProject.title}</h4>
            <p className="text-sm text-text-muted mb-3">{viewProject.shortDescription}</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-warm-gray p-2 rounded">
                <span className="text-text-muted">Category:</span>
                <span className="block font-medium">{viewProject.category}</span>
              </div>
              <div className="bg-warm-gray p-2 rounded">
                <span className="text-text-muted">Status:</span>
                <span className="block font-medium">{viewProject.status}</span>
              </div>
              <div className="bg-warm-gray p-2 rounded">
                <span className="text-text-muted">Budget:</span>
                <span className="block font-medium text-gold">{viewProject.budget}</span>
              </div>
              <div className="bg-warm-gray p-2 rounded">
                <span className="text-text-muted">Year:</span>
                <span className="block font-medium">{viewProject.year}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setEditingProject(null)} />
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 animate-scaleIn max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-text-primary">Edit Project</h3>
              <button onClick={() => setEditingProject(null)} className="p-1 hover:bg-warm-gray rounded">
                <X size={18} />
              </button>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> This is a preview. To make permanent changes, edit the file <code className="bg-amber-100 px-1 rounded text-xs">src/data/projects.ts</code> directly.
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-text-secondary uppercase">Title</label>
                <input type="text" defaultValue={editingProject.title} className="w-full mt-1 px-3 py-2 border border-border rounded-lg text-sm" />
              </div>
              <div>
                <label className="text-xs font-semibold text-text-secondary uppercase">Description</label>
                <textarea defaultValue={editingProject.shortDescription} rows={3} className="w-full mt-1 px-3 py-2 border border-border rounded-lg text-sm resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-text-secondary uppercase">Budget</label>
                  <input type="text" defaultValue={editingProject.budget} className="w-full mt-1 px-3 py-2 border border-border rounded-lg text-sm" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-text-secondary uppercase">Status</label>
                  <select defaultValue={editingProject.status} className="w-full mt-1 px-3 py-2 border border-border rounded-lg text-sm">
                    <option>Completed</option>
                    <option>Ongoing</option>
                    <option>Upcoming</option>
                    <option>Proposal</option>
                  </select>
                </div>
              </div>
              <button
                onClick={() => {
                  setEditingProject(null);
                  showNotification('success', 'Changes noted! Remember to update src/data/projects.ts for permanent changes.');
                }}
                className="w-full flex items-center justify-center gap-2 bg-olive text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-olive-dark transition-colors"
              >
                <Save size={16} />
                Save Changes (Preview Only)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BannersTab({ showNotification }: { showNotification: (type: 'success' | 'error', message: string) => void }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-text-muted">
          Manage seasonal hero banners. Set one as active to display it on the homepage.
        </p>
        <button
          onClick={() => showNotification('success', 'To add a new banner, edit the heroBanners array in src/data/projects.ts')}
          className="flex items-center gap-2 bg-olive text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-olive-dark transition-colors"
        >
          <Plus size={16} />
          Add Banner
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {heroBanners.map((banner) => (
          <div key={banner.id} className={`bg-white rounded-xl border-2 overflow-hidden transition-all ${
            banner.active ? 'border-olive shadow-lg' : 'border-border-light'
          }`}>
            <div className="relative h-36">
              <img src={banner.imageUrl} alt={banner.title} className="w-full h-full object-cover" />
              {banner.active && (
                <div className="absolute top-2 right-2 bg-olive text-white text-xs px-2 py-1 rounded-full font-medium">
                  ✓ Active
                </div>
              )}
            </div>
            <div className="p-4">
              <h4 className="font-bold text-sm text-text-primary mb-1">{banner.title}</h4>
              <p className="text-xs text-text-muted mb-2">{banner.season}</p>
              <p className="text-xs text-text-muted line-clamp-2">{banner.subtitle}</p>
              <div className="flex items-center gap-2 mt-3">
                <button
                  onClick={() => showNotification('success', `To toggle banner, edit 'active' field in src/data/projects.ts for "${banner.id}"`)}
                  className="flex-1 text-center px-3 py-1.5 bg-warm-gray rounded-md text-xs font-medium text-text-secondary hover:bg-olive hover:text-white transition-all"
                >
                  {banner.active ? 'Deactivate' : 'Activate'}
                </button>
                <button
                  onClick={() => showNotification('success', 'Edit banner in src/data/projects.ts')}
                  className="px-3 py-1.5 bg-warm-gray rounded-md text-xs font-medium text-text-secondary hover:bg-gold hover:text-white transition-all"
                >
                  <Edit3 size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
