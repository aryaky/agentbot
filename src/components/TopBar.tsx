import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <header className="h-16 border-b border-brand-border bg-brand-bg/50 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-text-muted" size={18} />
          <input 
            type="text" 
            placeholder="搜索通话、机器人或营销活动..." 
            className="w-full bg-brand-card border border-brand-border rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-brand-primary transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-brand-text-muted hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-primary rounded-full border-2 border-brand-bg"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-6 border-l border-brand-border">
          <div className="text-right">
            <p className="text-sm font-medium">Alex Rivers</p>
            <p className="text-xs text-brand-text-muted">管理员账户</p>
          </div>
          <div className="w-10 h-10 bg-brand-secondary rounded-full flex items-center justify-center border border-brand-border overflow-hidden">
             <User size={20} className="text-brand-text-muted" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
