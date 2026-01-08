import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X, Download, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed
    const dismissed = localStorage.getItem('newsletterDismissed');
    const lastDismissed = localStorage.getItem('newsletterDismissedDate');
    
    if (!dismissed || !lastDismissed) {
      // Show after 15 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 15000);

      return () => clearTimeout(timer);
    } else {
      // Check if 7 days have passed
      const daysPassed = (Date.now() - parseInt(lastDismissed)) / (1000 * 60 * 60 * 24);
      if (daysPassed > 7) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 15000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('newsletterDismissed', 'true');
    localStorage.setItem('newsletterDismissedDate', Date.now().toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      localStorage.setItem('newsletterSubscribed', email);
      localStorage.setItem('newsletterDismissed', 'true');
      localStorage.setItem('newsletterDismissedDate', Date.now().toString());

      // Close after success
      setTimeout(() => {
        setIsOpen(false);
        setEmail('');
        setIsSubmitted(false);
      }, 2500);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/40 z-[55] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative"
          >
            {/* Close Button - Enhanced for easier closing */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-10 w-12 h-12 md:w-10 md:h-10 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 flex items-center justify-center transition-all transform hover:scale-110 active:scale-95"
              aria-label="Close newsletter popup"
            >
              <X className="w-6 h-6 md:w-5 md:h-5 text-gray-700 font-bold" />
            </button>

            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="relative overflow-hidden h-32 bg-gradient-to-br from-[#003366] to-[#339966] p-8 flex flex-col justify-end">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                        <Download className="w-6 h-6 text-[#003366]" />
                      </div>
                      <h3 className="text-white text-xl font-bold">Free Resource</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-[#003366] text-2xl font-bold mb-2">
                    Get Regulatory Insights
                  </h2>
                  <p className="text-gray-600 mb-6 text-sm">
                    Download our exclusive guide: "Navigating Regulatory Pathways in LMICs" + stay updated with pharmaceutical policy insights
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#339966] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Complete regulatory pathway guides</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#339966] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Monthly industry trends & updates</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#339966] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Expert insights from LCK consultants</span>
                    </div>
                  </div>

                  {/* Email Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339966] focus:border-transparent transition-all"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading || !email}
                      className="w-full py-3 bg-gradient-to-r from-[#003366] to-[#339966] text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isLoading ? (
                        <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
                          ⟳
                        </motion.span>
                      ) : (
                        'Get Free Guide'
                      )}
                    </motion.button>
                  </form>

                  {/* Privacy Notice & Skip Option */}
                  <p className="text-xs text-gray-500 text-center mt-4">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                  
                  <button
                    onClick={handleClose}
                    className="w-full mt-3 py-2 text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors hover:underline"
                  >
                    Maybe later
                  </button>
                </div>
              </>
            ) : (
              /* Success State */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#339966] to-[#003366] rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-[#003366] text-xl font-bold mb-2">
                  Success!
                </h3>
                <p className="text-gray-600 mb-6">
                  Check your email for your free guide. We'll send you regulatory insights monthly.
                </p>

                <motion.button
                  onClick={handleClose}
                  className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  Close
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
