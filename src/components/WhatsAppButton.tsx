import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '254702890446'; // LCK WhatsApp Business Number
  
  const predefinedMessages = [
    {
      title: '🔬 Regulatory Support',
      message: 'Hello! I need help with regulatory affairs and WHO prequalification.',
    },
    {
      title: '🧪 Bioequivalence Studies',
      message: 'Hi! I would like to discuss bioequivalence study design and evaluation.',
    },
    {
      title: '✅ GMP Auditing',
      message: 'Hello! I need assistance with GMP audits and WHO GBT assessments.',
    },
    {
      title: '📚 Training Services',
      message: 'Hi! I am interested in training and capacity building programs.',
    },
    {
      title: '💬 General Inquiry',
      message: 'Hello! I would like to learn more about LCK Pharmaceutical Consulting services.',
    },
  ];

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center text-white relative overflow-hidden group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 bg-[#25D366] rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {isOpen ? (
            <X className="w-7 h-7 relative z-10" />
          ) : (
            <MessageCircle className="w-7 h-7 relative z-10" />
          )}
        </motion.button>

        {/* Tooltip */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
            className="absolute right-20 top-1/2 -translate-y-1/2 bg-[#003366] text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
          >
            <div className="text-sm font-medium">Need help? Chat with us!</div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#003366]" />
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Message Options Popup */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-28 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#25D366] p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <div>
                <div className="font-semibold">Start a Conversation</div>
                <div className="text-sm text-white/90">We typically reply in minutes</div>
              </div>
            </div>
          </div>

          {/* Message Options */}
          <div className="p-4 max-h-96 overflow-y-auto">
            <p className="text-gray-600 text-sm mb-4">
              Choose a topic to start chatting on WhatsApp:
            </p>
            <div className="space-y-2">
              {predefinedMessages.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleWhatsAppClick(item.message)}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all group"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700 group-hover:text-[#25D366]">
                      {item.title}
                    </div>
                    <MessageCircle className="w-4 h-4 text-gray-400 group-hover:text-[#25D366]" />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <MessageCircle className="w-3 h-3" />
              <span>Powered by WhatsApp Business</span>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
