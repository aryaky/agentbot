import React from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  PhoneIncoming, 
  PhoneOutgoing,
  Play,
  MoreHorizontal
} from 'lucide-react';

const logs = [
  { id: 'LOG-4821', type: 'Outbound', bot: 'Aria', customer: '+1 (555) 012-3456', duration: '4:12', sentiment: 'Positive', date: 'Mar 30, 14:05' },
  { id: 'LOG-4820', type: 'Inbound', bot: 'Leo', customer: '+1 (555) 012-7890', duration: '2:45', sentiment: 'Neutral', date: 'Mar 30, 13:58' },
  { id: 'LOG-4819', type: 'Outbound', bot: 'Aria', customer: '+1 (555) 012-1122', duration: '1:12', sentiment: 'Negative', date: 'Mar 30, 13:42' },
  { id: 'LOG-4818', type: 'Outbound', bot: 'Nova', customer: '+1 (555) 012-3344', duration: '0:45', sentiment: 'Positive', date: 'Mar 30, 13:30' },
  { id: 'LOG-4817', type: 'Inbound', bot: 'Aria', customer: '+1 (555) 012-5566', duration: '5:24', sentiment: 'Positive', date: 'Mar 30, 13:15' },
  { id: 'LOG-4816', type: 'Outbound', bot: 'Leo', customer: '+1 (555) 012-7788', duration: '3:10', sentiment: 'Neutral', date: 'Mar 30, 13:02' },
];

const CallLogs: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Call Logs</h2>
          <p className="text-brand-text-muted text-sm mt-1">Detailed history of all voice interactions.</p>
        </div>
        <button className="px-4 py-2 bg-brand-card border border-brand-border rounded-lg text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
          <Download size={18} />
          Export CSV
        </button>
      </div>

      <div className="glass-card">
        <div className="p-4 border-b border-brand-border flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-text-muted" size={18} />
            <input 
              type="text" 
              placeholder="Search by ID or Number..." 
              className="w-full bg-brand-bg border border-brand-border rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-brand-primary transition-all text-sm"
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-4 py-2 bg-brand-bg border border-brand-border rounded-lg text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
              <Filter size={18} />
              Filters
            </button>
            <select className="flex-1 md:flex-none bg-brand-bg border border-brand-border rounded-lg text-sm px-4 py-2 focus:outline-none">
              <option>Last 24 Hours</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-brand-text-muted text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Type</th>
                <th className="px-6 py-4 font-semibold">Call ID</th>
                <th className="px-6 py-4 font-semibold">Bot</th>
                <th className="px-6 py-4 font-semibold">Customer</th>
                <th className="px-6 py-4 font-semibold">Duration</th>
                <th className="px-6 py-4 font-semibold">Sentiment</th>
                <th className="px-6 py-4 font-semibold">Timestamp</th>
                <th className="px-6 py-4 font-semibold"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4">
                    {log.type === 'Inbound' ? (
                      <div className="p-2 bg-blue-400/10 text-blue-400 rounded-lg inline-block">
                        <PhoneIncoming size={16} />
                      </div>
                    ) : (
                      <div className="p-2 bg-purple-400/10 text-purple-400 rounded-lg inline-block">
                        <PhoneOutgoing size={16} />
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-brand-primary">{log.id}</td>
                  <td className="px-6 py-4 text-sm font-medium">{log.bot}</td>
                  <td className="px-6 py-4 text-sm text-brand-text-muted">{log.customer}</td>
                  <td className="px-6 py-4 text-sm">{log.duration}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`text-xs font-medium ${
                      log.sentiment === 'Positive' ? 'text-green-400' : 
                      log.sentiment === 'Neutral' ? 'text-brand-text-muted' : 'text-red-400'
                    }`}>
                      {log.sentiment}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-brand-text-muted">{log.date}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 bg-brand-primary/10 text-brand-primary rounded-lg hover:bg-brand-primary/20 transition-colors">
                        <Play size={16} fill="currentColor" />
                      </button>
                      <button className="p-2 text-brand-text-muted hover:text-white transition-colors">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-brand-border flex items-center justify-between text-sm text-brand-text-muted font-medium">
          <p>Showing 6 of 1,284 logs</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-brand-bg border border-brand-border rounded hover:bg-white/5 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 bg-brand-bg border border-brand-border rounded hover:bg-white/5">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallLogs;
