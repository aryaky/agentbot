import React from 'react';
import { 
  Megaphone, 
  Plus, 
  Users, 
  Target, 
  BarChart3, 
  MoreVertical,
  Play,
  Pause,
  Square
} from 'lucide-react';

const campaigns = [
  { id: 'CAMP-001', name: 'Q1 客户反馈调查', status: '进行中', reach: '12,482', conversion: '18.4%', cost: '$2,450', color: 'bg-green-400' },
  { id: 'CAMP-002', name: '春季销售外呼', status: '已计划', reach: '45,000', conversion: '-', cost: '$8,200', color: 'bg-blue-400' },
  { id: 'CAMP-003', name: '产品发布内测', status: '已完成', reach: '5,200', conversion: '24.1%', cost: '$1,150', color: 'bg-brand-text-muted' },
];

const Campaigns: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">营销活动管理</h2>
          <p className="text-brand-text-muted text-sm mt-1">编排并监控您的自动化语音外呼活动。</p>
        </div>
        <button className="px-4 py-2 bg-brand-primary text-white rounded-lg text-sm font-medium hover:bg-brand-primary/90 transition-colors flex items-center gap-2">
          <Plus size={18} />
          新建营销活动
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 flex items-center gap-4">
          <div className="p-3 bg-blue-400/10 text-blue-400 rounded-lg">
            <Users size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider">总覆盖人数</p>
            <h3 className="text-xl font-bold">62,682</h3>
          </div>
        </div>
        <div className="glass-card p-6 flex items-center gap-4">
          <div className="p-3 bg-purple-400/10 text-purple-400 rounded-lg">
            <Target size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider">平均转化率</p>
            <h3 className="text-xl font-bold">21.2%</h3>
          </div>
        </div>
        <div className="glass-card p-6 flex items-center gap-4">
          <div className="p-3 bg-orange-400/10 text-orange-400 rounded-lg">
            <BarChart3 size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider">ROI 指数</p>
            <h3 className="text-xl font-bold">4.8x</h3>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {campaigns.map((camp) => (
          <div key={camp.id} className="glass-card p-6 flex flex-col md:flex-row items-center gap-6 group hover:border-brand-primary/50 transition-all">
            <div className="flex items-center gap-4 flex-1">
              <div className={`w-12 h-12 ${camp.color}/10 ${camp.color.replace('bg-', 'text-')} rounded-xl flex items-center justify-center`}>
                <Megaphone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">{camp.name}</h4>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs font-mono text-brand-text-muted">{camp.id}</span>
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    camp.status === 'Active' ? 'bg-green-400/10 text-green-400' : 
                    camp.status === 'Scheduled' ? 'bg-blue-400/10 text-blue-400' : 'bg-white/10 text-brand-text-muted'
                  }`}>
                    {camp.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 px-8 border-x border-brand-border">
              <div>
                <p className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">覆盖人数</p>
                <p className="text-sm font-bold mt-1">{camp.reach}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">转化</p>
                <p className="text-sm font-bold mt-1">{camp.conversion}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">成本</p>
                <p className="text-sm font-bold mt-1">{camp.cost}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {camp.status === 'Active' ? (
                <button className="p-2 bg-brand-secondary text-white rounded-lg hover:bg-white/10 transition-colors">
                  <Pause size={18} />
                </button>
              ) : camp.status === 'Scheduled' ? (
                <button className="p-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors shadow-lg shadow-brand-primary/20">
                  <Play size={18} fill="white" />
                </button>
              ) : null}
              <button className="p-2 bg-brand-secondary text-red-400 rounded-lg hover:bg-red-400/10 transition-colors">
                <Square size={18} fill="currentColor" />
              </button>
              <button className="p-2 text-brand-text-muted hover:text-white transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
