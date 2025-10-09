import { X } from "lucide-react";
import { useEffect } from "react";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const PolicyModal = ({ isOpen, onClose, title, children }: PolicyModalProps) => {
  // Close modal on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent scrolling of the body when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fade-in" onClick={onClose}>
      <div 
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-slide-up" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 text-gray-700 prose max-w-none">
          {children}
        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-glow transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
