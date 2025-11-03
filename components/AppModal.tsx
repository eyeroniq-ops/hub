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
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-lg"
      onClick={onClose}
    >
      <div
        className={`relative z-50 p-8 max-w-2xl w-[calc(100%-2rem)] bg-[#0A0A0A] border border-neutral-800 rounded-2xl shadow-2xl ${app.colorClasses.shadow} transition-all duration-300 ease-in-out transform scale-95 animate-fade-in-scale`}
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col h-full">
          <h2 className={`text-4xl font-bold ${app.colorClasses.text} mb-4`}>{app.name}</h2>
          <p className="text-gray-300 mb-8 flex-grow">{app.description}</p>
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center text-white font-semibold py-3 px-6 rounded-lg ${app.colorClasses.bg} transition-all duration-300 shadow-lg ${app.colorClasses.shadow} hover:shadow-2xl hover:-translate-y-0.5`}
          >
            Lanzar App
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AppModal;