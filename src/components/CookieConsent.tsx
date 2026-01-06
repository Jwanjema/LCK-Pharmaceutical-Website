import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Shield, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after 1 second delay for better UX
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Main Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#339966] rounded-xl flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-[#003366] text-lg md:text-xl font-semibold">
                        We Value Your Privacy
                      </h3>
                      <button
                        onClick={handleClose}
                        className="flex-shrink-0 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                        aria-label="Close"
                      >
                        <X className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>

                    <p className="text-gray-600 text-sm md:text-base mb-4">
                      We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. 
                      By clicking "Accept All Cookies", you consent to our use of cookies.
                      {' '}
                      <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="text-[#339966] hover:underline font-medium"
                      >
                        {showDetails ? 'Hide details' : 'Learn more'}
                      </button>
                    </p>

                    {/* Detailed Information */}
                    <AnimatePresence>
                      {showDetails && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mb-4 p-4 bg-gray-50 rounded-lg space-y-3">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-[#339966] flex-shrink-0 mt-0.5" />
                              <div>
                                <div className="text-sm font-medium text-[#003366] mb-1">Essential Cookies</div>
                                <div className="text-xs text-gray-600">
                                  Required for basic site functionality and security. Always active.
                                </div>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Shield className="w-5 h-5 text-[#339966] flex-shrink-0 mt-0.5" />
                              <div>
                                <div className="text-sm font-medium text-[#003366] mb-1">Analytics Cookies</div>
                                <div className="text-xs text-gray-600">
                                  Help us understand how visitors interact with our website to improve user experience.
                                </div>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Cookie className="w-5 h-5 text-[#339966] flex-shrink-0 mt-0.5" />
                              <div>
                                <div className="text-sm font-medium text-[#003366] mb-1">Functional Cookies</div>
                                <div className="text-xs text-gray-600">
                                  Remember your preferences and provide enhanced, personalized features.
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleAccept}
                        className="px-6 py-3 bg-gradient-to-r from-[#003366] to-[#339966] text-white rounded-lg hover:shadow-lg transition-all font-medium"
                      >
                        Accept All Cookies
                      </button>
                      <button
                        onClick={handleDecline}
                        className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-[#339966] hover:text-[#339966] transition-all font-medium"
                      >
                        Decline Optional Cookies
                      </button>
                      <button
                        onClick={handleAccept}
                        className="px-6 py-3 text-gray-600 hover:text-[#339966] transition-colors text-sm"
                      >
                        Cookie Policy
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Stripe */}
              <div className="h-1 bg-gradient-to-r from-[#003366] via-[#339966] to-[#FFC300]" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
