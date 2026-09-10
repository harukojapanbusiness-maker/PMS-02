import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Visitor {
  id: string;
  timestamp: number;
  page: string;
  userAgent: string;
}

interface Lead {
  id: string;
  name: string;
  contact: string;
  email: string;
  message: string;
  projectRef: string;
  timestamp: number;
  status: 'new' | 'contacted' | 'converted';
}

interface VisitorContextType {
  visitors: Visitor[];
  leads: Lead[];
  totalVisitors: number;
  activeVisitors: number;
  addLead: (lead: Omit<Lead, 'id' | 'timestamp' | 'status'>) => void;
  updateLeadStatus: (id: string, status: Lead['status']) => void;
  deleteLead: (id: string) => void;
}

const VisitorContext = createContext<VisitorContextType | undefined>(undefined);

export function VisitorProvider({ children }: { children: ReactNode }) {
  const [visitors, setVisitors] = useState<Visitor[]>(() => {
    const stored = localStorage.getItem('pms_visitors');
    return stored ? JSON.parse(stored) : [];
  });

  const [leads, setLeads] = useState<Lead[]>(() => {
    const stored = localStorage.getItem('pms_leads');
    return stored ? JSON.parse(stored) : [];
  });

  // Track visitor
  useEffect(() => {
    const visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const newVisitor: Visitor = {
      id: visitorId,
      timestamp: Date.now(),
      page: window.location.pathname,
      userAgent: navigator.userAgent
    };

    const updatedVisitors = [...visitors, newVisitor];
    setVisitors(updatedVisitors);
    localStorage.setItem('pms_visitors', JSON.stringify(updatedVisitors));

    // Set session for active visitor tracking
    sessionStorage.setItem('pms_active_visitor', visitorId);
  }, []);

  // Calculate active visitors (visitors in last 5 minutes)
  const activeVisitors = visitors.filter(v => Date.now() - v.timestamp < 5 * 60 * 1000).length;

  const addLead = (leadData: Omit<Lead, 'id' | 'timestamp' | 'status'>) => {
    const newLead: Lead = {
      ...leadData,
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      status: 'new'
    };
    const updatedLeads = [newLead, ...leads];
    setLeads(updatedLeads);
    localStorage.setItem('pms_leads', JSON.stringify(updatedLeads));
  };

  const updateLeadStatus = (id: string, status: Lead['status']) => {
    const updatedLeads = leads.map(lead =>
      lead.id === id ? { ...lead, status } : lead
    );
    setLeads(updatedLeads);
    localStorage.setItem('pms_leads', JSON.stringify(updatedLeads));
  };

  const deleteLead = (id: string) => {
    const updatedLeads = leads.filter(lead => lead.id !== id);
    setLeads(updatedLeads);
    localStorage.setItem('pms_leads', JSON.stringify(updatedLeads));
  };

  return (
    <VisitorContext.Provider value={{
      visitors,
      leads,
      totalVisitors: visitors.length,
      activeVisitors,
      addLead,
      updateLeadStatus,
      deleteLead
    }}>
      {children}
    </VisitorContext.Provider>
  );
}

export function useVisitor() {
  const context = useContext(VisitorContext);
  if (context === undefined) {
    throw new Error('useVisitor must be used within a VisitorProvider');
  }
  return context;
}
