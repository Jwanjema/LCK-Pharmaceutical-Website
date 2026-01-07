// Web Vitals Reporting
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function reportWebVitals(onPerfEntry?: (metric: any) => void) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
}

// Custom analytics function
export function sendToAnalytics(metric: any) {
  const { name, value, id } = metric;
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${name}:`, {
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      id,
      rating: getRating(name, value)
    });
  }

  // Send to analytics service in production
  if (process.env.NODE_ENV === 'production' && typeof window.gtag !== 'undefined') {
    window.gtag('event', name, {
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      metric_id: id,
      metric_value: value,
      metric_delta: metric.delta,
    });
  }
}

// Rating helper
function getRating(name: string, value: number): string {
  const thresholds: Record<string, [number, number]> = {
    CLS: [0.1, 0.25],
    FID: [100, 300],
    LCP: [2500, 4000],
    FCP: [1800, 3000],
    TTFB: [800, 1800],
  };

  const [good, needsImprovement] = thresholds[name] || [0, 0];

  if (value <= good) return '✅ Good';
  if (value <= needsImprovement) return '⚠️ Needs Improvement';
  return '❌ Poor';
}
