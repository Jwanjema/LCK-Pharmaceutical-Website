import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-[#003366] border-t-[#FFC300] rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#003366] to-[#339966]">
      <div className="text-center">
        <motion.div
          className="w-20 h-20 border-4 border-white border-t-[#FFC300] rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <p className="text-white text-lg">Loading page...</p>
      </div>
    </div>
  );
}
