import { useVisitor } from '../contexts/VisitorContext';
import { Users, Activity } from 'lucide-react';

export default function LiveVisitorCounter() {
  const { totalVisitors, activeVisitors } = useVisitor();

  return (
    <div className="bg-white rounded-xl border border-border-light p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Users size={20} className="text-blue-600" />
          </div>
          <div>
            <p className="text-xs text-text-muted">Total Visitors</p>
            <p className="text-xl font-bold text-text-primary">{totalVisitors}</p>
          </div>
        </div>
        <div className="h-10 w-px bg-border" />
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <Activity size={20} className="text-green-600" />
          </div>
          <div>
            <p className="text-xs text-text-muted">Active Now</p>
            <p className="text-xl font-bold text-text-primary flex items-center gap-1">
              {activeVisitors}
              {activeVisitors > 0 && (
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
