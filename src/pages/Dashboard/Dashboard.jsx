import React, { useMemo } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer, LabelList
} from 'recharts';
import {
  Users, Clock, CheckCircle2, XCircle, TrendingUp, PhoneCall, CalendarClock
} from 'lucide-react';

// Lead module constants
export const LEAD_TYPES = ['Real Estate', 'Mutual Fund', 'Insurance'];
export const LEAD_SOURCES = [
  'Website',
  'Reference',
  'Walk-in',
  'Cold Call',
  'Social Media',
  'Newspaper Ad',
  'Advertisement',
  'Other'
];

const QUALIFIED_STATUSES = ['Interested', 'Site Visit'];
const TERMINAL_STATUSES = ['Interested', 'Not Interested', 'Site Visit'];

// Fixed status palette
const STATUS_COLORS = {
  Interested: { text: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200', hex: '#059669' },
  'Not Interested': { text: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200', hex: '#dc2626' },
  'Future Plan': { text: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200', hex: '#d97706' },
  'Site Visit': { text: 'text-cyan-700', bg: 'bg-cyan-50', border: 'border-cyan-200', hex: '#0891b2' },
  'Never Contacted': { text: 'text-gray-600', bg: 'bg-gray-50', border: 'border-gray-200', hex: '#6b7280' }
};

const CATEGORICAL = ['#7c3aed', '#0891b2', '#c026d3', '#65a30d', '#ea580c', '#db2777', '#0d9488', '#6b7280'];
const BRAND_NAVY = '#083459';

const parseLeadTimestamp = (ts) => {
  if (!ts) return null;
  const [datePart] = ts.split(' ');
  const [day, month, year] = datePart.split('/').map(Number);
  if (!day || !month || !year) return null;
  return new Date(year, month - 1, day);
};

const dateKey = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const formatDate = (val) => {
  if (!val) return '-';
  const parts = val.split('-');
  if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
  return val;
};

// Helper tracking methods
const getTrackersForLead = (trackers, leadId) => {
  return trackers
    .filter(t => t.leadId === leadId)
    .sort((a, b) => (a.timestampMs || 0) - (b.timestampMs || 0));
};

const getLatestTrackerForLead = (trackers, leadId) => {
  const forLead = getTrackersForLead(trackers, leadId);
  return forLead.length > 0 ? forLead[forLead.length - 1] : null;
};

const isLeadPending = (trackers, lead) => {
  if (!lead?.callerAssigned) return false;
  const latest = getLatestTrackerForLead(trackers, lead.id);
  return !latest || !TERMINAL_STATUSES.includes(latest.status);
};

const getLeadStatus = (trackers, leadId) => {
  return getLatestTrackerForLead(trackers, leadId)?.status || null;
};

// Default fallback data generation so the dashboard is immediately rich and interactive
const generateInitialData = () => {
  const now = new Date();
  const formatTs = (daysAgo) => {
    const d = new Date(now);
    d.setDate(d.getDate() - daysAgo);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year} 10:30:00`;
  };

  const nextDateStr = (daysAhead) => {
    const d = new Date(now);
    d.setDate(d.getDate() + daysAhead);
    return dateKey(d);
  };

  const sampleUsers = [
    { id: '1', name: 'Rajesh Sharma', role: 'ADMIN' },
    { id: '2', name: 'Priya Patel', role: 'USER' },
    { id: '3', name: 'Amit Kumar', role: 'USER' },
    { id: '4', name: 'Sneha Verma', role: 'USER' }
  ];

  const sampleLeads = [
    { id: 'l1', leadNo: 'LR-101', personName: 'Vikram Malhotra', leadType: 'Real Estate', leadSource: 'Website', number: '9820112233', callerAssigned: 'Priya Patel', timestamp: formatTs(1) },
    { id: 'l2', leadNo: 'LM-102', personName: 'Ananya Deshmukh', leadType: 'Mutual Fund', leadSource: 'Social Media', number: '9820223344', callerAssigned: 'Amit Kumar', timestamp: formatTs(2) },
    { id: 'l3', leadNo: 'LI-103', personName: 'Rohan Mehra', leadType: 'Insurance', leadSource: 'Reference', number: '9820334455', callerAssigned: 'Priya Patel', timestamp: formatTs(3) },
    { id: 'l4', leadNo: 'LR-104', personName: 'Sunita Agarwal', leadType: 'Real Estate', leadSource: 'Walk-in', number: '9820445566', callerAssigned: 'Sneha Verma', timestamp: formatTs(4) },
    { id: 'l5', leadNo: 'LM-105', personName: 'Kunal Singhania', leadType: 'Mutual Fund', leadSource: 'Cold Call', number: '9820556677', callerAssigned: 'Amit Kumar', timestamp: formatTs(5) },
    { id: 'l6', leadNo: 'LR-106', personName: 'Pooja Hegde', leadType: 'Real Estate', leadSource: 'Website', number: '9820667788', callerAssigned: 'Priya Patel', timestamp: formatTs(6) },
    { id: 'l7', leadNo: 'LI-107', personName: 'Manish Tiwari', leadType: 'Insurance', leadSource: 'Social Media', number: '9820778899', callerAssigned: 'Sneha Verma', timestamp: formatTs(7) },
    { id: 'l8', leadNo: 'LR-108', personName: 'Deepak Joshi', leadType: 'Real Estate', leadSource: 'Advertisement', number: '9820889900', callerAssigned: 'Amit Kumar', timestamp: formatTs(8) },
    { id: 'l9', leadNo: 'LM-109', personName: 'Neha Kapoor', leadType: 'Mutual Fund', leadSource: 'Reference', number: '9820990011', callerAssigned: 'Priya Patel', timestamp: formatTs(9) },
    { id: 'l10', leadNo: 'LR-110', personName: 'Sanjay Reddy', leadType: 'Real Estate', leadSource: 'Website', number: '9821001122', callerAssigned: 'Sneha Verma', timestamp: formatTs(0) }
  ];

  const sampleTrackers = [
    { id: 't1', leadId: 'l1', status: 'Site Visit', timestampMs: Date.now() - 86400000, nextDate: '' },
    { id: 't2', leadId: 'l2', status: 'Interested', timestampMs: Date.now() - 172800000, nextDate: '' },
    { id: 't3', leadId: 'l3', status: 'Future Plan', timestampMs: Date.now() - 259200000, nextDate: nextDateStr(1) },
    { id: 't4', leadId: 'l4', status: 'Not Interested', timestampMs: Date.now() - 345600000, nextDate: '' },
    { id: 't5', leadId: 'l5', status: 'Future Plan', timestampMs: Date.now() - 432000000, nextDate: nextDateStr(3) },
    { id: 't6', leadId: 'l6', status: 'Site Visit', timestampMs: Date.now() - 518400000, nextDate: '' },
    { id: 't7', leadId: 'l7', status: 'Interested', timestampMs: Date.now() - 604800000, nextDate: '' },
    { id: 't8', leadId: 'l8', status: 'Future Plan', timestampMs: Date.now() - 691200000, nextDate: nextDateStr(5) }
  ];

  return { sampleUsers, sampleLeads, sampleTrackers };
};

const { sampleUsers, sampleLeads, sampleTrackers } = generateInitialData();

const getLeads = () => {
  try {
    const raw = localStorage.getItem('pcb_leads_v1');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (err) {
    console.error('Error reading leads from localStorage', err);
  }
  return sampleLeads;
};

const getCallTrackers = () => {
  try {
    const raw = localStorage.getItem('pcb_call_trackers_v1');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (err) {
    console.error('Error reading call trackers from localStorage', err);
  }
  return sampleTrackers;
};

const getUsers = () => {
  try {
    const raw = localStorage.getItem('pcb_users');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (err) {
    console.error('Error reading users from localStorage', err);
  }
  return sampleUsers;
};

const StatTile = ({ icon: Icon, label, value, tone }) => (
  <div className={`flex items-center gap-3 rounded-xl border ${tone.border} ${tone.bg} p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow`}>
    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-white border ${tone.border}`}>
      <Icon size={18} className={tone.text} />
    </div>
    <div className="min-w-0">
      <p className="text-[10px] md:text-[11px] text-gray-500 uppercase tracking-wide truncate">{label}</p>
      <p className={`text-xl md:text-2xl font-bold ${tone.text}`}>{value}</p>
    </div>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="flex flex-col min-h-0 p-4 bg-white border border-gray-200 shadow-sm rounded-xl">
    <h3 className="mb-3 text-xs font-bold tracking-wide text-gray-800 uppercase md:text-sm">{title}</h3>
    {children}
  </div>
);

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="px-3 py-2 text-xs bg-white border border-gray-200 rounded-lg shadow-lg">
      <p className="font-semibold text-gray-800">{label}</p>
      <p className="text-gray-600">{payload[0].value} lead{payload[0].value === 1 ? '' : 's'}</p>
    </div>
  );
};

