import React from 'react';
import { AppData } from '../types';

interface AppModalProps {
  app: AppData | null;
  onClose: () => void;
}

const AppModal: React.FC<AppModalProps> = ({ app, onClose }) => {
  if (!app) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Graphic */}
        <div className="h-32 relative overflow-hidden">
            <div className={`absolute inset-0 ${app.colorClasses.bg} opacity-20`}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]"></div>
            
            <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors backdrop-blur-md z-20"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        {/* Body */}
        <div className="px-8 pb-8 -mt-10 relative z-10">
            <div className={`w-20 h-20 rounded-xl flex items-center justify-center text-3xl font-bold text-white shadow-lg mb-6 ${app.colorClasses.bg} border border-white/10`}>
                {app.name.charAt(0)}
            </div>

            <h2 className="text-3xl font-space font-bold text-white mb-2">{app.name}</h2>
            <div className="flex items-center gap-3 mb-6">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-white/10 bg-white/5 text-neutral-300`}>
                    {app.category}
                </span>
                <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                <span className="text-sm text-emerald-500 font-medium">Active</span>
            </div>

            <p className="text-neutral-400 leading-relaxed mb-8 text-base">
                {app.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                    <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Latency</div>
                    <div className="text-white font-mono font-bold">12ms</div>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                    <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Version</div>
                    <div className="text-white font-mono font-bold">2.4.0</div>
                </div>
            </div>

            <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 text-center font-bold text-black rounded-xl transition-transform hover:scale-[1.01] active:scale-[0.99]`}
                style={{ backgroundColor: 'white' }}
            >
                LAUNCH {app.name.toUpperCase()}
            </a>
        </div>
      </div>
    </div>
  );
};

export default AppModal;