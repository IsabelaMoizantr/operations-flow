import React, { useState } from 'react';

function App() {
  const [activeArea, setActiveArea] = useState('Customer Success');

  // Form States
  const [ticketTitle, setTicketTitle] = useState('');
  const [ticketPriority, setTicketPriority] = useState('Medium');
  const [ticketKpi, setTicketKpi] = useState('');

  // 100% Operations-focused mock database in English
  const [tasks, setTasks] = useState([
    // Customer Success Tasks
    { id: 1, area: 'Customer Success', title: 'Onboarding: Acme Corp Enterprise Account (SaaS)', status: 'In Progress', priority: 'High', kpi: 'SLA: 24h target' },
    { id: 2, area: 'Customer Success', title: 'Quarterly Business Review (QBR) preparation - Globex', status: 'To Do', priority: 'Medium', kpi: 'CSAT Target: 95%' },
    { id: 3, area: 'Customer Success', title: 'Resolve Ticket #1024: API Integration Failure', status: 'Done', priority: 'High', kpi: 'SLA Met' },
    
    // Project Coordination Tasks
    { id: 4, area: 'Project Coordination', title: 'Data Migration - Phase 2 Beta Clients', status: 'In Progress', priority: 'High', kpi: 'Health: Green' },
    { id: 5, area: 'Project Coordination', title: 'Define Risk Mitigation Matrix for cross-functional workflow', status: 'To Do', priority: 'Low', kpi: 'PMO Review' },
    
    // PMO / Workflows Tasks
    { id: 6, area: 'PMO / Workflows', title: 'Automate weekly performance reports via HubSpot/Zapier', status: 'In Progress', priority: 'High', kpi: 'Efficiency +20%' },
    { id: 7, area: 'PMO / Workflows', title: 'Standard Operating Procedure (SOP) mapping: Support Escalation', status: 'Done', priority: 'Medium', kpi: 'Process Optimized' },
    
    // Recruitment Ops Tasks
    { id: 8, area: 'Recruitment Ops', title: 'Candidate Screening: Technical Account Manager pipeline', status: 'In Progress', priority: 'Medium', kpi: 'Time-to-Hire' },
    { id: 9, area: 'Recruitment Ops', title: 'Dispatch formal employment offer - UX Designer Lead', status: 'To Do', priority: 'High', kpi: 'Urgent Hire' },

    // Business Support Tasks
    { id: 10, area: 'Business Support', title: 'Annual SaaS license renewal audit (Slack, Zoom, Notion)', status: 'To Do', priority: 'High', kpi: 'Budget Op' }
  ]);

  // Industry-standard KPIs for Ops profiles
  const kpisByArea = {
    'Customer Success': [
      { name: 'Average Net Promoter Score (NPS)', value: '72', color: '#10b981' },
      { name: 'Customer Retention Rate (CRR)', value: '94.2%', color: '#3b82f6' },
      { name: 'Open Urgent Tickets', value: '5', color: '#f59e0b' }
    ],
    'Project Coordination': [
      { name: 'On-Time Project Delivery', value: '88%', color: '#10b981' },
      { name: 'Milestones Achieved', value: '12/14', color: '#3b82f6' },
      { name: 'Critical Risks Flagged', value: '1', color: '#ef4444' }
    ],
    'PMO / Workflows': [
      { name: 'Mapped Standard Operating Procedures (SOPs)', value: '8', color: '#10b981' },
      { name: 'Automated Hours Saved / mo', value: '45h', color: '#3b82f6' },
      { name: 'Active Bottlenecks Detected', value: '0', color: '#10b981' }
    ],
    'Recruitment Ops': [
      { name: 'Average Time-to-Hire', value: '22 Days', color: '#3b82f6' },
      { name: 'Interviews Scheduled This Week', value: '14', color: '#f59e0b' },
      { name: 'Offer Acceptance Rate', value: '91%', color: '#10b981' }
    ],
    'Business Support': [
      { name: 'Internal Support SLA Compliance', value: '98.5%', color: '#10b981' },
      { name: 'Procurement Costs Optimized', value: '$1,200', color: '#3b82f6' },
      { name: 'Executive Tasks Completed', value: '7', color: '#64748b' }
    ]
  };

  const filteredTasks = tasks.filter(t => t.area === activeArea);

  const moveTask = (id, newStatus) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  // Handle Form Submission
  const handleCreateTicket = (e) => {
    e.preventDefault();
    if (!ticketTitle.trim()) return;

    const newTicket = {
      id: Date.now(), // unique temporary ID
      area: activeArea,
      title: ticketTitle,
      status: 'To Do',
      priority: ticketPriority,
      kpi: ticketKpi.trim() ? ticketKpi : 'SLA: Standard'
    };

    setTasks([newTicket, ...tasks]);
    
    // Reset form fields
    setTicketTitle('');
    setTicketPriority('Medium');
    setTicketKpi('');
  };

  const getPriorityColor = (prio) => {
    if (prio === 'High') return { bg: '#fee2e2', text: '#ef4444' };
    if (prio === 'Medium') return { bg: '#fef3c7', text: '#d97706' };
    return { bg: '#f0fdf4', text: '#16a34a' };
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif', padding: '24px', backgroundColor: '#f1f5f9', minHeight: '100vh', color: '#1e293b' }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: '#0f172a', color: 'white', padding: '24px', borderRadius: '16px', marginBottom: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '26px', fontWeight: '700' }}>🚀 OperationsFlow</h1>
            <p style={{ margin: '4px 0 0 0', opacity: 0.8, fontSize: '14px' }}>Ops Portfolio: Live Workflow Automation, Performance Metrics & PMO Dashboard</p>
          </div>
          <div style={{ backgroundColor: '#1e293b', padding: '8px 16px', borderRadius: '8px', border: '1px solid #334155', fontSize: '13px', fontWeight: '500' }}>
            🟢 Live Demo Profile
          </div>
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '24px', alignItems: 'start' }}>
        
        {/* SIDEBAR: CORE OPS MODULES */}
        <aside style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginTop: 0, color: '#94a3b8', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
            Core Ops Modules
          </h3>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {Object.keys(kpisByArea).map((area) => (
              <button
                key={area}
                onClick={() => setActiveArea(area)}
                style={{
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: activeArea === area ? '#2563eb' : 'transparent',
                  color: activeArea === area ? 'white' : '#475569',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontWeight: activeArea === area ? '600' : '500',
                  fontSize: '14px',
                  transition: 'all 0.2s'
                }}
              >
                {area === 'Customer Success' && '🎯 '}
                {area === 'Project Coordination' && '📅 '}
                {area === 'PMO / Workflows' && '🔄 '}
                {area === 'Recruitment Ops' && '👥 '}
                {area === 'Business Support' && '💼 '}
                {area}
              </button>
            ))}
          </nav>
        </aside>

        {/* DASHBOARD WORKSPACE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* KEY PERFORMANCE INDICATORS SECTION */}
          <section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <h4 style={{ margin: '0 0 14px 0', color: '#64748b', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.025em' }}>Key Performance Indicators (KPIs)</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
              {kpisByArea[activeArea].map((kpi, index) => (
                <div key={index} style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '12px', backgroundColor: '#f8fafc' }}>
                  <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px', fontWeight: '500' }}>{kpi.name}</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: kpi.color }}>{kpi.value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* NEW TICKETING / INBOUND REQUEST SYSTEM FORM */}
          <section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <h4 style={{ margin: '0 0 12px 0', color: '#64748b', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.025em' }}>📥 Log New Ops Request / Ticket</h4>
            <form onSubmit={handleCreateTicket} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'end' }}>
              
              <div style={{ flex: '2', minWidth: '200px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Task / Ticket Description</label>
                <input 
                  type="text" 
                  value={ticketTitle}
                  onChange={(e) => setTicketTitle(e.target.value)}
                  placeholder={`e.g., Handle emergency escalation for ${activeArea} ...`}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ flex: '1', minWidth: '120px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Priority SLA</label>
                <select 
                  value={ticketPriority}
                  onChange={(e) => setTicketPriority(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', backgroundColor: 'white', boxSizing: 'border-box' }}
                >
                  <option value="High">🔴 High</option>
                  <option value="Medium">🟡 Medium</option>
                  <option value="Low">🟢 Low</option>
                </select>
              </div>

              <div style={{ flex: '1', minWidth: '130px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>KPI / SLA Tag</label>
                <input 
                  type="text" 
                  value={ticketKpi}
                  onChange={(e) => setTicketKpi(e.target.value)}
                  placeholder="e.g., SLA: 4h, CSAT Focus"
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', boxSizing: 'border-box' }}
                />
              </div>

              <button 
                type="submit" 
                style={{ padding: '10px 20px', backgroundColor: '#0f172a', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '13px', cursor: 'pointer', height: '40px', transition: 'background 0.2s' }}
              >
                + File Request
              </button>
            </form>
          </section>

          {/* KANBAN WORKFLOW SECTION */}
          <section style={{ backgroundColor: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '600' }}>Workspace Workflow: <span style={{ color: '#2563eb' }}>{activeArea}</span></h2>
              <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '14px' }}>Monitor cross-functional operations pipelines, project bottlenecks, and SLA compliance.</p>
            </div>

            {/* KANBAN COLUMNS */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
              
              {['To Do', 'In Progress', 'Done'].map((column) => (
                <div key={column} style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '12px', minHeight: '320px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', margin: '0 0 16px 0', color: '#475569', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{column === 'To Do' ? '📋 Backlog' : column === 'In Progress' ? '⚡ In Progress' : '✅ Completed'}</span>
                    <span style={{ backgroundColor: '#e2e8f0', padding: '2px 8px', borderRadius: '20px', fontSize: '11px', color: '#475569' }}>
                      {filteredTasks.filter(t => t.status === column).length}
                    </span>
                  </h3>

                  {/* KANBAN CARDS */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {filteredTasks.filter(t => t.status === column).map((task) => {
                      const prioColor = getPriorityColor(task.priority);
                      return (
                        <div key={task.id} style={{ backgroundColor: 'white', padding: '14px', borderRadius: '10px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                          <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '10px', lineHeight: '1.4', color: '#1e293b' }}>{task.title}</div>
                          
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '11px', fontWeight: '600', backgroundColor: prioColor.bg, color: prioColor.text, padding: '3px 8px', borderRadius: '6px' }}>
                              {task.priority}
                            </span>
                            <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '500' }}>
                              {task.kpi}
                            </span>
                          </div>

                          {/* INTERACTIVE WORKFLOW ACTIONS */}
                          <div style={{ borderTop: '1px solid #f1f5f9', marginTop: '12px', paddingTop: '8px', display: 'flex', gap: '6px', justifyContent: 'end' }}>
                            {column !== 'To Do' && (
                              <button onClick={() => moveTask(task.id, column === 'In Progress' ? 'To Do' : 'In Progress')} style={{ fontSize: '11px', cursor: 'pointer', background: 'none', border: 'none', color: '#64748b', fontWeight: '500' }}>
                                ⏪ Move Back
                              </button>
                            )}
                            {column !== 'Done' && (
                              <button onClick={() => moveTask(task.id, column === 'To Do' ? 'In Progress' : 'Done')} style={{ fontSize: '11px', cursor: 'pointer', backgroundColor: '#eff6ff', border: 'none', color: '#2563eb', fontWeight: '600', padding: '4px 8px', borderRadius: '6px' }}>
                                Advance ⏩
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

            </div>
          </section>

        </div>
      </main>

    </div>
  );
}

export default App;