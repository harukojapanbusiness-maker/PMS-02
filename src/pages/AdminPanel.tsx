import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  Eye,
  Users,
  TrendingUp,
  Activity,
  LogOut,
  BarChart3,
  UserCheck,
  Clock,
  Mail,
  Phone,
  MessageSquare,
  User
} from 'lucide-react';
import { projects, heroBanners, Project } from '../data/projects';
import { useAuth } from '../contexts/AuthContext';
import { useVisitor } from '../contexts/VisitorContext';

export default function AdminPanel() {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated, clearAllData } = useAuth();
  const { visitors, leads, totalVisitors, activeVisitors, updateLeadStatus, deleteLead } = useVisitor();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'projects' | 'banners' | 'leads' | 'visitors' | 'instructions'>('dashboard');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [loading, setLoading] = useState(true);

  // Check authentication on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAuthenticated) {
        navigate('/login');
      }
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, [isAuthenticated, navigate]);

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-12 h-12 border-4 border-olive/30 border-t-olive rounded-full animate-spin mx-auto mb-4" />
        <p className="text-text-muted">Loading admin dashboard...</p>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!isAuthenticated || !user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-white rounded-xl border border-border-light p-8 max-w-md mx-auto">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle size={32} className="text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">Access Denied</h2>
          <p className="text-sm text-text-muted mb-6">You need to login to access the admin panel.</p>
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-olive hover:bg-olive-dark text-white py-3 rounded-lg font-semibold text-sm transition-all"
          >
            Go to Login
          </button>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="w-full mt-3 bg-warm-gray hover:bg-border text-text-secondary py-3 rounded-lg font-semibold text-sm transition-all"
          >
            Clear Session & Reload
          </button>
        </div>
      </div>
    );
  }

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Calculate stats
  const newLeads = leads.filter(l => l.status === 'new').length;
  const contactedLeads = leads.filter(l => l.status === 'contacted').length;
  const convertedLeads = leads.filter(l => l.status === 'converted').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header with User Info */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-olive rounded-lg flex items-center justify-center">
            <Settings size={20} className="text-gold-light" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Admin Dashboard</h1>
            <p className="text-sm text-text-muted">
              Welcome, <span className="font-semibold text-olive">{user.username}</span> ({user.role})
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={clearAllData}
            className="flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 rounded-lg text-sm font-medium hover:bg-amber-100 transition-colors"
            title="Clear all data and reload"
          >
            <AlertCircle size={16} />
            Reset
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
          >
            <LogOut size={16} />
            Logout
          </button>
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

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-border-light p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary">{totalVisitors}</p>
              <p className="text-xs text-text-muted">Total Visitors</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-border-light p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Activity size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary">{activeVisitors}</p>
              <p className="text-xs text-text-muted">Active Now</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-border-light p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <TrendingUp size={20} className="text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary">{leads.length}</p>
              <p className="text-xs text-text-muted">Total Leads</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-border-light p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <UserCheck size={20} className="text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary">{newLeads}</p>
              <p className="text-xs text-text-muted">New Leads</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 bg-warm-gray rounded-lg p-1 border border-border-light overflow-x-auto">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
            activeTab === 'dashboard' ? 'bg-white text-olive shadow-sm' : 'text-text-muted hover:text-text-primary'
          }`}
        >
          <BarChart3 size={16} />
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab('leads')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
            activeTab === 'leads' ? 'bg-white text-olive shadow-sm' : 'text-text-muted hover:text-text-primary'
          }`}
        >
          <Mail size={16} />
          Leads ({leads.length})
        </button>
        <button
          onClick={() => setActiveTab('visitors')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
            activeTab === 'visitors' ? 'bg-white text-olive shadow-sm' : 'text-text-muted hover:text-text-primary'
          }`}
        >
          <Users size={16} />
          Visitors
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
            activeTab === 'projects' ? 'bg-white text-olive shadow-sm' : 'text-text-muted hover:text-text-primary'
          }`}
        >
          <FolderOpen size={16} />
          Projects ({projects.length})
        </button>
        <button
          onClick={() => setActiveTab('banners')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
            activeTab === 'banners' ? 'bg-white text-olive shadow-sm' : 'text-text-muted hover:text-text-primary'
          }`}
        >
          <Image size={16} />
          Banners
        </button>
        <button
          onClick={() => setActiveTab('instructions')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
            activeTab === 'instructions' ? 'bg-white text-olive shadow-sm' : 'text-text-muted hover:text-text-primary'
          }`}
        >
          <FileText size={16} />
          Guide
        </button>
      </div>

      {/* Content */}
      {activeTab === 'dashboard' && <DashboardTab visitors={visitors} leads={leads} newLeads={newLeads} contactedLeads={contactedLeads} convertedLeads={convertedLeads} />}
      {activeTab === 'leads' && <LeadsTab leads={leads} updateLeadStatus={updateLeadStatus} deleteLead={deleteLead} />}
      {activeTab === 'visitors' && <VisitorsTab visitors={visitors} />}
      {activeTab === 'projects' && <ProjectsTab showNotification={showNotification} />}
      {activeTab === 'banners' && <BannersTab showNotification={showNotification} />}
      {activeTab === 'instructions' && <InstructionsTab />}
    </div>
  );
}

