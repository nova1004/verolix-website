import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeaturePopupProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function FeaturePopup({ 
  title, 
  description, 
  icon, 
  isOpen, 
  onClose 
}: FeaturePopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 transition-opacity duration-300">
      <div 
        className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-healthcare-100 flex items-center justify-center mr-3">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-healthcare-800">{title}</h3>
          </div>
          <Button 
            onClick={onClose}
            variant="ghost" 
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-healthcare-100"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="bg-healthcare-50/50 rounded-lg p-5 mb-4">
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
        
        <div className="flex justify-end">
          <Button 
            onClick={onClose}
            className="bg-healthcare-600 hover:bg-healthcare-700 text-white"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
} 