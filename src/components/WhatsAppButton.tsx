import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = () => {
    window.open('https://wa.me/355697764801?text=Hello! I would like to learn more about hair transplant services.', '_blank');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle WhatsApp chat"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-green-500 p-4 flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <MessageCircle size={24} className="text-green-500" />
            </div>
            <div className="text-white">
              <h4 className="font-bold">Chat with us</h4>
              <p className="text-sm text-green-100">We're here to help 24/7</p>
            </div>
          </div>

          <div className="p-6">
            <p className="text-slate-700 mb-6 leading-relaxed">
              Hello! How can we help you today? Click below to start a conversation on WhatsApp.
            </p>
            <button
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Start Chat</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
