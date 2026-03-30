import React from 'react';
import { 
  Phone, 
  Clock, 
  TrendingUp, 
  DollarSign, 
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend
} from 'recharts';

const stats = [
  { label: '活跃通话', value: '1,284', change: '+12%', icon: Phone, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { label: '平均通话时长', value: '4m 12s', change: '-2%', icon: Clock, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { label: '成功率', value: '94.2%', change: '+5%', icon: TrendingUp, color: 'text-green-400', bg: 'bg-green-400/10' },
  { label: '总成本', value: '$12,482', change: '+8%', icon: DollarSign, color: 'text-orange-400', bg: 'bg-orange-400/10' },
];

const callVolumeData = [
  { name: '周一', volume: 4000 },
  { name: '周二', volume: 3000 },
  { name: '周三', volume: 2000 },
  { name: '周四', volume: 2780 },
  { name: '周五', volume: 1890 },
  { name: '周六', volume: 2390 },
  { name: '周日', volume: 3490 },
];

const intentData = [
  { name: '技术支持', value: 80, fill: '#007AFF' },
  { name: '销售咨询', value: 65, fill: '#8B5CF6' },
  { name: '账单查询', value: 45, fill: '#10B981' },
  { name: '其他', value: 30, fill: '#F59E0B' },
];

const liveCalls = [
  { id: 'C-1024', bot: 'Aria (支持)', status: '活跃中', duration: '2:14', sentiment: '正面' },
  { id: 'C-1025', bot: 'Leo (销售)', status: '活跃中', duration: '1:45', sentiment: '中性' },
  { id: 'C-1026', bot: 'Aria (支持)', status: '活跃中', duration: '0:32', sentiment: '正面' },
  { id: 'C-1027', bot: 'Nova (账单)', status: '连接中', duration: '0:00', sentiment: '-' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">系统概览</h2>
          <p className="text-brand-text-muted text-sm mt-1">语音基础设施的实时性能指标。</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-brand-card border border-brand-border rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
            导出报告
          </button>
          <button className="px-4 py-2 bg-brand-primary text-white rounded-lg text-sm font-medium hover:bg-brand-primary/90 transition-colors">
            启动营销活动
          </button>
        </div>
      </div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card p-6 flex flex-col justify-between group hover:border-brand-primary/50 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <stat.icon className={stat.color} size={24} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change}
                {stat.change.startsWith('+') ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              </div>
            </div>
            <div>
              <p className="text-brand-text-muted text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold">通话量趋势</h3>
            <select className="bg-brand-bg border border-brand-border rounded-md text-xs px-2 py-1 focus:outline-none">
              <option>最近 7 天</option>
              <option>最近 30 天</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={callVolumeData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2D3748" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94A3B8', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94A3B8', fontSize: 12 }} 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#151B28', border: '1px solid #2D3748', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="volume" fill="#007AFF" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="font-bold mb-8">意图分布</h3>
          <div className="h-[300px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart 
                cx="50%" 
                cy="50%" 
                innerRadius="20%" 
                outerRadius="100%" 
                barSize={10} 
                data={intentData}
              >
                <RadialBar
                  background
                  dataKey="value"
                  cornerRadius={10}
                />
                <Legend 
                  iconSize={10} 
                  layout="vertical" 
                  verticalAlign="middle" 
                  align="right" 
                  wrapperStyle={{ fontSize: '12px', color: '#94A3B8' }}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Live Monitor Table */}
      <div className="glass-card overflow-hidden">
        <div className="p-6 border-b border-brand-border flex items-center justify-between">
          <h3 className="font-bold">实时通话监控</h3>
          <button className="text-brand-primary text-sm font-medium hover:underline">查看所有日志</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-brand-text-muted text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">通话 ID</th>
                <th className="px-6 py-4 font-semibold">机器人身份</th>
                <th className="px-6 py-4 font-semibold">状态</th>
                <th className="px-6 py-4 font-semibold">时长</th>
                <th className="px-6 py-4 font-semibold">情绪</th>
                <th className="px-6 py-4 font-semibold"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              {liveCalls.map((call) => (
                <tr key={call.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4 text-sm font-mono text-brand-primary">{call.id}</td>
                  <td className="px-6 py-4 text-sm font-medium">{call.bot}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${
                      call.status === '活跃中' ? 'bg-green-400/10 text-green-400' : 'bg-orange-400/10 text-orange-400'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${call.status === '活跃中' ? 'bg-green-400 animate-pulse' : 'bg-orange-400'}`}></span>
                      {call.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-brand-text-muted">{call.duration}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`text-xs font-medium ${
                      call.sentiment === 'Positive' ? 'text-green-400' : 
                      call.sentiment === 'Neutral' ? 'text-brand-text-muted' : 'text-red-400'
                    }`}>
                      {call.sentiment}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1 hover:bg-brand-secondary rounded transition-colors text-brand-text-muted">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