export default function Dashboard() {
  const {
    totalLeads, neverContactedCount, futurePlanCount, convertedCount, notInterestedCount,
    pendingCount, conversionRate, leadTypeData, leadSourceData, trendData,
    callerStats, upcomingFollowUps, recentLeads
  } = useMemo(() => {
    const leads = getLeads();
    const trackers = getCallTrackers();
    const users = getUsers();

    const leadsWithStatus = leads.map(l => ({ ...l, _status: getLeadStatus(trackers, l.id) }));

    const totalLeads = leads.length;
    const neverContactedCount = leadsWithStatus.filter(l => l._status === null).length;
    const futurePlanCount = leadsWithStatus.filter(l => l._status === 'Future Plan').length;
    const convertedCount = leadsWithStatus.filter(l => QUALIFIED_STATUSES.includes(l._status)).length;
    const notInterestedCount = leadsWithStatus.filter(l => l._status === 'Not Interested').length;
    const pendingCount = leads.filter(l => isLeadPending(trackers, l)).length;
    const conversionRate = totalLeads > 0 ? Math.round((convertedCount / totalLeads) * 100) : 0;

    const leadTypeData = LEAD_TYPES.map((type, i) => ({
      name: type,
      value: leads.filter(l => l.leadType === type).length,
      color: CATEGORICAL[i % CATEGORICAL.length]
    }));

    const leadSourceData = LEAD_SOURCES.map((src, i) => ({
      name: src,
      value: leads.filter(l => l.leadSource === src).length,
      color: CATEGORICAL[i % CATEGORICAL.length]
    })).filter(d => d.value > 0).sort((a, b) => b.value - a.value);

    // Leads created per day, last 14 days
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayBuckets = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      dayBuckets.push({ key: dateKey(d), label: `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`, value: 0 });
    }
    const bucketByKey = Object.fromEntries(dayBuckets.map(b => [b.key, b]));
    leads.forEach(l => {
      const d = parseLeadTimestamp(l.timestamp);
      if (!d) return;
      const key = dateKey(d);
      if (bucketByKey[key]) bucketByKey[key].value += 1;
    });
    const trendData = dayBuckets;

    // Caller performance
    const callerStats = users.map(u => {
      const assigned = leadsWithStatus.filter(l => l.callerAssigned === u.name);
      const total = assigned.length;
      const received = assigned.filter(l => QUALIFIED_STATUSES.includes(l._status)).length;
      const pending = assigned.filter(l => l._status === null || l._status === 'Future Plan').length;
      const notInterested = assigned.filter(l => l._status === 'Not Interested').length;
      const rate = total > 0 ? Math.round((received / total) * 100) : 0;
      return { name: u.name, total, received, pending, notInterested, rate };
    }).filter(c => c.total > 0).sort((a, b) => b.total - a.total);

    // Upcoming follow-ups
    const upcomingFollowUps = leadsWithStatus
      .filter(l => l._status === 'Future Plan')
      .map(l => {
        const forLead = trackers.filter(t => t.leadId === l.id).sort((a, b) => (a.timestampMs || 0) - (b.timestampMs || 0));
        const latest = forLead[forLead.length - 1];
        return { ...l, nextCallDate: latest?.nextDate || '' };
      })
      .sort((a, b) => (a.nextCallDate || '9999').localeCompare(b.nextCallDate || '9999'))
      .slice(0, 6);

    // Recent leads
    const recentLeads = [...leads].reverse().slice(0, 6);

    return {
      totalLeads, neverContactedCount, futurePlanCount, convertedCount, notInterestedCount,
      pendingCount, conversionRate, leadTypeData, leadSourceData, trendData,
      callerStats, upcomingFollowUps, recentLeads
    };
  }, []);

  const todayKey = dateKey(new Date());

  return (
    <div className="h-full min-h-0 overflow-y-auto">
      <div className="p-2 space-y-4 sm:p-4 md:p-6 md:space-y-6">

        {/* Page Title */}
        <div className="flex flex-col gap-2 pb-1 border-b border-gray-100 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-black tracking-tight text-gray-900 sm:text-2xl">Dashboard Overview</h1>
            <p className="text-xs font-medium text-gray-500 sm:text-sm">Real-time performance and pipeline analytics</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span> Live System
            </span>
          </div>
        </div>

        {/* KPI Stat Tiles */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          <StatTile icon={Users} label="Total Leads" value={totalLeads} tone={{ text: 'text-indigo-700', bg: 'bg-indigo-50', border: 'border-indigo-200' }} />
          <StatTile icon={Clock} label="Pending Follow-ups" value={pendingCount} tone={{ text: STATUS_COLORS['Future Plan'].text, bg: STATUS_COLORS['Future Plan'].bg, border: STATUS_COLORS['Future Plan'].border }} />
          <StatTile icon={CheckCircle2} label="Converted" value={convertedCount} tone={{ text: STATUS_COLORS.Interested.text, bg: STATUS_COLORS.Interested.bg, border: STATUS_COLORS.Interested.border }} />
          <StatTile icon={XCircle} label="Not Interested" value={notInterestedCount} tone={{ text: STATUS_COLORS['Not Interested'].text, bg: STATUS_COLORS['Not Interested'].bg, border: STATUS_COLORS['Not Interested'].border }} />
          <StatTile icon={TrendingUp} label="Conversion Rate" value={`${conversionRate}%`} tone={{ text: 'text-indigo-700', bg: 'bg-indigo-50', border: 'border-indigo-200' }} />
        </div>

        {/* Lead Type / Lead Source breakdown */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <ChartCard title="Leads by Type">
            {leadTypeData.some(d => d.value > 0) ? (
              <ResponsiveContainer width="100%" height={160}>
                <BarChart data={leadTypeData} layout="vertical" margin={{ top: 0, right: 24, left: 0, bottom: 0 }}>
                  <CartesianGrid horizontal={false} stroke="#e1e0d9" />
                  <XAxis type="number" allowDecimals={false} tick={{ fontSize: 11, fill: '#898781' }} axisLine={{ stroke: '#c3c2b7' }} tickLine={false} />
                  <YAxis type="category" dataKey="name" width={90} tick={{ fontSize: 11, fill: '#52514e' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} maxBarSize={22}>
                    {leadTypeData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                    <LabelList dataKey="value" position="right" style={{ fontSize: 11, fill: '#52514e', fontWeight: 600 }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="py-8 text-xs italic text-center text-gray-400">No leads yet.</p>
            )}
          </ChartCard>

          <ChartCard title="Leads by Source">
            {leadSourceData.length > 0 ? (
              <ResponsiveContainer width="100%" height={160}>
                <BarChart data={leadSourceData} layout="vertical" margin={{ top: 0, right: 24, left: 0, bottom: 0 }}>
                  <CartesianGrid horizontal={false} stroke="#e1e0d9" />
                  <XAxis type="number" allowDecimals={false} tick={{ fontSize: 11, fill: '#898781' }} axisLine={{ stroke: '#c3c2b7' }} tickLine={false} />
                  <YAxis type="category" dataKey="name" width={90} tick={{ fontSize: 11, fill: '#52514e' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} maxBarSize={18}>
                    {leadSourceData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                    <LabelList dataKey="value" position="right" style={{ fontSize: 11, fill: '#52514e', fontWeight: 600 }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="py-8 text-xs italic text-center text-gray-400">No leads yet.</p>
            )}
          </ChartCard>
        </div>

        {/* Leads over last 14 days */}
        <ChartCard title="Leads Created — Last 14 Days">
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={trendData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="#e1e0d9" />
              <XAxis dataKey="label" tick={{ fontSize: 10, fill: '#898781' }} axisLine={{ stroke: '#c3c2b7' }} tickLine={false} interval={1} />
              <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: '#898781' }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
              <Bar dataKey="value" radius={[3, 3, 0, 0]} maxBarSize={22}>
                {trendData.map((entry, i) => <Cell key={i} fill={entry.key === todayKey ? BRAND_NAVY : '#a2d0f6'} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Caller Performance / Upcoming Follow-ups */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="p-4 bg-white border border-gray-200 shadow-sm rounded-xl">
            <h3 className="mb-3 text-xs font-bold tracking-wide text-gray-800 uppercase md:text-sm">Caller Performance</h3>
            {callerStats.length > 0 ? (
              <div className="space-y-3">
                {callerStats.map(c => (
                  <div key={c.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-gray-800">{c.name}</span>
                      <span className="text-gray-500">{c.received}/{c.total} received · {c.rate}%</span>
                    </div>
                    <div className="w-full h-2 overflow-hidden bg-gray-100 rounded-full">
                      <div className="h-full transition-all duration-500 rounded-full" style={{ width: `${c.rate}%`, backgroundColor: BRAND_NAVY }} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="py-4 text-xs italic text-center text-gray-400">No leads assigned yet.</p>
            )}
          </div>

          <div className="p-4 bg-white border border-gray-200 shadow-sm rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold tracking-wide text-gray-800 uppercase md:text-sm">Upcoming Follow-ups</h3>
              <span className="text-[11px] text-gray-400 font-medium">{upcomingFollowUps.length} Scheduled</span>
            </div>
            {upcomingFollowUps.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {upcomingFollowUps.map(l => (
                  <div key={l.leadNo} className="flex items-center justify-between py-2 text-xs">
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-800 truncate">{l.personName} <span className="text-indigo-600">· {l.leadNo}</span></p>
                      <p className="text-gray-500 truncate">{l.callerAssigned}</p>
                    </div>
                    <span className="flex items-center gap-1 text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap">
                      <CalendarClock size={11} /> {formatDate(l.nextCallDate)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="py-4 text-xs italic text-center text-gray-400">No follow-ups scheduled.</p>
            )}
          </div>
        </div>

        {/* Recent Leads */}
        <div className="p-4 bg-white border border-gray-200 shadow-sm rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold tracking-wide text-gray-800 uppercase md:text-sm">Recent Leads</h3>
            <span className="text-[11px] text-gray-400 font-medium">{recentLeads.length} Displayed</span>
          </div>
          {recentLeads.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-left text-gray-400 uppercase text-[10px] tracking-wide border-b border-gray-100">
                    <th className="py-2 pr-3">Lead No</th>
                    <th className="py-2 pr-3">Person Name</th>
                    <th className="py-2 pr-3">Type</th>
                    <th className="py-2 pr-3">Number</th>
                    <th className="py-2 pr-3">Caller</th>
                    <th className="py-2 pr-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.map(l => {
                    const status = getLeadStatus(getCallTrackers(), l.id) || 'Never Contacted';
                    const tone = STATUS_COLORS[status] || STATUS_COLORS['Never Contacted'];
                    return (
                      <tr key={l.leadNo} className="transition-colors border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                        <td className="py-2 pr-3 font-bold text-indigo-600 whitespace-nowrap">{l.leadNo}</td>
                        <td className="py-2 pr-3 font-medium text-gray-800 whitespace-nowrap">{l.personName}</td>
                        <td className="py-2 pr-3 text-gray-600 whitespace-nowrap">{l.leadType}</td>
                        <td className="py-2 pr-3 font-mono text-gray-600 whitespace-nowrap">{l.number}</td>
                        <td className="py-2 pr-3 text-gray-600 whitespace-nowrap">{l.callerAssigned}</td>
                        <td className="py-2 pr-3 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase border ${tone.bg} ${tone.text} ${tone.border}`}>
                            {status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="flex items-center justify-center gap-2 py-4 text-xs italic text-center text-gray-400">
              <PhoneCall size={14} /> No leads created yet.
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
