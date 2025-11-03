import React from 'react';
import { AppData } from '../types';

interface AppCardProps {
  app: AppData;
  onClick: (app: AppData) => void;
}

const AppCard: React.FC<AppCardProps> = ({ app, onClick }) => {
  return (
    <div
      onClick={() => onClick(app)}
      className={`relative aspect-[16/9] flex flex-col justify-end p-4 bg-neutral-900/60 backdrop-blur-md rounded-2xl border border-neutral-800 cursor-pointer group transition-all duration-300 ease-out overflow-hidden hover:-translate-y-1 ${app.colorClasses.hoverShadow} hover:shadow-xl`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/50 opacity-100 group-hover:opacity-0 transition-opacity duration-500`}></div>
      <div className={`absolute inset-0 bg-gradient-to-br from-transparent ${app.colorClasses.bg}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      <div className="absolute top-4 right-4 text-gray-500 group-hover:text-gray-200 transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      </div>

      <div className="relative z-10">
        <h3 className={`text-xl font-bold ${app.colorClasses.text}`}>{app.name}</h3>
        <p className="text-gray-400 text-xs mt-2 leading-snug line-clamp-3">{app.description}</p>
      </div>
    </div>
  );
};

export default AppCard;