function DashboardTab({ visitors, leads, newLeads, contactedLeads, convertedLeads }: any) {
  const recentLeads = leads.slice(0, 5);
  const recentVisitors = visitors.slice(-10).reverse();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Recent Leads */}
      <div className="bg-white rounded-xl border border-border-light p-6">
        <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
          <Mail size={20} className="text-olive" />
          Recent Leads
        </h3>
        {recentLeads.length > 0 ? (
          <div className="space-y-3">
            {recentLeads.map((lead: any) => (
              <div key={lead.id} className="flex items-start gap-3 p-3 bg-warm-gray rounded-lg">
                <div className="w-8 h-8 bg-olive/10 rounded-full flex items-center justify-center shrink-0">
                  <User size={14} className="text-olive" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-text-primary truncate">{lead.name}</p>
                  <p className="text-xs text-text-muted truncate">{lead.contact}</p>
                  <p className="text-xs text-text-muted mt-1">
                    {new Date(lead.timestamp).toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  lead.status === 'new' ? 'bg-blue-100 text-blue-800' :
                  lead.status === 'contacted' ? 'bg-amber-100 text-amber-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {lead.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-text-muted text-center py-8">No leads yet</p>
        )}
      </div>

      {/* Recent Visitors */}
      <div className="bg-white rounded-xl border border-border-light p-6">
        <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
          <Users size={20} className="text-olive" />
          Recent Visitors
        </h3>
        {recentVisitors.length > 0 ? (
          <div className="space-y-2">
            {recentVisitors.map((visitor: any) => (
              <div key={visitor.id} className="flex items-center justify-between p-2 bg-warm-gray rounded-lg text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-text-secondary truncate max-w-[200px]">{visitor.page}</span>
                </div>
                <span className="text-text-muted">
                  {new Date(visitor.timestamp).toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-text-muted text-center py-8">No visitors yet</p>
        )}
      </div>

      {/* Lead Status Summary */}
      <div className="lg:col-span-2 bg-white rounded-xl border border-border-light p-6">
        <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
          <BarChart3 size={20} className="text-olive" />
          Lead Status Summary
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">{newLeads}</p>
            <p className="text-sm text-blue-800 font-medium mt-1">New</p>
          </div>
          <div className="text-center p-4 bg-amber-50 rounded-lg">
            <p className="text-3xl font-bold text-amber-600">{contactedLeads}</p>
            <p className="text-sm text-amber-800 font-medium mt-1">Contacted</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-3xl font-bold text-green-600">{convertedLeads}</p>
            <p className="text-sm text-green-800 font-medium mt-1">Converted</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadsTab({ leads, updateLeadStatus, deleteLead }: any) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-text-muted">
          Manage and track all incoming leads from visitors
        </p>
      </div>

      {leads.length > 0 ? (
        <div className="bg-white rounded-xl border border-border-light overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-warm-gray border-b border-border">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-text-secondary">Name</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-secondary">Contact</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-secondary hidden md:table-cell">Email</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-secondary hidden lg:table-cell">Message</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-secondary">Status</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-secondary hidden sm:table-cell">Date</th>
                  <th className="text-right px-4 py-3 font-semibold text-text-secondary">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light">
                {leads.map((lead: any) => (
                  <tr key={lead.id} className="hover:bg-warm-gray/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-text-primary">{lead.name}</td>
                    <td className="px-4 py-3 text-text-secondary">
                      <div className="flex items-center gap-1">
                        <Phone size={12} />
                        {lead.contact}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-text-secondary hidden md:table-cell">{lead.email || '-'}</td>
                    <td className="px-4 py-3 text-text-muted text-xs hidden lg:table-cell max-w-[200px] truncate">
                      {lead.message || '-'}
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                        className="px-2 py-1 border border-border rounded text-xs font-medium"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="converted">Converted</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 text-xs text-text-muted hidden sm:table-cell">
                      {new Date(lead.timestamp).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => deleteLead(lead.id)}
                        className="p-1.5 rounded-md hover:bg-red-50 text-text-muted hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-warm-gray rounded-xl">
          <p className="text-lg font-semibold text-text-primary mb-2">No leads yet</p>
          <p className="text-sm text-text-muted">Leads will appear here when visitors submit the contact form</p>
        </div>
      )}
    </div>
  );
}

function VisitorsTab({ visitors }: any) {
  const recentVisitors = [...visitors].reverse();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-text-muted">
          Track all visitor activity on your website
        </p>
      </div>

      {recentVisitors.length > 0 ? (
        <div className="bg-white rounded-xl border border-border-light overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-warm-gray border-b border-border">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-text-secondary">Visitor ID</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-secondary">Page</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-secondary hidden md:table-cell">Timestamp</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-secondary hidden lg:table-cell">User Agent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light">
                {recentVisitors.slice(0, 50).map((visitor: any) => (
                  <tr key={visitor.id} className="hover:bg-warm-gray/50 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-text-secondary">{visitor.id}</td>
                    <td className="px-4 py-3 text-text-primary">{visitor.page}</td>
                    <td className="px-4 py-3 text-xs text-text-muted hidden md:table-cell">
                      {new Date(visitor.timestamp).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-xs text-text-muted hidden lg:table-cell max-w-[300px] truncate">
                      {visitor.userAgent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-warm-gray rounded-xl">
          <p className="text-lg font-semibold text-text-primary mb-2">No visitors yet</p>
          <p className="text-sm text-text-muted">Visitor data will appear here as people visit your site</p>
        </div>
      )}
    </div>
  );
}

function ProjectsTab({ showNotification }: { showNotification: (type: 'success' | 'error', message: string) => void }) {
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [viewProject, setViewProject] = useState<Project | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-text-muted">
          Manage your project portfolio
        </p>
        <button
          onClick={() => showNotification('success', 'To add a new project, edit src/data/projects.ts directly.')}
          className="flex items-center gap-2 bg-olive text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-olive-dark transition-colors"
        >
          <Plus size={16} />
          Add New Project
        </button>
      </div>

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
                      >
                        <Eye size={14} />
                      </button>
                      <button
                        onClick={() => setEditingProject(project)}
                        className="p-1.5 rounded-md hover:bg-warm-gray text-text-muted hover:text-gold transition-colors"
                      >
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={() => showNotification('success', 'To delete, remove the entry from src/data/projects.ts')}
                        className="p-1.5 rounded-md hover:bg-warm-gray text-text-muted hover:text-red-600 transition-colors"
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

      {/* View & Edit Modals */}
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
                <strong>Note:</strong> Edit the file <code className="bg-amber-100 px-1 rounded text-xs">src/data/projects.ts</code> for permanent changes.
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
              <button
                onClick={() => {
                  setEditingProject(null);
                  showNotification('success', 'Remember to update src/data/projects.ts for permanent changes.');
                }}
                className="w-full flex items-center justify-center gap-2 bg-olive text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-olive-dark transition-colors"
              >
                <Save size={16} />
                Save (Preview Only)
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
          Manage seasonal hero banners
        </p>
        <button
          onClick={() => showNotification('success', 'Edit heroBanners array in src/data/projects.ts')}
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
                  onClick={() => showNotification('success', `Edit 'active' field in src/data/projects.ts for "${banner.id}"`)}
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

function InstructionsTab() {
  return (
    <div className="bg-white rounded-xl border border-border-light p-6 md:p-8">
      <h2 className="text-xl font-bold text-text-primary mb-4">📋 Admin Guide</h2>
      <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="font-semibold text-amber-800 mb-2">⚡ Quick Start</p>
          <p className="text-amber-700">
            All data is stored in <code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs font-mono">src/data/projects.ts</code>.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-text-primary mb-2">🔐 Login Credentials</h3>
          <div className="space-y-2">
            <div className="p-3 bg-warm-gray rounded-lg">
              <p className="font-semibold text-text-primary">Owner Access:</p>
              <p className="text-xs text-text-muted font-mono">Username: owner | Password: PMS@Owner2025</p>
            </div>
            <div className="p-3 bg-warm-gray rounded-lg">
              <p className="font-semibold text-text-primary">Admin Access:</p>
              <p className="text-xs text-text-muted font-mono">Username: admin | Password: PMS@Admin2025</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-text-primary mb-2">📊 Live Visitor Tracking</h3>
          <p>The system automatically tracks all visitors. You can see:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>Total visitors count</li>
            <li>Active visitors (last 5 minutes)</li>
            <li>Visitor pages and timestamps</li>
            <li>User agent information</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-text-primary mb-2">📧 Lead Management</h3>
          <p>Visitors can submit leads through the contact form. Admin can:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>View all leads with contact details</li>
            <li>Update lead status (New → Contacted → Converted)</li>
            <li>Delete leads</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="font-semibold text-green-800 mb-2">💡 Tips</p>
          <ul className="space-y-1 text-green-700 text-xs">
            <li>• Data is stored in browser localStorage</li>
            <li>• Clear browser data will reset visitor/lead counts</li>
            <li>• For production, use a backend database</li>
            <li>• Change default passwords in AuthContext.tsx</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
