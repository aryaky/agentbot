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
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'bots', label: 'Bot Configuration', icon: Bot },
    { id: 'campaigns', label: 'Campaign Management', icon: Megaphone },
    { id: 'calls', label: 'Call Logs', icon: PhoneCall },
  ];

  return (
    <div className="w-64 h-screen bg-brand-card border-r border-brand-border flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center shadow-lg shadow-brand-primary/20">
          <Zap className="text-white fill-white" size={24} />
        </div>
        <h1 className="text-xl font-bold tracking-tight">Sonic Architect</h1>
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
          <span className="font-medium">Settings</span>
        </div>
        <div className="nav-item rounded-lg text-red-400 hover:bg-red-400/10 hover:text-red-400">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
