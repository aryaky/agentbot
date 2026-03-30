import React from 'react';
import { 
  LayoutDashboard, 
  Bot, 
  Megaphone, 
  PhoneCall, 
  Settings, 
  LogOut,
  Zap
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: '仪表板', icon: LayoutDashboard },
    { id: 'bots', label: '机器人配置', icon: Bot },
    { id: 'campaigns', label: '营销活动管理', icon: Megaphone },
    { id: 'calls', label: '通话日志', icon: PhoneCall },
  ];

  return (
    <div className="w-64 h-screen bg-brand-card border-r border-brand-border flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center shadow-lg shadow-brand-primary/20">
          <Zap className="text-white fill-white" size={24} />
        </div>
        <h1 className="text-xl font-bold tracking-tight">声波架构师</h1>
      </div>

      <nav className="flex-1 mt-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "nav-item",
              activeTab === item.id && "nav-item-active"
            )}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-brand-border">
        <div className="nav-item rounded-lg mb-2">
          <Settings size={20} />
          <span className="font-medium">设置</span>
        </div>
        <div className="nav-item rounded-lg text-red-400 hover:bg-red-400/10 hover:text-red-400">
          <LogOut size={20} />
          <span className="font-medium">退出登录</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
