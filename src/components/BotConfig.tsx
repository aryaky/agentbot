import React, { useState } from 'react';
import { 
  Bot, 
  Mic2, 
  BrainCircuit, 
  Plus, 
  Trash2, 
  Upload, 
  Globe, 
  CheckCircle2,
  ChevronRight,
  Play
} from 'lucide-react';
import { cn } from '../lib/utils';

const BotConfig: React.FC = () => {
  const [activeSection, setActiveSection] = useState('identity');

  const sections = [
    { id: 'identity', label: 'Bot Identity', icon: Bot },
    { id: 'vocal', label: 'Vocal Texture', icon: Mic2 },
    { id: 'intelligence', label: 'Intelligence Feed', icon: BrainCircuit },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Bot Configuration</h2>
          <p className="text-brand-text-muted text-sm mt-1">Define the persona, voice, and knowledge base of your AI agent.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-brand-primary text-white rounded-lg text-sm font-medium hover:bg-brand-primary/90 transition-colors flex items-center gap-2">
            <Play size={16} />
            Test Bot
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors flex items-center gap-2">
            <CheckCircle2 size={16} />
            Deploy Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all text-left",
                activeSection === section.id 
                  ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20" 
                  : "text-brand-text-muted hover:bg-white/5 hover:text-white"
              )}
            >
              <section.icon size={18} />
              {section.label}
              {activeSection === section.id && <ChevronRight size={16} className="ml-auto" />}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-6">
          {activeSection === 'identity' && (
            <div className="glass-card p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider">Bot Name</label>
                  <input 
                    type="text" 
                    defaultValue="Aria" 
                    className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-brand-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider">Primary Role</label>
                  <select className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-brand-primary transition-all">
                    <option>Customer Support</option>
                    <option>Sales Outreach</option>
                    <option>Technical Assistance</option>
                    <option>Appointment Setter</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider">Persona Description</label>
                <textarea 
                  rows={4}
                  placeholder="Describe the bot's personality, tone, and behavioral guidelines..."
                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary transition-all resize-none"
                  defaultValue="Aria is a helpful, empathetic, and professional customer support agent. She speaks clearly, avoids technical jargon unless necessary, and always aims to resolve issues in a single interaction."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider">Language</label>
                  <select className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-brand-primary transition-all">
                    <option>English (US)</option>
                    <option>English (UK)</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider">Dialect</label>
                  <select className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-brand-primary transition-all">
                    <option>Neutral</option>
                    <option>Southern</option>
                    <option>Mid-Atlantic</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider">Gender</label>
                  <div className="flex bg-brand-bg border border-brand-border rounded-lg p-1">
                    <button className="flex-1 py-1.5 text-xs font-medium bg-brand-primary text-white rounded-md shadow-sm">Female</button>
                    <button className="flex-1 py-1.5 text-xs font-medium text-brand-text-muted hover:text-white transition-colors">Male</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'vocal' && (
            <div className="glass-card p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider">Pitch Modulation</label>
                    <span className="text-xs font-mono text-brand-primary">1.0x</span>
                  </div>
                  <input type="range" className="w-full h-1.5 bg-brand-bg rounded-lg appearance-none cursor-pointer accent-brand-primary" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider">Speaking Rate</label>
                    <span className="text-xs font-mono text-brand-primary">1.15x</span>
                  </div>
                  <input type="range" className="w-full h-1.5 bg-brand-bg rounded-lg appearance-none cursor-pointer accent-brand-primary" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider">Vocal Warmth</label>
                    <span className="text-xs font-mono text-brand-primary">High</span>
                  </div>
                  <input type="range" className="w-full h-1.5 bg-brand-bg rounded-lg appearance-none cursor-pointer accent-brand-primary" />
                </div>
              </div>

              <div className="p-6 bg-brand-bg/50 border border-brand-border rounded-xl flex items-center gap-6">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary">
                  <Mic2 size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Preview Voice Sample</p>
                  <p className="text-xs text-brand-text-muted mt-0.5">Hear how Aria sounds with current settings.</p>
                </div>
                <button className="p-3 bg-brand-primary text-white rounded-full hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20">
                  <Play size={20} fill="white" />
                </button>
              </div>
            </div>
          )}

          {activeSection === 'intelligence' && (
            <div className="glass-card p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border-2 border-dashed border-brand-border rounded-xl hover:border-brand-primary/50 transition-all cursor-pointer group flex flex-col items-center justify-center text-center space-y-3">
                  <div className="p-3 bg-brand-secondary rounded-lg group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors">
                    <Upload size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Upload Documents</p>
                    <p className="text-xs text-brand-text-muted mt-1">PDF, DOCX, TXT (Max 50MB)</p>
                  </div>
                </div>

                <div className="p-6 border-2 border-dashed border-brand-border rounded-xl hover:border-brand-primary/50 transition-all cursor-pointer group flex flex-col items-center justify-center text-center space-y-3">
                  <div className="p-3 bg-brand-secondary rounded-lg group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Crawl Website</p>
                    <p className="text-xs text-brand-text-muted mt-1">Import knowledge from URL</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider">Active Knowledge Sources</h4>
                <div className="space-y-2">
                  {[
                    { name: 'Product_Manual_v2.pdf', size: '2.4 MB', type: 'PDF' },
                    { name: 'https://docs.sonicarchitect.ai', size: '42 Pages', type: 'URL' },
                    { name: 'Support_FAQ_2024.txt', size: '128 KB', type: 'TXT' },
                  ].map((source, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-brand-bg border border-brand-border rounded-lg group">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-brand-secondary rounded flex items-center justify-center text-xs font-bold text-brand-text-muted">
                          {source.type}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{source.name}</p>
                          <p className="text-xs text-brand-text-muted">{source.size}</p>
                        </div>
                      </div>
                      <button className="p-2 text-brand-text-muted hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2.5 border border-brand-border border-dashed rounded-lg text-sm text-brand-text-muted hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                  <Plus size={16} />
                  Add New Source
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BotConfig;
